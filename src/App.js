import React, { useState } from 'react';
import './App.css';

import NavBar from './Components/NavBar';
import WelcomeSection from './Components/WelcomeSection';
import AboutTattva from './Components/AboutTattva';
import OurTeam from './Components/OurTeam';
import Therapies from './Components/Therapies';
import CentreGallery from './Components/CentreGallery';
import Footer from './Components/Footer';
import TherapyDetailPage from './Components/TherapyDetailPage';  // ← correct import

// Services Page
const ServicesPage = ({ onTherapyClick }) => (
  <div style={{ padding: '50px 10%' }}>
    <h2>Therapies We Provide</h2>
    <Therapies onTherapyClick={onTherapyClick} />
  </div>
);

// Contact Page
const ContactPage = () => (
  <div style={{ padding: '50px 10%' }}>
            <h2 style={{ color: 'Blue' }}>Contact Us</h2>

    <p>For enquiries or appointments, call us at:</p>
    <p><strong>+91 8340051999</strong></p>
    <p><strong>+91 8340061999</strong></p>
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [selectedTherapy, setSelectedTherapy] = useState(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedTherapy(null);
  };

  const handleTherapySelect = (therapyTitle) => {
    setSelectedTherapy(therapyTitle);
    setCurrentPage('TherapyDetail');
  };

  const renderContent = () => {
    if (currentPage === 'About') return <AboutTattva />;
    if (currentPage === 'OurTeam') return <OurTeam />;
    if (currentPage === 'Services') return <ServicesPage onTherapyClick={handleTherapySelect} />;
    if (currentPage === 'Contact') return <ContactPage />;
    if (currentPage === 'TherapyDetail' && selectedTherapy)
      return <TherapyDetailPage therapyName={selectedTherapy} onBackClick={() => setCurrentPage('Services')} />;

    // Default Home Page
    return (
      <>
        <WelcomeSection />
        <AboutTattva />
        <OurTeam />
        <Therapies onTherapyClick={handleTherapySelect} />
        <CentreGallery />
      </>
    );
  };

  return (
    <div className="App">
      <NavBar onPageChange={handlePageChange} />
      <main>{renderContent()}</main>
      <Footer />
    </div>
  );
}

export default App;