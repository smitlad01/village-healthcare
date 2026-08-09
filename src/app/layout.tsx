import type { Metadata } from 'next';
import { Outfit, Noto_Sans } from 'next/font/google';
import '../styles/globals.css';
import SOSButton from '@/components/SOSButton';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeToggle from '@/components/ThemeToggle';

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'U-HAIN | Universal Health AI Network',
  description: 'AI-powered healthcare for every zone in India. Access your health records, manage zone health, consult patients, and track district analytics.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${notoSans.variable}`}>
      <body
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          background: 'var(--background)',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-body), sans-serif',
          overflowX: 'hidden',
        }}
      >
        {/* Background Ambient Glow */}
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: -1 }}>
          <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%', borderRadius: '50%', background: 'rgba(126,191,26,0.08)', filter: 'blur(120px)' }} />
          <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '30%', height: '30%', borderRadius: '50%', background: 'rgba(21,109,120,0.08)', filter: 'blur(120px)' }} />
        </div>

        {/* ── Sticky Header ── */}
        <header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 40,
            background: 'var(--surface-dark)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--border)',
            padding: '0.75rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}
        >
          {/* Logo Lockup */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #7ebf1a, #156d78, #2993a1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                flexShrink: 0,
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 4px 12px rgba(21,109,120,0.4)',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>
              </svg>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontWeight: 900,
                fontSize: '1.5rem',
                letterSpacing: '0.05em',
                color: 'var(--text-primary)',
              }}
            >
              U-HAIN
            </span>
          </div>
          
          {/* Right Action Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </header>

        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingBottom: '4rem' }}>
          {children}
        </main>

        <SOSButton />
      </body>
    </html>
  );
}
