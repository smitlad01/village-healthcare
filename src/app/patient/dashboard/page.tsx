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
  Info,
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
        <h1 className="user-welcome">Welcome, Ramesh</h1>
        <div className="header-actions">
          <div className="notification-bell">
            <Bell size={24} />
            <div className="notification-badge">3</div>
          </div>
          <Link href="/patient/profile">
            <div className="profile-avatar-sm">RK</div>
          </Link>
        </div>
      </header>

      <div className="dashboard-grid">
        {/* Risk Prediction Banner */}
        <div className="risk-banner glass-card" style={{ gridColumn: 'span 12', marginBottom: '1rem' }}>
          <AlertTriangle size={32} className="text-warning mt-1 flex-shrink-0" />
          <div className="risk-content flex-grow">
            <h4>Moderate risk of Hypertension detected</h4>
            <p>Your BP readings have been slightly elevated for the past 3 weeks. Schedule a checkup with Dr. Priya Sharma to discuss this.</p>
            <div className="risk-actions">
              <button className="btn btn-primary btn-sm">Schedule Checkup</button>
              <button className="btn btn-outline btn-sm">Dismiss</button>
            </div>
          </div>
        </div>

        {/* AI Health Score Card (HERO WIDGET) */}
        <div className="glass-card hero-widget">
          <h2 className="text-xl font-bold mb-4">AI Health Score</h2>
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
          <div className="mt-6 text-center">
            <Link href="#" className="text-primary hover:underline text-sm font-medium">
              View Full History →
            </Link>
          </div>
        </div>

        {/* Vitals Snapshot Grid */}
        <div className="glass-card vitals-widget">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Latest Vitals</h2>
            <button className="text-primary text-sm font-medium hover:underline">Log Vitals</button>
          </div>
          <div className="vitals-grid">
            <div className="vital-card">
              <span className="vital-label"><Activity size={16} /> Blood Pressure</span>
              <span className="vital-value text-warning">128/82</span>
              <span className="vital-trend warning">Slightly High</span>
              <div className="sparkline warning"></div>
            </div>
            
            <div className="vital-card">
              <span className="vital-label"><Droplet size={16} /> Blood Glucose</span>
              <span className="vital-value text-success">104 <span className="text-sm font-normal text-secondary">mg/dL</span></span>
              <span className="vital-trend normal">Normal (Fasting)</span>
              <div className="sparkline"></div>
            </div>

            <div className="vital-card">
              <span className="vital-label"><Wind size={16} /> SpO2</span>
              <span className="vital-value text-success">97%</span>
              <span className="vital-trend normal">Normal</span>
              <div className="sparkline"></div>
            </div>

            <div className="vital-card">
              <span className="vital-label"><Scale size={16} /> Weight</span>
              <span className="vital-value">72 <span className="text-sm font-normal text-secondary">kg</span></span>
              <span className="vital-trend normal">Stable</span>
              <div className="sparkline"></div>
            </div>

            <div className="vital-card">
              <span className="vital-label"><HeartPulse size={16} /> Pulse</span>
              <span className="vital-value text-success">76 <span className="text-sm font-normal text-secondary">bpm</span></span>
              <span className="vital-trend normal">Normal</span>
              <div className="sparkline"></div>
            </div>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="glass-card appointments-widget">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Appointments</h2>
            <Link href="#" className="text-primary hover:underline text-sm">View All</Link>
          </div>
          <div className="item-list">
            <div className="list-item">
              <div className="item-icon bg-primary/10 text-primary p-3 rounded-xl">
                <Calendar size={24} />
              </div>
              <div className="item-details flex-grow ml-4">
                <h4>Dr. Priya Sharma</h4>
                <p>Cardiology • Aug 12, 10:30 AM</p>
                <span className="badge primary mt-1">Physical Visit</span>
              </div>
              <button className="btn btn-outline btn-sm">Directions</button>
            </div>

            <div className="list-item">
              <div className="item-icon bg-primary/10 text-primary p-3 rounded-xl">
                <Video size={24} />
              </div>
              <div className="item-details flex-grow ml-4">
                <h4>Dr. Anita Desai</h4>
                <p>General Medicine • Aug 18, 2:00 PM</p>
                <span className="badge warning mt-1">Video Consult</span>
              </div>
              <button className="btn btn-primary btn-sm">Join Call</button>
            </div>

            <div className="list-item">
              <div className="item-icon bg-success/10 text-success p-3 rounded-xl">
                <MapPin size={24} />
              </div>
              <div className="item-details flex-grow ml-4">
                <h4>Meera Devi (ASHA)</h4>
                <p>Routine Checkup • Aug 20</p>
                <span className="badge primary mt-1">Home Visit</span>
              </div>
              <button className="btn btn-outline btn-sm">Message</button>
            </div>
          </div>
        </div>

        {/* Medication Reminder */}
        <div className="glass-card medications-widget">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Today's Medication</h2>
            <Link href="#" className="text-primary hover:underline text-sm">All Prescriptions</Link>
          </div>
          <div className="item-list">
            <div className="list-item">
              <div className="item-icon text-secondary p-2">
                <Pill size={24} />
              </div>
              <div className="item-details flex-grow ml-3">
                <h4>Amlodipine 5mg</h4>
                <p>Morning • After breakfast</p>
              </div>
              <div className="med-status-icon text-success">
                <CheckCircle2 size={28} />
              </div>
            </div>

            <div className="list-item" style={{ borderLeft: '4px solid var(--warning-color)' }}>
              <div className="item-icon text-secondary p-2">
                <Pill size={24} />
              </div>
              <div className="item-details flex-grow ml-3">
                <h4>Metformin 500mg</h4>
                <p>Afternoon • With lunch</p>
              </div>
              <button className="btn btn-primary btn-sm px-3 py-1 text-xs">Take Now</button>
            </div>

            <div className="list-item">
              <div className="item-icon text-secondary p-2">
                <Pill size={24} />
              </div>
              <div className="item-details flex-grow ml-3">
                <h4>Aspirin 75mg</h4>
                <p>Night • Before bed</p>
              </div>
              <div className="med-status-icon text-warning">
                <Clock size={28} />
              </div>
            </div>
          </div>
        </div>

        {/* Streak Tracker */}
        <div className="glass-card streak-widget">
          <div className="streak-header">
            <Flame className="flame-icon" size={28} />
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

          <div className="level-progress-container">
            <div className="level-info">
              <span className="font-bold flex items-center gap-1">Level: Tree 🌳</span>
              <span className="text-secondary text-xs">+350 pts this week</span>
            </div>
            <div className="progress-bar-bg mb-2">
              <div className="progress-bar-fill"></div>
            </div>
            <div className="text-xs text-right text-secondary">2,450 / 5,000 pts to Forest</div>
          </div>
        </div>

        {/* Quick Actions Row */}
        <div className="glass-card quick-actions-widget">
          <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
          <div className="quick-actions-grid">
            <div className="action-btn">
              <div className="action-icon"><PlusCircle size={24} /></div>
              <span className="action-label">Log Vitals</span>
            </div>
            <div className="action-btn">
              <div className="action-icon"><Calendar size={24} /></div>
              <span className="action-label">Book Appt</span>
            </div>
            <div className="action-btn border-red-500/30 hover:border-red-500/50">
              <div className="action-icon bg-red-500/10 text-red-500"><Phone size={24} /></div>
              <span className="action-label text-red-500 font-bold">SOS</span>
            </div>
            <div className="action-btn">
              <div className="action-icon"><FileText size={24} /></div>
              <span className="action-label">Records</span>
            </div>
            <div className="action-btn">
              <div className="action-icon"><Gamepad2 size={24} /></div>
              <span className="action-label">Games</span>
            </div>
            <div className="action-btn">
              <div className="action-icon"><Award size={24} /></div>
              <span className="action-label">Rewards</span>
            </div>
          </div>
        </div>

        {/* Nearby Health News */}
        <div className="news-widget">
          <h2 className="text-xl font-bold mb-4 px-2">Health Alerts & News</h2>
          <div className="news-grid">
            <div className="news-card">
              <div className="news-icon alert">
                <Bug size={24} />
              </div>
              <div className="news-content">
                <h4 className="font-bold text-lg mb-1">Dengue Alert</h4>
                <p>12 cases reported in Pune district this week. Ensure no stagnant water around your home and use mosquito nets.</p>
              </div>
            </div>

            <div className="news-card">
              <div className="news-icon info">
                <Eye size={24} />
              </div>
              <div className="news-content">
                <h4 className="font-bold text-lg mb-1">Free Eye Camp</h4>
                <p>Free Eye Camp at PHC Wardha on Aug 15. Comprehensive checkup and free spectacles for eligible citizens. Register now.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
