
import React from 'react';

function Footer() {
  const logoPath = './logo.png'; 
  const phone1 = '+91 8340051999';
  const phone2 = '+91 8340061999';
  const email = 'Info@tattvaclinics.com';
  const address = 'jio mart building second floor p&t colony road number 2 behind kakatiya hospital medipally 500098';
  
  const mapUrl = 'https://maps.google.com/?cid=1629639712397512107&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ'; 
  
  const whiteLinkStyle = { 
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <footer className="aivi-footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logoPath} alt="Tattva Logo" className="logo" />
          <p style={{ color: 'white' }}>Tattva child development center</p> 
        </div>

        <div className="footer-section contact">
          <h3 style={{ color: 'white' }}>Contact</h3>

          {/* Phone Numbers */}
          <p>
            <a href={`tel:${phone1}`} style={whiteLinkStyle}>{phone1}</a> | 
            <a href={`tel:${phone2}`} style={whiteLinkStyle}>{phone2}</a>
          </p>

          {/* Email */}
          <p>
            <a href={`mailto:${email}`} style={whiteLinkStyle}>{email}</a>
          </p>

          {/* Address */}
          <address>
            <a href={mapUrl} target="_blank" rel="noopener noreferrer" style={whiteLinkStyle}>
              {address}
            </a>
          </address>
        </div>

        <div className="footer-section follow-us">
          <h3 style={{ color: 'white' }}>Follow us</h3>
          <a
            href="https://www.instagram.com/tattva_cdc?igsh=MTV1Zng5M2RmeHZyZA=="
            target="_blank"
            rel="noopener noreferrer"
            style={whiteLinkStyle}
          >
            📸 Instagram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <img src={logoPath} alt="Tattva Logo" className="logo-small" />
        <p style={{ color: 'white' }}>Copyright © Tattva child development center</p>
      </div>
    </footer>
  );
}

export default Footer;
