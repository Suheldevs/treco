import React from 'react'
import FAQSection from '../components/FaqSection'
import Breadcrumb from '../components/Breadcrumb'

function FaqPage() {
  return (
    <div>
      {/* <Breadcrumb 
  title="FAQ Page"
  bgImage="https://img.freepik.com/free-photo/call-center-information-operator-service-graphic-concept_53876-124980.jpg?uid=R183076985&ga=GA1.1.550663172.1736244937&semt=ais_hybrid&w=740"
  items={[
    { label: "Home", path: "/" },
    { label: "FAQS", path: "/faq" },
  ]}
/> */}

 <div className="bg-gradient-to-r from-[#00a1e8] to-sky-400 text-white">
        <div className="container mx-auto px-4 py-24 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="max-w-3xl relative z-10">
  <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
  <p className="text-xl md:text-2xl text-sky-100 mb-8">
   Find answers to common questions about our services, installation process, and support options. Can't find what you're looking for? Contact us directly.
  </p>
</div>

        </div>
      </div>
        <FAQSection/>
    </div>
  )
}

export default FaqPage