import React, { useEffect, useState, useCallback, useRef } from 'react';
import { startGoogleGravity, stopGoogleGravity, isGravityActive } from '../../utils/googleGravity';
import CustomSvg from '../../assets/svg/CustomSvg';

// Target sequences:
// 1. User specified: Su Su Giù Giù Destra Sinistra Destra Sinistra B A
const USER_SEQUENCE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowRight', 'ArrowLeft', 'ArrowRight', 'ArrowLeft',
  'b', 'a'
];

// 2. Classic Konami: Su Su Giù Giù Sinistra Destra Sinistra Destra B A
const CLASSIC_SEQUENCE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export const GoogleGravity = () => {
  const [isActive, setIsActive] = useState(false);
  const keyBufferRef = useRef([]);

  const handleTriggerGravity = useCallback(() => {
    setIsActive(true);
    // Slight timeout so DOM elements finish any current transition before getting captured
    setTimeout(() => {
      startGoogleGravity();
    }, 50);
  }, []);

  const handleResetGravity = useCallback(() => {
    stopGoogleGravity();
    setIsActive(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Allow pressing ESC to reset gravity
      if (e.key === 'Escape' && isGravityActive()) {
        handleResetGravity();
        return;
      }

      // Ignore input when user is typing in form fields
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

      keyBufferRef.current.push(key);
      if (keyBufferRef.current.length > 20) {
        keyBufferRef.current.shift();
      }

      const buffer = keyBufferRef.current;

      // Check match against user sequence or classic sequence
      const checkMatch = (seq) => {
        if (buffer.length < seq.length) return false;
        const tail = buffer.slice(-seq.length);
        return seq.every((expected, idx) => {
          return tail[idx].toLowerCase() === expected.toLowerCase();
        });
      };

      if (checkMatch(USER_SEQUENCE) || checkMatch(CLASSIC_SEQUENCE)) {
        keyBufferRef.current = [];
        handleTriggerGravity();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (isGravityActive()) {
        stopGoogleGravity();
      }
    };
  }, [handleTriggerGravity, handleResetGravity]);

  if (!isActive) return null;

  return (
    <div className="gravity-immune gravity-hud-container">
      <div className="gravity-hud-pill">
        <div className="gravity-hud-info">
          <CustomSvg name="galaxy" type="emoji" size={26} />
          <div>
            <div className="gravity-hud-title">Google Gravity Attivato!</div>
            <div className="gravity-hint-sub">Trascina e lancia le tessere con il mouse o tocco</div>
          </div>
        </div>
        <button className="gravity-reset-btn" onClick={handleResetGravity}>
          <CustomSvg name="refresh" type="icon" size={16} />
          <span>Ripristina (ESC)</span>
        </button>
      </div>
    </div>
  );
};

export default GoogleGravity;
