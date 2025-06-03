import { Outlet } from "react-router-dom";
import Logo from "../components/compo-header/Logo";
import Footers from "../components/compo-footer/Footer";

const LoginL = () => {

    return(
        <>
        <div className="ml-[140px] mt-[18px] mb-[20px]">
            <Logo/>
        </div>

        <Outlet />
        <Footers/>
        </>
    )
}

export default LoginL;