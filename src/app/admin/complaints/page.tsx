'use client';

import React, { useState } from 'react';
import { ChevronLeft, BarChart3, AlertOctagon, MessageSquareWarning, Filter, Inbox } from 'lucide-react';
import Link from 'next/link';
import '@/styles/globals.css';
import '@/styles/worker.css';

export default function AdminComplaintsPage() {
  const [activeTab, setActiveTab] = useState('Analysis');

  const complaintsData = [
    { type: 'Doctor', count: 45, percentage: 35, color: '#3b82f6' },
    { type: 'Workers/Nurse', count: 32, percentage: 25, color: '#10b981' },
    { type: 'Lacking of materials', count: 28, percentage: 22, color: '#f59e0b' },
    { type: 'Cleanliness', count: 15, percentage: 12, color: '#ec4899' },
    { type: 'Management', count: 8, percentage: 6, color: '#8b5cf6' },
  ];

  const inbox = [
    { id: 'CMP-1024', patient: 'Ramesh K.', hospital: 'Central Zone Hospital', target: 'Dr. Priya Sharma', category: 'Doctor', desc: 'The doctor arrived 2 hours late for the appointment.', status: 'Resolved', date: 'Aug 05, 2026' },
    { id: 'CMP-1089', patient: 'Sita M.', hospital: 'North Zone Clinic', target: 'Pharmacy Dept', category: 'Lacking of materials', desc: 'Pharmacy was out of essential blood pressure medications.', status: 'In Review', date: 'Aug 08, 2026' },
    { id: 'CMP-1090', patient: 'Amit P.', hospital: 'Central Zone Hospital', target: 'Facilities Team', category: 'Cleanliness', desc: 'The waiting area restroom was very dirty.', status: 'New', date: 'Aug 10, 2026' },
    { id: 'CMP-1092', patient: 'Priya S.', hospital: 'East Zone Center', target: 'Nurse Anita', category: 'Workers/Nurse', desc: 'The nurse was rude when asked about the queue time.', status: 'New', date: 'Aug 10, 2026' },
    { id: 'CMP-1095', patient: 'Rajesh V.', hospital: 'West Zone PHC', target: 'Dr. Suresh Nair', category: 'Doctor', desc: 'Did not spend enough time explaining the prescription.', status: 'New', date: 'Aug 11, 2026' },
  ];

  return (
    <div className="worker-container" style={{ minHeight: '100vh', padding: '2rem' }}>
      <Link href="/admin/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem', fontWeight: 600 }}>
        <ChevronLeft size={20} /> Back to Admin Dashboard
      </Link>

      <header className="worker-header mb-8">
        <div>
          <h1 className="worker-title flex items-center gap-2">
            <MessageSquareWarning color="#f43f5e" /> Global Complaints Command Center
          </h1>
          <p className="mt-2 text-secondary" style={{ fontSize: '1.1rem' }}>
            Analyze systemic issues and review detailed patient complaints across all zones.
          </p>
        </div>
      </header>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        {['Analysis', 'Global Inbox'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '99px',
              fontWeight: 600,
              background: activeTab === tab ? '#f43f5e' : 'var(--surface)',
              color: activeTab === tab ? '#fff' : 'var(--text-secondary)',
              border: `1px solid ${activeTab === tab ? '#f43f5e' : 'var(--border)'}`,
              transition: 'all 0.2s',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            {tab === 'Analysis' ? <BarChart3 size={18}/> : <Inbox size={18}/>} {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Analysis' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="worker-glass-panel">
            <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Complaints by Category (YTD)</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {complaintsData.map((data, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>{data.type}</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{data.count} ({data.percentage}%)</span>
                  </div>
                  <div style={{ height: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '99px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${data.percentage}%`, background: data.color, borderRadius: '99px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="worker-glass-panel">
            <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Resolution Metrics</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#10b981' }}>84%</div>
                <div style={{ color: '#10b981', fontWeight: 600, marginTop: '0.5rem' }}>Resolution Rate</div>
              </div>
              <div style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f59e0b' }}>3.2</div>
                <div style={{ color: '#f59e0b', fontWeight: 600, marginTop: '0.5rem' }}>Days Avg Resolution Time</div>
              </div>
              <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ef4444' }}>24</div>
                <div style={{ color: '#ef4444', fontWeight: 600, marginTop: '0.5rem' }}>Unresolved &gt; 7 Days</div>
              </div>
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#3b82f6' }}>128</div>
                <div style={{ color: '#3b82f6', fontWeight: 600, marginTop: '0.5rem' }}>Total Complaints This Month</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Global Inbox' && (
        <div className="worker-glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)', margin: 0 }}>Global Complaints Inbox</h2>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', color: 'var(--text-primary)', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '6px' }}><Filter size={16}/> Filter by Zone</button>
            </div>
          </div>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
              <thead style={{ background: 'rgba(255, 255, 255, 0.05)', borderBottom: '1px solid var(--border)' }}>
                <tr>
                  <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: 600 }}>ID / Date</th>
                  <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Complainant</th>
                  <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Target / Hospital</th>
                  <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Category</th>
                  <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Description</th>
                  <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {inbox.map((comp, idx) => (
                  <tr key={comp.id} style={{ borderBottom: idx !== inbox.length - 1 ? '1px solid var(--border)' : 'none', background: comp.status === 'New' ? 'rgba(239, 68, 68, 0.05)' : 'transparent' }}>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{comp.id}</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{comp.date}</div>
                    </td>
                    <td style={{ padding: '1rem 1.5rem', color: 'var(--text-primary)' }}>
                      <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '2px 8px', borderRadius: '4px', fontWeight: 600, fontSize: '0.85rem' }}>{comp.patient}</span>
                    </td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <div style={{ color: '#f43f5e', fontWeight: 600 }}>{comp.target}</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{comp.hospital}</div>
                    </td>
                    <td style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>
                      <span style={{ border: '1px solid var(--border)', padding: '2px 8px', borderRadius: '99px', fontSize: '0.85rem' }}>{comp.category}</span>
                    </td>
                    <td style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', maxWidth: '250px' }}>
                      <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{comp.desc}</div>
                    </td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      {comp.status === 'Resolved' && <span style={{ color: '#10b981', fontWeight: 600, fontSize: '0.9rem' }}>Resolved</span>}
                      {comp.status === 'In Review' && <span style={{ color: '#f59e0b', fontWeight: 600, fontSize: '0.9rem' }}>In Review</span>}
                      {comp.status === 'New' && <span style={{ color: '#ef4444', fontWeight: 600, fontSize: '0.9rem' }}>New</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
