'use client';

import React from 'react';
import '@/styles/globals.css';
import '@/styles/worker.css';
import { Calendar, AlertCircle, Clock, CheckCircle2, RefreshCw } from 'lucide-react';

export default function FollowupsManagement() {
  const tabs = ['Due Today (4)', 'Overdue (3)', 'This Week (8)', 'All'];

  const followups = [
    { id: 1, name: 'Ratan Lal', condition: 'TB (active treatment)', lastVisit: '10 days ago', daysOverdue: 3, status: 'overdue' },
    { id: 2, name: 'Sunita Bai', condition: 'Diabetes mgmt', lastVisit: '15 days ago', daysOverdue: 1, status: 'overdue' },
    { id: 3, name: 'Govind Rao', condition: 'BP Check', lastVisit: '8 days ago', daysOverdue: 0, status: 'today' },
    { id: 4, name: 'Lakshmi Devi', condition: 'ANC Visit (Pregnant)', lastVisit: '1 month ago', daysOverdue: 0, status: 'today' },
  ];

  return (
    <div className="worker-container">
      <div className="worker-header">
        <h1 className="worker-title">Follow-up Management</h1>
      </div>

      <div className="offline-banner" style={{ background: 'rgba(239, 68, 68, 0.15)', borderColor: 'rgba(239, 68, 68, 0.3)', color: '#fca5a5' }}>
        <AlertCircle size={24} />
        <span>Ratan Lal (TB) is 3 days overdue for follow-up. Please visit urgently.</span>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        {tabs.map((tab, i) => (
          <button key={i} className={`whitespace-nowrap px-6 py-3 rounded-xl font-semibold text-lg transition-all ${
            i === 1 ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 
            i === 0 ? 'bg-blue-500 text-white' : 'bg-slate-800/50 text-slate-400 border border-slate-700'
          }`}>
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {followups.map(f => (
          <div key={f.id} className="worker-glass-panel flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-white">{f.name}</h3>
                {f.status === 'overdue' && (
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-bold flex items-center gap-1">
                    <AlertCircle size={14} /> Overdue by {f.daysOverdue} days
                  </span>
                )}
                {f.status === 'today' && (
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-bold flex items-center gap-1">
                    <Clock size={14} /> Due Today
                  </span>
                )}
              </div>
              <p className="text-slate-300 text-lg">{f.condition}</p>
              <p className="text-slate-500 text-sm mt-1">Last visit: {f.lastVisit}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button className="btn-secondary" style={{ padding: '0.75rem 1.5rem' }}>
                <RefreshCw size={18} /> Reschedule
              </button>
              <button className="btn-primary" style={{ padding: '0.75rem 1.5rem', background: f.status === 'overdue' ? '#ef4444' : undefined, color: f.status === 'overdue' ? 'white' : undefined }}>
                <CheckCircle2 size={18} /> Mark Visited
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
