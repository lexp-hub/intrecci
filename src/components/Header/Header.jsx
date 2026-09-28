import React from 'react';
import CustomSvg from '../../assets/svg/CustomSvg';

export const Header = ({
  onOpenHelp,
  onOpenStats,
  onOpenPuzzles,
  onOpenSettings,
  onRestart,
  onGenerateApi,
  onGoToMenu,
  isGenerating
}) => {
  return (
    <header className="app-header">
      <div
        className="brand-wrapper brand-clickable"
        onClick={onGoToMenu}
        role="button"
        tabIndex={0}
        title="Torna al Menu Principale"
      >
        <div className="brand-logo">
          <CustomSvg name="logo" type="emoji" size={32} />
        </div>
        <div>
          <h1 className="brand-title">Intrecci</h1>
          <div className="brand-subtitle">Connessioni di parole</div>
        </div>
      </div>

      <div className="header-actions">
        <button
          className="icon-btn"
          onClick={onGoToMenu}
          title="Menu Principale"
          aria-label="Menu Principale"
        >
          <CustomSvg name="home" type="icon" size={20} />
        </button>

        <button
          className="icon-btn magic-btn"
          onClick={onGenerateApi}
          disabled={isGenerating}
          title="Genera nuovo enigma con API parole"
          aria-label="Genera nuovo enigma con API"
        >
          <CustomSvg name="magic" type="icon" size={20} />
        </button>

        <button
          className="icon-btn"
          onClick={onOpenPuzzles}
          title="Archivio Enigmi"
          aria-label="Archivio Enigmi"
        >
          <CustomSvg name="levels" type="icon" size={20} />
        </button>

        <button
          className="icon-btn"
          onClick={onRestart}
          title="Riavvia questo enigma"
          aria-label="Riavvia questo enigma"
        >
          <CustomSvg name="refresh" type="icon" size={20} />
        </button>

        <button
          className="icon-btn"
          onClick={onOpenStats}
          title="Statistiche"
          aria-label="Statistiche"
        >
          <CustomSvg name="stats" type="icon" size={20} />
        </button>

        <button
          className="icon-btn"
          onClick={onOpenSettings}
          title="Impostazioni (Tema notturno, Neve ed Effetti)"
          aria-label="Impostazioni"
        >
          <CustomSvg name="settings" type="icon" size={20} />
        </button>

        <button
          className="icon-btn"
          onClick={onOpenHelp}
          title="Come Giocare"
          aria-label="Come Giocare"
        >
          <CustomSvg name="help" type="icon" size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
