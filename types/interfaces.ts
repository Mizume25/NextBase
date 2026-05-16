/**
 * 
 * @fileoverview Archivo que mancomuna una serie de interfaces y tipados para frontend
 * @author Gabriel Nivicela
 */
import { LucideIcon } from "lucide-react"
import React, { JSX } from "react"
import { Section } from "@/store/useNavStore"
import { Profile, Customer, CustomerWithProfile, Invoice, Ticket, Document , Record, RecordsWithProfile, InvoiceWithRecord} from "./definitions"
/**@module @/components/core/Home/sidebar/NavItems */
/** @description Layout de items para el sidebar */
export interface Item {
    icon:LucideIcon,
    label:string,
    active: boolean,
    modify: (a:Section) => void
}


export type ActivityProps = {
    customers: CustomerWithProfile[]
    records: RecordsWithProfile[],
    invoices:InvoiceWithRecord[],
    tickets:Ticket[],
    documents:Document[],
}






