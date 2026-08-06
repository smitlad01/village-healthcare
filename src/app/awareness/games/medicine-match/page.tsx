'use client';
import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import '@/styles/games.css';

const PAIRS = [
  { id: 1, type: 'symptom', text: 'High Fever 3 days', matchId: 1 },
  { id: 2, type: 'action', text: 'Visit Doctor + Paracetamol', matchId: 1 },
  { id: 3, type: 'symptom', text: 'Severe Diarrhea', matchId: 2 },
  { id: 4, type: 'action', text: 'ORS + Zinc + Fluids', matchId: 2 },
  { id: 5, type: 'symptom', text: 'Snake Bite', matchId: 3 },
  { id: 6, type: 'action', text: 'Immobilize + Rush to Hospital', matchId: 3 },
  { id: 7, type: 'symptom', text: 'Burn (minor)', matchId: 4 },
  { id: 8, type: 'action', text: 'Cool water 10 min', matchId: 4 },
];

export default function MedicineMatchGame() {
  const [cards, setCards] = useState<any[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    initGame();
  }, []);

  const initGame = () => {
    const shuffled = [...PAIRS].sort(() => Math.random() - 0.5).map(c => ({ ...c, uid: Math.random() }));
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  };

  const handleCardClick = (index: number) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(cards[index].matchId)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const [first, second] = newFlipped;
      if (cards[first].matchId === cards[second].matchId) {
        setMatched([...matched, cards[first].matchId]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  const isGameComplete = matched.length === 4;

  return (
    <div className="page-container">
      <header className="page-header flex justify-between items-end">
        <div>
          <h1 className="page-title">💊 Medicine Match</h1>
          <p className="page-subtitle">Match the symptom to the correct action</p>
        </div>
        <div className="text-xl font-bold bg-surface p-3 rounded-lg border border-border">
          Moves: {moves}
        </div>
      </header>

      {isGameComplete && (
        <div className="glass-panel text-center mb-8 border-success bg-success/10">
          <div className="confetti"></div>
          <h2 className="text-3xl font-bold text-success mb-2">Quiz Complete!</h2>
          <p className="mb-4">You completed the match in {moves} moves. Earned +100 pts!</p>
          <button className="btn btn-primary" onClick={initGame}><RefreshCw className="inline mr-2" size={18}/> Play Again</button>
        </div>
      )}

      <div className="match-grid">
        {cards.map((card, i) => {
          const isFlipped = flipped.includes(i) || matched.includes(card.matchId);
          const isMatched = matched.includes(card.matchId);
          return (
            <div key={card.uid} className={`match-card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`} onClick={() => handleCardClick(i)}>
              <div className="card-front">
                ?
              </div>
              <div className="card-back flex flex-col justify-center items-center p-4">
                <span className="text-xs uppercase opacity-50 mb-2">{card.type}</span>
                <span className="font-bold">{card.text}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
