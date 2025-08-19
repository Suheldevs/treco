import React from 'react';
import { Facebook, Linkedin, MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';



const TopHeader = () => {
  return (
    <div className="hidden lg:block bg-white font-medium text-slate-900 py-1 px-4 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-3 lg:space-y-0">
          
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <a 
              href="https://maps.app.goo.gl/2dZBVek9ECTG5YZ86" 
              className="hover:text-slate-600 flex items-start transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="mr-2 text-lg mt-0.5 flex-shrink-0 text-[#14a78b]" size={16} />
              <span>A-7, IInd Floor Kailash Plaza, Mayur Vihar, Phase-I, New Delhi</span>
            </a>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <a 
                href="tel:9999221655" 
                className="hover:text-slate-600 flex items-center transition-colors duration-200"
              >
                <Phone className="mr-2 flex-shrink-0 text-[#14a78b] transform -rotate-12" size={16} />
                <span>+91-9999221655</span>
              </a>
              
              <a 
                href="mailto:info@amadelectricals.com" 
                className="hover:text-slate-600 flex items-center transition-colors duration-200"
              >
                <Mail className="mr-2 flex-shrink-0 text-[#14a78b]" size={16} />
                <span>info@amadelectricals.com</span>
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center justify-center lg:justify-end space-x-3">
            <a 
              aria-label="Facebook" 
              title="Facebook" 
              href="https://www.facebook.com/TRECO-Technologies-1103251483062862" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#14a78b] p-1.5 rounded-full text-white hover:bg-[#0f8a73] hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Facebook size={16} />
            </a>
            
            <a 
              aria-label="X (Twitter)" 
              title="X (Twitter)" 
              href="https://twitter.com/TrecoTechnolog1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#14a78b] p-1.5 rounded-full text-white hover:bg-[#0f8a73] hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <FaXTwitter size={16} />
            </a>
            
            <a 
              aria-label="Instagram" 
              title="Instagram" 
              href="https://twitter.com/TrecoTechnolog1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#14a78b] p-1.5 rounded-full text-white hover:bg-[#0f8a73] hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Instagram size={16} />
            </a>
            
            <a 
              aria-label="WhatsApp" 
              title="WhatsApp" 
              href="https://wa.me/+919810894981" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#14a78b] p-1.5 rounded-full text-white hover:bg-[#0f8a73] hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp size={16} />
            </a>
            
            <a 
              aria-label="LinkedIn" 
              title="LinkedIn" 
              href="https://www.linkedin.com/in/treco-technologies-7198b0129" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#14a78b] p-1.5 rounded-full text-white hover:bg-[#0f8a73] hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;