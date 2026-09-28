import React, { useState, useEffect } from 'react';
import { useGameLogic } from './hooks/useGameLogic';
import { useSagaProgress } from './hooks/useSagaProgress';
import MainMenu from './components/MainMenu/MainMenu';
import Header from './components/Header/Header';
import LevelSelector from './components/LevelSelector/LevelSelector';
import Board from './components/Board/Board';
import AttemptsCounter from './components/AttemptsCounter/AttemptsCounter';
import Controls from './components/Controls/Controls';
import Toast from './components/Toast/Toast';
import Atmosphere from './components/Atmosphere/Atmosphere';
import SagaMap from './components/SagaMap/SagaMap';
import BinomiGame from './components/Minigames/Binomi/BinomiGame';
import GoogleGravity from './components/EasterEgg/GoogleGravity';
import HintModal from './components/HintSystem/HintModal';
import HelpModal from './components/Modals/HelpModal';
import StatsModal from './components/Modals/StatsModal';
import ResultsModal from './components/Modals/ResultsModal';
import PuzzlesModal from './components/Modals/PuzzlesModal';
import SettingsModal from './components/Modals/SettingsModal';
import soundManager from './utils/audio';

export function App() {
  const {
    progress: sagaProgress,
    unlockedLevel,
    levelStars,
    hintTokens,
    totalStars,
    recordLevelCompletion,
    useHint,
    addHintTokens
  } = useSagaProgress();

  const handleLevelCompleted = (levelId, mistakes, gameMode) => {
    recordLevelCompletion(levelId, mistakes, gameMode);
  };

  const {
    puzzle,
    allPuzzles,
    gameMode,
    timeLeft,
    remainingWords,
    selectedWords,
    solvedGroups,
    mistakesRemaining,
    maxMistakes,
    guessHistory,
    isGameOver,
    isWon,
    shakingWords,
    revealedHints,
    highlightedPair,
    toastMessage,
    isGenerating,
    stats,
    toggleWordSelect,
    deselectAll,
    shuffleWords,
    submitGuess,
    restartCurrentPuzzle,
    selectPuzzle,
    startCustomLevel,
    useCategoryHint,
    usePairHighlightHint,
    generateNewApiPuzzle
  } = useGameLogic(1, handleLevelCompleted);

  // Navigation state: 'menu' | 'game' | 'map' | 'binomi'
  const [currentScreen, setCurrentScreen] = useState('menu');

  // Settings state (Night mode, falling snow / atmosphere effects, audio)
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('intrecci_settings');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error loading settings:', e);
    }
    return {
      isDark: false,
      effectsEnabled: true,
      effectType: 'snow', // 'snow' | 'fireflies' | 'leaves'
      soundEnabled: true
    };
  });

  // Apply dark theme attribute to HTML and update sound manager
  useEffect(() => {
    if (settings.isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    soundManager.enabled = settings.soundEnabled;
    try {
      localStorage.setItem('intrecci_settings', JSON.stringify(settings));
    } catch (e) {
      console.error('Error saving settings:', e);
    }
  }, [settings]);

  // Modals state
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isPuzzlesOpen, setIsPuzzlesOpen] = useState(false);
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isHintOpen, setIsHintOpen] = useState(false);

  // Automatically show Results Modal on game end
  useEffect(() => {
    if (isGameOver || isWon) {
      const timer = setTimeout(() => {
        setIsResultsOpen(true);
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, [isGameOver, isWon]);

  return (
    <div className={`app-container ${currentScreen === 'menu' ? 'container-menu' : 'container-game'}`}>
      {/* Easter Egg: Google Gravity (activated via Konami code: ↑ ↑ ↓ ↓ → ← → ← B A) */}
      <GoogleGravity />

      {/* Background Atmospheric Special Effects (Snow, Fireflies, Leaves) */}
      <Atmosphere
        enabled={settings.effectsEnabled}
        effectType={settings.effectType}
        isDark={settings.isDark}
      />

      {/* Toast Feedback */}
      <Toast message={toastMessage} />

      {/* Screen Router */}
      {currentScreen === 'menu' && (
        <MainMenu
          onStartGame={() => setCurrentScreen('game')}
          onOpenSagaMap={() => setCurrentScreen('map')}
          onOpenBinomi={() => setCurrentScreen('binomi')}
          onOpenPuzzles={() => setIsPuzzlesOpen(true)}
          onOpenStats={() => setIsStatsOpen(true)}
          onOpenSettings={() => setIsSettingsOpen(true)}
          onOpenHelp={() => setIsHelpOpen(true)}
          onGenerateApi={generateNewApiPuzzle}
          isGenerating={isGenerating}
          activePuzzle={puzzle}
          stats={stats}
          totalPuzzles={allPuzzles.length}
          sagaProgress={sagaProgress}
        />
      )}

      {currentScreen === 'map' && (
        <SagaMap
          unlockedLevel={unlockedLevel}
          levelStars={levelStars}
          totalStars={totalStars}
          hintTokens={hintTokens}
          onSelectLevel={(level, mode) => {
            startCustomLevel(level, mode);
            setCurrentScreen('game');
          }}
          onGoToMenu={() => setCurrentScreen('menu')}
        />
      )}

      {currentScreen === 'binomi' && (
        <BinomiGame
          onGoToMenu={() => setCurrentScreen('menu')}
          onEarnHint={(count) => addHintTokens(count)}
        />
      )}

      {currentScreen === 'game' && (
        <>
          {/* Header */}
          <Header
            onOpenHelp={() => setIsHelpOpen(true)}
            onOpenStats={() => setIsStatsOpen(true)}
            onOpenPuzzles={() => setIsPuzzlesOpen(true)}
            onOpenSettings={() => setIsSettingsOpen(true)}
            onRestart={restartCurrentPuzzle}
            onGenerateApi={generateNewApiPuzzle}
            onGoToMenu={() => setCurrentScreen('menu')}
            isGenerating={isGenerating}
          />

          {/* Level Banner */}
          <LevelSelector
            puzzle={puzzle}
            onOpenPuzzles={() => setIsPuzzlesOpen(true)}
            onGenerateApi={generateNewApiPuzzle}
            isGenerating={isGenerating}
          />

          {/* Instruction */}
          <div className="instruction-text">
            Crea 4 gruppi da 4 parole che condividono un filo conduttore.
          </div>

          {/* Game Board with Glowing Hint Pair and Revealed Hints */}
          <Board
            remainingWords={remainingWords}
            solvedGroups={solvedGroups}
            selectedWords={selectedWords}
            shakingWords={shakingWords}
            highlightedPair={highlightedPair}
            revealedHints={revealedHints}
            onTileClick={toggleWordSelect}
            isGameOver={isGameOver}
          />

          {/* Attempts Counter & Timer */}
          <AttemptsCounter
            mistakesRemaining={mistakesRemaining}
            maxMistakes={maxMistakes}
            isGameOver={isGameOver}
            gameMode={gameMode}
            timeLeft={timeLeft}
          />

          {/* Action Controls with Hint Trigger */}
          <Controls
            onShuffle={shuffleWords}
            onDeselectAll={deselectAll}
            onSubmit={submitGuess}
            onOpenHint={() => setIsHintOpen(true)}
            hintTokens={hintTokens}
            selectedCount={selectedWords.length}
            isGameOver={isGameOver}
            isWon={isWon}
            onOpenResults={() => setIsResultsOpen(true)}
          />
        </>
      )}

      {/* Global Modals */}
      <HintModal
        isOpen={isHintOpen}
        onClose={() => setIsHintOpen(false)}
        hintTokens={hintTokens}
        onUseCategoryHint={() => {
          if (useHint()) {
            return useCategoryHint();
          }
          return false;
        }}
        onUsePairHint={() => {
          if (hintTokens >= 2) {
            useHint();
            useHint();
            return usePairHighlightHint();
          }
          return false;
        }}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onUpdateSettings={setSettings}
      />

      <HelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />

      <StatsModal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        stats={stats}
        totalPuzzles={allPuzzles.length}
      />

      <PuzzlesModal
        isOpen={isPuzzlesOpen}
        onClose={() => setIsPuzzlesOpen(false)}
        puzzles={allPuzzles}
        activePuzzleId={puzzle.id}
        onSelectPuzzle={(id) => {
          selectPuzzle(id, 'classic');
          setCurrentScreen('game');
        }}
        onGenerateApi={async () => {
          await generateNewApiPuzzle();
          setCurrentScreen('game');
        }}
        isGenerating={isGenerating}
        completedPuzzles={stats.completedPuzzles || []}
      />

      <ResultsModal
        isOpen={isResultsOpen}
        onClose={() => setIsResultsOpen(false)}
        isWon={isWon}
        guessHistory={guessHistory}
        puzzle={puzzle}
        onOpenPuzzles={() => setIsPuzzlesOpen(true)}
      />
    </div>
  );
}

export default App;
