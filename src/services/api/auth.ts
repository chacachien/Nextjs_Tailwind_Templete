// utils/services/auth.ts
import {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
  User,
} from '@/types/auth';
import { authEndpoint } from '@/services/api/endpoints/auth';
import { cookieUtils } from '@/utils/cookie';

const AUTH_COOKIE_NAME = 'auth_token';

export async function login(
  credentials: LoginCredentials
): Promise<AuthResponse> {
  const response = await authEndpoint.login(credentials);
  // Store token in localStorage
  localStorage.setItem('token', response.access_token);
  //server site
  cookieUtils.set(AUTH_COOKIE_NAME, response.access_token, {
    expires: 7,
    secure: true,
    sameSite: 'Lax'
  });
  return response;
}

export async function register(
  credentials: RegisterCredentials
): Promise<AuthResponse> {
  const data = await authEndpoint.register(credentials);
  // Store token in localStorage
  localStorage.setItem('token', data.access_token);

  // server site
  cookieUtils.set(AUTH_COOKIE_NAME, data.access_token, {
    expires: 7, // 7 days
    secure: true,
    sameSite: 'Lax'
  });
  //
  return data;
}

export function logout() {
  localStorage.removeItem('token');
}

export function getToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
}

export async function getUserInfor(): Promise<User> {
  const data = await authEndpoint.getCurrentUser();
  return data;
}
