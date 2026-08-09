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

  const btnActionPrimaryStyle = { background: 'linear-gradient(135deg, #156d78, #2993a1)', color: '#fff', border: 'none', borderRadius: '9999px', padding: '0.5rem 1.25rem', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' };
  const btnActionOutlineStyle = { background: 'rgba(255,255,255,0.06)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '9999px', padding: '0.5rem 1.25rem', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' };

  return (
    <div className="admin-dashboard-container">
      {/* ── Top Navigation Bar ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link href="/admin/dashboard" className="text-sm flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
              <ArrowLeft size={16} /> Admin Command Center
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>•</span>
            <span className="text-sm font-bold" style={{ color: '#59b6c2' }}>Epidemiology & Surveillance</span>
          </div>
          <h1 className="text-3xl font-black flex items-center gap-3" style={{ color: '#ffffff' }}>
            <ShieldAlert size={32} style={{ color: '#ef4444' }} />
            Disease Outbreak Map & GIS Surveillance
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/admin/analytics/asha-performance" style={{ ...btnActionOutlineStyle, textDecoration: 'none' }}>
            ASHA Performance →
          </Link>
          <Link href="/admin/inventory" style={{ ...btnActionPrimaryStyle, textDecoration: 'none' }}>
            Inventory Stock →
          </Link>
        </div>
      </div>

      {/* ── Control Toolbar ── */}
      <div className="glass-card p-4 rounded-xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 p-2 rounded-xl" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Filter size={16} style={{ color: '#59b6c2' }} />
            <span className="text-xs font-bold" style={{ color: 'rgba(255,255,255,0.7)' }}>Disease Type:</span>
            <select 
              value={selectedDisease}
              onChange={(e) => setSelectedDisease(e.target.value)}
              className="text-sm font-bold"
              style={{ background: 'transparent', color: '#ffffff', border: 'none', outline: 'none', cursor: 'pointer' }}
            >
              <option value="Dengue" style={{ background: '#041416' }}>Dengue Viral Fever</option>
              <option value="Malaria" style={{ background: '#041416' }}>Malaria (P. vivax / falciparum)</option>
              <option value="Tuberculosis" style={{ background: '#041416' }}>Tuberculosis (TB)</option>
              <option value="Cholera" style={{ background: '#041416' }}>Gastroenteritis / Cholera</option>
              <option value="COVID-19" style={{ background: '#041416' }}>COVID-19 Variants</option>
            </select>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-xl" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Radio size={16} style={{ color: '#ef4444' }} />
            <span className="text-xs font-bold" style={{ color: 'rgba(255,255,255,0.7)' }}>Live Status:</span>
            <span className="text-xs font-bold px-2" style={{ borderRadius: '9999px', background: 'rgba(239,68,68,0.2)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.3)', padding: '2px 8px' }}>
              Active Outbreak Alert
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={togglePlayback}
            style={{ ...btnActionOutlineStyle, gap: '8px' }}
          >
            <RefreshCw size={14} />
            {isPlaying ? 'Simulating Timeline...' : 'Play Epidemic Simulation'}
          </button>

          <button style={{ ...btnActionPrimaryStyle, gap: '8px' }}>
            <FileSpreadsheet size={14} /> Export GIS Data (CSV)
          </button>
        </div>
      </div>

      {/* ── Main GIS Map + Inspector Layout ── */}
      <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        
        {/* Left Column: Spatial Interactive Grid Map (2 Cols) */}
        <div style={{ gridColumn: 'span 2' }}>
          <div className="glass-card p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2" style={{ color: '#ffffff' }}>
                  <MapPin size={20} style={{ color: '#59b6c2' }} />
                  Nashik District Spatial Heatmap — {selectedDisease}
                </h2>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Click any block to inspect live caseload, vector index, and trigger emergency response.</p>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold" style={{ color: '#ffffff' }}>
                <span className="flex items-center gap-1"><span style={{ width: '12px', height: '12px', borderRadius: '4px', background: '#ef4444', display: 'inline-block' }}></span> High Risk (&gt;20 cases)</span>
                <span className="flex items-center gap-1"><span style={{ width: '12px', height: '12px', borderRadius: '4px', background: '#f59e0b', display: 'inline-block' }}></span> Moderate (&gt;5 cases)</span>
                <span className="flex items-center gap-1"><span style={{ width: '12px', height: '12px', borderRadius: '4px', background: '#10b981', display: 'inline-block' }}></span> Low Risk</span>
              </div>
            </div>

            {/* Simulated Interactive GIS Blocks */}
            <div className="grid gap-4 mb-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
              {blocks.map(block => {
                const isSelected = block.id === selectedBlockId;
                let bgStyle = { background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', color: '#34d399' };
                if (block.risk === 'High') bgStyle = { background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(239,68,68,0.4)', color: '#ef4444' };
                if (block.risk === 'Moderate') bgStyle = { background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(245,158,11,0.4)', color: '#fbbf24' };

                return (
                  <div
                    key={block.id}
                    onClick={() => setSelectedBlockId(block.id)}
                    className="p-5 rounded-xl flex flex-col justify-between"
                    style={{ ...bgStyle, cursor: 'pointer', position: 'relative', transition: 'all 0.2s ease', transform: isSelected ? 'scale(1.02)' : 'none', boxShadow: isSelected ? '0 0 0 2px #ffffff, 0 10px 15px -3px rgba(0,0,0,0.5)' : 'none' }}
                  >
                    {isSelected && (
                      <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#ffffff', color: '#000000', fontSize: '10px', fontWeight: 900, padding: '2px 8px', borderRadius: '9999px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        SELECTED
                      </span>
                    )}
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-xs font-bold" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.8 }}>{block.risk} Risk</span>
                        <MapPin size={16} />
                      </div>
                      <h3 className="font-bold text-lg mb-1" style={{ color: '#ffffff' }}>{block.name}</h3>
                      <p className="text-2xl font-black" style={{ color: '#ffffff' }}>{block.cases} <span className="text-xs" style={{ fontWeight: 'normal', opacity: 0.7 }}>cases</span></p>
                    </div>

                    <div className="mt-4 pt-3 text-xs flex justify-between items-center" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', opacity: 0.9 }}>
                      <span>ASHA Teams: {block.ashaTeams}</span>
                      <span className="font-bold">Inspect →</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Outbreak Timeline Slider */}
            <div className="p-4 rounded-xl" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold" style={{ color: 'rgba(255,255,255,0.7)' }}>Timeline Slider: {months[timeStep - 1]} 2024</span>
                <span className="text-xs font-bold" style={{ color: '#59b6c2' }}>Cumulative Cases Recorded: {[10, 14, 18, 25, 42, 78, 115, 95][timeStep - 1]}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="8" 
                value={timeStep} 
                onChange={(e) => setTimeStep(parseInt(e.target.value))}
                className="w-full cursor-pointer" 
                style={{ accentColor: '#59b6c2' }}
              />
              <div className="flex justify-between mt-1" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace' }}>
                {months.map((m, i) => (
                  <span key={m} style={i + 1 === timeStep ? { color: '#59b6c2', fontWeight: 'bold' } : {}}>{m}</span>
                ))}
              </div>
            </div>
          </div>

          {/* AI Outbreak Early Warning Recommendations */}
          <div className="glass-card p-6" style={{ border: '1px solid rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.05)' }}>
            <div className="flex gap-4">
              <Sparkles size={28} style={{ color: '#f59e0b', flexShrink: 0, marginTop: '4px' }} />
              <div>
                <h3 className="text-lg font-bold mb-1" style={{ color: '#ffffff' }}>AI Vector Outbreak Intelligence & Protocol</h3>
                <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                  Stagnant rainwater accumulation detected around <strong>{selectedBlock.name} ({selectedBlock.recentLocation})</strong>. Vector Larval Index is at <strong>{selectedBlock.vectorScore}/100</strong> (Critical). Secondary wave predicted within 7 days if anti-larval spraying is delayed.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button 
                    onClick={triggerVectorControl}
                    style={{ ...btnActionPrimaryStyle, gap: '8px' }}
                  >
                    <Send size={14} /> Dispatch Fogging Squad to {selectedBlock.name}
                  </button>
                  {alertSent && (
                    <span className="text-xs font-bold flex items-center gap-1" style={{ color: '#10b981' }}>
                      <CheckCircle2 size={14} /> Emergency Unit Dispatched to {selectedBlock.name}!
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Inspector & Trend Graph (1 Col) */}
        <div>
          
          {/* Selected Block Live Inspector Card */}
          <div className="glass-card p-6 mb-6">
            <div className="flex justify-between items-center mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div>
                <span className="font-bold" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)' }}>Zone Inspector</span>
                <h3 className="text-xl font-black" style={{ color: '#ffffff' }}>{selectedBlock.name}</h3>
              </div>
              <span className="text-xs font-bold px-2" style={{ 
                borderRadius: '9999px', padding: '4px 10px',
                background: selectedBlock.risk === 'High' ? 'rgba(239,68,68,0.2)' : selectedBlock.risk === 'Moderate' ? 'rgba(245,158,11,0.2)' : 'rgba(16,185,129,0.2)', 
                color: selectedBlock.risk === 'High' ? '#ef4444' : selectedBlock.risk === 'Moderate' ? '#fbbf24' : '#10b981', 
                border: `1px solid ${selectedBlock.risk === 'High' ? 'rgba(239,68,68,0.3)' : selectedBlock.risk === 'Moderate' ? 'rgba(245,158,11,0.3)' : 'rgba(16,185,129,0.3)'}` 
              }}>
                {selectedBlock.risk} Risk
              </span>
            </div>

            <div className="mb-6 flex flex-col gap-3">
              <div className="flex justify-between items-center p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Active Cases</span>
                <span className="text-lg font-black" style={{ color: '#ffffff' }}>{selectedBlock.cases}</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Hospitalized (IPD)</span>
                <span className="text-lg font-black" style={{ color: '#fbbf24' }}>{selectedBlock.hospitalized}</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Recovered Discharges</span>
                <span className="text-lg font-black" style={{ color: '#10b981' }}>{selectedBlock.recovered}</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Larval Vector Index</span>
                <span className="text-lg font-black" style={{ color: '#ef4444' }}>{selectedBlock.vectorScore}/100</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>ASHA Field Staff</span>
                <span className="text-sm font-bold" style={{ color: '#ffffff' }}>{selectedBlock.ashaTeams} Workers On Duty</span>
              </div>
            </div>

            <div className="p-4 rounded-xl mb-4" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p className="text-xs font-bold mb-1" style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Fogging & Mosquito Control</p>
              <p className="text-sm font-bold" style={{ color: '#ffffff' }}>{selectedBlock.foggingStatus}</p>
            </div>

            <button 
              onClick={triggerVectorControl}
              style={{ ...btnActionPrimaryStyle, width: '100%', padding: '12px', boxSizing: 'border-box' }}
            >
              Issue Citizen Advisory for {selectedBlock.name}
            </button>
          </div>

          {/* Trend Line Chart */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold mb-1 flex items-center gap-2" style={{ color: '#ffffff' }}>
              <TrendingUp size={18} style={{ color: '#ef4444' }} />
              Epidemic Trend ({selectedDisease})
            </h3>
            <p className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>Monthly outbreak trajectory for Nashik district.</p>

            <div style={{ height: '224px' }}>
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
