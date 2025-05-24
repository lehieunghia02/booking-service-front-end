import { useState } from 'react';
import * as authService from '@/pages/login/authService';

interface User {
  username: string;
}

interface UseAuthReturn {
  accessToken: string | null;
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<boolean>;
}

export function useAuth(): UseAuthReturn {
  const [accessToken, setAccessToken] = useState<string | null>(localStorage.getItem('accessToken'));
  const [user, setUser] = useState<User | null>(null);

  async function doLogin(username: string, password: string) {
    const data = await authService.login(username, password)
    setAccessToken(data.accessToken)
    setUser({ username })
  }

  async function doRefreshToken(): Promise<boolean> {
    try {
      const newToken = await authService.refreshToken();
      setAccessToken(newToken);
      return true;
    } catch (e) {
      doLogout();
      return false;
    }
  }

  function doLogout() {
    authService.logout();
    setAccessToken(null);
    setUser(null);
  }

  return {
    accessToken,
    user,
    login: doLogin,
    logout: doLogout,
    refreshToken: doRefreshToken,
  };
}
