import React from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';
import ProductListing from '../components/ProductListing';

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
    <Section title={<h2 className='font-[700] text-[#474747] mt-[40px] mb-[10px] ml-[55px]'>Coleções em destaque</h2>}>
      <div className="flex flex-wrap justify-center gap-8 mt-8 px-4">
        {featuredProducts.map((product, index) => (
          <div
            key={index}
            className="group relative bg-[#E7F6F6] rounded-[16px] w-[580px] h-[300px] flex items-center p-6 hover:scale-[1.02] transition-transform shadow-lg overflow-hidden"
          >
            {/* Texto */}
            <div className="flex flex-col justify-between h-full z-10 w-[50%] pr-4">
              <div className="bg-[#E7FF86] px-4 py-2 rounded-md text-[16px] font-bold font-[Inter] text-[#333] w-fit">
                {product.discount}
              </div>
              <h3 className="text-[36px] font-bold font-[Inter] text-[#1F1F1F] leading-tight">
                {product.title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h3>
              
              {/* Botão sobreposto */}
              <Link
                to="/colecao"
                className="bg-white px-6 py-2 rounded-md text-[#D81B60] font-bold text-[16px] border border-[#e0e0e0] hover:bg-[#ffe6f0] transition w-fit 
                z-20 relative ml-[-20px]"
                style={{
                  marginLeft: '0px',
                  marginTop: '-10px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              >
                Comprar
              </Link>
            </div>

            {/* Imagem ajustada */}
            <div className="absolute right-0 top-0 h-full w-[60%] flex items-center justify-end">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-auto max-h-[320px] object-contain object-right"
                style={{ 
                  marginRight: '-10px'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const FeaturedCollections2 = () => {

  return(
    <div className='flex flex-col justify-center'>

    <h2 className='font-[Inter] font-[700 text-[28px] text-[#474747] flex justify-center mt-[20px] mb-[20px]'>Coleções em Destaque</h2>
    <img src="/assets/GroupCoolections.png" alt="Group of All the COlections" className='w-[750px] ml-[580px]'  />
    </div>
  )
}

const ProdutosEmAlta = () => {
  const produtos = [
    {
      id: "1",
      name: "K-Swiss V8 - Masculino",
      image: "/assets/SpatatoK-swiss.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      id: "2",
      name: "Nike Air Max - Feminino",
      image: "/assets/AirMax.png",
      price: 350,
      priceDiscount: 299.9,
    },
    {
      id: "3",
      name: "Adidas UltraBoost - Unissex",
      image: "/assets/Ultraboost.png",
      price: 400,
      priceDiscount: 350,
    },
    {
      id: "4",
      name: "Air Jordan - Collector Edition",
      image: "/assets/AirJordanCollector.png",
      price: 320,
      priceDiscount: 270,
    },
    {
      id: "5",
      name: "Nike Air Max - Masculino",
      image: "/assets/SneakerBranco.png",
      price: 1500,
      priceDiscount: 1300,
    },
    {
      id: "3",
      name: "Adidas UltraBoost - Unissex",
      image: "/assets/Ultraboost.png",
      price: 400,
      priceDiscount: 350,
    },
    {
      id: "2",
      name: "Nike Air Max - Feminino",
      image: "/assets/AirMax.png",
      price: 350,
      priceDiscount: 299.9,
    },
    {
      id: "1",
      name: "K-Swiss V8 - Masculino",
      image: "/assets/SpatatoK-swiss.png",
      price: 139.9,
    },
  ];

  return (
    <div className="mt-28 ml-30 px-20">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl text-[#474747] font-bold">Produtos em alta</h2>
        <Link to={'/produtos'} className="text-[#C92071] text-[18px] hover:underline mr-[40px]">
          Ver todos <span>→</span>
        </Link> 
      </div>
      <ProductListing products={produtos} />
    </div>
  );
};

const EspecialOffert = () => {

  return(
    <div className='flex justify-center gap-30 mt-[70px] mb-[70px]'>

      {/*Imagem da oferta especial */}
      <divp>
        {/*Imagem da bola atrás, pra dar o efeito estético especial */}
        <img src="/assets/Ellipse.png" alt="" className='mt-[10px] ml-[90px]' />
        <img src="/assets/AirJordanCollector.png" alt="photo of the sneaker" 
        className='mt-[-390px] mb-[20px]' />
      </divp>

      {/*Descrição da oferta especial */}
      <div className='flex flex-col'>
        <h3 className='text-[#C92071] font-[700] text-[16px] 
        mt-[20px] mb-[14px]
        '>Oferta Especial</h3>
        <h2 className='text-[#474747] text-[48px] font-[Inter] font-[700] 
        leading-none
        '>Air Jordan edição de <br /> colecionador</h2>

        <p className='text-[18px] mt-[30px] mb-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, magnam <br />deleniti! Excepturi consequatur saepe, amet quaerat officiis voluptatibus,  <br />animi qui, magnam deleniti sunt ullam incidunt adipisci non laboriosam dolor  <br />dignissimos!</p>

        <button className='bg-[#C92071] text-white text-[18px]
        mt-[20px]
        w-[180px] px-2 py-1.5 rounded-[8px]
        '>Ver oferta</button>
      </div>

     
    </div>
  )
}

export {FeaturedCollections, FeaturedCollections2, ProdutosEmAlta, EspecialOffert};