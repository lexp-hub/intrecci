import React from 'react';
import CustomSvg from '../../assets/svg/CustomSvg';
import { CATEGORY_COLORS } from '../../data/puzzles';

export const SolvedCard = ({ group }) => {
  const colorConfig = CATEGORY_COLORS[group.color] || CATEGORY_COLORS.yellow;

  return (
    <div
      className="solved-card anim-banner"
      style={{
        backgroundColor: colorConfig.bg,
        border: `1.5px solid ${colorConfig.border}`,
        color: colorConfig.text
      }}
    >
      <div className="solved-card-emoji-box">
        <CustomSvg name={group.emoji || 'sparkle'} type="emoji" size={32} />
      </div>

      <div className="solved-card-content">
        <div className="solved-card-title">{group.category}</div>
        <div className="solved-card-words">{group.words.join(', ')}</div>
      </div>
    </div>
  );
};

export default SolvedCard;
