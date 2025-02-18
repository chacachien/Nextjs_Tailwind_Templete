import { API_CONFIG } from '@/services/api/config';
import { LRUCache } from 'lru-cache';
import FetchOptions = LRUCache.FetchOptions;

interface FetchOption extends RequestInit{
  token?: boolean;
}

export class ApiError extends Error {
  constructor(
    public message: string,
    public status?: number,
    public data?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}
async function fetchClient<T> (
  endpoint: string,
  options: FetchOption={}
) : Promise<T> {
  const { token = false, ...fetchOptions } = options;
  const headers = new Headers({
    'Content-Type': 'application/json',
    ...options.headers,
  });
  if (token) {
    const authToken = localStorage.getItem("token");
    if(authToken) {
      headers.set('Authorization', `Bearer ${authToken}`);
    }
  }
  const response = await fetch(`${API_CONFIG.baseUrl}${endpoint}`, {
    ...fetchOptions,
    headers,
  });
  const data = await response.json();
  if (!response.ok) {
    throw new ApiError(
      data.message || 'Something went wrong',
      response.status,
      data
    );
  }

  return data;
}

export const api = {
  get: <T>(endpoint: string, options?: FetchOption) =>
    fetchClient<T>(endpoint, { ...options, method: 'GET' }),

  post: <T>(endpoint: string, data?: any, options?: FetchOption) =>
    fetchClient<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    }),

  put: <T>(endpoint: string, data: any, options?: FetchOption) =>
    fetchClient<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  delete: <T>(endpoint: string, options?: FetchOption) =>
    fetchClient<T>(endpoint, {
      ...options,
      method: 'DELETE',
    }),
};
