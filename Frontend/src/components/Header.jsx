import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Home, Info, Lightbulb, Music, Box, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/logo.webp'
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

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
            <Link to="/" title='Treco-Logo' aria-label='Treco-Logo' className="flex items-center">
              <img src={logo} alt="Logo"  className="h-16" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" aria-label='Home' title='Home' className="flex items-center  text-black  hover:text-sky-600 font-semibold">
              <Home size={18} className="mr-1 hover:scale-105" />
              {/* <span>Home</span> */}
            </Link>
            <Link to="/about" aria-label='About' title='About' className="flex items-center text-black hover:text-sky-600 font-semibold">
              {/* <Info size={18} className="mr-1" /> */}
              <span>About</span>
            </Link>
            
            {/* Home Automation Dropdown */}
            <div className="relative group">
              <button 
              aria-label='home auto'
              title='Home Automation'
                className="flex items-center  text-black  hover:text-sky-600 font-semibold"
                onClick={() => toggleDropdown('homeAutomation')}
                onMouseEnter={() => setDropdownOpen({...dropdownOpen, homeAutomation: true})}
                onMouseLeave={() => setDropdownOpen({...dropdownOpen, homeAutomation: false})}
              >
                <Link to='/home-automation'aria-label='Home Automation'>Home Automation</Link>
                <ChevronDown size={18} className="ml-1" />
              </button>
              {dropdownOpen.homeAutomation && (
                <div 
                  className="absolute z-50  -mt-1 w-48 bg-white shadow-lg py-1"
                  onMouseEnter={() => setDropdownOpen({...dropdownOpen, homeAutomation: true})}
                  onMouseLeave={() => setDropdownOpen({...dropdownOpen, homeAutomation: false})}
                >
                  <Link to="/home-automation/touch-switches" className="block px-4 py-2 font-medium text-gray-900 hover:bg-gray-100">
                    Touch Switches
                  </Link>
                  <Link to="/home-automation/modular-switches" className="block px-4 py-2 font-medium text-gray-900 hover:bg-gray-100">
                    Modular Switches
                  </Link>
                  <Link to="/home-automation/motion-sensor" className="block px-4 py-2 font-medium text-gray-900 hover:bg-gray-100">
                    Motion Sensor
                  </Link>
                  <Link to="/home-automation/smart-module" className="block px-4 py-2 font-medium text-gray-900 hover:bg-gray-100">
                    Smart Module
                  </Link>
                  <Link to="/home-automation/curtain-blind-motor" className="block px-4 py-2 font-medium text-gray-900 hover:bg-gray-100">
                    Curtain/Blind Motor
                  </Link>
                </div>
              )}
            </div>
            
            {/* Lighting Automation Dropdown */}
            <div className="relative group">
              <button 
              title='Light'
              id='light'
                className="flex items-center  text-black  hover:text-sky-600 font-semibold"
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
                  className="absolute z-50 -mt-1 w-48 bg-white shadow-lg py-1"
                  onMouseEnter={() => setDropdownOpen({...dropdownOpen, lightingAutomation: true})}
                  onMouseLeave={() => setDropdownOpen({...dropdownOpen, lightingAutomation: false})}
                >
                  <Link to="/lighting/architecture-light" className="block px-4 py-2 font-medium text-gray-900 hover:bg-gray-100">
                    Architecture Light
                  </Link>
                  <Link to="/lighting/indoor-light" className="block px-4 py-2 font-medium text-gray-900 hover:bg-gray-100">
                    Indoor Light
                  </Link>
                  <Link to="/lighting/outdoor-light" className="block px-4 py-2 font-medium text-gray-900 hover:bg-gray-100">
                    Outdoor Light
                  </Link>
                </div>
              )}
            </div>
            
            <Link aria-label='Audio' title='Audio' to="/audio-visual" className="flex items-center  text-black  hover:text-sky-600 font-semibold">
              {/* <Music size={18} className="mr-1" /> */}
              <span>Audio Visual</span>
            </Link>
            <Link aria-label='Products' title='Products' to="/products" className="flex items-center  text-black  hover:text-sky-600 font-semibold">
              {/* <Box size={18} className="mr-1" /> */}
              <span>Products</span>
            </Link>
            <Link aria-label='contact' title='contact' to="/contact" className="flex items-center  text-black  hover:text-sky-600 font-semibold">
              {/* <Mail size={18} className="mr-1" /> */}
              <span>Contact Us</span>
            </Link>
          </nav>

          {/* Social Media Links - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <a aria-label='Facebook' title='Facebook' href="https://www.facebook.com/TRECO-Technologies-1103251483062862" target="_blank" rel="noopener noreferrer" className="bg-sky-500 p-2 rounded-full  text-white hover:bg-sky-600 hover:scale-105 ">
              <Facebook size={20} />
            </a>
            <a aria-label='X' title='X' href="https://twitter.com/TrecoTechnolog1" target="_blank" rel="noopener noreferrer" className="bg-sky-500 p-2 rounded-full  text-white hover:bg-sky-600 hover:scale-105 ">
              <FaXTwitter size={20} />
            </a>
            <a aria-label='Whatsapp' title='Whatsapp' href="https://wa.me/+91-9810894981" target="_blank" rel="noopener noreferrer" className="bg-sky-500 p-2 rounded-full  text-white hover:bg-sky-600 hover:scale-105 ">
              <FaWhatsapp size={20} />
            </a>
            <a aria-label='Linkedin' title='Linkedin' href="https://www.linkedin.com/in/treco-technologies-7198b0129/" target="_blank" rel="noopener noreferrer" className="bg-sky-500 p-2 rounded-full  text-white hover:bg-sky-600 hover:scale-105 ">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
            aria-label='Toggle menu'
            title='Toggle menu'
            id='Toggle'
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-gray-950 focus:outline-none"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="flex items-center text-gray-800 hover:text-sky-600 font-medium py-2" onClick={() => setIsOpen(false)}>
                <Home size={18} className="mr-2" />
                <span>Home</span>
              </Link>
              <Link to="/about" className="flex items-center text-gray-800 hover:text-sky-600 font-medium py-2" onClick={() => setIsOpen(false)}>
                <Info size={18} className="mr-2" />
                <span>About</span>
              </Link>
              
              {/* Home Automation Dropdown - Mobile */}
              <div className="flex flex-col">
                <button 
                title='Home automation'
                aria-label='Home automation'
                  className="flex items-center justify-between text-gray-800 hover:text-sky-600 font-medium py-2"
                  onClick={() => toggleDropdown('homeAutomation')}
                >
                  <span>Home Automation</span>
                  <ChevronDown size={18} className={`transform ${dropdownOpen.homeAutomation ? 'rotate-180' : ''}`} />
                </button>
                {dropdownOpen.homeAutomation && (
                  <div className="ml-4 mt-1 flex flex-col space-y-2">
                    <Link to="/home-automation/touch-switches" onClick={() => setIsOpen(false)} className="block px-4 py-2 font-medium text-gray-900 hover:bg-gray-100">
                    Touch Switches
                  </Link>
                  <Link to="/home-automation/modular-switches" onClick={() => setIsOpen(false)} className="block px-4 py-2 font-medium text-gray-900 hover:bg-gray-100">
                    Modular Switches
                  </Link>
                  <Link to="/home-automation/motion-sensor" onClick={() => setIsOpen(false)} className="block px-4 py-2 font-medium text-gray-900 hover:bg-gray-100">
                    Motion Sensor
                  </Link>
                  <Link to="/home-automation/smart-module" onClick={() => setIsOpen(false)} className="block px-4 py-2 font-medium text-gray-900 hover:bg-gray-100">
                    Smart Module
                  </Link>
                  <Link to="/home-automation/curtain-blind-motor" onClick={() => setIsOpen(false)} className="block px-4 py-2 font-medium text-gray-900 hover:bg-gray-100">
                    Curtain/Blind Motor
                  </Link>
                   
                  </div>
                )}
              </div>
              
              {/* Lighting Automation Dropdown - Mobile */}
              <div className="flex flex-col">
                <button 
                title='Light'
                aria-label='Lighting'
                  className="flex items-center justify-between text-gray-800 hover:text-sky-600 font-medium py-2"
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
                     <Link to="/lighting/architecture-light" className="block px-4 py-2 font-medium text-gray-900 hover:bg-gray-100">
                    Architecture Light
                  </Link>
                  <Link to="/lighting/indoor-light" className="block px-4 py-2 font-medium text-gray-900 hover:bg-gray-100">
                    Indoor Light
                  </Link>
                  <Link to="/lighting/outdoor-light" className="block px-4 py-2 font-medium text-gray-900 hover:bg-gray-100">
                    Outdoor Light
                  </Link>
                   
                  </div>
                )}
              </div>
              
              <Link to="/audio-visual" className="flex items-center text-gray-800 hover:text-sky-600 font-medium py-2" onClick={() => setIsOpen(false)}>
                <Music size={18} className="mr-2" />
                <span>Audio Visual</span>
              </Link>
              <Link to="/products" className="flex items-center text-gray-800 hover:text-sky-600 font-medium py-2" onClick={() => setIsOpen(false)}>
                <Box size={18} className="mr-2" />
                <span>Products</span>
              </Link>
              <Link to="/contact" className="flex items-center text-gray-800 hover:text-sky-600 font-medium py-2" onClick={() => setIsOpen(false)}>
                <Mail size={18} className="mr-2" />
                <span>Contact</span>
              </Link>
              
              {/* Social Media Links - Mobile */}
              <div className="flex space-x-6 pt-2 border-t border-gray-200">
                <a aria-label='facebook' title='facebook' href="https://www.facebook.com/TRECO-Technologies-1103251483062862" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-sky-600">
                  <Facebook size={20} />
                </a>
                <a aria-label='x' title='x' href="https://twitter.com/TrecoTechnolog1" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-sky-400">
                  <FaXTwitter size={20} />
                </a>
                <a aria-label='Whatsapp' title='Whatsapp' href="https://wa.me/+91-9810894981" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-pink-600">
                  <FaWhatsapp size={20} />
                </a>
                <a aria-label='Linkedin' title='Linkedin' href="https://www.linkedin.com/in/treco-technologies-7198b0129/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-sky-800">
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