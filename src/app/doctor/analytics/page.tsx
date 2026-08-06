'use client';

import React from 'react';
import { PieChart, Activity, Users, FileText, ArrowUpRight } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import '../../../styles/doctor.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function AnalyticsPage() {
  const ageData = {
    labels: ['<18', '18-40', '40-60', '60+'],
    datasets: [{
      data: [12, 28, 38, 22],
      backgroundColor: ['#00f0ff', '#00ff88', '#ffd700', '#ff4757'],
      borderWidth: 0,
    }]
  };

  const genderData = {
    labels: ['Male', 'Female', 'Other'],
    datasets: [{
      data: [45, 52, 3],
      backgroundColor: ['#3b82f6', '#ec4899', '#a855f7'],
      borderWidth: 0,
    }]
  };

  const diseaseData = {
    labels: ['Hypertension', 'Diabetes', 'Heart Disease', 'Respiratory', 'Other'],
    datasets: [{
      label: '% of Patients',
      data: [32, 28, 15, 10, 15],
      backgroundColor: 'rgba(0, 240, 255, 0.6)',
      borderColor: 'rgba(0, 240, 255, 1)',
      borderWidth: 1,
    }]
  };

  const monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Consultations',
      data: [125, 132, 140, 145, 138, 150, 160, 142, 0, 0, 0, 0],
      backgroundColor: 'rgba(0, 255, 136, 0.6)',
      borderRadius: 4,
    }]
  };

  const teleData = {
    labels: ['Physical', 'Telemedicine'],
    datasets: [{
      data: [65, 35],
      backgroundColor: ['#8b5cf6', '#0ea5e9'],
      borderWidth: 0,
    }]
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'right' as const, labels: { color: '#e2e8f0' } } }
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { grid: { color: 'rgba(255, 255, 255, 0.05)' } },
      x: { grid: { display: false } }
    },
    plugins: { legend: { display: false } }
  };

  const hBarOptions = {
    ...barOptions,
    indexAxis: 'y' as const,
    scales: {
      y: { grid: { display: false } },
      x: { grid: { color: 'rgba(255, 255, 255, 0.05)' } }
    },
  };

  return (
    <div className="doctor-container">
      <div className="panel-header" style={{ marginBottom: '2rem' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Activity size={32} /> Practice Analytics
          </h1>
          <p style={{ color: 'var(--text-secondary)', margin: '0.5rem 0 0 0' }}>Insights into patient demographics and clinic performance</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label"><FileText size={18} /> Follow-up Compliance</div>
          <div className="stat-value" style={{ color: 'var(--accent-green)' }}>78%</div>
          <div className="stat-label">↑ Improving from 72%</div>
        </div>
        <div className="stat-card">
          <div className="stat-label"><Users size={18} /> Total Referrals Made</div>
          <div className="stat-value">23</div>
          <div className="stat-label">18 resolved, 5 pending</div>
        </div>
        <div className="stat-card">
          <div className="stat-label"><ArrowUpRight size={18} /> Growth (YoY)</div>
          <div className="stat-value">+14%</div>
          <div className="stat-label">Patient volume increasing</div>
        </div>
      </div>

      <div className="analytics-grid">
        <div className="panel">
          <h2 className="panel-title">Monthly Consultations</h2>
          <div className="chart-container">
            <Bar data={monthlyData} options={barOptions} />
          </div>
        </div>
        
        <div className="panel">
          <h2 className="panel-title">Disease Distribution</h2>
          <div className="chart-container">
            <Bar data={diseaseData} options={hBarOptions} />
          </div>
        </div>
        
        <div className="panel">
          <h2 className="panel-title">Patient Demographics (Age)</h2>
          <div className="chart-container">
            <Doughnut data={ageData} options={doughnutOptions} />
          </div>
        </div>
        
        <div className="panel">
          <h2 className="panel-title">Consultation Mode</h2>
          <div className="chart-container">
            <Pie data={teleData} options={doughnutOptions} />
          </div>
        </div>
      </div>

      <div className="panel">
        <h2 className="panel-title">Top 5 Prescribed Drugs</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr style={{ background: 'var(--surface-dark)', textAlign: 'left' }}>
              <th style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)' }}>Drug Name</th>
              <th style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)' }}>Primary Indication</th>
              <th style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)', textAlign: 'right' }}>Prescriptions (YTD)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Amlodipine 5mg', ind: 'Hypertension', count: 452 },
              { name: 'Metformin 500mg', ind: 'Type 2 Diabetes', count: 385 },
              { name: 'Atorvastatin 20mg', ind: 'Hyperlipidemia', count: 310 },
              { name: 'Losartan 50mg', ind: 'Hypertension', count: 284 },
              { name: 'Pantoprazole 40mg', ind: 'GERD / Acidity', count: 195 },
            ].map((drug, i) => (
              <tr key={i}>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)', fontWeight: 500 }}>{drug.name}</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}>{drug.ind}</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)', textAlign: 'right', color: 'var(--accent-cyan)' }}>{drug.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
