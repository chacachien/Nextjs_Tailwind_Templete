// lib/services/auth.ts
import {AuthResponse, LoginCredentials, RegisterCredentials, User} from '@/types/auth';

const API_URL = 'http://103.140.249.118:3000';

export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Login failed');
    }

    const data = await response.json();
    // Store token in localStorage
    localStorage.setItem('token', data.access_token);
    return data;
}

export async function register(credentials: RegisterCredentials): Promise<AuthResponse> {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Registration failed');
    }

    const data = await response.json();
    // Store token in localStorage
    localStorage.setItem('token', data.token);
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

export async function getUserInfor(token: string): Promise<User> {
    const response = await fetch(`${API_URL}/customers/profile`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    debugger;
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Registration failed');
    }

    const data = await response.json();
    return data;
}