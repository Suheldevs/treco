import { useState } from 'react';
import { Tv, Speaker, Headphones, Video, MonitorSpeaker, Mic, Radio, Film, ChevronRight, Play, Volume2, Music, Monitor, Smartphone } from 'lucide-react';

export default function AudioVisual() {
  const [hovered, setHovered] = useState(null);

  const products = [
    { 
      title: "Smart TVs & Displays", 
      icon: <Tv />, 
      description: "Crystal-clear 4K and 8K displays with smart connectivity features for immersive viewing."
    },
    { 
      title: "Premium Sound Systems", 
      icon: <Speaker />, 
      description: "Room-filling audio solutions with precision acoustics and wireless connectivity."
    },
    { 
      title: "Wireless Headphones", 
      icon: <Headphones />, 
      description: "High-fidelity personal audio with noise cancellation and extended battery life."
    },
    { 
      title: "Projectors & Screens", 
      icon: <Video />, 
      description: "Transform any space into a home theater with our state-of-the-art projection systems."
    },
    { 
      title: "Smart Soundbars", 
      icon: <MonitorSpeaker />, 
      description: "Sleek, powerful audio enhancements for your TV with voice control capabilities."
    },
    { 
      title: "Audio Recording Equipment", 
      icon: <Mic />, 
      description: "Professional-grade microphones and mixers for perfect audio capture."
    },
    { 
      title: "Multi-Room Audio Systems", 
      icon: <Radio />, 
      description: "Synchronized, whole-home audio solutions for seamless listening experiences."
    }
  ];

  const features = [
    { icon: <Play />, title: "Immersive Experience", description: "Theater-quality visuals and audio in your own space" },
    { icon: <Volume2 />, title: "Crystal Clear Sound", description: "Advanced acoustics technology for superior audio quality" },
    { icon: <Smartphone />, title: "Smart Integration", description: "Control all devices seamlessly with your smartphone" },
    { icon: <Monitor />, title: "Stunning Visuals", description: "4K and 8K resolution for lifelike picture quality" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-400 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col gap-4 md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Audio Visual Solutions</h1>
              <p className="text-lg md:text-xl mb-8">Experience entertainment like never before with our cutting-edge audio and visual technology that transforms how you see and hear the world.</p>
              <button className="bg-white text-sky-600 font-semibold py-3 px-6 rounded-lg hover:bg-sky-50 transition duration-300 flex items-center">
                Explore Products <ChevronRight className="ml-2" size={20} />
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                <Film className="w-32 h-32 text-white mb-4 mx-auto" />
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Cinematic Experience</h3>
                  <p>Bring the theater experience home with our premium audio visual systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Audio Visual Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">The Future of Audio Visual Technology</h2>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Modern audio visual technology has transformed entertainment, communication, and information sharing. Our premium systems combine cutting-edge hardware with intelligent software to deliver experiences that engage all your senses.
            </p>
            <p className="text-lg text-gray-700 mb-10">
              From crystal-clear 8K displays to spatial audio systems that place you in the center of the action, our products represent the pinnacle of what's possible in home and commercial audio visual solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg text-sky-600">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-xl text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-sky-50 border-l-4 border-sky-500 p-6 rounded-r-lg">
              <h4 className="font-bold text-sky-800 mb-2">Why Choose Premium?</h4>
              <p className="text-sky-700">
                Our audio visual products aren't just about specifications—they're about creating meaningful experiences that bring people together, enhance your environment, and provide years of reliable entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Cards Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Our Audio Visual Products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className={`h-2 ${hovered === index ? 'bg-sky-600' : 'bg-sky-400'} transition-colors duration-300`}></div>
                <div className="p-6">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${hovered === index ? 'bg-sky-600 text-white' : 'bg-sky-100 text-sky-600'}`}>
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className={`flex items-center text-sm font-medium ${hovered === index ? 'text-sky-600' : 'text-sky-500'} transition-colors duration-300`}>
                    View details <ChevronRight className="ml-1" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product Showcase */}
      {/* <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Featured Technology</h2>
          
          <div className="flex flex-col lg:flex-row items-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="inline-block bg-sky-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">NEW ARRIVAL</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">UltraSound 360° Spatial Audio System</h3>
              <p className="text-gray-700 mb-6">
                Experience sound like never before with our revolutionary spatial audio system that creates a three-dimensional soundscape around you. Feel every note, every sound effect as if you were right there in the action.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-2"></div>
                  24-bit/96kHz high-resolution audio
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-2"></div>
                  AI-powered room calibration
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-2"></div>
                  Wireless connectivity with ultra-low latency
                </li>
              </ul>
              <button className="bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-sky-700 transition duration-300 flex items-center">
                Learn more <ChevronRight className="ml-1" size={16} />
              </button>
            </div>
            <div className="lg:w-1/2 p-6 flex justify-center">
              <div className="bg-white rounded-xl shadow-lg p-6 relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center text-white">
                  <Music size={32} />
                </div>
                <div className="pt-8">
                  <div className="w-64 h-64 bg-sky-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Speaker className="w-32 h-32 text-sky-600" />
                  </div>
                  <div className="text-center mt-4">
                    <span className="text-gray-500 text-sm uppercase tracking-wide">Starting at</span>
                    <p className="text-3xl font-bold text-gray-800">$899.99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="bg-gradient-to-r from-sky-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Superior Audio and Visual Quality</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Visit our showroom to experience our premium audio visual products in person, or schedule a virtual consultation with our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sky-600 font-semibold py-3 px-8 rounded-lg hover:bg-sky-50 transition duration-300">
              Find a Showroom
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition duration-300">
              Book a Consultation
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}