'use client';

import React, { useState } from 'react';
import { Pill, Clock, AlertTriangle, CheckCircle2, ChevronDown, ChevronUp, Info, Activity, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import '@/styles/globals.css';
import '@/styles/worker.css';

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
    <div className="worker-container" style={{ minHeight: '100vh', padding: '2rem' }}>
      <Link href="/patient/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem', fontWeight: 600 }}>
        <ChevronLeft size={20} /> Back to Dashboard
      </Link>

      <header className="worker-header mb-8">
        <div>
          <h1 className="worker-title flex items-center gap-2">
            <Pill color="#10b981" /> My Prescriptions
          </h1>
          <p className="mt-2 text-secondary" style={{ fontSize: '1.1rem' }}>Track medications and intake schedule</p>
        </div>
      </header>

      {/* Refill Alert */}
      <div className="worker-glass-panel mb-8" style={{ border: '1px solid rgba(245, 158, 11, 0.4)', background: 'rgba(245, 158, 11, 0.05)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
          <AlertTriangle color="#f59e0b" size={32} />
          <div>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.5rem 0' }}>Refill Alert: Metformin 500mg</h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Only 5 days of medication remaining.</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
          <button style={{ padding: '0.5rem 1.5rem', background: '#f59e0b', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Request Refill</button>
          <button style={{ padding: '0.5rem 1.5rem', background: 'transparent', color: 'var(--text-primary)', borderRadius: '8px', border: '1px solid var(--border)', fontWeight: 600, cursor: 'pointer' }}>Find Pharmacy</button>
        </div>
      </div>

      {/* Daily Schedule */}
      <section className="worker-glass-panel mb-12">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Today's Intake Schedule</h2>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '4px 12px', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 600 }}>
            🔥 12 days perfect compliance!
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '1rem' }}><Clock size={16}/> Morning (8 AM)</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <button 
                onClick={() => toggleIntake('morning1')}
                style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', borderRadius: '8px', border: intakeStatus.morning1 ? '1px solid #10b981' : '1px solid var(--border)', background: intakeStatus.morning1 ? 'rgba(16,185,129,0.1)' : 'var(--surface)', color: intakeStatus.morning1 ? '#10b981' : 'var(--text-primary)', cursor: 'pointer', textAlign: 'left', fontWeight: 600, transition: 'all 0.2s' }}
              >
                {intakeStatus.morning1 ? <CheckCircle2 size={18}/> : <Pill size={18}/>} Amlodipine 5mg
              </button>
              <button 
                onClick={() => toggleIntake('morning2')}
                style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', borderRadius: '8px', border: intakeStatus.morning2 ? '1px solid #10b981' : '1px solid var(--border)', background: intakeStatus.morning2 ? 'rgba(16,185,129,0.1)' : 'var(--surface)', color: intakeStatus.morning2 ? '#10b981' : 'var(--text-primary)', cursor: 'pointer', textAlign: 'left', fontWeight: 600, transition: 'all 0.2s' }}
              >
                {intakeStatus.morning2 ? <CheckCircle2 size={18}/> : <Pill size={18}/>} Metformin 500mg
              </button>
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)', opacity: 0.5 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '1rem' }}><Clock size={16}/> Afternoon (2 PM)</div>
            <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', margin: 0, textAlign: 'center' }}>— none —</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)', opacity: 0.5 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '1rem' }}><Clock size={16}/> Evening (6 PM)</div>
            <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', margin: 0, textAlign: 'center' }}>— none —</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '1rem' }}><Clock size={16}/> Night (10 PM)</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <button 
                onClick={() => toggleIntake('night1')}
                style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', borderRadius: '8px', border: intakeStatus.night1 ? '1px solid #10b981' : '1px solid var(--border)', background: intakeStatus.night1 ? 'rgba(16,185,129,0.1)' : 'var(--surface)', color: intakeStatus.night1 ? '#10b981' : 'var(--text-primary)', cursor: 'pointer', textAlign: 'left', fontWeight: 600, transition: 'all 0.2s' }}
              >
                {intakeStatus.night1 ? <CheckCircle2 size={18}/> : <Clock size={18}/>} Aspirin 75mg
              </button>
              <button 
                onClick={() => toggleIntake('night2')}
                style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', borderRadius: '8px', border: intakeStatus.night2 ? '1px solid #10b981' : '1px solid var(--border)', background: intakeStatus.night2 ? 'rgba(16,185,129,0.1)' : 'var(--surface)', color: intakeStatus.night2 ? '#10b981' : 'var(--text-primary)', cursor: 'pointer', textAlign: 'left', fontWeight: 600, transition: 'all 0.2s' }}
              >
                {intakeStatus.night2 ? <CheckCircle2 size={18}/> : <Clock size={18}/>} Metformin 500mg
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Active Prescriptions */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Active Prescriptions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeMeds.map(med => (
            <div key={med.id} className="worker-glass-panel flex flex-col justify-between" style={{ padding: '1.5rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', cursor: 'pointer' }} onClick={() => toggleDrugInfo(med.id)}>
                  <div>
                    <h3 style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1.2rem', margin: '0 0 4px 0' }}>{med.name}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>{med.freq}</p>
                  </div>
                  {expandedDrug === med.id ? <ChevronUp size={20} color="var(--text-secondary)" /> : <ChevronDown size={20} color="var(--text-secondary)" />}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}><Activity size={14}/> {med.doctor}</span>
                  <span style={{ color: 'var(--text-secondary)' }}>Since: <strong style={{ color: 'var(--text-primary)' }}>{med.since}</strong></span>
                  <span style={{ color: 'var(--text-secondary)' }}>Duration: <strong style={{ color: 'var(--text-primary)' }}>{med.duration}</strong></span>
                  <span style={{ color: med.alert ? '#f59e0b' : '#10b981', fontWeight: 600, marginTop: '4px' }}>
                    {med.remaining} days remaining
                  </span>
                </div>
              </div>
              
              {expandedDrug === med.id && (
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1rem' }}><Info size={16}/> Drug Information</h4>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <p style={{ margin: 0 }}><strong>Treats:</strong> Hypertension / Blood Pressure</p>
                    <p style={{ margin: 0 }}><strong>Common Side Effects:</strong> Dizziness, swelling ankles</p>
                    <p style={{ margin: 0 }}><strong>Warnings:</strong> Do not consume grapefruit juice.</p>
                    <p style={{ margin: 0 }}><strong>Generic:</strong> {med.name.split(' ')[0]}</p>
                  </div>
                  <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', color: '#10b981', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={16}/> No interactions detected.
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Past Prescriptions */}
      <section>
        <button 
          onClick={() => setShowPast(!showPast)}
          className="worker-glass-panel"
          style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '1.5rem', border: '1px solid var(--border)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Activity color="#8b5cf6" size={24} />
            <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)', margin: 0 }}>Past Prescriptions</h2>
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
                  <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Medications prescribed</th>
                </tr>
              </thead>
              <tbody>
                {pastPrescriptions.map((pres, idx) => (
                  <tr key={pres.id} style={{ borderBottom: idx !== pastPrescriptions.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{pres.date}</td>
                    <td style={{ padding: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>{pres.doctor}</td>
                    <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{pres.meds}</td>
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
