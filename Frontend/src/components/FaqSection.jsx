import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Plus, Minus, ArrowRight } from 'lucide-react';
import {faqItems} from '../data/FaqData'
import { Link } from 'react-router-dom';
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchFocus, setSearchFocus] = useState(false);
  
  const faqCategories = [
    { id: 'all', name: 'All Questions' },
    { id: 'services', name: 'Our Services' },
    { id: 'installation', name: 'Installation' },
    { id: 'support', name: 'Support & Maintenance' },
    { id: 'technical', name: 'Technical Info' }
  ];
  
  // const faqItems = [
  //   {
  //     question: "Do you offer free consultations?",
  //     answer: "Yes! We offer free initial consultations to understand your needs and provide tailored recommendations for your home or business automation needs. Our experts will assess your requirements and provide a detailed proposal with no obligation.",
  //     category: "services",
  //     popular: true
  //   },
  //   {
  //     question: "What areas do you service?",
  //     answer: "We currently service the greater Innovation City area and surrounding suburbs within a 50-mile radius. For projects outside this area, please contact us to discuss special arrangements.",
  //     category: "services"
  //   },
  //   {
  //     question: "Do you provide installation services?",
  //     answer: "Absolutely! Our team of certified technicians handles everything from consultation to installation and ongoing support. We ensure professional installation with minimal disruption to your daily routine.",
  //     category: "installation",
  //     popular: true
  //   },
  //   {
  //     question: "What brands do you work with?",
  //     answer: "We work with leading brands in the industry including Lutron, Control4, Savant, Sonos, Crestron, RTI, Josh.ai, Philips Hue, Samsung, Kef, Bose, and many more to provide you with the best solutions tailored to your needs and budget.",
  //     category: "technical"
  //   },
  //   {
  //     question: "How long does a typical installation take?",
  //     answer: "Installation time varies based on the complexity and scope of your project. Simple systems can be installed in a day, while comprehensive whole-home automation might take 3-7 days. We'll provide a detailed timeline during your consultation.",
  //     category: "installation"
  //   },
  //   {
  //     question: "Do you offer maintenance services after installation?",
  //     answer: "Yes, we provide comprehensive maintenance packages to ensure your system runs smoothly. Our maintenance plans include regular check-ups, software updates, troubleshooting, and priority support for any issues that may arise.",
  //     category: "support",
  //     popular: true
  //   },
  //   {
  //     question: "Can I integrate existing devices with new automation systems?",
  //     answer: "In many cases, yes! We specialize in creating integrated solutions that work with many of your existing devices. During our consultation, we'll assess your current equipment and recommend the best integration approach for a seamless experience.",
  //     category: "technical"
  //   },
  //   {
  //     question: "Do you offer remote support?",
  //     answer: "Yes, we provide remote support for software issues and system adjustments. Many problems can be diagnosed and fixed without an on-site visit, saving you time and minimizing disruption.",
  //     category: "support"
  //   },
  //   {
  //     question: "What warranty do you offer on installations?",
  //     answer: "We offer a standard 2-year warranty on all our installations, covering both parts and labor. Extended warranty options are available for added peace of mind. Manufacturer warranties for specific products may vary.",
  //     category: "installation"
  //   },
  //   {
  //     question: "Can I control my system when I'm away from home?",
  //     answer: "Absolutely! All our automation systems include secure remote access capabilities, allowing you to control and monitor your home from anywhere in the world using your smartphone, tablet, or computer.",
  //     category: "technical",
  //     popular: true
  //   }
  // ];
  
  useEffect(() => {
    let filtered = faqItems;
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredFaqs(filtered);
  }, [searchTerm, activeCategory]);
  
  useEffect(() => {
    // Initialize with all FAQs
    setFilteredFaqs(faqItems);
  }, []);
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const getPopularQuestions = () => {
    return faqItems.filter(item => item.popular).slice(0, 3);
  };
  
  return (
    <div className="py-12 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-sky-500 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, installation process, and support options. Can't find what you're looking for? Contact us directly.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10 relative">
          <div className={`flex items-center bg-white rounded-full shadow-md border ${searchFocus ? 'border-sky-500 ring-2 ring-sky-100' : 'border-gray-200'}`}>
            <div className="pl-4">
              <Search size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
              className="w-full py-4 px-3 rounded-full focus:outline-none"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="px-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>
        
        {/* Popular Questions - Only show if not searching */}
        {!searchTerm && activeCategory === 'all' && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Popular Questions</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {getPopularQuestions().map((item, index) => (
                <a 
                  key={`popular-${index}`}
                  href={`#faq-${faqItems.findIndex(faq => faq.question === item.question)}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const faqIndex = faqItems.findIndex(faq => faq.question === item.question);
                    setOpenIndex(faqIndex);
                    document.getElementById(`faq-${faqIndex}`).scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 group"
                >
                  <h4 className="text-lg font-medium text-gray-800 mb-2 group-hover:text-sky-600 transition-colors">
                    {item.question}
                  </h4>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {item.answer.substring(0, 100)}...
                  </p>
                  <div className="flex items-center text-sky-600 font-medium text-sm group-hover:text-sky-800">
                    Read answer
                    <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {faqCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-sky-600 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Filtered results count */}
        {searchTerm && (
          <p className="text-center text-gray-600 mb-8">
            {filteredFaqs.length} {filteredFaqs.length === 1 ? 'result' : 'results'} found for "{searchTerm}"
          </p>
        )}
        
        {/* FAQ Accordion */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 max-w-6xl mx-auto">
          {filteredFaqs.map((item, index) => (
            <div 
              id={`faq-${faqItems.findIndex(faq => faq.question === item.question)}`}
              key={index} 
              className="self-start bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border-l-4 border-transparent hover:border-l-sky-500"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center transition-colors focus:outline-none group"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-sky-600 transition-colors pr-4">
                  {item.question}
                </h3>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover:bg-sky-100 transition-colors flex-shrink-0`}>
                  {openIndex === index ? (
                    <Minus size={18} className="text-sky-600" />
                  ) : (
                    <Plus size={18} className="text-gray-600 group-hover:text-sky-600" />
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
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-sky-100 text-sky-800 rounded-full">
                    {faqCategories.find(cat => cat.id === item.category)?.name || 'General'}
                  </span>
                  
                  {/* Share button */}
                  <button 
                    className="text-sm text-gray-500 hover:text-sky-600 flex items-center"
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
        
        {/* No results */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 text-sky-600 mb-4">
              <Search size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No matching questions found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search terms or browse all categories</p>
            <button 
              onClick={() => {setSearchTerm(''); setActiveCategory('all');}}
              className="px-5 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
            >
              View all FAQs
            </button>
          </div>
        )}
        
        {/* Still have questions */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-6">Our team is here to help with any questions you might have</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition-colors shadow-md hover:shadow-lg"
          >
            Contact Us
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;