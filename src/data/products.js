/**
 * Central configuration for Al-'Afifah Modest Couture.
 * Update business details here — WhatsApp number, Instagram, etc.
 */

export const BRAND = {
  name: "Al-'Afifah Modest Couture",
  tagline: 'Modesty is more than fashion. It is a statement of elegance, identity, and grace.',
  year: new Date().getFullYear(),
};

// ── Actual business WhatsApp number (international format) ──
export const WHATSAPP_NUMBER = '2347071963572';
export const WHATSAPP_DISPLAY = '0707 196 3572';

// ── Physical Location ──
export const LOCATION = {
  name: 'Near University of Ibadan',
  address: 'University of Ibadan, Ibadan, Oyo State, Nigeria',
  googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.273617307044!2d3.8967919760773824!3d7.434954492576082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039eda612479e01%3A0xcb1b72a8c3d9a7bb!2sUniversity%20of%20Ibadan!5e0!3m2!1sen!2sng!4v1716335123456!5m2!1sen!2sng' // Demo UI embed URL
};

// ── Collections ──
export const collections = [
  {
    id: 'niqabs',
    name: 'Niqabs',
    description: 'Elegant face veils in flowing premium fabric, available in multiple styles.',
    image: '/images/product-niqab.webp',
  },
  {
    id: 'arm-sleeves',
    name: 'Arm Sleeves',
    description: 'High-quality arm covers for comfortable, everyday modest dressing.',
    image: '/images/product-arm-sleeves.webp',
  },
  {
    id: 'sandy-socks',
    name: 'Sandy Socks',
    description: 'Soft, breathable knee-high socks in natural sandy tones.',
    image: '/images/product-sandy-socks.webp',
  },
  {
    id: 'silvy-socks',
    name: 'Silvy Socks',
    description: 'Luxuriously smooth stockings in rich, elegant colours.',
    image: '/images/product-silky-socks.webp',
  },
  {
    id: 'gloves',
    name: 'Muslimah Gloves',
    description: 'Quality full-coverage gloves crafted for modest elegance.',
    image: '/images/product-gloves-promo.webp',
  },
];

// ── Featured Products ──
export const featuredProducts = [
  {
    id: 'classic-black-niqab',
    name: 'Classic Black Niqab',
    description: 'Timeless black niqab in lightweight, breathable fabric.',
    price: 'Contact for Price',
    image: '/images/product-niqab.webp',
    category: 'Niqabs',
  },
  {
    id: 'eating-niqab',
    name: 'Eating Niqab',
    description: 'Convenient flip-up niqab designed for easy eating and drinking.',
    price: 'Contact for Price',
    image: '/images/product-niqab-eating.webp',
    category: 'Niqabs',
  },
  {
    id: 'everyday-arm-sleeves',
    name: "Let's Slim Arm Sleeves",
    description: 'Cooling, UV-protective arm sleeves for daily wear.',
    price: 'Contact for Price',
    image: '/images/product-arm-sleeves.webp',
    category: 'Arm Sleeves',
  },
  {
    id: 'sandy-comfort-socks',
    name: 'Sandy Knee-High Socks',
    description: 'Breathable knee-high socks designed for all-day comfort.',
    price: 'Contact for Price',
    image: '/images/product-sandy-socks.webp',
    category: 'Sandy Socks',
  },
  {
    id: 'silvy-everyday-socks',
    name: 'Silvy Sandy Stockings',
    description: 'Silky-smooth stockings in a range of natural tones.',
    price: 'Contact for Price',
    image: '/images/product-silky-socks.webp',
    category: 'Silvy Socks',
  },
  {
    id: 'premium-muslimah-gloves',
    name: 'Premium Muslimah Gloves',
    description: 'Full-coverage gloves in quality stretch fabric.',
    price: 'Contact for Price',
    image: '/images/product-gloves.webp',
    category: 'Gloves',
  },
];
