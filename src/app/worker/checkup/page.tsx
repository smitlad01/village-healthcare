'use client';

import React, { useState } from 'react';
import '@/styles/globals.css';
import '@/styles/worker.css';
import { WifiOff, Activity, Thermometer, Droplets, HeartPulse, Camera, BrainCircuit, Save, ChevronDown } from 'lucide-react';

export default function ConductCheckup() {
  const [muacColor, setMuacColor] = useState('gray');

  const handleMuacChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!val) setMuacColor('gray');
    else if (val < 11.5) setMuacColor('red');
    else if (val >= 11.5 && val < 12.5) setMuacColor('orange');
    else setMuacColor('green');
  };

  return (
    <div className="worker-container max-w-4xl">
      <div className="offline-banner">
        <WifiOff size={24} />
        <span>📡 You are offline. Data will sync when connected.</span>
      </div>

      <div className="worker-header">
        <h1 className="worker-title">Conduct Field Checkup</h1>
      </div>

      <div className="worker-glass-panel mb-8">
        <div className="field-form-group">
          <label className="field-label">Select Patient</label>
          <div className="relative">
            <select className="field-input appearance-none">
              <option>Govind Rao (71, M) - High Risk</option>
              <option>Ramesh Kumar (54, M)</option>
              <option>Sunita Bai (62, F)</option>
              <option>Search other patients...</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </div>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {/* Vitals Section */}
        <div className="worker-glass-panel">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-blue-400">
            <Activity /> Basic Vitals
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="field-form-group mb-0">
              <label className="field-label">Blood Pressure (mmHg)</label>
              <div className="flex gap-4">
                <input type="number" placeholder="Sys" className="field-input text-center" defaultValue="150" />
                <span className="text-3xl text-slate-500 self-center">/</span>
                <input type="number" placeholder="Dia" className="field-input text-center" defaultValue="95" />
              </div>
              <span className="field-hint text-red-400">High: Normal is &lt; 120/80</span>
            </div>

            <div className="field-form-group mb-0">
              <label className="field-label">Pulse (bpm)</label>
              <div className="relative">
                <HeartPulse className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input type="number" className="field-input pl-12" placeholder="e.g. 72" />
              </div>
              <span className="field-hint">Normal: 60-100 bpm</span>
            </div>

            <div className="field-form-group mb-0">
              <label className="field-label">Temperature (°F)</label>
              <div className="relative">
                <Thermometer className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input type="number" className="field-input pl-12" placeholder="e.g. 98.6" />
              </div>
              <span className="field-hint">Normal: 97.8 - 99.1 °F</span>
            </div>

            <div className="field-form-group mb-0">
              <label className="field-label">SpO2 (%)</label>
              <input type="number" className="field-input" placeholder="e.g. 98" />
              <span className="field-hint">Normal: 95-100%</span>
            </div>
          </div>
        </div>

        {/* Nutritional & Glucose */}
        <div className="worker-glass-panel">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-amber-400">
            <Droplets /> Blood & Measurements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="field-form-group mb-0">
              <label className="field-label">Blood Glucose (mg/dL)</label>
              <div className="flex gap-4">
                <select className="field-input flex-1">
                  <option>Fasting</option>
                  <option>Post-Prandial</option>
                  <option>Random</option>
                </select>
                <input type="number" className="field-input flex-1" placeholder="Value" />
              </div>
            </div>
            
            <div className="field-form-group mb-0">
              <label className="field-label">MUAC (Children, cm)</label>
              <input 
                type="number" 
                step="0.1" 
                className="field-input" 
                placeholder="e.g. 12.5" 
                onChange={handleMuacChange}
                style={{ borderLeft: `8px solid ${muacColor === 'red' ? '#ef4444' : muacColor === 'orange' ? '#f59e0b' : muacColor === 'green' ? '#10b981' : 'transparent'}` }}
              />
              <span className="field-hint flex gap-2 mt-2">
                <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">&lt;11.5 Severe</span>
                <span className="px-2 py-1 bg-amber-500/20 text-amber-400 rounded text-xs">11.5-12.5 Mod</span>
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs">&gt;12.5 Normal</span>
              </span>
            </div>
          </div>
        </div>

        {/* AI Referral Decision */}
        <div className="ai-alert">
          <BrainCircuit className="ai-alert-icon mt-1" size={24} />
          <div>
            <h4 className="font-bold text-white mb-1">AI Decision Assistant</h4>
            <p className="ai-alert-text">⚠️ BP is 150/95. This is elevated for Govind Rao's age profile. Recommend referral to PHC (Primary Health Centre) for evaluation and medication adjustment.</p>
          </div>
        </div>

        {/* Symptoms Checklist */}
        <div className="worker-glass-panel">
          <h2 className="text-xl font-semibold mb-4">Symptom Checklist</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Fever', 'Cough', 'Diarrhea', 'Skin rash', 'Headache', 'Body pain', 'Breathlessness', 'Swelling'].map(sym => (
              <label key={sym} className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700 cursor-pointer hover:bg-slate-700/50">
                <input type="checkbox" className="w-6 h-6 rounded border-slate-500 text-blue-500 bg-slate-900" />
                <span className="text-lg">{sym}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Attachments & Notes */}
        <div className="worker-glass-panel">
          <div className="field-form-group">
            <label className="field-label">Additional Notes</label>
            <textarea className="field-input" rows={3} placeholder="Add specific observations..."></textarea>
          </div>
          <button type="button" className="btn-secondary w-full border-dashed border-2 text-slate-400">
            <Camera className="mr-2" /> Capture Photo (Wound/Rash/Prescription)
          </button>
        </div>

        <button className="btn-primary w-full py-4 text-xl shadow-lg shadow-blue-500/20">
          <Save className="mr-2" /> Submit Checkup Record
        </button>
      </form>
    </div>
  );
}
