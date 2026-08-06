'use client';

import React from 'react';
import { Star, MessageSquare, Flag, TrendingUp, Award } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import '../../../styles/doctor.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function RatingsPage() {
  const trendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Average Monthly Rating',
        data: [4.5, 4.5, 4.6, 4.6, 4.4, 4.7, 4.8, 4.8, null, null, null, null],
        borderColor: '#FFD700',
        backgroundColor: 'rgba(255, 215, 0, 0.1)',
        tension: 0.4,
        fill: true,
      }
    ],
  };

  const dimData = {
    labels: ['Communication', 'Diagnosis Accuracy', 'Punctuality', 'Prescription Clarity', 'Overall'],
    datasets: [
      {
        label: 'Score out of 5',
        data: [4.9, 4.7, 4.6, 4.8, 4.8],
        backgroundColor: 'rgba(0, 240, 255, 0.6)',
        borderColor: 'rgba(0, 240, 255, 1)',
        borderWidth: 1,
      }
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, min: 3, max: 5 },
      x: { grid: { color: 'rgba(255, 255, 255, 0.05)' } }
    },
    plugins: { legend: { display: false } }
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y' as const,
    scales: {
      y: { grid: { display: false } },
      x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, min: 0, max: 5 }
    },
    plugins: { legend: { display: false } }
  };

  const reviews = [
    { initials: 'RK', name: 'R.K.', rating: 5, date: 'Aug 2024', text: 'Dr. Sharma explained everything clearly. Very caring doctor.' },
    { initials: 'SB', name: 'S.B.', rating: 4, date: 'Jul 2024', text: 'Good treatment but had to wait 45 minutes.' },
    { initials: 'GR', name: 'G.R.', rating: 5, date: 'Jul 2024', text: 'Best cardiologist in the district. Highly recommend.' },
    { initials: 'PK', name: 'P.K.', rating: 4, date: 'Jun 2024', text: 'Prescribed the right medicines. Feeling much better.' },
    { initials: 'LD', name: 'L.D.', rating: 5, date: 'Jun 2024', text: 'Video consultation was smooth. Very professional.' },
    { initials: 'AD', name: 'A.D.', rating: 3, date: 'May 2024', text: 'Treatment was fine but clinic was crowded.' },
  ];

  return (
    <div className="doctor-container">
      <header className="panel-header" style={{ marginBottom: '2rem' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Star size={32} color="#FFD700" fill="#FFD700" /> Ratings & Reviews
          </h1>
          <p style={{ color: 'var(--text-secondary)', margin: '0.5rem 0 0 0' }}>Monitor patient satisfaction and feedback</p>
        </div>
        <div style={{ background: 'rgba(0, 255, 136, 0.1)', color: 'var(--accent-green)', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(0, 255, 136, 0.2)' }}>
          <Award size={20} /> You are above the district avg of 4.2
        </div>
      </header>

      <div className="dashboard-grid" style={{ marginBottom: '2rem' }}>
        <div className="panel">
          <h2 className="panel-title"><TrendingUp size={20} /> Rating Trend (12 Months)</h2>
          <div className="chart-container">
            <Line data={trendData} options={chartOptions} />
          </div>
        </div>
        
        <div className="panel">
          <h2 className="panel-title"><Star size={20} /> Rating Dimensions</h2>
          <div className="chart-container">
            <Bar data={dimData} options={barOptions} />
          </div>
        </div>
      </div>

      <div className="panel">
        <div className="panel-header">
          <h2 className="panel-title"><MessageSquare size={20} /> Recent Reviews</h2>
          <select className="form-control" style={{ width: 'auto' }}>
            <option>All Ratings</option>
            <option>5 Stars</option>
            <option>4 Stars</option>
            <option>3 Stars & Below</option>
          </select>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
          {reviews.map((review, i) => (
            <div key={i} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <div className="reviewer-initials">{review.initials}</div>
                  <div>
                    <div style={{ fontWeight: 600 }}>{review.name}</div>
                    <div className="review-meta">{review.date}</div>
                  </div>
                </div>
                <div style={{ color: '#FFD700', display: 'flex' }}>
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} fill={j < review.rating ? 'currentColor' : 'none'} color={j < review.rating ? '#FFD700' : 'var(--glass-border)'} />
                  ))}
                </div>
              </div>
              <div className="review-text">"{review.text}"</div>
              <div className="review-actions">
                <button className="action-btn secondary" style={{ flex: 1, justifyContent: 'center', padding: '0.5rem' }}>
                  Respond
                </button>
                <button className="action-btn secondary" style={{ padding: '0.5rem', color: 'var(--text-secondary)' }} title="Flag Review">
                  <Flag size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="action-btn secondary">Load More Reviews</button>
        </div>
      </div>
    </div>
  );
}
