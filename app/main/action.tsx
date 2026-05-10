/**
 * @author Gabriel Nivicela
 * @module app/main/action.ts
 * @since 10-2026
 */

import { Customer } from "@/types/definitions"
import { JSX } from "react"

/** Declaramos los displays  */
const thead = document?.getElementById('headerInfo') as HTMLTableSectionElement
const tbody = document?.getElementById('bodyInfo') as HTMLTableSectionElement

/**
 *  @return Render Customers
 *  @param customers  
 */
const renderCustomer = (customers : Customer []): JSX.Element[] => {

     /** Declaramos los displays como arrays */
    return customers.map       

}


export default function  action() {
  return (
    <div>action</div>
  )
}
