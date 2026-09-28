import { useState, useEffect, useCallback, useRef } from 'react';
import { PUZZLES } from '../data/puzzles';
import { triggerVictoryConfetti } from '../utils/confetti';
import { loadGameStats, saveGameStats, loadPuzzleState, savePuzzleState } from '../utils/storage';
import { generatePuzzleFromDatabase } from '../services/wordDatabaseApi';
import soundManager from '../utils/audio';

export const useGameLogic = (initialPuzzleId = 1, onLevelCompletedCallback = null) => {
  const [allPuzzles, setAllPuzzles] = useState(() => {
    try {
      const savedCustom = localStorage.getItem('intrecci_custom_puzzles');
      if (savedCustom) {
        const parsed = JSON.parse(savedCustom);
        return [...PUZZLES, ...parsed];
      }
    } catch (e) {
      console.error('Error loading custom puzzles:', e);
    }
    return PUZZLES;
  });

  const [currentPuzzleId, setCurrentPuzzleId] = useState(initialPuzzleId);
  const [activePuzzleOverride, setActivePuzzleOverride] = useState(null);

  // Active puzzle is either override (e.g. from Saga) or found from allPuzzles
  const puzzle = activePuzzleOverride || allPuzzles.find(p => p.id === currentPuzzleId) || allPuzzles[0];

  // Game Mode: 'classic' (4 mistakes) | 'timed' (90s + 20s bonus) | 'zen' (infinite mistakes)
  const [gameMode, setGameMode] = useState('classic');
  const [timeLeft, setTimeLeft] = useState(90);
  const timerRef = useRef(null);

  const [remainingWords, setRemainingWords] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [solvedGroups, setSolvedGroups] = useState([]);
  const [mistakesRemaining, setMistakesRemaining] = useState(4);
  const [mistakesMade, setMistakesMade] = useState(0);
  const [guessHistory, setGuessHistory] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [shakingWords, setShakingWords] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [stats, setStats] = useState(loadGameStats);

  // Hint states
  const [revealedHints, setRevealedHints] = useState([]); // array of group hint objects
  const [highlightedPair, setHighlightedPair] = useState([]); // array of 2 words glowing

  // Helper to shuffle an array
  const shuffleArray = (arr) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  // Toast notification helper
  const showToast = useCallback((msg, duration = 2400) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(current => (current === msg ? null : current));
    }, duration);
  }, []);

  // Initialize or load puzzle state
  const initPuzzle = useCallback((targetPuzzle, mode = 'classic') => {
    setGameMode(mode);
    setTimeLeft(mode === 'timed' ? 90 : 0);
    setRevealedHints([]);
    setHighlightedPair([]);
    setMistakesMade(0);

    // Only load saved state for standard classic puzzles not saga overrides
    const isOverride = targetPuzzle._isSaga;
    const saved = !isOverride ? loadPuzzleState(targetPuzzle.id) : null;

    if (saved && mode === 'classic') {
      setRemainingWords(saved.remainingWords);
      setSelectedWords([]);
      setSolvedGroups(saved.solvedGroups);
      setMistakesRemaining(saved.mistakesRemaining);
      setGuessHistory(saved.guessHistory);
      setIsGameOver(saved.isGameOver);
      setIsWon(saved.isWon);
    } else {
      const allWords = targetPuzzle.groups.flatMap(g => g.words);
      setRemainingWords(shuffleArray(allWords));
      setSelectedWords([]);
      setSolvedGroups([]);
      setMistakesRemaining(mode === 'zen' ? 999 : 4);
      setGuessHistory([]);
      setIsGameOver(false);
      setIsWon(false);
    }
    setShakingWords([]);
  }, []);

  useEffect(() => {
    initPuzzle(puzzle, gameMode);
  }, [puzzle.id, initPuzzle]);

  // Timed Mode Interval
  useEffect(() => {
    if (gameMode === 'timed' && !isGameOver && !isWon) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsGameOver(true);
            showToast("Tempo scaduto! ⌛ Ecco le soluzioni.", 3500);
            setTimeout(() => {
              setSolvedGroups([...puzzle.groups]);
              setRemainingWords([]);
              setSelectedWords([]);
            }, 1000);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [gameMode, isGameOver, isWon, puzzle.groups, showToast]);

  // Persist standard puzzle state on changes
  useEffect(() => {
    if (!puzzle._isSaga && (remainingWords.length > 0 || solvedGroups.length > 0)) {
      savePuzzleState(puzzle.id, {
        remainingWords,
        solvedGroups,
        mistakesRemaining,
        guessHistory,
        isGameOver,
        isWon
      });
    }
  }, [puzzle.id, puzzle._isSaga, remainingWords, solvedGroups, mistakesRemaining, guessHistory, isGameOver, isWon]);

  // Word selection toggle
  const toggleWordSelect = (word) => {
    if (isGameOver || isWon) return;

    if (selectedWords.includes(word)) {
      soundManager.playSelect(selectedWords.length - 1);
      setSelectedWords(prev => prev.filter(w => w !== word));
    } else {
      if (selectedWords.length >= 4) {
        showToast("Puoi selezionare massimo 4 parole!");
        return;
      }
      soundManager.playSelect(selectedWords.length + 1);
      setSelectedWords(prev => [...prev, word]);
    }
  };

  // Deselect all
  const deselectAll = () => {
    setSelectedWords([]);
  };

  // Shuffle remaining words on board
  const shuffleWords = () => {
    setRemainingWords(prev => shuffleArray(prev));
  };

  // Find which group a word belongs to
  const getWordColor = (word) => {
    for (const group of puzzle.groups) {
      if (group.words.includes(word)) {
        return group.color;
      }
    }
    return 'yellow';
  };

  // Check guess
  const submitGuess = () => {
    if (selectedWords.length !== 4 || isGameOver || isWon) return;

    // Check if duplicate guess
    const sortedCurrent = [...selectedWords].sort().join(',');
    const alreadyGuessed = guessHistory.some(g => [...g.words].sort().join(',') === sortedCurrent);
    if (alreadyGuessed) {
      showToast("Combinazione già provata!");
      return;
    }

    // Determine colors of each word in the guess
    const guessColors = selectedWords.map(w => getWordColor(w));
    const newGuessRecord = {
      words: [...selectedWords],
      colors: guessColors
    };
    const updatedHistory = [...guessHistory, newGuessRecord];
    setGuessHistory(updatedHistory);

    // Check if all 4 words belong to the exact same group
    const matchedGroup = puzzle.groups.find(group => {
      const matchCount = selectedWords.filter(w => group.words.includes(w)).length;
      return matchCount === 4;
    });

    if (matchedGroup) {
      // SUCCESS: Group found
      soundManager.playSuccess();
      const newSolved = [...solvedGroups, matchedGroup];
      setSolvedGroups(newSolved);
      setRemainingWords(prev => prev.filter(w => !selectedWords.includes(w)));
      setSelectedWords([]);

      // In Timed mode: add +20 seconds bonus!
      if (gameMode === 'timed') {
        setTimeLeft(t => Math.min(180, t + 20));
        showToast("+20s Bonus Tempo!", 2000);
      }

      // Check if all groups are solved
      if (newSolved.length === 4) {
        setIsWon(true);
        setIsGameOver(true);
        triggerVictoryConfetti();
        showToast("Splendido! Hai trovato tutti i collegamenti!", 3500);

        // Notify callback (e.g. for saga level progression)
        if (onLevelCompletedCallback) {
          onLevelCompletedCallback(puzzle.id, mistakesMade, gameMode);
        }

        // Update stats
        const newStats = {
          ...stats,
          played: stats.played + 1,
          won: stats.won + 1,
          currentStreak: stats.currentStreak + 1,
          maxStreak: Math.max(stats.maxStreak, stats.currentStreak + 1),
          completedPuzzles: [...new Set([...(stats.completedPuzzles || []), puzzle.id])]
        };
        setStats(newStats);
        saveGameStats(newStats);
      }
    } else {
      // MISTAKE
      soundManager.playError();
      setMistakesMade(prev => prev + 1);

      // Check if "One away" (3 of 4 match an unsolved group)
      const unsolvedGroups = puzzle.groups.filter(
        g => !solvedGroups.some(sg => sg.level === g.level)
      );

      const isOneAway = unsolvedGroups.some(g => {
        const matches = selectedWords.filter(w => g.words.includes(w)).length;
        return matches === 3;
      });

      if (isOneAway) {
        showToast("Manca solo 1!");
      }

      // Shake selected tiles
      setShakingWords([...selectedWords]);
      setTimeout(() => setShakingWords([]), 500);

      // In Zen mode: mistakes are unlimited
      if (gameMode === 'zen') {
        return;
      }

      // In Classic / Timed mode: decrement mistakes remaining
      const newMistakes = mistakesRemaining - 1;
      setMistakesRemaining(newMistakes);

      if (newMistakes <= 0) {
        // Game Over - reveal remaining groups
        setIsGameOver(true);
        showToast("Tentativi esauriti! Ecco le soluzioni.", 3500);

        setTimeout(() => {
          setSolvedGroups([...puzzle.groups]);
          setRemainingWords([]);
          setSelectedWords([]);
        }, 1200);

        // Update stats
        const newStats = {
          ...stats,
          played: stats.played + 1,
          currentStreak: 0,
          completedPuzzles: [...new Set([...(stats.completedPuzzles || []), puzzle.id])]
        };
        setStats(newStats);
        saveGameStats(newStats);
      }
    }
  };

  // Restart current puzzle
  const restartCurrentPuzzle = () => {
    if (!puzzle._isSaga) {
      localStorage.removeItem(`intrecci_game_puzzle_${puzzle.id}`);
    }
    initPuzzle(puzzle, gameMode);
    showToast("Partita riavviata!");
  };

  // Switch puzzle
  const selectPuzzle = (id, mode = 'classic') => {
    setActivePuzzleOverride(null);
    setCurrentPuzzleId(id);
    setGameMode(mode);
  };

  // Load custom puzzle object (e.g. from Saga Level)
  const startCustomLevel = (customPuzzleObj, mode = 'classic') => {
    const wrapped = { ...customPuzzleObj, _isSaga: true };
    setActivePuzzleOverride(wrapped);
    initPuzzle(wrapped, mode);
  };

  // Hint: Tier 1 - Reveal category clue for an unsolved group
  const useCategoryHint = () => {
    const unsolved = puzzle.groups.filter(
      g => !solvedGroups.some(sg => sg.level === g.level) &&
           !revealedHints.some(rh => rh.category === g.category)
    );

    if (unsolved.length === 0) {
      showToast("Tutti gli indizi sono già stati svelati!");
      return false;
    }

    // Pick first unsolved group
    const target = unsolved[0];
    const hintText = target.hint || `Categoria: ${target.category}`;
    setRevealedHints(prev => [...prev, {
      category: target.category,
      color: target.color,
      hint: hintText
    }]);

    soundManager.playMagic?.() || soundManager.playSelect(4);
    showToast(`Indizio: "${hintText}"`, 4000);
    return true;
  };

  // Hint: Tier 2 - Highlight 2 connected words in gold
  const usePairHighlightHint = () => {
    const unsolved = puzzle.groups.filter(
      g => !solvedGroups.some(sg => sg.level === g.level)
    );

    if (unsolved.length === 0) return false;

    // Pick unsolved group and find 2 words currently on board
    for (const grp of unsolved) {
      const available = grp.words.filter(w => remainingWords.includes(w));
      if (available.length >= 2) {
        const pair = [available[0], available[1]];
        setHighlightedPair(pair);
        soundManager.playMagic?.() || soundManager.playSelect(4);
        showToast("Due parole collegate illuminate d'oro!", 3000);

        setTimeout(() => {
          setHighlightedPair([]);
        }, 7000);
        return true;
      }
    }
    return false;
  };

  // Generate new puzzle dynamically using Italian Word Database API
  const generateNewApiPuzzle = async () => {
    setIsGenerating(true);
    showToast("Interrogazione database parole in corso...", 3000);
    try {
      const newPuzzle = await generatePuzzleFromDatabase(allPuzzles.length);
      const updatedPuzzles = [...allPuzzles, newPuzzle];
      setAllPuzzles(updatedPuzzles);

      // Save custom puzzles to localStorage
      const customOnes = updatedPuzzles.filter(p => p.id > PUZZLES.length);
      localStorage.setItem('intrecci_custom_puzzles', JSON.stringify(customOnes));

      // Switch to new puzzle
      setActivePuzzleOverride(null);
      setCurrentPuzzleId(newPuzzle.id);
      showToast("Nuovo enigma generato con successo!", 3000);
      return newPuzzle;
    } catch (err) {
      console.error('Errore generazione:', err);
      showToast("Errore durante la generazione dell'enigma.");
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    puzzle,
    allPuzzles,
    gameMode,
    timeLeft,
    remainingWords,
    selectedWords,
    solvedGroups,
    mistakesRemaining,
    mistakesMade,
    maxMistakes: gameMode === 'zen' ? Infinity : 4,
    guessHistory,
    isGameOver,
    isWon,
    shakingWords,
    revealedHints,
    highlightedPair,
    toastMessage,
    isGenerating,
    stats,
    toggleWordSelect,
    deselectAll,
    shuffleWords,
    submitGuess,
    restartCurrentPuzzle,
    selectPuzzle,
    startCustomLevel,
    useCategoryHint,
    usePairHighlightHint,
    generateNewApiPuzzle,
    showToast
  };
};

export default useGameLogic;
