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
  totalPuzzles,
  sagaProgress
}) => {
  const completedCount = (stats.completedPuzzles || []).length;
  const isCurrentCompleted = (stats.completedPuzzles || []).includes(activePuzzle.id);
  const winPercent = stats.played > 0 ? Math.round((stats.won / stats.played) * 100) : 0;
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
            Affronta la mappa a tappe o rilassati con i binomi iconici italiani!
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
              <span className="featured-badge">Enigma In Evidenza</span>
              <span className="featured-difficulty">{activePuzzle.difficulty}</span>
            </div>

            <div className="featured-puzzle-body">
              <h2 className="featured-title">{activePuzzle.title}</h2>
              <p className="featured-desc">{activePuzzle.subtitle}</p>

              <div className="featured-categories-preview">
                <span className="preview-dot dot-yellow" title="Categoria Gialla: Semplice" />
                <span className="preview-dot dot-green" title="Categoria Verde: Media" />
                <span className="preview-dot dot-blue" title="Categoria Blu: Difficile" />
                <span className="preview-dot dot-purple" title="Categoria Viola: Insidiosa" />
                <span className="preview-label">4 categorie da scoprire</span>
              </div>
            </div>

            <button className="menu-primary-btn" onClick={onStartGame}>
              <CustomSvg name="play" type="icon" size={20} />
              <span>{isCurrentCompleted ? 'Rigioca Enigma' : 'Gioca Classico'}</span>
            </button>
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
                {isGenerating ? 'Generazione in corso...' : 'Database Parole API'}
              </div>
              <div className="menu-card-subtitle">
                Genera enigmi infiniti dal lessico italiano
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
              <CustomSvg name="levels" type="icon" size={24} />
            </div>
            <div className="menu-card-info">
              <div className="menu-card-title">Archivio Enigmi</div>
              <div className="menu-card-subtitle">
                Sfoglia l'intera collezione ({completedCount}/{totalPuzzles} completati)
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
              <div className="menu-card-title">Impostazioni & Atmosfera</div>
              <div className="menu-card-subtitle">
                Tema notturno, neve che cade, effetti audio
              </div>
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
            <div className="menu-card-icon-box box-purple">
              <CustomSvg name="help" type="icon" size={24} />
            </div>
            <div className="menu-card-info">
              <div className="menu-card-title">Come si Gioca & Regole</div>
              <div className="menu-card-subtitle">
                Logica dei collegamenti, modalità e legenda colori
              </div>
            </div>
            <div className="menu-card-arrow">
              <CustomSvg name="chevronRight" type="icon" size={20} />
            </div>
          </div>
        </section>
      </div>

      <footer className="menu-footer">
        Ispirato a <em>Connections</em> • Edizione in Lingua Italiana • Stile <em>Giochini di Parole</em>
      </footer>
    </div>
  );
};

export default MainMenu;
