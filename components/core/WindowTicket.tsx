import React from 'react'
import { Button } from '../ui/button'
import { JSX } from "react"
import { TicketWithCustomer } from '@/types/definitions'
import { Check } from 'lucide-react'
export default async function WindowTicket({ tickets }: { tickets: TicketWithCustomer[] }) {

    const renederTickets = (tickets: TicketWithCustomer[]): JSX.Element[] => {
        return tickets.map((p) => (
            <div className="p-4 bg-surface-container-high rounded-lg border-l-4 border-primary" key={p.id}>
                <p className="font-bold">{p.name} {p.surname}</p>
                <p className="text-sm text-on-surface-variant">{p.type}</p>
            </div>

        ));
    }



    return (
        <div className="col-span-12 lg:col-span-4 bg-surface-container rounded-xl border border-outline-variant p-6 flex flex-col">
            <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-6">Upcoming Appointments</h3>
            <div className="space-y-4" >
                {renederTickets(tickets)}
            </div>
            <Button variant="outline" className="mt-auto w-full border-outline-variant mt-6">View Calendar</Button>
        </div>
    )
}
