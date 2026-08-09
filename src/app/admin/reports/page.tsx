'use client';
import React from 'react';
import { FileText, Download, UploadCloud, Calendar } from 'lucide-react';
import '../../../styles/admin.css';

export default function ReportsPage() {
  return (
    <div className="admin-dashboard-container">
      <h1 className="font-bold mb-6" style={{ fontSize: '1.875rem', lineHeight: '2.25rem' }}>Government Reports Generation</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        <div className="chart-container" style={{ flex: '1 1 300px' }}>
          <h3 className="font-bold text-xl mb-6">Report Parameters</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label className="text-secondary text-xs" style={{ display: 'block', marginBottom: '0.5rem' }}>Report Type</label>
              <select style={{ width: '100%', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid var(--border)', borderRadius: '0.5rem', padding: '0.75rem', color: 'var(--text-primary)' }}>
                <option>Monthly Health Summary</option>
                <option>Disease Burden Analysis</option>
                <option>Vaccination Coverage</option>
                <option>Maternal Health</option>
                <option>Nutrition Status</option>
              </select>
            </div>
            <div>
              <label className="text-secondary text-xs" style={{ display: 'block', marginBottom: '0.5rem' }}>Administrative Level</label>
              <select style={{ width: '100%', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid var(--border)', borderRadius: '0.5rem', padding: '0.75rem', color: 'var(--text-primary)' }}>
                <option>District (Nashik)</option>
                <option>Block Level</option>
                <option>Zone Level</option>
              </select>
            </div>
            <div>
              <label className="text-secondary text-xs" style={{ display: 'block', marginBottom: '0.5rem' }}>Time Period</label>
              <input type="month" style={{ width: '100%', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid var(--border)', borderRadius: '0.5rem', padding: '0.75rem', color: 'var(--text-primary)' }} defaultValue="2024-08" />
            </div>
            <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '0.75rem' }}>Generate Preview</button>
          </form>
        </div>

        <div className="chart-container" style={{ flex: '2 1 600px', backgroundColor: '#fff', color: '#000', padding: '2rem', borderRadius: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #d1d5db', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '4rem', height: '4rem', backgroundColor: '#e5e7eb', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold', color: '#6b7280' }}>LOGO</div>
              <div>
                <h2 className="text-xl font-bold" style={{ textTransform: 'uppercase' }}>Ministry of Health & Family Welfare</h2>
                <h3 className="text-lg" style={{ fontWeight: 600, color: '#374151' }}>District Health Mission, Nashik</h3>
              </div>
            </div>
            <div className="text-xs" style={{ textAlign: 'right', color: '#4b5563' }}>
              <p>Date: August 7, 2024</p>
              <p>Ref: DHM/WRD/2024/08</p>
            </div>
          </div>

          <h2 className="font-bold text-center mb-6" style={{ fontSize: '1.5rem', textDecoration: 'underline' }}>MONTHLY HEALTH SUMMARY REPORT</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h4 className="font-bold text-lg mb-2">1. Executive Summary</h4>
              <p className="text-xs" style={{ color: '#374151', lineHeight: '1.625' }}>
                During the month of August 2024, the district of Nashik recorded a total of 4,230 outpatient checkups across all PHCs and CHCs. 
                A minor outbreak of Dengue was contained in the Hinganghat block with 28 confirmed cases. 
                Vaccination coverage remained stable at 87%, while ASHA worker field coverage improved by 2% to reach 94%.
              </p>
            </div>

            <table className="text-xs" style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #9ca3af' }}>
              <thead>
                <tr style={{ backgroundColor: '#f3f4f6' }}>
                  <th style={{ border: '1px solid #9ca3af', padding: '0.5rem', textAlign: 'left' }}>Key Metric</th>
                  <th style={{ border: '1px solid #9ca3af', padding: '0.5rem', textAlign: 'right' }}>Target</th>
                  <th style={{ border: '1px solid #9ca3af', padding: '0.5rem', textAlign: 'right' }}>Achieved</th>
                  <th style={{ border: '1px solid #9ca3af', padding: '0.5rem', textAlign: 'center' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid #9ca3af', padding: '0.5rem' }}>OPD Consultations</td>
                  <td style={{ border: '1px solid #9ca3af', padding: '0.5rem', textAlign: 'right' }}>5,000</td>
                  <td style={{ border: '1px solid #9ca3af', padding: '0.5rem', textAlign: 'right' }}>4,230</td>
                  <td className="font-bold" style={{ border: '1px solid #9ca3af', padding: '0.5rem', textAlign: 'center', color: '#ea580c' }}>84%</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #9ca3af', padding: '0.5rem' }}>Institutional Deliveries</td>
                  <td style={{ border: '1px solid #9ca3af', padding: '0.5rem', textAlign: 'right' }}>450</td>
                  <td style={{ border: '1px solid #9ca3af', padding: '0.5rem', textAlign: 'right' }}>432</td>
                  <td className="font-bold" style={{ border: '1px solid #9ca3af', padding: '0.5rem', textAlign: 'center', color: '#16a34a' }}>96%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', border: '1px solid #9ca3af', borderRadius: '0.25rem', color: '#000', backgroundColor: 'transparent', cursor: 'pointer' }}>
              <Download size={18} /> Download PDF
            </button>
            <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}>
              <UploadCloud size={18} /> Submit to MoHFW Portal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
