'use client';

import React, { useState } from 'react';
import { Search, Filter, MapPin, Video, Calendar, Star, CheckCircle, Clock, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BookAppointmentPage() {
  const router = useRouter();
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [bookingStep, setBookingStep] = useState(1); // 1: Search, 2: Slot Picker, 3: Success

  const doctors = [
    { id: 1, name: 'Dr. Priya Sharma', spec: 'Cardiology', rating: 4.8, reviews: 142, langs: 'Hindi, English, Marathi', dist: '2.3 km', next: 'Aug 12 3:00 PM', fee: 'Free (Govt)', types: ['Physical', 'Video'] },
    { id: 2, name: 'Dr. Rajesh Patel', spec: 'General Medicine', rating: 4.6, reviews: 89, langs: 'Hindi, Gujarati', dist: '5.1 km', next: 'Aug 13 10:00 AM', fee: '₹200', types: ['Physical', 'Video'] },
    { id: 3, name: 'Dr. Anita Desai', spec: 'General', rating: 4.5, reviews: 67, langs: 'Hindi, English, Bengali', dist: 'Tele-only', next: 'Aug 11 2:00 PM', fee: '₹100', types: ['Video'] },
    { id: 4, name: 'Dr. Suresh Nair', spec: 'Endocrinology', rating: 4.9, reviews: 203, langs: 'Hindi, English, Tamil', dist: '12 km (District Hospital)', next: 'Aug 15 11:00 AM', fee: 'Free (Govt)', types: ['Physical'] },
  ];

  const handleBookClick = (doc: any) => {
    setSelectedDoctor(doc);
    setBookingStep(2);
  };

  const handleConfirmSlot = () => {
    setBookingStep(3);
  };

  if (bookingStep === 3) {
    return (
      <div className="page-container success-state">
        <div className="glass-card success-card">
          <CheckCircle size={80} className="success-icon pulse-anim" />
          <h1>Booking Confirmed!</h1>
          <p className="token-display">Token #47</p>
          <div className="health-points-badge">+100 Health Points earned!</div>
          
          <div className="booking-summary glass-panel">
            <p><strong>{selectedDoctor?.name}</strong> • {selectedDoctor?.spec}</p>
            <p><Clock size={16} /> Aug 12, 2026 at 3:00 PM</p>
          </div>
          
          <button className="btn-primary large-cta" onClick={() => router.push('/patient/appointments')}>
            View My Appointments
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>{bookingStep === 1 ? 'Find a Doctor' : 'Select Time Slot'}</h1>
        <p className="subtitle">{bookingStep === 1 ? 'Search by specialty, name or symptom' : `Booking with ${selectedDoctor?.name}`}</p>
      </header>

      {bookingStep === 1 && (
        <>
          <div className="search-filters glass-panel">
            <div className="search-bar">
              <Search size={20} />
              <input type="text" placeholder="Search doctors..." className="glass-input" />
            </div>
            <div className="filter-options">
              <select className="glass-select"><option>Specialization</option><option>Cardiology</option><option>General</option></select>
              <select className="glass-select"><option>Language</option><option>Hindi</option><option>English</option></select>
              <div className="toggle-group">
                <label className="glass-toggle"><input type="checkbox" /> Available Today</label>
                <label className="glass-toggle"><input type="checkbox" /> Telemedicine Only</label>
              </div>
            </div>
          </div>

          <div className="doctor-results">
            {doctors.map(doc => (
              <div key={doc.id} className="glass-card doctor-card">
                <div className="doc-header">
                  <div>
                    <h3>{doc.name}</h3>
                    <p className="specialization">{doc.spec}</p>
                  </div>
                  <div className="rating-badge">
                    <Star size={16} className="filled" /> {doc.rating} <span>({doc.reviews})</span>
                  </div>
                </div>
                <div className="doc-details">
                  <p><strong>Languages:</strong> {doc.langs}</p>
                  <p><MapPin size={16} /> {doc.dist} | <strong>Fee:</strong> {doc.fee}</p>
                  <p><Clock size={16} /> Next Available: <span className="highlight-text">{doc.next}</span></p>
                </div>
                <div className="doc-actions">
                  {doc.types.includes('Physical') && (
                    <button className="btn-primary" onClick={() => handleBookClick(doc)}>
                      Book Physical
                    </button>
                  )}
                  {doc.types.includes('Video') && (
                    <button className="btn-secondary" onClick={() => handleBookClick(doc)}>
                      <Video size={16} /> Book Video
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {bookingStep === 2 && (
        <div className="slot-picker glass-panel">
          <h3>Available Slots for Aug 12</h3>
          <div className="time-grid">
            {['09:00 AM', '10:00 AM', '11:30 AM', '02:00 PM', '03:00 PM', '04:15 PM'].map((time) => (
              <button key={time} className="glass-button slot-btn">{time}</button>
            ))}
          </div>
          <div className="action-row">
            <button className="btn-outline" onClick={() => setBookingStep(1)}>Back</button>
            <button className="btn-primary large-cta" onClick={handleConfirmSlot}>Confirm & Book</button>
          </div>
        </div>
      )}
    </div>
  );
}
