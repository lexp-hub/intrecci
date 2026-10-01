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
    playedArchive,
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
    deselectLast,
    shuffleWords,
    submitGuess,
    restartCurrentPuzzle,
    selectArchiveGame,
    selectPuzzle,
    startCustomLevel,
    useCategoryHint,
    usePairHighlightHint,
    generateNewApiPuzzle
  } = useGameLogic(1, handleLevelCompleted);

  const [currentScreen, setCurrentScreen] = useState('menu');

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
      effectType: 'snow', 
      soundEnabled: true
    };
  });

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

  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isPuzzlesOpen, setIsPuzzlesOpen] = useState(false);
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isHintOpen, setIsHintOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      const anyModalOpen = isHelpOpen || isStatsOpen || isPuzzlesOpen || isResultsOpen || isSettingsOpen || isHintOpen;

      if (e.key === 'Escape') {
        if (isHelpOpen) setIsHelpOpen(false);
        else if (isStatsOpen) setIsStatsOpen(false);
        else if (isPuzzlesOpen) setIsPuzzlesOpen(false);
        else if (isResultsOpen) setIsResultsOpen(false);
        else if (isSettingsOpen) setIsSettingsOpen(false);
        else if (isHintOpen) setIsHintOpen(false);
        else if (currentScreen === 'game') {
          deselectAll();
        }
        return;
      }

      if (anyModalOpen) return;

      if (currentScreen === 'game' && !isGameOver && !isWon) {
        if (e.key === 'Enter') {
          if (selectedWords.length === 4) {
            e.preventDefault();
            submitGuess();
          }
        } else if (e.code === 'Space' || e.key === 's' || e.key === 'S') {
          e.preventDefault();
          shuffleWords();
        } else if (e.key === 'Backspace') {
          e.preventDefault();
          deselectLast();
        } else if (e.key === 'h' || e.key === 'H') {
          e.preventDefault();
          setIsHintOpen(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    isHelpOpen, isStatsOpen, isPuzzlesOpen, isResultsOpen, isSettingsOpen, isHintOpen,
    currentScreen, isGameOver, isWon, selectedWords.length,
    submitGuess, shuffleWords, deselectAll, deselectLast
  ]);

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
      <GoogleGravity />

      <Atmosphere
        enabled={settings.effectsEnabled}
        effectType={settings.effectType}
        isDark={settings.isDark}
      />

      <Toast message={toastMessage} />

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
          playedArchive={playedArchive}
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

          <LevelSelector
            puzzle={puzzle}
            onOpenPuzzles={() => setIsPuzzlesOpen(true)}
            onGenerateApi={generateNewApiPuzzle}
            isGenerating={isGenerating}
          />

          <div className="instruction-text">
            Crea 4 gruppi da 4 parole che condividono un filo conduttore.
          </div>

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

          <AttemptsCounter
            mistakesRemaining={mistakesRemaining}
            maxMistakes={maxMistakes}
            isGameOver={isGameOver}
            gameMode={gameMode}
            timeLeft={timeLeft}
          />

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
        playedGames={playedArchive}
        activePuzzleId={puzzle.id}
        onSelectGame={(id) => {
          selectArchiveGame(id);
          setCurrentScreen('game');
        }}
        onGenerateApi={async () => {
          await generateNewApiPuzzle();
          setCurrentScreen('game');
        }}
        isGenerating={isGenerating}
      />

      <ResultsModal
        isOpen={isResultsOpen}
        onClose={() => setIsResultsOpen(false)}
        isWon={isWon}
        guessHistory={guessHistory}
        puzzle={puzzle}
        onOpenPuzzles={() => setIsPuzzlesOpen(true)}
        onNewGame={async () => {
          await generateNewApiPuzzle();
          setCurrentScreen('game');
        }}
      />
    </div>
  );
}

export default App;
