import React, { useState } from 'react'
import { faqItems } from '../data/FaqData'
import { ArrowRight, Minus, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

function FaqItem() {
      const [openIndex, setOpenIndex] = useState(null);
      const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
  return (
    <div className='py-12'>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, installation process, and support options. Can't find what you're looking for? Contact us directly.
          </p>
        </div>
           <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 max-w-7xl mx-auto">
          {faqItems?.slice(0,6).map((item, index) => (
            <div 
              id={`faq-${faqItems.findIndex(faq => faq.question === item.question)}`}
              key={index} 
              className="self-start bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border-l-4 border-transparent hover:border-l-blue-500"
            >
              <button
              title='Toggle answer'
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center transition-colors focus:outline-none group"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors pr-4">
                  {item.question}
                </h3>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover:bg-blue-100 transition-colors flex-shrink-0`}>
                  {openIndex === index ? (
                    <Minus size={18} className="text-blue-600" />
                  ) : (
                    <Plus size={18} className="text-gray-600 group-hover:text-blue-600" />
                  )}
                </div>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 py-4 opacity-100' 
                    : 'max-h-0 py-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                
                {/* Category badge */}
                <div className="mt-4 flex justify-between items-center">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {faqItems.find(cat => cat.id === item.category)?.name || 'General'}
                  </span>
                  
                  {/* Share button */}
                  <button 
                    className="text-sm text-gray-500 hover:text-blue-600 flex items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Copy URL with anchor to clipboard
                      const url = `${window.location.href.split('#')[0]}#faq-${faqItems.findIndex(faq => faq.question === item.question)}`;
                      navigator.clipboard.writeText(url);
                      alert('Link copied to clipboard!');
                    }}
                  >
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
          
        <div className='flex mt-8 justify-center items-center'>
        <Link
                   to='/faq'
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-colors shadow-md hover:shadow-lg"
                  >
                    Read More Questions
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                  </div>
    </div>
  )
}

export default FaqItem