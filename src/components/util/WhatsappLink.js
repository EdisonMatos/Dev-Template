export const USE_REAL_WHATSAPP_LINK = true;

export const WHATSAPP_DIRECT_LINK = "https://wa.me/5521972613067";
export const WHATSAPP_LOCAL_ROUTE = "/whatsapp";

export const getWhatsappLink = () =>
  USE_REAL_WHATSAPP_LINK ? WHATSAPP_DIRECT_LINK : WHATSAPP_LOCAL_ROUTE;
