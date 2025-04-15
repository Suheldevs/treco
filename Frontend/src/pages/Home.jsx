import React, { lazy, Suspense } from 'react';
import HeroSection from '../components/HeroSection';

// Lazy imports for the rest
const AboutSection = lazy(() => import('../components/AboutSection'));
const ServicesSection = lazy(() => import('../components/ServiceSection'));
const ProductSection = lazy(() => import('../components/ProductSection'));
const CTASection = lazy(() => import('../components/CTASection'));
const Testimonial = lazy(() => import('../components/Testimonial'));

// Loader Component
const Loader = () => (
  <div className="flex items-center justify-center w-full h-screen text-sky-600 bg-white text-xl font-semibold">
    Loading...
  </div>
);

function Home() {
  return (
    <div>
      <HeroSection />
      <Suspense fallback={<Loader />}>
        <AboutSection />
        <ServicesSection />
        <ProductSection />
        <CTASection />
        <Testimonial />
      </Suspense>
    </div>
  );
}

export default Home;
