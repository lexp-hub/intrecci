import { useState, useEffect, useCallback, useRef } from 'react';
import { BINOMI_PACKS } from '../data/binomiData';
import soundManager from '../utils/audio';
import { triggerVictoryConfetti } from '../utils/confetti';

export const useBinomiGame = (initialPackId = 1) => {
  const [packId, setPackId] = useState(initialPackId);
  const pack = BINOMI_PACKS.find(p => p.id === packId) || BINOMI_PACKS[0];

  const [tiles, setTiles] = useState([]);
  const [selectedTile, setSelectedTile] = useState(null);
  const [matchedPairIds, setMatchedPairIds] = useState([]);
  const [shakingTileIds, setShakingTileIds] = useState([]);
  const [matchingAnimationTileIds, setMatchingAnimationTileIds] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timerRef = useRef(null);

  // Initialize pack tiles
  const initPack = useCallback((targetPack) => {
    // Generate 12 individual tiles from 6 pairs
    const tileList = [];
    targetPack.pairs.forEach((pair, idx) => {
      tileList.push({
        id: `${pair.id}_a`,
        pairId: pair.id,
        text: pair.a,
        role: 'a',
        relation: pair.relation
      });
      tileList.push({
        id: `${pair.id}_b`,
        pairId: pair.id,
        text: pair.b,
        role: 'b',
        relation: pair.relation
      });
    });

    // Shuffle tiles
    const shuffled = [...tileList].sort(() => Math.random() - 0.5);
    setTiles(shuffled);
    setSelectedTile(null);
    setMatchedPairIds([]);
    setShakingTileIds([]);
    setMatchingAnimationTileIds([]);
    setAttempts(0);
    setIsCompleted(false);
    setTimerSeconds(0);
    setIsRunning(true);
  }, []);

  useEffect(() => {
    initPack(pack);
  }, [pack, initPack]);

  // Timer tick
  useEffect(() => {
    if (isRunning && !isCompleted) {
      timerRef.current = setInterval(() => {
        setTimerSeconds(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning, isCompleted]);

  // Handle tile click
  const handleTileClick = (tile) => {
    if (isCompleted) return;
    if (matchedPairIds.includes(tile.pairId)) return;
    if (shakingTileIds.length > 0) return; // Prevent clicking during shake animation

    // Clicking already selected tile deselects it
    if (selectedTile && selectedTile.id === tile.id) {
      setSelectedTile(null);
      return;
    }

    if (!selectedTile) {
      // First selection
      soundManager.playSelect(1);
      setSelectedTile(tile);
    } else {
      // Second selection - compare
      setAttempts(prev => prev + 1);

      if (selectedTile.pairId === tile.pairId && selectedTile.id !== tile.id) {
        // MATCH!
        soundManager.playSuccess();
        setMatchingAnimationTileIds([selectedTile.id, tile.id]);
        
        setTimeout(() => {
          setMatchingAnimationTileIds([]);
          setMatchedPairIds(prev => {
            const next = [...prev, tile.pairId];
            if (next.length === pack.pairs.length) {
              // Level complete!
              setIsCompleted(true);
              setIsRunning(false);
              triggerVictoryConfetti();
              soundManager.playVictory?.();
            }
            return next;
          });
          setSelectedTile(null);
        }, 500);

      } else {
        // MISMATCH!
        soundManager.playError();
        setShakingTileIds([selectedTile.id, tile.id]);
        setTimeout(() => {
          setShakingTileIds([]);
          setSelectedTile(null);
        }, 600);
      }
    }
  };

  const nextPack = () => {
    const nextId = packId < BINOMI_PACKS.length ? packId + 1 : 1;
    setPackId(nextId);
  };

  const restartPack = () => {
    initPack(pack);
  };

  const selectPack = (id) => {
    setPackId(id);
  };

  return {
    pack,
    packId,
    allPacks: BINOMI_PACKS,
    tiles,
    selectedTile,
    matchedPairIds,
    shakingTileIds,
    matchingAnimationTileIds,
    attempts,
    isCompleted,
    timerSeconds,
    handleTileClick,
    nextPack,
    restartPack,
    selectPack
  };
};

export default useBinomiGame;
