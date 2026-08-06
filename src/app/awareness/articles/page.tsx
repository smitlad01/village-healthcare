'use client';
import React, { useState } from 'react';
import { BookOpen, Volume2, CheckCircle, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import '@/styles/games.css';

const ARTICLES = [
  { id: 1, title: 'Understanding Diabetes: A Simple Guide', category: 'Chronic Diseases', time: '5 min read', pts: 25, icon: '🩸', progress: 0 },
  { id: 2, title: 'Handwashing: Your First Defense', category: 'Hygiene', time: '3 min read', pts: 25, icon: '🧼', progress: 100 },
  { id: 3, title: 'Balanced Nutrition for Rural Families', category: 'Nutrition', time: '7 min read', pts: 25, icon: '🥗', progress: 40 },
  { id: 4, title: 'Recognizing Dengue Symptoms Early', category: 'Disease Alert', time: '4 min read', pts: 25, icon: '🦟', progress: 0 },
  { id: 5, title: 'Safe Pregnancy: Month-by-Month Guide', category: 'Maternal Health', time: '10 min read', pts: 25, icon: '🤰', progress: 0 },
  { id: 6, title: 'Childhood Vaccination Schedule Explained', category: 'Child Health', time: '6 min read', pts: 25, icon: '👶', progress: 0 },
  { id: 7, title: 'Managing Stress in Daily Life', category: 'Mental Health', time: '5 min read', pts: 25, icon: '🧠', progress: 0 },
  { id: 8, title: 'First Aid for Snake Bites', category: 'First Aid', time: '4 min read', pts: 25, icon: '🐍', progress: 0 },
];

export default function ArticlesPage() {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [quizDone, setQuizDone] = useState(false);

  if (selectedArticle) {
    return (
      <div className="page-container">
        <button className="btn btn-secondary mb-6 flex items-center gap-2" onClick={() => setSelectedArticle(null)}>
          <ChevronLeft size={16} /> Back to Articles
        </button>
        
        <div className="glass-panel" style={{ padding: 'var(--spacing-2xl)', maxWidth: '800px', margin: '0 auto' }}>
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="badge mb-2 inline-block">{selectedArticle.category}</span>
              <h1 className="text-3xl font-bold mb-2">{selectedArticle.title}</h1>
              <div className="flex gap-4 text-text-secondary text-sm">
                <span>{selectedArticle.time}</span>
                <span className="pts-badge">+{selectedArticle.pts} pts</span>
              </div>
            </div>
            <button className="btn btn-icon" title="Listen to audio narration">
              <Volume2 size={24} />
            </button>
          </div>

          <div className="article-body" style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            <p className="mb-4">This is a detailed educational article about {selectedArticle.title.toLowerCase()}. It explains the importance of proactive health measures, symptoms to watch out for, and daily habits that can significantly improve your well-being.</p>
            <p className="mb-4">In rural areas, having access to this kind of knowledge is the first step towards a healthier community. Always remember to consult your local ASHA worker or doctor if you have serious concerns.</p>
            <h3 className="text-xl font-bold text-white mt-6 mb-2">Key Takeaways</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Early detection saves lives.</li>
              <li>Consistency in healthy habits is crucial.</li>
              <li>Don't ignore minor symptoms if they persist.</li>
            </ul>
          </div>

          <div className="mt-8 p-6 bg-surface-light rounded-lg border border-border">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BookOpen size={20} /> Quick Knowledge Check
            </h3>
            {!quizDone ? (
              <div>
                <p className="mb-4">Answer to earn +50 bonus pts!</p>
                <div className="space-y-3">
                  <p className="font-bold">What is the most important takeaway?</p>
                  <label className="flex items-center gap-3 p-3 bg-surface rounded cursor-pointer hover:bg-surface-light border border-border hover:border-primary">
                    <input type="radio" name="q1" /> Ignore symptoms
                  </label>
                  <label className="flex items-center gap-3 p-3 bg-surface rounded cursor-pointer hover:bg-surface-light border border-border hover:border-primary">
                    <input type="radio" name="q1" /> Early detection saves lives
                  </label>
                </div>
                <button className="btn btn-primary mt-6 w-full" onClick={() => setQuizDone(true)}>
                  Submit Quiz
                </button>
              </div>
            ) : (
              <div className="text-center py-6 text-success">
                <CheckCircle size={48} className="mx-auto mb-4" />
                <h4 className="text-xl font-bold">Great Job!</h4>
                <p>You earned +50 bonus points.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <header className="page-header">
        <div>
          <h1 className="page-title">Health Education Articles</h1>
          <p className="page-subtitle">Read and learn to earn reward points</p>
        </div>
      </header>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
        {ARTICLES.map(article => (
          <div key={article.id} className="article-card glass-panel cursor-pointer" onClick={() => setSelectedArticle(article)}>
            <div className="article-image">
              {article.icon}
            </div>
            <div className="article-content">
              <span className="badge mb-2 inline-block">{article.category}</span>
              <h3 className="font-bold text-lg mb-2">{article.title}</h3>
              
              {article.progress > 0 && (
                <div className="w-full bg-surface h-2 rounded-full mt-3 mb-1 overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: `${article.progress}%` }}></div>
                </div>
              )}
              
              <div className="article-meta mt-4 flex items-center justify-between">
                <span>{article.time}</span>
                <span className="pts-badge">+{article.pts} pts</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
