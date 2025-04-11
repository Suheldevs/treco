import { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, LayoutDashboard, ShoppingCart, FileText, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import cclogo from '../assets/ccogo-suhel.webp';
export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu when screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { path: '/dashboard', name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { path: '/product', name: 'Products', icon: <ShoppingCart size={20} /> },
    { path: '/blog', name: 'Blog', icon: <FileText size={20} /> },
    { path: '/inquiry', name: 'Inquiry', icon: <MessageSquare size={20} /> },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar for desktop */}
      <aside 
        className={`bg-blue-700 text-white transition-all duration-300 ease-in-out hidden md:flex flex-col ${
          isSidebarOpen ? 'md:w-64' : 'md:w-20'
        }`}
      >
        <div className={`p-4 flex items-center justify-between ${!isSidebarOpen && 'justify-center'}`}>
          {isSidebarOpen && <h1 className="text-xl font-bold"><img src={cclogo} className='h-12'/></h1>}
          <button 
            onClick={toggleSidebar}
            className="p-1 rounded-full hover:bg-blue-600 focus:outline-none"
          >
            {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>
        
        <nav className="flex-1 mt-6">
          <ul>
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className={`flex items-center py-3 px-4 ${
                    isActive(item.path) 
                      ? 'bg-blue-800 border-r-4 border-white' 
                      : 'hover:bg-blue-600'
                  } ${!isSidebarOpen && 'justify-center'}`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {isSidebarOpen && <span>{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile sidebar overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-blue-700 text-white flex flex-col">
            <div className="p-4 flex items-center justify-between">
              <h1 className="text-xl font-bold">Admin</h1>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-full hover:bg-blue-600 focus:outline-none"
              >
                <X size={20} />
              </button>
            </div>
            
            <nav className="flex-1 mt-6">
              <ul>
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path}
                      className={`flex items-center py-3 px-4 ${
                        isActive(item.path) 
                          ? 'bg-blue-800 border-r-4 border-white' 
                          : 'hover:bg-blue-600'
                      }`}
                    >
                      <span className="mr-3">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navbar */}
        <header className="bg-white shadow-sm z-10">
          <div className="py-4 px-6 flex items-center justify-between">
            <div className="flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 mr-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none md:hidden"
              >
                <Menu size={24} />
              </button>
              <h2 className="text-xl font-medium text-gray-800">
                {menuItems.find(item => isActive(item.path))?.name || 'Dashboard'}
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <span className="font-medium">A</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}