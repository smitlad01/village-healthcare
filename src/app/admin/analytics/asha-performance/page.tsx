'use client';
import React from 'react';
import { Award, TrendingUp, AlertCircle, IndianRupee } from 'lucide-react';
import '../../../../styles/admin.css';

export default function AshaPerformance() {
  const workers = [
    { rank: 1, name: 'Meera Devi', village: 'Wardha', checkups: 48, followups: '95%', satisfaction: 4.9, score: 96, badge: '🥇' },
    { rank: 2, name: 'Anita Kumari', village: 'Deoli', checkups: 45, followups: '92%', satisfaction: 4.8, score: 93, badge: '🥈' },
    { rank: 3, name: 'Sunita Yadav', village: 'Borgaon', checkups: 42, followups: '88%', satisfaction: 4.7, score: 89, badge: '🥉' },
    { rank: 4, name: 'Priya Sharma', village: 'Hinganghat', checkups: 39, followups: '85%', satisfaction: 4.5, score: 85, badge: '⭐' },
    { rank: 5, name: 'Lata Mangeshkar', village: 'Arvi', checkups: 35, followups: '82%', satisfaction: 4.4, score: 82, badge: '⭐' },
  ];

  return (
    <div className="admin-dashboard-container">
      <h1 className="text-3xl font-bold mb-2">ASHA Worker Performance</h1>
      <p className="text-secondary mb-6">Monitoring and incentivizing ground-level healthcare workers</p>

      <div className="kpi-grid mb-8">
        <div className="kpi-card">
          <div className="flex justify-between"><span className="text-secondary">Total Active Workers</span><Award className="text-primary"/></div>
          <div className="kpi-value">84</div>
        </div>
        <div className="kpi-card">
          <div className="flex justify-between"><span className="text-secondary">District Avg Score</span><TrendingUp className="text-success"/></div>
          <div className="kpi-value">78/100</div>
        </div>
        <div className="kpi-card">
          <div className="flex justify-between"><span className="text-secondary">Incentives Disbursed</span><IndianRupee className="text-warning"/></div>
          <div className="kpi-value">₹4.5L</div>
          <div className="kpi-trend text-secondary">Pending: ₹1.2L</div>
        </div>
        <div className="kpi-card border-danger">
          <div className="flex justify-between"><span className="text-secondary">Underperforming Zones</span><AlertCircle className="text-danger"/></div>
          <div className="kpi-value text-danger">2</div>
          <div className="kpi-trend text-secondary">Hinganghat East, Ashti South</div>
        </div>
      </div>

      <div className="admin-table-wrapper">
        <h3 className="font-bold text-xl p-6 pb-2">Top Performers (Aug 2024)</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Village/Block</th>
              <th>Monthly Checkups</th>
              <th>Follow-up Rate</th>
              <th>Patient Sat.</th>
              <th>Overall Score</th>
            </tr>
          </thead>
          <tbody>
            {workers.map((w) => (
              <tr key={w.rank} className="cursor-pointer hover:bg-white/5 transition-colors">
                <td className="font-bold text-xl">{w.badge} #{w.rank}</td>
                <td className="font-medium">{w.name}</td>
                <td>{w.village}</td>
                <td>{w.checkups}</td>
                <td>{w.followups}</td>
                <td>{w.satisfaction}/5.0</td>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-glass-border h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full" style={{ width: `${w.score}%` }}></div>
                    </div>
                    <span>{w.score}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
