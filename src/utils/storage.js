const STORAGE_KEY_PREFIX = 'intrecci_game_';

export const loadGameStats = () => {
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}stats`);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading stats:', e);
  }
  return {
    played: 0,
    won: 0,
    currentStreak: 0,
    maxStreak: 0,
    completedPuzzles: []
  };
};

export const saveGameStats = (stats) => {
  try {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}stats`, JSON.stringify(stats));
  } catch (e) {
    console.error('Error saving stats:', e);
  }
};

export const loadPuzzleState = (puzzleId) => {
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}puzzle_${puzzleId}`);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading puzzle state:', e);
  }
  return null;
};

export const savePuzzleState = (puzzleId, state) => {
  try {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}puzzle_${puzzleId}`, JSON.stringify(state));
  } catch (e) {
    console.error('Error saving puzzle state:', e);
  }
};
