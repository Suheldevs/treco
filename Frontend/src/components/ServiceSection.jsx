import React, { useState, useEffect } from 'react';
import { Home, Bot, Brain, Factory, Wifi, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
const ServiceCard = ({ title, description, icon: Icon, index, slug }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);
    
    return () => clearTimeout(timer);
  }, [index]);

  // Generate a unique gradient for each card
  const gradients = [
    'from-sky-600 to-cyan-400',
    'from-purple-600 to-pink-500',
    'from-green-500 to-emerald-400',
    'from-amber-500 to-orange-400',
    'from-red-500 to-rose-400',
    'from-indigo-600 to-blue-400'
  ];

  return (
    <div 
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative border-slate-800 border bg-gray-900 rounded-2xl overflow-hidden group h-full`}>
        {/* Animated background effect */}
        <div className={`absolute inset-0  bg-gradient-to-br ${gradients[index % gradients.length]} opacity-100 group-hover:opacity-0 transition-opacity duration-500`}></div>
        
        {/* Animated border */}
        <div className={`absolute inset-0 rounded-2xl transition-all duration-700 ${
          isHovered ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-0.5' : 'p-0'
        }`}>
          <div className="absolute inset-0 bg-gray-900 rounded-2xl"></div>
        </div>
        
        <div className="relative p-8 z-10 h-full flex flex-col">
          {/* Icon with floating animation */}
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
            isHovered ? 'animate-pulse' : ''
          } bg-gradient-to-br ${gradients[index % gradients.length]} mb-6`}>
            <Icon className={`text-white w-8 h-8 ${isHovered ? 'animate-bounce' : ''}`} />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
            {title}
          </h3>
          
          <p className="text-gray-300 mb-6 flex-grow">
            {description}
          </p>
          
          {/* Animated button */}
          <div className={`transform transition-all duration-500 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'
          }`}>
            <Link to={slug} className={`group inline-flex items-center text-white font-medium py-2 px-4 rounded-lg bg-gradient-to-r ${gradients[index % gradients.length]}`}>
              <span>Explore</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 ml-2 transition-transform duration-300 ${isHovered ? 'transform translate-x-1' : ''}`} 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    setIsInView(true);
  }, []);

  const services = [
    {
      title: "Home Automation",
      description: "Highly efficient, intelligent, safe and secure smart home technology for smart people.",
      slug:'/home-automation',
      icon: Home,
    },
    {
      title: "Robotics System",
      description: "Research on specific robotics challenges to build more sophisticated, efficient and commercially viable products.",
      slug:'/home-automation',
      icon: Bot ,
    },
    {
      title: "A MAD  K&E Sharing",
      description: "We're involved in interesting Mechatronics research projects to develop useful commercially viable products.",
      slug:'/home-automation',
      icon: Brain,
    },
    {
      title: "Industrial Automation",
      description: "An integrated, intelligent, flexible and low-cost industrial automation platform that promotes a safe and efficient industrial environment.",
      slug:'/home-automation',
      icon: Factory,
    },
    {
      title: "Internet of Things",
      description: "We research interesting IoT projects to utilize its magical power to change human life and promote a safe and secure environment.",
      slug:'/home-automation',
      icon: Wifi,
    },
    {
      title: "Social Service",
      description: "We understand our responsibility towards the nation and support all initiatives for social betterment.",
      slug:'/home-automation',
      icon: Heart,
    },
  ];

  return (
    <section className="lg:py-14 md:py-12 py-10 bg-gray-900 relative overflow-hidden">
      {/* Tech-inspired background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500 filter blur-3xl"></div>
      </div>
      
      {/* Circuit-like lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
        <div className="absolute top-1/4 right-1/5 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-sky-500">Innovative</span> Services
          </h2>
         
          <div className="h-2 w-1/3 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full mb-6 mx-auto"></div>
          {/* <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div> */}
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Cutting-edge automation solutions powered by the latest technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
              slug= {service?.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;