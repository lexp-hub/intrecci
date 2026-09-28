import React from 'react';
import CustomSvg from '../../assets/svg/CustomSvg';

export const LevelSelector = ({ puzzle, onOpenPuzzles, onGenerateApi, isGenerating }) => {
  return (
    <div className="level-banner">
      <div className="level-info-left">
        <span className="level-name">{puzzle.title}</span>
        <span className="level-difficulty-tag">{puzzle.difficulty}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <button
          className="level-select-btn"
          onClick={onGenerateApi}
          disabled={isGenerating}
          title="Genera nuovo enigma con API"
        >
          <CustomSvg name="magic" type="icon" size={15} />
          <span>{isGenerating ? 'Generando...' : 'Nuovo'}</span>
        </button>

        <button className="level-select-btn" onClick={onOpenPuzzles} title="Apri archivio enigmi">
          <span>Cambia</span>
          <CustomSvg name="levels" type="icon" size={15} />
        </button>
      </div>
    </div>
  );
};

export default LevelSelector;
