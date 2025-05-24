const API_URL = 'https://dummyjson.com';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export async function login(username: string, password: string): Promise<LoginResponse> {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) throw new Error('Login failed');
  const data = (await res.json()) as LoginResponse;
  localStorage.setItem('accessToken', data.accessToken);
  localStorage.setItem('refreshToken', data.refreshToken);
  return data;
}

export async function refreshToken(): Promise<string> {
  const token = localStorage.getItem('refreshToken');
  if (!token) throw new Error('No refresh token found');

  const res = await fetch(`${API_URL}/auth/refresh-token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken: token }),
  });

  if (!res.ok) throw new Error('Refresh token failed');
  const data = (await res.json()) as { accessToken: string };
  localStorage.setItem('accessToken', data.accessToken);
  return data.accessToken;
}

export function logout(): void {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
}
