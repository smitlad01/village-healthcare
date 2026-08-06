'use client';

import React, { useState } from 'react';
import { Pill, Clock, AlertTriangle, CheckCircle2, ChevronDown, ChevronUp, Info, Activity } from 'lucide-react';

export default function PrescriptionsPage() {
  const [expandedDrug, setExpandedDrug] = useState(null);
  const [showPast, setShowPast] = useState(false);
  const [intakeStatus, setIntakeStatus] = useState({ morning1: true, morning2: true, night1: false, night2: false });

  const activeMeds = [
    { id: 1, name: 'Amlodipine 5mg', freq: 'Once daily (Morning)', doctor: 'Dr. Priya Sharma', since: 'Jun 15', duration: '3 months', remaining: 45 },
    { id: 2, name: 'Metformin 500mg', freq: 'Twice daily (Morning, Night)', doctor: 'Dr. Rajesh Patel', since: 'Jul 2023', duration: 'Ongoing', remaining: 5, alert: true },
    { id: 3, name: 'Aspirin 75mg', freq: 'Once daily (Night)', doctor: 'Dr. Priya Sharma', since: 'Dec 2023', duration: 'Ongoing', remaining: 60 }
  ];

  const pastPrescriptions = [
    { id: 4, date: 'Feb 10 2026', doctor: 'Dr. Rajesh Patel', meds: 'Amoxicillin 500mg, Paracetamol 650mg' },
    { id: 5, date: 'Nov 05 2025', doctor: 'Dr. Anita Desai', meds: 'Azithromycin 250mg, Cetirizine 10mg' },
    { id: 6, date: 'Aug 20 2025', doctor: 'Dr. Suresh Nair', meds: 'Vitamin D3 60000 IU' },
    { id: 7, date: 'Jan 15 2025', doctor: 'Dr. Priya Sharma', meds: 'Cough Syrup (Ascoril D)' },
  ];

  const toggleDrugInfo = (id: any) => setExpandedDrug(expandedDrug === id ? null : id);
  const toggleIntake = (key: any) => setIntakeStatus(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>My Prescriptions</h1>
        <p className="subtitle">Track medications and intake schedule</p>
      </header>

      {/* Refill Alert */}
      <div className="glass-card alert-card warning-gradient">
        <div className="alert-content">
          <AlertTriangle size={32} />
          <div>
            <h3>Refill Alert: Metformin 500mg</h3>
            <p>Only 5 days of medication remaining.</p>
          </div>
        </div>
        <div className="alert-actions">
          <button className="btn-primary">Request Refill</button>
          <button className="btn-outline">Find Pharmacy</button>
        </div>
      </div>

      {/* Daily Schedule */}
      <section className="schedule-section glass-panel">
        <div className="schedule-header">
          <h2>Today's Intake Schedule</h2>
          <div className="streak-badge">🔥 12 days perfect compliance!</div>
        </div>
        
        <div className="timeline">
          <div className="time-block">
            <div className="time-label"><Clock size={16}/> Morning (8 AM)</div>
            <div className="pills-list">
              <button className={`pill-btn ${intakeStatus.morning1 ? 'taken' : ''}`} onClick={() => toggleIntake('morning1')}>
                {intakeStatus.morning1 ? <CheckCircle2 size={18}/> : <Pill size={18}/>} Amlodipine 5mg
              </button>
              <button className={`pill-btn ${intakeStatus.morning2 ? 'taken' : ''}`} onClick={() => toggleIntake('morning2')}>
                {intakeStatus.morning2 ? <CheckCircle2 size={18}/> : <Pill size={18}/>} Metformin 500mg
              </button>
            </div>
          </div>
          <div className="time-block empty">
            <div className="time-label"><Clock size={16}/> Afternoon (2 PM)</div>
            <p className="no-meds">— none —</p>
          </div>
          <div className="time-block empty">
            <div className="time-label"><Clock size={16}/> Evening (6 PM)</div>
            <p className="no-meds">— none —</p>
          </div>
          <div className="time-block">
            <div className="time-label"><Clock size={16}/> Night (10 PM)</div>
            <div className="pills-list">
              <button className={`pill-btn pending ${intakeStatus.night1 ? 'taken' : ''}`} onClick={() => toggleIntake('night1')}>
                {intakeStatus.night1 ? <CheckCircle2 size={18}/> : <Clock size={18}/>} Aspirin 75mg
              </button>
              <button className={`pill-btn pending ${intakeStatus.night2 ? 'taken' : ''}`} onClick={() => toggleIntake('night2')}>
                {intakeStatus.night2 ? <CheckCircle2 size={18}/> : <Clock size={18}/>} Metformin 500mg
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Active Prescriptions */}
      <section className="active-meds-section">
        <h2 className="section-title">Active Prescriptions</h2>
        <div className="meds-grid">
          {activeMeds.map(med => (
            <div key={med.id} className="glass-card med-card">
              <div className="med-header" onClick={() => toggleDrugInfo(med.id)}>
                <div>
                  <h3>{med.name}</h3>
                  <p className="freq">{med.freq}</p>
                </div>
                {expandedDrug === med.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </div>
              <div className="med-details">
                <span><Activity size={16}/> {med.doctor}</span>
                <span>Since: {med.since}</span>
                <span>Duration: {med.duration}</span>
                <span className={med.alert ? 'text-warning' : 'text-success'}>
                  {med.remaining} days remaining
                </span>
              </div>
              
              {expandedDrug === med.id && (
                <div className="drug-info-panel glass-panel-inner">
                  <h4><Info size={16}/> Drug Information</h4>
                  <p><strong>Treats:</strong> Hypertension / Blood Pressure</p>
                  <p><strong>Common Side Effects:</strong> Dizziness, swelling ankles</p>
                  <p><strong>Warnings:</strong> Do not consume grapefruit juice.</p>
                  <p><strong>Generic:</strong> {med.name.split(' ')[0]}</p>
                  <div className="interaction-badge success">
                    <CheckCircle2 size={16}/> No interactions detected with your other medications.
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Past Prescriptions */}
      <section className="past-prescriptions-section mt-lg">
        <button className="collapsible-header glass-card" onClick={() => setShowPast(!showPast)}>
          <div className="header-content">
            <Activity size={24} />
            <h2>Past Prescriptions</h2>
          </div>
          {showPast ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
        
        {showPast && (
          <div className="collapsible-content glass-panel">
            {pastPrescriptions.map(pres => (
              <div key={pres.id} className="past-prescription-item">
                <div className="past-date">{pres.date}</div>
                <div className="past-doctor"><strong>{pres.doctor}</strong></div>
                <div className="past-meds">{pres.meds}</div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
