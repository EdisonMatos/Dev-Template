import React, { createContext, useContext } from "react";

// Cria o contexto
const WhatsAppLinkContext = createContext(false);

// Hook para usar facilmente em qualquer componente
export const useWhatsAppLink = () => useContext(WhatsAppLinkContext);

// Provider que envolve a aplicação
export const WhatsAppLinkProvider = ({ children, value }) => {
  return (
    <WhatsAppLinkContext.Provider value={value}>
      {children}
    </WhatsAppLinkContext.Provider>
  );
};
