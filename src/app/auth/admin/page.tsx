'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldAlert, ShieldCheck, Lock } from 'lucide-react';
import '../../../styles/auth.css';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState('');
  const [role, setRole] = useState('district');

  const handleFirstStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setStep(2);
    }
  };

  const handleFinalStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp && role) {
      router.push('/admin/dashboard');
    }
  };

  return (
    <div className="auth-container">
      <div className="glass-card auth-card admin-card">
        <div className="auth-header">
          <ShieldAlert size={48} className="mx-auto mb-4" style={{color: 'var(--accent-purple)'}} />
          <h1 className="auth-title" style={{backgroundImage: 'linear-gradient(135deg, #a855f7 0%, #c084fc 100%)'}}>Govt Admin</h1>
          <p className="auth-subtitle">Restricted Access System</p>
        </div>

        {step === 1 ? (
          <form onSubmit={handleFirstStep} className="auth-form">
            <div className="input-group">
              <label htmlFor="email">Government Email (.gov.in)</label>
              <input
                type="email"
                id="email"
                className="auth-input"
                placeholder="officer@mohfw.gov.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Admin Password</label>
              <input
                type="password"
                id="password"
                className="auth-input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button 
              type="submit" 
              className="btn" 
              style={{ 
                width: '100%', 
                padding: '1rem', 
                fontSize: '1.1rem',
                background: 'var(--accent-purple)',
                color: 'white',
                border: 'none',
                marginTop: '1rem'
              }}
            >
              Continue to 2FA
            </button>
          </form>
        ) : (
          <form onSubmit={handleFinalStep} className="auth-form">
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <ShieldCheck size={32} style={{color: 'var(--accent-green)', margin: '0 auto 0.5rem'}} />
              <p style={{ color: 'var(--text-secondary)' }}>Enter the OTP sent to your registered secure device.</p>
            </div>

            <div className="input-group">
              <label htmlFor="otp">Security Token (6 Digits)</label>
              <input
                type="text"
                id="otp"
                className="auth-input"
                placeholder="000000"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                maxLength={6}
                style={{ letterSpacing: '0.5em', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'monospace' }}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="role">Access Level</label>
              <select 
                id="role"
                className="auth-input"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{ appearance: 'none' }}
              >
                <option value="district">District Health Officer (DHO)</option>
                <option value="state">State Health Secretary</option>
                <option value="national">National Ministry Viewer</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="btn" 
              style={{ 
                width: '100%', 
                padding: '1rem', 
                fontSize: '1.1rem',
                background: 'var(--accent-purple)',
                color: 'white',
                border: 'none',
                marginTop: '1rem'
              }}
            >
              Authenticate & Login
            </button>
          </form>
        )}

        <div style={{ 
          marginTop: '1.5rem', 
          padding: '1rem', 
          background: 'rgba(255,0,0,0.05)', 
          border: '1px solid rgba(255,0,0,0.2)',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.75rem'
        }}>
          <Lock size={20} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
            <strong>NOTICE:</strong> You are accessing a U.S. Government Information System. 
            All activities are logged and subject to audit. Unauthorized access is prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}
