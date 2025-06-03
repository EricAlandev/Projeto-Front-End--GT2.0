import React, { useState } from 'react';

const ProductGallery = ({ 
  images = [], 
  width = '100%', 
  height = '500px', 
  radius = '8px' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const backgroundColors = [
    '#E2E3FF',
    '#FFE8BC',
    '#FFC0BC',
    '#DEC699',
    '#E8DFCF'
  ];

  const displayedImages = Array.from({ length: 5 }).map((_, index) => ({
    ...images[0], // Usa a mesma imagem principal
    bgColor: backgroundColors[index] // Cor do fundo
  }));

  return (
    <div className="product-gallery" style={{ width }}>
      {/* Imagem principal */}
      <div
        className="main-image-container"
        style={{
          height,
          borderRadius: radius,
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '1.5rem',
          backgroundColor: displayedImages[currentIndex].bgColor,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={displayedImages[currentIndex]?.src}
          alt={`Imagem ${currentIndex + 1}`}
          style={{
            maxWidth: '80%',
            maxHeight: '80%',
            objectFit: 'contain',
            borderRadius: radius,
          }}
        />
      </div>

      {/* Miniaturas */}
      <div className="thumbnails flex gap-2 justify-center">
        {displayedImages.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '4px',
              overflow: 'hidden',
              border: index === currentIndex ? '2px solid #C92071' : '1px solid #ddd',
              padding: 0,
              cursor: 'pointer',
              backgroundColor: img.bgColor,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={img.src}
              alt={`Miniatura ${index + 1}`}
              style={{
                maxWidth: '80%',
                maxHeight: '80%',
                objectFit: 'contain',
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
