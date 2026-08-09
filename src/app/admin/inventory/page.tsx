'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Package, 
  AlertTriangle, 
  Clock, 
  Truck, 
  ArrowLeft, 
  Plus, 
  Search, 
  Filter, 
  CheckCircle2, 
  Send, 
  RefreshCw, 
  ShieldAlert, 
  Layers, 
  ArrowRightLeft,
  Calendar,
  IndianRupee,
  ChevronRight
} from 'lucide-react';
import '../../../styles/admin.css';

interface InventoryRow {
  id: string;
  phc: string;
  para: number;
  met: number;
  amlo: number;
  ors: number;
  vax: number;
  status: 'Adequate' | 'Low' | 'Critical';
  lastRestocked: string;
}

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [reorderedPhcs, setReorderedPhcs] = useState<string[]>([]);
  const [transferred, setTransferred] = useState(false);

  const inventoryData: InventoryRow[] = [
    { id: 'nashik', phc: 'PHC Nashik Central', para: 450, met: 120, amlo: 85, ors: 200, vax: 150, status: 'Adequate', lastRestocked: 'Aug 2, 2024' },
    { id: 'deoli', phc: 'PHC Deoli', para: 30, met: 15, amlo: 8, ors: 50, vax: 20, status: 'Critical', lastRestocked: 'Jul 15, 2024' },
    { id: 'hinganghat', phc: 'CHC Hinganghat', para: 200, met: 80, amlo: 45, ors: 100, vax: 80, status: 'Low', lastRestocked: 'Jul 28, 2024' },
    { id: 'arvi', phc: 'PHC Arvi Sub-district', para: 350, met: 100, amlo: 60, ors: 150, vax: 100, status: 'Adequate', lastRestocked: 'Aug 1, 2024' },
    { id: 'ashti', phc: 'PHC Ashti Sector', para: 100, met: 40, amlo: 20, ors: 80, vax: 40, status: 'Low', lastRestocked: 'Jul 20, 2024' },
    { id: 'seloo', phc: 'PHC Seloo Center', para: 410, met: 110, amlo: 75, ors: 180, vax: 120, status: 'Adequate', lastRestocked: 'Aug 4, 2024' }
  ];

  const handleReorder = (phcName: string) => {
    if (!reorderedPhcs.includes(phcName)) {
      setReorderedPhcs([...reorderedPhcs, phcName]);
    }
  };

  const handleStockTransfer = () => {
    setTransferred(true);
    setTimeout(() => setTransferred(false), 4000);
  };

  const filteredData = inventoryData.filter(item => 
    item.phc.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <span className="text-sm text-[#59b6c2] font-semibold">Pharmaceuticals & Supply Chain</span>
          </div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3">
            <Package className="text-[#59b6c2]" size={32} />
            Medicine & Medical Supply Inventory
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/admin/analytics/disease-map" className="btn-action-outline text-xs">
            Disease Map →
          </Link>
          <Link href="/admin/analytics/asha-performance" className="btn-action-primary text-xs">
            ASHA Performance →
          </Link>
        </div>
      </div>

      {/* ── Stockout Emergency Panel ── */}
      <div className="glass-card p-6 rounded-2xl border border-red-500/40 bg-red-500/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <AlertTriangle size={32} className="text-red-400 flex-shrink-0 mt-1 animate-pulse" />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-black uppercase tracking-widest text-red-400 bg-red-500/20 px-2.5 py-0.5 rounded-full border border-red-500/30">
                CRITICAL STOCKOUT WARNING
              </span>
              <span className="text-xs text-gray-400">PHC Deoli Center</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Metformin & Amlodipine Supply Critically Low</h3>
            <p className="text-sm text-gray-300">
              PHC Deoli has only <strong>15 units of Metformin 500mg</strong> remaining (4-day reserve). Weekly demand is 50 units. Immediate procurement required.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
          <button 
            onClick={handleStockTransfer}
            className="btn-action-outline text-xs flex items-center gap-2"
          >
            <ArrowRightLeft size={14} /> Transfer 50 Units from PHC Nashik
          </button>

          <button 
            onClick={() => handleReorder('PHC Deoli')}
            className="btn-action-primary text-xs flex items-center gap-2 bg-red-500 text-white"
          >
            <Truck size={14} /> Dispatch Emergency Stock Truck
          </button>
        </div>
      </div>

      {transferred && (
        <div className="p-4 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-emerald-300 text-sm font-bold flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 size={18} /> Emergency Stock Transfer Initiated: 50 Units of Metformin routed from PHC Nashik Central ➔ PHC Deoli!
        </div>
      )}

      {/* ── KPI Inventory Metrics ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Supply Reserve</span>
            <IndianRupee size={20} className="text-[#59b6c2]" />
          </div>
          <div className="text-3xl font-black text-white">₹18.4L</div>
          <p className="text-xs text-gray-400 mt-2">6 District PHC Warehouses</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Stockout Risk Alerts</span>
            <AlertTriangle size={20} className="text-red-400" />
          </div>
          <div className="text-3xl font-black text-red-400">1 Critical <span className="text-xs text-amber-400 font-bold">/ 2 Low</span></div>
          <p className="text-xs text-gray-400 mt-2">Action needed for Deoli & Ashti</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Expiring Watchlist</span>
            <Clock size={20} className="text-amber-400" />
          </div>
          <div className="text-3xl font-black text-amber-400">3 Batches</div>
          <p className="text-xs text-gray-400 mt-2">Expiring within 30 days (&lt;Aug 31)</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Shipments In Transit</span>
            <Truck size={20} className="text-emerald-400" />
          </div>
          <div className="text-3xl font-black text-emerald-400">2 Trucks</div>
          <p className="text-xs text-emerald-400 font-semibold mt-2">ETA: Tomorrow, 10:00 AM</p>
        </div>
      </div>

      {/* ── Main PHC Stock Table ── */}
      <div className="glass-card p-6 rounded-2xl border border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Layers size={20} className="text-[#59b6c2]" />
              PHC Facility Supply Matrix & Medicine Balances
            </h2>
            <p className="text-xs text-gray-400">Real-time stock audit across Paracetamol, Metformin, Amlodipine, ORS, and Cold-Chain Vaccines.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-xl border border-white/10">
              <Search size={16} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Search PHC center..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent text-sm text-white outline-none placeholder:text-gray-500 w-44"
              />
            </div>

            <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-xl border border-white/10">
              <Filter size={16} className="text-gray-400" />
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-transparent text-xs text-white outline-none cursor-pointer"
              >
                <option value="All" className="bg-[#041416]">All Categories</option>
                <option value="Essential" className="bg-[#041416]">Essential Medicines</option>
                <option value="Vaccines" className="bg-[#041416]">Cold Chain Vaccines</option>
                <option value="ORS" className="bg-[#041416]">ORS & Hydration</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-xs text-gray-400 uppercase tracking-wider">
                <th className="pb-3 px-3">Facility Name</th>
                <th className="pb-3 px-3">Paracetamol 500mg</th>
                <th className="pb-3 px-3">Metformin 500mg</th>
                <th className="pb-3 px-3">Amlodipine 5mg</th>
                <th className="pb-3 px-3">ORS Packets</th>
                <th className="pb-3 px-3">Vaccines (Vials)</th>
                <th className="pb-3 px-3">Stock Status</th>
                <th className="pb-3 px-3 text-right">Logistics Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm text-gray-200">
              {filteredData.map((row) => {
                const isReordered = reorderedPhcs.includes(row.phc);
                return (
                  <tr key={row.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-3">
                      <strong className="text-white block">{row.phc}</strong>
                      <span className="text-xs text-gray-500">Restocked: {row.lastRestocked}</span>
                    </td>
                    <td className="py-4 px-3 font-bold text-white">
                      {row.para} <span className="text-xs font-normal text-gray-500">units</span>
                    </td>
                    <td className={`py-4 px-3 font-bold ${row.met < 20 ? 'text-red-400 bg-red-500/10 px-2 py-1 rounded' : 'text-white'}`}>
                      {row.met} <span className="text-xs font-normal text-gray-500">units</span>
                    </td>
                    <td className={`py-4 px-3 font-bold ${row.amlo < 20 ? 'text-red-400 bg-red-500/10 px-2 py-1 rounded' : 'text-white'}`}>
                      {row.amlo} <span className="text-xs font-normal text-gray-500">units</span>
                    </td>
                    <td className="py-4 px-3 font-bold text-white">
                      {row.ors} <span className="text-xs font-normal text-gray-500">pkts</span>
                    </td>
                    <td className="py-4 px-3 font-bold text-white">
                      {row.vax} <span className="text-xs font-normal text-gray-500">vials</span>
                    </td>
                    <td className="py-4 px-3">
                      <span className={`text-xs font-black px-3 py-1 rounded-full border ${row.status === 'Adequate' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' : row.status === 'Low' ? 'bg-amber-500/20 text-amber-400 border-amber-500/40' : 'bg-red-500/20 text-red-400 border-red-500/40'}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 px-3 text-right">
                      <button
                        onClick={() => handleReorder(row.phc)}
                        className={`text-xs px-3 py-1.5 rounded-full font-bold transition-all ${isReordered ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'btn-action-primary'}`}
                      >
                        {isReordered ? 'Order Dispatched ✓' : 'Reorder Supply'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
