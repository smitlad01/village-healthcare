'use client';

import React from 'react';
import '@/styles/globals.css';
import '@/styles/worker.css';
import { Syringe, ShieldCheck, AlertCircle, CalendarRange } from 'lucide-react';

export default function ImmunizationTracker() {
  const vaccines = [
    { name: 'BCG', coverage: 95, target: 100, color: '#10b981' },
    { name: 'OPV', coverage: 89, target: 100, color: '#3b82f6' },
    { name: 'Pentavalent', coverage: 85, target: 100, color: '#8b5cf6' },
    { name: 'Measles', coverage: 82, target: 100, color: '#f59e0b' },
    { name: 'DPT Booster', coverage: 78, target: 100, color: '#ef4444' },
  ];

  return (
    <div className="worker-container">
      <div className="worker-header">
        <h1 className="worker-title flex items-center gap-3">
          <Syringe className="text-blue-400" size={32} /> Immunization Tracker
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="worker-glass-panel md:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Village Wardha</h2>
              <p className="text-slate-400">Current Cohort Coverage</p>
            </div>
            <div className="text-4xl font-bold text-emerald-400 flex items-center gap-2">
              87% <ShieldCheck size={32} />
            </div>
          </div>

          <div className="space-y-6 mt-8">
            {vaccines.map(v => (
              <div key={v.name}>
                <div className="flex justify-between text-slate-200 mb-2 font-medium">
                  <span>{v.name}</span>
                  <span>{v.coverage}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full transition-all duration-1000" 
                    style={{ width: `${v.coverage}%`, backgroundColor: v.color, boxShadow: `0 0 10px ${v.color}80` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="worker-glass-panel bg-red-500/10 border-red-500/20">
            <h3 className="text-xl font-bold text-red-400 flex items-center gap-2 mb-4">
              <AlertCircle /> Defaulters List
            </h3>
            <p className="text-slate-300 mb-4">5 children missed their scheduled doses.</p>
            <ul className="space-y-3">
              <li className="bg-slate-900/50 p-3 rounded-lg border border-slate-700 text-sm">
                <strong className="block text-white text-base">Aarav Patel (9mo)</strong>
                <span className="text-red-400">Missed: Measles 1st Dose</span>
              </li>
              <li className="bg-slate-900/50 p-3 rounded-lg border border-slate-700 text-sm">
                <strong className="block text-white text-base">Sneha Sharma (18mo)</strong>
                <span className="text-red-400">Missed: DPT Booster</span>
              </li>
            </ul>
            <button className="btn-secondary w-full mt-4 text-sm">View All Defaulters</button>
          </div>

          <div className="worker-glass-panel">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <CalendarRange /> Drive Planner
            </h3>
            <div className="space-y-4">
              <div>
                <label className="field-hint mb-1">Date</label>
                <input type="date" className="field-input py-2 min-h-0 text-sm" />
              </div>
              <div>
                <label className="field-hint mb-1">Venue</label>
                <select className="field-input py-2 min-h-0 text-sm">
                  <option>Anganwadi Center 1</option>
                  <option>Panchayat Bhavan</option>
                </select>
              </div>
              <button className="btn-primary w-full py-2 min-h-0 text-sm">Schedule Session</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
