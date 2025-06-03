import InfoSection from '../compo-footer/InfoSelection'; // Componente de informações

// Função para pegar a data atual

const Footers = () => {
  const socialLinks = [
    { id: 1, name: 'Facebook', icon: '/assets/facebookwhite.png', url: 'https://www.facebook.com' },
    { id: 2, name: 'Instagram', icon: '/assets/InstagramWhite.png', url: 'https://www.instagram.com' },
    { id: 3, name: 'Twitter', icon: '/assets/TwitterWhite.png', url: 'https://www.twitter.com' }
  ];

  const informations = [
    { text: 'Sobre a Digital Store', link: '/about' },
    { text: 'Blog', link: '/blog' },
    { text: 'FAQ', link: '/faq' },
    { text: 'Contato', link: '/contact' }
  ];

  return (
    <footer className="bg-[#1F1F1F] text-white py-10 ">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Container pai flex-row com alinhamento vertical */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          
          {/* Logo + descrição + redes sociais */}
          <div className="flex flex-col flex-shrink-0 md:w-[350px]">
            <div className="text-center md:text-left mb-8 md:mb-0">

              {/*Logo */}
              <div className='flex gap-3 items-center'>
                  <img
                    src="/assets/LogoWhite.png"
                    alt="Logo"
                    className="h-8 w-auto" // Aqui controla pela altura (48px), pode aumentar para h-14, h-16, etc.
                  />
                  <p className='text-[22px] font-[Inter]'>Digital Store</p>
              </div>


              {/*Description */}
              <p className="mt-4 mb-[20px] text-sm font-[Inter]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae turpis a est viverra
                volutpat. Nullam cursus euismod nisl, eu feugiat leo.
              </p>
            </div>

            <div className="flex justify-left gap-3 mb-6">
              {socialLinks.map(link => (
                <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
                  <img
                  src={link.icon}
                  alt={link.name}
                  className="h-5 w-auto object-contain"
                  />

                </a>
              ))}
            </div>
          </div>

          {/* Seções de informações */}
          <div className="flex justify-between flex-grow gap-8">
            <InfoSection title="Informações" informations={informations} />
            <InfoSection title="Serviços" informations={informations} />
            <InfoSection title="Suporte" informations={informations} />
          </div>
        </div>

        {/* Divider e direitos autorais */}
        <hr className="my-8 border-gray-500" />
        <p className="text-center text-sm">
          © 2025 Dominant Streets
        </p>
      </div>
    </footer>
  );
};

export default Footers;
