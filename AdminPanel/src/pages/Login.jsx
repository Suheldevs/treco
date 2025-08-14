import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/logo.webp';

function AdminLogin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error('Please enter both email and password.');
      return;
    }

    const apiKey = `${import.meta.env.VITE_BACKEND_URL}/admin/login`;

    try {
      setLoading(true);
      const response = await axios.post(apiKey, formData);
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem('admin', JSON.stringify(response?.data));
        toast.success('Login successful!');
        navigate('/dashboard', { state: { adminData: response.data } });
      }
    } catch (err) {
        alert(err?.response.data?.message);
      const errorMessage = err.response?.data?.message || 'Login failed. Please try again.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center  justify-center min-h-screen bg-cover bg-center bg-black px-4">
     <div className="bg-white p-4 rounded-xl shadow-2xl w-full max-w-sm border border-gray-100">
  <div className="flex justify-center mb-2">
    <div className="relative group">
      <div className="absolute inset-0 bg-blue-100 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <img 
        src={logo} 
        alt="Logo" 
        className="h-24 object-contain  relative z-10 shadow-md transition-transform duration-300 hover:scale-105" 
      />
    </div>
  </div>
  
  <h2 className="text-2xl italic font-bold text-center mb-4 text-black relative">
    Admin Login
    {/* <span className="block h-1 w-16 bg-black mx-auto mt-2 rounded-full"></span> */}
  </h2>
  
  <form onSubmit={handleSubmit} className="space-y-3">
    <div className="transition-all duration-200 hover:translate-y-px">
      <label className="block font-semibold text-black mb-1 italic tracking-wide">Email</label> 
      <div className="relative">
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 pl-10 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:border-black focus:outline-none transition-all duration-200"
          required
        />
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
    
    <div className="transition-all duration-200 hover:translate-y-px">
      <label className="block font-semibold text-black mb-1 italic tracking-wide">Password</label>
      <div className="relative">
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 pl-10 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:border-black focus:outline-none transition-all duration-200"
          required
        />
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
    </div>
    
    <div className="pt-2">
      <button
        type="submit"
        className={`w-full cursor-pointer flex justify-center items-center gap-2 bg-gradient-to-r from-black to-black text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:translate-y-px transition-all duration-300 ${
          loading ? 'cursor-not-allowed opacity-80' : ''
        }`}
        disabled={loading}
      >
        {loading ? (
          <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Log In
          </>
        )}
      </button>
    </div>
  </form>

</div>
    </div>
  );
}

export default AdminLogin;
