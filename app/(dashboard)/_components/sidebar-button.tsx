import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface sideBarButtonProps{
  children: React.ReactNode;
  href: string;
  title: string;
}

const SidebarButton = ( {href, title, children} : sideBarButtonProps) => {
  const pathname = usePathname();
  return (
    <Button 
      asChild variant={pathname == "/" ? "destructive" : "ghost"} className="p-3 justify-start gap-2">
      <Link href={href}>  
        {title}
        {children} 
      </Link>
    </Button>
  );
};

export default SidebarButton;
