'use client';
import React from 'react';
import Link from 'next/link';
import { 
  Users, Activity, AlertTriangle, UserCheck, Syringe, HeartPulse,
  Map as MapIcon, Award, FileText, Package
} from 'lucide-react';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../../../styles/admin.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AdminDashboard() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
  });

  const chartData = {
    labels: ['Nashik', 'Deoli', 'Hinganghat', 'Arvi', 'Ashti'],
    datasets: [
      {
        label: 'Checkups this Month',
        data: [1200, 850, 1050, 600, 530],
        backgroundColor: 'rgba(56, 189, 248, 0.7)',
        borderColor: 'rgba(56, 189, 248, 1)',
        borderWidth: 1,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' as const, labels: { color: '#e2e8f0' } },
      title: { display: true, text: 'Checkup Distribution by Block', color: '#e2e8f0' }
    },
    scales: {
      x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
      y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } }
    }
  };

  return (
    <div className="admin-dashboard-container">
      <header className="admin-header">
        <div>
          <h1 className="text-2xl font-bold">District Health Command Center — Nashik</h1>
          <p className="text-secondary" style={{ marginTop: '0.25rem' }}>{currentDate} | Admin: Dr. Rajesh Kumar</p>
        </div>
        <div className="flex flex-wrap items-center" style={{ gap: '0.75rem' }}>
          <Link href="/admin/analytics/disease-map" className="btn btn-secondary flex items-center text-xs" style={{ gap: '0.5rem' }}>
            <MapIcon size={16} /> View Disease Map
          </Link>
          <Link href="/admin/analytics/asha-performance" className="btn btn-secondary flex items-center text-xs" style={{ gap: '0.5rem' }}>
            <Award size={16} /> ASHA Performance
          </Link>
          <Link href="/admin/reports" className="btn btn-secondary flex items-center text-xs" style={{ gap: '0.5rem' }}>
            <FileText size={16} /> Reports
          </Link>
          <Link href="/admin/inventory" className="btn btn-primary flex items-center text-xs" style={{ gap: '0.5rem' }}>
            <Package size={16} /> Inventory Check
          </Link>
        </div>
      </header>

      <div className="ai-alert-panel">
        <AlertTriangle className="flex-shrink-0" style={{ color: '#ef4444' }} size={24} />
        <div>
          <h3 className="font-bold text-lg" style={{ color: '#ef4444' }}>Outbreak Early Warning</h3>
          <p>⚠️ Cluster of 8 fever cases in Hinganghat block in last 48 hours. Possible Dengue outbreak. Recommend investigation team deployment.</p>
        </div>
      </div>

      <div className="kpi-grid">
        {[
          { title: 'Registered Patients', val: '15,847', trend: '↑ 3.2% this month', icon: Users, up: true },
          { title: 'Checkups This Month', val: '4,230', trend: '↑ 8.5%', icon: Activity, up: true },
          { title: 'Active Disease Alerts', val: '2', trend: 'Dengue, Malaria', icon: AlertTriangle, up: false, noColor: true },
          { title: 'ASHA Coverage', val: '94%', trend: '↑ 2%', icon: UserCheck, up: true },
          { title: 'Vaccination Coverage', val: '87%', trend: '↓ 1%', icon: Syringe, up: false },
          { title: 'Avg Health Score', val: '72/100', trend: '↑ 3', icon: HeartPulse, up: true },
        ].map((kpi, i) => (
          <div key={i} className="kpi-card">
            <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span className="text-secondary" style={{ fontWeight: 500 }}>{kpi.title}</span>
              <kpi.icon style={{ color: '#156d78' }} size={24} />
            </div>
            <div className="kpi-value">{kpi.val}</div>
            <div className={`kpi-trend ${kpi.noColor ? 'text-secondary' : kpi.up ? 'up' : 'down'}`}>
              {kpi.trend}
            </div>
          </div>
        ))}
      </div>

      <div className="analytics-grid">
        <div className="chart-container flex" style={{ flexDirection: 'column' }}>
          <h3 className="font-bold text-xl mb-4">District Block Health Map</h3>
          <div className="map-container" style={{ flexGrow: 1 }}>
            <div className="map-block block-green" style={{ gridColumn: '1 / 3' }}>Nashik (Low Risk)</div>
            <div className="map-block block-yellow">Deoli (Medium Risk)</div>
            <div className="map-block block-red" style={{ gridColumn: '1 / 2' }}>Hinganghat (High Risk)</div>
            <div className="map-block block-green">Arvi (Low Risk)</div>
            <div className="map-block block-yellow">Ashti (Medium Risk)</div>
          </div>
        </div>
        
        <div className="chart-container">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>

      <div className="chart-container">
        <h3 className="font-bold text-xl mb-6">Patient Flow Funnel</h3>
        <div className="health-funnel">
          <div className="funnel-stage" style={{ width: '100%' }}>
            <span>Screened</span><span>12,450</span>
          </div>
          <div className="funnel-stage" style={{ width: '80%', opacity: 0.9 }}>
            <span>Diagnosed</span><span>3,200</span>
          </div>
          <div className="funnel-stage" style={{ width: '70%', opacity: 0.8 }}>
            <span>Treated</span><span>2,890</span>
          </div>
          <div className="funnel-stage" style={{ width: '60%', opacity: 0.7 }}>
            <span>Recovered</span><span>2,450</span>
          </div>
          <div className="funnel-stage" style={{ width: '50%', opacity: 0.6 }}>
            <span>Follow-up Complete</span><span>2,100</span>
          </div>
        </div>
      </div>
    </div>
  );
}
