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
      <header className="bento-header">
        <div className="bento-header-left">
          <div className="bento-brand-row">
            <div className="bento-logo">
              <CustomSvg name="logo" type="emoji" size={44} />
            </div>
            <div>
              <div className="bento-brand-title">Intrecci</div>
              <div className="bento-brand-badge">
                <span className="bento-dot dot-emerald" />
                <span>Generatore Lessicale Dinamico</span>
              </div>
            </div>
          </div>
          <p className="bento-header-desc">
            Trova i 4 collegamenti semantici tra 16 parole. Nessun walkthrough statico: ogni schema richiede pura deduzione.
          </p>
        </div>

        <div className="bento-stats-panel">
          <div className="bento-stat-item">
            <span className="bento-stat-val">
              {sagaUnlocked}<span className="bento-stat-denom">/20</span>
            </span>
            <span className="bento-stat-lbl">Mappa Livelli</span>
          </div>
          <div className="bento-stat-sep" />
          <div className="bento-stat-item">
            <span className="bento-stat-val" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              {sagaTotalStars} <CustomSvg name="star" type="emoji" size={16} />
            </span>
            <span className="bento-stat-lbl">Stelle Totali</span>
          </div>
          <div className="bento-stat-sep" />
          <div className="bento-stat-item">
            <span className="bento-stat-val" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              {stats.currentStreak} <CustomSvg name="fire" type="emoji" size={16} />
            </span>
            <span className="bento-stat-lbl">Serie Vittorie</span>
          </div>
        </div>
      </header>

      <div className="bento-grid-layout">
        <section className="bento-card bento-card-hero">
          <div className="bento-card-topbar">
            <div className="bento-pill-group">
              <span className="bento-pill bento-pill-live">
                <span className="bento-dot dot-emerald" />
                {isCurrentCompleted ? 'Completata' : 'In Corso'}
              </span>
              <span className="bento-pill bento-pill-subtle">
                {activePuzzle?.difficulty || 'Dinamico'}
              </span>
            </div>
            <span className="bento-meta-id">
              {activePuzzle?.id ? `#${activePuzzle.id}` : 'LIVE'}
            </span>
          </div>

          <div className="bento-hero-body">
            <h2 className="bento-hero-title">
              {activePuzzle?.title || 'Partita In Corso'}
            </h2>
            <p className="bento-hero-subtitle">
              {activePuzzle?.subtitle || 'Generata casualmente dal database delle parole — nessuna soluzione fissa.'}
            </p>

            <div className="bento-cat-legend">
              <div className="bento-cat-chip cat-chip-yellow">
                <span className="cat-chip-dot" />
                <span>Diretto</span>
              </div>
              <div className="bento-cat-chip cat-chip-green">
                <span className="cat-chip-dot" />
                <span>Medio</span>
              </div>
              <div className="bento-cat-chip cat-chip-blue">
                <span className="cat-chip-dot" />
                <span>Complesso</span>
              </div>
              <div className="bento-cat-chip cat-chip-purple">
                <span className="cat-chip-dot" />
                <span>Insidioso</span>
              </div>
            </div>
          </div>

          <div className="bento-hero-actions">
            <button className="bento-btn bento-btn-primary" onClick={onStartGame}>
              <CustomSvg name="play" type="icon" size={18} />
              <span>{isCurrentCompleted ? 'Rigioca Partita' : 'Gioca Partita'}</span>
            </button>

            <button
              className="bento-btn bento-btn-secondary"
              onClick={async () => {
                const newP = await onGenerateApi();
                if (newP) onStartGame();
              }}
              disabled={isGenerating}
            >
              <CustomSvg name="magic" type="icon" size={16} />
              <span>{isGenerating ? 'Generando...' : 'Nuova Partita Casuale'}</span>
            </button>

            <button className="bento-btn bento-btn-outline" onClick={onOpenPuzzles}>
              <CustomSvg name="book" type="icon" size={16} />
              <span>Archivio ({playedGamesCount})</span>
            </button>
          </div>
        </section>

        <section
          className="bento-card bento-card-interactive bento-card-saga"
          onClick={onOpenSagaMap}
          role="button"
          tabIndex={0}
        >
          <div className="bento-card-topbar">
            <span className="bento-pill bento-pill-amber">
              <span className="bento-dot dot-amber" />
              Avventura
            </span>
            <span className="bento-meta-id">{sagaTotalStars}/60 ★</span>
          </div>

          <div className="bento-mode-content">
            <div className="bento-mode-icon icon-amber">
              <CustomSvg name="compass" type="emoji" size={28} />
            </div>
            <div>
              <div className="bento-card-heading">Mappa dei Regni</div>
              <div className="bento-card-text">
                20 tappe progressive lungo 4 biomi con sfide a tempo o zen
              </div>
            </div>
          </div>

          <div className="bento-card-arrow">
            <CustomSvg name="chevronRight" type="icon" size={18} />
          </div>
        </section>

        <section
          className="bento-card bento-card-interactive bento-card-binomi"
          onClick={onOpenBinomi}
          role="button"
          tabIndex={0}
        >
          <div className="bento-card-topbar">
            <span className="bento-pill bento-pill-purple">
              <span className="bento-dot dot-purple" />
              Minigioco
            </span>
            <span className="bento-meta-id">10 Pacchetti</span>
          </div>

          <div className="bento-mode-content">
            <div className="bento-mode-icon icon-purple">
              <CustomSvg name="sparkle" type="emoji" size={28} />
            </div>
            <div>
              <div className="bento-card-heading">Binomi Iconici</div>
              <div className="bento-card-text">
                Abbina le celebri coppie e modi di dire della tradizione italiana
              </div>
            </div>
          </div>

          <div className="bento-card-arrow">
            <CustomSvg name="chevronRight" type="icon" size={18} />
          </div>
        </section>

        <section
          className="bento-card bento-card-interactive bento-card-util"
          onClick={onOpenPuzzles}
          role="button"
          tabIndex={0}
        >
          <div className="bento-util-icon icon-blue">
            <CustomSvg name="book" type="emoji" size={22} />
          </div>
          <div className="bento-util-info">
            <div className="bento-card-heading">Archivio Partite</div>
            <div className="bento-card-text">
              {playedGamesCount} {playedGamesCount === 1 ? 'partita' : 'partite'}
            </div>
          </div>
          <div className="bento-card-arrow">
            <CustomSvg name="chevronRight" type="icon" size={16} />
          </div>
        </section>

        <section
          className="bento-card bento-card-interactive bento-card-util"
          onClick={onOpenStats}
          role="button"
          tabIndex={0}
        >
          <div className="bento-util-icon icon-green">
            <CustomSvg name="stats" type="icon" size={22} />
          </div>
          <div className="bento-util-info">
            <div className="bento-card-heading">Statistiche</div>
            <div className="bento-card-text">
              {stats.won} vittorie • serie {stats.currentStreak}
            </div>
          </div>
          <div className="bento-card-arrow">
            <CustomSvg name="chevronRight" type="icon" size={16} />
          </div>
        </section>

        <section
          className="bento-card bento-card-interactive bento-card-util"
          onClick={onOpenSettings}
          role="button"
          tabIndex={0}
        >
          <div className="bento-util-icon icon-slate">
            <CustomSvg name="settings" type="icon" size={22} />
          </div>
          <div className="bento-util-info">
            <div className="bento-card-heading">Impostazioni</div>
            <div className="bento-card-text">Tema notturno e audio</div>
          </div>
          <div className="bento-card-arrow">
            <CustomSvg name="chevronRight" type="icon" size={16} />
          </div>
        </section>

        <section
          className="bento-card bento-card-interactive bento-card-util"
          onClick={onOpenHelp}
          role="button"
          tabIndex={0}
        >
          <div className="bento-util-icon icon-sky">
            <CustomSvg name="help" type="icon" size={22} />
          </div>
          <div className="bento-util-info">
            <div className="bento-card-heading">Regole e Guida</div>
            <div className="bento-card-text">Istruzioni e comandi</div>
          </div>
          <div className="bento-card-arrow">
            <CustomSvg name="chevronRight" type="icon" size={16} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainMenu;
