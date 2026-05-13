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
import { User } from "@supabase/supabase-js";


/**
 * @return Obtener Perfil de usuario
 * @example
 * @exports Function
 * ```ts
 * const customers = await getProfile()
 * ```
 * */
export const getProfile = async(auth_user : User ) : Promise<Profile | null> => {

    if (!auth_user) return null 

    const supabase = await createClient();

    /** Creamos objeto de BD */
     const { data, error } = await supabase
     .from("profiles")
     .select("*")
     .eq('id', auth_user.id)
     .single();



     /** Si da Error retornamos nulo */
    if(error){
        return null
    } else {
        /** Si no retornamos el objeto */
        return data;
    }
}