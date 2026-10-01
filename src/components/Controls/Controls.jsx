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
        title="Mescola le tessere rimaste (Tasto rapido: Spazio o S)"
      >
        <CustomSvg name="shuffle" type="icon" size={17} />
        <span>Mescola</span>
        <kbd className="btn-kbd-hint">Spazio</kbd>
      </button>

      <button
        className="action-btn action-btn-hint"
        onClick={onOpenHint}
        type="button"
        title="Apri l'Oracolo degli Indizi (Tasto rapido: H)"
      >
        <CustomSvg name="lightbulb" type="emoji" size={17} />
        <span>Indizio ({hintTokens})</span>
        <kbd className="btn-kbd-hint">H</kbd>
      </button>

      <button
        className="action-btn action-btn-outline"
        onClick={onDeselectAll}
        disabled={selectedCount === 0}
        type="button"
        title="Cancella selezione corrente (Tasto rapido: Esc)"
      >
        <CustomSvg name="deselect" type="icon" size={17} />
        <span>Deseleziona ({selectedCount})</span>
        <kbd className="btn-kbd-hint">Esc</kbd>
      </button>

      <button
        className="action-btn action-btn-primary"
        onClick={onSubmit}
        disabled={selectedCount !== 4}
        type="button"
        title="Verifica se le 4 parole appartengono allo stesso gruppo (Tasto rapido: Invio)"
      >
        <CustomSvg name="check" type="icon" size={17} />
        <span>Invia</span>
        <kbd className="btn-kbd-hint">Invio</kbd>
      </button>
    </div>
  );
};

export default Controls;
