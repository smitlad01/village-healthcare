'use client';

import React, { useState, useEffect } from 'react';
import { Video, Clock, Users, Activity, Stethoscope, Baby, Brain, Shield, X } from 'lucide-react';
import '@/styles/community.css';

const queueCategories = [
  { id: 'general', name: 'General Physician', icon: Stethoscope, online: 3, wait: 8 },
  { id: 'pediatric', name: 'Pediatric', icon: Baby, online: 1, wait: 15 },
  { id: 'gynecology', name: 'Gynecology', icon: Users, online: 2, wait: 5 },
  { id: 'chronic', name: 'Chronic Disease', icon: Activity, online: 1, wait: 12 },
  { id: 'mental', name: 'Mental Health', icon: Brain, online: 1, wait: 20 },
];

export default function TelemedicineQueuePage() {
  const [joinedQueue, setJoinedQueue] = useState<string | null>(null);
  const [waitTimer, setWaitTimer] = useState(0);
  const [queuePosition, setQueuePosition] = useState(3);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (joinedQueue) {
      interval = setInterval(() => {
        setWaitTimer(prev => {
          if (prev > 0 && prev % 60 === 0 && queuePosition > 1) {
            setQueuePosition(p => p - 1);
          }
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [joinedQueue, queuePosition]);

  const handleJoinQueue = (categoryId: string, waitMins: number) => {
    setJoinedQueue(categoryId);
    setWaitTimer(waitMins * 60);
    setQueuePosition(3);
  };

  const handleLeaveQueue = () => {
    setJoinedQueue(null);
    setWaitTimer(0);
  };

  if (joinedQueue) {
    const category = queueCategories.find(c => c.id === joinedQueue);
    return (
      <div className="page-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
        <div className="mh-card" style={{ maxWidth: '600px', width: '100%', textAlign: 'center', position: 'relative' }}>
          <button 
            onClick={handleLeaveQueue}
            style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(231, 76, 60, 0.1)', border: 'none', color: '#e74c3c', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <X size={20} />
          </button>
          
          {category && <category.icon size={64} color="var(--primary-color)" style={{ margin: '0 auto 1.5rem' }} />}
          
          <h2 style={{ marginBottom: '0.5rem' }}>Waiting for {category?.name}</h2>
          <p className="text-secondary" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Please do not close this window.</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '3rem' }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>#{queuePosition}</div>
              <div className="text-secondary">Position in Queue</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                {Math.floor(waitTimer / 60)}:{String(waitTimer % 60).padStart(2, '0')}
              </div>
              <div className="text-secondary">Estimated Wait</div>
            </div>
          </div>

          {waitTimer === 0 ? (
            <button className="btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', animation: 'pulse 2s infinite' }}>
              <Video size={24} /> Connect to Doctor Now
            </button>
          ) : (
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', textAlign: 'left' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--success-color)', marginBottom: '0.5rem' }}><Shield size={18} /> Health Tip While You Wait</h4>
              <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Drinking a glass of water before your consultation can help you feel more relaxed and focused during the call.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="forum-header">
        <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          <Video size={40} color="var(--primary-color)" /> Live Telemedicine Queue
        </h1>
        <p className="text-secondary" style={{ fontSize: '1.2rem' }}>Connect with specialist doctors instantly.</p>
      </div>

      <div className="queue-grid">
        {queueCategories.map(cat => (
          <div key={cat.id} className="queue-card">
            <div className="queue-icon">
              <cat.icon size={32} />
            </div>
            <h3 className="queue-title">{cat.name}</h3>
            
            <div className="queue-stats">
              <div className="stat-item" style={{ color: 'var(--success-color)' }}>
                <Users size={16} /> {cat.online} Online
              </div>
              <div className="stat-item">
                <Clock size={16} /> ~{cat.wait} min wait
              </div>
            </div>
            
            <button className="join-btn" onClick={() => handleJoinQueue(cat.id, cat.wait)}>
              Join Queue
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
