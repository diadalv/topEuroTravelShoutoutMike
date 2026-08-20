import { travelMedia } from '@/components/travel/Shared';
import { Image } from '@/components/ui/image';
import { normalizeWixMediaImage } from '@/config/wix-media';
import { services } from '@wix/bookings';
import {
  ArrowRight,
  CalendarDays,
  CircleCheck,
  CircleX,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

type Money = {
  value?: string;
  formattedValue?: string | null;
};

type BookingImage = string | {
  id?: string;
  url?: string;
  filename?: string;
  width?: number;
  height?: number;
};

type BookingServiceRecord = {
  _id?: string | null;
  name?: string | null;
  description?: string | null;
  tagLine?: string | null;
  hidden?: boolean | null;
  category?: { name?: string | null };
  onlineBooking?: { enabled?: boolean | null };
  payment?: {
    rateType?: string;
    fixed?: { price?: Money };
    varied?: { defaultPrice?: Money; minPrice?: Money };
    custom?: { description?: string | null };
  };
  media?: {
    mainMedia?: { image?: BookingImage };
    coverMedia?: { image?: BookingImage };
    items?: Array<{ image?: BookingImage }>;
  };
  mainSlug?: { name?: string | null };
  supportedSlugs?: Array<{ name?: string | null }>;
};

type ParsedDescription = {
  intro: string[];
  tourDescription: string[];
  highlights: string[];
  included: string[];
  notIncluded: string[];
};

const SECTION_HEADINGS = [
  'QUICK FACTS',
  'TOUR DESCRIPTION',
  'HIGHLIGHTS',
  "WHAT'S INCLUDED",
  "WHAT'S NOT INCLUDED",
  'GOOD TO KNOW',
] as const;

const DETAIL_STYLES = String.raw`
.tet-detail {
  --tet-navy: #063b68;
  --tet-navy-deep: #032f55;
  --tet-gold: #dd9718;
  --tet-cream: #fbf9f5;
  --tet-ink: #123f68;
  --tet-muted: #526b80;
  --tet-line: rgba(221, 151, 24, .28);
  --tet-content-gutter: clamp(20px, 4.2vw, 72px);
  --tet-content-max-width: 1460px;
  --tet-image-radius: 14px;
  color: var(--tet-ink);
  background: var(--tet-cream);
  overflow: hidden;
}

.tet-detail * { box-sizing: border-box; }

.tet-detail__shell {
  width: calc(100% - (var(--tet-content-gutter) * 2));
  max-width: var(--tet-content-max-width);
  margin-inline: auto;
}

.tet-detail__hero {
  position: relative;
  min-height: clamp(480px, 58vw, 690px);
  display: grid;
  align-items: center;
  isolation: isolate;
  overflow: hidden;
  border-radius: 0 0 var(--tet-image-radius) var(--tet-image-radius);
  background: var(--tet-navy-deep);
}

.tet-detail__hero-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: -3;
  border-radius: inherit;
}

.tet-detail__hero::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -2;
  background: linear-gradient(90deg, rgba(2, 39, 73, .98) 0%, rgba(2, 44, 79, .9) 31%, rgba(2, 44, 79, .36) 55%, rgba(2, 44, 79, .04) 78%);
}

.tet-detail__hero::after {
  content: '';
  position: absolute;
  inset: auto 0 0;
  height: 84px;
  z-index: -1;
  background: linear-gradient(180deg, transparent, rgba(2, 35, 64, .18));
}

.tet-detail__hero-content {
  margin-inline: auto;
  padding-block: 72px;
}

.tet-detail__crumbs {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin: 0 0 22px;
  color: rgba(255, 255, 255, .8);
  font-size: 13px;
  line-height: 1.4;
}

.tet-detail__crumbs a { color: inherit; text-decoration: none; }
.tet-detail__crumbs span { color: var(--tet-gold); }

.tet-detail__hero-copy { max-width: min(720px, 52vw); }

.tet-detail__hero h1 {
  max-width: 720px;
  margin: 0;
  color: #fff;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(48px, 6vw, 82px);
  font-weight: 500;
  letter-spacing: -.035em;
  line-height: 1;
  text-wrap: balance;
}

.tet-detail__hero-description {
  max-width: 600px;
  margin: 30px 0 0;
  color: rgba(255, 255, 255, .91);
  font-size: clamp(15px, 1.15vw, 18px);
  line-height: 1.65;
}

.tet-detail__button {
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  gap: 11px;
  margin-top: 28px;
  padding: 0 24px;
  border: 0;
  border-radius: 7px;
  color: #fff;
  background: var(--tet-gold);
  box-shadow: 0 12px 28px rgba(221, 151, 24, .24);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: .025em;
  text-decoration: none;
  transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
}

.tet-detail__button:hover {
  transform: translateY(-2px);
  background: #c9860e;
  box-shadow: 0 15px 34px rgba(221, 151, 24, .3);
}

.tet-detail__overview {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, .94fr) minmax(430px, 1.06fr);
  gap: clamp(64px, 8vw, 126px);
  padding: clamp(78px, 8vw, 116px) 0 clamp(62px, 6vw, 88px);
}

.tet-detail__eyebrow,
.tet-detail__section-label {
  margin: 0 0 16px;
  color: var(--tet-gold);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: .13em;
  text-transform: uppercase;
}

.tet-detail__overview-copy > .tet-detail__eyebrow {
  color: var(--tet-gold);
}

.tet-detail__overview-copy {
  position: relative;
  isolation: isolate;
  padding-left: clamp(0px, 1vw, 16px);
}

.tet-detail__overview-copy::before {
  content: '“';
  position: absolute;
  z-index: -1;
  top: 28px;
  left: clamp(-154px, -9vw, -112px);
  color: rgba(221, 151, 24, .075);
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(150px, 13vw, 224px);
  font-weight: 600;
  line-height: .8;
}

.tet-detail__overview-copy::after {
  content: '';
  position: absolute;
  z-index: -1;
  top: -42px;
  bottom: 4px;
  left: clamp(-92px, -5vw, -58px);
  width: 1px;
  background: repeating-linear-gradient(to bottom, rgba(221, 151, 24, .34) 0 5px, transparent 5px 12px);
  transform: rotate(-1.5deg);
  transform-origin: center;
}

.tet-detail__editorial-title {
  max-width: 690px;
  margin: 0;
  color: var(--tet-navy-deep);
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(38px, 4vw, 61px);
  font-weight: 500;
  letter-spacing: -.035em;
  line-height: 1.02;
  text-wrap: balance;
}

.tet-detail__editorial-rule {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 23px 0 28px;
  color: var(--tet-gold);
}

.tet-detail__editorial-rule b {
  font-size: 23px;
  font-weight: 400;
  line-height: 1;
}

.tet-detail__editorial-rule span {
  width: min(100%, 600px);
  height: 1px;
  background: linear-gradient(90deg, rgba(221, 151, 24, .62), rgba(221, 151, 24, .18));
}

.tet-detail__overview-copy > p:not(.tet-detail__eyebrow) {
  margin: 0 0 21px;
  color: var(--tet-muted);
  font-size: clamp(15px, 1.05vw, 17px);
  line-height: 1.78;
}

.tet-detail__overview-copy > p:last-child { margin-bottom: 0; }

.tet-detail__highlights {
  min-width: 0;
  padding-left: 0;
}

.tet-detail__highlights ol {
  position: relative;
  display: grid;
  gap: 22px;
  margin: 0;
  padding: 8px 0 8px 88px;
  list-style: none;
  counter-reset: highlight;
}

.tet-detail__highlights ol::before {
  content: '';
  position: absolute;
  top: 36px;
  bottom: 36px;
  left: 27px;
  width: 1px;
  background: linear-gradient(var(--tet-gold), rgba(221, 151, 24, .28));
}

.tet-detail__highlights li {
  position: relative;
  width: fit-content;
  min-width: min(72%, 520px);
  max-width: 100%;
  min-height: 66px;
  display: flex;
  align-items: center;
  padding: 16px 22px;
  border: 1px solid rgba(221, 151, 24, .2);
  border-radius: 12px;
  color: var(--tet-muted);
  background: rgba(255, 255, 255, .42);
  box-shadow: 0 9px 24px rgba(3, 47, 85, .055);
  font-size: 15px;
  line-height: 1.56;
  counter-increment: highlight;
}

.tet-detail__highlights li::before {
  content: counter(highlight, decimal-leading-zero);
  position: absolute;
  top: 50%;
  left: -88px;
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  transform: translateY(-50%);
  border: 1.5px solid var(--tet-gold);
  border-radius: 50%;
  color: var(--tet-gold);
  background: var(--tet-cream);
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.05;
}

.tet-detail__highlights li::after {
  content: '';
  position: absolute;
  top: 50%;
  left: -33px;
  width: 33px;
  height: 11px;
  border-top: 1px solid rgba(221, 151, 24, .48);
  border-right: 1px solid rgba(221, 151, 24, .48);
  border-radius: 0 8px 0 0;
}

.tet-detail__highlights li:nth-child(2),
.tet-detail__highlights li:nth-child(3) { min-width: min(88%, 650px); }

.tet-detail__highlights li:nth-child(4) { min-width: min(82%, 610px); }

.tet-detail__itinerary {
  padding-bottom: clamp(82px, 9vw, 132px);
}

.tet-detail__itinerary-heading,
.tet-detail__gallery-heading {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 34px;
}

.tet-detail__itinerary-heading h2,
.tet-detail__gallery-heading h2 {
  flex: 0 0 auto;
  margin: 0;
  color: var(--tet-navy);
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(34px, 3.5vw, 50px);
  font-weight: 600;
  letter-spacing: -.025em;
}

.tet-detail__itinerary-heading span,
.tet-detail__gallery-heading span { height: 1px; flex: 1; background: var(--tet-line); }

.tet-detail__timeline {
  position: relative;
  display: grid;
  gap: clamp(24px, 3vw, 42px);
  padding-left: 58px;
}

.tet-detail__timeline::before {
  content: '';
  position: absolute;
  top: 16px;
  bottom: 16px;
  left: 19px;
  width: 1px;
  background: linear-gradient(var(--tet-gold), rgba(221, 151, 24, .18));
}

.tet-detail__step {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(260px, .75fr);
  gap: clamp(28px, 5vw, 72px);
  align-items: center;
}

.tet-detail__step--reverse { grid-template-columns: minmax(260px, .75fr) minmax(0, 1.45fr); }
.tet-detail__step--reverse .tet-detail__step-media { order: 2; }
.tet-detail__step--reverse .tet-detail__step-copy { order: 1; }

.tet-detail__step-number {
  position: absolute;
  left: -58px;
  top: 14px;
  width: 38px;
  color: var(--tet-gold);
  background: var(--tet-cream);
  font-size: 13px;
  font-weight: 800;
  text-align: left;
}

.tet-detail__step-number::after {
  content: '';
  position: absolute;
  top: 4px;
  right: -6px;
  width: 9px;
  height: 9px;
  border: 2px solid var(--tet-cream);
  border-radius: 50%;
  background: var(--tet-gold);
}

.tet-detail__step-media {
  overflow: hidden;
  aspect-ratio: 16 / 6.7;
  border-radius: var(--tet-image-radius);
  background: #e8e4dd;
}

.tet-detail__step-media img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform .65s cubic-bezier(.2, .7, .2, 1);
}

.tet-detail__step:hover .tet-detail__step-media img { transform: scale(1.035); }

.tet-detail__step-copy h3 {
  margin: 0 0 10px;
  color: var(--tet-navy);
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(25px, 2.2vw, 34px);
  font-weight: 600;
  letter-spacing: -.02em;
  line-height: 1.08;
}

.tet-detail__step-copy p {
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  color: var(--tet-muted);
  font-size: 14px;
  line-height: 1.65;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  line-clamp: 4;
}

.tet-detail__lists-wrap {
  width: calc(100% - (var(--tet-content-gutter) * 2));
  max-width: var(--tet-content-max-width);
  margin: 0 auto clamp(82px, 9vw, 126px);
}

.tet-detail__lists {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  filter: drop-shadow(0 18px 34px rgba(3, 47, 85, .055));
}

.tet-detail__lists::before,
.tet-detail__lists::after {
  content: '';
  position: absolute;
  z-index: 3;
  left: 50%;
  width: 28px;
  height: 28px;
  transform: translateX(-50%);
  border: 1px solid rgba(221, 151, 24, .28);
  border-radius: 50%;
  background: var(--tet-cream);
}

.tet-detail__lists::before { top: -14px; }
.tet-detail__lists::after { bottom: -14px; }

.tet-detail__list {
  position: relative;
  min-width: 0;
  padding: 54px clamp(28px, 3.2vw, 52px) 38px;
  border: 1px solid rgba(221, 151, 24, .3);
  background: linear-gradient(145deg, rgba(255, 255, 255, .54), rgba(255, 250, 241, .44));
}

.tet-detail__list:first-child {
  border-right: 0;
  border-radius: 20px 0 0 20px;
}

.tet-detail__list:last-child {
  border-left-style: dashed;
  border-radius: 0 20px 20px 0;
}

.tet-detail__list-badge {
  position: absolute;
  z-index: 2;
  top: -28px;
  left: 50%;
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  transform: translateX(-50%);
  border: 1.5px solid var(--tet-gold);
  border-radius: 50%;
  color: var(--tet-gold);
  background: var(--tet-cream);
  box-shadow: 0 5px 14px rgba(3, 47, 85, .05);
}

.tet-detail__list-badge svg {
  width: 26px;
  height: 26px;
  margin: 0;
  stroke-width: 2.2;
}

.tet-detail__list-top-rule {
  position: absolute;
  top: 14px;
  right: 22px;
  left: 22px;
  height: 1px;
  background: repeating-linear-gradient(90deg, rgba(221, 151, 24, .5) 0 6px, transparent 6px 10px);
}

.tet-detail__list h2 {
  margin: 0 0 26px;
  color: var(--tet-navy-deep);
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(30px, 2.8vw, 39px);
  font-weight: 600;
  line-height: 1.1;
  text-align: center;
}

.tet-detail__list ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 17px clamp(22px, 3vw, 46px);
  margin: 0;
  padding: 0;
  list-style: none;
}

.tet-detail__list li {
  display: grid;
  grid-template-columns: 18px minmax(0, 1fr);
  gap: 12px;
  align-items: start;
  color: var(--tet-muted);
  font-size: 15px;
  line-height: 1.6;
}

.tet-detail__list svg {
  width: 17px;
  height: 17px;
  margin-top: 2px;
  color: var(--tet-gold);
  stroke-width: 2;
}

.tet-detail__gallery { padding-bottom: 32px; }

.tet-detail__gallery-grid {
  display: grid;
  grid-template-columns: 1.55fr .72fr .72fr;
  grid-template-rows: repeat(2, minmax(150px, 220px));
  gap: 10px;
}

.tet-detail__gallery-item {
  overflow: hidden;
  border-radius: var(--tet-image-radius);
  background: #e8e4dd;
}
.tet-detail__gallery-item:first-child { grid-row: 1 / 3; }
.tet-detail__gallery-item:only-child { grid-column: 1 / -1; grid-row: 1 / 3; }

.tet-detail__gallery-item img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform .65s cubic-bezier(.2, .7, .2, 1);
}

.tet-detail__gallery-item:hover img { transform: scale(1.035); }

.tet-detail__booking-strip {
  display: grid;
  grid-template-columns: minmax(150px, .7fr) 1fr 1fr auto;
  align-items: center;
  margin-bottom: clamp(68px, 7vw, 100px);
  border: 1px solid rgba(221, 151, 24, .28);
  background: #fffaf1;
}

.tet-detail__booking-cell {
  min-height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 18px 26px;
  border-right: 1px solid rgba(221, 151, 24, .18);
  text-align: center;
}

.tet-detail__price { display: grid; justify-items: center; gap: 0; }
.tet-detail__price small { color: var(--tet-muted); font-size: 12px; }
.tet-detail__price strong { color: var(--tet-navy); font-family: "Cormorant Garamond", Georgia, serif; font-size: 38px; line-height: .9; }
.tet-detail__price span { color: var(--tet-muted); font-size: 11px; }

.tet-detail__booking-cell svg { width: 22px; color: var(--tet-navy); }
.tet-detail__booking-cell div { display: grid; justify-items: center; gap: 2px; }
.tet-detail__booking-cell b { color: var(--tet-navy); font-size: 13px; }
.tet-detail__booking-cell small { color: var(--tet-muted); font-size: 11px; }

.tet-detail__booking-action {
  min-height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
}
.tet-detail__booking-action .tet-detail__button { margin: 0; white-space: nowrap; }

.tet-detail__state {
  min-height: 62vh;
  display: grid;
  place-items: center;
  padding: 100px 24px;
  text-align: center;
  background: var(--tet-cream);
}

.tet-detail__state svg { width: 40px; height: 40px; color: var(--tet-gold); }
.tet-detail__state h1 { margin: 16px 0 8px; font-family: "Cormorant Garamond", Georgia, serif; font-size: 48px; color: var(--tet-navy); }
.tet-detail__state p { margin: 0; color: var(--tet-muted); }

.tet-detail__loader {
  width: 44px;
  height: 44px;
  border: 3px solid rgba(221, 151, 24, .2);
  border-top-color: var(--tet-gold);
  border-radius: 50%;
  animation: tet-spin .8s linear infinite;
}

@keyframes tet-spin { to { transform: rotate(360deg); } }

@media (max-width: 900px) {
  .tet-detail__overview { grid-template-columns: 1fr; gap: 54px; }
  .tet-detail__overview-copy::before { left: -58px; }
  .tet-detail__overview-copy::after { left: -24px; }
  .tet-detail__highlights { padding: 0; }
  .tet-detail__step,
  .tet-detail__step--reverse { grid-template-columns: 1fr; gap: 22px; }
  .tet-detail__step--reverse .tet-detail__step-media,
  .tet-detail__step--reverse .tet-detail__step-copy { order: initial; }
  .tet-detail__step-copy { padding-bottom: 12px; }
  .tet-detail__gallery-grid { grid-template-columns: 1.2fr .8fr; }
  .tet-detail__gallery-item:nth-child(n+4) { display: none; }
  .tet-detail__booking-strip { grid-template-columns: 1fr 1fr; }
  .tet-detail__booking-cell:nth-child(2) { border-right: 0; }
  .tet-detail__booking-action { min-height: 76px; display: flex; align-items: center; justify-content: flex-end; }
}

@media (max-width: 640px) {
  .tet-detail__hero { min-height: 560px; align-items: end; }
  .tet-detail__hero::before { background: linear-gradient(0deg, rgba(2, 39, 73, .97) 0%, rgba(2, 39, 73, .78) 46%, rgba(2, 39, 73, .12) 100%); }
  .tet-detail__hero-content { padding: 160px 0 56px; }
  .tet-detail__hero-copy { max-width: 100%; }
  .tet-detail__hero h1 { font-size: clamp(45px, 14vw, 64px); }
  .tet-detail__hero-description { font-size: 15px; }
  .tet-detail__overview { padding: 64px 0 40px; }
  .tet-detail__overview-copy { padding-left: 0; }
  .tet-detail__overview-copy::before,
  .tet-detail__overview-copy::after { display: none; }
  .tet-detail__editorial-title { font-size: clamp(36px, 11vw, 48px); }
  .tet-detail__highlights ol { gap: 18px; padding-left: 66px; }
  .tet-detail__highlights ol::before { left: 23px; }
  .tet-detail__highlights li {
    width: 100%;
    min-width: 0 !important;
    padding: 15px 17px;
    font-size: 14px;
  }
  .tet-detail__highlights li::before { left: -66px; width: 48px; height: 48px; font-size: 18px; }
  .tet-detail__highlights li::after { left: -19px; width: 19px; }
  .tet-detail__timeline { padding-left: 42px; }
  .tet-detail__timeline::before { left: 12px; }
  .tet-detail__step-number { left: -42px; width: 28px; }
  .tet-detail__step-number::after { right: -3px; }
  .tet-detail__step-media { aspect-ratio: 16 / 9; }
  .tet-detail__lists-wrap { width: calc(100% - (var(--tet-content-gutter) * 2)); padding: 0; }
  .tet-detail__lists { grid-template-columns: 1fr; gap: 54px; filter: none; }
  .tet-detail__lists::before,
  .tet-detail__lists::after { display: none; }
  .tet-detail__list { padding: 50px 22px 30px; border: 1px solid rgba(221, 151, 24, .3); border-radius: 18px !important; }
  .tet-detail__list:last-child { border-left-style: solid; }
  .tet-detail__list ul { grid-template-columns: 1fr; }
  .tet-detail__gallery-grid { grid-template-columns: 1fr 1fr; grid-template-rows: 250px 160px; }
  .tet-detail__gallery-item:first-child { grid-column: 1 / -1; grid-row: auto; }
  .tet-detail__gallery-item:only-child { grid-row: 1 / 3; }
  .tet-detail__booking-strip { grid-template-columns: 1fr; }
  .tet-detail__booking-cell { min-height: 70px; border-right: 0; border-bottom: 1px solid rgba(221, 151, 24, .18); }
  .tet-detail__booking-action { justify-content: stretch; padding: 18px; }
  .tet-detail__booking-action .tet-detail__button { width: 100%; }
}

@media (prefers-reduced-motion: reduce) {
  .tet-detail__button,
  .tet-detail__step-media img,
  .tet-detail__gallery-item img { transition: none; }
  .tet-detail__loader { animation-duration: 1.5s; }
}
`;

function serviceSlug(service: BookingServiceRecord) {
  return service.mainSlug?.name?.trim()
    || service.supportedSlugs?.find((item) => item.name)?.name?.trim()
    || '';
}

function paragraphList(value: string) {
  return value
    .split(/\n\s*\n/)
    .map((item) => item.replace(/\s*\n\s*/g, ' ').trim())
    .filter(Boolean);
}

function bulletList(value: string) {
  return value
    .split(/\n+/)
    .map((item) => item.replace(/^[•\-]\s*/, '').trim())
    .filter(Boolean);
}

function parseDescription(description?: string | null): ParsedDescription {
  const normalized = (description || '').replace(/\r/g, '').trim();
  const positions = new Map<string, number>();

  SECTION_HEADINGS.forEach((heading) => {
    const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const match = new RegExp(`(?:^|\\n)${escaped}\\s*(?:\\n|$)`, 'i').exec(normalized);
    if (match) positions.set(heading, match.index + (match[0].startsWith('\n') ? 1 : 0));
  });

  function block(heading: typeof SECTION_HEADINGS[number], next?: typeof SECTION_HEADINGS[number]) {
    const start = positions.get(heading);
    if (start === undefined) return '';
    const contentStart = normalized.indexOf('\n', start);
    if (contentStart < 0) return '';
    const end = next && positions.get(next) !== undefined ? positions.get(next)! : normalized.length;
    return normalized.slice(contentStart + 1, end).trim();
  }

  const quickAndIntro = paragraphList(block('QUICK FACTS', 'TOUR DESCRIPTION'));
  quickAndIntro.shift();

  return {
    intro: quickAndIntro,
    tourDescription: paragraphList(block('TOUR DESCRIPTION', 'HIGHLIGHTS')),
    highlights: bulletList(block('HIGHLIGHTS', "WHAT'S INCLUDED")),
    included: bulletList(block("WHAT'S INCLUDED", "WHAT'S NOT INCLUDED")),
    notIncluded: bulletList(block("WHAT'S NOT INCLUDED", 'GOOD TO KNOW')),
  };
}

function displayPrice(service: BookingServiceRecord) {
  const payment = service.payment;
  if (payment?.rateType === 'NO_FEE') return 'Free';
  const price = payment?.rateType === 'FIXED'
    ? payment.fixed?.price
    : payment?.varied?.minPrice || payment?.varied?.defaultPrice;
  if (price?.formattedValue) return payment?.rateType === 'VARIED' ? `from ${price.formattedValue}` : price.formattedValue;
  const numeric = Number(String(price?.value || '').replace(',', '.'));
  if (Number.isFinite(numeric) && numeric > 0) return `${payment?.rateType === 'VARIED' ? 'from ' : ''}€${numeric.toFixed(0)}`;
  const custom = payment?.custom?.description?.trim() || '';
  return /confirm|schedule|request/i.test(custom) ? 'TBA' : custom || 'TBA';
}

function serviceImages(service: BookingServiceRecord) {
  return [
    service.media?.coverMedia?.image,
    service.media?.mainMedia?.image,
    ...(service.media?.items || []).map((item) => item.image),
  ]
    .map((image) => normalizeWixMediaImage(image))
    .filter((image, index, values): image is string => Boolean(image) && values.indexOf(image) === index);
}

async function loadExcursion(slug: string) {
  const result = await services.queryServices().limit(100).find();
  return ((result.items || []) as unknown as BookingServiceRecord[]).find((service) =>
    service.hidden !== true
    && service.category?.name?.trim().toLowerCase() === 'excursions'
    && serviceSlug(service) === slug,
  ) || null;
}

function itineraryTitle(paragraph: string, highlight: string | undefined, index: number) {
  const source = `${paragraph} ${highlight || ''}`.toLowerCase();
  if (/return|back to|journey home|carries you back/.test(source)) return 'Return Journey';
  if (/pick.?up|meet.*hotel|from your hotel|transfer from/.test(source)) return 'Hotel Pick-up & Transfer';
  if (/board|set sail|crossing|harbour|port of/.test(source)) return 'Departure & Journey';
  if (/swim|beach|bay|turquoise|crystal-clear water/.test(source)) return 'Beach & Swim Stop';
  if (/free time|at your own pace|wander|browse|explore/.test(source)) return 'Free Time & Exploration';
  if (/winery|wine tasting/.test(source)) return 'Winery Experience';
  if (/butterfl/.test(source)) return 'Valley of the Butterflies';
  if (/farma|farm|animals/.test(source)) return 'Farma of Rhodes';
  if (/lindos/.test(source)) return 'Discover Lindos';
  if (/symi/.test(source)) return 'Discover Symi';
  if (/marmaris|turkey/.test(source)) return 'Discover Marmaris';
  return `Experience ${String(index + 1).padStart(2, '0')}`;
}

function InfoList({ title, entries, negative = false }: { title: string; entries: string[]; negative?: boolean }) {
  if (!entries.length) return null;
  return (
    <section className={`tet-detail__list tet-detail__list--${negative ? 'negative' : 'positive'}`}>
      <span className="tet-detail__list-top-rule" aria-hidden="true" />
      <span className="tet-detail__list-badge" aria-hidden="true">
        {negative ? <CircleX /> : <CircleCheck />}
      </span>
      <h2>{title}</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry}>
            {negative ? <CircleX aria-hidden="true" /> : <CircleCheck aria-hidden="true" />}
            <span>{entry}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ExcursionDetailPage() {
  const { slug = '' } = useParams();
  const [service, setService] = useState<BookingServiceRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');

    loadExcursion(slug)
      .then((result) => {
        if (!active) return;
        setService(result);
        if (!result) setError('We could not find this excursion.');
      })
      .catch((reason) => {
        if (!active) return;
        console.error('Unable to load excursion:', reason);
        setError('This excursion is temporarily unavailable. Please try again shortly.');
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => { active = false; };
  }, [slug]);

  const parsed = useMemo(() => parseDescription(service?.description), [service?.description]);
  const images = useMemo(() => service ? serviceImages(service) : [], [service]);

  useEffect(() => {
    if (!service) return;
    const previousTitle = document.title;
    const title = service.name?.trim() || 'Excursion';
    document.title = `${title} | Top Euro Travel`;
    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }
    description.content = service.tagLine?.trim() || parsed.intro[0] || '';
    return () => {
      document.title = previousTitle;
      if (description && previousDescription !== undefined) description.content = previousDescription;
    };
  }, [service, parsed.intro]);

  if (loading) {
    return (
      <div className="tet-detail tet-detail__state" aria-live="polite">
        <div><div className="tet-detail__loader" /><p>Loading excursion details…</p></div>
      </div>
    );
  }

  if (!service || error) {
    return (
      <div className="tet-detail tet-detail__state">
        <div>
          <MapPin aria-hidden="true" />
          <h1>Excursion not found</h1>
          <p>{error || 'This excursion is not currently available.'}</p>
          <Link className="tet-detail__button" to="/excursions">EXPLORE EXCURSIONS</Link>
        </div>
      </div>
    );
  }

  const title = service.name?.trim() || 'Excursion';
  const heroDescription = service.tagLine?.trim() || parsed.intro[0] || '';
  const image = images[0] || travelMedia('excursions-hero.jpg');
  const currentSlug = serviceSlug(service);
  const bookingAvailable = service.onlineBooking?.enabled === true;
  const actionUrl = bookingAvailable ? `/booking-calendar/${encodeURIComponent(currentSlug)}` : '/contact';
  const actionLabel = bookingAvailable ? 'BOOK / ENQUIRE NOW' : 'ENQUIRE NOW';
  const price = displayPrice(service);
  const itinerarySource = (parsed.tourDescription.length ? parsed.tourDescription : parsed.intro).slice(0, 5);
  const galleryImages = images.length ? images.slice(0, 5) : [image];

  return (
    <div className="tet-detail">
      <style>{DETAIL_STYLES}</style>

      <section className="tet-detail__hero" aria-labelledby="tet-excursion-title">
        <Image className="tet-detail__hero-image" src={image} alt="" />
        <div className="tet-detail__hero-content shell">
          <nav className="tet-detail__crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>•</span><Link to="/excursions">Excursions</Link><span>•</span><span>{title}</span>
          </nav>
          <div className="tet-detail__hero-copy">
            <h1 id="tet-excursion-title">{title}</h1>
            {heroDescription && <p className="tet-detail__hero-description">{heroDescription}</p>}
            <Link className="tet-detail__button" to={actionUrl}>{actionLabel}<ArrowRight aria-hidden="true" size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="tet-detail__overview tet-detail__shell">
        <article className="tet-detail__overview-copy">
          <p className="tet-detail__eyebrow">Tour Description</p>
          <h2 className="tet-detail__editorial-title">{heroDescription || title}</h2>
          <div className="tet-detail__editorial-rule" aria-hidden="true"><b>✦</b><span /></div>
          {(parsed.tourDescription.length ? parsed.tourDescription : parsed.intro).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </article>
        <aside className="tet-detail__highlights">
          <p className="tet-detail__eyebrow">Highlights</p>
          <ol>{parsed.highlights.map((item) => <li key={item}>{item}</li>)}</ol>
        </aside>
      </section>

      {(parsed.included.length > 0 || parsed.notIncluded.length > 0) && (
        <section className="tet-detail__lists-wrap" aria-label="Included and not included">
          <div className="tet-detail__lists">
            <InfoList title="Included" entries={parsed.included} />
            <InfoList title="Not Included" entries={parsed.notIncluded} negative />
          </div>
        </section>
      )}

      {itinerarySource.length > 0 && (
        <section className="tet-detail__itinerary tet-detail__shell" aria-labelledby="tet-itinerary-title">
          <div className="tet-detail__itinerary-heading"><h2 id="tet-itinerary-title">Itinerary</h2><span aria-hidden="true" /></div>
          <div className="tet-detail__timeline">
            {itinerarySource.map((paragraph, index) => {
              const stepImage = galleryImages[(index + 1) % galleryImages.length] || image;
              return (
                <article className={`tet-detail__step${index % 2 ? ' tet-detail__step--reverse' : ''}`} key={`${paragraph}-${index}`}>
                  <span className="tet-detail__step-number">{String(index + 1).padStart(2, '0')}</span>
                  <div className="tet-detail__step-media"><Image src={stepImage} alt={`${title} itinerary ${index + 1}`} loading="lazy" /></div>
                  <div className="tet-detail__step-copy">
                    <h3>{itineraryTitle(paragraph, parsed.highlights[index], index)}</h3>
                    <p>{paragraph}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      <section className="tet-detail__gallery tet-detail__shell" aria-labelledby="tet-gallery-title">
        <div className="tet-detail__gallery-heading"><h2 id="tet-gallery-title">Gallery</h2><span aria-hidden="true" /></div>
        <div className="tet-detail__gallery-grid">
          {galleryImages.map((galleryImage, index) => (
            <div className="tet-detail__gallery-item" key={`${galleryImage}-${index}`}>
              <Image src={galleryImage} alt={`${title} gallery view ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="tet-detail__booking-strip tet-detail__shell" aria-label="Excursion booking information">
        <div className="tet-detail__booking-cell tet-detail__price">
          <small>{price === 'TBA' ? 'Price' : 'from'}</small><strong>{price}</strong>{price !== 'TBA' && <span>per person</span>}
        </div>
        <div className="tet-detail__booking-cell"><ShieldCheck aria-hidden="true" /><div><b>Local support</b><small>From our Rhodes team</small></div></div>
        <div className="tet-detail__booking-cell"><CalendarDays aria-hidden="true" /><div><b>{bookingAvailable ? 'Reserve now' : 'Enquire now'}</b><small>{bookingAvailable ? 'Check available dates' : 'Schedule on request'}</small></div></div>
        <div className="tet-detail__booking-action"><Link className="tet-detail__button" to={actionUrl}>{actionLabel}<ArrowRight aria-hidden="true" size={16} /></Link></div>
      </section>
    </div>
  );
}
