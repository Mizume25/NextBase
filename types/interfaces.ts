/**
 * 
 * @fileoverview Archivo que mancomuna una serie de interfaces y tipados para frontend
 * @author Gabriel Nivicela
 */
import { LucideIcon } from "lucide-react"
import { JSX } from "react"
import { Customer, Invoice, Record } from "./definitions";
/**@module @/components/core/Home/sidebar/NavItems */
/** @description Layout de items para el sidebar */
export interface Item {
    icon:LucideIcon,
    label:string,
    active: boolean,
    modify: () => void
}


/**
 * @author Gabriel Nivicela
 * @return JSX.Element
 * @description Interfaz de SideBar que permite mancomunar funciones
 */

interface Fileable {
    customs: () => JSX.Element,
    records: () => JSX.Element,
    invoices: () => JSX.Element,
    tickets: () => JSX.Element,
    documents: () => JSX.Element,
}




