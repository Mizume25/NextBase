/**
 * @fileoverview Accedemos a los moldes que nos interesan
 * @module type/definitions.ts
 * @autor Gabriel Nivicela
 * 
 */

/** Imports */
import { Database } from "./database";

/** 
 * @exports @type Definiciones de las entidades y campos
 * Definitions Modelos */
export type Customer = Database["public"]["Tables"]["customers"]["Row"];
export type Record = Database["public"]["Tables"]["records"]["Row"];
export type Invoice = Database["public"]["Tables"]["invoices"]["Row"];
export type Document = Database["public"]["Tables"]["documents"]["Row"];
export type Ticket = Database["public"]["Tables"]["tickets"]["Row"];
export type Profile = Database["public"]["Tables"]["profiles"]["Row"];


