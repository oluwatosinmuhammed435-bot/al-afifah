import { MessageCircle, MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { LOCATION, WHATSAPP_DISPLAY } from '../data/products';
import './ContactSection.css';

export default function ContactSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="contact section" id="contact" aria-label="Contact">
      <div className="container" ref={ref}>
        <div className={`contact__inner reveal ${isVisible ? 'visible' : ''}`}>
          <div className="contact__content">
            <span className="eyebrow">Get in Touch</span>
            <h2 className="section-heading">
              Your Modest Essentials Are<br />Just a Message Away.
            </h2>
            <p className="section-subtext">
              Have a question about a product, color, or available style?
              Reach out to us directly or visit us.
            </p>

            <div className="contact__info">
              <div className="contact__info-item">
                <MapPin size={20} className="contact__info-icon" />
                <div>
                  <strong>{LOCATION.name}</strong>
                  <p>{LOCATION.address}</p>
                </div>
              </div>
            </div>

            <div className="contact__actions">
              <a
                href={getWhatsAppUrl('Assalamu Alaikum Al-\'Afifah Modest Couture. I would like to inquire about your products.')}
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
            </div>
          </div>

          <div className="contact__map">
            <iframe
              src={LOCATION.googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location for Al-'Afifah Modest Couture"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
