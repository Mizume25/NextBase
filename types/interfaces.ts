/**
 * 
 * @fileoverview Archivo que mancomuna una serie de interfaces y tipados para frontend
 * @author Gabriel Nivicela
 */

/**@module @/components/core/Home/sidebar/NavItems */
/** @description Layout de items para el sidebar */

export interface NavItem {
    icon:string,
    label:string,
    active: boolean,
    ruta:string
}

