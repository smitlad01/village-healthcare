'use client';

import React, { useState } from 'react';
import { Calendar, Video, Home, MapPin, Clock, Star, Plus, ChevronDown, ChevronUp, User, Activity } from 'lucide-react';
import { useRouter } from 'next/navigation';

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
      typeColor: 'var(--teal-500)',
      icon: <Calendar className="icon" />
    },
    {
      id: 2,
      date: 'Aug 18, 2026',
      time: '10:00 AM',
      doctor: 'Dr. Anita Desai',
      specialization: 'General',
      type: 'Video',
      location: 'Teleconsult',
      typeColor: 'var(--blue-500)',
      icon: <Video className="icon" />
    },
    {
      id: 3,
      date: 'Aug 20, 2026',
      time: '9:00 AM',
      doctor: 'Meera Devi (ASHA)',
      specialization: 'Home Visit',
      type: 'Home',
      location: 'Patient Residence',
      typeColor: 'var(--green-500)',
      icon: <Home className="icon" />
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
    <div className="page-container">
      <header className="page-header">
        <h1>My Appointments</h1>
        <p className="subtitle">Manage your healthcare schedule</p>
      </header>

      <div className="cta-section">
        <button className="btn-primary large-cta glass-effect" onClick={() => router.push('/patient/appointments/book')}>
          <Plus size={24} />
          <span>Book New Appointment</span>
        </button>
      </div>

      <section className="appointments-section">
        <h2 className="section-title">Upcoming Appointments</h2>
        <div className="appointments-grid">
          {upcomingAppointments.map((apt) => (
            <div key={apt.id} className="glass-card appointment-card">
              <div className="card-header">
                <div className="badge" style={{ backgroundColor: apt.typeColor, color: '#fff' }}>
                  {apt.icon} {apt.type}
                </div>
                <span className="date-time"><Clock size={16} /> {apt.date} • {apt.time}</span>
              </div>
              <div className="card-body">
                <div className="doctor-info">
                  <div className="avatar-placeholder"><User size={24} /></div>
                  <div>
                    <h3>{apt.doctor}</h3>
                    <p className="specialization">{apt.specialization}</p>
                  </div>
                </div>
                <div className="location-info">
                  <MapPin size={16} /> {apt.location}
                </div>
              </div>
              <div className="card-actions">
                {apt.type === 'Video' ? (
                  <button className="btn-primary" onClick={() => router.push('/patient/teleconsult')}>Join Video Call</button>
                ) : apt.type === 'Home' ? (
                  <button className="btn-primary">Confirm</button>
                ) : (
                  <button className="btn-secondary">Get Directions</button>
                )}
                <button className="btn-outline">Reschedule</button>
                <button className="btn-danger-outline">Cancel</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="past-appointments-section">
        <button className="collapsible-header glass-card" onClick={() => setShowPast(!showPast)}>
          <div className="header-content">
            <Activity size={24} />
            <h2>Past Appointments</h2>
          </div>
          {showPast ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
        
        {showPast && (
          <div className="collapsible-content glass-panel">
            {pastAppointments.map(apt => (
              <div key={apt.id} className="past-appointment-item">
                <div className="past-date">{apt.date}</div>
                <div className="past-doctor">
                  <strong>{apt.doctor}</strong> ({apt.spec})
                </div>
                <div className="past-type">{apt.type}</div>
                <div className="past-summary">"{apt.summary}"</div>
                <div className="past-rating">
                  <Star size={16} className="star-icon filled" /> {apt.rating}
                </div>
                <div className="past-actions">
                  <button className="btn-small btn-outline">View Details</button>
                  <button className="btn-small btn-primary">Rate Doctor</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
