import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App