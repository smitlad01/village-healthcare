'use client';
import React, { useState } from 'react';
import { AlertTriangle, MapPin, ChevronDown, BellRing } from 'lucide-react';

const ALERTS = [
  { id: 1, disease: 'Dengue', location: 'Wardha District', level: 'MODERATE', cases: 12, trend: 'increasing', color: 'var(--warning)', bg: 'rgba(255, 193, 7, 0.1)' },
  { id: 2, disease: 'Malaria', location: 'Yavatmal District', level: 'HIGH', cases: 28, trend: 'stable', color: 'var(--danger)', bg: 'rgba(255, 75, 75, 0.1)' },
  { id: 3, disease: 'Seasonal Flu', location: 'State-wide', level: 'LOW', cases: 'N/A', trend: 'expected increase', color: 'var(--success)', bg: 'rgba(46, 204, 113, 0.1)' },
];

export default function AlertsPage() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <div className="page-container">
      <header className="page-header flex justify-between items-end">
        <div>
          <h1 className="page-title flex items-center gap-3">
            <AlertTriangle className="text-warning" size={32} />
            Disease Alerts
          </h1>
          <p className="page-subtitle">Real-time local health tracking and prevention</p>
        </div>
        <button className="btn btn-secondary flex items-center gap-2">
          <BellRing size={18} /> Subscribe via SMS
        </button>
      </header>

      <div className="space-y-6">
        {ALERTS.map(alert => (
          <div key={alert.id} className="glass-panel overflow-hidden transition-all" style={{ borderLeft: `4px solid ${alert.color}` }}>
            <div 
              className="p-6 cursor-pointer flex justify-between items-center hover:bg-surface-light transition-colors"
              onClick={() => setExpanded(expanded === alert.id ? null : alert.id)}
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl" style={{ backgroundColor: alert.bg, color: alert.color }}>
                  {alert.level}
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">{alert.disease} Alert</h2>
                  <div className="flex items-center gap-4 text-text-secondary text-sm">
                    <span className="flex items-center gap-1"><MapPin size={14}/> {alert.location}</span>
                    <span>Cases this week: {alert.cases}</span>
                  </div>
                </div>
              </div>
              <ChevronDown className={`transition-transform ${expanded === alert.id ? 'rotate-180' : ''}`} />
            </div>

            {expanded === alert.id && (
              <div className="p-6 pt-0 border-t border-border mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                  <div>
                    <h3 className="font-bold text-lg mb-4 text-primary">AI Prediction & Analysis</h3>
                    <p className="bg-surface p-4 rounded-lg border border-border text-text-secondary mb-6 leading-relaxed">
                      "Based on current weather patterns, stagnant water reports, and historical data, {alert.disease.toLowerCase()} risk is expected to {alert.trend.toUpperCase()} in the next 2 weeks. Residents are advised to take immediate preventive measures."
                    </p>

                    <h3 className="font-bold text-lg mb-4">What to do:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">1</div>
                        <span>Eliminate standing water around your home.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">2</div>
                        <span>Use mosquito nets and repellents, especially during dawn/dusk.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">3</div>
                        <span>If you experience high fever, visit the nearest health center immediately.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-4">Nearest Testing Center</h3>
                    <div className="bg-surface p-4 rounded-lg border border-border">
                      <h4 className="font-bold mb-1">Wardha Civil Hospital</h4>
                      <p className="text-text-secondary text-sm mb-4">2.4 km away • Open 24/7</p>
                      <button className="btn btn-primary w-full">Get Directions</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
