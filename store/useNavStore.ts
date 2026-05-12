/**
 * @import zustand
 * @fileoverview Archivo para compartir variables
 */
import { create } from "zustand";


/**
 * @type Section
 */
export type Section = 'customers' | 'records' | 'invoices' | 'tickets' | 'documents';


/** @type Funcion de varaibles compartidas */
type NavStore = {
    section: Section,
    setSection: (section:Section) => void
}

/** 
 * @function Compartida
 * @return section value 
 * Variable de estado compartido 
 */
export const useNavStore = create<NavStore>((set) => ({
    section: "customers",
    setSection: (section) => set({ section })
}))
