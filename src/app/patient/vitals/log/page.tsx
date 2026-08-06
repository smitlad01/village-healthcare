'use client';

import React, { useState } from 'react';
import { HeartPulse, Droplet, Activity, Info, ChevronDown, CheckCircle, Share2, Award } from 'lucide-react';
import Link from 'next/link';

export default function LogVitalsPage() {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [glucose, setGlucose] = useState('');
  const [weight, setWeight] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: '100vh', padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
      
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', color: '#94a3b8', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
          <Link href="/patient" style={{ color: '#38bdf8', textDecoration: 'none' }}>Dashboard</Link> / 
          <Link href="/patient/history" style={{ color: '#38bdf8', textDecoration: 'none' }}>History</Link> / 
          <span>Log Vitals</span>
        </div>
        <h1 style={{ color: 'white', margin: 0, fontSize: '2rem' }}>Log Health Vitals</h1>
        <p style={{ color: '#94a3b8', margin: '0.5rem 0 0 0', fontSize: '1.1rem' }}>Enter your latest readings to keep your health record up to date.</p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '2.5rem', borderRadius: '24px' }}>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.25rem' }}>
              <HeartPulse color="#ef4444" /> Blood Pressure
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', color: '#94a3b8', marginBottom: '0.5rem' }}>Systolic (mmHg)</label>
                <input 
                  type="number" 
                  value={systolic}
                  onChange={(e) => setSystolic(e.target.value)}
                  placeholder="e.g. 120"
                  required
                  style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '1.1rem' }} 
                />
                <span style={{ fontSize: '0.8rem', color: '#10b981', marginTop: '0.5rem', display: 'block' }}>Normal: 90 - 120</span>
              </div>
              <div>
                <label style={{ display: 'block', color: '#94a3b8', marginBottom: '0.5rem' }}>Diastolic (mmHg)</label>
                <input 
                  type="number" 
                  value={diastolic}
                  onChange={(e) => setDiastolic(e.target.value)}
                  placeholder="e.g. 80"
                  required
                  style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '1.1rem' }} 
                />
                <span style={{ fontSize: '0.8rem', color: '#10b981', marginTop: '0.5rem', display: 'block' }}>Normal: 60 - 80</span>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.25rem' }}>
              <Droplet color="#38bdf8" /> Fasting Blood Glucose
            </h3>
            <div>
              <label style={{ display: 'block', color: '#94a3b8', marginBottom: '0.5rem' }}>Level (mg/dL)</label>
              <input 
                type="number" 
                value={glucose}
                onChange={(e) => setGlucose(e.target.value)}
                placeholder="e.g. 95"
                style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '1.1rem' }} 
              />
              <span style={{ fontSize: '0.8rem', color: '#10b981', marginTop: '0.5rem', display: 'block' }}>Normal: 70 - 100</span>
            </div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.25rem' }}>
              <Activity color="#f59e0b" /> Weight
            </h3>
            <div>
              <label style={{ display: 'block', color: '#94a3b8', marginBottom: '0.5rem' }}>Weight (kg)</label>
              <input 
                type="number" 
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 72"
                style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '1.1rem' }} 
              />
            </div>
          </div>

          <button type="submit" style={{ width: '100%', padding: '1.25rem', borderRadius: '12px', background: 'linear-gradient(90deg, #38bdf8, #8b5cf6)', color: 'white', fontSize: '1.25rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            Save Readings <CheckCircle size={24} />
          </button>
        </form>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', animation: 'fadeIn 0.5s ease-out' }}>
          <div className="glass-panel" style={{ padding: '3rem', borderRadius: '24px', textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', background: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'white' }}>
              <CheckCircle size={48} />
            </div>
            <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>Readings Saved Successfully!</h2>
            <p style={{ color: '#94a3b8', fontSize: '1.2rem', marginBottom: '2rem' }}>Your health records have been securely updated.</p>
            
            <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', padding: '1.5rem', borderRadius: '16px', display: 'inline-block', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#10b981', fontSize: '1.25rem', fontWeight: 'bold', justifyContent: 'center' }}>
                <Award /> +50 Health Points Earned!
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #f59e0b', background: 'linear-gradient(90deg, rgba(245,158,11,0.1) 0%, rgba(30,41,59,0.4) 100%)' }}>
            <h3 style={{ color: '#f59e0b', margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Info size={20} /> AI Instant Feedback
            </h3>
            <p style={{ color: '#e2e8f0', fontSize: '1.1rem', margin: 0, lineHeight: '1.5' }}>
              {Number(systolic) > 120 || Number(diastolic) > 80 
                ? `Your BP of ${systolic}/${diastolic} is slightly elevated. Ensure you are resting before taking a reading. We recommend checking again in a few hours.`
                : `Your BP of ${systolic}/${diastolic} is within the normal range. Great job maintaining your health!`
              }
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/patient/history" style={{ flex: 1, padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', color: 'white', textAlign: 'center', textDecoration: 'none', fontWeight: 'bold' }}>
              View History
            </Link>
            <button style={{ flex: 1, padding: '1rem', borderRadius: '12px', background: '#38bdf8', color: '#0f172a', textAlign: 'center', border: 'none', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <Share2 size={20} /> Share with Doctor
            </button>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .glass-panel {
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
      `}} />
    </div>
  );
}
