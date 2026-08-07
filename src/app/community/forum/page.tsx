'use client';

import React, { useState } from 'react';
import { MessageCircle, CheckCircle, Search, Filter, Edit3, Heart, Share2, CornerDownRight, AlertCircle } from 'lucide-react';
import '@/styles/community.css';

const categories = ['All', 'Nutrition', 'Home Remedies', 'Pregnancy', 'Child Care', 'General Health', 'Ask a Doctor'];

const threads = [
  { id: 1, title: 'What foods help control diabetes?', category: 'Nutrition', author: 'Sunita B.', replies: 12, timeAgo: '2 days ago', verified: true, content: 'My husband was recently diagnosed with Type 2 diabetes. What local foods and vegetables should I include more in our daily meals to help control his sugar levels?', doctorReply: 'Focus on high-fiber foods like whole grains (bajra, jowar), leafy greens, bitter gourd (karela), and fenugreek (methi). Avoid refined sugars and white rice. Small, frequent meals are better than large ones.' },
  { id: 2, title: 'Home remedy for common cold in kids?', category: 'Home Remedies', author: 'Priya K.', replies: 8, timeAgo: '3 days ago', verified: false, content: 'My 5-year-old has a runny nose and mild cough. Any safe home remedies before I take him to the clinic?' },
  { id: 3, title: 'When to start solid food for baby?', category: 'Child Care', author: 'Lakshmi D.', replies: 15, timeAgo: '1 day ago', verified: true, content: 'My baby is turning 5 months old next week. When should I start giving her solid foods like dal water or mashed banana?' },
  { id: 4, title: 'How to reduce BP naturally?', category: 'General Health', author: 'Govind R.', replies: 6, timeAgo: '5 days ago', verified: false, content: 'I have mild hypertension. Besides medicine, what lifestyle changes can help lower blood pressure?' },
  { id: 5, title: 'Is turmeric milk good for joint pain?', category: 'Home Remedies', author: 'Asha D.', replies: 4, timeAgo: '1 week ago', verified: true, content: 'I have arthritis pain in my knees, especially in winter. Does drinking haldi doodh (turmeric milk) actually help?' },
  { id: 6, title: 'Pregnancy diet tips for 3rd trimester', category: 'Pregnancy', author: 'Kamala B.', replies: 10, timeAgo: '4 days ago', verified: false, content: 'I am entering my 7th month. What should I be eating more of for the baby\'s brain development?' },
  { id: 7, title: 'Best time to take diabetes medicine?', category: 'Ask a Doctor', author: 'Ratan L.', replies: 3, timeAgo: '2 days ago', verified: true, content: 'Should I take my metformin before or after meals? My doctor told me but I forgot.' },
  { id: 8, title: 'Easy exercises for elderly with arthritis', category: 'General Health', author: 'Ramesh K.', replies: 7, timeAgo: '1 week ago', verified: false, content: 'Looking for simple exercises my 70-year-old mother can do sitting in a chair to keep her joints moving.' },
];

export default function ForumPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedThread, setExpandedThread] = useState<number | null>(null);

  const filteredThreads = activeCategory === 'All' ? threads : threads.filter(t => t.category === activeCategory);

  return (
    <div className="page-container">
      <div className="forum-header">
        <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          <MessageCircle size={40} color="var(--primary-color)" /> Community Health Forum
        </h1>
        <p className="text-secondary" style={{ fontSize: '1.2rem' }}>Nashik Village Knowledge Sharing & Support</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', fontSize: '1.1rem' }}>
          <Edit3 size={20} /> Ask a Question
        </button>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
            <input type="text" placeholder="Search forum..." style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '0.5rem 1rem 0.5rem 2.5rem', borderRadius: '20px', color: 'white', outline: 'none' }} />
          </div>
          <select className="custom-select" style={{ minWidth: '150px' }}>
            <option>All Languages</option>
            <option>English</option>
            <option>हिंदी (Hindi)</option>
            <option>मराठी (Marathi)</option>
          </select>
        </div>
      </div>

      <div className="category-tabs">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div style={{ background: 'rgba(241, 196, 15, 0.1)', border: '1px solid rgba(241, 196, 15, 0.3)', padding: '0.75rem', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f1c40f', fontSize: '0.9rem' }}>
        <AlertCircle size={18} /> All medical advice is reviewed by registered doctors. Look for the Verified badge.
      </div>

      <div className="thread-list">
        {filteredThreads.map(thread => (
          <div key={thread.id} className="thread-item" onClick={() => setExpandedThread(expandedThread === thread.id ? null : thread.id)}>
            <div className="thread-header">
              <h3 className="thread-title">{thread.title}</h3>
              <span className="category-badge">{thread.category}</span>
            </div>
            
            <div className="thread-meta">
              <span>By {thread.author}</span>
              <span>•</span>
              <span>{thread.replies} replies</span>
              <span>•</span>
              <span>{thread.timeAgo}</span>
              {thread.verified && (
                <>
                  <span>•</span>
                  <span className="verified-badge"><CheckCircle size={14} /> Doctor Verified Answer</span>
                </>
              )}
            </div>

            {expandedThread === thread.id && (
              <div className="thread-expanded" onClick={(e) => e.stopPropagation()}>
                <p className="thread-body">{thread.content}</p>
                
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}><Heart size={16} /> 12</button>
                  <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}><Share2 size={16} /> Share</button>
                </div>

                <div className="reply-list">
                  {thread.doctorReply && (
                    <div className="reply-item doctor-reply">
                      <span className="doctor-badge">Verified Medical Advice</span>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <strong style={{ color: 'var(--success-color)' }}>Dr. Sharma (General Physician)</strong>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>1 day ago</span>
                      </div>
                      <p style={{ margin: 0 }}>{thread.doctorReply}</p>
                    </div>
                  )}
                  
                  <div className="reply-item">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <strong>Anita M.</strong>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>2 days ago</span>
                    </div>
                    <p style={{ margin: 0 }}>I also found that going for a 15-minute walk after meals helps a lot!</p>
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                  <input type="text" placeholder="Write a reply..." style={{ flex: 1, background: 'var(--glass-bg-subtle)', border: '1px solid var(--glass-border)', padding: '0.75rem 1rem', borderRadius: '20px', color: 'white', outline: 'none' }} />
                  <button className="btn-primary" style={{ padding: '0.75rem 1.5rem', borderRadius: '20px' }}>Reply</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
