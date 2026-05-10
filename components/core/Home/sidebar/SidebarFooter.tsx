/**
 * @return Footer de Sidebar
 * Renderiza Otro bloque
 */
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { LogOut } from "lucide-react";
export default function SidebarFooter() {
  return (
    <div className="px-6 mt-auto pt-6 border-t border-outline-variant/30">
        {/* Aqui  se solicita el servicio: Implementar Funcion */}
        <Button className="w-full mb-6 bg-primary text-on-primary hover:bg-secondary hidden lg:flex">
          Request Service
        </Button>

        <Link href="#" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface mb-4">
          <LogOut size={20} />
          <span className="text-sm font-semibold">Logout</span>
        </Link>
      </div>
  )
}

