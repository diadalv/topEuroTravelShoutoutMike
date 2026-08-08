// TOP EURO TRAVEL — APPROVED DESIGN 1 — EXACT FULL HOMEPAGE REPLACE
// One self-contained file: TSX + scoped homepage styles + header/footer overrides.
import { PageSeo, Photo, travelMedia } from '@/components/travel/Shared';
import {
  ArrowDown,
  ArrowRight,
  BedDouble,
  Building2,
  Bus,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Globe2,
  Handshake,
  Headphones,
  Landmark,
  Leaf,
  MapPinned,
  Play,
  ShoppingBag,
  Sparkles,
  Utensils,
  Users,
  Waves,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: BedDouble,
    title: 'Hotel Contracting',
    description: 'Selected stays and competitive agreements.',
  },
  {
    icon: CalendarCheck,
    title: 'Booking Management',
    description: 'Reservations managed end to end.',
  },
  {
    icon: Bus,
    title: 'Transfers & Transportation',
    description: 'Reliable airport and island-wide movement.',
  },
  {
    icon: Headphones,
    title: 'Resort Assistance',
    description: 'Responsive local support throughout every stay.',
  },
  {
    icon: MapPinned,
    title: 'Tours & Excursions',
    description: 'Authentic experiences with local knowledge.',
  },
  {
    icon: Landmark,
    title: 'MICE & Group Travel',
    description: 'Meetings, incentives and group programmes.',
  },
  {
    icon: Sparkles,
    title: 'Weddings & Special Events',
    description: 'Distinctive occasions delivered with precision.',
  },
  {
    icon: Globe2,
    title: 'XML API & Agent Portal',
    description: 'Connected technology for partner operations.',
  },
];

const experiences = [
  { icon: Landmark, title: 'Culture & Heritage', image: 'old-town.jpg' },
  { icon: Utensils, title: 'Gastronomy', image: 'food.jpg' },
  { icon: Waves, title: 'Yachting & Sailing', image: 'sailing.jpg' },
  { icon: Leaf, title: 'Nature & Adventure', image: 'prasonisi.jpg' },
  { icon: Sparkles, title: 'Local Island Life', image: 'local-life.jpg' },
  { icon: ShoppingBag, title: 'Island Discovery', image: 'home-welcome-v2.jpg' },
] as const;

const HOME_STYLES = String.raw`
:root {
  --tet-ink: #102b46;
  --tet-ink-deep: #071f37;
  --tet-blue: #0a3b64;
  --tet-gold: #dca552;
  --tet-gold-deep: #b87820;
  --tet-paper: #fffdf9;
  --tet-paper-soft: #faf7f1;
  --tet-line: rgba(16, 43, 70, 0.13);
  --tet-shadow: 0 20px 52px rgba(8, 35, 60, 0.14);
  --tet-shell: min(84vw, 1640px);
  --tet-bridge: min(78vw, 1510px);
}

.tet-approved-home,
.tet-approved-home * {
  box-sizing: border-box;
}

.tet-approved-home {
  position: relative;
  overflow: clip;
  background:
    radial-gradient(circle at 3% 47%, rgba(205, 220, 230, 0.26), transparent 21%),
    radial-gradient(circle at 98% 55%, rgba(230, 219, 199, 0.24), transparent 23%),
    var(--tet-paper);
  color: var(--tet-ink);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.6;
}

.tet-approved-home h1,
.tet-approved-home h2,
.tet-approved-home h3,
.tet-approved-home p {
  margin-top: 0;
}

.tet-approved-home h1,
.tet-approved-home h2 {
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 500;
  letter-spacing: -0.038em;
}

.tet-approved-home a {
  color: inherit;
  text-decoration: none;
}

.tet-shell {
  width: var(--tet-shell);
  margin-inline: auto;
}

/* Existing global header: same approved proportions, real project logo/menu. */
.site-header {
  height: clamp(72px, 4.5vw, 86px) !important;
  position: absolute !important;
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
}

.site-header.is-scrolled {
  height: 70px !important;
  position: fixed !important;
  background: rgba(5, 31, 55, 0.9) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.13) !important;
  backdrop-filter: blur(18px) saturate(1.08) !important;
  -webkit-backdrop-filter: blur(18px) saturate(1.08) !important;
  box-shadow: 0 12px 34px rgba(3, 20, 36, 0.2) !important;
}

.site-header__inner {
  width: var(--tet-shell) !important;
  max-width: none !important;
  margin-inline: auto !important;
  padding-inline: 0 !important;
}

.brand-logo {
  width: clamp(104px, 6.6vw, 126px) !important;
  height: clamp(54px, 3.7vw, 70px) !important;
  object-fit: contain !important;
}

.site-header__nav-wrap {
  gap: clamp(26px, 3vw, 54px) !important;
}

.main-nav {
  gap: clamp(20px, 2vw, 36px) !important;
}

.main-nav__link,
.site-header.is-scrolled .main-nav__link {
  padding-block: 30px 26px !important;
  color: rgba(255, 255, 255, 0.94) !important;
  font-family: Arial, Helvetica, sans-serif !important;
  font-size: clamp(10px, 0.68vw, 12px) !important;
  font-weight: 600 !important;
  letter-spacing: 0.015em !important;
  text-shadow: 0 1px 8px rgba(0, 23, 42, 0.4) !important;
}

.site-header.is-scrolled .main-nav__link {
  padding-block: 24px 20px !important;
}

.main-nav__link:hover,
.main-nav__link:focus-visible,
.main-nav__link.is-active {
  color: #f1c678 !important;
}

.main-nav__link.is-active::after,
.site-header.is-scrolled .main-nav__link.is-active::after {
  height: 1px !important;
  right: 5px !important;
  bottom: 18px !important;
  left: 5px !important;
  background: #efc16e !important;
  box-shadow: none !important;
}

.site-header.is-scrolled .main-nav__link.is-active::after {
  bottom: 13px !important;
}

.header-contact-btn {
  min-height: 42px !important;
  padding: 11px 20px !important;
  border: 0 !important;
  border-radius: 999px !important;
  background: linear-gradient(135deg, #f2ca82 0%, #dda34e 100%) !important;
  color: #17314a !important;
  box-shadow: 0 10px 25px rgba(210, 150, 62, 0.22) !important;
  font-size: 11px !important;
  font-weight: 700 !important;
  letter-spacing: 0.02em !important;
  transition: transform 220ms ease, box-shadow 220ms ease, filter 220ms ease !important;
}

.header-contact-btn:hover,
.header-contact-btn:focus-visible {
  filter: brightness(1.05) !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 14px 30px rgba(210, 150, 62, 0.32) !important;
}

.tet-eyebrow {
  margin-bottom: 10px !important;
  color: var(--tet-gold-deep);
  font-size: clamp(9px, 0.58vw, 11px);
  font-weight: 700;
  letter-spacing: 0.12em;
  line-height: 1.15;
  text-transform: uppercase;
}

.tet-button {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 11px 21px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 700;
  transition: transform 220ms ease, background 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
}

.tet-button svg,
.tet-text-link svg {
  width: 16px;
  height: 16px;
  transition: transform 220ms ease;
}

.tet-button:hover,
.tet-button:focus-visible {
  transform: translateY(-2px);
}

.tet-button:hover svg,
.tet-button:focus-visible svg,
.tet-text-link:hover svg,
.tet-text-link:focus-visible svg {
  transform: translateX(4px);
}

.tet-button--gold {
  background: linear-gradient(135deg, #f1c678 0%, #dda34e 100%);
  color: #17314a;
  box-shadow: 0 12px 28px rgba(210, 150, 62, 0.24);
}

.tet-button--outline {
  border-color: rgba(255, 255, 255, 0.68);
  background: rgba(4, 29, 52, 0.16);
  color: #fff;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
}

.tet-text-link {
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 3px;
  border-bottom: 1px solid rgba(16, 43, 70, 0.32);
  color: var(--tet-ink);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.035em;
  text-transform: uppercase;
}

/* HERO — exact approved visual rhythm; real Wix video remains. */
.tet-hero {
  height: clamp(440px, 43vw, 760px);
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--tet-ink-deep);
  color: #fff;
}

.tet-hero__video {
  position: absolute;
  inset: -2% 0 0;
  z-index: -3;
  width: 100%;
  height: 104%;
  object-fit: cover;
  object-position: center;
  transform: translate3d(0, var(--tet-parallax, 0px), 0) scale(1.025);
  will-change: transform;
}

.tet-hero__overlay {
  position: absolute;
  inset: 0;
  z-index: -2;
  background:
    linear-gradient(90deg, rgba(4, 27, 50, 0.84) 0%, rgba(4, 31, 56, 0.65) 40%, rgba(4, 31, 56, 0.15) 72%, rgba(4, 31, 56, 0.04) 100%),
    linear-gradient(180deg, rgba(2, 18, 34, 0.3) 0%, transparent 52%, rgba(2, 20, 38, 0.25) 100%);
}

.tet-hero__content {
  height: 100%;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  padding-top: clamp(62px, 5vw, 92px);
}

.tet-hero__copy {
  max-width: min(58vw, 980px);
  margin-left: clamp(20px, 3.8vw, 74px);
}

.tet-hero .tet-eyebrow {
  margin-bottom: 15px !important;
  color: rgba(255, 255, 255, 0.96);
}

.tet-hero h1 {
  max-width: 980px;
  margin-bottom: 20px;
  color: #fff;
  font-size: clamp(56px, 5.7vw, 96px);
  line-height: 0.91;
  text-wrap: balance;
}

.tet-hero h1 span {
  display: block;
}

.tet-hero__lead {
  max-width: 600px;
  margin-bottom: 25px !important;
  color: rgba(255, 255, 255, 0.94);
  font-size: clamp(14px, 0.96vw, 17px);
  line-height: 1.55;
}

.tet-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.tet-hero__scroll {
  position: absolute;
  bottom: clamp(48px, 5vw, 82px);
  left: clamp(22px, 4.2vw, 78px);
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}

.tet-hero__scroll::before {
  width: 1px;
  height: 62px;
  background: rgba(255, 255, 255, 0.74);
  content: '';
}

.tet-hero__scroll svg {
  width: 13px;
  animation: tet-scroll-bob 1.8s ease-in-out infinite;
}

.tet-hero__discover {
  position: absolute;
  right: 8vw;
  bottom: clamp(46px, 4.5vw, 72px);
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1.25;
  text-transform: uppercase;
}

.tet-play-circle {
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(5, 31, 55, 0.18);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  transition: background 220ms ease, transform 220ms ease;
}

.tet-play-circle svg {
  width: 16px;
  fill: currentColor;
}

.tet-hero__discover:hover .tet-play-circle,
.tet-hero__discover:focus-visible .tet-play-circle,
.tet-intro__play:hover .tet-play-circle,
.tet-intro__play:focus-visible .tet-play-circle {
  background: rgba(218, 162, 78, 0.92);
  transform: scale(1.05);
}

@keyframes tet-scroll-bob {
  0%, 100% { transform: translateY(-2px); }
  50% { transform: translateY(5px); }
}

/* Floating bridge — deliberately narrower than the page shell. */
.tet-bridge {
  width: var(--tet-bridge);
  min-height: clamp(76px, 5.2vw, 94px);
  position: relative;
  z-index: 8;
  display: grid;
  grid-template-columns: 0.8fr 1.15fr 1.15fr 1.15fr 0.9fr;
  margin: clamp(-47px, -2.6vw, -38px) auto 0;
  border: 1px solid rgba(255, 255, 255, 0.76);
  border-radius: 14px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: var(--tet-shadow);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.tet-bridge__item {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 12px clamp(14px, 1.5vw, 25px);
  border-left: 1px solid var(--tet-line);
}

.tet-bridge__item:first-child {
  border-left: 0;
}

.tet-bridge__year {
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  gap: 0;
}

.tet-bridge__year small,
.tet-bridge__copy small {
  display: block;
  color: var(--tet-gold-deep);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.tet-bridge__year strong {
  color: var(--tet-gold-deep);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(29px, 2.1vw, 38px);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 0.95;
}

.tet-bridge__thumb {
  width: clamp(36px, 2.6vw, 46px);
  height: clamp(36px, 2.6vw, 46px);
  flex: 0 0 auto;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 7px 18px rgba(7, 31, 55, 0.15);
}

.tet-bridge__thumb .travel-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tet-bridge__copy {
  min-width: 0;
  display: grid;
  gap: 1px;
}

.tet-bridge__copy strong {
  color: var(--tet-ink-deep);
  font-size: clamp(10px, 0.68vw, 12px);
  font-weight: 700;
  line-height: 1.25;
}

.tet-bridge__copy span {
  color: #667481;
  font-size: clamp(8px, 0.54vw, 10px);
  line-height: 1.25;
}

.tet-bridge__arrow {
  width: 16px;
  margin-left: auto;
  color: var(--tet-gold-deep);
  transition: transform 220ms ease;
}

.tet-bridge__item:hover .tet-bridge__arrow,
.tet-bridge__item:focus-visible .tet-bridge__arrow {
  transform: translateX(4px);
}

.tet-bridge__metric > svg {
  width: 24px;
  color: var(--tet-gold-deep);
  stroke-width: 1.5;
}

.tet-bridge__metric strong {
  display: block;
  color: var(--tet-ink-deep);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(22px, 1.65vw, 30px);
  font-weight: 500;
  line-height: 0.95;
}

.tet-bridge__metric span {
  color: #677481;
  font-size: 8px;
}

.tet-main {
  position: relative;
  padding-top: clamp(28px, 2.3vw, 44px);
}

/* Intro — copy / facts / large visual, same approved 3-column balance. */
.tet-intro {
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(145px, 0.42fr) minmax(420px, 1.62fr);
  align-items: center;
  gap: clamp(28px, 3.1vw, 52px);
  padding-top: clamp(14px, 1.5vw, 24px);
  padding-bottom: clamp(28px, 2.5vw, 44px);
}

.tet-intro__copy h2 {
  max-width: 520px;
  margin-bottom: 13px;
  color: var(--tet-ink-deep);
  font-size: clamp(36px, 3.1vw, 54px);
  line-height: 0.97;
}

.tet-intro__copy > p:not(.tet-eyebrow) {
  max-width: 560px;
  margin-bottom: 8px;
  color: #465b6f;
  font-size: clamp(10.5px, 0.7vw, 12.5px);
  line-height: 1.58;
}

.tet-intro__signature {
  display: block;
  margin: 13px 0 7px;
  color: var(--tet-gold-deep);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(21px, 1.6vw, 28px);
  font-style: italic;
}

.tet-intro__facts {
  display: grid;
  align-content: center;
}

.tet-intro__fact {
  display: grid;
  grid-template-columns: 23px minmax(0, 1fr);
  gap: 9px;
  padding: 10px 0;
  border-bottom: 1px solid var(--tet-line);
}

.tet-intro__fact:last-child {
  border-bottom: 0;
}

.tet-intro__fact svg {
  width: 20px;
  color: var(--tet-gold-deep);
  stroke-width: 1.55;
}

.tet-intro__fact strong {
  display: block;
  color: var(--tet-ink-deep);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(20px, 1.5vw, 27px);
  font-weight: 500;
  line-height: 0.92;
}

.tet-intro__fact span {
  display: block;
  margin-top: 3px;
  color: #667481;
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.035em;
  line-height: 1.25;
  text-transform: uppercase;
}

.tet-intro__visual {
  aspect-ratio: 2.05 / 1;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background: #d9e3e9;
  box-shadow: 0 15px 36px rgba(8, 38, 64, 0.12);
}

.tet-intro__visual .travel-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 900ms cubic-bezier(.2,.7,.2,1), filter 600ms ease;
}

.tet-intro__visual::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(5, 30, 55, 0.01), rgba(4, 30, 54, 0.1));
  content: '';
}

.tet-intro__visual:hover .travel-photo {
  filter: saturate(1.06);
  transform: scale(1.035);
}

.tet-intro__play {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-size: 9px;
  font-weight: 700;
  line-height: 1.15;
  transform: translate(-50%, -50%);
}

.tet-intro__play .tet-play-circle {
  width: 48px;
  height: 48px;
}

.tet-section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 14px;
}

.tet-section-heading h2 {
  margin-bottom: 0;
  color: var(--tet-ink-deep);
  font-size: clamp(30px, 2.45vw, 44px);
  line-height: 1;
}

/* Destinations — two compact cinematic panels. */
.tet-destinations {
  padding-bottom: clamp(24px, 2.1vw, 36px);
}

.tet-destinations__controls {
  display: flex;
  gap: 7px;
}

.tet-round-button {
  width: 36px;
  height: 36px;
  border: 1px solid rgba(184, 120, 32, 0.34);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.7);
  color: var(--tet-gold-deep);
  cursor: pointer;
  transition: transform 200ms ease, background 200ms ease, color 200ms ease;
}

.tet-round-button svg {
  width: 16px;
}

.tet-round-button:hover,
.tet-round-button:focus-visible {
  background: var(--tet-ink-deep);
  color: #fff;
  transform: translateY(-2px);
}

.tet-destinations__rail {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.tet-destination {
  height: clamp(160px, 12vw, 230px);
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  color: #fff;
  box-shadow: 0 13px 30px rgba(7, 31, 55, 0.12);
}

.tet-destination .travel-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 750ms cubic-bezier(.2,.7,.2,1), filter 450ms ease;
}

.tet-destination::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(4, 29, 52, 0.82), rgba(4, 31, 57, 0.3) 60%, transparent);
  content: '';
}

.tet-destination__copy {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  padding: clamp(18px, 1.5vw, 26px);
}

.tet-destination__copy h3 {
  margin-bottom: 4px;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(14px, 0.95vw, 17px);
  font-weight: 700;
  letter-spacing: 0.01em;
}

.tet-destination__copy p {
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.93);
  font-size: clamp(10px, 0.72vw, 12px);
  line-height: 1.35;
}

.tet-destination__link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding-bottom: 2px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  color: #fff;
  font-size: 9px;
  font-weight: 700;
}

.tet-destination:hover .travel-photo,
.tet-destination:focus-within .travel-photo {
  filter: saturate(1.06);
  transform: scale(1.04);
}

/* Services — one connected line; no cards, no large boxes. */
.tet-services {
  padding-bottom: clamp(22px, 1.9vw, 32px);
}

.tet-services > h2 {
  margin-bottom: clamp(19px, 1.55vw, 26px);
  color: var(--tet-ink-deep);
  font-size: clamp(29px, 2.3vw, 41px);
  line-height: 1;
}

.tet-services__grid {
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  border-top: 1px solid rgba(184, 120, 32, 0.34);
}

.tet-service {
  min-width: 0;
  position: relative;
  display: grid;
  justify-items: center;
  align-content: start;
  padding: 14px 8px 4px;
  text-align: center;
}

.tet-service + .tet-service {
  border-left: 1px solid var(--tet-line);
}

.tet-service::before {
  width: 7px;
  height: 7px;
  position: absolute;
  top: -4px;
  left: 50%;
  border: 1px solid var(--tet-gold-deep);
  border-radius: 50%;
  background: var(--tet-paper);
  content: '';
  transform: translateX(-50%);
  transition: background 220ms ease, box-shadow 220ms ease;
}

.tet-service__icon {
  height: 32px;
  display: grid;
  place-items: center;
  margin-bottom: 6px;
  color: var(--tet-gold-deep);
  transition: color 220ms ease, transform 220ms ease;
}

.tet-service__icon svg {
  width: clamp(22px, 1.65vw, 30px);
  height: clamp(22px, 1.65vw, 30px);
  stroke-width: 1.45;
}

.tet-service h3 {
  min-height: 30px;
  display: grid;
  place-items: center;
  margin-bottom: 4px;
  color: var(--tet-ink-deep);
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(8.5px, 0.58vw, 10.5px);
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.22;
}

.tet-service p {
  max-width: 145px;
  margin-bottom: 0;
  color: #6b7884;
  font-size: clamp(7.2px, 0.48vw, 9px);
  line-height: 1.35;
}

.tet-service:hover::before,
.tet-service:focus-within::before {
  background: var(--tet-gold-deep);
  box-shadow: 0 0 0 5px rgba(184, 120, 32, 0.12);
}

.tet-service:hover .tet-service__icon,
.tet-service:focus-within .tet-service__icon {
  color: var(--tet-ink-deep);
  transform: translateY(-3px);
}

/* MICE — one compact cinematic strip. */
.tet-mice {
  height: clamp(170px, 13vw, 250px);
  display: grid;
  grid-template-columns: minmax(0, 1.18fr) minmax(320px, 0.8fr) minmax(220px, 0.55fr);
  margin-bottom: clamp(20px, 1.7vw, 28px);
  border-radius: 8px;
  overflow: hidden;
  background: var(--tet-ink-deep);
  color: #fff;
  box-shadow: 0 16px 38px rgba(7, 31, 55, 0.15);
}

.tet-mice__media {
  position: relative;
  overflow: hidden;
}

.tet-mice__media .travel-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 800ms cubic-bezier(.2,.7,.2,1), filter 500ms ease;
}

.tet-mice__media--left::after,
.tet-mice__media--right::after {
  position: absolute;
  inset: 0;
  content: '';
}

.tet-mice__media--left::after {
  background: linear-gradient(90deg, transparent 62%, rgba(7, 31, 55, 0.7));
}

.tet-mice__media--right::after {
  background: linear-gradient(90deg, rgba(7, 31, 55, 0.68), rgba(7, 31, 55, 0.05));
}

.tet-mice__copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(18px, 1.6vw, 28px);
  background: var(--tet-ink-deep);
}

.tet-mice__copy .tet-eyebrow {
  margin-bottom: 7px !important;
  color: #dba54f;
}

.tet-mice__copy h2 {
  margin-bottom: 7px;
  color: #fff;
  font-size: clamp(25px, 2vw, 36px);
  line-height: 1;
}

.tet-mice__copy p:not(.tet-eyebrow) {
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(8.5px, 0.58vw, 10.5px);
  line-height: 1.5;
}

.tet-mice__copy .tet-button {
  width: fit-content;
  min-height: 34px;
  padding: 8px 13px;
  font-size: 8px;
}

.tet-mice:hover .travel-photo {
  filter: saturate(1.06);
  transform: scale(1.035);
}

/* Experiences — compact horizontal rail. */
.tet-experiences {
  padding-bottom: 10px;
}

.tet-experiences .tet-section-heading {
  margin-bottom: 11px;
}

.tet-experiences__rail {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 7px;
}

.tet-experience {
  height: clamp(110px, 8.7vw, 170px);
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  background: #d7e0e5;
  color: #fff;
}

.tet-experience .travel-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 700ms cubic-bezier(.2,.7,.2,1), filter 450ms ease;
}

.tet-experience::after {
  position: absolute;
  inset: 30% 0 0;
  background: linear-gradient(transparent, rgba(2, 23, 43, 0.88));
  content: '';
}

.tet-experience__icon {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 9px;
  left: 9px;
  z-index: 2;
  border: 1px solid rgba(255, 255, 255, 0.48);
  border-radius: 6px;
  display: grid;
  place-items: center;
  background: rgba(7, 31, 55, 0.16);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.tet-experience__icon svg {
  width: 13px;
}

.tet-experience strong {
  position: absolute;
  right: 10px;
  bottom: 9px;
  left: 10px;
  z-index: 2;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(13px, 1.05vw, 18px);
  font-weight: 500;
  line-height: 1;
  text-shadow: 0 2px 10px rgba(2, 18, 33, 0.48);
}

.tet-experience:hover .travel-photo,
.tet-experience:focus-within .travel-photo {
  filter: saturate(1.08);
  transform: scale(1.055);
}

/* Real, non-fictional credibility strip. */
.tet-partners {
  min-height: clamp(76px, 5.3vw, 96px);
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.72fr) minmax(210px, 0.58fr);
  border: 1px solid rgba(16, 43, 70, 0.09);
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  background: rgba(250, 247, 242, 0.95);
  box-shadow: 0 10px 26px rgba(7, 31, 55, 0.07);
}

.tet-partners__marks {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: clamp(14px, 1.5vw, 25px);
  padding: 14px 22px;
}

.tet-partners__marks span {
  color: #596772;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(12px, 0.92vw, 16px);
  line-height: 1;
}

.tet-partners__statement {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 13px 20px;
  border-left: 1px solid var(--tet-line);
}

.tet-partners__statement strong {
  color: var(--tet-gold-deep);
  font-size: 12px;
}

.tet-partners__statement p {
  margin: 3px 0 0;
  color: #526575;
  font-size: 8px;
  line-height: 1.4;
}

.tet-partners__images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  padding: 6px;
  border-left: 1px solid var(--tet-line);
}

.tet-partners__images > div {
  min-height: 62px;
  border-radius: 5px;
  overflow: hidden;
}

.tet-partners__images .travel-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* CTA visually joins the real project footer. */
.tet-footer-cta {
  background:
    linear-gradient(90deg, rgba(7, 38, 66, 0.98), rgba(11, 57, 93, 0.91)),
    url('https://static.wixstatic.com/media/5a118b_f3aada5a1ac547358ac6c8b35d60a2a7f000.jpg') center / cover;
  color: #fff;
}

.tet-footer-cta__inner {
  min-height: clamp(108px, 7.3vw, 140px);
  display: grid;
  grid-template-columns: minmax(270px, 0.85fr) minmax(0, 1.15fr) auto;
  align-items: center;
  gap: clamp(24px, 4vw, 68px);
  padding-block: 20px;
}

.tet-footer-cta h2 {
  margin-bottom: 0;
  color: #fff;
  font-size: clamp(28px, 2.2vw, 39px);
  line-height: 0.98;
}

.tet-footer-cta p {
  max-width: 700px;
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.76);
  font-size: clamp(9.5px, 0.68vw, 12px);
  line-height: 1.55;
}

/* Existing global footer: real content retained, compact approved styling. */
.site-footer {
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  border-radius: 0 !important;
  background: linear-gradient(90deg, #072640 0%, #0a3a61 100%) !important;
  color: #fff !important;
  box-shadow: none !important;
}

.site-footer__grid,
.site-footer__bottom {
  width: var(--tet-shell) !important;
  margin-inline: auto !important;
}

.site-footer__grid {
  padding: 24px 0 20px !important;
}

.footer-brand,
.footer-column {
  border-color: rgba(255, 255, 255, 0.13) !important;
  padding-inline: clamp(14px, 1.5vw, 25px) !important;
}

.footer-logo {
  width: 105px !important;
  height: 56px !important;
}

.site-footer h3 {
  color: #fff !important;
  font-size: 14px !important;
}

.site-footer p,
.site-footer a,
.site-footer span,
.site-footer li {
  color: rgba(255, 255, 255, 0.76) !important;
  font-size: 11px !important;
  line-height: 1.5 !important;
}

.site-footer a:hover,
.site-footer a:focus-visible {
  color: #f0c574 !important;
}

.site-footer__bottom {
  min-height: 38px !important;
  padding: 8px 0 !important;
  border-top-color: rgba(255, 255, 255, 0.13) !important;
  color: rgba(255, 255, 255, 0.64) !important;
  font-size: 9px !important;
}

/* Motion never hides content. It is applied with the Web Animations API only when visible. */
.tet-motion-ready {
  will-change: transform, opacity;
}

@media (max-width: 1180px) {
  .tet-intro {
    grid-template-columns: minmax(0, 1.05fr) minmax(135px, 0.4fr) minmax(360px, 1.45fr);
    gap: 27px;
  }

  .tet-services__grid {
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
  }

  .tet-services__grid::-webkit-scrollbar {
    display: none;
  }

  .tet-service {
    min-width: 150px;
    flex: 0 0 150px;
    scroll-snap-align: start;
  }

  .tet-mice {
    grid-template-columns: minmax(0, 1.2fr) minmax(330px, 0.8fr);
  }

  .tet-mice__media--right {
    display: none;
  }

  .tet-experiences__rail {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 940px) {
  .site-header__inner {
    width: calc(100% - 34px) !important;
  }

  .site-header__nav-wrap {
    top: 80px !important;
    border: 1px solid rgba(16, 43, 70, 0.1) !important;
    border-radius: 14px !important;
    background: rgba(255, 255, 255, 0.98) !important;
    box-shadow: 0 20px 46px rgba(7, 31, 55, 0.18) !important;
  }

  .site-header.is-scrolled .site-header__nav-wrap {
    top: 69px !important;
  }

  .main-nav__link,
  .site-header.is-scrolled .main-nav__link {
    padding-block: 11px !important;
    color: var(--tet-ink-deep) !important;
    text-shadow: none !important;
  }

  .header-contact-btn {
    width: 100% !important;
    margin-top: 10px !important;
  }

  .tet-hero__discover {
    display: none;
  }

  .tet-bridge {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .tet-bridge__item {
    border-top: 1px solid var(--tet-line);
  }

  .tet-bridge__item:nth-child(-n + 2) {
    border-top: 0;
  }

  .tet-bridge__item:nth-child(3),
  .tet-bridge__item:nth-child(5) {
    border-left: 0;
  }

  .tet-bridge__metric {
    grid-column: 1 / -1;
    justify-content: center;
  }

  .tet-intro {
    grid-template-columns: minmax(0, 1fr) minmax(155px, 0.42fr);
  }

  .tet-intro__visual {
    grid-column: 1 / -1;
    aspect-ratio: 2 / 0.9;
  }

  .tet-destinations__rail {
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
  }

  .tet-destinations__rail::-webkit-scrollbar {
    display: none;
  }

  .tet-destination {
    min-width: 76vw;
    flex: 0 0 76vw;
    scroll-snap-align: center;
  }

  .tet-mice {
    height: auto;
    grid-template-columns: 1fr;
  }

  .tet-mice__media--left {
    min-height: 270px;
  }

  .tet-mice__media--left::after {
    background: linear-gradient(0deg, rgba(7, 31, 55, 0.86), transparent 65%);
  }

  .tet-mice__copy {
    margin-top: -70px;
    padding-top: 85px;
  }

  .tet-partners {
    grid-template-columns: 1fr 1fr;
  }

  .tet-partners__images {
    grid-column: 1 / -1;
    min-height: 100px;
    border-top: 1px solid var(--tet-line);
    border-left: 0;
  }

  .tet-footer-cta__inner {
    grid-template-columns: 1fr auto;
  }

  .tet-footer-cta p {
    grid-column: 1 / -1;
  }
}

@media (max-width: 700px) {
  :root {
    --tet-shell: calc(100% - 32px);
    --tet-bridge: calc(100% - 32px);
  }

  .site-header {
    height: 70px !important;
  }

  .site-header__inner {
    width: calc(100% - 24px) !important;
  }

  .site-header__nav-wrap {
    top: 69px !important;
  }

  .brand-logo {
    width: 98px !important;
    height: 54px !important;
  }

  .tet-hero {
    height: max(650px, 88svh);
    align-items: flex-end;
  }

  .tet-hero__video {
    object-position: 62% center;
  }

  .tet-hero__overlay {
    background:
      linear-gradient(0deg, rgba(4, 27, 50, 0.95) 0%, rgba(4, 31, 56, 0.68) 58%, rgba(4, 31, 56, 0.2) 100%),
      linear-gradient(90deg, rgba(4, 27, 50, 0.38), transparent 82%);
  }

  .tet-hero__content {
    align-items: flex-end;
    padding-top: 125px;
    padding-bottom: 104px;
  }

  .tet-hero__copy {
    max-width: none;
    margin-left: 0;
  }

  .tet-hero h1 {
    font-size: clamp(48px, 14.5vw, 68px);
    line-height: 0.93;
  }

  .tet-hero__lead {
    font-size: 15px;
  }

  .tet-hero__scroll {
    display: none;
  }

  .tet-hero__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .tet-button {
    width: 100%;
  }

  .tet-bridge {
    min-height: 0;
    grid-template-columns: 1fr 1fr;
    margin-top: -42px;
  }

  .tet-bridge__item {
    min-height: 78px;
    padding: 12px 13px;
  }

  .tet-bridge__item:nth-child(2) {
    display: none;
  }

  .tet-bridge__item:nth-child(3) {
    border-top: 0;
    border-left: 1px solid var(--tet-line);
  }

  .tet-bridge__item:nth-child(4) {
    border-left: 0;
  }

  .tet-bridge__metric {
    grid-column: auto;
  }

  .tet-bridge__copy span {
    display: none;
  }

  .tet-main {
    padding-top: 28px;
  }

  .tet-intro {
    grid-template-columns: 1fr;
    gap: 20px;
    padding-top: 10px;
  }

  .tet-intro__copy h2 {
    font-size: clamp(38px, 10.8vw, 51px);
  }

  .tet-intro__facts {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid var(--tet-line);
    border-bottom: 1px solid var(--tet-line);
  }

  .tet-intro__fact {
    padding: 12px 8px;
    border-bottom: 0;
  }

  .tet-intro__fact:nth-child(even) {
    border-left: 1px solid var(--tet-line);
  }

  .tet-intro__visual {
    aspect-ratio: 1.55 / 1;
  }

  .tet-section-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }

  .tet-destinations__controls {
    display: none;
  }

  .tet-destination {
    min-width: 86vw;
    height: 220px;
    flex-basis: 86vw;
  }

  .tet-services__grid {
    margin-right: -16px;
  }

  .tet-service {
    min-width: 140px;
    flex-basis: 140px;
  }

  .tet-mice__media--left {
    min-height: 230px;
  }

  .tet-mice__copy {
    margin-top: -55px;
    padding: 70px 22px 28px;
  }

  .tet-mice__copy h2 {
    font-size: 33px;
  }

  .tet-experiences__rail {
    display: flex;
    overflow-x: auto;
    margin-right: -16px;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
  }

  .tet-experiences__rail::-webkit-scrollbar {
    display: none;
  }

  .tet-experience {
    min-width: 190px;
    height: 140px;
    flex: 0 0 190px;
    scroll-snap-align: start;
  }

  .tet-partners {
    grid-template-columns: 1fr;
  }

  .tet-partners__statement,
  .tet-partners__images {
    border-top: 1px solid var(--tet-line);
    border-left: 0;
  }

  .tet-partners__images {
    min-height: 105px;
  }

  .tet-footer-cta__inner {
    grid-template-columns: 1fr;
    gap: 14px;
    padding-block: 26px;
  }

  .tet-footer-cta .tet-button {
    width: fit-content;
  }

  .site-footer__grid {
    padding: 24px 0 18px !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tet-approved-home *,
  .tet-approved-home *::before,
  .tet-approved-home *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;

function Eyebrow({ children }: { children: string }) {
  return <p className="tet-eyebrow">{children}</p>;
}

function Fact({ icon: Icon, value, label }: { icon: LucideIcon; value: string; label: string }) {
  return (
    <div className="tet-intro__fact">
      <Icon aria-hidden="true" />
      <span>
        <strong>{value}</strong>
        <span>{label}</span>
      </span>
    </div>
  );
}

export default function TravelHomePage() {
  const destinationsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.querySelector<HTMLElement>('.tet-approved-home');
    if (!root || reduceMotion) return;

    const heroCopy = root.querySelector<HTMLElement>('.tet-hero__copy');
    const bridge = root.querySelector<HTMLElement>('.tet-bridge');

    heroCopy?.animate(
      [
        { opacity: 0, transform: 'translateY(22px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      { duration: 850, easing: 'cubic-bezier(.2,.72,.2,1)', fill: 'both' },
    );

    bridge?.animate(
      [
        { opacity: 0, transform: 'translateY(18px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      { duration: 760, delay: 180, easing: 'cubic-bezier(.2,.72,.2,1)', fill: 'both' },
    );

    const motionElements = Array.from(root.querySelectorAll<HTMLElement>('[data-tet-motion]'));
    motionElements.forEach((element) => element.classList.add('tet-motion-ready'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          const direction = element.dataset.tetMotion ?? 'up';
          const fromTransform =
            direction === 'left'
              ? 'translateX(-24px)'
              : direction === 'right'
                ? 'translateX(24px)'
                : direction === 'scale'
                  ? 'scale(.97)'
                  : 'translateY(20px)';

          element.animate(
            [
              { opacity: 0.01, transform: fromTransform },
              { opacity: 1, transform: 'none' },
            ],
            {
              duration: 680,
              easing: 'cubic-bezier(.2,.72,.2,1)',
              fill: 'both',
            },
          );

          if (element.dataset.tetStagger === 'true') {
            Array.from(element.children).forEach((child, index) => {
              (child as HTMLElement).animate(
                [
                  { opacity: 0.01, transform: 'translateY(12px)' },
                  { opacity: 1, transform: 'translateY(0)' },
                ],
                {
                  duration: 520,
                  delay: 70 + index * 55,
                  easing: 'cubic-bezier(.2,.72,.2,1)',
                  fill: 'both',
                },
              );
            });
          }

          observer.unobserve(element);
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -7%' },
    );

    motionElements.forEach((element) => observer.observe(element));

    let ticking = false;
    const updateParallax = () => {
      const hero = root.querySelector<HTMLElement>('.tet-hero');
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height)));
      document.documentElement.style.setProperty('--tet-parallax', `${Math.round(progress * 22)}px`);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateParallax);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateParallax();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      document.documentElement.style.removeProperty('--tet-parallax');
    };
  }, []);

  const scrollDestinations = (direction: 'previous' | 'next') => {
    destinationsRef.current?.scrollBy({
      left: direction === 'next' ? 520 : -520,
      behavior: 'smooth',
    });
  };

  return (
    <div className="tet-approved-home">
      <style>{HOME_STYLES}</style>

      <PageSeo
        title="Destination Management Company in Greece | Rhodes & Kos DMC | Top Euro Travel"
        description="Top Euro Travel is a trusted destination management company in Greece, providing DMC services, hotel contracting, transfers, MICE, groups, excursions and ground handling in Rhodes and Kos since 1989."
      />

      <section className="tet-hero" aria-labelledby="tet-home-title">
        <video
          className="tet-hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://static.wixstatic.com/media/5a118b_f3aada5a1ac547358ac6c8b35d60a2a7f000.jpg"
          tabIndex={-1}
          aria-hidden="true"
        >
          <source
            src="https://video.wixstatic.com/video/5a118b_ea5a16aef9d047ddb9126c2f00737d43/1080p/mp4/file.mp4"
            media="(max-width: 767px)"
            type="video/mp4"
          />
          <source
            src="https://video.wixstatic.com/video/5a118b_f3aada5a1ac547358ac6c8b35d60a2a7/1080p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <div className="tet-hero__overlay" aria-hidden="true" />

        <div className="tet-hero__content tet-shell">
          <div className="tet-hero__copy">
            <Eyebrow>Destination management since 1989</Eyebrow>
            <h1 id="tet-home-title">
              <span>Your Trusted DMC Partner</span>
              <span>in Rhodes &amp; Kos</span>
            </h1>
            <p className="tet-hero__lead">
              Delivering destination management, ground handling and travel solutions since 1989.
            </p>
            <div className="tet-hero__actions">
              <Link className="tet-button tet-button--gold" to="/services">
                Our Services <ArrowRight aria-hidden="true" />
              </Link>
              <Link className="tet-button tet-button--outline" to="/contact">
                Get in Touch <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <span className="tet-hero__scroll" aria-hidden="true">
          Scroll <ArrowDown />
        </span>

        <Link className="tet-hero__discover" to="/destinations">
          <span className="tet-play-circle"><Play aria-hidden="true" /></span>
          <span>Discover Rhodes &amp; Kos<br />Play video</span>
        </Link>
      </section>

      <section className="tet-bridge" aria-label="Top Euro Travel at a glance">
        <div className="tet-bridge__item tet-bridge__year">
          <small>Since</small>
          <strong>1989</strong>
        </div>

        <div className="tet-bridge__item">
          <div className="tet-bridge__copy">
            <small>Excellence in</small>
            <strong>Hospitality &amp; Travel</strong>
          </div>
        </div>

        <Link className="tet-bridge__item" to="/rhodes">
          <span className="tet-bridge__thumb">
            <Photo src={travelMedia('old-town.jpg')} alt="Rhodes" />
          </span>
          <span className="tet-bridge__copy">
            <small>Rhodes</small>
            <strong>Timeless Island</strong>
            <span>Local team &amp; destination expertise</span>
          </span>
          <ArrowRight className="tet-bridge__arrow" aria-hidden="true" />
        </Link>

        <Link className="tet-bridge__item" to="/kos">
          <span className="tet-bridge__thumb">
            <Photo src={travelMedia('home-welcome-v2.jpg')} alt="Kos" />
          </span>
          <span className="tet-bridge__copy">
            <small>Kos</small>
            <strong>Authentic Escape</strong>
            <span>Relaxed, tailor-made programmes</span>
          </span>
          <ArrowRight className="tet-bridge__arrow" aria-hidden="true" />
        </Link>

        <div className="tet-bridge__item tet-bridge__metric">
          <Users aria-hidden="true" />
          <span>
            <strong>100K+</strong>
            <span>Guests annually</span>
          </span>
        </div>
      </section>

      <main className="tet-main">
        <section id="our-story" className="tet-intro tet-shell">
          <div className="tet-intro__copy" data-tet-motion="left">
            <Eyebrow>Who we are</Eyebrow>
            <h2>Your Trusted DMC<br />in Rhodes &amp; Kos</h2>
            <p>
              Since 1989, Top Euro Travel has been providing destination management and ground handling services in
              Rhodes and Kos, supporting tour operators, travel agencies, groups and event planners from across the world.
            </p>
            <p>
              With local teams in both destinations and a flexible, hands-on approach, we deliver reliable solutions
              tailored to each partner&apos;s needs, from hotel contracting and transfers to MICE services, tailor-made
              programmes and excursions.
            </p>
            <span className="tet-intro__signature">Top Euro Travel · Since 1989</span>
            <Link className="tet-text-link" to="/about">
              Learn more about us <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="tet-intro__facts" data-tet-motion="up" aria-label="Top Euro Travel facts">
            <Fact icon={MapPinned} value="2" label="Unique destinations" />
            <Fact icon={Building2} value="200+" label="Hotel partners" />
            <Fact icon={Users} value="40+" label="Team members" />
            <Fact icon={Clock3} value="24/7" label="Local support" />
          </div>

          <div className="tet-intro__visual" data-tet-motion="right">
            <Photo
              src={travelMedia('home-welcome-v2.jpg')}
              alt="Aegean destination view in Rhodes and Kos"
              loading="eager"
            />
            <Link className="tet-intro__play" to="/destinations">
              <span className="tet-play-circle"><Play aria-hidden="true" /></span>
              <span>Discover<br />Our World</span>
            </Link>
          </div>
        </section>

        <section className="tet-destinations tet-shell" aria-labelledby="tet-destinations-title">
          <div className="tet-section-heading" data-tet-motion="up">
            <div>
              <Eyebrow>Our destinations</Eyebrow>
              <h2 id="tet-destinations-title">Two Islands. Endless Possibilities.</h2>
            </div>
            <div className="tet-destinations__controls" aria-label="Destination controls">
              <button
                className="tet-round-button"
                type="button"
                aria-label="Previous destination"
                onClick={() => scrollDestinations('previous')}
              >
                <ChevronLeft aria-hidden="true" />
              </button>
              <button
                className="tet-round-button"
                type="button"
                aria-label="Next destination"
                onClick={() => scrollDestinations('next')}
              >
                <ChevronRight aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="tet-destinations__rail" ref={destinationsRef} data-tet-motion="scale" data-tet-stagger="true">
            <article className="tet-destination">
              <Photo src={travelMedia('old-town.jpg')} alt="Rhodes destination" />
              <div className="tet-destination__copy">
                <h3>Rhodes</h3>
                <p>Where history, energy and hospitality meet.</p>
                <Link className="tet-destination__link" to="/rhodes">
                  Explore Rhodes <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>

            <article className="tet-destination">
              <Photo src={travelMedia('home-welcome-v2.jpg')} alt="Kos destination" />
              <div className="tet-destination__copy">
                <h3>Kos</h3>
                <p>Where authenticity meets a relaxed island rhythm.</p>
                <Link className="tet-destination__link" to="/kos">
                  Explore Kos <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="tet-services tet-shell" aria-labelledby="tet-services-title">
          <Eyebrow>Our services</Eyebrow>
          <h2 id="tet-services-title">We Handle Everything. You Enjoy the Experience.</h2>
          <div className="tet-services__grid" data-tet-motion="up" data-tet-stagger="true">
            {services.map(({ icon: Icon, title, description }) => (
              <Link className="tet-service" to="/services" key={title}>
                <span className="tet-service__icon"><Icon aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="tet-mice tet-shell" aria-labelledby="tet-mice-title" data-tet-motion="scale">
          <div className="tet-mice__media tet-mice__media--left">
            <Photo src={travelMedia('home-mice-v2.jpg')} alt="MICE and group travel in Rhodes and Kos" />
          </div>

          <div className="tet-mice__copy">
            <Eyebrow>MICE &amp; group travel</Eyebrow>
            <h2 id="tet-mice-title">Inspire. Connect. Reward.</h2>
            <p>
              Whether planning a corporate event, incentive programme or group itinerary, our team delivers tailored
              solutions and seamless execution across Rhodes and Kos.
            </p>
            <Link className="tet-button tet-button--gold" to="/mice-groups">
              Explore MICE <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="tet-mice__media tet-mice__media--right">
            <Photo src={travelMedia('food.jpg')} alt="Tailor-made event detail" />
          </div>
        </section>

        <section className="tet-experiences tet-shell" aria-labelledby="tet-experiences-title">
          <div className="tet-section-heading" data-tet-motion="up">
            <div>
              <Eyebrow>Experiences</Eyebrow>
              <h2 id="tet-experiences-title">Authentic Local Experiences</h2>
            </div>
            <Link className="tet-text-link" to="/experiences">
              View all experiences <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="tet-experiences__rail" data-tet-motion="up" data-tet-stagger="true">
            {experiences.map(({ icon: Icon, title, image }) => (
              <Link className="tet-experience" to="/experiences" key={title}>
                <Photo src={travelMedia(image)} alt={title} />
                <span className="tet-experience__icon"><Icon aria-hidden="true" /></span>
                <strong>{title}</strong>
              </Link>
            ))}
          </div>
        </section>

        <section className="tet-partners tet-shell" aria-label="Top Euro Travel partner network" data-tet-motion="up">
          <div className="tet-partners__marks">
            <span>Tour Operators</span>
            <span>Travel Agencies</span>
            <span>Hotel Partners</span>
            <span>MICE Planners</span>
          </div>
          <div className="tet-partners__statement">
            <strong>Trusted since 1989</strong>
            <p>Long-term partnerships built through reliable local delivery.</p>
          </div>
          <div className="tet-partners__images" aria-hidden="true">
            <div><Photo src={travelMedia('sailing.jpg')} alt="" /></div>
            <div><Photo src={travelMedia('local-life.jpg')} alt="" /></div>
          </div>
        </section>
      </main>

      <section className="tet-footer-cta">
        <div className="tet-footer-cta__inner tet-shell" data-tet-motion="up">
          <h2>Let&apos;s Create<br />Something Amazing.</h2>
          <p>
            Whether you are looking for a reliable DMC partner, planning a group programme, organising an event or
            exploring new opportunities in Greece, our team is ready to assist.
          </p>
          <Link className="tet-button tet-button--gold" to="/contact">
            Contact Us <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
