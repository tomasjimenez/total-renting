import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { vehicles } from '@/data/vehicles';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = parseInt(searchParams.get('limit') || '4');

    const currentVehicle = vehicles.find(v => v.id === params.id);
    
    if (!currentVehicle) {
      return NextResponse.json(
        { error: 'Vehicle not found' },
        { status: 404 }
      );
    }

    // Obtener vehículos relacionados basados en la marca y el modelo
    const relatedVehicles = vehicles
      .filter(v => 
        v.id !== params.id && 
        (v.features.brand === currentVehicle.features.brand || 
         v.features.model === currentVehicle.features.model)
      )
      .slice(0, limit);

    return NextResponse.json({
      data: relatedVehicles
    });
  } catch (error) {
    console.error(`Error in GET /api/vehicles/${params.id}/related:`, error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 