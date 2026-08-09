'use client';

import React, { useState } from 'react';
import { Calendar, Video, Home, MapPin, Clock, Star, Plus, ChevronDown, ChevronUp, User, Activity, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '@/styles/globals.css';
import '@/styles/worker.css';

export default function AppointmentsPage() {
  const router = useRouter();
  const [showPast, setShowPast] = useState(false);

  const upcomingAppointments = [
    {
      id: 1,
      date: 'Aug 12, 2026',
      time: '3:00 PM',
      doctor: 'Dr. Priya Sharma',
      specialization: 'Cardiology',
      type: 'Physical',
      location: 'PHC Nashik',
      typeColor: '#10b981',
      icon: <Calendar size={16} />
    },
    {
      id: 2,
      date: 'Aug 18, 2026',
      time: '10:00 AM',
      doctor: 'Dr. Anita Desai',
      specialization: 'General',
      type: 'Video',
      location: 'Teleconsult',
      typeColor: '#3b82f6',
      icon: <Video size={16} />
    },
    {
      id: 3,
      date: 'Aug 20, 2026',
      time: '9:00 AM',
      doctor: 'Meera Devi (ASHA)',
      specialization: 'Home Visit',
      type: 'Home',
      location: 'Patient Residence',
      typeColor: '#8b5cf6',
      icon: <Home size={16} />
    }
  ];

  const pastAppointments = [
    { id: 4, date: 'Jun 15 2026', doctor: 'Dr. Priya Sharma', spec: 'Cardiology', type: 'Physical', summary: 'BP review, medication adjusted', rating: 4.5 },
    { id: 5, date: 'May 02 2026', doctor: 'Dr. Rajesh Patel', spec: 'General', type: 'Video', summary: 'Viral fever consultation', rating: 4.8 },
    { id: 6, date: 'Mar 12 2026', doctor: 'Dr. Suresh Nair', spec: 'Endocrinology', type: 'Physical', summary: 'Quarterly diabetes checkup', rating: 4.9 },
    { id: 7, date: 'Jan 20 2026', doctor: 'Meera Devi', spec: 'Home Visit', type: 'Home', summary: 'Routine health screening', rating: 5.0 },
    { id: 8, date: 'Nov 15 2025', doctor: 'Dr. Anita Desai', spec: 'General', type: 'Video', summary: 'Follow-up on blood reports', rating: 4.5 },
  ];

  return (
    <div className="worker-container" style={{ minHeight: '100vh', padding: '2rem' }}>
      <Link href="/patient/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem', fontWeight: 600 }}>
        <ChevronLeft size={20} /> Back to Dashboard
      </Link>

      <header className="worker-header mb-8">
        <div>
          <h1 className="worker-title flex items-center gap-2">
            <Calendar color="#3b82f6" /> My Appointments
          </h1>
          <p className="mt-2 text-secondary" style={{ fontSize: '1.1rem' }}>Manage your healthcare schedule</p>
        </div>
        <button 
          onClick={() => router.push('/patient/appointments/book')}
          style={{
            padding: '0.75rem 1.5rem',
            background: '#3b82f6',
            color: '#fff',
            borderRadius: '99px',
            border: 'none',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer'
          }}
        >
          <Plus size={18} /> Book New Appointment
        </button>
      </header>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Upcoming Appointments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingAppointments.map((apt) => (
            <div key={apt.id} className="worker-glass-panel flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div style={{ background: `${apt.typeColor}20`, color: apt.typeColor, padding: '4px 10px', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {apt.icon} {apt.type}
                  </div>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={14} /> {apt.date} • {apt.time}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', color: 'var(--text-secondary)' }}>
                    <User size={24} />
                  </div>
                  <div>
                    <h3 style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1.1rem' }}>{apt.doctor}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{apt.specialization}</p>
                  </div>
                </div>

                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '1.5rem' }}>
                  <MapPin size={16} /> {apt.location}
                </div>
              </div>

              <div className="flex gap-2">
                {apt.type === 'Video' ? (
                  <button onClick={() => router.push('/patient/teleconsult')} style={{ flex: 1, padding: '0.5rem', background: '#3b82f6', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Join Video Call</button>
                ) : apt.type === 'Home' ? (
                  <button style={{ flex: 1, padding: '0.5rem', background: '#10b981', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Confirm</button>
                ) : (
                  <button style={{ flex: 1, padding: '0.5rem', background: 'var(--surface)', color: 'var(--text-primary)', borderRadius: '8px', border: '1px solid var(--border)', fontWeight: 600, cursor: 'pointer' }}>Get Directions</button>
                )}
                <button style={{ padding: '0.5rem 1rem', background: 'transparent', color: '#ef4444', borderRadius: '8px', border: '1px solid rgba(239,68,68,0.3)', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <button 
          onClick={() => setShowPast(!showPast)}
          className="worker-glass-panel"
          style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '1.5rem', border: '1px solid var(--border)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Activity color="#8b5cf6" size={24} />
            <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)', margin: 0 }}>Past Appointments</h2>
          </div>
          {showPast ? <ChevronUp size={24} color="var(--text-secondary)" /> : <ChevronDown size={24} color="var(--text-secondary)" />}
        </button>
        
        {showPast && (
          <div className="worker-glass-panel" style={{ marginTop: '1rem', padding: 0, overflow: 'hidden' }}>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
              <thead style={{ background: 'rgba(255, 255, 255, 0.05)', borderBottom: '1px solid var(--border)' }}>
                <tr>
                  <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Date</th>
                  <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Doctor</th>
                  <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Type</th>
                  <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Summary</th>
                  <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Rating</th>
                </tr>
              </thead>
              <tbody>
                {pastAppointments.map((apt, idx) => (
                  <tr key={apt.id} style={{ borderBottom: idx !== pastAppointments.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{apt.date}</td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ color: 'var(--text-primary)', fontWeight: 600, display: 'block' }}>{apt.doctor}</span>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{apt.spec}</span>
                    </td>
                    <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{apt.type}</td>
                    <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>"{apt.summary}"</td>
                    <td style={{ padding: '1rem', color: '#f59e0b', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Star size={16} fill="#f59e0b" /> {apt.rating}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
