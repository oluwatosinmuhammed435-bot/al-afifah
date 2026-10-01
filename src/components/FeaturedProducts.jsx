import { MessageCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { featuredProducts } from '../data/products';
import { getProductInquiryUrl } from '../utils/whatsapp';
import './FeaturedProducts.css';

export default function FeaturedProducts() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="featured section" id="featured" aria-label="Featured Products">
      <div className="container">
        {/* Header */}
        <div
          className={`featured__header reveal ${headerVisible ? 'visible' : ''}`}
          ref={headerRef}
        >
          <span className="eyebrow">The Modest Edit</span>
          <hr className="gold-divider" />
          <h2 className="section-heading">Curated With Care.</h2>
        </div>

        {/* Product grid */}
        <div className="featured__grid" ref={gridRef}>
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`product-card reveal reveal-delay-${(index % 3) + 1} ${gridVisible ? 'visible' : ''}`}
            >
              <div className="product-card__image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-card__image"
                  loading="lazy"
                  width="400"
                  height="400"
                />
                <span className="product-card__category">{product.category}</span>
              </div>

              <div className="product-card__body">
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__desc">{product.description}</p>
                <div className="product-card__footer">
                  <span className="product-card__price">{product.price}</span>
                  <a
                    href={getProductInquiryUrl(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary btn--sm product-card__cta"
                    aria-label={`Inquire about ${product.name} via WhatsApp`}
                  >
                    <MessageCircle size={14} />
                    Inquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
