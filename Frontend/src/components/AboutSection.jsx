
import React from 'react';
import { Link } from 'react-router-dom';
// import about from '../assets/Home/about.jpg'
import about from '../assets/Home/a2.webp'
const AboutSection = () => {
  return (
    <section className="relative lg:py-14 md:py-12 py-10 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Keep the original header section which is already good */}
      <div className="absolute -z-10 top-0 left-0 w-64 h-64 bg-sky-100 rounded-full -translate-y-1/2 -translate-x-1/4 opacity-50"></div>
      <div className="absolute -z-10 bottom-0 right-0 w-96 h-96 bg-sky-50 rounded-full translate-y-1/3 translate-x-1/4 opacity-70"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center">
          <h2 className="inline-block relative">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-400">
              About Treco India
            </span>
            <div className="h-2 w-2/3 bg-gradient-to-r from-sky-500 to-sky-300 rounded-full mt-2 mx-auto"></div>
          </h2>
          
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Leading the automation revolution with innovative solutions and world-class expertise
          </p>
        </div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute -z-10 left-1/2 top-0 h-16 w-16 rounded bg-sky-200/30 blur-xl"></div>
      <div className="absolute -z-10 right-1/4 bottom-1/4 h-24 w-24 rounded-full bg-sky-300/20 blur-xl"></div>
      
      {/* Redesigned Main Content */}
      <div className="container mx-auto px-4 mt-8">
        {/* Vision Statement - Modern Text Block */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Revolutionizing Home Automation with Machine Learning
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Treco, we're not just creating smart homes—we're building intelligent living spaces that 
            understand and anticipate your needs through our cutting-edge Lightning MLC technology.
          </p>
        </div>
        
        {/* Three Column Feature Cards - Modern Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Feature Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
            <div className="bg-sky-100 p-4 rounded-xl inline-flex mb-6 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
              <svg className="w-8 h-8 text-sky-600 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-bold text-xl mb-3 text-gray-800">Machine Learning Core</h4>
            <p className="text-gray-600">Our proprietary Lightning MLC adapts to your lifestyle, creating personalized automation routines that evolve as your habits change.</p>
          </div>
          
          {/* Feature Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
            <div className="bg-sky-100 p-4 rounded-xl inline-flex mb-6 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
              <svg className="w-8 h-8 text-sky-600 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h4 className="font-bold text-xl mb-3 text-gray-800">Human-Centered Design</h4>
            <p className="text-gray-600">Technology should serve people, not the other way around. Our solutions prioritize intuitive interfaces and seamless experiences.</p>
          </div>
          
          {/* Feature Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
            <div className="bg-sky-100 p-4 rounded-xl inline-flex mb-6 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
              <svg className="w-8 h-8 text-sky-600 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-bold text-xl mb-3 text-gray-800">Lightning Fast Performance</h4>
            <p className="text-gray-600">Our advanced processing ensures your smart home system responds instantly to both commands and environmental changes.</p>
          </div>
        </div>
        
        {/* Modern Image & Text Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Modern Image Section with Overlapping Elements */}
          <div className="relative order-2 group md:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-300 rounded-3xl transform rotate-4 transition-all ease-in-out duration-500 group-hover:rotate-0"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={about} 
                // src="https://picsum.photos/400/400?random=1" 
                alt="Feature illustration" 
                className="w-full h-auto lg:h-[500px] object-cover hover:scale-105 transition-all duration-700 ease-in-out "
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute top-4 -right-4 bg-white rounded-full p-3 shadow-lg z-20 border-2 border-sky-600">
              <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg z-20 border-2 border-sky-600">
              <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
          </div>
          
          {/* Text Content with Modern Design */}
          <div className="order-1 md:order-2 text-justify">
            <h3 className="text-3xl font-bold mb-6 text-gray-800 text-left">Our Innovative Approach</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We combine cutting-edge technology with thoughtful design to create home automation systems 
              that truly enhance your daily life. Our team of experts works tirelessly to ensure that every 
              Treco solution delivers exceptional performance while remaining accessible and easy to use.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We combine cutting-edge technology with thoughtful design to create home automation systems 
              that truly enhance your daily life. Our team of experts works tirelessly to ensure that every 
              Treco solution delivers exceptional performance while remaining accessible and easy to use.
            </p>
            
            {/* Modern Stats Display */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center border border-gray-100 shadow-md p-4 bg-gray-50 rounded-xl">
                <span className="block text-3xl font-bold text-sky-600">98%</span>
                <span className="text-sm text-gray-500">Customer Satisfaction</span>
              </div>
              <div className="text-center border border-gray-100 shadow-md p-4 bg-gray-50 rounded-xl">
                <span className="block text-3xl font-bold text-sky-600">10+</span>
                <span className="text-sm text-gray-500">Years Experience</span>
              </div>
              <div className="text-center border border-gray-100 shadow-md p-4 bg-gray-50 rounded-xl">
                <span className="block text-3xl font-bold text-sky-600">5k+</span>
                <span className="text-sm text-gray-500">Homes Automated</span>
              </div>
            </div>
            
            {/* Modern CTA Button */}
            <div className="inline-flex rounded-lg shadow-lg">
              <Link to='/about' className="inline-flex group items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 transition-all duration-300">
                Discover Our Story
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;