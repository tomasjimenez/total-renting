import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { APP_CONFIG } from '@/constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

export function formatMileage(mileage: number): string {
  return new Intl.NumberFormat('es-ES').format(mileage) + ' km'
}

export function getImageUrl(imageUrl?: string): string {
  return imageUrl || '/placeholder-car.jpg';
}

export function generateMetaTitle(title: string): string {
  return `${title} | ${APP_CONFIG.name}`;
}

export function generateMetaDescription(description: string): string {
  return `${description} - ${APP_CONFIG.description}`;
} 