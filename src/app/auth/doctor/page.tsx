'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Stethoscope, Eye, EyeOff, Activity } from 'lucide-react';
import '../../../styles/auth.css';

export default function DoctorLogin() {
  const router = useRouter();
  const [license, setLicense] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [preview, setPreview] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (license && password) {
      if (!preview) {
        setPreview(true);
      } else {
        router.push('/doctor/dashboard');
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="glass-card auth-card doctor-card">
        <div className="auth-header">
          <Stethoscope size={48} className="mx-auto mb-4" style={{color: 'var(--accent-blue)'}} />
          <h1 className="auth-title">Doctor Portal</h1>
          <p className="auth-subtitle">Telemedicine Network</p>
        </div>

        <form onSubmit={handleLogin} className="auth-form">
          <div className="input-group">
            <label htmlFor="license">Medical License Number</label>
            <input
              type="text"
              id="license"
              className="auth-input"
              placeholder="e.g. MCI-12345"
              value={license}
              onChange={(e) => setLicense(e.target.value)}
              disabled={preview}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="auth-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={preview}
                required
              />
              <button 
                type="button" 
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                disabled={preview}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {preview && (
            <div className="preview-badge">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-blue)' }}>
                <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Dr. A. Sharma, MD (General Medicine)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                <Activity size={16} color="var(--accent-green)" />
                <span>Active Consultations Pending: 3</span>
              </div>
            </div>
          )}

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ 
              width: '100%', 
              padding: '1rem', 
              fontSize: '1.1rem',
              marginTop: '1rem'
            }}
          >
            {preview ? 'Enter Teleclinic' : 'Secure Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
