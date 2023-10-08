import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Navbar from './layout/Navbar'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Signup from './pages/signup/Signup'
import Products from './pages/product/Products'
import Shoes from './pages/Shoes/Shoes'
import Tshirts from './pages/TShirts/Tshirts'
import Watches from './pages/Watches/Watches'
import DressShirts from './pages/DressShirts/DressShirts'
import Perfumes from './pages/Perfume/Perfumes'
import Jeans from './pages/jeans/Jeans'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Header/>
    <Routes>
      <Route exact  path='/' element={<Home/>} />
      <Route exact  path='/product' element={<Products/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path= '/signup' element = {<Signup/>} />
      <Route path= '/Shoes' element = {<Shoes/>} />
      <Route path= '/Tshirts' element = {<Tshirts/>} />
      <Route path= '/Watches' element = {<Watches/>} />
      <Route path= '/Dress' element = {<DressShirts/>} />
      <Route path= '/Perfumes' element = {<Perfumes/>} />
      <Route path= '/Jeans' element = {<Jeans/>} />

      
      
     </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App