'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check, User, MapPin, Download, ChevronRight, ChevronLeft } from 'lucide-react';
import '../../../styles/auth.css';

export default function RegisterWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const totalSteps = 7;

  // Form State
  const [gender, setGender] = useState('');
  const [lang, setLang] = useState('hi');
  const [conditions, setConditions] = useState<string[]>([]);
  const [consents, setConsents] = useState({ data: false, tele: false, ai: false });

  const languages = [
    { code: 'hi', native: 'हिन्दी', en: 'Hindi' },
    { code: 'en', native: 'English', en: 'English' },
    { code: 'bn', native: 'বাংলা', en: 'Bengali' },
    { code: 'te', native: 'తెలుగు', en: 'Telugu' },
    { code: 'mr', native: 'मराठी', en: 'Marathi' },
    { code: 'ta', native: 'தமிழ்', en: 'Tamil' },
    { code: 'gu', native: 'ગુજરાતી', en: 'Gujarati' },
    { code: 'kn', native: 'ಕನ್ನಡ', en: 'Kannada' }
  ];

  const toggleCondition = (c: string) => {
    if (c === 'None') {
      setConditions(['None']);
    } else {
      let newConds = conditions.filter(cond => cond !== 'None');
      if (newConds.includes(c)) {
        newConds = newConds.filter(cond => cond !== c);
      } else {
        newConds.push(c);
      }
      setConditions(newConds);
    }
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const isConsentValid = consents.data && consents.tele && consents.ai;

  return (
    <div className="auth-container" style={{ padding: '2rem 1rem' }}>
      <div className="glass-card auth-card wizard-card">
        {/* Progress Indicator */}
        <div className="wizard-steps">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div 
              key={i} 
              className={`step-indicator ${step === i + 1 ? 'active' : ''} ${step > i + 1 ? 'completed' : ''}`}
            >
              {step > i + 1 ? <Check size={16} /> : (i + 1)}
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="auth-header" style={{ marginBottom: '2rem' }}>
          <h1 className="auth-title">
            {step === 1 && "Personal Information"}
            {step === 2 && "Contact Details"}
            {step === 3 && "Language & Accessibility"}
            {step === 4 && "Health Profile"}
            {step === 5 && "Nearest Health Worker"}
            {step === 6 && "Consent & Privacy"}
            {step === 7 && "Registration Complete"}
          </h1>
        </div>

        {/* Step Content */}
        <div className="wizard-content">
          
          {step === 1 && (
            <>
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" className="auth-input" placeholder="e.g. Ramesh Kumar" />
              </div>
              <div className="input-group">
                <label>Date of Birth</label>
                <input type="date" className="auth-input" />
              </div>
              <div className="input-group">
                <label>Gender</label>
                <div className="radio-group">
                  {['Male', 'Female', 'Other'].map(g => (
                    <div 
                      key={g} 
                      className={`radio-card ${gender === g ? 'selected' : ''}`}
                      onClick={() => setGender(g)}
                    >
                      {g}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid-2">
                <div className="input-group">
                  <label>Village Name</label>
                  <input type="text" className="auth-input" />
                </div>
                <div className="input-group">
                  <label>Block / Tehsil</label>
                  <input type="text" className="auth-input" />
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="input-group">
                <label>Mobile Number</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', color: 'var(--text-secondary)' }}>+91</div>
                  <input type="tel" className="auth-input" placeholder="10-digit number" />
                </div>
              </div>
              <div className="input-group">
                <label>Aadhaar Number (Optional)</label>
                <input type="text" className="auth-input" placeholder="XXXX-XXXX-1234" maxLength={14} />
              </div>
              <div className="grid-2">
                <div className="input-group">
                  <label>Emergency Contact Name</label>
                  <input type="text" className="auth-input" />
                </div>
                <div className="input-group">
                  <label>Emergency Contact Number</label>
                  <input type="tel" className="auth-input" />
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="input-group" style={{ marginBottom: '1rem' }}>
                <label>Preferred Language</label>
                <div className="lang-grid">
                  {languages.map(l => (
                    <div 
                      key={l.code}
                      className={`lang-card ${lang === l.code ? 'selected' : ''}`}
                      onClick={() => setLang(l.code)}
                    >
                      <div className="lang-native">{l.native}</div>
                      <div className="lang-english">{l.en}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="toggle-group">
                <div>
                  <div style={{ fontWeight: 500, fontSize: '1.1rem' }}>Large Text Mode</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Makes all text bigger and easier to read</div>
                </div>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="toggle-group">
                <div>
                  <div style={{ fontWeight: 500, fontSize: '1.1rem' }}>Voice Reading Mode</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>App will read text aloud in {languages.find(l => l.code === lang)?.en}</div>
                </div>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <div className="input-group">
                <label>Known Health Conditions (Select all that apply)</label>
                <div className="checkbox-grid">
                  {['Diabetes', 'Hypertension', 'Heart Disease', 'Asthma', 'TB', 'Thyroid', 'Arthritis', 'None'].map(c => (
                    <label key={c} className="checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={conditions.includes(c)}
                        onChange={() => toggleCondition(c)}
                      />
                      <span>{c}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="grid-2">
                <div className="input-group">
                  <label>Allergies (if any)</label>
                  <input type="text" className="auth-input" placeholder="e.g. Peanuts, Penicillin" />
                </div>
                <div className="input-group">
                  <label>Blood Group</label>
                  <select className="auth-input" style={{ appearance: 'none', background: 'rgba(255,255,255,0.03)' }}>
                    <option value="">Select...</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {step === 5 && (
            <>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Based on your location, we have assigned you to the nearest health worker.</p>
              
              <div className="map-placeholder">
                <MapPin size={32} color="var(--accent-red)" style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                <span style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '0.8rem', background: 'rgba(0,0,0,0.5)', padding: '2px 6px', borderRadius: '4px' }}>Map View Simulated</span>
              </div>

              <div className="asha-card">
                <div className="asha-avatar">S</div>
                <div className="asha-info" style={{ flex: 1 }}>
                  <h4>Sunita Devi</h4>
                  <p>ASHA Worker • Palampur Block</p>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem', color: 'var(--text-primary)' }}>
                    📞 +91 98765 43210
                  </p>
                </div>
              </div>
              
              <button className="btn" style={{ background: 'transparent', border: '1px solid var(--glass-border)', alignSelf: 'flex-start' }}>
                Change Assigned Worker
              </button>
            </>
          )}

          {step === 6 && (
            <>
              <div className="consent-box">
                <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Data Privacy & Usage Policy</h4>
                <p>Welcome to V-HAIN. By registering, you agree that your health data will be collected, stored securely, and used to provide telemedicine and healthcare services.</p>
                <p>Your data may be accessed by authorized ASHA workers, doctors, and government officials for your treatment and public health monitoring.</p>
                <p>AI algorithms may analyze your anonymized data to provide predictive health insights. You have the right to request deletion of your records subject to government regulations.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <label className="checkbox-label" style={{ background: 'transparent', padding: '0.5rem 0', border: 'none' }}>
                  <input type="checkbox" checked={consents.data} onChange={e => setConsents({...consents, data: e.target.checked})} />
                  <span style={{ fontSize: '1.1rem' }}>I consent to the collection and secure storage of my health data.</span>
                </label>
                <label className="checkbox-label" style={{ background: 'transparent', padding: '0.5rem 0', border: 'none' }}>
                  <input type="checkbox" checked={consents.tele} onChange={e => setConsents({...consents, tele: e.target.checked})} />
                  <span style={{ fontSize: '1.1rem' }}>I consent to participate in telemedicine consultations.</span>
                </label>
                <label className="checkbox-label" style={{ background: 'transparent', padding: '0.5rem 0', border: 'none' }}>
                  <input type="checkbox" checked={consents.ai} onChange={e => setConsents({...consents, ai: e.target.checked})} />
                  <span style={{ fontSize: '1.1rem' }}>I consent to AI-assisted analysis of my symptoms for better care.</span>
                </label>
              </div>
            </>
          )}

          {step === 7 && (
            <div className="success-container">
              <div className="success-icon">
                <Check size={40} />
              </div>
              <h2 className="success-title">Your Health Card has been generated!</h2>
              
              <div className="health-card-preview">
                <div className="health-card-header">
                  <div className="health-card-logo">
                    <User size={20} className="text-accent" /> V-HAIN
                  </div>
                  <div className="blood-group-badge">O+</div>
                </div>
                
                <div className="health-card-body">
                  <div className="patient-photo">Photo</div>
                  <div className="patient-details">
                    <h3 className="patient-name">Ramesh Kumar</h3>
                    <p className="patient-id">ID: VH-9472-8163</p>
                    <div className="patient-meta">
                      <div>DOB: <span>12/05/1980</span></div>
                      <div>Gender: <span>Male</span></div>
                      <div>Village: <span>Palampur</span></div>
                      <div>State: <span>HP</span></div>
                    </div>
                  </div>
                  <div className="qr-code">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=VH-9472-8163" alt="QR" style={{width: '100%', height: '100%', opacity: 0.5}} />
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button className="btn" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid var(--glass-border)' }}>
                  <Download size={18} style={{ marginRight: '0.5rem' }} /> Download Card
                </button>
                <button className="btn btn-primary" onClick={() => router.push('/patient/dashboard')}>
                  Go to Dashboard
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Navigation */}
        {step < 7 && (
          <div className="wizard-nav">
            <button 
              className="btn" 
              style={{ background: 'transparent', border: '1px solid var(--glass-border)', opacity: step === 1 ? 0.3 : 1, pointerEvents: step === 1 ? 'none' : 'auto' }}
              onClick={prevStep}
            >
              <ChevronLeft size={20} /> Back
            </button>
            
            <button 
              className="btn btn-primary" 
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              onClick={nextStep}
              disabled={step === 6 && !isConsentValid}
            >
              {step === 6 ? 'Complete Registration' : 'Continue'} <ChevronRight size={20} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
