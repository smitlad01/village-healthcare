'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Heart, Activity, Brain, Smile, AlertCircle, CheckCircle2, ChevronRight, Wind } from 'lucide-react';
import '@/styles/community.css';

const phq9Questions = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless",
  "Trouble falling or staying asleep, or sleeping too much",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself or that you are a failure",
  "Trouble concentrating on things",
  "Moving or speaking so slowly that other people could have noticed",
  "Thoughts that you would be better off dead or hurting yourself"
];

const gad7Questions = [
  "Feeling nervous, anxious, or on edge",
  "Not being able to stop or control worrying",
  "Worrying too much about different things",
  "Trouble relaxing",
  "Being so restless that it is hard to sit still",
  "Becoming easily annoyed or irritable",
  "Feeling afraid, as if something awful might happen"
];

export default function MentalHealthPage() {
  const [activeMood, setActiveMood] = useState<string | null>(null);
  const [phqScore, setPhqScore] = useState<number | null>(null);
  const [gadScore, setGadScore] = useState<number | null>(null);
  const [breathePhase, setBreathePhase] = useState<'inhale' | 'hold' | 'exhale' | ''>('');
  const [breatheActive, setBreatheActive] = useState(false);
  const [breatheTime, setBreatheTime] = useState(120);
  const [sessionComplete, setSessionComplete] = useState(false);

  const [currentPhqIdx, setCurrentPhqIdx] = useState(0);
  const [currentGadIdx, setCurrentGadIdx] = useState(0);

  const [phqAnswers, setPhqAnswers] = useState<number[]>(Array(9).fill(0));
  const [gadAnswers, setGadAnswers] = useState<number[]>(Array(7).fill(0));

  // Breathing Exercise Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (breatheActive && breatheTime > 0) {
      interval = setInterval(() => {
        setBreatheTime(t => t - 1);
      }, 1000);
    } else if (breatheActive && breatheTime <= 0) {
      setBreatheActive(false);
      setBreathePhase('');
      setSessionComplete(true);
    }
    return () => clearInterval(interval);
  }, [breatheActive, breatheTime]);

  // Breathing Animation Cycle
  useEffect(() => {
    let cycleInterval: NodeJS.Timeout;
    if (breatheActive) {
      const cycle = () => {
        setBreathePhase('inhale');
        setTimeout(() => {
          if (breatheActive) setBreathePhase('hold');
          setTimeout(() => {
            if (breatheActive) setBreathePhase('exhale');
          }, 4000);
        }, 4000);
      };
      cycle();
      cycleInterval = setInterval(cycle, 12000);
    } else {
      setBreathePhase('');
    }
    return () => clearInterval(cycleInterval);
  }, [breatheActive]);

  const handleMoodSelect = (mood: string) => {
    setActiveMood(mood);
  };

  const calculatePhq = () => {
    const total = phqAnswers.reduce((a, b) => a + b, 0);
    setPhqScore(total);
  };

  const getPhqResult = (score: number) => {
    if (score <= 4) return "Minimal (Normal)";
    if (score <= 9) return "Mild - Consider talking to someone or trying our relaxation exercises.";
    if (score <= 14) return "Moderate - We recommend discussing these feelings with a counselor.";
    return "Severe - Please reach out to our helplines or a doctor immediately.";
  };

  return (
    <div className="page-container">
      <div className="page-header" style={{ marginBottom: '2rem' }}>
        <h1 className="mh-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: 0 }}>
          <Brain size={40} /> Mental Health & Wellness
        </h1>
        <p className="text-secondary">Your mind matters. Check in with yourself daily.</p>
      </div>

      {/* Mood Tracker */}
      <div className="mh-card">
        <h2>Daily Mood Tracker</h2>
        <p className="text-secondary">How are you feeling today?</p>
        <div className="mood-grid">
          <button className={`mood-btn ${activeMood === 'great' ? 'active' : ''}`} onClick={() => handleMoodSelect('great')}>😄 <span>Great</span></button>
          <button className={`mood-btn ${activeMood === 'good' ? 'active' : ''}`} onClick={() => handleMoodSelect('good')}>🙂 <span>Good</span></button>
          <button className={`mood-btn ${activeMood === 'okay' ? 'active' : ''}`} onClick={() => handleMoodSelect('okay')}>😐 <span>Okay</span></button>
          <button className={`mood-btn ${activeMood === 'low' ? 'active' : ''}`} onClick={() => handleMoodSelect('low')}>😞 <span>Low</span></button>
          <button className={`mood-btn ${activeMood === 'bad' ? 'active' : ''}`} onClick={() => handleMoodSelect('bad')}>😢 <span>Bad</span></button>
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          <h4 style={{ marginBottom: '0.5rem' }}>Last 7 Days</h4>
          <div style={{ display: 'flex', gap: '10px', fontSize: '1.5rem' }}>
            <span>🙂</span><span>🙂</span><span>😐</span><span>😄</span><span>🙂</span><span>😞</span><span style={{ opacity: activeMood ? 1 : 0.3 }}>{activeMood ? (activeMood === 'great' ? '😄' : activeMood === 'good' ? '🙂' : activeMood === 'okay' ? '😐' : activeMood === 'low' ? '😞' : '😢') : '❓'}</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
        {/* Breathing Exercise */}
        <div className="mh-card">
          <h2><Wind size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Stress Reduction</h2>
          <p className="text-secondary">Take a moment to center yourself.</p>
          
          <div className="breathe-container">
            <div className={`breathe-circle ${breathePhase}`}>
              <span className="breathe-text">
                {!breatheActive && !sessionComplete ? "Ready?" : 
                 sessionComplete ? "Done!" :
                 breathePhase === 'inhale' ? "Breathe In..." :
                 breathePhase === 'hold' ? "Hold..." :
                 breathePhase === 'exhale' ? "Breathe Out..." : ""}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
            <select className="custom-select" value={breatheTime} onChange={(e) => setBreatheTime(Number(e.target.value))} disabled={breatheActive}>
              <option value={120}>2 Minutes</option>
              <option value={300}>5 Minutes</option>
              <option value={600}>10 Minutes</option>
            </select>
            <button className="btn-primary" onClick={() => {
              if (breatheActive) { setBreatheActive(false); setBreathePhase(''); }
              else { setBreatheActive(true); setSessionComplete(false); }
            }}>
              {breatheActive ? "Stop" : "Start"}
            </button>
          </div>
          {sessionComplete && (
            <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(39, 174, 96, 0.1)', border: '1px solid var(--success-color)', borderRadius: '8px', color: 'var(--success-color)', textAlign: 'center' }}>
              Great job! You completed your breathing exercise. +25 Health Points
            </div>
          )}
        </div>

        {/* Helplines */}
        <div className="mh-card">
          <h2><Phone size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Crisis Helplines</h2>
          <p className="text-secondary" style={{ marginBottom: '1rem' }}>24/7 Free and Confidential Support</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
              <div>
                <strong>iCall</strong>
                <div style={{ color: 'var(--text-secondary)' }}>9152987821</div>
              </div>
              <button className="btn-primary" style={{ background: 'var(--success-color)' }}>Call Now</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
              <div>
                <strong>Kiran Helpline</strong>
                <div style={{ color: 'var(--text-secondary)' }}>1800-599-0019</div>
              </div>
              <button className="btn-primary" style={{ background: 'var(--success-color)' }}>Call Now</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
              <div>
                <strong>NIMHANS</strong>
                <div style={{ color: 'var(--text-secondary)' }}>080-46110007</div>
              </div>
              <button className="btn-primary" style={{ background: 'var(--success-color)' }}>Call Now</button>
            </div>
          </div>
          
          <button className="btn-primary" style={{ width: '100%', marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '8px', padding: '1rem' }}>
            <Phone size={20} /> Book Counseling Session
          </button>
        </div>
      </div>

      {/* Screeners */}
      <div className="mh-card">
        <h2>Depression Screener (PHQ-9)</h2>
        <p className="text-secondary">Over the last 2 weeks, how often have you been bothered by any of the following problems?</p>
        
        {phqScore === null ? (
          <div style={{ marginTop: '1.5rem' }}>
            <div style={{ marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 500 }}>
              {currentPhqIdx + 1}. {phq9Questions[currentPhqIdx]}
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['Not at all', 'Several days', 'More than half the days', 'Nearly every day'].map((opt, val) => (
                <button 
                  key={val}
                  onClick={() => {
                    const newAnswers = [...phqAnswers];
                    newAnswers[currentPhqIdx] = val;
                    setPhqAnswers(newAnswers);
                    if (currentPhqIdx < 8) setCurrentPhqIdx(c => c + 1);
                    else calculatePhq();
                  }}
                  style={{
                    padding: '1rem',
                    background: 'var(--glass-bg-subtle)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', color: 'var(--text-secondary)' }}>
              <span>Question {currentPhqIdx + 1} of 9</span>
              {currentPhqIdx > 0 && (
                <button onClick={() => setCurrentPhqIdx(c => c - 1)} style={{ background: 'transparent', color: 'var(--primary-color)', border: 'none', cursor: 'pointer' }}>
                  Back
                </button>
              )}
            </div>
          </div>
        ) : (
          <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'rgba(108, 92, 231, 0.1)', border: '1px solid rgba(108, 92, 231, 0.3)', borderRadius: '12px' }}>
            <h3>Your Score: {phqScore}</h3>
            <p style={{ fontSize: '1.1rem', marginTop: '0.5rem' }}>{getPhqResult(phqScore)}</p>
            <button className="btn-primary" onClick={() => { setPhqScore(null); setCurrentPhqIdx(0); setPhqAnswers(Array(9).fill(0)); }} style={{ marginTop: '1rem' }}>
              Retake Assessment
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
