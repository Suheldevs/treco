import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Home from '../assets/Home/home-automation.webp'
import light from '../assets/Home/lighting.webp'
import audio from '../assets/Home/audio.webp'


const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Smart Home Automation",
      subtitle: "Transform your living space with intelligent control systems",
      image: Home,
      features: ["Touchless Control", "Energy Efficient", "Voice Activated"]
    },
    {
      title: "Advanced Lighting Solutions",
      subtitle: "Precision lighting that adapts to your lifestyle",
      image: light,
      features: ["Mood Settings", "Schedule Control", "Energy Monitoring"]
    },
    {
      "title": "Immersive Audio-Visual Experience",
      "subtitle": "Enhance your spaces with smart lighting and high-fidelity sound",
      "image": audio,
      "features": ["Smart Lighting Sync", "High-Quality Surround Sound", "Seamless Device Integration"]
    }
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleScrollDown = ()=>{
    window.scroll({
      top:600
    })
  }

  return (
    <div className="relative lg:h-[90vh] h-[85vh] w-full overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
          <img 
            src={slide.image} 
            loading='eager'
            alt={slide.title} 
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            {/* Animated content for each slide */}
            {slides.map((slide, index) => (
              <div 
                key={index} 
                className={`transition-all duration-1000 transform ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8 absolute'
                }`}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3">
                  {slide.title}
                </h1>
                <div className="w-24 h-1 bg-sky-500 mb-6"></div>
                <p className="text-xl md:text-2xl text-gray-200 mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {slide.features.map((feature, idx) => (
                    <span 
                      key={idx} 
                      className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Action buttons - static across slides */}
            <div className="flex flex-col lg:text-left text-center sm:flex-row gap-4">
              <Link aria-label='Explore Products' title='Explore Products' to='/products'  className="bg-sky-500 hover:bg-blue-500 text-black px-8 py-3 rounded-full text-lg font-medium transition-colors">
              Explore Products
              </Link>
              <Link aria-label='About Treco' title='About Treco' to='/about' className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-blue-900 transition-colors">
                About Treco
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute lg:bottom-10 bottom-5 lg:right-10 right-2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-sky-500 w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating icon */}
      <div className="absolute hidden lg:block top-10 right-10 z-30">
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
      </div>

      {/* Scroll indicator */}
      <div onClick={handleScrollDown} className="absolute hidden bottom-6 left-1/2 transform -translate-x-1/2 z-20 lg:flex flex-col items-center animate-bounce duration-1000">
        <span className="text-white text-sm mb-1">Scroll Down</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );



};

export default HeroSection;