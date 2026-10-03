import React, { useState, useEffect } from 'react';
import CustomSvg from '../../../assets/svg/CustomSvg';
import { CATENA_DATA } from '../../../data/catenaData';
import soundManager from '../../../utils/audio';
import { triggerVictoryConfetti } from '../../../utils/confetti';
import '../../../styles/minigames.css';

export const CatenaGame = ({ onGoToMenu, onEarnHint }) => {
  const [chainIndex, setChainIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(1);
  const [mistakes, setMistakes] = useState(0);
  const [score, setScore] = useState(0);
  const [isChainWon, setIsChainWon] = useState(false);
  const [isGameCompleted, setIsGameCompleted] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  const currentChain = CATENA_DATA[chainIndex] || null;

  useEffect(() => {
    if (!currentChain) return;
    const currentStep = currentChain.steps[stepIndex];
    if (!currentStep) return;

    if (currentStep.distractor) {
      const opts = [
        { word: currentStep.word, isCorrect: true },
        { word: currentStep.distractor, isCorrect: false }
      ].sort(() => 0.5 - Math.random());
      setShuffledOptions(opts);
    }
  }, [chainIndex, stepIndex, currentChain]);

  const handleSelectOption = (opt) => {
    if (isChainWon || !currentChain) return;

    if (opt.isCorrect) {
      soundManager.playSolve();
      setScore(prev => prev + 10);

      if (stepIndex + 1 < currentChain.steps.length - 1) {
        setStepIndex(prev => prev + 1);
      } else {
        setIsChainWon(true);
        soundManager.playVictory();
        triggerVictoryConfetti();
        if (onEarnHint) onEarnHint(1);
      }
    } else {
      soundManager.playMistake();
      setMistakes(prev => prev + 1);
    }
  };

  const handleNextChain = () => {
    if (chainIndex + 1 < CATENA_DATA.length) {
      setChainIndex(prev => prev + 1);
      setStepIndex(1);
      setIsChainWon(false);
      soundManager.playTileSelect();
    } else {
      setIsGameCompleted(true);
    }
  };

  const handleRestart = () => {
    setChainIndex(0);
    setStepIndex(1);
    setMistakes(0);
    setScore(0);
    setIsChainWon(false);
    setIsGameCompleted(false);
    soundManager.playTileSelect();
  };

  if (!currentChain) return null;

  return (
    <div className="minigame-screen">
      <div className="minigame-nav-bar">
        <button className="minigame-back-btn" onClick={onGoToMenu} aria-label="Torna al menu">
          <CustomSvg name="chevronLeft" type="icon" size={16} />
          <span>Menu</span>
        </button>

        <div className="minigame-header-title">
          <div className="minigame-mode-badge">
            <span style={{ fontSize: 18 }}>🔗</span>
            <span>La Catena di Parole</span>
          </div>
          <span className="minigame-round-indicator">
            Catena {chainIndex + 1} di {CATENA_DATA.length}
          </span>
        </div>

        <div className="minigame-stats-pill">
          <span className="stat-label">Punti</span>
          <span className="stat-value">{score}</span>
        </div>
      </div>

      <div className="minigame-card-container">
        {!isGameCompleted ? (
          <div className="catena-play-card">
            <div className="catena-header-info">
              <span className="catena-theme-tag">{currentChain.title}</span>
              <p className="catena-subtext">Scegli la parola che completa l'anello successivo della catena:</p>
            </div>

            <div className="catena-sequence-list">
              {currentChain.steps.map((step, idx) => {
                const isRevealed = idx === 0 || idx <= stepIndex || (idx === currentChain.steps.length - 1 && isChainWon);
                const isTarget = idx === stepIndex && !isChainWon;
                const isLast = idx === currentChain.steps.length - 1;

                return (
                  <div
                    key={idx}
                    className={`catena-step-node ${isRevealed ? 'revealed' : 'locked'} ${isTarget ? 'active-target' : ''}`}
                  >
                    <div className="node-badge">{idx + 1}</div>
                    <div className="node-word">
                      {isRevealed ? step.word : (isLast ? step.word : '• • • •')}
                    </div>
                    {idx < currentChain.steps.length - 1 && (
                      <div className={`node-connector ${idx < stepIndex || isChainWon ? 'filled' : ''}`} />
                    )}
                  </div>
                );
              })}
            </div>

            {!isChainWon ? (
              <div className="catena-choice-section">
                <span className="choice-prompt">Quale parola si collega?</span>
                <div className="catena-options-grid">
                  {shuffledOptions.map((opt, idx) => (
                    <button
                      key={idx}
                      className="catena-option-btn"
                      onClick={() => handleSelectOption(opt)}
                    >
                      <span>{opt.word}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="catena-victory-box">
                <div className="victory-badge">🎉 Catena Conclusa con Successo!</div>
                <button className="catena-next-btn" onClick={handleNextChain}>
                  <span>Prossima Catena</span>
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
            <h3 className="result-title">Tutte le Catene Risolte!</h3>
            <p className="result-desc">
              Hai completato la serie di catene lessicali totalizzando {score} punti con {mistakes} errori.
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

export default CatenaGame;
