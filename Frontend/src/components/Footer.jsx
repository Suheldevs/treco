import React from "react";
import { Link } from "react-router-dom";
import googlePlay from "../assets/footer/Google-Play.png";
import ios from "../assets/footer/IoS.png";
import { FaPhoneVolume } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import BottomFooter from "./BottomFooter";
import logo from '../assets/logo.webp';
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  // Company links data
  const companyLinks = [
    { label: "About Us", slug: "/about" },
    { label: "Careers", slug: "/careers" },
    { label: "Contact Us", slug: "/contact" },
    { label: "FAQ", slug: "/faq" },
    { label: "Privacy Policy", slug: "/privacy-policy" }
  ];

  // Home Automation links data
  const homeAutomationLinks = [
    { label: "Automation", slug: "/home-automation/automation" },
    { label: "Audio", slug: "/home-automation/audio" },
    { label: "Networking & Security", slug: "/home-automation/networking-security" },
    { label: "Lighting", slug: "/home-automation/lighting" }
  ];

  const lightningAutomationLinks = [
    { label: "Smart LED Lighting", slug: "/lighting-automation/smart-led-lighting" },
    { label: "Motion Sensor Lights", slug: "/lighting-automation/motion-sensor-lights" },
    { label: "Dimmable Lights", slug: "/lighting-automation/dimmable-lights" },
    { label: "RGB Mood Lighting", slug: "/lighting-automation/rgb-mood-lighting" },
    { label: "Wireless Light Control", slug: "/lighting-automation/wireless-light-control" }
  ];
  

  return (
    <>
      <footer className="bg-black text-white/70 py-10  px-4 md:px-6 font-medium">
        <div className="container mx-auto">
          {/* Top section with logo and social media */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-white/10 pb-8">
            <div className="mb-6 md:mb-0">
              <img className="h-20" src={logo} alt="Company Logo" />
              {/* <p className="mt-4 max-w-md text-sm">
                Your trusted partner in home and industrial automation solutions, bringing innovative technology to enhance your lifestyle and business efficiency.
              </p> */}
            </div>
            <div className="hidden md:flex items-center space-x-4">
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
              <div className="mt-4">
                <Link
                  to="/admin-login"
                  className="px-4 py-2 border border-white/30 hover:bg-white hover:text-black transition-all duration-300 rounded-md inline-block"
                >
                  Admin Login
                </Link>
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
                  <a href="tel:+966500761791" className="hover:text-white flex items-start">
                    <FaPhoneVolume className="mr-2 text-lg -rotate-12 mt-1 flex-shrink-0" />
                    <span>+966 500761791</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@treco.in" className="hover:text-white flex items-start">
                    <MdEmail className="mr-2 text-lg mt-1 flex-shrink-0" />
                    <span>info@treco.in</span>
                  </a>
                </li>
                <li>
                  <a href="https://maps.app.goo.gl/vZrfWDywdjPauz6n7" className="hover:text-white flex items-start">
                    <FaLocationDot className='mr-2 text-lg mt-1 flex-shrink-0' />
                    <span>Majid Noor near Baladia Camp Wadi Mraykh, Jeddah, Saudi Arabia 23254</span>
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
                  href="https://play.google.com"
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
                  href="https://www.apple.com/app-store/"
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