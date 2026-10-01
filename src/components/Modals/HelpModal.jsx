import React from 'react';
import CustomSvg from '../../assets/svg/CustomSvg';

export const HelpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Chiudi">
          <CustomSvg name="close" type="icon" size={20} />
        </button>

        <div className="modal-title">
          <CustomSvg name="lightbulb" type="emoji" size={26} />
          <span>Come si gioca</span>
        </div>

        <div className="modal-subtitle">
          Trova i 4 gruppi di 4 parole collegate da un filo conduttore.
        </div>

        <div className="help-rules-list">
          <div className="help-rule-item">
            <span className="help-rule-num">1</span>
            <span className="help-rule-text">
              Tocca <strong>4 parole</strong> che ritieni condividano una caratteristica comune e premi <strong>Invia</strong>.
            </span>
          </div>

          <div className="help-rule-item">
            <span className="help-rule-num">2</span>
            <span className="help-rule-text">
              Fai attenzione ai <strong>trabocchetti</strong>: molte parole possono sembrare appartenere a più categorie!
            </span>
          </div>

          <div className="help-rule-item">
            <span className="help-rule-num">3</span>
            <span className="help-rule-text">
              Hai a disposizione <strong>4 tentativi d'errore</strong>. Se 3 parole su 4 sono corrette, riceverai il suggerimento <em>"Manca solo 1!"</em>.
            </span>
          </div>
        </div>

        <div style={{ fontWeight: 700, fontSize: '0.86rem', marginBottom: 8 }}>
          Livelli di difficoltà delle categorie:
        </div>

        <div className="category-difficulty-legend">
          <div className="legend-row">
            <div className="legend-color-dot" style={{ background: 'var(--color-cat-yellow-border)' }} />
            <span><strong>Giallo:</strong> Categoria diretta e più immediata</span>
          </div>
          <div className="legend-row">
            <div className="legend-color-dot" style={{ background: 'var(--color-cat-green-border)' }} />
            <span><strong>Verde:</strong> Difficoltà media</span>
          </div>
          <div className="legend-row">
            <div className="legend-color-dot" style={{ background: 'var(--color-cat-blue-border)' }} />
            <span><strong>Blu:</strong> Associazione meno intuitiva</span>
          </div>
          <div className="legend-row">
            <div className="legend-color-dot" style={{ background: 'var(--color-cat-purple-border)' }} />
            <span><strong>Viola:</strong> Molto insidioso (giochi di parole, modi di dire, doppi sensi)</span>
          </div>
        </div>

        <div style={{ fontWeight: 700, fontSize: '0.86rem', margin: '14px 0 8px' }}>
          Scorciatoie da tastiera:
        </div>

        <div className="keyboard-shortcuts-grid">
          <div className="shortcut-row">
            <kbd className="shortcut-kbd">Invio</kbd>
            <span>Invia la combinazione selezionata</span>
          </div>
          <div className="shortcut-row">
            <kbd className="shortcut-kbd">Spazio</kbd> / <kbd className="shortcut-kbd">S</kbd>
            <span>Mescola le parole rimaste</span>
          </div>
          <div className="shortcut-row">
            <kbd className="shortcut-kbd">Esc</kbd>
            <span>Deseleziona tutto / Chiudi finestre</span>
          </div>
          <div className="shortcut-row">
            <kbd className="shortcut-kbd">Backspace</kbd>
            <span>Deseleziona l'ultima parola</span>
          </div>
          <div className="shortcut-row">
            <kbd className="shortcut-kbd">H</kbd>
            <span>Apri l'Oracolo degli Indizi</span>
          </div>
        </div>

        <button
          className="action-btn action-btn-primary"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={onClose}
        >
          Ho capito, giochiamo!
        </button>
      </div>
    </div>
  );
};

export default HelpModal;
