'use client';
import React from 'react';
import Link from 'next/link';
import { Gamepad2, Trophy, Star } from 'lucide-react';
import '@/styles/games.css';

export default function GamesHub() {
  const games = [
    {
      id: 'healthy-plate',
      title: 'Build a Healthy Plate',
      desc: 'Drag foods to build a balanced meal',
      icon: '🍽️',
      diff: 'Easy-Hard',
      pts: 200,
      path: '/awareness/games/healthy-plate'
    },
    {
      id: 'water-hero',
      title: 'Water Hero',
      desc: 'Tap to clean the water source',
      icon: '💧',
      diff: 'Action',
      pts: 150,
      path: '/awareness/games/water-hero'
    },
    {
      id: 'medicine-match',
      title: 'Medicine Match',
      desc: 'Match symptoms to correct actions',
      icon: '💊',
      diff: 'Quiz',
      pts: 100,
      path: '/awareness/games/medicine-match'
    },
    {
      id: 'fitness-challenge',
      title: 'Daily Fitness Challenge',
      desc: 'Complete daily health goals',
      icon: '🏋️',
      diff: 'Daily',
      pts: '50-200',
      path: '/awareness/games/fitness-challenge'
    }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <div>
          <h1 className="page-title flex items-center gap-3">
            <Gamepad2 className="text-primary" size={32} />
            Health Games Hub
          </h1>
          <p className="page-subtitle">Play, learn, and earn points for rewards</p>
        </div>
      </header>

      <div className="dashboard-grid mb-8">
        <div className="stat-card glass-panel">
          <div className="stat-header">
            <h3 className="stat-title">Games Played</h3>
            <Gamepad2 className="text-primary" />
          </div>
          <div className="stat-value">12</div>
        </div>
        <div className="stat-card glass-panel">
          <div className="stat-header">
            <h3 className="stat-title">Total Points Won</h3>
            <Star className="text-warning" />
          </div>
          <div className="stat-value">1,450</div>
        </div>
        <div className="stat-card glass-panel">
          <div className="stat-header">
            <h3 className="stat-title">Best Streak</h3>
            <Trophy className="text-success" />
          </div>
          <div className="stat-value">5 Days</div>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-xl)' }}>
        {games.map(game => (
          <Link href={game.path} key={game.id} className="game-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="game-preview">
              {game.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{game.title}</h3>
            <p className="text-text-secondary text-sm mb-4">{game.desc}</p>
            <div className="game-stats">
              <span className="badge">{game.diff}</span>
              <span className="pts-badge">+{game.pts} pts</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
