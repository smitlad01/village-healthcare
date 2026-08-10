'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import '@/styles/globals.css';
import '@/styles/worker.css';
import { Activity, Users, Stethoscope, BedDouble, Siren, FileText, Pill, Package, ShoppingCart, CheckCircle2, ChevronLeft, MessageSquareWarning } from 'lucide-react';

export default function HospitalDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [reordered, setReordered] = useState(false);

  const handleReorder = () => {
    setReordered(true);
    setTimeout(() => setReordered(false), 3000);
  };

  const kpis = [
    { title: 'Doctors Available', value: '45', icon: Stethoscope, color: '#3b82f6', href: '/hospital/doctors' },
    { title: 'Workers Available', value: '120', icon: Users, color: '#10b981', href: '/hospital/workers' },
    { title: 'Appointments Booked', value: '350', icon: Activity, color: '#8b5cf6', href: '/hospital/appointments' },
    { title: 'Beds Occupied', value: '425 / 500', icon: BedDouble, color: '#f59e0b', href: null },
    { title: 'Ambulances Available', value: '12', icon: Siren, color: '#ef4444', href: '/hospital/ambulances' },
    { title: 'Patient Complaints', value: '12', icon: MessageSquareWarning, color: '#ef4444', href: '/hospital/complaints' },
  ];

  const reports = [
    { name: 'BPM / Vitals', count: 340, color: '#3b82f6' },
    { name: 'Diabetes Screening', count: 210, color: '#10b981' },
    { name: 'X-Ray', count: 45, color: '#f59e0b' },
    { name: 'Sonography', count: 28, color: '#ec4899' },
    { name: 'MRI Scan', count: 15, color: '#8b5cf6' },
  ];

  return (
    <div className="worker-container" style={{ minHeight: '100vh', padding: '2rem' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem', fontWeight: 600 }}>
        <ChevronLeft size={20} /> Back to Home
      </Link>
      
      <div className="worker-header mb-8">
        <div>
          <h1 className="worker-title flex items-center gap-2">
            <Activity color="#f43f5e" /> Hospital Administration
          </h1>
          <p className="mt-2 text-secondary" style={{ fontSize: '1.1rem' }}>Central Zone Facility Overview & Diagnostics Portal</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', overflowX: 'auto' }}>
        {['Overview', 'Medical Diagnostics', 'Inventory'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '99px',
              fontWeight: 600,
              background: activeTab === tab ? '#f43f5e' : 'var(--surface)',
              color: activeTab === tab ? '#fff' : 'var(--text-secondary)',
              border: `1px solid ${activeTab === tab ? '#f43f5e' : 'var(--border)'}`,
              transition: 'all 0.2s',
              cursor: 'pointer'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Overview' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {kpis.map((kpi, idx) => (
            kpi.href ? (
              <Link key={idx} href={kpi.href} style={{ textDecoration: 'none' }}>
                <div className="worker-glass-panel hover:opacity-80 transition-opacity" style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', padding: '1rem' }}>
                  <div style={{ padding: '12px', borderRadius: '12px', background: `${kpi.color}15`, color: kpi.color }}>
                    <kpi.icon size={24} />
                  </div>
                  <div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600 }}>{kpi.title}</p>
                    <p style={{ color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: 800 }}>{kpi.value}</p>
                  </div>
                </div>
              </Link>
            ) : (
              <div key={idx} className="worker-glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem' }}>
                <div style={{ padding: '12px', borderRadius: '12px', background: `${kpi.color}15`, color: kpi.color }}>
                  <kpi.icon size={24} />
                </div>
                <div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600 }}>{kpi.title}</p>
                  <p style={{ color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: 800 }}>{kpi.value}</p>
                </div>
              </div>
            )
          ))}
        </div>
      )}

      {activeTab === 'Medical Diagnostics' && (
        <div className="worker-glass-panel">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <FileText color="#3b82f6" /> Diagnostics Reports Today
            </h2>
            <Link href="/hospital/reports">
              <button className="text-sm font-bold px-4 py-2 rounded-full" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.2)' }}>View Full Details</button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {reports.map((report, idx) => (
              <div key={idx} style={{ background: 'var(--background)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{report.name}</span>
                <span style={{ fontWeight: 800, fontSize: '1.75rem', color: report.color }}>{report.count}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'Inventory' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="worker-glass-panel flex flex-col items-center text-center justify-center p-8">
            <div style={{ padding: '1.5rem', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', marginBottom: '1rem' }}>
              <Pill size={48} />
            </div>
            <h3 style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Medicines in Stock</h3>
            <p style={{ color: 'var(--text-primary)', fontSize: '2.5rem', fontWeight: 800 }}>12,450 <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>units</span></p>
          </div>

          <div className="worker-glass-panel flex flex-col items-center text-center justify-center p-8" style={{ border: '1px solid rgba(239, 68, 68, 0.3)' }}>
            <div style={{ padding: '1.5rem', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', marginBottom: '1rem' }}>
              <Package size={48} />
            </div>
            <h3 style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Critical Materials Required</h3>
            <p style={{ color: '#ef4444', fontSize: '2.5rem', fontWeight: 800 }}>45 <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>items</span></p>
            
            <button 
              onClick={handleReorder}
              style={{
                marginTop: '1.5rem',
                padding: '0.75rem 2rem',
                background: reordered ? '#10b981' : '#f43f5e',
                color: '#fff',
                borderRadius: '99px',
                border: 'none',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              {reordered ? <><CheckCircle2 size={18} /> Order Placed Successfully!</> : <><ShoppingCart size={18} /> 1-Click Reorder</>}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
