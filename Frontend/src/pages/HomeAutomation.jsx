import { useState } from 'react';
import { Home, Briefcase, Building2, Film, DoorOpen, ShieldAlert, Network, ChevronRight, Settings, ThumbsUp, Zap, Clock, Wifi, Shield } from 'lucide-react';

export default function HomeAutomation() {
  const [hovered, setHovered] = useState(null);

  const solutions = [
    { 
      title: "Smart Home Solutions", 
      icon: <Home />, 
      description: "Transform your living space with intelligent systems that enhance comfort and convenience."
    },
    { 
      title: "Smart Office Solutions", 
      icon: <Briefcase />, 
      description: "Boost productivity and efficiency with automated workplace technologies."
    },
    { 
      title: "Smart Hospitality", 
      icon: <Building2 />, 
      description: "Elevate guest experiences with seamless, connected hospitality solutions."
    },
    { 
      title: "Smart Audio Video Solution", 
      icon: <Film />, 
      description: "Immersive entertainment systems with integrated audio and visual experiences."
    },
    { 
      title: "Smart Entrance Solution", 
      icon: <DoorOpen />, 
      description: "Secure and convenient access control for your property."
    },
    { 
      title: "Smart Intrusion & Security Solution", 
      icon: <ShieldAlert />, 
      description: "Comprehensive protection systems to keep your property safe."
    },
    { 
      title: "Smart Networking Solution", 
      icon: <Network />, 
      description: "Robust connectivity infrastructure for all your smart devices."
    }
  ];

  const benefits = [
    { icon: <ThumbsUp />, title: "Convenience", description: "Control your entire home with a single tap" },
    { icon: <Zap />, title: "Energy Efficiency", description: "Reduce energy consumption and lower utility bills" },
    { icon: <Clock />, title: "Time Saving", description: "Automate routine tasks and save valuable time" },
    { icon: <Wifi />, title: "Remote Access", description: "Monitor and control your home from anywhere" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-500 to-sky-400 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Space with Smart Automation</h1>
              <p className="text-lg md:text-xl mb-8">Experience the future of living with our integrated smart solutions that make your home more comfortable, secure, and efficient.</p>
              <a href='#solution' className="inline-flex bg-white text-sky-500 font-semibold py-3 px-6 rounded-lg hover:bg-sky-50 transition duration-300 items-center">
                Explore Solutions <ChevronRight className="ml-2" size={20} />
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                <Settings className="w-32 h-32 text-white mb-4 mx-auto animate-spin duration-[1000ms]" style={{ animationDelay: '1s' }}/>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Intelligent Control</h3>
                  <p>Seamlessly integrate and manage all your smart devices from one intuitive interface.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Home Automation Section */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">What is Home Automation?</h2>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Home automation refers to the automatic control of electronic devices in your home. These devices are connected to the Internet, which allows them to be controlled remotely. With home automation, devices can trigger one another so you don't have to control them manually.
            </p>
            <p className="text-lg text-gray-700 mb-10">
              Modern systems are built on the Internet of Things (IoT) concept, enabling seamless communication between all your home devices and providing intelligent functionality that adapts to your preferences and lifestyle patterns.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg text-sky-600">
                    {benefit.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-xl text-gray-800">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-sky-50 border-l-4 border-sky-500 p-6 rounded-r-lg">
              <h4 className="font-bold text-sky-800 mb-2">Did you know?</h4>
              <p className="text-sky-700">
                Smart home technology is expected to reach a market value of over $135 billion by 2025, as more households adopt integrated automation solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Cards Section */}
      <section className="py-10 bg-gray-50 scroll-m-20" id='solution'>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Our Smart Solutions</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className={`h-2 ${hovered === index ? 'bg-sky-600' : 'bg-sky-400'} transition-colors duration-300`}></div>
                <div className="p-6">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${hovered === index ? 'bg-sky-600 text-white' : 'bg-sky-100 text-sky-600'}`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                  {/* <button className={`flex items-center text-sm font-medium ${hovered === index ? 'text-sky-600' : 'text-sky-500'} transition-colors duration-300`}>
                    Learn more <ChevronRight className="ml-1" size={16} />
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="bg-gradient-to-r from-sky-400 to-sky-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make Your Space Smarter?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Discover how our automation solutions can transform your everyday living and working experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sky-600 font-semibold py-3 px-8 rounded-lg hover:bg-sky-50 transition duration-300">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}