import React, { useState, useEffect } from 'react';
import CustomSvg from '../../../assets/svg/CustomSvg';
import { SCALA_DATA } from '../../../data/scalaData';
import soundManager from '../../../utils/audio';
import { triggerVictoryConfetti } from '../../../utils/confetti';
import '../../../styles/minigames.css';

export const ScalaGame = ({ onGoToMenu, onEarnHint }) => {
  const [ladderIndex, setLadderIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [inputWord, setInputWord] = useState('');
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [isLadderWon, setIsLadderWon] = useState(false);
  const [isGameCompleted, setIsGameCompleted] = useState(false);

  const currentLadder = SCALA_DATA[ladderIndex] || null;

  useEffect(() => {
    setInputWord('');
    setStepIndex(0);
    setIsLadderWon(false);
  }, [ladderIndex]);

  const currentStep = currentLadder ? currentLadder.steps[stepIndex] : null;

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (!currentStep || isLadderWon || !inputWord.trim()) return;

    const guess = inputWord.trim().toUpperCase();
    const target = currentStep.word.toUpperCase();

    if (guess === target) {
      soundManager.playSolve();
      setScore(prev => prev + 10);
      setInputWord('');

      if (stepIndex + 1 < currentLadder.steps.length) {
        setStepIndex(prev => prev + 1);
      } else {
        setIsLadderWon(true);
        soundManager.playVictory();
        triggerVictoryConfetti();
        if (onEarnHint) onEarnHint(1);
      }
    } else {
      soundManager.playMistake();
      setMistakes(prev => prev + 1);
    }
  };

  const handleNextLadder = () => {
    if (ladderIndex + 1 < SCALA_DATA.length) {
      setLadderIndex(prev => prev + 1);
      soundManager.playTileSelect();
    } else {
      setIsGameCompleted(true);
    }
  };

  const handleRestart = () => {
    setLadderIndex(0);
    setStepIndex(0);
    setInputWord('');
    setScore(0);
    setMistakes(0);
    setIsLadderWon(false);
    setIsGameCompleted(false);
    soundManager.playTileSelect();
  };

  if (!currentLadder) return null;

  return (
    <div className="minigame-screen">
      <div className="minigame-nav-bar">
        <button className="minigame-back-btn" onClick={onGoToMenu} aria-label="Torna al menu">
          <CustomSvg name="chevronLeft" type="icon" size={16} />
          <span>Menu</span>
        </button>

        <div className="minigame-header-title">
          <div className="minigame-mode-badge">
            <span style={{ fontSize: 18 }}>🪜</span>
            <span>Scala di Parole</span>
          </div>
          <span className="minigame-round-indicator">
            Scala {ladderIndex + 1} di {SCALA_DATA.length}
          </span>
        </div>

        <div className="minigame-stats-pill">
          <span className="stat-label">Punti</span>
          <span className="stat-value">{score}</span>
        </div>
      </div>

      <div className="minigame-card-container">
        {!isGameCompleted ? (
          <div className="scala-play-card">
            <div className="scala-header-info">
              <span className="scala-theme-tag">
                Da {currentLadder.startWord} a {currentLadder.endWord}
              </span>
              <p className="scala-subtext">
                Cambia 1 sola lettera per salire ogni gradino, seguendo la definizione:
              </p>
            </div>

            <div className="scala-ladder-column">
              <div className="ladder-rung start-rung">
                <span className="rung-tag">Partenza</span>
                <div className="rung-word-boxes">
                  {currentLadder.startWord.split('').map((char, i) => (
                    <span key={i} className="letter-cell">{char}</span>
                  ))}
                </div>
              </div>

              {currentLadder.steps.map((step, idx) => {
                const isSolved = idx < stepIndex || isLadderWon;
                const isCurrent = idx === stepIndex && !isLadderWon;

                return (
                  <div
                    key={idx}
                    className={`ladder-rung ${isSolved ? 'solved-rung' : ''} ${isCurrent ? 'current-rung' : 'future-rung'}`}
                  >
                    <div className="rung-meta-row">
                      <span className="rung-step-idx">Gradino {idx + 1}</span>
                      <span className="rung-clue-text">{step.clue}</span>
                    </div>

                    <div className="rung-word-boxes">
                      {isSolved ? (
                        step.word.split('').map((char, i) => (
                          <span
                            key={i}
                            className={`letter-cell ${i === step.changedIndex ? 'changed-letter' : ''}`}
                          >
                            {char}
                          </span>
                        ))
                      ) : (
                        step.word.split('').map((_, i) => (
                          <span key={i} className="letter-cell placeholder">?</span>
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {!isLadderWon && currentStep && (
              <form className="scala-input-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="scala-input"
                  placeholder={`Scrivi la parola di ${currentStep.word.length} lettere...`}
                  value={inputWord}
                  onChange={(e) => setInputWord(e.target.value.toUpperCase())}
                  maxLength={currentStep.word.length}
                  autoFocus
                />
                <button
                  type="submit"
                  className="scala-submit-btn"
                  disabled={inputWord.length !== currentStep.word.length}
                >
                  <span>Verifica</span>
                  <CustomSvg name="check" type="icon" size={16} />
                </button>
              </form>
            )}

            {isLadderWon && (
              <div className="scala-victory-box">
                <div className="victory-badge">🎉 Hai completato la scala!</div>
                <button className="scala-next-btn" onClick={handleNextLadder}>
                  <span>Prossima Scala</span>
                  <CustomSvg name="chevronRight" type="icon" size={16} />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="minigame-result-card">
            <div className="result-icon-circle">
              <CustomSvg name="trophy" type="emoji" size={44} />
            </div>
            <h3 className="result-title">Tutte le Scale Completate!</h3>
            <p className="result-desc">
              Hai scalato tutti i percorsi lessicali con {score} punti e {mistakes} errori.
            </p>

            <div className="result-actions-row">
              <button className="result-btn-secondary" onClick={handleRestart}>
                <CustomSvg name="refresh" type="icon" size={16} />
                <span>Rigioca</span>
              </button>
              <button className="result-btn-primary" onClick={onGoToMenu}>
                <span>Torna al Menu</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScalaGame;
