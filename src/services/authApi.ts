const API_URL = 'https://booking-service-api-u7eg.onrender.com/api';

export const loginApi = async (email: string, password: string) => {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error('Login failed');
    return data; // { accessToken, refreshToken }
};

export const signupApi = async (
    username: string,
    password: string,
    email?: string
) => {
    const res = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error('Sign up failed');
    return data; // { accessToken, refreshToken }
};

export const getInfoUserApi = async (accessToken: string) => {
    const res = await fetch(`${API_URL}/users/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    });
    const data = await res.json();
    if (!res.ok) throw new Error('Get user info failed');
    return data; // { id, username, email, image }
};
export const refreshTokenApi = async (refreshToken: string) => {
    const res = await fetch(`${API_URL}/auth/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error('Token refresh failed');
    return data; // { accessToken }
};

export const getCategoriesPopularApi = async (page: number, limit: number, skip: number, accessToken: string) => {
    const queryParams = new URLSearchParams({
        page: String(page),
        limit: String(limit),
        skip: String(skip),
    });
    const res = await fetch(`${API_URL}/categories/popular?${queryParams.toString()}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    });
    const data = await res.json();
    if (!res.ok) throw new Error('Get popular categories failed');
    return data; // { categories: Array<Category> }
}