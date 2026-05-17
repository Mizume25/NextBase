/**
 * @author Gabriel Nivicela
 * @module /lib/database/records.ts
 * @fileoverview Archivo para poder obtener objetos de la base de Datos Ticket
 * @version 1.0.0
 * @since 2026-05
 */

/** 
 * @import Modelo de Record
 * @import Create Client Server */

import { TicketWithCustomer , CustomerWithProfile, Ticket } from "@/types/definitions";
import { createClient } from "../supabase/server";

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

export const getTicketWhitCustomer = async (customer: CustomerWithProfile | undefined): Promise<TicketWithCustomer[]> => {
    const supabase = await createClient()

    if (!customer) return [];

    const { data, error } = await supabase
        .from('tickets')
        .select('*')
        .eq('customer_id', customer.id)
        .order('created_at', { ascending: true })

    if (error) {
        console.log(error)
        return []
    }

    return data.map((tick) => ({
        id: tick.id,
        name: customer.name,
        surname: customer.surname,
        type: tick.type,
        resolve: tick.type,
        customer_id: tick.customer_id,
        record_id : tick.record_id
    }))
}





