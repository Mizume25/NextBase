"use client"
import { Badge } from "@/components/ui/badge";
import { Customer, Invoice, Record, Ticket, Document } from "@/types/definitions"
import { 
  renderCustomerRows, 
  renderRecordRows, 
  renderInvoiceRows, 
  renderTicketRows, 
  renderDocumentRows, 
  renderHead } from '@/components/core/Home/action';
import { useNavStore } from "@/store/useNavStore";
import { Section } from "@/store/useNavStore";

/** Objecto funciones que podamos iterar */
const renderers = {
  customers:  (data: Customer[])  => renderCustomerRows(data),
  records:    (data: Record[])    => renderRecordRows(data),
  invoices:   (data: Invoice[])   => renderInvoiceRows(data),
  tickets:    (data: Ticket[])    => renderTicketRows(data),
  documents:  (data: Document[])  => renderDocumentRows(data),
  headers:    (item: object)      => renderHead(item),
};

const data = [
  { id: "EXP-2024-001", entity: "Vanguard Tech Fund", amount: "$1,240,000", status: "Success" },
  { id: "EXP-2024-005", entity: "Global Logistics REIT", amount: "$850,000", status: "Warning" },
  { id: "EXP-2024-012", entity: "Crypto Arbitrage LP", amount: "$420,000", status: "Success" },
];

export function Activity() {
  /** @enum Use-state que itera el enum  */
  const section = useNavStore((s) => s.section)

  return (
    <div className="col-span-12 lg:col-span-8 bg-surface-container rounded-xl border border-outline-variant overflow-hidden">
      <div className="px-6 py-4 border-b border-outline-variant flex items-center justify-between bg-surface-container-high/50">
        <h3 className="text-lg font-bold text-primary">Recent Expedients</h3>
        <button className="text-xs font-bold text-primary hover:underline">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant" id="headerInfo">
              <th className="px-6 py-3 text-xs font-bold text-on-surface-variant uppercase">Record ID</th>
              <th className="px-6 py-3 text-xs font-bold text-on-surface-variant uppercase">Entity</th>
              <th className="hidden md:table-cell px-6 py-3 text-xs font-bold text-on-surface-variant uppercase">Amount</th>
              <th className="px-6 py-3 text-xs font-bold text-on-surface-variant uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/30" id="bodyInfo">
            {data.map((item) => (
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}