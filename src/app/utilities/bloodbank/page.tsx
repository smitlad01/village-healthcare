'use client';

import React from 'react';
import { Droplet, AlertTriangle, Heart, Search } from 'lucide-react';
import '../../../styles/utilities.css';

export default function BloodBank() {
  return (
    <div className="utilities-container">
      <div className="utilities-header">
        <h1>Blood Bank & Donation</h1>
        <p>Find blood availability or register as a lifesaver.</p>
      </div>

      <div className="urgent-broadcast">
        <AlertTriangle size={24} />
        <div>
          <div style={{ fontWeight: '600' }}>SOS: Urgent Blood Required</div>
          <div>O- blood urgently needed at District Hospital Nashik. Contact: 07152-XXXXXX</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 55%' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>Search Blood Availability</h3>
          
          <div className="filter-bar">
            <div className="form-group" style={{ margin: 0, flex: 1 }}>
              <select className="form-input">
                <option>Select Blood Group</option>
                <option>A+</option><option>A-</option>
                <option>B+</option><option>B-</option>
                <option>AB+</option><option>AB-</option>
                <option>O+</option><option>O-</option>
              </select>
            </div>
            <button className="btn-primary" style={{ flex: '0 0 auto' }}>
              <Search size={18} />
            </button>
          </div>

          <div className="list-item-card" style={{ marginTop: '24px', flexDirection: 'column', alignItems: 'stretch' }}>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>Results for O+ (Example)</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid var(--border-subtle)' }}>
                <div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: '500' }}>District Hospital Blood Bank</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>4.5 km • Govt. Facility</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#10b981', fontWeight: 'bold', fontSize: '18px' }}>12 Units</div>
                  <button className="btn-secondary" style={{ padding: '4px 12px', fontSize: '12px', marginTop: '4px' }}>Contact</button>
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid var(--border-subtle)' }}>
                <div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Red Cross Society</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>2.1 km • NGO</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '18px' }}>3 Units</div>
                  <button className="btn-secondary" style={{ padding: '4px 12px', fontSize: '12px', marginTop: '4px' }}>Contact</button>
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Sanjeevani Blood Bank</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>6.0 km • Private</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '18px' }}>0 Units</div>
                  <button className="btn-secondary" style={{ padding: '4px 12px', fontSize: '12px', marginTop: '4px', opacity: 0.5 }} disabled>Contact</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: '1 1 40%' }}>
          <div className="list-item-card" style={{ flexDirection: 'column', alignItems: 'stretch', background: 'linear-gradient(135deg, rgba(239,68,68,0.1), transparent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ background: '#ef4444', padding: '12px', borderRadius: '50%' }}>
                <Heart size={24} color="white" />
              </div>
              <div>
                <h3 style={{ color: 'var(--text-primary)', margin: 0 }}>Register as Donor</h3>
                <p style={{ color: '#10b981', fontSize: '14px', margin: 0, fontWeight: '500' }}>+500 Health Points for Donation!</p>
              </div>
            </div>

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" className="form-input" placeholder="Enter your name" />
            </div>
            
            <div className="form-group">
              <label>Blood Group</label>
              <select className="form-input">
                <option>A+</option><option>A-</option>
                <option>B+</option><option>B-</option>
                <option>AB+</option><option>AB-</option>
                <option>O+</option><option>O-</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Last Donation Date (Optional)</label>
              <input type="date" className="form-input" />
            </div>

            <div className="form-group" style={{ flexDirection: 'row', alignItems: 'flex-start', gap: '8px', marginTop: '8px' }}>
              <input type="checkbox" id="consent" style={{ marginTop: '4px' }} />
              <label htmlFor="consent" style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 'normal' }}>
                I agree to be contacted during blood emergencies in my area.
              </label>
            </div>

            <button className="btn-primary" style={{ background: '#ef4444', marginTop: '16px' }}>Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
