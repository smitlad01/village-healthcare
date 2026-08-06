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
  ChevronRight
} from 'lucide-react';
import '@/styles/patient.css';

export default function PatientDashboard() {
  return (
    <div className="patient-dashboard-container">
      {/* Header Bar */}
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

      <div className="dashboard-grid">
        {/* Risk Prediction Banner */}
        <div className="risk-banner glass-card" style={{ gridColumn: 'span 12', marginBottom: '0.5rem' }}>
          <AlertTriangle size={32} className="text-warning flex-shrink-0" style={{ color: '#fbbf24' }} />
          <div className="risk-content flex-grow">
            <h4>Moderate risk of Hypertension detected</h4>
            <p>Your BP readings have been slightly elevated for the past 3 weeks. Schedule a checkup with Dr. Priya Sharma to discuss this.</p>
            <div className="risk-actions">
              <button className="btn-action-primary">Schedule Checkup</button>
              <button className="btn-action-outline">Dismiss</button>
            </div>
          </div>
        </div>

        {/* AI Health Score Card */}
        <div className="glass-card hero-widget">
          <div className="card-header-row">
            <h2 className="card-title">AI Health Score</h2>
          </div>
          <div className="health-score-container">
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path className="circle-bg"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path className="circle green"
                strokeDasharray="78, 100"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">78</text>
            </svg>
            <div className="score-details">
              <h3>Good Health</h3>
              <p>Your health improved by 5 points this week!</p>
              <div className="trend up">
                <TrendingUp size={16} /> +6.8% vs last month
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Link href="#" className="card-link">
              View Full History →
            </Link>
          </div>
        </div>

        {/* Vitals Snapshot Grid */}
        <div className="glass-card vitals-widget">
          <div className="card-header-row">
            <h2 className="card-title">Latest Vitals</h2>
            <button className="card-link">Log Vitals</button>
          </div>
          <div className="vitals-grid">
            <div className="vital-card">
              <span className="vital-label"><Activity size={15} /> Blood Pressure</span>
              <span className="vital-value" style={{ color: '#fbbf24' }}>128/82</span>
              <span className="vital-trend warning">Slightly High</span>
              <div className="sparkline warning"></div>
            </div>
            
            <div className="vital-card">
              <span className="vital-label"><Droplet size={15} /> Blood Glucose</span>
              <span className="vital-value" style={{ color: '#34d399' }}>104 <span className="text-xs font-normal" style={{ color: 'rgba(255,255,255,0.6)' }}>mg/dL</span></span>
              <span className="vital-trend normal">Normal (Fasting)</span>
              <div className="sparkline"></div>
            </div>

            <div className="vital-card">
              <span className="vital-label"><Wind size={15} /> SpO2</span>
              <span className="vital-value" style={{ color: '#34d399' }}>97%</span>
              <span className="vital-trend normal">Normal</span>
              <div className="sparkline"></div>
            </div>

            <div className="vital-card">
              <span className="vital-label"><Scale size={15} /> Weight</span>
              <span className="vital-value">72 <span className="text-xs font-normal" style={{ color: 'rgba(255,255,255,0.6)' }}>kg</span></span>
              <span className="vital-trend normal">Stable</span>
              <div className="sparkline"></div>
            </div>

            <div className="vital-card">
              <span className="vital-label"><HeartPulse size={15} /> Pulse</span>
              <span className="vital-value" style={{ color: '#34d399' }}>76 <span className="text-xs font-normal" style={{ color: 'rgba(255,255,255,0.6)' }}>bpm</span></span>
              <span className="vital-trend normal">Normal</span>
              <div className="sparkline"></div>
            </div>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="glass-card appointments-widget">
          <div className="card-header-row">
            <h2 className="card-title">Appointments</h2>
            <Link href="#" className="card-link">View All</Link>
          </div>
          <div className="item-list">
            <div className="list-item">
              <div className="item-icon-box" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa' }}>
                <Calendar size={22} />
              </div>
              <div className="item-details">
                <h4>Dr. Priya Sharma</h4>
                <p>Cardiology • Aug 12, 10:30 AM</p>
                <span className="status-badge primary">Physical Visit</span>
              </div>
              <button className="btn-action-outline">Directions</button>
            </div>

            <div className="list-item">
              <div className="item-icon-box" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24' }}>
                <Video size={22} />
              </div>
              <div className="item-details">
                <h4>Dr. Anita Desai</h4>
                <p>General Medicine • Aug 18, 2:00 PM</p>
                <span className="status-badge warning">Video Consult</span>
              </div>
              <button className="btn-action-primary">Join Call</button>
            </div>

            <div className="list-item">
              <div className="item-icon-box" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
                <MapPin size={22} />
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

        {/* Medication Reminder */}
        <div className="glass-card medications-widget">
          <div className="card-header-row">
            <h2 className="card-title">Today's Medication</h2>
            <Link href="#" className="card-link">All Prescriptions</Link>
          </div>
          <div className="item-list">
            <div className="list-item">
              <div className="item-icon-box" style={{ background: 'rgba(255, 255, 255, 0.06)', color: '#34d399' }}>
                <Pill size={22} />
              </div>
              <div className="item-details">
                <h4>Amlodipine 5mg</h4>
                <p>Morning • After breakfast</p>
              </div>
              <div style={{ color: '#34d399' }}>
                <CheckCircle2 size={24} />
              </div>
            </div>

            <div className="list-item" style={{ borderLeft: '4px solid #fbbf24' }}>
              <div className="item-icon-box" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24' }}>
                <Pill size={22} />
              </div>
              <div className="item-details">
                <h4>Metformin 500mg</h4>
                <p>Afternoon • With lunch</p>
              </div>
              <button className="btn-action-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>Take Now</button>
            </div>

            <div className="list-item">
              <div className="item-icon-box" style={{ background: 'rgba(255, 255, 255, 0.06)', color: '#fbbf24' }}>
                <Pill size={22} />
              </div>
              <div className="item-details">
                <h4>Aspirin 75mg</h4>
                <p>Night • Before bed</p>
              </div>
              <div style={{ color: '#fbbf24' }}>
                <Clock size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Streak Tracker */}
        <div className="glass-card streak-widget">
          <div className="streak-header">
            <Flame className="flame-icon" size={26} />
            12-Day Streak!
          </div>
          
          <div className="streak-days">
            <div className="day-dot filled">M</div>
            <div className="day-dot filled">T</div>
            <div className="day-dot filled">W</div>
            <div className="day-dot filled">T</div>
            <div className="day-dot filled">F</div>
            <div className="day-dot filled">S</div>
            <div className="day-dot">S</div>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '1rem', borderRadius: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: 700 }}>Level: Tree 🌳</span>
              <span style={{ color: '#59b6c2', fontSize: '0.775rem' }}>+350 pts this week</span>
            </div>
            <div className="progress-bar-bg mb-2">
              <div className="progress-bar-fill"></div>
            </div>
            <div style={{ fontSize: '0.75rem', textAlign: 'right', color: 'rgba(255,255,255,0.6)' }}>2,450 / 5,000 pts to Forest</div>
          </div>
        </div>

        {/* Quick Actions Row */}
        <div className="glass-card quick-actions-widget">
          <div className="card-header-row">
            <h2 className="card-title">Quick Actions</h2>
          </div>
          <div className="quick-actions-grid">
            <Link href="/patient/vitals/log" className="action-card-item">
              <div className="action-icon-circle"><PlusCircle size={22} /></div>
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Log Vitals</span>
            </Link>
            <Link href="/patient/appointments/book" className="action-card-item">
              <div className="action-icon-circle"><Calendar size={22} /></div>
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Book Appt</span>
            </Link>
            <Link href="/patient/sos" className="action-card-item sos">
              <div className="action-icon-circle"><Phone size={22} /></div>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#f87171' }}>SOS</span>
            </Link>
            <Link href="/patient/reports" className="action-card-item">
              <div className="action-icon-circle"><FileText size={22} /></div>
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Records</span>
            </Link>
            <Link href="/awareness/games" className="action-card-item">
              <div className="action-icon-circle"><Gamepad2 size={22} /></div>
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Games</span>
            </Link>
            <Link href="/rewards" className="action-card-item">
              <div className="action-icon-circle"><Award size={22} /></div>
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Rewards</span>
            </Link>
          </div>
        </div>

        {/* Nearby Health News */}
        <div className="news-widget">
          <h2 className="card-title" style={{ marginBottom: '1rem', paddingLeft: '0.25rem' }}>Health Alerts & News</h2>
          <div className="news-grid">
            <div className="news-card">
              <div className="news-icon alert">
                <Bug size={22} />
              </div>
              <div>
                <h4 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.35rem' }}>Dengue Alert</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', lineHeight: 1.5 }}>12 cases reported in Pune district this week. Ensure no stagnant water around your home and use mosquito nets.</p>
              </div>
            </div>

            <div className="news-card">
              <div className="news-icon info">
                <Eye size={22} />
              </div>
              <div>
                <h4 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.35rem' }}>Free Eye Camp</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', lineHeight: 1.5 }}>Free Eye Camp at PHC Wardha on Aug 15. Comprehensive checkup and free spectacles for eligible citizens. Register now.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
