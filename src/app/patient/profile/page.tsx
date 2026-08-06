'use client';

import React from 'react';
import { 
  MapPin, 
  Droplet, 
  Phone, 
  MessageSquare, 
  Calendar, 
  Video, 
  Download,
  Settings,
  Globe,
  Type,
  Bell,
  LogOut,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import '@/styles/patient.css';

export default function PatientProfile() {
  return (
    <div className="patient-dashboard-container">
      
      {/* Profile Header */}
      <div className="glass-card profile-header">
        <div className="profile-avatar-lg">RK</div>
        <div>
          <h1 className="profile-title">Ramesh Kumar</h1>
          <p className="profile-subtitle">
            <MapPin size={18} /> 54 yrs • Wardha District, Maharashtra
          </p>
        </div>
      </div>

      <div className="profile-grid">
        
        {/* Personal Info Card */}
        <div className="glass-card info-card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Personal Information</h2>
            <button className="btn btn-outline btn-sm">Edit</button>
          </div>
          
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Date of Birth</span>
              <span className="info-value">12 May 1970</span>
            </div>
            <div className="info-item">
              <span className="info-label">Gender</span>
              <span className="info-value">Male</span>
            </div>
            <div className="info-item">
              <span className="info-label">Blood Group</span>
              <span className="info-value text-red-400 font-bold"><Droplet size={16}/> O+</span>
            </div>
            <div className="info-item">
              <span className="info-label">Aadhaar Number</span>
              <span className="info-value font-mono">XXXX XXXX 4523</span>
            </div>
            <div className="info-item" style={{ gridColumn: 'span 2' }}>
              <span className="info-label">V-HAIN Health Card ID</span>
              <span className="info-value font-mono text-primary">VHAIN-MH-2024-00847</span>
            </div>
          </div>

          <div className="section-divider"></div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">Chronic Conditions</h3>
            <div className="tags-container">
              <span className="badge warning text-sm py-1 px-3">Diabetes Type 2</span>
              <span className="badge primary text-sm py-1 px-3">Hypertension</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <ShieldAlert size={18} className="text-danger" /> Known Allergies
            </h3>
            <div className="tags-container">
              <span className="badge danger text-sm py-1 px-3">Penicillin</span>
              <span className="badge warning text-sm py-1 px-3">Dust</span>
            </div>
          </div>
        </div>

        {/* Health Team Card */}
        <div className="glass-card health-team-card">
          <h2 className="text-xl font-bold mb-4">Your Health Team</h2>
          
          <div className="contact-card flex-col items-start gap-4 mb-4">
            <div className="w-full">
              <div className="text-xs text-primary font-bold mb-1 uppercase tracking-wider">Assigned ASHA Worker</div>
              <h4 className="text-lg font-bold">Meera Devi</h4>
              <p className="text-secondary text-sm mb-3">Village: Wardha</p>
              
              <div className="flex gap-2 w-full">
                <button className="btn btn-outline flex-1 py-2"><Phone size={16} /> Call</button>
                <button className="btn btn-primary flex-1 py-2"><MessageSquare size={16} /> Msg</button>
              </div>
            </div>
          </div>

          <div className="contact-card flex-col items-start gap-4 mb-6">
            <div className="w-full">
              <div className="text-xs text-primary font-bold mb-1 uppercase tracking-wider">Primary Doctor</div>
              <h4 className="text-lg font-bold">Dr. Priya Sharma</h4>
              <p className="text-secondary text-sm mb-1">Cardiology Specialist</p>
              <p className="text-warning text-sm mb-3 font-bold">⭐ 4.8 / 5.0</p>
              
              <div className="flex gap-2 w-full">
                <button className="btn btn-outline flex-1 py-2 text-sm"><Calendar size={14} /> Book</button>
                <button className="btn btn-primary flex-1 py-2 text-sm"><Video size={14} /> Consult</button>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold mb-3">Emergency Contacts</h3>
          <div className="contact-card p-3">
            <div>
              <h4 className="font-bold">Sita Devi <span className="text-xs text-secondary font-normal ml-1">(Wife)</span></h4>
              <p className="text-sm text-secondary font-mono">+91 87654 XXXXX</p>
            </div>
            <button className="btn btn-outline btn-sm p-2"><Phone size={16} className="text-red-400" /></button>
          </div>
          <div className="contact-card p-3">
            <div>
              <h4 className="font-bold">Rajesh Kumar <span className="text-xs text-secondary font-normal ml-1">(Son)</span></h4>
              <p className="text-sm text-secondary font-mono">+91 76543 XXXXX</p>
            </div>
            <button className="btn btn-outline btn-sm p-2"><Phone size={16} className="text-red-400" /></button>
          </div>
        </div>

        {/* Health Card Preview */}
        <div className="glass-card health-card-preview">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Digital Health Card</h2>
            <button className="btn btn-primary btn-sm"><Download size={16} /> Download PDF</button>
          </div>
          
          <div className="card-preview-inner">
            <div className="card-details">
              <h3 className="text-2xl font-bold mb-1">Ramesh Kumar</h3>
              <p className="text-primary font-mono mb-4 text-lg">VHAIN-MH-2024-00847</p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <p className="text-xs text-secondary uppercase">DOB</p>
                  <p className="font-bold">12/05/1970</p>
                </div>
                <div>
                  <p className="text-xs text-secondary uppercase">Blood Group</p>
                  <p className="font-bold text-red-400">O+</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-secondary uppercase">Emergency Info</p>
                  <p className="font-bold">Allergic to Penicillin</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-24 h-24 rounded-lg bg-gray-800 flex items-center justify-center text-gray-500 border border-gray-600">
                Photo
              </div>
              <div className="card-qr">
                {/* Mock QR Code */}
                <svg viewBox="0 0 100 100" width="80" height="80">
                  <rect width="100" height="100" fill="white"/>
                  <path d="M10,10 h30 v30 h-30 z M15,15 h20 v20 h-20 z M20,20 h10 v10 h-10 z" fill="black"/>
                  <path d="M60,10 h30 v30 h-30 z M65,15 h20 v20 h-20 z M70,20 h10 v10 h-10 z" fill="black"/>
                  <path d="M10,60 h30 v30 h-30 z M15,65 h20 v20 h-20 z M20,70 h10 v10 h-10 z" fill="black"/>
                  <rect x="50" y="50" width="10" height="10" fill="black"/>
                  <rect x="70" y="60" width="20" height="10" fill="black"/>
                  <rect x="60" y="80" width="30" height="10" fill="black"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div className="glass-card settings-card">
          <h2 className="text-xl font-bold mb-4">Settings</h2>
          
          <div className="settings-list">
            <button className="setting-item hover:bg-white/5 transition-colors px-2 rounded-lg">
              <div className="setting-label">
                <Settings size={20} className="text-secondary" />
                <span>Edit Profile</span>
              </div>
              <ChevronRight size={20} className="text-secondary" />
            </button>
            
            <button className="setting-item hover:bg-white/5 transition-colors px-2 rounded-lg">
              <div className="setting-label">
                <Globe size={20} className="text-secondary" />
                <span>Change Language (हिंदी/Eng)</span>
              </div>
              <ChevronRight size={20} className="text-secondary" />
            </button>

            <div className="setting-item px-2">
              <div className="setting-label">
                <Type size={20} className="text-secondary" />
                <span>Large Text Mode</span>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>

            <button className="setting-item hover:bg-white/5 transition-colors px-2 rounded-lg">
              <div className="setting-label">
                <Bell size={20} className="text-secondary" />
                <span>Notification Preferences</span>
              </div>
              <ChevronRight size={20} className="text-secondary" />
            </button>
            
            <button className="setting-item hover:bg-red-500/10 transition-colors px-2 rounded-lg mt-4 text-red-400">
              <div className="setting-label">
                <LogOut size={20} />
                <span className="font-bold">Logout</span>
              </div>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
