import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './views/Home';
import About from './views/About';
import Products from './views/Products';
import Contact from './views/Contact';
import Footer from './components/Footer';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SkillDetails from './views/SkillDetails';
import Projects from './components/Projects';
AOS.init();
function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/skilldetails/:id' element={<SkillDetails/>}/>
          <Route path='/projects/:id?' element={<Projects/>}/>
         
        </Routes>
       
        <Footer/>
      </Router>
    </>
  )
}

export default App
