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

import { Customer, Profile , CustomerWithProfile} from "@/types/definitions";
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
 * @returns Lista de Clientes relacionados + Perfiles
 * @param UUID
 * @example
 * ``` TS
 * const customers = await getCustomersWithProfile(Id)
 * ```
 */

export const getCustomersWithProfile = async (manager_id: string | undefined): Promise<CustomerWithProfile[]> => {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('customers')
    .select('*')
    .eq('manager_id', manager_id)

  if (error) return []

  const customers = await Promise.all(
    data.map(async (customer) => ({
      ...customer,
      profile: await getCustomerProfile(customer.profile_id)
    }))
  )

  return customers
}

const getCustomerProfile  = async(profile_id: string |  undefined): Promise<Profile | null> => {

    const supabase = await createClient();

    const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", profile_id)
    .single();

    if(error) return null;

    return data;
}



