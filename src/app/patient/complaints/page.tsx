'use client';

import React, { useState } from 'react';
import { ChevronLeft, AlertOctagon, FileText, CheckCircle2, Clock } from 'lucide-react';
import Link from 'next/link';
import '@/styles/globals.css';
import '@/styles/worker.css';

export default function PatientComplaintsPage() {
  const [complaintType, setComplaintType] = useState('Cleanliness');
  const [description, setDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const pastComplaints = [
    { id: 'CMP-1024', type: 'Doctor', desc: 'The doctor arrived 2 hours late for the appointment.', status: 'Resolved', date: 'Aug 05, 2026' },
    { id: 'CMP-1089', type: 'Lacking of materials', desc: 'Pharmacy was out of essential blood pressure medications.', status: 'In Review', date: 'Aug 08, 2026' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim() === '') return;
    // In a real app, send to backend here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setDescription('');
  };

  return (
    <div className="worker-container" style={{ minHeight: '100vh', padding: '2rem' }}>
      <Link href="/patient/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem', fontWeight: 600 }}>
        <ChevronLeft size={20} /> Back to Dashboard
      </Link>

      <header className="worker-header mb-8">
        <div>
          <h1 className="worker-title flex items-center gap-2">
            <AlertOctagon color="#ef4444" /> Complaint Portal
          </h1>
          <p className="mt-2 text-secondary" style={{ fontSize: '1.1rem' }}>
            Report issues regarding hospital services, staff, or facilities.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="worker-glass-panel">
          <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>File a New Complaint</h2>
          
          {isSubmitted ? (
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', padding: '2rem', borderRadius: '12px', textAlign: 'center', color: '#10b981' }}>
              <CheckCircle2 size={48} style={{ margin: '0 auto 1rem auto' }} />
              <h3 className="text-xl font-bold mb-2">Complaint Submitted</h3>
              <p>Your issue has been forwarded to the administration. We will review it shortly.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                style={{ marginTop: '1.5rem', padding: '0.5rem 1.5rem', background: '#10b981', color: '#fff', borderRadius: '99px', border: 'none', fontWeight: 600, cursor: 'pointer' }}
              >
                File Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Complaint Category</label>
                <select 
                  value={complaintType}
                  onChange={(e) => setComplaintType(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '12px', color: 'var(--text-primary)', outline: 'none' }}
                >
                  <option style={{ background: 'var(--surface)' }}>Cleanliness</option>
                  <option style={{ background: 'var(--surface)' }}>Doctor</option>
                  <option style={{ background: 'var(--surface)' }}>Lacking of materials</option>
                  <option style={{ background: 'var(--surface)' }}>Workers/Nurse</option>
                  <option style={{ background: 'var(--surface)' }}>Management</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Description</label>
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Please describe the issue in detail..."
                  rows={6}
                  required
                  style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '12px', color: 'var(--text-primary)', outline: 'none', resize: 'vertical' }}
                />
              </div>

              <button 
                type="submit"
                style={{ padding: '1rem', background: '#ef4444', color: '#fff', borderRadius: '99px', border: 'none', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer', transition: 'opacity 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                Submit Complaint
              </button>
            </form>
          )}
        </div>

        {/* History Section */}
        <div className="worker-glass-panel">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <FileText color="#3b82f6" size={24} />
            <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)', margin: 0 }}>My Recent Complaints</h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {pastComplaints.map((comp) => (
              <div key={comp.id} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>{comp.id}</span>
                    <span style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--text-primary)', padding: '2px 8px', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600 }}>{comp.type}</span>
                  </div>
                  {comp.status === 'Resolved' ? (
                    <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem', fontWeight: 600 }}><CheckCircle2 size={16}/> Resolved</span>
                  ) : (
                    <span style={{ color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem', fontWeight: 600 }}><Clock size={16}/> In Review</span>
                  )}
                </div>
                <p style={{ color: 'var(--text-secondary)', margin: '0 0 1rem 0', lineHeight: 1.5 }}>"{comp.desc}"</p>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textAlign: 'right' }}>Filed on: {comp.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
