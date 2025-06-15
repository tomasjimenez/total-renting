import Image from 'next/image';
import Link from 'next/link';
import { Vehicle } from '@/types';
import { formatPrice, formatMileage, getImageUrl } from '@/utils';
import { cn } from '@/utils';

interface VehicleCardProps {
  vehicle: Vehicle;
  className?: string;
}

export function VehicleCard({ vehicle, className }: VehicleCardProps) {
  return (
    <Link
      href={`/vehiculos/${vehicle.id}`}
      className={cn(
        'group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow',
        className
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg">
        <Image
          src={getImageUrl(vehicle.imageUrl)}
          alt={`${vehicle.make} ${vehicle.model}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
          {vehicle.make} {vehicle.model}
        </h3>
        <p className="text-sm text-gray-500">{vehicle.year}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            {formatPrice(vehicle.price)}
          </span>
          <span className="text-sm text-gray-500">
            {formatMileage(vehicle.mileage)} km
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
            {vehicle.fuelType}
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
            {vehicle.transmission}
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
            {vehicle.color}
          </span>
        </div>
      </div>
    </Link>
  );
} 