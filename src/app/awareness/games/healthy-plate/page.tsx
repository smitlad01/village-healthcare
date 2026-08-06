'use client';
import React, { useState } from 'react';
import { RefreshCw, Star, Info } from 'lucide-react';
import '@/styles/games.css';

type Food = { id: string; name: string; emoji: string; category: 'protein' | 'carbs' | 'veg' | 'extras' };

const FOODS: Food[] = [
  { id: '1', name: 'Roti', emoji: '🫓', category: 'carbs' },
  { id: '2', name: 'Rice', emoji: '🍚', category: 'carbs' },
  { id: '3', name: 'Dal', emoji: '🫘', category: 'protein' },
  { id: '4', name: 'Sabzi', emoji: '🥦', category: 'veg' },
  { id: '5', name: 'Salad', emoji: '🥗', category: 'veg' },
  { id: '6', name: 'Curd', emoji: '🥛', category: 'protein' },
  { id: '7', name: 'Egg', emoji: '🥚', category: 'protein' },
  { id: '8', name: 'Chicken', emoji: '🍗', category: 'protein' },
  { id: '9', name: 'Fish', emoji: '🐟', category: 'protein' },
  { id: '10', name: 'Fruit', emoji: '🍎', category: 'veg' },
  { id: '11', name: 'Sweet', emoji: '🍬', category: 'extras' },
  { id: '12', name: 'Chips', emoji: '🍟', category: 'extras' },
  { id: '13', name: 'Soda', emoji: '🧃', category: 'extras' },
  { id: '14', name: 'Paneer', emoji: '🧀', category: 'protein' },
  { id: '15', name: 'Ghee', emoji: '🧈', category: 'extras' },
];

export default function HealthyPlateGame() {
  const [plate, setPlate] = useState<Food[]>([]);
  const [score, setScore] = useState<number | null>(null);

  const addToPlate = (food: Food) => {
    if (plate.length < 8) {
      setPlate([...plate, food]);
    }
  };

  const submitPlate = () => {
    let pts = 100;
    const counts = { protein: 0, carbs: 0, veg: 0, extras: 0 };
    plate.forEach(f => counts[f.category]++);

    if (counts.veg < 2) pts -= 20;
    if (counts.protein < 1) pts -= 20;
    if (counts.carbs > 3) pts -= 20;
    if (counts.extras > 1) pts -= 30;

    setScore(Math.max(0, pts));
  };

  const reset = () => {
    setPlate([]);
    setScore(null);
  };

  return (
    <div className="page-container">
      <header className="page-header flex justify-between items-end">
        <div>
          <h1 className="page-title">🍽️ Build a Healthy Plate</h1>
          <p className="page-subtitle">Drag or click foods to build a balanced meal</p>
        </div>
        <div className="pts-badge px-4 py-2 text-lg">Potential: +200 pts</div>
      </header>

      {score !== null && (
        <div className="glass-panel text-center mb-8 bg-success/10 border-success">
          {score > 80 && <div className="confetti"></div>}
          <h2 className="text-3xl font-bold text-success mb-2">Score: {score}/100</h2>
          <p className="text-lg mb-4">
            {score >= 80 ? 'Great balance of protein, carbs, and veggies!' : 'Try adding more vegetables and protein, and fewer sweets/extras.'}
          </p>
          <div className="p-4 bg-surface rounded-lg inline-block text-left mb-6 border border-primary">
            <h4 className="font-bold flex items-center gap-2 mb-2"><Info size={18} className="text-primary"/> Tip</h4>
            <p className="text-sm text-text-secondary">A perfect plate is 1/2 veggies, 1/4 protein (Dal/Egg/Paneer), and 1/4 carbs (Roti/Rice).</p>
          </div>
          <br/>
          <button className="btn btn-primary" onClick={reset}><RefreshCw size={18} className="inline mr-2"/> Play Again</button>
        </div>
      )}

      <div className="plate-container">
        <div className="food-grid">
          {FOODS.map(food => (
            <div key={food.id} className="food-item" onClick={() => addToPlate(food)}>
              <div className="text-3xl mb-1">{food.emoji}</div>
              <div className="text-sm font-bold">{food.name}</div>
            </div>
          ))}
        </div>

        <div className="plate-area glass-panel p-8">
          <div className="the-plate mb-8">
            <div className="plate-section protein flex-col">
              <span className="text-xs text-text-secondary font-bold mb-1 opacity-50 uppercase tracking-wider">Protein</span>
              <div className="flex gap-1 flex-wrap justify-center">{plate.filter(f => f.category === 'protein').map((f,i) => <span key={i}>{f.emoji}</span>)}</div>
            </div>
            <div className="plate-section veg flex-col">
              <span className="text-xs text-text-secondary font-bold mb-1 opacity-50 uppercase tracking-wider">Veggies</span>
              <div className="flex gap-1 flex-wrap justify-center">{plate.filter(f => f.category === 'veg').map((f,i) => <span key={i}>{f.emoji}</span>)}</div>
            </div>
            <div className="plate-section carbs flex-col">
              <span className="text-xs text-text-secondary font-bold mb-1 opacity-50 uppercase tracking-wider">Carbs</span>
              <div className="flex gap-1 flex-wrap justify-center">{plate.filter(f => f.category === 'carbs').map((f,i) => <span key={i}>{f.emoji}</span>)}</div>
            </div>
            <div className="plate-section extras flex-col">
              <span className="text-xs text-text-secondary font-bold mb-1 opacity-50 uppercase tracking-wider">Extras</span>
              <div className="flex gap-1 flex-wrap justify-center">{plate.filter(f => f.category === 'extras').map((f,i) => <span key={i}>{f.emoji}</span>)}</div>
            </div>
          </div>
          
          <div className="flex gap-4 w-full">
            <button className="btn btn-secondary flex-1" onClick={reset}>Clear</button>
            <button className="btn btn-primary flex-1" onClick={submitPlate} disabled={plate.length === 0 || score !== null}>Submit Plate</button>
          </div>
        </div>
      </div>
    </div>
  );
}
