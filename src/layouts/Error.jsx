//Pagina usada para caso o usuário bote uma url inexistente dentro do cadastro ou login.

import { Link } from "react-router-dom";

const Unfound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      {/* Imagem do erro 404 */}
      <figure className="w-[450px] mt[120px]">
        <img src="/assets/error.webp" alt="Página não encontrada" className="w-full h-auto" />
      </figure>

      {/* Mensagem de erro */}
      <h1 className="mt-[30px] text-[26px] font-[Inter] font-light text-[#333]">
        Página não encontrada
      </h1>

      {/* Link para a página inicial */}
      <div className="mt-[15px] ">
        <Link
          to="/"
          className="inline-block mt-[-35px] pb-1 border-b-2 text-[19px] hover:border-b-0 hover:bg-black hover:text-white
            hover:text-center hover:pt-[5px] hover:pl-[10px] hover:pb-[5px] hover:pr-[10px] hover:rounded-[4px] duration-200"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
};

export default Unfound;
