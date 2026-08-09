'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, FileText, Search } from 'lucide-react';
import '@/styles/globals.css';
import '@/styles/worker.css';

export default function ReportsDetail() {
  const reports = [
    { id: 'RPT-901', patient: 'Karan Mehra', type: 'MRI Scan (Brain)', date: 'Oct 24, 2026', doctor: 'Dr. Vivek Patil', status: 'Completed' },
    { id: 'RPT-902', patient: 'Rekha Jain', type: 'Blood Panel (BPM/Vitals)', date: 'Oct 24, 2026', doctor: 'Dr. Ananya Sharma', status: 'Pending Review' },
    { id: 'RPT-903', patient: 'Suresh Rao', type: 'Diabetes Screening', date: 'Oct 23, 2026', doctor: 'Dr. Ramesh Kumar', status: 'Completed' },
    { id: 'RPT-904', patient: 'Aarav Gupta', type: 'X-Ray (Chest)', date: 'Oct 24, 2026', doctor: 'Dr. Vivek Patil', status: 'Processing' },
    { id: 'RPT-905', patient: 'Neha Sharma', type: 'Sonography', date: 'Oct 22, 2026', doctor: 'Dr. Meera Iyer', status: 'Completed' },
  ];

  return (
    <div className="worker-container" style={{ minHeight: '100vh', padding: '2rem' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem', fontWeight: 600 }}>
        <ChevronLeft size={20} /> Back to Dashboard
      </Link>
      
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
            <FileText color="#3b82f6" /> Medical Diagnostics Log
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Detailed list of all patient diagnostic tests and imaging reports.</p>
        </div>
        <div className="relative">
          <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
          <input type="text" placeholder="Search report or patient..." style={{ padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '99px', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-primary)', outline: 'none' }} />
        </div>
      </div>

      <div className="worker-glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead style={{ background: 'rgba(255, 255, 255, 0.05)', borderBottom: '1px solid var(--border)' }}>
            <tr>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Report ID</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Patient Name</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Diagnostic Type</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Date</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Requesting Doctor</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((rpt, idx) => (
              <tr key={rpt.id} style={{ borderBottom: idx !== reports.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{rpt.id}</td>
                <td style={{ padding: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>{rpt.patient}</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{rpt.type}</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{rpt.date}</td>
                <td style={{ padding: '1rem', color: 'var(--text-primary)' }}>{rpt.doctor}</td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ 
                    padding: '4px 10px', 
                    borderRadius: '99px', 
                    fontSize: '0.8rem', 
                    fontWeight: 600,
                    background: rpt.status === 'Completed' ? 'rgba(16, 185, 129, 0.1)' : (rpt.status === 'Processing' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(59, 130, 246, 0.1)'),
                    color: rpt.status === 'Completed' ? '#10b981' : (rpt.status === 'Processing' ? '#f59e0b' : '#3b82f6')
                  }}>
                    {rpt.status}
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
