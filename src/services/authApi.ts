const API_URL = 'https://booking-service-api-u7eg.onrender.com/api';

export const loginApi = async (username: string, password: string) => {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });
    console.log(res)
    if (!res.ok) throw new Error('Login failed');
    return res.json(); // { accessToken, refreshToken }
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

    if (!res.ok) throw new Error('Sign up failed');
    return res.json(); // { accessToken, refreshToken }
};

export const getInfoUserApi = async (accessToken: string) => {
    const res = await fetch(`${API_URL}/auth/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessToken }),
    });
    if (!res.ok) throw new Error('Get user info failed');
    return res.json(); // { id, username, email, image }
};
export const refreshTokenApi = async (refreshToken: string) => {
    const res = await fetch(`${API_URL}/auth/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken }),
    });

    if (!res.ok) throw new Error('Token refresh failed');
    return res.json(); // { accessToken }
};

export const getCategoriesPopularApi = async (page: number, limit: number, skip: number) => {
    const queryParams = new URLSearchParams({
        page: String(page),
        limit: String(limit),
        skip: String(skip),
    });
    const res = await fetch(`${API_URL}/categories/popular?${queryParams.toString()}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) throw new Error('Get popular categories failed');
    return res.json(); // { categories: Array<Category> }
}