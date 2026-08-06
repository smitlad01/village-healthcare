'use client';
import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import '../../../../styles/admin.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function DiseaseMap() {
  const [selectedDisease, setSelectedDisease] = useState('Dengue');
  
  const trendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [{
      label: `${selectedDisease} Cases`,
      data: [12, 8, 15, 22, 45, 80, 125, 95],
      borderColor: '#ef4444',
      tension: 0.4,
      fill: true,
      backgroundColor: 'rgba(239, 68, 68, 0.1)'
    }]
  };

  return (
    <div className="admin-dashboard-container">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Disease Outbreak Map</h1>
        <div className="flex gap-4">
          <select 
            className="bg-glass-bg border border-glass-border rounded p-2 text-white"
            value={selectedDisease}
            onChange={(e) => setSelectedDisease(e.target.value)}
          >
            <option>Dengue</option>
            <option>Malaria</option>
            <option>TB</option>
            <option>COVID-19</option>
            <option>Cholera</option>
          </select>
          <button className="btn btn-secondary flex items-center gap-2">
            <Download size={18} /> Export CSV
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 chart-container flex flex-col">
          <h3 className="font-bold text-xl mb-4">Spatial Distribution (Simulated)</h3>
          <div className="map-container flex-grow h-96">
            <div className="map-block block-red" style={{ gridColumn: '1 / 3' }}>Hinganghat (28 cases)</div>
            <div className="map-block block-yellow">Deoli (12 cases)</div>
            <div className="map-block block-green" style={{ gridColumn: '1 / 2' }}>Wardha (3 cases)</div>
            <div className="map-block block-green">Arvi (1 case)</div>
            <div className="map-block block-yellow">Ashti (8 cases)</div>
          </div>
          <div className="mt-6">
            <label className="block text-secondary mb-2">Time Period: August 2024</label>
            <input type="range" min="1" max="8" defaultValue="8" className="w-full accent-primary" />
          </div>
        </div>

        <div className="chart-container flex flex-col gap-6">
          <div>
            <h3 className="font-bold text-xl mb-4 text-danger">High Risk Zone Details</h3>
            <div className="p-4 bg-black/20 rounded-lg border border-glass-border">
              <h4 className="font-bold text-lg">Hinganghat Block</h4>
              <ul className="mt-3 space-y-2 text-secondary">
                <li className="flex justify-between"><span>Active Cases:</span> <span className="text-white font-bold">28</span></li>
                <li className="flex justify-between"><span>Hospitalized:</span> <span className="text-white font-bold">4</span></li>
                <li className="flex justify-between"><span>Under Treatment:</span> <span className="text-white font-bold">15</span></li>
                <li className="flex justify-between"><span>Deaths:</span> <span className="text-white font-bold">0</span></li>
              </ul>
            </div>
          </div>
          
          <div className="flex-grow">
            <h3 className="font-bold text-lg mb-2">Trend Analysis</h3>
            <div className="h-48">
              <Line data={trendData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { ticks: { color: '#94a3b8' } }, y: { ticks: { color: '#94a3b8' } } } }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
