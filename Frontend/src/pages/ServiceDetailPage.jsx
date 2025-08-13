import { useEffect, useState } from 'react';
import { 
  Home, Briefcase, Building2, Film, DoorOpen, ShieldAlert, Network, 
  ChevronRight, Settings, ThumbsUp, Zap, Clock, Wifi, Shield,
  Factory, Heart, Cpu
} from 'lucide-react';

import servicesData from '../data/ServicesData';
import { useParams } from 'react-router-dom';


export default function DynamicServices() {
    const { slug } = useParams();
  const [selectedService, setSelectedService] = useState(servicesData[0]);
  const [hovered, setHovered] = useState(null);

  const benefits = [
    { icon: <ThumbsUp />, title: "Convenience", description: "Control your entire system with a single tap" },
    { icon: <Zap />, title: "Energy Efficiency", description: "Reduce energy consumption and lower utility bills" },
    { icon: <Clock />, title: "Time Saving", description: "Automate routine tasks and save valuable time" },
    { icon: <Wifi />, title: "Remote Access", description: "Monitor and control your system from anywhere" }
  ];

  
  useEffect(() => {
    if (slug && servicesData?.length) {
      const service = servicesData.find(s => s.slug === slug);
      if (service) {
        setSelectedService(service);
      }
    }
  }, [slug, servicesData]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Service Selection Header
      <div className="bg-gray-900 text-white p-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Select a Service</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceChange(service.slug)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  selectedService.slug === service.slug
                    ? 'border-white bg-white/10'
                    : 'border-gray-600 hover:border-gray-400 hover:bg-gray-800'
                }`}
              >
                <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${service.iconBg} ${service.iconColor}`}>
                  {service.icon}
                </div>
                <p className="text-sm font-medium text-center">{service.title}</p>
              </button>
            ))}
          </div>
        </div>
      </div> */}

      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${selectedService.color} text-white`}>
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="flex items-center mb-4">
                <div className={`w-16 h-16 rounded-full mr-4 flex items-center justify-center ${selectedService.iconBg} ${selectedService.iconColor}`}>
                  {selectedService.icon}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">{selectedService.title}</h1>
              </div>
              <p className="text-lg md:text-xl mb-8">{selectedService.description}</p>
              
               <a href='#solution' className="inline-flex bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300 items-center">
                Explore Solutions <ChevronRight className="ml-2" size={20} />
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center bg-white/20 rounded-full">
                  <div className="text-6xl">
                    {selectedService.icon}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Intelligent Control</h3>
                  <p>Seamlessly integrate and manage all your smart systems from one intuitive interface.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
            About {selectedService.title}
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              {selectedService.description} Our solutions are designed to provide seamless integration and intelligent functionality that adapts to your specific needs and requirements.
            </p>
            <p className="text-lg text-gray-700 mb-10">
              We leverage cutting-edge technology and innovative approaches to deliver systems that are not only efficient but also user-friendly and future-ready.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className={`p-3 rounded-lg ${selectedService.iconBg} ${selectedService.iconColor}`}>
                    {benefit.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-xl text-gray-800">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={`${selectedService.iconBg} border-l-4 border-current p-6 rounded-r-lg ${selectedService.iconColor}`}>
              <h4 className="font-bold mb-2">Why Choose Our {selectedService.title} Solutions?</h4>
              <p>
                Our expertise in {selectedService.title.toLowerCase()} ensures that you get the most advanced, reliable, and cost-effective solutions tailored to your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Cards Section */}
      {selectedService.solutions && selectedService.solutions.length > 0 && (
        <section className="py-10 bg-gray-50" id='solution'>
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
              Our {selectedService.title} Solutions
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {selectedService.solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className={`h-2 ${hovered === index ? `bg-gradient-to-r ${selectedService.color}` : selectedService.iconBg} transition-all duration-300`}></div>
                  <div className="p-6">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                      hovered === index 
                        ? `bg-gradient-to-r ${selectedService.color} text-white` 
                        : `${selectedService.iconBg} ${selectedService.iconColor}`
                    }`}>
                      {solution.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{solution.title}</h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}