'use client';

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Download, Calendar, Activity, AlertTriangle } from 'lucide-react';
import { ChartProvider, defaultChartOptions } from '../../../../components/ChartWrapper';
import Link from 'next/link';

export default function VitalsHistoryPage() {
  const [dateRange, setDateRange] = useState('6months');

  const bpLabels = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
  const bpSystolic = [122, 124, 128, 132, 130, 135];
  const bpDiastolic = [76, 78, 82, 86, 84, 88];

  const glucoseData = [100, 98, 104, 118, 112, 108];

  return (
    <ChartProvider>
      <div style={{ minHeight: '100vh', padding: '2rem', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <div style={{ display: 'flex', gap: '0.5rem', color: '#94a3b8', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              <Link href="/patient" style={{ color: '#38bdf8', textDecoration: 'none' }}>Dashboard</Link> / 
              <span>Vitals History</span>
            </div>
            <h1 style={{ color: 'white', margin: 0, fontSize: '2rem' }}>Vitals History & Trends</h1>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <select 
              value={dateRange} 
              onChange={(e) => setDateRange(e.target.value)}
              style={{ 
                background: 'rgba(30,41,59,0.8)', color: 'white', padding: '0.75rem 1rem', 
                borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', outline: 'none'
              }}
            >
              <option value="1month">Last 1 Month</option>
              <option value="6months">Last 6 Months</option>
              <option value="1year">Last 1 Year</option>
            </select>

            <button style={{ 
              background: 'rgba(56,189,248,0.1)', color: '#38bdf8', padding: '0.75rem 1rem', 
              borderRadius: '8px', border: '1px solid rgba(56,189,248,0.3)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold'
            }}>
              <Download size={18} /> Export PDF
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '2rem' }}>
          
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ color: 'white', fontSize: '1.25rem', margin: '0 0 0.5rem 0' }}>Blood Pressure Trend</h3>
                <p style={{ color: '#94a3b8', margin: 0 }}>Showing readings vs Normal Range (Green Zone)</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#0ea5e9', fontSize: '0.9rem' }}><div style={{width: 12, height: 12, background: '#0ea5e9', borderRadius: '50%'}}></div> Systolic</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#38bdf8', fontSize: '0.9rem' }}><div style={{width: 12, height: 12, background: '#38bdf8', borderRadius: '50%'}}></div> Diastolic</span>
              </div>
            </div>
            <div style={{ height: '350px' }}>
              <Line 
                options={{
                  ...defaultChartOptions,
                  plugins: {
                    ...defaultChartOptions.plugins,
                    annotation: { /* normally you'd use chartjs-plugin-annotation for the green band, simulating here by relying on grid/fill or just basic lines */ }
                  }
                }} 
                data={{
                  labels: bpLabels,
                  datasets: [
                    { label: 'Systolic', data: bpSystolic, borderColor: '#0ea5e9', backgroundColor: '#0ea5e9', tension: 0.3, pointRadius: 5 },
                    { label: 'Diastolic', data: bpDiastolic, borderColor: '#38bdf8', backgroundColor: '#38bdf8', tension: 0.3, pointRadius: 5 }
                  ]
                }} 
              />
            </div>
            {Math.max(...bpSystolic) > 130 && (
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', borderRadius: '8px', color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <AlertTriangle size={20} />
                <span>Anomaly detected in Mar: Systolic reading (135) is outside the normal range (90-120).</span>
              </div>
            )}
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ color: 'white', fontSize: '1.25rem', margin: '0 0 0.5rem 0' }}>Fasting Blood Glucose</h3>
                <p style={{ color: '#94a3b8', margin: 0 }}>Mg/dL</p>
              </div>
            </div>
            <div style={{ height: '300px' }}>
              <Line 
                options={defaultChartOptions} 
                data={{
                  labels: bpLabels,
                  datasets: [
                    { label: 'Glucose', data: glucoseData, borderColor: '#f59e0b', backgroundColor: 'rgba(245, 158, 11, 0.1)', tension: 0.3, fill: true, pointRadius: 5 }
                  ]
                }} 
              />
            </div>
          </div>

        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .glass-panel {
            background: rgba(30, 41, 59, 0.4);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.05);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
        `}} />
      </div>
    </ChartProvider>
  );
}
