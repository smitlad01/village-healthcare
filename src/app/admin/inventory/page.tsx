'use client';
import React from 'react';
import { Package, AlertTriangle, Clock, Truck } from 'lucide-react';
import '../../../styles/admin.css';

export default function InventoryPage() {
  const inventoryData = [
    { phc: 'PHC Nashik', para: 450, met: 120, amlo: 85, ors: 200, vax: 150, status: 'Adequate', statusClass: 'status-adequate' },
    { phc: 'PHC Deoli', para: 30, met: 15, amlo: 8, ors: 50, vax: 20, status: 'Critical', statusClass: 'status-critical' },
    { phc: 'CHC Hinganghat', para: 200, met: 80, amlo: 45, ors: 100, vax: 80, status: 'Low', statusClass: 'status-low' },
    { phc: 'PHC Arvi', para: 350, met: 100, amlo: 60, ors: 150, vax: 100, status: 'Adequate', statusClass: 'status-adequate' },
    { phc: 'PHC Ashti', para: 100, met: 40, amlo: 20, ors: 80, vax: 40, status: 'Low', statusClass: 'status-low' },
  ];

  return (
    <div className="admin-dashboard-container">
      <h1 className="text-3xl font-bold mb-6">Medicine & Supply Inventory</h1>

      <div className="kpi-grid mb-8">
        <div className="kpi-card border-danger bg-danger/5">
          <div className="flex justify-between"><span className="text-danger font-bold">Stockout Alerts</span><AlertTriangle className="text-danger"/></div>
          <div className="text-sm mt-2">
            <strong className="block mb-1">PHC Deoli: Metformin critically low (15 units).</strong>
            Expected demand: 50/week. Reorder NOW.
          </div>
          <button className="btn btn-secondary mt-4 border-danger text-danger hover:bg-danger hover:text-white">Emergency Reorder</button>
        </div>
        <div className="kpi-card">
          <div className="flex justify-between"><span className="text-warning font-bold">Expiring Soon</span><Clock className="text-warning"/></div>
          <div className="text-2xl font-bold mt-2">3 Items</div>
          <div className="text-sm text-secondary mt-1">Expiring within 30 days</div>
        </div>
        <div className="kpi-card">
          <div className="flex justify-between"><span className="text-success font-bold">In Transit</span><Truck className="text-success"/></div>
          <div className="text-2xl font-bold mt-2">2 Orders</div>
          <div className="text-sm text-secondary mt-1">Expected delivery: Tomorrow</div>
        </div>
      </div>

      <div className="admin-table-wrapper mb-8">
        <h3 className="font-bold text-xl p-6 pb-2">PHC-wise Stock Levels (Units)</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Facility Name</th>
              <th>Paracetamol</th>
              <th>Metformin</th>
              <th>Amlodipine</th>
              <th>ORS Packets</th>
              <th>Vaccines (Assorted)</th>
              <th>Overall Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((row, i) => (
              <tr key={i}>
                <td className="font-medium">{row.phc}</td>
                <td>{row.para}</td>
                <td className={row.met < 20 ? 'text-danger font-bold' : ''}>{row.met}</td>
                <td className={row.amlo < 20 ? 'text-danger font-bold' : ''}>{row.amlo}</td>
                <td>{row.ors}</td>
                <td>{row.vax}</td>
                <td><span className={`status-badge ${row.statusClass}`}>{row.status}</span></td>
                <td><button className="text-primary hover:underline text-sm font-medium">Reorder</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
