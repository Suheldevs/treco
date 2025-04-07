import React from 'react'
import FAQSection from '../components/FaqSection'
import Breadcrumb from '../components/Breadcrumb'

function FaqPage() {
  return (
    <div>
      <Breadcrumb 
  title="FAQ Page"
  bgImage="https://img.freepik.com/free-photo/call-center-information-operator-service-graphic-concept_53876-124980.jpg?uid=R183076985&ga=GA1.1.550663172.1736244937&semt=ais_hybrid&w=740"
  items={[
    { label: "Home", path: "/" },
    { label: "FAQS", path: "/faq" },
  ]}
/>
        <FAQSection/>
    </div>
  )
}

export default FaqPage