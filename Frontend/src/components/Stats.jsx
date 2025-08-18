import React from 'react'
import { Link } from "react-router-dom";
// import about from '../assets/Home/about.jpg'
import about from "../assets/Home/a2.webp";
import DualBannerSlider from "./BannerSlider";
function Stats() {
  return (
    <div className='container mx-auto px-4 py-16'>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Modern Image Section with Overlapping Elements */}
          <div className="relative order-2 group md:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-300 rounded-3xl transform rotate-4 transition-all ease-in-out duration-500 group-hover:rotate-0"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={about}
                // src="https://picsum.photos/400/400?random=1"
                alt="Feature illustration"
                className="w-full h-auto lg:h-[500px] object-cover hover:scale-105 transition-all duration-700 ease-in-out "
              />
            </div>

            {/* Floating badges */}
            <div className="absolute top-4 -right-4 bg-white rounded-full p-3 shadow-lg z-20 border-2 border-sky-600">
              <svg
                className="w-6 h-6 text-sky-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg z-20 border-2 border-sky-600">
              <svg
                className="w-6 h-6 text-sky-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
          </div>

          {/* Text Content with Modern Design */}
          <div className="order-1 md:order-2 text-justify">
            <h3 className="text-3xl font-bold mb-6 text-gray-800 text-left">
              Our Innovative Approach
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We combine cutting-edge technology with thoughtful design to
              create home automation systems that truly enhance your daily life.
              Our team of experts works tirelessly to ensure that every A-Mad
              solution delivers exceptional performance while remaining
              accessible and easy to use.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We combine cutting-edge technology with thoughtful design to
              create home automation systems that truly enhance your daily life.
              Our team of experts works tirelessly to ensure that every A-Mad
              solution delivers exceptional performance while remaining
              accessible and easy to use.
            </p>

            {/* Modern Stats Display */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center border border-gray-100 shadow-md p-4 bg-gray-50 rounded-xl">
                <span className="block text-3xl font-bold text-sky-600">
                  98%
                </span>
                <span className="text-sm text-gray-500">
                  Customer Satisfaction
                </span>
              </div>
              <div className="text-center border border-gray-100 shadow-md p-4 bg-gray-50 rounded-xl">
                <span className="block text-3xl font-bold text-sky-600">
                  10+
                </span>
                <span className="text-sm text-gray-500">Years Experience</span>
              </div>
              <div className="text-center border border-gray-100 shadow-md p-4 bg-gray-50 rounded-xl">
                <span className="block text-3xl font-bold text-sky-600">
                  5k+
                </span>
                <span className="text-sm text-gray-500">Homes Automated</span>
              </div>
            </div>

            {/* Modern CTA Button */}
            <div className="inline-flex rounded-lg shadow-lg">
              <Link
                to="/about"
                className="inline-flex group items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 transition-all duration-300"
              >
                Discover Our Story
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Stats