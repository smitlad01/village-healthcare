'use client';

import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Video, VideoOff, PhoneOff, MessageSquare, Image as ImageIcon, Wifi, CheckSquare } from 'lucide-react';
import { useRouter } from 'next/navigation';

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
      <div className="page-container post-call-state">
        <div className="glass-card success-card">
          <h1>Consultation Ended</h1>
          <p>Duration: {formatTime(callTimer)}</p>
          <div className="prescription-summary glass-panel mt-md">
            <h3>Prescription Summary</h3>
            <ul>
              <li>Azithromycin 500mg - 3 Days</li>
              <li>Paracetamol 650mg - SOS</li>
            </ul>
            <p className="mt-sm">Your digital prescription has been saved to your records.</p>
          </div>
          <button className="btn-primary large-cta mt-md" onClick={() => router.push('/patient/appointments')}>
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="teleconsult-layout dark-theme">
      {/* Main Video Area */}
      <div className="video-main-area">
        <div className={`video-placeholder ${lowBandwidth ? 'audio-only' : ''}`}>
          {lowBandwidth ? (
            <div className="avatar-large">AD</div>
          ) : (
            <div className="connecting-text pulse-anim">Connected to Doctor...</div>
          )}
        </div>
        
        {/* Self View (PiP) */}
        {!isVideoOff && (
          <div className="self-view glass-panel">
            <span className="self-label">You</span>
          </div>
        )}

        {/* Top Info Bar */}
        <div className="top-info-bar glass-panel-dark">
          <div className="doc-info">
            <h2>Dr. Anita Desai</h2>
            <span>General Medicine • ⭐ 4.5</span>
          </div>
          <div className="call-status">
            <span className="timer">{formatTime(callTimer)}</span>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="controls-bar glass-panel-dark">
          <button className={`control-btn ${isMuted ? 'danger' : ''}`} onClick={() => setIsMuted(!isMuted)}>
            {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
          </button>
          <button className={`control-btn ${isVideoOff ? 'danger' : ''}`} onClick={() => setIsVideoOff(!isVideoOff)}>
            {isVideoOff ? <VideoOff size={24} /> : <Video size={24} />}
          </button>
          <button className="control-btn end-call" onClick={endCall}>
            <PhoneOff size={24} />
          </button>
          <button className="control-btn"><MessageSquare size={24} /></button>
          <button className="control-btn"><ImageIcon size={24} /></button>
        </div>
      </div>

      {/* Side Panel (Desktop only or overlay on mobile) */}
      <div className="side-panel glass-panel-dark">
        <div className="panel-header">
          <h3>Consultation Tools</h3>
          <button className={`bandwidth-toggle ${lowBandwidth ? 'active' : ''}`} onClick={() => setLowBandwidth(!lowBandwidth)}>
            <Wifi size={16}/> Low Bandwidth
          </button>
        </div>
        
        <div className="symptoms-checklist mt-md">
          <h4><CheckSquare size={16}/> Report Symptoms</h4>
          <label className="checkbox-label"><input type="checkbox" /> Fever</label>
          <label className="checkbox-label"><input type="checkbox" /> Cough</label>
          <label className="checkbox-label"><input type="checkbox" /> Headache</label>
          <label className="checkbox-label"><input type="checkbox" /> Body Ache</label>
          <button className="btn-small btn-outline mt-sm">Update Doctor</button>
        </div>

        <div className="chat-section mt-md">
          <h4>Chat</h4>
          <div className="chat-messages">
            <div className="msg doc-msg">Hello, please tell me your symptoms.</div>
            <div className="msg my-msg">I have had a fever since yesterday.</div>
          </div>
          <input type="text" placeholder="Type a message..." className="glass-input mt-sm" />
        </div>
      </div>
    </div>
  );
}
