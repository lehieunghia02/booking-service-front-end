// // src/hooks/useAuth.ts
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { useNavigate } from 'react-router-dom';
// import { authService } from '../services/authService';
// import { 
//   type RegisterRequestDto, 
//   type LoginRequestDto, 
//   type AuthResponseDto
// } from '../types/auth'; 

// export function useAuth() {
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();
  
//   const register = useMutation({
//     mutationFn: (data: RegisterRequestDto) => authService.register(data),
//     onSuccess: (data: AuthResponseDto) => {
//       localStorage.setItem('token', data.token);
//       queryClient.setQueryData(['user'], data.user);
//       navigate('/dashboard');
//     }
//   });
  
//   const login = useMutation({
//     mutationFn: (data: LoginRequestDto) => authService.login(data),
//     onSuccess: (data: AuthResponseDto) => {
//       localStorage.setItem('token', data.token);
//       queryClient.setQueryData(['user'], data.user);
//       navigate('/dashboard');
//     }
//   });
  
//   const logout = useMutation({
//     mutationFn: () => authService.logout(),
//     onSuccess: () => {
//       queryClient.removeQueries();
//       navigate('/login');
//     }
//   });
  
  

//   return {
//     register,
//     login,
//     logout,
//     isAuthenticated: !!localStorage.getItem('token')
//   };
// }