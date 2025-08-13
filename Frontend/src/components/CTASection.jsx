import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import InquiryModal from "./InquiryModal";
import { useState } from "react";
import cta from '../assets/cta.webp'
export default function CTASection() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <InquiryModal isOpen={isOpen} setIsOpen={setIsOpen} />
    <section className={`relative w-full py-20 z-0  bg-cover bg-center
 text-white text-center`}  style={{ backgroundImage: `url(${cta})` }}>
  <div className="absolute inset-0 bg-black/30 -z-10"></div>
      <div className="max-w-3xl mx-auto px-6 z-10">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Elevate Your Home with Smart Automation
        </motion.h2>

        <motion.p
          className="text-lg mb-6 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Discover premium <span className="font-semibold">touch switches</span> and{" "}
          <span className="font-semibold">motion sensors</span> for seamless home automation.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button aria-label="Get Quotes" title="Quotes" onClick={()=>setIsOpen(!isOpen)} className="bg-white text-blue-600 font-medium px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200 transition flex items-center gap-2">
            Get Quote
          </button>
          <Link to='/products' className="bg-transparent border-2 border-white text-white font-medium px-6 py-3 rounded-xl shadow-lg hover:bg-white hover:text-blue-600 transition flex items-center gap-2">
            View Products
          </Link>
        </motion.div>
      </div>
    </section>
    </>
  );
}
