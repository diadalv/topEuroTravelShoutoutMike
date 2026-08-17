import { Image } from '@/components/ui/image';
import { travelMedia } from '@/config/wix-media';
import {
  ArrowRight,
  ArrowUp,
  Building2,
  Clock,
  Facebook,
  Globe2,
  Headphones,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const luxuryFooterStyles = `
/* ==========================================================================
   TOP EURO TRAVEL - LUXURY EDITORIAL FOOTER
   ========================================================================== */

.tet-luxury-footer {
  position: relative;
  isolation: isolate;
  background:
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(221, 160, 45, 0.12), transparent 70%),
    radial-gradient(circle at 10% 30%, rgba(14, 107, 156, 0.18), transparent 45%),
    radial-gradient(circle at 90% 70%, rgba(7, 59, 99, 0.25), transparent 50%),
    linear-gradient(180deg, #072a45 0%, #051d32 40%, #031422 100%);
  color: #f1f5f9;
  font-family: inherit;
  margin-top: 0;
  padding: 0;
  border-top: 1px solid rgba(221, 160, 45, 0.35);
  box-shadow: 0 -10px 40px rgba(2, 20, 34, 0.4);
  overflow: hidden;
}

/* Subtle background architectural line mesh */
.tet-luxury-footer::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  opacity: 0.6;
}

.tet-footer-container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 clamp(20px, 3.5vw, 64px);
  position: relative;
  z-index: 1;
}

/* --------------------------------------------------------------------------
   1. PRE-FOOTER VIP ACTION BANNER
   -------------------------------------------------------------------------- */
.tet-prefooter-banner {
  margin-top: -1px;
  padding: clamp(32px, 3vw, 48px) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.tet-prefooter-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: clamp(24px, 2.5vw, 36px) clamp(24px, 3vw, 44px);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(221, 160, 45, 0.3);
  border-radius: 16px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow:
    0 20px 50px rgba(0, 16, 30, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
}

.tet-prefooter-card::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 260px;
  height: 100%;
  background: radial-gradient(circle at 100% 50%, rgba(221, 160, 45, 0.12), transparent 70%);
  pointer-events: none;
}

.tet-prefooter-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tet-prefooter-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.76rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #f0b344;
}

.tet-prefooter-tag svg {
  width: 14px;
  height: 14px;
  color: #dda02d;
}

.tet-prefooter-title {
  margin: 0;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.6rem, 2.3vw, 2.4rem);
  font-weight: 600;
  line-height: 1.15;
  color: #ffffff;
  letter-spacing: -0.01em;
}

.tet-prefooter-desc {
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(0.92rem, 1vw, 1.02rem);
  max-width: 580px;
  line-height: 1.5;
}

.tet-prefooter-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.tet-btn-gold {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(135deg, #e5a733 0%, #c9881b 100%);
  color: #041c30 !important;
  font-weight: 700;
  font-size: 0.88rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 13px 26px;
  border-radius: 9px;
  transition: all 260ms cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 8px 24px rgba(221, 160, 45, 0.28);
  border: 1px solid rgba(255, 255, 255, 0.25);
  text-decoration: none;
  white-space: nowrap;
}

.tet-btn-gold:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(221, 160, 45, 0.42);
  background: linear-gradient(135deg, #f5b745 0%, #db9522 100%);
}

.tet-btn-gold svg {
  width: 16px;
  height: 16px;
  transition: transform 240ms ease;
}

.tet-btn-gold:hover svg {
  transform: translateX(4px);
}

.tet-btn-glass {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff !important;
  font-weight: 600;
  font-size: 0.88rem;
  letter-spacing: 0.04em;
  padding: 13px 22px;
  border-radius: 9px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 260ms cubic-bezier(0.16, 1, 0.3, 1);
  backdrop-filter: blur(8px);
  text-decoration: none;
  white-space: nowrap;
}

.tet-btn-glass:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(221, 160, 45, 0.6);
  color: #f0b344 !important;
  transform: translateY(-2px);
}

.tet-btn-glass svg {
  width: 16px;
  height: 16px;
  color: #dda02d;
}

/* --------------------------------------------------------------------------
   2. MAIN FOOTER MULTI-COLUMN GRID
   -------------------------------------------------------------------------- */
.tet-footer-main {
  padding: clamp(48px, 5vw, 68px) 0 clamp(40px, 4vw, 56px);
}

.tet-footer-grid {
  display: grid;
  grid-template-columns: 1.35fr 0.95fr 0.95fr 0.85fr 1.25fr;
  gap: clamp(24px, 2.8vw, 44px);
  align-items: start;
}

.tet-footer-col {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

/* Brand Identity Column */
.tet-brand-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 12px;
}

.tet-footer-brand-link {
  display: inline-block;
  margin-bottom: 20px;
  transition: transform 240ms ease, opacity 240ms ease;
  line-height: 0;
}

.tet-footer-brand-link:hover {
  transform: scale(1.03);
  opacity: 0.96;
}

.tet-footer-brand-logo {
  width: 130px;
  height: auto;
  max-height: 72px;
  object-fit: contain;
  object-position: left center;
  filter: drop-shadow(0 4px 14px rgba(0, 32, 58, 0.45));
}

.tet-brand-quote {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.4rem, 1.6vw, 1.75rem);
  font-weight: 600;
  line-height: 1.2;
  color: #ffffff;
  margin: 0 0 12px;
  letter-spacing: -0.01em;
}

.tet-brand-quote span {
  display: block;
  color: #f0b344;
  font-style: italic;
  font-weight: 500;
  font-size: 0.92em;
}

.tet-brand-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #dda02d;
  background: rgba(221, 160, 45, 0.1);
  padding: 5px 12px;
  border-radius: 999px;
  border: 1px solid rgba(221, 160, 45, 0.25);
  margin-bottom: 14px;
}

.tet-brand-badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: #dda02d;
  box-shadow: 0 0 8px rgba(221, 160, 45, 0.8);
}

.tet-brand-desc {
  margin: 0 0 24px;
  color: rgba(255, 255, 255, 0.74);
  font-size: 0.88rem;
  line-height: 1.6;
}

/* Social Media Hub */
.tet-social-hub {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.tet-social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(221, 160, 45, 0.45);
  color: #ffffff;
  transition: all 260ms cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
}

.tet-social-icon svg {
  width: 17px;
  height: 17px;
  transition: transform 220ms ease;
}

.tet-social-icon:hover {
  background: linear-gradient(135deg, #dda02d 0%, #b87b14 100%);
  color: #041c30;
  border-color: #f0b344;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(221, 160, 45, 0.35);
}

.tet-social-icon:hover svg {
  transform: scale(1.1);
}

/* Column Headings */
.tet-col-heading {
  font-size: 0.86rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0 0 20px;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
}

.tet-col-heading::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 28px;
  height: 2px;
  background: linear-gradient(90deg, #dda02d 0%, rgba(221, 160, 45, 0.2) 100%);
  border-radius: 2px;
}

/* Links List */
.tet-links-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 11px;
}

.tet-links-list li {
  margin: 0;
  padding: 0;
}

.tet-links-list a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.88rem;
  font-weight: 450;
  line-height: 1.4;
  text-decoration: none;
  transition: all 220ms ease;
  position: relative;
}

.tet-links-list a::before {
  content: "›";
  color: #dda02d;
  font-size: 1.1rem;
  line-height: 1;
  opacity: 0;
  transform: translateX(-4px);
  transition: all 200ms ease;
}

.tet-links-list a:hover {
  color: #f0b344;
  transform: translateX(4px);
  padding-left: 2px;
}

.tet-links-list a:hover::before {
  opacity: 1;
  transform: translateX(0);
}

.tet-link-pill {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #031422;
  background: #dda02d;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 4px;
}

/* Headquarters / Contact Info Hub */
.tet-hq-contact-list {
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-bottom: 24px;
}

.tet-hq-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.86rem;
  line-height: 1.5;
  text-decoration: none;
  transition: all 220ms ease;
}

.tet-hq-item svg {
  width: 17px;
  height: 17px;
  flex-shrink: 0;
  margin-top: 3px;
  color: #dda02d;
  transition: color 200ms ease, transform 200ms ease;
}

a.tet-hq-item:hover {
  color: #f0b344;
  transform: translateX(3px);
}

a.tet-hq-item:hover svg {
  color: #ffffff;
  transform: scale(1.1);
}

/* Accreditations Trust Badges */
.tet-accreditations {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tet-accreditation-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 2px;
}

.tet-accreditation-cards {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tet-accreditation-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  transition: all 220ms ease;
}

.tet-accreditation-card:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(221, 160, 45, 0.35);
  transform: translateY(-1px);
}

.tet-accreditation-card svg {
  width: 18px;
  height: 18px;
  color: #dda02d;
  flex-shrink: 0;
}

.tet-accreditation-text {
  display: flex;
  flex-direction: column;
}

.tet-accreditation-text strong {
  font-size: 0.84rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.03em;
  line-height: 1.2;
}

.tet-accreditation-text span {
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.2;
}

/* --------------------------------------------------------------------------
   3. SUB-FOOTER BOTTOM BAR
   -------------------------------------------------------------------------- */
.tet-subfooter {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 22px 0 26px;
  background: rgba(2, 16, 26, 0.6);
  position: relative;
}

.tet-subfooter-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.tet-copyright-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.tet-copyright-main {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.72);
}

.tet-copyright-license {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.45);
}

.tet-subfooter-links {
  display: flex;
  align-items: center;
  gap: 16px;
}

.tet-subfooter-links a {
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.8rem;
  text-decoration: none;
  transition: color 200ms ease;
}

.tet-subfooter-links a:hover {
  color: #f0b344;
}

.tet-subfooter-divider {
  width: 1px;
  height: 12px;
  background: rgba(221, 160, 45, 0.5);
  display: inline-block;
}

/* Back to Top Button */
.tet-back-to-top {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(221, 160, 45, 0.4);
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 240ms cubic-bezier(0.16, 1, 0.3, 1);
}

.tet-back-to-top svg {
  width: 14px;
  height: 14px;
  color: #dda02d;
  transition: transform 220ms ease;
}

.tet-back-to-top:hover {
  background: #dda02d;
  color: #031422;
  border-color: #dda02d;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(221, 160, 45, 0.3);
}

.tet-back-to-top:hover svg {
  color: #031422;
  transform: translateY(-2px);
}

/* --------------------------------------------------------------------------
   RESPONSIVE BREAKPOINTS
   -------------------------------------------------------------------------- */
@media (max-width: 1200px) {
  .tet-footer-grid {
    grid-template-columns: 1.3fr 1fr 1fr 1fr;
  }
  .tet-footer-col--hq {
    grid-column: span 4;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    margin-top: 12px;
    padding-top: 32px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }
}

@media (max-width: 900px) {
  .tet-prefooter-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .tet-prefooter-actions {
    width: 100%;
    flex-wrap: wrap;
  }

  .tet-footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 36px 24px;
  }

  .tet-footer-col--brand {
    grid-column: span 2;
    padding-right: 0;
    max-width: 600px;
  }

  .tet-footer-col--hq {
    grid-column: span 2;
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

@media (max-width: 600px) {
  .tet-footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .tet-footer-col--brand {
    grid-column: span 1;
  }

  .tet-footer-col--hq {
    grid-column: span 1;
  }

  .tet-prefooter-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .tet-btn-gold,
  .tet-btn-glass {
    width: 100%;
  }

  .tet-subfooter-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .tet-back-to-top {
    align-self: flex-start;
    margin-top: 8px;
  }
}
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="tet-luxury-footer" aria-label="Site Footer">
      <style>{luxuryFooterStyles}</style>

      {/* 1. PRE-FOOTER VIP ACTION BANNER */}
      <div className="tet-prefooter-banner">
        <div className="tet-footer-container">
          <div className="tet-prefooter-card">
            <div className="tet-prefooter-info">
              <div className="tet-prefooter-tag">
                <Sparkles aria-hidden="true" />
                <span>Premier DMC &amp; Ground Operator</span>
              </div>
              <h2 className="tet-prefooter-title">
                Ready to plan your next Dodecanese journey?
              </h2>
              <p className="tet-prefooter-desc">
                Partner with Rhodes &amp; Kos leading destination specialists. From bespoke leisure groups to high-level corporate MICE and seamless VIP logistics.
              </p>
            </div>

            <div className="tet-prefooter-actions">
              <Link to="/contact" className="tet-btn-gold">
                <span>Request a Proposal</span>
                <ArrowRight aria-hidden="true" />
              </Link>
              <a href="tel:+302241045506" className="tet-btn-glass" aria-label="Direct 24/7 Operations Call">
                <Headphones aria-hidden="true" />
                <span>+30 22410 45506</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN 5-COLUMN FOOTER */}
      <div className="tet-footer-main">
        <div className="tet-footer-container">
          <div className="tet-footer-grid">

            {/* COLUMN 1: Brand Heritage & Story */}
            <div className="tet-footer-col tet-footer-col--brand">
              <div className="tet-brand-block">
                <Link to="/" className="tet-footer-brand-link" aria-label="Top Euro Travel Home">
                  <Image
                    src={travelMedia('logo.png')}
                    alt="Top Euro Travel - Destination Management Company"
                    className="tet-footer-brand-logo brand-logo"
                  />
                </Link>

                <p className="tet-brand-quote">
                  Local expertise.
                  <span>International standards.</span>
                </p>

                <div className="tet-brand-badge">
                  <span className="tet-brand-badge-dot" aria-hidden="true" />
                  <span>Rhodes · Kos · Est. 1989</span>
                </div>

                <p className="tet-brand-desc">
                  Providing full-spectrum Destination Management and ground handling services across Rhodes and Kos for over 35 years.
                </p>

                {/* Social Hub */}
                <div className="tet-social-hub" aria-label="Social media profiles">
                  <a
                    href="https://www.linkedin.com/company/topeurotravel/"
                    target="_blank"
                    rel="noreferrer"
                    className="tet-social-icon"
                    aria-label="Top Euro Travel on LinkedIn"
                  >
                    <Linkedin aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.facebook.com/TopEuroTravel"
                    target="_blank"
                    rel="noreferrer"
                    className="tet-social-icon"
                    aria-label="Top Euro Travel on Facebook"
                  >
                    <Facebook aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.instagram.com/topeurotravel_"
                    target="_blank"
                    rel="noreferrer"
                    className="tet-social-icon"
                    aria-label="Top Euro Travel on Instagram"
                  >
                    <Instagram aria-hidden="true" />
                  </a>
                  <a
                    href="https://share.google/ToaSglTwqTdfUG8Gf"
                    target="_blank"
                    rel="noreferrer"
                    className="tet-social-icon"
                    aria-label="Top Euro Travel on Google Maps &amp; Reviews"
                  >
                    <MapPin aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* COLUMN 2: Destinations & Excursions */}
            <div className="tet-footer-col">
              <h3 className="tet-col-heading">Destinations</h3>
              <ul className="tet-links-list">
                <li>
                  <Link to="/rhodes">
                    Rhodes Island <span className="tet-link-pill">HQ</span>
                  </Link>
                </li>
                <li>
                  <Link to="/kos">Kos Island</Link>
                </li>
                <li>
                  <Link to="/destinations">All Destinations</Link>
                </li>
                <li>
                  <Link to="/excursions">Curated Excursions</Link>
                </li>
                <li>
                  <Link to="/destinations">Island Experiences</Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 3: Services & MICE */}
            <div className="tet-footer-col">
              <h3 className="tet-col-heading">Services &amp; MICE</h3>
              <ul className="tet-links-list">
                <li>
                  <Link to="/services">Ground Handling</Link>
                </li>
                <li>
                  <Link to="/mice-groups">MICE &amp; Corporate</Link>
                </li>
                <li>
                  <Link to="/services">VIP Transfers</Link>
                </li>
                <li>
                  <Link to="/services">Hotel Contracting</Link>
                </li>
                <li>
                  <Link to="/services">Airport &amp; Port Ops</Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 4: Company & Insights */}
            <div className="tet-footer-col">
              <h3 className="tet-col-heading">Company</h3>
              <ul className="tet-links-list">
                <li>
                  <Link to="/about">About Top Euro Travel</Link>
                </li>
                <li>
                  <Link to="/blog">Travel Blog &amp; Insights</Link>
                </li>
                <li>
                  <Link to="/faq">Partner FAQ</Link>
                </li>
                <li>
                  <Link to="/contact">Contact &amp; Support</Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 5: Headquarters & Accreditations */}
            <div className="tet-footer-col tet-footer-col--hq">
              <div>
                <h3 className="tet-col-heading">Headquarters</h3>
                <div className="tet-hq-contact-list">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=5th+Km+Rhodes-Lindos+Avenue%2C+Rhodes+851+00%2C+Greece"
                    target="_blank"
                    rel="noreferrer"
                    className="tet-hq-item"
                  >
                    <MapPin aria-hidden="true" />
                    <span>5th Km Rhodes-Lindos Ave,<br />Rhodes 851 00, Greece</span>
                  </a>

                  <a href="tel:+302241045506" className="tet-hq-item">
                    <Phone aria-hidden="true" />
                    <span>+30 22410 45506</span>
                  </a>

                  <a href="mailto:info@topeurotravel.gr" className="tet-hq-item">
                    <Mail aria-hidden="true" />
                    <span>info@topeurotravel.gr</span>
                  </a>

                  <div className="tet-hq-item">
                    <Clock aria-hidden="true" />
                    <span>24/7 Operations Support</span>
                  </div>
                </div>
              </div>

              {/* Accreditations Trust Badges */}
              <div className="tet-accreditations">
                <div className="tet-accreditation-label">Official Accreditations</div>
                <div className="tet-accreditation-cards">
                  <div className="tet-accreditation-card">
                    <ShieldCheck aria-hidden="true" />
                    <div className="tet-accreditation-text">
                      <strong>HATTA</strong>
                      <span>Hellenic Assoc. of Travel Agencies</span>
                    </div>
                  </div>

                  <div className="tet-accreditation-card">
                    <Globe2 aria-hidden="true" />
                    <div className="tet-accreditation-text">
                      <strong>IATA</strong>
                      <span>Accredited Passenger Agent</span>
                    </div>
                  </div>

                  <div className="tet-accreditation-card">
                    <Building2 aria-hidden="true" />
                    <div className="tet-accreditation-text">
                      <strong>GREECE DMCs</strong>
                      <span>Official Network Member</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. SUB-FOOTER BOTTOM BAR */}
      <div className="tet-subfooter">
        <div className="tet-footer-container">
          <div className="tet-subfooter-inner">

            <div className="tet-copyright-info">
              <span className="tet-copyright-main">
                &copy; {currentYear} Top Euro Travel. All Rights Reserved.
              </span>
              <span className="tet-copyright-license">
                GNTO License (MHTE): 1476E60000000000 · General Commercial Registry (G.E.MI.) Member.
              </span>
            </div>

            <div className="tet-subfooter-links">
              <Link to="/privacy">Privacy Policy</Link>
              <span className="tet-subfooter-divider" aria-hidden="true" />
              <Link to="/terms">Terms &amp; Conditions</Link>
            </div>

            <button
              type="button"
              className="tet-back-to-top"
              onClick={scrollToTop}
              aria-label="Scroll back to top of the page"
            >
              <span>Back to Top</span>
              <ArrowUp aria-hidden="true" />
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
}
