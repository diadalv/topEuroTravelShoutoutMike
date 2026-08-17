import { PartnerMark, travelMedia } from '@/components/travel/Shared';
import { Image } from '@/components/ui/image';
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer site-footer--editorial" style={{ marginTop: 0, padding: '20px clamp(24px, 4.2vw, 76px) 0', borderRadius: 0 }}>
      <div className="site-footer__layout" style={{ alignItems: 'start' }}>
        <section className="footer-editorial" aria-labelledby="footer-heading" style={{ padding: 0 }}>
          <Image src={travelMedia('logo.png')} alt="Top Euro Travel" className="footer-logo" style={{ display: 'block', width: 124, height: 'auto', marginBottom: 14 }} />
          <h2 id="footer-heading" style={{ maxWidth: 460, fontSize: 'clamp(1.75rem, 1.75vw, 2.15rem)', lineHeight: 1 }}>
            Local expertise.
            <span>International standards.</span>
          </h2>
          <div className="footer-editorial__rule" aria-hidden="true" style={{ width: 48, margin: '12px 0 10px' }} />
          <p className="footer-editorial__eyebrow" style={{ marginBottom: 8 }}>Rhodes · Kos · Est. 1989</p>
          <p style={{ marginBottom: 2, fontSize: '.82rem', lineHeight: 1.35 }}>Destination management and ground handling in Rhodes &amp; Kos.</p>
          <p style={{ marginBottom: 0, fontSize: '.82rem', lineHeight: 1.35 }}>Supporting travel partners since 1989.</p>
        </section>

        <div className="site-footer__glass" style={{ alignSelf: 'start', minHeight: 0, height: 'auto', padding: '24px 28px' }}>
          <div className="footer-column footer-contact">
            <h3>Contact Us</h3>
            <a
              href="https://www.google.com/maps/search/?api=1&query=5th+Km+Rhodes-Lindos+Avenue%2C+Rhodes+851+00%2C+Greece"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin aria-hidden="true" />
              <span>5th Km Rhodes-Lindos Avenue,<br />Rhodes 851 00, Greece</span>
            </a>
            <a href="tel:+302241045506"><Phone aria-hidden="true" /> <span>+30 22410 45506</span></a>
            <a href="mailto:info@topeurotravel.gr"><Mail aria-hidden="true" /> <span>info@topeurotravel.gr</span></a>
          </div>

          <div className="footer-column">
            <h3>Menu</h3>
            <div className="footer-links footer-links--two">
              <Link to="/about">About</Link>
              <Link to="/destinations">Destinations</Link>
              <Link to="/rhodes">Rhodes</Link>
              <Link to="/kos">Kos</Link>
              <Link to="/services">Services</Link>
              <Link to="/mice-groups">MICE &amp; Groups</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>

          <div className="footer-column">
            <h3>Members of</h3>
            <div className="footer-members" style={{ gap: 8 }}>
              <div style={{ height: 38, display: 'flex', alignItems: 'center', overflow: 'visible' }}>
                <div style={{ transform: 'scale(.76)', transformOrigin: 'left center', width: '132%' }}><PartnerMark kind="hatta" compact /></div>
              </div>
              <div style={{ height: 38, display: 'flex', alignItems: 'center', overflow: 'visible' }}>
                <div style={{ transform: 'scale(.76)', transformOrigin: 'left center', width: '132%' }}><PartnerMark kind="dmc" compact /></div>
              </div>
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
            <Link
              className="footer-cta"
              to="/contact"
              style={{ display: 'inline-flex', width: '100%', maxWidth: 184, minWidth: 0, height: 'auto', marginTop: 16, padding: '10px 14px', borderRadius: 2, justifyContent: 'space-between' }}
            >
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
