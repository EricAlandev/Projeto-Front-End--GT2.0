import { NavLink } from "react-router-dom";

const Navegation = () => {
  return (
    <div className="flex gap-6 ml-[138px] mb-[25px] text-[16px] font-[Inter] mt-[60px]">
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
            ? "text-[#C92071] border-b-2 border-[#C92071] pb-1  duration-150"
            : "text-black font-[Inter]"
        }
      >
        Produtos
      </NavLink>

      <NavLink
        to="/categorias"
        className={({ isActive }) =>
          isActive
            ? "text-[#C92071] border-b-2 border-[#C92071] pb-1  duration-150"
            : "text-black font-[Inter]"
        }
      >
        Categorias
      </NavLink>

      <NavLink
        to="/meuspedidos"
        className={({ isActive }) =>
          isActive
            ? "text-[#C92071] border-b-2 border-[#C92071] pb-1  duration-150"
            : "text-black font-[Inter]"
        }
      >
        Meus Pedidos
      </NavLink>
    </div>
  );
};

export default Navegation;
