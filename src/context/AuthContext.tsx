import { loginApi, refreshTokenApi, signupApi } from '@/services/authApi';
import { createContext, useState, useEffect, type ReactNode } from 'react';


type AuthContextType = {
    accessToken: string | null;
    login: (username: string, password: string) => Promise<void>;
    signup?: (username: string, password: string, email?: string) => Promise<void>;
    getInfoUserApi?: (accessToken: string) => Promise<any>;
    getCategoryPopularApi?: (accessToken: string) => Promise<any>;
    getBusinessPopularApi?: (accessToken: string) => Promise<any>;
    getIndividualsPopularApi?: (accessToken: string) => Promise<any>;
    getServicePopularApi?: (accessToken: string) => Promise<any>;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [accessToken, setAccessToken] = useState<string | null>(null);


    const login = async (email: string, password: string) => {
        const {status, message, data } = await loginApi(email, password);
        setAccessToken(data.token);
        sessionStorage.setItem('accessToken', data.token);
    };

    const signup = async (username: string, password: string, email: string) => {
        const { accessToken, refreshToken } = await signupApi(username, password, email);
        setAccessToken(accessToken);
        sessionStorage.setItem('refreshToken', refreshToken);
    };

    const logout = () => {
        setAccessToken(null);
        sessionStorage.removeItem('refreshToken');

    };

    const getInfoUserApi = async (accessToken: string) => {
        const {status, message, data} = await getInfoUserApi(accessToken);
        sessionStorage.setItem('userInfo', JSON.stringify(data.user));
        return {status, message, data};
    }

    const getCategoriesPopularApi = async (page: number, limit: number, skip: number, accessToken: string) => {
        const { status, message, data } = await getCategoriesPopularApi(page, limit, skip, accessToken);
        return {status, message, data};
    }

    const getBusinessPopularApi = async (accessToken: string) => {
        const { status, message, data } = await getBusinessPopularApi(accessToken);
        return {status, message, data};
    }

    const getIndividualsPopularApi = async (accessToken: string) => {
        const { status, message, data } = await getIndividualsPopularApi(accessToken);
        return {status, message, data};
    }

    const getServicePopularApi = async (accessToken: string) => {
        const { status, message, result } = await getServicePopularApi(accessToken);
        return {status, message, result};
    }

    const searchApi = async (query: string, accessToken: string) => {
        const { status, message, result } = await searchApi(query, accessToken);
        return {status, message, result};
    }

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
