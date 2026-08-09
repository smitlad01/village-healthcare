'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Activity, Search } from 'lucide-react';
import '@/styles/globals.css';
import '@/styles/worker.css';

export default function AppointmentsDetail() {
  const appointments = [
    { id: 'APT-1001', patient: 'Rajesh Sharma', doctor: 'Dr. Vivek Patil', type: 'Orthopedic Consult', time: '10:30 AM', status: 'Checked In' },
    { id: 'APT-1002', patient: 'Meena Gupta', doctor: 'Dr. Ananya Sharma', type: 'ECG Review', time: '11:00 AM', status: 'Waiting' },
    { id: 'APT-1003', patient: 'Suresh Rao', doctor: 'Dr. Sunita Devi', type: 'Pediatric Vaccine', time: '11:15 AM', status: 'Scheduled' },
    { id: 'APT-1004', patient: 'Kavita Singh', doctor: 'Dr. Meera Iyer', type: 'Prenatal Checkup', time: '01:00 PM', status: 'Scheduled' },
    { id: 'APT-1005', patient: 'Amit Patel', doctor: 'Dr. Ananya Sharma', type: 'Follow-up', time: '09:00 AM', status: 'Completed' },
  ];

  return (
    <div className="worker-container" style={{ minHeight: '100vh', padding: '2rem' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem', fontWeight: 600 }}>
        <ChevronLeft size={20} /> Back to Dashboard
      </Link>
      
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
            <Activity color="#8b5cf6" /> Today's Appointments
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Detailed log of booked appointments and assigned doctors.</p>
        </div>
        <div className="relative">
          <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
          <input type="text" placeholder="Search patient or doctor..." style={{ padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '99px', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-primary)', outline: 'none' }} />
        </div>
      </div>

      <div className="worker-glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead style={{ background: 'rgba(255, 255, 255, 0.05)', borderBottom: '1px solid var(--border)' }}>
            <tr>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>ID</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Patient Name</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Assigned Doctor</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Consultation Type</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Time</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((apt, idx) => (
              <tr key={apt.id} style={{ borderBottom: idx !== appointments.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{apt.id}</td>
                <td style={{ padding: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>{apt.patient}</td>
                <td style={{ padding: '1rem', color: 'var(--text-primary)' }}>{apt.doctor}</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{apt.type}</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{apt.time}</td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ 
                    padding: '4px 10px', 
                    borderRadius: '99px', 
                    fontSize: '0.8rem', 
                    fontWeight: 600,
                    background: apt.status === 'Completed' ? 'rgba(16, 185, 129, 0.1)' : (apt.status === 'Waiting' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(59, 130, 246, 0.1)'),
                    color: apt.status === 'Completed' ? '#10b981' : (apt.status === 'Waiting' ? '#ef4444' : '#3b82f6')
                  }}>
                    {apt.status}
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
