'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, QrCode, Tag, CheckCircle } from 'lucide-react';
import '@/styles/games.css';

const CATALOG = [
  { id: 1, title: '50% off Pharmacy Bill', category: 'Pharmacy', pts: 500, desc: 'Valid at Jan Aushadhi Kendra for generic medicines up to ₹500 discount.' },
  { id: 2, title: 'Free Basic Blood Test', category: 'Diagnostics', pts: 1000, desc: 'CBC and Sugar test at City Diagnostics Lab.' },
  { id: 3, title: '₹100 Ambulance Discount', category: 'Transport', pts: 2000, desc: 'Discount on private ambulance service within district.' },
  { id: 4, title: 'Free GP Consultation', category: 'Consultation', pts: 3000, desc: 'One free visit to any participating general physician.' },
  { id: 5, title: 'Free Specialist Teleconsult', category: 'Consultation', pts: 5000, desc: 'Video consult with top specialists from metro hospitals.' },
];

export default function RedeemPage() {
  const [balance, setBalance] = useState(2450);
  const [selectedVoucher, setSelectedVoucher] = useState<any>(null);
  const [qrGenerated, setQrGenerated] = useState(false);

  const handleRedeem = (voucher: any) => {
    setSelectedVoucher(voucher);
    setQrGenerated(false);
  };

  const confirmRedeem = () => {
    if (balance >= selectedVoucher.pts) {
      setBalance(b => b - selectedVoucher.pts);
      setQrGenerated(true);
    }
  };

  if (selectedVoucher && qrGenerated) {
    return (
      <div className="page-container flex flex-col items-center justify-center min-h-[70vh]">
        <div className="glass-panel text-center max-w-md w-full p-8 border-success bg-success/5">
          <CheckCircle size={64} className="text-success mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Voucher Redeemed!</h2>
          <p className="text-text-secondary mb-6">{selectedVoucher.title}</p>
          
          <div className="qr-mock mb-6 relative">
             <div className="absolute inset-0 flex items-center justify-center">
               <QrCode size={64} className="text-primary mix-blend-difference" />
             </div>
          </div>
          
          <p className="font-bold text-lg mb-2">VHAIN-RX-{Math.floor(Math.random()*10000)}</p>
          <p className="text-sm text-text-secondary mb-8">Show this code at the billing counter to claim your discount.</p>
          
          <button className="btn btn-secondary w-full" onClick={() => setSelectedVoucher(null)}>Back to Catalog</button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <header className="page-header flex justify-between items-end">
        <div>
          <Link href="/rewards" className="text-primary text-sm flex items-center gap-1 mb-4 hover:underline">
            <ChevronLeft size={16} /> Back to Rewards
          </Link>
          <h1 className="page-title">Redeem Points</h1>
          <p className="page-subtitle">Exchange your hard-earned points for health benefits</p>
        </div>
        <div className="text-2xl font-bold bg-surface px-6 py-3 rounded-lg border border-primary">
          Balance: <span className="text-primary">{balance} pts</span>
        </div>
      </header>

      {selectedVoucher && !qrGenerated && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="glass-panel max-w-md w-full">
            <h2 className="text-2xl font-bold mb-2">Confirm Redemption</h2>
            <p className="text-text-secondary mb-6">Are you sure you want to redeem your points?</p>
            
            <div className="bg-surface p-4 rounded-lg mb-6 border border-border">
              <h3 className="font-bold mb-1">{selectedVoucher.title}</h3>
              <p className="text-sm text-text-secondary mb-4">{selectedVoucher.desc}</p>
              <div className="flex justify-between items-center font-bold">
                <span>Cost:</span>
                <span className="text-danger">-{selectedVoucher.pts} pts</span>
              </div>
              <div className="flex justify-between items-center font-bold mt-2 pt-2 border-t border-border">
                <span>New Balance:</span>
                <span className="text-primary">{balance - selectedVoucher.pts} pts</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="btn btn-secondary flex-1" onClick={() => setSelectedVoucher(null)}>Cancel</button>
              <button className="btn btn-primary flex-1" onClick={confirmRedeem}>Confirm & Generate QR</button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATALOG.map(item => {
          const canAfford = balance >= item.pts;
          return (
            <div key={item.id} className={`glass-panel flex flex-col ${!canAfford ? 'opacity-60' : ''}`}>
              <div className="flex justify-between items-start mb-4">
                <span className="badge flex items-center gap-1"><Tag size={12}/> {item.category}</span>
                <span className={`font-bold ${canAfford ? 'text-primary' : 'text-text-secondary'}`}>{item.pts} pts</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary mb-6 flex-1">{item.desc}</p>
              
              <button 
                className={`btn w-full ${canAfford ? 'btn-primary' : 'btn-secondary'}`}
                disabled={!canAfford}
                onClick={() => handleRedeem(item)}
              >
                {canAfford ? 'Redeem Voucher' : `Need ${item.pts - balance} more pts`}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
