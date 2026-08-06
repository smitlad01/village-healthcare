'use client';

import React, { useState } from 'react';
import { Video, Clock, Shield, Play, FileText, CheckCircle } from 'lucide-react';
import '../../../styles/doctor.css';

export default function TelemedicineHub() {
  const [recordingConsent, setRecordingConsent] = useState(true);

  return (
    <div className="doctor-container">
      <div className="panel-header" style={{ marginBottom: '2rem' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', color: '#007BFF' }}>
            <Video size={32} /> Telemedicine Hub
          </h1>
          <p style={{ color: 'var(--text-secondary)', margin: '0.5rem 0 0 0' }}>Manage virtual consultations and remote patient monitoring</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              checked={recordingConsent} 
              onChange={() => setRecordingConsent(!recordingConsent)} 
              style={{ width: '18px', height: '18px' }}
            />
            <span style={{ fontSize: '0.9rem' }}>Enable Session Recording</span>
          </label>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="main-content">
          <div className="panel" style={{ marginBottom: '2rem' }}>
            <h2 className="panel-title"><Clock size={20} /> Upcoming Tele-consultations</h2>
            
            <div className="queue-list" style={{ marginTop: '1.5rem' }}>
              <div className="queue-item" style={{ borderLeft: '4px solid #007BFF', background: 'rgba(0, 123, 255, 0.05)' }}>
                <div className="token-circle" style={{ background: 'rgba(0, 123, 255, 0.1)', color: '#007BFF', borderColor: '#007BFF' }}>
                  <Video size={20} />
                </div>
                <div className="patient-info">
                  <div className="patient-name">Lakshmi Devi (2:30 PM)</div>
                  <div className="patient-meta">
                    <span>Skin Rash • Follow-up</span>
                    <span style={{ color: 'var(--accent-green)' }}>Patient is online</span>
                  </div>
                </div>
                <button className="action-btn" style={{ background: '#007BFF' }}>
                  <Play size={18} /> Join Call
                </button>
              </div>

              <div className="queue-item">
                <div className="token-circle" style={{ background: 'var(--surface-dark)' }}>
                  <Video size={20} />
                </div>
                <div className="patient-info">
                  <div className="patient-name">Rajendra Singh (3:15 PM)</div>
                  <div className="patient-meta">
                    <span>Routine Checkup</span>
                    <span>Offline</span>
                  </div>
                </div>
                <button className="action-btn secondary" disabled>
                  Waiting for patient
                </button>
              </div>

              <div className="queue-item">
                <div className="token-circle" style={{ background: 'var(--surface-dark)' }}>
                  <Video size={20} />
                </div>
                <div className="patient-info">
                  <div className="patient-name">Kavita Sharma (4:00 PM)</div>
                  <div className="patient-meta">
                    <span>Report Consultation</span>
                    <span>Offline</span>
                  </div>
                </div>
                <button className="action-btn secondary" disabled>
                  Waiting for patient
                </button>
              </div>
            </div>
          </div>

          <div className="panel">
            <h2 className="panel-title"><CheckCircle size={20} /> Past Consultations Log (Today)</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
              <thead>
                <tr style={{ background: 'var(--surface-dark)', textAlign: 'left' }}>
                  <th style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)' }}>Time</th>
                  <th style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)' }}>Patient</th>
                  <th style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)' }}>Duration</th>
                  <th style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)' }}>11:30 AM</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)' }}>Sanjay Kumar</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)' }}>14 mins</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)', textAlign: 'right' }}>
                    <button className="action-btn secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.85rem' }}>View Notes</button>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)' }}>10:15 AM</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)' }}>Meenakshi</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)' }}>22 mins</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)', textAlign: 'right' }}>
                    <button className="action-btn secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.85rem' }}>View Notes</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="sidebar">
          <div className="panel">
            <h2 className="panel-title"><FileText size={20} /> Pre-loaded Notes</h2>
            <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--surface-light)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#007BFF' }}>Next: Lakshmi Devi</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                <strong>Last Visit (14 Jul):</strong> Prescribed hydrocortisone cream for persistent skin rash on left arm. 
                <br /><br />
                <strong>Follow-up objective:</strong> Check if redness and itching have subsided. Patient reported mild improvement via app message yesterday.
              </p>
            </div>
            
            <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(0, 240, 255, 0.05)', border: '1px solid rgba(0, 240, 255, 0.2)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem', fontWeight: 600 }}>
                <Shield size={16} /> Secure Connection
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                End-to-end encrypted video link ready. Bandwidth optimal (45 Mbps).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
