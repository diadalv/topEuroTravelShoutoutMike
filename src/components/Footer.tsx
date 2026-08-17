import { PartnerMark, travelMedia } from '@/components/travel/Shared';
import { Image } from '@/components/ui/image';
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerFineTune = `
.site-footer--editorial .footer-column h3,
.site-footer--editorial .footer-contact a,
.site-footer--editorial .footer-links a,
.site-footer--editorial .footer-editorial__eyebrow,
.site-footer--editorial .footer-editorial > p:not(.footer-editorial__eyebrow),
.site-footer--editorial .footer-cta,
.site-footer--editorial .site-footer__bottom {
  font-size: 16px !important;
}

.site-footer--editorial .footer-logo-shell {
  width: 128px;
  height: 66px;
  margin: 0 0 8px 0;
  display: flex;
  align-items: flex-start;
  overflow: visible;
}

.site-footer--editorial .footer-logo-scale {
  transform: translateX(-22px) scale(1.5);
  transform-origin: left top;
}

.site-footer--editorial .footer-menu-grid {
  display: grid;
  grid-template-columns: minmax(92px, .82fr) minmax(150px, 1.18fr);
  gap: 28px;
}

.site-footer--editorial .footer-menu-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  min-width: 0;
}

.site-footer--editorial .footer-menu-secondary-rule {
  display: block;
  width: 34px;
  height: 1px;
  margin: -17px 0 16px;
  background: rgba(221, 160, 45, .85);
}

.site-footer--editorial .footer-members {
  gap: 10px !important;
}

.site-footer--editorial .footer-members .partner-mark {
  gap: 10px;
}

.site-footer--editorial .footer-members .partner-mark svg {
  width: 22px !important;
  height: 22px !important;
  stroke-width: 1.35 !important;
}

.site-footer--editorial .footer-members .partner-mark strong {
  font-size: 16px !important;
  font-weight: 650 !important;
  line-height: 1.1;
  letter-spacing: .01em;
}

.site-footer--editorial .footer-members .partner-mark span {
  font-size: 11px !important;
  font-weight: 500 !important;
  line-height: 1.2;
  letter-spacing: .01em;
  opacity: .82;
  white-space: nowrap;
}

.site-footer--editorial .footer-social .footer-cta {
  gap: 16px !important;
  border-radius: 6px !important;
}

.site-footer--editorial .footer-social .footer-cta span {
  white-space: nowrap;
}

@media (max-width: 680px) {
  .site-footer--editorial .footer-menu-grid {
    grid-template-columns: 1fr 1.25fr;
    gap: 22px;
  }

  .site-footer--editorial .footer-logo-scale {
    transform: translateX(-18px) scale(1.4);
  }
}
`;

export default function Footer() {
  return (
    <footer className="site-footer site-footer--editorial" style={{ marginTop: 0, padding: '20px clamp(24px, 4.2vw, 76px) 0', borderRadius: 0 }}>
      <style>{footerFineTune}</style>

      <div className="site-footer__layout" style={{ alignItems: 'start' }}>
        <section className="footer-editorial" aria-labelledby="footer-heading" style={{ padding: 0 }}>
          <div className="footer-logo-shell">
            <div className="footer-logo-scale">
              <Image src={travelMedia('logo.png')} alt="Top Euro Travel" className="footer-logo" />
            </div>
          </div>
          <h2 id="footer-heading" style={{ maxWidth: 460, fontSize: 'clamp(1.75rem, 1.75vw, 2.15rem)', lineHeight: 1 }}>
            Local expertise.
            <span>International standards.</span>
          </h2>
          <div className="footer-editorial__rule" aria-hidden="true" style={{ width: 48, margin: '12px 0 10px' }} />
          <p className="footer-editorial__eyebrow" style={{ marginBottom: 8 }}>Rhodes · Kos · Est. 1989</p>
          <p style={{ marginBottom: 2, lineHeight: 1.35 }}>Destination management and ground handling in Rhodes &amp; Kos.</p>
          <p style={{ marginBottom: 0, lineHeight: 1.35 }}>Supporting travel partners since 1989.</p>
        </section>

        <div className="site-footer__glass" style={{ alignSelf: 'start', minHeight: 0, height: 'auto', padding: '24px 28px' }}>
          <div className="footer-column footer-contact">
            <h3>Contact Us</h3>
            <a href="https://www.google.com/maps/search/?api=1&query=5th+Km+Rhodes-Lindos+Avenue%2C+Rhodes+851+00%2C+Greece" target="_blank" rel="noreferrer">
              <MapPin aria-hidden="true" />
              <span>5th Km Rhodes-Lindos Avenue,<br />Rhodes 851 00, Greece</span>
            </a>
            <a href="tel:+302241045506"><Phone aria-hidden="true" /> <span>+30 22410 45506</span></a>
            <a href="mailto:info@topeurotravel.gr"><Mail aria-hidden="true" /> <span>info@topeurotravel.gr</span></a>
          </div>

          <div className="footer-column">
            <h3>Menu</h3>
            <div className="footer-links footer-menu-grid">
              <div className="footer-menu-column">
                <Link to="/about">About</Link>
                <Link to="/rhodes">Rhodes</Link>
                <Link to="/services">Services</Link>
                <Link to="/faq">FAQ</Link>
              </div>
              <div className="footer-menu-column">
                <span className="footer-menu-secondary-rule" aria-hidden="true" />
                <Link to="/destinations">Destinations</Link>
                <Link to="/kos">Kos</Link>
                <Link to="/mice-groups">MICE &amp; Groups</Link>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h3>Members of</h3>
            <div className="footer-members">
              <PartnerMark kind="hatta" compact />
              <PartnerMark kind="dmc" compact />
            </div>
          </div>

          <div className="footer-column footer-social">
            <h3>Follow Us</h3>
            <div>
              <a href="https://www.linkedin.com/company/topeurotravel/" target="_blank" rel="noreferrer" aria-label="Top Euro Travel on LinkedIn"><Linkedin /></a>
              <a href="https://www.facebook.com/TopEuroTravel" target="_blank" rel="noreferrer" aria-label="Top Euro Travel on Facebook"><Facebook /></a>
              <a href="https://www.instagram.com/topeurotravel_" target="_blank" rel="noreferrer" aria-label="Top Euro Travel on Instagram"><Instagram /></a>
              <a href="https://share.google/ToaSglTwqTdfUG8Gf" target="_blank" rel="noreferrer" aria-label="Top Euro Travel on Google"><MapPin /></a>
            </div>
            <Link className="footer-cta" to="/contact" style={{ display: 'inline-flex', width: '100%', maxWidth: 184, minWidth: 0, height: 'auto', marginTop: 16, padding: '10px 14px', borderRadius: 6, justifyContent: 'space-between' }}>
              <span>Contact us</span>
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom" style={{ marginTop: 22, padding: '14px 0 15px' }}>
        <span>© 2026 Top Euro Travel. All Rights Reserved.</span>
        <div><Link to="/privacy">Privacy Policy</Link><i /><Link to="/terms">Terms &amp; Conditions</Link></div>
      </div>
    </footer>
  );
}
