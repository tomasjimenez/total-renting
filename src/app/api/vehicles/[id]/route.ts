import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Vehicle as MongooseVehicle, IVehicle } from '@/types';
import { Vehicle } from '@/models/Vehicle';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    await connectToDatabase();

    const vehicle = (await Vehicle.findById(id).lean()) as IVehicle;
    if (!vehicle) {
      return NextResponse.json(
        { error: 'Vehículo no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: vehicle });
  } catch (error) {
    console.error('Error fetching vehicle in API route:', error);
    return NextResponse.json(
      { error: 'Error al cargar el vehículo' },
      { status: 500 }
    );
  }
} 