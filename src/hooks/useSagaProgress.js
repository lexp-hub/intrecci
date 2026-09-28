import { useState, useEffect } from 'react';

const STORAGE_KEY = 'intrecci_saga_progress';

const DEFAULT_PROGRESS = {
  unlockedLevel: 1,
  levelStars: {},       // { [levelId]: 1 | 2 | 3 }
  hintTokens: 3,        // Hint budget
  totalStars: 0,
  highScores: {}
};

export const useSagaProgress = () => {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error loading saga progress:', e);
    }
    return DEFAULT_PROGRESS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Error saving saga progress:', e);
    }
  }, [progress]);

  const recordLevelCompletion = (levelId, mistakesMade, gameMode = 'classic') => {
    // Determine stars
    let stars = 3;
    if (gameMode === 'classic') {
      if (mistakesMade === 0) stars = 3;
      else if (mistakesMade <= 2) stars = 2;
      else stars = 1;
    } else if (gameMode === 'timed') {
      stars = mistakesMade === 0 ? 3 : 2;
    } else {
      // Zen mode
      stars = 2;
    }

    setProgress(prev => {
      const existingStars = prev.levelStars[levelId] || 0;
      const bestStars = Math.max(existingStars, stars);
      const nextUnlocked = Math.max(prev.unlockedLevel, levelId + 1);

      const updatedLevelStars = {
        ...prev.levelStars,
        [levelId]: bestStars
      };

      const totalStars = Object.values(updatedLevelStars).reduce((sum, s) => sum + s, 0);

      // Reward 1 hint token for every level completed for the first time
      const earnedToken = !prev.levelStars[levelId] ? 1 : 0;

      return {
        ...prev,
        unlockedLevel: nextUnlocked,
        levelStars: updatedLevelStars,
        totalStars,
        hintTokens: prev.hintTokens + earnedToken
      };
    });

    return stars;
  };

  const useHint = () => {
    if (progress.hintTokens <= 0) return false;
    setProgress(prev => ({
      ...prev,
      hintTokens: Math.max(0, prev.hintTokens - 1)
    }));
    return true;
  };

  const addHintTokens = (count = 1) => {
    setProgress(prev => ({
      ...prev,
      hintTokens: prev.hintTokens + count
    }));
  };

  return {
    progress,
    unlockedLevel: progress.unlockedLevel,
    levelStars: progress.levelStars,
    hintTokens: progress.hintTokens,
    totalStars: progress.totalStars,
    recordLevelCompletion,
    useHint,
    addHintTokens
  };
};

export default useSagaProgress;
