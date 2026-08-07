'use client';
import React from 'react';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import '../../../../styles/admin.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

export default function PopulationAnalytics() {
  const pyramidData = {
    labels: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70+'],
    datasets: [
      { label: 'Male', data: [-400, -450, -500, -480, -380, -280, -150, -80], backgroundColor: 'rgba(56, 189, 248, 0.7)' },
      { label: 'Female', data: [380, 420, 490, 470, 390, 290, 160, 90], backgroundColor: 'rgba(244, 114, 182, 0.7)' }
    ]
  };

  const diseaseData = {
    labels: ['Nashik', 'Deoli', 'Hinganghat', 'Arvi', 'Ashti'],
    datasets: [
      { label: 'Hypertension', data: [400, 300, 350, 200, 150], backgroundColor: '#ef4444' },
      { label: 'Diabetes', data: [300, 250, 280, 150, 120], backgroundColor: '#f97316' },
      { label: 'TB', data: [50, 40, 70, 30, 25], backgroundColor: '#eab308' },
      { label: 'Respiratory', data: [200, 150, 180, 100, 90], backgroundColor: '#3b82f6' },
      { label: 'Other', data: [150, 100, 120, 80, 70], backgroundColor: '#8b5cf6' },
    ]
  };

  const riskData = {
    labels: ['Green (Low)', 'Orange (Moderate)', 'Red (High)'],
    datasets: [{
      data: [45, 35, 20],
      backgroundColor: ['#22c55e', '#f97316', '#ef4444'],
      borderWidth: 0
    }]
  };

  const trendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'New Registrations',
      data: [650, 590, 800, 810, 860, 950, 1000, 1100, 1050, 900, 1150, 1250],
      borderColor: '#38bdf8',
      tension: 0.4,
      fill: true,
      backgroundColor: 'rgba(56, 189, 248, 0.1)'
    }]
  };

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { labels: { color: '#e2e8f0' } } },
    scales: {
      x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
      y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } }
    }
  };

  return (
    <div className="admin-dashboard-container">
      <h1 className="text-3xl font-bold mb-4">Population Health Analytics</h1>
      
      <div className="analytics-grid">
        <div className="chart-container">
          <h3 className="font-bold text-xl mb-4 text-center">Age-Gender Demographics</h3>
          <Bar data={pyramidData} options={{...commonOptions, indexAxis: 'y', scales: { x: { stacked: true }, y: { stacked: true } }}} />
        </div>
        
        <div className="chart-container">
          <h3 className="font-bold text-xl mb-4 text-center">Disease Prevalence by Block</h3>
          <Bar data={diseaseData} options={{...commonOptions, scales: { x: { stacked: true }, y: { stacked: true } }}} />
        </div>

        <div className="chart-container flex flex-col items-center">
          <h3 className="font-bold text-xl mb-4">Population Risk Distribution</h3>
          <div className="w-2/3 h-64">
            <Doughnut data={riskData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: '#fff' } } } }} />
          </div>
        </div>

        <div className="chart-container">
          <h3 className="font-bold text-xl mb-4 text-center">Monthly Registration Trend</h3>
          <Line data={trendData} options={commonOptions} />
        </div>
      </div>

      <div className="admin-table-wrapper mt-8">
        <h3 className="font-bold text-xl p-6 pb-2">Demographic Disparities</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Demographic Group</th>
              <th>Avg Health Score</th>
              <th>Screening Rate</th>
              <th>Primary Concern</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Male (Adult)</td><td>68/100</td><td>42%</td><td>Hypertension (35%)</td></tr>
            <tr><td>Female (Adult)</td><td>74/100</td><td>58%</td><td>Anemia (41%)</td></tr>
            <tr><td>Rural Population</td><td>65/100</td><td>45%</td><td>Respiratory (28%)</td></tr>
            <tr><td>Urban Population</td><td>76/100</td><td>62%</td><td>Diabetes (32%)</td></tr>
            <tr><td>Elderly (60+)</td><td>58/100</td><td>78%</td><td>Joint Pain (45%)</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
