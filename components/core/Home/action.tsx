/**
 * @author Gabriel Nivicela
 * @module app/main/action.ts
 * @since 10-2026
 */

import { getProfile } from "@/lib/database/profile";
import { Customer, Invoice, Record, Ticket, Document, Profile, CustomerWithProfile, RecordsWithProfile, InvoiceWithRecord } from "@/types/definitions"
import { JSX } from "react"
import { User } from "lucide-react"
import { Badge } from "@/components/ui/badge";

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
export const renderCustomerRows = (data: CustomerWithProfile[]): JSX.Element[] => {


  return data.map((p) => (

    <tr key={p.id} className="hover:bg-surface-container-high/40 transition-colors">

      <td className="px-6 py-4 text-sm font-medium"><span className="flex items-center gap-2">
        <User size={18} />
        {p.name}
      </span></td>
      <td className="px-6 py-4 text-sm font-medium">{p.surname}</td>
      <td className="px-6 py-4 text-sm font-medium">+34 {p.phone}</td>
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
export const renderRecordRows = (records: RecordsWithProfile[]): JSX.Element[] => {
  return records.map((p) => (
    <tr key={p.id} className="hover:bg-surface-container-high/40 transition-colors">
      <td className="px-6 py-4 text-sm font-medium"><span className="flex items-center gap-2">
        <User size={18} />
        {p.name}
      </span></td>
      <td className="px-6 py-4 text-sm text-on-surface-variant">{p.surname}</td>
      
      <td className="hidden md:table-cell px-6 py-4 text-sm capitalize">{p.type.replace("_", " ")}</td>
      <td className="hidden md:table-cell px-6 py-4 text-sm">
        <Badge className={
          p.status === "completed"
            ? "bg-primary/10 text-primary rounded-full"
            : "bg-error/10 text-error rounded-full"
        }>
          {p.status}
        </Badge>
      </td>
      <td className="hidden md:table-cell px-6 py-4 text-sm text-left" >{p.description}</td>
    </tr>
  ))
}


/*-----------------------------------------------------------------------------------*/
/**
 * @return Render Invoices
 * @param invoices
 */
export const renderInvoiceRows = (invoices: InvoiceWithRecord[]): JSX.Element[] => {
  return invoices.map((p) => (
    <tr key={p.id} className="hover:bg-surface-container-high/40 transition-colors">
      <td className="px-6 py-4 text-sm font-medium">{p.register}</td>
      <td className="px-6 py-4 text-sm text-on-surface-variant">{p.fullname}</td>
      <td className="hidden md:table-cell px-6 py-4 text-sm">{p.amount} $</td>
      <td className="hidden md:table-cell px-6 py-4 text-sm">
        <Badge className={
          p.status === "paid"
            ? "bg-primary/10 text-primary rounded-full"
            : "bg-error/10 text-error rounded-full"
        }>
          {p.status}
        </Badge>
      </td>
      <td className="hidden md:table-cell px-6 py-4 text-sm">{p.emission}</td>
    </tr>
  ))
}

/*-----------------------------------------------------------------------------------*/
/**
 * @return Render Ticket
 * @param ticket
 */
export const renderTicketRows = (tickets: Ticket[]): JSX.Element[] => {
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
export const renderDocumentRows = (documents: Document[]): JSX.Element[] => {
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


