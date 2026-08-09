"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  User, 
  HeartPulse, 
  Activity, 
  ShieldCheck, 
  Stethoscope, 
  Video, 
  Database, 
  Award, 
  Siren, 
  MapPin,
  ChevronRight,
  BedDouble, 
  Users, 
  FileText, 
  Pill, 
  Package, 
  ShoppingCart, 
  CheckCircle2
} from 'lucide-react';

const roles = [
  {
    title: 'Patient Portal',
    roleTag: 'Citizens & Families',
    icon: User,
    gradient: 'linear-gradient(to bottom right, #2dd4bf, #0d9488)',
    borderColor: 'rgba(20, 184, 166, 0.4)',
    description: 'Access health records, book PHC appointments, and redeem health reward vouchers.',
    href: '/auth/patient'
  },
  {
    title: 'ASHA / ANM Worker',
    roleTag: 'Field Healthcare',
    icon: HeartPulse,
    gradient: 'linear-gradient(to bottom right, #34d399, #059669)',
    borderColor: 'rgba(16, 185, 129, 0.4)',
    description: 'Conduct home visits, log offline vital records, and earn direct benefit transfer bonuses.',
    href: '/auth/health-worker'
  },
  {
    title: 'Doctor Console',
    roleTag: 'Remote Consultation',
    icon: Stethoscope,
    gradient: 'linear-gradient(to bottom right, #60a5fa, #2563eb)',
    borderColor: 'rgba(59, 130, 246, 0.4)',
    description: 'Conduct Tele-consultations, issue AI e-prescriptions, and manage OPD patient queues.',
    href: '/auth/doctor'
  },
  {
    title: 'Government Admin',
    roleTag: 'District Surveillance',
    icon: ShieldCheck,
    gradient: 'linear-gradient(to bottom right, #c084fc, #9333ea)',
    borderColor: 'rgba(168, 85, 247, 0.4)',
    description: 'Monitor GIS disease maps, track ASHA performance, and manage PHC medicine stock.',
    href: '/auth/admin'
  },
  {
    title: 'Hospital Administration',
    roleTag: 'Facility Management',
    icon: Activity,
    gradient: 'linear-gradient(to bottom right, #f43f5e, #be123c)',
    borderColor: 'rgba(244, 63, 94, 0.4)',
    description: 'Monitor hospital KPIs, manage inventory, and track medical diagnostic reports in real-time.',
    href: '/auth/hospital'
  }
];

const stats = [
  { label: 'Zones Covered', value: '15,000+', icon: MapPin },
  { label: 'Active Patients', value: '2M+', icon: User },
  { label: 'Health Workers', value: '50,000+', icon: HeartPulse },
  { label: 'Specialist Doctors', value: '10,000+', icon: Stethoscope },
];

const features = [
  { title: 'AI Diagnostics', description: 'Early disease detection powered by advanced machine learning models tailored for Indian demographics.', icon: Activity },
  { title: 'Telemedicine', description: 'High-quality remote consultations connecting rural patients with specialist urban doctors instantly.', icon: Video },
  { title: 'Offline-First', description: 'Fully functional without internet. Syncs data automatically when connectivity is restored.', icon: Database },
  { title: 'Gamification', description: 'Reward system for health workers and patients to encourage regular checkups and healthy habits.', icon: Award },
  { title: '8+ Languages', description: 'Native support for regional languages including audio-visual guidance for low-literacy users.', icon: MapPin },
  { title: 'Emergency SOS', description: 'One-tap emergency response system alerting local ambulances and health workers instantly.', icon: Siren },
];

const testimonials = [
  { name: 'Ramesh Kumar', role: 'Patient, Nashik District', quote: 'I used to travel 30km to see a doctor. Now I consult them from my zone center through U-HAIN. It saved my time and money.' },
  { name: 'Sunita Devi', role: 'ASHA Worker, Maharashtra', quote: 'The app works even when there is no network. It helps me track all pregnancies and vaccinations in my zone effortlessly.' },
  { name: 'Dr. Ananya Sharma', role: 'Cardiologist, Delhi', quote: 'U-HAIN allows me to provide specialist care to remote areas. The AI pre-screening reports are incredibly accurate and save time.' }
];

export default function LandingPage() {
  const [isDemoMode, setIsDemoMode] = useState(true);
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);
  const [hospitalTab, setHospitalTab] = useState('Overview');
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
  ];

  const reports = [
    { name: 'BPM / Vitals', count: 340, color: '#3b82f6' },
    { name: 'Diabetes Screening', count: 210, color: '#10b981' },
    { name: 'X-Ray', count: 45, color: '#f59e0b' },
    { name: 'Sonography', count: 28, color: '#ec4899' },
    { name: 'MRI Scan', count: 15, color: '#8b5cf6' },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* ── Compact Hero Section (Above the Fold Sizing) ── */}
      <section className="relative flex flex-col items-center justify-center text-center" style={{ paddingTop: '2rem', paddingBottom: '1rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', overflow: 'hidden' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto flex flex-col items-center"
          style={{ maxWidth: '56rem' }}
        >
          {/* Status Badge */}
          <div 
            className="flex items-center gap-2 rounded-full text-xs font-bold mb-3"
            style={{ padding: '6px 14px', backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#6ee7b7' }}
          >
            <span className="relative flex" style={{ height: '8px', width: '8px' }}>
              <span className="absolute flex h-full w-full rounded-full" style={{ backgroundColor: '#34d399', opacity: 0.75, animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite' }}></span>
              <span className="relative flex rounded-full h-full w-full" style={{ backgroundColor: '#34d399' }}></span>
            </span>
            Live Operational Network Across 15,000+ Indian Zones
          </div>

          {/* Main Brand Heading */}
          <h1 className="font-black mb-2" style={{ fontSize: '3rem', letterSpacing: '-0.025em', lineHeight: 1 }}>
            <span style={{ 
              background: 'linear-gradient(to right, #ffffff, #ccfbf1, #59b6c2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              U-HAIN
            </span>
          </h1>
          
          <h2 className="text-xl font-bold mb-3" style={{ 
            background: 'linear-gradient(to right, #f3f4f6, #e5e7eb, #9ca3af)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Universal Health AI Network
          </h2>
          
          {/* Subheadline (High Contrast & Readable) */}
          <p className="text-sm sm:text-lg font-medium mx-auto mb-5" style={{ color: '#e5e7eb', lineHeight: '1.625', maxWidth: '42rem' }}>
            AI-powered, offline-first healthcare platform bringing specialist care, diagnostics, and district surveillance to every zone.
          </p>

          {/* ── Refined Mode Toggle Switch ── */}
          <div 
            className="flex items-center justify-center gap-3 rounded-full mb-4"
            style={{ padding: '10px 20px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
          >
            <span 
              className="text-xs font-bold"
              style={{
                transition: 'all 0.2s',
                ...(!isDemoMode ? { color: 'var(--text-primary)', backgroundColor: 'rgba(20, 184, 166, 0.3)', padding: '4px 10px', borderRadius: '9999px', border: '1px solid rgba(20, 184, 166, 0.4)' } : { color: '#9ca3af', padding: '4px 10px', border: '1px solid transparent' })
              }}
            >
              Live Mode (Auth)
            </span>
            
            <button 
              onClick={() => setIsDemoMode(!isDemoMode)}
              className="rounded-full p-1 flex items-center"
              style={{ 
                width: '56px', height: '28px',
                transition: 'all 0.3s',
                cursor: 'pointer',
                backgroundColor: isDemoMode ? '#7ebf1a' : '#0d9488',
                boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
                border: 'none'
              }}
              aria-label="Toggle Demo Mode"
            >
              <div 
                className="rounded-full"
                style={{ 
                  width: '20px', height: '20px', backgroundColor: '#ffffff', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s',
                  transform: isDemoMode ? 'translateX(28px)' : 'translateX(0)'
                }}
              />
            </button>

            <span 
              className="text-xs font-bold"
              style={{
                transition: 'all 0.2s',
                ...(isDemoMode ? { color: '#7ebf1a', backgroundColor: 'rgba(126, 191, 26, 0.2)', padding: '4px 10px', borderRadius: '9999px', border: '1px solid rgba(126, 191, 26, 0.4)', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' } : { color: '#9ca3af', padding: '4px 10px', border: '1px solid transparent' })
              }}
            >
              Demo Mode (1-Click Login)
            </span>
          </div>
        </motion.div>
      </section>

      {/* ── Role Gateway Section (Pulled Up Above the Fold) ── */}
      <section className="p-4 mx-auto w-full relative z-10" style={{ maxWidth: '80rem' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {roles.map((role, idx) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
            >
              <Link 
                href={
                  isDemoMode 
                    ? (role.title === 'Patient Portal' ? '/patient/dashboard' 
                      : role.title === 'Doctor Console' ? '/doctor/dashboard'
                      : role.title === 'Government Admin' ? '/admin/dashboard'
                      : role.title === 'Hospital Administration' ? '/hospital/dashboard'
                      : '/worker/dashboard')
                    : role.href
                } 
                className="block h-full"
                style={{ textDecoration: 'none' }}
                onMouseEnter={() => setHoveredRole(role.title)}
                onMouseLeave={() => setHoveredRole(null)}
              >
                <div 
                  className="p-6 h-full flex flex-col justify-between rounded-2xl relative overflow-hidden"
                  style={{ 
                    backgroundColor: 'var(--surface)',
                    border: `1px solid ${hoveredRole === role.title ? 'rgba(255, 255, 255, 0.4)' : role.borderColor}`,
                    boxShadow: hoveredRole === role.title ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : 'none',
                    transform: hoveredRole === role.title ? 'translateY(-6px)' : 'none',
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  <div 
                    className="absolute top-0 right-0 rounded-bl-full" 
                    style={{ 
                      width: '112px', height: '112px', 
                      background: role.gradient, 
                      opacity: hoveredRole === role.title ? 0.25 : 0.1,
                      transition: 'opacity 0.3s ease-in-out'
                    }} 
                  />
                  
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div 
                        className="rounded-xl flex items-center justify-center p-3"
                        style={{ 
                          width: '52px', height: '52px', 
                          background: role.gradient,
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#ffffff',
                          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        <role.icon style={{ width: '28px', height: '28px', strokeWidth: 2.25 }} />
                      </div>
                      <span 
                        className="text-xs font-black rounded-md"
                        style={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: '#d1d5db', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '2px 8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                      >
                        {role.roleTag}
                      </span>
                    </div>
                    
                    <h3 
                      className="text-xl font-black mb-2"
                      style={{ 
                        color: hoveredRole === role.title ? '#59b6c2' : 'var(--text-primary)',
                        transition: 'color 0.3s'
                      }}
                    >
                      {role.title}
                    </h3>
                    
                    <p className="text-xs mb-4" style={{ color: '#d1d5db', lineHeight: '1.625' }}>
                      {role.description}
                    </p>
                  </div>
                  
                  <div 
                    className="pt-3 flex items-center justify-between text-xs font-bold"
                    style={{ 
                      borderTop: '1px solid var(--border)', 
                      color: hoveredRole === role.title ? 'var(--text-primary)' : '#59b6c2',
                      transition: 'color 0.3s'
                    }}
                  >
                    <span>Access Portal</span>
                    <ChevronRight 
                      style={{ 
                        width: '16px', height: '16px',
                        transform: hoveredRole === role.title ? 'translateX(4px)' : 'none',
                        transition: 'transform 0.3s'
                      }} 
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="p-6 mt-6" style={{ paddingBottom: '3rem', paddingTop: '3rem', backgroundColor: 'rgba(0, 0, 0, 0.4)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="mx-auto grid grid-cols-2 gap-6" style={{ maxWidth: '80rem' }}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-2xl" style={{ border: '1px solid var(--border)', backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
              <div className="flex justify-center mb-3">
                <stat.icon style={{ width: '28px', height: '28px', color: '#59b6c2' }} />
              </div>
              <div className="text-2xl sm:text-3xl font-black mb-1" style={{ color: 'var(--text-primary)' }}>
                {stat.value}
              </div>
              <div className="text-xs font-bold" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', color: '#9ca3af' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features Section ── */}
      <section className="p-6 mx-auto w-full" style={{ paddingBottom: '4rem', paddingTop: '4rem', maxWidth: '80rem' }}>
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Comprehensive Care Platform</h2>
          <p className="text-sm mx-auto" style={{ color: '#d1d5db', maxWidth: '36rem' }}>Built from the ground up to solve rural healthcare challenges in India.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="p-6 rounded-2xl" 
              style={{ border: '1px solid var(--border)', backgroundColor: 'rgba(255, 255, 255, 0.03)', transition: 'border-color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'} 
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
            >
              <div 
                className="rounded-xl flex items-center justify-center mb-4"
                style={{ width: '44px', height: '44px', backgroundColor: 'rgba(21, 109, 120, 0.3)', border: '1px solid rgba(21, 109, 120, 0.5)', color: '#59b6c2' }}
              >
                <feature.icon style={{ width: '24px', height: '24px', strokeWidth: 2 }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{feature.title}</h3>
              <p className="text-xs" style={{ color: '#d1d5db', lineHeight: '1.625' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="p-6" style={{ paddingBottom: '4rem', paddingTop: '4rem', background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6))', borderTop: '1px solid var(--border)' }}>
        <div className="mx-auto" style={{ maxWidth: '80rem' }}>
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Voices from the Zones</h2>
            <p className="text-sm" style={{ color: '#d1d5db' }}>How U-HAIN is transforming healthcare access across India.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-2xl flex flex-col justify-between" style={{ border: '1px solid var(--border)', backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
                <p className="text-sm italic mb-6" style={{ color: '#e5e7eb', lineHeight: '1.625' }}>
                  "{t.quote}"
                </p>
                <div className="pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                  <div className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{t.name}</div>
                  <div className="text-xs" style={{ color: '#59b6c2' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Embedded Hospital Dashboard ── */}
      <section className="p-6 mx-auto w-full" style={{ paddingBottom: '4rem', paddingTop: '4rem', maxWidth: '80rem', borderTop: '1px solid var(--border)' }}>
        <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <Activity size={28} color="#f43f5e" /> Hospital Live Dashboard
            </h2>
            <p className="text-sm" style={{ color: '#d1d5db' }}>Central Zone Facility Overview & Diagnostics Portal</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-2 overflow-x-auto">
            {['Overview', 'Medical Diagnostics', 'Inventory'].map(tab => (
              <button 
                key={tab}
                onClick={() => setHospitalTab(tab)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '99px',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  background: hospitalTab === tab ? '#f43f5e' : 'rgba(255, 255, 255, 0.05)',
                  color: hospitalTab === tab ? '#fff' : 'var(--text-secondary)',
                  border: `1px solid ${hospitalTab === tab ? '#f43f5e' : 'var(--border)'}`,
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {hospitalTab === 'Overview' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {kpis.map((kpi, idx) => (
              kpi.href ? (
                <Link key={idx} href={kpi.href} style={{ textDecoration: 'none' }}>
                  <div className="p-4 rounded-xl flex items-center gap-4 hover:opacity-80 transition-opacity" style={{ background: 'var(--surface)', border: '1px solid var(--border)', cursor: 'pointer' }}>
                    <div style={{ padding: '12px', borderRadius: '12px', background: `${kpi.color}15`, color: kpi.color }}>
                      <kpi.icon size={24} />
                    </div>
                    <div>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 600 }}>{kpi.title}</p>
                      <p style={{ color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: 800 }}>{kpi.value}</p>
                    </div>
                  </div>
                </Link>
              ) : (
                <div key={idx} className="p-4 rounded-xl flex items-center gap-4" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <div style={{ padding: '12px', borderRadius: '12px', background: `${kpi.color}15`, color: kpi.color }}>
                    <kpi.icon size={24} />
                  </div>
                  <div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 600 }}>{kpi.title}</p>
                    <p style={{ color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: 800 }}>{kpi.value}</p>
                  </div>
                </div>
              )
            ))}
          </div>
        )}

        {hospitalTab === 'Medical Diagnostics' && (
          <div className="p-6 rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <FileText color="#3b82f6" /> Diagnostics Reports Today
              </h3>
              <Link href="/hospital/reports">
                <button className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.2)' }}>View Full Details</button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {reports.map((report, idx) => (
                <div key={idx} style={{ background: 'var(--background)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'block', marginBottom: '8px' }}>{report.name}</span>
                  <span style={{ fontWeight: 800, fontSize: '1.5rem', color: report.color }}>{report.count}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {hospitalTab === 'Inventory' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center text-center justify-center p-8 rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div style={{ padding: '1.5rem', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', marginBottom: '1rem' }}>
                <Pill size={40} />
              </div>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.9rem' }}>Medicines in Stock</h3>
              <p style={{ color: 'var(--text-primary)', fontSize: '2rem', fontWeight: 800 }}>12,450 <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>units</span></p>
            </div>

            <div className="flex flex-col items-center text-center justify-center p-8 rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
              <div style={{ padding: '1.5rem', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', marginBottom: '1rem' }}>
                <Package size={40} />
              </div>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.9rem' }}>Critical Materials Required</h3>
              <p style={{ color: '#ef4444', fontSize: '2rem', fontWeight: 800 }}>45 <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>items</span></p>
              
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
      </section>

      {/* ── Footer ── */}
      <footer className="p-6 mt-auto" style={{ paddingBottom: '2rem', paddingTop: '3rem', borderTop: '1px solid var(--border)', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" style={{ maxWidth: '80rem' }}>
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="rounded-xl flex items-center justify-center font-bold"
                style={{ width: '36px', height: '36px', background: 'linear-gradient(to bottom right, #7ebf1a, #156d78)', color: '#ffffff', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              >
                <HeartPulse size={20} />
              </div>
              <span className="font-black text-xl" style={{ letterSpacing: '0.05em', color: 'var(--text-primary)' }}>
                U-HAIN
              </span>
            </div>
            <p className="text-xs mb-4" style={{ color: '#9ca3af', maxWidth: '24rem' }}>
              Empowering rural India with accessible, AI-driven, and offline-capable healthcare solutions.
            </p>
            <div className="flex gap-4">
              <div 
                className="p-2 rounded-lg flex items-center gap-2"
                style={{ border: '1px solid rgba(239, 68, 68, 0.3)', backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
              >
                <Siren style={{ width: '16px', height: '16px', color: '#f87171' }} />
                <span className="font-bold text-xs" style={{ color: 'var(--text-primary)' }}>National Health Helpline: 108</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-sm mb-3" style={{ color: 'var(--text-primary)' }}>Portals</h4>
            <ul className="text-xs" style={{ color: '#9ca3af', listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><Link href="/auth/patient" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>Patient Portal</Link></li>
              <li><Link href="/auth/health-worker" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>Health Worker Dashboard</Link></li>
              <li><Link href="/auth/doctor" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>Doctor Console</Link></li>
              <li><Link href="/auth/admin" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>Admin Panel</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm mb-3" style={{ color: 'var(--text-primary)' }}>Resources</h4>
            <ul className="text-xs" style={{ color: '#9ca3af', listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>About Us</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>Help Center</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>Privacy Policy</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center text-xs" style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border)', color: '#6b7280', maxWidth: '80rem' }}>
          <p>© 2026 U-HAIN (Universal Health AI Network). All rights reserved.</p>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <span>Built for Rural India</span>
            <span style={{ color: '#ef4444' }}>❤️</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
