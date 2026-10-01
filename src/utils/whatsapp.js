import { WHATSAPP_NUMBER } from '../data/products';

/**
 * Generate a WhatsApp click-to-chat URL with an optional pre-filled message.
 * @param {string} [message] — pre-filled message text
 * @returns {string} WhatsApp URL
 */
export function getWhatsAppUrl(message = '') {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a WhatsApp inquiry link for a specific product.
 * @param {string} productName
 * @returns {string}
 */
export function getProductInquiryUrl(productName) {
  const message = `Assalamu Alaikum Al-'Afifah Modest Couture. I am interested in your ${productName}. Please share the available options and price.`;
  return getWhatsAppUrl(message);
}
