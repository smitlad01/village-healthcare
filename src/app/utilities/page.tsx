'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Stethoscope, 
  Siren, 
  Pill, 
  Droplet, 
  TestTube, 
  FileText, 
  MapPin 
} from 'lucide-react';
import '../../styles/utilities.css';

export default function UtilitiesHub() {
  const utilities = [
    {
      title: 'Doctor Directory & Rankings',
      description: 'Find and rate doctors nearby',
      icon: <Stethoscope size={28} />,
      href: '/utilities/doctors'
    },
    {
      title: 'Ambulance & Emergency',
      description: 'Track ambulances, call 108',
      icon: <Siren size={28} />,
      href: '/utilities/ambulance'
    },
    {
      title: 'Pharmacy Locator',
      description: 'Find medicines near you',
      icon: <Pill size={28} />,
      href: '/utilities/pharmacy'
    },
    {
      title: 'Blood Bank',
      description: 'Search blood, register as donor',
      icon: <Droplet size={28} />,
      href: '/utilities/bloodbank'
    },
    {
      title: 'Diagnostic Labs',
      description: 'Find labs, book tests',
      icon: <TestTube size={28} />,
      href: '/utilities/labs'
    },
    {
      title: 'Government Schemes',
      description: 'Ayushman Bharat, JSY, and more',
      icon: <FileText size={28} />,
      href: '/utilities/schemes'
    },
    {
      title: 'Health Centers Map',
      description: 'PHC, CHC, District Hospitals',
      icon: <MapPin size={28} />,
      href: '/utilities/health-centers'
    }
  ];

  return (
    <div className="utilities-container">
      <div className="utilities-header">
        <h1>Utilities & Community</h1>
        <p>Access essential healthcare services and resources in your area.</p>
      </div>

      <div className="utilities-grid">
        {utilities.map((utility, index) => (
          <Link href={utility.href} key={index} className="utility-card">
            <div className="utility-icon-wrapper">
              {utility.icon}
            </div>
            <h3>{utility.title}</h3>
            <p>{utility.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
