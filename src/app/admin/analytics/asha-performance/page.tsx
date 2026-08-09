'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Award, 
  TrendingUp, 
  AlertCircle, 
  IndianRupee, 
  ArrowLeft, 
  Search, 
  Filter, 
  CheckCircle2, 
  Star, 
  UserCheck, 
  HeartPulse, 
  Send, 
  Download,
  Flame,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import '../../../../styles/admin.css';

interface Worker {
  rank: number;
  name: string;
  village: string;
  checkups: number;
  maternalFollowups: string;
  satisfaction: number;
  score: number;
  incentiveEarned: number;
  pendingPayout: number;
  badge: string;
  status: 'Top Performer' | 'Active' | 'Requires Support';
}

export default function AshaPerformancePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVillage, setSelectedVillage] = useState('All');
  const [disbursedIds, setDisbursedIds] = useState<number[]>([]);

  const workers: Worker[] = [
    { rank: 1, name: 'Meera Devi', village: 'Nashik Village', checkups: 48, maternalFollowups: '98%', satisfaction: 4.9, score: 96, incentiveEarned: 8500, pendingPayout: 1200, badge: '🥇', status: 'Top Performer' },
    { rank: 2, name: 'Anita Kumari', village: 'Deoli Block', checkups: 45, maternalFollowups: '94%', satisfaction: 4.8, score: 93, incentiveEarned: 7800, pendingPayout: 950, badge: '🥈', status: 'Top Performer' },
    { rank: 3, name: 'Sunita Yadav', village: 'Borgaon Cluster', checkups: 42, maternalFollowups: '90%', satisfaction: 4.7, score: 89, incentiveEarned: 7200, pendingPayout: 800, badge: '🥉', status: 'Top Performer' },
    { rank: 4, name: 'Priya Sharma', village: 'Hinganghat East', checkups: 39, maternalFollowups: '85%', satisfaction: 4.5, score: 85, incentiveEarned: 6400, pendingPayout: 600, badge: '⭐', status: 'Active' },
    { rank: 5, name: 'Lata Mangeshkar', village: 'Arvi Sector', checkups: 35, maternalFollowups: '82%', satisfaction: 4.4, score: 82, incentiveEarned: 5800, pendingPayout: 500, badge: '⭐', status: 'Active' },
    { rank: 6, name: 'Kamala Bai', village: 'Ashti South', checkups: 22, maternalFollowups: '68%', satisfaction: 3.9, score: 64, incentiveEarned: 3200, pendingPayout: 400, badge: '⚠️', status: 'Requires Support' },
    { rank: 7, name: 'Rekha Patil', village: 'Seloo West', checkups: 38, maternalFollowups: '88%', satisfaction: 4.6, score: 87, incentiveEarned: 6600, pendingPayout: 700, badge: '⭐', status: 'Active' }
  ];

  const handleDisburseDBT = (rank: number) => {
    if (!disbursedIds.includes(rank)) {
      setDisbursedIds([...disbursedIds, rank]);
    }
  };

  const filteredWorkers = workers.filter(w => {
    const matchesSearch = w.name.toLowerCase().includes(searchTerm.toLowerCase()) || w.village.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVillage = selectedVillage === 'All' || w.village.includes(selectedVillage);
    return matchesSearch && matchesVillage;
  });

  return (
    <div className="admin-dashboard-container">
      {/* ── Top Navigation Bar ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link href="/admin/dashboard" className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
              <ArrowLeft size={16} /> Admin Command Center
            </Link>
            <span className="text-gray-600">•</span>
            <span className="text-sm text-[#59b6c2] font-semibold">Human Resources & Field Incentives</span>
          </div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3">
            <Award className="text-[#7ebf1a]" size={32} />
            ASHA Worker Performance & DBT Incentives
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/admin/analytics/disease-map" className="btn-action-outline text-xs">
            Disease Map →
          </Link>
          <Link href="/admin/inventory" className="btn-action-primary text-xs">
            Inventory Stock →
          </Link>
        </div>
      </div>

      {/* ── Top 3 Champions Podium Header Cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 1st Place */}
        <div className="glass-card p-6 rounded-2xl border border-amber-400/40 bg-amber-500/10 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-3 right-3 text-4xl">🥇</div>
          <div>
            <span className="text-xs uppercase tracking-widest font-black text-amber-400 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30">
              #1 District Champion
            </span>
            <h3 className="text-2xl font-black text-white mt-3 mb-1">Meera Devi</h3>
            <p className="text-sm text-gray-300 mb-4">Nashik Village Cluster</p>

            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-xs text-gray-300">
                <span>Monthly Checkups:</span> <strong className="text-white">48 Patients</strong>
              </div>
              <div className="flex justify-between text-xs text-gray-300">
                <span>Maternal Care Follow-up:</span> <strong className="text-emerald-400">98%</strong>
              </div>
              <div className="flex justify-between text-xs text-gray-300">
                <span>Patient Rating:</span> <span className="text-amber-400 font-bold flex items-center gap-1">4.9 ★★★★★</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-between items-center">
            <div>
              <span className="text-[11px] text-gray-400 block">Total Incentives</span>
              <strong className="text-lg text-emerald-400 font-black">₹8,500</strong>
            </div>
            <button 
              onClick={() => handleDisburseDBT(1)}
              className="btn-action-primary text-xs py-2 px-4"
            >
              {disbursedIds.includes(1) ? 'Paid via DBT ✓' : 'Pay Bonus ₹1,200'}
            </button>
          </div>
        </div>

        {/* 2nd Place */}
        <div className="glass-card p-6 rounded-2xl border border-slate-300/30 bg-white/5 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-3 right-3 text-4xl">🥈</div>
          <div>
            <span className="text-xs uppercase tracking-widest font-black text-slate-300 bg-white/10 px-3 py-1 rounded-full border border-white/20">
              #2 Rank Runner-up
            </span>
            <h3 className="text-2xl font-black text-white mt-3 mb-1">Anita Kumari</h3>
            <p className="text-sm text-gray-300 mb-4">Deoli Block Sector 2</p>

            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-xs text-gray-300">
                <span>Monthly Checkups:</span> <strong className="text-white">45 Patients</strong>
              </div>
              <div className="flex justify-between text-xs text-gray-300">
                <span>Maternal Care Follow-up:</span> <strong className="text-emerald-400">94%</strong>
              </div>
              <div className="flex justify-between text-xs text-gray-300">
                <span>Patient Rating:</span> <span className="text-amber-400 font-bold flex items-center gap-1">4.8 ★★★★★</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-between items-center">
            <div>
              <span className="text-[11px] text-gray-400 block">Total Incentives</span>
              <strong className="text-lg text-emerald-400 font-black">₹7,800</strong>
            </div>
            <button 
              onClick={() => handleDisburseDBT(2)}
              className="btn-action-primary text-xs py-2 px-4"
            >
              {disbursedIds.includes(2) ? 'Paid via DBT ✓' : 'Pay Bonus ₹950'}
            </button>
          </div>
        </div>

        {/* 3rd Place */}
        <div className="glass-card p-6 rounded-2xl border border-amber-700/40 bg-amber-900/10 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-3 right-3 text-4xl">🥉</div>
          <div>
            <span className="text-xs uppercase tracking-widest font-black text-amber-500 bg-amber-900/30 px-3 py-1 rounded-full border border-amber-700/30">
              #3 Rank Bronze
            </span>
            <h3 className="text-2xl font-black text-white mt-3 mb-1">Sunita Yadav</h3>
            <p className="text-sm text-gray-300 mb-4">Borgaon Health Cluster</p>

            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-xs text-gray-300">
                <span>Monthly Checkups:</span> <strong className="text-white">42 Patients</strong>
              </div>
              <div className="flex justify-between text-xs text-gray-300">
                <span>Maternal Care Follow-up:</span> <strong className="text-emerald-400">90%</strong>
              </div>
              <div className="flex justify-between text-xs text-gray-300">
                <span>Patient Rating:</span> <span className="text-amber-400 font-bold flex items-center gap-1">4.7 ★★★★★</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-between items-center">
            <div>
              <span className="text-[11px] text-gray-400 block">Total Incentives</span>
              <strong className="text-lg text-emerald-400 font-black">₹7,200</strong>
            </div>
            <button 
              onClick={() => handleDisburseDBT(3)}
              className="btn-action-primary text-xs py-2 px-4"
            >
              {disbursedIds.includes(3) ? 'Paid via DBT ✓' : 'Pay Bonus ₹800'}
            </button>
          </div>
        </div>
      </div>

      {/* ── KPI Grid Summary ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Active Field ASHAs</span>
            <UserCheck size={20} className="text-[#59b6c2]" />
          </div>
          <div className="text-3xl font-black text-white">84 <span className="text-xs text-emerald-400 font-bold">Workers</span></div>
          <p className="text-xs text-gray-400 mt-2">100% Coverage in Nashik District</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">District Quality Score</span>
            <TrendingUp size={20} className="text-emerald-400" />
          </div>
          <div className="text-3xl font-black text-white">84.2<span className="text-sm text-gray-400">/100</span></div>
          <p className="text-xs text-emerald-400 font-semibold mt-2">↑ +4.8 pts higher than last quarter</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">DBT Disbursed (Aug)</span>
            <IndianRupee size={20} className="text-amber-400" />
          </div>
          <div className="text-3xl font-black text-white">₹4.85L</div>
          <p className="text-xs text-gray-400 mt-2">Pending Disbursal: ₹48,500</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-red-500/30 bg-red-500/5 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Support Needed</span>
            <AlertCircle size={20} className="text-red-400" />
          </div>
          <div className="text-3xl font-black text-red-400">2 <span className="text-xs font-bold text-gray-300">ASHAs</span></div>
          <p className="text-xs text-gray-400 mt-2">Ashti South & Hinganghat West</p>
        </div>
      </div>

      {/* ── Main Performance Table & Search Filter ── */}
      <div className="glass-card p-6 rounded-2xl border border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#59b6c2]" />
              ASHA Worker Performance Directory & Direct Benefit Transfer (DBT)
            </h2>
            <p className="text-xs text-gray-400">Real-time checkups, patient rating scores, and 1-click government DBT payments.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-xl border border-white/10">
              <Search size={16} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Search ASHA or village..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent text-sm text-white outline-none placeholder:text-gray-500 w-44"
              />
            </div>

            <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-xl border border-white/10">
              <Filter size={16} className="text-gray-400" />
              <select 
                value={selectedVillage}
                onChange={(e) => setSelectedVillage(e.target.value)}
                className="bg-transparent text-xs text-white outline-none cursor-pointer"
              >
                <option value="All" className="bg-[#041416]">All Villages</option>
                <option value="Nashik" className="bg-[#041416]">Nashik</option>
                <option value="Deoli" className="bg-[#041416]">Deoli</option>
                <option value="Borgaon" className="bg-[#041416]">Borgaon</option>
                <option value="Hinganghat" className="bg-[#041416]">Hinganghat</option>
                <option value="Arvi" className="bg-[#041416]">Arvi</option>
                <option value="Ashti" className="bg-[#041416]">Ashti</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-xs text-gray-400 uppercase tracking-wider">
                <th className="pb-3 px-3">Rank</th>
                <th className="pb-3 px-3">ASHA Worker Name</th>
                <th className="pb-3 px-3">Village / Cluster</th>
                <th className="pb-3 px-3">Monthly Visits</th>
                <th className="pb-3 px-3">Maternal Care %</th>
                <th className="pb-3 px-3">Patient Rating</th>
                <th className="pb-3 px-3">Score & Progress</th>
                <th className="pb-3 px-3 text-right">DBT Incentive Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm text-gray-200">
              {filteredWorkers.map((w) => {
                const isDisbursed = disbursedIds.includes(w.rank);
                return (
                  <tr key={w.rank} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-3 font-bold text-base">
                      {w.badge} #{w.rank}
                    </td>
                    <td className="py-4 px-3 font-bold text-white">
                      {w.name}
                    </td>
                    <td className="py-4 px-3 text-gray-300">
                      {w.village}
                    </td>
                    <td className="py-4 px-3 font-bold text-white">
                      {w.checkups} checkups
                    </td>
                    <td className="py-4 px-3 text-emerald-400 font-bold">
                      {w.maternalFollowups}
                    </td>
                    <td className="py-4 px-3">
                      <span className="text-amber-400 font-bold">★ {w.satisfaction}</span>
                      <span className="text-xs text-gray-500"> / 5.0</span>
                    </td>
                    <td className="py-4 px-3 min-w-[160px]">
                      <div className="flex items-center gap-2">
                        <div className="flex-grow bg-white/10 h-2 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${w.score >= 85 ? 'bg-gradient-to-r from-[#156d78] to-[#7ebf1a]' : w.score >= 70 ? 'bg-amber-400' : 'bg-red-400'}`} 
                            style={{ width: `${w.score}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-bold text-white">{w.score}/100</span>
                      </div>
                    </td>
                    <td className="py-4 px-3 text-right">
                      <button
                        onClick={() => handleDisburseDBT(w.rank)}
                        className={`text-xs px-3 py-1.5 rounded-full font-bold transition-all ${isDisbursed ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'btn-action-primary'}`}
                      >
                        {isDisbursed ? '₹' + w.pendingPayout + ' Disbursed ✓' : 'Disburse ₹' + w.pendingPayout}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
