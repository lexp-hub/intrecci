import React from 'react';
import CustomSvg from '../../assets/svg/CustomSvg';

export const Controls = ({
  onShuffle,
  onDeselectAll,
  onSubmit,
  onOpenHint,
  hintTokens = 0,
  selectedCount,
  isGameOver,
  isWon,
  onOpenResults
}) => {
  if (isGameOver || isWon) {
    return (
      <div className="controls-bar">
        <button className="action-btn action-btn-primary" onClick={onOpenResults}>
          <CustomSvg name="stats" type="icon" size={18} />
          <span>Vedi Risultato & Condividi</span>
        </button>
      </div>
    );
  }

  return (
    <div className="controls-bar">
      <button
        className="action-btn action-btn-outline"
        onClick={onShuffle}
        type="button"
        title="Mescola le tessere rimaste"
      >
        <CustomSvg name="shuffle" type="icon" size={17} />
        <span>Mescola</span>
      </button>

      <button
        className="action-btn action-btn-hint"
        onClick={onOpenHint}
        type="button"
        title="Apri l'Oracolo degli Indizi"
      >
        <CustomSvg name="lightbulb" type="emoji" size={17} />
        <span>Indizio ({hintTokens})</span>
      </button>

      <button
        className="action-btn action-btn-outline"
        onClick={onDeselectAll}
        disabled={selectedCount === 0}
        type="button"
        title="Cancella selezione corrente"
      >
        <CustomSvg name="deselect" type="icon" size={17} />
        <span>Deseleziona ({selectedCount})</span>
      </button>

      <button
        className="action-btn action-btn-primary"
        onClick={onSubmit}
        disabled={selectedCount !== 4}
        type="button"
        title="Verifica se le 4 parole appartengono allo stesso gruppo"
      >
        <CustomSvg name="check" type="icon" size={17} />
        <span>Invia</span>
      </button>
    </div>
  );
};

export default Controls;
