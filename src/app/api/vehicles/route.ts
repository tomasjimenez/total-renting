import { NextResponse } from 'next/server';
import { SearchFilters } from '@/types';
import { connectToDatabase } from '@/lib/mongodb';
import { Vehicle } from '@/models/Vehicle';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    const filters: SearchFilters = {
      brand: searchParams.get('features.brand') || searchParams.get('brand') || undefined,
      model: searchParams.get('features.model') || searchParams.get('model') || undefined,
      year: searchParams.get('features.year') || searchParams.get('year') ? parseInt(searchParams.get('features.year') || searchParams.get('year')!) : undefined,
      minPrice: searchParams.get('minPrice') ? parseInt(searchParams.get('minPrice')!) : undefined,
      maxPrice: searchParams.get('maxPrice') ? parseInt(searchParams.get('maxPrice')!) : undefined,
      minMileage: searchParams.get('minMileage') ? parseInt(searchParams.get('minMileage')!) : undefined,
      maxMileage: searchParams.get('maxMileage') ? parseInt(searchParams.get('maxMileage')!) : undefined,
      fuelType: searchParams.get('features.fuelType') || searchParams.get('fuelType') || undefined,
      transmission: searchParams.get('features.transmission') || searchParams.get('transmission') || undefined,
      color: searchParams.get('features.color') || searchParams.get('color') || undefined,
      location: searchParams.get('features.location') || searchParams.get('location') || undefined,
      page: searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1,
      limit: searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 20
    };


    await connectToDatabase();

    const query: any = {};
    if (filters.brand) query['features.brand'] = filters.brand;
    if (filters.model) query['features.model'] = filters.model;
    if (filters.year) query['features.year'] = filters.year;
    if (filters.minPrice || filters.maxPrice) {
      query.price = {};
      if (filters.minPrice) query.price.$gte = filters.minPrice;
      if (filters.maxPrice) query.price.$lte = filters.maxPrice;
    }
    if (filters.minMileage || filters.maxMileage) {
      query['features.mileage'] = {};
      if (filters.minMileage) query['features.mileage'].$gte = filters.minMileage;
      if (filters.maxMileage) query['features.mileage'].$lte = filters.maxMileage;
    }
    if (filters.fuelType) query['features.fuelType'] = filters.fuelType;
    if (filters.transmission) query['features.transmission'] = filters.transmission;
    if (filters.color) query['features.color'] = filters.color;
    if (filters.location) query['features.location'] = filters.location;


    const skip = (filters.page! - 1) * filters.limit!;
    const total = await Vehicle.countDocuments(query);
    const vehicles = await Vehicle.find(query)
      .skip(skip)
      .limit(filters.limit!)
      .sort({ createdAt: -1 });

    return NextResponse.json({
      items: vehicles,
      total,
      page: filters.page,
      limit: filters.limit,
      totalPages: Math.ceil(total / filters.limit!)
    });
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    return NextResponse.json(
      { error: 'Error al cargar los vehículos' },
      { status: 500 }
    );
  }
} 