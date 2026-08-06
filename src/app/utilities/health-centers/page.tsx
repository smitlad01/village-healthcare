'use client';

import React from 'react';
import { MapPin, Navigation, Phone, Filter } from 'lucide-react';
import '../../../styles/utilities.css';

export default function HealthCentersMap() {
  const centers = [
    { name: 'PHC Wardha', type: 'Primary Health Center', dist: '1.2 km', services: 'OPD, Immunization, Lab', time: '9 AM - 4 PM', beds: 6, emergency: false },
    { name: 'CHC Deoli', type: 'Community Health Center', dist: '8 km', services: 'OPD, Surgery, Delivery, Lab, X-ray', time: '24/7', beds: 30, emergency: true },
    { name: 'District Hospital Wardha', type: 'District Hospital', dist: '4.5 km', services: 'Full Services, Specialist OPD', time: '24/7', beds: 200, emergency: true },
    { name: 'Sub-center Borgaon', type: 'Sub-center', dist: '3 km', services: 'Basic ANC, Immunization', time: 'Mon/Wed/Fri', beds: 0, emergency: false },
    { name: 'Sub-center Paunar', type: 'Sub-center', dist: '5 km', services: 'Basic ANC, Immunization', time: 'Tue/Thu/Sat', beds: 0, emergency: false },
    { name: 'Shri Hospital', type: 'Private Hospital', dist: '3.1 km', services: 'Full Services', time: '24/7', beds: 50, emergency: true },
  ];

  return (
    <div className="utilities-container">
      <div className="utilities-header">
        <h1>Health Centers Map</h1>
        <p>Locate nearby PHCs, CHCs, and District Hospitals.</p>
      </div>

      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 65%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          <div className="filter-bar" style={{ marginBottom: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
              <Filter size={18} /> Filters:
            </div>
            <div className="quick-questions" style={{ margin: 0 }}>
              <button className="quick-question-btn" style={{ background: 'var(--primary)', color: 'white' }}>All</button>
              <button className="quick-question-btn">PHC</button>
              <button className="quick-question-btn">CHC</button>
              <button className="quick-question-btn">District Hospital</button>
              <button className="quick-question-btn">Sub-center</button>
            </div>
          </div>

          <div className="map-placeholder" style={{ height: '500px', margin: 0 }}>
            {/* Markers */}
            <div style={{ position: 'absolute', top: '40%', left: '45%', textAlign: 'center' }}>
              <MapPin size={32} color="#10b981" />
              <div style={{ background: 'var(--surface)', fontSize: '12px', padding: '2px 6px', borderRadius: '4px', marginTop: '4px', color: 'var(--text-primary)' }}>PHC Wardha</div>
            </div>
            <div style={{ position: 'absolute', top: '20%', left: '60%', textAlign: 'center' }}>
              <MapPin size={40} color="#ef4444" />
              <div style={{ background: 'var(--surface)', fontSize: '12px', padding: '2px 6px', borderRadius: '4px', marginTop: '4px', color: 'var(--text-primary)' }}>District Hosp.</div>
            </div>
            <div style={{ position: 'absolute', top: '70%', left: '30%', textAlign: 'center' }}>
              <MapPin size={24} color="#3b82f6" />
              <div style={{ background: 'var(--surface)', fontSize: '12px', padding: '2px 6px', borderRadius: '4px', marginTop: '4px', color: 'var(--text-primary)' }}>Sub-center</div>
            </div>
            
            {/* Route Planner overlay */}
            <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'var(--surface-light)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-subtle)', backdropFilter: 'blur(12px)', width: '300px' }}>
              <h4 style={{ margin: '0 0 12px 0', color: 'var(--text-primary)' }}>Route Planner</h4>
              <div className="form-group" style={{ marginBottom: '8px' }}>
                <input type="text" className="form-input" style={{ padding: '8px' }} defaultValue="Current Location (Wardha)" />
              </div>
              <div className="form-group" style={{ marginBottom: '12px' }}>
                <select className="form-input" style={{ padding: '8px' }}>
                  <option>Select Destination Center...</option>
                  <option>District Hospital Wardha</option>
                  <option>PHC Wardha</option>
                </select>
              </div>
              <button className="btn-primary" style={{ width: '100%', padding: '8px' }}>Get Directions</button>
            </div>
          </div>
        </div>

        <div style={{ flex: '1 1 30%', display: 'flex', flexDirection: 'column', height: '560px' }}>
          <h3 style={{ color: 'var(--text-primary)', margin: '0 0 16px 0' }}>List View</h3>
          <div className="center-list" style={{ overflowY: 'auto', paddingRight: '8px', flexGrow: 1 }}>
            {centers.map((center, i) => (
              <div className="list-item-card" key={i} style={{ flexDirection: 'column', alignItems: 'stretch', gap: '12px', borderLeft: center.emergency ? '4px solid #ef4444' : '1px solid var(--border-subtle)' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h4 style={{ margin: 0, color: 'var(--text-primary)' }}>{center.name}</h4>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{center.dist}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--primary)', marginTop: '4px' }}>{center.type}</div>
                </div>
                
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                  <div><strong>Services:</strong> {center.services}</div>
                  <div style={{ display: 'flex', gap: '16px', marginTop: '4px' }}>
                    <span><strong>Hours:</strong> {center.time}</span>
                    <span><strong>Beds:</strong> {center.beds}</span>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                  <button className="btn-secondary" style={{ padding: '4px 8px', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                    <Navigation size={14} /> Navigate
                  </button>
                  <button className="btn-primary" style={{ padding: '4px 8px', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', background: 'var(--surface)', color: 'var(--text-primary)', border: '1px solid var(--border-subtle)' }}>
                    <Phone size={14} /> Call
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
