import React from 'react';
import { FaDownload } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* Left Image Section */}
        <div style={imageSection}>
          <img
            src="/image/dp2.jpeg" // replace with your actual image path
            alt="Rani Chauhan"
            style={imageStyle}
           
          />
        </div>

        {/* Right Text Section */}
        <div style={textSection}>
          <h2 style={titleStyle}>
            About <span style={{ color: 'red' }}>Me</span>
          </h2>
          <h3 style={nameStyle}>Rani Chauhan</h3>
          <h4 style={roleStyle}>Digital Marketing Executive</h4>

          <p style={paragraphStyle}>
          As a passionate Digital Marketing Executive, I specialize in driving online growth and brand visibility through tailored strategies that combine creativity with data-driven insights. With expertise in SEO, social media, content marketing, and PPC campaigns, I craft strategies that not only engage audiences but also convert them into loyal customers. My goal is to help businesses enhance their digital presence, optimize marketing efforts, and achieve measurable success. Whether it's improving brand awareness, increasing website traffic, or boosting sales, I’m dedicated to delivering results that make an impact.

          </p>
          <p style={paragraphStyle}>
            My passion for solving complex problems and creating innovative solutions drives me to stay up-to-date with the latest technologies and trends in the industry.
          </p>

          <div style={infoGrid}>
            <p><strong style={{ color: 'red' }}>Name :</strong> <span style={{ color: 'white' }}> Rani Chauhan</span></p>
            <p><strong style={{ color: 'red' }}>Phone :</strong> <span style={{ color: 'white' }}>+91-8685034409</span></p>
            <p><strong style={{ color: 'red' }}>Email :</strong> <span style={{ color: 'white' }}> rishtysingh@gmail.com</span></p>
            <p><strong style={{ color: 'red' }}>Address :</strong> <span style={{ color: 'white' }}>Gohana, Sonipat, Haryana</span></p>
          </div>

          <button style={resumeButton}>
            <FaDownload style={{ marginRight: '8px' }} />
            MY RESUME
          </button>
        </div>
      </div>
    </section>
  );
};

// === Styles ===
const sectionStyle = {
  backgroundColor: '#1a1a1a',
  color: 'white',
  padding: '60px 20px',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '40px',
};

const imageSection = {
  flex: '1 1 300px',
  textAlign: 'center',
};

const imageStyle = {
  width: '100%',
  maxWidth: '350px',
  borderRadius: '50%',
  boxShadow: '0 0 30px rgba(255, 0, 81, 0.5)',
};

const textSection = {
  flex: '1 1 500px',
};

const titleStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const nameStyle = {
  fontSize: '2rem',
  marginTop: '10px',
};

const roleStyle = {
  fontSize: '1.3rem',
  color: 'red',
  marginBottom: '20px',
};

const paragraphStyle = {
  color: 'white',
  marginBottom: '15px',
  lineHeight: '1.6',
};

const infoGrid = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '10px 20px',
  marginBottom: '30px',
};

const resumeButton = {
  backgroundColor: 'red',
  color: 'white',
  padding: '12px 20px',
  border: 'none',
  borderRadius: '6px',
  fontWeight: 'bold',
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
};

export default AboutMe;
