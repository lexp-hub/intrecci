import React from 'react';
import CustomSvg from '../../assets/svg/CustomSvg';

export const MainMenu = ({
  onStartGame,
  onOpenSagaMap,
  onOpenBinomi,
  onOpenIntruso,
  onOpenAnagramma,
  onOpenGhigliottina,
  onOpenCatena,
  onOpenScala,
  onOpenSillabe,
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
    <div className="dashboard-container">
      <header className="main-navbar">
        <div className="main-nav-left">
          <div className="brand-badge-wrap">
            <div className="brand-logo-sq">
              <CustomSvg name="logo" type="emoji" size={26} />
            </div>
            <div className="brand-text-col">
              <span className="brand-main-title">Intrecci</span>
              <span className="brand-edition-pill">Edizione Italiana</span>
            </div>
          </div>
        </div>

        <div className="main-nav-center">
          <div className="nav-stats-pill">
            <span className="stat-pill-item" title="Serie di vittorie consecutive">
              <CustomSvg name="fire" type="emoji" size={15} />
              <strong>{streak}</strong>
            </span>
            <span className="stat-pill-sep" />
            <span className="stat-pill-item" title="Stelle raccolte">
              <CustomSvg name="star" type="emoji" size={14} />
              <strong>{sagaTotalStars}</strong>
            </span>
          </div>
        </div>

        <div className="main-nav-right">
          <div className="nav-actions-group">
            <button
              className="nav-icon-btn"
              onClick={onOpenPuzzles}
              title={`Archivio (${playedGamesCount} giocate)`}
              aria-label="Archivio Partite"
            >
              <CustomSvg name="levels" type="icon" size={15} />
              <span className="btn-label-desktop">Archivio</span>
            </button>

            <button
              className="nav-icon-btn"
              onClick={onOpenStats}
              title="Statistiche"
              aria-label="Statistiche"
            >
              <CustomSvg name="stats" type="icon" size={15} />
              <span className="btn-label-desktop">Stats</span>
            </button>

            <button
              className="nav-icon-btn"
              onClick={onOpenSettings}
              title="Impostazioni"
              aria-label="Impostazioni"
            >
              <CustomSvg name="settings" type="icon" size={15} />
              <span className="btn-label-desktop">Opzioni</span>
            </button>

            <button
              className="nav-icon-btn"
              onClick={onOpenHelp}
              title="Come Giocare"
              aria-label="Come Giocare"
            >
              <CustomSvg name="help" type="icon" size={15} />
              <span className="btn-label-desktop">Regole</span>
            </button>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-badge">PUZZLE LESSICALE QUOTIDIANO</div>
        <h1 className="hero-title-xxl">INTRECCI</h1>
        <p className="hero-claim">
          Trova i collegamenti semantici tra le parole. 4 gruppi da 4.
        </p>
      </section>

      <div className="hero-daily-card">
        <div className="daily-card-left">
          <div className="daily-badge-row">
            <span className={`daily-status-tag ${isCurrentCompleted ? 'completed' : 'active'}`}>
              <span className="status-dot" />
              {isCurrentCompleted ? 'COMPLETATA' : '★ PARTITA DEL GIORNO'}
            </span>
            <span className="daily-id-tag">
              {typeof activePuzzle?.id === 'number' ? `#${activePuzzle.id}` : 'CASUALE'}
            </span>
          </div>
          <h2 className="daily-title">
            {activePuzzle?.title || 'Partita Principale'}
          </h2>
          <p className="daily-subtitle">
            {activePuzzle?.subtitle || '16 parole misteriose, 4 connessioni da scoprire.'}
          </p>
        </div>

        <div className="daily-card-center">
          <div className="hero-tiers-indicator">
            <div className="tier-pill tier-yellow">
              <span className="tier-dot" />
              <span>Rosa</span>
            </div>
            <div className="tier-pill tier-green">
              <span className="tier-dot" />
              <span>Verde</span>
            </div>
            <div className="tier-pill tier-blue">
              <span className="tier-dot" />
              <span>Blu</span>
            </div>
            <div className="tier-pill tier-purple">
              <span className="tier-dot" />
              <span>Viola</span>
            </div>
          </div>
        </div>

        <div className="daily-card-right">
          <button className="daily-cta-primary" onClick={onStartGame}>
            <CustomSvg name="play" type="icon" size={18} />
            <span>{isCurrentCompleted ? 'RIGIOCA ORA' : 'GIOCA ORA'}</span>
          </button>
          <button
            className="daily-cta-secondary"
            onClick={async () => {
              const newP = await onGenerateApi();
              if (newP) onStartGame();
            }}
            disabled={isGenerating}
            title="Genera nuova partita casuale"
          >
            <CustomSvg name="magic" type="icon" size={15} />
            <span>{isGenerating ? '...' : 'Nuova'}</span>
          </button>
        </div>
      </div>

      <section className="minigames-section">
        <div className="section-header-row">
          <h3 className="section-header-title">MODALITÀ & MINIGIOCHI</h3>
          <span className="section-count-tag">8 Modalità</span>
        </div>

        <div className="minigames-grid">
          <div className="game-card card-saga" onClick={onOpenSagaMap} role="button" tabIndex={0}>
            <div className="game-card-top">
              <div className="game-icon-box bg-rose">
                <CustomSvg name="compass" type="emoji" size={24} />
              </div>
              <span className="game-badge-tag tag-rose">Avventura</span>
            </div>
            <div className="game-card-body">
              <h4 className="game-card-title">Mappa dei Regni</h4>
              <p className="game-card-desc">
                20 tappe attraverso 4 biomi con sfide a tempo o modalità zen rilassante.
              </p>
            </div>
            <div className="game-card-footer">
              <span className="game-stat-info">Liv. {sagaUnlocked}/20 • {sagaTotalStars} ★</span>
              <span className="game-action-link">ENTRA →</span>
            </div>
          </div>

          <div className="game-card card-ghigliottina" onClick={onOpenGhigliottina} role="button" tabIndex={0}>
            <div className="game-card-top">
              <div className="game-icon-box bg-purple">
                <CustomSvg name="key" type="emoji" size={24} />
              </div>
              <span className="game-badge-tag tag-purple">Filo Conduttore</span>
            </div>
            <div className="game-card-body">
              <h4 className="game-card-title">Il Filo Conduttore</h4>
              <p className="game-card-desc">
                5 indizi apparentemente distanti: indovina la parola segreta che li unisce.
              </p>
            </div>
            <div className="game-card-footer">
              <span className="game-stat-info">5 Round • +1 Aiuto</span>
              <span className="game-action-link">GIOCA →</span>
            </div>
          </div>

          <div className="game-card card-intruso" onClick={onOpenIntruso} role="button" tabIndex={0}>
            <div className="game-card-top">
              <div className="game-icon-box bg-blue">
                <CustomSvg name="target" type="emoji" size={24} />
              </div>
              <span className="game-badge-tag tag-blue">Deduzione</span>
            </div>
            <div className="game-card-body">
              <h4 className="game-card-title">Caccia all'Intruso</h4>
              <p className="game-card-desc">
                3 parole condividono un legame segreto, 1 è l'estranea da scovare.
              </p>
            </div>
            <div className="game-card-footer">
              <span className="game-stat-info">5 Round • +1 Aiuto</span>
              <span className="game-action-link">GIOCA →</span>
            </div>
          </div>

          <div className="game-card card-catena" onClick={onOpenCatena} role="button" tabIndex={0}>
            <div className="game-card-top">
              <div className="game-icon-box bg-green">
                <span style={{ fontSize: 22 }}>🔗</span>
              </div>
              <span className="game-badge-tag tag-green">Reazione</span>
            </div>
            <div className="game-card-body">
              <h4 className="game-card-title">Catena di Parole</h4>
              <p className="game-card-desc">
                Collega anello dopo anello la sequenza lessicale scegliendo il tassello giusto.
              </p>
            </div>
            <div className="game-card-footer">
              <span className="game-stat-info">10 Catene • +1 Aiuto</span>
              <span className="game-action-link">GIOCA →</span>
            </div>
          </div>

          <div className="game-card card-scala" onClick={onOpenScala} role="button" tabIndex={0}>
            <div className="game-card-top">
              <div className="game-icon-box bg-rose">
                <span style={{ fontSize: 22 }}>🪜</span>
              </div>
              <span className="game-badge-tag tag-rose">Ladder</span>
            </div>
            <div className="game-card-body">
              <h4 className="game-card-title">Scala di Parole</h4>
              <p className="game-card-desc">
                Cambia una sola lettera a ogni gradino per trasformare la parola iniziale.
              </p>
            </div>
            <div className="game-card-footer">
              <span className="game-stat-info">8 Scale • +1 Aiuto</span>
              <span className="game-action-link">GIOCA →</span>
            </div>
          </div>

          <div className="game-card card-sillabe" onClick={onOpenSillabe} role="button" tabIndex={0}>
            <div className="game-card-top">
              <div className="game-icon-box bg-purple">
                <span style={{ fontSize: 22 }}>🧩</span>
              </div>
              <span className="game-badge-tag tag-purple">Sillabario</span>
            </div>
            <div className="game-card-body">
              <h4 className="game-card-title">Sillabario Magico</h4>
              <p className="game-card-desc">
                Incastra le tessere di sillabe per ricostruire le 4 parole richieste.
              </p>
            </div>
            <div className="game-card-footer">
              <span className="game-stat-info">5 Schemi • +1 Aiuto</span>
              <span className="game-action-link">GIOCA →</span>
            </div>
          </div>

          <div className="game-card card-anagramma" onClick={onOpenAnagramma} role="button" tabIndex={0}>
            <div className="game-card-top">
              <div className="game-icon-box bg-green">
                <CustomSvg name="magic" type="emoji" size={24} />
              </div>
              <span className="game-badge-tag tag-green">Scramble</span>
            </div>
            <div className="game-card-body">
              <h4 className="game-card-title">Anagramma Espresso</h4>
              <p className="game-card-desc">
                Ricomponi le lettere sparse per indovinare 3 parole italiane a tema.
              </p>
            </div>
            <div className="game-card-footer">
              <span className="game-stat-info">3 Parole • +1 Aiuto</span>
              <span className="game-action-link">GIOCA →</span>
            </div>
          </div>

          <div className="game-card card-binomi" onClick={onOpenBinomi} role="button" tabIndex={0}>
            <div className="game-card-top">
              <div className="game-icon-box bg-blue">
                <CustomSvg name="sparkle" type="emoji" size={24} />
              </div>
              <span className="game-badge-tag tag-blue">Coppie</span>
            </div>
            <div className="game-card-body">
              <h4 className="game-card-title">Binomi Iconici</h4>
              <p className="game-card-desc">
                Abbina celebri coppie e modi di dire della tradizione linguistica italiana.
              </p>
            </div>
            <div className="game-card-footer">
              <span className="game-stat-info">10 Pacchetti • +1 Aiuto</span>
              <span className="game-action-link">GIOCA →</span>
            </div>
          </div>

          <div className="game-card card-archive" onClick={onOpenPuzzles} role="button" tabIndex={0}>
            <div className="game-card-top">
              <div className="game-icon-box bg-rose">
                <CustomSvg name="levels" type="icon" size={20} />
              </div>
              <span className="game-badge-tag tag-rose">Archivio</span>
            </div>
            <div className="game-card-body">
              <h4 className="game-card-title">Tutti gli Enigmi</h4>
              <p className="game-card-desc">
                Sfoglia l'archivio completo delle partite e rigioca gli enigmi precedenti.
              </p>
            </div>
            <div className="game-card-footer">
              <span className="game-stat-info">{totalPuzzles} Enigmi • {playedGamesCount} Giocate</span>
              <span className="game-action-link">SFOGLIA →</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainMenu;
