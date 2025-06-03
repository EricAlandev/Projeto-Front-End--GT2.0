import { Link } from "react-router-dom";

const Logo = ()=> {

    return(
        <>
          <Link to={'/'}>
            <div className="flex items-center gap-2 w-[253px] h-[44px]">
                    <div className="w-[33px] h-[33px]">
                        <img src="/assets/Vector.png" alt="" />             
                    </div>

                    <div>
                        <p className="font-[Inter] text-[#C92071] font-[600] text-[36.4px]">Digital Store </p>
                    </div>
                </div>
          </Link>
        </>
    )
}

export default Logo;