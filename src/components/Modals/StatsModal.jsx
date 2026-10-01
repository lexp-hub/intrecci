import React from 'react';
import CustomSvg from '../../assets/svg/CustomSvg';

export const StatsModal = ({ isOpen, onClose, stats, totalPuzzles }) => {
  if (!isOpen) return null;

  const winPercentage = stats.played > 0 ? Math.round((stats.won / stats.played) * 100) : 0;
  const completedCount = (stats.completedPuzzles || []).length;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Chiudi">
          <CustomSvg name="close" type="icon" size={20} />
        </button>

        <div className="modal-title">
          <CustomSvg name="trophy" type="emoji" size={26} />
          <span>Statistiche</span>
        </div>

        <div className="modal-subtitle">
          Il tuo percorso tra le parole di Intrecci.
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, margin: '20px 0', textAlign: 'center' }}>
          <div style={{ background: 'var(--bg-card)', padding: '12px 6px', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 800 }}>{stats.played}</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>Giocate</div>
          </div>

          <div style={{ background: 'var(--bg-card)', padding: '12px 6px', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 800 }}>{winPercentage}%</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>Vittorie</div>
          </div>

          <div style={{ background: 'var(--bg-card)', padding: '12px 6px', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 800 }}>{stats.currentStreak}</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>Serie att.</div>
          </div>

          <div style={{ background: 'var(--bg-card)', padding: '12px 6px', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 800 }}>{stats.maxStreak}</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>Serie max</div>
          </div>
        </div>

        <div style={{ background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', padding: 14, marginBottom: 20 }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: 4, display: 'flex', justifyContent: 'space-between' }}>
            <span>Enigmi completati</span>
            <span>{completedCount} / {totalPuzzles}</span>
          </div>
          <div style={{ width: '100%', height: 8, background: 'var(--border-subtle)', borderRadius: 4, overflow: 'hidden' }}>
            <div
              style={{
                width: `${totalPuzzles > 0 ? (completedCount / totalPuzzles) * 100 : 0}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #FACC15, #4ADE80, #60A5FA, #C084FC)',
                transition: 'width 0.4s ease'
              }}
            />
          </div>
        </div>

        <button
          className="action-btn action-btn-primary"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={onClose}
        >
          Chiudi
        </button>
      </div>
    </div>
  );
};

export default StatsModal;
