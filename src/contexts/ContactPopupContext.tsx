'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ContactPopupContextType {
  isContactPopupOpen: boolean;
  openContactPopup: () => void;
  closeContactPopup: () => void;
}

const ContactPopupContext = createContext<ContactPopupContextType | undefined>(undefined);

interface ContactPopupProviderProps {
  children: ReactNode;
}

export function ContactPopupProvider({ children }: ContactPopupProviderProps) {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const openContactPopup = () => setIsContactPopupOpen(true);
  const closeContactPopup = () => setIsContactPopupOpen(false);

  return (
    <ContactPopupContext.Provider value={{ isContactPopupOpen, openContactPopup, closeContactPopup }}>
      {children}
    </ContactPopupContext.Provider>
  );
}

export function useContactPopup() {
  const context = useContext(ContactPopupContext);
  if (context === undefined) {
    throw new Error('useContactPopup must be used within a ContactPopupProvider');
  }
  return context;
} 