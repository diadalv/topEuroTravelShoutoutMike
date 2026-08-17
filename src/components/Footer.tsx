import { PartnerMark, travelMedia } from '@/components/travel/Shared';
import { Image } from '@/components/ui/image';
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer site-footer--editorial">
      <div className="site-footer__accent" aria-hidden="true">
        <span className="site-footer__accent-line site-footer__accent-line--gold" />
        <span className="site-footer__accent-dot" />
        <span className="site-footer__accent-index">05</span>
        <span className="site-footer__accent-label">Get in touch</span>
        <span className="site-footer__accent-line" />
      </div>

      <div className="site-footer__layout">
        <section className="footer-editorial" aria-labelledby="footer-heading">
          <Image src={travelMedia('logo.png')} alt="Top Euro Travel" className="footer-logo" />
          <h2 id="footer-heading">
            Local expertise.
            <span>International standards.</span>
          </h2>
          <div className="footer-editorial__rule" aria-hidden="true" />
          <p className="footer-editorial__eyebrow">Rhodes · Kos · Est. 1989</p>
          <p>Destination management and ground handling in Rhodes &amp; Kos.</p>
          <p>Supporting travel partners since 1989.</p>
          <Link className="footer-cta" to="/contact">
            <span>Contact us</span>
            <ArrowRight aria-hidden="true" />
          </Link>
        </section>

        <div className="site-footer__glass">
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
            <h3>Quick Links</h3>
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
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© 2026 Top Euro Travel. All Rights Reserved.</span>
        <div><Link to="/privacy">Privacy Policy</Link><i /><Link to="/terms">Terms &amp; Conditions</Link></div>
      </div>
    </footer>
  );
}
