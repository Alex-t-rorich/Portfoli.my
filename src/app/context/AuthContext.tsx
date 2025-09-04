'use client';
import { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type AuthContextType = {
  logout: () => void;
  userId: string | null;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('auth_token');
      const expiresAt = localStorage.getItem('expires_at');
      const userId = localStorage.getItem('user_id');
      
      if (token && expiresAt && userId && new Date(expiresAt) > new Date()) {
        setIsAuthenticated(true);
        setUserId(userId);
      } else {
        setIsAuthenticated(false);
        setUserId(null);
        
        if (window.location.pathname.startsWith('/admin')) {
          router.push('/login');
        }
      }
    };
    
    checkAuth();
    
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, [router]);
  
  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('expires_at');
    setIsAuthenticated(false);
    setUserId(null);
    router.push('/admin/login');
  };
  
  return (
    <AuthContext.Provider value={{
      logout,
      userId,
      isAuthenticated
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}