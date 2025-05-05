import React from 'react'
import { useNavigate } from "react-router-dom";
import Skills from '../components/Skills';
import Slider from '../components/Slider'
import Type from '../components/Type'
import Clients from '../components/Clients'
import Contact2 from '../components/Contact2'


function Home() {
  
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  
    };
  return (
    
    <>
     <div className="banner" id='banner'>
      <div className="item1">
        <h1>Hi</h1>
        <h1>I'm <span style={{color:'red'}}>Rani</span></h1>
        <h1><Type/></h1>
        <button className='button' onClick={()=>handleClick('/Contact')} >Contact Us</button>
        <button className='button' onClick={()=>handleClick} >Download CV</button>
        
      </div>
      <div data-aos="fade-left" className="item2"><img src='/image/dp.png' alt="" width={500}/></div>
     </div>
     <br />
     <h1 style={{color:'red', textAlign:'center'}}>My Skills</h1>
      <Skills/>
      <h1 style={{color:'red', textAlign:'center'}}>My Clients</h1>
    <Slider/>
    <Clients/>
    <Contact2/>
    </>
  )
}

export default Home