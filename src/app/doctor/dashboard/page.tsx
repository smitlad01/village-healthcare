'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Users, Calendar, Clock, IndianRupee, Star, AlertCircle, 
  Activity, ArrowRight, Video, Stethoscope, ChevronRight 
} from 'lucide-react';
import '../../../styles/doctor.css';

export default function DoctorDashboard() {
  return (
    <div className="doctor-container">
      <header className="doctor-header">
        <div className="doctor-profile-summary">
          <div className="doctor-avatar">PS</div>
          <div className="doctor-info">
            <h1>Dr. Priya Sharma</h1>
            <div className="doctor-badges">
              <span className="badge specialty"><Activity size={14} /> Cardiology</span>
              <span className="badge rating"><Star size={14} fill="currentColor" /> 4.8</span>
            </div>
          </div>
        </div>
        <div className="doctor-actions">
          <Link href="/doctor/queue" className="action-btn">
            View Full Queue <ArrowRight size={18} />
          </Link>
        </div>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label"><Users size={18} /> Patients Today</div>
          <div className="stat-value">8</div>
          <div className="stat-label">This Week: 34 | This Month: 142</div>
        </div>
        <div className="stat-card">
          <div className="stat-label"><Clock size={18} /> Avg Consultation</div>
          <div className="stat-value">12 min</div>
          <div className="stat-label" style={{ color: 'var(--accent-green)' }}>↓ 2 min from last week</div>
        </div>
        <div className="stat-card revenue">
          <div className="stat-label"><IndianRupee size={18} /> Today's Revenue</div>
          <div className="stat-value">₹3,200</div>
          <div className="stat-label">This Month: ₹48,500</div>
        </div>
        <div className="stat-card">
          <div className="stat-label"><Star size={18} /> My Rating</div>
          <div className="stat-value">4.8 / 5</div>
          <div className="stat-label">142 reviews total</div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="main-content">
          <div className="panel">
            <div className="panel-header">
              <h2 className="panel-title"><Users size={20} /> Today's Queue (8 Waiting)</h2>
              <Link href="/doctor/queue" className="action-btn secondary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.9rem' }}>
                Manage
              </Link>
            </div>
            
            <div className="queue-list">
              <div className="queue-item active">
                <div className="token-circle">41</div>
                <div className="patient-info">
                  <div className="patient-name">Ramesh Kumar</div>
                  <div className="patient-meta">
                    <span>Follow-up (BP)</span>
                    <span>Wait: 0 mins</span>
                  </div>
                </div>
                <div className="status-badge in-consultation">
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'currentColor' }}></div>
                  In Consultation
                </div>
                <Link href="/doctor/patients" className="action-btn" style={{ marginLeft: '1rem' }}>
                  Open Chart
                </Link>
              </div>

              <div className="queue-item">
                <div className="token-circle">42</div>
                <div className="patient-info">
                  <div className="patient-name">Sunita Bai</div>
                  <div className="patient-meta">
                    <span>New consultation</span>
                    <span>Wait: 15 mins</span>
                  </div>
                </div>
                <div className="status-badge waiting">
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'currentColor' }}></div>
                  Waiting
                </div>
                <button className="action-btn secondary" style={{ marginLeft: '1rem' }}>Ready</button>
              </div>

              <div className="queue-item">
                <div className="token-circle">43</div>
                <div className="patient-info">
                  <div className="patient-name">Govind Rao</div>
                  <div className="patient-meta">
                    <span>Follow-up (Arthritis)</span>
                    <span>Wait: 30 mins</span>
                  </div>
                </div>
                <div className="status-badge waiting">
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'currentColor' }}></div>
                  Waiting
                </div>
              </div>

              <div className="queue-item">
                <div className="token-circle">44</div>
                <div className="patient-info">
                  <div className="patient-name">Priya Kumari</div>
                  <div className="patient-meta">
                    <span>Thyroid report review</span>
                    <span>Wait: 45 mins</span>
                  </div>
                </div>
                <div className="status-badge waiting">
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'currentColor' }}></div>
                  Waiting
                </div>
              </div>

              <div className="queue-item">
                <div className="token-circle" style={{ background: 'rgba(0, 123, 255, 0.1)', color: '#007BFF', borderColor: '#007BFF' }}><Video size={20} /></div>
                <div className="patient-info">
                  <div className="patient-name">Lakshmi Devi</div>
                  <div className="patient-meta">
                    <span>Telemedicine</span>
                    <span>Scheduled 2:30 PM</span>
                  </div>
                </div>
                <div className="status-badge scheduled">
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'currentColor' }}></div>
                  Scheduled
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar">
          <div className="panel" style={{ marginBottom: '2rem' }}>
            <div className="panel-header">
              <h2 className="panel-title"><AlertCircle size={20} /> AI Alerts</h2>
            </div>
            <div className="alerts-list">
              <div className="alert-item">
                <AlertCircle size={24} style={{ color: 'var(--status-error)' }} />
                <div>
                  <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Adherence Warning</strong>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Patient Ratan Lal has not completed TB medication for 10 days.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h2 className="panel-title"><Activity size={20} /> Pending Actions</h2>
            </div>
            <div className="actions-list">
              <div className="action-item">
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <Stethoscope size={18} style={{ color: 'var(--accent-cyan)' }} />
                  <span>2 Prescription Refills</span>
                </div>
                <ChevronRight size={18} />
              </div>
              <div className="action-item">
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <Users size={18} style={{ color: 'var(--accent-purple)' }} />
                  <span>3 Referrals Received</span>
                </div>
                <ChevronRight size={18} />
              </div>
              <div className="action-item" style={{ borderLeft: '3px solid var(--status-error)' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <AlertCircle size={18} style={{ color: 'var(--status-error)' }} />
                  <span>1 Critical Alert</span>
                </div>
                <ChevronRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
