import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { X, User, Phone, Mail, Home, Briefcase, Building, Layout, Layers, FileText, ChevronDown, Send, Loader, Shield, Music } from 'lucide-react';
import axios from 'axios';

// Validation schemas for each step
const stepSchemas = {
  1: yup.object({
    name: yup.string().required('Full name is required').min(2, 'Name must be at least 2 characters'),
    phone: yup.string()
      .required('Mobile number is required')
      .matches(/^[6-9]\d{9}$/, 'Phone number must be 10 digits and start with 6-9'),
    email: yup.string()
      .required('Email is required')
      .email('Please enter a valid email address'),
    address: yup.string().required('Address is required').min(10, 'Address must be at least 10 characters')
  }),
  2: yup.object({
    service: yup.string().required('Please select a service'),
    projectName: yup.string().required('Project name is required').min(3, 'Project name must be at least 3 characters'),
    projectType: yup.string().required('Please select a project type'),
    area: yup.number().nullable().transform((value, original) => original === '' ? null : value)
      .test('positive', 'Area must be greater than 0', value => value === null || value > 0),
    floor: yup.number().nullable().transform((value, original) => original === '' ? null : value)
      .test('positive', 'Floor count must be greater than 0', value => value === null || value > 0)
  }),
  3: yup.object({
    featuresOfInterest: yup.array().min(1, 'Please select at least one feature of interest'),
    mediaEntertainment: yup.array(),
    message: yup.string()
  })
};

export default function InquiryModal({ isOpen, setIsOpen }) {
  const [formStep, setFormStep] = useState(1);
  const [showDropdown, setShowDropdown] = useState({
    service: false,
    projectType: false,
    featuresOfInterest: false,
    mediaEntertainment: false
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const getCurrentSchema = () => stepSchemas[formStep];

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    reset,
    trigger,
    formState: { errors, isValid }
  } = useForm({
    resolver: yupResolver(getCurrentSchema()),
    mode: 'onChange',
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      address: '',
      service: '',
      projectName: '',
      projectType: '',
      area: '',
      floor: '',
      featuresOfInterest: [],
      mediaEntertainment: [],
      message: ''
    }
  });



  const serviceOptions = [
    'Robotics System',
    'Home Automation',
    'A-Mad  K&E Sharing',
    'Industrial Automation',
    'Internet of Things',
    'Social Service'
  ];

  const projectTypeOptions = [
    'Existing Project',
    'New Project'
  ];

  const featuresOptions = [
    'Burglar Alarm System',
    'Surveillance Camera System',
    'Video Door Phone',
    'Access Control System',
    'Lighting Automation',
    'Curtain Control'
  ];

  const mediaOptions = [
    'Multi-Room, Multi-Source Audio',
    'Dedicated Home Theater / Media Room',
    'Video Distribution'
  ];

  const api = import.meta.env.VITE_BACKEND_URL || '';

  const onSubmit = async (data) => {
    setLoading(true);
    setSubmitError(null);
    
    try {
      const res = await axios.post(`${api}/inquiry/save`, data);
      setSuccess(true);
      
      setTimeout(() => {
        setIsOpen(false);
        resetForm();
      }, 2000);
      
    } catch (err) {
      console.error("Error submitting form:", err);
      setSubmitError(err.response?.data?.message || err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    reset();
    setFormStep(1);
    setSuccess(false);
    setSubmitError(null);
    setShowDropdown({
      service: false,
      projectType: false,
      featuresOfInterest: false,
      mediaEntertainment: false
    });
  };

  const handleNextStep = async () => {
    const isStepValid = await trigger();
    if (isStepValid) {
      setFormStep(prev => Math.min(prev + 1, 3));
    }
  };

  const handlePreviousStep = () => {
    setFormStep(prev => Math.max(prev - 1, 1));
  };

  const handleStepClick = async (step) => {
    if (step < formStep) {
      setFormStep(step);
    } else if (step === formStep + 1) {
      const isStepValid = await trigger();
      if (isStepValid) {
        setFormStep(step);
      }
    }
  };

  const toggleDropdown = (dropdown) => {
    setShowDropdown(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  const selectOption = (field, value) => {
    setValue(field, value, { shouldValidate: true });
    setShowDropdown(prev => ({
      ...prev,
      [field]: false
    }));
  };

  const toggleMultiSelectOption = (field, value) => {
    const currentValues = getValues(field) || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(item => item !== value)
      : [...currentValues, value];
    
    setValue(field, newValues, { shouldValidate: true });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-container')) {
        setShowDropdown({
          service: false,
          projectType: false,
          featuresOfInterest: false,
          mediaEntertainment: false
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

  // Update form resolver when step changes
  useEffect(() => {
    const newResolver = yupResolver(getCurrentSchema());
    // Re-trigger validation after schema change
    setTimeout(() => trigger(), 0);
  }, [formStep]);

  if (!isOpen) return null;

  const handleClose = () => {
    if (!loading) {
      setIsOpen(false);
    }
  };

  const getStepTitle = () => {
    switch (formStep) {
      case 1: return "Personal Information";
      case 2: return "Project Details";
      case 3: return "Features & Additional Information";
      default: return "";
    }
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[95vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-500 to-blue-500 p-3 flex justify-between items-center sticky top-0 z-10">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Briefcase size={24} />
            Request A Quote
          </h2>
          <button 
            title='Close'
            onClick={handleClose} 
            className="text-black hover:text-gray-700 bg-white bg-opacity-20 rounded-full p-2 transition-all hover:bg-opacity-30"
            disabled={loading}
          >
            <X size={20} />
          </button>
        </div>
        
     <div className="bg-gray-50 px-6 py-4 sticky  z-10">
  <div className="relative flex justify-between items-center  w-full">
    {/* {["Personal Information", "Project Details", "Features & Additional Information"].map((_, index) => {
      if (index === 2) return null; 
      return (
        <div
          key={index}
          className={`absolute top-5 left-[calc((100%/3)*${index}+1.25rem)] h-1 w-[calc(100%/3-2.5rem)] transition-colors ${
            formStep > index + 1
              ? 'bg-green-500'
              : formStep === index + 1
                ? 'bg-sky-500'
                : 'bg-gray-200'
          }`}
        />
      );
    })} */}

    {/* Step buttons + labels */}
    {["Personal Information", "Project Details", "Features & Additional Information"].map((label, index) => (
      <div key={index} className="flex-1 flex flex-col items-center relative z-10">

        
        <button
          title={`Step ${index + 1}`}
          className={`rounded-full transition-colors ${
            formStep === index + 1
              ? 'bg-sky-600 text-white'
              : formStep > index + 1
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          } h-10 w-10 flex items-center justify-center font-medium cursor-pointer`}
          onClick={() => !loading && handleStepClick(index + 1)}
          disabled={loading}
        >
          {index + 1}
        </button>

        <span className="mt-2 text-sm text-gray-600 font-medium text-center">
          {label}
        </span>
      </div>
    ))}
  </div>
</div>

        
        {/* Error Message */}
        {submitError && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 m-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <X className="h-5 w-5 text-red-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{submitError}</p>
              </div>
            </div>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="bg-green-50 border-l-4 border-green-600 p-4 m-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-green-700">Your inquiry has been submitted successfully!</p>
              </div>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-3">
          {/* Step 1: Personal Information */}
          {formStep === 1 && (
            <div className="space-y-2">
              <div className="space-y-2">
                {/* Name and Phone in one row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <div className="relative">
                          <div className="absolute top-4 left-0 pl-3 flex items-center pointer-events-none">
                            <User size={18} className="text-gray-400" />
                          </div>
                          <input
                            {...field}
                            type="text"
                            id="name"
                            placeholder="John Doe"
                            className={`pl-10 block w-full rounded-lg border shadow-sm focus:ring-sky-500 focus:border-sky-500 p-3 transition-colors ${
                              errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400 focus:bg-white'
                            }`}
                            disabled={loading}
                          />
                          {errors.name && (
                            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                          )}
                        </div>
                      )}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <div className="relative">
                          <div className="absolute top-4 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone size={18} className="text-gray-400" />
                          </div>
                          <input
                            {...field}
                            type="tel"
                            id="phone"
                            placeholder="10 Digit Number"
                            className={`pl-10 block w-full rounded-lg border shadow-sm focus:ring-sky-500 focus:border-sky-500 p-3 transition-colors ${
                              errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400 focus:bg-white'
                            }`}
                            disabled={loading}
                          />
                          {errors.phone && (
                            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                          )}
                        </div>
                      )}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <div className="relative">
                        <div className="absolute top-4 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail size={18} className="text-gray-400" />
                        </div>
                        <input
                          {...field}
                          type="email"
                          id="email"
                          placeholder="you@example.com"
                          className={`pl-10 block w-full rounded-lg border shadow-sm focus:ring-sky-500 focus:border-sky-500 p-3 transition-colors ${
                            errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400 focus:bg-white'
                          }`}
                          disabled={loading}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>
                    )}
                  />
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                  <Controller
                    name="address"
                    control={control}
                    render={({ field }) => (
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none">
                          <Home size={18} className="text-gray-400" />
                        </div>
                        <textarea
                          {...field}
                          id="address"
                          placeholder="Enter your complete address"
                          rows="3"
                          className={`pl-10 block w-full rounded-lg border shadow-sm focus:ring-sky-500 focus:border-sky-500 p-3 transition-colors resize-none ${
                            errors.address ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400 focus:bg-white'
                          }`}
                          disabled={loading}
                        />
                        {errors.address && (
                          <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                        )}
                      </div>
                    )}
                  />
                </div>
              </div>
              
              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 font-medium disabled:bg-sky-300 disabled:cursor-not-allowed transition-colors"
                  disabled={loading}
                >
                  Next 
                  <ChevronDown size={18} className="ml-2 -rotate-90" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Project Details */}
          {formStep === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 gap-x-4">
                <div className="dropdown-container">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Interested In *</label>
                  <Controller
                    name="service"
                    control={control}
                    render={({ field }) => (
                      <div className="relative">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!loading) toggleDropdown('service');
                          }}
                          className={`relative w-full bg-white border rounded-lg shadow-sm pl-3 pr-10 py-3 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition-colors ${
                            errors.service ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                          } ${loading ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                          disabled={loading}
                        >
                          <div className="flex items-center">
                            <Building size={18} className="text-gray-400 mr-2" />
                            <span className={field.value ? 'text-gray-900' : 'text-gray-500'}>
                              {field.value || 'Select an option'}
                            </span>
                          </div>
                          <span className="absolute top-4 right-0 flex items-center pr-2 pointer-events-none">
                            <ChevronDown size={18} className={`text-gray-400 transition-transform ${showDropdown.service ? 'rotate-180' : ''}`} />
                          </span>
                        </button>

                        {showDropdown.service && (
                          <div className="absolute z-20 mt-1 w-full bg-white shadow-lg rounded-md py-1 max-h-60 overflow-auto ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {serviceOptions.map((option) => (
                              <div
                                key={option}
                                className={`cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-sky-50 transition-colors ${
                                  field.value === option ? 'bg-sky-100 text-sky-900' : 'text-gray-900'
                                }`}
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
                        {errors.service && (
                          <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                        )}
                      </div>
                    )}
                  />
                </div>
                
                <div>
                  <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-1">Project Name *</label>
                  <Controller
                    name="projectName"
                    control={control}
                    render={({ field }) => (
                      <div className="relative">
                        <div className="absolute top-4 left-0 pl-3 flex items-center pointer-events-none">
                          <Briefcase size={18} className="text-gray-400" />
                        </div>
                        <input
                          {...field}
                          type="text"
                          id="projectName"
                          placeholder="Smart Home 2025"
                          className={`pl-10 block w-full rounded-lg border shadow-sm focus:ring-sky-500 focus:border-sky-500 p-3 transition-colors ${
                            errors.projectName ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400 focus:bg-white'
                          }`}
                          disabled={loading}
                        />
                        {errors.projectName && (
                          <p className="mt-1 text-sm text-red-600">{errors.projectName.message}</p>
                        )}
                      </div>
                    )}
                  />
                </div>
                
                <div className="dropdown-container">
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Project Type *</label>
                  <Controller
                    name="projectType"
                    control={control}
                    render={({ field }) => (
                      <div className="relative">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!loading) toggleDropdown('projectType');
                          }}
                          className={`relative w-full bg-white border rounded-lg shadow-sm pl-3 pr-10 py-3 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition-colors ${
                            errors.projectType ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                          } ${loading ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                          disabled={loading}
                        >
                          <div className="flex items-center">
                            <Layout size={18} className="text-gray-400 mr-2" />
                            <span className={field.value ? 'text-gray-900' : 'text-gray-500'}>
                              {field.value || 'Select an option'}
                            </span>
                          </div>
                          <span className="absolute top-4 right-0 flex items-center pr-2 pointer-events-none">
                            <ChevronDown size={18} className={`text-gray-400 transition-transform ${showDropdown.projectType ? 'rotate-180' : ''}`} />
                          </span>
                        </button>

                        {showDropdown.projectType && (
                          <div className="absolute z-20 mt-1 w-full bg-white shadow-lg rounded-md py-1 max-h-60 overflow-auto ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {projectTypeOptions.map((option) => (
                              <div
                                key={option}
                                className={`cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-sky-50 transition-colors ${
                                  field.value === option ? 'bg-sky-100 text-sky-900' : 'text-gray-900'
                                }`}
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
                        {errors.projectType && (
                          <p className="mt-1 text-sm text-red-600">{errors.projectType.message}</p>
                        )}
                      </div>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">Square Feet</label>
                    <Controller
                      name="area"
                      control={control}
                      render={({ field }) => (
                        <div className="relative">
                          <div className="absolute top-4 left-0 pl-3 flex items-center pointer-events-none">
                            <Layers size={18} className="text-gray-400" />
                          </div>
                          <input
                            {...field}
                            type="number"
                            id="area"
                            placeholder="1500"
                            min="1"
                            className={`pl-10 block w-full rounded-lg border shadow-sm focus:ring-sky-500 focus:border-sky-500 p-3 transition-colors ${
                              errors.area ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400 focus:bg-white'
                            }`}
                            disabled={loading}
                          />
                          {errors.area && (
                            <p className="mt-1 text-sm text-red-600">{errors.area.message}</p>
                          )}
                        </div>
                      )}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="floor" className="block text-sm font-medium text-gray-700 mb-1">Floors</label>
                    <Controller
                      name="floor"
                      control={control}
                      render={({ field }) => (
                        <div className="relative">
                          <div className="absolute top-4 left-0 pl-3 flex items-center pointer-events-none">
                            <Building size={18} className="text-gray-400" />
                          </div>
                          <input
                            {...field}
                            type="number"
                            id="floor"
                            placeholder="2"
                            min="1"
                            className={`pl-10 block w-full rounded-lg border shadow-sm focus:ring-sky-500 focus:border-sky-500 p-3 transition-colors ${
                              errors.floor ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400 focus:bg-white'
                            }`}
                            disabled={loading}
                          />
                          {errors.floor && (
                            <p className="mt-1 text-sm text-red-600">{errors.floor.message}</p>
                          )}
                        </div>
                      )}
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={handlePreviousStep}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
                  disabled={loading}
                >
                  <ChevronDown size={18} className="mr-2 rotate-90" />
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 font-medium disabled:bg-sky-300 disabled:cursor-not-allowed transition-colors"
                  disabled={loading}
                >
                  Next 
                  <ChevronDown size={18} className="ml-2 -rotate-90" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Features & Additional Information */}
          {formStep === 3 && (
            <div className="space-y-2">
              <div className="space-y-2">
                {/* Features of Interest */}
                <div className="dropdown-container">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Features of Interest *</label>
                  <Controller
                    name="featuresOfInterest"
                    control={control}
                    render={({ field }) => (
                      <div className="relative">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!loading) toggleDropdown('featuresOfInterest');
                          }}
                          className={`relative w-full bg-white border rounded-lg shadow-sm pl-3 pr-10 py-3 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition-colors ${
                            errors.featuresOfInterest ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                          } ${loading ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                          disabled={loading}
                        >
                          <div className="flex items-center">
                            <Shield size={18} className="text-gray-400 mr-2" />
                            <span className={field.value?.length > 0 ? 'text-gray-900' : 'text-gray-500'}>
                              {field.value?.length > 0 
                                ? `${field.value.length} feature${field.value.length > 1 ? 's' : ''} selected` 
                                : 'Select features'}
                            </span>
                          </div>
                          <span className="absolute top-4 right-0 flex items-center pr-2 pointer-events-none">
                            <ChevronDown size={18} className={`text-gray-400 transition-transform ${showDropdown.featuresOfInterest ? 'rotate-180' : ''}`} />
                          </span>
                        </button>

                        {showDropdown.featuresOfInterest && (
                          <div className="absolute z-20 mt-1 w-full bg-white shadow-lg rounded-md py-1 max-h-60 overflow-auto ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {featuresOptions.map((option) => (
                              <div
                                key={option}
                                className={`cursor-pointer select-none relative py-2 pl-8 pr-4 hover:bg-sky-50 transition-colors ${
                                  field.value?.includes(option) ? 'bg-sky-100' : ''
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleMultiSelectOption('featuresOfInterest', option);
                                }}
                              >
                                <input
                                  type="checkbox"
                                  checked={field.value?.includes(option) || false}
                                  onChange={() => {}}
                                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-sky-600 focus:ring-sky-500 h-4 w-4 rounded"
                                />
                                <span className="text-gray-900">{option}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {errors.featuresOfInterest && (
                          <p className="mt-1 text-sm text-red-600">{errors.featuresOfInterest.message}</p>
                        )}
                      </div>
                    )}
                  />
                </div>

                {/* Media / Entertainment */}
                <div className="dropdown-container">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Media / Entertainment</label>
                  <Controller
                    name="mediaEntertainment"
                    control={control}
                    render={({ field }) => (
                      <div className="relative">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!loading) toggleDropdown('mediaEntertainment');
                          }}
                          className={`relative w-full bg-white border border-gray-300 rounded-lg shadow-sm pl-3 pr-10 py-3 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 hover:border-gray-400 transition-colors ${
                            loading ? 'bg-gray-100 cursor-not-allowed' : ''
                          }`}
                          disabled={loading}
                        >
                          <div className="flex items-center">
                            <Music size={18} className="text-gray-400 mr-2" />
                            <span className={field.value?.length > 0 ? 'text-gray-900' : 'text-gray-500'}>
                              {field.value?.length > 0 
                                ? `${field.value.length} option${field.value.length > 1 ? 's' : ''} selected` 
                                : 'Select options (optional)'}
                            </span>
                          </div>
                          <span className="absolute top-4 right-0 flex items-center pr-2 pointer-events-none">
                            <ChevronDown size={18} className={`text-gray-400 transition-transform ${showDropdown.mediaEntertainment ? 'rotate-180' : ''}`} />
                          </span>
                        </button>

                        {showDropdown.mediaEntertainment && (
                          <div className="absolute z-20 mt-1 w-full bg-white shadow-lg rounded-md py-1 max-h-60 overflow-auto ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {mediaOptions.map((option) => (
                              <div
                                key={option}
                                className={`cursor-pointer select-none relative py-2 pl-8 pr-4 hover:bg-sky-50 transition-colors ${
                                  field.value?.includes(option) ? 'bg-sky-100' : ''
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleMultiSelectOption('mediaEntertainment', option);
                                }}
                              >
                                <input
                                  type="checkbox"
                                  checked={field.value?.includes(option) || false}
                                  onChange={() => {}}
                                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-sky-600 focus:ring-sky-500 h-4 w-4 rounded"
                                />
                                <span className="text-gray-900">{option}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  />
                </div>

                {/* Additional Details */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                  <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none">
                          <FileText size={18} className="text-gray-400" />
                        </div>
                        <textarea
                          {...field}
                          id="message"
                          placeholder="Please provide any other details that might be helpful..."
                          rows="4"
                          className={`pl-10 block w-full rounded-lg border shadow-sm focus:ring-sky-500 focus:border-sky-500 p-3 transition-colors resize-none ${
                            errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400 focus:bg-white'
                          }`}
                          disabled={loading}
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                        )}
                      </div>
                    )}
                  />
                </div>
              </div>
              
              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={handlePreviousStep}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
                  disabled={loading}
                >
                  <ChevronDown size={18} className="mr-2 rotate-90" />
                  Back
                </button>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
                    disabled={loading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 font-medium disabled:bg-sky-300 disabled:cursor-not-allowed transition-colors"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader size={18} className="mr-2 animate-spin" />
                        Processing
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Submit Inquiry
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