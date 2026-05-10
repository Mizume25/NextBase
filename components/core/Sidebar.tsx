"use client";
/**
 * @fileoverview Componente para poder tener un SideBar Dinamico
 * 
 */
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, LayoutDashboard, Wallet, BarChart3, Handshake, FileText, LogOut, X } from "lucide-react";
import Link from "next/link";
import LogoApp from "./LogoApp";
const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Wallet, label: "Portfolio" },
  { icon: BarChart3, label: "Market Data" },
  { icon: Handshake, label: "Advisory" },
  { icon: FileText, label: "Reports" },
];
/** @return SideBar */
export function Sidebar() {
  const NavLinks = () => (
    <>
      <div className="px-6 mb-12 flex items-center gap-3">
       <LogoApp className="w-16 h-16"/>
        <div>
          <h1 className="text-lg font-black text-primary leading-tight">NEXTBASE</h1>
          <p className="text-xs text-on-surface-variant">Agenete Financiero</p>
        </div>
      </div>
      <nav className="flex-1 space-y-1 px-2">
        {navItems.map((item) => (
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
      <div className="px-6 mt-auto pt-6 border-t border-outline-variant/30">
        <Button className="w-full mb-6 bg-primary text-on-primary hover:bg-secondary hidden lg:flex">
          Request Service
        </Button>
        <Link href="#" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface mb-4">
          <LogOut size={20} />
          <span className="text-sm font-semibold">Logout</span>
        </Link>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:flex w-[260px] flex-col py-6 bg-surface-container-lowest border-r border-outline-variant sticky top-0 h-screen">
        <NavLinks />
      </aside>

      {/* Mobile Trigger */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-on-surface">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] p-0 bg-surface-container-lowest border-outline-variant">
            <div className="flex flex-col h-full py-6">
              <NavLinks />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}