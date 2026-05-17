"use client"
import { Badge } from "@/components/ui/badge";
import { Customer, Invoice, Record, Ticket, Document, CustomerWithProfile, RecordsWithProfile, InvoiceWithRecord, DocumentWhitRecord } from "@/types/definitions"
import { 
  renderCustomerRows, 
  renderRecordRows, 
  renderInvoiceRows, 
  renderTicketRows, 
  renderDocumentRows, 
  renderHead } from '@/components/core/Home/action';
import { useNavStore } from "@/store/useNavStore";
import { ActivityProps } from "@/types/interfaces";
import { Section } from "@/store/useNavStore";
/* Import Section */
/**  
 * @type General*/
type SectionData =
  | { section: 'customers';  data: CustomerWithProfile[] }
  | { section: 'records';    data: RecordsWithProfile[] }
  | { section: 'invoices';   data: InvoiceWithRecord[] }
  | { section: 'tickets';    data: Ticket[] }
  | { section: 'documents';  data: DocumentWhitRecord[] }

/** Objecto funciones que podamos iterar */
const renderers = {
  customers:  (data: CustomerWithProfile[])  => renderCustomerRows(data),
  records:    (data: RecordsWithProfile[])    => renderRecordRows(data),
  invoices:   (data: InvoiceWithRecord[])   => renderInvoiceRows(data),
  tickets:    (data: Ticket[])    => renderTicketRows(data),
  documents:  (data: DocumentWhitRecord[])  => renderDocumentRows(data),
};




/** Objeto que instancia la ejecuccion */
const renderSection = (section: Section, props : ActivityProps) => {
  switch(section) {
    case 'customers':  return renderers.customers(props.customers)
    case 'records':    return renderers.records(props.records)
    case 'invoices':   return renderers.invoices(props.invoices)
    case 'tickets':    return renderers.tickets(props.tickets)
    case 'documents':  return renderers.documents(props.documents)
  }
}

/* Objeto que itera types */
const getSectionData = (section: Section, props: ActivityProps): SectionData => {
  switch(section) {
    case 'customers':  return { section: 'customers',  data: props.customers }
    case 'records':    return { section: 'records',    data: props.records }
    case 'invoices':   return { section: 'invoices',   data: props.invoices }
    case 'tickets':    return { section: 'tickets',    data: props.tickets }
    case 'documents':  return { section: 'documents',  data: props.documents }
  }
}





export function Activity({ props } : {props:ActivityProps}) {
  /** @enum Use-state que itera el enum  */
  const section = useNavStore((s) => s.section)


  const { data } = getSectionData(section, props);
  
  /*
  const { profile, ...rest } = data[0] as any
  const flatItem = { ...rest, ...profile } */


  return (
    <div className="col-span-12 lg:col-span-8 bg-surface-container rounded-xl border border-outline-variant overflow-hidden">
      <div className="px-6 py-4 border-b border-outline-variant flex items-center justify-between bg-surface-container-high/50">
        <h3 className="text-lg font-bold text-primary">Table Information</h3>
        <button className="text-xs font-bold text-primary hover:underline">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant text-center" id="headerInfo">
              {/*
              <th className="px-6 py-3 text-xs font-bold text-on-surface-variant uppercase">Record ID</th>
              <th className="px-6 py-3 text-xs font-bold text-on-surface-variant uppercase">Entity</th>
              <th className="hidden md:table-cell px-6 py-3 text-xs font-bold text-on-surface-variant uppercase">Amount</th>
              <th className="px-6 py-3 text-xs font-bold text-on-surface-variant uppercase">Status</th>
              */}

              {/* Renderizacion de Contenido de Ths*/}
              {renderHead(data[0])}
              

            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/30 text-center" id="bodyInfo">


          {renderSection(section, props)}
                {/*
              <tr key={item.id} className="hover:bg-surface-container-high/40 transition-colors">
                <td className="px-6 py-4 text-sm font-medium">{item.id}</td>
                <td className="px-6 py-4 text-sm text-on-surface-variant">{item.entity}</td>
                <td className="hidden md:table-cell px-6 py-4 text-sm">{item.amount}</td>
                <td className="px-6 py-4">
                  <Badge className={item.status === "Success" ? "bg-primary/10 text-primary" : "bg-error/10 text-error"}>
                    {item.status}
                  </Badge>
                </td>
              </tr>

                */}
           
          </tbody>
        </table>
      </div>
    </div>
  );
}