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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b" style={{ borderColor: 'var(--border)' }}>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link href="/admin/dashboard" className="text-sm flex items-center gap-1 transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <ArrowLeft size={16} /> Admin Command Center
            </Link>
            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>•</span>
            <span className="text-sm font-semibold" style={{ color: '#59b6c2' }}>Pharmaceuticals & Supply Chain</span>
          </div>
          <h1 className="text-3xl font-black flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
            <Package size={32} style={{ color: '#59b6c2' }} />
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
      <div className="glass-card p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6" style={{ borderColor: 'rgba(239,68,68,0.4)', backgroundColor: 'rgba(239,68,68,0.1)', borderWidth: '1px', borderStyle: 'solid' }}>
        <div className="flex items-start gap-4">
          <AlertTriangle size={32} className="flex-shrink-0 mt-1" style={{ color: '#ef4444' }} />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full" style={{ color: '#ef4444', backgroundColor: 'rgba(239,68,68,0.2)', border: '1px solid rgba(239,68,68,0.3)' }}>
                CRITICAL STOCKOUT WARNING
              </span>
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>PHC Deoli Center</span>
            </div>
            <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Metformin & Amlodipine Supply Critically Low</h3>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
              PHC Deoli has only <strong>15 units of Metformin 500mg</strong> remaining (4-day reserve). Weekly demand is 50 units. Immediate procurement required.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
          <button 
            onClick={handleStockTransfer}
            className="text-xs flex items-center gap-2"
            style={{ 
              padding: '8px 16px', 
              borderRadius: '9999px', 
              border: '1px solid #59b6c2', 
              color: '#59b6c2',
              backgroundColor: 'transparent'
            }}
          >
            <ArrowRightLeft size={14} /> Transfer 50 Units from PHC Nashik
          </button>

          <button 
            onClick={() => handleReorder('PHC Deoli')}
            className="text-xs flex items-center gap-2"
            style={{ 
              padding: '8px 16px', 
              borderRadius: '9999px', 
              border: 'none',
              backgroundColor: '#ef4444',
              color: '#ffffff',
              fontWeight: 'bold'
            }}
          >
            <Truck size={14} /> Dispatch Emergency Stock Truck
          </button>
        </div>
      </div>

      {transferred && (
        <div className="p-4 rounded-xl text-sm font-bold flex items-center gap-2" style={{ backgroundColor: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.4)', color: '#10b981' }}>
          <CheckCircle2 size={18} /> Emergency Stock Transfer Initiated: 50 Units of Metformin routed from PHC Nashik Central ➔ PHC Deoli!
        </div>
      )}

      {/* ── KPI Inventory Metrics ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="kpi-card glass-card p-5 rounded-2xl flex flex-col justify-between" style={{ border: '1px solid var(--border)' }}>
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Total Supply Reserve</span>
            <IndianRupee size={20} style={{ color: '#59b6c2' }} />
          </div>
          <div className="text-3xl font-black" style={{ color: 'var(--text-primary)' }}>₹18.4L</div>
          <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>6 District PHC Warehouses</p>
        </div>

        <div className="kpi-card glass-card p-5 rounded-2xl flex flex-col justify-between" style={{ border: '1px solid var(--border)' }}>
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Stockout Risk Alerts</span>
            <AlertTriangle size={20} style={{ color: '#ef4444' }} />
          </div>
          <div className="text-3xl font-black" style={{ color: '#ef4444' }}>1 Critical <span className="text-xs font-bold" style={{ color: '#f59e0b' }}>/ 2 Low</span></div>
          <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>Action needed for Deoli & Ashti</p>
        </div>

        <div className="kpi-card glass-card p-5 rounded-2xl flex flex-col justify-between" style={{ border: '1px solid var(--border)' }}>
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Expiring Watchlist</span>
            <Clock size={20} style={{ color: '#f59e0b' }} />
          </div>
          <div className="text-3xl font-black" style={{ color: '#f59e0b' }}>3 Batches</div>
          <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>Expiring within 30 days (&lt;Aug 31)</p>
        </div>

        <div className="kpi-card glass-card p-5 rounded-2xl flex flex-col justify-between" style={{ border: '1px solid var(--border)' }}>
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.7)' }}>Shipments In Transit</span>
            <Truck size={20} style={{ color: '#10b981' }} />
          </div>
          <div className="text-3xl font-black" style={{ color: '#10b981' }}>2 Trucks</div>
          <p className="text-xs font-semibold mt-2" style={{ color: '#10b981' }}>ETA: Tomorrow, 10:00 AM</p>
        </div>
      </div>

      {/* ── Main PHC Stock Table ── */}
      <div className="glass-card p-6 rounded-2xl" style={{ border: '1px solid var(--border)' }}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b" style={{ borderColor: 'var(--border)' }}>
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <Layers size={20} style={{ color: '#59b6c2' }} />
              PHC Facility Supply Matrix & Medicine Balances
            </h2>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Real-time stock audit across Paracetamol, Metformin, Amlodipine, ORS, and Cold-Chain Vaccines.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid var(--border)' }}>
              <Search size={16} style={{ color: 'rgba(255,255,255,0.7)' }} />
              <input 
                type="text" 
                placeholder="Search PHC center..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="text-sm outline-none w-44"
                style={{ backgroundColor: 'transparent', color: 'var(--text-primary)' }}
              />
            </div>

            <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid var(--border)' }}>
              <Filter size={16} style={{ color: 'rgba(255,255,255,0.7)' }} />
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="text-xs outline-none cursor-pointer"
                style={{ backgroundColor: 'transparent', color: 'var(--text-primary)' }}
              >
                <option value="All" style={{ backgroundColor: 'var(--surface)' }}>All Categories</option>
                <option value="Essential" style={{ backgroundColor: 'var(--surface)' }}>Essential Medicines</option>
                <option value="Vaccines" style={{ backgroundColor: 'var(--surface)' }}>Cold Chain Vaccines</option>
                <option value="ORS" style={{ backgroundColor: 'var(--surface)' }}>ORS & Hydration</option>
              </select>
            </div>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="w-full text-left" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr className="text-xs uppercase tracking-wider border-b" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
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
            <tbody className="text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>
              {filteredData.map((row) => {
                const isReordered = reorderedPhcs.includes(row.phc);
                return (
                  <tr key={row.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td className="py-4 px-3">
                      <strong className="block" style={{ color: 'var(--text-primary)' }}>{row.phc}</strong>
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Restocked: {row.lastRestocked}</span>
                    </td>
                    <td className="py-4 px-3 font-bold" style={{ color: 'var(--text-primary)' }}>
                      {row.para} <span className="text-xs font-normal" style={{ color: 'rgba(255,255,255,0.5)' }}>units</span>
                    </td>
                    <td className="py-4 px-3 font-bold">
                      <span style={{ 
                        color: row.met < 20 ? '#ef4444' : 'var(--text-primary)', 
                        backgroundColor: row.met < 20 ? 'rgba(239,68,68,0.1)' : 'transparent',
                        padding: row.met < 20 ? '4px 8px' : '0',
                        borderRadius: row.met < 20 ? '4px' : '0'
                      }}>
                        {row.met} <span className="text-xs font-normal" style={{ color: 'rgba(255,255,255,0.5)' }}>units</span>
                      </span>
                    </td>
                    <td className="py-4 px-3 font-bold">
                      <span style={{ 
                        color: row.amlo < 20 ? '#ef4444' : 'var(--text-primary)', 
                        backgroundColor: row.amlo < 20 ? 'rgba(239,68,68,0.1)' : 'transparent',
                        padding: row.amlo < 20 ? '4px 8px' : '0',
                        borderRadius: row.amlo < 20 ? '4px' : '0'
                      }}>
                        {row.amlo} <span className="text-xs font-normal" style={{ color: 'rgba(255,255,255,0.5)' }}>units</span>
                      </span>
                    </td>
                    <td className="py-4 px-3 font-bold" style={{ color: 'var(--text-primary)' }}>
                      {row.ors} <span className="text-xs font-normal" style={{ color: 'rgba(255,255,255,0.5)' }}>pkts</span>
                    </td>
                    <td className="py-4 px-3 font-bold" style={{ color: 'var(--text-primary)' }}>
                      {row.vax} <span className="text-xs font-normal" style={{ color: 'rgba(255,255,255,0.5)' }}>vials</span>
                    </td>
                    <td className="py-4 px-3">
                      <span className="text-xs font-black px-3 py-1 rounded-full border" style={{ 
                        backgroundColor: row.status === 'Adequate' ? 'rgba(16,185,129,0.2)' : row.status === 'Low' ? 'rgba(245,158,11,0.2)' : 'rgba(239,68,68,0.2)', 
                        color: row.status === 'Adequate' ? '#10b981' : row.status === 'Low' ? '#f59e0b' : '#ef4444', 
                        borderColor: row.status === 'Adequate' ? 'rgba(16,185,129,0.4)' : row.status === 'Low' ? 'rgba(245,158,11,0.4)' : 'rgba(239,68,68,0.4)' 
                      }}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 px-3 text-right">
                      <button
                        onClick={() => handleReorder(row.phc)}
                        className={`text-xs px-3 py-1.5 rounded-full font-bold ${!isReordered ? 'btn-action-primary' : ''}`}
                        style={isReordered ? { 
                          backgroundColor: 'rgba(16,185,129,0.2)', 
                          color: '#10b981', 
                          border: '1px solid rgba(16,185,129,0.4)',
                          cursor: 'default'
                        } : {}}
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
