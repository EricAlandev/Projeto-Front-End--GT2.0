import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <Link
      to="/cadastro"
      className="text-[#474747] text-[16px] font-[400] underline font-[Inter]"
    >
      Cadastre-se
    </Link>
  );
};

const SignIn = () => {
  return (
    <Link
      to="/entrar"
      className="w-[114px] h-[40px] rounded-[4px] bg-[#C92071] text-[#F5F5F5] text-sm font-bold p-2 flex items-center justify-center font-[Inter]"
    >
      Entrar
    </Link>
  );
};

export { SignUp, SignIn };
