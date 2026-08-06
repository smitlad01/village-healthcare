'use client';

import React, { useState } from 'react';
import { Globe, Bell, Shield, Info, LogOut, Clock, Calendar, Video, DollarSign, MessageSquare } from 'lucide-react';
import '@/styles/community.css';

export default function DoctorSettingsPage() {
  const [activeTab, setActiveTab] = useState('Consultation');

  const tabs = [
    { id: 'Consultation', icon: Clock },
    { id: 'Telemedicine', icon: Video },
    { id: 'Fees & Payouts', icon: DollarSign },
    { id: 'Auto-Replies', icon: MessageSquare },
    { id: 'Notifications', icon: Bell },
    { id: 'Profile', icon: Info },
  ];

  return (
    <div className="page-container">
      <h1 style={{ marginBottom: '2rem' }}>Doctor Settings</h1>

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
          {activeTab === 'Consultation' && (
            <div className="settings-section">
              <h2 className="settings-section-title">Consultation Hours</h2>
              
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                <div className="setting-item" key={day}>
                  <div className="setting-info" style={{ width: '120px' }}>
                    <h4>{day}</h4>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <input type="time" defaultValue="09:00" style={{ background: 'var(--glass-bg-subtle)', border: '1px solid var(--glass-border)', color: 'white', padding: '0.5rem', borderRadius: '4px' }} />
                    <span>to</span>
                    <input type="time" defaultValue="17:00" style={{ background: 'var(--glass-bg-subtle)', border: '1px solid var(--glass-border)', color: 'white', padding: '0.5rem', borderRadius: '4px' }} />
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked={true} />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              ))}
              
              {['Saturday', 'Sunday'].map((day) => (
                <div className="setting-item" key={day}>
                  <div className="setting-info" style={{ width: '120px' }}>
                    <h4>{day}</h4>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', opacity: 0.5 }}>
                    <input type="time" disabled defaultValue="00:00" style={{ background: 'var(--glass-bg-subtle)', border: '1px solid var(--glass-border)', color: 'white', padding: '0.5rem', borderRadius: '4px' }} />
                    <span>to</span>
                    <input type="time" disabled defaultValue="00:00" style={{ background: 'var(--glass-bg-subtle)', border: '1px solid var(--glass-border)', color: 'white', padding: '0.5rem', borderRadius: '4px' }} />
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked={false} />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Telemedicine' && (
            <div className="settings-section">
              <h2 className="settings-section-title">Telemedicine Availability</h2>
              
              <div className="setting-item">
                <div className="setting-info">
                  <h4>Accept Live Queue Patients</h4>
                  <p>Allow patients to join your queue for immediate consultation.</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked={true} />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <h4>Max Queue Length</h4>
                  <p>Maximum number of patients waiting in your live queue.</p>
                </div>
                <select className="custom-select" style={{ width: '100px', minWidth: '100px' }}>
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                  <option>No Limit</option>
                </select>
              </div>
              
              <div className="setting-item">
                <div className="setting-info">
                  <h4>Average Consultation Time</h4>
                  <p>Used to calculate estimated wait times for patients.</p>
                </div>
                <select className="custom-select" style={{ width: '120px', minWidth: '120px' }}>
                  <option>10 mins</option>
                  <option>15 mins</option>
                  <option>20 mins</option>
                </select>
              </div>
            </div>
          )}
          
          {activeTab === 'Fees & Payouts' && (
            <div className="settings-section">
              <h2 className="settings-section-title">Fee Settings</h2>
              
              <div className="setting-item">
                <div className="setting-info">
                  <h4>Standard Consultation Fee (₹)</h4>
                  <p>Default fee for general teleconsultation.</p>
                </div>
                <input type="number" defaultValue="300" style={{ background: 'var(--glass-bg-subtle)', border: '1px solid var(--glass-border)', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', width: '120px' }} />
              </div>
              
              <div className="setting-item">
                <div className="setting-info">
                  <h4>Offer Free Consultations to BPL</h4>
                  <p>Waive fees for Below Poverty Line patients verified by ASHA.</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked={true} />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          )}

          {activeTab === 'Auto-Replies' && (
            <div className="settings-section">
              <h2 className="settings-section-title">Forum Auto-Replies</h2>
              
              <div className="setting-item">
                <div className="setting-info">
                  <h4>Enable AI Drafts</h4>
                  <p>Let AI suggest drafts for forum replies (You must still review and approve).</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked={true} />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              <div className="setting-item">
                <div className="setting-info">
                  <h4>Auto-thank for Reviews</h4>
                  <p>Automatically send a standard thank you message for 4/5 star reviews.</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked={false} />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          )}

          {/* Abbreviated remaining tabs */}
          {['Notifications', 'Profile'].includes(activeTab) && (
            <div className="settings-section">
              <h2 className="settings-section-title">{activeTab}</h2>
              <p className="text-secondary">Standard settings view.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
