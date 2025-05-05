// import React from 'react'
// import { CiFacebook } from "react-icons/ci";
// import { FaInstagram } from "react-icons/fa";
// import { CiLinkedin } from "react-icons/ci";




// function Footer() {
//   return (
//     <>
//       <div className="foot">
//       <CiFacebook />
//       <FaInstagram />
//       <CiLinkedin />


        
//       </div>
//     </>
//   )
// }

// export default Footer
import React from 'react';

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section about">
          <h2>Rani</h2>
          <p>As a results-driven Digital Marketing Executive, I specialize in creating and executing strategic online marketing campaigns that drive brand awareness, generate leads, and increase conversions.</p>
        </div>

        

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: rishtysingh075@gmail.com</p>
          <p>Phone: +91-8685034409</p>
        </div>

        <div className="footer-section social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://facebook.com"><FaFacebookF /></a>
            <a href="https://instagram.com"><FaInstagram /></a>
            <a href="https://linkedin.com"><FaLinkedinIn /></a>
            <a href="mailto:ranik@example.com"><FaEnvelope /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Rani | All rights reserved</p>
      </div>
      <a href="#banner">click</a>
    </footer>
  );
};

export default Footer;
