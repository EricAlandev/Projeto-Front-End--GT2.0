import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BuyIcon from "./compo-header/BuyIcon";
import Unificados from "./compo-header/LoginUnificado";
import Logo from "./compo-header/Logo";
import SearchBar from "./compo-header/SearchBar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* HEADER MOBILE */}
      <div className="flex items-center justify-between mt-6 px-6 md:hidden">
        {/* BOTÃO MENU SANDUÍCHE */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex flex-col justify-center gap-1.5 cursor-pointer"
          aria-label="Abrir menu"
        >
          <span className="block w-6 h-0.5 bg-black rounded"></span>
          <span className="block w-6 h-0.5 bg-black rounded"></span>
          <span className="block w-6 h-0.5 bg-black rounded"></span>
        </button>

        {/* LOGO */}
        <Logo />

        <div className="flex items-center gap-4">
          {/* ÍCONE DE PESQUISA */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-black"
            aria-label="Abrir busca"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.44-5.4a7.5 7.5 0 11-15.001-.001 7.5 7.5 0 0115 0z"
              />
            </svg>
          </button>

          {/* CARRINHO */}
          <BuyIcon />
        </div>
      </div>

      {/* BARRA DE PESQUISA MOBILE */}
      {searchOpen && (
        <div className="px-6 mt-4 md:hidden">
          <SearchBar />
        </div>
      )}

      {/* HEADER DESKTOP */}
      <div className="hidden md:flex items-center justify-between mt-[50px] px-[140px]">
        {/* LOGO */}
        <Logo />

        {/* SEARCHBAR */}
        <div className="flex-1 mx-10 max-w-[650px]">
          <SearchBar />
        </div>

        {/* LOGIN + CARRINHO */}
        <div className="flex items-center gap-6">
          <Unificados />
          <BuyIcon />
        </div>
      </div>

      {/* NAVEGAÇÃO PRINCIPAL - SOMENTE DESKTOP */}
      <div className="hidden md:block px-[140px] mt-[20px]">
        <nav className="flex gap-10 text-[16px] font-[Inter] mb-[25px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#C92071] border-b-2 border-[#C92071] pb-1 duration-150"
                : "text-black"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/produtos"
            className={({ isActive }) =>
              isActive
                ? "text-[#C92071] border-b-2 border-[#C92071] pb-1 duration-150"
                : "text-black"
            }
          >
            Produtos
          </NavLink>
          <NavLink
            to="/categorias"
            className={({ isActive }) =>
              isActive
                ? "text-[#C92071] border-b-2 border-[#C92071] pb-1 duration-150"
                : "text-black"
            }
          >
            Categorias
          </NavLink>
          <NavLink
            to="/meuspedidos"
            className={({ isActive }) =>
              isActive
                ? "text-[#C92071] border-b-2 border-[#C92071] pb-1 duration-150"
                : "text-black"
            }
          >
            Meus Pedidos
          </NavLink>
        </nav>
      </div>

      {/* OVERLAY para fechar o menu ao clicar fora */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-transparent"
        />
      )}

      {/* MENU LATERAL MOBILE */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center p-4 border-b border-gray-200">
          <Logo />
        </div>

        <nav className="flex flex-col ml-6 mt-6 gap-6 text-[18px] font-[Inter]">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-[#C92071] border-b-2 border-[#C92071] pb-1 duration-150"
                : "text-black"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/produtos"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-[#C92071] border-b-2 border-[#C92071] pb-1 duration-150"
                : "text-black"
            }
          >
            Produtos
          </NavLink>

          <NavLink
            to="/categorias"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-[#C92071] border-b-2 border-[#C92071] pb-1 duration-150"
                : "text-black"
            }
          >
            Categorias
          </NavLink>

          <NavLink
            to="/meuspedidos"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-[#C92071] border-b-2 border-[#C92071] pb-1 duration-150"
                : "text-black"
            }
          >
            Meus Pedidos
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Header;
