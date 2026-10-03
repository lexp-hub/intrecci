import React from 'react';
import CustomSvg from '../../assets/svg/CustomSvg';

const VisualizerBars = ({ ratio = 0.5, count = 8 }) => {
  const activeCount = Math.min(Math.max(Math.round(ratio * count), 0), count);
  const barHeights = [40, 65, 85, 50, 95, 70, 90, 100, 60, 80];
  return (
    <div className="swiss-visualizer-bars" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`swiss-vis-bar ${i < activeCount ? 'is-active' : ''}`}
          style={{ height: `${barHeights[i % barHeights.length]}%` }}
        />
      ))}
    </div>
  );
};

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
  totalPuzzles = 100,
  sagaProgress
}) => {
  const playedGamesCount = playedArchive?.length || stats?.played || 0;
  const isCurrentCompleted = activePuzzle ? (stats?.completedPuzzles || []).includes(activePuzzle.id) : false;
  const sagaTotalStars = sagaProgress?.totalStars || 0;
  const sagaUnlocked = sagaProgress?.unlockedLevel || 1;
  const streak = stats?.currentStreak || 0;
  const maxStreak = Math.max(stats?.maxStreak || 0, streak, 1);
  const playedTotal = stats?.played || playedGamesCount || 0;
  const wonTotal = stats?.won || (stats?.completedPuzzles || []).length || 0;
  const winRate = playedTotal > 0 ? Math.round((wonTotal / playedTotal) * 100) : 100;
  const completedCount = (stats?.completedPuzzles || []).length || wonTotal;

  const previewWords = (activePuzzle?.groups || [])
    .flatMap((g) => g.words || [])
    .slice(0, 16);
  const fallbackTiles = [
    'PAROLA', 'CHIAVE', 'LEGAME', 'LOGICA',
    'SENSO', 'INDAGINE', 'ENIGMA', 'INTRECCIO',
    'SCHEMA', 'TRACCIA', 'FILO', 'GRUPPO',
    'TESSERA', 'SIMBOLO', 'RETE', 'RADICE'
  ];
  const displayTiles = previewWords.length === 16 ? previewWords : fallbackTiles;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const modes = [
    {
      id: 'saga',
      name: 'Mappa dei Regni',
      icon: <CustomSvg name="compass" type="emoji" size={20} />,
      badge: 'AVVENTURA',
      badgeClass: 'tag-rose',
      info: `Livello ${sagaUnlocked}/20 • ${sagaTotalStars} ★ totali`,
      actionText: 'ENTRA →',
      action: onOpenSagaMap
    },
    {
      id: 'ghigliottina',
      name: 'Il Filo Conduttore',
      icon: <CustomSvg name="key" type="emoji" size={20} />,
      badge: 'FILO LOGICO',
      badgeClass: 'tag-purple',
      info: '5 Indizi • Parola segreta unificante',
      actionText: 'GIOCA →',
      action: onOpenGhigliottina
    },
    {
      id: 'intruso',
      name: "Caccia all'Intruso",
      icon: <CustomSvg name="target" type="emoji" size={20} />,
      badge: 'DEDUZIONE',
      badgeClass: 'tag-blue',
      info: "5 Round • Trova l'estranea nel gruppo",
      actionText: 'GIOCA →',
      action: onOpenIntruso
    },
    {
      id: 'catena',
      name: 'Catena di Parole',
      icon: <span style={{ fontSize: 18 }}>🔗</span>,
      badge: 'REAZIONE',
      badgeClass: 'tag-green',
      info: '10 Sequenze continue di anelli lessicali',
      actionText: 'GIOCA →',
      action: onOpenCatena
    },
    {
      id: 'scala',
      name: 'Scala di Parole',
      icon: <span style={{ fontSize: 18 }}>🪜</span>,
      badge: 'WORD LADDER',
      badgeClass: 'tag-rose',
      info: '8 Schemi • Una lettera alla volta',
      actionText: 'GIOCA →',
      action: onOpenScala
    },
    {
      id: 'sillabe',
      name: 'Sillabario Magico',
      icon: <span style={{ fontSize: 18 }}>🧩</span>,
      badge: 'COMPOSIZIONE',
      badgeClass: 'tag-purple',
      info: '5 Schemi a incastro sillabico',
      actionText: 'GIOCA →',
      action: onOpenSillabe
    },
    {
      id: 'anagramma',
      name: 'Anagramma Espresso',
      icon: <CustomSvg name="magic" type="emoji" size={20} />,
      badge: 'SCRAMBLE',
      badgeClass: 'tag-green',
      info: 'Ricomponi 3 parole a tema a tempo',
      actionText: 'GIOCA →',
      action: onOpenAnagramma
    },
    {
      id: 'binomi',
      name: 'Binomi Iconici',
      icon: <CustomSvg name="sparkle" type="emoji" size={20} />,
      badge: 'COPPIE',
      badgeClass: 'tag-blue',
      info: '10 Modi di dire ed espressioni celebri',
      actionText: 'GIOCA →',
      action: onOpenBinomi
    }
  ];

  return (
    <div className="dashboard-container">
      <header className="main-navbar">
        <div className="main-nav-left">
          <div className="brand-badge-wrap">
            <div className="brand-logo-sq">
              <CustomSvg name="logo" type="emoji" size={24} />
            </div>
            <div className="brand-text-col">
              <span className="brand-main-title">Intrecci</span>
              <span className="brand-edition-pill">Edizione Italiana</span>
            </div>
          </div>
        </div>

        <nav className="swiss-nav-anchors" aria-label="Sezioni">
          <button className="swiss-anchor-btn" onClick={() => scrollTo('sec-enigma')}>
            <span className="swiss-anchor-num">01</span> Enigma
          </button>
          <button className="swiss-anchor-btn" onClick={() => scrollTo('sec-performance')}>
            <span className="swiss-anchor-num">02</span> Performance
          </button>
          <button className="swiss-anchor-btn" onClick={() => scrollTo('sec-palestra')}>
            <span className="swiss-anchor-num">03</span> Palestra
          </button>
          <button className="swiss-anchor-btn" onClick={() => scrollTo('sec-archivio')}>
            <span className="swiss-anchor-num">04</span> Risorse
          </button>
        </nav>

        <div className="main-nav-right">
          <div className="nav-stats-pill">
            <span className="stat-pill-item" title="Serie di vittorie consecutive">
              <CustomSvg name="fire" type="emoji" size={14} />
              <strong>{streak}</strong>
            </span>
            <span className="stat-pill-sep" />
            <span className="stat-pill-item" title="Stelle raccolte">
              <CustomSvg name="star" type="emoji" size={13} />
              <strong>{sagaTotalStars}</strong>
            </span>
          </div>

          <div className="nav-actions-group">
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
        <div className="hero-badge">SWISS LESSICALE // EDIZIONE QUOTIDIANA</div>
        <h1 className="hero-title-xxl">INTRECCI</h1>
        <p className="hero-claim">
          Architettura semantica e deduzione logica. Trova i 4 collegamenti invisibili tra 16 parole.
        </p>
      </section>

      <section id="sec-enigma" className="swiss-section">
        <div className="swiss-section-header">
          <span className="swiss-section-num">01</span>
          <div className="swiss-section-meta">
            <span className="swiss-section-tag">ENIGMA DEL GIORNO // SESSIONE PRINCIPALE</span>
            <h2 className="swiss-section-title">
              {typeof activePuzzle?.id === 'number'
                ? `PARTITA #${activePuzzle.id} — ${activePuzzle.title || 'Il Benvenuto'}`
                : `PARTITA LIVE — ${activePuzzle?.title || 'Sessione Dinamica'}`}
            </h2>
            <p className="swiss-section-desc">
              Trova i 4 collegamenti semantici tra 16 parole. Nessun walkthrough, 4 errori concessi.
            </p>
          </div>
        </div>

        <div className="swiss-hero-card">
          <div className="swiss-hero-info-col">
            <div className="daily-badge-row">
              <span className={`daily-status-tag ${isCurrentCompleted ? 'completed' : 'active'}`}>
                <span className="status-dot" />
                {isCurrentCompleted
                  ? 'COMPLETATA'
                  : (typeof activePuzzle?.id === 'number' ? '★ PARTITA DEL GIORNO' : '★ PARTITA CASUALE')}
              </span>
              <span className="daily-id-tag">
                {typeof activePuzzle?.id === 'number' ? `#${activePuzzle.id}` : 'LIVE'}
              </span>
            </div>

            <h3 className="swiss-enigma-lead-title">
              {activePuzzle?.subtitle || '16 parole misteriose, 4 connessioni da scoprire.'}
            </h3>

            <div className="hero-tiers-indicator">
              <div className="tier-pill tier-yellow">
                <span className="tier-dot" />
                <span>Rosa • Base</span>
              </div>
              <div className="tier-pill tier-green">
                <span className="tier-dot" />
                <span>Verde • Medio</span>
              </div>
              <div className="tier-pill tier-blue">
                <span className="tier-dot" />
                <span>Blu • Complesso</span>
              </div>
              <div className="tier-pill tier-purple">
                <span className="tier-dot" />
                <span>Viola • Esperto</span>
              </div>
            </div>

            <div className="swiss-hero-actions">
              <button className="daily-cta-primary" onClick={onStartGame}>
                <CustomSvg name="play" type="icon" size={18} />
                <span>{isCurrentCompleted ? 'RIGIOCA PARTITA' : 'GIOCA PARTITA DEL GIORNO'}</span>
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
                <CustomSvg name="refresh" type="icon" size={14} />
                <span>{isGenerating ? '...' : 'Nuova Casuale'}</span>
              </button>
            </div>
          </div>

          <div
            className="swiss-mockup"
            onClick={onStartGame}
            role="button"
            tabIndex={0}
            title="Avvia partita"
          >
            <div className="swiss-mockup-header">
              <div className="swiss-mockup-dots">
                <span className="mockup-dot red" />
                <span className="mockup-dot yellow" />
                <span className="mockup-dot green" />
              </div>
              <span className="swiss-mockup-label">intrecci.app // griglia-4x4</span>
              <span className="swiss-mockup-state">16 PAROLE</span>
            </div>
            <div className="swiss-mockup-grid">
              {displayTiles.map((word, idx) => (
                <div key={idx} className="swiss-mockup-tile">
                  {word}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sec-performance" className="swiss-section">
        <div className="swiss-section-header">
          <span className="swiss-section-num">02</span>
          <div className="swiss-section-meta">
            <span className="swiss-section-tag">METRICHE & TELEMETRIA // SESSIONE ATTUALE</span>
            <h2 className="swiss-section-title">Le Tue Performance</h2>
            <p className="swiss-section-desc">
              Analisi quantitativa dei tuoi progressi, costanza di risoluzione ed efficacia lessicale.
            </p>
          </div>
        </div>

        <div className="swiss-visualizer-grid">
          <div className="swiss-stat-card">
            <div className="swiss-stat-top">
              <VisualizerBars ratio={winRate / 100} count={8} />
              <span className="swiss-stat-val">{winRate}%</span>
            </div>
            <span className="swiss-stat-label">Percentuale Vittorie</span>
            <p className="swiss-stat-sub">{wonTotal} vinte su {playedTotal} giocate</p>
          </div>

          <div className="swiss-stat-card">
            <div className="swiss-stat-top">
              <VisualizerBars ratio={Math.min(streak / Math.max(maxStreak, 5), 1)} count={8} />
              <span className="swiss-stat-val">{streak}</span>
            </div>
            <span className="swiss-stat-label">Serie Attuale</span>
            <p className="swiss-stat-sub">Record personale: {maxStreak} giorni</p>
          </div>

          <div className="swiss-stat-card">
            <div className="swiss-stat-top">
              <VisualizerBars ratio={Math.min(completedCount / Math.max(totalPuzzles, 1), 1)} count={8} />
              <span className="swiss-stat-val">{completedCount}</span>
            </div>
            <span className="swiss-stat-label">Enigmi Risolti</span>
            <p className="swiss-stat-sub">Su {totalPuzzles} schemi pubblicati</p>
          </div>

          <div className="swiss-stat-card">
            <div className="swiss-stat-top">
              <VisualizerBars ratio={Math.min(sagaTotalStars / 60, 1)} count={8} />
              <span className="swiss-stat-val">{sagaTotalStars}</span>
            </div>
            <span className="swiss-stat-label">Stelle Avventura</span>
            <p className="swiss-stat-sub">Mondo dei Regni: Liv. {sagaUnlocked}/20</p>
          </div>
        </div>
      </section>

      <section id="sec-palestra" className="swiss-section">
        <div className="swiss-section-header">
          <span className="swiss-section-num">03</span>
          <div className="swiss-section-meta">
            <span className="swiss-section-tag">MINIGIOCHI & PALESTRA LESSICALE</span>
            <h2 className="swiss-section-title">Modalità di Allenamento</h2>
            <p className="swiss-section-desc">
              8 circuiti rapidi di deduzione, associazioni semantiche, anagrammi e giochi di parole.
            </p>
          </div>
        </div>

        <div className="swiss-table-container">
          <div className="swiss-table-header">
            <span>MODALITÀ</span>
            <span>CATEGORIA</span>
            <span>STATO / PROGRESSIONE</span>
            <span style={{ textAlign: 'right' }}>AZIONE</span>
          </div>

          <div className="swiss-table-body">
            {modes.map((m) => (
              <div
                key={m.id}
                className="swiss-table-row"
                onClick={m.action}
                role="button"
                tabIndex={0}
              >
                <div className="col-mode">
                  <div className="swiss-row-icon">{m.icon}</div>
                  <span className="swiss-row-name">{m.name}</span>
                </div>
                <div className="col-tag">
                  <span className={`game-badge-tag ${m.badgeClass}`}>{m.badge}</span>
                </div>
                <div className="col-info">
                  <span>{m.info}</span>
                </div>
                <div className="col-action">
                  <span className="swiss-row-btn">{m.actionText}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sec-archivio" className="swiss-section">
        <div className="swiss-section-header">
          <span className="swiss-section-num">04</span>
          <div className="swiss-section-meta">
            <span className="swiss-section-tag">CRONOLOGIA & RISORSE</span>
            <h2 className="swiss-section-title">Archivio & Documentazione</h2>
            <p className="swiss-section-desc">
              Accesso allo storico delle sessioni, regolamento ufficiale e impostazioni di sistema.
            </p>
          </div>
        </div>

        <div className="swiss-archive-grid">
          <div className="swiss-archive-card" onClick={onOpenPuzzles} role="button" tabIndex={0}>
            <div className="swiss-archive-top">
              <span className="game-badge-tag tag-rose">ARCHIVIO PARTITE</span>
              <span className="swiss-archive-badge">{playedGamesCount} / {totalPuzzles} Risolte</span>
            </div>
            <h4 className="swiss-archive-title">Catalogo Completo degli Enigmi</h4>
            <p className="swiss-archive-desc">
              Sfoglia tutti i {totalPuzzles} puzzle lessicali pubblicati fino ad oggi. Rigioca qualsiasi partita passata senza limiti di tempo.
            </p>
            <div className="swiss-archive-footer">
              <span className="swiss-archive-action">SFOGLIA CATALOGO →</span>
            </div>
          </div>

          <div className="swiss-quick-tools-card">
            <span className="swiss-tools-tag">AZIONI RAPIDE</span>
            <h4 className="swiss-tools-title">Strumenti di Gioco</h4>
            <div className="swiss-tools-list">
              <button className="swiss-tool-btn" onClick={onOpenStats}>
                <CustomSvg name="stats" type="icon" size={16} />
                <span>Dettaglio Statistiche</span>
                <span className="tool-arrow">→</span>
              </button>
              <button className="swiss-tool-btn" onClick={onOpenHelp}>
                <CustomSvg name="help" type="icon" size={16} />
                <span>Regole & Modalità</span>
                <span className="tool-arrow">→</span>
              </button>
              <button className="swiss-tool-btn" onClick={onOpenSettings}>
                <CustomSvg name="settings" type="icon" size={16} />
                <span>Preferenze & Suoni</span>
                <span className="tool-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainMenu;
