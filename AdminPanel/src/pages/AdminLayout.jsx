import { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, LayoutDashboard, ShoppingCart, FileText, MessageSquare, Info, MenuIcon, User } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.webp';
import CopyRight from '../components/CopyRight';
import { toast } from 'react-toastify';
export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
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
    { path: '/job-application', name: 'Job Applications', icon: <Info size={20} /> },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


const handleLogout = () => {
  toast.info(
    ({ closeToast }) => (
      <div className="flex flex-col gap-2">
        <p className="font-medium">Are you sure you want to log out?</p>
        <div className="flex gap-2">
          <button
            onClick={() => {
              localStorage.removeItem("admin");
              toast.dismiss();
              toast.success("Logged out successfully!");
              navigate("/");
            }}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Yes
          </button>
          <button
            onClick={closeToast}
            className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
          >
            No
          </button>
        </div>
      </div>
    ),
    {
      autoClose: false,
      closeOnClick: false,
      draggable: false,
      position: "top-center",
    }
  );
};


  return (
    <div className="flex h-screen relative bg-gray-50">
      {/* Sidebar for desktop */}
        
      <aside 
        className={`bg-black text-white transition-all duration-300 ease-in-out hidden md:flex flex-col ${
          isSidebarOpen ? 'md:w-64' : 'md:w-20'
        }`}
      >
        <div className={`p-4 border-b border-b-white/20 flex items-center justify-between ${!isSidebarOpen && 'justify-center'}`}>
          {isSidebarOpen && <h1 className="text-xl font-bold"><img src={logo} className='pr-4'/></h1>}
          <button 
            onClick={toggleSidebar}
            className="p-1 rounded-full cursor-pointer hover:bg-black/90 focus:outline-none"
          >
            <MenuIcon size={20} /> 
          </button>
        </div>
        
        <nav className="flex-1 mt-6">
          <ul>
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className={`flex items-center  py-3 px-4 ${
                    isActive(item.path) 
                      ? 'bg-white/10 border-l-4 border-white' 
                      : 'hover:bg-white/10 border-b border-white/10'
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
          <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-black text-white flex flex-col">
            <div className="p-4 flex items-center justify-between">
              <h1 className="text-xl font-bold">Admin</h1>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-full hover:bg-black focus:outline-none"
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
                          ? 'bg-white/10 border-r-4 border-white' 
                          : 'hover:bg-white/10'
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
        <header className="bg-white relative shadow-sm z-10">
          <div className="py-3 px-6 flex items-center justify-between">
            <div className="flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 mr-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none md:hidden"
              >
                <Menu size={24} />
              </button>
              {/* <h2 className="text-xl font-medium text-gray-800">
                {menuItems.find(item => isActive(item.path))?.name || 'Dashboard'}
              </h2> */}
            </div>
            <div className="flex  cursor-pointer items-center gap-4" onClick={()=>{setIsLogoutOpen(!isLogoutOpen)}}>
              <div className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center">
                <span className="font-medium"><User/></span>
              </div>


          </div>
            </div>
              {isLogoutOpen && (<div onClick={handleLogout} className='absolute cursor-pointer min-w-36 bg-gray-50 border border-gray-200  rounded-md  -bottom-9 right-4'>
                <button className=' cursor-pointer text-red-600  px-4 py-2 font-semibold'>
                  Logout
                </button>
              </div>)}
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          {children}
        </main>
         <div className=" border-t border-gray-200 w-full ">

      <CopyRight/>
</div>
      </div>
  
    </div>
  );
}