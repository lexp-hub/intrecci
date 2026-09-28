import React from 'react';

export const Tile = ({ word, isSelected, isShaking, isHighlighted, onClick, disabled }) => {
  return (
    <button
      className={`tile-btn ${isSelected ? 'selected' : ''} ${isShaking ? 'anim-shake' : ''} ${isHighlighted ? 'hint-glowing' : ''}`}
      onClick={() => onClick(word)}
      disabled={disabled}
      type="button"
      aria-pressed={isSelected}
    >
      {word}
    </button>
  );
};

export default Tile;
