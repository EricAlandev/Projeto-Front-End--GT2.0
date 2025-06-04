import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg transform transition-transform duration-300 z-50
      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <button
        onClick={onClose}
        className="text-black p-4 font-bold hover:bg-gray-200 w-full text-left"
      >
        Fechar ×
      </button>

      <nav className="flex flex-col gap-6 mt-6 ml-6 text-[16px] font-Inter">
        <NavLink
          to="/"
          onClick={onClose}
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
          onClick={onClose}
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
          onClick={onClose}
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
          onClick={onClose}
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
  );
};

export default Sidebar;
