
import React from 'react';

const sectionStyle = {
  backgroundColor: '#f0f4ff',
  padding: '80px 20px',
  textAlign: 'center',
};
const containerStyle = {
  maxWidth: '900px',
  margin: '0 auto',
};
const paragraphStyle = {
  fontSize: '17px',
  color: '#333',
  lineHeight: 1.6,
  marginBottom: '30px',
};
const imageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '40px',
};

const WelcomeSection = () => {
  // Heading styles are now defined inline to support dual color using <span>
  const headingPart1Style = {
    color: 'purple', // Dark Purple (Welcome To Tattva)
    fontSize: '40px',
    fontWeight: 600,
  };
  const headingPart2Style = {
    color: 'blue', // Dark Blue (Child Development Center)
    fontSize: '40px', // Ensure both parts have the same size
    fontWeight: 600,
  };

  return (
    <div style={sectionStyle}>
      <div style={containerStyle}>
        {/* Dual-color Heading Implementation */}
        <h1 style={{ marginBottom: '20px' }}>
          <span style={headingPart1Style}>
            Welcome To Tattva
          </span>
          {' '}
          <span style={headingPart2Style}>
            Child Development Center
          </span>
        </h1>
        <p style={paragraphStyle}>
          "By offering specialised therapy, medical care and tailored learning support in one place—we empower each child with special needs—whether autism, dyslexia, ADHD or non-verbal—to reach their full potential."
        </p>
        <p
          style={{
            ...paragraphStyle,
            textAlign: 'left',
            maxWidth: '600px',
            margin: '30px auto',
            fontStyle: 'italic',
          }}
        >
          "An inclusive, understanding environment helps children build social skills,
           confidence and a sense of belonging—and enables society to embrace diversity,
           acceptance and empathy from a young age."
        </p>

        {/* Real image from public folder */}
        <div style={imageContainerStyle}>
          <img
            src="./image1.png"   /* adjust name/path as per your file */
            alt="Child care"
            style={{ width: '400px', height: 'auto', border: '1px solid #ccc' }}
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;