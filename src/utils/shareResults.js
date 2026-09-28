import { CATEGORY_COLORS } from '../data/puzzles';

/**
 * Format the user's guesses history into an emoji grid like NYT Connections
 * @param {Array} guessHistory - Array of guesses [{ words: [...], colors: ['yellow', 'yellow', ...] }]
 * @param {Object} puzzle - The active puzzle object
 * @param {boolean} won - Whether the user won
 */
export const generateShareText = (guessHistory, puzzle, won) => {
  let text = `Intrecci ${puzzle.title}\n`;
  text += won ? `✨ Risolto con successo!\n\n` : `Riepilogo partita:\n\n`;

  guessHistory.forEach(guess => {
    const row = guess.colors.map(c => CATEGORY_COLORS[c]?.emojiCode || '⬜').join('');
    text += `${row}\n`;
  });

  text += `\nGioca anche tu a Intrecci!`;
  return text;
};

export const copyToClipboard = async (text) => {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.error('Clipboard copy failed:', err);
    }
  }

  // Fallback for older browsers
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  let success = false;
  try {
    success = document.execCommand('copy');
  } catch (err) {
    console.error('Fallback copy failed:', err);
  }
  document.body.removeChild(textArea);
  return success;
};
