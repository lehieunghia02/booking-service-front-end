
import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../api';


type User = {
    id: number;
    username: string;
}

type AuthContextType = {
    user: User | null;
    accessToken: string | null;
    login: (username: string, password: string) => Promise<User>;
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);

    const login = async (username: string, password: string) => {
        const res = await api.post('/login', { username, password });
        const token = res.data.accessToken;
        setAccessToken(token);
        const decoded = parseJwt(token);
        const user = { id: decoded.id, username: decoded.username };
        setUser(user);
        return user;
    };

    const logout = async () => {
        await api.post('/logout');
        setAccessToken(null);
        setUser(null);
    };

    const refreshToken = async () => {
        try {
            const res = await api.post('/refresh');
            const token = res.data.accessToken;
            setAccessToken(token);
            const decoded = parseJwt(token);
            setUser({ id: decoded.id, username: decoded.username });
        } catch (e) {
            logout();
        }
    };

    useEffect(() => {
        refreshToken();
    }, []);

    return (
        <AuthContext.Provider value={{ user, accessToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
};

// Giải mã JWT
function parseJwt(token: string): any {
    try {
        const payload = token.split('.')[1];
        return JSON.parse(atob(payload));
    } catch {
        return {};
    }
}