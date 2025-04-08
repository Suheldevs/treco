import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import CareerPage from './pages/CareerPage'
import PrivacyPolicy from './pages/PrivacyPage'
import ProductPage from './pages/ProductPage'
import FaqPage from './pages/FaqPage'
import PageNotFound from './pages/PageNotFound'
import ScrollToTop from './components/ScrollToTop'
import InquiryModal from './components/InquiryModal'
import HomeAutomation from './pages/HomeAutomation'
import AudioVisual from './pages/AudioVisual'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <ScrollToTop/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/careers' element={<CareerPage/>}/>
      <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='/products' element={<ProductPage/>}/>
      <Route path='/faq' element={<FaqPage/>}/>
      <Route path='/inquiry' element={<InquiryModal/>}/>
      <Route path='/home-automation' element={<HomeAutomation/>}/>
      <Route path='/audio-visual' element={<AudioVisual/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App