import { useScrollReveal } from '../hooks/useScrollReveal';
import './BrandIntro.css';

export default function BrandIntro() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="brand-intro section" id="about" aria-label="About Us">
      <div className="brand-intro__inner container" ref={ref}>
        {/* Image side */}
        <div className={`brand-intro__visual reveal ${isVisible ? 'visible' : ''}`}>
          <div className="brand-intro__image-wrapper">
            <img
              src="/images/brand-lifestyle.jpg"
              alt="Curated modest fashion essentials arranged on a linen surface"
              className="brand-intro__image"
              loading="lazy"
              width="600"
              height="450"
            />
          </div>
        </div>

        {/* Text side */}
        <div className={`brand-intro__content reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
          <span className="eyebrow">Our Philosophy</span>
          <hr className="gold-divider" />
          <h2 className="section-heading">
            Designed for the<br />Beauty of Modesty.
          </h2>
          <p className="brand-intro__text">
            At Al-'Afifah Modest Couture, we believe that modest essentials should
            feel as beautiful as they are practical. Every piece is selected with
            attention to comfort, quality, and the quiet elegance of modest living.
          </p>
          <p className="brand-intro__text">
            From our carefully chosen niqabs to our everyday accessories, each
            item reflects a commitment to making modesty effortless and refined.
          </p>
        </div>
      </div>
    </section>
  );
}
