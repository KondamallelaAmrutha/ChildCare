
import React, { useState, useEffect } from 'react';

const OurTeam = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size (768px is the breakpoint)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // check on mount
    window.addEventListener('resize', handleResize); // update on resize
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const teamSectionStyle = {
    backgroundColor: '#dfe5f8ff',
    color: 'black',
    padding: '60px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  };

  const contentContainerStyle = {
    display: 'flex',
    maxWidth: '1200px',
    width: isMobile ? '90%' : '100%', 
    gap: '40px',
    // 💡 మార్పు 1: డెస్క్‌టాప్‌లో పక్కపక్కనే (Text ముందు), మొబైల్‌లో స్టాక్డ్ (Text ముందు)
    flexDirection: isMobile ? 'column' : 'row', // 'row-reverse' నుండి 'row'కి మార్చబడింది
    alignItems: isMobile ? 'center' : 'flex-start', 
  };

  const imageColumnStyle = {
    flex: 1,
    minWidth: '300px',
    maxWidth: isMobile ? '400px' : 'none', 
  };

  const textColumnStyle = {
    flex: 2,
    paddingRight: isMobile ? '0' : '20px',
    minWidth: '300px',
    textAlign: isMobile ? 'center' : 'left', 
  };

  const headingStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textTransform: 'uppercase',
    color:'blue',
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
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={teamSectionStyle}>
      <div style={contentContainerStyle}>
        
        {/* 💡 మార్పు 2: Text Column ను Image Column కంటే ముందు ఉంచబడింది */}
        {/* Text Column */}
        <div style={textColumnStyle}>
          <h2 style={headingStyle}>MEET OUR TEAM</h2>
          <p style={paragraphStyle}>
            Our team comprises qualified pediatric specialists, therapists, educators, and support staff dedicated to providing holistic, individualized care.
          </p>
          <p style={paragraphStyle}>
            We believe in continuous professional development and use evidence-based practices to offer the best therapeutic outcomes for children.
          </p>
        </div>

        {/* Image Column */}
        <div style={imageColumnStyle}>
          <div style={imageContainerStyle}>
            <img
              src="./imageTeam.png"
              alt="Our Team"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurTeam;