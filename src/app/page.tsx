"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { User, HeartPulse, Activity, ShieldCheck, Stethoscope, Video, Database, Award, Siren, CheckCircle, MapPin } from 'lucide-react';

const roles = [
  {
    title: 'Patient',
    icon: User,
    color: 'from-teal-400/80 to-teal-600/80',
    borderColor: 'border-teal-500/30',
    glowColor: 'shadow-teal-500/20',
    description: 'Access your health records, book appointments, and earn health rewards.',
    href: '/auth/patient'
  },
  {
    title: 'ASHA / ANM Worker',
    icon: HeartPulse,
    color: 'from-green-400/80 to-green-600/80',
    borderColor: 'border-green-500/30',
    glowColor: 'shadow-green-500/20',
    description: 'Manage village health, conduct checkups, and track immunizations easily.',
    href: '/auth/health-worker'
  },
  {
    title: 'Doctor',
    icon: Stethoscope,
    color: 'from-blue-400/80 to-blue-600/80',
    borderColor: 'border-blue-500/30',
    glowColor: 'shadow-blue-500/20',
    description: 'Consult patients remotely, write smart prescriptions, manage practice.',
    href: '/auth/doctor'
  },
  {
    title: 'Government Admin',
    icon: ShieldCheck,
    color: 'from-purple-400/80 to-purple-600/80',
    borderColor: 'border-purple-500/30',
    glowColor: 'shadow-purple-500/20',
    description: 'View district analytics, outbreak mapping, and scheme management.',
    href: '/auth/admin'
  }
];

const stats = [
  { label: 'Villages Covered', value: '15,000+', icon: MapPinIcon },
  { label: 'Active Patients', value: '2M+', icon: User },
  { label: 'Health Workers', value: '50,000+', icon: HeartPulse },
  { label: 'Specialist Doctors', value: '10,000+', icon: Stethoscope },
];

const features = [
  { title: 'AI Diagnostics', description: 'Early disease detection powered by advanced machine learning models tailored for Indian demographics.', icon: Activity },
  { title: 'Telemedicine', description: 'High-quality remote consultations connecting rural patients with specialist urban doctors instantly.', icon: Video },
  { title: 'Offline-First', description: 'Fully functional without internet. Syncs data automatically when connectivity is restored.', icon: Database },
  { title: 'Gamification', description: 'Reward system for health workers and patients to encourage regular checkups and healthy habits.', icon: Award },
  { title: '8+ Languages', description: 'Native support for regional languages including audio-visual guidance for low-literacy users.', icon: MessageCircleIcon },
  { title: 'Emergency SOS', description: 'One-tap emergency response system alerting local ambulances and health workers instantly.', icon: Siren },
];

const testimonials = [
  { name: 'Ramesh Kumar', role: 'Patient, Maharashtra', quote: 'I used to travel 30km to see a doctor. Now I consult them from my village center through V-HAIN. It saved my time and money.' },
  { name: 'Sunita Devi', role: 'ASHA Worker, Bihar', quote: 'The app works even when there is no network. It helps me track all pregnancies and vaccinations in my village effortlessly.' },
  { name: 'Dr. Ananya Sharma', role: 'Cardiologist, Delhi', quote: 'V-HAIN allows me to provide specialist care to remote areas. The AI pre-screening reports are incredibly accurate and save time.' }
];

export default function LandingPage() {
  const [isDemoMode, setIsDemoMode] = useState(true);

  return (
    <div className="min-h-screen bg-[var(--bg-main)]">
      {/* CSS for particle background */}
      <style dangerouslySetInnerHTML={{__html: `
        .particle-bg {
          position: absolute;
          inset: 0;
          z-index: -1;
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 100%);
          animation: particle-drift 20s linear infinite;
        }
        @keyframes particle-drift {
          0% { background-position: 0 0; }
          100% { background-position: 30px 30px; }
        }
      `}} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="particle-bg" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-[var(--accent)]/30 text-[var(--accent)] text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
            </span>
            Now Live in 15,000+ Villages
          </div>

          <h1 className="font-heading text-7xl md:text-9xl font-black mb-4 tracking-tighter relative">
            <span className="absolute -inset-2 blur-3xl opacity-30 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500"></span>
            <span className="relative bg-clip-text text-transparent bg-gradient-to-br from-white via-teal-50 to-teal-400 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]">
              V-HAIN
            </span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            Village Health AI Network
          </h2>
          
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed mb-8">
            AI-powered, offline-first healthcare platform bringing specialist care to every village in India.
          </p>

          {/* Demo Mode Toggle */}
          <div className="flex items-center justify-center gap-4 mt-4 glass-panel px-6 py-3 rounded-full border border-[var(--glass-border)]">
            <span className={`text-sm font-bold ${!isDemoMode ? 'text-white' : 'text-[var(--text-secondary)]'}`}>Live Mode (Auth)</span>
            <button 
              onClick={() => setIsDemoMode(!isDemoMode)}
              className={`w-14 h-7 rounded-full p-1 transition-colors shadow-inner flex items-center ${isDemoMode ? 'bg-[var(--accent)]' : 'bg-gray-600'}`}
            >
              <div className={`w-5 h-5 rounded-full bg-white transition-transform transform shadow-md ${isDemoMode ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-bold ${isDemoMode ? 'text-[var(--accent)] drop-shadow-[0_0_8px_rgba(126,191,26,0.8)]' : 'text-[var(--text-secondary)]'}`}>Demo Mode (Auto-Login)</span>
          </div>
        </motion.div>
      </section>

      {/* Role Gateway Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full relative z-10 -mt-20">
        <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {roles.map((role, idx) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Link 
                href={
                  isDemoMode 
                    ? (role.title === 'Patient' ? '/patient/dashboard' 
                      : role.title === 'Doctor' ? '/doctor/dashboard'
                      : role.title === 'Government Admin' ? '/admin/dashboard'
                      : '/worker/dashboard')
                    : role.href
                } 
                className="block group h-full"
              >
                <div className={`glass-panel p-8 h-full flex flex-col items-start rounded-2xl border ${role.borderColor} hover:${role.glowColor} hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 relative overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${role.color} rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity`} />
                  
                  <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${role.color} text-white shadow-lg`}>
                    <role.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl font-bold font-heading mb-3 text-white group-hover:text-[var(--accent)] transition-colors">
                    {role.title}
                  </h3>
                  
                  <p className="text-[var(--text-secondary)] leading-relaxed flex-1">
                    {role.description}
                  </p>
                  
                  <div className="mt-6 flex items-center text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    Access Portal <ChevronRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-black/40 border-y border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem' }}>
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 glass-panel rounded-2xl"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 text-[var(--primary)]" />
              </div>
              <div className="text-4xl md:text-5xl font-black font-heading text-white mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                {stat.value}
              </div>
              <div className="text-[var(--text-secondary)] font-medium text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">Comprehensive Care Platform</h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">Built from the ground up to solve the unique challenges of rural healthcare.</p>
        </div>
        
        <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover:bg-white/[0.04] transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--surface-light)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-[var(--accent)]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-black/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">Voices from the Villages</h2>
            <p className="text-xl text-[var(--text-secondary)]">How V-HAIN is changing lives across the country.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-2xl flex flex-col justify-between"
              >
                <div className="mb-6 text-4xl text-[var(--accent)] opacity-50">"</div>
                <p className="text-lg text-[var(--text-primary)] leading-relaxed italic mb-8 flex-1">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-[var(--text-muted)]">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/80 pt-16 pb-8 px-6 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--primary)] flex items-center justify-center text-white font-bold font-heading">
                V
              </div>
              <span className="font-heading font-bold text-xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                V-HAIN
              </span>
            </div>
            <p className="text-[var(--text-secondary)] max-w-sm mb-6">
              Empowering rural India with accessible, AI-driven, and offline-capable healthcare solutions.
            </p>
            <div className="flex gap-4">
              <div className="glass-panel px-4 py-2 rounded-lg flex items-center gap-2">
                <Siren className="w-5 h-5 text-[var(--danger)]" />
                <span className="font-bold text-white">Emergency: 108</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Portals</h4>
            <ul className="space-y-3 text-[var(--text-secondary)]">
              <li><Link href="/auth/patient" className="hover:text-white transition-colors">Patient Portal</Link></li>
              <li><Link href="/auth/health-worker" className="hover:text-white transition-colors">Health Worker Dashboard</Link></li>
              <li><Link href="/auth/doctor" className="hover:text-white transition-colors">Doctor Console</Link></li>
              <li><Link href="/auth/admin" className="hover:text-white transition-colors">Admin Panel</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-[var(--text-secondary)]">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-sm text-[var(--text-muted)] flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 V-HAIN (Village Health AI Network). All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span>Built for India</span>
            <span className="text-red-500">❤️</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Simple missing icons to prevent errors if not imported from lucide-react directly
function MapPinIcon(props: any) {
  return <MapPin {...props} />;
}
function MessageCircleIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>;
}
function ChevronRightIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>;
}
