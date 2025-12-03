import React from 'react';

// Data for the 3 steps (Based on Image 3)
const steps = [
  { icon: '/images/icon_evaluate.png', title: 'Evaluate', text: 'We diagnose the child with the relavent disorder' },
  { icon: '/images/icon_baseline.png', title: 'Baseline', text: 'We assess the severity of the disorder and suggest the theray needed' },
  { icon: '/images/icon_therapy.png', title: 'Therapy', text: 'Our professional team gives their best to reach the therapy goals' },
];

function StepCard({ icon, title, text }) { 
  return (
    <div className="step-card">
      {/* FIX 1: Corrected dynamic alt syntax using template literal (backticks) */}
      <img src={icon} alt={title +  "icon"} className="step-icon"/> 
      
      <div className="step-number"></div> {/* Placeholder for the number 1, 2, 3 circles */}
      
      {/* FIX 2 & 3: Corrected missing opening '<' on h3 and p tags */}
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function HowWeHelp() {
  return (
    <section className="aivi-how-we-help">
      <h2>HOW WE HELP ?</h2>
      <p className="intro-text">
        We follow a standerd pattern to identify disorder, its severity and suggest the best therapies.
      </p>
      <div className="steps-container">
        {steps.map((step, index) => (
          <StepCard 
            key={index} 
            icon={step.icon} 
            title={step.title} 
            text={step.text} 
          />
        ))}
      </div>
    </section>
  );
}

export default HowWeHelp;
