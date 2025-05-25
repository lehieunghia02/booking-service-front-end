import { loginApi, refreshTokenApi, signupApi } from '@/services/authApi';
import { createContext, useState, useEffect, type ReactNode } from 'react';


type AuthContextType = {
    accessToken: string | null;
    login: (username: string, password: string) => Promise<void>;
    signup?: (username: string, password: string, email?: string) => Promise<void>;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [accessToken, setAccessToken] = useState<string | null>(null);


    const login = async (email: string, password: string) => {
        const {image, username, accessToken, refreshToken } = await loginApi(email, password);
        setAccessToken(accessToken);
        sessionStorage.setItem('refreshToken', refreshToken);
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('image', image);
    };

    const signup = async (email: string, password: string) => {
        const { accessToken, refreshToken } = await signupApi(email, password);
        setAccessToken(accessToken);
        sessionStorage.setItem('refreshToken', refreshToken);
    };

    const logout = () => {
        setAccessToken(null);
        sessionStorage.removeItem('refreshToken');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('image');
    };

    const refresh = async () => {
        const refreshToken = sessionStorage.getItem('refreshToken');
        if (refreshToken) {
            try {
                const { accessToken: newToken } = await refreshTokenApi(refreshToken);
                setAccessToken(newToken);
            } catch (err) {
                logout();
            }
        }
    };

    useEffect(() => {
        refresh(); // làm mới token khi load app
    }, []);

    return (
        <AuthContext.Provider value={{ accessToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
