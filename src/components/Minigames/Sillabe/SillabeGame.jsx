import React, { useState, useEffect } from 'react';
import CustomSvg from '../../../assets/svg/CustomSvg';
import { SILLABE_DATA } from '../../../data/sillabeData';
import soundManager from '../../../utils/audio';
import { triggerVictoryConfetti } from '../../../utils/confetti';
import '../../../styles/minigames.css';

export const SillabeGame = ({ onGoToMenu, onEarnHint }) => {
  const [packIndex, setPackIndex] = useState(0);
  const [solvedWordIds, setSolvedWordIds] = useState([]);
  const [usedSyllableIndices, setUsedSyllableIndices] = useState([]);
  const [currentSelectedSyllables, setCurrentSelectedSyllables] = useState([]);
  const [activeWordId, setActiveWordId] = useState(null);
  const [allSyllables, setAllSyllables] = useState([]);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [isPackWon, setIsPackWon] = useState(false);
  const [isGameCompleted, setIsGameCompleted] = useState(false);

  const currentPack = SILLABE_DATA[packIndex] || null;

  useEffect(() => {
    if (!currentPack) return;

    const syllablesArray = [];
    currentPack.words.forEach(w => {
      w.syllables.forEach(s => {
        syllablesArray.push({
          wordId: w.id,
          text: s
        });
      });
    });

    const shuffled = syllablesArray.sort(() => 0.5 - Math.random());
    setAllSyllables(shuffled);
    setSolvedWordIds([]);
    setUsedSyllableIndices([]);
    setCurrentSelectedSyllables([]);
    setActiveWordId(currentPack.words[0]?.id || null);
    setIsPackWon(false);
  }, [packIndex, currentPack]);

  const handleToggleSyllable = (idx) => {
    if (isPackWon || usedSyllableIndices.includes(idx)) return;

    const existingIndex = currentSelectedSyllables.findIndex(s => s.idx === idx);
    if (existingIndex !== -1) {
      setCurrentSelectedSyllables(prev => prev.filter(s => s.idx !== idx));
      soundManager.playTileDeselect();
    } else {
      const syl = allSyllables[idx];
      setCurrentSelectedSyllables(prev => [...prev, { idx, text: syl.text }]);
      soundManager.playTileSelect();
    }
  };

  const handleVerify = () => {
    if (!currentPack || currentSelectedSyllables.length === 0) return;

    const composedText = currentSelectedSyllables.map(s => s.text).join('');
    const targetWord = currentPack.words.find(w => w.id === activeWordId);

    if (targetWord && composedText === targetWord.word) {
      soundManager.playSolve();
      const newSolved = [...solvedWordIds, targetWord.id];
      const newlyUsed = currentSelectedSyllables.map(s => s.idx);
      const allUsed = [...usedSyllableIndices, ...newlyUsed];

      setSolvedWordIds(newSolved);
      setUsedSyllableIndices(allUsed);
      setCurrentSelectedSyllables([]);
      setScore(prev => prev + 10);

      const nextTarget = currentPack.words.find(w => !newSolved.includes(w.id));
      if (nextTarget) {
        setActiveWordId(nextTarget.id);
      } else {
        setIsPackWon(true);
        soundManager.playVictory();
        triggerVictoryConfetti();
        if (onEarnHint) onEarnHint(1);
      }
    } else {
      soundManager.playMistake();
      setMistakes(prev => prev + 1);
      setCurrentSelectedSyllables([]);
    }
  };

  const handleClearSelected = () => {
    setCurrentSelectedSyllables([]);
    soundManager.playTileDeselect();
  };

  const handleNextPack = () => {
    if (packIndex + 1 < SILLABE_DATA.length) {
      setPackIndex(prev => prev + 1);
      soundManager.playTileSelect();
    } else {
      setIsGameCompleted(true);
    }
  };

  const handleRestart = () => {
    setPackIndex(0);
    setScore(0);
    setMistakes(0);
    setIsPackWon(false);
    setIsGameCompleted(false);
    soundManager.playTileSelect();
  };

  if (!currentPack) return null;

  return (
    <div className="minigame-screen">
      <div className="minigame-nav-bar">
        <button className="minigame-back-btn" onClick={onGoToMenu} aria-label="Torna al menu">
          <CustomSvg name="chevronLeft" type="icon" size={16} />
          <span>Menu</span>
        </button>

        <div className="minigame-header-title">
          <div className="minigame-mode-badge">
            <span style={{ fontSize: 18 }}>🧩</span>
            <span>Sillabario Magico</span>
          </div>
          <span className="minigame-round-indicator">
            Schema {packIndex + 1} di {SILLABE_DATA.length}
          </span>
        </div>

        <div className="minigame-stats-pill">
          <span className="stat-label">Punti</span>
          <span className="stat-value">{score}</span>
        </div>
      </div>

      <div className="minigame-card-container">
        {!isGameCompleted ? (
          <div className="sillabe-play-card">
            <div className="sillabe-header-info">
              <span className="sillabe-theme-tag">{currentPack.title}</span>
              <p className="sillabe-subtext">Componi le 4 parole associando le tessere di sillabe corrette:</p>
            </div>

            <div className="sillabe-definitions-list">
              {currentPack.words.map((w) => {
                const isSolved = solvedWordIds.includes(w.id);
                const isActive = activeWordId === w.id && !isSolved;

                return (
                  <div
                    key={w.id}
                    className={`sillabe-def-row ${isSolved ? 'solved' : ''} ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      if (!isSolved) {
                        setActiveWordId(w.id);
                        soundManager.playTileSelect();
                      }
                    }}
                  >
                    <div className="def-target-indicator">
                      {isSolved ? '✓' : (w.word.length + ' lett.')}
                    </div>
                    <div className="def-content">
                      <span className="def-clue-label">{w.clue}</span>
                      {isSolved && <span className="def-solved-word">{w.word}</span>}
                    </div>
                  </div>
                );
              })}
            </div>

            {!isPackWon && (
              <>
                <div className="sillabe-composed-bar">
                  <span className="bar-label">In composizione:</span>
                  <div className="composed-tiles-preview">
                    {currentSelectedSyllables.length > 0 ? (
                      currentSelectedSyllables.map((s, idx) => (
                        <span key={idx} className="composed-tile">{s.text}</span>
                      ))
                    ) : (
                      <span className="composed-empty-hint">Clicca sulle sillabe qui sotto...</span>
                    )}
                  </div>
                  {currentSelectedSyllables.length > 0 && (
                    <button className="composed-clear-btn" onClick={handleClearSelected}>
                      <CustomSvg name="close" type="icon" size={14} />
                    </button>
                  )}
                </div>

                <div className="sillabe-tiles-grid">
                  {allSyllables.map((syl, idx) => {
                    const isUsed = usedSyllableIndices.includes(idx);
                    const isSelected = currentSelectedSyllables.some(s => s.idx === idx);

                    return (
                      <button
                        key={idx}
                        className={`syllable-tile ${isSelected ? 'selected' : ''} ${isUsed ? 'used' : ''}`}
                        onClick={() => handleToggleSyllable(idx)}
                        disabled={isUsed}
                      >
                        {syl.text}
                      </button>
                    );
                  })}
                </div>

                <div className="sillabe-action-deck">
                  <button
                    className="sillabe-submit-btn"
                    onClick={handleVerify}
                    disabled={currentSelectedSyllables.length === 0}
                  >
                    <span>Conferma Parola</span>
                    <CustomSvg name="check" type="icon" size={16} />
                  </button>
                </div>
              </>
            )}

            {isPackWon && (
              <div className="sillabe-victory-box">
                <div className="victory-badge">🎉 Schema Risolto al 100%!</div>
                <button className="sillabe-next-btn" onClick={handleNextPack}>
                  <span>Prossimo Schema</span>
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
            <h3 className="result-title">Tutti gli Schemi Risolti!</h3>
            <p className="result-desc">
              Hai completato tutti gli incastri sillabici con {score} punti e {mistakes} errori.
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

export default SillabeGame;
