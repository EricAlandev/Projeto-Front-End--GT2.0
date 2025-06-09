import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';
import ProductListing from '../components/ProductListing';

// Featured Collections (Cards fixos)
// FeaturedCollections (Cards fixos) - CORRIGIDO
const FeaturedCollections = () => {
  const featuredProducts = [
    {
      image: "/assets/camisaSupreme.png",
      title: "Novo drop \nSupreme",
      discount: "30% OFF",
    },
    {
      image: "/assets/sneakersBlack.png",
      title: "Coleção \nAdidas",
      discount: "30% OFF",
    },
    {
      image: "/assets/headset.png",
      title: "Novo \nBeats Bass",
      discount: "30% OFF",
    },
  ];

  return (
    <Section
      title={
        <span className="font-[700] text-[#474747] mt-[40px] mb-[10px] ml-[75px] block">
          Coleções em destaque
        </span>
      }
    >
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-8 mt-8 px-4">
        {featuredProducts.map((product, index) => (
          <div
            key={index}
            className="group relative bg-[#E7F6F6] rounded-[16px] w-full md:w-[30%] h-[240px] flex items-center p-6 hover:scale-[1.02] transition-transform shadow-lg overflow-hidden"
          >
            <div className="flex flex-col justify-between h-full z-10 w-[50%] pr-4">
              <div className="bg-[#E7FF86] px-4 py-2 rounded-md text-[16px] font-bold font-[Inter] text-[#333] w-fit">
                {product.discount}
              </div>
              <h3 className="text-[28px] font-bold font-[Inter] text-[#1F1F1F] leading-tight">
                {product.title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h3>
              <Link
                to="/colecao"
                className="bg-white px-6 py-2 rounded-md text-[#D81B60] font-bold text-[16px] border border-[#e0e0e0] hover:bg-[#ffe6f0] transition w-fit z-20 relative"
                style={{
                  marginTop: '-10px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              >
                Comprar
              </Link>
            </div>
            <div className="absolute right-0 top-0 h-full w-[60%] flex items-center justify-end">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-auto max-h-[240px] object-contain object-right"
                style={{ marginRight: '-10px' }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};


// FeaturedCollections2 (Slider arrastável horizontal)
const FeaturedCollections2 = () => {
  const sliderRef = useRef(null);

  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="flex flex-col justify-center mt-15">
      <h2 className="font-Inter font-bold text-2xl text-[#474747] mb-6 text-center">
        Coleções em Destaque
      </h2>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto cursor-grab select-none md:justify-center"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          gap: '20px',
          padding: '0 20px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <img
          src="/assets/GroupCoolections.png"
          alt="Group of All the Collections"
          className="max-w-[750px] min-w-[750px] object-contain rounded-lg"
          style={{ userSelect: 'none' }}
          draggable={false}
        />
      </div>
    </div>
  );
};


// Produtos em Alta (Grid responsivo)
const ProdutosEmAlta = () => {
  const produtos = [
    { id: "1", name: "K-Swiss V8 - Masculino", image: "/assets/SpatatoK-swiss.png", price: 200, priceDiscount: 149.9 },
    { id: "2", name: "Nike Air Max - Feminino", image: "/assets/AirMax.png", price: 350, priceDiscount: 299.9 },
    { id: "3", name: "Adidas UltraBoost - Unissex", image: "/assets/Ultraboost.png", price: 400, priceDiscount: 350 },
    { id: "4", name: "Air Jordan - Collector Edition", image: "/assets/AirJordanCollector.png", price: 320, priceDiscount: 270 },
    { id: "5", name: "Nike Air Max - Masculino", image: "/assets/SneakerBranco.png", price: 1500, priceDiscount: 1300 },
    { id: "6", name: "Adidas UltraBoost - Unissex", image: "/assets/Ultraboost.png", price: 400, priceDiscount: 350 },
    { id: "7", name: "Nike Air Max - Feminino", image: "/assets/AirMax.png", price: 350, priceDiscount: 299.9 },
    { id: "8", name: "K-Swiss V8 - Masculino", image: "/assets/SpatatoK-swiss.png", price: 139.9, priceDiscount: 99.99 },
  ];

  return (
    <div className="mt-28 mb-25 px-6 max-w-[1650px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 px-2 gap-3 md:gap-0">
        <h2 className="text-3xl md:text-3xl text-[#474747] font-bold">
          Produtos em alta
        </h2>
        <Link
          to={'/produtos'}
          className="text-[#C92071] text-[18px] mr-[10px] md:text-[18px] hover:underline"
        >
          Ver todos <span>→</span>
        </Link>
      </div>

      {/* Passa todos os produtos para um único ProductListing */}
      <ProductListing products={produtos} />
    </div>
  );
};



// Especial Offert (Banner com Ellipse)
const EspecialOffert = () => (
  <div className="flex flex-col md:flex-row items-center md:items-start mt-[70px]  mb-[70px] max-w-[1200px] mx-auto px-4">
    <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] flex-shrink-0">
      {/*Imagem da ellipse (bola atrás do sapato para efeito estético) */}
      <img
        src="/assets/Ellipse.png"
        alt="Ellipse"
        className="absolute top-0 left-0 w-full h-full object-contain"
      />
      {/*Imagem da ellipse (bola atrás do sapato para efeito estético) */}
      <img
        src="/assets/AirJordanCollector.png"
        alt="photo of the sneaker"
        className="absolute top-0 left-0 w-full h-full object-contain"
      />
    </div>

    {/* Aqui adiciona margem lateral, somente no desktop */}
    <div className="flex flex-col items-center md:items-start max-w-[600px] text-center md:text-left md:ml-[45px] mt-2 md:mt-0">
      <h3 className="text-[#C92071] font-[700] text-[16px] mb-[14px]">
        Oferta Especial
      </h3>
      <h2 className="text-[#474747] text-[48px] font-[Inter] font-[700] leading-none mb-6">
        Air Jordan edição de <br /> colecionador
      </h2>
      <p className="text-[18px] mb-[10px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, magnam 
        deleniti! Excepturi consequatur saepe,  amet quaerat officiis voluptatibus, 
        animi qui, magnam deleniti sunt ullam incidunt adipisci non laboriosam dolor 
        dignissimos!
      </p>
      <Link to={'/produtos'} className="bg-[#C92071] flex justify-center text-white text-[18px] mt-[20px] w-[180px] px-2 py-1.5 rounded-[8px]">
        Ver oferta
      </Link>
    </div>
  </div>
);

export { FeaturedCollections, FeaturedCollections2, ProdutosEmAlta, EspecialOffert };
