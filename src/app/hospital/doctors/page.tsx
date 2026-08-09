'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Stethoscope, Search } from 'lucide-react';
import '@/styles/globals.css';
import '@/styles/worker.css';

export default function DoctorsDetail() {
  const doctors = [
    { id: 'DR-001', name: 'Dr. Ananya Sharma', spec: 'Cardiologist', status: 'Available', shift: '09:00 AM - 05:00 PM' },
    { id: 'DR-002', name: 'Dr. Ramesh Kumar', spec: 'General Physician', status: 'On Leave (Holiday)', shift: '-' },
    { id: 'DR-003', name: 'Dr. Sunita Devi', spec: 'Pediatrician', status: 'In Surgery', shift: '10:00 AM - 06:00 PM' },
    { id: 'DR-004', name: 'Dr. Vivek Patil', spec: 'Orthopedic', status: 'Available', shift: '08:00 AM - 02:00 PM' },
    { id: 'DR-005', name: 'Dr. Meera Iyer', spec: 'Gynecologist', status: 'Available', shift: '11:00 AM - 07:00 PM' },
  ];

  return (
    <div className="worker-container" style={{ minHeight: '100vh', padding: '2rem' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem', fontWeight: 600 }}>
        <ChevronLeft size={20} /> Back to Dashboard
      </Link>
      
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
            <Stethoscope color="#3b82f6" /> Doctors Roster
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Detailed view of all doctors and current availability.</p>
        </div>
        <div className="relative">
          <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
          <input type="text" placeholder="Search doctors..." style={{ padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '99px', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-primary)', outline: 'none' }} />
        </div>
      </div>

      <div className="worker-glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead style={{ background: 'rgba(255, 255, 255, 0.05)', borderBottom: '1px solid var(--border)' }}>
            <tr>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>ID</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Doctor Name</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Specialization</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Status</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Shift</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doc, idx) => (
              <tr key={doc.id} style={{ borderBottom: idx !== doctors.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{doc.id}</td>
                <td style={{ padding: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>{doc.name}</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{doc.spec}</td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ 
                    padding: '4px 10px', 
                    borderRadius: '99px', 
                    fontSize: '0.8rem', 
                    fontWeight: 600,
                    background: doc.status === 'Available' ? 'rgba(16, 185, 129, 0.1)' : (doc.status.includes('Leave') ? 'rgba(239, 68, 68, 0.1)' : 'rgba(245, 158, 11, 0.1)'),
                    color: doc.status === 'Available' ? '#10b981' : (doc.status.includes('Leave') ? '#ef4444' : '#f59e0b')
                  }}>
                    {doc.status}
                  </span>
                </td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{doc.shift}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
