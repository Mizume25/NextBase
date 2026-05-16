/**
 * @author Gabriel Nivicela
 * @module /lib/database/records.ts
 * @fileoverview Archivo para poder obtener objetos de la base de Datos Record
 * @version 1.0.0
 * @since 2026-05
 */

/** 
 * @import Modelo de Record
 * @import Create Client Server */

import { Record, Profile, RecordsWithProfile, Customer , CustomerWithProfile } from "@/types/definitions";
import { createClient } from "../supabase/server";
import { getCustomerProfile } from "./customers";

/**
 * @return Lista de Records
 * @example
 * ```ts
 * const customers = await getCustomers()
 * ```
 * */




/**
 * @returns Lista de Clientes relacionados + Perfiles
 * @param UUID
 * @example
 * ``` TS
 * const customers = await getCustomersWithProfile(Id)
 * ```
 */

export const getRecordWithProfile = async (customer: CustomerWithProfile | undefined): Promise<RecordsWithProfile[]> => {
    const supabase = await createClient()

    if (!customer) return [];

    const { data, error } = await supabase
        .from('records')
        .select('*')
        .eq('customer_id', customer.id)
        .order('created_at', { ascending: true })

    if (error) {
        console.log(error)
        return []
    }

    return data.map((reg) => ({
        id:          reg.id,
        name:        customer.name,
        surname:     customer.surname,
        type:        reg.type,
        status:      reg.status,
        description: reg.description,
        customer_id: reg.customer_id
    }))
}





