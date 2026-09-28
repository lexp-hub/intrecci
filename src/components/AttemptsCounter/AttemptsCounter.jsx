import React from 'react';
import CustomSvg from '../../assets/svg/CustomSvg';

export const AttemptsCounter = ({
  mistakesRemaining,
  maxMistakes = 4,
  isGameOver,
  gameMode = 'classic',
  timeLeft = null
}) => {
  if (isGameOver) return null;

  return (
    <div className="attempts-row-container">
      {gameMode === 'timed' && timeLeft !== null && (
        <div className="timed-badge-pill">
          <CustomSvg name="stopwatch" type="emoji" size={17} />
          <span className={`timer-val ${timeLeft <= 20 ? 'timer-urgent' : ''}`}>
            {Math.floor(timeLeft / 60)}:{(timeLeft % 60) < 10 ? '0' : ''}{timeLeft % 60}
          </span>
        </div>
      )}

      {gameMode === 'zen' ? (
        <div className="attempts-wrapper zen-attempts">
          <CustomSvg name="zen" type="emoji" size={18} />
          <span>Modalità Zen:</span>
          <strong className="zen-infinity-symbol">∞ Infiniti</strong>
        </div>
      ) : (
        <div className="attempts-wrapper">
          <span>Tentativi rimasti:</span>
          <div className="hearts-container">
            {Array.from({ length: 4 }).map((_, index) => {
              const isFilled = index < mistakesRemaining;
              return (
                <CustomSvg
                  key={index}
                  name={isFilled ? 'heartFill' : 'heartEmpty'}
                  type="icon"
                  size={22}
                  className={isFilled ? '' : 'heart-lost'}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AttemptsCounter;
