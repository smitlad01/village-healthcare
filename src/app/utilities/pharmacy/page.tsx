'use client';

import React from 'react';
import { Search, MapPin, Clock, Upload, ArrowRight, ShieldCheck } from 'lucide-react';
import '../../../styles/utilities.css';

export default function PharmacyLocator() {
  const pharmacies = [
    { name: 'Jan Aushadhi Kendra Nashik', dist: '0.8 km', time: 'Open till 9 PM', features: 'Generic medicines', highlight: true },
    { name: 'MedPlus Pharmacy', dist: '1.5 km', time: 'Open 24/7', features: 'All brands', highlight: false },
    { name: 'Apollo Pharmacy', dist: '2.1 km', time: 'Open till 10 PM', features: 'Home delivery available', highlight: false },
    { name: 'Government PHC Pharmacy', dist: '1.2 km', time: 'Open till 4 PM', features: 'Free medicines (card holders)', highlight: true },
    { name: 'Shree Medical Store', dist: '3.0 km', time: 'Open till 8 PM', features: 'Discount on generics', highlight: false },
  ];

  return (
    <div className="utilities-container">
      <div className="utilities-header">
        <h1>Pharmacy Locator & Generic Finder</h1>
        <p>Find medicines near you and discover affordable generic alternatives.</p>
      </div>

      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 60%' }}>
          
          <div className="form-group" style={{ position: 'relative', marginBottom: '24px' }}>
            <Search style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-secondary)' }} size={20} />
            <input 
              type="text" 
              className="form-input" 
              placeholder="Search by medicine name or pharmacy..." 
              style={{ paddingLeft: '40px', fontSize: '16px' }}
            />
          </div>

          <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>Nearest Pharmacies</h3>
          <div className="pharmacy-list">
            {pharmacies.map((pharm, i) => (
              <div className="list-item-card" key={i} style={pharm.highlight ? { borderLeft: '4px solid #10b981' } : {}}>
                <div className="list-item-info">
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {pharm.name} 
                    {pharm.highlight && <ShieldCheck size={16} color="#10b981" />}
                  </h4>
                  <div className="list-item-details">
                    <span><MapPin size={14} /> {pharm.dist}</span>
                    <span><Clock size={14} /> {pharm.time}</span>
                    <span style={{ color: 'var(--primary)' }}>• {pharm.features}</span>
                  </div>
                </div>
                <div className="list-item-actions">
                  <button className="btn-secondary">Directions</button>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div style={{ flex: '1 1 35%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div className="list-item-card" style={{ flexDirection: 'column', alignItems: 'stretch', background: 'linear-gradient(135deg, rgba(16,185,129,0.1), transparent)' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={20} color="#10b981" /> Generic Medicine Finder
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '16px' }}>
              Enter a branded medicine to find cheaper generic alternatives.
            </p>
            <div className="form-group">
              <input type="text" className="form-input" placeholder="e.g. Crocin, Augmentin..." />
            </div>
            
            {/* Example Result */}
            <div style={{ background: 'var(--surface)', padding: '16px', borderRadius: '8px', border: '1px dashed #10b981' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Branded: Augmentin 625</span>
                <span style={{ color: 'var(--text-secondary)', textDecoration: 'line-through' }}>₹200</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span style={{ color: '#10b981' }}>Generic: Amoxicillin + Clavulanic Acid</span>
                <span style={{ color: '#10b981' }}>₹85</span>
              </div>
              <div style={{ marginTop: '12px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                Savings: ₹115 (57% off)
              </div>
            </div>
          </div>

          <div className="list-item-card" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '32px' }}>
            <Upload size={32} color="var(--primary)" style={{ marginBottom: '16px' }} />
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Upload Prescription</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '16px' }}>
              Get medicines delivered to your doorstep.
            </p>
            <button className="btn-primary" style={{ width: '100%' }}>Choose File</button>
          </div>

        </div>
      </div>
    </div>
  );
}
