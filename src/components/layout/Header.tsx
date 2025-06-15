'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useContactPopup } from '@/contexts/ContactPopupContext'

export function Header() {
  const { openContactPopup } = useContactPopup();

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-5xl mx-auto px-0 py-0">
        <div className="flex items-center justify-between">
          <div className="flex-grow text-center">
            <Link href="/vehiculos" className="flex justify-center">
              <Image
                src="/logo.png"
                alt="TotalRenting Logo"
                width={200}
                height={50}
                priority
                className="object-contain"
              />
            </Link>
          </div>
          <button onClick={openContactPopup} className="btn btn-primary">
            Contactar
          </button>
        </div>
      </nav>
    </header>
  )
} 