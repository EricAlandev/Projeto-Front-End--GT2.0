import React from 'react';
import { Link } from 'react-router-dom';

const CadastroPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#d5d8f3] to-white min-h-screen flex 
    items-start justify-start">
      <div className="bg-white rounded-[7px] w-[850px] h-[580px] 
      ml-[135px] mt-[120px]">
        <div className="w-full p-10">
          <h2 className="text-4xl font-bold mt-[-5px] mb-5 font-[Inter]">Crie sua conta</h2>
          <p className="mb-6.5 text-base font-[Inter]">
            Já possui uma conta? Entre{' '}
            <Link
              to="/entrar"
              className="text-[#D81B60] font-medium hover:underline duration-900"
            >
              aqui
            </Link>
          </p>

          <form className="flex flex-col gap-4">
            <div>
              <label className="block mb-5 text-[15px] font-medium font-[Inter]">Email *</label>
              <input
                type="email"
                placeholder="Insira seu email"
                className="w-full p-3 border rounded-[8px] bg-[#F5F5F5] outline-none"
              />
            </div>

            <Link
              to={'/cadastro/criarConta'}
              className="bg-[#D81B60] text-white p-3 font-[Inter] mt-2 mb-2 text-center rounded-[8px] hover:bg-[#C92071] transition"
            >
              Criar Conta
            </Link>
          </form>

          <div className="flex items-center justify-center gap-1 my-4">
            <span className="px-3 text-sm text-[#8F8F8F]">Ou faça login com</span>

            <div className="flex gap-4">
              <a href="">
                <img src="/assets/gmail.png" alt="Google" />
              </a>

              <a href="">
                <img src="/assets/facebook.png" alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*Fotos dos sapatos ao lado do form de login. */}
      <div className='flex gap-6'>
        {/*Sapato esquerdo */}
        <div className='mt-[60px] ml-[180px] scale-110'>
          <img src="/assets/LeftSneark.png" alt="Sneakers Left" />
        </div>

        {/*Sapato direito */}
        <div className="mt-[190px] scale-110">
          <img src="/assets/RightSneaker.png" alt="Sneakers Right" />
        </div>
      </div>
    </div>
  );
};

const CriacaoForm = () => {
  return (
    <div className='font-[Inter] bg-gradient-to-b from-[#d5d8f3] to-white min-h-screen flex flex-col items-center justify-start pt-[50px] pb-10'>
      <h1 className='font-700 text-[32px] mb-8'>Criar conta</h1>

      <div className="flex flex-col gap-8 w-full max-w-[850px] px-4">
        {/* Quadrante 1 */}
        <div className="bg-white p-8 shadow-2xl rounded-lg">
          <h2 className='text-[26px] font-semibold mb-4'>Informações Pessoais</h2>
          <hr className='mb-6 border-gray-300'/>
          
          <form className='flex flex-col gap-5'>
            <div className='flex flex-col'>
              <label className='text-[18px] mb-1'>Nome Completo *</label>
              <input
                className='p-4 border border-gray-300 rounded-lg text-[16px]'
                type="text"
                placeholder="Insira seu nome"
                required
              />
            </div>

            <div className='flex flex-col'>
              <label className='text-[18px] mb-1'>CPF *</label>
              <input
                className='p-4 border border-gray-300 rounded-lg text-[16px]'
                type="text"
                placeholder="Insira seu CPF"
                required
              />
            </div>

            <div className='flex flex-col'>
              <label className='text-[18px] mb-1'>E-mail *</label>
              <input
                className='p-4 border border-gray-300 rounded-lg text-[16px]'
                type="email"
                placeholder="Insira seu email"
                required
              />
            </div>

            <div className='flex flex-col'>
              <label className='text-[18px] mb-1'>Celular *</label>
              <input
                className='p-4 border border-gray-300 rounded-lg text-[16px]'
                type="tel"
                placeholder="Insira seu telefone"
                required
              />
            </div>
          </form>
        </div>

        {/* Quadrante 2 */}
        <div className="bg-white p-8 shadow-2xl rounded-lg">
          <h2 className='text-[26px] font-semibold mb-4'>Informações de Entrega</h2>
          <hr className='mb-6 border-gray-300'/>
          
          <form className='flex flex-col gap-5'>
            <div className='flex flex-col'>
              <label className='text-[18px] mb-1'>Endereço *</label>
              <input
                className='p-4 border border-gray-300 rounded-lg text-[16px]'
                type="text"
                placeholder="Insira seu endereço"
                required
              />
            </div>

            <div className='flex flex-col'>
              <label className='text-[18px] mb-1'>Bairro *</label>
              <input
                className='p-4 border border-gray-300 rounded-lg text-[16px]'
                type="text"
                placeholder="Insira seu bairro"
                required
              />
            </div>

            <div className='flex flex-col'>
              <label className='text-[18px] mb-1'>Cidade *</label>
              <input
                className='p-4 border border-gray-300 rounded-lg text-[16px]'
                type="text"
                placeholder="Insira sua cidade"
                required
              />
            </div>

            <div className='flex flex-col'>
              <label className='text-[18px] mb-1'>CEP *</label>
              <input
                className='p-4 border border-gray-300 rounded-lg text-[16px]'
                type="text"
                placeholder="Insira seu CEP"
                required
              />
            </div>

            <div className='flex flex-col'>
              <label className='text-[18px] mb-1'>Complemento</label>
              <input
                className='p-4 border border-gray-300 rounded-lg text-[16px]'
                type="text"
                placeholder="Insira seu complemento"
              />
            </div>
          </form>
        </div>

        {/* Checkbox e Botão */}
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-3">
            <input 
              type="checkbox" 
              id="newsletter" 
              className="mt-1 h-5 w-5"
            />
            <label htmlFor="newsletter" className='text-[16px] text-gray-700'>
              Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.
            </label>
          </div>

          <button 
            className='w-full bg-[#C92071] hover:bg-[#EE4266] duration-300 text-white font-bold py-4 px-6 rounded-lg text-[18px] transition-colors'
            type="button"
          >
            Criar Conta
          </button>
        </div>
      </div>
    </div>
  );
};

const LoginPage = () => {
  return(
    <>
      <div className="bg-gradient-to-b from-[#d5d8f3] to-white min-h-screen flex 
      items-start justify-start">
        <div className="bg-white rounded-[7px] w-[850px] h-[580px] 
        ml-[135px] mt-[120px]">
          <div className="w-full p-10">
            <h2 className="text-4xl font-bold mt-[-5px] mb-5 font-[Inter]">Acesse sua conta</h2>
            <p className="mb-6.5 text-base font-[Inter]">
              Novo cliente? Então registre-se{' '}
              <Link
                to="/cadastro"
                className="text-[#D81B60] font-medium hover:underline duration-900"
              >
                aqui
              </Link>
            </p>

            <form className="flex flex-col gap-4">
              <div>
                <label className="block mb-5 text-[15px] font-medium font-[Inter]">Login *</label>
                <input
                  type="text"
                  placeholder="Insira seu login ou email"
                  className="w-full p-3 border rounded-[8px] bg-[#F5F5F5] outline-none"
                />
              </div>

              <div>
                <label className="block mt-2 mb-5 text-[15px] font-medium font-[Inter]">Senha *</label>
                <input
                  type="password"
                  placeholder="Insira sua senha"
                  className="w-full p-3 border rounded-[8px] bg-[#F5F5F5] outline-none"
                />
              </div>

              <Link
                to="/esqueci-senha"
                className="text-[15px] text-[#8F8F8F] mt-4 mb-3 font-[Inter] hover:underline"
              >
                Esqueci minha senha
              </Link>

              <button
                type="submit"
                className="bg-[#D81B60] text-white p-3 font-[Inter] mt-2 mb-2 rounded-[8px] hover:bg-[#C92071] transition"
              >
                Acessar Conta
              </button>
            </form>

            <div className="flex items-center justify-center gap-1 my-4">
              <span className="px-3 text-sm text-[#8F8F8F]">Ou faça login com</span>

              <div className="flex gap-4">
                <a href="">
                  <img src="/assets/gmail.png" alt="Google" />
                </a>

                <a href="">
                  <img src="/assets/facebook.png" alt="Facebook" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='flex gap-6'>
          <div className='mt-[60px] ml-[180px] scale-110'>
            <img src="/assets/LeftSneark.png" alt="Sneakers Left" />
          </div>

          <div className="mt-[190px] scale-110">
            <img src="/assets/RightSneaker.png" alt="Sneakers Right" />
          </div>
        </div>
      </div>
    </>
  )
}

export { LoginPage, CadastroPage, CriacaoForm };
