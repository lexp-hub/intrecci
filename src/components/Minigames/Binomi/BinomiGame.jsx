import React, { useState } from 'react';
import useBinomiGame from '../../../hooks/useBinomiGame';
import CustomSvg from '../../../assets/svg/CustomSvg';
import '../../../styles/binomi.css';

export const BinomiGame = ({ onGoToMenu, onEarnHint }) => {
  const {
    pack,
    packId,
    allPacks,
    tiles,
    selectedTile,
    matchedPairIds,
    shakingTileIds,
    matchingAnimationTileIds,
    attempts,
    isCompleted,
    timerSeconds,
    handleTileClick,
    nextPack,
    restartPack,
    selectPack
  } = useBinomiGame(1);

  const [isPackPickerOpen, setIsPackPickerOpen] = useState(false);

  // Format timer seconds into mm:ss
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Automatically award hint token when pack is completed
  React.useEffect(() => {
    if (isCompleted && onEarnHint) {
      onEarnHint(1);
    }
  }, [isCompleted]);

  // Find completed pair definitions
  const solvedPairs = pack.pairs.filter(p => matchedPairIds.includes(p.id));
  const remainingTiles = tiles.filter(t => !matchedPairIds.includes(t.pairId));

  return (
    <div className="binomi-screen">
      {/* Top Header */}
      <header className="binomi-header">
        <button className="binomi-back-btn" onClick={onGoToMenu}>
          <CustomSvg name="chevronLeft" type="icon" size={18} />
          <span>Menu</span>
        </button>

        <div className="binomi-pack-trigger" onClick={() => setIsPackPickerOpen(true)}>
          <span className="pack-num-tag">Pacchetto {packId}/{allPacks.length}</span>
          <span className="pack-name-title">{pack.title}</span>
        </div>

        <div className="binomi-meta-pills">
          <div className="binomi-pill time-pill">
            <CustomSvg name="stopwatch" type="emoji" size={16} />
            <span>{formatTime(timerSeconds)}</span>
          </div>
          <div className="binomi-pill count-pill">
            <span>{matchedPairIds.length}/6</span>
          </div>
        </div>
      </header>

      {/* Instructions */}
      <div className="binomi-instruction-box">
        <h2 className="binomi-title">Binomi Iconici Italiani</h2>
        <p className="binomi-sub">Tocca due parole per formare una celebre coppia o detto popolare.</p>
      </div>

      {/* Solved Pairs Shelf */}
      {solvedPairs.length > 0 && (
        <div className="binomi-solved-shelf">
          {solvedPairs.map(p => (
            <div key={p.id} className="binomi-pair-card anim-pop-in">
              <span className="pair-words">{p.a} <span className="amp">&</span> {p.b}</span>
              <span className="pair-relation">{p.relation}</span>
            </div>
          ))}
        </div>
      )}

      {/* Grid of Unmatched Tiles */}
      <div className="binomi-grid">
        {remainingTiles.map(tile => {
          const isSelected = selectedTile?.id === tile.id;
          const isShaking = shakingTileIds.includes(tile.id);
          const isMatching = matchingAnimationTileIds.includes(tile.id);

          return (
            <button
              key={tile.id}
              className={`binomi-tile ${isSelected ? 'selected' : ''} ${isShaking ? 'anim-shake' : ''} ${isMatching ? 'anim-match' : ''}`}
              onClick={() => handleTileClick(tile)}
              type="button"
            >
              <span className="tile-text">{tile.text}</span>
            </button>
          );
        })}
      </div>

      {/* Bottom Controls */}
      <div className="binomi-footer-actions">
        <button className="binomi-btn-action" onClick={restartPack}>
          <CustomSvg name="refresh" type="icon" size={18} />
          <span>Ricomincia</span>
        </button>
        <button className="binomi-btn-action" onClick={() => setIsPackPickerOpen(true)}>
          <CustomSvg name="levels" type="icon" size={18} />
          <span>Scegli Pacchetto</span>
        </button>
      </div>

      {/* Completion Modal */}
      {isCompleted && (
        <div className="modal-backdrop">
          <div className="modal-content binomi-win-modal anim-scale-up">
            <div className="win-icon-circle">
              <CustomSvg name="party" type="emoji" size={48} />
            </div>
            <h2 className="modal-title">Pacchetto Risolto!</h2>
            <p className="win-subtitle">Hai abbinato tutte le 6 coppie di <em>{pack.title}</em></p>

            <div className="win-stats-grid">
              <div className="win-stat-cell">
                <span className="win-stat-val">{formatTime(timerSeconds)}</span>
                <span className="win-stat-lbl">Tempo</span>
              </div>
              <div className="win-stat-cell">
                <span className="win-stat-val">{attempts}</span>
                <span className="win-stat-lbl">Tentativi</span>
              </div>
              <div className="win-stat-cell">
                <span className="win-stat-val" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  +1 <CustomSvg name="lightbulb" type="emoji" size={18} />
                </span>
                <span className="win-stat-lbl">Gettone Indizio</span>
              </div>
            </div>

            <div className="win-actions-row">
              <button
                className="btn-next-pack"
                onClick={() => {
                  nextPack();
                }}
              >
                Prossimo Pacchetto →
              </button>
              <button className="btn-back-menu" onClick={onGoToMenu}>
                Torna al Menu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pack Picker Modal */}
      {isPackPickerOpen && (
        <div className="modal-backdrop" onClick={() => setIsPackPickerOpen(false)}>
          <div className="modal-content binomi-picker-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Seleziona Pacchetto Binomi</h2>
              <button className="modal-close-btn" onClick={() => setIsPackPickerOpen(false)}>
                <CustomSvg name="close" type="icon" size={20} />
              </button>
            </div>
            <div className="binomi-packs-list">
              {allPacks.map(p => (
                <div
                  key={p.id}
                  className={`binomi-pack-item ${p.id === packId ? 'active' : ''}`}
                  onClick={() => {
                    selectPack(p.id);
                    setIsPackPickerOpen(false);
                  }}
                >
                  <div className="pack-item-num">#{p.id}</div>
                  <div className="pack-item-info">
                    <strong className="pack-item-title">{p.title}</strong>
                    <span className="pack-item-sub">{p.subtitle}</span>
                  </div>
                  <span className="pack-item-diff">{p.difficulty}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BinomiGame;
