const API_URL = 'https://dummyjson.com';

export const loginApi = async (username: string, password: string) => {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

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

export const refreshTokenApi = async (refreshToken: string) => {
    const res = await fetch(`${API_URL}/auth/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken }),
    });

    if (!res.ok) throw new Error('Token refresh failed');
    return res.json(); // { accessToken }
};
