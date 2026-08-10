import React from 'react';
import '@/styles/admin.css';

import JarvisChatbot from '@/components/JarvisChatbot';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <JarvisChatbot role="admin" />
    </>
  );
}

