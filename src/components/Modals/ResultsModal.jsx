import React, { useState } from 'react';
import CustomSvg from '../../assets/svg/CustomSvg';
import { CATEGORY_COLORS } from '../../data/puzzles';
import { generateShareText, copyToClipboard } from '../../utils/shareResults';

export const ResultsModal = ({
  isOpen,
  onClose,
  isWon,
  guessHistory,
  puzzle,
  onOpenPuzzles
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleShare = async () => {
    const text = generateShareText(guessHistory, puzzle, isWon);
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Chiudi">
          <CustomSvg name="close" type="icon" size={20} />
        </button>

        <div className="modal-title">
          <CustomSvg name={isWon ? 'trophy' : 'puzzle'} type="emoji" size={28} />
          <span>{isWon ? 'Vittoria straordinaria!' : 'Partita terminata'}</span>
        </div>

        <div className="modal-subtitle">
          {isWon
            ? `Hai risolto "${puzzle.title}" in ${guessHistory.length} tentativi!`
            : `Non scoraggiarti! Ogni errore è una nuova parola da ricordare.`}
        </div>

        <div className="results-grid-preview">
          {guessHistory.map((guess, idx) => (
            <div key={idx} style={{ display: 'flex', gap: 6 }}>
              {guess.colors.map((color, cIdx) => (
                <div
                  key={cIdx}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 6,
                    backgroundColor: CATEGORY_COLORS[color]?.bg || '#E2E8F0',
                    border: `1.5px solid ${CATEGORY_COLORS[color]?.border || '#CBD5E1'}`,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 18 }}>
          <button
            className="action-btn action-btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={handleShare}
          >
            <CustomSvg name={copied ? 'check' : 'share'} type="icon" size={17} />
            <span>{copied ? 'Copiato negli appunti!' : 'Condividi il risultato'}</span>
          </button>

          <button
            className="action-btn action-btn-outline"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => {
              onClose();
              onOpenPuzzles();
            }}
          >
            <CustomSvg name="archive" type="icon" size={17} />
            <span>Scegli un altro enigma</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsModal;
