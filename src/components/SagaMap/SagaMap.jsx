import React, { useState, useRef, useEffect } from 'react';
import { BIOMES, SAGA_LEVELS } from '../../data/sagaLevels';
import CustomSvg from '../../assets/svg/CustomSvg';
import '../../styles/sagaMap.css';

export const SagaMap = ({
  unlockedLevel = 1,
  levelStars = {},
  totalStars = 0,
  hintTokens = 3,
  onSelectLevel,
  onGoToMenu
}) => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [chosenMode, setChosenMode] = useState('classic');
  const scrollAreaRef = useRef(null);

  // Compute positions for 20 nodes along a serpentine S-curve
  // 4 nodes per row or serpentine zig-zag
  // Let's use a nice percentage-based coordinate layout for each level (1 at bottom, 20 at top)
  const getNodeCoordinates = (index) => {
    // index 0 is level 1 (bottom), index 19 is level 20 (top)
    const y = 92 - (index * 4.4); // From 92% down to ~8% up
    // Sinusoidal horizontal wave
    const wave = Math.sin((index / 2.2)) * 34; // oscillates between -34% and +34%
    const x = 50 + wave; // centered at 50%
    return { x, y };
  };

  // Auto-scroll to center on the player's active level upon opening the map
  useEffect(() => {
    if (scrollAreaRef.current) {
      const activeIdx = Math.max(0, Math.min(SAGA_LEVELS.length - 1, unlockedLevel - 1));
      const { y } = getNodeCoordinates(activeIdx);
      const scrollHeight = scrollAreaRef.current.scrollHeight;
      const clientHeight = scrollAreaRef.current.clientHeight;
      const targetScroll = (y / 100) * scrollHeight - (clientHeight / 2);
      scrollAreaRef.current.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: 'smooth'
      });
    }
  }, [unlockedLevel]);

  const handleNodeClick = (level) => {
    if (level.id <= unlockedLevel) {
      setSelectedLevel(level);
      setChosenMode('classic');
    }
  };

  const handleStartLevel = () => {
    if (selectedLevel) {
      onSelectLevel(selectedLevel, chosenMode);
    }
  };

  // Build SVG path curve through all 20 nodes
  const pathD = SAGA_LEVELS.map((level, idx) => {
    const { x, y } = getNodeCoordinates(idx);
    return `${idx === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  return (
    <div className="saga-map-screen">
      {/* Saga Header */}
      <header className="saga-top-bar">
        <button className="saga-back-btn" onClick={onGoToMenu}>
          <CustomSvg name="chevronLeft" type="icon" size={18} />
          <span>Menu</span>
        </button>

        <div className="saga-title-group">
          <h1 className="saga-main-title">Mappa dei Regni</h1>
          <span className="saga-subtitle">Viaggio attraverso le parole</span>
        </div>

        <div className="saga-stats-pills">
          <div className="saga-pill" title="Stelle totali conquistate">
            <CustomSvg name="star" type="emoji" size={16} />
            <span className="pill-value">{totalStars}</span>
            <span className="pill-max">/60</span>
          </div>
          <div className="saga-pill" title="Indizi disponibili">
            <CustomSvg name="lightbulb" type="emoji" size={16} />
            <span className="pill-value">{hintTokens}</span>
          </div>
        </div>
      </header>

      {/* Map Scroll Container */}
      <div className="saga-scroll-area" ref={scrollAreaRef}>
        <div className="saga-canvas-track">
          {/* Background winding SVG line */}
          <svg className="saga-svg-path" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Soft glow underlying line */}
            <path d={pathD} className="path-glow" vectorEffect="non-scaling-stroke" />
            {/* Stepping stone dashed main line */}
            <path d={pathD} className="path-main" vectorEffect="non-scaling-stroke" />
          </svg>

          {/* Biome Region Banners */}
          {BIOMES.map((biome) => {
            // Position biome markers at levels 1, 6, 11, 16
            const baseLevelIdx = biome.levelRange[0] - 1;
            const { y } = getNodeCoordinates(baseLevelIdx);
            return (
              <div
                key={biome.id}
                className="biome-marker-banner"
                style={{ top: `${Math.max(2, y - 3)}%` }}
              >
                <div className="biome-pill" style={{ borderColor: biome.color }}>
                  <CustomSvg name={biome.icon} type="emoji" size={20} />
                  <div className="biome-pill-text">
                    <span className="biome-name">{biome.name}</span>
                    <span className="biome-range">Livelli {biome.levelRange[0]}-{biome.levelRange[1]}</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* 20 Level Nodes */}
          {SAGA_LEVELS.map((level, idx) => {
            const { x, y } = getNodeCoordinates(idx);
            const isUnlocked = level.id <= unlockedLevel;
            const isCurrent = level.id === unlockedLevel;
            const stars = levelStars[level.id] || 0;
            const isCompleted = stars > 0;

            const biome = BIOMES.find(b => b.id === level.biomeId) || BIOMES[0];

            return (
              <div
                key={level.id}
                className={`saga-node-wrapper ${isCurrent ? 'node-current' : ''} ${!isUnlocked ? 'node-locked' : ''} ${isCompleted ? 'node-completed' : ''}`}
                style={{ left: `${x}%`, top: `${y}%` }}
                onClick={() => handleNodeClick(level)}
                role="button"
                tabIndex={isUnlocked ? 0 : -1}
                aria-label={`Livello ${level.id}: ${level.title}`}
              >
                {/* Current level animated avatar pin */}
                {isCurrent && (
                  <div className="saga-avatar-indicator">
                    <div className="avatar-pulse-ring" />
                    <CustomSvg name="pin" type="emoji" size={26} />
                  </div>
                )}

                <div
                  className="saga-node-circle"
                  style={{ borderColor: isUnlocked ? biome.color : undefined }}
                >
                  {isUnlocked ? (
                    <span className="node-number">{level.id}</span>
                  ) : (
                    <CustomSvg name="lock" type="emoji" size={20} />
                  )}
                </div>

                {/* Stars earned under node */}
                {isUnlocked && (
                  <div className="node-stars-row">
                    <CustomSvg name={stars >= 1 ? 'star' : 'starEmpty'} type="emoji" size={13} />
                    <CustomSvg name={stars >= 2 ? 'star' : 'starEmpty'} type="emoji" size={13} />
                    <CustomSvg name={stars >= 3 ? 'star' : 'starEmpty'} type="emoji" size={13} />
                  </div>
                )}

                {/* Level Title Label on Hover/Current */}
                <div className="node-floating-label">
                  <span className="lbl-title">{level.title}</span>
                  <span className="lbl-diff">{level.difficulty}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal: Level Start Dialog with Mode Selector */}
      {selectedLevel && (
        <div className="modal-backdrop" onClick={() => setSelectedLevel(null)}>
          <div className="modal-content saga-level-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-icon-box">
                <CustomSvg name="trophy" type="emoji" size={26} />
              </div>
              <h2 className="modal-title">{selectedLevel.title}</h2>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedLevel(null)}
                aria-label="Chiudi"
              >
                <CustomSvg name="close" type="icon" size={20} />
              </button>
            </div>

            <div className="saga-level-details">
              <p className="level-modal-desc">{selectedLevel.subtitle}</p>

              <div className="level-meta-row">
                <span className="meta-badge-diff">{selectedLevel.difficulty}</span>
                <span className="meta-stars-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                  Miglior risultato: {levelStars[selectedLevel.id] ? (
                    Array.from({ length: levelStars[selectedLevel.id] }).map((_, i) => (
                      <CustomSvg key={i} name="star" type="emoji" size={14} />
                    ))
                  ) : 'Non giocato'}
                </span>
              </div>

              {/* Game Mode Selector */}
              <div className="mode-selection-section">
                <div className="mode-selection-label">Scegli la modalità di gioco:</div>
                <div className="mode-cards-grid">
                  {/* Classic Mode */}
                  <div
                    className={`mode-card ${chosenMode === 'classic' ? 'active' : ''}`}
                    onClick={() => setChosenMode('classic')}
                  >
                    <div className="mode-card-header">
                      <CustomSvg name="target" type="emoji" size={24} />
                      <strong>Classica</strong>
                    </div>
                    <p className="mode-desc">4 errori massimi. Guadagna fino a 3 stelle!</p>
                  </div>

                  {/* Timed Mode */}
                  <div
                    className={`mode-card ${chosenMode === 'timed' ? 'active' : ''}`}
                    onClick={() => setChosenMode('timed')}
                  >
                    <div className="mode-card-header">
                      <CustomSvg name="stopwatch" type="emoji" size={24} />
                      <strong>A Tempo</strong>
                    </div>
                    <p className="mode-desc">90 secondi + 20s bonus per ogni gruppo trovato!</p>
                  </div>

                  {/* Zen Mode */}
                  <div
                    className={`mode-card ${chosenMode === 'zen' ? 'active' : ''}`}
                    onClick={() => setChosenMode('zen')}
                  >
                    <div className="mode-card-header">
                      <CustomSvg name="zen" type="emoji" size={24} />
                      <strong>Zen</strong>
                    </div>
                    <p className="mode-desc">Errori infiniti. Rilassati ed esplora le parole.</p>
                  </div>
                </div>
              </div>

              <div className="saga-modal-actions">
                <button className="saga-btn-cancel" onClick={() => setSelectedLevel(null)}>
                  Annulla
                </button>
                <button className="saga-btn-play" onClick={handleStartLevel}>
                  Inizia Livello
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SagaMap;
