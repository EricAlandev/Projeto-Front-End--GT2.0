import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/HomePage";
import { CadastroPage, LoginPage, CriacaoForm } from "../pages/Login";
import LoginLayout from "../layouts/LoginLayout";
import Unfound from "../pages/PageUnfound";
import Products from "../pages/Products";
import ProductViewPage from "../pages/ProductViewPage";
import Construction from "../layouts/Construction";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout principal */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="produtos" element={<Products />} />
          <Route path="produto/:id" element={<ProductViewPage />} />

          <Route path="categorias" element={<Construction />} />
          <Route path="meuspedidos" element={<Construction />} />

          {/* Página não encontrada no contexto do site */}
          <Route path="*" element={<Unfound />} />
        </Route>

        {/* Layout de autenticação */}
        <Route path="/cadastro" element={<LoginLayout />}>
          <Route index element={<CadastroPage />} />
          <Route path="criarConta" element={<CriacaoForm />} />
          <Route path="*" element={<Unfound />} />
        </Route>

        <Route path="/entrar" element={<LoginLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="*" element={<Unfound />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
