import { useScrollReveal } from '../hooks/useScrollReveal';
import './BrandStatement.css';

export default function BrandStatement() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="brand-statement" aria-label="Brand Statement" ref={ref}>
      <div className={`brand-statement__inner container reveal ${isVisible ? 'visible' : ''}`}>
        <div className="brand-statement__accent" aria-hidden="true" />
        <h2 className="brand-statement__heading">
          Where Modesty Meets<br />Timeless Elegance.
        </h2>
        <p className="brand-statement__sub">
          Every detail matters. Every layer tells a story.
        </p>
        <div className="brand-statement__accent brand-statement__accent--bottom" aria-hidden="true" />
      </div>
    </section>
  );
}
