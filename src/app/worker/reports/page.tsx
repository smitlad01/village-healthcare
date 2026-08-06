'use client';

import React from 'react';
import '@/styles/globals.css';
import '@/styles/worker.css';
import { FileText, Download, Send, CheckCircle2, Calendar } from 'lucide-react';

export default function ReportsGenerator() {
  return (
    <div className="worker-container max-w-5xl">
      <div className="worker-header">
        <div>
          <h1 className="worker-title">Generate Reports</h1>
          <p className="text-slate-400 mt-2 text-lg">August 2024 Monthly Summary</p>
        </div>
        <div className="flex gap-4">
          <button className="btn-secondary"><Download size={20} /> Download PDF</button>
          <button className="btn-primary"><Send size={20} /> Submit to ANM/PHC</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="worker-glass-panel">
            <h3 className="text-xl font-bold mb-4">Auto-Generated Summary</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center p-3 bg-slate-800/50 rounded-xl">
                <span className="text-slate-300">Total Checkups</span>
                <span className="text-2xl font-bold text-blue-400">34</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-slate-800/50 rounded-xl">
                <span className="text-slate-300">Referrals Made</span>
                <span className="text-2xl font-bold text-amber-400">8</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-slate-800/50 rounded-xl">
                <span className="text-slate-300">Immunizations</span>
                <span className="text-2xl font-bold text-emerald-400">12</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-slate-800/50 rounded-xl">
                <span className="text-slate-300">Home Visits</span>
                <span className="text-2xl font-bold text-purple-400">22</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-slate-800/50 rounded-xl">
                <span className="text-slate-300">Deliveries Attended</span>
                <span className="text-2xl font-bold text-pink-400">2</span>
              </li>
            </ul>
          </div>

          <div className="worker-glass-panel">
            <h3 className="text-lg font-bold mb-4">Past Archives</h3>
            <div className="space-y-3">
              {['July 2024', 'June 2024', 'May 2024'].map(month => (
                <button key={month} className="w-full text-left p-4 bg-slate-800/30 hover:bg-slate-700/50 border border-slate-700 rounded-xl flex items-center justify-between transition-colors">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-slate-400" size={20} />
                    <span>{month}</span>
                  </div>
                  <CheckCircle2 className="text-emerald-500" size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 worker-glass-panel p-0 overflow-hidden bg-slate-50 relative">
          {/* Simulated PDF Preview */}
          <div className="p-8 text-slate-800 font-serif h-[800px] overflow-y-auto">
            <div className="text-center border-b-2 border-slate-300 pb-6 mb-6">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-slate-900">National Health Mission</h2>
              <h3 className="text-xl font-semibold mt-2">ASHA Worker Monthly Report</h3>
              <p className="text-slate-500 mt-2">Format NO: ASHA-MH-04 | District: Wardha</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
              <div><strong>Name of ASHA:</strong> Meera Devi</div>
              <div><strong>Village/Ward:</strong> Wardha, Cluster A</div>
              <div><strong>Reporting Month:</strong> August 2024</div>
              <div><strong>Population Covered:</strong> 1,245</div>
            </div>

            <table className="w-full border-collapse border border-slate-300 mb-8 text-sm">
              <thead>
                <tr className="bg-slate-200">
                  <th className="border border-slate-300 p-2 text-left">S.No</th>
                  <th className="border border-slate-300 p-2 text-left">Indicator</th>
                  <th className="border border-slate-300 p-2 text-center">Achieved</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 p-2 text-center">1</td>
                  <td className="border border-slate-300 p-2">New Pregnancies Registered</td>
                  <td className="border border-slate-300 p-2 text-center font-bold">4</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-2 text-center">2</td>
                  <td className="border border-slate-300 p-2">Institutional Deliveries Escorted</td>
                  <td className="border border-slate-300 p-2 text-center font-bold">2</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-2 text-center">3</td>
                  <td className="border border-slate-300 p-2">Children Fully Immunized (1 yr)</td>
                  <td className="border border-slate-300 p-2 text-center font-bold">12</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-2 text-center">4</td>
                  <td className="border border-slate-300 p-2">NCD Screenings Conducted</td>
                  <td className="border border-slate-300 p-2 text-center font-bold">34</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-16 flex justify-between px-8 text-sm">
              <div className="text-center">
                <div className="border-b border-slate-800 w-48 mb-2 h-12"></div>
                <p>Signature of ASHA</p>
              </div>
              <div className="text-center">
                <div className="border-b border-slate-800 w-48 mb-2 h-12"></div>
                <p>Signature of ANM/Facilitator</p>
              </div>
            </div>
          </div>
          <div className="absolute top-4 right-4 bg-amber-100 text-amber-800 px-3 py-1 rounded shadow text-sm font-bold border border-amber-300">
            PREVIEW MODE
          </div>
        </div>
      </div>
    </div>
  );
}
