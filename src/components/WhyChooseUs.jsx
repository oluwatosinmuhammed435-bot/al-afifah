import { Award, Heart, Palette, Headphones } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './WhyChooseUs.css';

const VALUES = [
  {
    icon: Award,
    title: 'Quality First',
    description: 'Carefully selected essentials with attention to quality.',
  },
  {
    icon: Heart,
    title: 'Comfort in Everyday Wear',
    description: 'Practical pieces designed for everyday modest dressing.',
  },
  {
    icon: Palette,
    title: 'A Variety of Choices',
    description: 'Explore different styles and colors to suit your preferences.',
  },
  {
    icon: Headphones,
    title: 'Personal Customer Care',
    description: 'A direct and convenient way to ask questions and place orders.',
  },
];

export default function WhyChooseUs() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="why-us section" aria-label="Why Choose Us">
      <div className="container" ref={ref}>
        <div className={`why-us__header reveal ${isVisible ? 'visible' : ''}`}>
          <span className="eyebrow">Why Al-'Afifah</span>
          <hr className="gold-divider" />
          <h2 className="section-heading">Modesty, With Thoughtful Detail.</h2>
        </div>

        <div className="why-us__grid">
          {VALUES.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`value-card reveal reveal-delay-${index + 1} ${isVisible ? 'visible' : ''}`}
              >
                <div className="value-card__icon-wrapper">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="value-card__title">{item.title}</h3>
                <p className="value-card__desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
