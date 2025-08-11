import React from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import AdminLayout from './pages/AdminLayout'
import ProductPage from './pages/ProductPage'
import BlogPage from './pages/BlogPage'
import InquiryPage from './pages/InquiryPage'
import AdminLogin from './pages/Login';
import CareerPage from './pages/CareerPage';
function App() {
  return (
    <BrowserRouter>
     <ToastContainer />
    <Routes>
      <Route path='/' element={<AdminLogin/>} />
      <Route path='/dashboard' element={<AdminLayout> <Home/></AdminLayout>} />
      <Route path='/product' element={<AdminLayout><ProductPage/></AdminLayout>} />
      <Route path='/blog' element={<AdminLayout><BlogPage/></AdminLayout>} />
      <Route path='/inquiry' element={<AdminLayout><InquiryPage/></AdminLayout>} />
      <Route path='/job-application' element={<AdminLayout><CareerPage/></AdminLayout>} />
      
    </Routes>
    
    </BrowserRouter>
    // <Home/>
  )
}

export default App