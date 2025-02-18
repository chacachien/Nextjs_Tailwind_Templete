import { API_CONFIG } from '@/services/api/config';
import { AuthResponse, LoginCredentials, RegisterCredentials, User } from '@/types/auth';
import { api } from '../fetch-client';


const { baseUrl } = API_CONFIG;
export const authEndpoint = {
  login: (credential: LoginCredentials) =>
    api.post<AuthResponse>(`/auth/login`, credential),

  register: (credential: RegisterCredentials) =>
    api.post<AuthResponse>(`/auth/register`, credential),

  getCurrentUser: () =>
    api.get<User>(`/customers/profile`, {token: true}),

  logout: () =>
    api.post(`/auth/logout`, {}, {token: true}),
}
