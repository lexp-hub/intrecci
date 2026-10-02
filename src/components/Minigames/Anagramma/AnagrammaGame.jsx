import React, { useState, useEffect, useCallback } from 'react';
import CustomSvg from '../../../assets/svg/CustomSvg';
import { ITALIAN_CATEGORY_REGISTRY } from '../../../services/wordDatabaseApi';
import soundManager from '../../../utils/audio';
import { triggerVictoryConfetti } from '../../../utils/confetti';
import '../../../styles/minigames.css';

export const AnagrammaGame = ({ onGoToMenu, onEarnHint }) => {
  const [roundIndex, setRoundIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');
  const [availableLetters, setAvailableLetters] = useState([]);
  const [placedLetters, setPlacedLetters] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isGameCompleted, setIsGameCompleted] = useState(false);

  const generateAnagram = useCallback(() => {
    const allTiers = ['yellow', 'green', 'blue', 'purple'];
    const allCats = allTiers.flatMap(t => ITALIAN_CATEGORY_REGISTRY[t] || []);
    const validCats = allCats.filter(c => c.seeds && c.seeds.some(w => w.length >= 4 && w.length <= 7));
    if (validCats.length === 0) return null;

    const cat = validCats[Math.floor(Math.random() * validCats.length)];
    const validWords = cat.seeds.filter(w => w.length >= 4 && w.length <= 7);
    const word = validWords[Math.floor(Math.random() * validWords.length)];

    const letterObjs = word.split('').map((char, index) => ({
      id: `${char}_${index}_${Math.random()}`,
      char
    }));

    const shuffled = [...letterObjs].sort(() => 0.5 - Math.random());

    return {
      word,
      category: cat.name,
      letters: shuffled
    };
  }, []);

  const startNewRound = useCallback(() => {
    const next = generateAnagram();
    if (next) {
      setCurrentWord(next.word);
      setCurrentCategory(next.category);
      setAvailableLetters(next.letters);
      setPlacedLetters([]);
      setIsAnswered(false);
      setIsCorrect(false);
    }
  }, [generateAnagram]);

  const startNewGame = useCallback(() => {
    setRoundIndex(0);
    setScore(0);
    setIsGameCompleted(false);
    startNewRound();
  }, [startNewRound]);

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  const handlePlaceLetter = (letterObj) => {
    if (isAnswered || isGameCompleted) return;
    setAvailableLetters(prev => prev.filter(l => l.id !== letterObj.id));
    setPlacedLetters(prev => [...prev, letterObj]);
    soundManager.playTileSelect();
  };

  const handleRemoveLetter = (letterObj) => {
    if (isAnswered || isGameCompleted) return;
    setPlacedLetters(prev => prev.filter(l => l.id !== letterObj.id));
    setAvailableLetters(prev => [...prev, letterObj]);
    soundManager.playTileDeselect();
  };

  const handleShuffleAvailable = () => {
    setAvailableLetters(prev => [...prev].sort(() => 0.5 - Math.random()));
  };

  const handleClear = () => {
    if (isAnswered) return;
    setAvailableLetters(prev => [...prev, ...placedLetters]);
    setPlacedLetters([]);
  };

  useEffect(() => {
    if (placedLetters.length === currentWord.length && currentWord.length > 0) {
      const spelled = placedLetters.map(l => l.char).join('');
      if (spelled === currentWord) {
        setIsAnswered(true);
        setIsCorrect(true);
        setScore(s => s + 1);
        soundManager.playSolve();

        setTimeout(() => {
          if (roundIndex + 1 >= 3) {
            setIsGameCompleted(true);
            triggerVictoryConfetti();
            if (onEarnHint) onEarnHint(1);
          } else {
            setRoundIndex(r => r + 1);
            startNewRound();
          }
        }, 1300);
      } else {
        soundManager.playMistake();
        setTimeout(() => {
          handleClear();
        }, 600);
      }
    }
  }, [placedLetters, currentWord]);

  return (
    <div className="minigame-screen">
      <header className="minigame-nav-bar">
        <button className="minigame-back-btn" onClick={onGoToMenu}>
          <CustomSvg name="chevronLeft" type="icon" size={18} />
          <span>Menu</span>
        </button>

        <div className="minigame-header-title">
          <span className="minigame-mode-badge">
            <span className="bento-dot dot-purple" />
            Anagramma Espresso
          </span>
          <span className="minigame-round-indicator">
            Parola {roundIndex + 1} di 3
          </span>
        </div>

        <div className="minigame-stats-pill">
          <span className="stat-label">Completate</span>
          <span className="stat-value">{score}/3</span>
        </div>
      </header>

      <div className="minigame-card-container">
        {isGameCompleted ? (
          <div className="minigame-result-card">
            <div className="result-icon-box icon-purple">
              <CustomSvg name="sparkle" type="emoji" size={48} />
            </div>
            <h2 className="result-title">Anagrammi Risolti!</h2>
            <p className="result-desc">
              Hai ricostruito tutte e 3 le parole italiane con successo!
            </p>
            <div className="result-reward-pill">
              <CustomSvg name="sparkle" type="emoji" size={18} />
              <span>+1 Gettone Aiuto Guadagnato!</span>
            </div>
            <div className="result-actions">
              <button className="minigame-action-btn primary" onClick={startNewGame}>
                <CustomSvg name="refresh" type="icon" size={16} />
                <span>Altre Parole</span>
              </button>
              <button className="minigame-action-btn outline" onClick={onGoToMenu}>
                <span>Torna al Menu</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="anagramma-play-card">
            <div className="anagramma-clue-banner">
              <span className="clue-tag">Indizio Tema</span>
              <span className="clue-text">{currentCategory}</span>
            </div>

            <div className="anagramma-slots-row">
              {Array.from({ length: currentWord.length }).map((_, idx) => {
                const placed = placedLetters[idx];
                return (
                  <button
                    key={idx}
                    className={`anagram-slot-tile ${placed ? 'filled' : 'empty'} ${isCorrect ? 'correct-flash' : ''}`}
                    onClick={() => placed && handleRemoveLetter(placed)}
                  >
                    {placed ? placed.char : ''}
                  </button>
                );
              })}
            </div>

            <div className="anagramma-letters-bank">
              {availableLetters.map((lObj) => (
                <button
                  key={lObj.id}
                  className="anagram-source-tile"
                  onClick={() => handlePlaceLetter(lObj)}
                >
                  {lObj.char}
                </button>
              ))}
            </div>

            <div className="anagramma-controls">
              <button className="anagram-action-btn" onClick={handleShuffleAvailable} disabled={availableLetters.length === 0}>
                <CustomSvg name="shuffle" type="icon" size={16} />
                <span>Mescola</span>
              </button>
              <button className="anagram-action-btn" onClick={handleClear} disabled={placedLetters.length === 0}>
                <CustomSvg name="deselect" type="icon" size={16} />
                <span>Cancella</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnagrammaGame;
