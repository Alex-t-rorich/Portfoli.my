'use client';
import { useState, useEffect } from 'react';
import { API_URL, API_PREFIX, WEBSITE_ID, buildApiPath } from '@/app/config/api';
import { useAuth } from '@/app/context/AuthContext';

export default function Profile() {
  const { userId, logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const [websiteData, setWebsiteData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const userResponse = await fetch(buildApiPath(`/users/${userId}`));
        
        if (!userResponse.ok) {
          throw new Error(`Failed to fetch user data: ${userResponse.status}`);
        }
        
        const userData = await userResponse.json();
        setUserData(userData);
        
        if (WEBSITE_ID) {
          const websiteResponse = await fetch(buildApiPath(`/websites/${WEBSITE_ID}`));
          
          if (websiteResponse.ok) {
            const websiteData = await websiteResponse.json();
            setWebsiteData(websiteData);
          } else {
            console.error('Failed to fetch website data:', websiteResponse.status);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    if (userId) {
      fetchData();
    }
  }, [userId]);
  
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            <span className="text-xl font-medium text-gray-700">Loading your profile...</span>
          </div>
        </div>
      </div>
    );
  }
  
  // Format date nicely
  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header with account info summary */}
        <div className="mb-8 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg">
          <div className="px-6 py-12 text-white md:px-12">
            <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
              <div>
                <h1 className="text-3xl font-bold">
                  {userData?.first_name} {userData?.last_name}
                </h1>
                <p className="mt-1 text-blue-100">{userData?.email}</p>
                <div className="mt-4 inline-block rounded-full bg-blue-400 bg-opacity-30 px-3 py-1 text-sm">
                  {userData?.title || 'User'}
                </div>
              </div>
              <button
                onClick={logout}
                className="rounded-lg bg-white bg-opacity-20 px-4 py-2 font-medium text-white backdrop-blur-sm transition hover:bg-opacity-30"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
        
        {error && (
          <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-700 shadow">
            <div className="flex items-center">
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <p>{error}</p>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* User Information Card */}
          <div className="lg:col-span-1">
            <div className="rounded-xl bg-white p-6 shadow">
              <div className="mb-4 flex items-center">
                <div className="mr-3 rounded-full bg-blue-100 p-2">
                  <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Account Details</h2>
              </div>
              
              <div className="space-y-4 divide-y divide-gray-100">
                <div className="pt-2">
                  <h3 className="text-sm font-medium text-gray-500">Email Address</h3>
                  <p className="text-base text-gray-700">{userData?.email}</p>
                </div>
                
                <div className="pt-4">
                  <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                  <p className="text-base text-gray-700">{userData?.first_name} {userData?.last_name}</p>
                </div>
                
                <div className="pt-4">
                  <h3 className="text-sm font-medium text-gray-500">Title</h3>
                  <p className="text-base text-gray-700">{userData?.title || '-'}</p>
                </div>
                
                <div className="pt-4">
                  <h3 className="text-sm font-medium text-gray-500">Account Created</h3>
                  <p className="text-base text-gray-700">{formatDate(userData?.created)}</p>
                </div>
              </div>
              
              {/* Login Statistics */}
              <div className="mt-6 space-y-4 rounded-lg bg-blue-50 p-4">
                <h3 className="text-sm font-medium text-blue-700">Login Statistics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-blue-600">Login Count</div>
                    <div className="text-xl font-semibold text-gray-700">{userData?.login_count}</div>
                  </div>
                  <div>
                    <div className="text-sm text-blue-600">Last Login</div>
                    <div className="text-base text-gray-700">
                      {userData?.last_login ? formatDate(userData.last_login) : 'N/A'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Website Information Card */}
          <div className="lg:col-span-2">
            <div className="rounded-xl bg-white p-6 shadow">
              <div className="mb-4 flex items-center">
                <div className="mr-3 rounded-full bg-green-100 p-2">
                  <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Website Details</h2>
                
                {websiteData && !websiteData.deleted && (
                  <span className="ml-3 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    Active
                  </span>
                )}
                
                {websiteData && websiteData.deleted && (
                  <span className="ml-3 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                    Inactive
                  </span>
                )}
              </div>
              
              {websiteData ? (
                <div>
                  <div className="mb-6 space-y-4 divide-y divide-gray-100">
                    <div className="pt-2">
                      <h3 className="text-sm font-medium text-gray-500">Website Title</h3>
                      <p className="text-base text-gray-700">{websiteData.title}</p>
                    </div>
                    
                    <div className="pt-4">
                      <h3 className="text-sm font-medium text-gray-500">Description</h3>
                      <p className="whitespace-pre-line text-base text-gray-700">
                        {websiteData.description || 'No description available'}
                      </p>
                    </div>
                    
                    <div className="pt-4">
                      <h3 className="text-sm font-medium text-gray-500">Website URL</h3>
                      {websiteData.website_url ? (
                        <a 
                          href={websiteData.website_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-base text-blue-600 hover:underline"
                        >
                          {websiteData.website_url}
                        </a>
                      ) : (
                        <p className="text-base text-gray-500">Not specified</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Website Statistics */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                      <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
                        <h3 className="text-sm font-medium text-gray-500">Created</h3>
                      </div>
                      <div className="px-4 py-5">
                        <p className="text-center text-sm font-medium text-gray-700">
                          {formatDate(websiteData.created)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                      <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
                        <h3 className="text-sm font-medium text-gray-500">Last Updated</h3>
                      </div>
                      <div className="px-4 py-5">
                        <p className="text-center text-sm font-medium text-gray-700">
                          {formatDate(websiteData.updated)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                      <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
                        <h3 className="text-sm font-medium text-gray-500">Website ID</h3>
                      </div>
                      <div className="px-4 py-5">
                        <p className="text-center text-sm font-medium text-gray-700">
                          {websiteData.id}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-lg bg-gray-50 p-8 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No Website Found</h3>
                  <p className="mt-1 text-sm text-gray-500">No website data is associated with this account.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}