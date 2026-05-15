/**
 * @author Gabriel Nivicela
 * @module app/main/action.ts
 * @since 10-2026
 */

import { getProfile } from "@/lib/database/profile";
import { Customer, Invoice, Record, Ticket, Document, Profile, CustomerWithProfile } from "@/types/definitions"
import { JSX } from "react"



/** Funciones de Renderizado de Tabla */
/**
 * @returns Thead
 * @description Renderizado contenido de thead
 */
const excludedKeys = ['created_at', 'updated_at', 'id']
export const renderHead = <T extends object>(item: T): JSX.Element[] =>
  Object.keys(item).filter(key => !excludedKeys.includes(key) && !key.endsWith('_id')).map((key) => (
    <th key={key} className="px-6 py-3 text-xs font-bold text-on-surface-variant uppercase">
      {key}
    </th>
));


/**
 *  @return Render Customers
 *  @param CustomerWithProfile  
 *  @description Renderizado contenido de clientes
 */
export const renderCustomerRows = (data: CustomerWithProfile[]): JSX.Element[]=> {


  return data.map(({profiles , ...p}) => (

    <tr key={p.id} className="hover:bg-surface-container-high/40 transition-colors">
      <td className="px-6 py-4 text-sm font-medium">{profiles.name}</td>
      <td className="px-6 py-4 text-sm font-medium">{profiles.surname}</td>
      <td className="px-6 py-4 text-sm font-medium">{profiles.phone}</td>
      <td className="px-6 py-4 text-sm font-medium">{p.nif}</td>
      <td className="px-6 py-4 text-sm text-on-surface-variant">{p.address}</td>
    </tr>
  ));
};
/*-----------------------------------------------------------------------------------*/
/**
 * @return Render Records
 * @param records
 */
export const renderRecordRows = (records : Record[]):JSX.Element[] =>{
  return records.map((p) => (
      <tr key={p.id} className="hover:bg-surface-container-high/40 transition-colors">
      <td className="px-6 py-4 text-sm font-medium">{p.type}</td>
      <td className="px-6 py-4 text-sm text-on-surface-variant">{p.description}</td>
      <td className="hidden md:table-cell px-6 py-4 text-sm">{p.status}</td>
      <td className="hidden md:table-cell px-6 py-4 text-sm">{p.type}</td>
    </tr>
  ))
}

/*-----------------------------------------------------------------------------------*/
/**
 * @return Render Invoices
 * @param invoices
 */
export const renderInvoiceRows = (invoices : Invoice[]):JSX.Element[] =>{
  return invoices.map((p) => (
      <tr key={p.id} className="hover:bg-surface-container-high/40 transition-colors">
      <td className="px-6 py-4 text-sm font-medium">{p.amount}</td>
      <td className="px-6 py-4 text-sm text-on-surface-variant">{p.emission}</td>
      <td className="hidden md:table-cell px-6 py-4 text-sm">{p.status}</td>
    </tr>
  ))
}

/*-----------------------------------------------------------------------------------*/
/**
 * @return Render Ticket
 * @param ticket
 */
export const renderTicketRows = (tickets : Ticket[]):JSX.Element[] =>{
  return tickets.map((p) => (
      <tr key={p.id} className="hover:bg-surface-container-high/40 transition-colors">
      <td className="px-6 py-4 text-sm font-medium">{p.resolve}</td>
      <td className="px-6 py-4 text-sm text-on-surface-variant">{p.type}</td>
    </tr>
  ))
}

/*-----------------------------------------------------------------------------------*/
/**
 * @return Render Ticket
 * @param ticket
 */
export const renderDocumentRows = (documents: Document[]):JSX.Element[] =>{
  return documents.map((p) => (
      <tr key={p.id} className="hover:bg-surface-container-high/40 transition-colors">
      <td className="px-6 py-4 text-sm font-medium">{p.name}</td>
      <td className="px-6 py-4 text-sm text-on-surface-variant">{p.url}</td>
       <td className="px-6 py-4 text-sm text-on-surface-variant">{p.type_mime}</td>
    </tr>
  ))
}





export default function action() {
  return (
    <div>action</div>
  )
}


