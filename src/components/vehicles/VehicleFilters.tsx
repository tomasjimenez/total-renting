'use client';

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

const BRANDS = [
  { id: 'MINI', name: 'MINI' },
  { id: 'PEUGEOT', name: 'PEUGEOT' },
  { id: 'SEAT', name: 'SEAT' },
  { id: 'KIA', name: 'KIA' },
  { id: 'NISSAN', name: 'NISSAN' },
  { id: 'FIAT', name: 'FIAT' },
  { id: 'VOLKSWAGEN', name: 'VOLKSWAGEN' },
  { id: 'MERCEDES-BENZ', name: 'MERCEDES-BENZ' },
  { id: 'AUDI', name: 'AUDI' },
  { id: 'BMW', name: 'BMW' },
  { id: 'FORD', name: 'FORD' },
  { id: 'TESLA', name: 'TESLA' },
  { id: 'TOYOTA', name: 'TOYOTA' },
  { id: 'HYUNDAI', name: 'HYUNDAI' },
  { id: 'RENAULT', name: 'RENAULT' },
  { id: 'SKODA', name: 'SKODA' },
  { id: 'CITROËN', name: 'CITROËN' }
];

const LOCATIONS = [
  'Madrid',
  'Barcelona',
  'Valencia',
  'Sevilla',
  'Málaga',
  'Bilbao'
];

export function VehicleFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [expandedSections, setExpandedSections] = useState({
    brands: true,
    price: true,
    features: true,
    location: true
  })

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value) {
        params.set(name, value)
      } else {
        params.delete(name)
      }
      return params.toString()
    },
    [searchParams]
  )

  const handleFilterChange = (name: string, value: string) => {
    router.push(`/vehiculos?${createQueryString(name, value)}`)
  }

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const selectedBrand = searchParams.get('brand') || ''
  const selectedTransmission = searchParams.get('transmission') || ''
  const selectedFuelType = searchParams.get('fuelType') || ''
  const selectedLocation = searchParams.get('location') || ''
  const minPrice = searchParams.get('minPrice') || ''
  const maxPrice = searchParams.get('maxPrice') || ''

  return (
    <div className="flex flex-col space-y-4 p-4 bg-white rounded-lg shadow-md">
      {/* Marcas */}
      <div className="border-b pb-4">
        <button
          onClick={() => toggleSection('brands')}
          className="flex items-center justify-between w-full text-lg font-semibold text-gray-800 mb-2 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 active:bg-gray-100 active:text-gray-900 rounded-md py-1 px-2 btn-standard-text-fix"
        >
          <span>Marcas</span>
          {expandedSections.brands ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </button>
        {expandedSections.brands && (
          <div className="grid grid-cols-2 gap-2">
            {BRANDS.map((brand) => (
              <button
                key={brand.id}
                onClick={() => handleFilterChange('brand', selectedBrand === brand.id ? '' : brand.id)}
                className={`px-3 py-2 text-sm rounded-md transition-colors duration-200 btn-standard-text-fix ${selectedBrand === brand.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 active:bg-gray-200 active:text-gray-900'
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Precio */}
      <div className="border-b pb-4">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full text-lg font-semibold text-gray-800 mb-2 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 active:bg-gray-100 active:text-gray-900 rounded-md py-1 px-2 btn-standard-text-fix"
        >
          <span>Precio por día</span>
          {expandedSections.price ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </button>
        {expandedSections.price && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Mín"
                className="input input-bordered w-full"
                value={minPrice}
                onChange={(e) => handleFilterChange('minPrice', e.target.value)}
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Máx"
                className="input input-bordered w-full"
                value={maxPrice}
                onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
              />
            </div>
            <div className="text-sm text-gray-500">
              {minPrice || '0'}€ - {maxPrice || '1000'}€
            </div>
          </div>
        )}
      </div>

      {/* Características */}
      <div className="border-b pb-4">
        <button
          onClick={() => toggleSection('features')}
          className="flex items-center justify-between w-full text-lg font-semibold text-gray-800 mb-2 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 active:bg-gray-100 active:text-gray-900 rounded-md py-1 px-2 btn-standard-text-fix"
        >
          <span>Características</span>
          {expandedSections.features ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </button>
        {expandedSections.features && (
          <div className="space-y-4">
            {/* Transmisión */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Transmisión</label>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  type="button"
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 btn-standard-text-fix ${selectedTransmission === 'automatico' ? 'bg-primary-600 text-white shadow-sm' : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 active:bg-gray-200 active:text-gray-900'}`}
                  onClick={() => handleFilterChange('transmission', selectedTransmission === 'automatico' ? '' : 'automatico')}
                >
                  Automático
                </button>
                <button
                  type="button"
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 btn-standard-text-fix ${selectedTransmission === 'manual' ? 'bg-primary-600 text-white shadow-sm' : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 active:bg-gray-200 active:text-gray-900'}`}
                  onClick={() => handleFilterChange('transmission', selectedTransmission === 'manual' ? '' : 'manual')}
                >
                  Manual
                </button>
              </div>
            </div>

            {/* Combustible */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Combustible</label>
              <select
                className="select select-bordered w-full"
                value={selectedFuelType}
                onChange={(e) => handleFilterChange('fuelType', e.target.value)}
              >
                <option value="">Todos</option>
                <option value="gasolina">Gasolina</option>
                <option value="diesel">Diésel</option>
                <option value="electrico">Eléctrico</option>
                <option value="hibrido">Híbrido</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Ubicación */}
      <div>
        <button
          onClick={() => toggleSection('location')}
          className="flex items-center justify-between w-full text-lg font-semibold text-gray-800 mb-2 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 active:bg-gray-100 active:text-gray-900 rounded-md py-1 px-2 btn-standard-text-fix"
        >
          <span>Ubicación</span>
          {expandedSections.location ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </button>
        {expandedSections.location && (
          <div className="grid grid-cols-2 gap-2">
            {LOCATIONS.map((location) => (
              <button
                key={location}
                type="button"
                onClick={() => handleFilterChange('location', selectedLocation === location ? '' : location)}
                className={`px-3 py-2 text-sm rounded-md transition-colors duration-200 btn-standard-text-fix ${selectedLocation === location
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 active:bg-gray-200 active:text-gray-900'
                }`}
              >
                {location}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Botón de limpiar filtros */}
      {(selectedBrand || selectedTransmission || selectedFuelType || selectedLocation || minPrice || maxPrice) && (
        <button
          type="button"
          onClick={() => router.push('/vehiculos')}
          className="mt-4 w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 active:bg-gray-200 active:text-gray-900 transition-colors duration-200 btn-standard-text-fix"
        >
          Limpiar filtros
        </button>
      )}
    </div>
  )
}