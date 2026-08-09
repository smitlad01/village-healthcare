'use client';

import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Video, VideoOff, PhoneOff, MessageSquare, Image as ImageIcon, Wifi, CheckSquare, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '@/styles/globals.css';
import '@/styles/worker.css';

export default function TeleconsultPage() {
  const router = useRouter();
  const [callTimer, setCallTimer] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [lowBandwidth, setLowBandwidth] = useState(false);
  const [callEnded, setCallEnded] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!callEnded) {
      timer = setInterval(() => {
        setCallTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [callEnded]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const endCall = () => {
    setCallEnded(true);
  };

  if (callEnded) {
    return (
      <div className="worker-container" style={{ minHeight: '100vh', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="worker-glass-panel flex flex-col items-center text-center p-12" style={{ maxWidth: '600px', border: '1px solid rgba(59, 130, 246, 0.4)' }}>
          <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Consultation Ended</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>Duration: {formatTime(callTimer)}</p>
          
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', padding: '1.5rem', borderRadius: '12px', width: '100%', marginBottom: '2rem', textAlign: 'left' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Prescription Summary</h3>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', margin: '0 0 1rem 0' }}>
              <li style={{ marginBottom: '0.5rem' }}>Azithromycin 500mg - 3 Days</li>
              <li>Paracetamol 650mg - SOS</li>
            </ul>
            <p style={{ margin: 0, color: '#10b981', fontSize: '0.9rem', fontWeight: 600 }}>Your digital prescription has been saved to your records.</p>
          </div>
          
          <button 
            onClick={() => router.push('/patient/appointments')}
            style={{ width: '100%', padding: '1rem', background: '#3b82f6', color: '#fff', borderRadius: '99px', border: 'none', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer' }}
          >
            Return to Appointments
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="worker-container" style={{ minHeight: '100vh', padding: '1rem', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <Link href="/patient/appointments" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>
          <ChevronLeft size={20} /> Exit Call
        </Link>
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '99px', color: '#ef4444', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', animation: 'pulse 2s infinite' }} />
          {formatTime(callTimer)}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', flex: 1, height: 'calc(100vh - 100px)' }}>
        
        {/* Main Video Area */}
        <div className="worker-glass-panel" style={{ flex: 1, position: 'relative', overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column', border: '1px solid var(--border)' }}>
          
          <div style={{ flex: 1, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            {lowBandwidth ? (
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', color: '#3b82f6', fontWeight: 700, border: '2px solid #3b82f6' }}>
                AD
              </div>
            ) : (
              <div style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 600, animation: 'pulse 2s infinite' }}>Connected to Doctor...</div>
            )}

            {/* Self View (PiP) */}
            {!isVideoOff && (
              <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', width: '200px', height: '150px', background: '#222', borderRadius: '12px', border: '2px solid rgba(255,255,255,0.2)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>You</span>
              </div>
            )}
          </div>
          
          {/* Top Info Bar Overlay */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ color: '#fff', margin: '0 0 0.25rem 0', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Dr. Anita Desai</h2>
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>General Medicine • ⭐ 4.5</span>
            </div>
          </div>

          {/* Bottom Controls Bar */}
          <div style={{ background: 'rgba(0,0,0,0.8)', padding: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <button 
              onClick={() => setIsMuted(!isMuted)}
              style={{ width: '56px', height: '56px', borderRadius: '50%', background: isMuted ? '#ef4444' : 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
            >
              {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
            </button>
            <button 
              onClick={() => setIsVideoOff(!isVideoOff)}
              style={{ width: '56px', height: '56px', borderRadius: '50%', background: isVideoOff ? '#ef4444' : 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
            >
              {isVideoOff ? <VideoOff size={24} /> : <Video size={24} />}
            </button>
            <button 
              onClick={endCall}
              style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#ef4444', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)' }}
            >
              <PhoneOff size={28} />
            </button>
            <button style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <MessageSquare size={24} />
            </button>
            <button style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <ImageIcon size={24} />
            </button>
          </div>
        </div>

        {/* Side Panel */}
        <div className="worker-glass-panel" style={{ width: '350px', display: 'flex', flexDirection: 'column', padding: 0 }}>
          
          <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ color: 'var(--text-primary)', margin: 0, fontSize: '1.1rem' }}>Consultation Tools</h3>
              <button 
                onClick={() => setLowBandwidth(!lowBandwidth)}
                style={{ background: lowBandwidth ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255,255,255,0.05)', color: lowBandwidth ? '#3b82f6' : 'var(--text-secondary)', padding: '6px 12px', borderRadius: '99px', border: '1px solid var(--border)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
              >
                <Wifi size={14}/> Low BW
              </button>
            </div>
          </div>
          
          <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)' }}>
            <h4 style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', margin: '0 0 1rem 0' }}><CheckSquare size={18} color="#10b981"/> Report Symptoms</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
              <label style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><input type="checkbox" style={{ accentColor: '#10b981' }}/> Fever</label>
              <label style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><input type="checkbox" style={{ accentColor: '#10b981' }}/> Cough</label>
              <label style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><input type="checkbox" style={{ accentColor: '#10b981' }}/> Headache</label>
              <label style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><input type="checkbox" style={{ accentColor: '#10b981' }}/> Body Ache</label>
            </div>
            <button style={{ width: '100%', padding: '0.75rem', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>Update Doctor</button>
          </div>

          <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ color: 'var(--text-primary)', margin: '0 0 1rem 0' }}>Chat</h4>
            
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto', marginBottom: '1rem' }}>
              <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.05)', padding: '0.75rem 1rem', borderRadius: '12px 12px 12px 0', color: 'var(--text-primary)', fontSize: '0.9rem', maxWidth: '85%' }}>
                Hello, please tell me your symptoms.
              </div>
              <div style={{ alignSelf: 'flex-end', background: '#3b82f6', padding: '0.75rem 1rem', borderRadius: '12px 12px 0 12px', color: '#fff', fontSize: '0.9rem', maxWidth: '85%' }}>
                I have had a fever since yesterday.
              </div>
            </div>
            
            <input 
              type="text" 
              placeholder="Type a message..." 
              style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '99px', color: 'var(--text-primary)', outline: 'none' }} 
            />
          </div>

        </div>
      </div>
    </div>
  );
}
