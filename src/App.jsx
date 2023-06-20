import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import './index.css'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Products from './pages/products/Products'
import Contact from './pages/contact/Contact'
import Footer from './components/footer/Footer'


export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route index='Home' element={<Home/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Products' element={<Products/>}/>
          <Route path='Contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
