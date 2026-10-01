import React from 'react';
import CustomSvg from '../../assets/svg/CustomSvg';

export const SettingsModal = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings
}) => {
  if (!isOpen) return null;

  const { isDark, effectsEnabled, effectType, soundEnabled } = settings;

  const handleToggleDark = () => {
    onUpdateSettings({ ...settings, isDark: !isDark });
  };

  const handleToggleEffects = () => {
    onUpdateSettings({ ...settings, effectsEnabled: !effectsEnabled });
  };

  const handleChangeEffectType = (type) => {
    onUpdateSettings({ ...settings, effectType: type, effectsEnabled: true });
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
          Personalizza l'atmosfera visiva e sonora del gioco.
        </div>

        <div className="settings-list">
          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-label">Tema Notturno</div>
              <div className="setting-desc">Tonalità scure calde e riposanti per la vista</div>
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
              <div className="setting-label">Effetti Speciali</div>
              <div className="setting-desc">Particelle animate d'atmosfera sullo sfondo</div>
            </div>
            <button
              type="button"
              className={`toggle-switch ${effectsEnabled ? 'active' : ''}`}
              onClick={handleToggleEffects}
              aria-label="Attiva/disattiva effetti speciali"
            >
              <div className="toggle-thumb" />
            </button>
          </div>

          {effectsEnabled && (
            <div className="setting-subgroup">
              <div style={{ fontSize: '0.8rem', fontWeight: 700, marginBottom: 8, color: 'var(--text-secondary)' }}>
                Scegli l'effetto atmosferico:
              </div>
              <div className="effect-chips-grid">
                <button
                  type="button"
                  className={`effect-chip ${effectType === 'snow' ? 'active' : ''}`}
                  onClick={() => handleChangeEffectType('snow')}
                >
                  <CustomSvg name="snow" type="emoji" size={24} />
                  <span>Neve che cade</span>
                </button>

                <button
                  type="button"
                  className={`effect-chip ${effectType === 'fireflies' ? 'active' : ''}`}
                  onClick={() => handleChangeEffectType('fireflies')}
                >
                  <CustomSvg name="sparkle" type="emoji" size={24} />
                  <span>Lucciole dorate</span>
                </button>

                <button
                  type="button"
                  className={`effect-chip ${effectType === 'leaves' ? 'active' : ''}`}
                  onClick={() => handleChangeEffectType('leaves')}
                >
                  <CustomSvg name="leaf" type="emoji" size={24} />
                  <span>Foglie d'autunno</span>
                </button>
              </div>
            </div>
          )}

          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-label">Suoni Rilassanti</div>
              <div className="setting-desc">Feedback acustico marimba alla selezione e accordi di vittoria</div>
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
