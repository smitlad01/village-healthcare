'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Users, Clock, Play, SkipForward, AlertTriangle, 
  Volume2, VolumeX, CheckCircle, Video
} from 'lucide-react';
import '../../../styles/doctor.css';

export default function QueueManagement() {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const initialQueue = [
    { id: 41, name: 'Ramesh Kumar', type: 'Follow-up', condition: 'BP', status: 'in-consultation', waitTime: '0 min', urgent: false },
    { id: 42, name: 'Sunita Bai', type: 'New', condition: 'Fever & Cough', status: 'waiting', waitTime: '15 min', urgent: false },
    { id: 43, name: 'Govind Rao', type: 'Follow-up', condition: 'Arthritis', status: 'waiting', waitTime: '30 min', urgent: false },
    { id: 44, name: 'Priya Kumari', type: 'Report Review', condition: 'Thyroid', status: 'waiting', waitTime: '45 min', urgent: false },
    { id: 45, name: 'Lakshmi Devi', type: 'Telemedicine', condition: 'Skin Rash', status: 'scheduled', waitTime: '2:30 PM', urgent: false, isVideo: true },
    { id: 46, name: 'Abdul Khan', type: 'New', condition: 'Stomach Ache', status: 'waiting', waitTime: '65 min', urgent: false },
    { id: 47, name: 'Meera', type: 'Follow-up', condition: 'Diabetes', status: 'waiting', waitTime: '80 min', urgent: false },
    { id: 48, name: 'Suresh Patil', type: 'Emergency', condition: 'Chest Pain', status: 'waiting', waitTime: 'Immediate', urgent: true },
  ];

  const [queue, setQueue] = useState(initialQueue);

  const handleUrgent = (id: number) => {
    const itemIndex = queue.findIndex(q => q.id === id);
    if (itemIndex > -1) {
      const newQueue = [...queue];
      const item = newQueue.splice(itemIndex, 1)[0];
      // Move right after the one in consultation
      const insertIndex = newQueue.findIndex(q => q.status === 'waiting');
      newQueue.splice(insertIndex > -1 ? insertIndex : 0, 0, item);
      setQueue(newQueue);
    }
  };

  return (
    <div className="doctor-container">
      <div className="panel-header" style={{ marginBottom: '2rem' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Users size={32} /> Queue Management
          </h1>
          <p style={{ color: 'var(--text-secondary)', margin: '0.5rem 0 0 0' }}>Manage patient flow and wait times</p>
        </div>
        <button 
          className="action-btn secondary" 
          onClick={() => setSoundEnabled(!soundEnabled)}
          style={{ padding: '0.75rem' }}
        >
          {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          {soundEnabled ? ' Chime ON' : ' Chime OFF'}
        </button>
      </div>

      <div className="panel" style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'var(--surface-dark)', borderBottom: '1px solid var(--glass-border)', textAlign: 'left' }}>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Token</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Patient</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Visit Type</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Condition</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Wait Time</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Status</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 500, textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {queue.map((patient) => (
              <tr 
                key={patient.id} 
                style={{ 
                  borderBottom: '1px solid var(--glass-border)',
                  background: patient.status === 'in-consultation' ? 'rgba(0, 240, 255, 0.05)' : patient.urgent ? 'rgba(255, 71, 87, 0.05)' : 'transparent',
                  transition: 'background 0.3s'
                }}
              >
                <td style={{ padding: '1rem 1.5rem' }}>
                  <div className="token-circle" style={{ 
                    width: 40, height: 40, fontSize: '1rem',
                    background: patient.isVideo ? 'rgba(0, 123, 255, 0.1)' : 'var(--surface-dark)',
                    color: patient.isVideo ? '#007BFF' : 'inherit',
                    borderColor: patient.urgent ? 'var(--status-error)' : 'var(--glass-border)'
                  }}>
                    {patient.isVideo ? <Video size={18} /> : patient.id}
                  </div>
                </td>
                <td style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>{patient.name}</td>
                <td style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>{patient.type}</td>
                <td style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>{patient.condition}</td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: patient.urgent ? 'var(--status-error)' : 'inherit' }}>
                    <Clock size={16} /> {patient.waitTime}
                  </span>
                </td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <div className={`status-badge ${patient.status}`}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'currentColor' }}></div>
                    {patient.status.replace('-', ' ')}
                  </div>
                </td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                    {patient.status === 'in-consultation' ? (
                      <Link href="/doctor/patients" className="action-btn">
                        <Play size={16} /> Open Chart
                      </Link>
                    ) : (
                      <>
                        <button className="action-btn secondary" title="Skip">
                          <SkipForward size={16} />
                        </button>
                        {!patient.urgent && patient.status === 'waiting' && (
                          <button className="action-btn danger" title="Mark Urgent" onClick={() => handleUrgent(patient.id)}>
                            <AlertTriangle size={16} />
                          </button>
                        )}
                        <button className="action-btn" title="Start Consultation">
                          <Play size={16} /> Start
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="panel" style={{ marginTop: '2rem' }}>
        <h2 className="panel-title" style={{ marginBottom: '1rem' }}><CheckCircle size={20} /> Completed Today (32)</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Tokens 1 to 40 have been completed. 2 No-shows.</p>
      </div>
    </div>
  );
}
