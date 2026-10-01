import { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getWhatsAppUrl } from '../utils/whatsapp';
import './Hero.css';

const HERO_PRODUCTS = [
  { src: '/images/product-niqab.webp', alt: 'Premium Black Niqab', label: 'Niqabs' },
  { src: '/images/product-niqab-eating.webp', alt: 'Eating Niqab', label: 'Eating Niqab' },
  { src: '/images/product-arm-sleeves.webp', alt: "Let's Slim Arm Sleeves", label: 'Arm Sleeves' },
  { src: '/images/product-gloves.webp', alt: 'Muslimah Gloves', label: 'Gloves' },
  { src: '/images/product-sandy-socks.webp', alt: 'Sandy Knee-High Socks', label: 'Socks' },
];

export default function Hero() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.05 });
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % HERO_PRODUCTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" aria-label="Hero" ref={ref}>
      {/* Cinematic background layer */}
      <div className="hero__bg">
        <div className="hero__bg-gradient" />
        <div className="hero__bg-pattern" aria-hidden="true" />
      </div>

      <div className="hero__inner container">
        {/* ── Left Column: Editorial Copy ── */}
        <div className={`hero__content ${isVisible ? 'hero__content--visible' : ''}`}>
          <div className="hero__eyebrow-line">
            <span className="hero__eyebrow-bar" aria-hidden="true" />
            <span className="hero__eyebrow">The Art of Modest Living</span>
          </div>

          <h1 className="hero__heading">
            <span className="hero__heading-line hero__heading-line--1">Elegance</span>
            <span className="hero__heading-line hero__heading-line--2">in Every</span>
            <span className="hero__heading-line hero__heading-line--3">
              Layer<span className="hero__heading-dot">.</span>
            </span>
          </h1>

          <p className="hero__description">
            Discover thoughtfully selected modest essentials that bring
            together comfort, quality, and timeless grace.
          </p>

          <div className="hero__actions">
            <a href="#collections" className="btn btn--primary hero__btn">
              Explore Collection
              <ArrowRight size={16} />
            </a>
            <a
              href={getWhatsAppUrl()}
              className="btn btn--secondary hero__btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} />
              Contact Us
            </a>
          </div>

          <p className="hero__philosophy">
            Modesty is more than fashion.<br />
            It is a statement of identity and grace.
          </p>
        </div>

        {/* ── Right Column: Cinematic Product Showcase ── */}
        <div className={`hero__showcase ${isVisible ? 'hero__showcase--visible' : ''}`}>
          {/* Main flyer image */}
          <div className="hero__flyer-frame">
            <img
              src="/images/al-afifah-flyer.jpg"
              alt="Al-'Afifah Modest Couture — Our collection of niqabs, arm sleeves, socks, and gloves"
              className="hero__flyer-image"
              width="520"
              height="693"
            />
            <div className="hero__flyer-border" aria-hidden="true" />
          </div>

          {/* Floating product carousel strip */}
          <div className="hero__product-strip">
            {HERO_PRODUCTS.map((product, i) => (
              <div
                key={product.label}
                className={`hero__product-thumb ${i === activeSlide ? 'hero__product-thumb--active' : ''}`}
                onClick={() => setActiveSlide(i)}
                role="button"
                tabIndex={0}
                aria-label={`View ${product.label}`}
                onKeyDown={(e) => e.key === 'Enter' && setActiveSlide(i)}
              >
                <img
                  src={product.src}
                  alt={product.alt}
                  className="hero__product-thumb-img"
                  width="80"
                  height="80"
                />
                <span className="hero__product-thumb-label">{product.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" aria-hidden="true">
        <span className="hero__scroll-text">Scroll</span>
        <ChevronDown size={16} className="hero__scroll-icon" />
      </div>
    </section>
  );
}
