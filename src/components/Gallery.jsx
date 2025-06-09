import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Gallery = ({ className = '', height = 'auto', radius = '8px' }) => {
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
    imageSizeClass = 'w-[700px] h-[640px]',
    ornamentSizeClass = 'w-[155px] h-[155px]',
    ornamentPositionClass = '',
    showMobileDots = false,
    currentIndex,
    setCurrentIndex,
    totalSlides,
    index,
  }) => {
    const textMarginBottomClass =
      index === 1 || index === 3
        ? 'md:mb-[10px]'
        : 'md:mb-[20px]';

    const customMarginClass =
      index === 1 || index === 3
        ? 'md:mb-[10px]'
        : 'md:mb-[20px]';

    const additionalDesktopMargin =
      (index === 1 || index === 3) ? 'md:mb-[10px]' : '';

    return (
      <div
        className="relative bg-[#f9f9f9] p-8 rounded-xl shadow-md w-full h-[681px] max-[1024px]:h-auto flex items-center justify-center overflow-hidden"
        style={{ borderRadius: radius }}
      >
        <div
          className={`flex items-center w-full h-full px-16 ${
            reverse ? 'flex-row-reverse gap-24' : 'gap-16'
          } max-[1024px]:flex-col-reverse max-[1024px]:gap-8 max-[1024px]:px-6 max-[1024px]:w-[95vw] max-[1024px]:mx-auto`}  // Adicionado w-[95vw] e mx-auto
        >
          {/* Texto */}
          <div
            className={`flex flex-col gap-4 w-1/2 justify-center h-full z-10 ${textMarginBottomClass} ${
              reverse ? 'pl-16' : 'ml-[50px]'
            } max-[1024px]:w-full max-[1024px]:pl-4 max-[1024px]:ml-4 max-[1024px]:items-center max-[1024px]:text-center max-[1024px]:px-6`}  // Adicionado ml-0 e px-6
          >
            <p className="font-[Inter] text-[19px] max-[640px]:text-[14px] text-[#F6AA1C] font-semibold">
              {subtitle}
            </p>

            <h2 className="font-[Inter] text-[84px] max-[1024px]:text-[52px] max-[640px]:text-[28px] font-bold text-[#1F1F1F] leading-none whitespace-pre-line">
              {title}
            </h2>

            <p className="font-[Inter] mt-2 leading-[1.2] text-[20px] max-[640px]:text-[14px] text-[#474747]">
              {description}
            </p>

            <Link
              to="/colecao"
              className="flex justify-center bg-[#d81b60] font-[Inter] text-[19px] text-white w-[220px] mt-0.5 px-5 py-3 rounded-md text-base hover:bg-[#a71347] transition"
            >
              Ver Ofertas
            </Link>

            {/* Bolinhas de navegação - apenas mobile */}
            {showMobileDots && (
              <div className="flex gap-3 justify-center mt-4 md:hidden">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className="w-4 h-4 rounded-full transition-colors duration-300 max-[640px]:w-3 max-[640px]:h-3"
                    style={{
                      backgroundColor:
                        currentIndex === idx ? '#C92071' : '#ccc',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    aria-label={`Ir para o slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Imagem */}
          <div className="relative w-1/2 max-[1024px]:w-full flex justify-center items-center">
            <img
              src={ornamentSrc}
              className={`absolute ${ornamentPositionClass} top-20 w-[170px] h-[170px] z-0 opacity-90 max-[640px]:w-[100px] max-[640px]:h-[100px] mr-[80px]`}
              alt="Ornamento"
            />

            <img
              src={imageSrc}
              className={`relative ${imageSizeClass} max-[1024px]:w-[420px] max-[1024px]:h-[380px] max-[640px]:w-[320px] max-[640px]:h-[280px] transform ${
                reverse
                  ? 'rotate-[5deg] scale-x-[-1] -ml-24 max-[1024px]:ml-0'
                  : 'rotate-[-5deg] -ml-24 max-[1024px]:ml-0'
              }`}
              alt={alt}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`${className} relative overflow-hidden max-[640px]:overflow-visible`}
      style={{ width: '100vw', marginTop: '30px', height, borderRadius: radius }}
    >
      {[0, 1, 2, 3].map((index) => {
        const isFirstSlide = index === 0;

        const imageSizeClass = isFirstSlide
          ? 'w-[700px] h-[640px] md:w-[780px] md:h-[710px]'
          : 'w-[700px] h-[640px]';

        const ornamentSizeClass = isFirstSlide
          ? 'w-[180px] h-[180px] md:w-[220px] md:h-[220px]'
          : 'w-[155px] h-[155px]';

        const ornamentPositionClass = isFirstSlide
          ? 'right-8 md:right-6'
          : index % 2 !== 0
          ? 'left-12'
          : 'right-12';

        const textMarginBottomClass =
          index === 1 || index === 3 ? 'md:mb-[10px]' : 'md:mb-[20px]';

        return (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${getSlideClasses(index)} slide-${index}`}
          >
            <SlideContent
              reverse={index % 2 !== 0}
              title={
                index === 0
                  ? 'Queima de \nestoque Nike 🔥'
                  : index === 1
                  ? 'Lançamento Adidas'
                  : index === 2
                  ? 'Air Max\nLimitado'
                  : 'Adidas \n-Novo'
              }
              subtitle={
                index === 0
                  ? 'Melhores ofertas personalizadas'
                  : index === 1
                  ? 'Coleção Exclusiva'
                  : index === 2
                  ? 'Só essa semana'
                  : 'Novo lançamento'
              }
              description={
                index === 0
                  ? 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.'
                  : index === 1
                  ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, perferendis vitae neque consectetur fuga, et.'
                  : index === 2
                  ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente quibusdam, possimus tenetur voluptates.'
                  : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur a quis id beatae, praesentium delectus ducimus.'
              }
              imageSrc={
                index === 0
                  ? '/assets/SneakerBranco.png'
                  : index === 1
                  ? '/assets/Ultraboost.png'
                  : index === 2
                  ? '/assets/AirMax.png'
                  : '/assets/Ultraboost.png'
              }
              ornamentSrc="/assets/Ornament.png"
              ornamentSizeClass={ornamentSizeClass}
              ornamentPositionClass={ornamentPositionClass}
              imageSizeClass={imageSizeClass}
              showMobileDots={true}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              totalSlides={totalSlides}
              index={index}
            />
          </div>
        );
      })}

      {/* Bolinhas de navegação - apenas desktop */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 transform -translate-x-1/2 gap-3 z-20">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-5 h-5 rounded-full transition-colors duration-300 ${
              currentIndex === idx ? 'bg-[#C92071]' : 'bg-[#ccc]'
            }`}
            aria-label={`Ir para o slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;