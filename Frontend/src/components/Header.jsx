import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Home, Info, Lightbulb, Music, Box, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/logo.webp'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    homeAutomation: false,
    lightingAutomation: false
  });

  const toggleDropdown = (dropdown) => {
    setDropdownOpen({
      ...dropdownOpen,
      [dropdown]: !dropdownOpen[dropdown]
    });
  };

  const closeAllDropdowns = () => {
    setDropdownOpen({
      homeAutomation: false,
      lightingAutomation: false
    });
  };

  return (
    <header className="bg-white sticky top-0 z-50 w-full shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-16" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="flex items-center  text-black  hover:text-blue-600 font-semibold">
              <Home size={18} className="mr-1 hover:scale-105" />
              {/* <span>Home</span> */}
            </Link>
            <Link to="/about" className="flex items-center text-black hover:text-blue-600 font-semibold">
              {/* <Info size={18} className="mr-1" /> */}
              <span>About</span>
            </Link>
            
            {/* Home Automation Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center  text-black  hover:text-blue-600 font-semibold"
                onClick={() => toggleDropdown('homeAutomation')}
                onMouseEnter={() => setDropdownOpen({...dropdownOpen, homeAutomation: true})}
                onMouseLeave={() => setDropdownOpen({...dropdownOpen, homeAutomation: false})}
              >
                <span>Home Automation</span>
                <ChevronDown size={18} className="ml-1" />
              </button>
              {dropdownOpen.homeAutomation && (
                <div 
                  className="absolute z-50  mt-1 w-48 bg-white shadow-lg py-1"
                  onMouseEnter={() => setDropdownOpen({...dropdownOpen, homeAutomation: true})}
                  onMouseLeave={() => setDropdownOpen({...dropdownOpen, homeAutomation: false})}
                >
                  <Link to="/home-automation/smart-hub" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
                    Smart Hub
                  </Link>
                  <Link to="/home-automation/security" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
                    Security
                  </Link>
                  <Link to="/home-automation/climate" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
                    Climate Control
                  </Link>
                </div>
              )}
            </div>
            
            {/* Lighting Automation Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center  text-black  hover:text-blue-600 font-semibold"
                onClick={() => toggleDropdown('lightingAutomation')}
                onMouseEnter={() => setDropdownOpen({...dropdownOpen, lightingAutomation: true})}
                onMouseLeave={() => setDropdownOpen({...dropdownOpen, lightingAutomation: false})}
              >
                {/* <Lightbulb size={18} className="mr-1" /> */}
                <span>Lighting Automation</span>
                <ChevronDown size={18} className="ml-1" />
              </button>
              {dropdownOpen.lightingAutomation && (
                <div 
                  className="absolute z-50 mt-1 w-48 bg-white shadow-lg py-1"
                  onMouseEnter={() => setDropdownOpen({...dropdownOpen, lightingAutomation: true})}
                  onMouseLeave={() => setDropdownOpen({...dropdownOpen, lightingAutomation: false})}
                >
                  <Link to="/lighting/smart-bulbs" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
                    Smart Bulbs
                  </Link>
                  <Link to="/lighting/controllers" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
                    Controllers
                  </Link>
                  <Link to="/lighting/scenes" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
                    Lighting Scenes
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/audio-visual" className="flex items-center  text-black  hover:text-blue-600 font-semibold">
              {/* <Music size={18} className="mr-1" /> */}
              <span>Audio Visual</span>
            </Link>
            <Link to="/products" className="flex items-center  text-black  hover:text-blue-600 font-semibold">
              {/* <Box size={18} className="mr-1" /> */}
              <span>Products</span>
            </Link>
            <Link to="/contact" className="flex items-center  text-black  hover:text-blue-600 font-semibold">
              {/* <Mail size={18} className="mr-1" /> */}
              <span>Contact</span>
            </Link>
          </nav>

          {/* Social Media Links - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-500 p-2 rounded-full  text-white hover:bg-blue-700 hover:scale-105 ">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-500 p-2 rounded-full  text-white hover:bg-blue-700 hover:scale-105 ">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-blue-500 p-2 rounded-full  text-white hover:bg-blue-700 hover:scale-105 ">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-500 p-2 rounded-full  text-white hover:bg-blue-700 hover:scale-105 ">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="flex items-center text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setIsOpen(false)}>
                <Home size={18} className="mr-2" />
                <span>Home</span>
              </Link>
              <Link to="/about" className="flex items-center text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setIsOpen(false)}>
                <Info size={18} className="mr-2" />
                <span>About</span>
              </Link>
              
              {/* Home Automation Dropdown - Mobile */}
              <div className="flex flex-col">
                <button 
                  className="flex items-center justify-between text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => toggleDropdown('homeAutomation')}
                >
                  <span>Home Automation</span>
                  <ChevronDown size={18} className={`transform ${dropdownOpen.homeAutomation ? 'rotate-180' : ''}`} />
                </button>
                {dropdownOpen.homeAutomation && (
                  <div className="ml-4 mt-1 flex flex-col space-y-2">
                    <Link to="/home-automation/smart-hub" className="text-gray-600 hover:text-blue-600 py-1" onClick={() => setIsOpen(false)}>
                      Smart Hub
                    </Link>
                    <Link to="/home-automation/security" className="text-gray-600 hover:text-blue-600 py-1" onClick={() => setIsOpen(false)}>
                      Security
                    </Link>
                    <Link to="/home-automation/climate" className="text-gray-600 hover:text-blue-600 py-1" onClick={() => setIsOpen(false)}>
                      Climate Control
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Lighting Automation Dropdown - Mobile */}
              <div className="flex flex-col">
                <button 
                  className="flex items-center justify-between text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => toggleDropdown('lightingAutomation')}
                >
                  <div className="flex items-center">
                    <Lightbulb size={18} className="mr-2" />
                    <span>Lighting Automation</span>
                  </div>
                  <ChevronDown size={18} className={`transform ${dropdownOpen.lightingAutomation ? 'rotate-180' : ''}`} />
                </button>
                {dropdownOpen.lightingAutomation && (
                  <div className="ml-4 mt-1 flex flex-col space-y-2">
                    <Link to="/lighting/smart-bulbs" className="text-gray-600 hover:text-blue-600 py-1" onClick={() => setIsOpen(false)}>
                      Smart Bulbs
                    </Link>
                    <Link to="/lighting/controllers" className="text-gray-600 hover:text-blue-600 py-1" onClick={() => setIsOpen(false)}>
                      Controllers
                    </Link>
                    <Link to="/lighting/scenes" className="text-gray-600 hover:text-blue-600 py-1" onClick={() => setIsOpen(false)}>
                      Lighting Scenes
                    </Link>
                  </div>
                )}
              </div>
              
              <Link to="/audio-visual" className="flex items-center text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setIsOpen(false)}>
                <Music size={18} className="mr-2" />
                <span>Audio Visual</span>
              </Link>
              <Link to="/products" className="flex items-center text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setIsOpen(false)}>
                <Box size={18} className="mr-2" />
                <span>Products</span>
              </Link>
              <Link to="/contact" className="flex items-center text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setIsOpen(false)}>
                <Mail size={18} className="mr-2" />
                <span>Contact</span>
              </Link>
              
              {/* Social Media Links - Mobile */}
              <div className="flex space-x-6 pt-2 border-t border-gray-200">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400">
                  <Twitter size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600">
                  <Instagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-800">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;