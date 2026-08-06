'use client';

import React from 'react';
import '@/styles/globals.css';
import '@/styles/worker.css';
import { CheckCircle2, Clock, AlertCircle, XCircle, CloudOff, Sun, MapPin, ChevronRight, Activity, Users, ClipboardList, FileText } from 'lucide-react';
import Link from 'next/link';

export default function WorkerDashboard() {
  const tasks = [
    { id: 1, title: 'Routine checkup - Ramesh Kumar', location: 'Wardha', status: 'done' },
    { id: 2, title: 'Immunization - Baby Ananya', location: 'Borgaon', status: 'done' },
    { id: 3, title: 'Follow-up - Sunita Bai (Diabetes)', location: 'Paunar', status: 'pending' },
    { id: 4, title: 'Home visit - Lakshmi Devi (Pregnant, 7mo)', location: 'Wardha', status: 'pending' },
    { id: 5, title: 'BP Check - Govind Rao', location: 'Deoli', status: 'pending' },
    { id: 6, title: 'Overdue - Ratan Lal (TB follow-up)', location: 'Hinganghat - 3 days overdue!', status: 'overdue' },
    { id: 7, title: 'New Registration - Kamala Bai', location: 'Wardha', status: 'pending' },
    { id: 8, title: 'Weight check - Child Rohit (malnutrition screening)', location: 'Borgaon', status: 'pending' },
  ];

  const getStatusIcon = (status: string) => {
    if (status === 'done') return <CheckCircle2 className="text-emerald-500" size={20} />;
    if (status === 'overdue') return <XCircle className="text-red-500" size={20} />;
    return <Clock className="text-amber-500" size={20} />;
  };

  return (
    <div className="worker-container">
      <div className="worker-header">
        <div>
          <h1 className="worker-title">Good Morning, Meera Devi</h1>
          <p className="text-slate-400 mt-2" style={{ fontSize: '1.2rem' }}>Ready for today's fieldwork?</p>
        </div>
        <div className="flex gap-4">
          <div className="worker-badge">
            🥇 Senior Health Champion
          </div>
          <div className="worker-xp">
            XP: 3,450
          </div>
        </div>
      </div>

      <div className="offline-banner" style={{ background: 'rgba(239, 68, 68, 0.15)', borderColor: 'rgba(239, 68, 68, 0.3)', color: '#fca5a5' }}>
        <Sun size={24} />
        <span>Weather Advisory: 🌡️ Heat Wave Alert. Ensure elderly patients stay hydrated today.</span>
      </div>

      <div className="dashboard-grid">
        <div className="worker-glass-panel dashboard-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-2"><ClipboardList /> Today's Task List</h2>
            <span className="text-slate-400">8 Tasks Remaining</span>
          </div>
          <div className="task-list">
            {tasks.map(task => (
              <div key={task.id} className="task-item">
                <div className="task-item-content">
                  <div className={`task-checkbox ${task.status}`}>
                    {task.status === 'done' && <CheckCircle2 size={16} color="white" />}
                  </div>
                  <div>
                    <div className="task-title">{task.title}</div>
                    <div className="task-desc flex items-center gap-1 mt-1">
                      <MapPin size={14} /> {task.location}
                    </div>
                  </div>
                </div>
                <button className="btn-secondary" style={{ padding: '0.5rem 1rem', minHeight: '40px' }}>
                  Update <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="worker-glass-panel">
            <h2 className="text-xl font-semibold mb-4">Monthly Progress</h2>
            <div className="flex justify-between text-slate-300 mb-2">
              <span>34 / 50 Checkups</span>
              <span>68%</span>
            </div>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: '68%' }}></div>
            </div>
          </div>

          <div className="worker-glass-panel">
            <h2 className="text-xl font-semibold mb-4">Village Health Map</h2>
            <div className="map-container">
              <div className="map-dot text-emerald-500" style={{ top: '20%', left: '30%', color: '#10b981' }}></div>
              <div className="map-dot text-emerald-500" style={{ top: '40%', left: '50%', color: '#10b981' }}></div>
              <div className="map-dot text-emerald-500" style={{ top: '60%', left: '20%', color: '#10b981' }}></div>
              <div className="map-dot text-amber-500" style={{ top: '35%', left: '70%', color: '#f59e0b' }}></div>
              <div className="map-dot text-amber-500" style={{ top: '75%', left: '60%', color: '#f59e0b' }}></div>
              <div className="map-dot text-red-500" style={{ top: '50%', left: '80%', color: '#ef4444' }}></div>
              <div className="map-dot text-red-500" style={{ top: '15%', left: '55%', color: '#ef4444' }}></div>
            </div>
          </div>

          <div className="worker-glass-panel flex items-center justify-between" style={{ background: 'rgba(59, 130, 246, 0.15)', borderColor: 'rgba(59, 130, 246, 0.3)' }}>
            <div className="flex items-center gap-3">
              <CloudOff size={24} className="text-blue-400" />
              <div>
                <h3 className="font-semibold text-blue-100">Pending Syncs</h3>
                <p className="text-blue-300 text-sm">3 records waiting to upload</p>
              </div>
            </div>
            <button className="btn-primary" style={{ padding: '0.5rem 1rem', minHeight: '40px' }}>Sync Now</button>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4 mt-8">Quick Actions</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link href="/worker/checkup" className="btn-primary w-full text-center flex-col gap-2 h-32">
          <Activity size={32} />
          Start Checkup
        </Link>
        <Link href="/worker/patients" className="btn-secondary w-full text-center flex-col gap-2 h-32">
          <Users size={32} />
          View My Patients
        </Link>
        <Link href="/worker/followups" className="btn-secondary w-full text-center flex-col gap-2 h-32">
          <MapPin size={32} />
          Log Visit
        </Link>
        <Link href="/worker/reports" className="btn-secondary w-full text-center flex-col gap-2 h-32">
          <FileText size={32} />
          Generate Report
        </Link>
      </div>
    </div>
  );
}
