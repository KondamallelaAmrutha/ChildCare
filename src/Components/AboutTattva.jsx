
import React from 'react';

// --- Base Styles ---
const aboutSectionStyle = {
  backgroundColor: '#1E3A8A',
  color: 'white',
  padding: '60px 20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
};

const contentContainerBase = {
  display: 'flex',
  maxWidth: '900px',
  width: '100%',
  gap: '40px',
};

const textColumnBase = {
  flex: 2,
};

const imageColumnBase = {
  flex: 1,
  minWidth: '350px',
};

const headingStyle = {
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '20px',
  textTransform: 'uppercase',
};

const paragraphStyle = {
  fontSize: '16px',
  lineHeight: 1.6,
  marginBottom: '15px',
};

const imageContainerStyle = {
  backgroundColor: 'white',
  padding: '10px',
  borderRadius: '5px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
};

// --- COMPONENT ---
const AboutTattva = () => {
  
  // Mobile (max-width: 768px) detection
  const isMobile = window.innerWidth <= 768;

  // Apply responsive layout
  const contentContainerStyle = {
    ...contentContainerBase,
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '20px' : '40px',
  };

  const textColumnStyle = {
    ...textColumnBase,
    paddingRight: isMobile ? '0px' : '20px',
  };

  const imageColumnStyle = {
    ...imageColumnBase,
    minWidth: isMobile ? '100%' : '350px',
  };

  return (
    <div style={aboutSectionStyle}>
      <div style={contentContainerStyle}>

        {/* Left Column */}
        <div style={textColumnStyle}>
          <h2 style={headingStyle}>ABOUT TATTVA!</h2>

          <p style={paragraphStyle}>
            Our Center Designed to Provide a stimulating environment where child can Learn, Play and Grow.
            We aim to foster their development through engaging activities and a caring, safe environment.
          </p>

          <p style={paragraphStyle}>
            Types of special needs vary in severity. For example, children with Autism, Down Syndrome,
            Dyslexia, ADHD, or non-verbal may be considered to have special needs.
            However, special needs can also include medical and emotional impairments.
          </p>
        </div>

        {/* Right Column */}
        <div style={imageColumnStyle}>
          <div style={imageContainerStyle}>
            <img
              src="./image12.png"
              alt="About Tattva"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutTattva;