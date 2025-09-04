import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl text-gray-900">
              My App
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <Link 
                  href="/" 
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100"
                >
                  Home
                </Link>
                <Link 
                  href="/admin/portfolio" 
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100"
                >
                  Admin Portfolio
                </Link>
                <Link 
                  href="/admin/cv" 
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100"
                >
                  Admin CV
                </Link>
                <Link 
                  href="/admin/profile" 
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100"
                >
                  Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}