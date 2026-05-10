/**
 * @fileoverview Archivo TSX que permite construir un SideBar Dinamico
 * @returns Nav 
 * 
 */
import { Item } from "@/types/interfaces"
import { Menu, LayoutDashboard, Wallet, BarChart3, Handshake, FileText, LogOut, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
/**
 * @returns Items Objects
 */

const emptyFunction = (): void => {

}


const items : Item[]= [
    {
      icon:LayoutDashboard,
      label:"Dashboard",
      active: true,
      modify: emptyFunction
      
    },
    {
      icon: Wallet, 
      label: "Invoices",
      active:false,
      modify: emptyFunction
    },
    {
      icon: FileText, 
      label: "Tickets",
      active:false,
      modify: emptyFunction
    }

]


export default function NavItems() {
  return (
    <nav className="flex-1 space-y-1 px-2">
        {items.map((item) => (
          <Link
            key={item.label}
            href="#"
            className={`flex items-center gap-3 px-4 py-3 transition-all ${
              item.active 
                ? "text-primary border-l-4 border-primary bg-secondary-container/20" 
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
            }`}
          >
            <item.icon size={20} />
            <span className="text-sm font-semibold">{item.label}</span>
          </Link>
        ))}
      </nav>
  )
}

