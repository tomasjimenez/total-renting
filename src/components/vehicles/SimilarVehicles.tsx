'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Vehicle } from '@/types'
import { formatPrice } from '@/utils'

interface SimilarVehiclesProps {
  currentVehicleId: string
  brand: string
  model: string
}

export default function SimilarVehicles({ currentVehicleId, brand, model }: SimilarVehiclesProps) {
  const [similarVehicles, setSimilarVehicles] = useState<Vehicle[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSimilarVehicles = async () => {
      try {
        const response = await fetch(`/api/vehicles/search?brand=${brand}&model=${model}&limit=4`)
        if (!response.ok) {
          throw new Error('Error al cargar vehículos similares')
        }
        const data = await response.json()
        // Filtrar el vehículo actual
        const filteredVehicles = data.items.filter((vehicle: Vehicle) => vehicle.id !== currentVehicleId)
        setSimilarVehicles(filteredVehicles)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido')
      } finally {
        setIsLoading(false)
      }
    }

    fetchSimilarVehicles()
  }, [currentVehicleId, brand, model])

  if (isLoading) {
    return <div>Cargando vehículos similares...</div>
  }

  if (error || !similarVehicles.length) {
    return null
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Vehículos similares</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {similarVehicles.map((vehicle) => (
          <Link
            key={vehicle.id}
            href={`/vehiculos/${vehicle.id}`}
            className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative h-40 w-full">
              <Image
                src={vehicle.images[0] || '/placeholder.jpg'}
                alt={vehicle.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{vehicle.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{vehicle.features.year}</span>
                <span className="text-lg font-bold text-primary">{formatPrice(vehicle.price)}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 