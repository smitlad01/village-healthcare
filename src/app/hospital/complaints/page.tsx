'use client';

import React, { useState } from 'react';
import { ChevronLeft, AlertOctagon, Filter, CheckCircle2, Clock, MessageSquareWarning } from 'lucide-react';
import Link from 'next/link';
import '@/styles/globals.css';
import '@/styles/worker.css';

export default function HospitalComplaintsPage() {
  const [filter, setFilter] = useState('All');

  const complaints = [
    { id: 'CMP-1024', patient: 'Ramesh K.', type: 'Doctor', desc: 'The doctor arrived 2 hours late for the appointment.', status: 'Resolved', date: 'Aug 05, 2026' },
    { id: 'CMP-1089', patient: 'Sita M.', type: 'Lacking of materials', desc: 'Pharmacy was out of essential blood pressure medications.', status: 'In Review', date: 'Aug 08, 2026' },
    { id: 'CMP-1090', patient: 'Amit P.', type: 'Cleanliness', desc: 'The waiting area restroom was very dirty.', status: 'New', date: 'Aug 10, 2026' },
    { id: 'CMP-1092', patient: 'Priya S.', type: 'Workers/Nurse', desc: 'The nurse was rude when asked about the queue time.', status: 'New', date: 'Aug 10, 2026' },
  ];

  const filteredComplaints = filter === 'All' ? complaints : complaints.filter(c => c.status === filter);

  return (
    <div className="worker-container" style={{ minHeight: '100vh', padding: '2rem' }}>
      <Link href="/hospital/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem', fontWeight: 600 }}>
        <ChevronLeft size={20} /> Back to Dashboard
      </Link>

      <header className="worker-header mb-8">
        <div>
          <h1 className="worker-title flex items-center gap-2">
            <MessageSquareWarning color="#ef4444" /> Patient Complaints Inbox
          </h1>
          <p className="mt-2 text-secondary" style={{ fontSize: '1.1rem' }}>
            Review and resolve complaints submitted by patients for this facility.
          </p>
        </div>
      </header>

      <div className="worker-glass-panel mb-8" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '4px' }}>Total Complaints</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>124</div>
          </div>
          <div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '4px' }}>Pending Review</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f59e0b' }}>12</div>
          </div>
          <div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '4px' }}>Resolved</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#10b981' }}>112</div>
          </div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Filter size={18} color="var(--text-secondary)" />
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }}
          >
            <option style={{ background: 'var(--surface)' }}>All</option>
            <option style={{ background: 'var(--surface)' }}>New</option>
            <option style={{ background: 'var(--surface)' }}>In Review</option>
            <option style={{ background: 'var(--surface)' }}>Resolved</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredComplaints.map((comp) => (
          <div key={comp.id} className="worker-glass-panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 600 }}>{comp.id}</span>
                  <span style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--text-primary)', padding: '2px 10px', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 600 }}>{comp.type}</span>
                </div>
                {comp.status === 'Resolved' && <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem', fontWeight: 600 }}><CheckCircle2 size={16}/> Resolved</span>}
                {comp.status === 'In Review' && <span style={{ color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem', fontWeight: 600 }}><Clock size={16}/> In Review</span>}
                {comp.status === 'New' && <span style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem', fontWeight: 600 }}><AlertOctagon size={16}/> New</span>}
              </div>
              
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Patient: {comp.patient}</h3>
              <p style={{ color: 'var(--text-secondary)', margin: '0 0 1rem 0', lineHeight: 1.5 }}>"{comp.desc}"</p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Filed on: {comp.date}</div>
                {comp.status !== 'Resolved' && (
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', color: 'var(--text-primary)', borderRadius: '8px', border: '1px solid var(--border)', fontWeight: 600, cursor: 'pointer' }}>Add Note</button>
                    <button style={{ padding: '0.5rem 1rem', background: '#10b981', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Mark Resolved</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        {filteredComplaints.length === 0 && (
          <div className="worker-glass-panel" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
            No complaints found for this filter.
          </div>
        )}
      </div>
    </div>
  );
}
