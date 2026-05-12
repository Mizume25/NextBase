
import DashboardLayout, { DashboardPage } from "@/components/core/DashboardLayout"
import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server";

/**
 * @fileoverview Pagina de Dasboard
 * @returns Página de Dashboard
 * @author Gabriel Nivicela
 * 
 */
export default async function Page() {

  

 

  return (

    <DashboardLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <DashboardPage />
      </Suspense>
    </DashboardLayout>

  )
}

