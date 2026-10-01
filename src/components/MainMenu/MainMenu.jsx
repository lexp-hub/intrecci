import React from 'react';
import CustomSvg from '../../assets/svg/CustomSvg';

export const MainMenu = ({
  onStartGame,
  onOpenSagaMap,
  onOpenBinomi,
  onOpenPuzzles,
  onOpenStats,
  onOpenSettings,
  onOpenHelp,
  onGenerateApi,
  isGenerating,
  activePuzzle,
  stats,
  playedArchive = [],
  totalPuzzles,
  sagaProgress
}) => {
  const playedGamesCount = playedArchive?.length || stats.played || 0;
  const isCurrentCompleted = activePuzzle ? (stats.completedPuzzles || []).includes(activePuzzle.id) : false;
  const sagaTotalStars = sagaProgress?.totalStars || 0;
  const sagaUnlocked = sagaProgress?.unlockedLevel || 1;

  return (
    <div className="main-menu-container">
      <header className="menu-hero-section">
        <div className="menu-hero-left">
          <div className="menu-brand-row">
            <div className="menu-logo-badge">
              <CustomSvg name="logo" type="emoji" size={56} />
            </div>
            <div>
              <h1 className="menu-title">Intrecci</h1>
              <div className="menu-subtitle">Il gioco dei collegamenti di parole</div>
            </div>
          </div>
          <p className="menu-description">
            Trova i 4 gruppi da 4 parole che condividono un filo conduttore semantico.
            Ogni partita è generata in modo casuale dal database delle parole: ragiona e deduci!
          </p>
        </div>

        <div className="menu-hero-stats">
          <div className="hero-stat-box">
            <span className="hero-stat-val" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              {sagaUnlocked}/20 <CustomSvg name="globe" type="emoji" size={20} />
            </span>
            <span className="hero-stat-lbl">Mappa a Tappe</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat-box">
            <span className="hero-stat-val" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              {sagaTotalStars} <CustomSvg name="star" type="emoji" size={20} />
            </span>
            <span className="hero-stat-lbl">Stelle Mappa</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat-box">
            <span className="hero-stat-val" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              {stats.currentStreak} <CustomSvg name="fire" type="emoji" size={20} />
            </span>
            <span className="hero-stat-lbl">Serie Vittorie</span>
          </div>
        </div>
      </header>

      <section className="featured-puzzle-hero">
        <div className="featured-puzzle-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="featured-badge">
              {isCurrentCompleted ? 'Partita Conclusa' : 'Partita Principale'}
            </span>
            <span className="featured-difficulty">{activePuzzle?.difficulty || 'Dinamica'}</span>
          </div>
          <span className="featured-mode-tag">Generazione Casuale</span>
        </div>

        <div className="featured-puzzle-body">
          <h2 className="featured-title">{activePuzzle?.title || 'Partita in Corso'}</h2>
          <p className="featured-desc">
            {activePuzzle?.subtitle || 'Generata casualmente dal database lessicale — ragionamento puro, nessun walkthrough online!'}
          </p>

          <div className="featured-categories-preview">
            <span className="preview-dot dot-yellow" title="Categoria Gialla: Semplice" />
            <span className="preview-dot dot-green" title="Categoria Verde: Media" />
            <span className="preview-dot dot-blue" title="Categoria Blu: Difficile" />
            <span className="preview-dot dot-purple" title="Categoria Viola: Insidiosa" />
            <span className="preview-label">4 categorie da scoprire e collegare</span>
          </div>
        </div>

        <div className="featured-actions-row">
          <button className="menu-primary-btn" onClick={onStartGame}>
            <CustomSvg name="play" type="icon" size={22} />
            <span>{isCurrentCompleted ? 'Rigioca Partita' : 'Gioca Partita'}</span>
          </button>

          <button
            className="menu-secondary-btn"
            onClick={async () => {
              const newP = await onGenerateApi();
              if (newP) onStartGame();
            }}
            disabled={isGenerating}
          >
            <CustomSvg name="magic" type="icon" size={18} />
            <span>{isGenerating ? 'Generando enigma...' : 'Nuova Partita Casuale'}</span>
          </button>

          <button className="menu-secondary-btn" onClick={onOpenPuzzles}>
            <CustomSvg name="book" type="icon" size={18} />
            <span>Archivio Partite ({playedGamesCount})</span>
          </button>
        </div>
      </section>

      <section className="menu-section-block">
        <div className="section-heading">
          <span>Altre Modalità di Gioco</span>
        </div>
        <div className="menu-modes-grid">
          <div
            className="menu-card-btn menu-card-large menu-card-saga"
            onClick={onOpenSagaMap}
            role="button"
            tabIndex={0}
          >
            <div className="menu-card-icon-box box-amber">
              <CustomSvg name="compass" type="emoji" size={32} />
            </div>
            <div className="menu-card-info">
              <div className="menu-badge-row">
                <span className="badge-new-mode">Modalità Avventura</span>
                <span className="badge-stars-count" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  {sagaTotalStars}/60 <CustomSvg name="star" type="emoji" size={14} />
                </span>
              </div>
              <div className="menu-card-title">Mappa dei Regni a Tappe</div>
              <div className="menu-card-subtitle">
                20 livelli progressivi lungo 4 biomi con curve, stelle e sfide a tempo o zen
              </div>
            </div>
            <div className="menu-card-arrow">
              <CustomSvg name="chevronRight" type="icon" size={22} />
            </div>
          </div>

          <div
            className="menu-card-btn menu-card-large menu-card-binomi"
            onClick={onOpenBinomi}
            role="button"
            tabIndex={0}
          >
            <div className="menu-card-icon-box box-purple">
              <CustomSvg name="sparkle" type="emoji" size={32} />
            </div>
            <div className="menu-card-info">
              <div className="menu-badge-row">
                <span className="badge-minigame">Minigioco Rapido</span>
                <span className="badge-pairs-count">10 Pacchetti</span>
              </div>
              <div className="menu-card-title">Binomi Iconici Italiani</div>
              <div className="menu-card-subtitle">
                Abbina le coppie inscindibili della nostra tradizione (Gatto & Volpe, Pane & Burro...)
              </div>
            </div>
            <div className="menu-card-arrow">
              <CustomSvg name="chevronRight" type="icon" size={22} />
            </div>
          </div>
        </div>
      </section>

      <section className="menu-section-block">
        <div className="section-heading">
          <span>Opzioni e Risorse</span>
        </div>
        <div className="menu-utilities-grid">
          <div
            className="menu-card-btn menu-card-util"
            onClick={onOpenPuzzles}
            role="button"
            tabIndex={0}
          >
            <div className="menu-card-icon-box box-blue">
              <CustomSvg name="book" type="emoji" size={24} />
            </div>
            <div className="menu-card-info">
              <div className="menu-card-title">Archivio Partite</div>
              <div className="menu-card-subtitle">
                {playedGamesCount} {playedGamesCount === 1 ? 'partita giocata' : 'partite giocate'}
              </div>
            </div>
            <div className="menu-card-arrow">
              <CustomSvg name="chevronRight" type="icon" size={18} />
            </div>
          </div>

          <div
            className="menu-card-btn menu-card-util"
            onClick={onOpenStats}
            role="button"
            tabIndex={0}
          >
            <div className="menu-card-icon-box box-green">
              <CustomSvg name="stats" type="icon" size={24} />
            </div>
            <div className="menu-card-info">
              <div className="menu-card-title">Statistiche e Record</div>
              <div className="menu-card-subtitle" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                {stats.won} vittorie • serie {stats.currentStreak} <CustomSvg name="fire" type="emoji" size={15} />
              </div>
            </div>
            <div className="menu-card-arrow">
              <CustomSvg name="chevronRight" type="icon" size={18} />
            </div>
          </div>

          <div
            className="menu-card-btn menu-card-util"
            onClick={onOpenSettings}
            role="button"
            tabIndex={0}
          >
            <div className="menu-card-icon-box box-amber">
              <CustomSvg name="settings" type="icon" size={24} />
            </div>
            <div className="menu-card-info">
              <div className="menu-card-title">Impostazioni</div>
              <div className="menu-card-subtitle">Tema scuro, suoni, effetti</div>
            </div>
            <div className="menu-card-arrow">
              <CustomSvg name="chevronRight" type="icon" size={18} />
            </div>
          </div>

          <div
            className="menu-card-btn menu-card-util"
            onClick={onOpenHelp}
            role="button"
            tabIndex={0}
          >
            <div className="menu-card-icon-box box-blue">
              <CustomSvg name="help" type="icon" size={24} />
            </div>
            <div className="menu-card-info">
              <div className="menu-card-title">Regole e Guida</div>
              <div className="menu-card-subtitle">Come giocare e scorciatoie</div>
            </div>
            <div className="menu-card-arrow">
              <CustomSvg name="chevronRight" type="icon" size={18} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainMenu;
