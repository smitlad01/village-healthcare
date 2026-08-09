'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Siren, Search } from 'lucide-react';
import '@/styles/globals.css';
import '@/styles/worker.css';

export default function AmbulancesDetail() {
  const ambulances = [
    { id: 'AMB-MH-15-1234', type: 'Advanced Life Support (ALS)', location: 'Central Hospital Hub', status: 'Available', driver: 'Sanjay Dutt' },
    { id: 'AMB-MH-15-5678', type: 'Basic Life Support (BLS)', location: 'North Zone PHC', status: 'En Route', driver: 'Rahul Verma' },
    { id: 'AMB-MH-15-9101', type: 'Basic Life Support (BLS)', location: 'South Zone PHC', status: 'Maintenance', driver: 'Unassigned' },
    { id: 'AMB-MH-15-1121', type: 'Neonatal Ambulance', location: 'Central Hospital Hub', status: 'Available', driver: 'Vijay Kumar' },
    { id: 'AMB-MH-15-3141', type: 'Advanced Life Support (ALS)', location: 'Highway Checkpoint 4', status: 'Dispatched (SOS)', driver: 'Amol Shinde' },
  ];

  return (
    <div className="worker-container" style={{ minHeight: '100vh', padding: '2rem' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem', fontWeight: 600 }}>
        <ChevronLeft size={20} /> Back to Dashboard
      </Link>
      
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
            <Siren color="#ef4444" /> Ambulance Dispatch
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Live tracking and status of all hospital fleet vehicles.</p>
        </div>
        <div className="relative">
          <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
          <input type="text" placeholder="Search vehicle ID..." style={{ padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '99px', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-primary)', outline: 'none' }} />
        </div>
      </div>

      <div className="worker-glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead style={{ background: 'rgba(255, 255, 255, 0.05)', borderBottom: '1px solid var(--border)' }}>
            <tr>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Vehicle ID</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Type</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Current Location</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Driver Name</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {ambulances.map((amb, idx) => (
              <tr key={amb.id} style={{ borderBottom: idx !== ambulances.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <td style={{ padding: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>{amb.id}</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{amb.type}</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{amb.location}</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{amb.driver}</td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ 
                    padding: '4px 10px', 
                    borderRadius: '99px', 
                    fontSize: '0.8rem', 
                    fontWeight: 600,
                    background: amb.status === 'Available' ? 'rgba(16, 185, 129, 0.1)' : (amb.status === 'Maintenance' ? 'rgba(107, 114, 128, 0.2)' : 'rgba(239, 68, 68, 0.1)'),
                    color: amb.status === 'Available' ? '#10b981' : (amb.status === 'Maintenance' ? '#9ca3af' : '#ef4444')
                  }}>
                    {amb.status}
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
