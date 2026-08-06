'use client';

import React, { useState } from 'react';
import { FileText, UploadCloud, Camera, Share2, Download, Eye, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export default function ReportsPage() {
  const [expandedAnalysis, setExpandedAnalysis] = useState(null);

  const reports = [
    { id: 1, date: 'Jul 2026', title: 'Complete Blood Count', lab: 'City Lab Wardha', doctor: 'Dr. Rajesh Patel', analysis: 'Your Hemoglobin is 13.5 g/dL (Normal). WBC count is slightly elevated, suggesting a mild recent infection, but nothing alarming. Please stay hydrated.' },
    { id: 2, date: 'Jun 2026', title: 'Lipid Profile', lab: 'District Hospital Lab', doctor: 'Dr. Priya Sharma', analysis: 'Your Total Cholesterol of 192 mg/dL is within normal range. HDL has improved to 50 from 45 last quarter. Keep up the good diet!' },
    { id: 3, date: 'Mar 2026', title: 'HbA1c Test', lab: 'City Lab Wardha', doctor: 'Dr. Patel', analysis: 'HbA1c is at 6.1% (Prediabetes range). Better than last reading of 6.4%. Continue your current medication and exercise routine.' },
    { id: 4, date: 'Dec 2025', title: 'ECG Report', lab: 'District Hospital', doctor: 'Dr. Sharma', analysis: 'Normal sinus rhythm. No acute ischemic changes detected. Heart rate is healthy at 72 BPM.' }
  ];

  const toggleAnalysis = (id: any) => {
    setExpandedAnalysis(expandedAnalysis === id ? null : id);
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Lab Reports & Documents</h1>
        <p className="subtitle">View, manage, and analyze your medical records</p>
      </header>

      {/* Upload Section */}
      <section className="upload-section">
        <div className="upload-dropzone glass-panel dashed-border">
          <UploadCloud size={48} className="upload-icon" />
          <h3>Upload New Report</h3>
          <p>Drag and drop PDF/Images here or tap to browse</p>
          <div className="upload-actions">
            <button className="btn-primary"><UploadCloud size={18}/> Browse Files</button>
            <span className="or-text">OR</span>
            <button className="btn-secondary"><Camera size={18}/> Use Camera</button>
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="reports-section mt-lg">
        <h2 className="section-title">All Reports</h2>
        <div className="reports-grid">
          {reports.map(report => (
            <div key={report.id} className="glass-card report-card">
              <div className="report-header">
                <div className="report-icon-box"><FileText size={24} /></div>
                <div className="report-info">
                  <h3>{report.title}</h3>
                  <p>{report.date} • {report.lab}</p>
                  <p className="prescribed-by">Prescribed by: {report.doctor}</p>
                </div>
              </div>

              <div className="report-actions">
                <button className="btn-outline btn-small"><Eye size={16}/> View</button>
                <button className="btn-outline btn-small"><Download size={16}/> Download</button>
                <button className="btn-primary btn-small"><Share2 size={16}/> Share</button>
              </div>

              <div className="ai-analysis-container mt-md">
                <button className="ai-toggle-btn glass-button" onClick={() => toggleAnalysis(report.id)}>
                  <span className="ai-title"><Sparkles size={16} className="text-gradient" /> AI Analysis</span>
                  {expandedAnalysis === report.id ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
                </button>
                
                {expandedAnalysis === report.id && (
                  <div className="ai-content glass-panel-inner mt-sm">
                    <p>{report.analysis}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
