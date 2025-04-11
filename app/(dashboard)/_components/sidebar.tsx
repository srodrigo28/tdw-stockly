"use client"

import { Button } from "@/components/ui/button";
import { LayoutGridIcon, PackageIcon, ShoppingBasketIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();
    return ( 
        <div className="w-40 bg-white border h-screen">
            {/* IMAGEM */}
            <div className="px-6 py-6">
                <h1 className="font-bold text-2xl">STOCKLY</h1>
            </div>

            {/* BOTOES */}
            <div className="flex flex-col gap-2 p-2">
                <Button asChild variant={pathname == "/" ? "destructive" : "ghost"} 
                    className="p-3 justify-start gap-2">
                    <Link href="/"> <LayoutGridIcon /> Dashboard </Link>
                </Button>

                <Button asChild variant={pathname == "/products" ? "destructive" : "ghost"} 
                    className="p-3 justify-start gap-2">
                    <Link href="/products"> <PackageIcon /> Produtos </Link>
                </Button>

                <Link href="/sales">
                <Button variant="ghost" className="p-3 justify-start gap-2">
                   <ShoppingBasketIcon /> Vendas</Button>
                </Link>
            </div>
        </div>z
     );
}
 
export default Sidebar;