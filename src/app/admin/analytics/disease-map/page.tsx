'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  AlertTriangle, 
  Download, 
  MapPin, 
  Activity, 
  Filter, 
  ShieldAlert, 
  Users, 
  ArrowLeft, 
  Radio, 
  Send, 
  RefreshCw, 
  CheckCircle2, 
  Sparkles,
  Search,
  ChevronRight,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import '../../../../styles/admin.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

interface BlockData {
  id: string;
  name: string;
  cases: number;
  hospitalized: number;
  recovered: number;
  risk: 'High' | 'Moderate' | 'Low';
  riskClass: string;
  ashaTeams: number;
  foggingStatus: string;
  vectorScore: number;
  recentLocation: string;
}

export default function DiseaseMapPage() {
  const [selectedDisease, setSelectedDisease] = useState('Dengue');
  const [selectedBlockId, setSelectedBlockId] = useState('hinganghat');
  const [timeStep, setTimeStep] = useState(8);
  const [isPlaying, setIsPlaying] = useState(false);
  const [alertSent, setAlertSent] = useState(false);

  const blocks: BlockData[] = [
    { 
      id: 'hinganghat', 
      name: 'Hinganghat Block', 
      cases: 28, 
      hospitalized: 6, 
      recovered: 42, 
      risk: 'High', 
      riskClass: 'block-red', 
      ashaTeams: 12, 
      foggingStatus: 'Active - Sector 4', 
      vectorScore: 84, 
      recentLocation: 'Ward 4 & Market Area' 
    },
    { 
      id: 'deoli', 
      name: 'Deoli Block', 
      cases: 12, 
      hospitalized: 2, 
      recovered: 18, 
      risk: 'Moderate', 
      riskClass: 'block-yellow', 
      ashaTeams: 8, 
      foggingStatus: 'Scheduled (Tomorrow)', 
      vectorScore: 58, 
      recentLocation: 'North Bus Stand' 
    },
    { 
      id: 'nashik', 
      name: 'Nashik Central', 
      cases: 3, 
      hospitalized: 0, 
      recovered: 35, 
      risk: 'Low', 
      riskClass: 'block-green', 
      ashaTeams: 15, 
      foggingStatus: 'Completed (Aug 5)', 
      vectorScore: 22, 
      recentLocation: 'Civil Hospital Zone' 
    },
    { 
      id: 'ashti', 
      name: 'Ashti Block', 
      cases: 9, 
      hospitalized: 1, 
      recovered: 14, 
      risk: 'Moderate', 
      riskClass: 'block-yellow', 
      ashaTeams: 6, 
      foggingStatus: 'Pending Inspection', 
      vectorScore: 61, 
      recentLocation: 'East Lake Side' 
    },
    { 
      id: 'arvi', 
      name: 'Arvi Sub-district', 
      cases: 1, 
      hospitalized: 0, 
      recovered: 29, 
      risk: 'Low', 
      riskClass: 'block-green', 
      ashaTeams: 10, 
      foggingStatus: 'Completed (Aug 2)', 
      vectorScore: 18, 
      recentLocation: 'Primary Health Center' 
    },
    { 
      id: 'seloo', 
      name: 'Seloo Cluster', 
      cases: 0, 
      hospitalized: 0, 
      recovered: 21, 
      risk: 'Low', 
      riskClass: 'block-green', 
      ashaTeams: 7, 
      foggingStatus: 'Surveillance Mode', 
      vectorScore: 12, 
      recentLocation: 'Village Panchayat' 
    }
  ];

  const selectedBlock = blocks.find(b => b.id === selectedBlockId) || blocks[0];

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

  const trendData = {
    labels: months.slice(0, timeStep),
    datasets: [{
      label: `${selectedDisease} Cases (${months[timeStep - 1]})`,
      data: [10, 14, 18, 25, 42, 78, 115, 95].slice(0, timeStep),
      borderColor: '#ef4444',
      backgroundColor: 'rgba(239, 68, 68, 0.15)',
      fill: true,
      tension: 0.4,
      pointRadius: 6,
      pointHoverRadius: 8,
      pointBackgroundColor: '#ef4444'
    }]
  };

  const togglePlayback = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      let current = 1;
      const interval = setInterval(() => {
        current += 1;
        setTimeStep(current);
        if (current >= 8) {
          clearInterval(interval);
          setIsPlaying(false);
        }
      }, 700);
    }
  };

  const triggerVectorControl = () => {
    setAlertSent(true);
    setTimeout(() => setAlertSent(false), 4000);
  };

  return (
    <div className="admin-dashboard-container">
      {/* ── Top Navigation Bar ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link href="/admin/dashboard" className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
              <ArrowLeft size={16} /> Admin Command Center
            </Link>
            <span className="text-gray-600">•</span>
            <span className="text-sm text-[#59b6c2] font-semibold">Epidemiology & Surveillance</span>
          </div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3">
            <ShieldAlert className="text-red-400" size={32} />
            Disease Outbreak Map & GIS Surveillance
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/admin/analytics/asha-performance" className="btn-action-outline text-xs">
            ASHA Performance →
          </Link>
          <Link href="/admin/inventory" className="btn-action-primary text-xs">
            Inventory Stock →
          </Link>
        </div>
      </div>

      {/* ── Control Toolbar ── */}
      <div className="glass-card p-4 rounded-xl flex flex-wrap items-center justify-between gap-4 border border-white/10">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-lg border border-white/10">
            <Filter size={16} className="text-[#59b6c2]" />
            <span className="text-xs font-bold text-gray-300">Disease Type:</span>
            <select 
              value={selectedDisease}
              onChange={(e) => setSelectedDisease(e.target.value)}
              className="bg-transparent text-white font-bold text-sm outline-none cursor-pointer"
            >
              <option value="Dengue" className="bg-[#041416]">Dengue Viral Fever</option>
              <option value="Malaria" className="bg-[#041416]">Malaria (P. vivax / falciparum)</option>
              <option value="Tuberculosis" className="bg-[#041416]">Tuberculosis (TB)</option>
              <option value="Cholera" className="bg-[#041416]">Gastroenteritis / Cholera</option>
              <option value="COVID-19" className="bg-[#041416]">COVID-19 Variants</option>
            </select>
          </div>

          <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-lg border border-white/10">
            <Radio size={16} className="text-red-400 animate-pulse" />
            <span className="text-xs font-bold text-gray-300">Live Status:</span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
              Active Outbreak Alert
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={togglePlayback}
            className="btn-action-outline text-xs flex items-center gap-2"
          >
            <RefreshCw size={14} className={isPlaying ? 'animate-spin' : ''} />
            {isPlaying ? 'Simulating Timeline...' : 'Play Epidemic Simulation'}
          </button>

          <button className="btn-action-primary text-xs flex items-center gap-2">
            <FileSpreadsheet size={14} /> Export GIS Data (CSV)
          </button>
        </div>
      </div>

      {/* ── Main GIS Map + Inspector Layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Spatial Interactive Grid Map (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-white/10">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <MapPin className="text-[#59b6c2]" size={20} />
                  Nashik District Spatial Heatmap — {selectedDisease}
                </h2>
                <p className="text-xs text-gray-400">Click any block to inspect live caseload, vector index, and trigger emergency response.</p>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold">
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-red-500 inline-block"></span> High Risk (&gt;20 cases)</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-amber-500 inline-block"></span> Moderate (&gt;5 cases)</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-emerald-500 inline-block"></span> Low Risk</span>
              </div>
            </div>

            {/* Simulated Interactive GIS Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {blocks.map(block => {
                const isSelected = block.id === selectedBlockId;
                let bgStyle = 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300';
                if (block.risk === 'High') bgStyle = 'bg-red-500/20 border-red-500/40 text-red-300';
                if (block.risk === 'Moderate') bgStyle = 'bg-amber-500/20 border-amber-500/40 text-amber-300';

                return (
                  <div
                    key={block.id}
                    onClick={() => setSelectedBlockId(block.id)}
                    className={`p-5 rounded-xl border transition-all cursor-pointer relative flex flex-col justify-between ${bgStyle} ${isSelected ? 'ring-2 ring-white scale-[1.02] shadow-lg' : 'hover:scale-[1.01]'}`}
                  >
                    {isSelected && (
                      <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-black px-2 py-0.5 rounded-full shadow">
                        SELECTED
                      </span>
                    )}
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider opacity-80">{block.risk} Risk</span>
                        <MapPin size={16} />
                      </div>
                      <h3 className="font-bold text-lg text-white mb-1">{block.name}</h3>
                      <p className="text-2xl font-black text-white">{block.cases} <span className="text-xs font-normal opacity-70">cases</span></p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 text-xs flex justify-between items-center opacity-90">
                      <span>ASHA Teams: {block.ashaTeams}</span>
                      <span className="font-bold">Inspect →</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Outbreak Timeline Slider */}
            <div className="bg-black/30 p-4 rounded-xl border border-white/10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-gray-300">Timeline Slider: {months[timeStep - 1]} 2024</span>
                <span className="text-xs text-[#59b6c2] font-semibold">Cumulative Cases Recorded: {[10, 14, 18, 25, 42, 78, 115, 95][timeStep - 1]}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="8" 
                value={timeStep} 
                onChange={(e) => setTimeStep(parseInt(e.target.value))}
                className="w-full accent-[#59b6c2] cursor-pointer" 
              />
              <div className="flex justify-between text-[11px] text-gray-500 mt-1 font-mono">
                {months.map((m, i) => (
                  <span key={m} className={i + 1 === timeStep ? 'text-[#59b6c2] font-bold' : ''}>{m}</span>
                ))}
              </div>
            </div>
          </div>

          {/* AI Outbreak Early Warning Recommendations */}
          <div className="glass-card p-6 rounded-2xl border border-amber-500/30 bg-amber-500/5">
            <div className="flex items-start gap-4">
              <Sparkles size={28} className="text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">AI Vector Outbreak Intelligence & Protocol</h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  Stagnant rainwater accumulation detected around <strong>{selectedBlock.name} ({selectedBlock.recentLocation})</strong>. Vector Larval Index is at <strong>{selectedBlock.vectorScore}/100</strong> (Critical). Secondary wave predicted within 7 days if anti-larval spraying is delayed.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button 
                    onClick={triggerVectorControl}
                    className="btn-action-primary text-xs flex items-center gap-2"
                  >
                    <Send size={14} /> Dispatch Fogging Squad to {selectedBlock.name}
                  </button>
                  {alertSent && (
                    <span className="text-xs text-emerald-400 font-bold flex items-center gap-1 animate-pulse">
                      <CheckCircle2 size={14} /> Emergency Unit Dispatched to {selectedBlock.name}!
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Inspector & Trend Graph (1 Col) */}
        <div className="space-y-6">
          
          {/* Selected Block Live Inspector Card */}
          <div className="glass-card p-6 rounded-2xl border border-white/10">
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/10">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-gray-400 font-bold">Zone Inspector</span>
                <h3 className="text-xl font-black text-white">{selectedBlock.name}</h3>
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${selectedBlock.risk === 'High' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : selectedBlock.risk === 'Moderate' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'}`}>
                {selectedBlock.risk} Risk
              </span>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-sm text-gray-300">Active Cases</span>
                <span className="text-lg font-black text-white">{selectedBlock.cases}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-sm text-gray-300">Hospitalized (IPD)</span>
                <span className="text-lg font-black text-amber-400">{selectedBlock.hospitalized}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-sm text-gray-300">Recovered Discharges</span>
                <span className="text-lg font-black text-emerald-400">{selectedBlock.recovered}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-sm text-gray-300">Larval Vector Index</span>
                <span className="text-lg font-black text-red-400">{selectedBlock.vectorScore}/100</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-sm text-gray-300">ASHA Field Staff</span>
                <span className="text-sm font-bold text-white">{selectedBlock.ashaTeams} Workers On Duty</span>
              </div>
            </div>

            <div className="p-4 bg-black/40 rounded-xl border border-white/10 mb-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Fogging & Mosquito Control</p>
              <p className="text-sm font-bold text-white">{selectedBlock.foggingStatus}</p>
            </div>

            <button 
              onClick={triggerVectorControl}
              className="btn-action-primary w-full text-center text-xs py-3"
            >
              Issue Citizen Advisory for {selectedBlock.name}
            </button>
          </div>

          {/* Trend Line Chart */}
          <div className="glass-card p-6 rounded-2xl border border-white/10">
            <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <TrendingUp size={18} className="text-red-400" />
              Epidemic Trend ({selectedDisease})
            </h3>
            <p className="text-xs text-gray-400 mb-4">Monthly outbreak trajectory for Nashik district.</p>

            <div className="h-56">
              <Line 
                data={trendData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                  scales: {
                    x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                    y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } }
                  }
                }} 
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
