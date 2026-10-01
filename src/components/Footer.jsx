import { MessageCircle, MapPin, ArrowUp } from 'lucide-react';
import { BRAND, LOCATION, collections, WHATSAPP_DISPLAY } from '../data/products';
import { getWhatsAppUrl } from '../utils/whatsapp';
import './Footer.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        {/* Column 1 — Brand */}
        <div className="footer__col footer__col--brand">
          <div className="footer__brand">
            <span className="footer__brand-name">AL-'AFIFAH</span>
            <span className="footer__brand-sub">MODEST COUTURE</span>
          </div>
          <p className="footer__philosophy">{BRAND.tagline}</p>
          <div className="footer__socials">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href={LOCATION.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Location"
            >
              <MapPin size={18} />
            </a>
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__links">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} className="footer__link">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Categories */}
        <div className="footer__col">
          <h4 className="footer__col-title">Categories</h4>
          <ul className="footer__links">
            {collections.map(col => (
              <li key={col.id}>
                <a href="#collections" className="footer__link">{col.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Contact */}
        <div className="footer__col">
          <h4 className="footer__col-title">Contact Us</h4>
          <ul className="footer__links">
            <li>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={LOCATION.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                {LOCATION.name}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner container">
          <p className="footer__copyright">
            &copy; {BRAND.year} {BRAND.name}. All rights reserved.
          </p>
          <p className="footer__motto">MODESTY IN EVERY DETAIL.</p>
          <button
            className="footer__back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
