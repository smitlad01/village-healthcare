'use client';
import React, { useState } from 'react';
import { Flame, CheckCircle, Circle, Trophy } from 'lucide-react';
import '@/styles/games.css';

export default function FitnessChallenge() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Walk 500 steps', pts: 30, done: true },
    { id: 2, text: 'Drink 8 glasses of water', pts: 20, done: false, count: 3, max: 8 },
    { id: 3, text: 'Sleep 7+ hours', pts: 25, done: false },
    { id: 4, text: 'Eat 2 servings of vegetables', pts: 20, done: false },
    { id: 5, text: 'Do 5 minutes of stretching', pts: 25, done: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const allDone = tasks.every(t => t.done || (t.count && t.count === t.max));

  return (
    <div className="page-container">
      <header className="page-header flex justify-between items-end">
        <div>
          <h1 className="page-title flex items-center gap-2">
            <Flame className="streak-flame" size={32} />
            Daily Fitness Challenge
          </h1>
          <p className="page-subtitle">Complete daily goals to build your streak</p>
        </div>
        <div className="text-center bg-surface p-4 rounded-lg border border-primary">
          <div className="text-3xl font-bold text-primary flex items-center justify-center gap-1">
            5 <Flame className="text-warning" size={24} />
          </div>
          <div className="text-sm text-text-secondary uppercase tracking-widest mt-1">Day Streak</div>
        </div>
      </header>

      {allDone && (
        <div className="glass-panel border-success bg-success/10 mb-8 p-6 text-center">
          <Trophy size={48} className="mx-auto text-success mb-4" />
          <h2 className="text-2xl font-bold text-success mb-2">All Daily Challenges Complete!</h2>
          <p>You earned +120 pts today. Come back tomorrow to keep the streak alive!</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel">
          <h2 className="text-xl font-bold mb-6">Today's Challenges</h2>
          <div className="space-y-4">
            {tasks.map(task => (
              <div key={task.id} className={`flex items-center justify-between p-4 rounded-lg border transition-all ${task.done ? 'bg-success/10 border-success' : 'bg-surface border-border hover:border-primary'}`}>
                <div className="flex items-center gap-4 cursor-pointer" onClick={() => !task.count && toggleTask(task.id)}>
                  {task.done ? <CheckCircle className="text-success" /> : <Circle className="text-text-secondary" />}
                  <span className={task.done ? 'line-through opacity-50' : 'font-bold'}>{task.text}</span>
                </div>
                <div className="flex items-center gap-4">
                  {task.count !== undefined && (
                    <div className="text-sm font-mono bg-surface-light px-2 py-1 rounded">
                      {task.count}/{task.max}
                    </div>
                  )}
                  <span className="pts-badge">+{task.pts} pts</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="glass-panel mb-8">
            <h2 className="text-xl font-bold mb-6">Weekly Progress</h2>
            <div className="flex justify-between items-end h-32 gap-2">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => {
                const height = i < 5 ? (i === 4 ? (tasks.filter(t=>t.done).length / 5 * 100) : 100) : 0;
                return (
                  <div key={i} className="flex flex-col items-center gap-2 w-full">
                    <div className="w-full bg-surface-light rounded-t-sm relative h-full flex items-end">
                      <div className="w-full bg-primary rounded-t-sm transition-all" style={{ height: `${height}%` }}></div>
                    </div>
                    <span className="text-sm font-bold text-text-secondary">{day}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="glass-panel border-warning">
            <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-warning"><Trophy size={20}/> Leaderboard</h2>
            <p className="text-sm text-text-secondary mb-4">Village VS Village</p>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-surface rounded">
                <span className="font-bold">1. Seloo Village</span>
                <span className="text-primary font-bold">12,450 pts</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-primary/20 border border-primary rounded">
                <span className="font-bold text-white">2. Nashik (You)</span>
                <span className="text-primary font-bold">11,200 pts</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-surface rounded">
                <span className="font-bold">3. Arvi Village</span>
                <span className="text-primary font-bold">9,850 pts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
