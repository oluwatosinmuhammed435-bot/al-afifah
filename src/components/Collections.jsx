import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { collections } from '../data/products';
import { getProductInquiryUrl } from '../utils/whatsapp';
import './Collections.css';

export default function Collections() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.08 });

  return (
    <section className="collections section" id="collections" aria-label="Collections">
      <div className="container">
        {/* Section header */}
        <div
          className={`collections__header reveal ${headerVisible ? 'visible' : ''}`}
          ref={headerRef}
        >
          <span className="eyebrow">Explore Our Selection</span>
          <hr className="gold-divider" />
          <h2 className="section-heading">Essentials for Every Layer.</h2>
          <p className="section-subtext">
            Thoughtfully selected modest accessories for your everyday wardrobe.
          </p>
        </div>

        {/* Collection grid */}
        <div className="collections__grid" ref={gridRef}>
          {collections.map((col, index) => (
            <a
              key={col.id}
              href={getProductInquiryUrl(col.name)}
              target="_blank"
              rel="noopener noreferrer"
              className={`collection-card reveal reveal-delay-${index + 1} ${gridVisible ? 'visible' : ''}`}
              aria-label={`Inquire about ${col.name} via WhatsApp`}
            >
              <div className="collection-card__image-wrapper">
                <img
                  src={col.image}
                  alt={col.name}
                  className="collection-card__image"
                  loading="lazy"
                  width="400"
                  height="400"
                />
                <div className="collection-card__overlay">
                  <span className="collection-card__cta-text">
                    Order via WhatsApp
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
              <div className="collection-card__body">
                <h3 className="collection-card__name">{col.name}</h3>
                <p className="collection-card__desc">{col.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
