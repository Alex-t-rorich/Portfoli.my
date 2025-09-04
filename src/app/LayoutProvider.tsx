// app/LayoutProvider.tsx
'use client';
import { usePathname } from 'next/navigation';
import Navbar from "@/components/layout/Navbar";
import AdminNavbar from "@/components/layout/AdminNavbar";
import { AuthProvider, useAuth } from "@/app/context/AuthContext";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const pathname = usePathname();
  
  const isAdminPath = pathname.startsWith('/admin');
  const showAdminNav = isAdminPath || isAuthenticated;
  
  return (
    <>
      {showAdminNav ? (
        <AdminNavbar />
      ) : (
        <Navbar />
      )}
      
      <main className="flex-grow">{children}</main>
      
      <footer className="bg-gray-100 p-4 text-center">
        &copy; {new Date().getFullYear()} Your Portfolio
      </footer>
    </>
  );
}

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <LayoutContent>{children}</LayoutContent>
    </AuthProvider>
  );
}