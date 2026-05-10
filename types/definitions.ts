/**
 * @fileoverview Accedemos a los moldes que nos interesan
 * @module type/definitions.ts
 * @autor Gabriel Nivicela
 * 
 */

/** Imports */
import { Database } from "./database";

/** Definitions Modelos */
export type Customer = Database["public"]["Tables"]["Customers"]["Row"];
export type Record = Database["public"]["Tables"]["Records"]["Row"];
export type Invoice = Database["public"]["Tables"]["Invoices"]["Row"];
export type Document = Database["public"]["Tables"]["Documents"]["Row"];
export type Ticket = Database["public"]["Tables"]["Tickets"]["Row"];


