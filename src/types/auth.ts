
export interface UserRole {
    id: string;
    username: string;
    role: string;
}
export interface User {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    gender: string;
    phone: string;
    ward: string;
    district: string;
    province: string;
    address: string;
}

export interface AuthResponse {
    access_token: string;
    user: UserRole;
}

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface RegisterCredentials extends LoginCredentials {
    name: string;
}