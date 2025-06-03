import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footers from "../components/compo-footer/Footer";

const HomeLayout =() => {

    return(
        <>
        <Header />
        <Outlet/>
        <Footers/>
        </>
    )
}

export default HomeLayout;