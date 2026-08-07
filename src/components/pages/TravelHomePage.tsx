import { PageSeo, Photo, travelMedia } from '@/components/travel/Shared';
import '@/styles/homepage-editorial-v9.css';
import {
  ArrowDown,
  ArrowRight,
  BedDouble,
  Bus,
  CalendarCheck,
  Compass,
  Headphones,
  Landmark,
  MapPinned,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

type IslandKey = 'rhodes' | 'kos';
type ServiceKey =
  | 'hotel-contracting'
  | 'booking-management'
  | 'transportation'
  | 'resort-assistance'
  | 'tours-excursions'
  | 'mice-groups'
  | 'weddings-events'
  | 'xml-agent-portal';

type IslandScene = {
  number: string;
  name: string;
  eyebrow: string;
  title: string;
  copy: string;
  highlights: string[];
  href: string;
  image: string;
  alt: string;
};

type ServiceScene = {
  key: ServiceKey;
  number: string;
  title: string;
  shortTitle: string;
  copy: string;
  points: string[];
  image: string;
  alt: string;
  icon: LucideIcon;
};

const islandScenes: Record<IslandKey, IslandScene> = {
  rhodes: {
    number: '01',
    name: 'Rhodes',
    eyebrow: 'History, coastlines and extraordinary variety',
    title: 'Rhodes: a destination with a story at every turn.',
    copy: 'Medieval streets, landmark villages, dramatic coastlines and sophisticated hospitality create outstanding possibilities for leisure travel, groups, incentives and events.',
    highlights: ['Rhodes Old Town & Lindos', 'Coastal touring & island experiences', 'Groups, incentives & events'],
    href: '/rhodes',
    image: 'home-welcome-v2.jpg',
    alt: 'Aegean coastline in Rhodes',
  },
  kos: {
    number: '02',
    name: 'Kos',
    eyebrow: 'Easy-going island life, thoughtfully connected',
    title: 'Kos: relaxed, authentic and full of character.',
    copy: 'Long beaches, welcoming resorts, cultural heritage and local island life make Kos an effortless setting for tailor-made programmes and memorable stays.',
    highlights: ['Kos Town & ancient heritage', 'Beaches, villages & local flavours', 'Tailor-made programmes & groups'],
    href: '/kos',
    image: 'sailing.jpg',
    alt: 'Sailing along the coastline of Kos',
  },
};

const services: ServiceScene[] = [
  {
    key: 'hotel-contracting',
    number: '01',
    title: 'Hotel Contracting',
    shortTitle: 'Hotels',
    copy: 'A carefully managed accommodation portfolio, competitive contracting and the right hotel options for every market, group and programme.',
    points: ['Contracted hotel portfolio', 'Market-aligned rates', 'Programme-specific recommendations'],
    image: 'home-welcome-v2.jpg',
    alt: 'Premium accommodation overlooking the Aegean Sea',
    icon: BedDouble,
  },
  {
    key: 'booking-management',
    number: '02',
    title: 'Booking Management',
    shortTitle: 'Bookings',
    copy: 'Clear reservation handling, rooming-list coordination and responsive partner communication from first request to final confirmation.',
    points: ['Reservation coordination', 'Rooming-list management', 'Responsive partner support'],
    image: 'old-town.jpg',
    alt: 'Rhodes local destination details',
    icon: CalendarCheck,
  },
  {
    key: 'transportation',
    number: '03',
    title: 'Transfers & Transportation',
    shortTitle: 'Transport',
    copy: 'Reliable airport, port, hotel and island-wide transportation supported by local operations teams in Rhodes and Kos.',
    points: ['Airport & port transfers', 'Coach and private transport', 'On-the-ground coordination'],
    image: 'prasonisi.jpg',
    alt: 'Coastal road and landscape in Rhodes',
    icon: Bus,
  },
  {
    key: 'resort-assistance',
    number: '04',
    title: 'Resort Assistance',
    shortTitle: 'Support',
    copy: 'Visible, responsive destination assistance that gives guests and partners confidence throughout the stay.',
    points: ['Local representative support', 'Guest assistance', 'Operational problem solving'],
    image: 'local-life.jpg',
    alt: 'Local island life in the Dodecanese',
    icon: Headphones,
  },
  {
    key: 'tours-excursions',
    number: '05',
    title: 'Tours & Excursions',
    shortTitle: 'Excursions',
    copy: 'Handpicked island tours, boat trips, cultural visits and authentic experiences shaped by genuine local knowledge.',
    points: ['Shared and private excursions', 'Multilingual programmes', 'Authentic local experiences'],
    image: 'sailing.jpg',
    alt: 'Boat excursion in the Aegean Sea',
    icon: MapPinned,
  },
  {
    key: 'mice-groups',
    number: '06',
    title: 'MICE & Group Travel',
    shortTitle: 'MICE',
    copy: 'Integrated planning and local execution for meetings, incentives, conferences, corporate events and group itineraries.',
    points: ['Venue and hotel sourcing', 'Group logistics', 'On-site programme management'],
    image: 'home-mice-v2.jpg',
    alt: 'Corporate event setup in Rhodes',
    icon: Users,
  },
  {
    key: 'weddings-events',
    number: '07',
    title: 'Weddings & Special Events',
    shortTitle: 'Events',
    copy: 'Destination celebrations planned around the setting, the guests and the detail required for a seamless island event.',
    points: ['Venue coordination', 'Guest logistics', 'Tailor-made event support'],
    image: 'food.jpg',
    alt: 'Refined island dining and event atmosphere',
    icon: Sparkles,
  },
  {
    key: 'xml-agent-portal',
    number: '08',
    title: 'XML API Connectivity & Agent Portal',
    shortTitle: 'Technology',
    copy: 'Technology that supports distribution, partner access and efficient operational workflows without losing the value of personal service.',
    points: ['XML API connectivity', 'Agent portal access', 'Efficient partner workflows'],
    image: 'old-town.jpg',
    alt: 'Connected destination operations in Rhodes and Kos',
    icon: Compass,
  },
];

const experienceStories = [
  {
    title: 'Culture & Heritage',
    kicker: 'Rhodes · Walk through centuries',
    image: 'old-town.jpg',
    className: 'home-cinematic-experience--culture',
  },
  {
    title: 'Island Gastronomy',
    kicker: 'Rhodes & Kos · Taste the local story',
    image: 'food.jpg',
    className: 'home-cinematic-experience--food',
  },
  {
    title: 'Days on the Water',
    kicker: 'Aegean · Find your own horizon',
    image: 'sailing.jpg',
    className: 'home-cinematic-experience--water',
  },
  {
    title: 'Wild Landscapes',
    kicker: 'Rhodes · Go beyond the familiar',
    image: 'prasonisi.jpg',
    className: 'home-cinematic-experience--nature',
  },
  {
    title: 'Local Island Life',
    kicker: 'Kos · Meet the destination',
    image: 'local-life.jpg',
    className: 'home-cinematic-experience--local',
  },
] as const;

function EditorialEyebrow({ children }: { children: string }) {
  return <p className="home-cinematic-eyebrow">{children}</p>;
}

const pageStyles = String.raw`
  .home-cinematic {
    --tet-navy: #071a31;
    --tet-navy-soft: #0b294b;
    --tet-blue: #183d68;
    --tet-ivory: #f5f1e8;
    --tet-paper: #fbf8f1;
    --tet-gold: #d6ab23;
    --tet-gold-soft: #ecd989;
    --tet-ink: #10213b;
    --tet-line: rgba(16, 33, 59, 0.14);
    --hero-depth: 0px;
  }

  /* Header: preserve the current transparent concept, refine only the execution. */
  body.is-top-euro-home header,
  body.is-top-euro-home [data-site-header] {
    background: linear-gradient(180deg, rgba(4, 18, 35, 0.55) 0%, rgba(4, 18, 35, 0.18) 64%, transparent 100%) !important;
    box-shadow: none !important;
    border-bottom-color: transparent !important;
  }

  body.is-top-euro-home header nav,
  body.is-top-euro-home [data-site-header] nav {
    align-items: center !important;
    gap: clamp(22px, 2.15vw, 38px) !important;
  }

  body.is-top-euro-home header nav a:not([href="/contact"]),
  body.is-top-euro-home [data-site-header] nav a:not([href="/contact"]) {
    position: relative;
    padding-block: 12px !important;
    color: rgba(255, 255, 255, 0.93) !important;
    font-size: 0.72rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.085em !important;
    line-height: 1 !important;
    text-transform: uppercase;
    text-shadow: 0 1px 18px rgba(0, 0, 0, 0.16);
  }

  body.is-top-euro-home header nav a:not([href="/contact"])::after,
  body.is-top-euro-home [data-site-header] nav a:not([href="/contact"])::after {
    position: absolute;
    right: 0;
    bottom: 5px;
    left: 0;
    height: 1px;
    background: var(--tet-gold-soft);
    content: "";
    opacity: 0;
    transform: scaleX(0.25);
    transform-origin: left center;
    transition: opacity 220ms ease, transform 280ms cubic-bezier(0.2, 0.7, 0.2, 1);
  }

  body.is-top-euro-home header nav a:not([href="/contact"]):hover::after,
  body.is-top-euro-home header nav a:not([href="/contact"]):focus-visible::after,
  body.is-top-euro-home [data-site-header] nav a:not([href="/contact"]):hover::after,
  body.is-top-euro-home [data-site-header] nav a:not([href="/contact"]):focus-visible::after {
    opacity: 1;
    transform: scaleX(1);
  }

  body.is-top-euro-home header a[href="/contact"],
  body.is-top-euro-home [data-site-header] a[href="/contact"] {
    position: relative;
    display: inline-flex !important;
    min-width: 0 !important;
    min-height: 38px !important;
    align-items: center !important;
    gap: 9px !important;
    padding: 0 2px 0 0 !important;
    border: 0 !important;
    border-bottom: 1px solid rgba(236, 217, 137, 0.82) !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
    color: #ffffff !important;
    font-size: 0.72rem !important;
    font-weight: 800 !important;
    letter-spacing: 0.11em !important;
    text-transform: uppercase;
    transition: color 220ms ease, border-color 220ms ease, transform 220ms ease !important;
  }

  body.is-top-euro-home header a[href="/contact"]::after,
  body.is-top-euro-home [data-site-header] a[href="/contact"]::after {
    content: "↗";
    color: var(--tet-gold-soft);
    font-size: 0.9rem;
    line-height: 1;
    transition: transform 240ms ease;
  }

  body.is-top-euro-home header a[href="/contact"]:hover,
  body.is-top-euro-home header a[href="/contact"]:focus-visible,
  body.is-top-euro-home [data-site-header] a[href="/contact"]:hover,
  body.is-top-euro-home [data-site-header] a[href="/contact"]:focus-visible {
    border-color: #ffffff !important;
    color: var(--tet-gold-soft) !important;
    transform: translateY(-1px);
  }

  body.is-top-euro-home header a[href="/contact"]:hover::after,
  body.is-top-euro-home [data-site-header] a[href="/contact"]:hover::after {
    transform: translate(3px, -3px);
  }

  /* Hero: same video, stronger hierarchy and controlled motion. */
  .home-cinematic-hero.home-refined-hero {
    min-height: max(720px, 96svh);
    padding: clamp(154px, 19vh, 220px) 0 clamp(118px, 14vh, 158px);
  }

  .home-refined-hero .home-cinematic-hero__video {
    transform: translate3d(0, var(--hero-depth), 0) scale(1.035);
    will-change: transform;
  }

  .home-refined-hero .home-cinematic-hero__shade {
    background:
      linear-gradient(90deg, rgba(3, 17, 33, 0.89) 0%, rgba(3, 17, 33, 0.75) 31%, rgba(3, 17, 33, 0.34) 59%, rgba(3, 17, 33, 0.08) 100%),
      linear-gradient(180deg, rgba(3, 17, 33, 0.42) 0%, rgba(3, 17, 33, 0.04) 45%, rgba(3, 17, 33, 0.55) 100%);
  }

  .home-refined-hero__content {
    position: relative;
    z-index: 3;
    width: min(calc(100% - 48px), 1280px);
    margin-inline: auto;
  }

  .home-refined-hero__content-inner {
    max-width: 790px;
  }

  .home-refined-hero__eyebrow {
    display: flex;
    align-items: center;
    gap: 13px;
    margin: 0 0 26px;
    color: var(--tet-gold-soft);
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 620ms ease 100ms, transform 760ms cubic-bezier(0.2, 0.72, 0.2, 1) 100ms;
  }

  .home-refined-hero__eyebrow::before {
    width: 42px;
    height: 1px;
    background: currentColor;
    content: "";
    opacity: 0.72;
  }

  .home-refined-hero__title {
    max-width: 800px;
    margin: 0;
    color: #ffffff;
    font-family: var(--font-heading, "Cormorant Garamond", "Times New Roman", serif);
    font-size: clamp(3.35rem, 6.15vw, 7.05rem);
    font-weight: 500;
    letter-spacing: -0.052em;
    line-height: 0.93;
    text-wrap: balance;
  }

  .home-refined-hero__title span {
    display: block;
    opacity: 0;
    transform: translateY(38px);
    transition: opacity 820ms ease, transform 920ms cubic-bezier(0.18, 0.75, 0.2, 1);
  }

  .home-refined-hero__title span:first-child {
    transition-delay: 190ms;
  }

  .home-refined-hero__title span:last-child {
    color: var(--tet-gold-soft);
    font-style: italic;
    transition-delay: 310ms;
  }

  .home-refined-hero__subtitle {
    max-width: 660px;
    margin: 30px 0 0;
    color: rgba(255, 255, 255, 0.79);
    font-size: clamp(1.05rem, 1.35vw, 1.24rem);
    line-height: 1.68;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 700ms ease 450ms, transform 760ms ease 450ms;
  }

  .home-refined-hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 34px;
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 700ms ease 570ms, transform 760ms ease 570ms;
  }

  .home-refined-hero__primary,
  .home-refined-hero__secondary {
    display: inline-flex;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 0 22px;
    border-radius: 7px;
    font-size: 0.73rem;
    font-weight: 800;
    letter-spacing: 0.09em;
    text-decoration: none;
    text-transform: uppercase;
    transition: transform 240ms ease, background-color 240ms ease, border-color 240ms ease, color 240ms ease, box-shadow 240ms ease;
  }

  .home-refined-hero__primary {
    border: 1px solid var(--tet-gold);
    background: var(--tet-gold);
    box-shadow: 0 15px 36px rgba(214, 171, 35, 0.2);
    color: var(--tet-navy);
  }

  .home-refined-hero__secondary {
    border: 1px solid rgba(255, 255, 255, 0.46);
    background: rgba(7, 26, 49, 0.14);
    color: #ffffff;
  }

  .home-refined-hero__primary:hover,
  .home-refined-hero__secondary:hover,
  .home-refined-hero__primary:focus-visible,
  .home-refined-hero__secondary:focus-visible {
    transform: translateY(-2px);
  }

  .home-refined-hero__primary:hover {
    background: #e2b829;
    box-shadow: 0 20px 44px rgba(214, 171, 35, 0.27);
  }

  .home-refined-hero__secondary:hover {
    border-color: rgba(255, 255, 255, 0.82);
    background: rgba(255, 255, 255, 0.1);
  }

  .home-refined-hero__primary svg,
  .home-refined-hero__secondary svg {
    width: 17px;
    height: 17px;
    transition: transform 240ms ease;
  }

  .home-refined-hero__primary:hover svg,
  .home-refined-hero__secondary:hover svg {
    transform: translateX(4px);
  }

  .home-refined-hero__signature {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0;
    margin-top: clamp(48px, 7vh, 74px);
    color: rgba(255, 255, 255, 0.62);
    font-size: 0.66rem;
    font-weight: 800;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    opacity: 0;
    transition: opacity 660ms ease 720ms;
  }

  .home-refined-hero__signature span {
    display: inline-flex;
    align-items: center;
  }

  .home-refined-hero__signature span:not(:last-child)::after {
    width: 1px;
    height: 16px;
    margin: 0 17px;
    background: rgba(255, 255, 255, 0.25);
    content: "";
  }

  .home-refined-hero__scroll {
    position: absolute;
    right: clamp(24px, 4vw, 70px);
    bottom: 54px;
    z-index: 4;
    display: grid;
    justify-items: center;
    gap: 10px;
    color: rgba(255, 255, 255, 0.66);
    font-size: 0.62rem;
    font-weight: 800;
    letter-spacing: 0.17em;
    text-decoration: none;
    text-transform: uppercase;
  }

  .home-refined-hero__scroll svg {
    width: 19px;
    animation: tet-scroll-hint 1.9s ease-in-out infinite;
  }

  .home-cinematic.is-ready .home-refined-hero__eyebrow,
  .home-cinematic.is-ready .home-refined-hero__title span,
  .home-cinematic.is-ready .home-refined-hero__subtitle,
  .home-cinematic.is-ready .home-refined-hero__actions {
    opacity: 1;
    transform: translateY(0);
  }

  .home-cinematic.is-ready .home-refined-hero__signature {
    opacity: 1;
  }

  /* Clean architectural bridge: no fog, blur, cloud or giant curve. */
  .home-architectural-bridge {
    position: relative;
    z-index: 8;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    width: min(calc(100% - 48px), 1280px);
    min-height: 58px;
    margin: -29px auto 0;
    border-top: 1px solid rgba(236, 217, 137, 0.72);
    border-bottom: 1px solid rgba(16, 33, 59, 0.13);
    background: linear-gradient(90deg, var(--tet-navy) 0%, var(--tet-navy) 50%, var(--tet-ivory) 50%, var(--tet-ivory) 100%);
    box-shadow: 0 18px 40px rgba(7, 26, 49, 0.08);
    overflow: hidden;
  }

  .home-architectural-bridge::before,
  .home-architectural-bridge::after {
    height: 1px;
    content: "";
  }

  .home-architectural-bridge::before {
    background: linear-gradient(90deg, transparent, rgba(236, 217, 137, 0.55));
  }

  .home-architectural-bridge::after {
    background: linear-gradient(90deg, rgba(16, 33, 59, 0.18), transparent);
  }

  .home-architectural-bridge__label {
    display: inline-flex;
    align-items: center;
    gap: 13px;
    padding: 0 24px;
    color: var(--tet-gold-soft);
    font-size: 0.66rem;
    font-weight: 850;
    letter-spacing: 0.17em;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .home-architectural-bridge__label i {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: currentColor;
    font-style: normal;
  }

  /* Intro stays the same concept; only hierarchy, spacing and flow are refined. */
  .home-refined-intro {
    margin-top: 0 !important;
    padding-top: clamp(112px, 10vw, 154px) !important;
    border-radius: 0 !important;
  }

  .home-refined-intro .home-cinematic-intro__copy h1 {
    max-width: 760px;
    margin-bottom: 24px;
    color: var(--tet-ink);
    font-family: var(--font-heading, "Cormorant Garamond", "Times New Roman", serif);
    font-size: clamp(2.85rem, 4.75vw, 5.35rem);
    font-weight: 500;
    letter-spacing: -0.043em;
    line-height: 0.98;
    text-wrap: balance;
  }

  .home-refined-intro__subtitle {
    max-width: 680px;
    margin-bottom: 25px;
    color: var(--tet-blue) !important;
    font-family: var(--font-heading, "Cormorant Garamond", "Times New Roman", serif);
    font-size: clamp(1.4rem, 1.95vw, 2rem) !important;
    line-height: 1.42 !important;
  }

  .home-refined-intro__body {
    display: grid;
    gap: 17px;
  }

  .home-refined-intro__body p {
    margin: 0;
  }

  .home-refined-intro .home-cinematic-intro__visual::after {
    position: absolute;
    right: 4%;
    bottom: 4%;
    width: 38%;
    height: 1px;
    background: linear-gradient(90deg, var(--tet-gold), transparent);
    content: "";
  }

  .home-refined-intro__year {
    position: absolute;
    top: 10%;
    left: 2%;
    z-index: 3;
    display: grid;
    gap: 4px;
    padding: 16px 19px 15px;
    border-left: 2px solid var(--tet-gold);
    background: rgba(245, 241, 232, 0.94);
    box-shadow: 0 16px 38px rgba(7, 26, 49, 0.08);
  }

  .home-refined-intro__year small {
    color: rgba(16, 33, 59, 0.56);
    font-size: 0.61rem;
    font-weight: 850;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .home-refined-intro__year strong {
    color: var(--tet-blue);
    font-family: var(--font-heading, "Cormorant Garamond", "Times New Roman", serif);
    font-size: 1.9rem;
    font-weight: 500;
    line-height: 1;
  }

  .home-refined-proof {
    grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
  }

  .home-refined-proof > div {
    position: relative;
    overflow: hidden;
  }

  .home-refined-proof > div::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 2px;
    background: var(--tet-gold);
    content: "";
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 760ms cubic-bezier(0.2, 0.7, 0.2, 1);
  }

  .home-refined-proof.is-visible > div::after,
  .is-visible .home-refined-proof > div::after {
    transform: scaleX(1);
  }

  /* Islands keep the existing section and interaction, with a better media match. */
  .home-refined-island-stage__visual img {
    transition: transform 900ms cubic-bezier(0.2, 0.72, 0.2, 1);
  }

  .home-refined-island-stage:hover .home-refined-island-stage__visual img {
    transform: scale(1.035);
  }

  /* Services: same position in the page, custom interaction instead of eight cards. */
  .home-refined-services {
    padding: clamp(104px, 10vw, 154px) 0 clamp(118px, 11vw, 170px);
  }

  .home-refined-services__stage {
    display: grid;
    grid-template-columns: minmax(330px, 0.72fr) minmax(0, 1.28fr);
    min-height: 650px;
    overflow: hidden;
    border-top: 1px solid var(--tet-line);
    border-bottom: 1px solid var(--tet-line);
    background: var(--tet-paper);
  }

  .home-refined-services__index {
    display: grid;
    align-content: stretch;
    border-right: 1px solid var(--tet-line);
  }

  .home-refined-services__index button {
    position: relative;
    display: grid;
    grid-template-columns: 34px minmax(0, 1fr) 18px;
    align-items: center;
    gap: 12px;
    min-height: 80px;
    padding: 13px 22px;
    border: 0;
    border-bottom: 1px solid var(--tet-line);
    background: transparent;
    color: rgba(16, 33, 59, 0.58);
    cursor: pointer;
    font-family: inherit;
    text-align: left;
    transition: background-color 220ms ease, color 220ms ease, padding-left 240ms ease;
  }

  .home-refined-services__index button:last-child {
    border-bottom: 0;
  }

  .home-refined-services__index button::before {
    position: absolute;
    top: 18%;
    bottom: 18%;
    left: 0;
    width: 2px;
    background: var(--tet-gold);
    content: "";
    transform: scaleY(0);
    transform-origin: center top;
    transition: transform 260ms ease;
  }

  .home-refined-services__index button.is-active,
  .home-refined-services__index button:hover,
  .home-refined-services__index button:focus-visible {
    padding-left: 28px;
    background: rgba(214, 171, 35, 0.055);
    color: var(--tet-ink);
  }

  .home-refined-services__index button.is-active::before {
    transform: scaleY(1);
  }

  .home-refined-services__index-number {
    color: #9f790c;
    font-size: 0.64rem;
    font-weight: 850;
    letter-spacing: 0.12em;
  }

  .home-refined-services__index-title {
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.055em;
    line-height: 1.3;
    text-transform: uppercase;
  }

  .home-refined-services__index button svg {
    width: 16px;
    height: 16px;
    opacity: 0.42;
    transition: transform 220ms ease, opacity 220ms ease;
  }

  .home-refined-services__index button.is-active svg,
  .home-refined-services__index button:hover svg {
    opacity: 1;
    transform: translateX(3px);
  }

  .home-refined-services__panel {
    position: relative;
    min-height: 650px;
    overflow: hidden;
    background: var(--tet-navy);
    color: #ffffff;
  }

  .home-refined-services__media,
  .home-refined-services__media::after {
    position: absolute;
    inset: 0;
  }

  .home-refined-services__media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.02);
    animation: tet-service-image 680ms cubic-bezier(0.2, 0.72, 0.2, 1) both;
  }

  .home-refined-services__media::after {
    background:
      linear-gradient(90deg, rgba(7, 26, 49, 0.9) 0%, rgba(7, 26, 49, 0.68) 46%, rgba(7, 26, 49, 0.16) 100%),
      linear-gradient(180deg, rgba(7, 26, 49, 0.12), rgba(7, 26, 49, 0.64));
    content: "";
  }

  .home-refined-services__panel-content {
    position: relative;
    z-index: 2;
    display: grid;
    max-width: 590px;
    min-height: 650px;
    align-content: end;
    padding: clamp(48px, 6vw, 82px);
    animation: tet-service-copy 520ms ease both;
  }

  .home-refined-services__panel-icon {
    display: grid;
    width: 54px;
    height: 54px;
    place-items: center;
    margin-bottom: 25px;
    border: 1px solid rgba(236, 217, 137, 0.42);
    color: var(--tet-gold-soft);
  }

  .home-refined-services__panel-icon svg {
    width: 24px;
    height: 24px;
  }

  .home-refined-services__panel-content small {
    margin-bottom: 17px;
    color: var(--tet-gold-soft);
    font-size: 0.67rem;
    font-weight: 850;
    letter-spacing: 0.17em;
    text-transform: uppercase;
  }

  .home-refined-services__panel-content h3 {
    max-width: 520px;
    margin: 0 0 18px;
    color: #ffffff;
    font-size: clamp(2.7rem, 4vw, 4.7rem);
  }

  .home-refined-services__panel-content > p {
    max-width: 560px;
    margin-bottom: 24px;
    color: rgba(255, 255, 255, 0.74);
  }

  .home-refined-services__points {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
    margin: 0 0 31px;
    padding: 0;
    list-style: none;
  }

  .home-refined-services__points li {
    padding-top: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.72);
    font-size: 0.72rem;
    font-weight: 700;
    line-height: 1.48;
  }

  .home-refined-services__mobile {
    display: none;
  }

  /* MICE: retain the existing darker chapter and improve depth. */
  .home-refined-mice {
    isolation: isolate;
  }

  .home-refined-mice::before {
    position: absolute;
    inset: 0;
    z-index: 0;
    background: linear-gradient(180deg, rgba(7, 26, 49, 0.03), rgba(7, 26, 49, 0.28));
    content: "";
    pointer-events: none;
  }

  .home-refined-mice .home-cinematic-mice__content {
    position: relative;
    z-index: 2;
  }

  /* Contact remains the existing closing concept, upgraded as a designed final chapter. */
  .home-refined-closing {
    position: relative;
    overflow: hidden;
  }

  .home-refined-closing::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(36%, 420px);
    background: linear-gradient(135deg, transparent 0%, rgba(214, 171, 35, 0.1) 100%);
    content: "";
    pointer-events: none;
  }

  .home-refined-closing__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 18px 26px;
    margin-top: 26px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  /* Reveal choreography: preserve existing reveals, add section-specific variation. */
  [data-home-reveal="intro"] .home-cinematic-intro__copy {
    opacity: 0;
    transform: translateX(-34px);
    transition: opacity 760ms ease, transform 860ms cubic-bezier(0.2, 0.72, 0.2, 1);
  }

  [data-home-reveal="intro"] .home-cinematic-intro__visual {
    opacity: 0;
    transform: translateX(38px) scale(0.98);
    transition: opacity 800ms ease 100ms, transform 950ms cubic-bezier(0.2, 0.72, 0.2, 1) 100ms;
  }

  [data-home-reveal="intro"].is-visible .home-cinematic-intro__copy,
  [data-home-reveal="intro"].is-visible .home-cinematic-intro__visual {
    opacity: 1;
    transform: translateX(0) scale(1);
  }

  [data-home-reveal="services"] .home-refined-services__stage {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 720ms ease, transform 820ms ease;
  }

  [data-home-reveal="services"].is-visible .home-refined-services__stage {
    opacity: 1;
    transform: translateY(0);
  }

  @keyframes tet-scroll-hint {
    0%, 100% { transform: translateY(0); opacity: 0.54; }
    50% { transform: translateY(6px); opacity: 1; }
  }

  @keyframes tet-service-image {
    from { opacity: 0.6; transform: scale(1.055); }
    to { opacity: 1; transform: scale(1.02); }
  }

  @keyframes tet-service-copy {
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 1024px) {
    .home-refined-hero__content-inner {
      max-width: 700px;
    }

    .home-architectural-bridge {
      grid-template-columns: 0.4fr auto 0.4fr;
    }

    .home-refined-proof {
      grid-template-columns: repeat(5, minmax(130px, 1fr)) !important;
      overflow-x: auto;
      scrollbar-width: none;
    }

    .home-refined-proof::-webkit-scrollbar {
      display: none;
    }

    .home-refined-services__stage {
      grid-template-columns: minmax(280px, 0.75fr) minmax(0, 1.25fr);
    }

    .home-refined-services__index button {
      grid-template-columns: 30px minmax(0, 1fr) 16px;
      min-height: 75px;
      padding-inline: 17px;
    }

    .home-refined-services__panel-content {
      padding: 48px;
    }
  }

  @media (max-width: 767px) {
    body.is-top-euro-home header,
    body.is-top-euro-home [data-site-header] {
      background: linear-gradient(180deg, rgba(4, 18, 35, 0.72), rgba(4, 18, 35, 0.08)) !important;
    }

    .home-cinematic-hero.home-refined-hero {
      min-height: 92svh;
      padding: 126px 0 110px;
    }

    .home-refined-hero__content {
      width: min(calc(100% - 36px), 1280px);
    }

    .home-refined-hero__content-inner {
      max-width: 100%;
    }

    .home-refined-hero__title {
      max-width: 520px;
      font-size: clamp(2.85rem, 13.1vw, 4.55rem);
      line-height: 0.96;
    }

    .home-refined-hero__subtitle {
      max-width: 470px;
      margin-top: 23px;
      font-size: 1rem;
      line-height: 1.58;
    }

    .home-refined-hero__actions {
      display: grid;
      grid-template-columns: 1fr;
      max-width: 320px;
      margin-top: 29px;
    }

    .home-refined-hero__primary,
    .home-refined-hero__secondary {
      width: 100%;
    }

    .home-refined-hero__signature {
      display: grid;
      grid-template-columns: repeat(2, max-content);
      gap: 10px 18px;
      margin-top: 38px;
      font-size: 0.6rem;
    }

    .home-refined-hero__signature span:not(:last-child)::after {
      display: none;
    }

    .home-refined-hero__scroll {
      display: none;
    }

    .home-architectural-bridge {
      grid-template-columns: 20px minmax(0, 1fr) 20px;
      width: calc(100% - 24px);
      min-height: 54px;
      margin-top: -27px;
      background: var(--tet-navy);
    }

    .home-architectural-bridge__label {
      justify-content: center;
      padding: 0 8px;
      font-size: 0.58rem;
      letter-spacing: 0.12em;
      white-space: normal;
    }

    .home-refined-intro {
      padding-top: 98px !important;
    }

    .home-refined-intro .home-cinematic-intro__copy h1 {
      font-size: clamp(2.55rem, 11vw, 4.05rem);
    }

    .home-refined-intro__year {
      top: 5%;
      left: 0;
    }

    .home-refined-proof {
      grid-template-columns: repeat(5, minmax(150px, 1fr)) !important;
      margin-right: -18px;
      padding-right: 18px;
    }

    .home-refined-services__desktop {
      display: none;
    }

    .home-refined-services__mobile {
      display: grid;
      border-top: 1px solid var(--tet-line);
    }

    .home-refined-service-accordion {
      border-bottom: 1px solid var(--tet-line);
    }

    .home-refined-service-accordion__trigger {
      display: grid;
      grid-template-columns: 34px minmax(0, 1fr) 22px;
      align-items: center;
      gap: 12px;
      width: 100%;
      min-height: 72px;
      padding: 12px 0;
      border: 0;
      background: transparent;
      color: var(--tet-ink);
      font-family: inherit;
      text-align: left;
    }

    .home-refined-service-accordion__trigger span:first-child {
      color: #9f790c;
      font-size: 0.64rem;
      font-weight: 850;
      letter-spacing: 0.12em;
    }

    .home-refined-service-accordion__trigger strong {
      font-size: 0.75rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .home-refined-service-accordion__trigger svg {
      width: 17px;
      height: 17px;
      transition: transform 220ms ease;
    }

    .home-refined-service-accordion.is-active .home-refined-service-accordion__trigger svg {
      transform: rotate(90deg);
    }

    .home-refined-service-accordion__body {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 340ms ease;
    }

    .home-refined-service-accordion.is-active .home-refined-service-accordion__body {
      grid-template-rows: 1fr;
    }

    .home-refined-service-accordion__body-inner {
      min-height: 0;
      overflow: hidden;
    }

    .home-refined-service-accordion__media {
      position: relative;
      height: 260px;
      overflow: hidden;
      background: var(--tet-navy);
    }

    .home-refined-service-accordion__media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .home-refined-service-accordion__media::after {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent, rgba(7, 26, 49, 0.62));
      content: "";
    }

    .home-refined-service-accordion__copy {
      padding: 23px 0 30px;
    }

    .home-refined-service-accordion__copy p {
      color: rgba(16, 33, 59, 0.7);
    }

    .home-refined-services__points {
      grid-template-columns: 1fr;
      margin-bottom: 22px;
    }

    .home-refined-services__points li {
      color: rgba(16, 33, 59, 0.66);
      border-color: var(--tet-line);
    }

    .home-refined-closing__meta {
      gap: 10px 16px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .home-cinematic *,
    .home-cinematic *::before,
    .home-cinematic *::after {
      scroll-behavior: auto !important;
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
    }

    .home-refined-hero .home-cinematic-hero__video {
      transform: scale(1.02);
    }
  }
`;

export default function TravelHomePage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeIsland, setActiveIsland] = useState<IslandKey>('rhodes');
  const [activeService, setActiveService] = useState<ServiceKey>('hotel-contracting');

  const island = islandScenes[activeIsland];
  const service = services.find((item) => item.key === activeService) ?? services[0];
  const ActiveServiceIcon = service.icon;

  useEffect(() => {
    const root = rootRef.current;
    const body = document.body;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    body.classList.add('is-top-euro-home');
    const readyFrame = window.requestAnimationFrame(() => root?.classList.add('is-ready'));

    const sections = Array.from(root?.querySelectorAll<HTMLElement>('[data-home-reveal]') ?? []);
    let observer: IntersectionObserver | null = null;

    if (!('IntersectionObserver' in window) || reducedMotion) {
      sections.forEach((section) => section.classList.add('is-visible'));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8%' },
      );

      sections.forEach((section) => observer?.observe(section));
    }

    let ticking = false;
    const updateHeroDepth = () => {
      if (!root || reducedMotion) return;
      const scrollY = Math.min(window.scrollY, window.innerHeight * 1.1);
      root.style.setProperty('--hero-depth', `${scrollY * 0.055}px`);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateHeroDepth);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateHeroDepth();

    return () => {
      window.cancelAnimationFrame(readyFrame);
      window.removeEventListener('scroll', onScroll);
      observer?.disconnect();
      body.classList.remove('is-top-euro-home');
    };
  }, []);

  return (
    <div ref={rootRef} className="home-cinematic">
      <style>{pageStyles}</style>

      <PageSeo
        title="Destination Management Company in Greece | Rhodes & Kos DMC | Top Euro Travel"
        description="Top Euro Travel is a trusted destination management company in Greece, providing DMC services, hotel contracting, transfers, MICE, groups, excursions and ground handling in Rhodes and Kos since 1989."
      />

      <section className="home-cinematic-hero home-refined-hero" aria-labelledby="home-hero-title">
        <video
          className="home-cinematic-hero__video"
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

        <div className="home-cinematic-hero__shade" aria-hidden="true" />

        <div className="home-refined-hero__content">
          <div className="home-refined-hero__content-inner">
            <p className="home-refined-hero__eyebrow">Top Euro Travel · Destination Management since 1989</p>

            <p id="home-hero-title" className="home-refined-hero__title" role="heading" aria-level={2}>
              <span>Your Trusted DMC Partner</span>
              <span>in Rhodes &amp; Kos</span>
            </p>

            <p className="home-refined-hero__subtitle">
              Delivering destination management, ground handling and travel solutions since 1989.
            </p>

            <div className="home-refined-hero__actions">
              <Link className="home-refined-hero__primary" to="/services">
                Explore Our Services <ArrowRight />
              </Link>
              <Link className="home-refined-hero__secondary" to="/contact">
                Partner With Us <ArrowRight />
              </Link>
            </div>

            <div className="home-refined-hero__signature" aria-label="Top Euro Travel key facts">
              <span>Rhodes &amp; Kos</span>
              <span>Professional DMC</span>
              <span>Established 1989</span>
              <span>24/7 local support</span>
            </div>
          </div>
        </div>

        <a className="home-refined-hero__scroll" href="#our-story" aria-label="Continue to company introduction">
          Discover <ArrowDown />
        </a>
      </section>

      <div className="home-architectural-bridge" aria-label="Rhodes and Kos destination management since 1989">
        <span aria-hidden="true" />
        <span className="home-architectural-bridge__label">
          Rhodes <i /> Kos <i /> Destination Management Since 1989
        </span>
        <span aria-hidden="true" />
      </div>

      <section id="our-story" className="home-cinematic-intro home-refined-intro shell" data-home-reveal="intro">
        <div className="home-cinematic-intro__copy">
          <EditorialEyebrow>Professional destination expertise in Greece</EditorialEyebrow>
          <h1>Destination Management Company in Greece</h1>
          <p className="home-refined-intro__subtitle">
            Trusted destination management, ground handling and excursion services in Rhodes and Kos.
          </p>
          <div className="home-refined-intro__body">
            <p>
              Since 1989, Top Euro Travel has been providing destination management and ground handling services in
              Rhodes and Kos, supporting tour operators, travel agencies, groups and event planners from across the world.
            </p>
            <p>
              With local teams in both destinations and a flexible, hands-on approach, we deliver reliable solutions
              tailored to each partner&apos;s needs, from hotel contracting and transfers to MICE services, tailor-made
              programmes and excursions. Our focus is simple: building long-term partnerships through expertise,
              responsiveness and consistent service delivery.
            </p>
          </div>
          <Link className="home-cinematic-text-link" to="/about">
            Discover Top Euro Travel <ArrowRight />
          </Link>
        </div>

        <div className="home-cinematic-intro__visual" aria-label="Top Euro Travel local destination expertise">
          <div className="home-cinematic-intro__image home-cinematic-intro__image--main">
            <Photo src={travelMedia('home-welcome-v2.jpg')} alt="Aegean destination scenery in Rhodes" />
          </div>
          <div className="home-cinematic-intro__image home-cinematic-intro__image--detail">
            <Photo src={travelMedia('old-town.jpg')} alt="Rhodes Medieval City local atmosphere" />
          </div>
          <div className="home-refined-intro__year" aria-hidden="true">
            <small>Local expertise since</small>
            <strong>1989</strong>
          </div>
        </div>

        <div className="home-cinematic-proof home-refined-proof" aria-label="Top Euro Travel facts">
          <div><strong>1989</strong><span>Since our beginning</span></div>
          <div><strong>100K+</strong><span>Guests annually</span></div>
          <div><strong>200+</strong><span>Hotel partners</span></div>
          <div><strong>40+</strong><span>Team members</span></div>
          <div><strong>24/7</strong><span>Local support</span></div>
        </div>
      </section>

      <section className="home-cinematic-islands" data-home-reveal="islands">
        <div className="shell">
          <div className="home-cinematic-heading home-cinematic-heading--light">
            <div>
              <EditorialEyebrow>Two islands. One trusted local partner.</EditorialEyebrow>
              <h2>Destination expertise in Rhodes &amp; Kos.</h2>
            </div>
            <p>
              One experienced DMC connects both destinations while every programme retains the authentic character of its island.
            </p>
          </div>

          <div className="home-cinematic-islands__tabs" role="tablist" aria-label="Choose a destination">
            {(Object.keys(islandScenes) as IslandKey[]).map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                id={`island-tab-${key}`}
                aria-selected={activeIsland === key}
                aria-controls={`island-panel-${key}`}
                className={activeIsland === key ? 'is-active' : ''}
                onClick={() => setActiveIsland(key)}
              >
                <span>{islandScenes[key].number}</span>
                {islandScenes[key].name}
              </button>
            ))}
          </div>

          <article
            key={activeIsland}
            id={`island-panel-${activeIsland}`}
            role="tabpanel"
            aria-labelledby={`island-tab-${activeIsland}`}
            className="home-cinematic-island-stage home-refined-island-stage"
          >
            <div className="home-cinematic-island-stage__visual home-refined-island-stage__visual">
              <Photo src={travelMedia(island.image)} alt={island.alt} />
              <span className="home-cinematic-island-stage__number" aria-hidden="true">{island.number}</span>
            </div>
            <div className="home-cinematic-island-stage__copy">
              <p className="home-cinematic-island-stage__eyebrow">{island.eyebrow}</p>
              <h3>{island.title}</h3>
              <p>{island.copy}</p>
              <ul>
                {island.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <Link className="home-cinematic-text-link home-cinematic-text-link--light" to={island.href}>
                Explore {island.name} <ArrowRight />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="home-refined-services shell" data-home-reveal="services" aria-labelledby="services-heading">
        <div className="home-cinematic-heading">
          <div>
            <EditorialEyebrow>One local team. Every operational detail.</EditorialEyebrow>
            <h2 id="services-heading">Our Services</h2>
          </div>
          <p>
            Destination management, ground handling and travel solutions delivered through one accountable team in Rhodes and Kos.
          </p>
        </div>

        <div className="home-refined-services__desktop home-refined-services__stage">
          <div className="home-refined-services__index" role="tablist" aria-label="Top Euro Travel services">
            {services.map((item) => (
              <button
                key={item.key}
                type="button"
                role="tab"
                id={`service-tab-${item.key}`}
                aria-selected={activeService === item.key}
                aria-controls={`service-panel-${item.key}`}
                className={activeService === item.key ? 'is-active' : ''}
                onClick={() => setActiveService(item.key)}
                onMouseEnter={() => setActiveService(item.key)}
                onFocus={() => setActiveService(item.key)}
              >
                <span className="home-refined-services__index-number">{item.number}</span>
                <span className="home-refined-services__index-title">{item.title}</span>
                <ArrowRight aria-hidden="true" />
              </button>
            ))}
          </div>

          <article
            key={service.key}
            id={`service-panel-${service.key}`}
            role="tabpanel"
            aria-labelledby={`service-tab-${service.key}`}
            className="home-refined-services__panel"
          >
            <div className="home-refined-services__media">
              <Photo src={travelMedia(service.image)} alt={service.alt} />
            </div>
            <div className="home-refined-services__panel-content">
              <span className="home-refined-services__panel-icon" aria-hidden="true"><ActiveServiceIcon /></span>
              <small>{service.number} · {service.shortTitle}</small>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <ul className="home-refined-services__points">
                {service.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <Link className="home-cinematic-text-link home-cinematic-text-link--light" to="/services">
                Explore our services <ArrowRight />
              </Link>
            </div>
          </article>
        </div>

        <div className="home-refined-services__mobile">
          {services.map((item) => {
            const Icon = item.icon;
            const isActive = activeService === item.key;

            return (
              <div key={item.key} className={`home-refined-service-accordion${isActive ? ' is-active' : ''}`}>
                <button
                  type="button"
                  className="home-refined-service-accordion__trigger"
                  aria-expanded={isActive}
                  onClick={() => setActiveService(item.key)}
                >
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                  <ArrowRight aria-hidden="true" />
                </button>
                <div className="home-refined-service-accordion__body">
                  <div className="home-refined-service-accordion__body-inner">
                    <div className="home-refined-service-accordion__media">
                      <Photo src={travelMedia(item.image)} alt={item.alt} />
                    </div>
                    <div className="home-refined-service-accordion__copy">
                      <span className="home-refined-services__panel-icon" aria-hidden="true"><Icon /></span>
                      <p>{item.copy}</p>
                      <ul className="home-refined-services__points">
                        {item.points.map((point) => <li key={point}>{point}</li>)}
                      </ul>
                      <Link className="home-cinematic-text-link" to="/services">
                        Explore our services <ArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section
        className="home-cinematic-mice home-refined-mice"
        style={{ backgroundImage: `url("${travelMedia('home-mice-v2.jpg')}")` }}
        data-home-reveal="mice"
      >
        <div className="home-cinematic-mice__overlay" aria-hidden="true" />
        <div className="home-cinematic-mice__content shell">
          <EditorialEyebrow>MICE &amp; Group Travel Solutions</EditorialEyebrow>
          <h2>Tailored programmes. Seamless local execution.</h2>
          <p>
            Whether planning a corporate event, incentive programme or group itinerary, our team delivers tailored
            solutions and seamless execution across Rhodes and Kos, supported by extensive destination knowledge and
            trusted local partnerships.
          </p>
          <div className="home-cinematic-mice__details">
            <span><Landmark /> Venues &amp; accommodation</span>
            <span><Users /> Groups of every scale</span>
            <span><Sparkles /> Tailor-made programmes</span>
          </div>
          <Link className="home-cinematic-button home-cinematic-button--gold" to="/mice-groups">
            Explore MICE &amp; Groups <ArrowRight />
          </Link>
        </div>
      </section>

      <section className="home-cinematic-experiences shell" data-home-reveal="experiences">
        <div className="home-cinematic-heading">
          <div>
            <EditorialEyebrow>Curated with genuine island knowledge</EditorialEyebrow>
            <h2>Authentic Local Experiences</h2>
          </div>
          <div className="home-cinematic-heading__action">
            <p>
              Handpicked excursions and destination experiences that reveal the history, coastlines, culture and local life of Rhodes and Kos.
            </p>
            <Link className="home-cinematic-text-link" to="/experiences">
              Explore all experiences <ArrowRight />
            </Link>
          </div>
        </div>

        <div className="home-cinematic-experiences__mosaic">
          {experienceStories.map((experience, index) => (
            <Link
              className={`home-cinematic-experience ${experience.className}`}
              to="/experiences"
              key={experience.title}
            >
              <Photo src={travelMedia(experience.image)} alt={experience.title} />
              <span className="home-cinematic-experience__shade" aria-hidden="true" />
              <span className="home-cinematic-experience__index">0{index + 1}</span>
              <span className="home-cinematic-experience__copy">
                <small>{experience.kicker}</small>
                <strong>{experience.title}</strong>
              </span>
              <span className="home-cinematic-experience__arrow" aria-hidden="true"><ArrowRight /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-cinematic-closing home-refined-closing shell" data-home-reveal="contact">
        <div className="home-cinematic-closing__icon" aria-hidden="true"><Compass /></div>
        <div className="home-cinematic-closing__copy">
          <EditorialEyebrow>Let&apos;s discuss your next programme</EditorialEyebrow>
          <h2>Get in Touch</h2>
          <p>
            Whether you are looking for a reliable DMC partner, planning a group programme, organising an event or
            exploring new opportunities in Greece, our team is ready to assist.
          </p>
          <div className="home-refined-closing__meta" aria-label="Top Euro Travel destination coverage">
            <span>Rhodes office</span>
            <span>Kos office</span>
            <span>International partners</span>
          </div>
        </div>
        <div className="home-cinematic-closing__actions">
          <Link className="home-cinematic-button home-cinematic-button--gold" to="/contact">
            Partner With Us <ArrowRight />
          </Link>
          <Link className="home-cinematic-text-link home-cinematic-text-link--light" to="/excursions">
            Browse excursions <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
