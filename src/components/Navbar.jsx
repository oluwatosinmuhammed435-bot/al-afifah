import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="home">
      <nav className="navbar__inner container--wide" aria-label="Main navigation">
        {/* Brand wordmark */}
        <a href="#home" className="navbar__brand" onClick={handleNavClick}>
          <span className="navbar__brand-name">AL-'AFIFAH</span>
          <span className="navbar__brand-sub">MODEST COUTURE</span>
        </a>

        {/* Desktop navigation */}
        <ul className="navbar__links">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#featured"
          className="btn btn--primary btn--sm navbar__cta"
          onClick={handleNavClick}
        >
          Shop Collection
        </a>

        {/* Mobile toggle */}
        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
        <ul className="navbar__mobile-links">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href} style={{ transitionDelay: `${i * 60}ms` }}>
              <a href={link.href} className="navbar__mobile-link" onClick={handleNavClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#featured"
          className="btn btn--primary navbar__mobile-cta"
          onClick={handleNavClick}
        >
          Shop Collection
        </a>
      </div>
    </header>
  );
}
