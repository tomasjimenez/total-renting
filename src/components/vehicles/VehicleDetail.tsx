'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Vehicle } from '@/types'
import { formatPrice, formatMileage } from '@/utils'
import SimilarVehicles from './SimilarVehicles'

interface VehicleDetailProps {
  id: string
}

export default function VehicleDetail({ id }: VehicleDetailProps) {
  const [vehicle, setVehicle] = useState<Vehicle | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await fetch(`/api/vehicles/${id}`)
        if (!response.ok) {
          throw new Error('Error al cargar el vehículo')
        }
        const data = await response.json()
        setVehicle(data.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido')
      } finally {
        setIsLoading(false)
      }
    }

    fetchVehicle()
  }, [id])

  if (isLoading) {
    return <div>Cargando...</div>
  }

  if (error || !vehicle) {
    return <div className="text-red-500">Error: {error || 'Vehículo no encontrado'}</div>
  }

  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative h-96">
          <Image
            src={vehicle.images[0] || '/placeholder.jpg'}
            alt={vehicle.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{vehicle.name}</h1>
          <p className="text-gray-600 mb-4">{vehicle.description}</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Marca</h3>
              <p className="mt-1 text-lg text-gray-900">{vehicle.features.brand}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Modelo</h3>
              <p className="mt-1 text-lg text-gray-900">{vehicle.features.model}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Año</h3>
              <p className="mt-1 text-lg text-gray-900">{vehicle.features.year}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Kilometraje</h3>
              <p className="mt-1 text-lg text-gray-900">{formatMileage(vehicle.features.mileage)}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Combustible</h3>
              <p className="mt-1 text-lg text-gray-900">{vehicle.features.fuelType}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Transmisión</h3>
              <p className="mt-1 text-lg text-gray-900">{vehicle.features.transmission}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Color</h3>
              <p className="mt-1 text-lg text-gray-900">{vehicle.features.color}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Ubicación</h3>
              <p className="mt-1 text-lg text-gray-900">{vehicle.features.location}</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Precio</h2>
            <p className="text-3xl font-bold text-primary">{formatPrice(vehicle.price)}</p>
          </div>
        </div>
      </div>
      <SimilarVehicles
        currentVehicleId={vehicle.id}
        brand={vehicle.features.brand}
        model={vehicle.features.model}
      />
    </div>
  )
} 