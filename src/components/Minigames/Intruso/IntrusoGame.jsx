import React, { useState, useEffect, useCallback } from 'react';
import CustomSvg from '../../../assets/svg/CustomSvg';
import { ITALIAN_CATEGORY_REGISTRY } from '../../../services/wordDatabaseApi';
import soundManager from '../../../utils/audio';
import { triggerVictoryConfetti } from '../../../utils/confetti';
import '../../../styles/minigames.css';

export const IntrusoGame = ({ onGoToMenu, onEarnHint }) => {
  const [roundIndex, setRoundIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [currentRound, setCurrentRound] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isGameCompleted, setIsGameCompleted] = useState(false);

  const generateRound = useCallback(() => {
    const allTiers = ['yellow', 'green', 'blue', 'purple'];
    const allCats = allTiers.flatMap(t => ITALIAN_CATEGORY_REGISTRY[t] || []);
    const validCats = allCats.filter(c => c.seeds && c.seeds.length >= 3);
    if (validCats.length < 2) return null;

    const mainIdx = Math.floor(Math.random() * validCats.length);
    const mainCat = validCats[mainIdx];

    let otherIdx = Math.floor(Math.random() * validCats.length);
    while (otherIdx === mainIdx) {
      otherIdx = Math.floor(Math.random() * validCats.length);
    }
    const otherCat = validCats[otherIdx];

    const shuffledSeeds = [...mainCat.seeds].sort(() => 0.5 - Math.random());
    const threeWords = shuffledSeeds.slice(0, 3);

    const intruderSeeds = otherCat.seeds.filter(w => !mainCat.seeds.includes(w));
    const intruderWord = intruderSeeds[Math.floor(Math.random() * intruderSeeds.length)] || otherCat.seeds[0];

    const options = [
      { word: threeWords[0], isIntruder: false },
      { word: threeWords[1], isIntruder: false },
      { word: threeWords[2], isIntruder: false },
      { word: intruderWord, isIntruder: true }
    ].sort(() => 0.5 - Math.random());

    return {
      category: mainCat.name,
      emoji: mainCat.emoji || 'target',
      options,
      intruderWord
    };
  }, []);

  const startNewGame = useCallback(() => {
    setRoundIndex(0);
    setScore(0);
    setMistakes(0);
    setIsGameCompleted(false);
    setSelectedWord(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setCurrentRound(generateRound());
  }, [generateRound]);

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  const handleSelectOption = (opt) => {
    if (isAnswered || isGameCompleted) return;

    setSelectedWord(opt.word);
    setIsAnswered(true);

    if (opt.isIntruder) {
      setIsCorrect(true);
      setScore(s => s + 1);
      soundManager.playSolve();

      setTimeout(() => {
        if (roundIndex + 1 >= 5) {
          setIsGameCompleted(true);
          triggerVictoryConfetti();
          if (onEarnHint) onEarnHint(1);
        } else {
          setRoundIndex(r => r + 1);
          setSelectedWord(null);
          setIsAnswered(false);
          setIsCorrect(false);
          setCurrentRound(generateRound());
        }
      }, 1200);
    } else {
      setIsCorrect(false);
      setMistakes(m => m + 1);
      soundManager.playMistake();

      setTimeout(() => {
        setSelectedWord(null);
        setIsAnswered(false);
        setIsCorrect(false);
      }, 900);
    }
  };

  if (!currentRound) return null;

  return (
    <div className="minigame-screen">
      <header className="minigame-nav-bar">
        <button className="minigame-back-btn" onClick={onGoToMenu}>
          <CustomSvg name="chevronLeft" type="icon" size={18} />
          <span>Menu</span>
        </button>

        <div className="minigame-header-title">
          <span className="minigame-mode-badge">
            <span className="bento-dot dot-amber" />
            Caccia all'Intruso
          </span>
          <span className="minigame-round-indicator">
            Round {roundIndex + 1} di 5
          </span>
        </div>

        <div className="minigame-stats-pill">
          <span className="stat-label">Punteggio</span>
          <span className="stat-value">{score}</span>
        </div>
      </header>

      <div className="minigame-card-container">
        {isGameCompleted ? (
          <div className="minigame-result-card">
            <div className="result-icon-box icon-amber">
              <CustomSvg name="trophy" type="emoji" size={48} />
            </div>
            <h2 className="result-title">Sfida Completata!</h2>
            <p className="result-desc">
              Hai scovato tutti gli intrusi con successo ({score} corretti, {mistakes} {mistakes === 1 ? 'errore' : 'errori'}).
            </p>
            <div className="result-reward-pill">
              <CustomSvg name="sparkle" type="emoji" size={18} />
              <span>+1 Gettone Aiuto Guadagnato!</span>
            </div>
            <div className="result-actions">
              <button className="minigame-action-btn primary" onClick={startNewGame}>
                <CustomSvg name="refresh" type="icon" size={16} />
                <span>Gioca Ancora</span>
              </button>
              <button className="minigame-action-btn outline" onClick={onGoToMenu}>
                <span>Torna al Menu</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="intruso-play-card">
            <div className="intruso-card-header">
              <div className="intruso-prompt-text">
                Tre parole condividono un legame segreto. Trova l'<strong>intruso</strong> che non c'entra!
              </div>
              <div className="intruso-round-dots">
                {[0, 1, 2, 3, 4].map(idx => (
                  <span
                    key={idx}
                    className={`round-dot ${idx < roundIndex ? 'completed' : idx === roundIndex ? 'current' : ''}`}
                  />
                ))}
              </div>
            </div>

            {isAnswered && isCorrect && (
              <div className="intruso-revealed-banner">
                <span className="revealed-icon">🎯</span>
                <span>Gruppo: <strong>{currentRound.category}</strong>!</span>
              </div>
            )}

            <div className="intruso-options-grid">
              {currentRound.options.map((opt, idx) => {
                const isSelected = selectedWord === opt.word;
                let statusClass = '';
                if (isAnswered) {
                  if (opt.isIntruder && (isSelected || isCorrect)) {
                    statusClass = 'correct-intruder';
                  } else if (isSelected && !opt.isIntruder) {
                    statusClass = 'wrong-intruder';
                  } else if (isCorrect && !opt.isIntruder) {
                    statusClass = 'linked-group';
                  }
                }

                return (
                  <button
                    key={idx}
                    className={`intruso-option-card ${statusClass}`}
                    onClick={() => handleSelectOption(opt)}
                    disabled={isAnswered}
                  >
                    <span className="option-word">{opt.word}</span>
                    {statusClass === 'correct-intruder' && (
                      <span className="intruder-flag">INTRUSO!</span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="intruso-footer-hint">
              <span>Tocca la parola che ritieni estranea alle altre tre.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntrusoGame;
