'use client';

import React, { useState } from 'react';
import { 
  Activity, Calendar, FileText, Pill, Plus, Search, 
  AlertTriangle, CheckCircle, Upload, ShieldAlert
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import '../../../styles/doctor.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function PatientReview() {
  const [medicines, setMedicines] = useState([
    { id: 1, name: 'Amlodipine 5mg', dose: '1 tablet', freq: 'OD', duration: '30 days', instruction: 'After breakfast' }
  ]);
  const [medInput, setMedInput] = useState('');

  const bpData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Systolic (mmHg)',
        data: [145, 142, 140, 138, 140, 135, 132, 130, 128, 128, 125, 122],
        borderColor: '#ff4757',
        backgroundColor: 'rgba(255, 71, 87, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Diastolic (mmHg)',
        data: [95, 92, 90, 88, 90, 85, 82, 80, 82, 80, 78, 78],
        borderColor: '#00f0ff',
        backgroundColor: 'rgba(0, 240, 255, 0.1)',
        tension: 0.4,
      }
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' }
      },
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' }
      }
    },
    plugins: {
      legend: { labels: { color: '#e2e8f0' } }
    }
  };

  return (
    <div className="doctor-container">
      <div className="panel-header" style={{ marginBottom: '2rem' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '2rem' }}>Ramesh Kumar</h1>
          <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            <span>M, 54 yrs</span>
            <span>|</span>
            <span>ID: P-98234</span>
            <span>|</span>
            <span>Blood Group: O+</span>
            <span>|</span>
            <span style={{ color: 'var(--status-error)' }}>⚠️ Allergic to Penicillin</span>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-green)' }}>78/100</div>
          <div style={{ color: 'var(--text-secondary)' }}>AI Risk Score (📈 Improving)</div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="main-content">
          <div className="panel" style={{ marginBottom: '2rem' }}>
            <h2 className="panel-title"><Activity size={20} /> Vitals History (Blood Pressure)</h2>
            <div className="chart-container">
              <Line data={bpData} options={chartOptions} />
            </div>
          </div>

          <div className="panel">
            <h2 className="panel-title"><Pill size={20} /> Prescription Writer</h2>
            
            <div className="interaction-alert">
              <CheckCircle size={20} />
              No drug interactions detected for current medications.
            </div>

            <div className="prescription-writer" style={{ marginTop: '1.5rem' }}>
              <div className="prescription-form-grid">
                <div className="form-group">
                  <label>Medicine Name</label>
                  <div style={{ position: 'relative' }}>
                    <Search size={16} style={{ position: 'absolute', left: '10px', top: '12px', color: 'var(--text-secondary)' }} />
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Search medicines..." 
                      style={{ paddingLeft: '2.5rem', width: '100%' }}
                      value={medInput}
                      onChange={(e) => setMedInput(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Dose</label>
                  <input type="text" className="form-control" placeholder="e.g. 1 tablet" />
                </div>
                <div className="form-group">
                  <label>Frequency</label>
                  <select className="form-control">
                    <option>OD (Once)</option>
                    <option>BD (Twice)</option>
                    <option>TDS (Thrice)</option>
                    <option>SOS (As needed)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Duration</label>
                  <input type="text" className="form-control" placeholder="e.g. 5 days" />
                </div>
              </div>
              
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label>Instructions</label>
                <input type="text" className="form-control" placeholder="e.g. After meals" />
              </div>

              <button className="action-btn secondary" style={{ width: '100%', justifyContent: 'center' }}>
                <Plus size={18} /> Add Medicine
              </button>

              <div className="medicine-list">
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Added Medicines</h3>
                {medicines.map(med => (
                  <div key={med.id} className="medicine-item">
                    <div style={{ fontWeight: 600 }}>{med.name}</div>
                    <div>{med.dose}</div>
                    <div>{med.freq}</div>
                    <div>{med.duration}</div>
                    <button className="action-btn danger" style={{ padding: '0.25rem 0.5rem' }}>Remove</button>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                <div className="form-group" style={{ flex: 1 }}>
                  <label>Print Language</label>
                  <select className="form-control">
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Marathi</option>
                  </select>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
                  <button className="action-btn secondary">Preview</button>
                  <button className="action-btn">Sign & Issue</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar">
          <div className="panel" style={{ marginBottom: '2rem' }}>
            <h2 className="panel-title"><FileText size={20} /> Doctor Notes</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ padding: '1rem', background: 'var(--surface-light)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>12 Jul 2024</div>
                <p style={{ margin: 0 }}>Patient reports slight dizziness. BP slightly elevated. Adjusted Amlodipine dosage.</p>
              </div>
              <div style={{ padding: '1rem', background: 'var(--surface-light)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>15 Jun 2024</div>
                <p style={{ margin: 0 }}>Routine checkup. BP stable. Prescribed continuation of current meds.</p>
              </div>
            </div>
          </div>

          <div className="panel" style={{ marginBottom: '2rem' }}>
            <h2 className="panel-title"><Upload size={20} /> Lab Results</h2>
            <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <strong>Lipid Profile</strong>
                <span style={{ color: 'var(--text-secondary)' }}>01 Aug 2024</span>
              </div>
              <div style={{ color: 'var(--status-warning)', fontSize: '0.9rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <ShieldAlert size={16} /> LDL elevated (160 mg/dL)
              </div>
              <button className="action-btn secondary" style={{ width: '100%', marginTop: '1rem', fontSize: '0.9rem' }}>View Full Report</button>
            </div>
          </div>

          <div className="panel">
            <h2 className="panel-title"><Calendar size={20} /> Follow-up & Referrals</h2>
            <div className="form-group" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <label>Schedule Follow-up</label>
              <input type="date" className="form-control" />
            </div>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label>Refer to Specialist</label>
              <select className="form-control">
                <option>None</option>
                <option>Endocrinologist</option>
                <option>Nephrologist</option>
                <option>Dietician</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
