'use client';

import React from 'react';
import '@/styles/globals.css';
import '@/styles/worker.css';
import { CheckCircle2, Clock, AlertCircle, XCircle, CloudOff, Sun, MapPin, ChevronRight, Activity, Users, ClipboardList, FileText } from 'lucide-react';
import Link from 'next/link';

export default function WorkerDashboard() {
  const tasks = [
    { id: 1, title: 'Routine checkup - Ramesh Kumar', location: 'Nashik', status: 'done' },
    { id: 2, title: 'Immunization - Baby Ananya', location: 'Borgaon', status: 'done' },
    { id: 3, title: 'Follow-up - Sunita Bai (Diabetes)', location: 'Paunar', status: 'pending' },
    { id: 4, title: 'Home visit - Lakshmi Devi (Pregnant, 7mo)', location: 'Nashik', status: 'pending' },
    { id: 5, title: 'BP Check - Govind Rao', location: 'Deoli', status: 'pending' },
    { id: 6, title: 'Overdue - Ratan Lal (TB follow-up)', location: 'Hinganghat - 3 days overdue!', status: 'overdue' },
    { id: 7, title: 'New Registration - Kamala Bai', location: 'Nashik', status: 'pending' },
    { id: 8, title: 'Weight check - Child Rohit (malnutrition screening)', location: 'Borgaon', status: 'pending' },
  ];

  const getStatusIcon = (status: string) => {
    if (status === 'done') return <CheckCircle2 style={{ color: '#7ebf1a' }} size={20} />;
    if (status === 'overdue') return <XCircle style={{ color: '#ef4444' }} size={20} />;
    return <Clock style={{ color: '#f59e0b' }} size={20} />;
  };

  return (
    <div className="worker-container">
      <div className="worker-header">
        <div>
          <h1 className="worker-title">Good Morning, Meera Devi</h1>
          <p className="mt-2" style={{ fontSize: '1.2rem', color: '#94a3b8' }}>Ready for today's fieldwork?</p>
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
      <div className="worker-glass-panel" style={{ margin: '1.5rem 0', background: 'linear-gradient(to right, rgba(21, 109, 120, 0.15), rgba(21, 109, 120, 0.05))', borderColor: '#156d78' }}>
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4" style={{ color: 'var(--text-primary)' }}>
          <Activity size={24} color="#7ebf1a" /> ASHA Copilot
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: 'var(--background)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <h3 className="font-semibold text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>Before visiting:</h3>
            <p className="font-bold text-lg mb-4" style={{ color: 'var(--text-primary)' }}>Today: 17 households</p>
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-primary)' }}><span style={{width: 10, height: 10, borderRadius: '50%', background: '#ef4444'}}></span> 3 high-risk</span>
              <span className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-primary)' }}><span style={{width: 10, height: 10, borderRadius: '50%', background: '#f59e0b'}}></span> 6 follow-ups</span>
              <span className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-primary)' }}><span style={{width: 10, height: 10, borderRadius: '50%', background: '#10b981'}}></span> 8 routine</span>
            </div>
          </div>
          
          <div style={{ background: 'var(--background)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <h3 className="font-semibold text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>During visit:</h3>
            <div style={{ paddingLeft: '12px', borderLeft: '4px solid #f59e0b', color: 'var(--text-primary)', fontStyle: 'italic', fontSize: '0.95rem', lineHeight: '1.5' }}>
              "Patient's BP increased 18% from last visit."
            </div>
          </div>
          
          <div style={{ background: 'var(--background)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <h3 className="font-semibold text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>After visit:</h3>
            <div style={{ paddingLeft: '12px', borderLeft: '4px solid #10b981', color: 'var(--text-primary)', fontStyle: 'italic', fontSize: '0.95rem', lineHeight: '1.5' }}>
              "Follow-up required in 7 days."
            </div>
            <p className="text-xs mt-4" style={{ color: '#10b981', fontWeight: 600 }}>Action scheduled automatically.</p>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="worker-glass-panel">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-2"><ClipboardList /> Today's Task List</h2>
            <span style={{ color: '#94a3b8' }}>8 Tasks Remaining</span>
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
            <div className="flex justify-between mb-2" style={{ color: '#cbd5e1' }}>
              <span>34 / 50 Checkups</span>
              <span>68%</span>
            </div>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: '68%' }}></div>
            </div>
          </div>

          <div className="worker-glass-panel">
            <h2 className="text-xl font-semibold mb-4">Universal Health Map</h2>
            <div className="map-container">
              <div className="map-dot" style={{ top: '20%', left: '30%', color: '#10b981' }}></div>
              <div className="map-dot" style={{ top: '40%', left: '50%', color: '#10b981' }}></div>
              <div className="map-dot" style={{ top: '60%', left: '20%', color: '#10b981' }}></div>
              <div className="map-dot" style={{ top: '35%', left: '70%', color: '#f59e0b' }}></div>
              <div className="map-dot" style={{ top: '75%', left: '60%', color: '#f59e0b' }}></div>
              <div className="map-dot" style={{ top: '50%', left: '80%', color: '#ef4444' }}></div>
              <div className="map-dot" style={{ top: '15%', left: '55%', color: '#ef4444' }}></div>
            </div>
          </div>

          <div className="worker-glass-panel flex items-center justify-between" style={{ background: 'rgba(59, 130, 246, 0.15)', borderColor: 'rgba(59, 130, 246, 0.3)' }}>
            <div className="flex items-center gap-3">
              <CloudOff size={24} style={{ color: '#60a5fa' }} />
              <div>
                <h3 className="font-semibold" style={{ color: '#dbeafe' }}>Pending Syncs</h3>
                <p className="text-sm" style={{ color: '#93c5fd' }}>3 records waiting to upload</p>
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
