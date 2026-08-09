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
  ChevronRight
} from 'lucide-react';

const roles = [
  {
    title: 'Patient Portal',
    roleTag: 'Citizens & Families',
    icon: User,
    color: 'from-teal-400 to-teal-600',
    borderColor: 'border-teal-500/40',
    glowColor: 'shadow-teal-500/20',
    description: 'Access health records, book PHC appointments, and redeem health reward vouchers.',
    href: '/auth/patient'
  },
  {
    title: 'ASHA / ANM Worker',
    roleTag: 'Field Healthcare',
    icon: HeartPulse,
    color: 'from-emerald-400 to-emerald-600',
    borderColor: 'border-emerald-500/40',
    glowColor: 'shadow-emerald-500/20',
    description: 'Conduct home visits, log offline vital records, and earn direct benefit transfer bonuses.',
    href: '/auth/health-worker'
  },
  {
    title: 'Doctor Console',
    roleTag: 'Remote Consultation',
    icon: Stethoscope,
    color: 'from-blue-400 to-blue-600',
    borderColor: 'border-blue-500/40',
    glowColor: 'shadow-blue-500/20',
    description: 'Conduct Tele-consultations, issue AI e-prescriptions, and manage OPD patient queues.',
    href: '/auth/doctor'
  },
  {
    title: 'Government Admin',
    roleTag: 'District Surveillance',
    icon: ShieldCheck,
    color: 'from-purple-400 to-purple-600',
    borderColor: 'border-purple-500/40',
    glowColor: 'shadow-purple-500/20',
    description: 'Monitor GIS disease maps, track ASHA performance, and manage PHC medicine stock.',
    href: '/auth/admin'
  }
];

const stats = [
  { label: 'Villages Covered', value: '15,000+', icon: MapPin },
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
  { name: 'Ramesh Kumar', role: 'Patient, Nashik District', quote: 'I used to travel 30km to see a doctor. Now I consult them from my village center through V-HAIN. It saved my time and money.' },
  { name: 'Sunita Devi', role: 'ASHA Worker, Maharashtra', quote: 'The app works even when there is no network. It helps me track all pregnancies and vaccinations in my village effortlessly.' },
  { name: 'Dr. Ananya Sharma', role: 'Cardiologist, Delhi', quote: 'V-HAIN allows me to provide specialist care to remote areas. The AI pre-screening reports are incredibly accurate and save time.' }
];

export default function LandingPage() {
  const [isDemoMode, setIsDemoMode] = useState(true);

  return (
    <div className="min-h-screen bg-[#041416]">
      {/* ── Compact Hero Section (Above the Fold Sizing) ── */}
      <section className="relative pt-6 sm:pt-8 pb-4 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            Live Operational Network Across 15,000+ Indian Villages
          </div>

          {/* Main Brand Heading */}
          <h1 className="font-heading text-5xl sm:text-7xl font-black tracking-tight text-white mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-100 to-[#59b6c2]">
              V-HAIN
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-400">
            Village Health AI Network
          </h2>
          
          {/* Subheadline (High Contrast & Readable) */}
          <p className="text-base sm:text-lg text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed mb-5">
            AI-powered, offline-first healthcare platform bringing specialist care, diagnostics, and district surveillance to every village.
          </p>

          {/* ── Refined Mode Toggle Switch ── */}
          <div className="flex items-center justify-center gap-3 bg-[#072529] px-5 py-2.5 rounded-full border border-white/20 shadow-lg mb-4">
            <span className={`text-xs font-bold transition-colors ${!isDemoMode ? 'text-white bg-teal-500/30 px-2.5 py-1 rounded-full border border-teal-500/40' : 'text-gray-400'}`}>
              Live Mode (Auth)
            </span>
            
            <button 
              onClick={() => setIsDemoMode(!isDemoMode)}
              className={`w-14 h-7 rounded-full p-1 transition-all shadow-inner flex items-center cursor-pointer ${isDemoMode ? 'bg-[#7ebf1a]' : 'bg-teal-600'}`}
              aria-label="Toggle Demo Mode"
            >
              <div className={`w-5 h-5 rounded-full bg-white transition-transform transform shadow-md ${isDemoMode ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>

            <span className={`text-xs font-bold transition-colors ${isDemoMode ? 'text-[#7ebf1a] bg-[#7ebf1a]/20 px-2.5 py-1 rounded-full border border-[#7ebf1a]/40 shadow-sm' : 'text-gray-400'}`}>
              Demo Mode (1-Click Login)
            </span>
          </div>
        </motion.div>
      </section>

      {/* ── Role Gateway Section (Pulled Up Above the Fold) ── */}
      <section className="py-4 px-6 max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                      : '/worker/dashboard')
                    : role.href
                } 
                className="block group h-full"
              >
                <div className={`glass-card p-6 h-full flex flex-col justify-between rounded-2xl border ${role.borderColor} hover:border-white/40 hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1.5 relative overflow-hidden bg-[#072529]`}>
                  <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${role.color} rounded-bl-full opacity-10 group-hover:opacity-25 transition-opacity`} />
                  
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-13 h-13 rounded-xl flex items-center justify-center bg-gradient-to-br ${role.color} text-white shadow-lg border border-white/20 p-3`}>
                        <role.icon className="w-7 h-7 stroke-[2.25]" />
                      </div>
                      <span className="text-[10px] uppercase font-black tracking-widest text-gray-300 bg-white/10 px-2 py-0.5 rounded-md border border-white/10">
                        {role.roleTag}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-black font-heading mb-2 text-white group-hover:text-[#59b6c2] transition-colors">
                      {role.title}
                    </h3>
                    
                    <p className="text-xs text-gray-300 leading-relaxed mb-4">
                      {role.description}
                    </p>
                  </div>
                  
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#59b6c2] group-hover:text-white transition-colors">
                    <span>Access Portal</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="py-12 px-6 mt-6 bg-black/40 border-y border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-5 glass-card rounded-2xl border border-white/10">
              <div className="flex justify-center mb-3">
                <stat.icon className="w-7 h-7 text-[#59b6c2]" />
              </div>
              <div className="text-3xl md:text-4xl font-black font-heading text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 font-semibold text-xs uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features Section ── */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2 text-white">Comprehensive Care Platform</h2>
          <p className="text-base text-gray-300 max-w-xl mx-auto">Built from the ground up to solve rural healthcare challenges in India.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="glass-card p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <div className="w-11 h-11 rounded-xl bg-[#156d78]/30 border border-[#156d78]/50 flex items-center justify-center mb-4 text-[#59b6c2]">
                <feature.icon className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-black/60 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2 text-white">Voices from the Villages</h2>
            <p className="text-base text-gray-300">How V-HAIN is transforming healthcare access across India.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
                <p className="text-sm text-gray-200 italic mb-6 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-3 border-t border-white/10">
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-[#59b6c2]">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 bg-black/80 pt-12 pb-8 px-6 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7ebf1a] to-[#156d78] flex items-center justify-center text-white font-bold font-heading shadow-md">
                <HeartPulse size={20} />
              </div>
              <span className="font-heading font-black text-xl tracking-wider text-white">
                V-HAIN
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-sm mb-4">
              Empowering rural India with accessible, AI-driven, and offline-capable healthcare solutions.
            </p>
            <div className="flex gap-4">
              <div className="glass-card px-4 py-2 rounded-lg flex items-center gap-2 border border-red-500/30 bg-red-500/10">
                <Siren className="w-4 h-4 text-red-400" />
                <span className="font-bold text-xs text-white">National Health Helpline: 108</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-sm text-white mb-3">Portals</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href="/auth/patient" className="hover:text-white transition-colors">Patient Portal</Link></li>
              <li><Link href="/auth/health-worker" className="hover:text-white transition-colors">Health Worker Dashboard</Link></li>
              <li><Link href="/auth/doctor" className="hover:text-white transition-colors">Doctor Console</Link></li>
              <li><Link href="/auth/admin" className="hover:text-white transition-colors">Admin Panel</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm text-white mb-3">Resources</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 V-HAIN (Village Health AI Network). All rights reserved.</p>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <span>Built for Rural India</span>
            <span className="text-red-500">❤️</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
