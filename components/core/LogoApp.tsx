import React from "react";

/**
 * @fileoverview Componente del logo de NextBase.
 * @module components/core/LogoApp
 * @author Gabriel Nivicela
 */

/**
 * Logo principal de la aplicación.
 * 
 * @param className - Clases CSS para personalizar el tamaño y estilo
 * @returns Imagen del logo de NextBase
 * 
 * @example
 * ```tsx
 * <LogoApp className="w-10 h-10" />
 * ```
 */
export default function LogoApp({ className }: { className?: string }) {
  return (
    <img 
      src="/img/nextbase_logo_bold.svg" 
      alt="Logo de NextBase" 
      className={className}
    />
  )
}