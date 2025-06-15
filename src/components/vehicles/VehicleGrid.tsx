'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Vehicle } from '@/types'
import { formatPrice } from '@/utils'

interface VehicleGridProps {
  vehicles: Vehicle[]
}

export default function VehicleGrid({ vehicles }: VehicleGridProps) {
  if (!vehicles.length) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900">No se encontraron vehículos</h3>
        <p className="mt-2 text-sm text-gray-500">Intenta con otros filtros de búsqueda.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {vehicles.map((vehicle) => {
        return (
          <Link
            key={vehicle._id.toString()}
            href={`/vehiculos/${vehicle._id.toString()}`}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
          >
            <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none sm:h-96">
              <img
                src={vehicle.images[0]}
                alt={vehicle.name}
                className="h-full w-full object-cover object-center sm:h-full sm:w-full"
              />
            </div>
            <div className="flex flex-1 flex-col space-y-2 p-4">
              <h3 className="text-sm font-medium text-gray-900">
                <span aria-hidden="true" className="absolute inset-0" />
                {vehicle.name}
              </h3>
              <p className="text-sm text-gray-500">{vehicle.description}</p>
              <div className="flex flex-1 flex-col justify-end">
                <p className="text-sm font-medium text-gray-900">{formatPrice(vehicle.price)}/día</p>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <p>
                    {vehicle.features.year} • {vehicle.features.mileage} km
                  </p>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
} 