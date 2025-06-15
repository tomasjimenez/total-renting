import { getVehicle } from '@/services/api';
import { notFound } from 'next/navigation';
import VehicleGallery from '@/components/vehicles/VehicleGallery';
import ButtonReserveNow from '@/components/ui/ButtonReserveNow';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

interface VehiclePageProps {
  params: {
    id: string;
  };
}

export default async function VehiclePage({ params }: VehiclePageProps) {
  try {
    const vehicle = await getVehicle(params.id);

    if (!vehicle) {
      notFound();
    }

    const breadcrumbItems = [
      { name: 'Vehículos', href: '/vehiculos' },
      { name: vehicle.name, href: `/vehiculos/${vehicle._id}` },
    ];

    return (
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Galería de imágenes */}
          <VehicleGallery images={vehicle.images} name={vehicle.name} />

          {/* Información */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{vehicle.name}</h1>
              <p className="mt-2 text-xl text-primary-600 font-semibold">
                {vehicle.price}€/día
              </p>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-600">{vehicle.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Marca</h3>
                <p className="mt-1 text-lg font-semibold text-gray-900">{vehicle.features.brand}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Modelo</h3>
                <p className="mt-1 text-lg font-semibold text-gray-900">{vehicle.features.model}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Año</h3>
                <p className="mt-1 text-lg font-semibold text-gray-900">{vehicle.features.year}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Kilometraje</h3>
                <p className="mt-1 text-lg font-semibold text-gray-900">{vehicle.features.mileage} km</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Combustible</h3>
                <p className="mt-1 text-lg font-semibold text-gray-900">{vehicle.features.fuelType}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Transmisión</h3>
                <p className="mt-1 text-lg font-semibold text-gray-900">{vehicle.features.transmission}</p>
              </div>
            </div>

            {vehicle.extras && vehicle.extras.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Extras incluidos</h3>
                <ul className="list-disc list-inside space-y-1">
                  {vehicle.extras.map((extra, index) => (
                    <li key={index} className="text-gray-600">{extra}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex justify-end">
              <ButtonReserveNow />
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading vehicle:', error);
    notFound();
  }
} 