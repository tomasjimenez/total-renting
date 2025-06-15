import { APP_CONFIG } from '@/constants';

export const config = {
  api: {
    baseUrl: 'https://carapi.app/api/v1',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  },
  seo: {
    defaultTitle: APP_CONFIG.name,
    defaultDescription: APP_CONFIG.description,
    defaultImage: '/og-image.jpg',
    twitterHandle: '@totalrenting',
    twitterCardType: 'summary_large_image',
  },
  pagination: {
    defaultPageSize: 12,
    maxPageSize: 24,
  },
  cache: {
    revalidateTime: 3600, // 1 hour
  },
} as const;

export type Config = typeof config; 