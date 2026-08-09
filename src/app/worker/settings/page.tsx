'use client';

import React, { useState } from 'react';
import { Globe, Type, Bell, Shield, Eye, Info, LogOut, Database, MapPin } from 'lucide-react';
import '@/styles/community.css';

export default function WorkerSettingsPage() {
  const [activeTab, setActiveTab] = useState('Offline Data');

  const tabs = [
    { id: 'Offline Data', icon: Database },
    { id: 'Zone Info', icon: MapPin },
    { id: 'Language', icon: Globe },
    { id: 'Notifications', icon: Bell },
    { id: 'Privacy', icon: Shield },
    { id: 'About', icon: Info },
  ];

  return (
    <div className="page-container">
      <h1 style={{ marginBottom: '2rem' }}>ASHA Worker Settings</h1>

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
          {activeTab === 'Offline Data' && (
            <div className="settings-section">
              <h2 className="settings-section-title">Offline Data Management</h2>
              
              <div className="setting-item">
                <div className="setting-info">
                  <h4>Sync Frequency</h4>
                  <p>How often should the app sync data when internet is available?</p>
                </div>
                <select className="custom-select">
                  <option>Auto (When Connected)</option>
                  <option>Every 1 Hour</option>
                  <option>Every 6 Hours</option>
                  <option>Manual Only</option>
                </select>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <h4>Cache Patient Records</h4>
                  <p>Download patient records for offline field visits.</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked={true} />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <h4>Clear Offline Cache</h4>
                  <p>Current cache size: 45MB</p>
                </div>
                <button className="danger-btn" style={{ background: 'transparent' }}>Clear Cache</button>
              </div>
              
              <div style={{ marginTop: '2rem' }}>
                <button className="btn-primary" style={{ width: '100%', padding: '1rem' }}>
                  Force Sync Now
                </button>
              </div>
            </div>
          )}

          {activeTab === 'Zone Info' && (
            <div className="settings-section">
              <h2 className="settings-section-title">Assigned Zone Information</h2>
              
              <div className="mh-card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                <h3 style={{ margin: '0 0 1rem 0' }}>Nashik Zone</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', color: 'var(--text-secondary)' }}>
                  <div>
                    <strong>Total Households:</strong> 450
                  </div>
                  <div>
                    <strong>Assigned Patients:</strong> 125
                  </div>
                  <div>
                    <strong>High-Risk Patients:</strong> 12
                  </div>
                  <div>
                    <strong>PHC Center:</strong> Nashik Primary Health Center
                  </div>
                </div>
              </div>
              
              <div className="setting-item">
                <div className="setting-info">
                  <h4>Update Household Census</h4>
                  <p>Download latest census data for the assigned region.</p>
                </div>
                <button className="btn-primary" style={{ background: 'var(--glass-bg-subtle)' }}>Download</button>
              </div>
            </div>
          )}
          
          {/* Other tabs abbreviated for prototype */}
          {['Language', 'Notifications', 'Privacy', 'About'].includes(activeTab) && (
            <div className="settings-section">
              <h2 className="settings-section-title">{activeTab}</h2>
              <p className="text-secondary">Standard settings inherited from global preferences.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
