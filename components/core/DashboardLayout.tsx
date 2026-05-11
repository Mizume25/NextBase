/**
 * 
 * @returns Componente Inicial
 * 
 */
// app/dashboard/layout.tsx
import { Sidebar } from "@/components/core/Sidebar";

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

/** app/dashboard/page.tsx */ 
import { Activity } from "@/components/core/Activity";
import { Search, Bell, Mail, Settings, Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
export async function DashboardPage() {


    


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
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <Bell size={20} /><span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full"><Mail size={20} /></Button>
          </div>
          <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/30">
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold leading-none">Alexander Pierce</p>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Premium Partner</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant" />
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="p-6 lg:p-8 space-y-8 flex-1">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold">Welcome back, Alexander</h2>
            <p className="text-lg text-on-surface-variant mt-2">Your portfolio grew by 4.2% this quarter.</p>
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
          <Activity />
          
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