import React from 'react';
import CustomSvg from '../../assets/svg/CustomSvg';

export const MainMenu = ({
  onStartGame,
  onOpenSagaMap,
  onOpenBinomi,
  onOpenIntruso,
  onOpenAnagramma,
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
  const playedGamesCount = playedArchive?.length || stats?.played || 0;
  const isCurrentCompleted = activePuzzle ? (stats?.completedPuzzles || []).includes(activePuzzle.id) : false;
  const sagaTotalStars = sagaProgress?.totalStars || 0;
  const sagaUnlocked = sagaProgress?.unlockedLevel || 1;
  const streak = stats?.currentStreak || 0;

  return (
    <div className="main-menu-container">
      <header className="main-navbar">
        <div className="main-nav-left">
          <div className="brand-badge-wrap">
            <div className="brand-logo-sq">
              <CustomSvg name="logo" type="emoji" size={32} />
            </div>
            <div className="brand-text-col">
              <h1 className="brand-main-title">Intrecci</h1>
              <span className="brand-edition-pill">Edizione Italiana</span>
            </div>
          </div>
        </div>

        <div className="main-nav-right">
          <div className="nav-stats-pill">
            <span className="stat-pill-item">
              <strong>{streak}</strong> <CustomSvg name="fire" type="emoji" size={16} />
            </span>
            <span className="stat-pill-sep" />
            <span className="stat-pill-item">
              <strong>{sagaTotalStars}</strong> <CustomSvg name="star" type="emoji" size={15} />
            </span>
          </div>

          <div className="nav-actions-group">
            <button
              className="nav-icon-btn"
              onClick={onOpenPuzzles}
              title={`Archivio (${playedGamesCount} giocate)`}
              aria-label="Archivio Partite"
            >
              <CustomSvg name="levels" type="icon" size={18} />
              <span className="btn-label-desktop">Archivio</span>
            </button>

            <button
              className="nav-icon-btn"
              onClick={onOpenStats}
              title="Statistiche"
              aria-label="Statistiche"
            >
              <CustomSvg name="stats" type="icon" size={18} />
              <span className="btn-label-desktop">Statistiche</span>
            </button>

            <button
              className="nav-icon-btn"
              onClick={onOpenSettings}
              title="Impostazioni"
              aria-label="Impostazioni"
            >
              <CustomSvg name="settings" type="icon" size={18} />
              <span className="btn-label-desktop">Impostazioni</span>
            </button>

            <button
              className="nav-icon-btn"
              onClick={onOpenHelp}
              title="Come Giocare"
              aria-label="Come Giocare"
            >
              <CustomSvg name="help" type="icon" size={18} />
              <span className="btn-label-desktop">Regole</span>
            </button>
          </div>
        </div>
      </header>

      <section className="hero-feature-card">
        <div className="hero-feature-header">
          <div className="hero-tag-pills">
            <span className={`hero-status-pill ${isCurrentCompleted ? 'completed' : 'active'}`}>
              <span className="status-dot" />
              {isCurrentCompleted ? 'Completata' : 'Partita del Giorno'}
            </span>
            <span className="hero-meta-pill">
              {activePuzzle?.difficulty || 'Bilanciato'}
            </span>
            <span className="hero-meta-pill">
              16 Parole • 4 Connessioni
            </span>
          </div>

          <span className="hero-puzzle-number">
            {activePuzzle?.id ? `#${activePuzzle.id}` : 'LIVE'}
          </span>
        </div>

        <div className="hero-feature-body">
          <h2 className="hero-feature-title">
            {activePuzzle?.title || 'Partita Principale'}
          </h2>
          <p className="hero-feature-desc">
            {activePuzzle?.subtitle || 'Trova i 4 collegamenti semantici segreti tra le 16 parole. Nessun percorso rigido: conta solo la deduzione pura.'}
          </p>

          <div className="hero-tiers-indicator">
            <div className="tier-pill tier-yellow">
              <span className="tier-dot" />
              <span>Diretto</span>
            </div>
            <div className="tier-pill tier-green">
              <span className="tier-dot" />
              <span>Medio</span>
            </div>
            <div className="tier-pill tier-blue">
              <span className="tier-dot" />
              <span>Complesso</span>
            </div>
            <div className="tier-pill tier-purple">
              <span className="tier-dot" />
              <span>Insidioso</span>
            </div>
          </div>
        </div>

        <div className="hero-feature-cta-row">
          <button className="cta-btn-primary" onClick={onStartGame}>
            <CustomSvg name="play" type="icon" size={20} />
            <span>{isCurrentCompleted ? 'Rigioca Partita' : 'Gioca Partita'}</span>
          </button>

          <button
            className="cta-btn-secondary"
            onClick={async () => {
              const newP = await onGenerateApi();
              if (newP) onStartGame();
            }}
            disabled={isGenerating}
          >
            <CustomSvg name="magic" type="icon" size={17} />
            <span>{isGenerating ? 'Generando...' : 'Nuova Partita Casuale'}</span>
          </button>
        </div>
      </section>

      <section className="modes-shelf-section">
        <div className="shelf-header-row">
          <div className="shelf-title-wrap">
            <h3 className="shelf-section-title">Altre Modalità & Sfide</h3>
            <span className="shelf-count-pill">4 Modalità</span>
          </div>
        </div>

        <div className="modes-cards-grid">
          <div
            className="mode-shelf-card mode-saga"
            onClick={onOpenSagaMap}
            role="button"
            tabIndex={0}
          >
            <div className="mode-card-top">
              <div className="mode-icon-circle bg-rose">
                <CustomSvg name="compass" type="emoji" size={28} />
              </div>
              <span className="mode-badge-tag tag-rose">Avventura</span>
            </div>

            <div className="mode-card-text">
              <h4 className="mode-card-title">Mappa dei Regni</h4>
              <p className="mode-card-desc">
                20 tappe attraverso 4 biomi con sfide a tempo o modalità zen rilassante.
              </p>
            </div>

            <div className="mode-card-foot">
              <span className="mode-stat-tag">
                Livello {sagaUnlocked}/20 • {sagaTotalStars} ★
              </span>
              <span className="mode-action-arrow">
                <CustomSvg name="chevronRight" type="icon" size={15} />
              </span>
            </div>
          </div>

          <div
            className="mode-shelf-card mode-intruso"
            onClick={onOpenIntruso}
            role="button"
            tabIndex={0}
          >
            <div className="mode-card-top">
              <div className="mode-icon-circle bg-blue">
                <CustomSvg name="target" type="emoji" size={28} />
              </div>
              <span className="mode-badge-tag tag-blue">Deduzione</span>
            </div>

            <div className="mode-card-text">
              <h4 className="mode-card-title">Caccia all'Intruso</h4>
              <p className="mode-card-desc">
                3 parole hanno un legame segreto, 1 è l'estranea. Scovale in 5 round veloci!
              </p>
            </div>

            <div className="mode-card-foot">
              <span className="mode-stat-tag">
                5 Round • +1 Aiuto
              </span>
              <span className="mode-action-arrow">
                <CustomSvg name="chevronRight" type="icon" size={15} />
              </span>
            </div>
          </div>

          <div
            className="mode-shelf-card mode-anagramma"
            onClick={onOpenAnagramma}
            role="button"
            tabIndex={0}
          >
            <div className="mode-card-top">
              <div className="mode-icon-circle bg-green">
                <CustomSvg name="magic" type="emoji" size={28} />
              </div>
              <span className="mode-badge-tag tag-green">Scramble</span>
            </div>

            <div className="mode-card-text">
              <h4 className="mode-card-title">Anagramma Espresso</h4>
              <p className="mode-card-desc">
                Ricomponi le lettere sparse per indovinare 3 parole italiane a tema.
              </p>
            </div>

            <div className="mode-card-foot">
              <span className="mode-stat-tag">
                3 Parole • +1 Aiuto
              </span>
              <span className="mode-action-arrow">
                <CustomSvg name="chevronRight" type="icon" size={15} />
              </span>
            </div>
          </div>

          <div
            className="mode-shelf-card mode-binomi"
            onClick={onOpenBinomi}
            role="button"
            tabIndex={0}
          >
            <div className="mode-card-top">
              <div className="mode-icon-circle bg-purple">
                <CustomSvg name="sparkle" type="emoji" size={28} />
              </div>
              <span className="mode-badge-tag tag-purple">Coppie</span>
            </div>

            <div className="mode-card-text">
              <h4 className="mode-card-title">Binomi Iconici</h4>
              <p className="mode-card-desc">
                Abbina celebri coppie e modi di dire della tradizione linguistica italiana.
              </p>
            </div>

            <div className="mode-card-foot">
              <span className="mode-stat-tag">
                10 Pacchetti • +1 Aiuto
              </span>
              <span className="mode-action-arrow">
                <CustomSvg name="chevronRight" type="icon" size={15} />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainMenu;
