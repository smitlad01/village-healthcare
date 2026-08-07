'use client';
import React from 'react';
import { FileText, Download, UploadCloud, Calendar } from 'lucide-react';
import '../../../styles/admin.css';

export default function ReportsPage() {
  return (
    <div className="admin-dashboard-container">
      <h1 className="text-3xl font-bold mb-6">Government Reports Generation</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="chart-container lg:col-span-1">
          <h3 className="font-bold text-xl mb-6">Report Parameters</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-secondary mb-2 text-sm">Report Type</label>
              <select className="w-full bg-black/30 border border-glass-border rounded-lg p-3 text-white">
                <option>Monthly Health Summary</option>
                <option>Disease Burden Analysis</option>
                <option>Vaccination Coverage</option>
                <option>Maternal Health</option>
                <option>Nutrition Status</option>
              </select>
            </div>
            <div>
              <label className="block text-secondary mb-2 text-sm">Administrative Level</label>
              <select className="w-full bg-black/30 border border-glass-border rounded-lg p-3 text-white">
                <option>District (Nashik)</option>
                <option>Block Level</option>
                <option>Village Level</option>
              </select>
            </div>
            <div>
              <label className="block text-secondary mb-2 text-sm">Time Period</label>
              <input type="month" className="w-full bg-black/30 border border-glass-border rounded-lg p-3 text-white" defaultValue="2024-08" />
            </div>
            <button type="button" className="btn btn-primary w-full mt-4 py-3">Generate Preview</button>
          </form>
        </div>

        <div className="chart-container lg:col-span-2 bg-white text-black p-8 rounded-lg">
          <div className="flex justify-between items-start border-b border-gray-300 pb-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">LOGO</div>
              <div>
                <h2 className="text-xl font-bold uppercase">Ministry of Health & Family Welfare</h2>
                <h3 className="text-lg font-semibold text-gray-700">District Health Mission, Nashik</h3>
              </div>
            </div>
            <div className="text-right text-sm text-gray-600">
              <p>Date: August 7, 2024</p>
              <p>Ref: DHM/WRD/2024/08</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center underline mb-8">MONTHLY HEALTH SUMMARY REPORT</h2>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-2">1. Executive Summary</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                During the month of August 2024, the district of Nashik recorded a total of 4,230 outpatient checkups across all PHCs and CHCs. 
                A minor outbreak of Dengue was contained in the Hinganghat block with 28 confirmed cases. 
                Vaccination coverage remained stable at 87%, while ASHA worker field coverage improved by 2% to reach 94%.
              </p>
            </div>

            <table className="w-full border-collapse border border-gray-400 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-400 p-2 text-left">Key Metric</th>
                  <th className="border border-gray-400 p-2 text-right">Target</th>
                  <th className="border border-gray-400 p-2 text-right">Achieved</th>
                  <th className="border border-gray-400 p-2 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 p-2">OPD Consultations</td>
                  <td className="border border-gray-400 p-2 text-right">5,000</td>
                  <td className="border border-gray-400 p-2 text-right">4,230</td>
                  <td className="border border-gray-400 p-2 text-center text-orange-600 font-bold">84%</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-2">Institutional Deliveries</td>
                  <td className="border border-gray-400 p-2 text-right">450</td>
                  <td className="border border-gray-400 p-2 text-right">432</td>
                  <td className="border border-gray-400 p-2 text-center text-green-600 font-bold">96%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 flex gap-4 justify-end">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 text-black">
              <Download size={18} /> Download PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              <UploadCloud size={18} /> Submit to MoHFW Portal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
