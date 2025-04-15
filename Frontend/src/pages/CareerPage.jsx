import React, { useState } from 'react';
import { 
  Briefcase, 
  Users, 
  Trophy, 
  Clock, 
  Upload, 
  ChevronRight, 
  MapPin,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import career from '../assets/career.jpg'
import axios from 'axios'
const CareerPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    jobProfile: '',
    resume: null
  });
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });
  
  const jobPositions = [
    { id: 1, title: "Automation Engineer", department: "Engineering", location: "Remote" },
    { id: 2, title: "Home Automation Technician", department: "Development", location: "Bangalore" },
    { id: 3, title: "Smart Home Installer", department: "Design", location: "Hybrid" },
    { id: 4, title: "Production Engineer", department: "Operations", location: "Mumbai" },
    { id: 5, title: "Production Engineer", department: "R&D", location: "Pune" },
    { id: 5, title: "Area Sales Manager", department: "R&D", location: "Pune" },
    { id: 5, title: "Other", department: "R&D", location: "Pune" },
  ];
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Validate form (simplified)
    if (!formData.fullName || !formData.email || !formData.phone || !formData.jobProfile || !formData.resume) {
      setFormStatus({ submitted: false, error: true });
      return;
    }
    
const res = await axios.post(`${backendUrl}/career/save`,formData,{headers:{'Content-Type':'multipart/form-data'}})

    alert('Application Submited Success fully')
    // Show success message
    setFormStatus({ submitted: true, error: false });
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      jobProfile: '',
      resume: null
    });
    
    // Reset file input
    document.getElementById('resumeUpload').value = '';
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#00a1e8] to-sky-400 text-white">
        <div className="container mx-auto px-4 py-24 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="max-w-3xl relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team at Treco</h1>
            <p className="text-xl md:text-2xl text-sky-100 mb-8">Help us build the future of automation technology and transform industries worldwide.</p>
            {/* <a href="#apply" className="inline-flex items-center px-6 py-3 bg-white text-sky-600 font-medium rounded-lg shadow-lg hover:bg-sky-50 transition duration-300">
              View Open Positions
              <ChevronRight size={20} className="ml-2" />
            </a> */} 
          </div>
        </div>
      </div>
      
      {/* Values Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Join a team that's passionate about innovation and committed to creating world-class automation solutions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-sky-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-sky-600 rounded-lg flex items-center justify-center mb-6">
                <Trophy size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Challenging Projects</h3>
              <p className="text-gray-600">Work on cutting-edge automation technologies that solve real-world problems for diverse industries.</p>
            </div>
            
            <div className="bg-sky-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-sky-600 rounded-lg flex items-center justify-center mb-6">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaborative Culture</h3>
              <p className="text-gray-600">Join a supportive team where your ideas matter and everyone contributes to our shared success.</p>
            </div>
            
            <div className="bg-sky-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-sky-600 rounded-lg flex items-center justify-center mb-6">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Work-Life Balance</h3>
              <p className="text-gray-600">Flexible schedules, remote options, and a culture that respects your time outside of work.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Open Positions */}
      {/* <div className="py-12 bg-gray-50" id="apply">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find the perfect role that matches your skills and career goals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {jobPositions.map(job => (
              <div key={job.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <p className="text-gray-600">{job.department}</p>
                  </div>
                  <span className="flex items-center text-sm text-gray-500">
                    <MapPin size={16} className="mr-1" />
                    {job.location}
                  </span>
                </div>
                <div className="mt-6 flex justify-end">
                  <a href="#application-form" className="text-sky-600 font-medium flex items-center hover:text-sky-800">
                    Apply Now
                    <ChevronRight size={18} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      
      {/* Application Form */}
      <div className="py-12 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 bg-white" id="application-form">
        <div className='hidden lg:block'>
            <img src={career} className='rounded-3xl h-[800px]'/>
            </div>
        <div className="container mx-auto px-4" id='contact-form'>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply Now</h2>
              <p className="text-gray-600">Fill out the form below to apply for a position at Treco.</p>
            </div>
            
            {formStatus.submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Application Submitted!</h3>
                <p className="text-gray-600 mb-4">Thank you for your interest in joining Treco. We'll review your application and get back to you soon.</p>
                <button 
                  onClick={() => setFormStatus({ submitted: false, error: false })}
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
                {formStatus.error && (
                  <div className="bg-red-50 z-10 border border-red-200 rounded-lg p-4 mb-6 flex items-start">
                    <AlertCircle size={20} className="text-red-500 mr-3 mt-0.5" />
                    <p className="text-red-700">Please fill out all required fields before submitting.</p>
                  </div>
                )}
                
                <div className="mb-6">
                  <label htmlFor="fullName" className="block mb-2 font-medium text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="^[6-9]\d{9}$"
                      title="Please enter a valid 10-digit phone number starting with 6 to 9."
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="jobProfile" className="block mb-2 font-medium text-gray-700">Select Job Profile *</label>
                  <select
                    id="jobProfile"
                    name="jobProfile"
                    value={formData.jobProfile}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                    required
                  >
                    <option value="" disabled>Select a position</option>
                    {jobPositions.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-8">
                  <label htmlFor="resumeUpload" className="block mb-2 font-medium text-gray-700">Resume Upload *</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      id="resumeUpload"
                      name="resume"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                    <label htmlFor="resumeUpload" className="cursor-pointer">
                      <div className="mx-auto w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-3">
                        <Upload size={20} className="text-sky-600" />
                      </div>
                      <p className="text-gray-600 mb-1">
                        {formData.resume ? formData.resume.name : "Drag and drop your resume or click to browse"}
                      </p>
                      <p className="text-sm text-gray-500">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                    </label>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button 
                    type="submit" 
                    className="px-8 py-3 bg-sky-600 text-white font-medium rounded-lg shadow hover:bg-sky-700 transition duration-300 focus:ring-4 focus:ring-sky-200"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer CTA */}
      <div className="bg-sky-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Don't See a Position That Fits?</h2>
          <p className="text-sky-200 mb-8 max-w-xl mx-auto">We're always looking for talented individuals. Send us your resume and we'll keep it on file for future opportunities.</p>
          <a href="mailto:careers@treco.in" className="inline-flex items-center px-6 py-3 bg-white text-sky-900 font-medium rounded-lg shadow-lg hover:bg-sky-50 transition duration-300">
            Contact Our Recruiting Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;