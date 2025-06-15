'use client';

import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { cn } from '@/utils';
import ContactFormPopup from '@/components/ui/ContactFormPopup';
import { ContactPopupProvider } from '@/contexts/ContactPopupContext';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <ContactPopupProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className={cn('flex-grow container mx-auto px-4 py-8', className)}>
          {children}
        </main>
        <Footer />
      </div>
      <ContactFormPopup />
    </ContactPopupProvider>
  );
} 