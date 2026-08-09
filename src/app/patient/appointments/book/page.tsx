'use client';

import React, { useState } from 'react';
import { Search, Filter, MapPin, Video, Calendar, Star, CheckCircle, Clock, ChevronRight, ChevronLeft, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '@/styles/globals.css';
import '@/styles/worker.css';

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
      <div className="worker-container" style={{ minHeight: '100vh', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="worker-glass-panel flex flex-col items-center text-center p-12" style={{ maxWidth: '600px', border: '1px solid rgba(16, 185, 129, 0.4)' }}>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '2rem', borderRadius: '50%', marginBottom: '2rem', display: 'inline-flex' }}>
            <CheckCircle size={80} color="#10b981" />
          </div>
          <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Booking Confirmed!</h1>
          
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem 2rem', borderRadius: '99px', fontSize: '1.25rem', fontWeight: 700, color: '#3b82f6', marginBottom: '1rem' }}>
            Token #47
          </div>
          
          <div style={{ color: '#10b981', fontWeight: 600, marginBottom: '2rem' }}>+100 Health Points earned!</div>
          
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', padding: '1.5rem', borderRadius: '12px', width: '100%', marginBottom: '2rem' }}>
            <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)', fontSize: '1.1rem' }}><strong>{selectedDoctor?.name}</strong> • {selectedDoctor?.spec}</p>
            <p style={{ margin: 0, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}><Clock size={16} /> Aug 12, 2026 at 3:00 PM</p>
          </div>
          
          <button 
            onClick={() => router.push('/patient/appointments')}
            style={{ width: '100%', padding: '1rem', background: '#3b82f6', color: '#fff', borderRadius: '99px', border: 'none', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer' }}
          >
            View My Appointments
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="worker-container" style={{ minHeight: '100vh', padding: '2rem' }}>
      <button 
        onClick={() => bookingStep === 2 ? setBookingStep(1) : router.push('/patient/appointments')}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}
      >
        <ChevronLeft size={20} /> Back
      </button>

      <header className="worker-header mb-8">
        <div>
          <h1 className="worker-title flex items-center gap-2">
            <Calendar color="#3b82f6" /> {bookingStep === 1 ? 'Find a Doctor' : 'Select Time Slot'}
          </h1>
          <p className="mt-2 text-secondary" style={{ fontSize: '1.1rem' }}>
            {bookingStep === 1 ? 'Search by specialty, name or symptom' : `Booking with ${selectedDoctor?.name}`}
          </p>
        </div>
      </header>

      {bookingStep === 1 && (
        <>
          <div className="worker-glass-panel mb-8" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ flex: 1, position: 'relative' }}>
                <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                <input 
                  type="text" 
                  placeholder="Search doctors, specialties, or symptoms..." 
                  style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '12px', color: 'var(--text-primary)', outline: 'none', fontSize: '1rem' }} 
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <select style={{ flex: '1 1 200px', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '12px', color: 'var(--text-primary)', outline: 'none' }}>
                <option style={{ background: 'var(--surface)' }}>All Specialties</option>
                <option style={{ background: 'var(--surface)' }}>Cardiology</option>
                <option style={{ background: 'var(--surface)' }}>General Medicine</option>
              </select>
              <select style={{ flex: '1 1 200px', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '12px', color: 'var(--text-primary)', outline: 'none' }}>
                <option style={{ background: 'var(--surface)' }}>All Languages</option>
                <option style={{ background: 'var(--surface)' }}>Hindi</option>
                <option style={{ background: 'var(--surface)' }}>English</option>
              </select>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'rgba(255,255,255,0.02)', padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ accentColor: '#3b82f6', width: '18px', height: '18px' }} /> Available Today
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ accentColor: '#3b82f6', width: '18px', height: '18px' }} /> Telemedicine Only
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doctors.map(doc => (
              <div key={doc.id} className="worker-glass-panel flex flex-col justify-between" style={{ padding: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <h3 style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1.25rem', margin: '0 0 4px 0' }}>{doc.name}</h3>
                      <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem' }}>{doc.spec}</p>
                    </div>
                    <div style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b', padding: '4px 10px', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Star size={14} fill="#f59e0b" /> {doc.rating} <span style={{ opacity: 0.8, fontWeight: 500 }}>({doc.reviews})</span>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                    <p style={{ margin: 0 }}><strong>Languages:</strong> {doc.langs}</p>
                    <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} /> {doc.dist} <span style={{ opacity: 0.5 }}>|</span> <strong style={{ color: 'var(--text-primary)' }}>Fee: {doc.fee}</strong></p>
                    <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> Next Available: <strong style={{ color: '#10b981' }}>{doc.next}</strong></p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
                  {doc.types.includes('Physical') && (
                    <button 
                      onClick={() => handleBookClick(doc)}
                      style={{ flex: 1, padding: '0.75rem', background: '#3b82f6', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 600, cursor: 'pointer', transition: 'opacity 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                      Book Physical Visit
                    </button>
                  )}
                  {doc.types.includes('Video') && (
                    <button 
                      onClick={() => handleBookClick(doc)}
                      style={{ flex: 1, padding: '0.75rem', background: 'var(--surface)', color: 'var(--text-primary)', borderRadius: '8px', border: '1px solid var(--border)', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'background 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'var(--surface)'}
                    >
                      <Video size={18} /> Book Video Consult
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {bookingStep === 2 && (
        <div className="worker-glass-panel p-8">
          <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
            <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Available Slots for Aug 12, 2026</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Please select a preferred time for your consultation with {selectedDoctor?.name}.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
            {['09:00 AM', '10:00 AM', '11:30 AM', '02:00 PM', '03:00 PM', '04:15 PM'].map((time) => (
              <button 
                key={time} 
                style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: '12px', color: 'var(--text-primary)', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)'; e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.color = '#3b82f6'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
              >
                {time}
              </button>
            ))}
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <button 
              onClick={() => setBookingStep(1)}
              style={{ padding: '0.75rem 2rem', background: 'transparent', color: 'var(--text-primary)', borderRadius: '99px', border: '1px solid var(--border)', fontWeight: 600, cursor: 'pointer' }}
            >
              Cancel
            </button>
            <button 
              onClick={handleConfirmSlot}
              style={{ padding: '0.75rem 2rem', background: '#3b82f6', color: '#fff', borderRadius: '99px', border: 'none', fontWeight: 600, cursor: 'pointer' }}
            >
              Confirm & Book
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
