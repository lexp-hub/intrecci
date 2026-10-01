import React from 'react';
import CustomSvg from '../../assets/svg/CustomSvg';

export const PuzzlesModal = ({
  isOpen,
  onClose,
  playedGames = [],
  activePuzzleId,
  onSelectGame,
  onGenerateApi,
  isGenerating
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Chiudi">
          <CustomSvg name="close" type="icon" size={20} />
        </button>

        <div className="modal-title">
          <CustomSvg name="book" type="emoji" size={26} />
          <span>Archivio Partite</span>
        </div>

        <div className="modal-subtitle">
          Storico delle partite giocate realmente. Ogni nuova partita è generata in modo unico e casuale.
        </div>

        <div className="api-hero-card">
          <div>
            <div className="api-hero-title">
              Nuova Partita Casuale
            </div>
            <div className="api-hero-desc">
              Genera un enigma inedito dal database lessicale, senza walkthrough fissi
            </div>
          </div>

          <button
            className="action-btn action-btn-primary"
            style={{
              padding: '8px 14px',
              fontSize: '0.8rem',
              whiteSpace: 'nowrap'
            }}
            onClick={async () => {
              await onGenerateApi();
              onClose();
            }}
            disabled={isGenerating}
          >
            <CustomSvg name="magic" type="icon" size={15} />
            <span>{isGenerating ? 'Generando...' : 'Genera Ora'}</span>
          </button>
        </div>

        {playedGames.length === 0 ? (
          <div className="archive-empty-state">
            <div style={{ margin: '14px 0', opacity: 0.7 }}>
              <CustomSvg name="puzzle" type="emoji" size={44} />
            </div>
            <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 6 }}>
              Nessuna partita giocata ancora
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: 16, maxWidth: 280, margin: '0 auto 16px' }}>
              Le partite che giocherai verranno salvate qui nel tuo archivio personale.
            </div>
            <button
              className="action-btn action-btn-primary"
              onClick={async () => {
                await onGenerateApi();
                onClose();
              }}
              disabled={isGenerating}
              style={{ margin: '0 auto' }}
            >
              <CustomSvg name="play" type="icon" size={15} />
              <span>Inizia a Giocare</span>
            </button>
          </div>
        ) : (
          <div className="level-list">
            {playedGames.map(game => {
              const isActive = game.puzzle?.id === activePuzzleId || game.id === activePuzzleId;
              const isWon = game.isWon;
              const isGameOver = game.isGameOver;
              const solvedCount = (game.solvedGroups || []).length;
              const dateStr = game.createdAt
                ? new Date(game.createdAt).toLocaleDateString('it-IT', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
                : '';

              return (
                <div
                  key={game.id}
                  className={`level-card-item ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    onSelectGame(game.id);
                    onClose();
                  }}
                >
                  <div>
                    <div className="level-card-title" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span>{game.title || `Partita #${game.gameNumber}`}</span>
                      {isWon && (
                        <span title="Vinta" style={{ color: 'var(--color-success)', display: 'inline-flex' }}>
                          <CustomSvg name="check" type="icon" size={15} />
                        </span>
                      )}
                    </div>
                    <div className="level-card-desc">
                      {dateStr && <span>{dateStr} • </span>}
                      {isWon ? (
                        <span style={{ color: 'var(--color-cat-green-text, #15803D)', fontWeight: 600 }}>
                          Vinta ({solvedCount}/4 gruppi)
                        </span>
                      ) : isGameOver ? (
                        <span>Terminata ({solvedCount}/4 gruppi)</span>
                      ) : (
                        <span style={{ color: 'var(--color-cat-yellow-text, #CA8A04)', fontWeight: 600 }}>
                          In corso ({solvedCount}/4 gruppi)
                        </span>
                      )}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ display: 'flex', gap: 3 }}>
                      {(game.solvedGroups || []).map((grp, gIdx) => (
                        <span
                          key={gIdx}
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: `var(--color-cat-${grp.color}-bg, #ccc)`,
                            display: 'inline-block'
                          }}
                        />
                      ))}
                    </div>
                    {isActive && (
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent)' }}>
                        ATTIVA
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <button
          className="action-btn action-btn-outline"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={onClose}
        >
          Chiudi
        </button>
      </div>
    </div>
  );
};

export default PuzzlesModal;
