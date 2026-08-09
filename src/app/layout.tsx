import type { Metadata } from 'next';
import { Outfit, Noto_Sans } from 'next/font/google';
import '../styles/globals.css';
import SOSButton from '@/components/SOSButton';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { HeartPulse } from 'lucide-react';

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
  title: 'V-HAIN | Village Health AI Network',
  description: 'AI-powered healthcare for every village in India. Access your health records, manage village health, consult patients, and track district analytics.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${notoSans.variable}`}>
      <body className="min-h-screen flex flex-col relative bg-[var(--background)] text-[var(--text-primary)] font-body antialiased selection:bg-[var(--accent)] selection:text-white overflow-x-hidden">
        {/* Background Gradients */}
        <div className="fixed inset-0 pointer-events-none z-[-1]">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--accent)]/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-[var(--primary)]/10 blur-[120px]" />
        </div>

        {/* ── Top Fixed Header with Clean Edge Spacing ── */}
        <header className="sticky top-0 z-40 bg-[#041416]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3 flex items-center justify-between shadow-lg">
          {/* Logo Lockup */}
          <div className="flex items-center gap-3 pl-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7ebf1a] via-[#156d78] to-[#2993a1] flex items-center justify-center text-white shadow-md flex-shrink-0 border border-white/20">
              <HeartPulse size={22} className="text-white animate-pulse" />
            </div>
            <span className="font-heading font-black text-2xl tracking-wider text-white drop-shadow">
              V-HAIN
            </span>
          </div>
          
          {/* Right Action Bar */}
          <div className="flex items-center gap-4 pr-1">
            <LanguageSwitcher />
          </div>
        </header>

        <main className="flex-1 flex flex-col pb-16">
          {children}
        </main>

        <SOSButton />
      </body>
    </html>
  );
}
