// TOP EURO TRAVEL — APPROVED DESIGN 1 — BALANCED DETAILS — FULL REPLACE
// One self-contained file: header + homepage + flat footer + responsive styles + motion.
import { PageSeo } from '@/components/travel/Shared';
import { Image } from '@/components/ui/image';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BedDouble,
  Building2,
  Bus,
  CalendarCheck,
  Globe2,
  Headphones,
  Landmark,
  Leaf,
  MapPinned,
  Menu,
  Play,
  ShoppingBag,
  Sparkles,
  Users,
  Utensils,
  Waves,
  X,
  type LucideIcon
} from 'lucide-react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const MEDIA = {
  logo: 'https://static.wixstatic.com/media/c3c625_668b8529b08249c48f9a8667135d56b1~mv2.png',
  heroDesktop: 'https://video.wixstatic.com/video/5a118b_f3aada5a1ac547358ac6c8b35d60a2a7/1080p/mp4/file.mp4',
  heroMobile: 'https://video.wixstatic.com/video/5a118b_ea5a16aef9d047ddb9126c2f00737d43/1080p/mp4/file.mp4',
  heroPoster: 'https://static.wixstatic.com/media/5a118b_f3aada5a1ac547358ac6c8b35d60a2a7f000.jpg',
  intro: 'https://static.wixstatic.com/media/5a118b_3904ba3b49764d06b35840292a63bc65~mv2.jpg',
  bridgeRhodes: 'https://static.wixstatic.com/media/5a118b_de187b0b55984726b005d3b9069de3a2~mv2.jpg',
  bridgeKos: 'https://static.wixstatic.com/media/5a118b_c6ed3df1d39e464d9c3e39fa3eaa315a~mv2.jpg',
  rhodes: 'https://static.wixstatic.com/media/5a118b_3904ba3b49764d06b35840292a63bc65~mv2.jpg',
  kos: 'https://static.wixstatic.com/media/5a118b_a327428b08f14c5eb3c227b9bd8b225f~mv2.jpg',
  miceLeft: 'https://static.wixstatic.com/media/5a118b_629a41e473a640129be67c1916d49b39~mv2.jpg',

  culture: 'https://static.wixstatic.com/media/5a118b_226ba35bf5df412b9e12dd4da17eb637~mv2.jpg',
  gastronomy: 'https://static.wixstatic.com/media/5a118b_16f5fee14b0b40e6815f82a6ae87e609~mv2.jpg',
  sailing: 'https://static.wixstatic.com/media/5a118b_63f33c17cdd84c7999389621f8b8edbd~mv2.jpg',
  nature: 'https://static.wixstatic.com/media/5a118b_0dc45143f69a46c889756885c764e488~mv2.jpg',
  wellness: 'https://static.wixstatic.com/media/5a118b_ab2ae908eff3464cad53f27ae679ae6a~mv2.jpg',
  shopping: 'https://static.wixstatic.com/media/5a118b_80919dff73954ed2af466817395f8406~mv2.jpg',
} as const;

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  { icon: BedDouble, title: 'Hotel Contracting', description: 'Selected stays and competitive agreements.' },
  { icon: CalendarCheck, title: 'Booking Management', description: 'Reservations coordinated end to end.' },
  { icon: Bus, title: 'Transfers & Transportation', description: 'Reliable airport and island-wide movement.' },
  { icon: Headphones, title: 'Resort Assistance', description: 'Responsive local support throughout every stay.' },
  { icon: MapPinned, title: 'Tours & Excursions', description: 'Authentic experiences shaped by local knowledge.' },
  { icon: Landmark, title: 'MICE & Group Travel', description: 'Meetings, incentives and group programmes.' },
  { icon: Sparkles, title: 'Weddings & Special Events', description: 'Distinctive occasions delivered with precision.' },
  { icon: Globe2, title: 'XML API & Agent Portal', description: 'Connected technology for partner operations.' },
];


const experiences = [
  { icon: Landmark, title: 'Culture & Heritage', image: MEDIA.culture },
  { icon: Utensils, title: 'Gastronomy', image: MEDIA.gastronomy },
  { icon: Waves, title: 'Yachting & Sailing', image: MEDIA.sailing },
  { icon: Leaf, title: 'Nature & Adventure', image: MEDIA.nature },
  { icon: Sparkles, title: 'Wellness & Relaxation', image: MEDIA.wellness },
  { icon: ShoppingBag, title: 'Shopping & Lifestyle', image: MEDIA.shopping },
] as const;

const testimonials = [
  {
    quote: 'Everything was well organized and the crew was friendly and welcoming. Highly recommended!',
    name: 'Amy',
    location: 'United Kingdom',
    experience: 'Lindos boat trip',
    source: 'Verified booking · GetYourGuide',
    sourceUrl: 'https://www.getyourguide.com/afandou-l160512/rhodes-lindos-boat-tour-with-swim-stop-and-hotel-pickup-t927010/',
  },
  {
    quote: 'Everything was great. The driver was punctual and very nice.',
    name: 'Sandra',
    location: 'Greece',
    experience: 'Private airport transfer',
    source: 'Verified booking · GetYourGuide',
    sourceUrl: 'https://www.getyourguide.com/rhodes-l409/diagoras-airport-private-one-way-transfer-tofrom-rhodes-t55732/',
  },
  {
    quote: 'Well organised, beautiful trip — would definitely book again.',
    name: 'Aisling',
    location: 'United Kingdom',
    experience: 'Symi & St. George\'s Bay',
    source: 'Verified booking · GetYourGuide',
    sourceUrl: 'https://www.getyourguide.com/rhodes-l409/rhodes-symi-island-st-george-bay-dutch-guided-boat-tour-t1243190/',
  },
] as const;

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Services', to: '/services' },
  { label: 'MICE', to: '/mice-groups' },
  { label: 'Experiences', to: '/experiences' },
  { label: 'Excursions', to: '/excursions' },
] as const;

const HOME_STYLES = String.raw`
:root {
  --tet-navy: #082f53;
  --tet-navy-deep: #061f38;
  --tet-navy-soft: #0f416c;
  --tet-gold: #d9a354;
  --tet-gold-deep: #b87b25;
  --tet-paper: #fffdf9;
  --tet-paper-soft: #faf7f1;
  --tet-copy: #4d6072;
  --tet-line: rgba(8, 47, 83, 0.13);
  --tet-shell: min(calc(100% - clamp(40px, 8.2vw, 122px)), 1580px);
  --tet-bridge: min(calc(100% - clamp(112px, 20vw, 330px)), 1360px);
  --tet-shadow: 0 18px 48px rgba(6, 31, 56, 0.14);
}


.tet-d1,
.tet-d1 * {
  box-sizing: border-box;
}

.tet-d1 {
  position: relative;
  overflow: clip;
  color: var(--tet-navy);
  background:
    radial-gradient(circle at -8% 48%, rgba(199, 218, 232, 0.32), transparent 23%),
    radial-gradient(circle at 108% 58%, rgba(229, 216, 194, 0.28), transparent 25%),
    linear-gradient(180deg, #fffefa 0%, #fbf9f5 52%, #fffdfa 100%);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.55;
}

.tet-d1 h1,
.tet-d1 h2,
.tet-d1 h3,
.tet-d1 p {
  margin-top: 0;
}

.tet-d1 h1,
.tet-d1 h2 {
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 500;
  letter-spacing: -0.038em;
}

.tet-d1 a {
  color: inherit;
  text-decoration: none;
}

.tet-shell {
  width: var(--tet-shell);
  margin-inline: auto;
}

.tet-eyebrow {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 9px !important;
  color: var(--tet-gold-deep);
  font-size: clamp(10px, 0.62vw, 12px);
  font-weight: 800;
  letter-spacing: 0.12em;
  line-height: 1.2;
  text-transform: uppercase;
}

.tet-eyebrow::before {
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 7px solid currentColor;
  content: '';
  transform: translateY(-0.5px);
}

.tet-hero .tet-eyebrow::before {
  display: none;
}

.tet-button {
  min-height: 43px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 10px 20px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 750;
  line-height: 1;
  transition: transform 220ms ease, background 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
}

.tet-button svg,
.tet-text-link svg {
  width: 15px;
  height: 15px;
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
  color: #16314b;
  background: linear-gradient(135deg, #f2ca82 0%, #dda34e 100%);
  box-shadow: 0 11px 26px rgba(190, 129, 37, 0.22);
}

.tet-button--outline {
  border-color: rgba(255, 255, 255, 0.67);
  color: #fff;
  background: rgba(5, 31, 55, 0.14);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
}

.tet-text-link {
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 3px;
  border-bottom: 1px solid rgba(8, 47, 83, 0.32);
  color: var(--tet-navy);
  font-size: clamp(10px, 0.58vw, 11px);
  font-weight: 800;
  letter-spacing: 0.04em;
  line-height: 1.2;
  text-transform: uppercase;
}

/* Exact approved transparent header, using the real Top Euro Travel logo. */
.tet-topbar {
  display: none !important;
  width: 100%;
  height: clamp(68px, 5vw, 82px);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;
  color: #fff;
  transition: background 260ms ease, box-shadow 260ms ease, backdrop-filter 260ms ease;
}

.tet-topbar.is-scrolled {
  position: fixed;
  height: 68px;
  background: rgba(5, 31, 55, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 10px 30px rgba(2, 19, 34, 0.19);
  backdrop-filter: blur(17px) saturate(1.08);
  -webkit-backdrop-filter: blur(17px) saturate(1.08);
}

.tet-topbar__inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.tet-brand {
  flex: 0 0 auto;
}

.tet-brand img {
  width: clamp(116px, 8.6vw, 156px);
  height: auto;
  display: block;
  filter: drop-shadow(0 3px 10px rgba(0, 20, 39, 0.28));
}

.tet-nav-wrap {
  display: flex;
  align-items: center;
  gap: clamp(26px, 3vw, 54px);
}

.tet-nav {
  display: flex;
  align-items: center;
  gap: clamp(18px, 1.65vw, 31px);
}

.tet-nav a {
  position: relative;
  padding: 27px 0 22px;
  color: rgba(255, 255, 255, 0.94);
  font-size: clamp(9.5px, 0.64vw, 11px);
  font-weight: 600;
  white-space: nowrap;
}

.tet-nav a::after {
  height: 1px;
  position: absolute;
  right: 50%;
  bottom: 17px;
  left: 50%;
  background: #efc16e;
  content: '';
  transition: right 200ms ease, left 200ms ease;
}

.tet-nav a:hover::after,
.tet-nav a:focus-visible::after,
.tet-nav a:first-child::after {
  right: 0;
  left: 0;
}

.tet-topbar__actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.tet-language {
  color: rgba(255, 255, 255, 0.88);
  font-size: 10px;
  font-weight: 700;
}

.tet-agent-pill,
.tet-contact-pill {
  min-height: 38px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 17px;
  border-radius: 999px;
  color: #17314a;
  background: linear-gradient(135deg, #f2ca82 0%, #dda34e 100%);
  box-shadow: 0 9px 22px rgba(190, 129, 37, 0.2);
  font-size: 10px;
  font-weight: 750;
}

.tet-menu-button {
  width: 42px;
  height: 42px;
  border: 1px solid rgba(255, 255, 255, 0.46);
  border-radius: 50%;
  display: none;
  place-items: center;
  color: #fff;
  background: rgba(5, 31, 55, 0.16);
  cursor: pointer;
}

.tet-menu-button svg {
  width: 20px;
}

/* Hero geometry follows the approved 1024 × 1536 mockup ratio. */
.tet-hero {
  height: clamp(430px, 42.6vw, 1080px);
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: #fff;
  background: var(--tet-navy-deep);
}

.tet-hero__video {
  width: 100%;
  height: 104%;
  position: absolute;
  inset: -2% 0 0;
  z-index: -3;
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
    linear-gradient(90deg, rgba(3, 25, 47, 0.83) 0%, rgba(4, 31, 56, 0.62) 42%, rgba(4, 31, 56, 0.12) 75%, rgba(4, 31, 56, 0.02) 100%),
    linear-gradient(180deg, rgba(1, 18, 34, 0.28) 0%, transparent 54%, rgba(2, 20, 38, 0.22) 100%);
}

.tet-hero__content {
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  padding-top: clamp(68px, 5vw, 88px);
}

.tet-hero__copy {
  max-width: min(760px, 58vw);
  margin-left: 0;
  transform: translateY(clamp(24px, 2.4vw, 60px));
}

.tet-hero .tet-eyebrow {
  margin-bottom: 13px !important;
  color: rgba(255, 255, 255, 0.96);
}

.tet-hero h1 {
  max-width: 880px;
  margin-bottom: 18px;
  color: #fff;
  font-size: clamp(54px, 4.65vw, 90px);
  line-height: 0.92;
  text-wrap: balance;
}

.tet-hero h1 span {
  display: block;
}

.tet-hero__lead {
  max-width: 600px;
  margin-bottom: 23px !important;
  color: rgba(255, 255, 255, 0.94);
  font-size: clamp(15px, 0.95vw, 19px);
  line-height: 1.52;
}

.tet-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
}

.tet-hero__scroll {
  position: absolute;
  bottom: clamp(54px, 5vw, 78px);
  left: clamp(30px, 4.6vw, 76px);
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.84);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.16em;
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
  right: clamp(55px, 8vw, 135px);
  bottom: clamp(48px, 4.5vw, 70px);
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  font-size: 9px;
  font-weight: 750;
  letter-spacing: 0.04em;
  line-height: 1.25;
  text-transform: uppercase;
}

.tet-play-circle {
  width: 43px;
  height: 43px;
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: rgba(5, 31, 55, 0.18);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  transition: transform 220ms ease, background 220ms ease;
}

.tet-play-circle svg {
  width: 15px;
  fill: currentColor;
}

.tet-hero__discover:hover .tet-play-circle,
.tet-intro__play:hover .tet-play-circle {
  background: rgba(218, 162, 78, 0.94);
  transform: scale(1.05);
}

@keyframes tet-scroll-bob {
  0%, 100% { transform: translateY(-2px); }
  50% { transform: translateY(5px); }
}

/* Home hero palette and typography — matched to About / Destinations / Island pages. */
.tet-hero {
  color: #F8F6F2;
  background: #1F3A5F;
  font-family: "Manrope", Arial, Helvetica, sans-serif;
}

.tet-hero__overlay {
  background:
    linear-gradient(90deg, rgba(31, 58, 95, 0.92) 0%, rgba(31, 58, 95, 0.72) 42%, rgba(32, 40, 51, 0.20) 75%, rgba(32, 40, 51, 0.04) 100%),
    linear-gradient(180deg, rgba(32, 40, 51, 0.32) 0%, transparent 54%, rgba(31, 58, 95, 0.28) 100%);
}

.tet-hero h1 {
  color: #F8F6F2;
  font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
  font-weight: 500;
  letter-spacing: -0.038em;
}

.tet-hero h1 span:last-child {
  color: #C8922D;
}

.tet-hero .tet-eyebrow,
.tet-hero__lead,
.tet-hero__scroll,
.tet-hero__discover,
.tet-hero .tet-button {
  color: #F8F6F2;
  font-family: "Manrope", Arial, Helvetica, sans-serif;
}

.tet-hero .tet-button--gold {
  color: #FFFFFF;
  background: #C8922D;
  box-shadow: 0 11px 26px rgba(200, 146, 45, 0.24);
}

.tet-hero .tet-button--outline {
  border-color: rgba(248, 246, 242, 0.72);
  color: #F8F6F2;
  background: rgba(31, 58, 95, 0.18);
}

.tet-hero__discover:hover .tet-play-circle,
.tet-hero__discover:focus-visible .tet-play-circle {
  background: #C8922D;
}

/* The floating bridge is the visual joint between hero and content. */
.tet-bridge {
  width: var(--tet-bridge);
  min-height: clamp(82px, 6.5vw, 116px);
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: 0.78fr 1.16fr 1.15fr 1.15fr 0.86fr;
  margin: clamp(-45px, -3.2vw, -35px) auto 0;
  border: 1px solid rgba(255, 255, 255, 0.77);
  border-radius: clamp(14px, 1.05vw, 20px);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.97);
  box-shadow: var(--tet-shadow);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.tet-bridge__item {
  justify-content: center;
  text-align: center;
  min-width: 0;
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: clamp(11px, 0.95vw, 24px) clamp(13px, 1.35vw, 34px);
  border-left: 1px solid var(--tet-gold);
}

.tet-bridge__item:first-child {
  margin-top: 0;
    border-left: 0;
}

.tet-bridge__year {
  width: 100%;
  align-items: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 0;
}

.tet-bridge small {
  display: block;
  color: var(--tet-gold-deep);
  font-size: clamp(8.5px, 0.55vw, 13px);
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.tet-bridge__year strong {
  color: var(--tet-gold-deep);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(28px, 2vw, 52px);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 0.95;
}

.tet-bridge__thumb {
  width: clamp(35px, 2.6vw, 66px);
  height: clamp(35px, 2.6vw, 66px);
  flex: 0 0 auto;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(6, 31, 56, 0.14);
}

.tet-bridge__thumb img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.tet-bridge__copy {
  min-width: 0;
  display: grid;
  gap: 1px;
}

.tet-bridge__copy strong {
  color: var(--tet-navy-deep);
  font-size: clamp(11px, 0.7vw, 14px);
  font-weight: 750;
  line-height: 1.25;
}

.tet-bridge__copy span {
  color: #667481;
  font-size: clamp(9px, 0.56vw, 11px);
  line-height: 1.25;
}

.tet-bridge__arrow {
  width: 15px;
  position: absolute;
  right: clamp(12px, 1vw, 22px);
  margin-left: 0;
  color: var(--tet-gold-deep);
  transition: transform 220ms ease;
}

.tet-bridge__item:hover .tet-bridge__arrow {
  transform: translateX(4px);
}

.tet-bridge__metric > svg {
  width: 23px;
  color: var(--tet-gold-deep);
  stroke-width: 1.5;
}

.tet-bridge__metric strong {
  display: block;
  color: var(--tet-navy-deep);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(22px, 1.55vw, 40px);
  font-weight: 500;
  line-height: 0.95;
}

.tet-bridge__metric span span {
  display: block;
  color: #677481;
  font-size: clamp(9px, 0.56vw, 11px);
}

.tet-body {
  position: relative;
  isolation: isolate;
  padding-top: clamp(28px, 2.25vw, 48px);
}

.tet-body__wash {
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

.tet-body__wash svg {
  width: 100%;
  height: 100%;
  display: block;
  opacity: 0.23;
}

/* Copy left, facts centre, large visual right — exactly as the approved mockup. */
.tet-intro {
  display: grid;
  grid-template-columns: minmax(270px, 0.88fr) minmax(125px, 0.34fr) minmax(480px, 1.68fr);
  align-items: center;
  gap: clamp(28px, 2.35vw, 52px);
  padding-top: clamp(10px, 1.1vw, 30px);
  padding-bottom: clamp(34px, 2.65vw, 54px);
}

.tet-intro__copy h2 {
  max-width: 510px;
  margin-bottom: 12px;
  color: var(--tet-navy-deep);
  font-size: clamp(38px, 2.75vw, 56px);
  line-height: 0.97;
}

.tet-intro__copy > p:not(.tet-eyebrow) {
  max-width: 520px;
  margin-bottom: 7px;
  color: var(--tet-copy);
  font-size: clamp(14px, 0.84vw, 17px);
  line-height: 1.55;
}

.tet-intro__signature {
  width: fit-content;
  position: relative;
  display: grid;
  margin: 14px 0 10px;
  color: var(--tet-gold-deep);
  font-family: 'Brush Script MT', 'Segoe Script', 'Snell Roundhand', cursive;
  font-size: clamp(26px, 1.75vw, 35px);
  font-weight: 400;
  line-height: 1;
  transform: rotate(-2deg);
}

.tet-intro__signature svg {
  width: 100%;
  height: 16px;
  margin-top: -2px;
  overflow: visible;
}

.tet-intro__signature path {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: 1.5;
}

.tet-intro__facts {
  display: grid;
  align-content: center;
}

.tet-intro__fact {
  display: grid;
  grid-template-columns: 22px minmax(0, 1fr);
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid var(--tet-line);
  align-items: center;
}

.tet-intro__fact:last-child {
  border-bottom: 0;
}

.tet-intro__fact svg {
  width: 19px;
  color: var(--tet-gold-deep);
  stroke-width: 1.55;
}

.tet-intro__fact strong {
  display: block;
  color: var(--tet-navy-deep);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(19px, 1.42vw, 36px);
  font-weight: 500;
  line-height: 0.94;
}

.tet-intro__fact span span {
  display: block;
  margin-top: 3px;
  color: #667481;
  font-size: clamp(10px, 0.58vw, 12px);
  font-weight: 650;
  letter-spacing: 0.03em;
  line-height: 1.25;
  text-transform: uppercase;
}

.tet-intro__visual {
  aspect-ratio: 2.16 / 1;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: #d9e3e9;
  box-shadow: 0 14px 34px rgba(8, 38, 64, 0.12);
}

.tet-intro__visual img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 850ms cubic-bezier(.2,.7,.2,1), filter 500ms ease;
}

.tet-intro__visual::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(5, 30, 55, 0.02), rgba(4, 30, 54, 0.12));
  content: '';
}

.tet-intro__visual:hover img {
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
  font-weight: 750;
  line-height: 1.15;
  transform: translate(-50%, -50%);
}

.tet-intro__play .tet-play-circle {
  width: 47px;
  height: 47px;
}

.tet-section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 12px;
}

.tet-section-heading h2 {
  margin-bottom: 0;
  color: var(--tet-navy-deep);
  font-size: clamp(28px, 2.35vw, 62px);
  line-height: 1;
}

.tet-heading-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.tet-heading-control {
  width: 38px;
  height: 38px;
  border: 1px solid rgba(184, 123, 37, 0.38);
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: var(--tet-gold-deep);
  background: rgba(255, 253, 249, 0.78);
  transition: color 200ms ease, background 200ms ease, transform 200ms ease;
}

.tet-heading-control svg {
  width: 16px;
}

.tet-heading-control--back svg {
  transform: rotate(180deg);
}

.tet-heading-control:hover,
.tet-heading-control:focus-visible {
  color: #fff;
  background: var(--tet-gold-deep);
  transform: translateY(-2px);
}

/* Two compact destination panels, no oversized section. */
.tet-destinations {
  padding-bottom: clamp(30px, 2.3vw, 44px);
}

.tet-destinations__rail {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.tet-destination {
  height: clamp(172px, 13.4vw, 246px);
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  color: #fff;
  box-shadow: 0 12px 28px rgba(7, 31, 55, 0.12);
}

.tet-destination img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 720ms cubic-bezier(.2,.7,.2,1), filter 420ms ease;
}

.tet-destination::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(4, 29, 52, 0.82), rgba(4, 31, 57, 0.28) 62%, transparent);
  content: '';
}

.tet-destination__copy {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  padding: clamp(16px, 1.4vw, 24px);
}

.tet-destination h3 {
  margin-bottom: 4px;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(16px, 0.98vw, 19px);
  font-weight: 750;
}

.tet-destination p {
  margin-bottom: 9px;
  color: rgba(255, 255, 255, 0.93);
  font-size: clamp(12px, 0.72vw, 14px);
  line-height: 1.35;
}

.tet-destination__link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding-bottom: 2px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.62);
  color: #fff;
  font-size: 10px;
  font-weight: 750;
}

.tet-destination:hover img {
  filter: saturate(1.07);
  transform: scale(1.045);
}

/* Eight services form one connected operational line — never eight cards. */
.tet-services {
  padding-bottom: clamp(30px, 2.2vw, 42px);
}

.tet-services > h2 {
  margin-bottom: clamp(17px, 1.45vw, 24px);
  color: var(--tet-navy-deep);
  font-size: clamp(31px, 2.3vw, 47px);
  line-height: 1;
}

.tet-services__grid {
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  border-top: 1px solid rgba(184, 123, 37, 0.34);
}

.tet-service {
  min-width: 0;
  position: relative;
  display: grid;
  justify-items: center;
  align-content: start;
  padding: 17px 8px 5px;
  text-align: center;
}

.tet-service + .tet-service {
  border-left: 1px solid var(--tet-gold);
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
  transition: background 200ms ease, box-shadow 200ms ease;
}

.tet-service__icon {
  height: clamp(31px, 2.5vw, 62px);
  display: grid;
  place-items: center;
  margin-bottom: 5px;
  color: var(--tet-gold-deep);
  transition: transform 220ms ease, color 220ms ease;
}

.tet-service__icon svg {
  width: clamp(21px, 2.1vw, 48px);
  height: clamp(21px, 2.1vw, 48px);
  stroke-width: 1.45;
}

.tet-service h3 {
  min-height: 34px;
  display: grid;
  place-items: center;
  margin-bottom: 3px;
  color: var(--tet-navy-deep);
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(10.5px, 0.68vw, 13.5px);
  font-weight: 750;
  line-height: 1.2;
}

.tet-service p {
  max-width: 138px;
  margin-bottom: 0;
  color: #6b7884;
  font-size: clamp(9.5px, 0.57vw, 11.5px);
  line-height: 1.32;
}

.tet-service:hover::before {
  background: var(--tet-gold-deep);
  box-shadow: 0 0 0 5px rgba(184, 123, 37, 0.11);
}

.tet-service:hover .tet-service__icon {
  color: var(--tet-navy-deep);
  transform: translateY(-3px);
}

/* Compact, three-part MICE banner, matching the approved mockup. */
.tet-mice {
  height: clamp(180px, 12vw, 235px);
  display: grid;
  grid-template-columns: minmax(0, 1.48fr) minmax(320px, 0.98fr) minmax(190px, 0.5fr);
  margin-bottom: clamp(28px, 2.1vw, 40px);
  border-radius: 8px;
  overflow: hidden;
  color: #fff;
  background: var(--tet-navy-deep);
  box-shadow: 0 14px 34px rgba(7, 31, 55, 0.15);
}

.tet-mice__media {
  position: relative;
  overflow: hidden;
  height: clamp(320px, 44vw, 460px);
}

.tet-mice__media img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 750ms cubic-bezier(.2,.7,.2,1), filter 450ms ease;
}

.tet-mice__media--left::after,
.tet-mice__media--right::after {
  position: absolute;
  inset: 0;
  content: '';
}

.tet-mice__media--left::after {
  background: linear-gradient(90deg, transparent 60%, rgba(6, 31, 56, 0.75));
}

.tet-mice__media--right::after {
  background: linear-gradient(90deg, rgba(6, 31, 56, 0.7), rgba(6, 31, 56, 0.05));
}

.tet-mice__copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(15px, 1.45vw, 25px);
  padding-left: calc(clamp(15px, 1.45vw, 25px) + 20px) !important;
  background: var(--tet-navy-deep);
}

.tet-mice__copy .tet-eyebrow {
  margin-bottom: 6px !important;
  color: #dba54f;
}

.tet-mice__copy h2 {
  margin-bottom: 6px;
  color: #fff;
  font-size: clamp(28px, 1.9vw, 39px);
  line-height: 1;
}

.tet-mice__copy p:not(.tet-eyebrow) {
  margin-bottom: 9px;
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(11px, 0.66vw, 14px);
  line-height: 1.45;
}

.tet-mice__copy .tet-button {
  width: fit-content;
  min-height: 32px;
  padding: 7px 12px;
  font-size: 9.5px;
}

.tet-mice:hover img {
  filter: saturate(1.06);
  transform: scale(1.035);
}

/* Six short experience frames, like a cinematic contact sheet. */
.tet-experiences {
  padding-top: 2px;
  padding-bottom: 16px;
}

.tet-experiences .tet-section-heading {
  margin-bottom: 15px;
}

.tet-experiences__rail {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 9px;
}

.tet-experience {
  height: clamp(150px, 11.1vw, 205px);
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  color: #fff;
  background: #d7e0e5;
}

.tet-experience img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 680ms cubic-bezier(.2,.7,.2,1), filter 420ms ease;
}

.tet-experience::after {
  position: absolute;
  inset: 28% 0 0;
  background: linear-gradient(transparent, rgba(2, 23, 43, 0.9));
  content: '';
}

.tet-experience__icon {
  width: 23px;
  height: 23px;
  position: absolute;
  top: 8px;
  left: 8px;
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
  width: 12px;
}

.tet-experience strong {
  position: absolute;
  right: 9px;
  bottom: 8px;
  left: 9px;
  z-index: 2;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(15px, 0.96vw, 19px);
  font-weight: 500;
  line-height: 1;
  text-shadow: 0 2px 10px rgba(2, 18, 33, 0.5);
}

.tet-experience:hover img {
  filter: saturate(1.08);
  transform: scale(1.055);
}

/* Partner proof stays compact, image-free and split by the brand-gold hairline. */
.tet-partners {
  min-height: clamp(115px, 9.43vw, 172.5px);
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(260px, 0.75fr);
  border: 1px solid rgba(8, 47, 83, 0.09);
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  background: rgba(250, 247, 242, 0.96);
  box-shadow: 0 9px 25px rgba(7, 31, 55, 0.07);
}

.tet-partners__marks {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: clamp(13px, 1.35vw, 22px);
  padding: 12px 20px;
}

.tet-partners__label {
  width: 100%;
  color: #8a8f93;
  font-size: 9px;
  font-weight: 750;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.tet-partners__marks strong {
  color: #5a6874;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(11px, 0.82vw, 15px);
  font-weight: 600;
  line-height: 1;
}

.tet-partners__statement {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px 18px;
  border-left: 1px solid var(--tet-gold);
}

.tet-partners__statement strong {
  color: var(--tet-gold-deep);
  font-size: clamp(10px, 0.62vw, 15px);
}

.tet-partners__rating { display: flex; align-items: center; gap: 8px; }
.tet-partners__rating > span { color: #dba54f; font-size: clamp(10px, 0.7vw, 17px); letter-spacing: 0.08em; }
.tet-partners__statement small { margin-top: 3px; color: #5d6b77; font-size: clamp(7px, 0.45vw, 11px); }

.tet-partners__statement p {
  margin: 3px 0 0;
  color: #526575;
  font-size: 8px;
  line-height: 1.4;
}

 /* Straight, flat footer: same compact content density, no scenic background. */
.tet-flat-footer {
  color: #fff;
  background: linear-gradient(90deg, #072640 0%, #0a3a61 100%);
}

.tet-flat-footer__main {
  min-height: clamp(105px, 8.5vw, 200px);
  display: grid;
  grid-template-columns: minmax(175px, 0.72fr) minmax(120px, 0.48fr) minmax(210px, 0.82fr) minmax(150px, 0.58fr) auto;
  align-items: center;
  gap: clamp(20px, 2.8vw, 46px);
  padding-block: clamp(14px, 1.2vw, 24px);
}

.tet-footer-brand img {
  width: clamp(112px, 8vw, 205px);
  height: auto;
  display: block;
  margin-bottom: 8px;
  filter: brightness(0) invert(1) opacity(0.94);
}

.tet-footer-brand p,
.tet-footer-column a,
.tet-footer-contact span {
  color: rgba(255, 255, 255, 0.73);
  font-size: 10px;
  line-height: 1.45;
}

.tet-footer-column {
  display: grid;
  gap: 4px;
}

.tet-footer-column strong,
.tet-footer-contact strong,
.tet-footer-social strong {
  margin-bottom: 3px;
  color: #fff;
  font-size: 9px;
  font-weight: 750;
}

.tet-footer-column a:hover {
  color: #efc16e;
}

.tet-footer-contact {
  display: grid;
  gap: 5px;
}

.tet-footer-contact span {
  display: flex;
  align-items: center;
  gap: 7px;
}

.tet-footer-contact svg {
  width: 13px;
  color: #efc16e;
}

.tet-footer-social {
  display: grid;
  gap: 8px;
}

.tet-social-row {
  display: flex;
  gap: 7px;
}

.tet-social-row a {
  width: 28px;
  height: 28px;
  border: 1px solid rgba(255, 255, 255, 0.34);
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 9px;
  font-weight: 750;
  transition: background 200ms ease, color 200ms ease, transform 200ms ease;
}

.tet-social-row a:hover {
  color: var(--tet-navy-deep);
  background: #efc16e;
  transform: translateY(-2px);
}

.tet-footer-cta {
  min-height: 38px;
  padding-inline: 16px;
  font-size: 9px;
}

.tet-flat-footer__bottom {
  min-height: clamp(30px, 2.3vw, 52px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.58);
  font-size: 8px;
}

.tet-flat-footer__legal {
  display: flex;
  gap: 18px;
}

.tet-flat-footer__legal a:hover {
  color: #efc16e;
}

.tet-motion-ready {
  opacity: 0;
  will-change: transform, opacity;
}

/* Large-screen refinement without widening the approved composition. */
@media (min-width: 1680px) {
  .tet-nav { gap: 28px; }
  .tet-nav a { font-size: 11px; }
  .tet-button { min-height: 46px; padding: 11px 22px; font-size: 12px; }
  .tet-contact-pill { min-height: 44px; padding-inline: 20px; font-size: 11px; }
  .tet-intro__fact { grid-template-columns: 26px minmax(0, 1fr); gap: 10px; padding-block: 10px; }
  .tet-intro__fact svg { width: 23px; }
  .tet-destination__copy { padding: 24px 27px; }
  .tet-service__icon svg { width: 35px; height: 35px; }
  .tet-experience__icon { width: 29px; height: 29px; top: 11px; left: 11px; }
  .tet-experience__icon svg { width: 15px; }
  .tet-partners__marks { padding: 17px 25px; }
  .tet-partners__marks strong { font-size: 16px; }
  .tet-partners__statement { padding: 17px 24px; }
  .tet-social-row a { width: 33px; height: 33px; }
}

@media (max-width: 1120px) {
  .tet-nav {
    gap: 16px;
  }

  .tet-nav a {
    font-size: 9px;
  }

  .tet-intro {
    grid-template-columns: minmax(0, 0.9fr) minmax(125px, 0.36fr) minmax(380px, 1.55fr);
    gap: 24px;
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
    min-width: 145px;
    flex: 0 0 145px;
    scroll-snap-align: start;
  }

  .tet-mice {
    grid-template-columns: minmax(0, 1.15fr) minmax(310px, 0.85fr);
  }

  .tet-mice__media--right {
    display: none;
  }

  .tet-experiences__rail {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .tet-partners {
    grid-template-columns: 1.2fr 0.8fr;
  }

   .tet-flat-footer__main {
    grid-template-columns: 1fr 0.55fr 1fr 0.65fr;
  }

  .tet-footer-cta {
    grid-column: 1 / -1;
    width: fit-content;
  }
}

@media (max-width: 900px) {
  :root {
    --tet-shell: calc(100% - 36px);
    --tet-bridge: calc(100% - 48px);
  }

  .tet-topbar__inner {
    width: calc(100% - 28px);
  }

  .tet-menu-button {
    display: grid;
  }

  .tet-nav-wrap {
    width: calc(100% - 28px);
    position: absolute;
    top: 70px;
    right: 14px;
    display: none;
    align-items: stretch;
    flex-direction: column;
    gap: 12px;
    padding: 18px;
    border: 1px solid rgba(8, 47, 83, 0.1);
    border-radius: 14px;
    color: var(--tet-navy-deep);
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 20px 46px rgba(7, 31, 55, 0.18);
  }

  .tet-nav-wrap.is-open {
    display: flex;
  }

  .tet-nav {
    align-items: stretch;
    flex-direction: column;
    gap: 0;
  }

  .tet-nav a {
    padding: 10px 0;
    color: var(--tet-navy-deep);
    font-size: 12px;
  }

  .tet-nav a::after {
    display: none;
  }

  .tet-topbar__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .tet-language {
    color: var(--tet-navy-deep);
  }

  .tet-agent-pill,
  .tet-contact-pill {
    justify-content: center;
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
    margin-top: 0;
    border-left: 0;
  }

  .tet-bridge__metric {
    grid-column: 1 / -1;
    justify-content: center;
  }

  .tet-intro {
    grid-template-columns: minmax(0, 1fr) minmax(150px, 0.42fr);
  }

  .tet-intro__visual {
    grid-column: 1 / -1;
  }

  .tet-destinations__rail {
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
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
    min-height: 240px;
  }

  .tet-mice__media--left::after {
    background: linear-gradient(0deg, rgba(6, 31, 56, 0.86), transparent 66%);
  }

  .tet-mice__copy {
    margin-top: -58px;
    padding: 72px 22px 26px;
  }

  .tet-flat-footer__main {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 650px) {
  :root {
    --tet-shell: calc(100% - 30px);
    --tet-bridge: calc(100% - 30px);
  }

  .tet-brand img {
    width: 112px;
  }

  .tet-hero {
    height: max(650px, 90svh);
    align-items: flex-end;
  }

  .tet-hero__video {
    object-position: 62% center;
  }

  .tet-hero__overlay {
    background:
      linear-gradient(0deg, rgba(3, 25, 47, 0.96) 0%, rgba(4, 31, 56, 0.66) 58%, rgba(4, 31, 56, 0.18) 100%),
      linear-gradient(90deg, rgba(3, 25, 47, 0.38), transparent 82%);
  }

  .tet-hero__content {
    align-items: flex-end;
    padding-top: 120px;
    padding-bottom: 104px;
  }

  .tet-hero__copy {
    max-width: none;
    margin-left: 0;
  }

  .tet-hero h1 {
    font-size: clamp(46px, 14vw, 64px);
    line-height: 0.94;
  }

  .tet-hero__lead {
    font-size: 14px;
  }

  .tet-hero__scroll {
    display: none;
  }

  .tet-hero__actions {
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
    min-height: 76px;
    padding: 11px 12px;
  }

  .tet-bridge__item:nth-child(2) {
    display: none;
  }

  .tet-bridge__item:nth-child(3) {
    border-top: 0;
    border-left: 1px solid var(--tet-gold);
  }

  .tet-bridge__item:nth-child(4) {
    margin-top: 0;
    border-left: 0;
  }

  .tet-bridge__metric {
    grid-column: auto;
  }

  .tet-bridge__copy span {
    display: none;
  }

  .tet-body {
    padding-top: 26px;
  }

  .tet-intro {
    grid-template-columns: 1fr;
    gap: 18px;
    padding-top: 8px;
  }

  .tet-intro__copy h2 {
    font-size: clamp(36px, 10.5vw, 49px);
  }

  .tet-intro__facts {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid var(--tet-line);
    border-bottom: 1px solid var(--tet-line);
  }

  .tet-intro__fact {
    padding: 11px 7px;
    border-bottom: 0;
  }

  .tet-intro__fact:nth-child(even) {
    border-left: 1px solid var(--tet-gold);
  }

  .tet-intro__visual {
    aspect-ratio: 1.55 / 1;
  }

  .tet-section-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 7px;
  }

  .tet-destination {
    min-width: 86vw;
    height: 218px;
    flex-basis: 86vw;
  }

  .tet-services__grid,
  .tet-experiences__rail {
    margin-right: -15px;
  }

  .tet-service {
    min-width: 138px;
    flex-basis: 138px;
  }

  .tet-mice__media--left {
    min-height: 220px;
  }

  .tet-mice__copy h2 {
    font-size: 31px;
  }

  .tet-experiences__rail {
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
  }

  .tet-experience {
    min-width: 185px;
    height: 138px;
    flex: 0 0 185px;
    scroll-snap-align: start;
  }

  .tet-partners {
    grid-template-columns: 1fr;
  }

  .tet-partners__statement {
    border-top: 1px solid var(--tet-gold);
    margin-top: 0;
    border-left: 0;
  }

  .tet-flat-footer__main {
    grid-template-columns: 1fr;
    gap: 18px;
    padding-block: 25px;
  }

  .tet-flat-footer__bottom {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
    padding-block: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tet-d1 *,
  .tet-d1 *::before,
  .tet-d1 *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* HOME VISUAL SYSTEM V2
   Presentation-only alignment with About, Destinations, Rhodes and Kos. */

:root {
  --tet-navy: #1f3a5f;
  --tet-navy-deep: #1f3a5f;
  --tet-navy-soft: #294b76;
  --tet-gold: #c8922d;
  --tet-gold-deep: #c8922d;
  --tet-paper: #f8f6f2;
  --tet-paper-soft: #f8f6f2;
  --tet-copy: #202833;
  --tet-line: rgba(31, 58, 95, 0.14);
  --tet-shell: min(calc(100% - clamp(40px, 8.4vw, 144px)), 1460px);
  --tet-bridge: var(--tet-shell);
  --tet-shadow: 0 18px 42px rgba(31, 58, 95, 0.1);
}

.tet-d1 {
  color: var(--tet-copy);
  background: var(--tet-paper);
  font-family: "Manrope", Inter, "Segoe UI", Arial, sans-serif;
  line-height: 1.6;
}

.tet-d1 h1,
.tet-d1 h2 {
  color: var(--tet-navy);
  font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
  font-weight: 500;
  letter-spacing: -0.035em;
}

.tet-d1 h3,
.tet-d1 p,
.tet-d1 a,
.tet-d1 button,
.tet-d1 small,
.tet-d1 strong {
  font-family: inherit;
}

.tet-body__wash {
  display: none;
}

.tet-eyebrow {
  gap: 13px;
  margin-bottom: 16px !important;
  color: var(--tet-gold);
  font-size: clamp(11px, 0.72vw, 13px);
  font-weight: 800;
  letter-spacing: 0.16em;
}

.tet-eyebrow::before {
  width: 28px;
  height: 1px;
  flex: 0 0 28px;
  border: 0;
  background: currentColor;
  content: '';
  transform: none;
}

.tet-hero .tet-eyebrow::before {
  display: block;
}

.tet-button {
  min-height: 50px;
  padding: 0 25px;
  border-radius: 5px;
  font-family: "Manrope", Inter, "Segoe UI", Arial, sans-serif;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.055em;
  box-shadow: none;
}

.tet-button--gold {
  border-color: var(--tet-gold);
  color: #fff;
  background: var(--tet-gold);
  box-shadow: 0 12px 28px rgba(200, 146, 45, 0.18);
}

.tet-button--gold:hover,
.tet-button--gold:focus-visible {
  border-color: #b97f1f;
  background: #b97f1f;
}

.tet-button--outline {
  border-color: rgba(248, 246, 242, 0.7);
  border-radius: 5px;
  color: var(--tet-paper);
  background: rgba(31, 58, 95, 0.18);
}

.tet-text-link {
  gap: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(200, 146, 45, 0.75);
  color: var(--tet-navy);
  font-size: 11px;
  letter-spacing: 0.07em;
}

/* The shared header keeps its transparent hero state and matches About after scroll. */
.site-header.is-scrolled {
  border-bottom: 1px solid rgba(31, 58, 95, 0.13) !important;
  background: rgba(248, 246, 242, 0.96) !important;
  box-shadow: 0 12px 34px rgba(31, 58, 95, 0.12) !important;
  backdrop-filter: blur(18px) saturate(1.08) !important;
  -webkit-backdrop-filter: blur(18px) saturate(1.08) !important;
}

.site-header.is-scrolled .main-nav__link {
  color: var(--tet-navy) !important;
}

.site-header.is-scrolled .main-nav__link::after {
  background: var(--tet-gold) !important;
}

.site-header.is-scrolled .header-contact-btn {
  border-color: var(--tet-gold) !important;
  color: #fff !important;
  background: var(--tet-gold) !important;
}

.site-header.is-scrolled .mobile-menu-button {
  border-color: rgba(31, 58, 95, 0.18) !important;
  color: var(--tet-navy) !important;
  background: transparent !important;
}

/* Hero: same content and geometry, unified type, colour and controls. */
.tet-hero {
  color: var(--tet-paper);
  background: var(--tet-navy);
  font-family: "Manrope", Inter, "Segoe UI", Arial, sans-serif;
}

.tet-hero__overlay {
  background:
    linear-gradient(90deg, rgba(31, 58, 95, 0.91) 0%, rgba(31, 58, 95, 0.7) 43%, rgba(32, 40, 51, 0.18) 76%, rgba(32, 40, 51, 0.03) 100%),
    linear-gradient(180deg, rgba(32, 40, 51, 0.3) 0%, transparent 55%, rgba(31, 58, 95, 0.3) 100%);
}

.tet-hero h1 {
  color: var(--tet-paper);
  font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
  font-weight: 500;
}

.tet-hero h1 span:last-child {
  color: var(--tet-gold);
}

.tet-hero .tet-eyebrow,
.tet-hero__lead,
.tet-hero__scroll,
.tet-hero__discover {
  color: var(--tet-paper);
  font-family: "Manrope", Inter, "Segoe UI", Arial, sans-serif;
}

.tet-hero__lead {
  font-size: clamp(15px, 1vw, 18px);
  line-height: 1.65;
}

.tet-play-circle {
  border-color: rgba(248, 246, 242, 0.68);
  background: rgba(31, 58, 95, 0.18);
}

.tet-hero__discover:hover .tet-play-circle,
.tet-intro__play:hover .tet-play-circle {
  background: var(--tet-gold);
}

/* Credentials strip: flat editorial bridge rather than a separate glass card. */
.tet-bridge {
  min-height: 98px;
  margin-top: -34px;
  border: 1px solid var(--tet-line);
  border-radius: 5px;
  background: rgba(248, 246, 242, 0.98);
  box-shadow: 0 15px 36px rgba(31, 58, 95, 0.09);
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}

.tet-bridge__item {
  justify-content: center;
  text-align: center;
  padding: 18px clamp(16px, 1.55vw, 26px);
  border-left-color: var(--tet-gold);
}

.tet-bridge small,
.tet-bridge__copy strong,
.tet-bridge__copy span,
.tet-bridge__metric span span {
  font-family: "Manrope", Inter, "Segoe UI", Arial, sans-serif;
}

.tet-bridge small {
  color: var(--tet-gold);
  font-size: 11px;
  line-height: 1.4;
  letter-spacing: 0.11em;
}

.tet-bridge__year strong,
.tet-bridge__metric strong {
  color: var(--tet-gold);
  font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
  font-weight: 500;
  line-height: 0.95;
}

.tet-bridge__year strong {
  font-size: clamp(34px, 2.4vw, 40px);
}

.tet-bridge__metric strong {
  font-size: clamp(30px, 2.05vw, 36px);
}

.tet-bridge__copy strong {
  color: var(--tet-navy);
  font-size: 15px;
  line-height: 1.35;
}

.tet-bridge__copy span,
.tet-bridge__metric span span {
  color: rgba(32, 40, 51, 0.68);
  font-size: 12px;
  line-height: 1.45;
}

.tet-bridge__thumb {
  box-shadow: none;
}

.tet-bridge__metric > svg,
.tet-bridge__arrow {
  color: var(--tet-gold);
}

.tet-body {
  padding-top: 0;
  background: var(--tet-paper);
}

/* Who we are: same scale, whitespace and media treatment as About. */
.tet-intro {
  grid-template-columns: minmax(0, 1fr) minmax(155px, 0.4fr) minmax(0, 1fr);
  gap: clamp(38px, 4.2vw, 60px);
  padding-top: clamp(76px, 7vw, 104px);
  padding-bottom: clamp(76px, 7vw, 104px);
}

.tet-intro__copy h2 {
  margin-bottom: 28px;
  color: var(--tet-navy);
  font-size: clamp(46px, 4vw, 56px);
  line-height: 0.98;
}

.tet-intro__copy > p:not(.tet-eyebrow) {
  margin-bottom: 17px;
  color: var(--tet-copy);
  font-size: clamp(16px, 1.3vw, 18px);
  line-height: 1.7;
}

.tet-intro__signature {
  margin: 23px 0 18px;
  color: var(--tet-gold);
  font-size: clamp(28px, 2.5vw, 36px);
}

.tet-intro__facts {
  border-top: 1px solid var(--tet-line);
  border-bottom: 1px solid var(--tet-line);
}

.tet-intro__fact {
  grid-template-columns: 26px minmax(0, 1fr);
  gap: 11px;
  padding: 19px 0;
  border-bottom-color: var(--tet-line);
}

.tet-intro__fact svg {
  width: 21px;
  color: var(--tet-gold);
}

.tet-intro__fact strong {
  color: var(--tet-navy);
  font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
  font-size: clamp(28px, 2.4vw, 34px);
}

.tet-intro__fact span span {
  margin-top: 5px;
  color: rgba(32, 40, 51, 0.7);
  font-family: "Manrope", Inter, "Segoe UI", Arial, sans-serif;
  font-size: 11px;
  letter-spacing: 0.06em;
}

.tet-intro__visual {
  aspect-ratio: 1.17 / 1;
  border-radius: 14px;
  background: #dce4e8;
  box-shadow: 0 24px 58px rgba(31, 58, 95, 0.14);
}

.tet-intro__visual::after {
  background: linear-gradient(90deg, rgba(31, 58, 95, 0.02), rgba(31, 58, 95, 0.17));
}

/* Shared editorial heading scale. */
.tet-section-heading {
  margin-bottom: 28px;
}

.tet-section-heading h2,
.tet-services > h2 {
  color: var(--tet-navy);
  font-size: clamp(46px, 4vw, 56px);
  line-height: 0.98;
}

.tet-heading-control {
  width: 42px;
  height: 42px;
  border-color: rgba(200, 146, 45, 0.46);
  color: var(--tet-gold);
  background: transparent;
}

.tet-heading-control:hover,
.tet-heading-control:focus-visible {
  color: #fff;
  background: var(--tet-gold);
}

/* Destinations: same image language as Rhodes and Kos. */
.tet-destinations {
  padding-top: 18px;
  padding-bottom: clamp(84px, 7.2vw, 108px);
}

.tet-destinations__rail {
  gap: 16px;
}

.tet-destination {
  height: clamp(290px, 25vw, 340px);
  border-radius: 10px;
  box-shadow: none;
}

.tet-destination::after {
  background: linear-gradient(180deg, rgba(31, 58, 95, 0.06) 18%, rgba(31, 58, 95, 0.86) 100%);
}

.tet-destination__copy {
  width: 100%;
  padding: clamp(24px, 2.5vw, 34px);
}

.tet-destination h3 {
  margin-bottom: 8px;
  color: #fff;
  font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
  font-size: clamp(30px, 3vw, 40px);
  font-weight: 500;
  line-height: 1;
}

.tet-destination p {
  margin-bottom: 14px;
  font-family: "Manrope", Inter, "Segoe UI", Arial, sans-serif;
  font-size: 15px;
  line-height: 1.55;
}

.tet-destination__link {
  font-family: "Manrope", Inter, "Segoe UI", Arial, sans-serif;
  font-size: 11px;
  letter-spacing: 0.06em;
}

.tet-destination:hover img {
  filter: saturate(1.04) brightness(0.93);
  transform: scale(1.035);
}

/* Services: open 4 x 2 operational grid, not eight compressed mini cards. */
.tet-services {
  padding-top: clamp(72px, 6.5vw, 94px);
  padding-bottom: clamp(86px, 7.5vw, 112px);
  border-top: 1px solid var(--tet-line);
}

.tet-services > h2 {
  max-width: 830px;
  margin-bottom: 40px;
}

.tet-services__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid rgba(200, 146, 45, 0.5);
  border-bottom: 1px solid var(--tet-line);
}

.tet-service {
  min-width: 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  padding: 34px 28px 38px;
  text-align: left;
}

.tet-service + .tet-service {
  margin-top: 0;
    border-left: 0;
}

.tet-service:not(:nth-child(4n + 1)) {
  border-left: 1px solid var(--tet-gold);
}

.tet-service:nth-child(n + 5) {
  border-top: 1px solid var(--tet-line);
}

.tet-service::before {
  display: none;
}

.tet-service__icon {
  width: 46px;
  height: 46px;
  margin-bottom: 22px;
  border: 1px solid rgba(200, 146, 45, 0.25);
  border-radius: 50%;
  color: var(--tet-navy);
  background: rgba(200, 146, 45, 0.08);
}

.tet-service__icon svg {
  width: 22px;
  height: 22px;
  stroke-width: 1.55;
}

.tet-service h3 {
  min-height: 0;
  display: block;
  margin-bottom: 10px;
  color: var(--tet-navy);
  font-family: "Manrope", Inter, "Segoe UI", Arial, sans-serif;
  font-size: 15px;
  font-weight: 750;
  line-height: 1.35;
}

.tet-service p {
  max-width: none;
  color: rgba(32, 40, 51, 0.72);
  font-size: 14px;
  line-height: 1.65;
}

.tet-service:hover .tet-service__icon {
  color: var(--tet-gold);
  transform: translateY(-3px);
}

/* MICE: keep the three-part composition, use the common media/panel treatment. */
.tet-mice {
  height: clamp(360px, 29vw, 410px);
  grid-template-columns: minmax(0, 1.2fr) minmax(360px, 0.95fr) minmax(220px, 0.62fr);
  margin-bottom: 0;
  border: 1px solid rgba(31, 58, 95, 0.14);
  border-radius: 14px;
  background: var(--tet-navy);
  box-shadow: none;
}

.tet-mice__media--left::after {
  background: linear-gradient(90deg, transparent 55%, rgba(31, 58, 95, 0.8));
}

.tet-mice__media--right::after {
  background: linear-gradient(90deg, rgba(31, 58, 95, 0.82), rgba(31, 58, 95, 0.08));
}

.tet-mice__copy {
  padding: 48px;
  background: var(--tet-navy);
  min-height: 360px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tet-mice__copy .tet-eyebrow {
  color: var(--tet-gold);
}

.tet-mice__copy h2 {
  margin-bottom: 16px;
  color: #fff;
  font-size: 48px;
  line-height: 0.98;
}

.tet-mice__copy p:not(.tet-eyebrow) {
  margin-bottom: 24px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 16px;
  line-height: 1.65;
}

.tet-mice__copy .tet-button {
  min-height: 48px;
  padding: 0 24px;
  font-size: 11px;
}

/* Experiences: the same 3 x 2 gallery rhythm and hover language as Island pages. */
.tet-experiences {
  padding-top: clamp(88px, 7.5vw, 112px);
  padding-bottom: clamp(88px, 7.5vw, 112px);
}

.tet-experiences .tet-section-heading {
  margin-bottom: 30px;
}

.tet-experiences__rail {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.tet-experience {
  height: clamp(235px, 20vw, 278px);
  border-radius: 10px;
  color: #fff;
  background: #dce4e8;
}

.tet-d1 .tet-experience {
  color: #fff;
}

.tet-experience::after {
  inset: 20% 0 0;
  background: linear-gradient(transparent, rgba(31, 58, 95, 0.92));
}

.tet-experience__icon {
  width: 38px;
  height: 38px;
  top: 16px;
  left: 16px;
  border-color: rgba(248, 246, 242, 0.65);
  border-radius: 50%;
  background: rgba(31, 58, 95, 0.32);
}

.tet-experience__icon svg {
  width: 17px;
  stroke-width: 1.5;
}

.tet-experience strong {
  right: 22px;
  bottom: 20px;
  left: 22px;
  font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
  font-size: clamp(25px, 2.4vw, 32px);
  font-weight: 500;
  color: #fff;
  text-shadow: 0 2px 14px rgba(17, 34, 57, 0.5);
}

.tet-experience:hover img {
  filter: saturate(1.04) brightness(0.9);
  transform: scale(1.035);
}

/* Open editorial testimonial composition: no cards, imagery or rating badges. */
.tet-testimonials {
  min-height: 242px;
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(420px, 1.08fr);
  margin-top: clamp(38px, 4vw, 64px);
  border-top: 1px solid var(--tet-gold);
  border-bottom: 1px solid var(--tet-line);
}

.tet-testimonials__intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 38px clamp(34px, 4.2vw, 68px) 38px 0;
}

.tet-testimonials__eyebrow {
  margin-bottom: 12px;
  color: var(--tet-gold-deep);
  font-size: 12px;
  font-weight: 800;
  line-height: 1.5;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.tet-testimonials__intro h2 {
  max-width: 480px;
  margin-bottom: 18px;
  color: var(--tet-navy);
  font-size: clamp(34px, 3.15vw, 52px);
  line-height: 0.96;
}

.tet-testimonials__rule {
  width: min(250px, 64%);
  height: 1px;
  margin-bottom: 18px;
  background: var(--tet-gold);
}

.tet-testimonials__network {
  display: flex;
  flex-wrap: wrap;
  gap: 7px 0;
  max-width: 540px;
  color: rgba(8, 47, 83, 0.66);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.105em;
  line-height: 1.6;
  text-transform: uppercase;
}

.tet-testimonials__network span + span::before {
  margin-inline: 9px;
  color: var(--tet-gold);
  content: '·';
}

.tet-testimonials__stage {
  position: relative;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 34px 0 30px clamp(38px, 4vw, 66px);
  border-left: 1px solid rgba(8, 47, 83, 0.12);
}

.tet-testimonials__mark {
  position: absolute;
  top: 22px;
  left: clamp(20px, 2vw, 32px);
  color: rgba(217, 163, 84, 0.38);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(58px, 5.2vw, 88px);
  line-height: 1;
  pointer-events: none;
}

.tet-testimonials__slides {
  display: grid;
}

.tet-testimonials__slide {
  grid-area: 1 / 1;
  min-width: 0;
  visibility: hidden;
  pointer-events: none;
}

.tet-testimonials__slide.is-active {
  visibility: visible;
  pointer-events: auto;
}

.tet-testimonials__quote {
  position: relative;
  min-height: 92px;
  margin: 0 0 17px;
  color: var(--tet-navy);
  font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
  font-size: clamp(30px, 2.35vw, 40px);
  font-weight: 500;
  line-height: 1.2;
}

.tet-testimonials__slide.is-active .tet-testimonials__quote {
  animation: tet-testimonial-in 520ms cubic-bezier(.2,.72,.2,1) both;
}

.tet-testimonials__credit {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 4px 8px;
  margin-bottom: 22px;
}

.tet-testimonials__credit strong {
  color: var(--tet-navy);
  font-size: 13px;
  line-height: 1.55;
  letter-spacing: 0.04em;
}

.tet-testimonials__credit span,
.tet-testimonials__source {
  color: rgba(8, 47, 83, 0.64);
  font-size: 11.5px;
  line-height: 1.55;
  letter-spacing: 0.04em;
}

.tet-testimonials__source {
  width: 100%;
  transition: color 180ms ease;
}

.tet-testimonials__source:hover {
  color: var(--tet-gold-deep);
}

.tet-testimonials__controls {
  display: grid;
  grid-template-columns: minmax(110px, 1fr) auto auto;
  align-items: center;
  gap: 18px;
}

.tet-testimonials__progress {
  height: 1px;
  overflow: hidden;
  background: rgba(8, 47, 83, 0.16);
}

.tet-testimonials__progress span {
  display: block;
  width: 100%;
  height: 100%;
  background: var(--tet-gold);
  transform-origin: left center;
  animation: tet-testimonial-progress 6s linear both;
}

.tet-testimonials.is-paused .tet-testimonials__progress span {
  animation-play-state: paused;
}

.tet-testimonials__dots,
.tet-testimonials__arrows {
  display: flex;
  align-items: center;
  gap: 8px;
}

.tet-testimonials__dot {
  width: 6px;
  height: 6px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: rgba(8, 47, 83, 0.24);
  cursor: pointer;
  transition: background 180ms ease, transform 180ms ease;
}

.tet-testimonials__dot.is-active {
  background: var(--tet-gold);
  transform: scale(1.35);
}

.tet-testimonials__arrow {
  width: 32px;
  height: 32px;
  padding: 0;
  display: grid;
  place-items: center;
  border: 1px solid rgba(8, 47, 83, 0.2);
  border-radius: 50%;
  color: var(--tet-navy);
  background: transparent;
  cursor: pointer;
  transition: border-color 180ms ease, color 180ms ease, transform 180ms ease;
}

.tet-testimonials__arrow:hover {
  border-color: var(--tet-gold);
  color: var(--tet-gold-deep);
  transform: translateX(2px);
}

.tet-testimonials__arrow--previous:hover {
  transform: translateX(-2px);
}

.tet-testimonials__arrow svg {
  width: 14px;
  height: 14px;
}

.tet-testimonials__arrow--previous svg {
  transform: rotate(180deg);
}

@keyframes tet-testimonial-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes tet-testimonial-progress {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

@media (max-width: 900px) {
  .tet-testimonials {
    grid-template-columns: 1fr;
  }

  .tet-testimonials__intro {
    padding: 34px 0 28px;
  }

  .tet-testimonials__stage {
    padding: 34px 0 34px clamp(28px, 7vw, 54px);
    border-top: 1px solid var(--tet-gold);
    border-left: 0;
  }

  .tet-testimonials__mark {
    top: 26px;
    left: 0;
  }
}

@media (max-width: 520px) {
  .tet-testimonials {
    min-height: 0;
    margin-top: 32px;
  }

  .tet-testimonials__intro h2 {
    font-size: 38px;
  }

  .tet-testimonials__quote {
    min-height: 118px;
    font-size: 30px;
  }

  .tet-testimonials__controls {
    grid-template-columns: 1fr auto;
    gap: 14px;
  }

  .tet-testimonials__dots {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tet-testimonials__quote,
  .tet-testimonials__progress span {
    animation: none;
  }
}

 /* Footer: same colour, typography and breathing room as the global system. */
.tet-flat-footer {
  color: #fff;
  background: var(--tet-navy);
  font-family: "Manrope", Inter, "Segoe UI", Arial, sans-serif;
}

.tet-flat-footer__main {
  min-height: 258px;
  grid-template-columns: minmax(230px, 0.85fr) minmax(145px, 0.5fr) minmax(245px, 0.8fr) minmax(155px, 0.5fr) auto;
  gap: clamp(28px, 3vw, 46px);
  padding-block: 48px;
}

.tet-footer-brand img {
  width: 150px;
  margin-bottom: 18px;
}

.tet-footer-brand p,
.tet-footer-column a,
.tet-footer-contact span {
  color: rgba(255, 255, 255, 0.76);
  font-size: 13px;
  line-height: 1.65;
}

.tet-footer-column {
  gap: 8px;
}

.tet-footer-column strong,
.tet-footer-contact strong,
.tet-footer-social strong {
  margin-bottom: 8px;
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.05em;
}

.tet-footer-contact {
  gap: 9px;
}

.tet-footer-contact svg {
  width: 15px;
  color: var(--tet-gold);
}

.tet-social-row {
  gap: 9px;
}

.tet-social-row a {
  width: 34px;
  height: 34px;
  font-size: 11px;
}

.tet-social-row a:hover {
  color: var(--tet-navy);
  background: var(--tet-gold);
}

.tet-footer-cta {
  min-height: 48px;
  padding-inline: 20px;
  font-size: 10px;
}

.tet-flat-footer__bottom {
  min-height: 58px;
  color: rgba(255, 255, 255, 0.62);
  font-size: 11px;
}

.tet-flat-footer__legal {
  gap: 24px;
}

@media (max-width: 1100px) {
  :root {
    --tet-shell: calc(100% - clamp(40px, 8.4vw, 144px));
    --tet-bridge: var(--tet-shell);
  }

  .tet-intro {
    grid-template-columns: minmax(0, 1fr) minmax(180px, 0.46fr);
  }

  .tet-intro__visual {
    grid-column: 1 / -1;
    aspect-ratio: 1.8 / 1;
  }

  .tet-services__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .tet-service:not(:nth-child(4n + 1)) {
    margin-top: 0;
    border-left: 0;
  }

  .tet-service:nth-child(even) {
    border-left: 1px solid var(--tet-gold);
  }

  .tet-service:nth-child(n + 3) {
    border-top: 1px solid var(--tet-line);
  }

  .tet-mice {
    height: auto;
    grid-template-columns: minmax(0, 1.1fr) minmax(340px, 0.9fr);
  }

  .tet-mice__media--left {
    min-height: 330px;
  }

  .tet-mice__media--right {
    display: none;
  }

  .tet-experiences__rail {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .tet-partners {
    grid-template-columns: 1.15fr 0.85fr;
  }

   .tet-flat-footer__main {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .tet-footer-cta {
    grid-column: 1 / -1;
    width: fit-content;
  }
}

@media (max-width: 760px) {
  :root {
    --tet-shell: calc(100% - clamp(40px, 8.4vw, 144px));
    --tet-bridge: var(--tet-shell);
  }

  .site-header.is-scrolled .main-nav {
    background: rgba(248, 246, 242, 0.99) !important;
  }

  .tet-eyebrow {
    font-size: 10px;
  }

  .tet-hero .tet-eyebrow::before {
    width: 22px;
    flex-basis: 22px;
  }

  .tet-button {
    min-height: 48px;
  }

  .tet-bridge {
    min-height: 0;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: -30px;
  }

  .tet-bridge__item {
    min-height: 82px;
    padding: 13px;
  }

  .tet-intro {
    grid-template-columns: 1fr;
    gap: 34px;
    padding-block: 70px;
  }

  .tet-intro__facts {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .tet-intro__fact:nth-child(even) {
    border-left: 1px solid var(--tet-gold);
    padding-left: 16px;
  }

  .tet-intro__visual {
    aspect-ratio: 1.45 / 1;
  }

  .tet-section-heading h2,
  .tet-services > h2,
  .tet-intro__copy h2 {
    font-size: clamp(39px, 10.5vw, 50px);
  }

  .tet-destinations {
    padding-bottom: 76px;
  }

  .tet-destinations__rail {
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
  }

  .tet-destination {
    min-width: 86vw;
    height: 270px;
    flex: 0 0 86vw;
    scroll-snap-align: center;
  }

  .tet-services {
    padding-block: 70px 82px;
  }

  .tet-services__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-right: 0;
  }

  .tet-service {
    min-width: 0;
    padding: 28px 18px 32px;
  }

  .tet-mice {
    grid-template-columns: 1fr;
    border-radius: 10px;
  }

  .tet-mice__media--left {
    min-height: 250px;
  }

  .tet-mice__copy {
    margin-top: -62px;
    padding: 92px 24px 32px;
  }

  .tet-experiences {
    padding-block: 78px;
  }

  .tet-experiences__rail {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-right: 0;
  }

  .tet-experience {
    min-width: 0;
    height: 210px;
    flex: none;
  }

  .tet-partners {
    grid-template-columns: 1fr;
  }

  .tet-partners__marks {
    padding: 28px 0;
    border-right: 0;
    border-bottom: 0;
  }

  .tet-partners__statement {
    border-top: 0;
    border-bottom: 0;
    margin-top: 0;
    border-left: 0;
  }

  .tet-partners__statement {
    border-top: 1px solid var(--tet-gold);
  }

  .tet-flat-footer__main {
    grid-template-columns: 1fr;
    gap: 28px;
    padding-block: 42px;
  }

  .tet-flat-footer__bottom {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    padding-block: 18px;
  }
}

@media (max-width: 520px) {
  .tet-services__grid,
  .tet-experiences__rail {
    grid-template-columns: 1fr;
  }

  .tet-service:nth-child(even) {
    margin-top: 0;
    border-left: 0;
  }

  .tet-service:nth-child(n + 2) {
    border-top: 1px solid var(--tet-line);
  }

  .tet-experience {
    height: 235px;
  }
}

/* Single-image MICE layout sized to the approved compact red-frame reference. */
.tet-mice {
  position: relative;
  isolation: isolate;
  width: calc(var(--tet-shell) - clamp(18px, 1.3vw, 24px));
  height: 235px;
  min-height: 235px;
  grid-template-columns: minmax(0, 1.8fr) minmax(0, 3.2fr);
  grid-template-rows: minmax(235px, 1fr);
  margin-bottom: clamp(36px, 3vw, 52px);
  border: 1px solid rgba(31, 58, 95, 0.14);
  border-radius: 14px;
  overflow: hidden;
  background: var(--tet-navy);
  box-shadow: none;
}

.tet-mice__media {
  grid-row: 1;
  height: 100%;
  min-height: 235px;
  margin: 0;
  border-radius: 0;
}

.tet-mice__media--left {
  grid-column: 2;
  z-index: 1;
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 0, 0, 0.16) 6%,
    rgba(0, 0, 0, 0.48) 14%,
    rgba(0, 0, 0, 0.78) 24%,
    #000 34%,
    #000 100%
  );
  mask-image: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 0, 0, 0.16) 6%,
    rgba(0, 0, 0, 0.48) 14%,
    rgba(0, 0, 0, 0.78) 24%,
    #000 34%,
    #000 100%
  );
}

.tet-mice__media--left::after {
  position: absolute;
  content: '';
  top: 0;
  right: auto;
  bottom: 0;
  left: 0;
  width: 34%;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  background: linear-gradient(90deg, rgba(31, 58, 95, 0.58) 0%, rgba(31, 58, 95, 0.28) 42%, rgba(31, 58, 95, 0.08) 74%, transparent 100%);
  -webkit-mask-image: linear-gradient(90deg, #000 0%, #000 46%, rgba(0, 0, 0, 0.58) 72%, transparent 100%);
  mask-image: linear-gradient(90deg, #000 0%, #000 46%, rgba(0, 0, 0, 0.58) 72%, transparent 100%);
}

.tet-mice__copy {
  grid-column: 1;
  grid-row: 1;
  min-height: 235px;
  margin: 0;
  padding: clamp(15px, 1.45vw, 25px);
  padding-left: calc(clamp(15px, 1.45vw, 25px) + 20px) !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--tet-navy);
  z-index: 3;
}

.tet-mice__copy h2 {
  max-width: 430px;
  margin-bottom: 6px;
  font-size: clamp(28px, 1.9vw, 39px);
  line-height: 1;
}

.tet-mice__copy p:not(.tet-eyebrow) {
  max-width: 420px;
  margin-bottom: 9px;
  font-size: clamp(11px, 0.66vw, 14px);
  line-height: 1.45;
}

@media (max-width: 1100px) {
  .tet-mice {
    height: 220px;
    min-height: 220px;
    grid-template-rows: minmax(220px, 1fr);
  }

  .tet-mice__media,
  .tet-mice__copy {
    min-height: 220px;
  }

  .tet-mice__copy {
    padding: clamp(14px, 2vw, 20px);
  }
}

@media (max-width: 760px) {
  .tet-mice {
    width: var(--tet-shell);
    height: auto;
    min-height: 0;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto clamp(220px, 42vw, 280px);
    border-radius: 12px;
  }

  .tet-mice__copy {
    grid-column: 1;
    grid-row: 1;
    min-height: 0;
    margin: 0;
    padding: 34px clamp(24px, 6vw, 44px) 36px;
  }

  .tet-mice__copy h2,
  .tet-mice__copy p:not(.tet-eyebrow) {
    max-width: 620px;
  }

  .tet-mice__media {
    grid-row: 2;
    height: 100%;
    min-height: 0;
  }

  .tet-mice__media--left {
    grid-column: 1;
    -webkit-mask-image: linear-gradient(
      180deg,
      transparent 0%,
      rgba(0, 0, 0, 0.22) 9%,
      rgba(0, 0, 0, 0.62) 20%,
      #000 34%,
      #000 100%
    );
    mask-image: linear-gradient(
      180deg,
      transparent 0%,
      rgba(0, 0, 0, 0.22) 9%,
      rgba(0, 0, 0, 0.62) 20%,
      #000 34%,
      #000 100%
    );
  }

  .tet-mice__media--left::after {
    top: 0;
    right: 0;
    bottom: auto;
    left: 0;
    width: 100%;
    height: 38%;
    -webkit-backdrop-filter: blur(9px);
    backdrop-filter: blur(9px);
    background: linear-gradient(180deg, rgba(31, 58, 95, 0.55) 0%, rgba(31, 58, 95, 0.22) 48%, transparent 100%);
    -webkit-mask-image: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.62) 68%, transparent 100%);
    mask-image: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.62) 68%, transparent 100%);
  }
}

@media (max-width: 520px) {
  .tet-mice {
    grid-template-rows: auto 190px;
    margin-bottom: 34px;
    border-radius: 10px;
  }

  .tet-mice__copy {
    padding: 28px 22px 30px;
  }

  .tet-mice__copy h2 {
    font-size: clamp(36px, 11vw, 42px);
  }

  .tet-mice__copy p:not(.tet-eyebrow) {
    font-size: 15px;
  }
}


/* Mobile homepage bridge — balanced 2×2 hierarchy */
@media (max-width: 760px) {
  .tet-bridge {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-areas:
      "year metric"
      "rhodes kos";
  }

  .tet-bridge__item {
    min-height: 82px;
    padding: 13px 24px;
    justify-content: center;
    text-align: center;
  }

  .tet-bridge__item:nth-child(1) {
    grid-area: year;
    border-top: 0;
    border-left: 0;
  }

  .tet-bridge__item:nth-child(2) {
    display: none;
  }

  .tet-bridge__item:nth-child(3) {
    grid-area: rhodes;
    border-top: 1px solid var(--tet-line);
    border-left: 0;
  }

  .tet-bridge__item:nth-child(4) {
    grid-area: kos;
    border-top: 1px solid var(--tet-line);
    border-left: 1px solid var(--tet-gold);
  }

  .tet-bridge__item:nth-child(5) {
    grid-area: metric;
    grid-column: auto;
    border-top: 0;
    border-left: 1px solid var(--tet-gold);
  }

  .tet-bridge__thumb {
    display: none;
  }

  .tet-bridge__copy {
    width: 100%;
    justify-items: center;
    text-align: center;
  }

  .tet-bridge__metric {
    justify-content: center;
    gap: 0;
  }

  .tet-bridge__metric > svg {
    display: none;
  }

  .tet-bridge__metric > span {
    width: 100%;
    text-align: center;
  }
}

/* Mobile services carousel — three compact pages with autoplay and direct navigation. */
.tet-services__carousel {
  display: none;
}

@media (max-width: 760px) {
  .tet-services__grid--desktop {
    display: none;
  }

  .tet-services__carousel {
    width: 100%;
    display: block;
  }

  .tet-services__viewport {
    overflow: hidden;
    border-top: 1px solid rgba(200, 146, 45, 0.5);
    border-bottom: 1px solid var(--tet-line);
    touch-action: pan-y;
  }

  .tet-services__track {
    display: flex;
    align-items: stretch;
    will-change: transform;
    transition: transform 520ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .tet-services__slide {
    min-width: 100%;
    min-height: 230px;
    flex: 0 0 100%;
    display: grid;
    place-items: center;
  }

  .tet-services__slide .tet-service {
    width: 100%;
    max-width: 340px;
    min-width: 0;
    min-height: 156px;
    display: grid;
    grid-template-columns: 46px minmax(0, 1fr);
    grid-template-rows: auto auto;
    column-gap: 15px;
    align-items: center;
    padding: 28px 20px;
    border: 0;
    text-align: left;
  }

  .tet-services__slide .tet-service:first-child {
    border-top: 0;
  }

  .tet-services__slide .tet-service__icon {
    width: 44px;
    height: 44px;
    grid-column: 1;
    grid-row: 1 / span 2;
    margin: 0;
  }

  .tet-services__slide .tet-service__icon svg {
    width: 22px;
    height: 22px;
  }

  .tet-services__slide .tet-service h3 {
    min-height: 0;
    display: block;
    grid-column: 2;
    grid-row: 1;
    margin: 0 0 4px;
    font-size: 15px;
    line-height: 1.35;
  }

  .tet-services__slide .tet-service p {
    max-width: none;
    grid-column: 2;
    grid-row: 2;
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
  }

  .tet-services__dots {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    margin-top: 16px;
  }

  .tet-services__dot {
    width: 30px;
    height: 30px;
    position: relative;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .tet-services__dot::before {
    width: 7px;
    height: 7px;
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgba(8, 47, 83, 0.34);
    border-radius: 50%;
    background: transparent;
    content: '';
    transform: translate(-50%, -50%);
    transition: transform 180ms ease, background-color 180ms ease, border-color 180ms ease;
  }

  .tet-services__dot.is-active::before {
    border-color: var(--tet-gold);
    background: var(--tet-gold);
    transform: translate(-50%, -50%) scale(1.25);
  }

  .tet-services__dot:focus-visible {
    outline: 2px solid var(--tet-gold);
    outline-offset: -4px;
    border-radius: 50%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tet-services__track {
    transition: none;
  }
}

/* Mobile MICE copy — centered hierarchy inside the navy panel. */
@media (max-width: 760px) {
  .tet-mice__copy {
    align-items: center;
    text-align: center;
  }

  .tet-mice__copy .tet-eyebrow {
    width: 100%;
    justify-content: center;
  }

  .tet-mice__copy h2,
  .tet-mice__copy p:not(.tet-eyebrow) {
    width: 100%;
    margin-inline: auto;
  }

  .tet-mice__copy .tet-button {
    align-self: center;
  }
}

/* Mobile experiences — compact one-card carousel with a preview edge. */
.tet-experiences__dots,
.tet-experiences__all-mobile {
  display: none;
}

@media (max-width: 520px) {
  .tet-experiences {
    padding-block: 58px 64px;
  }

  .tet-experiences .tet-section-heading {
    margin-bottom: 20px;
  }

  .tet-experiences__all-desktop {
    display: none;
  }

  .tet-experiences__carousel {
    width: calc(100% + 18px);
    overflow: hidden;
  }

  .tet-experiences__rail {
    width: 100%;
    display: flex;
    grid-template-columns: none;
    gap: 12px;
    margin-right: 0;
    overflow: visible;
    transition: transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
    will-change: transform;
  }

  .tet-experiences__rail[data-active='0'] {
    transform: translateX(0);
  }

  .tet-experiences__rail[data-active='1'] {
    transform: translateX(calc(-100% + 20px));
  }

  .tet-experiences__rail[data-active='2'] {
    transform: translateX(calc(-200% + 40px));
  }

  .tet-experiences__rail[data-active='3'] {
    transform: translateX(calc(-300% + 60px));
  }

  .tet-experiences__rail[data-active='4'] {
    transform: translateX(calc(-400% + 80px));
  }

  .tet-experiences__rail[data-active='5'] {
    transform: translateX(calc(-500% + 100px));
  }

  .tet-experience {
    min-width: calc(100% - 32px);
    height: clamp(218px, 58vw, 238px);
    flex: 0 0 calc(100% - 32px);
    border-radius: 12px;
  }

  .tet-experiences__dots {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    margin-top: 14px;
  }

  .tet-experiences__dot {
    width: 30px;
    height: 30px;
    position: relative;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .tet-experiences__dot::before {
    width: 7px;
    height: 7px;
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgba(8, 47, 83, 0.34);
    border-radius: 50%;
    background: transparent;
    content: '';
    transform: translate(-50%, -50%);
    transition: transform 180ms ease, background-color 180ms ease, border-color 180ms ease;
  }

  .tet-experiences__dot.is-active::before {
    border-color: var(--tet-gold);
    background: var(--tet-gold);
    transform: translate(-50%, -50%) scale(1.25);
  }

  .tet-experiences__dot:disabled {
    cursor: default;
    opacity: 0.32;
  }

  .tet-experiences__dot:focus-visible {
    outline: 2px solid var(--tet-gold);
    outline-offset: -4px;
    border-radius: 50%;
  }

  .tet-experiences__all-mobile {
    width: fit-content;
    display: inline-flex;
    margin: 5px auto 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tet-experiences__rail {
    transition: none;
  }
}


/* Mobile testimonials — compact editorial layout with dots instead of oversized arrows. */
@media (max-width: 520px) {
  .tet-testimonials {
    min-height: 0;
    margin-top: 24px;
  }

  .tet-testimonials__intro {
    padding: 26px 0 22px;
  }

  .tet-testimonials__eyebrow {
    margin-bottom: 9px;
    font-size: 10px;
  }

  .tet-testimonials__intro h2 {
    max-width: 320px;
    margin-bottom: 14px;
    font-size: 32px;
    line-height: 1;
  }

  .tet-testimonials__rule {
    width: 58%;
    margin-bottom: 14px;
  }

  .tet-testimonials__network {
    gap: 5px 0;
    font-size: 9px;
    line-height: 1.55;
    letter-spacing: 0.08em;
  }

  .tet-testimonials__network span + span::before {
    margin-inline: 7px;
  }

  .tet-testimonials__stage {
    min-height: 0;
    padding: 24px 0 26px 28px;
  }

  .tet-testimonials__mark {
    top: 19px;
    left: 0;
    font-size: 44px;
  }

  .tet-testimonials__slides {
    display: block;
  }

  .tet-testimonials__slide {
    display: none;
  }

  .tet-testimonials__slide.is-active {
    display: block;
  }

  .tet-testimonials__quote {
    min-height: 0;
    margin-bottom: 15px;
    font-size: 24px;
    line-height: 1.18;
  }

  .tet-testimonials__credit {
    gap: 3px 6px;
    margin-bottom: 18px;
  }

  .tet-testimonials__credit strong {
    font-size: 12px;
  }

  .tet-testimonials__credit span,
  .tet-testimonials__source {
    font-size: 10.5px;
  }

  .tet-testimonials__controls {
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 14px;
  }

  .tet-testimonials__dots {
    display: flex;
    gap: 10px;
  }

  .tet-testimonials__dot {
    width: 7px;
    height: 7px;
  }

  .tet-testimonials__arrows {
    display: none;
  }
}


/* Keep testimonial pagination as true dots despite global mobile button sizing. */
@media (max-width: 520px) {
  .tet-testimonials__dots {
    min-width: 49px;
    min-height: 7px;
    justify-content: flex-end;
  }

  .tet-testimonials__dot {
    width: 7px !important;
    min-width: 7px !important;
    height: 7px !important;
    min-height: 7px !important;
    flex: 0 0 7px;
    padding: 0 !important;
    border: 0 !important;
    box-shadow: none !important;
  }
}


/* Mobile testimonials — one separator, static content, manual navigation only. */
@media (max-width: 520px) {
  .tet-testimonials {
    border-bottom: 0;
  }

  .tet-testimonials__rule,
  .tet-testimonials__progress {
    display: none;
  }

  .tet-testimonials__stage {
    padding-top: 18px;
    border-top: 0;
  }

  .tet-testimonials__slide.is-active .tet-testimonials__quote {
    animation: none !important;
    transform: none !important;
  }

  .tet-testimonials__controls {
    display: flex;
    justify-content: center;
    gap: 0;
    margin-top: 5px;
  }
}

/* Mobile homepage cohesion pass — one editorial system from intro to testimonials. */
@media (max-width: 520px) {
  .tet-d1 {
    background:
      radial-gradient(circle at 100% 24%, rgba(200, 146, 45, 0.055), transparent 24%),
      linear-gradient(180deg, #fbf9f5 0%, #f8f5ef 100%);
  }

  .tet-eyebrow {
    margin-bottom: 13px;
    font-size: 11px;
    line-height: 1.2;
    letter-spacing: 0.14em;
  }

  .tet-section-heading {
    margin-bottom: 22px;
  }

  .tet-section-heading h2,
  .tet-services > h2,
  .tet-intro__copy h2 {
    font-size: clamp(36px, 9.7vw, 40px);
    line-height: 1.01;
    letter-spacing: -0.025em;
  }

  .tet-intro {
    gap: 24px;
    margin-top: 52px;
    margin-bottom: 58px;
    padding: 30px 18px 20px;
    border: 1px solid rgba(200, 146, 45, 0.2);
    border-radius: 16px;
    background:
      radial-gradient(circle at 100% 0%, rgba(200, 146, 45, 0.09), transparent 35%),
      rgba(255, 255, 255, 0.62);
    box-shadow: 0 18px 42px rgba(31, 58, 95, 0.07);
  }

  .tet-intro__copy h2 {
    margin-bottom: 21px;
  }

  .tet-intro__copy > p:not(.tet-eyebrow) {
    margin-bottom: 15px;
    font-size: 15px;
    line-height: 1.62;
  }

  .tet-intro__copy .tet-text-link {
    margin-top: 4px;
  }

  .tet-intro__facts {
    overflow: hidden;
    border: 1px solid rgba(31, 58, 95, 0.12);
    border-radius: 12px;
    background: rgba(248, 246, 242, 0.72);
  }

  .tet-intro__fact,
  .tet-intro__fact:nth-child(even) {
    min-height: 78px;
    padding: 14px 11px;
  }

  .tet-intro__fact strong {
    font-size: 25px;
  }

  .tet-intro__fact > span > span {
    font-size: 9px;
    letter-spacing: 0.075em;
  }

  .tet-intro__visual {
    display: none;
  }

  .tet-destinations {
    padding-top: 0;
    padding-bottom: 58px;
  }

  .tet-destinations__rail {
    gap: 12px;
    padding-bottom: 4px;
  }

  .tet-destination {
    min-width: calc(100% - 18px);
    height: 252px;
    flex-basis: calc(100% - 18px);
    border: 1px solid rgba(255, 255, 255, 0.28);
    border-radius: 14px;
    box-shadow: 0 18px 38px rgba(31, 58, 95, 0.13);
  }

  .tet-destination__copy {
    padding: 22px;
  }

  .tet-destination h3 {
    font-size: 30px;
  }

  .tet-destination p {
    margin-bottom: 12px;
    font-size: 14px;
  }

  .tet-services {
    margin-bottom: 58px;
    padding: 30px 18px 24px;
    border: 1px solid rgba(200, 146, 45, 0.2);
    border-radius: 16px;
    background:
      linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(248, 244, 236, 0.78));
    box-shadow: 0 18px 42px rgba(31, 58, 95, 0.065);
  }

  .tet-services > h2 {
    max-width: 330px;
    margin-bottom: 22px;
  }

  .tet-services__viewport {
    border: 1px solid rgba(200, 146, 45, 0.24);
    border-radius: 13px;
    background: rgba(255, 255, 255, 0.58);
    box-shadow: 0 10px 26px rgba(31, 58, 95, 0.055);
  }

  .tet-services__slide {
    min-height: 148px;
  }

  .tet-services__slide .tet-service {
    max-width: none;
    min-height: 0;
    grid-template-columns: 42px minmax(0, 1fr);
    column-gap: 13px;
    padding: 20px 16px;
  }

  .tet-services__slide .tet-service__icon {
    width: 40px;
    height: 40px;
  }

  .tet-services__slide .tet-service__icon svg {
    width: 20px;
    height: 20px;
  }

  .tet-services__slide .tet-service h3 {
    font-size: 14px;
  }

  .tet-services__slide .tet-service p {
    font-size: 13px;
    line-height: 1.45;
  }

  .tet-services__dots {
    margin-top: 8px;
  }

  .tet-mice {
    grid-template-rows: auto 175px;
    margin-bottom: 58px;
    border: 1px solid rgba(200, 146, 45, 0.28);
    border-radius: 16px;
    box-shadow: 0 20px 42px rgba(7, 31, 55, 0.18);
  }

  .tet-mice__copy {
    padding: 28px 20px 26px;
  }

  .tet-mice__copy h2 {
    max-width: 300px;
    margin-bottom: 12px;
    font-size: 34px;
    line-height: 1;
  }

  .tet-mice__copy p:not(.tet-eyebrow) {
    max-width: 310px;
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 1.55;
  }

  .tet-mice__copy .tet-button {
    min-height: 44px;
    padding-inline: 22px;
  }

  .tet-mice__media--left {
    min-height: 0;
  }

  .tet-experiences {
    padding-top: 0;
    padding-bottom: 52px;
  }

  .tet-experiences .tet-section-heading {
    margin-bottom: 20px;
  }

  .tet-experiences .tet-section-heading h2 {
    font-size: 36px;
  }

  .tet-experience {
    height: 224px;
    border-radius: 14px;
    box-shadow: 0 16px 34px rgba(31, 58, 95, 0.12);
  }

  .tet-experiences__dots {
    margin-top: 10px;
  }

  .tet-experiences__all-mobile {
    margin-top: 2px;
  }

  .tet-testimonials {
    min-height: 0;
    margin: 0 auto 48px;
    padding: 0 18px 22px;
    border: 1px solid rgba(200, 146, 45, 0.2);
    border-radius: 16px;
    background:
      radial-gradient(circle at 0% 100%, rgba(200, 146, 45, 0.08), transparent 32%),
      rgba(255, 255, 255, 0.62);
    box-shadow: 0 18px 42px rgba(31, 58, 95, 0.065);
  }

  .tet-testimonials__intro {
    padding: 23px 0 17px;
  }

  .tet-testimonials__intro h2 {
    font-size: 31px;
  }

  .tet-testimonials__stage {
    padding: 18px 0 18px 27px;
  }

  .tet-testimonials__quote {
    font-size: 23px;
  }
}





/* Mobile UI refinement — icon-only menu trigger and content-stable testimonials. */
@media (max-width: 900px) {
  .tet-menu-button,
  .tet-menu-button:hover,
  .tet-menu-button:active {
    appearance: none !important;
    border: 0 !important;
    border-radius: 0 !important;
    color: #ffffff !important;
    background: transparent !important;
    box-shadow: none !important;
    filter: drop-shadow(0 1px 3px rgba(0, 24, 48, 0.68)) !important;
  }
}

@media (max-width: 520px) {
  .tet-testimonials__slides {
    display: grid;
  }

  .tet-testimonials__slide,
  .tet-testimonials__slide.is-active {
    grid-area: 1 / 1;
    display: block;
  }

  .tet-testimonials__slide {
    visibility: hidden;
    pointer-events: none;
  }

  .tet-testimonials__slide.is-active {
    visibility: visible;
    pointer-events: auto;
  }
}

/* Mobile destination carousel pagination. */
.tet-destinations__pagination {
  display: none;
}

@media (max-width: 900px) {
  .tet-destinations__pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    margin-top: 11px;
    min-height: 24px;
  }

  .tet-destinations__pagination .tet-destination-dot,
  .site-page main .tet-destinations__pagination .tet-destination-dot {
    display: grid !important;
    place-items: center;
    width: 22px !important;
    min-width: 22px !important;
    max-width: 22px !important;
    height: 22px !important;
    min-height: 22px !important;
    max-height: 22px !important;
    flex: 0 0 22px !important;
    padding: 0 !important;
    border: 0 !important;
    border-radius: 50% !important;
    appearance: none;
    color: transparent;
    background: transparent !important;
    box-shadow: none !important;
    cursor: pointer;
    transform: none !important;
  }

  .tet-destinations__pagination .tet-destination-dot::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgba(8, 47, 83, 0.28);
    box-shadow: none;
    transition: background-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
  }

  .tet-destinations__pagination .tet-destination-dot.is-active::before {
    background: var(--tet-gold-deep);
    box-shadow: 0 0 0 3px rgba(184, 123, 37, 0.15);
  }

  .tet-destinations__pagination .tet-destination-dot:hover::before {
    background: var(--tet-gold-deep);
    transform: scale(1.08);
  }

  .tet-destinations__pagination .tet-destination-dot:focus-visible {
    outline: 1px solid rgba(8, 47, 83, 0.42);
    outline-offset: 1px;
  }
}

/* Experiences carousel — four visible cards on desktop with accessible arrow controls. */
.tet-experiences__carousel {
  width: 100% !important;
  overflow: hidden;
}

.tet-experiences__rail,
.tet-experiences__rail[data-active] {
  width: 100%;
  display: flex !important;
  grid-template-columns: none !important;
  gap: 16px;
  margin-right: 0 !important;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  transform: none !important;
  transition: none !important;
  will-change: auto;
}

.tet-experiences__rail::-webkit-scrollbar {
  display: none;
}

.tet-experiences__rail .tet-experience {
  min-width: 0 !important;
  flex: 0 0 calc((100% - 48px) / 4) !important;
  height: clamp(235px, 18vw, 278px);
  scroll-snap-align: start;
}

.tet-experiences__controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
}

.tet-experiences__controls .tet-experiences__arrow {
  width: 42px !important;
  min-width: 42px !important;
  max-width: 42px !important;
  height: 42px !important;
  min-height: 42px !important;
  max-height: 42px !important;
  display: grid !important;
  place-items: center;
  flex: 0 0 42px !important;
  padding: 0 !important;
  border: 1px solid rgba(8, 47, 83, 0.22) !important;
  border-radius: 50% !important;
  color: var(--tet-navy);
  background: var(--tet-paper) !important;
  box-shadow: none !important;
  cursor: pointer;
  transform: none !important;
  transition: color 180ms ease, background-color 180ms ease, border-color 180ms ease, transform 180ms ease;
}

.tet-experiences__controls .tet-experiences__arrow svg {
  width: 17px;
  height: 17px;
  stroke-width: 1.8;
}

.tet-experiences__controls .tet-experiences__arrow:hover {
  border-color: var(--tet-gold-deep) !important;
  color: #fff;
  background: var(--tet-gold-deep) !important;
  transform: translateY(-1px) !important;
}

.tet-experiences__controls .tet-experiences__arrow:focus-visible {
  outline: 2px solid var(--tet-gold);
  outline-offset: 3px;
}

@media (max-width: 900px) {
  .tet-experiences__rail .tet-experience {
    flex-basis: calc((100% - 16px) / 2) !important;
  }
}

@media (max-width: 520px) {
  .tet-experiences__carousel {
    width: 100% !important;
  }

  .tet-experiences__rail .tet-experience {
    min-width: 100% !important;
    flex-basis: 100% !important;
  }

  .tet-experiences__controls {
    margin-top: 18px;
  }

  .tet-experiences__controls .tet-experiences__arrow {
    width: 40px !important;
    min-width: 40px !important;
    max-width: 40px !important;
    height: 40px !important;
    min-height: 40px !important;
    max-height: 40px !important;
    flex-basis: 40px !important;
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

const getExperienceVisibleCount = () => {
  if (typeof window === 'undefined') return 4;
  if (window.matchMedia('(max-width: 520px)').matches) return 1;
  if (window.matchMedia('(max-width: 900px)').matches) return 2;
  return 4;
};

export default function TravelHomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [testimonialPaused, setTestimonialPaused] = useState(false);
  const [testimonialTouchStart, setTestimonialTouchStart] = useState<number | null>(null);
  const [activeServiceSlide, setActiveServiceSlide] = useState(0);
  const [serviceTouchStart, setServiceTouchStart] = useState<number | null>(null);
  const [activeExperienceSlide, setActiveExperienceSlide] = useState(0);
  const experiencesRailRef = useRef<HTMLDivElement>(null);
  const [activeDestinationSlide, setActiveDestinationSlide] = useState(0);
  const destinationsRailRef = useRef<HTMLDivElement>(null);

  const showDestinationSlide = (index: number) => {
    const rail = destinationsRailRef.current;
    const slides = rail ? Array.from(rail.querySelectorAll<HTMLElement>('.tet-destination')) : [];
    if (!rail || !slides[index]) return;

    const maxScrollLeft = Math.max(0, rail.scrollWidth - rail.clientWidth);
    const left = slides.length > 1 ? (maxScrollLeft * index) / (slides.length - 1) : 0;
    rail.scrollTo({
      left,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
    setActiveDestinationSlide(index);
  };

  const syncDestinationSlide = () => {
    const rail = destinationsRailRef.current;
    if (!rail) return;

    const slideCount = rail.querySelectorAll('.tet-destination').length;
    const maxScrollLeft = Math.max(0, rail.scrollWidth - rail.clientWidth);
    const nextIndex = maxScrollLeft > 0 && slideCount > 1
      ? Math.round((rail.scrollLeft / maxScrollLeft) * (slideCount - 1))
      : 0;

    setActiveDestinationSlide((current) => current === nextIndex ? current : nextIndex);
  };

  const showServiceSlide = (index: number) => {
    setActiveServiceSlide((index + services.length) % services.length);
  };

  const showExperienceSlide = (index: number) => {
    const rail = experiencesRailRef.current;
    const visibleCount = getExperienceVisibleCount();
    const maxIndex = Math.max(0, experiences.length - visibleCount);
    const nextIndex = maxIndex > 0 ? ((index % (maxIndex + 1)) + maxIndex + 1) % (maxIndex + 1) : 0;

    if (rail) {
      const maxScrollLeft = Math.max(0, rail.scrollWidth - rail.clientWidth);
      rail.scrollTo({
        left: maxIndex > 0 ? (maxScrollLeft * nextIndex) / maxIndex : 0,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      });
    }

    setActiveExperienceSlide(nextIndex);
  };

  const syncExperienceSlide = () => {
    const rail = experiencesRailRef.current;
    if (!rail) return;

    const visibleCount = getExperienceVisibleCount();
    const maxIndex = Math.max(0, experiences.length - visibleCount);
    const maxScrollLeft = Math.max(0, rail.scrollWidth - rail.clientWidth);
    const nextIndex = maxScrollLeft > 0 && maxIndex > 0
      ? Math.round((rail.scrollLeft / maxScrollLeft) * maxIndex)
      : 0;

    setActiveExperienceSlide((current) => current === nextIndex ? current : nextIndex);
  };

  const showTestimonial = (index: number) => {
    setActiveTestimonial((index + testimonials.length) % testimonials.length);
  };

  const moveTestimonial = (direction: -1 | 1) => {
    setActiveTestimonial((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 26);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      setActiveServiceSlide((current) => (current + 1) % services.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [activeServiceSlide]);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 520px)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (testimonialPaused || isMobile || reduceMotion) return;
    const timer = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [testimonialPaused]);

  useLayoutEffect(() => {
    const root = document.querySelector<HTMLElement>('.tet-d1');
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const animations = new Set<Animation>();
    const runAnimation = (
      element: HTMLElement,
      keyframes: Keyframe[],
      options: KeyframeAnimationOptions,
      onFinish?: () => void,
    ) => {
      const animation = element.animate(keyframes, options);
      animations.add(animation);
      animation.finished
        .then(() => {
          onFinish?.();
          animation.cancel();
          animations.delete(animation);
        })
        .catch(() => undefined);
      return animation;
    };

    const heroCopy = root.querySelector<HTMLElement>('.tet-hero__copy');
    if (heroCopy) {
      runAnimation(
        heroCopy,
        [
          { opacity: 0, transform: 'translateY(20px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        { duration: 820, easing: 'cubic-bezier(.2,.72,.2,1)', fill: 'both' },
      );
    }

    const bridge = root.querySelector<HTMLElement>('.tet-bridge');
    if (bridge) {
      runAnimation(
        bridge,
        [
          { opacity: 0, transform: 'translateY(18px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        { duration: 720, delay: 160, easing: 'cubic-bezier(.2,.72,.2,1)', fill: 'both' },
      );
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          const direction = element.dataset.motion ?? 'up';
          const from =
            direction === 'left'
              ? 'translateX(-22px)'
              : direction === 'right'
                ? 'translateX(22px)'
                : direction === 'scale'
                  ? 'scale(.975)'
                  : 'translateY(18px)';

          runAnimation(
            element,
            [
              { opacity: 0.01, transform: from },
              { opacity: 1, transform: 'none' },
            ],
            { duration: 650, easing: 'cubic-bezier(.2,.72,.2,1)', fill: 'both' },
            () => element.classList.remove('tet-motion-ready'),
          );

          if (element.dataset.stagger === 'true') {
            Array.from(element.children).forEach((child, index) => {
              runAnimation(
                child as HTMLElement,
                [
                  { opacity: 0.01, transform: 'translateY(10px)' },
                  { opacity: 1, transform: 'translateY(0)' },
                ],
                { duration: 480, delay: 65 + index * 48, easing: 'cubic-bezier(.2,.72,.2,1)', fill: 'both' },
              );
            });
          }

          observer.unobserve(element);
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -7%' },
    );

    const motionElements = Array.from(root.querySelectorAll<HTMLElement>('[data-motion]'));
    motionElements.forEach((element) => {
      element.classList.add('tet-motion-ready');
      observer.observe(element);
    });

    let frameId: number | null = null;
    const updateParallax = () => {
      const hero = root.querySelector<HTMLElement>('.tet-hero');
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)));
      root.style.setProperty('--tet-parallax', String(Math.round(progress * 20)) + 'px');
      frameId = null;
    };
    const onScroll = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(updateParallax);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    updateParallax();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      motionElements.forEach((element) => element.classList.remove('tet-motion-ready'));
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="tet-d1">
      <style>{HOME_STYLES}</style>

      <PageSeo
        title="Destination Management Company in Greece | Rhodes & Kos DMC | Top Euro Travel"
        description="Top Euro Travel is a trusted destination management company in Greece, providing DMC services, hotel contracting, transfers, MICE, groups, excursions and ground handling in Rhodes and Kos since 1989."
      />

      <header className={`tet-topbar ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="tet-topbar__inner tet-shell">
          <Link className="tet-brand" to="/" aria-label="Top Euro Travel home" onClick={closeMenu}>
            <Image src={MEDIA.logo} alt="Top Euro Travel" />
          </Link>

          <button
            className="tet-menu-button"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>

          <div className={`tet-nav-wrap ${menuOpen ? 'is-open' : ''}`}>
            <nav className="tet-nav" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link to={item.to} key={item.to} onClick={closeMenu}>{item.label}</Link>
              ))}
            </nav>
            <div className="tet-topbar__actions">
              <span className="tet-language">EN⌄</span>
              <Link className="tet-agent-pill" to="/contact#contact-form" onClick={closeMenu}>
                Agents Portal <ArrowRight aria-hidden="true" />
              </Link>
              <Link className="tet-contact-pill" to="/contact" onClick={closeMenu}>
                Contact Us <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="tet-hero" aria-labelledby="tet-home-title">
        <video
          className="tet-hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={MEDIA.heroPoster}
          tabIndex={-1}
          aria-hidden="true"
        >
          <source src={MEDIA.heroMobile} media="(max-width: 767px)" type="video/mp4" />
          <source src={MEDIA.heroDesktop} type="video/mp4" />
        </video>
        <div className="tet-hero__overlay" aria-hidden="true" />

        <div className="tet-hero__content tet-shell">
          <div className="tet-hero__copy">
            <Eyebrow>Destination management since 1989</Eyebrow>
            <h1 id="tet-home-title">
              <span>Your Trusted DMC Partner</span>
              <span>in Rhodes &amp; Kos</span>
            </h1>
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

        <span hidden aria-hidden="true">
          Scroll <ArrowDown />
        </span>

        <Link hidden to="/destinations">
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
          <span className="tet-bridge__thumb"><Image src={MEDIA.bridgeRhodes} alt="Rhodes" /></span>
          <span className="tet-bridge__copy">
            <small>Rhodes</small>
            <strong>Timeless Island</strong>
          </span>
          <ArrowRight className="tet-bridge__arrow" aria-hidden="true" />
        </Link>

        <Link className="tet-bridge__item" to="/kos">
          <span className="tet-bridge__thumb"><Image src={MEDIA.bridgeKos} alt="Kos" /></span>
          <span className="tet-bridge__copy">
            <small>Kos</small>
            <strong>Authentic Escape</strong>
          </span>
          <ArrowRight className="tet-bridge__arrow" aria-hidden="true" />
        </Link>

        <div className="tet-bridge__item tet-bridge__metric">
          <Users aria-hidden="true" />
          <span><strong>35+</strong><span>Years of experience</span></span>
        </div>
      </section>

      <div className="tet-body">
        <div className="tet-body__wash" aria-hidden="true">
          <svg viewBox="0 0 1600 1900" preserveAspectRatio="none">
            <path d="M-120 400 C180 280 340 520 650 390 C990 248 1190 470 1710 280" fill="none" stroke="#c8d9e5" strokeWidth="88" strokeLinecap="round" opacity="0.32" />
            <path d="M-180 1030 C140 870 410 1120 760 970 C1100 825 1350 1050 1720 890" fill="none" stroke="#e5d5bd" strokeWidth="72" strokeLinecap="round" opacity="0.24" />
            <path d="M-80 1520 C250 1370 560 1600 920 1450 C1220 1320 1450 1490 1700 1390" fill="none" stroke="#d7e3eb" strokeWidth="96" strokeLinecap="round" opacity="0.18" />
          </svg>
        </div>
        <section id="our-story" className="tet-intro tet-shell">
          <div className="tet-intro__copy" data-motion="left">
            <Eyebrow>Who we are</Eyebrow>
            <h2>Your Trusted DMC<br />in Rhodes &amp; Kos</h2>
            <p>
              Since 1989, Top Euro Travel has been providing destination management and groundhandling services in
              Rhodes and Kos, supporting tour operators, travel agencies, groups and event planners from across the world.
            </p>
            <p>
              With local teams in both destinations and a flexible, hands-on approach, we deliver reliable solutions
              tailored to each partner's needs, from hotel contracting and transfers to MICE services, tailor-made
              programmes and excursions. Our focus is simple: building long-term partnerships through expertise,
              responsiveness and consistent service delivery
            </p>
            <Link className="tet-text-link" to="/about">
              Learn more about us <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="tet-intro__facts" data-motion="up" data-stagger="true" aria-label="Top Euro Travel facts">
            <Fact icon={CalendarCheck} value="1989" label="Since" />
            <Fact icon={Users} value="100,000+" label="Guests Annually" />
            <Fact icon={Building2} value="200+" label="Hotel Partners" />
            <Fact icon={Headphones} value="40+" label="Team Members" />
          </div>

          <div className="tet-intro__visual" data-motion="right">
            <Image src={MEDIA.intro} alt="Lindos and the Aegean Sea" loading="eager" />
          </div>
        </section>

        <section className="tet-destinations tet-shell" aria-labelledby="tet-destinations-title">
          <div className="tet-section-heading" data-motion="up">
            <div>
              <Eyebrow>Our destinations</Eyebrow>
              <h2 id="tet-destinations-title">Two Islands. Endless Possibilities.</h2>
            </div>
          </div>

          <div
            ref={destinationsRailRef}
            className="tet-destinations__rail"
            data-motion="scale"
            data-stagger="true"
            onScroll={syncDestinationSlide}
          >
            <article className="tet-destination">
              <Image src={MEDIA.rhodes} alt="Rhodes destination" loading="lazy" />
              <div className="tet-destination__copy">
                <h3>Rhodes</h3>
                <p>Where history, energy and hospitality meet.</p>
                <Link className="tet-destination__link" to="/rhodes">
                  Explore Rhodes <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>

            <article className="tet-destination">
              <Image src={MEDIA.kos} alt="Kos destination" loading="lazy" />
              <div className="tet-destination__copy">
                <h3>Kos</h3>
                <p>Where authenticity meets a relaxed island rhythm.</p>
                <Link className="tet-destination__link" to="/kos">
                  Explore Kos <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>

          <div className="tet-destinations__pagination" role="group" aria-label="Choose destination slide">
            {['Rhodes', 'Kos'].map((destination, index) => (
              <button
                type="button"
                key={destination}
                className={`tet-destination-dot ${activeDestinationSlide === index ? 'is-active' : ''}`}
                aria-label={`Show ${destination}`}
                aria-current={activeDestinationSlide === index ? 'true' : undefined}
                onClick={() => showDestinationSlide(index)}
              />
            ))}
          </div>
        </section>

        <section className="tet-services tet-shell" aria-labelledby="tet-services-title">
          <Eyebrow>Our services</Eyebrow>
          <h2 id="tet-services-title">We Handle Everything. You Enjoy the Experience.</h2>
          <div className="tet-services__grid tet-services__grid--desktop" data-motion="up" data-stagger="true">
            {services.map(({ icon: Icon, title, description }) => (
              <Link className="tet-service" to="/services" key={title}>
                <span className="tet-service__icon"><Icon aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </Link>
            ))}
          </div>

          <div
            className="tet-services__carousel"
            data-motion="up"
            role="region"
            aria-roledescription="carousel"
            aria-label="Services"
            onTouchStart={(event) => setServiceTouchStart(event.touches[0]?.clientX ?? null)}
            onTouchCancel={() => setServiceTouchStart(null)}
            onTouchEnd={(event) => {
              const endX = event.changedTouches[0]?.clientX;
              if (serviceTouchStart === null || endX === undefined) return;
              const distance = endX - serviceTouchStart;
              if (Math.abs(distance) > 45) {
                showServiceSlide(activeServiceSlide + (distance < 0 ? 1 : -1));
              }
              setServiceTouchStart(null);
            }}
          >
            <div className="tet-services__viewport">
              <div
                className="tet-services__track"
                style={{ transform: `translate3d(-${activeServiceSlide * 100}%, 0, 0)` }}
              >
                {services.map(({ icon: Icon, title, description }, serviceIndex) => (
                  <div
                    className="tet-services__slide"
                    key={title}
                    aria-hidden={serviceIndex !== activeServiceSlide}
                  >
                    <Link
                      className="tet-service"
                      to="/services"
                      tabIndex={serviceIndex === activeServiceSlide ? 0 : -1}
                    >
                      <span className="tet-service__icon"><Icon aria-hidden="true" /></span>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="tet-services__dots" aria-label="Browse services">
              <button
                type="button"
                className="tet-services__dot"
                aria-label="Previous service"
                onClick={() => showServiceSlide(activeServiceSlide - 1)}
              />
              <span className="tet-services__dot is-active" aria-hidden="true" />
              <button
                type="button"
                className="tet-services__dot"
                aria-label="Next service"
                onClick={() => showServiceSlide(activeServiceSlide + 1)}
              />
            </div>
          </div>
        </section>

        <section className="tet-mice tet-shell" aria-labelledby="tet-mice-title" data-motion="scale">
          <div className="tet-mice__media tet-mice__media--left">
            <Image src={MEDIA.miceLeft} alt="Group and event setting in Rhodes" loading="lazy" />
          </div>

          <div className="tet-mice__copy">
            <Eyebrow>MICE &amp; events</Eyebrow>
            <h2 id="tet-mice-title">Inspire. Connect. Reward.</h2>
            <p>
              Whether planning a corporate event, incentive programme or group itinerary, our team delivers tailored
              solutions and seamless execution across Rhodes and Kos, supported by extensive destination knowledge and
              trusted local partnerships.
            </p>
            <Link className="tet-button tet-button--gold" to="/mice-groups">
              Discover MICE <ArrowRight aria-hidden="true" />
            </Link>
          </div>


        </section>

        <section className="tet-experiences tet-shell" aria-labelledby="tet-experiences-title">
          <div className="tet-section-heading" data-motion="up">
            <div>
              <Eyebrow>Experiences</Eyebrow>
              <h2 id="tet-experiences-title">Live the Destination</h2>
            </div>
            <Link className="tet-text-link tet-experiences__all-desktop" to="/experiences">
              View all experiences <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="tet-experiences__carousel">
            <div
              ref={experiencesRailRef}
              className="tet-experiences__rail"
              data-motion="up"
              data-stagger="true"
              aria-live="polite"
              aria-label={'Experience categories. Position ' + (activeExperienceSlide + 1) + ' of ' + experiences.length}
              onScroll={syncExperienceSlide}
            >
              {experiences.map(({ icon: Icon, title, image }) => (
                <Link className="tet-experience" to="/experiences" key={title} aria-label={'View ' + title + ' experiences'}>
                  <Image src={image} alt={title} loading="lazy" />
                  <span className="tet-experience__icon"><Icon aria-hidden="true" /></span>
                  <strong>{title}</strong>
                </Link>
              ))}
            </div>

            <div className="tet-experiences__controls" role="group" aria-label="Browse experience categories">
              <button
                type="button"
                className="tet-experiences__arrow"
                aria-label="Previous experiences"
                onClick={() => showExperienceSlide(activeExperienceSlide - 1)}
              >
                <ArrowLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                className="tet-experiences__arrow"
                aria-label="Next experiences"
                onClick={() => showExperienceSlide(activeExperienceSlide + 1)}
              >
                <ArrowRight aria-hidden="true" />
              </button>
            </div>

            <Link className="tet-text-link tet-experiences__all-mobile" to="/experiences">
              View all experiences <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section
          className={`tet-testimonials tet-shell${testimonialPaused ? ' is-paused' : ''}`}
          aria-label="Traveller testimonials"
          data-motion="up"
          onMouseEnter={() => setTestimonialPaused(true)}
          onMouseLeave={() => setTestimonialPaused(false)}
          onFocusCapture={() => setTestimonialPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setTestimonialPaused(false);
          }}
          onTouchStart={(event) => setTestimonialTouchStart(event.touches[0]?.clientX ?? null)}
          onTouchEnd={(event) => {
            if (testimonialTouchStart === null) return;
            const distance = (event.changedTouches[0]?.clientX ?? testimonialTouchStart) - testimonialTouchStart;
            if (Math.abs(distance) > 42) moveTestimonial(distance < 0 ? 1 : -1);
            setTestimonialTouchStart(null);
          }}
        >
          <div className="tet-testimonials__intro">
            <span className="tet-testimonials__eyebrow">
              Testimonials · {String(activeTestimonial + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
            <h2>Local knowledge.<br />Global confidence.</h2>
            <span className="tet-testimonials__rule" aria-hidden="true" />
            <div className="tet-testimonials__network" aria-label="Travel industry network">
              <span>HATTA</span>
              <span>Greece DMCs</span>
              <span>Tour operators</span>
              <span>Travel agencies</span>
              <span>Hotel partners</span>
            </div>
          </div>

          <div className="tet-testimonials__stage" aria-live="polite">
            <span className="tet-testimonials__mark" aria-hidden="true">“</span>
            <div className="tet-testimonials__slides">
              {testimonials.map((testimonial, index) => (
                <div
                  className={`tet-testimonials__slide${index === activeTestimonial ? ' is-active' : ''}`}
                  key={testimonial.name}
                  aria-hidden={index !== activeTestimonial}
                >
                  <blockquote className="tet-testimonials__quote">
                    {testimonial.quote}
                  </blockquote>
                  <div className="tet-testimonials__credit">
                    <strong>{testimonial.name}</strong>
                    <span>· {testimonial.location} · {testimonial.experience}</span>
                    <a
                      className="tet-testimonials__source"
                      href={testimonial.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={index === activeTestimonial ? 0 : -1}
                    >
                      {testimonial.source}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="tet-testimonials__controls">
              <div className="tet-testimonials__progress" aria-hidden="true">
                <span key={`progress-${activeTestimonial}`} />
              </div>
              <div className="tet-testimonials__dots" aria-label="Choose testimonial">
                {testimonials.map((testimonial, index) => (
                  <button
                    className={`tet-testimonials__dot${index === activeTestimonial ? ' is-active' : ''}`}
                    key={testimonial.name}
                    type="button"
                    aria-label={`Show testimonial ${index + 1}`}
                    aria-current={index === activeTestimonial ? 'true' : undefined}
                    onClick={() => showTestimonial(index)}
                  />
                ))}
              </div>
              <div className="tet-testimonials__arrows">
                <button
                  className="tet-testimonials__arrow tet-testimonials__arrow--previous"
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => moveTestimonial(-1)}
                >
                  <ArrowRight aria-hidden="true" />
                </button>
                <button
                  className="tet-testimonials__arrow"
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => moveTestimonial(1)}
                >
                  <ArrowRight aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}
