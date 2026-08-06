'use client';
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../../../styles/admin.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function SchemesManagement() {
  const schemes = [
    { name: 'Ayushman Bharat', enrolled: '45,200', target: '50,000', budget: '₹1.2 Cr', used: 85 },
    { name: 'Janani Suraksha Yojana', enrolled: '3,450', target: '4,000', budget: '₹45 L', used: 62 },
    { name: 'National TB Elimination', enrolled: '850', target: '1,000', budget: '₹20 L', used: 90 },
    { name: 'PM Matru Vandana', enrolled: '2,100', target: '3,500', budget: '₹35 L', used: 45 },
    { name: 'Mission Indradhanush', enrolled: '12,500', target: '15,000', budget: '₹30 L', used: 78 },
  ];

  return (
    <div className="admin-dashboard-container">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Government Scheme Management</h1>
          <p className="text-secondary mt-1">Track implementation, budgets, and beneficiary outreach</p>
        </div>
        <button className="btn btn-primary">+ Add New Scheme</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="chart-container lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {schemes.map((s, i) => (
            <div key={i} className="scheme-card">
              <h3 className="font-bold text-lg mb-2">{s.name}</h3>
              <div className="flex justify-between text-sm text-secondary mb-4">
                <span>Enrolled: <strong className="text-white">{s.enrolled}</strong> / {s.target}</span>
                <span>Budget: {s.budget}</span>
              </div>
              <div className="text-sm mb-1 font-medium">Budget Utilization: {s.used}%</div>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: `${s.used}%`, backgroundColor: s.used > 80 ? '#22c55e' : s.used < 50 ? '#ef4444' : '#38bdf8' }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="chart-container bg-primary/10 border-primary/30">
          <h3 className="font-bold text-xl mb-6">District Budget Summary (2024-25)</h3>
          <div className="text-center mb-8">
            <div className="text-secondary text-lg">Total Allocated</div>
            <div className="text-4xl font-bold text-white mt-2">₹2.5 Cr</div>
          </div>
          <div className="text-center mb-8">
            <div className="text-secondary text-lg">Total Utilized</div>
            <div className="text-4xl font-bold text-primary mt-2">₹1.8 Cr</div>
          </div>
          <div className="text-center">
            <div className="text-secondary text-lg">Overall Utilization</div>
            <div className="text-4xl font-bold text-success mt-2">72%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
