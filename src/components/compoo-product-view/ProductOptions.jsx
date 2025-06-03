// src/components/compo-product-view/ProductOptions.jsx
import { useState } from 'react';

const ProductOptions = ({ options, radius, shape, type }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const getOptionStyle = (option, index) => {
    const baseStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      marginRight: '10px',
      border: '1px solid lightgray'
    };

    if (shape === 'square') {
      baseStyle.width = '46px';
      baseStyle.height = '46px';
      baseStyle.borderRadius = radius || '0px';
    } else if (shape === 'circle') {
      baseStyle.width = '31px';
      baseStyle.height = '31px';
      baseStyle.borderRadius = '50%';
    }

    if (selectedOption === index) {
      baseStyle.border = '2px solid #C92071';
    }

    if (type === 'color') {
      baseStyle.backgroundColor = option;
    }

    return baseStyle;
  };

  return (
    <div style={{ display: 'flex', margin: '20px 0' }}>
      {options.map((option, index) => (
        <div
          key={index}
          style={getOptionStyle(option, index)}
          onClick={() => setSelectedOption(index)}
        >
          {type === 'text' && (
            <span style={{ fontSize: '24px', color: '#474747' }}>{option}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;