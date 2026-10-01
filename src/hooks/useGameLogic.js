import { useState, useEffect, useCallback, useRef } from 'react';
import { triggerVictoryConfetti } from '../utils/confetti';
import {
  loadGameStats,
  saveGameStats,
  loadPlayedArchive,
  savePlayedGame,
  loadActiveGame,
  saveActiveGame
} from '../utils/storage';
import { generatePuzzleSync, generatePuzzleFromDatabase } from '../services/wordDatabaseApi';
import soundManager from '../utils/audio';

export const useGameLogic = (initialPuzzleId = null, onLevelCompletedCallback = null) => {
  const [playedArchive, setPlayedArchive] = useState(() => loadPlayedArchive());

  const [activePuzzleOverride, setActivePuzzleOverride] = useState(null);

  const [currentPuzzle, setCurrentPuzzle] = useState(() => {
    const savedActive = loadActiveGame();
    if (savedActive && savedActive.puzzle) {
      return savedActive.puzzle;
    }
    const archive = loadPlayedArchive();
    if (archive.length > 0 && archive[0].puzzle && archive[0].status === 'in_progress') {
      return archive[0].puzzle;
    }
    const newP = generatePuzzleSync(archive.length + 1);
    const initialRecord = {
      id: newP.id,
      gameNumber: archive.length + 1,
      title: newP.title,
      createdAt: new Date().toISOString(),
      puzzle: newP,
      status: 'in_progress',
      isWon: false,
      isGameOver: false,
      solvedGroups: [],
      guessHistory: [],
      mistakesRemaining: 4
    };
    savePlayedGame(initialRecord);
    return newP;
  });

  const puzzle = activePuzzleOverride || currentPuzzle;

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

  const [revealedHints, setRevealedHints] = useState([]);
  const [highlightedPair, setHighlightedPair] = useState([]);

  const shuffleArray = (arr) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const showToast = useCallback((msg, duration = 2400) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(current => (current === msg ? null : current));
    }, duration);
  }, []);

  const initPuzzle = useCallback((targetPuzzle, mode = 'classic') => {
    setGameMode(mode);
    setTimeLeft(mode === 'timed' ? 90 : 0);
    setRevealedHints([]);
    setHighlightedPair([]);
    setMistakesMade(0);

    const isSaga = !!targetPuzzle._isSaga;
    const savedActive = !isSaga ? loadActiveGame() : null;

    if (savedActive && savedActive.id === targetPuzzle.id && mode === 'classic') {
      setRemainingWords(savedActive.remainingWords || []);
      setSelectedWords([]);
      setSolvedGroups(savedActive.solvedGroups || []);
      setMistakesRemaining(savedActive.mistakesRemaining !== undefined ? savedActive.mistakesRemaining : 4);
      setGuessHistory(savedActive.guessHistory || []);
      setIsGameOver(!!savedActive.isGameOver);
      setIsWon(!!savedActive.isWon);
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

  const deselectAll = () => {
    setSelectedWords([]);
  };

  const deselectLast = () => {
    if (selectedWords.length > 0) {
      soundManager.playSelect(selectedWords.length - 1);
      setSelectedWords(prev => prev.slice(0, -1));
    }
  };

  const shuffleWords = () => {
    soundManager.playShuffle?.();
    setRemainingWords(prev => shuffleArray(prev));
  };

  const getWordColor = (word) => {
    for (const group of puzzle.groups) {
      if (group.words.includes(word)) {
        return group.color;
      }
    }
    return 'yellow';
  };

  const submitGuess = () => {
    if (selectedWords.length !== 4 || isGameOver || isWon) return;

    const sortedCurrent = [...selectedWords].sort().join(',');
    const alreadyGuessed = guessHistory.some(g => [...g.words].sort().join(',') === sortedCurrent);

    if (alreadyGuessed) {
      showToast("Combinazione già provata!");
      return;
    }

    const guessColors = selectedWords.map(w => getWordColor(w));
    const newGuessRecord = {
      words: [...selectedWords],
      colors: guessColors
    };
    const updatedHistory = [...guessHistory, newGuessRecord];
    setGuessHistory(updatedHistory);

    const matchedGroup = puzzle.groups.find(group => {
      const matchCount = selectedWords.filter(w => group.words.includes(w)).length;
      return matchCount === 4;
    });

    if (matchedGroup) {
      soundManager.playSuccess();
      const newSolved = [...solvedGroups, matchedGroup];
      const newRemaining = remainingWords.filter(w => !selectedWords.includes(w));
      setSolvedGroups(newSolved);
      setRemainingWords(newRemaining);
      setSelectedWords([]);

      if (gameMode === 'timed') {
        setTimeLeft(t => Math.min(180, t + 20));
        showToast("+20s Bonus Tempo!", 2000);
      }

      if (newSolved.length === 4) {
        setIsWon(true);
        setIsGameOver(true);
        triggerVictoryConfetti();
        soundManager.playWin?.();
        showToast("Splendido! Hai trovato tutti i collegamenti!", 3500);

        if (onLevelCompletedCallback) {
          onLevelCompletedCallback(puzzle.id, mistakesMade, gameMode);
        }

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

        if (!puzzle._isSaga) {
          savePlayedGame({
            id: puzzle.id,
            gameNumber: puzzle.gameNumber || (playedArchive.length || 1),
            title: puzzle.title,
            puzzle,
            status: 'won',
            isWon: true,
            isGameOver: true,
            solvedGroups: newSolved,
            remainingWords: [],
            guessHistory: updatedHistory,
            mistakesRemaining,
            mistakesMade
          });
          setPlayedArchive(loadPlayedArchive());
          saveActiveGame(null);
        }
      } else {
        if (!puzzle._isSaga) {
          const gameRec = {
            id: puzzle.id,
            gameNumber: puzzle.gameNumber || (playedArchive.length || 1),
            title: puzzle.title,
            puzzle,
            status: 'in_progress',
            isWon: false,
            isGameOver: false,
            solvedGroups: newSolved,
            remainingWords: newRemaining,
            guessHistory: updatedHistory,
            mistakesRemaining,
            mistakesMade
          };
          savePlayedGame(gameRec);
          setPlayedArchive(loadPlayedArchive());
          saveActiveGame(gameRec);
        }
      }
    } else {
      soundManager.playError();
      const nextMistakesMade = mistakesMade + 1;
      setMistakesMade(nextMistakesMade);

      const unsolvedGroups = puzzle.groups.filter(
        g => !solvedGroups.some(sg => sg.level === g.level)
      );

      const isOneAway = unsolvedGroups.some(g => {
        const matches = selectedWords.filter(w => g.words.includes(w)).length;
        return matches === 3;
      });

      if (isOneAway) {
        showToast("Manca solo 1! 💡", 2500);
      }

      setShakingWords([...selectedWords]);
      setTimeout(() => setShakingWords([]), 500);

      if (gameMode === 'zen') {
        return;
      }

      const newMistakes = mistakesRemaining - 1;
      setMistakesRemaining(newMistakes);

      if (newMistakes <= 0) {
        setIsGameOver(true);
        showToast("Tentativi esauriti! Ecco le soluzioni.", 3500);

        setTimeout(() => {
          setSolvedGroups([...puzzle.groups]);
          setRemainingWords([]);
          setSelectedWords([]);
        }, 1200);

        const newStats = {
          ...stats,
          played: stats.played + 1,
          currentStreak: 0,
          completedPuzzles: [...new Set([...(stats.completedPuzzles || []), puzzle.id])]
        };
        setStats(newStats);
        saveGameStats(newStats);

        if (!puzzle._isSaga) {
          savePlayedGame({
            id: puzzle.id,
            gameNumber: puzzle.gameNumber || (playedArchive.length || 1),
            title: puzzle.title,
            puzzle,
            status: 'lost',
            isWon: false,
            isGameOver: true,
            solvedGroups,
            remainingWords,
            guessHistory: updatedHistory,
            mistakesRemaining: 0,
            mistakesMade: nextMistakesMade
          });
          setPlayedArchive(loadPlayedArchive());
          saveActiveGame(null);
        }
      } else {
        if (!puzzle._isSaga) {
          const gameRec = {
            id: puzzle.id,
            gameNumber: puzzle.gameNumber || (playedArchive.length || 1),
            title: puzzle.title,
            puzzle,
            status: 'in_progress',
            isWon: false,
            isGameOver: false,
            solvedGroups,
            remainingWords,
            guessHistory: updatedHistory,
            mistakesRemaining: newMistakes,
            mistakesMade: nextMistakesMade
          };
          savePlayedGame(gameRec);
          setPlayedArchive(loadPlayedArchive());
          saveActiveGame(gameRec);
        }
      }
    }
  };

  const restartCurrentPuzzle = () => {
    initPuzzle(puzzle, gameMode);
    if (!puzzle._isSaga) {
      const allWords = puzzle.groups.flatMap(g => g.words);
      const gameRec = {
        id: puzzle.id,
        gameNumber: puzzle.gameNumber || (playedArchive.length || 1),
        title: puzzle.title,
        puzzle,
        status: 'in_progress',
        isWon: false,
        isGameOver: false,
        solvedGroups: [],
        remainingWords: allWords,
        guessHistory: [],
        mistakesRemaining: gameMode === 'zen' ? 999 : 4,
        mistakesMade: 0
      };
      savePlayedGame(gameRec);
      setPlayedArchive(loadPlayedArchive());
      saveActiveGame(gameRec);
    }
    showToast("Partita riavviata!");
  };

  const selectArchiveGame = (gameId) => {
    const archive = loadPlayedArchive();
    const entry = archive.find(g => g.id === gameId);
    if (!entry || !entry.puzzle) return;

    setActivePuzzleOverride(null);
    setCurrentPuzzle(entry.puzzle);
    setRemainingWords(
      entry.remainingWords && entry.remainingWords.length > 0
        ? entry.remainingWords
        : entry.puzzle.groups.flatMap(g => g.words).filter(w => !(entry.solvedGroups || []).some(sg => sg.words.includes(w)))
    );
    setSelectedWords([]);
    setSolvedGroups(entry.solvedGroups || []);
    setMistakesRemaining(entry.mistakesRemaining !== undefined ? entry.mistakesRemaining : 4);
    setMistakesMade(entry.mistakesMade || 0);
    setGuessHistory(entry.guessHistory || []);
    setIsGameOver(!!entry.isGameOver);
    setIsWon(!!entry.isWon);
    setRevealedHints([]);
    setHighlightedPair([]);

    if (!entry.isGameOver) {
      saveActiveGame(entry);
    }
  };

  const startCustomLevel = (customPuzzleObj, mode = 'classic') => {
    const wrapped = { ...customPuzzleObj, _isSaga: true };
    setActivePuzzleOverride(wrapped);
    initPuzzle(wrapped, mode);
  };

  const useCategoryHint = () => {
    const unsolved = puzzle.groups.filter(
      g => !solvedGroups.some(sg => sg.level === g.level) &&
           !revealedHints.some(rh => rh.category === g.category)
    );

    if (unsolved.length === 0) {
      showToast("Tutti gli indizi sono già stati svelati!");
      return false;
    }

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

  const usePairHighlightHint = () => {
    const unsolved = puzzle.groups.filter(
      g => !solvedGroups.some(sg => sg.level === g.level)
    );

    if (unsolved.length === 0) return false;

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

  const generateNewApiPuzzle = async () => {
    setIsGenerating(true);
    showToast("Interrogazione database parole in corso...", 3000);
    try {
      const currentArchive = loadPlayedArchive();
      const nextGameNum = currentArchive.length + 1;
      const newPuzzle = await generatePuzzleFromDatabase(nextGameNum);

      const allWords = newPuzzle.groups.flatMap(g => g.words);
      const initialRecord = {
        id: newPuzzle.id,
        gameNumber: nextGameNum,
        title: newPuzzle.title,
        createdAt: new Date().toISOString(),
        puzzle: newPuzzle,
        status: 'in_progress',
        isWon: false,
        isGameOver: false,
        solvedGroups: [],
        guessHistory: [],
        mistakesRemaining: 4
      };

      savePlayedGame(initialRecord);
      const updatedArchive = loadPlayedArchive();
      setPlayedArchive(updatedArchive);

      setActivePuzzleOverride(null);
      setCurrentPuzzle(newPuzzle);

      setRemainingWords(shuffleArray(allWords));
      setSelectedWords([]);
      setSolvedGroups([]);
      setMistakesRemaining(gameMode === 'zen' ? 999 : 4);
      setMistakesMade(0);
      setGuessHistory([]);
      setIsGameOver(false);
      setIsWon(false);
      setRevealedHints([]);
      setHighlightedPair([]);
      saveActiveGame({ ...initialRecord, remainingWords: allWords, selectedWords: [] });

      showToast("Nuova partita generata! Buon ragionamento.", 3000);
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
    allPuzzles: playedArchive.map(g => g.puzzle).filter(Boolean),
    playedArchive,
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
    deselectLast,
    shuffleWords,
    submitGuess,
    restartCurrentPuzzle,
    selectArchiveGame,
    selectPuzzle: selectArchiveGame,
    startCustomLevel,
    useCategoryHint,
    usePairHighlightHint,
    generateNewApiPuzzle,
    showToast
  };
};

export default useGameLogic;
