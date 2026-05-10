/**
 * 
 * @fileoverview Archivo que mancomuna una serie de interfaces y tipados para frontend
 * @author Gabriel Nivicela
 */
import { LucideIcon } from "lucide-react"
/**@module @/components/core/Home/sidebar/NavItems */
/** @description Layout de items para el sidebar */

export interface Item {
    icon:LucideIcon,
    label:string,
    active: boolean,
    modify: () => void
}

