'use client';

import React from 'react';
import { 
  Star, MapPin, Clock, Award, Phone, Globe, Edit, ShieldCheck 
} from 'lucide-react';
import '../../../styles/doctor.css';

export default function DoctorProfile() {
  return (
    <div className="doctor-container">
      <div className="panel" style={{ padding: '3rem', marginBottom: '2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '120px', background: 'var(--gradient-primary)', opacity: 0.2 }}></div>
        
        <div style={{ display: 'flex', gap: '3rem', position: 'relative', zIndex: 1 }}>
          <div style={{ 
            width: '150px', height: '150px', borderRadius: '50%', 
            background: 'var(--surface-dark)', border: '4px solid var(--glass-bg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '4rem', fontWeight: 'bold', color: 'var(--accent-cyan)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
          }}>
            PS
          </div>
          
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h1 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0' }}>Dr. Priya Sharma</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)', margin: '0 0 1rem 0' }}>MBBS, MD (Cardiology)</p>
                
                <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ShieldCheck size={18} /> MCI-MH-2015-XXXXX
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Globe size={18} /> Hindi, English, Marathi
                  </span>
                </div>
              </div>
              <button className="action-btn secondary">
                <Edit size={18} /> Edit Profile
              </button>
            </div>
            
            <div className="doctor-badges" style={{ marginTop: '0' }}>
              <span className="badge" style={{ padding: '0.5rem 1rem' }}><Award size={16} /> Top Rated 2024 🏆</span>
              <span className="badge" style={{ padding: '0.5rem 1rem' }}><Award size={16} /> 500+ Patients Served</span>
              <span className="badge" style={{ padding: '0.5rem 1rem' }}><Award size={16} /> Telemedicine Pioneer</span>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="main-content">
          <div className="panel" style={{ marginBottom: '2rem' }}>
            <h2 className="panel-title" style={{ marginBottom: '2rem' }}>Patient Reviews & Ratings</h2>
            
            <div className="rating-overview">
              <div className="rating-big">
                <div className="rating-number">4.8</div>
                <div className="rating-stars">
                  <Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" />
                </div>
                <div style={{ color: 'var(--text-secondary)' }}>Based on 142 reviews</div>
              </div>
              
              <div className="rating-bars">
                {[
                  { stars: 5, count: 89, percent: 63 },
                  { stars: 4, count: 38, percent: 27 },
                  { stars: 3, count: 11, percent: 8 },
                  { stars: 2, count: 3, percent: 2 },
                  { stars: 1, count: 1, percent: 1 },
                ].map(row => (
                  <div key={row.stars} className="rating-bar-row">
                    <div className="rating-bar-label">{row.stars} ⭐</div>
                    <div className="rating-bar-track">
                      <div className="rating-bar-fill" style={{ width: `${row.percent}%` }}></div>
                    </div>
                    <div className="rating-bar-value">{row.percent}%</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <button className="action-btn secondary">View All Reviews</button>
            </div>
          </div>
          
          <div className="panel">
            <h2 className="panel-title">About Me</h2>
            <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
              Dr. Priya Sharma is a senior cardiologist with over 10 years of experience in diagnosing and treating cardiovascular diseases. Dedicated to bringing high-quality rural healthcare through the V-HAIN network, she specializes in hypertension management, heart failure, and preventive cardiology.
            </p>
          </div>
        </div>

        <div className="sidebar">
          <div className="panel" style={{ marginBottom: '2rem' }}>
            <h2 className="panel-title"><Clock size={20} /> Working Hours</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Mon - Sat (Physical)</span>
                <strong>9:00 AM - 5:00 PM</strong>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Mon - Fri (Tele)</span>
                <strong>6:00 PM - 8:00 PM</strong>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Sunday</span>
                <strong style={{ color: 'var(--status-error)' }}>Closed</strong>
              </li>
            </ul>
          </div>

          <div className="panel">
            <h2 className="panel-title"><MapPin size={20} /> Locations</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--accent-cyan)' }}>PHC Wardha (Primary)</strong>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Main Road, Wardha District, Maharashtra 442001
                </p>
              </div>
              <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.25rem' }}>District Hospital (Tue/Thu)</strong>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Civil Lines, Wardha District, Maharashtra 442001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
