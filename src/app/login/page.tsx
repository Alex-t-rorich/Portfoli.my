'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { API_URL, API_PREFIX, WEBSITE_ID, buildApiPath } from '@/app/config/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
      
      if (emailInput && emailInput.value && emailInput.value !== email) {
        setEmail(emailInput.value);
      }
      
      if (passwordInput && passwordInput.value && passwordInput.value !== password) {
        setPassword(passwordInput.value);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    
    try {
      const currentEmail = document.getElementById('email').value || email;
      const currentPassword = document.getElementById('password').value || password;
      
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      const apiPrefix = process.env.NEXT_PUBLIC_API_PREFIX || '/api/v1';
      const websiteId = process.env.NEXT_PUBLIC_WEBSITE_ID;

      if (!WEBSITE_ID) {
        console.error('WEBSITE_ID environment variable is not set');
        setError('Website configuration is missing. Please contact the administrator.');
        setLoading(false);
        return;
      }
      
      const loginPayload = {
        email: currentEmail || "",
        password: currentPassword || "",
        website_id: parseInt(websiteId, 10)
      };
      
      const response = await fetch(buildApiPath('/auth/login'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginPayload),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `Login failed with status ${response.status}`);
      }
      
      const data = await response.json();
      
      localStorage.setItem('auth_token', data.token);
      localStorage.setItem('user_id', data.user.id.toString());
      localStorage.setItem('expires_at', data.expires_at);
      
      router.push('/admin/profile');
      
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <div className="rounded bg-white p-8 shadow-md">
          <h2 className="mb-6 text-center text-2xl font-bold">Sign In</h2>
          
          {error && (
            <div className="mb-4 rounded bg-red-100 p-3 text-red-800">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>
            
            <div className="flex items-center justify-between">
              <button
                className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}