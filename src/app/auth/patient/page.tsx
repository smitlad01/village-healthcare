'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Activity } from 'lucide-react';
import '../../../styles/auth.css';

export default function PatientLogin() {
  const router = useRouter();
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length >= 10) {
      setOtpSent(true);
      setTimeout(() => {
        inputRefs[0].current?.focus();
      }, 100);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.join('').length === 4) {
      router.push('/patient/dashboard');
    }
  };

  return (
    <div className="auth-container">
      <div className="glass-card auth-card">
        <div className="auth-header">
          <Activity size={48} className="text-accent mx-auto mb-4" style={{color: 'var(--accent-blue)'}} />
          <h1 className="auth-title">U-HAIN</h1>
          <p className="auth-subtitle">Patient Portal</p>
        </div>

        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="auth-form">
            <div className="input-group">
              <label htmlFor="mobile">Mobile Number</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', color: 'var(--text-secondary)' }}>
                  +91
                </div>
                <input
                  type="tel"
                  id="mobile"
                  className="auth-input"
                  placeholder="Enter 10-digit number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="auth-form">
            <div className="input-group">
              <label style={{ textAlign: 'center' }}>Enter OTP sent to +91 {mobile}</label>
              <div className="otp-container">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={inputRefs[index]}
                    type="text"
                    className="otp-input"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value.replace(/\D/g, ''))}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    maxLength={1}
                    required
                  />
                ))}
              </div>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
              Verify & Login
            </button>
            <button type="button" onClick={() => setOtpSent(false)} className="btn" style={{ background: 'transparent', color: 'var(--text-secondary)' }}>
              Change Mobile Number
            </button>
          </form>
        )}

        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <Link href="/auth/register" className="auth-link">
            New patient? Register here
          </Link>
        </div>
      </div>
    </div>
  );
}
