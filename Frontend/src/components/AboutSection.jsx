import React from 'react';

const AboutSection = () => {
  return (
    <section className="relative lg:py-14 md:py-12 py-10 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* About Header */}
        <div className="  mb-8 overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full -translate-y-1/2 -translate-x-1/4 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full translate-y-1/3 translate-x-1/4 opacity-70"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center">
          {/* <span className="text-sm font-bold tracking-widest uppercase text-blue-500 mb-4 block">Discover Our Story</span> */}
          
          <h2 className="inline-block relative">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              About Treco India
            </span>
            <div className="h-2 w-2/3 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mt-2 mx-auto"></div>
          </h2>
          
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Leading the automation revolution with innovative solutions and world-class expertise
          </p>
        </div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute -z-10 left-1/2 top-0 h-16 w-16 rounded bg-blue-200/30 blur-xl"></div>
      <div className="absolute -z-10 right-1/4 bottom-1/4 h-24 w-24 rounded-full bg-blue-300/20 blur-xl"></div>
    </div>
        
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image/Visual */}
        {/* Left Side - Image/Visual */}
<div className="relative">
  <div className="aspect-square rounded-2xl bg-gradient-to-tr from-indigo-600 to-blue-600 p-1 shadow-lg">
    <div className="h-full w-full bg-gradient-to-tr from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center overflow-hidden">
      {/* Using placeholder image instead of grid of icons */}
      <img 
        src="https://picsum.photos/400/400?random=1" 
        alt="Feature illustration" 
        className="w-full h-full object-cover rounded-xl  hover:translate-2 transition-all duration-500 ease-in-out"
      />
    </div>
  </div>
  
  {/* Floating elements - kept from original design */}
  <div className="absolute -top-4 -right-4 bg-blue-600 rounded-full p-3 shadow-lg">
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  </div>
  <div className="absolute -bottom-4 -left-4 bg-blue-500 rounded-full p-3 shadow-lg">
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  </div>
</div>
          
          {/* Right Side - Text Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-800">Revolutionizing Home Automation with Machine Learning</h3>
            <p className="text-gray-600 mb-6">
              At Treco, we're not just creating smart homes—we're building intelligent living spaces that 
              understand and anticipate your needs through our cutting-edge Lightning MLC technology.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-gray-800">Machine Learning Core</h4>
                  <p className="text-gray-600">Our proprietary Lightning MLC adapts to your lifestyle, creating personalized automation routines that evolve as your habits change.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-gray-800">Human-Centered Design</h4>
                  <p className="text-gray-600">Technology should serve people, not the other way around. Our solutions prioritize intuitive interfaces and seamless experiences.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-gray-800">Lightning Fast Performance</h4>
                  <p className="text-gray-600">Our advanced processing ensures your smart home system responds instantly to both commands and environmental changes.</p>
                </div>
              </div>
            </div>
            
            <div className="inline-flex rounded-md shadow">
              <a href="#our-story" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300">
                Discover Our Story
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;