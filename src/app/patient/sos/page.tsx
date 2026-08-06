'use client';

import React, { useState } from 'react';
import { PhoneCall, MapPin, Navigation, HeartPulse, AlertOctagon, Flame, Droplet, Wind, User, ShieldAlert } from 'lucide-react';

export default function SOSPage() {
  const [expandedGuide, setExpandedGuide] = useState(null);

  const toggleGuide = (id: any) => setExpandedGuide(expandedGuide === id ? null : id);

  return (
    <div className="page-container sos-theme">
      <header className="page-header text-center">
        <h1>Emergency SOS</h1>
        <p className="subtitle">Immediate assistance and medical guidance</p>
      </header>

      {/* Main SOS Button */}
      <div className="sos-action-area">
        <button className="massive-sos-btn pulse-anim-intense">
          <PhoneCall size={40} className="shake-anim" />
          <span>CALL 108 AMBULANCE</span>
        </button>
      </div>

      {/* Location Bar */}
      <div className="glass-panel location-panel mt-lg">
        <MapPin size={24} className="text-danger" />
        <div className="location-details">
          <strong>Your Current Location</strong>
          <p>Lat: 20.7453, Lng: 78.6022 — Wardha, Maharashtra</p>
        </div>
      </div>

      {/* Emergency Contacts */}
      <section className="emergency-contacts mt-lg">
        <h2 className="section-title">Emergency Contacts</h2>
        <div className="contacts-grid">
          <button className="glass-button contact-btn">
            <div className="contact-info">
              <User size={20}/>
              <span>Sita Devi (Wife)</span>
            </div>
            <PhoneCall size={18} className="text-success" />
          </button>
          <button className="glass-button contact-btn">
            <div className="contact-info">
              <User size={20}/>
              <span>Rajesh Kumar (Son)</span>
            </div>
            <PhoneCall size={18} className="text-success" />
          </button>
          <button className="glass-button contact-btn asha-btn">
            <div className="contact-info">
              <ShieldAlert size={20}/>
              <span>Meera Devi (ASHA)</span>
            </div>
            <span className="call-now-badge">Call Now</span>
          </button>
        </div>
      </section>

      {/* Nearest Facilities */}
      <section className="nearest-facilities mt-lg">
        <h2 className="section-title">Nearest Facilities</h2>
        <div className="facilities-list">
          {[
            { name: 'PHC Wardha', dist: '1.2 km', type: 'Public' },
            { name: 'Shri Hospital', dist: '3.1 km', type: 'Private' },
            { name: 'District Hospital', dist: '4.5 km', type: 'Public' }
          ].map((fac, idx) => (
            <div key={idx} className="glass-card facility-card">
              <div className="fac-info">
                <h3>{fac.name}</h3>
                <p>{fac.dist} • {fac.type}</p>
              </div>
              <div className="fac-actions">
                <button className="btn-small btn-primary"><PhoneCall size={16}/> Call</button>
                <button className="btn-small btn-secondary"><Navigation size={16}/> Directions</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* First Aid Guides */}
      <section className="first-aid-section mt-xl">
        <h2 className="section-title">First Aid Guides</h2>
        <div className="guides-accordion">
          {[
            { id: 1, title: 'Heart Attack', icon: <HeartPulse size={24} className="text-danger"/>, steps: ['Have the person sit down, rest, and try to keep calm.', 'Loosen any tight clothing.', 'Ask if they take any chest pain medicine (like nitroglycerin) and help them take it.', 'If pain does not go away, call ambulance immediately.'] },
            { id: 2, title: 'Snake Bite', icon: <AlertOctagon size={24} className="text-warning"/>, steps: ['Keep the person calm and still to slow the spread of venom.', 'Remove any jewelry or tight clothing near the bite.', 'Position the bitten area at or below the level of the heart.', 'Do NOT try to suck the venom out or apply a tourniquet. Seek immediate medical help.'] },
            { id: 3, title: 'Burn', icon: <Flame size={24} className="text-orange"/>, steps: ['Cool the burn under cold running water for at least 10 minutes.', 'Remove rings or tight items from the burned area.', 'Do NOT break blisters or apply butter/ointments.', 'Cover with a clean, dry, sterile dressing.'] },
            { id: 4, title: 'Choking', icon: <Wind size={24} className="text-blue"/>, steps: ['Stand behind the person and wrap arms around their waist.', 'Make a fist and place it just above the navel.', 'Grab the fist with your other hand and give quick, upward thrusts (Heimlich maneuver).'] }
          ].map(guide => (
            <div key={guide.id} className="glass-card guide-card mb-sm">
              <button className="guide-header" onClick={() => toggleGuide(guide.id)}>
                <div className="guide-title">{guide.icon} <h3>{guide.title}</h3></div>
                <span className="expand-icon">{expandedGuide === guide.id ? '−' : '+'}</span>
              </button>
              {expandedGuide === guide.id && (
                <div className="guide-content">
                  <ol>
                    {guide.steps.map((step, idx) => <li key={idx}>{step}</li>)}
                  </ol>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
