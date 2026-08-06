'use client';

import React from 'react';
import { Phone, MapPin, Clock, AlertTriangle, Activity, HeartPulse } from 'lucide-react';
import '../../../styles/utilities.css';

export default function AmbulanceEmergency() {
  return (
    <div className="utilities-container">
      <div className="utilities-header">
        <h1>Ambulance & Emergency</h1>
        <p>Fast access to emergency services and first aid.</p>
      </div>

      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 60%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <button className="btn-danger">
            <Phone size={24} /> CALL 108 EMERGENCY
          </button>

          <div className="map-placeholder">
            <MapPin size={48} className="map-marker" style={{ top: '40%', left: '45%' }} />
            <MapPin size={32} className="map-marker" style={{ top: '60%', left: '30%', color: '#3b82f6', animationDelay: '1s' }} />
            <div style={{ position: 'absolute', bottom: '16px', left: '16px', background: 'rgba(0,0,0,0.7)', padding: '8px 16px', borderRadius: '8px', color: 'white', fontSize: '14px' }}>
              Live Tracking: 2 Ambulances nearby
            </div>
          </div>

          <div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>Nearest Ambulances</h3>
            <div className="ambulance-list">
              <div className="list-item-card">
                <div className="list-item-info">
                  <h4>Govt 108 Unit</h4>
                  <div className="list-item-details">
                    <span><MapPin size={14} /> 3.2 km</span>
                    <span><Clock size={14} /> ETA: 8 min</span>
                  </div>
                </div>
                <div className="list-item-actions">
                  <button className="btn-secondary">Track</button>
                  <button className="btn-primary"><Phone size={16} /> Call</button>
                </div>
              </div>

              <div className="list-item-card">
                <div className="list-item-info">
                  <h4>MedCare Ambulance (Private)</h4>
                  <div className="list-item-details">
                    <span><MapPin size={14} /> 5.1 km</span>
                    <span><Clock size={14} /> ETA: 12 min</span>
                  </div>
                </div>
                <div className="list-item-actions">
                  <button className="btn-primary"><Phone size={16} /> Call</button>
                </div>
              </div>

              <div className="list-item-card" style={{ borderLeft: '4px solid #ef4444' }}>
                <div className="list-item-info">
                  <h4>Air Ambulance (Nagpur)</h4>
                  <div className="list-item-details">
                    <span style={{ color: '#ef4444' }}><AlertTriangle size={14} /> Critical Only</span>
                    <span>ETA: 45 min</span>
                  </div>
                </div>
                <div className="list-item-actions">
                  <button className="btn-secondary">Request</button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div style={{ flex: '1 1 35%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div className="list-item-card" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>Pre-call Information</h3>
            <div className="form-group">
              <label>Location</label>
              <input type="text" className="form-input" defaultValue="Current Location (Wardha)" />
            </div>
            <div className="form-group">
              <label>Emergency Type</label>
              <select className="form-input">
                <option>Accident / Trauma</option>
                <option>Heart Attack / Stroke</option>
                <option>Pregnancy / Labor</option>
                <option>Other Medical Emergency</option>
              </select>
            </div>
            <div className="form-group">
              <label>Patient Count</label>
              <input type="number" className="form-input" defaultValue="1" min="1" />
            </div>
          </div>

          <div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>First Aid Instructions</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div className="utility-card" style={{ padding: '16px', gap: '8px' }}>
                <Activity size={24} color="#ef4444" />
                <h4 style={{ margin: 0, color: 'var(--text-primary)' }}>CPR Steps</h4>
                <p style={{ fontSize: '12px' }}>Chest compressions</p>
              </div>
              <div className="utility-card" style={{ padding: '16px', gap: '8px' }}>
                <HeartPulse size={24} color="#ef4444" />
                <h4 style={{ margin: 0, color: 'var(--text-primary)' }}>Wound Care</h4>
                <p style={{ fontSize: '12px' }}>Stop bleeding</p>
              </div>
              <div className="utility-card" style={{ padding: '16px', gap: '8px' }}>
                <AlertTriangle size={24} color="#f59e0b" />
                <h4 style={{ margin: 0, color: 'var(--text-primary)' }}>Snake Bite</h4>
                <p style={{ fontSize: '12px' }}>Immobilize & calm</p>
              </div>
              <div className="utility-card" style={{ padding: '16px', gap: '8px' }}>
                <AlertTriangle size={24} color="#f59e0b" />
                <h4 style={{ margin: 0, color: 'var(--text-primary)' }}>Burns</h4>
                <p style={{ fontSize: '12px' }}>Cool water only</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
