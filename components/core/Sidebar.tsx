"use client";
/**
 * @fileoverview Componente para poder tener un SideBar Dinamico
 * 
 */
import { Sheet, SheetContent, SheetTrigger,SheetTitle,SheetDescription } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";
import { Menu, LayoutDashboard, Wallet, BarChart3, Handshake, FileText, LogOut, X } from "lucide-react";
import Link from "next/link";
import LogoApp from "./LogoApp";
import NavItems from "./Home/sidebar/NavItems";
import SidebarFooter from "./Home/sidebar/SidebarFooter";

/** @return SideBar */
export function Sidebar() {



  

  const NavLinks = () => (
    <>
      <div className="px-6 mb-12 flex items-center gap-3">
        <LogoApp className="w-16 h-16" />
        <div>
          <h1 className="text-lg font-black text-primary leading-tight">NEXTBASE</h1>
          <p className="text-xs text-on-surface-variant">Agenete Financiero</p>
        </div>
      </div>
      {/* Componente que renderiza las opciones de contenido Sidebar*/}
      <NavItems />

      {/* Componente que renderiza parte baja del sidebar */}
      <SidebarFooter />

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
            <VisuallyHidden>
              <SheetTitle>Navigation Menu</SheetTitle>
              <SheetDescription>Sidebar navigation links</SheetDescription>
            </VisuallyHidden>
            <div className="flex flex-col h-full py-6">
              <NavLinks />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}