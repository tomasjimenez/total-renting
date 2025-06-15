import { Document, ObjectId } from 'mongoose'

// Interfaz para el documento de Mongoose (tal como lo usa el modelo)
export interface Vehicle extends Document {
  _id: ObjectId; // Mongoose Document tiene _id como ObjectId
  name: string;
  slug: string;
  description: string;
  summary: string;
  price: number;
  images: string[];
  extras: string[];
  features: {
    brand: string;
    model: string;
    year: number;
    mileage: number;
    fuelType: string;
    transmission: string;
    color: string;
    location: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

// Interfaz para el objeto de vehículo plano (usado con .lean() y en el frontend)
export interface IVehicle {
  _id: string; // Para el frontend, _id será una cadena
  name: string;
  slug: string;
  description: string;
  summary: string;
  price: number;
  images: string[];
  extras: string[];
  features: {
    brand: string;
    model: string;
    year: number;
    mileage: number;
    fuelType: string;
    transmission: string;
    color: string;
    location: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface SearchFilters {
  brand?: string;
  model?: string;
  year?: number;
  minPrice?: number;
  maxPrice?: number;
  minMileage?: number;
  maxMileage?: number;
  fuelType?: string;
  transmission?: string;
  color?: string;
  location?: string;
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface Breadcrumb {
  label: string;
  href: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface FooterLink {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

export interface ApiError {
  message: string;
  code: string;
  status: number;
} 