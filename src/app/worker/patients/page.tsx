'use client';

import React, { useState } from 'react';
import '@/styles/globals.css';
import '@/styles/worker.css';
import { Search, Filter, Phone, Map, List, CheckCircle, AlertTriangle, MessageSquare, Clock } from 'lucide-react';

const patients = [
  { id: 1, name: 'Ramesh Kumar', age: 54, gender: 'Male', condition: 'Diabetes, Hypertension', lastCheck: '2 days ago', risk: 'Moderate', color: 'orange' },
  { id: 2, name: 'Sunita Bai', age: 62, gender: 'Female', condition: 'Diabetes', lastCheck: '15 days ago', risk: 'High', color: 'red' },
  { id: 3, name: 'Lakshmi Devi', age: 28, gender: 'Female', condition: 'Pregnant (7mo)', lastCheck: '5 days ago', risk: 'Moderate', color: 'orange' },
  { id: 4, name: 'Govind Rao', age: 71, gender: 'Male', condition: 'Hypertension, Arthritis', lastCheck: '8 days ago', risk: 'High', color: 'red' },
  { id: 5, name: 'Kamala Bai', age: 45, gender: 'Female', condition: 'Healthy', lastCheck: 'Never', risk: 'Unknown', color: 'white' },
  { id: 6, name: 'Baby Ananya', age: '8mo', gender: 'Female', condition: 'Immunization due', lastCheck: '1 day ago', risk: 'Low', color: 'green' },
  { id: 7, name: 'Ratan Lal', age: 58, gender: 'Male', condition: 'TB (active treatment)', lastCheck: '10 days ago', risk: 'Critical', color: 'red' },
  { id: 8, name: 'Priya Kumari', age: 32, gender: 'Female', condition: 'Thyroid', lastCheck: '20 days ago', risk: 'Low', color: 'green' },
  { id: 9, name: 'Rohit (Child)', age: 3, gender: 'Male', condition: 'Malnutrition screening', lastCheck: '12 days ago', risk: 'Moderate', color: 'orange' },
  { id: 10, name: 'Asha Devi', age: 67, gender: 'Female', condition: 'Heart Disease', lastCheck: '4 days ago', risk: 'High', color: 'red' },
];

export default function PatientsDirectory() {
  const [view, setView] = useState('list');

  return (
    <div className="worker-container">
      <div className="worker-header">
        <h1 className="worker-title">My Zone Patients</h1>
        <div className="flex gap-4 bg-slate-800/50 p-2 rounded-xl border border-slate-700">
          <button 
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${view === 'list' ? 'bg-blue-500 text-white' : 'text-slate-400'}`}
            onClick={() => setView('list')}
          >
            <List size={20} /> List
          </button>
          <button 
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${view === 'map' ? 'bg-blue-500 text-white' : 'text-slate-400'}`}
            onClick={() => setView('map')}
          >
            <Map size={20} /> Map
          </button>
        </div>
      </div>

      <div className="filter-bar">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input type="text" className="filter-input w-full pl-12" placeholder="Search by name, ID, or phone..." />
        </div>
        <select className="filter-select">
          <option>Risk Level (All)</option>
          <option>High Risk 🔴</option>
          <option>Moderate 🟠</option>
          <option>Low Risk 🟢</option>
        </select>
        <select className="filter-select">
          <option>Disease/Condition</option>
          <option>Diabetes</option>
          <option>Hypertension</option>
          <option>Pregnancy</option>
          <option>TB</option>
        </select>
        <button className="btn-secondary"><Filter size={20} /> Filters</button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <p className="text-slate-300 text-lg">142 patients in Nashik cluster</p>
        <div className="flex gap-4">
          <button className="btn-secondary" style={{ padding: '0.5rem 1rem', minHeight: '40px' }}>
            <MessageSquare size={18} /> Send SMS Reminders
          </button>
          <button className="btn-secondary" style={{ padding: '0.5rem 1rem', minHeight: '40px' }}>
            <AlertTriangle size={18} /> Mark Priority
          </button>
        </div>
      </div>

      {view === 'list' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {patients.map(p => (
            <div key={p.id} className="patient-card">
              <div className="patient-card-header">
                <div>
                  <h3 className="patient-name flex items-center gap-2">
                    <span className={`status-dot status-${p.color}`}></span>
                    {p.name}
                  </h3>
                  <p className="patient-meta">{p.age} yrs | {p.gender} | {p.condition}</p>
                </div>
                <div className={`text-sm px-3 py-1 rounded-full border border-${p.color}-500/30 bg-${p.color}-500/10 text-${p.color}-400`}>
                  Risk: {p.risk}
                </div>
              </div>
              <div className="text-sm text-slate-400">
                <Clock size={14} className="inline mr-1" /> Last Checkup: {p.lastCheck}
              </div>
              <div className="patient-actions mt-2">
                <button className="btn-secondary">View Details</button>
                <button className="btn-primary">Start Checkup</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="worker-glass-panel" style={{ height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="text-center">
            <Map size={48} className="mx-auto text-slate-500 mb-4" />
            <h3 className="text-xl font-semibold">Map View Placeholder</h3>
            <p className="text-slate-400 mt-2">Interactive cluster map would render here.</p>
          </div>
        </div>
      )}
    </div>
  );
}
