
import React, { forwardRef } from 'react';

// Data for the therapy cards (మీ పాత కోడ్ ప్రకారం)
// ⚠️ ORDER CHANGED HERE 
const therapies = [
  // 1st: Speech Therapy
  { icon: './image5.png', title: 'Speech Therapy' },
  // 2nd: Special Education
  { icon:'./image4.png', title: 'Special Education' },
  // 3rd: Occupational Therapy
  { icon: './image3.png', title: 'Occupational Therapy' },
  // 4th: Behavioural Therapy
  { icon: './image2.png', title: 'Behavioural Therapy' },
  // Remaining therapies follow
  { icon: './Aba.png', title: 'ABA Therapy' }, 
  { icon: './phpimage.png', title: 'Physiotherapy' }, 
];

function TherapyCard({ icon, title, onTherapyClick }) { 
  // ... (Card component logic) ...
  return (
    <div className="therapy-card">
      <div className="icon-circle">
        <img 
   src={icon} 
   alt={`${title} icon`} 
   className="therapy-icon" 
/>
      </div>
      
      <h3>{title}</h3> 
      
      <button 
        className="view-button"
        onClick={() => onTherapyClick(title) 
        } 
      >
        View
      </button>
    </div>
  );
} 

// 🆕 forwardRef ను ఉపయోగించి ref ను రిసీవ్ చేసుకోండి
const Therapies = forwardRef(({ onTherapyClick }, ref) => {
  return (
    // 🆕 ref ను ఈ సెక్షన్‌కు అటాచ్ చేయండి
    <section className="aivi-therapies" ref={ref}> 
      <h2 >Therapies We Provide</h2>
      <div className="therapy-grid">
        {therapies.map((therapy, index) => (
          <TherapyCard 
            key={index} 
            icon={therapy.icon} 
            title={therapy.title} 
            onTherapyClick={onTherapyClick}
          />
        ))}
      </div>
    </section>
  );
});

export default Therapies;