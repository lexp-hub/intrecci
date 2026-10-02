import React from 'react';
import CustomSvg from '../../assets/svg/CustomSvg';

export const SettingsModal = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings
}) => {
  if (!isOpen) return null;

  const { isDark, soundEnabled } = settings;

  const handleToggleDark = () => {
    onUpdateSettings({ ...settings, isDark: !isDark });
  };

  const handleToggleSound = () => {
    onUpdateSettings({ ...settings, soundEnabled: !soundEnabled });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Chiudi">
          <CustomSvg name="close" type="icon" size={20} />
        </button>

        <div className="modal-title">
          <CustomSvg name="settings" type="icon" size={24} />
          <span>Impostazioni</span>
        </div>

        <div className="modal-subtitle">
          Personalizza l'aspetto e l'audio del gioco.
        </div>

        <div className="settings-list">
          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-label">Tema Notturno</div>
              <div className="setting-desc">Colori scuri a contrasto per affaticare meno la vista</div>
            </div>
            <button
              type="button"
              className={`toggle-switch ${isDark ? 'active' : ''}`}
              onClick={handleToggleDark}
              aria-label="Attiva/disattiva tema notturno"
            >
              <div className="toggle-thumb" />
            </button>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-label">Effetti Sonori</div>
              <div className="setting-desc">Feedback audio alla selezione e alla risoluzione</div>
            </div>
            <button
              type="button"
              className={`toggle-switch ${soundEnabled ? 'active' : ''}`}
              onClick={handleToggleSound}
              aria-label="Attiva/disattiva suoni"
            >
              <div className="toggle-thumb" />
            </button>
          </div>
        </div>

        <button
          className="action-btn action-btn-primary"
          style={{ width: '100%', justifyContent: 'center', marginTop: 18 }}
          onClick={onClose}
        >
          Salva e Chiudi
        </button>
      </div>
    </div>
  );
};

export default SettingsModal;
