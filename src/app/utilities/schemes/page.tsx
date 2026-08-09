'use client';

import React, { useState } from 'react';
import { FileText, CheckCircle, Info, MessageSquare, Send } from 'lucide-react';
import '../../../styles/utilities.css';

export default function GovernmentSchemes() {
  const [chatMsgs, setChatMsgs] = useState([
    { role: 'bot', text: 'Hi! I am the Scheme Assistant. Ask me about any government health scheme.' }
  ]);
  const [input, setInput] = useState('');

  const schemes = [
    { title: 'Ayushman Bharat PMJAY', desc: 'Up to ₹5 lakh coverage for secondary/tertiary care hospitalization.', target: 'BPL families', link: 'Check Eligibility' },
    { title: 'Janani Suraksha Yojana (JSY)', desc: '₹1,400 institutional delivery incentive.', target: 'Pregnant women', link: 'Apply Now' },
    { title: 'Pradhan Mantri Surakshit Matritva Abhiyan', desc: 'Free antenatal care on 9th of every month.', target: 'All pregnant women', link: 'Find Center' },
    { title: 'Rashtriya Bal Swasthya Karyakram', desc: 'Free child health screening & early intervention.', target: '0-18 years', link: 'Learn More' },
    { title: 'National TB Elimination Programme', desc: 'Free TB treatment + ₹500/month nutrition support.', target: 'TB patients', link: 'Register' },
    { title: 'Ayushman Bharat Health Infrastructure', desc: 'Upgrades for PHCs and CHCs in rural areas.', target: 'Zones', link: 'View Facilities' },
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    setChatMsgs([...chatMsgs, { role: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setChatMsgs(prev => [...prev, { role: 'bot', text: 'Based on your query, you might be eligible for Ayushman Bharat. To check exactly, please use the eligibility form above or provide your family income details.' }]);
    }, 1000);
  };

  return (
    <div className="utilities-container">
      <div className="utilities-header">
        <h1>Government Health Schemes</h1>
        <p>Discover and apply for state and central health benefits.</p>
      </div>

      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 55%', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          <div className="list-item-card" style={{ flexDirection: 'column', alignItems: 'stretch', background: 'linear-gradient(135deg, rgba(var(--primary-rgb),0.05), transparent)' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={20} color="var(--primary)" /> Eligibility Checker
            </h3>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <div className="form-group" style={{ flex: 1, minWidth: '150px' }}>
                <label>Annual Family Income</label>
                <input type="number" className="form-input" placeholder="₹" />
              </div>
              <div className="form-group" style={{ flex: 1, minWidth: '150px' }}>
                <label>Age</label>
                <input type="number" className="form-input" placeholder="Years" />
              </div>
              <div className="form-group" style={{ flex: 1, minWidth: '150px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" id="bpl" />
                  <label htmlFor="bpl" style={{ margin: 0 }}>BPL Card Holder</label>
                </div>
              </div>
            </div>
            <button className="btn-primary">Check Eligible Schemes</button>
          </div>

          <div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>Available Schemes</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {schemes.map((scheme, i) => (
                <div className="utility-card" key={i} style={{ padding: '20px' }}>
                  <h4 style={{ color: 'var(--text-primary)', margin: '0 0 8px 0' }}>{scheme.title}</h4>
                  <p style={{ fontSize: '14px', marginBottom: '12px' }}>{scheme.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <span style={{ fontSize: '12px', background: 'var(--surface)', padding: '4px 8px', borderRadius: '4px', color: 'var(--text-secondary)' }}>
                      Target: {scheme.target}
                    </span>
                    <a href="#" style={{ color: 'var(--primary)', fontSize: '14px', textDecoration: 'none', fontWeight: '500' }}>{scheme.link}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div style={{ flex: '1 1 40%' }}>
          <div className="chatbot-container">
            <div className="chatbot-header">
              <MessageSquare size={20} color="var(--primary)" />
              <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '16px' }}>AI Scheme Assistant</h3>
            </div>
            
            <div className="chatbot-messages">
              {chatMsgs.map((msg, i) => (
                <div key={i} className={`chat-bubble ${msg.role}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            
            <div className="chatbot-input-area" style={{ flexDirection: 'column' }}>
              <div className="quick-questions">
                <button className="quick-question-btn" onClick={() => setInput('Am I eligible for Ayushman Bharat?')}>Eligible for PMJAY?</button>
                <button className="quick-question-btn" onClick={() => setInput('How to get JSY benefit?')}>JSY details</button>
                <button className="quick-question-btn" onClick={() => setInput('Free medicines for diabetes?')}>Free medicines?</button>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input 
                  type="text" 
                  className="form-input" 
                  style={{ flex: 1, margin: 0 }} 
                  placeholder="Type your question..." 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <button className="btn-primary" style={{ flex: '0 0 auto', padding: '8px 16px' }} onClick={handleSend}>
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
