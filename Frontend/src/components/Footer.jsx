import React from "react";
import { Link } from "react-router-dom";
import googlePlay from "../assets/footer/Google-Play.png";
import ios from "../assets/footer/IoS.png";
import { FaPhoneVolume } from "react-icons/fa";
// import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import BottomFooter from "./BottomFooter";
const Footer = () => {
  return (
    <>
    <footer className="bg-black text-white/60 md:py-16 py-10 px-3 footer font-medium">
      <div className=" mx-auto justify-items-center grid grid-cols-2 md:grid-cols-5 gap-4 px-2">
        {/* Company Section */}
        <div>
          <h3 className="font-semibold mb-8 text-2xl text-white">Company</h3>
          <ul className="space-y-0">
            <li>
              <Link to="/about" className="hover: ">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover: ">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover: ">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/treco-india" className="hover: ">
                Treco in India
              </Link>
            </li>
          </ul>
          <div className="mt-4">
            <Link
              to="/admin-login"
              className="px-4 py-2 border border-white hover:bg-white hover:text-black transition rounded"
            >
              Admin Login
            </Link>
          </div>
        </div>

        {/* Home Automation Products Section */}
        <div>
          <h3 className="font-semibold mb-8 text-2xl text-white">
            Home Automation
          </h3>
          <ul className="space-y-0">
            <li>
              <Link
                to="/home-automation"
                className="hover: "
              >
                Automation
              </Link>
            </li>
            <li>
              <Link
                to="/home-automation"
                className="hover: "
              >
                Audio
              </Link>
            </li>
            <li>
              <Link
                to="/home-automation"
                className="hover: "
              >
                Networking & Security
              </Link>
            </li>
            <li>
              <Link
                to="/home-automation"
                className="hover: "
              >
                Lighting
              </Link>
            </li>
            {/* <li>
              <Link to="/products/smart-lighting" className="hover: ">
                Smart Lighting
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Industrial Automation Products Section */}
        <div>
          <h3 className="font-semibold mb-8 text-2xl text-white">
            Industrial Automation
          </h3>
          <ul className="space-y-0">
            <li>
              <Link
                to="/industrial-automation"
                className="hover: "
              >
                Cutomised Solutions
              </Link>
            </li>
            <li>
              <Link to="/industrial-automation" className="hover: ">
                Pumps
              </Link>
            </li>
            <li>
              <Link to="/industrial-automation" className="hover: ">
                Heating Pump
              </Link>
            </li>
            <li>
              <Link to="/industrial-automation" className="hover: ">
                Valve
              </Link>
            </li>
            <li>
              <Link to="/industrial-automation" className="hover: ">
                Heavy Gears
              </Link>
            </li>
            <li>
              <Link to="/industrial-automation" className="hover: ">
                Electrical Control Room
              </Link>
            </li>
            <li>
              <Link to="/industrial-automation" className="hover: ">
                Electrical Moters
              </Link>
            </li>
            <li>
              <Link to="/industrial-automation" className="hover: ">
                Oil Heating System
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="md:ml-4">
          <h3 className="font-semibold mb-8 text-2xl text-white">Support</h3>
          <ul className="space-y-0">
            <li>
              <a href="tel:+966500761791" className="hover: ">
                <FaPhoneVolume className="mr-1 inline-block text-lg -rotate-12" />
                +966 500761791
              </a>
            </li>
            <li>
              <a href="mailto:info@treco.in" className="hover: ">
                {/* <IoMdMail className="mr-1 inline-block text-lg " /> */}
                 info@treco.in
              </a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/vZrfWDywdjPauz6n7">
              <p><FaLocationDot className='mr-1 inline-block text-lg' /> Majid Noor near Baladia Camp Wadi Mraykh, Jeddah, Saudi Arabia 23254</p>
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-8 text-2xl">
          <h3 className="font-semibold mb-8 text-2xl text-white">
            Download App
          </h3>
          <div className="mt-4 space-x-4">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={googlePlay}
                alt="Google Play"
                className="h-16 border rounded-lg"
              />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ios}
                alt="App Store"
                className="h-16 border rounded-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
      <BottomFooter/>
      </>
  );
};

export default Footer;
