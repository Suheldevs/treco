import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Heart, Filter, ChevronDown, Star } from 'lucide-react';

const ProductCard = ({ product ,index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={`https://picsum.photos/400/320?random=${index}`} 
          alt={product.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}>
          <button className="bg-white text-gray-800 rounded-full p-3 mx-2 hover:bg-blue-500 hover:text-white transition-colors duration-300">
            <ShoppingCart size={20} />
          </button>
          <button className="bg-white text-gray-800 rounded-full p-3 mx-2 hover:bg-blue-500 hover:text-white transition-colors duration-300">
            <Heart size={20} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center text-yellow-400 mb-2">
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} className="text-gray-300" fill="currentColor" />
          <span className="text-gray-600 text-sm ml-2">(24 reviews)</span>
        </div>
        <h3 className="font-semibold text-lg text-gray-800 mb-1">{product.title}</h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          {/* <span className="font-bold text-blue-600">${product.price.toFixed(2)}</span> */}
          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{product.category}</span>
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Home Automation', 'Lighting', 'Audio', 'Security', 'Smart Controls'];
  
  // Generate random products
  const products = [
    {
      id: 1,
      title: 'Smart Home Hub Controller',
      slug: 'smart-home-hub-controller',
      description: 'Control all your smart home devices from one central hub with voice commands and mobile app integration.',
      category: 'Home Automation',
      price: 199.99,
    },
    {
      id: 2,
      title: 'Adaptive LED Lighting System',
      slug: 'adaptive-led-lighting-system',
      description: 'Energy-efficient LED lighting that adapts to natural light conditions and your preferences throughout the day.',
      category: 'Lighting',
      price: 149.99,
    },
    {
      id: 3,
      title: 'Wireless Audio Symphony System',
      slug: 'wireless-audio-symphony-system',
      description: 'Multi-room audio system with crystal clear sound quality and seamless synchronization across your entire home.',
      category: 'Audio',
      price: 299.99,
    },
    {
      id: 4,
      title: 'Smart Security Camera Bundle',
      slug: 'smart-security-camera-bundle',
      description: 'HD security cameras with motion detection, night vision, and real-time alerts to your smartphone.',
      category: 'Security',
      price: 249.99,
    },
    {
      id: 5,
      title: 'Voice-Activated Room Controller',
      slug: 'voice-activated-room-controller',
      description: 'Control temperature, lighting, and entertainment systems with simple voice commands or scheduled routines.',
      category: 'Smart Controls',
      price: 129.99,
    },
    {
      id: 6,
      title: 'Smart Thermostat Pro',
      slug: 'smart-thermostat-pro',
      description: 'AI-powered thermostat that learns your schedule and preferences to optimize comfort and reduce energy costs.',
      category: 'Home Automation',
      price: 179.99,
    },
    {
      id: 7,
      title: 'Ambient Mood Lighting Kit',
      slug: 'ambient-mood-lighting-kit',
      description: 'Create the perfect atmosphere with customizable color schemes and dynamic lighting patterns.',
      category: 'Lighting',
      price: 89.99,
    },
    {
      id: 8,
      title: 'Premium Soundbar with Voice Control',
      slug: 'premium-soundbar-with-voice-control',
      description: 'Immersive audio experience with built-in voice assistants and wireless subwoofer for deep bass.',
      category: 'Audio',
      price: 349.99,
    },
    {
      id: 9,
      title: 'Smart Door Lock System',
      slug: 'smart-door-lock-system',
      description: 'Keyless entry system with fingerprint scanner, PIN code options, and remote access capabilities.',
      category: 'Security',
      price: 219.99,
    },
  ];

  // Filter products based on active category
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Our Products</h1>
            <p className="text-gray-600 mt-1">Discover our innovative automation solutions</p>
          </div>
          {/* <div className="mt-4 md:mt-0 relative">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div> */}
        </div>

        {/* Categories - Desktop */}
        <div className="hidden md:flex mb-8 space-x-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-blue-500 text-white font-medium shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Categories - Mobile */}
        <div className="md:hidden mb-6">
          <button 
            className="flex items-center justify-between w-full px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <div className="flex items-center">
              <Filter size={18} className="text-gray-500 mr-2" />
              <span>{activeCategory}</span>
            </div>
            <ChevronDown size={18} className={`text-gray-500 transition-transform ${isFilterOpen ? 'transform rotate-180' : ''}`} />
          </button>
          
          {isFilterOpen && (
            <div className="mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-10 relative">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setIsFilterOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                    activeCategory === category ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product,index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSection;