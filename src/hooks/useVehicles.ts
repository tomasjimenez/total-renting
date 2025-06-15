import { useState, useCallback } from 'react';
import { vehicleService } from '@/services/api';
import type { Vehicle, PaginationParams, SearchFilters } from '@/types';

interface UseVehiclesReturn {
  vehicles: Vehicle[];
  loading: boolean;
  error: Error | null;
  totalPages: number;
  currentPage: number;
  fetchVehicles: (params?: PaginationParams & SearchFilters) => Promise<void>;
  fetchVehicleById: (id: string) => Promise<Vehicle>;
}

export function useVehicles(): UseVehiclesReturn {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchVehicles = useCallback(async (params?: PaginationParams & SearchFilters) => {
    try {
      setLoading(true);
      setError(null);
      const response = await vehicleService.getAll(params);
      setVehicles(response.data);
      setTotalPages(response.totalPages);
      setCurrentPage(response.page);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error al cargar los vehículos'));
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchVehicleById = useCallback(async (id: string): Promise<Vehicle> => {
    try {
      setLoading(true);
      setError(null);
      const response = await vehicleService.getById(id);
      return response;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error al cargar el vehículo'));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    vehicles,
    loading,
    error,
    totalPages,
    currentPage,
    fetchVehicles,
    fetchVehicleById,
  };
} 