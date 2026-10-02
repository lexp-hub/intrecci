import React, { useMemo } from 'react';
import CustomSvg from '../../assets/svg/CustomSvg';

const FALLBACK_PREVIEW_WORDS = [
  'LIMONE', 'PENNE', 'CALCIO', 'CAPPOTTO',
  'ARANCIA', 'FUSILLI', 'BASKET', 'CAMICIA',
  'MANDARINO', 'SPAGHETTI', 'TENNIS', 'MAGLIONE',
  'CEDRO', 'RIGATONI', 'RUGBY', 'GIACCA'
];

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

  const previewWords = useMemo(() => {
    if (activePuzzle?.groups && activePuzzle.groups.length > 0) {
      const words = activePuzzle.groups.flatMap(g => g.words || []);
      if (words.length >= 16) return words.slice(0, 16);
    }
    return FALLBACK_PREVIEW_WORDS;
  }, [activePuzzle]);

  const winRate = stats.played > 0 ? Math.round((stats.won / stats.played) * 100) : 0;

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
              <span className="bento-pill bento-pill-accent">
                16 Parole • 4 Connessioni
              </span>
            </div>
            <span className="bento-meta-id">
              {activePuzzle?.id ? `#${activePuzzle.id}` : 'LIVE'}
            </span>
          </div>

          <div className="bento-hero-split">
            <div className="bento-hero-body">
              <div>
                <h2 className="bento-hero-title">
                  {activePuzzle?.title || 'Partita In Corso'}
                </h2>
                <p className="bento-hero-subtitle">
                  {activePuzzle?.subtitle || 'Enigma generato dal database lessicale italiano — nessuna soluzione fissa.'}
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
            </div>

            <div
              className="bento-hero-preview"
              onClick={onStartGame}
              role="button"
              tabIndex={0}
              title="Clicca per giocare lo schema"
            >
              <div className="bento-preview-header">
                <span className="bento-preview-title">Anteprima Griglia</span>
                <span className="bento-preview-badge">16 Tessere</span>
              </div>
              <div className="bento-preview-grid">
                {previewWords.map((word, idx) => (
                  <div key={idx} className="bento-preview-tile">
                    {word}
                  </div>
                ))}
              </div>
              <div className="bento-preview-footer">
                <span>Tocca per entrare nel gioco</span>
                <CustomSvg name="chevronRight" type="icon" size={14} />
              </div>
            </div>
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
              Avventura a Tappe
            </span>
            <span className="bento-meta-id">{sagaTotalStars}/60 ★</span>
          </div>

          <div className="bento-mode-content">
            <div className="bento-mode-icon icon-amber">
              <CustomSvg name="compass" type="emoji" size={32} />
            </div>
            <div className="bento-mode-text-wrap">
              <div className="bento-card-heading">Mappa dei Regni</div>
              <div className="bento-card-text">
                20 tappe progressive lungo 4 biomi con sfide a tempo o zen
              </div>
            </div>
          </div>

          <div className="bento-biome-track">
            <div className={`biome-step ${sagaUnlocked >= 1 ? 'active' : ''}`}>
              <span className="biome-dot">🌱</span>
              <span className="biome-name">Pianura</span>
            </div>
            <div className={`biome-line ${sagaUnlocked >= 6 ? 'filled' : ''}`} />
            <div className={`biome-step ${sagaUnlocked >= 6 ? 'active' : ''}`}>
              <span className="biome-dot">🌲</span>
              <span className="biome-name">Foresta</span>
            </div>
            <div className={`biome-line ${sagaUnlocked >= 11 ? 'filled' : ''}`} />
            <div className={`biome-step ${sagaUnlocked >= 11 ? 'active' : ''}`}>
              <span className="biome-dot">⛰️</span>
              <span className="biome-name">Montagna</span>
            </div>
            <div className={`biome-line ${sagaUnlocked >= 16 ? 'filled' : ''}`} />
            <div className={`biome-step ${sagaUnlocked >= 16 ? 'active' : ''}`}>
              <span className="biome-dot">🏰</span>
              <span className="biome-name">Castello</span>
            </div>
          </div>

          <div className="bento-card-footer">
            <span className="bento-progress-chip">
              Livello attuale: <strong>{sagaUnlocked}</strong> di 20
            </span>
            <span className="bento-arrow-circle">
              <CustomSvg name="chevronRight" type="icon" size={16} />
            </span>
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
              Minigioco Rapido
            </span>
            <span className="bento-meta-id">10 Pacchetti</span>
          </div>

          <div className="bento-mode-content">
            <div className="bento-mode-icon icon-purple">
              <CustomSvg name="sparkle" type="emoji" size={32} />
            </div>
            <div className="bento-mode-text-wrap">
              <div className="bento-card-heading">Binomi Iconici</div>
              <div className="bento-card-text">
                Abbina le celebri coppie e modi di dire della tradizione italiana
              </div>
            </div>
          </div>

          <div className="bento-pairs-preview">
            <div className="bento-pair-chip">
              <span className="pair-word">Pane</span>
              <span className="pair-sep">&</span>
              <span className="pair-word">Burro</span>
            </div>
            <div className="bento-pair-chip">
              <span className="pair-word">Gatto</span>
              <span className="pair-sep">&</span>
              <span className="pair-word">Volpe</span>
            </div>
            <div className="bento-pair-chip">
              <span className="pair-word">Anima</span>
              <span className="pair-sep">&</span>
              <span className="pair-word">Corpo</span>
            </div>
          </div>

          <div className="bento-card-footer">
            <span className="bento-progress-chip">
              Guadagna gettoni aiuto extra
            </span>
            <span className="bento-arrow-circle">
              <CustomSvg name="chevronRight" type="icon" size={16} />
            </span>
          </div>
        </section>

        <section
          className="bento-card bento-card-interactive bento-card-util"
          onClick={onOpenPuzzles}
          role="button"
          tabIndex={0}
        >
          <div className="bento-util-top">
            <div className="bento-util-icon icon-blue">
              <CustomSvg name="book" type="emoji" size={24} />
            </div>
            <span className="bento-arrow-circle sm">
              <CustomSvg name="chevronRight" type="icon" size={14} />
            </span>
          </div>
          <div className="bento-util-info">
            <div className="bento-card-heading">Archivio Partite</div>
            <div className="bento-card-text">
              {playedGamesCount} {playedGamesCount === 1 ? 'partita salvata' : 'partite salvate'}
            </div>
          </div>
          <div className="bento-util-subtag">
            <span>Cronologia</span>
          </div>
        </section>

        <section
          className="bento-card bento-card-interactive bento-card-util"
          onClick={onOpenStats}
          role="button"
          tabIndex={0}
        >
          <div className="bento-util-top">
            <div className="bento-util-icon icon-green">
              <CustomSvg name="stats" type="icon" size={24} />
            </div>
            <span className="bento-arrow-circle sm">
              <CustomSvg name="chevronRight" type="icon" size={14} />
            </span>
          </div>
          <div className="bento-util-info">
            <div className="bento-card-heading">Statistiche</div>
            <div className="bento-card-text">
              {stats.won} vittorie • serie {stats.currentStreak}
            </div>
          </div>
          <div className="bento-util-subtag">
            <span>{winRate}% vittorie</span>
          </div>
        </section>

        <section
          className="bento-card bento-card-interactive bento-card-util"
          onClick={onOpenSettings}
          role="button"
          tabIndex={0}
        >
          <div className="bento-util-top">
            <div className="bento-util-icon icon-slate">
              <CustomSvg name="settings" type="icon" size={24} />
            </div>
            <span className="bento-arrow-circle sm">
              <CustomSvg name="chevronRight" type="icon" size={14} />
            </span>
          </div>
          <div className="bento-util-info">
            <div className="bento-card-heading">Impostazioni</div>
            <div className="bento-card-text">Tema notturno e audio</div>
          </div>
          <div className="bento-util-subtag">
            <span>Preferenze</span>
          </div>
        </section>

        <section
          className="bento-card bento-card-interactive bento-card-util"
          onClick={onOpenHelp}
          role="button"
          tabIndex={0}
        >
          <div className="bento-util-top">
            <div className="bento-util-icon icon-sky">
              <CustomSvg name="help" type="icon" size={24} />
            </div>
            <span className="bento-arrow-circle sm">
              <CustomSvg name="chevronRight" type="icon" size={14} />
            </span>
          </div>
          <div className="bento-util-info">
            <div className="bento-card-heading">Regole e Guida</div>
            <div className="bento-card-text">Istruzioni e comandi</div>
          </div>
          <div className="bento-util-subtag">
            <span>Scorciatoie</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainMenu;
