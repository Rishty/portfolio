import React from 'react'
import { useNavigate } from "react-router-dom";
import Skills from '../components/Skills';


function Home() {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact");
  
    };
  return (
    <>
     <div className="banner">
      <div className="item1">
        <h1>Hi</h1>
        <h1>I'm <span style={{color:'red'}}>Rani</span></h1>
        <h1>Digital Marketing Executive</h1>
        <button className='button' onClick={handleClick} >Contact Us</button>
        
      </div>
      <div className="item2"><img src='/image/dp.png' alt="" width={500}/></div>
     </div>
     <br />
     <h1 style={{color:'red', textAlign:'center'}}>My Skills</h1>
      <Skills/>
    </>
  )
}

export default Home