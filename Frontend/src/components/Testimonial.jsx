import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Mukesh Verma",
      role: "Manufacturing Director",
      quote: "AutomateX transformed our production line with their cutting-edge solutions. Our efficiency increased by 40% within just three months of implementation.",
      rating: 5
    },
    {
      id: 2,
      name: "Aman Rathi",
      role: "Operations Manager", 
      quote: "From initial consultation to deployment, the AutomateX team demonstrated exceptional expertise. Their automation systems have dramatically reduced our operational costs.",
      rating: 5
    },
    {
      id: 3,
      name: "Rajat Yadav",
      role: "Small Business Owners",
      quote: "The customized workflow automation tools have revolutionized how we handle customer orders. AutomateX truly understood our unique business challenges.",
      rating: 5
    },
    {
      id: 4,
      name: "Rajiv Patel",
      role: "IT Director",
      quote: "Incredible technical knowledge and seamless integration capabilities. Our legacy systems now work perfectly with modern automation protocols!",
      rating: 5
    },
    {
      id: 5,
      name: "Elena Rodriguez",
      role: "Supply Chain VP",
      quote: "Professional, innovative, and truly transformative automation solutions that scaled with our growing business needs.",
      rating: 5
    }
  ];
  
  const [currentMobileTestimonial, setCurrentMobileTestimonial] = useState(0);
  const [currentDesktopStartIndex, setCurrentDesktopStartIndex] = useState(0);

  const nextMobileTestimonial = () => {
    setCurrentMobileTestimonial((prev) => 
      (prev + 1) % testimonials.length
    );
  };

  const prevMobileTestimonial = () => {
    setCurrentMobileTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextDesktopTestimonials = () => {
    setCurrentDesktopStartIndex((prev) => 
      (prev + 1) % (testimonials.length - 2)
    );
  };

  const prevDesktopTestimonials = () => {
    setCurrentDesktopStartIndex((prev) => 
      prev === 0 ? testimonials.length - 3 : prev - 1
    );
  };

  return (
    <div className="container mx-auto  py-4 scroll-m-20" id='testimonials' data-aos='fade-up'>
      <div className="bg-gray-50 rounded-3xl py-8 px-5 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-70"></div>
        
        {/* <div className="flex flex-col items-center text-center mb-12 relative z-10">
          <h2 className="text-2xl md:text-5xl font-bold mt-2 mb-4 messiri">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
        </div> */}
        <div className={`text-center mb-12 transform transition-all duration-1000
       `}>
          <span className="text-sky-600 font-medium uppercase tracking-wider mb-6">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-w tracking-tight">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Our Clients</span> Say
          </h2>
         
          <div className="h-2 w-1/3 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mb-6 mx-auto"></div>
        </div>
        
        {/* Mobile View - Single Testimonial */}
        <div className="block md:hidden">
          <div className="max-w-md mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className="text-yellow-400 fill-current" 
                  />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">
                "{testimonials[currentMobileTestimonial].quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <div  className="font-semibold">{testimonials[currentMobileTestimonial].name}</div>
                  <p className="text-sm text-gray-500">{testimonials[currentMobileTestimonial].role}</p>
                </div>
              </div>
            </div>
            
            {/* Mobile Navigation */}
            <div className="flex justify-center mt-6 space-x-4">
              <button 
              aria-label='Previous'
              title='Previous'
                onClick={prevMobileTestimonial}
                className="bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-200 transition"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
              aria-label='Next'
              title='Next'
                onClick={nextMobileTestimonial}
                className="bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-200 transition"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Mobile Dot Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMobileTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentMobileTestimonial 
                      ? 'bg-sky-600 w-6' 
                      : 'bg-sky-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Desktop View - Three Testimonials */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-8">
            {testimonials
              .slice(currentDesktopStartIndex, currentDesktopStartIndex + 3)
              .map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className="text-yellow-400 fill-current" 
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full pt-3 mr-4"><User/></div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          
          {/* Desktop Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevDesktopTestimonials}
              className=""
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextDesktopTestimonials}
              className=""
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;