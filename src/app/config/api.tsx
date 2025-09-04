export const API_URL: string = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
export const API_PREFIX: string = process.env.NEXT_PUBLIC_API_PREFIX || '/api/v1';
export const WEBSITE_ID: string | undefined = process.env.NEXT_PUBLIC_WEBSITE_ID;

// Helper function to build API paths
export const buildApiPath = (endpoint: string): string => `${API_URL}${API_PREFIX}${endpoint}`;