export interface RegisterRequestDto {
  first_name: string; 
  last_name: string; 
  email: string; 
  password: string; 
  confirm_password: string; 
  phone: string;
}

export interface LoginRequestDto {
  email: string; 
  password: string; 
}

// Response DTOs
export interface AuthResponseDto {
  user: UserDto;
  token: string;
}

export interface UserDto {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  role: string;
  created_at: string;
}
export interface ErrorResponseDto {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}