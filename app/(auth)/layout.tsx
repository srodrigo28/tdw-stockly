import { ReactNode } from "react";

const AuthLayout = ({children}: {children: ReactNode}) => {
    return ( 
        <div className="bg-slate-900 flex flex-col justify-start items-center w-screen h-screen">
            {children}
        </div>
     );
}
 
export default AuthLayout;