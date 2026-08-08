// TOP EURO TRAVEL — APPROVED DESIGN 1 — TRUE PIXEL-MATCH HOMEPAGE
// One self-contained file: header + homepage + flat footer + responsive styles + motion.
import { PageSeo } from '@/components/travel/Shared';
import {
  ArrowDown,
  ArrowRight,
  BedDouble,
  Building2,
  Bus,
  CalendarCheck,
  Clock3,
  Globe2,
  Headphones,
  Landmark,
  Leaf,
  Mail,
  MapPin,
  MapPinned,
  Menu,
  Play,
  ShoppingBag,
  Sparkles,
  Utensils,
  Users,
  Waves,
  X,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
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
  miceLeft: 'https://static.wixstatic.com/media/5a118b_16f5fee14b0b40e6815f82a6ae87e609~mv2.jpg',
  miceRight: 'https://static.wixstatic.com/media/5a118b_c729c9487f8f4a54aaeef387f99a21c9~mv2.jpg',
  culture: 'https://static.wixstatic.com/media/5a118b_226ba35bf5df412b9e12dd4da17eb637~mv2.jpg',
  gastronomy: 'https://static.wixstatic.com/media/5a118b_16f5fee14b0b40e6815f82a6ae87e609~mv2.jpg',
  sailing: 'https://static.wixstatic.com/media/5a118b_63f33c17cdd84c7999389621f8b8edbd~mv2.jpg',
  nature: 'https://static.wixstatic.com/media/5a118b_0dc45143f69a46c889756885c764e488~mv2.jpg',
  wellness: 'https://static.wixstatic.com/media/5a118b_ab2ae908eff3464cad53f27ae679ae6a~mv2.jpg',
  shopping: 'https://static.wixstatic.com/media/5a118b_80919dff73954ed2af466817395f8406~mv2.jpg',
  partnerOne: 'https://static.wixstatic.com/media/5a118b_63f33c17cdd84c7999389621f8b8edbd~mv2.jpg',
  partnerTwo: 'https://static.wixstatic.com/media/5a118b_32e4b1a00c744f8e91837977aebc1b1e~mv2.jpg',
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

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Services', to: '/services' },
  { label: 'MICE', to: '/mice-groups' },
  { label: 'Excursions', to: '/excursions' },
  { label: 'Experiences', to: '/experiences' },
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
  --tet-shell: min(calc(100% - clamp(40px, 8.4vw, 124px)), 1540px);
  --tet-bridge: min(calc(100% - clamp(118px, 22vw, 350px)), 1340px);
  --tet-shadow: 0 18px 48px rgba(6, 31, 56, 0.14);
}

.site-header,
.site-footer {
  display: none !important;
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
  margin-bottom: 8px !important;
  color: var(--tet-gold-deep);
  font-size: clamp(9px, 0.58vw, 11px);
  font-weight: 800;
  letter-spacing: 0.12em;
  line-height: 1.2;
  text-transform: uppercase;
}

.tet-button {
  min-height: 43px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.04em;
  line-height: 1.2;
  text-transform: uppercase;
}

/* Exact approved transparent header, using the real Top Euro Travel logo. */
.tet-topbar {
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
  height: clamp(530px, 42.5vw, 720px);
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
  max-width: min(62vw, 880px);
  margin-left: clamp(38px, 5vw, 90px);
}

.tet-hero .tet-eyebrow {
  margin-bottom: 13px !important;
  color: rgba(255, 255, 255, 0.96);
}

.tet-hero h1 {
  max-width: 880px;
  margin-bottom: 18px;
  color: #fff;
  font-size: clamp(54px, 5.35vw, 88px);
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
  font-size: clamp(13px, 0.92vw, 16px);
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

/* The floating bridge is the visual joint between hero and content. */
.tet-bridge {
  width: var(--tet-bridge);
  min-height: clamp(70px, 6.8vw, 88px);
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: 0.78fr 1.16fr 1.15fr 1.15fr 0.86fr;
  margin: clamp(-45px, -3.2vw, -35px) auto 0;
  border: 1px solid rgba(255, 255, 255, 0.77);
  border-radius: 14px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.97);
  box-shadow: var(--tet-shadow);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.tet-bridge__item {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px clamp(13px, 1.35vw, 23px);
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

.tet-bridge small {
  display: block;
  color: var(--tet-gold-deep);
  font-size: 8.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.tet-bridge__year strong {
  color: var(--tet-gold-deep);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(28px, 2vw, 37px);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 0.95;
}

.tet-bridge__thumb {
  width: clamp(35px, 2.6vw, 45px);
  height: clamp(35px, 2.6vw, 45px);
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
  font-size: clamp(9.5px, 0.64vw, 11.5px);
  font-weight: 750;
  line-height: 1.25;
}

.tet-bridge__copy span {
  color: #667481;
  font-size: clamp(7.5px, 0.5vw, 9px);
  line-height: 1.25;
}

.tet-bridge__arrow {
  width: 15px;
  margin-left: auto;
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
  font-size: clamp(22px, 1.55vw, 29px);
  font-weight: 500;
  line-height: 0.95;
}

.tet-bridge__metric span span {
  display: block;
  color: #677481;
  font-size: 8px;
}

.tet-body {
  padding-top: clamp(22px, 2.1vw, 35px);
}

/* Copy left, facts centre, large visual right — exactly as the approved mockup. */
.tet-intro {
  display: grid;
  grid-template-columns: minmax(250px, 0.95fr) minmax(120px, 0.4fr) minmax(390px, 1.55fr);
  align-items: center;
  gap: clamp(25px, 2.9vw, 47px);
  padding-top: clamp(10px, 1.1vw, 18px);
  padding-bottom: clamp(22px, 2.2vw, 36px);
}

.tet-intro__copy h2 {
  max-width: 510px;
  margin-bottom: 12px;
  color: var(--tet-navy-deep);
  font-size: clamp(34px, 3vw, 51px);
  line-height: 0.97;
}

.tet-intro__copy > p:not(.tet-eyebrow) {
  max-width: 520px;
  margin-bottom: 7px;
  color: var(--tet-copy);
  font-size: clamp(10px, 0.67vw, 12px);
  line-height: 1.55;
}

.tet-intro__signature {
  display: block;
  margin: 12px 0 7px;
  color: var(--tet-gold-deep);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(19px, 1.45vw, 26px);
  font-style: italic;
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
  font-size: clamp(19px, 1.42vw, 26px);
  font-weight: 500;
  line-height: 0.94;
}

.tet-intro__fact span span {
  display: block;
  margin-top: 3px;
  color: #667481;
  font-size: 7.5px;
  font-weight: 650;
  letter-spacing: 0.03em;
  line-height: 1.25;
  text-transform: uppercase;
}

.tet-intro__visual {
  aspect-ratio: 2.08 / 1;
  position: relative;
  border-radius: 10px;
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
  font-size: clamp(28px, 2.35vw, 41px);
  line-height: 1;
}

/* Two compact destination panels, no oversized section. */
.tet-destinations {
  padding-bottom: clamp(20px, 1.9vw, 31px);
}

.tet-destinations__rail {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.tet-destination {
  height: clamp(132px, 12.5vw, 205px);
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
  font-size: clamp(13px, 0.9vw, 16px);
  font-weight: 750;
}

.tet-destination p {
  margin-bottom: 9px;
  color: rgba(255, 255, 255, 0.93);
  font-size: clamp(9px, 0.66vw, 11px);
  line-height: 1.35;
}

.tet-destination__link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding-bottom: 2px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.62);
  color: #fff;
  font-size: 8.5px;
  font-weight: 750;
}

.tet-destination:hover img {
  filter: saturate(1.07);
  transform: scale(1.045);
}

/* Eight services form one connected operational line — never eight cards. */
.tet-services {
  padding-bottom: clamp(18px, 1.7vw, 28px);
}

.tet-services > h2 {
  margin-bottom: clamp(17px, 1.45vw, 24px);
  color: var(--tet-navy-deep);
  font-size: clamp(27px, 2.2vw, 39px);
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
  padding: 13px 7px 2px;
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
  transition: background 200ms ease, box-shadow 200ms ease;
}

.tet-service__icon {
  height: 31px;
  display: grid;
  place-items: center;
  margin-bottom: 5px;
  color: var(--tet-gold-deep);
  transition: transform 220ms ease, color 220ms ease;
}

.tet-service__icon svg {
  width: clamp(21px, 1.55vw, 28px);
  height: clamp(21px, 1.55vw, 28px);
  stroke-width: 1.45;
}

.tet-service h3 {
  min-height: 28px;
  display: grid;
  place-items: center;
  margin-bottom: 3px;
  color: var(--tet-navy-deep);
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(8px, 0.55vw, 10px);
  font-weight: 750;
  line-height: 1.2;
}

.tet-service p {
  max-width: 138px;
  margin-bottom: 0;
  color: #6b7884;
  font-size: clamp(6.9px, 0.45vw, 8.5px);
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
  height: clamp(130px, 11.8vw, 190px);
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(310px, 0.82fr) minmax(210px, 0.56fr);
  margin-bottom: clamp(17px, 1.5vw, 25px);
  border-radius: 8px;
  overflow: hidden;
  color: #fff;
  background: var(--tet-navy-deep);
  box-shadow: 0 14px 34px rgba(7, 31, 55, 0.15);
}

.tet-mice__media {
  position: relative;
  overflow: hidden;
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
  background: var(--tet-navy-deep);
}

.tet-mice__copy .tet-eyebrow {
  margin-bottom: 6px !important;
  color: #dba54f;
}

.tet-mice__copy h2 {
  margin-bottom: 6px;
  color: #fff;
  font-size: clamp(23px, 1.85vw, 33px);
  line-height: 1;
}

.tet-mice__copy p:not(.tet-eyebrow) {
  margin-bottom: 9px;
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(8px, 0.53vw, 10px);
  line-height: 1.45;
}

.tet-mice__copy .tet-button {
  width: fit-content;
  min-height: 32px;
  padding: 7px 12px;
  font-size: 8px;
}

.tet-mice:hover img {
  filter: saturate(1.06);
  transform: scale(1.035);
}

/* Six short experience frames, like a cinematic contact sheet. */
.tet-experiences {
  padding-bottom: 8px;
}

.tet-experiences .tet-section-heading {
  margin-bottom: 10px;
}

.tet-experiences__rail {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 7px;
}

.tet-experience {
  height: clamp(106px, 9.8vw, 150px);
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
  font-size: clamp(12px, 0.96vw, 17px);
  font-weight: 500;
  line-height: 1;
  text-shadow: 0 2px 10px rgba(2, 18, 33, 0.5);
}

.tet-experience:hover img {
  filter: saturate(1.08);
  transform: scale(1.055);
}

/* The reference strip keeps the exact 3-column geometry without fake awards or testimonials. */
.tet-partners {
  min-height: clamp(70px, 6.5vw, 94px);
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(260px, 0.7fr) minmax(190px, 0.55fr);
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
  font-size: 7.5px;
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
  border-left: 1px solid var(--tet-line);
}

.tet-partners__statement strong {
  color: var(--tet-gold-deep);
  font-size: 10px;
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

.tet-partners__images div {
  min-height: 58px;
  border-radius: 5px;
  overflow: hidden;
}

.tet-partners__images img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

/* Straight, flat footer: same compact content density, no scenic background. */
.tet-flat-footer {
  color: #fff;
  background: linear-gradient(90deg, #072640 0%, #0a3a61 100%);
}

.tet-flat-footer__main {
  min-height: clamp(105px, 8.4vw, 132px);
  display: grid;
  grid-template-columns: minmax(175px, 0.72fr) minmax(120px, 0.48fr) minmax(210px, 0.82fr) minmax(150px, 0.58fr) auto;
  align-items: center;
  gap: clamp(20px, 2.8vw, 46px);
  padding-block: 19px;
}

.tet-footer-brand img {
  width: clamp(112px, 8vw, 145px);
  height: auto;
  display: block;
  margin-bottom: 8px;
  filter: brightness(0) invert(1) opacity(0.94);
}

.tet-footer-brand p,
.tet-footer-column a,
.tet-footer-contact span {
  color: rgba(255, 255, 255, 0.73);
  font-size: 8.5px;
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
  min-height: 34px;
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
  will-change: transform, opacity;
}

@media (max-width: 1120px) {
  .tet-nav {
    gap: 16px;
  }

  .tet-nav a {
    font-size: 9px;
  }

  .tet-intro {
    grid-template-columns: minmax(0, 1fr) minmax(120px, 0.38fr) minmax(340px, 1.42fr);
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

  .tet-partners__images {
    grid-column: 1 / -1;
    min-height: 84px;
    border-top: 1px solid var(--tet-line);
    border-left: 0;
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
    border-left: 1px solid var(--tet-line);
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

  .tet-partners__statement,
  .tet-partners__images {
    border-top: 1px solid var(--tet-line);
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    const root = document.querySelector<HTMLElement>('.tet-d1');
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    root.querySelector<HTMLElement>('.tet-hero__copy')?.animate(
      [
        { opacity: 0, transform: 'translateY(20px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      { duration: 820, easing: 'cubic-bezier(.2,.72,.2,1)', fill: 'both' },
    );

    root.querySelector<HTMLElement>('.tet-bridge')?.animate(
      [
        { opacity: 0, transform: 'translateY(18px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      { duration: 720, delay: 160, easing: 'cubic-bezier(.2,.72,.2,1)', fill: 'both' },
    );

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

          element.animate(
            [
              { opacity: 0.01, transform: from },
              { opacity: 1, transform: 'none' },
            ],
            { duration: 650, easing: 'cubic-bezier(.2,.72,.2,1)', fill: 'both' },
          );

          if (element.dataset.stagger === 'true') {
            Array.from(element.children).forEach((child, index) => {
              (child as HTMLElement).animate(
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

    let ticking = false;
    const updateParallax = () => {
      const hero = root.querySelector<HTMLElement>('.tet-hero');
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)));
      root.style.setProperty('--tet-parallax', `${Math.round(progress * 20)}px`);
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
            <img src={MEDIA.logo} alt="Top Euro Travel" />
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
          <span className="tet-bridge__thumb"><img src={MEDIA.bridgeRhodes} alt="Rhodes" /></span>
          <span className="tet-bridge__copy">
            <small>Rhodes</small>
            <strong>Timeless Island</strong>
            <span>Local team &amp; destination expertise</span>
          </span>
          <ArrowRight className="tet-bridge__arrow" aria-hidden="true" />
        </Link>

        <Link className="tet-bridge__item" to="/kos">
          <span className="tet-bridge__thumb"><img src={MEDIA.bridgeKos} alt="Kos" /></span>
          <span className="tet-bridge__copy">
            <small>Kos</small>
            <strong>Authentic Escape</strong>
            <span>Relaxed, tailor-made programmes</span>
          </span>
          <ArrowRight className="tet-bridge__arrow" aria-hidden="true" />
        </Link>

        <div className="tet-bridge__item tet-bridge__metric">
          <Users aria-hidden="true" />
          <span><strong>35+</strong><span>Years of experience</span></span>
        </div>
      </section>

      <div className="tet-body">
        <section id="our-story" className="tet-intro tet-shell">
          <div className="tet-intro__copy" data-motion="left">
            <Eyebrow>Who we are</Eyebrow>
            <h2>Your Trusted DMC<br />in Rhodes &amp; Kos</h2>
            <p>
              Since 1989, Top Euro Travel has provided destination management and ground handling services in Rhodes
              and Kos for tour operators, travel agencies, groups and event planners worldwide.
            </p>
            <p>
              Our local teams combine strong partnerships, responsive coordination and tailor-made delivery across
              hotels, transfers, excursions, MICE and special programmes.
            </p>
            <span className="tet-intro__signature">Top Euro Travel · Since 1989</span>
            <Link className="tet-text-link" to="/about">
              Learn more about us <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="tet-intro__facts" data-motion="up" data-stagger="true" aria-label="Top Euro Travel facts">
            <Fact icon={MapPinned} value="2" label="Unique destinations" />
            <Fact icon={Building2} value="200+" label="Hotel partners" />
            <Fact icon={Users} value="40+" label="Team members" />
            <Fact icon={Clock3} value="24/7" label="Local support" />
          </div>

          <div className="tet-intro__visual" data-motion="right">
            <img src={MEDIA.intro} alt="Lindos and the Aegean Sea" loading="eager" />
            <Link className="tet-intro__play" to="/destinations">
              <span className="tet-play-circle"><Play aria-hidden="true" /></span>
              <span>Discover<br />Our World</span>
            </Link>
          </div>
        </section>

        <section className="tet-destinations tet-shell" aria-labelledby="tet-destinations-title">
          <div className="tet-section-heading" data-motion="up">
            <div>
              <Eyebrow>Our destinations</Eyebrow>
              <h2 id="tet-destinations-title">Two Islands. Endless Possibilities.</h2>
            </div>
            <Link className="tet-text-link" to="/destinations">
              Explore destinations <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="tet-destinations__rail" data-motion="scale" data-stagger="true">
            <article className="tet-destination">
              <img src={MEDIA.rhodes} alt="Rhodes destination" loading="lazy" />
              <div className="tet-destination__copy">
                <h3>Rhodes</h3>
                <p>Where history, energy and hospitality meet.</p>
                <Link className="tet-destination__link" to="/rhodes">
                  Explore Rhodes <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>

            <article className="tet-destination">
              <img src={MEDIA.kos} alt="Kos destination" loading="lazy" />
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
          <div className="tet-services__grid" data-motion="up" data-stagger="true">
            {services.map(({ icon: Icon, title, description }) => (
              <Link className="tet-service" to="/services" key={title}>
                <span className="tet-service__icon"><Icon aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="tet-mice tet-shell" aria-labelledby="tet-mice-title" data-motion="scale">
          <div className="tet-mice__media tet-mice__media--left">
            <img src={MEDIA.miceLeft} alt="Group and event setting in Rhodes" loading="lazy" />
          </div>

          <div className="tet-mice__copy">
            <Eyebrow>MICE &amp; events</Eyebrow>
            <h2 id="tet-mice-title">Inspire. Connect. Reward.</h2>
            <p>
              From corporate events and incentive programmes to group itineraries, our local teams deliver tailored
              solutions and seamless execution across Rhodes and Kos.
            </p>
            <Link className="tet-button tet-button--gold" to="/mice-groups">
              Discover MICE <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="tet-mice__media tet-mice__media--right">
            <img src={MEDIA.miceRight} alt="Evening event atmosphere" loading="lazy" />
          </div>
        </section>

        <section className="tet-experiences tet-shell" aria-labelledby="tet-experiences-title">
          <div className="tet-section-heading" data-motion="up">
            <div>
              <Eyebrow>Experiences</Eyebrow>
              <h2 id="tet-experiences-title">Live the Destination</h2>
            </div>
            <Link className="tet-text-link" to="/experiences">
              View all experiences <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="tet-experiences__rail" data-motion="up" data-stagger="true">
            {experiences.map(({ icon: Icon, title, image }) => (
              <Link className="tet-experience" to="/experiences" key={title}>
                <img src={image} alt={title} loading="lazy" />
                <span className="tet-experience__icon"><Icon aria-hidden="true" /></span>
                <strong>{title}</strong>
              </Link>
            ))}
          </div>
        </section>

        <section className="tet-partners tet-shell" aria-label="Top Euro Travel partner network" data-motion="up">
          <div className="tet-partners__marks">
            <span className="tet-partners__label">Trusted by partners across the travel industry</span>
            <strong>HATTA</strong>
            <strong>GREECE DMCs</strong>
            <strong>Tour Operators</strong>
            <strong>Travel Agencies</strong>
            <strong>Hotel Partners</strong>
          </div>
          <div className="tet-partners__statement">
            <strong>Trusted since 1989</strong>
            <p>Long-term partnerships built through reliable local delivery in Rhodes and Kos.</p>
          </div>
          <div className="tet-partners__images" aria-hidden="true">
            <div><img src={MEDIA.partnerOne} alt="" loading="lazy" /></div>
            <div><img src={MEDIA.partnerTwo} alt="" loading="lazy" /></div>
          </div>
        </section>
      </div>

      <footer className="tet-flat-footer">
        <div className="tet-flat-footer__main tet-shell">
          <div className="tet-footer-brand">
            <img src={MEDIA.logo} alt="Top Euro Travel" />
            <p>Destination management and ground handling in Rhodes &amp; Kos since 1989.</p>
          </div>

          <div className="tet-footer-column">
            <strong>Quick Links</strong>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/mice-groups">MICE &amp; Groups</Link>
            <Link to="/experiences">Experiences</Link>
          </div>

          <div className="tet-footer-contact">
            <strong>Contact</strong>
            <span><MapPin aria-hidden="true" /> Rhodes &amp; Kos, Greece</span>
            <span><Globe2 aria-hidden="true" /> +30 22410 45506</span>
            <span><Mail aria-hidden="true" /> info@topeurotravel.gr</span>
          </div>

          <div className="tet-footer-social">
            <strong>Follow Us</strong>
            <div className="tet-social-row" aria-label="Social media">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>
          </div>

          <Link className="tet-button tet-button--gold tet-footer-cta" to="/contact">
            Contact Us Today <ArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="tet-flat-footer__bottom tet-shell">
          <span>© 2026 Top Euro Travel. All Rights Reserved.</span>
          <div className="tet-flat-footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
