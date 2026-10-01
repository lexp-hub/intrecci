import React from 'react';
import CustomSvg from '../../assets/svg/CustomSvg';

export const HintModal = ({
  isOpen,
  onClose,
  hintTokens,
  onUseCategoryHint,
  onUsePairHint
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content modal-hint-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-icon-box">
            <CustomSvg name="lightbulb" type="emoji" size={26} />
          </div>
          <h2 className="modal-title">Oracolo degli Indizi</h2>
          <button className="modal-close-btn" onClick={onClose} aria-label="Chiudi">
            <CustomSvg name="close" type="icon" size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="hint-tokens-badge">
            <CustomSvg name="lightbulb" type="emoji" size={24} />
            <span className="token-count">{hintTokens}</span>
            <span className="token-label">{hintTokens === 1 ? 'indizio disponibile' : 'indizi disponibili'}</span>
          </div>

          <div className="hint-options-list">
            <div className="hint-card">
              <div className="hint-card-header">
                <span className="hint-tier-tag">Livello 1 • 1 Gettone</span>
                <h3 className="hint-card-title">Indizio di Categoria</h3>
              </div>
              <p className="hint-card-desc">
                Rivela il tema conduttore o una descrizione segreta di uno dei gruppi non ancora risolti, senza svelare le singole parole.
              </p>
              <button
                className="btn-use-hint"
                disabled={hintTokens < 1}
                onClick={() => {
                  const ok = onUseCategoryHint();
                  if (ok) onClose();
                }}
              >
                Usa 1 Indizio (Categoria)
              </button>
            </div>

            <div className="hint-card hint-card-highlight">
              <div className="hint-card-header">
                <span className="hint-tier-tag gold-tag">Livello 2 • 2 Gettoni</span>
                <h3 className="hint-card-title">Bagliore Dorato di Coppia</h3>
              </div>
              <p className="hint-card-desc">
                Illumina per qualche secondo con una luce dorata 2 tessere sulla griglia che appartengono allo stesso gruppo.
              </p>
              <button
                className="btn-use-hint gold-btn"
                disabled={hintTokens < 2}
                onClick={() => {
                  const ok = onUsePairHint();
                  if (ok) onClose();
                }}
              >
                Usa 2 Indizi (Illumina Coppia)
              </button>
            </div>
          </div>

          <div className="hint-earn-tip">
            <CustomSvg name="sparkle" type="emoji" size={18} />
            <span>Puoi guadagnare nuovi gettoni indizio completando i livelli della <strong>Mappa a Tappe</strong> e i pacchetti di <strong>Binomi</strong>!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HintModal;
