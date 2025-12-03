import React from 'react';

function Footer() {
  const logoPath = './logo.png'; 

  return (
    <footer className="aivi-footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logoPath} alt="Tattva Logo" className="logo" />
          <p>Tattva child development center</p>
        </div>
        
        {/* About Us Section */}
        
        
        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>+91 8340051999 +91 8340061999</p>
          <p>Info@tattvaclinics.com</p>
          <address>
          jio mart building second floor p&t colony road number 2 behind kakatiya hospital medipally 500098          </address>
        </div>
        
        {/* Follow Us Section */}
        <div className="footer-section follow-us">
          <h3>Follow us</h3>
          <a href="https://www.instagram.com/tattva_cdc?igsh=MTV1Zng5M2RmeHZyZA==" target="_blank" rel="noopener noreferrer">
            {/* Replace this with an actual Instagram Icon component or SVG */}
            <span className="instagram-icon">📸 Instagram</span>
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <img src={logoPath} alt="Tattva Logo" className="logo-small" />
        <p>Copyright © Tattva child development center </p>
      </div>
    </footer>
  );
}

export default Footer;