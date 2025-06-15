import { Vehicle, SearchFilters, PaginatedResponse } from '@/types'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

export async function getVehicles(filters: SearchFilters): Promise<PaginatedResponse<Vehicle>> {
  const params = new URLSearchParams()
  
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      params.append(key, value.toString())
    }
  })

  const url = `${API_URL}/vehicles?${params.toString()}`;
  
  const response = await fetch(url)
  
  if (!response.ok) {
    throw new Error('Error al obtener los vehículos')
  }

  return response.json()
}

export async function getVehicle(id: string): Promise<Vehicle> {
  const url = `${API_URL}/vehicles/${id}`;
  const response = await fetch(url);
  
  if (!response.ok) {
    console.error(`Error al obtener el vehículo: ${response.status} - ${response.statusText}`);
    throw new Error(`Error al obtener el vehículo: ${response.status} - ${response.statusText}`);
  }

  const result = await response.json();
  return result.data;
} 