/**
 * @author Gabriel Nivicela
 * @module /lib/database/customers.ts
 * @fileoverview Archivo para poder obtener objetos de la base de Datos Invoice
 * @version 1.0.0
 * @since 2026-05
 */

/** 
 * @import Modelo de Record
 * @import Create Client Server */

import { Record, Profile, RecordsWithProfile , CustomerWithProfile , InvoiceWithRecord} from "@/types/definitions";
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

export const getInvoiceWithRecord = async (record: RecordsWithProfile | undefined): Promise<InvoiceWithRecord | null> => {
    const supabase = await createClient()
    if(!record) return null
    const { data, error } = await supabase
        .from('invoices')
        .select('*')
        .eq('record_id', record.id)
        .single()

    if (error) return null

    return {
        id:        data.id,
        register: `${record.name[0]}${record.surname[0]}-${data.id.slice(0, 4).toUpperCase()}`,
        fullname: `${record.name} ${record.surname}`,
        amount:    data.amount,
        status:    data.status,
        emission:  data.emission,
        record_id: record.id
    }
}





