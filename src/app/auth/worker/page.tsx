'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Users, MapPin, PhoneCall } from 'lucide-react';
import '../../../styles/auth.css';

export default function WorkerLogin() {
  const router = useRouter();
  const [empId, setEmpId] = useState('');
  const [pin, setPin] = useState('');
  const [preview, setPreview] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (empId && pin) {
      if (!preview) {
        setPreview(true);
      } else {
        router.push('/worker/dashboard');
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="glass-card auth-card worker-card">
        <div className="auth-header">
          <Users size={48} className="mx-auto mb-4" style={{color: 'var(--accent-green)'}} />
          <h1 className="auth-title" style={{backgroundImage: 'var(--gradient-success)'}}>ASHA / ANM</h1>
          <p className="auth-subtitle">Field Worker Portal</p>
        </div>

        <form onSubmit={handleLogin} className="auth-form">
          <div className="input-group">
            <label htmlFor="empId">Employee ID</label>
            <input
              type="text"
              id="empId"
              className="auth-input"
              placeholder="e.g. AW-8472"
              value={empId}
              onChange={(e) => setEmpId(e.target.value)}
              disabled={preview}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="pin">4-Digit PIN</label>
            <input
              type="password"
              id="pin"
              className="auth-input"
              placeholder="••••"
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
              maxLength={4}
              disabled={preview}
              required
              style={{ letterSpacing: '0.5em', fontSize: '1.5rem', fontFamily: 'monospace' }}
            />
          </div>

          {preview && (
            <div className="preview-badge">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-green)' }}>
                <MapPin size={18} />
                <span style={{ fontWeight: 600 }}>Assigned Region Confirmed</span>
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Zone: Palampur<br />
                Block: Kangra<br />
                State: Himachal Pradesh
              </div>
            </div>
          )}

          <button 
            type="submit" 
            className="btn" 
            style={{ 
              width: '100%', 
              padding: '1rem', 
              fontSize: '1.1rem',
              background: 'var(--accent-green)',
              color: 'white',
              border: 'none',
              marginTop: '1rem'
            }}
          >
            {preview ? 'Proceed to Dashboard' : 'Login'}
          </button>
        </form>

        <div className="helpline">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <PhoneCall size={16} />
            <span>Worker Support Helpline</span>
          </div>
          <strong style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>1800-11-2233</strong>
        </div>
      </div>
    </div>
  );
}
