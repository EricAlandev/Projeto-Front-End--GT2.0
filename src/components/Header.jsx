import BuyIcon from "./compo-header/BuyIcon";
import Unificados from "./compo-header/LoginUnificado";
import Logo from "./compo-header/Logo";
import Navegation from "./compo-header/Navegation";
import SearchBar from "./compo-header/SearchBar";

const Header = () => {

    return(
     <>
     <div className="flex items-center ml-[140px] mt-[50px] gap-30">       
         <Logo/>
         <SearchBar />
         <Unificados/>
         <BuyIcon />
     </div>

     <div>
        <Navegation/>
     </div>
     </>
    )
}

export default Header;