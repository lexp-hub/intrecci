import React from 'react';
import CustomSvg from '../../assets/svg/CustomSvg';

export const PuzzlesModal = ({
  isOpen,
  onClose,
  puzzles,
  activePuzzleId,
  onSelectPuzzle,
  onGenerateApi,
  isGenerating,
  completedPuzzles = []
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
          <span>Archivio Enigmi</span>
        </div>

        <div className="modal-subtitle">
          Scegli un puzzle o generane uno nuovo all'istante tramite il database delle parole.
        </div>

        <div className="api-hero-card">
          <div>
            <div className="api-hero-title">
              Genera con Database Parole API
            </div>
            <div className="api-hero-desc">
              Interroga le categorie lessicali e crea nuovi livelli infiniti!
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

        <div className="level-list">
          {puzzles.map(p => {
            const isActive = p.id === activePuzzleId;
            const isCompleted = completedPuzzles.includes(p.id);

            return (
              <div
                key={p.id}
                className={`level-card-item ${isActive ? 'active' : ''}`}
                onClick={() => {
                  onSelectPuzzle(p.id);
                  onClose();
                }}
              >
                <div>
                  <div className="level-card-title" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span>{p.title}</span>
                    {isCompleted && (
                      <span title="Completato" style={{ color: 'var(--color-success)', display: 'inline-flex' }}>
                        <CustomSvg name="check" type="icon" size={15} />
                      </span>
                    )}
                  </div>
                  <div className="level-card-desc">{p.subtitle} • {p.difficulty}</div>
                </div>

                {isActive && (
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent)' }}>
                    IN CORSO
                  </span>
                )}
              </div>
            );
          })}
        </div>

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
