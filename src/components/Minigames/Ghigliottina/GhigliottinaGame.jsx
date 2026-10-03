import React, { useState, useEffect, useCallback } from 'react';
import CustomSvg from '../../../assets/svg/CustomSvg';
import { GHIGLIOTTINA_DATA } from '../../../data/ghigliottinaData';
import soundManager from '../../../utils/audio';
import { triggerVictoryConfetti } from '../../../utils/confetti';
import '../../../styles/minigames.css';

export const GhigliottinaGame = ({ onGoToMenu, onEarnHint }) => {
  const [roundIndex, setRoundIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [inputVal, setInputVal] = useState('');
  const [revealedChars, setRevealedChars] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isGameCompleted, setIsGameCompleted] = useState(false);
  const [gamePool, setGamePool] = useState([]);

  useEffect(() => {
    const shuffled = [...GHIGLIOTTINA_DATA].sort(() => 0.5 - Math.random()).slice(0, 5);
    setGamePool(shuffled);
    setRoundIndex(0);
    setScore(0);
    setMistakes(0);
    setIsGameCompleted(false);
    setInputVal('');
    setRevealedChars(0);
    setIsAnswered(false);
  }, []);

  const currentRound = gamePool[roundIndex] || null;

  const handleRevealLetter = () => {
    if (!currentRound || isAnswered) return;
    if (revealedChars < currentRound.word.length - 1) {
      setRevealedChars(prev => prev + 1);
      soundManager.playTileSelect();
    }
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (!currentRound || isAnswered || !inputVal.trim()) return;

    const cleanInput = inputVal.trim().toUpperCase();
    const correctWord = currentRound.word.toUpperCase();

    setIsAnswered(true);

    if (cleanInput === correctWord) {
      setIsCorrect(true);
      const points = Math.max(10 - revealedChars * 2, 4);
      setScore(prev => prev + points);
      soundManager.playSolve();
    } else {
      setIsCorrect(false);
      setMistakes(prev => prev + 1);
      soundManager.playMistake();
    }
  };

  const handleNextRound = () => {
    if (roundIndex < gamePool.length - 1) {
      setRoundIndex(prev => prev + 1);
      setInputVal('');
      setRevealedChars(0);
      setIsAnswered(false);
      setIsCorrect(false);
      soundManager.playTileSelect();
    } else {
      setIsGameCompleted(true);
      soundManager.playVictory();
      triggerVictoryConfetti();
      if (onEarnHint && score >= 20) {
        onEarnHint(1);
      }
    }
  };

  const handleRestart = () => {
    const shuffled = [...GHIGLIOTTINA_DATA].sort(() => 0.5 - Math.random()).slice(0, 5);
    setGamePool(shuffled);
    setRoundIndex(0);
    setScore(0);
    setMistakes(0);
    setIsGameCompleted(false);
    setInputVal('');
    setRevealedChars(0);
    setIsAnswered(false);
    setIsCorrect(false);
    soundManager.playTileSelect();
  };

  if (!currentRound) return null;

  return (
    <div className="minigame-screen">
      <div className="minigame-nav-bar">
        <button className="minigame-back-btn" onClick={onGoToMenu} aria-label="Torna al menu">
          <CustomSvg name="chevronLeft" type="icon" size={16} />
          <span>Menu</span>
        </button>

        <div className="minigame-header-title">
          <div className="minigame-mode-badge">
            <CustomSvg name="key" type="emoji" size={18} />
            <span>Il Filo Conduttore</span>
          </div>
          <span className="minigame-round-indicator">
            Enigma {roundIndex + 1} di {gamePool.length}
          </span>
        </div>

        <div className="minigame-stats-pill">
          <span className="stat-label">Punti</span>
          <span className="stat-value">{score}</span>
        </div>
      </div>

      <div className="minigame-card-container">
        {!isGameCompleted ? (
          <div className="ghigliottina-play-card">
            <div className="ghigliottina-clues-header">
              <span className="clues-badge">I 5 Indizi Segreti</span>
              <p className="clues-subtext">Trova la parola che si lega a tutti e 5 gli indizi:</p>
            </div>

            <div className="ghigliottina-clues-grid">
              {currentRound.clues.map((clue, idx) => (
                <div key={idx} className="ghigliottina-clue-tile">
                  <span className="clue-num">{idx + 1}</span>
                  <span className="clue-word">{clue}</span>
                </div>
              ))}
            </div>

            {revealedChars > 0 && !isAnswered && (
              <div className="ghigliottina-hint-preview">
                <span className="hint-label">Inizio svelato:</span>
                <span className="hint-letters">
                  {currentRound.word.slice(0, revealedChars)}
                  {'-'.repeat(currentRound.word.length - revealedChars)}
                </span>
              </div>
            )}

            {!isAnswered ? (
              <form className="ghigliottina-input-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="ghigliottina-input"
                  placeholder="Scrivi la parola misteriosa..."
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value.toUpperCase())}
                  autoFocus
                  maxLength={18}
                />

                <div className="ghigliottina-btn-row">
                  <button
                    type="button"
                    className="ghigliottina-hint-btn"
                    onClick={handleRevealLetter}
                    disabled={revealedChars >= currentRound.word.length - 1}
                  >
                    <CustomSvg name="lightbulb" type="emoji" size={16} />
                    <span>Svela Lettera</span>
                  </button>

                  <button
                    type="submit"
                    className="ghigliottina-submit-btn"
                    disabled={!inputVal.trim()}
                  >
                    <span>Conferma</span>
                    <CustomSvg name="check" type="icon" size={16} />
                  </button>
                </div>
              </form>
            ) : (
              <div className={`ghigliottina-feedback ${isCorrect ? 'correct' : 'wrong'}`}>
                <div className="feedback-status-row">
                  <span className="feedback-icon">{isCorrect ? '✨' : '❌'}</span>
                  <span className="feedback-text">
                    {isCorrect ? 'Eccellente! Collegamento trovato!' : 'Peccato, la parola era:'}
                  </span>
                </div>
                <div className="feedback-answer-box">{currentRound.word}</div>
                {currentRound.explanation && (
                  <p className="feedback-explanation">{currentRound.explanation}</p>
                )}
                <button className="ghigliottina-next-btn" onClick={handleNextRound}>
                  <span>Prossimo Enigma</span>
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
            <h3 className="result-title">Sfida Completata!</h3>
            <p className="result-desc">
              Hai completato tutti e {gamePool.length} gli enigmi totalizzando {score} punti.
            </p>

            <div className="result-stats-row">
              <div className="result-stat-box">
                <span className="stat-num">{score}</span>
                <span className="stat-lbl">Punti Totali</span>
              </div>
              <div className="result-stat-box">
                <span className="stat-num">{mistakes}</span>
                <span className="stat-lbl">Errori</span>
              </div>
            </div>

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

export default GhigliottinaGame;
