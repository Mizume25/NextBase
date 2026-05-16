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

import { Customer, Profile, CustomerWithProfile } from "@/types/definitions";
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

    if (error) {
        console.log(error)
        return []
    }

    const customers = await Promise.all(
        data.map(async (customer) => {
            const profile = await getCustomerProfile(customer.profile_id)
            if (!profile) return null

            const object: CustomerWithProfile = {
                id: customer.id,
                name: profile.name,
                surname: profile.surname,
                phone: profile.phone,
                nif: customer.nif,
                address: customer.address,
                profile_id: customer.profile_id,
                manager_id: customer.manager_id,
                
            }

            return object
        })
    )

    return customers.filter((c): c is CustomerWithProfile => c !== null)
}


const getCustomerProfile = async (profile_id: string | undefined): Promise<Profile | null> => {

    const supabase = await createClient();

    const { data, error } = await supabase
        .from("profiles")  
        .select('*')
        .eq("id", profile_id)
        .single();
    if (error) return null;

    return data;
}



