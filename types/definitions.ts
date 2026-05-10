/**
 * @fileoverview Accedemos a los moldes que nos interesan
 * @module type/definitions.ts
 * @autor Gabriel Nivicela
 * 
 */

/** Imports */
import { Database } from "./database";

/** Definitions Modelos */
type Customer = Database["public"]["Tables"]["Customers"]["Row"];
type Record = Database["public"]["Tables"]["Records"]["Row"];
type Invoice = Database["public"]["Tables"]["Invoices"]["Row"];
type Document = Database["public"]["Tables"]["Documents"]["Row"];
type Ticket = Database["public"]["Tables"]["Tickets"]["Row"];


