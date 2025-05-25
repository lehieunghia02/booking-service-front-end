import {apiClient} from './api';
import type { RegisterRequestDto, LoginRequestDto, AuthResponseDto } from '@/types/auth';


export const authService = {
  register: async (data: RegisterRequestDto): Promise<AuthResponseDto> => {
    const response = await apiClient.post('/api/auth/register', data);
    return response.data;
  },
  login: async (data: LoginRequestDto): Promise<AuthResponseDto> => {
    const response = await apiClient.post('/api/auth/login', data);
    return response.data;
  },
  logout: async (): Promise<void> => {
    await apiClient.post('/api/auth/logout');
    
  }
}