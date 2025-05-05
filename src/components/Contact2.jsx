import React from 'react';
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div style={{ backgroundColor: '#fff', color: '#000', padding: '50px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p style={{ color: '#333' }}>Feel Free To Contact Me</p>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
          Get In <span style={{ color: 'red' }}>Touch</span>
        </h2>
        <hr style={{ border: '2px solid red', width: '80px', margin: '10px auto' }} />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
        {/* Contact Form */}
        <div style={{ flex: '1 1 400px', maxWidth: '500px' }}>
          <h3>Contact Me</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <input type="text" placeholder="Name" style={inputStyle} />
              <input type="email" placeholder="Email" style={inputStyle} />
            </div>
            <input type="text" placeholder="Subject" style={inputStyle} />
            <textarea placeholder="Message" rows="5" style={inputStyle}></textarea>
            <button style={buttonStyle}>SEND &gt;</button>
          </form>
        </div>

        {/* Contact Info */}
        <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
          <h3>Contact Info</h3>
          <div style={infoItem}><FaUser /> <span>Rani Chauhan</span></div>
          <div style={infoItem}><FaPhone /> <span>+91-8685034409</span></div>
          <div style={infoItem}><FaEnvelope /> <span>rishtysingh@gmail.com</span></div>
          <div style={infoItem}><FaMapMarkerAlt /> <span>Gohana, Sonipat, Haryana</span></div>
          <div style={{ marginTop: '20px' }}>
            <span style={{ marginRight: '10px' }}>Social</span>
            <FaLinkedin style={iconStyle} />
            <FaGithub style={iconStyle} />
            <FaTwitter style={iconStyle} />
            <FaInstagram style={iconStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: '12px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  width: '100%',
  backgroundColor: '#f0f0f0',
};

const buttonStyle = {
  backgroundColor: 'red',
  color: '#fff',
  padding: '12px 20px',
  border: 'none',
  borderRadius: '6px',
  fontWeight: 'bold',
  cursor: 'pointer',
  width: '150px',
};

const infoItem = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '15px',
  color: 'red',
};

const iconStyle = {
  fontSize: '1.5rem',
  margin: '0 8px',
  color: '#000',
  cursor: 'pointer',
};

export default ContactSection;

