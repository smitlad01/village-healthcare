'use client';

import React, { useState } from 'react';
import { Star, MapPin, Languages, Calendar, IndianRupee, Video, Award } from 'lucide-react';
import '../../../styles/utilities.css';

export default function DoctorDirectory() {
  const [view, setView] = useState('directory');

  const doctors = [
    { name: 'Dr. Suresh Nair', initials: 'SN', spec: 'Endocrinology', rating: 4.9, reviews: 203, lang: 'Hindi, English, Tamil', dist: '12 km', loc: 'District Hospital', next: 'Aug 15', fee: 'Free', tele: false },
    { name: 'Dr. Priya Sharma', initials: 'PS', spec: 'Cardiology', rating: 4.8, reviews: 142, lang: 'Hindi, English, Marathi', dist: '2.3 km', loc: 'PHC Wardha', next: 'Aug 12', fee: 'Free', tele: false },
    { name: 'Dr. Meena Iyer', initials: 'MI', spec: 'Gynecology', rating: 4.7, reviews: 178, lang: 'Hindi, English, Kannada', dist: '3.5 km', loc: "Women's Health Center", next: 'Aug 11', fee: '₹150', tele: false },
    { name: 'Dr. Rajesh Patel', initials: 'RP', spec: 'General Medicine', rating: 4.6, reviews: 89, lang: 'Hindi, Gujarati', dist: '5.1 km', loc: 'Private Clinic', next: 'Aug 13', fee: '₹200', tele: false },
    { name: 'Dr. Anita Desai', initials: 'AD', spec: 'General', rating: 4.5, reviews: 67, lang: 'Hindi, English, Bengali', dist: 'Tele-only', loc: 'Online', next: 'Aug 11', fee: '₹100', tele: true },
    { name: 'Dr. Arjun Reddy', initials: 'AR', spec: 'Orthopedics', rating: 4.4, reviews: 56, lang: 'Hindi, Telugu', dist: '8 km', loc: 'District Hospital', next: 'Aug 16', fee: 'Free', tele: false },
    { name: 'Dr. Kavita Singh', initials: 'KS', spec: 'Pediatrics', rating: 4.8, reviews: 134, lang: 'Hindi, English', dist: '2.8 km', loc: 'Child Health Center', next: 'Aug 12', fee: 'Free', tele: false },
    { name: 'Dr. Mohammed Hussain', initials: 'MH', spec: 'Pulmonology', rating: 4.3, reviews: 45, lang: 'Hindi, Urdu, English', dist: '15 km', loc: 'District Hospital', next: 'Aug 18', fee: 'Free', tele: false },
  ];

  return (
    <div className="utilities-container">
      <div className="utilities-header">
        <h1>Doctor Directory & Rankings</h1>
        <p>Find and rate the best doctors in your area.</p>
      </div>

      <div className="sort-tabs">
        <button className={`sort-tab ${view === 'directory' ? 'active' : ''}`} onClick={() => setView('directory')}>Directory</button>
        <button className={`sort-tab ${view === 'rankings' ? 'active' : ''}`} onClick={() => setView('rankings')}>Rankings</button>
      </div>

      {view === 'directory' && (
        <>
          <div className="filter-bar">
            <div className="filter-group">
              <select className="filter-select">
                <option>All Specialties</option>
                <option>Cardiology</option>
                <option>Endocrinology</option>
                <option>General</option>
                <option>Gynecology</option>
                <option>Pediatrics</option>
              </select>
            </div>
            <div className="filter-group">
              <select className="filter-select">
                <option>Any Language</option>
                <option>Hindi</option>
                <option>English</option>
                <option>Marathi</option>
              </select>
            </div>
            <div className="filter-group">
              <select className="filter-select">
                <option>Rating: Any</option>
                <option>4.5+</option>
                <option>4.0+</option>
              </select>
            </div>
            <div className="filter-group" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
              <input type="checkbox" id="availToday" />
              <label htmlFor="availToday">Available Today</label>
            </div>
            <div className="filter-group" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
              <input type="checkbox" id="telemed" />
              <label htmlFor="telemed">Telemedicine</label>
            </div>
          </div>

          <div className="doctor-grid">
            {doctors.map((doc, i) => (
              <div className="doctor-card" key={i}>
                <div className="doctor-header">
                  <div className="doctor-avatar">{doc.initials}</div>
                  <div className="doctor-info">
                    <h3>{doc.name}</h3>
                    <div className="doctor-spec">{doc.spec}</div>
                    <div className="doctor-rating">
                      <Star fill="currentColor" size={16} /> {doc.rating} <span className="doctor-reviews">({doc.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="doctor-details">
                  <div className="detail-item"><Languages size={16} /> {doc.lang}</div>
                  <div className="detail-item"><MapPin size={16} /> {doc.loc} • {doc.dist}</div>
                  <div className="detail-item"><Calendar size={16} /> Next Available: {doc.next}</div>
                  <div className="detail-item"><IndianRupee size={16} /> Fee: {doc.fee}</div>
                </div>
                <div className="doctor-actions">
                  {doc.tele ? (
                    <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      <Video size={16} /> Book Video
                    </button>
                  ) : (
                    <button className="btn-primary">Book</button>
                  )}
                  <button className="btn-secondary">Profile</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {view === 'rankings' && (
        <div className="list-item-card" style={{ flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ color: 'var(--text-primary)' }}>Top Rated Doctors in Wardha</h3>
          <table style={{ width: '100%', color: 'var(--text-primary)', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-subtle)', textAlign: 'left' }}>
                <th style={{ padding: '12px' }}>Rank</th>
                <th style={{ padding: '12px' }}>Name</th>
                <th style={{ padding: '12px' }}>Specialization</th>
                <th style={{ padding: '12px' }}>Rating</th>
                <th style={{ padding: '12px' }}>Score</th>
              </tr>
            </thead>
            <tbody>
              {doctors.sort((a,b) => b.rating - a.rating).slice(0, 5).map((doc, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {i < 3 && <Award size={20} color={i === 0 ? '#fbbf24' : i === 1 ? '#9ca3af' : '#b45309'} />}
                      #{i + 1}
                    </div>
                  </td>
                  <td style={{ padding: '12px', fontWeight: '500' }}>{doc.name}</td>
                  <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>{doc.spec}</td>
                  <td style={{ padding: '12px', color: '#fbbf24' }}>★ {doc.rating}</td>
                  <td style={{ padding: '12px' }}>{(doc.rating * doc.reviews / 10).toFixed(0)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
