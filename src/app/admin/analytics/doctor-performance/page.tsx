'use client';
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../../../../styles/admin.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DoctorPerformance() {
  const doctors = [
    { rank: 1, name: 'Dr. Rajesh Kumar', spec: 'General Physician', rating: 4.8, patients: 450, followup: '85%', score: 92 },
    { rank: 2, name: 'Dr. Sneha Patil', spec: 'Pediatrician', rating: 4.9, patients: 380, followup: '90%', score: 95 },
    { rank: 3, name: 'Dr. Amit Sharma', spec: 'Cardiologist', rating: 4.7, patients: 220, followup: '75%', score: 88 },
    { rank: 4, name: 'Dr. Priya Desai', spec: 'Gynecologist', rating: 4.6, patients: 310, followup: '82%', score: 86 },
    { rank: 5, name: 'Dr. Vikram Singh', spec: 'Orthopedic', rating: 4.5, patients: 280, followup: '70%', score: 84 },
    { rank: 6, name: 'Dr. Kavita Reddy', spec: 'Dermatologist', rating: 4.4, patients: 150, followup: '60%', score: 78 },
    { rank: 7, name: 'Dr. Suresh Menon', spec: 'General Physician', rating: 3.2, patients: 400, followup: '45%', score: 65 },
  ];

  const teleData = {
    labels: ['Dr. Kumar', 'Dr. Patil', 'Dr. Sharma', 'Dr. Desai', 'Dr. Singh'],
    datasets: [
      { label: 'Physical Consults', data: [300, 250, 150, 200, 220], backgroundColor: '#38bdf8' },
      { label: 'Tele Consults', data: [150, 130, 70, 110, 60], backgroundColor: '#8b5cf6' }
    ]
  };

  return (
    <div className="admin-dashboard-container">
      <h1 className="text-3xl font-bold mb-6">Doctor Performance Analytics</h1>

      <div className="ai-alert-panel mb-8">
        <div>
          <h3 className="font-bold text-danger text-lg">Performance Flag</h3>
          <p>⚠️ Dr. Suresh Menon has low patient ratings (3.2) for 3 consecutive months and a follow-up drop-off rate of 55%. Peer review recommended.</p>
        </div>
      </div>

      <div className="analytics-grid mb-8">
        <div className="chart-container">
          <h3 className="font-bold text-xl mb-4 text-center">Consultation Mode Ratio</h3>
          <Bar data={teleData} options={{ responsive: true, maintainAspectRatio: false, scales: { x: { stacked: true, ticks: { color: '#94a3b8' } }, y: { stacked: true, ticks: { color: '#94a3b8' } } }, plugins: { legend: { labels: { color: '#fff' } } } }} />
        </div>
        
        <div className="chart-container">
          <h3 className="font-bold text-xl mb-4 text-center">Prescription Patterns</h3>
          <ul className="space-y-4 mt-6">
            <li className="flex justify-between items-center bg-black/20 p-3 rounded border border-glass-border">
              <span>1. Paracetamol (Analgesic)</span> <span className="text-primary font-bold">2,450 Rx</span>
            </li>
            <li className="flex justify-between items-center bg-black/20 p-3 rounded border border-glass-border">
              <span>2. Amlodipine (Anti-hypertensive)</span> <span className="text-primary font-bold">1,820 Rx</span>
            </li>
            <li className="flex justify-between items-center bg-black/20 p-3 rounded border border-glass-border">
              <span>3. Metformin (Anti-diabetic)</span> <span className="text-primary font-bold">1,650 Rx</span>
            </li>
            <li className="flex justify-between items-center bg-black/20 p-3 rounded border border-glass-border">
              <span>4. Amoxicillin (Antibiotic)</span> <span className="text-primary font-bold">980 Rx</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="admin-table-wrapper">
        <h3 className="font-bold text-xl p-6 pb-2">Medical Officer Performance Matrix</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Doctor Name</th>
              <th>Specialization</th>
              <th>Avg Rating</th>
              <th>Patients/Month</th>
              <th>Follow-up Rate</th>
              <th>Overall Score</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((d) => (
              <tr key={d.rank}>
                <td className="font-bold">#{d.rank}</td>
                <td className="font-medium">{d.name}</td>
                <td>{d.spec}</td>
                <td className={d.rating < 4.0 ? 'text-danger font-bold' : 'text-success font-bold'}>⭐ {d.rating}</td>
                <td>{d.patients}</td>
                <td>{d.followup}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-glass-border h-2 rounded-full overflow-hidden">
                      <div className={`h-full ${d.score < 70 ? 'bg-danger' : 'bg-primary'}`} style={{ width: `${d.score}%` }}></div>
                    </div>
                    <span>{d.score}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
