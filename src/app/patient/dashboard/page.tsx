'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Bell, 
  TrendingUp, 
  Activity, 
  Droplet, 
  Wind, 
  Scale, 
  HeartPulse,
  AlertTriangle,
  Calendar,
  Video,
  MapPin,
  Pill,
  CheckCircle2,
  Clock,
  Flame,
  PlusCircle,
  FileText,
  Gamepad2,
  Award,
  Phone,
  Bug,
  Eye,
  ChevronRight,
  Stethoscope
} from 'lucide-react';
import '@/styles/patient.css';

export default function PatientDashboard() {
  return (
    <div className="patient-dashboard-container">

      {/* ── Header ── */}
      <header className="dashboard-header">
        <h1 className="user-welcome">Welcome, Ramesh 👋</h1>
        <div className="header-actions">
          <div className="notification-bell">
            <Bell size={22} />
            <div className="notification-badge">3</div>
          </div>
          <Link href="/patient/profile">
            <div className="profile-avatar-sm">RK</div>
          </Link>
        </div>
      </header>

      {/* ── Risk Banner (full width) ── */}
      <div className="risk-banner glass-card" style={{ marginBottom: '1.75rem' }}>
        <AlertTriangle size={32} style={{ color: '#fbbf24', flexShrink: 0 }} />
        <div className="risk-content" style={{ flexGrow: 1 }}>
          <h4>Moderate risk of Hypertension detected</h4>
          <p>Your BP readings have been slightly elevated for the past 3 weeks. Schedule a checkup with Dr. Priya Sharma to discuss this.</p>
          <div className="risk-actions">
            <button className="btn-action-primary">Schedule Checkup</button>
            <button className="btn-action-outline">Dismiss</button>
          </div>
        </div>
      </div>

      {/* ── Row 1: AI Score (left) + Vitals (right) ── */}
      <div className="dash-row-two" style={{ marginBottom: '1.75rem' }}>

        {/* AI Health Score */}
        <div className="glass-card ai-score-card">
          <div className="card-header-row">
            <h2 className="card-title">AI Health Score</h2>
            <Link href="/patient/history" className="card-link">Full History →</Link>
          </div>
          <div className="ai-score-body">
            <div className="ai-ring-wrap">
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path className="circle-bg"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle green"
                  strokeDasharray="78, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">78</text>
              </svg>
            </div>
            <div className="ai-score-info">
              <h3>Good Health</h3>
              <p>Your health improved by 5 points this week!</p>
              <div className="trend up">
                <TrendingUp size={14} /> +6.8% vs last month
              </div>
            </div>
          </div>
        </div>

        {/* Latest Vitals */}
        <div className="glass-card vitals-card">
          <div className="card-header-row">
            <h2 className="card-title">Latest Vitals</h2>
            <button className="card-link">Log Vitals</button>
          </div>
          <div className="vitals-grid">
            <div className="vital-card">
              <span className="vital-label"><Activity size={14} /> Blood Pressure</span>
              <span className="vital-value" style={{ color: '#fbbf24' }}>128/82</span>
              <span className="vital-trend warning">Slightly High</span>
              <div className="sparkline warning"></div>
            </div>
            <div className="vital-card">
              <span className="vital-label"><Droplet size={14} /> Blood Glucose</span>
              <span className="vital-value" style={{ color: '#34d399' }}>104 <span className="unit">mg/dL</span></span>
              <span className="vital-trend normal">Normal (Fasting)</span>
              <div className="sparkline"></div>
            </div>
            <div className="vital-card">
              <span className="vital-label"><Wind size={14} /> SpO2</span>
              <span className="vital-value" style={{ color: '#34d399' }}>97%</span>
              <span className="vital-trend normal">Normal</span>
              <div className="sparkline"></div>
            </div>
            <div className="vital-card">
              <span className="vital-label"><Scale size={14} /> Weight</span>
              <span className="vital-value">72 <span className="unit">kg</span></span>
              <span className="vital-trend normal">Stable</span>
              <div className="sparkline"></div>
            </div>
            <div className="vital-card">
              <span className="vital-label"><HeartPulse size={14} /> Pulse</span>
              <span className="vital-value" style={{ color: '#34d399' }}>76 <span className="unit">bpm</span></span>
              <span className="vital-trend normal">Normal</span>
              <div className="sparkline"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Row 2: Appointments (left) + Medications (right) ── */}
      <div className="dash-row-two" style={{ marginBottom: '1.75rem' }}>

        {/* Appointments */}
        <div className="glass-card">
          <div className="card-header-row">
            <h2 className="card-title">Upcoming Appointments</h2>
            <Link href="/patient/appointments" className="card-link">View All →</Link>
          </div>
          <div className="item-list">
            <div className="list-item">
              <div className="item-icon-box" style={{ background: 'rgba(59,130,246,0.15)', color: '#60a5fa' }}>
                <Calendar size={20} />
              </div>
              <div className="item-details">
                <h4>Dr. Priya Sharma</h4>
                <p>Cardiology • Aug 12, 10:30 AM</p>
                <span className="status-badge primary">Physical Visit</span>
              </div>
              <button className="btn-action-outline">Directions</button>
            </div>

            <div className="list-item">
              <div className="item-icon-box" style={{ background: 'rgba(245,158,11,0.15)', color: '#fbbf24' }}>
                <Video size={20} />
              </div>
              <div className="item-details">
                <h4>Dr. Anita Desai</h4>
                <p>General Medicine • Aug 18, 2:00 PM</p>
                <span className="status-badge warning">Video Consult</span>
              </div>
              <button className="btn-action-primary">Join Call</button>
            </div>

            <div className="list-item">
              <div className="item-icon-box" style={{ background: 'rgba(16,185,129,0.15)', color: '#34d399' }}>
                <MapPin size={20} />
              </div>
              <div className="item-details">
                <h4>Meera Devi (ASHA)</h4>
                <p>Routine Checkup • Aug 20</p>
                <span className="status-badge primary">Home Visit</span>
              </div>
              <button className="btn-action-outline">Message</button>
            </div>
          </div>
        </div>

        {/* Medications */}
        <div className="glass-card">
          <div className="card-header-row">
            <h2 className="card-title">Today's Medication</h2>
            <Link href="/patient/prescriptions" className="card-link">All Prescriptions →</Link>
          </div>
          <div className="item-list">
            <div className="list-item">
              <div className="item-icon-box" style={{ background: 'rgba(16,185,129,0.12)', color: '#34d399' }}>
                <Pill size={20} />
              </div>
              <div className="item-details">
                <h4>Amlodipine 5mg</h4>
                <p>Morning • After breakfast</p>
              </div>
              <CheckCircle2 size={24} style={{ color: '#34d399', flexShrink: 0 }} />
            </div>

            <div className="list-item" style={{ borderLeft: '3px solid #fbbf24' }}>
              <div className="item-icon-box" style={{ background: 'rgba(245,158,11,0.15)', color: '#fbbf24' }}>
                <Pill size={20} />
              </div>
              <div className="item-details">
                <h4>Metformin 500mg</h4>
                <p>Afternoon • With lunch</p>
              </div>
              <button className="btn-action-primary" style={{ padding: '0.4rem 0.9rem', fontSize: '0.8rem' }}>Take Now</button>
            </div>

            <div className="list-item">
              <div className="item-icon-box" style={{ background: 'rgba(255,255,255,0.06)', color: '#fbbf24' }}>
                <Pill size={20} />
              </div>
              <div className="item-details">
                <h4>Aspirin 75mg</h4>
                <p>Night • Before bed</p>
              </div>
              <Clock size={22} style={{ color: '#fbbf24', flexShrink: 0 }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Row 3: Streak + Quick Actions + News ── */}
      <div className="dash-row-three" style={{ marginBottom: '1.75rem' }}>

        {/* Streak Tracker */}
        <div className="glass-card">
          <div className="streak-header">
            <Flame size={22} className="flame-icon" /> 12-Day Streak!
          </div>
          <div className="streak-days">
            {['M','T','W','T','F','S','S'].map((d,i) => (
              <div key={i} className={`day-dot ${i < 6 ? 'filled' : ''}`}>{d}</div>
            ))}
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1rem', borderRadius: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: 700 }}>Level: Tree 🌳</span>
              <span style={{ color: '#59b6c2', fontSize: '0.775rem' }}>+350 pts this week</span>
            </div>
            <div className="progress-bar-bg" style={{ marginBottom: '0.5rem' }}>
              <div className="progress-bar-fill"></div>
            </div>
            <div style={{ fontSize: '0.75rem', textAlign: 'right', color: 'var(--text-secondary)' }}>2,450 / 5,000 pts to Forest</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="glass-card">
          <div className="card-header-row">
            <h2 className="card-title">Quick Actions</h2>
          </div>
          <div className="quick-actions-grid">
            <Link href="/patient/vitals/log" className="action-card-item">
              <div className="action-icon-circle"><PlusCircle size={20} /></div>
              <span>Log Vitals</span>
            </Link>
            <Link href="/patient/appointments/book" className="action-card-item">
              <div className="action-icon-circle"><Calendar size={20} /></div>
              <span>Book Appt</span>
            </Link>
            <Link href="/patient/sos" className="action-card-item sos">
              <div className="action-icon-circle"><Phone size={20} /></div>
              <span style={{ color: '#f87171' }}>SOS</span>
            </Link>
            <Link href="/patient/reports" className="action-card-item">
              <div className="action-icon-circle"><FileText size={20} /></div>
              <span>Records</span>
            </Link>
            <Link href="/patient/complaints" className="action-card-item">
              <div className="action-icon-circle" style={{ color: '#ef4444' }}><AlertTriangle size={20} /></div>
              <span>Complaints</span>
            </Link>
            <Link href="/rewards" className="action-card-item">
              <div className="action-icon-circle"><Award size={20} /></div>
              <span>Rewards</span>
            </Link>
          </div>
        </div>

        {/* Health Alerts */}
        <div className="glass-card">
          <div className="card-header-row">
            <h2 className="card-title">Health Alerts</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="news-card">
              <div className="news-icon alert"><Bug size={20} /></div>
              <div>
                <h4 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.3rem' }}>Dengue Alert</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>12 cases in Nashik this week. Avoid stagnant water, use mosquito nets.</p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-icon info"><Eye size={20} /></div>
              <div>
                <h4 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.3rem' }}>Free Eye Camp</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>Free Eye Camp at PHC Nashik on Aug 15. Free spectacles for eligible citizens.</p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-icon" style={{ background: 'rgba(126,191,26,0.15)', color: '#a3e635' }}><Stethoscope size={20} /></div>
              <div>
                <h4 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.3rem' }}>Health Camp Aug 22</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>Community health camp with free diabetes & BP screening in Nashik district.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
