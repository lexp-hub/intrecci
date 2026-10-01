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
              <CustomSvg name="logo" type="emoji" size={54} />
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
            <span className="hero-stat-val" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              {sagaUnlocked}/20 <CustomSvg name="globe" type="emoji" size={19} />
            </span>
            <span className="hero-stat-lbl">Mappa a Tappe</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat-box">
            <span className="hero-stat-val" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              {sagaTotalStars} <CustomSvg name="star" type="emoji" size={18} />
            </span>
            <span className="hero-stat-lbl">Stelle Mappa</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat-box">
            <span className="hero-stat-val" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              {stats.currentStreak} <CustomSvg name="fire" type="emoji" size={18} />
            </span>
            <span className="hero-stat-lbl">Serie Vittorie</span>
          </div>
        </div>
      </header>

      <div className="menu-dashboard-grid">
        <section className="menu-col-featured">
          <div
            className="menu-card-btn menu-card-saga"
            onClick={onOpenSagaMap}
            role="button"
            tabIndex={0}
          >
            <div className="menu-card-icon-box box-amber">
              <CustomSvg name="compass" type="emoji" size={28} />
            </div>
            <div className="menu-card-info">
              <div className="menu-badge-row">
                <span className="badge-new-mode">Modalità Avventura</span>
                <span className="badge-stars-count" style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
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
            className="menu-card-btn menu-card-binomi"
            onClick={onOpenBinomi}
            role="button"
            tabIndex={0}
          >
            <div className="menu-card-icon-box box-purple">
              <CustomSvg name="sparkle" type="emoji" size={28} />
            </div>
            <div className="menu-card-info">
              <div className="menu-badge-row">
                <span className="badge-minigame">Nuovo Minigioco</span>
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

          <div className="featured-puzzle-card">
            <div className="featured-puzzle-header">
              <span className="featured-badge">
                {isCurrentCompleted ? 'Partita Conclusa' : 'Sfida Dinamica'}
              </span>
              <span className="featured-difficulty">{activePuzzle?.difficulty || 'Dinamico'}</span>
            </div>

            <div className="featured-puzzle-body">
              <h2 className="featured-title">{activePuzzle?.title || 'Partita in Corso'}</h2>
              <p className="featured-desc">
                {activePuzzle?.subtitle || 'Generata casualmente dal database — nessuna soluzione fissa online!'}
              </p>

              <div className="featured-categories-preview">
                <span className="preview-dot dot-yellow" title="Categoria Gialla: Semplice" />
                <span className="preview-dot dot-green" title="Categoria Verde: Media" />
                <span className="preview-dot dot-blue" title="Categoria Blu: Difficile" />
                <span className="preview-dot dot-purple" title="Categoria Viola: Insidiosa" />
                <span className="preview-label">4 categorie da scoprire</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 10, width: '100%' }}>
              <button className="menu-primary-btn" style={{ flex: 1 }} onClick={onStartGame}>
                <CustomSvg name="play" type="icon" size={20} />
                <span>{isCurrentCompleted ? 'Rigioca Partita' : 'Gioca Partita'}</span>
              </button>

              <button
                className="action-btn action-btn-primary"
                style={{
                  padding: '0 16px',
                  background: 'var(--color-cat-yellow-bg)',
                  color: 'var(--color-cat-yellow-text)',
                  border: '1.5px solid var(--color-cat-yellow-border)',
                  borderRadius: 'var(--radius-md)'
                }}
                onClick={async () => {
                  const newP = await onGenerateApi();
                  if (newP) onStartGame();
                }}
                disabled={isGenerating}
                title="Genera nuova partita casuale"
              >
                <CustomSvg name="magic" type="icon" size={17} />
                <span>{isGenerating ? '...' : 'Nuova'}</span>
              </button>
            </div>
          </div>
        </section>

        <section className="menu-col-actions">
          <div
            className="menu-card-btn menu-card-magic"
            onClick={async () => {
              const newP = await onGenerateApi();
              if (newP) onStartGame();
            }}
            role="button"
            tabIndex={0}
          >
            <div className="menu-card-icon-box magic-box">
              <CustomSvg name="magic" type="emoji" size={26} />
            </div>
            <div className="menu-card-info">
              <div className="menu-card-title">
                {isGenerating ? 'Generazione in corso...' : 'Nuova Partita Casuale'}
              </div>
              <div className="menu-card-subtitle">
                Genera un enigma inedito dal database lessicale italiano
              </div>
            </div>
            <div className="menu-card-arrow">
              <CustomSvg name="chevronRight" type="icon" size={20} />
            </div>
          </div>

          <div
            className="menu-card-btn"
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
                Storico delle tue partite reali ({playedGamesCount} giocate)
              </div>
            </div>
            <div className="menu-card-arrow">
              <CustomSvg name="chevronRight" type="icon" size={20} />
            </div>
          </div>

          <div
            className="menu-card-btn"
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
                {stats.played} partite • {stats.won} vittorie • serie {stats.currentStreak} <CustomSvg name="fire" type="emoji" size={16} />
              </div>
            </div>
            <div className="menu-card-arrow">
              <CustomSvg name="chevronRight" type="icon" size={20} />
            </div>
          </div>

          <div
            className="menu-card-btn"
            onClick={onOpenSettings}
            role="button"
            tabIndex={0}
          >
            <div className="menu-card-icon-box box-amber">
              <CustomSvg name="settings" type="icon" size={24} />
            </div>
            <div className="menu-card-info">
              <div className="menu-card-title">Impostazioni</div>
              <div className="menu-card-subtitle">Tema scuro, effetti neve, suoni e feedback</div>
            </div>
            <div className="menu-card-arrow">
              <CustomSvg name="chevronRight" type="icon" size={20} />
            </div>
          </div>

          <div
            className="menu-card-btn"
            onClick={onOpenHelp}
            role="button"
            tabIndex={0}
          >
            <div className="menu-card-icon-box box-blue">
              <CustomSvg name="help" type="icon" size={24} />
            </div>
            <div className="menu-card-info">
              <div className="menu-card-title">Regole e Guida</div>
              <div className="menu-card-subtitle">Come giocare, livelli di colore e scorciatoie</div>
            </div>
            <div className="menu-card-arrow">
              <CustomSvg name="chevronRight" type="icon" size={20} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainMenu;
