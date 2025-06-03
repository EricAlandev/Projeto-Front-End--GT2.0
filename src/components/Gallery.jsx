import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Gallery = ({ className, width, height = 'auto', radius = '8px' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  const totalSlides = 4;

  const getSlideClasses = (index) => {
    if (currentIndex === index) return 'opacity-100 translate-x-0 z-10';
    if (currentIndex < index) return 'opacity-0 -translate-x-full z-0';
    return 'opacity-0 translate-x-full z-0';
  };

  const SlideContent = ({
    reverse = false,
    title,
    subtitle,
    description,
    imageSrc,
    ornamentSrc = '/assets/Ornament.png',
    alt = 'Produto',
  }) => (
    <div className="relative bg-[#f9f9f9] p-8 rounded-xl shadow-md w-full h-[681px] flex items-center justify-center overflow-hidden">
      <div className={`flex items-center w-full h-full px-16 ${reverse ? 'flex-row-reverse gap-24' : 'gap-16'}`}>
        {/* Texto */}
        <div className={`flex flex-col ml-[37px] gap-4 w-1/2 justify-center z-10 ${reverse ? 'pl-16' : ''}`}>
          <p className="font-[Inter] mt-[-55px] text-[19px] text-[#F6AA1C] font-semibold">
            {subtitle}
          </p>
          <h2 className="font-[Inter] text-[84px] font-bold text-[#1F1F1F] leading-none">
            {title}
          </h2>
          <p className="font-[Inter] mt-[20px] text-[20px] text-[#474747]">
            {description}
          </p>
          <Link
            to="/colecao"
            className="flex justify-center bg-[#d81b60] font-[Inter] text-[19px] text-white w-[220px] mt-[10px] px-5 py-3 rounded-md text-base hover:bg-[#a71347] transition"
          >
            Ver Ofertas
          </Link>
        </div>

        {/* Imagem */}
        <div className="relative w-1/2 flex justify-center items-center">
          <img
            src={ornamentSrc}
            className={`absolute ${reverse ? 'left-12' : 'right-12'} top-12 w-[155px] h-[155px] z-0 opacity-90`}
            alt="Ornamento"
          />
          <img
            src={imageSrc}
            className={`relative w-[700px] h-[640px] transform ${
              reverse 
                ? 'rotate-[5deg] scale-x-[-1] mr-[-80px]'
                : 'rotate-[-5deg] ml-[-80px]'
            } scale-[1.3]`}
            alt={alt}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`${className} relative overflow-hidden`}
      style={{ width: '100vw', marginTop: '30px', height, borderRadius: radius }}
    >
      {/* Slide 1 */}
      <div className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${getSlideClasses(0)}`}>
        <SlideContent
          title="Queima de estoque Nike 🔥"
          subtitle="Melhores ofertas personalizadas"
          description={
            <>
              Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor laboris eiusmod irure consectetur.
            </>
          }
          imageSrc="/assets/SneakerBranco.png"
        />
      </div>

      {/* Slide 2 */}
      <div className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${getSlideClasses(1)}`}>
        <SlideContent
          reverse
          title="Lançamento Adidas "
          subtitle="Coleção Exclusiva"
          description={<> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, perferendis vitae neque consectetur fuga, et.</>}
          imageSrc="/assets/Ultraboost.png"
        />
      </div>

      {/* Slide 3 (com quebra em Jordan) */}
      <div className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${getSlideClasses(2)}`}>
        <SlideContent
          title={
            <>
              Air Max<br /> Limitado 
            </>
          }
          subtitle="Só essa semana"
          description={<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente quibusdam, possimus tenetur voluptates.</>}
          imageSrc="/assets/AirMax.png"
        />
      </div>

      {/* Slide 4*/}
      <div className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${getSlideClasses(3)}`}>
        <SlideContent
          reverse
          title={<>
          Adidas 
          </>}
          subtitle="Novo lançamento"
          description={<>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur a quis id beatae, praesentium delectus ducimus</>}
          imageSrc="/assets/Ultraboost.png"
        />
      </div>

      {/* Bolinhas de navegação */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className="w-4 h-4 rounded-full transition-colors duration-300"
            style={{
              backgroundColor: currentIndex === idx ? '#C92071' : '#ccc',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label={`Ir para o slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
