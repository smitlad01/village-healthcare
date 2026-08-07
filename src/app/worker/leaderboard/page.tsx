'use client';

import React from 'react';
import '@/styles/globals.css';
import '@/styles/worker.css';
import { Trophy, Star, Gift, Download, TrendingUp, Award } from 'lucide-react';

export default function LeaderboardPage() {
  const leaderboard = [
    { rank: 1, name: 'Kavita Sharma', village: 'Deoli', checkups: 112, score: 5600, badge: '🥇 Gold' },
    { rank: 2, name: 'Sunita Patil', village: 'Hinganghat', checkups: 98, score: 4900, badge: '🥈 Silver' },
    { rank: 3, name: 'Anita Desai', village: 'Arvi', checkups: 85, score: 4250, badge: '🥉 Bronze' },
    { rank: 4, name: 'Meera Devi', village: 'Nashik', checkups: 69, score: 3450, badge: '⭐ Champion', isMe: true },
    { rank: 5, name: 'Lata Mangeshkar', village: 'Ashti', checkups: 65, score: 3250, badge: '⭐ Champion' },
  ];

  return (
    <div className="worker-container">
      <div className="worker-header">
        <h1 className="worker-title flex items-center gap-3">
          <Trophy className="text-yellow-400" size={36} /> District Leaderboard & Rewards
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 worker-glass-panel p-0 overflow-hidden">
          <div className="p-6 bg-slate-800/50 border-b border-slate-700 flex justify-between items-center">
            <h2 className="text-xl font-bold">Top ASHAs in Nashik District</h2>
            <div className="text-sm px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
              August 2024
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Village</th>
                  <th>Checkups</th>
                  <th>Score (XP)</th>
                  <th>Badge</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map(worker => (
                  <tr key={worker.rank} style={worker.isMe ? { background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6' } : {}}>
                    <td className={`rank-${worker.rank}`}>{worker.rank}</td>
                    <td className="font-semibold flex items-center gap-2">
                      {worker.name} {worker.isMe && <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded ml-2">YOU</span>}
                    </td>
                    <td>{worker.village}</td>
                    <td>{worker.checkups}</td>
                    <td className="font-bold text-blue-400">{worker.score.toLocaleString()}</td>
                    <td>{worker.badge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="worker-glass-panel" style={{ background: 'linear-gradient(145deg, rgba(30,41,59,0.8) 0%, rgba(15,23,42,0.9) 100%)' }}>
            <h3 className="text-xl font-bold mb-4 text-white">Your Progress</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400">Bronze Level (50)</span>
                  <span className="text-emerald-400">✅ Achieved</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400">Silver Level (200)</span>
                  <span className="text-emerald-400">✅ Achieved</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-yellow-400 font-semibold">Gold Level (500)</span>
                  <span className="text-slate-300">68%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-3">
                  <div className="bg-yellow-400 h-3 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.5)]" style={{ width: '68%' }}></div>
                </div>
                <p className="text-xs text-slate-400 mt-2 text-center">160 more XP to unlock ₹500 Bonus!</p>
              </div>
            </div>
          </div>

          <div className="worker-glass-panel">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Award className="text-purple-400" /> Earned Rewards</h3>
            
            <div className="space-y-3">
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-white">Best ASHA Q2 2024</h4>
                  <p className="text-sm text-slate-400">Digital Certificate</p>
                </div>
                <button className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/40">
                  <Download size={20} />
                </button>
              </div>

              <div className="p-4 bg-emerald-900/30 rounded-xl border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-emerald-400 text-lg">₹2,000 Incentive</h4>
                  <p className="text-sm text-emerald-500/70">Credited to bank account</p>
                </div>
                <Gift className="text-emerald-400" size={28} />
              </div>
            </div>
          </div>
          
          <div className="worker-glass-panel">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><TrendingUp className="text-blue-400"/> XP Breakdown</h3>
             <ul className="space-y-2 text-sm text-slate-300">
               <li className="flex justify-between border-b border-slate-700/50 pb-2"><span>Checkups (69)</span> <span className="font-mono text-blue-300">2,100</span></li>
               <li className="flex justify-between border-b border-slate-700/50 pb-2"><span>Follow-ups (32)</span> <span className="font-mono text-blue-300">800</span></li>
               <li className="flex justify-between border-b border-slate-700/50 pb-2"><span>Immunizations (14)</span> <span className="font-mono text-blue-300">350</span></li>
               <li className="flex justify-between font-bold text-white pt-1"><span>Bonus XP</span> <span className="text-yellow-400 font-mono">200</span></li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
