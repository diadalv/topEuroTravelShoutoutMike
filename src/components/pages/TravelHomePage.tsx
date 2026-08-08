// TOP EURO TRAVEL — APPROVED DESIGN 1 — FULL HOMEPAGE REPLACE
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
  Globe2,
  Headphones,
  Landmark,
  MapPinned,
  Play,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const services: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: BedDouble,
    title: 'Hotel Contracting',
    description: 'Carefully selected stays and competitive agreements.',
  },
  {
    icon: CalendarCheck,
    title: 'Booking Management',
    description: 'Reservations and programme details handled end to end.',
  },
  {
    icon: Bus,
    title: 'Transfers & Transportation',
    description: 'Reliable airport, hotel and island-wide movement.',
  },
  {
    icon: Headphones,
    title: 'Resort Assistance',
    description: 'Responsive local support throughout every stay.',
  },
  {
    icon: MapPinned,
    title: 'Tours & Excursions',
    description: 'Authentic experiences shaped with local knowledge.',
  },
  {
    icon: Landmark,
    title: 'MICE & Group Travel',
    description: 'Meetings, incentives, conferences and group programmes.',
  },
  {
    icon: Sparkles,
    title: 'Weddings & Special Events',
    description: 'Distinctive occasions delivered with calm precision.',
  },
  {
    icon: Globe2,
    title: 'XML API & Agent Portal',
    description: 'Connected technology for faster partner operations.',
  },
];

const experiences = [
  {
    title: 'Culture & Heritage',
    image: 'old-town.jpg',
  },
  {
    title: 'Gastronomy & Wine',
    image: 'food.jpg',
  },
  {
    title: 'Yachting & Sailing',
    image: 'sailing.jpg',
  },
  {
    title: 'Nature & Adventure',
    image: 'prasonisi.jpg',
  },
  {
    title: 'Wellness & Local Life',
    image: 'local-life.jpg',
  },
  {
    title: 'Island Discovery',
    image: 'home-welcome-v2.jpg',
  },
] as const;

const HOME_STYLES = String.raw`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');

:root {
  --tet-ink: #102c49;
  --tet-ink-deep: #071f37;
  --tet-blue: #0d446f;
  --tet-gold: #d9a14a;
  --tet-gold-deep: #bb7f27;
  --tet-paper: #fffdf9;
  --tet-paper-soft: #f7f4ef;
  --tet-line: rgba(16, 44, 73, 0.14);
  --tet-shadow: 0 22px 58px rgba(9, 35, 61, 0.13);
  --tet-radius: 14px;
}

.tet-home,
.tet-home * {
  box-sizing: border-box;
}

.tet-home {
  position: relative;
  overflow: clip;
  background:
    radial-gradient(circle at 7% 31%, rgba(216, 226, 234, 0.36), transparent 25%),
    radial-gradient(circle at 92% 47%, rgba(231, 224, 210, 0.32), transparent 28%),
    var(--tet-paper);
  color: var(--tet-ink-deep);
  font-family: 'DM Sans', 'Segoe UI', sans-serif;
  font-size: 16px;
  line-height: 1.6;
}

.tet-home h1,
.tet-home h2,
.tet-home h3,
.tet-home p {
  margin-top: 0;
}

.tet-home h1,
.tet-home h2,
.tet-home h3 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 600;
  letter-spacing: -0.035em;
}

.tet-home a {
  color: inherit;
}

.tet-shell {
  width: min(calc(100% - clamp(36px, 8vw, 126px)), 1320px);
  margin-inline: auto;
}

.tet-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 10px;
  color: var(--tet-gold-deep);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.13em;
  line-height: 1.3;
  text-transform: uppercase;
}

.tet-eyebrow::before {
  width: 8px;
  height: 8px;
  border-radius: 1px;
  background: currentColor;
  clip-path: polygon(0 0, 100% 50%, 0 100%);
  content: '';
}

.tet-section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 18px;
}

.tet-section-heading h2 {
  margin-bottom: 0;
  color: var(--tet-ink-deep);
  font-size: clamp(34px, 3.2vw, 50px);
  line-height: 0.98;
}

.tet-inline-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 3px;
  border-bottom: 1px solid rgba(16, 44, 73, 0.34);
  color: var(--tet-ink-deep);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: color 220ms ease, border-color 220ms ease;
}

.tet-inline-link svg {
  width: 16px;
  transition: transform 220ms ease;
}

.tet-inline-link:hover,
.tet-inline-link:focus-visible {
  border-color: var(--tet-gold-deep);
  color: var(--tet-gold-deep);
}

.tet-inline-link:hover svg,
.tet-inline-link:focus-visible svg {
  transform: translateX(4px);
}

/* Global site header — scoped by the presence of this style element on Home. */
.site-header {
  height: 82px !important;
  background: transparent !important;
  border-bottom: 1px solid transparent !important;
  box-shadow: none !important;
}

.site-header.is-scrolled {
  height: 70px !important;
  background: rgba(7, 31, 55, 0.88) !important;
  border-bottom-color: rgba(255, 255, 255, 0.12) !important;
  backdrop-filter: blur(18px) saturate(1.1) !important;
  -webkit-backdrop-filter: blur(18px) saturate(1.1) !important;
  box-shadow: 0 12px 32px rgba(3, 20, 36, 0.2) !important;
}

.site-header__inner {
  width: min(calc(100% - clamp(32px, 6vw, 92px)), 1420px) !important;
  margin-inline: auto !important;
  padding-inline: 0 !important;
}

.brand-logo {
  width: 118px !important;
  height: 64px !important;
  object-fit: contain !important;
}

.main-nav {
  gap: clamp(20px, 2.25vw, 38px) !important;
}

.main-nav__link {
  padding-block: 31px 27px !important;
  color: rgba(255, 255, 255, 0.94) !important;
  font-family: 'DM Sans', 'Segoe UI', sans-serif !important;
  font-size: 11px !important;
  font-weight: 600 !important;
  letter-spacing: 0.035em !important;
  text-shadow: 0 1px 10px rgba(2, 23, 43, 0.42) !important;
}

.site-header.is-scrolled .main-nav__link {
  padding-block: 25px 21px !important;
}

.main-nav__link:hover,
.main-nav__link:focus-visible,
.main-nav__link.is-active {
  color: #ffffff !important;
}

.main-nav__link.is-active::after {
  right: 0 !important;
  bottom: 19px !important;
  left: 0 !important;
  height: 1px !important;
  background: #f2c879 !important;
  box-shadow: none !important;
}

.site-header.is-scrolled .main-nav__link.is-active::after {
  bottom: 13px !important;
}

.header-contact-btn {
  min-height: 42px !important;
  padding: 12px 24px !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  border-radius: 999px !important;
  background: linear-gradient(135deg, #efc574 0%, #dca24d 100%) !important;
  color: #0b2b48 !important;
  font-size: 11px !important;
  font-weight: 700 !important;
  letter-spacing: 0.04em !important;
  box-shadow: 0 10px 28px rgba(209, 146, 54, 0.24) !important;
}

.header-contact-btn:hover,
.header-contact-btn:focus-visible {
  background: linear-gradient(135deg, #f5d28d 0%, #e5ae5e 100%) !important;
  box-shadow: 0 14px 34px rgba(209, 146, 54, 0.34) !important;
  transform: translateY(-1px) !important;
}

/* Hero */
.tet-hero {
  min-height: clamp(570px, 49vw, 720px);
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
  transform: translate3d(0, var(--tet-hero-shift, 0px), 0) scale(1.025);
  will-change: transform;
}

.tet-hero__overlay {
  position: absolute;
  inset: 0;
  z-index: -2;
  background:
    linear-gradient(90deg, rgba(5, 28, 51, 0.85) 0%, rgba(6, 35, 63, 0.67) 40%, rgba(7, 42, 73, 0.16) 71%, rgba(5, 25, 44, 0.08) 100%),
    linear-gradient(180deg, rgba(4, 22, 40, 0.42) 0%, rgba(4, 25, 46, 0.02) 52%, rgba(3, 23, 43, 0.36) 100%);
}

.tet-hero__content {
  width: 100%;
  padding-top: 110px;
  padding-bottom: 94px;
}

.tet-hero__copy {
  max-width: 760px;
}

.tet-hero .tet-eyebrow {
  margin-bottom: 16px;
  color: rgba(255, 255, 255, 0.96);
}

.tet-hero .tet-eyebrow::before {
  background: #e7b75f;
}

.tet-hero h1 {
  max-width: 930px;
  margin-bottom: 22px;
  color: #fff;
  font-size: clamp(58px, 5.55vw, 86px);
  line-height: 0.88;
  text-wrap: balance;
}

.tet-hero h1 span {
  display: block;
}

.tet-hero__lead {
  max-width: 610px;
  margin-bottom: 26px;
  color: rgba(255, 255, 255, 0.94);
  font-size: clamp(15px, 1.2vw, 18px);
  line-height: 1.55;
}

.tet-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.tet-button {
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  padding: 13px 23px;
  border: 1px solid transparent;
  border-radius: 9px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  transition: transform 220ms ease, background 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
}

.tet-button svg {
  width: 17px;
  transition: transform 220ms ease;
}

.tet-button:hover,
.tet-button:focus-visible {
  transform: translateY(-2px);
}

.tet-button:hover svg,
.tet-button:focus-visible svg {
  transform: translateX(4px);
}

.tet-button--gold {
  background: linear-gradient(135deg, #f0c677 0%, #dba250 100%);
  color: #0a2b49;
  box-shadow: 0 13px 32px rgba(213, 155, 67, 0.26);
}

.tet-button--outline {
  border-color: rgba(255, 255, 255, 0.58);
  background: rgba(8, 33, 58, 0.18);
  color: #fff;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.tet-hero__scroll {
  position: absolute;
  bottom: 76px;
  left: clamp(22px, 3.8vw, 58px);
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}

.tet-hero__scroll::before {
  width: 1px;
  height: 74px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.16));
  content: '';
}

.tet-hero__scroll svg {
  width: 14px;
  animation: tet-scroll-bob 1.8s ease-in-out infinite;
}

.tet-hero__discover {
  position: absolute;
  right: clamp(28px, 6vw, 92px);
  bottom: 54px;
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: #fff;
}

.tet-hero__discover-icon {
  width: 46px;
  height: 46px;
  border: 1px solid rgba(255, 255, 255, 0.68);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(6, 31, 55, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: background 220ms ease, transform 220ms ease;
}

.tet-hero__discover-icon svg {
  width: 17px;
  fill: currentColor;
}

.tet-hero__discover-copy {
  display: grid;
  gap: 1px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1.3;
  text-transform: uppercase;
}

.tet-hero__discover:hover .tet-hero__discover-icon,
.tet-hero__discover:focus-visible .tet-hero__discover-icon {
  background: rgba(225, 169, 82, 0.9);
  transform: scale(1.05);
}

@keyframes tet-scroll-bob {
  0%, 100% { transform: translateY(-2px); }
  50% { transform: translateY(5px); }
}

/* Floating bridge between Hero and the light page. */
.tet-bridge {
  min-height: 92px;
  position: relative;
  z-index: 8;
  display: grid;
  grid-template-columns: 1.05fr 1.2fr 1.15fr 1.15fr 1fr;
  margin-top: -46px;
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: var(--tet-shadow);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.tet-bridge__item {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 17px clamp(17px, 2vw, 29px);
  border-left: 1px solid var(--tet-line);
}

.tet-bridge__item:first-child {
  border-left: 0;
}

.tet-bridge__year {
  align-items: flex-start;
  flex-direction: column;
  gap: 0;
}

.tet-bridge__year small,
.tet-bridge__copy small {
  color: var(--tet-gold-deep);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.tet-bridge__year strong {
  color: var(--tet-gold-deep);
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 37px;
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 0.9;
}

.tet-bridge__thumb {
  width: 44px;
  height: 44px;
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
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
}

.tet-bridge__copy span {
  color: #5e6d7b;
  font-size: 11px;
  white-space: nowrap;
}

.tet-bridge__arrow {
  width: 17px;
  margin-left: auto;
  color: var(--tet-gold-deep);
  transition: transform 220ms ease;
}

.tet-bridge__item:hover .tet-bridge__arrow {
  transform: translateX(4px);
}

.tet-bridge__metric {
  gap: 11px;
}

.tet-bridge__metric > svg {
  width: 28px;
  color: var(--tet-gold-deep);
  stroke-width: 1.45;
}

.tet-bridge__metric strong {
  display: block;
  color: var(--tet-ink-deep);
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 0.95;
}

.tet-bridge__metric span {
  color: #5f6d79;
  font-size: 10px;
}

/* Main light narrative */
.tet-main {
  position: relative;
  padding-top: 42px;
  background:
    radial-gradient(circle at -3% 23%, rgba(197, 215, 226, 0.3), transparent 25%),
    radial-gradient(circle at 102% 54%, rgba(226, 215, 193, 0.28), transparent 30%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.01), rgba(246, 248, 249, 0.34));
}

.tet-main::before {
  position: absolute;
  inset: 14% -10% auto;
  height: 520px;
  opacity: 0.42;
  background:
    radial-gradient(ellipse at 18% 50%, rgba(223, 231, 237, 0.62), transparent 47%),
    radial-gradient(ellipse at 75% 50%, rgba(235, 228, 215, 0.52), transparent 48%);
  filter: blur(28px);
  pointer-events: none;
  content: '';
}

/* Intro */
.tet-intro {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(150px, 0.42fr) minmax(440px, 1.4fr);
  align-items: center;
  gap: clamp(28px, 4.2vw, 62px);
  padding-top: 30px;
  padding-bottom: 34px;
}

.tet-intro__copy h2 {
  max-width: 470px;
  margin-bottom: 14px;
  color: var(--tet-ink-deep);
  font-size: clamp(42px, 4vw, 60px);
  line-height: 0.92;
}

.tet-intro__subtitle {
  max-width: 510px;
  margin-bottom: 12px;
  color: var(--tet-ink);
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(19px, 1.5vw, 23px);
  font-weight: 600;
  line-height: 1.25;
}

.tet-intro__copy p:not(.tet-eyebrow):not(.tet-intro__subtitle) {
  max-width: 560px;
  margin-bottom: 10px;
  color: #485d70;
  font-size: 13px;
  line-height: 1.65;
}

.tet-intro__copy .tet-inline-link {
  margin-top: 8px;
}

.tet-intro__signature {
  display: block;
  margin: 14px 0 7px;
  color: var(--tet-gold-deep);
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 27px;
  font-style: italic;
  letter-spacing: 0.01em;
}

.tet-intro__facts {
  display: grid;
  align-content: center;
  gap: 0;
}

.tet-intro__fact {
  display: grid;
  grid-template-columns: 27px minmax(0, 1fr);
  gap: 11px;
  padding: 12px 0;
  border-bottom: 1px solid var(--tet-line);
}

.tet-intro__fact:last-child {
  border-bottom: 0;
}

.tet-intro__fact svg {
  width: 23px;
  color: var(--tet-gold-deep);
  stroke-width: 1.55;
}

.tet-intro__fact strong {
  display: block;
  color: var(--tet-ink-deep);
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 25px;
  font-weight: 600;
  line-height: 0.92;
}

.tet-intro__fact span {
  display: block;
  margin-top: 3px;
  color: #62717e;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.035em;
  text-transform: uppercase;
}

.tet-intro__visual {
  aspect-ratio: 1.82 / 1;
  position: relative;
  border-radius: var(--tet-radius);
  overflow: hidden;
  background: #d9e3e9;
  box-shadow: 0 18px 44px rgba(10, 38, 65, 0.12);
}

.tet-intro__visual .travel-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.1s cubic-bezier(.2,.7,.2,1), filter 700ms ease;
}

.tet-intro__visual::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(5, 30, 55, 0.02), rgba(4, 30, 54, 0.08));
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
  gap: 12px;
  color: #fff;
  transform: translate(-50%, -50%);
}

.tet-intro__play-circle {
  width: 58px;
  height: 58px;
  border: 1px solid rgba(255, 255, 255, 0.88);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(6, 31, 55, 0.17);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: background 220ms ease, transform 220ms ease;
}

.tet-intro__play-circle svg {
  width: 20px;
  fill: currentColor;
}

.tet-intro__play span:last-child {
  max-width: 80px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1.15;
}

.tet-intro__play:hover .tet-intro__play-circle,
.tet-intro__play:focus-visible .tet-intro__play-circle {
  background: rgba(214, 158, 72, 0.9);
  transform: scale(1.06);
}

/* Destinations */
.tet-destinations {
  position: relative;
  z-index: 1;
  padding-top: 8px;
  padding-bottom: 25px;
}

.tet-destinations__controls {
  display: flex;
  gap: 8px;
}

.tet-round-button {
  width: 38px;
  height: 38px;
  border: 1px solid rgba(187, 127, 39, 0.38);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.65);
  color: var(--tet-gold-deep);
  cursor: pointer;
  transition: color 200ms ease, background 200ms ease, transform 200ms ease;
}

.tet-round-button svg {
  width: 17px;
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
  gap: 12px;
}

.tet-destination {
  min-height: 222px;
  position: relative;
  border-radius: 11px;
  overflow: hidden;
  color: #fff;
  box-shadow: 0 14px 35px rgba(7, 31, 55, 0.13);
}

.tet-destination .travel-photo {
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  object-fit: cover;
  transition: transform 850ms cubic-bezier(.2,.7,.2,1), filter 500ms ease;
}

.tet-destination::after {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(3, 28, 52, 0.82) 0%, rgba(4, 32, 58, 0.46) 47%, rgba(5, 32, 57, 0.06) 100%),
    linear-gradient(0deg, rgba(3, 24, 44, 0.24), transparent 58%);
  content: '';
}

.tet-destination__content {
  max-width: 320px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  padding: 24px 27px;
}

.tet-destination__content h3 {
  margin-bottom: 4px;
  color: #fff;
  font-family: 'DM Sans', 'Segoe UI', sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.015em;
}

.tet-destination__content p {
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.92);
  font-size: 13px;
  line-height: 1.4;
}

.tet-destination__link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.64);
  padding-bottom: 3px;
  font-size: 11px;
  font-weight: 700;
}

.tet-destination__link svg {
  width: 15px;
  color: #efc16d;
  transition: transform 220ms ease;
}

.tet-destination:hover .travel-photo,
.tet-destination:focus-within .travel-photo {
  filter: saturate(1.07);
  transform: scale(1.045);
}

.tet-destination:hover .tet-destination__link svg,
.tet-destination:focus-within .tet-destination__link svg {
  transform: translateX(4px);
}

/* Services — one connected line, no cards. */
.tet-services {
  position: relative;
  z-index: 1;
  padding-top: 10px;
  padding-bottom: 28px;
}

.tet-services__grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  border-top: 1px solid rgba(187, 127, 39, 0.28);
}

.tet-service {
  min-width: 0;
  position: relative;
  display: grid;
  justify-items: center;
  align-content: start;
  padding: 18px 12px 8px;
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
  border-radius: 50%;
  background: var(--tet-paper);
  box-shadow: 0 0 0 1px var(--tet-gold-deep);
  content: '';
  transform: translateX(-50%);
  transition: background 220ms ease, box-shadow 220ms ease, transform 220ms ease;
}

.tet-service__icon {
  width: 35px;
  height: 35px;
  display: grid;
  place-items: center;
  margin-bottom: 7px;
  color: var(--tet-gold-deep);
  transition: transform 240ms ease, color 240ms ease;
}

.tet-service__icon svg {
  width: 29px;
  height: 29px;
  stroke-width: 1.45;
}

.tet-service h3 {
  min-height: 31px;
  display: grid;
  place-items: center;
  margin-bottom: 4px;
  color: var(--tet-ink-deep);
  font-family: 'DM Sans', 'Segoe UI', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.25;
}

.tet-service p {
  max-width: 130px;
  margin-bottom: 0;
  color: #71808b;
  font-size: 8.5px;
  line-height: 1.35;
}

.tet-service:hover::before,
.tet-service:focus-within::before {
  background: var(--tet-gold-deep);
  box-shadow: 0 0 0 5px rgba(187, 127, 39, 0.12);
  transform: translateX(-50%) scale(1.04);
}

.tet-service:hover .tet-service__icon,
.tet-service:focus-within .tet-service__icon {
  color: var(--tet-ink-deep);
  transform: translateY(-4px);
}

/* MICE */
.tet-mice {
  min-height: 246px;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(340px, 0.82fr) minmax(230px, 0.58fr);
  margin-bottom: 22px;
  border-radius: 11px;
  overflow: hidden;
  background: var(--tet-ink-deep);
  box-shadow: 0 18px 44px rgba(7, 31, 55, 0.16);
}

.tet-mice__media {
  min-height: 246px;
  position: relative;
  overflow: hidden;
}

.tet-mice__media .travel-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 900ms cubic-bezier(.2,.7,.2,1), filter 600ms ease;
}

.tet-mice__media::after {
  position: absolute;
  inset: 0;
  content: '';
}

.tet-mice__media--left::after {
  background: linear-gradient(90deg, transparent 60%, rgba(7, 31, 55, 0.78));
}

.tet-mice__media--right::after {
  background: linear-gradient(90deg, rgba(7, 31, 55, 0.72), rgba(7, 31, 55, 0.08));
}

.tet-mice__copy {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 28px 30px;
  background:
    radial-gradient(circle at 80% 20%, rgba(67, 120, 157, 0.24), transparent 37%),
    var(--tet-ink-deep);
  color: #fff;
}

.tet-mice__copy .tet-eyebrow {
  margin-bottom: 8px;
  color: #e8b75d;
}

.tet-mice__copy h2 {
  margin-bottom: 8px;
  color: #fff;
  font-size: clamp(31px, 2.8vw, 44px);
  line-height: 0.98;
}

.tet-mice__copy p:not(.tet-eyebrow) {
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 11px;
  line-height: 1.55;
}

.tet-mice__copy .tet-button {
  width: fit-content;
  min-height: 41px;
  padding: 10px 17px;
  font-size: 10px;
}

.tet-mice:hover .travel-photo {
  filter: saturate(1.06);
  transform: scale(1.035);
}

/* Experiences */
.tet-experiences {
  position: relative;
  z-index: 1;
  padding-bottom: 16px;
}

.tet-experiences .tet-section-heading {
  margin-bottom: 12px;
}

.tet-experiences__rail {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 8px;
}

.tet-experience {
  aspect-ratio: 1 / 0.86;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: #d7e0e5;
  color: #fff;
}

.tet-experience .travel-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 720ms cubic-bezier(.2,.7,.2,1), filter 450ms ease;
}

.tet-experience::after {
  position: absolute;
  inset: 28% 0 0;
  background: linear-gradient(transparent, rgba(4, 27, 49, 0.88));
  content: '';
}

.tet-experience__icon {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 11px;
  left: 11px;
  z-index: 2;
  border: 1px solid rgba(255, 255, 255, 0.46);
  border-radius: 7px;
  display: grid;
  place-items: center;
  background: rgba(7, 31, 55, 0.15);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
}

.tet-experience__icon svg {
  width: 13px;
}

.tet-experience strong {
  position: absolute;
  right: 12px;
  bottom: 11px;
  left: 12px;
  z-index: 2;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(17px, 1.45vw, 22px);
  font-weight: 600;
  line-height: 0.95;
  text-shadow: 0 2px 12px rgba(2, 18, 33, 0.46);
}

.tet-experience:hover .travel-photo,
.tet-experience:focus-within .travel-photo {
  filter: saturate(1.08);
  transform: scale(1.065);
}

/* Partner / credibility strip */
.tet-partners {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.75fr) minmax(230px, 0.62fr);
  align-items: stretch;
  margin-bottom: 0;
  border: 1px solid rgba(16, 44, 73, 0.09);
  border-radius: 11px 11px 0 0;
  overflow: hidden;
  background: rgba(250, 247, 242, 0.94);
  box-shadow: 0 12px 30px rgba(7, 31, 55, 0.08);
}

.tet-partners__marks {
  display: grid;
  align-content: center;
  padding: 18px 27px;
}

.tet-partners__label {
  margin-bottom: 10px;
  color: #8a9299;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.tet-partners__logos {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}

.tet-partners__logo {
  color: #4d5c69;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: 0.015em;
}

.tet-partners__statement {
  display: grid;
  align-content: center;
  padding: 18px 25px;
  border-left: 1px solid var(--tet-line);
}

.tet-partners__statement strong {
  margin-bottom: 4px;
  color: var(--tet-gold-deep);
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 22px;
  font-weight: 600;
}

.tet-partners__statement p {
  margin-bottom: 0;
  color: #526575;
  font-size: 11px;
  line-height: 1.5;
}

.tet-partners__images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  padding: 8px;
  border-left: 1px solid var(--tet-line);
}

.tet-partners__images > div {
  min-height: 82px;
  border-radius: 7px;
  overflow: hidden;
}

.tet-partners__images .travel-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Contact chapter that visually joins the real site footer. */
.tet-contact {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background:
    linear-gradient(90deg, rgba(8, 42, 72, 0.97), rgba(10, 54, 88, 0.89)),
    var(--tet-home-footer-image, none) center / cover;
  color: #fff;
}

.tet-contact::after {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 45%);
  content: '';
}

.tet-contact__inner {
  min-height: 170px;
  display: grid;
  grid-template-columns: minmax(250px, 0.65fr) minmax(0, 1.15fr) auto;
  align-items: center;
  gap: clamp(30px, 5vw, 74px);
  padding-block: 34px;
}

.tet-contact h2 {
  margin-bottom: 0;
  color: #fff;
  font-size: clamp(36px, 3.3vw, 51px);
  line-height: 0.95;
}

.tet-contact p {
  max-width: 650px;
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.76);
  font-size: 13px;
  line-height: 1.6;
}

.tet-contact .tet-button {
  white-space: nowrap;
}

/* The real project footer stays intact; only its visual shell is brought into the approved direction. */
.site-footer {
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  border-radius: 0 !important;
  background:
    linear-gradient(90deg, rgba(7, 38, 66, 0.98), rgba(9, 53, 87, 0.92)),
    var(--tet-home-footer-image, none) center 62% / cover !important;
  color: #fff !important;
  box-shadow: none !important;
}

.site-footer__grid,
.site-footer__bottom {
  width: min(calc(100% - clamp(36px, 8vw, 126px)), 1320px) !important;
  margin-inline: auto !important;
}

.site-footer__grid {
  padding: 34px 0 26px !important;
}

.footer-brand,
.footer-column {
  border-color: rgba(255, 255, 255, 0.14) !important;
}

.site-footer h3,
.site-footer p,
.site-footer a,
.site-footer span {
  color: rgba(255, 255, 255, 0.83) !important;
}

.site-footer a:hover,
.site-footer a:focus-visible {
  color: #f0c574 !important;
}

.site-footer__bottom {
  border-top-color: rgba(255, 255, 255, 0.14) !important;
  color: rgba(255, 255, 255, 0.68) !important;
}

/* Motion — deliberately different by chapter. */
.tet-home [data-reveal] {
  opacity: 0;
  transition: opacity 760ms ease, transform 820ms cubic-bezier(.2,.72,.2,1), clip-path 900ms cubic-bezier(.2,.72,.2,1);
}

.tet-home [data-reveal='rise'] {
  transform: translateY(24px);
}

.tet-home [data-reveal='left'] {
  transform: translateX(-28px);
}

.tet-home [data-reveal='right'] {
  transform: translateX(28px);
}

.tet-home [data-reveal='wipe'] {
  clip-path: inset(0 100% 0 0);
}

.tet-home [data-reveal='scale'] {
  transform: scale(0.965);
}

.tet-home [data-reveal].is-visible {
  opacity: 1;
  clip-path: inset(0 0 0 0);
  transform: none;
}

.tet-hero__copy {
  animation: tet-hero-copy-in 950ms cubic-bezier(.2,.72,.2,1) both;
}

.tet-bridge {
  animation: tet-bridge-in 850ms cubic-bezier(.2,.72,.2,1) 220ms both;
}

@keyframes tet-hero-copy-in {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: none; }
}

@keyframes tet-bridge-in {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: none; }
}

/* Responsive */
@media (max-width: 1180px) {
  .tet-intro {
    grid-template-columns: minmax(0, 0.9fr) minmax(140px, 0.42fr) minmax(360px, 1.18fr);
    gap: 30px;
  }

  .tet-bridge {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .tet-bridge__item:nth-child(2) {
    display: none;
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
    min-width: 155px;
    flex: 0 0 155px;
    scroll-snap-align: start;
  }

  .tet-mice {
    grid-template-columns: 1fr minmax(330px, 0.8fr);
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
    top: 81px !important;
    border: 1px solid rgba(16, 44, 73, 0.1) !important;
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

  .main-nav__link.is-active::after,
  .site-header.is-scrolled .main-nav__link.is-active::after {
    bottom: 4px !important;
  }

  .header-contact-btn {
    width: 100% !important;
    margin-top: 12px !important;
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

  .tet-bridge__item:nth-child(-n+2) {
    border-top: 0;
  }

  .tet-bridge__item:nth-child(3) {
    border-left: 0;
  }

  .tet-bridge__item:nth-child(2) {
    display: flex;
  }

  .tet-bridge__item:last-child {
    grid-column: 1 / -1;
    justify-content: center;
  }

  .tet-intro {
    grid-template-columns: minmax(0, 1fr) minmax(160px, 0.45fr);
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
    grid-template-columns: 1fr;
  }

  .tet-mice__media--left {
    min-height: 310px;
  }

  .tet-mice__media--left::after {
    background: linear-gradient(0deg, rgba(7, 31, 55, 0.88), transparent 65%);
  }

  .tet-mice__copy {
    margin-top: -78px;
    padding-top: 94px;
  }

  .tet-partners {
    grid-template-columns: 1fr 1fr;
  }

  .tet-partners__images {
    grid-column: 1 / -1;
    min-height: 120px;
    border-top: 1px solid var(--tet-line);
    border-left: 0;
  }

  .tet-contact__inner {
    grid-template-columns: 1fr auto;
  }

  .tet-contact p {
    grid-column: 1 / -1;
    grid-row: 2;
  }
}

@media (max-width: 700px) {
  .tet-shell,
  .site-footer__grid,
  .site-footer__bottom {
    width: calc(100% - 32px) !important;
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
    min-height: max(650px, 86svh);
    align-items: flex-end;
  }

  .tet-hero__video {
    object-position: 62% center;
  }

  .tet-hero__overlay {
    background:
      linear-gradient(0deg, rgba(5, 28, 51, 0.94) 0%, rgba(5, 31, 56, 0.69) 57%, rgba(5, 29, 51, 0.2) 100%),
      linear-gradient(90deg, rgba(4, 27, 50, 0.42), transparent 80%);
  }

  .tet-hero__content {
    padding-top: 130px;
    padding-bottom: 98px;
  }

  .tet-hero h1 {
    max-width: 590px;
    font-size: clamp(48px, 14.8vw, 68px);
    line-height: 0.92;
  }

  .tet-hero h1 span {
  display: block;
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
    border-radius: 14px;
  }

  .tet-bridge__item {
    min-height: 82px;
    padding: 14px 15px;
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

  .tet-bridge__item:last-child {
    grid-column: auto;
  }

  .tet-bridge__year strong {
    font-size: 31px;
  }

  .tet-bridge__thumb {
    width: 36px;
    height: 36px;
  }

  .tet-bridge__copy strong {
    font-size: 10px;
  }

  .tet-bridge__copy span {
    font-size: 8px;
  }

  .tet-bridge__metric > svg {
    width: 23px;
  }

  .tet-bridge__metric strong {
    font-size: 22px;
  }

  .tet-main {
    padding-top: 34px;
  }

  .tet-intro {
    grid-template-columns: 1fr;
    gap: 22px;
    padding-top: 16px;
  }

  .tet-intro__copy h2 {
    font-size: clamp(39px, 11vw, 52px);
  }

  .tet-intro__facts {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid var(--tet-line);
    border-bottom: 1px solid var(--tet-line);
  }

  .tet-intro__fact {
    padding: 14px 8px;
    border-bottom: 0;
  }

  .tet-intro__fact:nth-child(even) {
    border-left: 1px solid var(--tet-line);
  }

  .tet-intro__visual {
    grid-column: auto;
    aspect-ratio: 1.35 / 1;
  }

  .tet-section-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }

  .tet-section-heading h2 {
    font-size: 38px;
  }

  .tet-destination {
    min-width: 86vw;
    flex-basis: 86vw;
    min-height: 255px;
  }

  .tet-service {
    min-width: 145px;
    flex-basis: 145px;
  }

  .tet-mice__media--left {
    min-height: 250px;
  }

  .tet-mice__copy {
    padding-inline: 22px;
  }

  .tet-experiences__rail {
    display: flex;
    overflow-x: auto;
    gap: 10px;
    padding-bottom: 5px;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
  }

  .tet-experiences__rail::-webkit-scrollbar {
    display: none;
  }

  .tet-experience {
    min-width: 57vw;
    flex: 0 0 57vw;
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

  .tet-contact__inner {
    min-height: 0;
    grid-template-columns: 1fr;
    gap: 18px;
    padding-block: 38px;
  }

  .tet-contact p {
    grid-column: auto;
    grid-row: auto;
  }

  .tet-contact .tet-button {
    width: fit-content;
  }

  .site-footer__grid {
    padding-top: 28px !important;
  }
}

@media (max-width: 430px) {
  .tet-bridge__item {
    gap: 9px;
    padding-inline: 11px;
  }

  .tet-bridge__thumb {
    display: none;
  }

  .tet-intro__facts {
    grid-template-columns: 1fr;
  }

  .tet-intro__fact:nth-child(even) {
    border-left: 0;
  }

  .tet-intro__fact + .tet-intro__fact {
    border-top: 1px solid var(--tet-line);
  }

  .tet-experience {
    min-width: 72vw;
    flex-basis: 72vw;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tet-home *,
  .tet-home *::before,
  .tet-home *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .tet-home [data-reveal] {
    opacity: 1 !important;
    clip-path: none !important;
    transform: none !important;
  }
}
`;

function Eyebrow({ children }: { children: string }) {
  return <p className="tet-eyebrow">{children}</p>;
}

export default function TravelHomePage() {
  const destinationsRailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footerImage = `url("${travelMedia('sailing.jpg')}")`;
    document.documentElement.style.setProperty('--tet-home-footer-image', footerImage);

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('.tet-home [data-reveal]'));

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -7%' },
      );

      revealItems.forEach((item) => observer.observe(item));

      const updateHeroParallax = () => {
        const shift = Math.min(window.scrollY * 0.08, 44);
        document.documentElement.style.setProperty('--tet-hero-shift', `${shift}px`);
      };

      updateHeroParallax();
      window.addEventListener('scroll', updateHeroParallax, { passive: true });

      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', updateHeroParallax);
        document.documentElement.style.removeProperty('--tet-home-footer-image');
        document.documentElement.style.removeProperty('--tet-hero-shift');
      };
    }

    return () => {
      document.documentElement.style.removeProperty('--tet-home-footer-image');
      document.documentElement.style.removeProperty('--tet-hero-shift');
    };
  }, []);

  const scrollDestinations = (direction: 'previous' | 'next') => {
    destinationsRailRef.current?.scrollBy({
      left: direction === 'next' ? 420 : -420,
      behavior: 'smooth',
    });
  };

  return (
    <div className="tet-home">
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
            <h1 id="tet-home-title"><span>Your Trusted DMC Partner</span><span>in Rhodes &amp; Kos</span></h1>
            <p className="tet-hero__lead">
              Delivering destination management, ground handling and travel solutions since 1989.
            </p>
            <div className="tet-hero__actions">
              <Link className="tet-button tet-button--gold" to="/services">
                Explore Our Services <ArrowRight aria-hidden="true" />
              </Link>
              <Link className="tet-button tet-button--outline" to="/contact">
                Partner With Us <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <span className="tet-hero__scroll" aria-hidden="true">
          Scroll <ArrowDown />
        </span>

        <Link className="tet-hero__discover" to="/destinations">
          <span className="tet-hero__discover-icon"><Play aria-hidden="true" /></span>
          <span className="tet-hero__discover-copy">
            <span>Discover Rhodes &amp; Kos</span>
            <span>Explore the destinations</span>
          </span>
        </Link>
      </section>

      <section className="tet-bridge tet-shell" aria-label="Top Euro Travel at a glance">
        <div className="tet-bridge__item tet-bridge__year">
          <small>Since</small>
          <strong>1989</strong>
        </div>

        <div className="tet-bridge__item">
          <div className="tet-bridge__copy">
            <small>Expertise</small>
            <strong>Destination Management</strong>
            <span>Ground handling &amp; travel solutions</span>
          </div>
        </div>

        <Link className="tet-bridge__item" to="/rhodes">
          <span className="tet-bridge__thumb">
            <Photo src={travelMedia('old-town.jpg')} alt="Rhodes" />
          </span>
          <span className="tet-bridge__copy">
            <small>Rhodes</small>
            <strong>Local team</strong>
            <span>History, coast &amp; hospitality</span>
          </span>
          <ArrowRight className="tet-bridge__arrow" aria-hidden="true" />
        </Link>

        <Link className="tet-bridge__item" to="/kos">
          <span className="tet-bridge__thumb">
            <Photo src={travelMedia('home-welcome-v2.jpg')} alt="Kos" />
          </span>
          <span className="tet-bridge__copy">
            <small>Kos</small>
            <strong>Local team</strong>
            <span>Relaxed island programmes</span>
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

      <div className="tet-main">
        <section id="our-story" className="tet-intro tet-shell">
          <div className="tet-intro__copy" data-reveal="left">
            <Eyebrow>Who we are</Eyebrow>
            <h2>Destination Management Company in Greece</h2>
            <p className="tet-intro__subtitle">
              Trusted destination management, ground handling and excursion services in Rhodes and Kos.
            </p>
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
            <Link className="tet-inline-link" to="/about">
              Learn more about us <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="tet-intro__facts" data-reveal="rise" aria-label="Top Euro Travel facts">
            <div className="tet-intro__fact">
              <Users aria-hidden="true" />
              <span><strong>100K+</strong><span>Guests annually</span></span>
            </div>
            <div className="tet-intro__fact">
              <Building2 aria-hidden="true" />
              <span><strong>200+</strong><span>Hotel partners</span></span>
            </div>
            <div className="tet-intro__fact">
              <CalendarCheck aria-hidden="true" />
              <span><strong>40+</strong><span>Team members</span></span>
            </div>
            <div className="tet-intro__fact">
              <Headphones aria-hidden="true" />
              <span><strong>24/7</strong><span>Local support</span></span>
            </div>
          </div>

          <div className="tet-intro__visual" data-reveal="right">
            <Photo
              src={travelMedia('home-welcome-v2.jpg')}
              alt="Aegean destination view in Rhodes and Kos"
              loading="eager"
            />
            <Link className="tet-intro__play" to="/destinations">
              <span className="tet-intro__play-circle"><Play aria-hidden="true" /></span>
              <span>Discover our world</span>
            </Link>
          </div>
        </section>

        <section className="tet-destinations tet-shell" aria-labelledby="tet-destinations-title">
          <div className="tet-section-heading" data-reveal="rise">
            <div>
              <Eyebrow>Our destinations</Eyebrow>
              <h2 id="tet-destinations-title">Two Islands. Endless Possibilities.</h2>
            </div>
            <div className="tet-destinations__controls" aria-label="Destination carousel controls">
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

          <div className="tet-destinations__rail" ref={destinationsRailRef}>
            <article className="tet-destination" data-reveal="wipe">
              <Photo src={travelMedia('old-town.jpg')} alt="Rhodes destination" />
              <div className="tet-destination__content">
                <h3>Rhodes</h3>
                <p>History, energy and extraordinary variety.</p>
                <Link className="tet-destination__link" to="/rhodes">
                  Explore Rhodes <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>

            <article className="tet-destination" data-reveal="wipe">
              <Photo src={travelMedia('home-welcome-v2.jpg')} alt="Kos destination" />
              <div className="tet-destination__content">
                <h3>Kos</h3>
                <p>Relaxed island life, beautifully connected.</p>
                <Link className="tet-destination__link" to="/kos">
                  Explore Kos <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="tet-services tet-shell" aria-labelledby="tet-services-title">
          <div className="tet-section-heading" data-reveal="rise">
            <div>
              <Eyebrow>Our services</Eyebrow>
              <h2 id="tet-services-title">We Handle Everything. You Enjoy the Experience.</h2>
            </div>
          </div>

          <div className="tet-services__grid" data-reveal="scale">
            {services.map(({ icon: Icon, title, description }) => (
              <Link className="tet-service" to="/services" key={title}>
                <span className="tet-service__icon"><Icon aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="tet-mice tet-shell" aria-labelledby="tet-mice-title" data-reveal="rise">
          <div className="tet-mice__media tet-mice__media--left">
            <Photo src={travelMedia('home-mice-v2.jpg')} alt="MICE and group travel event" />
          </div>

          <div className="tet-mice__copy">
            <Eyebrow>MICE &amp; Group Travel</Eyebrow>
            <h2 id="tet-mice-title">MICE &amp; Group Travel Solutions</h2>
            <p>
              Whether planning a corporate event, incentive programme or group itinerary, our team delivers tailored
              solutions and seamless execution across Rhodes and Kos, supported by extensive destination knowledge and
              trusted local partnerships.
            </p>
            <Link className="tet-button tet-button--gold" to="/mice-groups">
              Explore MICE &amp; Groups <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="tet-mice__media tet-mice__media--right">
            <Photo src={travelMedia('food.jpg')} alt="Special event dining experience" />
          </div>
        </section>

        <section className="tet-experiences tet-shell" aria-labelledby="tet-experiences-title">
          <div className="tet-section-heading" data-reveal="rise">
            <div>
              <Eyebrow>Experiences</Eyebrow>
              <h2 id="tet-experiences-title">Authentic Local Experiences</h2>
            </div>
            <Link className="tet-inline-link" to="/experiences">
              View all experiences <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="tet-experiences__rail" data-reveal="scale">
            {experiences.map((experience, index) => {
              const Icon = services[index % services.length].icon;
              return (
                <Link className="tet-experience" to="/experiences" key={experience.title}>
                  <Photo src={travelMedia(experience.image)} alt={experience.title} />
                  <span className="tet-experience__icon"><Icon aria-hidden="true" /></span>
                  <strong>{experience.title}</strong>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="tet-partners tet-shell" aria-label="Partner credibility" data-reveal="rise">
          <div className="tet-partners__marks">
            <span className="tet-partners__label">Trusted destination partnerships</span>
            <div className="tet-partners__logos" aria-label="Professional affiliations">
              <span className="tet-partners__logo">HATTA</span>
              <span className="tet-partners__logo">IATA</span>
              <span className="tet-partners__logo">GREECE DMCs</span>
            </div>
          </div>

          <div className="tet-partners__statement">
            <strong>Partnership built to last.</strong>
            <p>Expertise, responsiveness and consistent service delivery across every programme.</p>
          </div>

          <div className="tet-partners__images" aria-hidden="true">
            <div><Photo src={travelMedia('sailing.jpg')} alt="" /></div>
            <div><Photo src={travelMedia('local-life.jpg')} alt="" /></div>
          </div>
        </section>

        <section className="tet-contact" aria-labelledby="tet-contact-title">
          <div className="tet-contact__inner tet-shell" data-reveal="rise">
            <div>
              <Eyebrow>Get in touch</Eyebrow>
              <h2 id="tet-contact-title">Let&apos;s Create Something Amazing.</h2>
            </div>
            <p>
              Whether you are looking for a reliable DMC partner, planning a group programme, organising an event or
              exploring new opportunities in Greece, our team is ready to assist.
            </p>
            <Link className="tet-button tet-button--gold" to="/contact">
              Contact Our Team <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
