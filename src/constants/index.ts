export const APP_CONFIG = {
  name: 'Total Renting',
  description: 'Tu plataforma de alquiler de vehículos',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  apiUrl: 'https://carapi.app/api',
} as const;

export const ROUTES = {
  home: '/',
  vehicles: '/vehiculos',
  vehicleDetail: (id: string) => `/vehiculos/${id}`,
  about: '/sobre-nosotros',
  contact: '/contacto',
} as const;

export const NAVIGATION = [
  { name: 'Inicio', href: ROUTES.home },
  { name: 'Vehículos', href: ROUTES.vehicles },
  { name: 'Sobre Nosotros', href: ROUTES.about },
  { name: 'Contacto', href: ROUTES.contact },
] as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const; 