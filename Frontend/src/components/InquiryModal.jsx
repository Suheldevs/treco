import { useState, useEffect } from 'react';
import { X, User, Phone, Mail, Home, Briefcase, Building, Layout, Layers, FileText, ChevronDown, Send, Loader } from 'lucide-react';
import axios from 'axios';

export default function InquiryModal({ isOpen, setIsOpen }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    projectName: '',
    projectType: '',
    area: '',
    floor: '',
    message: ''
  });
  
  const [formStep, setFormStep] = useState(1);
  const [showDropdown, setShowDropdown] = useState({
    service: false,
    projectType: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error state when user starts typing again
    if (error) setError(null);
  };

  const api = import.meta.env.VITE_BACKEND_URL || ''; // Fallback if env variable is missing
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {

      const validateForm = () => {
        if (!formData.name || !formData.phone || !formData.email || !formData.service || !formData.projectName || !formData.projectType) {
          throw new Error("Please fill all required fields");
        }
        

        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(formData.phone)) {
          throw new Error("Phone number must be 10 digits and start with 6-9");
        }
        
  
        if (!formData.email.includes('@')) {
          throw new Error("Please enter a valid email address");
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          throw new Error("Please enter a valid email address");
        }

        if (formData.floor !== '' && parseInt(formData.floor) <= 0) {
          throw new Error("Please enter a valid floor count greater than 0");
        }
        
        // Check area value if provided
        if (formData.area !== '' && parseInt(formData.area) <= 0) {
          throw new Error("Please enter a valid area in square feet greater than 0");
        }
       
      };

      validateForm()
      
      const res = await axios.post(`${api}/inquiry/save`, formData);
      console.log("Form submission successful:", res);
      setSuccess(true);
      
      setTimeout(() => {
        setIsOpen(false);
        
        resetForm();
      }, 2000);
      
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(err.response?.data?.message || err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      projectName: '',
      projectType: '',
      area: '',
      floor: '',
      message: ''
    });
    setFormStep(1);
    setSuccess(false);
    setError(null);
  };

  const toggleDropdown = (dropdown) => {
    setShowDropdown(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  const selectOption = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setShowDropdown(prev => ({
      ...prev,
      [field]: false
    }));
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-container')) {
        setShowDropdown({
          service: false,
          projectType: false
        });
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Reset form when modal is closed
  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-xl max-h-[99vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-500 to-blue-500 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Briefcase size={24} />
            Project Information
          </h2>
          <button 
            onClick={handleClose} 
            className="text-black hover:text-gray-700 bg-white bg-opacity-20 rounded-full p-2 transition-all hover:bg-opacity-30"
            disabled={loading}
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Progress indicator */}
        <div className="bg-gray-50 px-6 py-3">
          <div className="flex justify-between items-center">
            <button 
              className={`rounded-full ${formStep === 1 ? 'bg-sky-600 text-white' : 'bg-gray-200 text-gray-600'} h-8 w-8 flex items-center justify-center font-medium`}
              onClick={() => !loading && setFormStep(1)}
              disabled={loading}
            >
              1
            </button>
            <div className={`h-1 flex-1 mx-2 ${formStep >= 2 ? 'bg-sky-500' : 'bg-gray-200'}`}></div>
            <button 
              className={`rounded-full ${formStep === 2 ? 'bg-sky-600 text-white' : 'bg-gray-200 text-gray-600'} h-8 w-8 flex items-center justify-center font-medium`}
              onClick={() => !loading && setFormStep(2)}
              disabled={loading}
            >
              2
            </button>
          </div>
        </div>
        
        {/* Error/Success Message */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 m-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <X className="h-5 w-5 text-red-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}
        
        {success && (
          <div className="bg-green-50 border-l-4 border-green-600 p-4 m-4">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-green-700">Your inquiry has been submitted successfully!</p>
              </div>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {formStep === 1 ? (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-800">Personal Information</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500 p-3 border"
                      disabled={loading}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Mobile Number *</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="10 Digit Number"
                      pattern="^[6-9]\d{9}$"
                      title="Please enter a valid 10-digit phone number starting with 6 to 9."
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500 p-3 border"
                      disabled={loading}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500 p-3 border"
                      disabled={loading}
                    />
                  </div>
                </div>
              </div>
              
              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setFormStep(2)}
                  className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 font-medium disabled:bg-sky-300 disabled:cursor-not-allowed"
                  disabled={loading || !formData.name || !formData.phone || !formData.email}
                >
                  Next 
                  <ChevronDown size={18} className="ml-2 rotate-270" />
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-800">Project Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="dropdown-container">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">Interested In *</label>
                  <div className="mt-1 relative">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!loading) toggleDropdown('service');
                      }}
                      className="relative w-full bg-white border border-gray-300 rounded-lg shadow-sm pl-3 pr-10 py-3 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      disabled={loading}
                    >
                      <div className="flex items-center">
                        <Building size={18} className="text-gray-400 mr-2" />
                        <span>{formData.service || 'Select an option'}</span>
                      </div>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <ChevronDown size={18} className="text-gray-400" />
                      </span>
                    </button>

                    {showDropdown.service && (
                      <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 max-h-60 overflow-auto ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {['Robotics System', 'Home Automation', 'Treco K&E Sharing', 'Industrial Automation', 'Internet of Things', 'Social Service'].map((option) => (
                          <div
                            key={option}
                            className={`cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-sky-50 ${formData.service === option ? 'bg-sky-100' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              selectOption('service', option);
                            }}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">Project Name *</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Briefcase size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="projectName"
                      name="projectName"
                      required
                      placeholder="Smart Home 2025"
                      value={formData.projectName}
                      onChange={handleChange}
                      className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500 p-3 border"
                      disabled={loading}
                    />
                  </div>
                </div>
                
                <div className="dropdown-container">
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">Project Type *</label>
                  <div className="mt-1 relative">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!loading) toggleDropdown('projectType');
                      }}
                      className="relative w-full bg-white border border-gray-300 rounded-lg shadow-sm pl-3 pr-10 py-3 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      disabled={loading}
                    >
                      <div className="flex items-center">
                        <Layout size={18} className="text-gray-400 mr-2" />
                        <span>{formData.projectType || 'Select an option'}</span>
                      </div>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <ChevronDown size={18} className="text-gray-400" />
                      </span>
                    </button>

                    {showDropdown.projectType && (
                      <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 max-h-60 overflow-auto ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {['Exiting Project', 'New Project',].map((option) => (
                          <div
                            key={option}
                            className={`cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-sky-50 ${formData.projectType === option ? 'bg-sky-100' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              selectOption('projectType', option);
                            }}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="area" className="block text-sm font-medium text-gray-700">Square Feet</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Layers size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="number"
                        id="area"
                        name="area"
                        placeholder="1500"
                        value={formData.area}
                        onChange={handleChange}
                        className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500 p-3 border"
                        disabled={loading}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="floor" className="block text-sm font-medium text-gray-700">Floors</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="number"
                        id="floor"
                        name="floor"
                        placeholder="2"
                        value={formData.floor}
                        onChange={handleChange}
                        className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500 p-3 border"
                        disabled={loading}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Details</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
                    <FileText size={18} className="text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Please provide any other details that might be helpful..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500 p-3 border"
                    disabled={loading}
                  />
                </div>
              </div>
              
              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setFormStep(1)}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  Back
                </button>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    disabled={loading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 font-medium disabled:bg-sky-300 disabled:cursor-not-allowed"
                    disabled={loading || !formData.name || !formData.phone || !formData.email || !formData.service || !formData.projectName || !formData.projectType}
                  >
                    {loading ? (
                      <>
                        <Loader size={18} className="mr-2 animate-spin" />
                        Processing
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Submit
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}