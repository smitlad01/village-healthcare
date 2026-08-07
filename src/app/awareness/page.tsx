'use client';
import React from 'react';
import Link from 'next/link';
import { Newspaper, Bell, BookOpen, Gamepad2, ArrowRight } from 'lucide-react';
import '@/styles/games.css';

export default function AwarenessHub() {
  return (
    <div className="page-container">
      <header className="page-header">
        <div>
          <h1 className="page-title">Health Awareness Hub</h1>
          <p className="page-subtitle">Learn, play, and stay updated with local health info</p>
        </div>
      </header>

      <div className="dashboard-grid">
        <Link href="/awareness/alerts" className="stat-card glass-panel" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="stat-header">
            <h3 className="stat-title">Disease Alerts</h3>
            <div className="stat-icon" style={{ color: 'var(--warning)' }}>
              <Bell size={24} />
            </div>
          </div>
          <div className="stat-value">2 Active</div>
          <p className="stat-change negative">Moderate Risk in Nashik</p>
          <div className="mt-4 flex items-center text-primary text-sm">
            View Alerts <ArrowRight size={16} className="ml-1" />
          </div>
        </Link>

        <Link href="/awareness/articles" className="stat-card glass-panel" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="stat-header">
            <h3 className="stat-title">Education</h3>
            <div className="stat-icon" style={{ color: 'var(--success)' }}>
              <BookOpen size={24} />
            </div>
          </div>
          <div className="stat-value">Articles</div>
          <p className="stat-change positive">8 New Topics</p>
          <div className="mt-4 flex items-center text-primary text-sm">
            Read & Earn <ArrowRight size={16} className="ml-1" />
          </div>
        </Link>

        <Link href="/awareness/games" className="stat-card glass-panel" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="stat-header">
            <h3 className="stat-title">Health Games</h3>
            <div className="stat-icon" style={{ color: 'var(--primary)' }}>
              <Gamepad2 size={24} />
            </div>
          </div>
          <div className="stat-value">4 Games</div>
          <p className="stat-change">Play & earn up to 500 pts</p>
          <div className="mt-4 flex items-center text-primary text-sm">
            Play Now <ArrowRight size={16} className="ml-1" />
          </div>
        </Link>
      </div>

      <section className="mt-8">
        <h2 className="section-title flex items-center gap-2">
          <Newspaper size={20} /> Latest Health News
        </h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
          {[
            { title: 'Local health camp this Sunday at Panchayat', date: 'Today', type: 'Event' },
            { title: 'New sanitation guidelines released for monsoon', date: 'Yesterday', type: 'News' },
            { title: 'Jan Aushadhi Kendra now open 24/7', date: '3 days ago', type: 'Update' }
          ].map((news, i) => (
            <div key={i} className="article-card glass-panel">
              <div className="article-content">
                <span className="badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>{news.type}</span>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{news.title}</h3>
                <div className="article-meta">
                  <span>{news.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
