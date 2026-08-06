import type { Metadata } from 'next';
import { Outfit, Noto_Sans } from 'next/font/google';
import '../styles/globals.css';
import SOSButton from '@/components/SOSButton';
import LanguageSwitcher from '@/components/LanguageSwitcher';

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

        <header className="sticky top-0 z-40 glass-panel border-b border-white/5 rounded-none px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--primary)] flex items-center justify-center text-white font-bold font-heading">
              V
            </div>
            <span className="font-heading font-bold text-xl tracking-wide hidden sm:block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              V-HAIN
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>
        </header>

        <main className="flex-1 flex flex-col">
          {children}
        </main>

        <SOSButton />
      </body>
    </html>
  );
}
