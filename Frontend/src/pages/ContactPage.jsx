import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  Check,
  ChevronDown,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import FAQSection from "../components/FaqSection";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    interestedIn: "",
    message: "",
    phone: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const interests = [
    "Home Automation",
    "Lighting Solutions",
    "Smart Security",
    "Audio Visual Systems",
    "Energy Management",
    "Custom Integration",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInterestSelect = (interest) => {
    setFormData((prevData) => ({
      ...prevData,
      interestedIn: interest,
    }));
    setDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          interestedIn: "",
          message: "",
          phone: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <>
     <Breadcrumb 
  title="Contact Us"
  bgImage="https://treco.in/wp-content/uploads/2020/12/Contact-cover-pic-e1608727652960.jpg" // Optional
  items={[
    { label: "Home", path: "/" },
    { label: "Contact", path: "/contact" },
    // { label: "Electronics", path: "/products/electronics" }
  ]}
/>

      <div className="min-h-screen bg-gradient-to-br from-gray-0 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          {/* Page Header
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-3 relative inline-block">
              Get in Touch
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></div>
            </h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We're excited to hear from you! Our team of experts is ready to
              answer your questions and provide solutions tailored to your
              needs.
            </p>
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Information Cards */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <Phone size={20} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Call Us
                </h3>
                <p className="text-gray-600 mb-4">
                  Our support team is available Monday to Friday, 8am to 6pm.
                </p>
                <a
                  href="tel:+1234567890"
                  className="text-blue-600 font-medium inline-flex items-center group"
                >
                  +1 (234) 567-890
                  <ArrowRight
                    size={16}
                    className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                  <Mail size={20} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Email Us
                </h3>
                <p className="text-gray-600 mb-4">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <a
                  href="mailto:info@treco.com"
                  className="text-green-600 font-medium inline-flex items-center group"
                >
                  info@treco.com
                  <ArrowRight
                    size={16}
                    className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                  <MapPin size={20} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Visit Us
                </h3>
                <p className="text-gray-600 mb-4">
                  Come visit our showroom to experience our solutions firsthand.
                </p>
                <address className="text-purple-600 font-medium not-italic inline-flex items-center group">
                  123 Tech Avenue, Innovation City
                  <ArrowRight
                    size={16}
                    className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
                  />
                </address>
              </div>
            </div>
          </div>

          {/* Map and Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Map & Hours */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64 bg-gray-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.720474043652!2d77.290968774756!3d28.608161375678097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce378cde7c251%3A0xa197c1153d5ea8a2!2sTreco%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1743681174385!5m2!1sen!2sin"
                className="h-full w-full"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Our Location
                </h3>
                <p className="text-gray-600 mb-6">
                  Conveniently located in the heart of Innovation City, our
                  showroom showcases the latest in home automation technology.
                </p>

                <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                  <Clock size={18} className="mr-2 text-blue-500" />
                  Opening Hours
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Send Us a Message
                </h3>

                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                      <Check size={32} />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll get back to you
                      shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="Your name"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="(123) 456-7890"
                        />
                      </div>

                      <div className="relative">
                        <label
                          htmlFor="interestedIn"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Interested In
                        </label>
                        <button
                          type="button"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors text-left"
                        >
                          <span
                            className={
                              formData.interestedIn
                                ? "text-gray-900"
                                : "text-gray-400"
                            }
                          >
                            {formData.interestedIn || "Select service"}
                          </span>
                          <ChevronDown
                            size={16}
                            className={`transform transition-transform duration-200 ${
                              dropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {dropdownOpen && (
                          <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 py-1 animate-fadeIn">
                            {interests.map((interest, index) => (
                              <div
                                key={index}
                                onClick={() => handleInterestSelect(interest)}
                                className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors"
                              >
                                {interest}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-y"
                        placeholder="Tell us about your project or question..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className={`w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center justify-center transition-all duration-300 transform hover:scale-[1.02] ${
                        formSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {formSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
<FAQSection/>
       
        </div>

        {/* CSS for animations */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.2s ease-out forwards;
          }
        `}</style>
      </div>
    </>
  );
};

export default ContactPage;
