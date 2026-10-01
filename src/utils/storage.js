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

export const loadPlayedArchive = () => {
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}played_archive`);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading played archive:', e);
  }
  return [];
};

export const savePlayedArchive = (archive) => {
  try {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}played_archive`, JSON.stringify(archive));
  } catch (e) {
    console.error('Error saving played archive:', e);
  }
};

export const savePlayedGame = (gameRecord) => {
  if (!gameRecord || !gameRecord.id) return;
  try {
    const currentArchive = loadPlayedArchive();
    const idx = currentArchive.findIndex(g => g.id === gameRecord.id);
    let updated;
    if (idx !== -1) {
      updated = [...currentArchive];
      updated[idx] = { ...updated[idx], ...gameRecord, updatedAt: new Date().toISOString() };
    } else {
      updated = [
        { ...gameRecord, createdAt: gameRecord.createdAt || new Date().toISOString(), updatedAt: new Date().toISOString() },
        ...currentArchive
      ];
    }
    savePlayedArchive(updated);
  } catch (e) {
    console.error('Error saving played game:', e);
  }
};

export const loadActiveGame = () => {
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}active_game`);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading active game:', e);
  }
  return null;
};

export const saveActiveGame = (gameState) => {
  try {
    if (!gameState) {
      localStorage.removeItem(`${STORAGE_KEY_PREFIX}active_game`);
    } else {
      localStorage.setItem(`${STORAGE_KEY_PREFIX}active_game`, JSON.stringify(gameState));
    }
  } catch (e) {
    console.error('Error saving active game:', e);
  }
};
