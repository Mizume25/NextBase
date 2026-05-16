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


/**
 * @type Customer & Profile
 * Modificacion de tipos
 */


/**
 * @type Customer & Profile
 * Modificacion de tipos
 */

export type CustomerWithProfile = 
  Omit<Customer, "updated_at" | "created_at"> &
  Omit<Profile, "updated_at" | "created_at" | "id" | "rol"> 


/*  


const example: ProfileWithCustomer = {
  // Customer (entidad principal)
  id:         "uuid-customer",
  nif:        "12345678A",
  address:    "Calle Mayor 1, Barcelona",
  profile_id: "uuid-profile",
  manager_id: "uuid-manager",

  // Profile (sin id)
  name:       "Gabriel",
  surname:    "Nivicela",
  phone:      "+34 600 000 000",
  role:       "customer",
}






*/