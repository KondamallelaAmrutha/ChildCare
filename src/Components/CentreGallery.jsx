import React from 'react';

// Data for the gallery (simplified)
const galleryImages = [
  { path: './image6.png', alt: 'Centre sitting area' },
  { path: './image7.png', alt: 'Sensory Wall' },
  { path: './image8.png', alt: 'Shelves with toys' },
   {path: './image9.png', alt: 'Centre sitting area' },
  { path: './image13.png', alt: 'Sensory Wall' },


];

function CentreGallery() {
  // Note: To match the exact complex layout (multiple images in one block) 
  // you will need complex CSS/Grid layout, but this structure holds the content.
  
  return (
    <section className="aivi-gallery">
      <h2>Take a glance at our centre</h2>
      <div className="gallery-layout">
        {/* Placeholder images for the complex grid shown in the image */}
        <div className="gallery-item small-item">
          <img src={galleryImages[0].path} alt={galleryImages[0].alt} />
        </div>
        <div className="gallery-item small-item">
          <img src={galleryImages[1].path} alt={galleryImages[1].alt} />
        </div>
        <div className="gallery-item small-item">
          <img src={galleryImages[2].path} alt={galleryImages[2].alt} />
        </div>
        <div className="gallery-item small-item">
          <img src={galleryImages[3].path} alt={galleryImages[3].alt} />
        </div><div className="gallery-item small-item">
          <img src={galleryImages[4].path} alt={galleryImages[4].alt} />
        </div>
       
        {/* You would repeat and structure these items to match the layout exactly */}
      </div>
    </section>
  );
}

export default CentreGallery;