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

  const primaryBtnStyle = { background: 'linear-gradient(135deg, #156d78, #2993a1)', color: '#fff', border: 'none', borderRadius: '9999px', padding: '0.5rem 1.25rem', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' };

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
      <style>{`
        .asha-table-row { transition: background-color 0.2s; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .asha-table-row:hover { background-color: rgba(255,255,255,0.05); }
        .badge-icon { position: absolute; top: 10px; right: 15px; font-size: 2.5rem; z-index: 1; opacity: 1; }
        .card-content { position: relative; z-index: 2; }
      `}</style>
      
      {/* ── Top Navigation Bar ── */}
      <div className="flex justify-between items-center mb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div className="flex items-center mb-1 gap-2" style={{ color: '#9ca3af' }}>
            <Link href="/admin/dashboard" className="text-sm flex items-center gap-2" style={{ color: '#9ca3af', textDecoration: 'none' }}>
              <ArrowLeft size={16} /> Admin Command Center
            </Link>
            <span className="text-sm" style={{ color: '#4b5563' }}>•</span>
            <span className="text-sm font-bold" style={{ color: '#59b6c2' }}>Human Resources & Field Incentives</span>
          </div>
          <h1 className="text-3xl font-black flex items-center gap-4" style={{ color: '#ffffff' }}>
            <Award size={32} style={{ color: '#7ebf1a' }} />
            ASHA Worker Performance & DBT Incentives
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/admin/analytics/disease-map" className="text-xs font-bold" style={{ padding: '0.5rem 1rem', border: '1px solid #59b6c2', color: '#59b6c2', borderRadius: '9999px', textDecoration: 'none' }}>
            Disease Map →
          </Link>
          <Link href="/admin/inventory" className="text-xs font-bold" style={{ ...primaryBtnStyle, textDecoration: 'none' }}>
            Inventory Stock →
          </Link>
        </div>
      </div>

      {/* ── Top 3 Champions Podium Header Cards ── */}
      <div className="grid gap-6 mb-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {/* 1st Place */}
        <div className="glass-card p-6 rounded-2xl podium-card" style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(251, 191, 36, 0.4)', position: 'relative' }}>
          <div className="badge-icon">🥇</div>
          <div className="card-content">
            <span className="text-xs font-black" style={{ color: '#fbbf24', background: 'rgba(251, 191, 36, 0.2)', padding: '0.25rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(251, 191, 36, 0.3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              #1 District Champion
            </span>
            <h3 className="text-2xl font-black mb-1" style={{ color: '#ffffff', marginTop: '0.75rem' }}>Meera Devi</h3>
            <p className="text-sm mb-4" style={{ color: '#d1d5db' }}>Nashik Village Cluster</p>

            <div className="mb-6 flex" style={{ flexDirection: 'column', gap: '0.5rem' }}>
              <div className="flex justify-between text-xs" style={{ color: '#d1d5db' }}>
                <span>Monthly Checkups:</span> <strong style={{ color: '#ffffff' }}>48 Patients</strong>
              </div>
              <div className="flex justify-between text-xs" style={{ color: '#d1d5db' }}>
                <span>Maternal Care Follow-up:</span> <strong style={{ color: '#34d399' }}>98%</strong>
              </div>
              <div className="flex justify-between text-xs" style={{ color: '#d1d5db' }}>
                <span>Patient Rating:</span> <span className="font-bold flex items-center gap-1" style={{ color: '#fbbf24' }}>4.9 ★★★★★</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center" style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div>
              <span style={{ fontSize: '11px', color: '#9ca3af', display: 'block' }}>Total Incentives</span>
              <strong className="text-lg font-black" style={{ color: '#34d399' }}>₹8,500</strong>
            </div>
            <button 
              onClick={() => handleDisburseDBT(1)}
              style={primaryBtnStyle}
            >
              {disbursedIds.includes(1) ? 'Paid via DBT ✓' : 'Pay Bonus ₹1,200'}
            </button>
          </div>
        </div>

        {/* 2nd Place */}
        <div className="glass-card p-6 rounded-2xl podium-card" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(148, 163, 184, 0.3)', position: 'relative' }}>
          <div className="badge-icon">🥈</div>
          <div className="card-content">
            <span className="text-xs font-black" style={{ color: '#cbd5e1', background: 'rgba(255, 255, 255, 0.1)', padding: '0.25rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(255, 255, 255, 0.2)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              #2 Rank Runner-up
            </span>
            <h3 className="text-2xl font-black mb-1" style={{ color: '#ffffff', marginTop: '0.75rem' }}>Anita Kumari</h3>
            <p className="text-sm mb-4" style={{ color: '#d1d5db' }}>Deoli Block Sector 2</p>

            <div className="mb-6 flex" style={{ flexDirection: 'column', gap: '0.5rem' }}>
              <div className="flex justify-between text-xs" style={{ color: '#d1d5db' }}>
                <span>Monthly Checkups:</span> <strong style={{ color: '#ffffff' }}>45 Patients</strong>
              </div>
              <div className="flex justify-between text-xs" style={{ color: '#d1d5db' }}>
                <span>Maternal Care Follow-up:</span> <strong style={{ color: '#34d399' }}>94%</strong>
              </div>
              <div className="flex justify-between text-xs" style={{ color: '#d1d5db' }}>
                <span>Patient Rating:</span> <span className="font-bold flex items-center gap-1" style={{ color: '#fbbf24' }}>4.8 ★★★★★</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center" style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div>
              <span style={{ fontSize: '11px', color: '#9ca3af', display: 'block' }}>Total Incentives</span>
              <strong className="text-lg font-black" style={{ color: '#34d399' }}>₹7,800</strong>
            </div>
            <button 
              onClick={() => handleDisburseDBT(2)}
              style={primaryBtnStyle}
            >
              {disbursedIds.includes(2) ? 'Paid via DBT ✓' : 'Pay Bonus ₹950'}
            </button>
          </div>
        </div>

        {/* 3rd Place */}
        <div className="glass-card p-6 rounded-2xl podium-card" style={{ background: 'rgba(180, 83, 9, 0.1)', border: '1px solid rgba(180, 83, 9, 0.4)', position: 'relative' }}>
          <div className="badge-icon">🥉</div>
          <div className="card-content">
            <span className="text-xs font-black" style={{ color: '#f59e0b', background: 'rgba(180, 83, 9, 0.3)', padding: '0.25rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(180, 83, 9, 0.3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              #3 Rank Bronze
            </span>
            <h3 className="text-2xl font-black mb-1" style={{ color: '#ffffff', marginTop: '0.75rem' }}>Sunita Yadav</h3>
            <p className="text-sm mb-4" style={{ color: '#d1d5db' }}>Borgaon Health Cluster</p>

            <div className="mb-6 flex" style={{ flexDirection: 'column', gap: '0.5rem' }}>
              <div className="flex justify-between text-xs" style={{ color: '#d1d5db' }}>
                <span>Monthly Checkups:</span> <strong style={{ color: '#ffffff' }}>42 Patients</strong>
              </div>
              <div className="flex justify-between text-xs" style={{ color: '#d1d5db' }}>
                <span>Maternal Care Follow-up:</span> <strong style={{ color: '#34d399' }}>90%</strong>
              </div>
              <div className="flex justify-between text-xs" style={{ color: '#d1d5db' }}>
                <span>Patient Rating:</span> <span className="font-bold flex items-center gap-1" style={{ color: '#fbbf24' }}>4.7 ★★★★★</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center" style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div>
              <span style={{ fontSize: '11px', color: '#9ca3af', display: 'block' }}>Total Incentives</span>
              <strong className="text-lg font-black" style={{ color: '#34d399' }}>₹7,200</strong>
            </div>
            <button 
              onClick={() => handleDisburseDBT(3)}
              style={primaryBtnStyle}
            >
              {disbursedIds.includes(3) ? 'Paid via DBT ✓' : 'Pay Bonus ₹800'}
            </button>
          </div>
        </div>
      </div>

      {/* ── KPI Grid Summary ── */}
      <div className="grid gap-6 mb-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <div className="kpi-card p-5 rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#072529' }}>
          <div className="flex justify-between mb-2" style={{ alignItems: 'flex-start' }}>
            <span className="text-xs font-bold" style={{ color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Active Field ASHAs</span>
            <UserCheck size={20} style={{ color: '#59b6c2' }} />
          </div>
          <div className="text-3xl font-black" style={{ color: '#ffffff' }}>84 <span className="text-xs font-bold" style={{ color: '#34d399' }}>Workers</span></div>
          <p className="text-xs" style={{ color: '#9ca3af', marginTop: '0.5rem' }}>100% Coverage in Nashik District</p>
        </div>

        <div className="kpi-card p-5 rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#072529' }}>
          <div className="flex justify-between mb-2" style={{ alignItems: 'flex-start' }}>
            <span className="text-xs font-bold" style={{ color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em' }}>District Quality Score</span>
            <TrendingUp size={20} style={{ color: '#34d399' }} />
          </div>
          <div className="text-3xl font-black" style={{ color: '#ffffff' }}>84.2<span className="text-sm" style={{ color: '#9ca3af' }}>/100</span></div>
          <p className="text-xs font-bold" style={{ color: '#34d399', marginTop: '0.5rem' }}>↑ +4.8 pts higher than last quarter</p>
        </div>

        <div className="kpi-card p-5 rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#072529' }}>
          <div className="flex justify-between mb-2" style={{ alignItems: 'flex-start' }}>
            <span className="text-xs font-bold" style={{ color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em' }}>DBT Disbursed (Aug)</span>
            <IndianRupee size={20} style={{ color: '#fbbf24' }} />
          </div>
          <div className="text-3xl font-black" style={{ color: '#ffffff' }}>₹4.85L</div>
          <p className="text-xs" style={{ color: '#9ca3af', marginTop: '0.5rem' }}>Pending Disbursal: ₹48,500</p>
        </div>

        <div className="kpi-card p-5 rounded-2xl" style={{ border: '1px solid rgba(239, 68, 68, 0.3)', background: 'rgba(239, 68, 68, 0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div className="flex justify-between mb-2" style={{ alignItems: 'flex-start' }}>
            <span className="text-xs font-bold" style={{ color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Support Needed</span>
            <AlertCircle size={20} style={{ color: '#ef4444' }} />
          </div>
          <div className="text-3xl font-black" style={{ color: '#ef4444' }}>2 <span className="text-xs font-bold" style={{ color: '#d1d5db' }}>ASHAs</span></div>
          <p className="text-xs" style={{ color: '#9ca3af', marginTop: '0.5rem' }}>Ashti South & Hinganghat West</p>
        </div>
      </div>

      {/* ── Main Performance Table & Search Filter ── */}
      <div className="glass-card p-6 rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.1)', background: '#072529' }}>
        <div className="flex justify-between items-center mb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2 mb-1" style={{ color: '#ffffff' }}>
              <ShieldCheck size={20} style={{ color: '#59b6c2' }} />
              ASHA Worker Performance Directory & Direct Benefit Transfer (DBT)
            </h2>
            <p className="text-xs" style={{ color: '#9ca3af' }}>Real-time checkups, patient rating scores, and 1-click government DBT payments.</p>
          </div>

          <div className="flex items-center gap-4" style={{ flexWrap: 'wrap' }}>
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Search size={16} style={{ color: '#9ca3af' }} />
              <input 
                type="text" 
                placeholder="Search ASHA or village..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="text-sm"
                style={{ background: 'transparent', color: '#ffffff', outline: 'none', border: 'none', width: '11rem' }}
              />
            </div>

            <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Filter size={16} style={{ color: '#9ca3af' }} />
              <select 
                value={selectedVillage}
                onChange={(e) => setSelectedVillage(e.target.value)}
                className="text-xs"
                style={{ background: 'transparent', color: '#ffffff', outline: 'none', border: 'none', cursor: 'pointer' }}
              >
                <option value="All" style={{ background: '#041416' }}>All Villages</option>
                <option value="Nashik" style={{ background: '#041416' }}>Nashik</option>
                <option value="Deoli" style={{ background: '#041416' }}>Deoli</option>
                <option value="Borgaon" style={{ background: '#041416' }}>Borgaon</option>
                <option value="Hinganghat" style={{ background: '#041416' }}>Hinganghat</option>
                <option value="Arvi" style={{ background: '#041416' }}>Arvi</option>
                <option value="Ashti" style={{ background: '#041416' }}>Ashti</option>
              </select>
            </div>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="w-full" style={{ textAlign: 'left', borderCollapse: 'collapse', minWidth: '800px' }}>
            <thead>
              <tr className="text-xs" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <th style={{ paddingBottom: '0.75rem', paddingLeft: '0.75rem', paddingRight: '0.75rem' }}>Rank</th>
                <th style={{ paddingBottom: '0.75rem', paddingLeft: '0.75rem', paddingRight: '0.75rem' }}>ASHA Worker Name</th>
                <th style={{ paddingBottom: '0.75rem', paddingLeft: '0.75rem', paddingRight: '0.75rem' }}>Village / Cluster</th>
                <th style={{ paddingBottom: '0.75rem', paddingLeft: '0.75rem', paddingRight: '0.75rem' }}>Monthly Visits</th>
                <th style={{ paddingBottom: '0.75rem', paddingLeft: '0.75rem', paddingRight: '0.75rem' }}>Maternal Care %</th>
                <th style={{ paddingBottom: '0.75rem', paddingLeft: '0.75rem', paddingRight: '0.75rem' }}>Patient Rating</th>
                <th style={{ paddingBottom: '0.75rem', paddingLeft: '0.75rem', paddingRight: '0.75rem' }}>Score & Progress</th>
                <th style={{ paddingBottom: '0.75rem', paddingLeft: '0.75rem', paddingRight: '0.75rem', textAlign: 'right' }}>DBT Incentive Action</th>
              </tr>
            </thead>
            <tbody className="text-sm" style={{ color: '#e5e7eb' }}>
              {filteredWorkers.map((w) => {
                const isDisbursed = disbursedIds.includes(w.rank);
                return (
                  <tr key={w.rank} className="asha-table-row">
                    <td className="font-bold" style={{ padding: '1rem 0.75rem', fontSize: '1rem' }}>
                      {w.badge} #{w.rank}
                    </td>
                    <td className="font-bold" style={{ padding: '1rem 0.75rem', color: '#ffffff' }}>
                      {w.name}
                    </td>
                    <td style={{ padding: '1rem 0.75rem', color: '#d1d5db' }}>
                      {w.village}
                    </td>
                    <td className="font-bold" style={{ padding: '1rem 0.75rem', color: '#ffffff' }}>
                      {w.checkups} checkups
                    </td>
                    <td className="font-bold" style={{ padding: '1rem 0.75rem', color: '#34d399' }}>
                      {w.maternalFollowups}
                    </td>
                    <td style={{ padding: '1rem 0.75rem' }}>
                      <span className="font-bold" style={{ color: '#fbbf24' }}>★ {w.satisfaction}</span>
                      <span className="text-xs" style={{ color: '#6b7280' }}> / 5.0</span>
                    </td>
                    <td style={{ padding: '1rem 0.75rem', minWidth: '160px' }}>
                      <div className="flex items-center gap-2">
                        <div style={{ flexGrow: 1, background: 'rgba(255,255,255,0.1)', height: '0.5rem', borderRadius: '9999px', overflow: 'hidden' }}>
                          <div 
                            style={{ 
                              height: '100%', 
                              background: w.score >= 85 ? 'linear-gradient(to right, #156d78, #7ebf1a)' : w.score >= 70 ? '#fbbf24' : '#ef4444',
                              width: `${w.score}%` 
                            }}
                          ></div>
                        </div>
                        <span className="text-xs font-bold" style={{ color: '#ffffff' }}>{w.score}/100</span>
                      </div>
                    </td>
                    <td style={{ padding: '1rem 0.75rem', textAlign: 'right' }}>
                      <button
                        onClick={() => handleDisburseDBT(w.rank)}
                        className="text-xs font-bold"
                        style={isDisbursed 
                          ? { background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.4)', borderRadius: '9999px', padding: '0.375rem 0.75rem', cursor: 'default' } 
                          : primaryBtnStyle
                        }
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
