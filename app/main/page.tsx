import DashboardLayout, { DashboardPage } from "@/components/core/DashboardLayout"
import { Suspense } from "react";
import { Customer } from "@/types/definitions";
import { getCustomers } from "@/lib/database/customers";
import { createClient } from "@/lib/supabase/server";
import { connection } from "next/server";
/**
 * @fileoverview Pagina de Dasboard
 * @returns Página de Dashboard
 * @author Gabriel Nivicela
 * 
 */
export  default async function Page() {

  /** Señalamos que es dinamica */
  await connection;

  /** Crearemos el Usuario actual */
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  /** Recibimos los objetos para renderizar */
    const list : Customer[] = await getCustomers(user?.id);
    console.log(list);
    
  return (
     <Suspense fallback={<div>Loading...</div>}>
    <DashboardLayout>
        <DashboardPage />
    </DashboardLayout>
    </Suspense>
  )
}

