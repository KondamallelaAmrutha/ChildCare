
import React, { useState } from 'react';
import AssessmentPopup from './AssessmentPopup'; // make sure this path matches your file structure

// All therapy data - ORDERED: Speech, Special Education, Occupational, Behavioural
const allTherapyData = {
  // 1st: Speech Therapy
  'Speech Therapy': {
    title: 'Speech Therapy',
    heroText: 'Our speech therapy center offers personalized treatment plans to help individuals improve their communication skills and achieve their goals.',
    details: [
'​Speech issues ​Babbling, Not speaking at all, unclear speech etc.',
    ],
  },
  // 2nd: Special Education
  'Special Education': {
    title: 'Special Education',
    heroText: 'We provide individualized instruction to meet the unique learning needs of children with special requirements, ensuring they reach their full potential.',
    details: [
      '​Difficulties in learning / Academics ​Reading, writing, understanding, slow learning etc.',
    ],
  },
  // 3rd: Occupational Therapy
  'Occupational Therapy': {
    title: 'Occupational Therapy',
    heroText: 'We help children and adults gain independence in all areas of their lives, focusing on improving motor skills and sensory processing.',
    details: [
      '​Problems in doing daily activities ​Walking, Holding Things (Motor issues), self Hygiene etc.',
    ],
  },
  // 4th: Behavioural Therapy
  'Behavioural Therapy': {
    title: 'Behavioural Therapy',
    heroText: 'Our behavioral therapy programs use evidence-based methods like ABA to reduce challenging behaviors and teach essential life skills.',
    details: [
      '​Behavioural issues ​Temper Tantrums, Too quiet, Too loud or any other behaviour that seems odd to you.',
    ],
  },
  // Other Therapies (re-ordered to the end)
  'ABA Therapy': {
    title: 'ABA Therapy (Applied Behavior Analysis)',
    heroText: 'ABA is a scientific approach to understanding behavior and how it is affected by the environment. It is the most researched and effective therapy for Autism Spectrum Disorder (ASD).',
    details: [
      'ABA focuses on teaching socially significant behaviors, such as communication, social skills, academics, and self-care.',
      'Therapy is tailored to individual needs and uses structured, positive reinforcement techniques.',
      'Goals include reducing problem behaviors and increasing functional skills necessary for independence.',
    ],
  },
  'Physiotherapy': {
    title: 'Physiotherapy',
    heroText: 'Pediatric Physiotherapy helps children improve their movement, balance, coordination, strength, and gross motor skills essential for daily activities.',
    details: [
      'Physiotherapy addresses issues like developmental delays, balance and coordination problems, muscle weakness, and difficulties with walking or running.',
      'Treatment includes exercises, stretching, play-based activities, and guidance on using assistive devices (if needed).',
      'It is vital for conditions affecting mobility, such as Cerebral Palsy, Down Syndrome, and physical injuries.',
    ],
  },
};

function TherapyDetailPage({ therapyName, onBackClick }) {
  const [popupOpen, setPopupOpen] = useState(false);
  const data = allTherapyData[therapyName];

  if (!data) {
    onBackClick();
    return null;
  }

  return (
    <div className="therapy-detail-page">
      <button className="back-button" onClick={onBackClick}
      style={{color:'white'}}
      >
        ← Back to Home
      </button>

      {/* Hero Section */}
      <section className="therapy-hero-section">
        <div className="therapy-hero-content">
          <h1>{data.title}</h1>
          <p>{data.heroText}</p>
          <button 
            className="take-assessment-button"
            onClick={() => setPopupOpen(true)}
            style={{color:'white'}}
          >
            Take Assessment
          </button>
        </div>
      </section>

      {/* Details Section */}
      <section className="therapy-details-section" style={{ padding: '40px 10%' }}>
        <h2>What is {data.title} and How Can it Benefit?</h2>
        <div className="content-block">
          {data.details.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Assessment Popup */}
      {popupOpen && <AssessmentPopup onClose={() => setPopupOpen(false)} />}
    </div>
  );
}

export default TherapyDetailPage;