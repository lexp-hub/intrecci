import React from 'react';
import Tile from './Tile';
import SolvedCard from '../SolvedCard/SolvedCard';
import CustomSvg from '../../assets/svg/CustomSvg';

export const Board = ({
  remainingWords,
  solvedGroups,
  selectedWords,
  shakingWords,
  highlightedPair = [],
  revealedHints = [],
  onTileClick,
  isGameOver
}) => {
  return (
    <div className="board-container">
      {/* Revealed hints list if any */}
      {revealedHints.length > 0 && (
        <div className="revealed-hints-banner">
          {revealedHints.map((rh, idx) => (
            <div key={idx} className="hint-pill">
              <CustomSvg name="sparkle" type="emoji" size={16} />
              <span><strong>Indizio:</strong> {rh.hint}</span>
            </div>
          ))}
        </div>
      )}

      {/* Stack of Solved Categories */}
      {solvedGroups.length > 0 && (
        <div className="solved-cards-stack">
          {solvedGroups.map(group => (
            <SolvedCard key={group.level} group={group} />
          ))}
        </div>
      )}

      {/* Grid of Remaining Words */}
      {remainingWords.length > 0 && (
        <div className="tiles-grid">
          {remainingWords.map(word => (
            <Tile
              key={word}
              word={word}
              isSelected={selectedWords.includes(word)}
              isShaking={shakingWords.includes(word)}
              isHighlighted={highlightedPair.includes(word)}
              onClick={onTileClick}
              disabled={isGameOver}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Board;
