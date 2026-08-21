import { Image } from '@/components/ui/image';
import { travelMedia } from '@/config/wix-media';
import {
    Building2,
    ChevronDown,
    Clock,
    Facebook,
    Globe2,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    ShieldCheck,
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
  font-family: Manrope, Inter, "Segoe UI", Arial, sans-serif;
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
  max-width: 1760px;
  margin: 0 auto;
  padding: 0 clamp(20px, 2.5vw, 48px);
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
  font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
  font-size: clamp(0.96rem, 1vw, 1.08rem);
  font-weight: 600;
  line-height: 1.4;
  color: #ffffff;
  margin: 0 0 12px;
  padding-bottom: 14px;
  letter-spacing: 0;
  position: relative;
}

.tet-brand-quote::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 38px;
  height: 2px;
  background: #dda02d;
  border-radius: 2px;
}

.tet-brand-quote span {
  display: block;
  color: #ffffff;
  font-style: normal;
  font-weight: 600;
  font-size: 1em;
}

.tet-brand-badge {
  display: block;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  line-height: 1.4;
  text-transform: uppercase;
  color: #f0b344;
  margin: 0 0 10px;
}

.tet-brand-desc {
  max-width: 430px;
  margin: 0 0 24px;
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.88rem;
  line-height: 1.48;
}

.tet-brand-desc span {
  display: block;
}

.tet-brand-desc span + span {
  margin-top: 3px;
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
  font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
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

.tet-accreditations--footer-row {
  grid-column: 2 / -1;
  margin-top: 4px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.tet-accreditations--footer-row .tet-accreditation-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
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

.footer-agency-credit {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: clamp(1.25rem, 1.6vw, 1.75rem);
  width: fit-content;
  max-width: 100%;
  padding: 0.4rem 0.65rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.018);
  overflow: hidden;
  color: inherit;
  text-decoration: none;
  --login-agency-blue-x: 0px;
  --login-agency-orange-x: 0px;
  transition:
    border-color 180ms ease,
    background-color 180ms ease;
}

.footer-agency-label {
  color: rgba(255, 255, 255, 0.42);
  font-size: 0.52rem;
  font-weight: 600;
  letter-spacing: 0.11em;
  line-height: 1.35;
  text-transform: uppercase;
  transition: color 180ms ease;
}

.login-agency-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: #ffffff;
  line-height: 1;
  white-space: nowrap;
}

.login-agency-logo svg {
  width: 1.65rem;
  height: 2rem;
  flex: 0 0 auto;
  overflow: visible;
}

.login-agency-logo__blue {
  fill: #4388ff;
  transform: translateX(var(--login-agency-blue-x, 0px));
}

.login-agency-logo__orange {
  fill: #ff8a24;
  transform: translateX(var(--login-agency-orange-x, 0px));
}

.login-agency-logo__blue,
.login-agency-logo__orange {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
}

.login-agency-logo__copy {
  display: flex;
  flex-direction: column;
  gap: 0.18rem;
}

.login-agency-logo strong {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.login-agency-logo small {
  color: rgba(255, 255, 255, 0.58);
  font-size: 0.48rem;
  font-weight: 600;
  letter-spacing: 0.14em;
}

.footer-agency-credit:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 4px;
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.034);
  --login-agency-blue-x: -1.5px;
  --login-agency-orange-x: 1.5px;
}

@media (hover: hover) and (pointer: fine) {
  .footer-agency-credit:hover {
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.034);
    --login-agency-blue-x: -1.5px;
    --login-agency-orange-x: 1.5px;
  }

  .footer-agency-credit:hover .footer-agency-label {
    color: rgba(255, 255, 255, 0.58);
  }
}

@media (max-width: 640px) {
  .footer-agency-credit {
    flex-wrap: wrap;
    gap: 0.85rem 1.25rem;
  }
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

  .tet-accreditations--footer-row {
    grid-column: 1 / -1;
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

  .tet-accreditations--footer-row .tet-accreditation-cards {
    grid-template-columns: 1fr;
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

}
/* Footer navigation grouping: accreditation cards sit directly below menu links */
.tet-footer-grid {
  grid-template-columns: 1.35fr minmax(0, 2.75fr) 1.25fr;
}

.tet-footer-nav-area {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.tet-footer-menu-grid {
  display: grid;
  grid-template-columns: 0.95fr 0.95fr 0.85fr;
  gap: clamp(24px, 2.8vw, 44px);
  align-items: start;
}

.tet-accreditations--footer-row {
  grid-column: auto;
  margin-top: 18px;
  padding-top: 18px;
}

.tet-accreditations--footer-row .tet-accreditation-cards {
  grid-template-columns: 0.95fr 0.95fr 0.85fr;
}

.tet-hq-contact-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  color: #f0b344;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 200ms ease, transform 200ms ease;
}

.tet-hq-contact-cta:hover {
  color: #ffffff;
  transform: translateX(3px);
}

@media (max-width: 1200px) {
  .tet-footer-grid {
    grid-template-columns: 1.3fr minmax(0, 3fr);
  }

  .tet-footer-col--brand {
    grid-column: 1;
  }

  .tet-footer-col--hq {
    grid-column: 1 / -1;
    display: block;
  }

  .tet-accreditations--footer-row {
    grid-column: auto;
  }
}

@media (max-width: 900px) {
  .tet-footer-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .tet-footer-col--brand,
  .tet-footer-col--hq {
    grid-column: 1;
  }

  .tet-footer-menu-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px 24px;
  }
}

@media (max-width: 600px) {
  .tet-footer-menu-grid {
    grid-template-columns: 1fr;
  }

  .tet-accreditations--footer-row .tet-accreditation-cards {
    grid-template-columns: 1fr;
  }
}

/* Compact footer: aligned accreditation and agency cards */
.tet-footer-main {
  padding: clamp(32px, 3.5vw, 46px) 0 clamp(24px, 2.8vw, 36px);
}

.tet-footer-grid {
  align-items: stretch;
  gap: clamp(22px, 2.3vw, 36px);
}

.tet-footer-nav-area,
.tet-footer-col--hq {
  min-height: 100%;
}

.tet-footer-brand-link {
  margin-bottom: 14px;
}

.tet-brand-desc {
  margin-bottom: 18px;
}

.tet-col-heading {
  margin-bottom: 14px;
}

.tet-links-list {
  gap: 8px;
}

.tet-hq-contact-list {
  gap: 9px;
  margin-bottom: 0;
}

.tet-accreditations--footer-row {
  margin-top: auto;
  padding-top: 14px;
}

.tet-agency-credit-slot {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: auto;
  padding-top: 38px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-agency-credit {
  box-sizing: border-box;
  width: 100%;
  min-height: 60px;
  justify-content: space-between;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 8px;
}

.tet-subfooter {
  padding: 12px 0 14px;
}

.tet-subfooter-inner {
  gap: 18px;
  flex-wrap: nowrap;
}

.tet-copyright-info {
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px 0;
}

.tet-copyright-info > span + span {
  margin-left: 10px;
  padding-left: 10px;
  border-left: 1px solid rgba(221, 160, 45, 0.45);
}

@media (max-width: 1200px) {
  .tet-footer-col--hq {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.8fr);
    gap: 28px;
    align-items: end;
    margin-top: 0;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .tet-agency-credit-slot {
    margin-top: 0;
    padding-top: 0;
    border-top: 0;
  }
}

@media (max-width: 900px) {
  .tet-footer-main {
    padding: 30px 0 24px;
  }

  .tet-footer-grid {
    gap: 28px;
  }

  .tet-footer-col--hq {
    grid-column: 1;
    grid-template-columns: minmax(0, 1fr) minmax(260px, 0.8fr);
    gap: 24px;
  }

  .tet-subfooter-inner {
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .tet-copyright-info {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .tet-footer-col--hq {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding-top: 18px;
  }

  .tet-agency-credit-slot {
    width: 100%;
    margin-top: 18px;
    padding-top: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .tet-copyright-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .tet-copyright-info > span + span {
    margin-left: 0;
    padding-left: 0;
    border-left: 0;
  }

  .tet-subfooter {
    padding: 12px 0 16px;
  }
}

/* Compact mobile footer — preserve every item while reducing total scroll height. */
@media (max-width: 600px) {
  .tet-footer-main {
    padding: 24px 0 18px;
  }

  .tet-footer-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .tet-brand-block {
    padding-right: 0;
  }

  .tet-footer-brand-link {
    margin-bottom: 10px;
  }

  .tet-footer-brand-logo {
    width: 110px;
    max-height: 60px;
  }

  .tet-brand-quote {
    margin-bottom: 8px;
    padding-bottom: 10px;
    font-size: 0.94rem;
    line-height: 1.32;
  }

  .tet-brand-badge {
    margin-bottom: 6px;
    font-size: 0.7rem;
  }

  .tet-brand-desc {
    margin-bottom: 13px;
    font-size: 0.8rem;
    line-height: 1.42;
  }

  .tet-social-hub {
    gap: 8px;
  }

  .tet-social-icon {
    width: 34px;
    height: 34px;
  }

  .tet-social-icon svg {
    width: 15px;
    height: 15px;
  }

  .tet-footer-menu-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px 18px;
    align-items: start;
  }

  .tet-footer-menu-grid > .tet-footer-col:nth-child(1) {
    grid-column: 1;
    grid-row: 1 / span 2;
  }

  .tet-footer-menu-grid > .tet-footer-col:nth-child(2) {
    grid-column: 2;
    grid-row: 1;
  }

  .tet-footer-menu-grid > .tet-footer-col:nth-child(3) {
    grid-column: 2;
    grid-row: 2;
  }

  .tet-col-heading {
    margin-bottom: 10px;
    padding-bottom: 6px;
    font-size: 0.78rem;
  }

  .tet-links-list {
    gap: 6px;
  }

  .tet-links-list a {
    font-size: 0.8rem;
    line-height: 1.35;
  }

  .tet-accreditations--footer-row {
    margin-top: 14px;
    padding-top: 12px;
  }

  .tet-accreditation-label {
    margin-bottom: 0;
    font-size: 0.65rem;
  }

  .tet-accreditations--footer-row .tet-accreditation-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }

  .tet-accreditations--footer-row .tet-accreditation-card:nth-child(3) {
    grid-column: 1 / -1;
  }

  .tet-accreditation-card {
    min-height: 46px;
    gap: 8px;
    padding: 6px 8px;
  }

  .tet-accreditation-card svg {
    width: 16px;
    height: 16px;
  }

  .tet-accreditation-text strong {
    font-size: 0.75rem;
  }

  .tet-accreditation-text span {
    font-size: 0.58rem;
  }

  .tet-footer-col--hq {
    gap: 0;
    padding-top: 14px;
  }

  .tet-hq-contact-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 9px 14px;
  }

  .tet-hq-item {
    gap: 8px;
    font-size: 0.78rem;
    line-height: 1.35;
  }

  .tet-hq-item svg {
    width: 15px;
    height: 15px;
    margin-top: 1px;
  }

  .tet-hq-contact-cta {
    grid-column: 1 / -1;
    margin-top: 2px;
    font-size: 0.73rem;
  }

  .tet-agency-credit-slot {
    margin-top: 14px;
    padding-top: 12px;
  }

  .footer-agency-credit {
    min-height: 52px;
    flex-wrap: nowrap;
    gap: 8px;
    padding: 6px 8px;
  }

  .footer-agency-label {
    font-size: 0.46rem;
  }

  .login-agency-logo {
    gap: 0.42rem;
  }

  .login-agency-logo svg {
    width: 1.4rem;
    height: 1.7rem;
  }

  .login-agency-logo strong {
    font-size: 0.8rem;
  }

  .login-agency-logo small {
    font-size: 0.42rem;
  }

  .tet-subfooter {
    padding: 10px 0 12px;
  }

  .tet-subfooter-inner {
    gap: 8px;
  }

  .tet-copyright-info {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 3px 10px;
  }

  .tet-copyright-main {
    width: 100%;
    font-size: 0.75rem;
  }

  .tet-copyright-license {
    font-size: 0.66rem;
  }

  .tet-copyright-info > span + span {
    margin-left: 0;
    padding-left: 0;
    border-left: 0;
  }

  .tet-subfooter-links {
    gap: 10px;
  }

  .tet-subfooter-links a {
    font-size: 0.72rem;
  }
}

/* Mobile footer — compact, accessible information architecture */
.tet-mobile-footer-nav {
  display: none;
}

@media (max-width: 600px) {
  .tet-footer-container {
    padding-right: 16px;
    padding-left: 16px;
  }

  .tet-footer-main {
    padding: 20px 0 14px;
  }

  .tet-footer-grid {
    gap: 13px;
  }

  .tet-brand-block {
    display: grid;
    grid-template-columns: minmax(92px, 1fr) auto;
    align-items: center;
    gap: 0 12px;
  }

  .tet-footer-brand-link {
    grid-column: 1;
    grid-row: 1;
    margin-bottom: 0;
  }

  .tet-footer-brand-logo {
    width: 96px;
    max-height: 60px;
  }

  .tet-social-hub {
    grid-column: 2;
    grid-row: 1;
    gap: 10px;
  }

  .tet-social-icon {
    width: 30px;
    height: 30px;
  }

  .tet-social-icon svg {
    width: 14px;
    height: 14px;
  }

  .tet-brand-quote,
  .tet-brand-badge,
  .tet-brand-desc {
    grid-column: 1 / -1;
  }

  .tet-brand-quote {
    grid-row: 2;
    margin: 10px 0 6px;
    padding-bottom: 7px;
    font-size: 0.86rem;
    line-height: 1.25;
  }

  .tet-brand-quote span {
    display: inline;
    margin-left: 0.28em;
  }

  .tet-brand-badge {
    grid-row: 3;
    margin-bottom: 5px;
    font-size: 0.64rem;
    letter-spacing: 0.13em;
  }

  .tet-brand-desc {
    grid-row: 4;
    margin-bottom: 0;
    font-size: 0.73rem;
    line-height: 1.4;
  }

  .tet-brand-desc span {
    display: inline;
  }

  .tet-brand-desc span + span::before {
    content: " ";
  }

  .tet-footer-menu-grid {
    display: none;
  }

  .tet-mobile-footer-nav {
    display: grid;
    border-top: 1px solid rgba(255, 255, 255, 0.11);
  }

  .tet-mobile-nav-group {
    border-bottom: 1px solid rgba(255, 255, 255, 0.11);
  }

  .tet-mobile-nav-group summary {
    min-height: 43px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    color: #f8fafc;
    cursor: pointer;
    list-style: none;
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.075em;
    text-transform: uppercase;
  }

  .tet-mobile-nav-group summary::-webkit-details-marker {
    display: none;
  }

  .tet-mobile-nav-group summary::after {
    content: "";
    position: absolute;
  }

  .tet-mobile-nav-group summary svg {
    width: 15px;
    height: 15px;
    flex: 0 0 auto;
    color: #dda02d;
    transition: transform 180ms ease;
  }

  .tet-mobile-nav-group[open] summary svg {
    transform: rotate(180deg);
  }

  .tet-mobile-nav-links {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px 16px;
    margin: 0;
    padding: 0 0 13px;
    list-style: none;
  }

  .tet-mobile-nav-links a {
    color: rgba(241, 245, 249, 0.84);
    font-size: 0.76rem;
    line-height: 1.35;
    text-decoration: none;
  }

  .tet-mobile-nav-links a:focus-visible {
    outline: 2px solid #dda02d;
    outline-offset: 3px;
  }

  .tet-accreditations--footer-row {
    margin-top: 0;
    padding-top: 0;
    border-top: 0;
  }

  .tet-accreditation-label {
    margin-bottom: 7px;
    font-size: 0.58rem;
    letter-spacing: 0.12em;
  }

  .tet-accreditations--footer-row .tet-accreditation-cards {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 6px;
  }

  .tet-accreditations--footer-row .tet-accreditation-card:nth-child(3) {
    grid-column: auto;
  }

  .tet-accreditation-card {
    min-height: 43px;
    justify-content: center;
    gap: 5px;
    padding: 6px 4px;
  }

  .tet-accreditation-card svg {
    width: 14px;
    height: 14px;
  }

  .tet-accreditation-text strong {
    font-size: 0.64rem;
    line-height: 1.15;
  }

  .tet-accreditation-text span {
    display: none;
  }

  .tet-footer-col--hq {
    padding-top: 11px;
  }

  .tet-footer-col--hq .tet-col-heading {
    margin-bottom: 9px;
    padding-bottom: 5px;
  }

  .tet-hq-contact-list {
    gap: 8px 12px;
  }

  .tet-hq-item {
    font-size: 0.73rem;
  }

  .tet-hq-contact-cta {
    min-height: 36px;
    margin-top: 3px;
    justify-content: center;
    border: 1px solid rgba(221, 160, 45, 0.58);
    border-radius: 6px;
    background: rgba(221, 160, 45, 0.06);
  }

  .tet-agency-credit-slot {
    margin-top: 10px;
    padding-top: 10px;
  }

  .footer-agency-credit {
    min-height: 44px;
    padding: 5px 8px;
  }

  .footer-agency-label {
    font-size: 0.43rem;
  }

  .login-agency-logo svg {
    width: 1.2rem;
    height: 1.45rem;
  }

  .login-agency-logo strong {
    font-size: 0.73rem;
  }

  .login-agency-logo small {
    font-size: 0.39rem;
  }

  .tet-subfooter {
    padding: 9px 0 10px;
  }

  .tet-subfooter-inner {
    gap: 7px;
  }

  .tet-copyright-info {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 3px 10px;
  }

  .tet-copyright-main {
    grid-column: 1 / -1;
    width: auto;
    font-size: 0.68rem;
  }

  .tet-copyright-license {
    font-size: 0.57rem;
    line-height: 1.35;
  }

  .tet-subfooter-links {
    justify-content: flex-start;
    gap: 9px;
  }

  .tet-subfooter-links a {
    font-size: 0.65rem;
  }
}



/* Mobile footer — measured breathing room */
@media (max-width: 600px) {
  .tet-footer-main {
    padding: 25px 0 19px;
  }

  .tet-footer-grid {
    gap: 17px;
  }

  .tet-brand-quote {
    margin: 12px 0 7px;
    padding-bottom: 8px;
  }

  .tet-brand-badge {
    margin-bottom: 7px;
  }

  .tet-brand-desc {
    line-height: 1.48;
  }

  .tet-footer-nav-area {
    margin-top: 2px;
  }

  .tet-mobile-nav-group summary {
    min-height: 46px;
  }

  .tet-mobile-nav-links {
    gap: 10px 16px;
    padding-bottom: 15px;
  }

  .tet-accreditations--footer-row {
    margin-top: 4px;
    padding-top: 3px;
  }

  .tet-accreditation-label {
    margin-bottom: 9px;
  }

  .tet-accreditations--footer-row .tet-accreditation-cards {
    gap: 7px;
  }

  .tet-accreditation-card {
    min-height: 46px;
  }

  .tet-footer-col--hq {
    padding-top: 16px;
  }

  .tet-footer-col--hq .tet-col-heading {
    margin-bottom: 11px;
  }

  .tet-hq-contact-list {
    gap: 10px 14px;
  }

  .tet-hq-contact-cta {
    min-height: 44px;
    margin-top: 5px;
  }

  .tet-agency-credit-slot {
    margin-top: 14px;
    padding-top: 13px;
  }

  .footer-agency-credit {
    min-height: 46px;
  }

  .tet-subfooter {
    padding: 12px 0 14px;
  }

  .tet-subfooter-inner {
    gap: 9px;
  }
}



`;

export default function Footer() {
  return (
    <footer className="tet-luxury-footer" aria-label="Site Footer">
      <style>{luxuryFooterStyles}</style>

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
                  Rhodes · Kos · Est. 1989
                </div>

                <p className="tet-brand-desc">
                  <span>Destination management and ground handling in Rhodes &amp; Kos.</span>
                  <span>Supporting travel partners since 1989.</span>
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

            <div className="tet-footer-nav-area">
              <div className="tet-footer-menu-grid">
                {/* COLUMN 2: Destinations */}
                <div className="tet-footer-col">
                  <h3 className="tet-col-heading">Destinations</h3>
                  <ul className="tet-links-list">
                    <li><Link to="/rhodes">Rhodes</Link></li>
                    <li><Link to="/kos">Kos</Link></li>
                    <li><Link to="/destinations">All Destinations</Link></li>
                    <li><Link to="/excursions">Excursions</Link></li>
                  </ul>
                </div>

                {/* COLUMN 3: Services & MICE */}
                <div className="tet-footer-col">
                  <h3 className="tet-col-heading">Services &amp; MICE</h3>
                  <ul className="tet-links-list">
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/mice-groups">MICE &amp; Groups</Link></li>
                  </ul>
                </div>

                {/* COLUMN 4: Menu */}
                <div className="tet-footer-col">
                  <h3 className="tet-col-heading">Menu</h3>
                  <ul className="tet-links-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                  </ul>
                </div>
              </div>


              <nav className="tet-mobile-footer-nav" aria-label="Footer navigation">
                <details className="tet-mobile-nav-group">
                  <summary>
                    <span>Destinations</span>
                    <ChevronDown aria-hidden="true" />
                  </summary>
                  <ul className="tet-mobile-nav-links">
                    <li><Link to="/rhodes">Rhodes</Link></li>
                    <li><Link to="/kos">Kos</Link></li>
                    <li><Link to="/destinations">All Destinations</Link></li>
                    <li><Link to="/excursions">Excursions</Link></li>
                  </ul>
                </details>

                <details className="tet-mobile-nav-group">
                  <summary>
                    <span>Services &amp; MICE</span>
                    <ChevronDown aria-hidden="true" />
                  </summary>
                  <ul className="tet-mobile-nav-links">
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/mice-groups">MICE &amp; Groups</Link></li>
                  </ul>
                </details>

                <details className="tet-mobile-nav-group">
                  <summary>
                    <span>Menu</span>
                    <ChevronDown aria-hidden="true" />
                  </summary>
                  <ul className="tet-mobile-nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                  </ul>
                </details>
              </nav>

              {/* Accreditations Trust Badges */}
              <div className="tet-accreditations tet-accreditations--footer-row">
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

            {/* COLUMN 5: Contact Us */}
            <div className="tet-footer-col tet-footer-col--hq">
              <div>
                <h3 className="tet-col-heading">Contact Us</h3>
                <div className="tet-hq-contact-list">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=5th+Km+Rhodes-Lindos+Avenue%2C+Rhodes+851+00%2C+Greece"
                    target="_blank"
                    rel="noreferrer"
                    className="tet-hq-item"
                    aria-label="Address: 5th Km Rhodes-Lindos Avenue, Rhodes 851 00, Greece"
                  >
                    <MapPin aria-hidden="true" />
                    <span>Address</span>
                  </a>

                  <a href="tel:+302241045506" className="tet-hq-item" aria-label="Telephone: +30 22410 45506">
                    <Phone aria-hidden="true" />
                    <span>Telephone</span>
                  </a>

                  <a href="mailto:info@topeurotravel.gr" className="tet-hq-item" aria-label="Email: info@topeurotravel.gr">
                    <Mail aria-hidden="true" />
                    <span>Email</span>
                  </a>

                  <div className="tet-hq-item">
                    <Clock aria-hidden="true" />
                    <span>24/7 Operations Support</span>
                  </div>

                  <Link to="/contact" className="tet-hq-contact-cta">
                    <span>Contact Us</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              <div className="tet-agency-credit-slot">
                <a
                  className="footer-agency-credit"
                  href="https://www.log-in.gr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Design and development by Log-In Digital Agency — opens in a new tab"
                >
                  <span className="footer-agency-label">
                    DESIGN &amp; DEVELOPMENT BY
                  </span>

                  <span
                    className="login-agency-logo"
                    role="img"
                    aria-label="Log-In Digital Agency"
                  >
                    <svg viewBox="0 0 40 48" aria-hidden="true" focusable="false">
                      <path
                        className="login-agency-logo__blue"
                        d="M13 2 1 24l12 22 7-8-8-14 8-14-7-8Z"
                      />
                      <path
                        className="login-agency-logo__orange"
                        d="m26 2 13 22-13 22-7-8 9-14-9-14 7-8Z"
                      />
                    </svg>

                    <span className="login-agency-logo__copy">
                      <strong>Log-In</strong>
                      <small>DIGITAL AGENCY</small>
                    </span>
                  </span>
                </a>
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
                &copy; 2026 Top Euro Travel. All Rights Reserved.
              </span>
              <span className="tet-copyright-license">
                GNTO Licence: 1476E60000156801
              </span>
              <span className="tet-copyright-license">
                Tax Number: EL800892257
              </span>
            </div>



            <div className="tet-subfooter-links">
              <Link to="/privacy">Privacy Policy</Link>
              <span className="tet-subfooter-divider" aria-hidden="true" />
              <Link to="/terms">Terms &amp; Conditions</Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
