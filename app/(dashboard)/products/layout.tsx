import { ReactNode } from "react";

const ProductsLayout = ({children}: {children: ReactNode}) => {
    return ( 
        <div className=" flex flex-col w-screen h-screen">
            {children}
        </div>
     );
}
export default ProductsLayout;