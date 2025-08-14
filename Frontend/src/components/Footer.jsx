import React from "react";
import { Link } from "react-router-dom";
import googlePlay from "../assets/footer/Google-Play.webp";
import ios from "../assets/footer/IoS.webp";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import BottomFooter from "./BottomFooter";
import logo from '../assets/logo.webp';
import { Facebook, Linkedin, } from "lucide-react";

const Footer = () => {
  // Company links data
  const companyLinks = [
    { label: "About Us", slug: "/about" },
    { label: "Contact Us", slug: "/contact" },
    { label: "Latest Blog", slug: "/blog" },
    { label: "Careers", slug: "/careers" },
    { label: "FAQ", slug: "/faq" },
    { label: "Privacy Policy", slug: "/privacy-policy" }
  ];

  // Home Automation links data
  const homeAutomationLinks = [
    { label: "Touch Switches", slug: "/home-automation/touch-switches" },
    { label: "Modular Switches", slug: "/home-automation/modular-switches" },
    { label: "Motion Sensor", slug: "/home-automation/motion-sensor" },
    { label: "Smart Module", slug: "/home-automation/smart-module" },
    { label: "Curtain/Blind Motor", slug: "/home-automation/Curtain-blind Motor" }
  ];

  const lightningAutomationLinks = [
    { label: "Architecture Lights", slug: "/lighting/architecture-light" },
    { label: "Indoor Lights", slug: "/lighting/indoor-light" },
    { label: "Outdoor Lights", slug: "/lighting/outdoor-light" },
    { label: "Audio Visual", slug: "/audio-visual" },
  ];
  

  return (
    <>
      <footer className="bg-black text-white/70 py-10  px-4 md:px-6 font-medium">
        <div className="container mx-auto">
          {/* Top section with logo and social media */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-white/10 pb-8">
            <Link to='/' className="block mb-6 md:mb-0">
              <img className="h-20" src={logo} alt="Company Logo" />
              {/* <p className="mt-4 max-w-md text-sm">
                Your trusted partner in home and industrial automation solutions, bringing innovative technology to enhance your lifestyle and business efficiency.
              </p> */}
            </Link>
            <div className="hidden md:flex items-center space-x-4">
            <a aria-label="facebook" title="facebook"  href="https://www.facebook.com/TRECO-Technologies-1103251483062862" target="_blank" rel="noopener noreferrer" className="bg-sky-500 p-2 rounded-full  text-white hover:bg-sky-600 hover:scale-105 ">
              <Facebook size={20} />
            </a>
            <a aria-label="x" title="x" href="https://twitter.com/TrecoTechnolog1" target="_blank" rel="noopener noreferrer" className="bg-sky-500 p-2 rounded-full  text-white hover:bg-sky-600 hover:scale-105 ">
              <FaXTwitter size={20} />
            </a>
            <a aria-label="whatsapp" title="whatsapp" href="https://wa.me/+91-9810894981" target="_blank" rel="noopener noreferrer" className="bg-sky-500 p-2 rounded-full  text-white hover:bg-sky-600 hover:scale-105 ">
              <FaWhatsapp size={20} />
            </a>
            <a aria-label="linkedin" title="linkedin" href="https://www.linkedin.com/in/treco-technologies-7198b0129/" target="_blank" rel="noopener noreferrer" className="bg-sky-500 p-2 rounded-full  text-white hover:bg-sky-600 hover:scale-105 ">
              <Linkedin size={20} />
            </a>
          </div>
          </div>

          {/* Main links grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Company Section */}
            <div>
              {/* <h3 className="font-semibold mb-4 text-xl text-white">Company</h3> */}
              <ul className="space-y-1">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.slug} className="hover:text-white transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-2">
                <a 
                  href="https://treco-admin.netlify.app/"
                  target="_blank"
                  className="px-4 py-2 border border-white/30 hover:bg-white hover:text-black transition-all duration-300 rounded-md inline-block"
                >
                  Admin Login
                </a>
              </div>
            </div>

            {/* Home Automation Products Section */}
            <div>
              <h3 className="font-semibold mb-4 text-xl text-white">
                Home Automation
              </h3>
              <ul className="space-y-1">
                {homeAutomationLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.slug} className="hover:text-white transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industrial Automation Products Section */}
            <div className="lg:col-span-1 md:col-span-2 sm:col-span-2">
              <h3 className="font-semibold mb-4 text-xl text-white">
                Lightning Automation
              </h3>
              <ul className="space-y-1">
                {lightningAutomationLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.slug} className="hover:text-white transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h3 className="font-semibold mb-4 text-xl text-white">Contact Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="tel:9810894981" className="hover:text-white flex items-start">
                    <FaPhoneVolume className="mr-2 text-lg -rotate-12 mt-1 flex-shrink-0" />
                    <span>+91-9810894981</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@treco.in" className="hover:text-white flex items-start">
                    <MdEmail className="mr-2 text-lg mt-1 flex-shrink-0" />
                    <span>info@treco.in</span>
                  </a>
                </li>
                <li>
                  <a href="https://maps.app.goo.gl/2dZBVek9ECTG5YZ86" className="hover:text-white flex items-start">
                    <FaLocationDot className='mr-2 text-lg mt-1 flex-shrink-0' />
                    <span>A-7, IInd Floor Kailash Plaza, Mayur Vihar, Phase-I, New Delhi</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Download App Section */}
            <div>
              <h3 className="font-semibold mb-4 text-xl text-white">
                Download App
              </h3>
              <div className="flex flex-col space-y-3">
                <a
                  href="https://play.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src={googlePlay}
                    alt="Google Play"
                    className="h-12 sm:h-14 border border-white/20 rounded-lg"
                  />
                </a>
                <a
                  href="https://www.apple.com/app-store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src={ios}
                    alt="App Store"
                    className="h-12 sm:h-14 border border-white/20 rounded-lg"
                  />
                </a>
              </div>
            </div>
          </div>
          
          {/* Newsletter subscription
          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h4 className="text-white text-lg font-medium mb-2">Subscribe to our newsletter</h4>
                <p className="text-sm">Stay updated with our latest products and services</p>
              </div>
              <div className="w-full md:w-auto">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-white text-black font-medium rounded-md hover:bg-opacity-90 transition-all"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div> */}
        </div>
      </footer>
      <BottomFooter />
    </>
  );
};

export default Footer;