'use client';

import { useContactPopup } from '@/contexts/ContactPopupContext';

export default function ButtonReserveNow() {
  const { openContactPopup } = useContactPopup();

  return (
    <button className="btn btn-primary" onClick={openContactPopup}>
      Reservar ahora
    </button>
  );
} 