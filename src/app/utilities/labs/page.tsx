'use client';

import React from 'react';
import { Search, MapPin, Star, Calendar, Home } from 'lucide-react';
import '../../../styles/utilities.css';

export default function DiagnosticLabs() {
  const labs = [
    { name: 'City Lab Nashik', dist: '1.2 km', rating: 4.5, tests: 'CBC ₹200, Lipid ₹350, HbA1c ₹400', home: true, free: false },
    { name: 'District Hospital Lab', dist: '4.5 km', rating: 4.2, tests: 'Free for card holders', home: false, free: true },
    { name: 'SRL Diagnostics (Franchise)', dist: '6 km', rating: 4.6, tests: 'Online reports available', home: true, free: false },
    { name: 'Government Mobile Lab', dist: 'Visits Tuesdays', rating: 4.8, tests: 'Basic screening free', home: false, free: true },
  ];

  return (
    <div className="utilities-container">
      <div className="utilities-header">
        <h1>Diagnostic Lab Finder</h1>
        <p>Find nearby labs, compare prices, and book home collection.</p>
      </div>

      <div className="filter-bar">
        <div className="form-group" style={{ margin: 0, flex: 2, position: 'relative' }}>
          <Search style={{ position: 'absolute', left: '12px', top: '10px', color: 'var(--text-secondary)' }} size={18} />
          <input type="text" className="form-input" placeholder="Search test (e.g. Blood Test, X-ray, MRI)..." style={{ paddingLeft: '36px' }} />
        </div>
        <div className="form-group" style={{ margin: 0, flex: 1 }}>
          <select className="form-input">
            <option>All Distances</option>
            <option>Within 2 km</option>
            <option>Within 5 km</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 60%' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>Available Labs</h3>
          
          <div className="lab-list">
            {labs.map((lab, i) => (
              <div className="list-item-card" key={i} style={lab.free ? { borderLeft: '4px solid #10b981' } : {}}>
                <div className="list-item-info">
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {lab.name}
                    <span style={{ fontSize: '14px', color: '#fbbf24', display: 'flex', alignItems: 'center' }}>
                      <Star size={14} fill="currentColor" /> {lab.rating}
                    </span>
                  </h4>
                  <div className="list-item-details" style={{ marginTop: '8px' }}>
                    <span><MapPin size={14} /> {lab.dist}</span>
                    <span style={{ color: lab.free ? '#10b981' : 'var(--text-secondary)' }}>• {lab.tests}</span>
                  </div>
                  {lab.home && (
                    <div style={{ fontSize: '12px', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '8px' }}>
                      <Home size={12} /> Home Collection Available
                    </div>
                  )}
                </div>
                <div className="list-item-actions" style={{ flexDirection: 'column' }}>
                  <button className="btn-primary" style={{ padding: '6px 16px' }}>
                    {lab.dist.includes('Visits') ? 'Schedule' : 'Book Test'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: '1 1 35%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div className="list-item-card" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Home size={20} color="var(--primary)" /> Book Home Collection
            </h3>
            
            <div className="form-group">
              <label>Select Tests</label>
              <input type="text" className="form-input" placeholder="e.g. Complete Blood Count" />
            </div>
            
            <div className="form-group">
              <label>Preferred Date & Time</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input type="date" className="form-input" style={{ flex: 1 }} />
                <input type="time" className="form-input" style={{ flex: 1 }} />
              </div>
            </div>
            
            <button className="btn-primary" style={{ marginTop: '8px' }}>Request Collection</button>
          </div>

          <div className="list-item-card" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>Price Comparison (Avg)</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '14px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px' }}>
                <span>CBC (Complete Blood Count)</span>
                <span>₹150 - ₹250</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '14px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px' }}>
                <span>Lipid Profile</span>
                <span>₹300 - ₹500</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '14px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px' }}>
                <span>Thyroid Profile (T3, T4, TSH)</span>
                <span>₹400 - ₹600</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '14px' }}>
                <span>HbA1c (Diabetes)</span>
                <span>₹350 - ₹550</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
