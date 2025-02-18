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

// can't use because the datatype not match from backend
// export interface RegisterCredentials extends LoginCredentials {
//   name: string;
// }

export interface RegisterCredentials {
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
}


export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
