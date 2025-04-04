import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServiceSection'
import ProductSection from '../components/ProductSection'
import CTASection from '../components/CTASection'
import Testimonial from '../components/Testimonial'

function Home() {
  return (
    <div>
        <HeroSection/>
        <AboutSection/>
        <ServicesSection/>
        <ProductSection/>
        <CTASection/>
        <Testimonial/>
    </div>
  )
}

export default Home