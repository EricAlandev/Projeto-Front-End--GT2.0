import React, { useState } from 'react';

const BuyBox = ({
  name = 'Produto',
  stars = 0,
  rating = 0,
  price = 0,
  priceDiscount = null,
  description = 'Descrição indisponível.',
  sizes = [],
  colors = [],
  reference = 'N/A',
}) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const formatRating = (num) => num?.toFixed(1) || '0.0';
  const formatPrice = (num) =>
    num?.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }) || 'R$ 0,00';

  return (
    <div className="max-w-lg text-dark-gray-1">
      {/* Nome e categoria */}
      <h1 className="text-2xl font-semibold mb-1">{name}</h1>
      <p className="text-sm text-gray-500 mb-1">Casual | Nike | <span className="text-gray-400">REF:{reference}</span></p>

      {/* Avaliação */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-1 mt-[10px] bg-yellow-300 text-white text-sm px-2 py-1 rounded">
          <span>{formatRating(stars)}</span>
          <img src="/assets/4.5stars.png" alt="Estrelas" className="w-14 h-2.5" />
        </div>
        <span className="text-sm text-gray-500 mt-[10px]">({rating} avaliações )</span>
      </div>

      {/* Preço */}
      <div className="flex items-center gap-4 mb-4">
        {priceDiscount ? (
          <>
            <span className="text-lg text-gray-400 line-through">{formatPrice(price)}</span>
            <span className="text-3xl font-bold text-dark-gray-1">{formatPrice(priceDiscount)}</span>
          </>
        ) : (
          <span className="text-3xl font-bold text-dark-gray-1">{formatPrice(price)}</span>
        )}
      </div>

      {/* Descrição */}
      <p className="text-sm text-gray-600 mb-6">{description}</p>

      {/* Tamanhos */}
      {sizes.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm mb-2 font-medium">Tamanho</h4>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-10 h-10 flex items-center justify-center border rounded-md text-sm font-medium transition 
                  ${selectedSize === size
                    ? 'bg-primary text-white border-primary'
                    : 'border-gray-300 text-dark-gray-1 hover:border-primary'}
                `}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Cores */}
      {colors.length > 0 && (
        <div className="mb-8">
          <h4 className="text-sm mb-2 font-medium">Cor</h4>
          <div className="flex gap-3">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full border-2 transition 
                  ${selectedColor === color ? 'border-primary' : 'border-gray-300'}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Botão de comprar */}
      <button className="w-full bg-yellow-400 text-white text-sm font-semibold py-3 rounded hover:opacity-90 transition">
        COMPRAR
      </button>
    </div>
  );
};

export default BuyBox;
