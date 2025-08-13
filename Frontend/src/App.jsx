import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';  // Normal import for Home page
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import DynamicServices from './pages/ServiceDetailPage';

// Lazy load all other pages
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const CareerPage = lazy(() => import('./pages/CareerPage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const SubcategoryProductsPage = lazy(() => import('./pages/SubcategoryProductsPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));
const InquiryModal = lazy(() => import('./components/InquiryModal'));
const HomeAutomation = lazy(() => import('./pages/HomeAutomation'));
const AudioVisual = lazy(() => import('./pages/AudioVisual'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

// Simple sky-600 full-page loader
const Loader = () => (
  <div className="flex items-center justify-center w-full h-screen text-sky-600 bg-white text-xl font-semibold">
    Loading...
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home loaded normally */}
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/careers' element={<CareerPage />} />
                <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route path='/products' element={<ProductPage />} />
                <Route path='/products/:slug' element={<ProductDetailPage />} />
                <Route path='/home-automation/:subcategory' element={<SubcategoryProductsPage />} />
                <Route path='/lighting/:subcategory' element={<SubcategoryProductsPage />} />
                <Route path='/faq' element={<FaqPage />} />
                <Route path='/inquiry' element={<InquiryModal />} />
                <Route path='/service/home-automation' element={<HomeAutomation />} />
                <Route path='/audio-visual' element={<AudioVisual />} />
                <Route path='/blog' element={<BlogPage />} />
                <Route path='/blog/:slug' element={<BlogDetail />} />
                <Route path='/service/:slug' element={<DynamicServices />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
