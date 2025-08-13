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
  AlertTriangle,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import axios from "axios";
import bread from "../assets/contact.jpg";
import FaqItem from "../components/FaqItem";
import map from "../assets/map.png";
import pattern from "../assets/pattern.webp";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    phone: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

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

    // Clear error when user starts typing again
    if (formError) {
      setFormError("");
    }
  };

  const handleInterestSelect = (interest) => {
    setFormData((prevData) => ({
      ...prevData,
      service: interest,
    }));
    setDropdownOpen(false);

    // Clear error when user selects an interest
    if (formError) {
      setFormError("");
    }
  };

  const api = import.meta.env.VITE_BACKEND_URL || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormError(""); // Clear previous errors

    try {
      // Validation logic
      if (
        !formData.name ||
        !formData.phone ||
        !formData.email ||
        !formData.service
      ) {
        throw new Error("Please fill all required fields");
      }

      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(formData.phone)) {
        throw new Error("Phone number must be 10 digits and start with 6-9");
      }

      if (!formData.email.includes("@")) {
        throw new Error("Please enter a valid email address");
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      // If validation passes, submit the form
      const res = await axios.post(`${api}/inquiry/save`, formData);

      setTimeout(() => {
        setFormSubmitting(false);
        setFormSubmitted(true);

        setTimeout(() => {
          setFormSubmitted(false);
          setFormData({
            name: "",
            email: "",
            service: "",
            message: "",
            phone: "",
          });
        }, 3000);
      }, 1500);
    } catch (error) {
      // Handle validation or submission errors
      console.error("Form submission error:", error);
      setFormError(error.message || "Something went wrong. Please try again.");
      setFormSubmitting(false);
    }
  };

  return (
    <>
      <Breadcrumb
        title="Contact Us"
        bgImage={bread}
        items={[
          { label: "Home", path: "/" },
          { label: "Contact", path: "/contact" },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-0 to-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Information Cards */}
            <div className=" relative rounded-xl border border-gray-200 shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="absolute inset-0 "
              style={{
                background:`url(${pattern})`,
                zIndex:-1,
                opacity:0.3
              }}
              ></div>
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-100 text-sky-600 mb-4">
                  <Phone size={20} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Call Us
                </h3>
                <p className="text-gray-600 mb-4">
                  Our support team is available Monday to Friday, 8am to 6pm.
                </p>
                <a
                  href="tel:9810894981"
                  className="text-sky-600 font-medium inline-flex items-center group"
                >
                  +91-9810894981
                  <ArrowRight
                    size={16}
                    className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
                <br />
                <a
                  href="tel:011-45662460"
                  className="text-sky-600 font-medium inline-flex items-center group"
                >
                  011-45662460
                  <ArrowRight
                    size={16}
                    className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            <div className="relative rounded-xl border border-gray-200 shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
               <div className="absolute inset-0 "
              style={{
                background:`url(${pattern})`,
                zIndex:-1,
                opacity:0.3
              }}
              ></div>
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-100 text-sky-600 mb-4">
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
                  className="text-sky-600 font-medium inline-flex items-center group"
                >
                  info@treco.com
                  <ArrowRight
                    size={16}
                    className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="mailto:trecotechnology@gmail.com"
                  className="text-sky-600 font-medium inline-flex items-center group"
                >
                  trecotechnology@gmail.com
                  <ArrowRight
                    size={16}
                    className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            <div className="relative rounded-xl border border-gray-200 shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
               <div className="absolute inset-0 "
              style={{
                background:`url(${pattern})`,
                zIndex:-1,
                opacity:0.3
              }}
              ></div>
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-100 text-sky-600 mb-4">
                  <MapPin size={20} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Visit Us
                </h3>
                <p className="text-gray-600 mb-4">
                  Come visit our showroom to experience our solutions firsthand.
                </p>
                <a
                  href="https://maps.app.goo.gl/2dZBVek9ECTG5YZ86"
                  className="text-sky-600 font-medium not-italic inline-flex items-center group"
                >
                  A-7, 2nd Floor, Kailash Plazza, Mayur Vihar Phase-I, New Delhi
                  <ArrowRight
                    size={16}
                    className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Map and Form Section */}
          <div className="grid grid-cols-1 h-full lg:grid-cols-2 gap-8 items-start">
            {/* Map & Hours */}
            <div className="bg-white  rounded-xl shadow-lg overflow-hidden ">
              <div className="p-6">
                <div className="text-xl font-semibold text-gray-800 mb-4">
                  {" "}
                  Our Presence:
                </div>
                <img
                  src={map}
                  alt=" Our Presence"
                  className="rounded-xl h-[28rem] w-full"
                />
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
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 text-sky-600 mb-4">
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
                    {formError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start">
                        <AlertTriangle
                          size={20}
                          className="mr-2 mt-0.5 flex-shrink-0"
                        />
                        <div>{formError}</div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
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
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
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
                          maxlength="10"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
                          placeholder="10 Digit Phone Number"
                          required
                          pattern="[6-9]\d{9}"
                          title="Phone number must be 10 digits and start with 6, 7, 8, or 9"
                        />
                      </div>

                      <div className="relative">
                        <label
                          htmlFor="service"
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
                              formData.service
                                ? "text-gray-900"
                                : "text-gray-400"
                            }
                          >
                            {formData.service || "Select service"}
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
                                className="px-4 py-2 hover:bg-sky-50 cursor-pointer transition-colors"
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all resize-y"
                        placeholder="Tell us about your project or question..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className={`w-full py-3 px-6 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-medium flex items-center justify-center transition-all duration-300 transform hover:scale-[1.02] ${
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
          <div className="mt-12">
            <div className="relative h-96 bg-gray-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.720474043652!2d77.290968774756!3d28.608161375678097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce378cde7c251%3A0xa197c1153d5ea8a2!2sTreco%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1743681174385!5m2!1sen!2sin"
                className="h-full w-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <FaqItem />
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
