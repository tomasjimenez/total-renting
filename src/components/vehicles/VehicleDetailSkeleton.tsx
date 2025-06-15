export default function VehicleDetailSkeleton() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
      {/* Skeleton de la imagen */}
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 animate-pulse">
        <div className="h-full w-full bg-gray-300" />
      </div>

      {/* Skeleton de los detalles */}
      <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
        <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse" />
        <div className="mt-3 h-8 w-1/4 bg-gray-200 rounded animate-pulse" />

        {/* Skeleton de atributos */}
        <div className="mt-6">
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            {[...Array(8)].map((_, index) => (
              <div key={index}>
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                <div className="mt-1 h-4 w-32 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Skeleton de descripción */}
        <div className="mt-6">
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
          <div className="mt-2 space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>

        {/* Skeleton de características */}
        <div className="mt-6">
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="mt-2 space-y-2">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        </div>

        {/* Skeleton del botón CTA */}
        <div className="mt-10">
          <div className="h-12 w-full bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      {/* Skeleton de vehículos similares */}
      <div className="mt-16 lg:col-span-2">
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <div key={index}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 animate-pulse">
                <div className="h-full w-full bg-gray-300" />
              </div>
              <div className="mt-4 space-y-2">
                <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 