import { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getWhatsAppUrl } from '../utils/whatsapp';
import './Hero.css';

export default function Hero() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="hero" aria-label="Hero" ref={ref}>
      {/* Immersive background layer */}
      <div className="hero__bg-image">
        <div className="hero__bg-overlay" />
      </div>

      <div className="hero__inner container">
        {/* ── Editorial Copy (Left aligned over negative space) ── */}
        <div className={`hero__content ${isVisible ? 'hero__content--visible' : ''}`}>
          <div className="hero__eyebrow-line">
            <span className="hero__eyebrow-bar" aria-hidden="true" />
            <span className="hero__eyebrow">Premium Modest Couture</span>
          </div>

          <h1 className="hero__heading">
            <span className="hero__heading-line hero__heading-line--1">Elegance</span>
            <span className="hero__heading-line hero__heading-line--2">in Every</span>
            <span className="hero__heading-line hero__heading-line--3">
              Touch<span className="hero__heading-dot">.</span>
            </span>
          </h1>

          <p className="hero__description">
            Discover thoughtfully selected modest essentials that bring
            together comfort, premium quality, and timeless grace.
          </p>

          <div className="hero__actions">
            <a href="#collections" className="btn btn--primary hero__btn">
              Explore Collection
              <ArrowRight size={16} />
            </a>
            <a
              href={getWhatsAppUrl()}
              className="btn btn--secondary hero__btn hero__btn--outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} />
              Contact Us
            </a>
          </div>

          <p className="hero__philosophy">
            Modesty is more than fashion.<br />
            It is a statement of identity.
          </p>
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
