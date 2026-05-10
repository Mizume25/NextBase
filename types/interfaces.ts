/**
 * 
 * @fileoverview Archivo que mancomuna una serie de interfaces y tipados para frontend
 * @author Gabriel Nivicela
 */
import { LucideIcon } from "lucide-react"
import { JSX } from "react"
/**@module @/components/core/Home/sidebar/NavItems */
/** @description Layout de items para el sidebar */
export interface Item {
    icon:LucideIcon,
    label:string,
    active: boolean,
    modify: () => void
}


/**
 * @return Interfaz para iterar campos y mapearlos
 */
interface Field {
    customers: () => JSX.Element,
    records: () => JSX.Element,
    invoices: () => JSX.Element,
    documents: () => JSX.Element,
    tickets: () => JSX.Element
}





