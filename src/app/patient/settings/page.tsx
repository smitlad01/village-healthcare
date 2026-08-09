'use client';

import React, { useState } from 'react';
import { Globe, Type, Moon, Bell, Shield, Eye, Info, LogOut } from 'lucide-react';
import '@/styles/community.css';

export default function PatientSettingsPage() {
  const [activeTab, setActiveTab] = useState('Language');

  const tabs = [
    { id: 'Language', icon: Globe },
    { id: 'Display', icon: Type },
    { id: 'Notifications', icon: Bell },
    { id: 'Privacy', icon: Shield },
    { id: 'Accessibility', icon: Eye },
    { id: 'About', icon: Info },
  ];

  return (
    <div className="page-container">
      <h1 style={{ marginBottom: '2rem' }}>Settings</h1>

      <div className="settings-container">
        <div className="settings-sidebar">
          <div className="settings-nav">
            {tabs.map(tab => (
              <div 
                key={tab.id}
                className={`settings-nav-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon size={20} /> {tab.id}
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem', padding: '1rem', borderTop: '1px solid var(--glass-border)' }}>
            <button className="danger-btn" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>

        <div className="settings-content">
          {activeTab === 'Language' && (
            <div className="settings-section">
              <h2 className="settings-section-title">Language & Region</h2>
              <div className="setting-item">
                <div className="setting-info">
                  <h4>App Language</h4>
                  <p>Choose your preferred language for the interface.</p>
                </div>
                <select className="custom-select">
                  <option>English</option>
                  <option>हिंदी (Hindi)</option>
                  <option>मराठी (Marathi)</option>
                  <option>বাংলা (Bengali)</option>
                  <option>తెలుగు (Telugu)</option>
                  <option>தமிழ் (Tamil)</option>
                  <option>ગુજરાતી (Gujarati)</option>
                  <option>ಕನ್ನಡ (Kannada)</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === 'Display' && (
            <div className="settings-section">
              <h2 className="settings-section-title">Display Settings</h2>
              
              <div className="setting-item">
                <div className="setting-info">
                  <h4>Theme</h4>
                  <p>Light or dark mode</p>
                </div>
                <select className="custom-select" disabled>
                  <option>Dark Mode (Default)</option>
                </select>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <h4>Font Size</h4>
                  <p>Adjust the text size for better readability</p>
                </div>
                <input type="range" className="custom-range" min="1" max="3" defaultValue="2" />
              </div>
            </div>
          )}

          {activeTab === 'Notifications' && (
            <div className="settings-section">
              <h2 className="settings-section-title">Notifications</h2>
              
              {[
                { title: 'Appointment Reminders', desc: 'Get notified before your scheduled consultations', on: true },
                { title: 'Medication Reminders', desc: 'Alerts to take your prescribed medicines', on: true },
                { title: 'Health Alerts', desc: 'Important community health advisories', on: true },
                { title: 'Game Notifications', desc: 'Updates about your health streak and games', on: false },
                { title: 'Points & Rewards', desc: 'Alerts when you earn Health Points', on: true }
              ].map((item, idx) => (
                <div className="setting-item" key={idx}>
                  <div className="setting-info">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked={item.on} />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Privacy' && (
            <div className="settings-section">
              <h2 className="settings-section-title">Privacy & Data</h2>
              
              <div className="setting-item">
                <div className="setting-info">
                  <h4>Share Data with ASHA Worker</h4>
                  <p>Allow local health workers to view your health records to provide better care.</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked={true} />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <h4>Share Data with Government</h4>
                  <p>Anonymously share health data for public health planning.</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked={true} />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="setting-item" style={{ marginTop: '2rem', borderTop: '1px solid rgba(231,76,60,0.3)', paddingTop: '2rem' }}>
                <div className="setting-info">
                  <h4 style={{ color: '#e74c3c' }}>Delete Account</h4>
                  <p>Permanently remove your account and all associated health data.</p>
                </div>
                <button className="danger-btn">Delete Account</button>
              </div>
            </div>
          )}

          {activeTab === 'Accessibility' && (
            <div className="settings-section">
              <h2 className="settings-section-title">Accessibility</h2>
              
              <div className="setting-item">
                <div className="setting-info">
                  <h4>Voice Reading Mode</h4>
                  <p>Read on-screen text aloud for visually impaired users.</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked={false} />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <h4>High Contrast Mode</h4>
                  <p>Increase contrast for better visibility.</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked={false} />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          )}

          {activeTab === 'About' && (
            <div className="settings-section">
              <h2 className="settings-section-title">About U-HAIN</h2>
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', background: 'linear-gradient(135deg, var(--primary-color) 0%, #a29bfe 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  U-HAIN
                </div>
                <p className="text-secondary">Universal Health AI Network</p>
                <div style={{ margin: '2rem 0' }}>
                  <p>Version: 6.0.0 (Prototype)</p>
                  <p>License: MIT</p>
                </div>
                <button className="btn-primary">Contact Support</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
