import { SignIn, SignUp } from "./SignInSignUp";

const Unificados = () => {

    return(
        <>
         <div className="flex items-center gap-8">
            <SignUp />
            <SignIn />
         </div>
        </>
    )
}

export default Unificados;