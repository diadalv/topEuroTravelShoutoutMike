import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { ASSET, PartnerMark } from '@/components/travel/Shared';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="footer-brand">
          <Image src={`${ASSET}/logo.png`} alt="Top Euro Travel" className="footer-logo" />
          <p>Your trusted DMC in Rhodes &amp; Kos.</p>
          <p>Local expertise, unforgettable experiences.</p>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>
          <a href="https://www.google.com/maps/search/?api=1&query=5th+Km+Rhodes-Lindos+Avenue%2C+Rhodes+851+00%2C+Greece" target="_blank" rel="noreferrer"><MapPin /> 5th Km Rhodes-Lindos Avenue,<br />Rhodes 851 00, Greece</a>
          <a href="tel:+302241045506"><Phone /> +30 22410 45506</a>
          <a href="mailto:info@topeurotravel.gr"><Mail /> info@topeurotravel.gr</a>
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
            <Link to="/experiences">Experiences</Link>
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
            <a href="https://www.linkedin.com" aria-label="LinkedIn"><Linkedin /></a>
            <a href="https://www.facebook.com" aria-label="Facebook"><Facebook /></a>
            <a href="https://www.instagram.com" aria-label="Instagram"><Instagram /></a>
            <a href="https://www.youtube.com" aria-label="YouTube"><Youtube /></a>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© 2024 Top Euro Travel. All Rights Reserved.</span>
        <div><Link to="/privacy">Privacy Policy</Link><i /><Link to="/terms">Terms &amp; Conditions</Link></div>
      </div>
    </footer>
  );
}