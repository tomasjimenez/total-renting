'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Vehicle } from '@/types'
import { formatPrice } from '@/utils'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface VehicleCarouselProps {
  vehicles: Vehicle[]
  itemsPerPage?: number
}

export default function VehicleCarousel({ vehicles, itemsPerPage = 4 }: VehicleCarouselProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(vehicles.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentVehicles = vehicles.slice(startIndex, endIndex)

  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
  }

  if (!vehicles.length) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900">No se encontraron vehículos</h3>
        <p className="mt-2 text-sm text-gray-500">Intenta con otros filtros de búsqueda.</p>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Carrusel */}
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {currentVehicles.map((vehicle) => (
            <div
              key={vehicle._id.toString()}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none sm:h-64">
                <img
                  src={vehicle.images[0]}
                  alt={vehicle.name}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  {vehicle.name}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">{vehicle.description}</p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-lg font-bold text-primary-600">{formatPrice(vehicle.price)}/día</p>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <p>
                      {vehicle.features.year} • {vehicle.features.mileage} km • {vehicle.features.fuelType}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-4 flex justify-center">
                <Link href={`/vehiculos/${vehicle._id.toString()}`} className="btn btn-primary">
                  Ver más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controles de navegación */}
      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 active:bg-gray-200 active:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed btn-standard-text-fix"
        >
          <ChevronLeftIcon className="h-5 w-5 mr-2" />
          Anterior
        </button>
        
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`inline-flex items-center justify-center w-8 h-8 rounded-md text-sm font-medium btn-standard-text-fix ${
                currentPage === page
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 active:bg-gray-200 active:text-gray-900'
              } ring-1 ring-inset ring-gray-300`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 active:bg-gray-200 active:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed btn-standard-text-fix"
        >
          Siguiente
          <ChevronRightIcon className="h-5 w-5 ml-2" />
        </button>
      </div>
    </div>
  )
} 