/**
 * @author Gabriel Nivicela
 * @module /lib/database/customer.ts
 * @fileoverview Archivo para poder obtener objetos de la base de Datos Customer
 * @version 1.0.0
 * @since 2026-05
 */

/** 
 * @import Modelo de Customer
 * @import Create Client Server */

import { Customer } from "@/types/definitions";
import { createClient } from "../supabase/server";

/**
 * @return Lista de Clientes
 * @example
 * ```ts
 * const customers = await getCustomers()
 * ```
 * */

/*export const getCustomers = async ():Promise<Customer[]> => {

  
    const supabase = await createClient();


    const {data , error} = await supabase
    .from('Customers')
    .select('*');

   
    if(error) {
        return [];
    } else {
        return data;
    }
} */


/**
 * @returns Lista de Clientes relacionados
 * @param UUID
 * @example
 * ``` TS
 * const customers = await getCustomers(Id)
 * ```
 */
export const getCustomers = async (manager_id: string | undefined): Promise<Customer[]> => {
    
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('customers')
        .select(`
            *,
            profile (
                name,
                surname,
                phone,
                rol
            )
        `)
        .eq('manager_id', manager_id);

    if (error) {
        return [];
    } else {
        return data;
    }
}




