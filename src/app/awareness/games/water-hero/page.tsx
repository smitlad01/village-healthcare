'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Heart, RefreshCw, Trophy } from 'lucide-react';
import '@/styles/games.css';

export default function WaterHeroGame() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(60);
  const [contaminants, setContaminants] = useState<{ id: number, x: number, y: number }[]>([]);

  const startGame = () => {
    setIsPlaying(true);
    setGameOver(false);
    setScore(0);
    setLives(3);
    setTimeLeft(60);
    setContaminants([]);
  };

  const handleTap = (id: number) => {
    if (!isPlaying) return;
    setContaminants(prev => prev.filter(c => c.id !== id));
    setScore(s => s + 10);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          setIsPlaying(false);
          setGameOver(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    const spawner = setInterval(() => {
      setContaminants(prev => [
        ...prev,
        { id: Date.now(), x: Math.random() * 80 + 10, y: -10 }
      ]);
    }, 800);

    const mover = setInterval(() => {
      setContaminants(prev => {
        const next = prev.map(c => ({ ...c, y: c.y + 5 }));
        const missed = next.filter(c => c.y >= 90);
        if (missed.length > 0) {
          setLives(l => {
            const newLives = l - missed.length;
            if (newLives <= 0) {
              setIsPlaying(false);
              setGameOver(true);
            }
            return Math.max(0, newLives);
          });
        }
        return next.filter(c => c.y < 90);
      });
    }, 50);

    return () => {
      clearInterval(timer);
      clearInterval(spawner);
      clearInterval(mover);
    };
  }, [isPlaying]);

  return (
    <div className="page-container">
      <header className="page-header flex justify-between items-end">
        <div>
          <h1 className="page-title">💧 Water Hero</h1>
          <p className="page-subtitle">Tap contaminants to keep the well clean!</p>
        </div>
        <div className="flex gap-6 items-center">
          <div className="text-xl font-bold flex items-center gap-2">
            <Trophy className="text-warning" /> {score}
          </div>
          <div className="text-xl font-bold flex items-center gap-2 text-danger">
            {[...Array(lives)].map((_, i) => <Heart key={i} size={20} fill="currentColor" />)}
          </div>
          <div className="text-xl font-mono p-2 bg-surface rounded border border-border">
            00:{timeLeft.toString().padStart(2, '0')}
          </div>
        </div>
      </header>

      <div className="glass-panel p-1">
        <div className="water-hero-game">
          {!isPlaying && !gameOver && (
            <div className="absolute inset-0 bg-surface/80 flex flex-col items-center justify-center z-10 backdrop-blur-sm">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-3xl mb-4 animate-bounce">💧</div>
              <h2 className="text-2xl font-bold mb-4">Protect the Water Source!</h2>
              <button className="btn btn-primary px-8 py-3 text-lg" onClick={startGame}>Start Game</button>
            </div>
          )}

          {gameOver && (
            <div className="absolute inset-0 bg-surface/90 flex flex-col items-center justify-center z-10 backdrop-blur-md">
              <h2 className="text-3xl font-bold mb-2">Game Over!</h2>
              <p className="text-xl mb-6 text-primary font-bold">Final Score: {score}</p>
              <div className="max-w-md p-6 bg-surface-light rounded-xl border border-primary text-center mb-6">
                <h3 className="font-bold mb-2 text-warning">Did you know?</h3>
                <p className="text-text-secondary">Boiling water for just 1 minute kills most disease-causing bacteria and prevents outbreaks like Cholera and Typhoid.</p>
              </div>
              <button className="btn btn-primary" onClick={startGame}><RefreshCw className="inline mr-2" size={18}/> Play Again</button>
            </div>
          )}

          {contaminants.map(c => (
            <div 
              key={c.id} 
              className="contaminant" 
              style={{ left: `${c.x}%`, top: `${c.y}%` }}
              onClick={() => handleTap(c.id)}
            >🦠</div>
          ))}

          <div className="well"></div>
        </div>
      </div>
    </div>
  );
}
