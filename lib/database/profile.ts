/**
 * @author Gabriel Nivicela
 * @module /lib/database/profile.ts
 * @fileoverview Archivo para poder obtener objetos de la base de Datos Profile
 * @version 1.0.0
 * @since 2026-05
 */

/** 
 * @import Modelo de Profile
 * @import Create Client Server */

import { Profile } from "@/types/definitions";
import { createClient } from "../supabase/server";

/**
 * @return Obtener Perfil de usuario
 * @example
 * ```ts
 * const customers = await getProfile()
 * ```
 * */

