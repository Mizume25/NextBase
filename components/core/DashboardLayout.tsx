/**
 * 
 * @returns Componente Inicial
 * 
 */
// app/dashboard/layout.tsx
import { Sidebar } from "@/components/core/Sidebar";
import { Profile , CustomerWithProfile} from "@/types/definitions";
import { getCustomersWithProfile  } from "@/lib/database/customers";
import { createClient } from "@/lib/supabase/server";
import { Activity } from "@/components/core/Activity";
import { Search, Settings, Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { connection } from "next/server";
import { getProfile } from "@/lib/database/profile";
import { redirect } from "next/navigation";
import ProfileIcon from "./ProfileIcon";
import { ActivityProps } from "@/types/interfaces";



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-surface text-on-surface">
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0">
        {children}
      </main>
    </div>
  );
}




export async function DashboardPage() {

 
  /** Señalamos que es dinamica */
  await connection();
  
   /** 
     * @returns User
     * Crea un usuario actual */
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser();

    /** Si no exite retrocedemos al login */
    if (!user) redirect('/login');

  /** Obtenemos el perfil del usuario actual */
    const profile : Profile | null = await getProfile(user);

     /** Si no exite retrocedemos al login */
    if (!profile) redirect('/login');

    console.log(profile?.name)
  
  /** Recibimos los objetos para renderizar */
  const customerList : CustomerWithProfile[] = await getCustomersWithProfile (profile?.id);



  /** 
   * @type
   * Objeto Construible - Que renderizaremos en activity */
  const infoRender : ActivityProps = {
    customers: customerList
  }
  
  return (
    <div className="flex flex-col flex-1">
      {/* Header */}
      <header className="sticky top-0 z-40 flex justify-between items-center px-6 h-16 bg-surface border-b border-outline-variant">
        <div className="hidden lg:flex relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
          <input 
            className="w-full bg-surface-container-low border border-outline-variant rounded-full py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary/20 outline-none" 
            placeholder="Search portfolio..." 
          />
        </div>
        {/*  Componente de Perfil */}       

       <ProfileIcon profile={profile}/>

      </header>

      {/* Content */}
      <div className="p-6 lg:p-8 space-y-8 flex-1">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold">Bienvenido de nuevo { profile?.name }</h2>
            <p className="text-lg text-on-surface-variant mt-2">Accede a tus pendientes en esta tabla</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="bg-surface-container-high border-outline-variant gap-2">
              <Download size={18} /> Export Overview
            </Button>
            <Button className="bg-primary text-on-primary hover:bg-secondary gap-2 shadow-lg shadow-primary/10">
              <Plus size={18} /> Request Service
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <Activity customers={customerList}/>
          
          {/* Upcoming Card */}
          <div className="col-span-12 lg:col-span-4 bg-surface-container rounded-xl border border-outline-variant p-6 flex flex-col">
            <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-6">Upcoming Appointments</h3>
            <div className="space-y-4">
              <div className="p-4 bg-surface-container-high rounded-lg border-l-4 border-primary">
                <p className="font-bold">Portfolio Review</p>
                <p className="text-sm text-on-surface-variant">10:00 AM • Sarah M.</p>
              </div>
            </div>
            <Button variant="outline" className="mt-auto w-full border-outline-variant mt-6">View Calendar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}