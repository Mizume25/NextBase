/**
 * @fileoverview Archivo TSX que permite construir un SideBar Dinamico
 * @returns Nav 
 * 
 */
import { Item } from "@/types/interfaces"
import { Wallet, FileText , UserCheck, FolderOpen, Archive } from "lucide-react";
import Link from "next/link";
import { useNavStore } from "@/store/useNavStore";
import { Section } from "@/store/useNavStore";
export default function NavItems() {

/** @return section */
const setSection = useNavStore((s) => s.setSection)
const section = useNavStore((s) => s.section)

/** @param Link */
const handleLink = (a :Section) :void => {
    setSection(a)
    console.log("El valor ha cambiado a:" , a)
    
}

  /** @type Coleccion  Objetos */
const items : Item[]= [
    {
      icon:UserCheck,
      label:"customers",
      active: true,
      modify: handleLink,
      
    },
    {
      icon: FolderOpen , 
      label: "records",
      active:false,
      modify: handleLink,
    },
    {
      icon: Wallet, 
      label: "invoices",
      active:false,
      modify: handleLink,
    },
    {
      icon: FileText, 
      label: "tickets",
      active:false,
      modify: handleLink,
    },
    {
      icon: Archive, 
      label: "documents",
      active:false,
      modify: handleLink,
    }

]


  return (
    <nav className="flex-1 space-y-1 px-2">
        {items.map((item) => (
          <Link
            key={item.label}
            onClick={() => item.modify(item.label as Section)}
            href="#"
              className={`flex items-center gap-3 px-4 py-3 transition-all capitalize ${
            item.label.toLowerCase() === section 
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

