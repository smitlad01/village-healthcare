'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Users, Search } from 'lucide-react';
import '@/styles/globals.css';
import '@/styles/worker.css';

export default function WorkersDetail() {
  const workers = [
    { id: 'W-001', name: 'Meera Devi', role: 'Senior ASHA', zone: 'Central Zone', status: 'Active (Field)' },
    { id: 'W-002', name: 'Sunita Bai', role: 'ANM', zone: 'North Zone', status: 'In Clinic' },
    { id: 'W-003', name: 'Rani Kumari', role: 'ASHA', zone: 'South Zone', status: 'On Leave' },
    { id: 'W-004', name: 'Pooja Sharma', role: 'ASHA', zone: 'East Zone', status: 'Active (Field)' },
    { id: 'W-005', name: 'Aarti Desai', role: 'Community Mobilizer', zone: 'Central Zone', status: 'Active (Field)' },
  ];

  return (
    <div className="worker-container" style={{ minHeight: '100vh', padding: '2rem' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem', fontWeight: 600 }}>
        <ChevronLeft size={20} /> Back to Dashboard
      </Link>
      
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
            <Users color="#10b981" /> Healthcare Workers
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Detailed view of field workers and their current deployment.</p>
        </div>
        <div className="relative">
          <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
          <input type="text" placeholder="Search workers..." style={{ padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '99px', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-primary)', outline: 'none' }} />
        </div>
      </div>

      <div className="worker-glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead style={{ background: 'rgba(255, 255, 255, 0.05)', borderBottom: '1px solid var(--border)' }}>
            <tr>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>ID</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Worker Name</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Role</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Assigned Zone</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {workers.map((w, idx) => (
              <tr key={w.id} style={{ borderBottom: idx !== workers.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{w.id}</td>
                <td style={{ padding: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>{w.name}</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{w.role}</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{w.zone}</td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ 
                    padding: '4px 10px', 
                    borderRadius: '99px', 
                    fontSize: '0.8rem', 
                    fontWeight: 600,
                    background: w.status.includes('Active') ? 'rgba(16, 185, 129, 0.1)' : (w.status.includes('Leave') ? 'rgba(239, 68, 68, 0.1)' : 'rgba(59, 130, 246, 0.1)'),
                    color: w.status.includes('Active') ? '#10b981' : (w.status.includes('Leave') ? '#ef4444' : '#3b82f6')
                  }}>
                    {w.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
