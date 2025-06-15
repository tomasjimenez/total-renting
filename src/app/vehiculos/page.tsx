import { Suspense } from 'react';
import VehicleCarousel from '@/components/vehicles/VehicleCarousel';
import { VehicleFilters } from '@/components/vehicles/VehicleFilters';
import { getVehicles } from '@/services/api';
import { SearchFilters } from '@/types';

interface VehiclesPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function VehiclesPage({ searchParams }: VehiclesPageProps) {
  
  const filters: SearchFilters = {
    brand: searchParams.brand as string,
    model: searchParams.model as string,
    year: searchParams.year ? parseInt(searchParams.year as string) : undefined,
    minPrice: searchParams.minPrice ? parseInt(searchParams.minPrice as string) : undefined,
    maxPrice: searchParams.maxPrice ? parseInt(searchParams.maxPrice as string) : undefined,
    minMileage: searchParams.minMileage ? parseInt(searchParams.minMileage as string) : undefined,
    maxMileage: searchParams.maxMileage ? parseInt(searchParams.maxMileage as string) : undefined,
    fuelType: searchParams.fuelType as string,
    transmission: searchParams.transmission as string,
    color: searchParams.color as string,
    location: searchParams.location as string,
    page: searchParams.page ? parseInt(searchParams.page as string) : 1,
    limit: searchParams.limit ? parseInt(searchParams.limit as string) : 20
  };


  try {
    const response = await getVehicles(filters);
    const vehicles = response.items;

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Ofertas de coches para particulares en Renting</h1>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Suspense fallback={<div>Cargando filtros...</div>}>
              <VehicleFilters />
            </Suspense>
          </div>
          <div className="lg:col-span-3">
            <Suspense fallback={<div>Cargando vehículos...</div>}>
              <VehicleCarousel vehicles={vehicles} itemsPerPage={8} />
            </Suspense>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Ofertas de coches para particulares en Renting</h1>
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900">Error al cargar los vehículos</h3>
          <p className="mt-2 text-sm text-gray-500">Por favor, inténtalo de nuevo más tarde.</p>
        </div>
      </div>
    );
  }
}