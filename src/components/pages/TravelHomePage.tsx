import { PageSeo, Photo, travelMedia } from '@/components/travel/Shared';
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
import { type KeyboardEvent, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// All Home page styling is embedded here so this page can be replaced as one file.
const HOME_STYLES = String.raw`
/*
  Top Euro Travel — Homepage redesign
  Premium editorial DMC direction built around the existing project identity.
  No external fonts or media are loaded here.
*/

.home-cinematic {
  --home-ink: #10213b;
  --home-navy: #071a31;
  --home-navy-2: #0b2747;
  --home-blue: #183d68;
  --home-ivory: #f5f1e8;
  --home-paper: #fbf8f1;
  --home-white: #ffffff;
  --home-gold: #d6ab23;
  --home-gold-soft: #ecd989;
  --home-line: rgba(16, 33, 59, 0.14);
  --home-line-light: rgba(255, 255, 255, 0.16);
  --home-display: var(--font-heading, "Cormorant Garamond", "Times New Roman", serif);
  --home-sans: var(--font-body, Inter, Arial, sans-serif);
  position: relative;
  overflow: clip;
  background: var(--home-ivory);
  color: var(--home-ink);
  font-family: var(--home-sans);
  isolation: isolate;
}

.home-cinematic,
.home-cinematic *,
.home-cinematic *::before,
.home-cinematic *::after {
  box-sizing: border-box;
}

.home-cinematic img,
.home-cinematic video {
  display: block;
  width: 100%;
}

.home-cinematic a,
.home-cinematic button {
  -webkit-tap-highlight-color: transparent;
}

.home-cinematic-shell {
  width: min(calc(100% - 48px), 1280px);
  margin-inline: auto;
}

.home-cinematic h1,
.home-cinematic h2,
.home-cinematic h3,
.home-cinematic p {
  margin-top: 0;
}

.home-cinematic h1,
.home-cinematic h2,
.home-cinematic h3 {
  font-family: var(--home-display);
  font-weight: 500;
  letter-spacing: -0.035em;
  text-wrap: balance;
}

.home-cinematic h1 {
  max-width: 760px;
  margin-bottom: 28px;
  font-size: clamp(3.2rem, 6vw, 6.7rem);
  line-height: 0.95;
}

.home-cinematic h2 {
  margin-bottom: 0;
  font-size: clamp(2.65rem, 4.7vw, 5.25rem);
  line-height: 0.98;
}

.home-cinematic h3 {
  font-size: clamp(2rem, 3vw, 3.55rem);
  line-height: 1.02;
}

.home-cinematic p {
  font-size: clamp(1rem, 1.1vw, 1.12rem);
  line-height: 1.78;
}

.home-cinematic-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  color: #a57905;
  font-family: var(--home-sans);
  font-size: 0.76rem !important;
  font-weight: 800;
  letter-spacing: 0.22em;
  line-height: 1.3 !important;
  text-transform: uppercase;
}

.home-cinematic-eyebrow::before {
  width: 42px;
  height: 1px;
  background: currentColor;
  content: "";
  opacity: 0.72;
}

.home-cinematic-lead {
  max-width: 690px;
  margin-bottom: 24px;
  color: rgba(16, 33, 59, 0.82);
  font-family: var(--home-display);
  font-size: clamp(1.45rem, 2vw, 2.05rem) !important;
  line-height: 1.42 !important;
}

.home-cinematic-heading {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.58fr);
  align-items: end;
  gap: clamp(40px, 8vw, 112px);
  margin-bottom: clamp(54px, 6vw, 84px);
}

.home-cinematic-heading > p,
.home-cinematic-heading__action p {
  margin-bottom: 0;
  color: rgba(16, 33, 59, 0.68);
}

.home-cinematic-heading__action {
  display: grid;
  gap: 24px;
  justify-items: start;
}

.home-cinematic-heading--light,
.home-cinematic-heading--light > p,
.home-cinematic-heading--light .home-cinematic-heading__action p {
  color: var(--home-white);
}

.home-cinematic-heading--light > p,
.home-cinematic-heading--light .home-cinematic-heading__action p {
  color: rgba(255, 255, 255, 0.68);
}

.home-cinematic-button {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 0 22px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-family: var(--home-sans);
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.085em;
  line-height: 1;
  text-decoration: none;
  text-transform: uppercase;
  transition: transform 260ms ease, color 260ms ease, background-color 260ms ease, border-color 260ms ease, box-shadow 260ms ease;
}

.home-cinematic-button svg,
.home-cinematic-text-link svg {
  width: 17px;
  height: 17px;
  flex: 0 0 auto;
  transition: transform 260ms ease;
}

.home-cinematic-button:hover,
.home-cinematic-button:focus-visible {
  transform: translateY(-2px);
}

.home-cinematic-button:hover svg,
.home-cinematic-button:focus-visible svg,
.home-cinematic-text-link:hover svg,
.home-cinematic-text-link:focus-visible svg {
  transform: translateX(5px);
}

.home-cinematic-button--gold {
  background: var(--home-gold);
  box-shadow: 0 14px 38px rgba(214, 171, 35, 0.23);
  color: var(--home-navy);
}

.home-cinematic-button--gold:hover,
.home-cinematic-button--gold:focus-visible {
  background: #e2b829;
  box-shadow: 0 18px 45px rgba(214, 171, 35, 0.31);
}

.home-cinematic-button--outline-light {
  border-color: rgba(255, 255, 255, 0.44);
  background: rgba(7, 26, 49, 0.15);
  color: var(--home-white);
  backdrop-filter: blur(10px);
}

.home-cinematic-button--outline-light:hover,
.home-cinematic-button--outline-light:focus-visible {
  border-color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.12);
}

.home-cinematic-text-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--home-blue);
  font-size: 0.77rem;
  font-weight: 800;
  letter-spacing: 0.09em;
  text-decoration: none;
  text-transform: uppercase;
}

.home-cinematic-text-link--light {
  color: var(--home-white);
}

.home-cinematic-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.home-cinematic :focus-visible {
  outline: 2px solid var(--home-gold-soft);
  outline-offset: 4px;
}

/* Header contact refinement — scoped to the Home page only. */
body.is-top-euro-home header a[href="/contact"],
body.is-top-euro-home [data-site-header] a[href="/contact"] {
  min-height: 40px !important;
  padding: 0 18px !important;
  border: 1px solid rgba(214, 171, 35, 0.92) !important;
  border-radius: 8px !important;
  background: rgba(7, 26, 49, 0.12) !important;
  box-shadow: none !important;
  color: #ffffff !important;
  backdrop-filter: blur(8px);
  transition: background-color 220ms ease, color 220ms ease, transform 220ms ease !important;
}

body.is-top-euro-home header a[href="/contact"]:hover,
body.is-top-euro-home [data-site-header] a[href="/contact"]:hover {
  background: #d6ab23 !important;
  color: #071a31 !important;
  transform: translateY(-1px);
}

/* Hero */
.home-cinematic-hero {
  position: relative;
  display: grid;
  min-height: 96svh;
  align-items: center;
  overflow: hidden;
  padding: clamp(132px, 17vh, 190px) 0 clamp(170px, 19vh, 225px);
  background: var(--home-navy);
  color: var(--home-white);
}

.home-cinematic-hero__video {
  position: absolute;
  inset: 0;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  transform: scale(1.02);
}

.home-cinematic-hero__shade {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(4, 20, 39, 0.91) 0%, rgba(4, 20, 39, 0.75) 33%, rgba(4, 20, 39, 0.25) 65%, rgba(4, 20, 39, 0.12) 100%),
    linear-gradient(180deg, rgba(4, 20, 39, 0.45) 0%, rgba(4, 20, 39, 0.04) 46%, rgba(4, 20, 39, 0.46) 100%);
  pointer-events: none;
}

.home-cinematic-hero__grain {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.12) 0.45px, transparent 0.45px);
  background-size: 5px 5px;
  opacity: 0.08;
  pointer-events: none;
}

.home-cinematic-hero__content {
  position: relative;
  z-index: 2;
}

.home-cinematic-hero .home-cinematic-eyebrow {
  color: var(--home-gold-soft);
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 720ms ease 120ms, transform 720ms ease 120ms;
}

.home-cinematic-hero__title {
  display: grid;
  max-width: 880px;
  margin-bottom: 28px;
  font-family: var(--home-display);
  font-weight: 500;
  letter-spacing: -0.048em;
  line-height: 0.91 !important;
}

.home-cinematic-hero__title span,
.home-cinematic-hero__title em {
  display: block;
  opacity: 0;
  transform: translateY(36px);
  transition: opacity 900ms cubic-bezier(0.2, 0.75, 0.25, 1), transform 900ms cubic-bezier(0.2, 0.75, 0.25, 1);
}

.home-cinematic-hero__title span {
  color: var(--home-white);
  font-size: clamp(3.4rem, 6.9vw, 7.8rem);
  transition-delay: 220ms;
}

.home-cinematic-hero__title em {
  margin-top: 0.05em;
  color: var(--home-gold-soft);
  font-size: clamp(2.75rem, 5.35vw, 6.2rem);
  font-style: italic;
  transition-delay: 340ms;
}

.home-cinematic-hero__lead {
  max-width: 640px;
  margin-bottom: 34px;
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(1.04rem, 1.35vw, 1.25rem) !important;
  line-height: 1.72 !important;
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 760ms ease 480ms, transform 760ms ease 480ms;
}

.home-cinematic-hero .home-cinematic-actions {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 760ms ease 600ms, transform 760ms ease 600ms;
}

.home-cinematic.is-ready .home-cinematic-hero .home-cinematic-eyebrow,
.home-cinematic.is-ready .home-cinematic-hero__title span,
.home-cinematic.is-ready .home-cinematic-hero__title em,
.home-cinematic.is-ready .home-cinematic-hero__lead,
.home-cinematic.is-ready .home-cinematic-hero .home-cinematic-actions {
  opacity: 1;
  transform: translateY(0);
}

.home-cinematic-hero__proof {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  margin-top: clamp(52px, 8vh, 88px);
  color: rgba(255, 255, 255, 0.62);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 700ms ease 760ms;
}

.home-cinematic.is-ready .home-cinematic-hero__proof {
  opacity: 1;
}

.home-cinematic-hero__proof span {
  display: inline-flex;
  align-items: center;
}

.home-cinematic-hero__proof span:not(:last-child)::after {
  width: 1px;
  height: 17px;
  margin: 0 18px;
  background: rgba(255, 255, 255, 0.26);
  content: "";
}

.home-cinematic-hero__scroll {
  position: absolute;
  right: clamp(24px, 4vw, 72px);
  bottom: clamp(78px, 9vh, 108px);
  z-index: 3;
  display: grid;
  justify-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-decoration: none;
  text-transform: uppercase;
}

.home-cinematic-hero__scroll svg {
  width: 20px;
  animation: home-scroll-hint 1.9s ease-in-out infinite;
}

.home-cinematic-hero__handoff {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  height: clamp(150px, 18vh, 220px);
  background: linear-gradient(180deg, rgba(245, 241, 232, 0) 0%, rgba(245, 241, 232, 0.14) 38%, var(--home-ivory) 100%);
  pointer-events: none;
}

/* Intro */
.home-cinematic-intro {
  position: relative;
  z-index: 3;
  margin-top: clamp(-92px, -7vw, -58px);
  padding: clamp(132px, 12vw, 180px) 0 clamp(104px, 10vw, 150px);
  border-radius: 34px 34px 0 0;
  background:
    radial-gradient(circle at 88% 16%, rgba(214, 171, 35, 0.09), transparent 26%),
    var(--home-ivory);
}

.home-cinematic-intro__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.04fr) minmax(380px, 0.86fr);
  align-items: center;
  gap: clamp(70px, 10vw, 150px);
}

.home-cinematic-intro__copy p:not(.home-cinematic-eyebrow):not(.home-cinematic-lead) {
  max-width: 730px;
  color: rgba(16, 33, 59, 0.72);
}

.home-cinematic-intro__copy .home-cinematic-text-link {
  margin-top: 12px;
}

.home-cinematic-intro__visual {
  position: relative;
  min-height: 650px;
}

.home-cinematic-intro__image {
  position: absolute;
  overflow: hidden;
  background: #d9e2eb;
}

.home-cinematic-intro__image img,
.home-cinematic-services__media img,
.home-cinematic-island-stage__visual img,
.home-cinematic-experience img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-cinematic-intro__image--main {
  top: 0;
  right: 0;
  width: 82%;
  height: 82%;
  border-radius: 22px;
  box-shadow: 0 36px 80px rgba(7, 26, 49, 0.16);
}

.home-cinematic-intro__image--detail {
  bottom: 0;
  left: 0;
  width: 48%;
  height: 48%;
  border: 10px solid var(--home-ivory);
  border-radius: 18px;
  box-shadow: 0 24px 62px rgba(7, 26, 49, 0.19);
}

.home-cinematic-intro__stamp {
  position: absolute;
  top: 9%;
  left: 2%;
  display: grid;
  min-width: 154px;
  gap: 5px;
  padding: 18px 20px;
  border-left: 2px solid var(--home-gold);
  background: rgba(245, 241, 232, 0.88);
  color: var(--home-ink);
  backdrop-filter: blur(12px);
}

.home-cinematic-intro__stamp span {
  color: rgba(16, 33, 59, 0.56);
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.home-cinematic-intro__stamp strong {
  font-family: var(--home-display);
  font-size: 1.7rem;
  font-weight: 500;
}

.home-cinematic-proof {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: clamp(92px, 9vw, 132px);
  border-top: 1px solid var(--home-line);
  border-bottom: 1px solid var(--home-line);
}

.home-cinematic-proof > div {
  display: grid;
  min-height: 142px;
  align-content: center;
  gap: 7px;
  padding: 24px clamp(14px, 2vw, 28px);
}

.home-cinematic-proof > div:not(:last-child) {
  border-right: 1px solid var(--home-line);
}

.home-cinematic-proof strong {
  color: var(--home-blue);
  font-family: var(--home-display);
  font-size: clamp(2.1rem, 3.2vw, 3.6rem);
  font-weight: 500;
  line-height: 1;
}

.home-cinematic-proof span {
  color: rgba(16, 33, 59, 0.55);
  font-size: 0.69rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

/* Services */
.home-cinematic-services {
  position: relative;
  padding: clamp(110px, 11vw, 170px) 0 clamp(130px, 12vw, 190px);
  background:
    linear-gradient(180deg, var(--home-ivory) 0%, #eef0ef 70%, #dfe7ee 100%);
}

.home-cinematic-services__stage {
  display: grid;
  grid-template-columns: minmax(360px, 0.76fr) minmax(0, 1.24fr);
  min-height: 720px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 26px;
  background: var(--home-navy);
  box-shadow: 0 44px 100px rgba(7, 26, 49, 0.19);
}

.home-cinematic-services__nav {
  display: grid;
  align-content: stretch;
  border-right: 1px solid var(--home-line-light);
}

.home-cinematic-services__nav button {
  position: relative;
  display: grid;
  grid-template-columns: 34px 44px minmax(0, 1fr) 22px;
  align-items: center;
  gap: 13px;
  min-height: 90px;
  padding: 15px 22px;
  border: 0;
  border-bottom: 1px solid var(--home-line-light);
  background: transparent;
  color: rgba(255, 255, 255, 0.62);
  cursor: pointer;
  text-align: left;
  transition: color 240ms ease, background-color 240ms ease;
}

.home-cinematic-services__nav button:last-child {
  border-bottom: 0;
}

.home-cinematic-services__nav button::before {
  position: absolute;
  top: 18%;
  bottom: 18%;
  left: 0;
  width: 3px;
  background: var(--home-gold);
  content: "";
  opacity: 0;
  transform: scaleY(0.45);
  transition: opacity 240ms ease, transform 240ms ease;
}

.home-cinematic-services__nav button:hover,
.home-cinematic-services__nav button.is-active {
  background: rgba(255, 255, 255, 0.055);
  color: var(--home-white);
}

.home-cinematic-services__nav button.is-active::before {
  opacity: 1;
  transform: scaleY(1);
}

.home-cinematic-services__number {
  color: var(--home-gold-soft);
  font-family: var(--home-display);
  font-size: 1.1rem;
}

.home-cinematic-services__icon {
  display: grid;
  width: 40px;
  height: 40px;
  place-items: center;
  color: var(--home-gold-soft);
}

.home-cinematic-services__icon svg {
  width: 21px;
  height: 21px;
  stroke-width: 1.55;
}

.home-cinematic-services__label {
  display: grid;
  gap: 4px;
}

.home-cinematic-services__label strong {
  color: inherit;
  font-size: 0.9rem;
  line-height: 1.3;
}

.home-cinematic-services__label small {
  display: block;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.44);
  font-size: 0.68rem;
  line-height: 1.4;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.home-cinematic-services__arrow {
  width: 18px;
  opacity: 0.4;
  transition: opacity 240ms ease, transform 240ms ease;
}

.home-cinematic-services__nav button.is-active .home-cinematic-services__arrow,
.home-cinematic-services__nav button:hover .home-cinematic-services__arrow {
  opacity: 1;
  transform: translateX(4px);
}

.home-cinematic-services__panel {
  position: relative;
  display: grid;
  grid-template-rows: minmax(380px, 1fr) auto;
  min-width: 0;
  animation: home-panel-in 520ms cubic-bezier(0.2, 0.75, 0.25, 1) both;
}

.home-cinematic-services__media {
  position: relative;
  min-height: 430px;
  overflow: hidden;
}

.home-cinematic-services__media img {
  transform: scale(1.025);
  animation: home-media-in 900ms cubic-bezier(0.2, 0.75, 0.25, 1) both;
}

.home-cinematic-services__media-shade {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(7, 26, 49, 0.04), rgba(7, 26, 49, 0.34)),
    linear-gradient(90deg, rgba(7, 26, 49, 0.22), transparent 48%);
}

.home-cinematic-services__media-index {
  position: absolute;
  top: 24px;
  right: 28px;
  color: rgba(255, 255, 255, 0.72);
  font-family: var(--home-display);
  font-size: clamp(3rem, 7vw, 7rem);
  line-height: 1;
  opacity: 0.56;
}

.home-cinematic-services__panel-copy {
  position: relative;
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr);
  gap: 8px 18px;
  align-items: start;
  padding: 34px clamp(28px, 4vw, 56px) 42px;
  border-top: 1px solid var(--home-line-light);
  color: var(--home-white);
}

.home-cinematic-services__panel-icon {
  grid-row: 1 / span 5;
  display: grid;
  width: 50px;
  height: 50px;
  place-items: center;
  border: 1px solid rgba(214, 171, 35, 0.42);
  border-radius: 50%;
  color: var(--home-gold-soft);
}

.home-cinematic-services__panel-icon svg {
  width: 23px;
  height: 23px;
  stroke-width: 1.45;
}

.home-cinematic-services__panel-copy > p {
  margin-bottom: 0;
  color: var(--home-gold-soft);
  font-size: 0.67rem !important;
  font-weight: 800;
  letter-spacing: 0.14em;
  line-height: 1.3 !important;
  text-transform: uppercase;
}

.home-cinematic-services__panel-copy h3 {
  margin: 2px 0 5px;
  font-size: clamp(2.2rem, 3.6vw, 4.15rem);
}

.home-cinematic-services__panel-copy > strong {
  color: rgba(255, 255, 255, 0.9);
  font-family: var(--home-display);
  font-size: clamp(1.2rem, 1.8vw, 1.65rem);
  font-weight: 500;
}

.home-cinematic-services__panel-copy > span:not(.home-cinematic-services__panel-icon) {
  max-width: 720px;
  color: rgba(255, 255, 255, 0.64);
  font-size: 0.95rem;
  line-height: 1.75;
}

.home-cinematic-services__panel-copy .home-cinematic-text-link {
  margin-top: 10px;
}

/* Destinations */
.home-cinematic-islands {
  position: relative;
  padding: clamp(158px, 15vw, 230px) 0 clamp(126px, 12vw, 190px);
  background:
    radial-gradient(circle at 82% 22%, rgba(42, 91, 137, 0.52), transparent 34%),
    linear-gradient(180deg, #dfe7ee 0%, #153a61 11%, #0a2646 30%, var(--home-navy) 100%);
  color: var(--home-white);
}

.home-cinematic-islands .home-cinematic-eyebrow,
.home-cinematic-mice .home-cinematic-eyebrow,
.home-cinematic-contact .home-cinematic-eyebrow {
  color: var(--home-gold-soft);
}

.home-cinematic-islands__tabs {
  display: flex;
  align-items: end;
  gap: clamp(30px, 5vw, 72px);
  margin-bottom: 34px;
  border-bottom: 1px solid var(--home-line-light);
}

.home-cinematic-islands__tabs button {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 62px;
  padding: 0 0 18px;
  border: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.48);
  cursor: pointer;
  font-family: var(--home-display);
  font-size: clamp(1.55rem, 2.4vw, 2.45rem);
  transition: color 240ms ease;
}

.home-cinematic-islands__tabs button::after {
  position: absolute;
  right: 0;
  bottom: -1px;
  left: 0;
  height: 2px;
  background: var(--home-gold);
  content: "";
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 280ms ease;
}

.home-cinematic-islands__tabs button.is-active {
  color: var(--home-white);
}

.home-cinematic-islands__tabs button.is-active::after {
  transform: scaleX(1);
}

.home-cinematic-islands__tabs button span {
  color: var(--home-gold-soft);
  font-family: var(--home-sans);
  font-size: 0.66rem;
  font-weight: 800;
  letter-spacing: 0.14em;
}

.home-cinematic-island-stage {
  display: grid;
  grid-template-columns: minmax(0, 1.22fr) minmax(330px, 0.72fr);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.035);
  box-shadow: 0 38px 90px rgba(0, 0, 0, 0.24);
  animation: home-panel-in 520ms cubic-bezier(0.2, 0.75, 0.25, 1) both;
}

.home-cinematic-island-stage__visual {
  position: relative;
  min-height: 610px;
  overflow: hidden;
}

.home-cinematic-island-stage__visual::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 58%, rgba(7, 26, 49, 0.45) 100%);
  content: "";
}

.home-cinematic-island-stage__visual img {
  animation: home-media-in 900ms cubic-bezier(0.2, 0.75, 0.25, 1) both;
}

.home-cinematic-island-stage__number {
  position: absolute;
  bottom: 24px;
  left: 28px;
  z-index: 2;
  color: rgba(255, 255, 255, 0.56);
  font-family: var(--home-display);
  font-size: clamp(4rem, 9vw, 9rem);
  line-height: 0.8;
}

.home-cinematic-island-stage__copy {
  display: grid;
  align-content: center;
  padding: clamp(42px, 5vw, 76px);
}

.home-cinematic-island-stage__eyebrow {
  margin-bottom: 18px;
  color: var(--home-gold-soft);
  font-size: 0.68rem !important;
  font-weight: 800;
  letter-spacing: 0.14em;
  line-height: 1.4 !important;
  text-transform: uppercase;
}

.home-cinematic-island-stage__copy h3 {
  margin-bottom: 20px;
}

.home-cinematic-island-stage__copy > p:not(.home-cinematic-island-stage__eyebrow) {
  color: rgba(255, 255, 255, 0.66);
}

.home-cinematic-island-stage__copy ul {
  display: grid;
  gap: 12px;
  margin: 14px 0 30px;
  padding: 0;
  list-style: none;
}

.home-cinematic-island-stage__copy li {
  position: relative;
  padding-left: 22px;
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.88rem;
}

.home-cinematic-island-stage__copy li::before {
  position: absolute;
  top: 0.55em;
  left: 0;
  width: 8px;
  height: 1px;
  background: var(--home-gold);
  content: "";
}

/* MICE */
.home-cinematic-mice {
  position: relative;
  display: grid;
  min-height: 760px;
  align-items: center;
  overflow: hidden;
  padding: clamp(110px, 11vw, 170px) 0;
  background-position: center;
  background-size: cover;
  color: var(--home-white);
}

.home-cinematic-mice::before {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(7, 26, 49, 0.18), rgba(7, 26, 49, 0.48));
  content: "";
}

.home-cinematic-mice__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(7, 26, 49, 0.94) 0%, rgba(7, 26, 49, 0.82) 42%, rgba(7, 26, 49, 0.22) 72%, rgba(7, 26, 49, 0.08) 100%),
    linear-gradient(180deg, rgba(7, 26, 49, 0.08), rgba(7, 26, 49, 0.45));
}

.home-cinematic-mice__content {
  position: relative;
  z-index: 2;
  display: grid;
  max-width: 1280px;
  justify-items: start;
}

.home-cinematic-mice__content::before {
  width: 2px;
  height: 76px;
  margin-bottom: 26px;
  background: linear-gradient(180deg, var(--home-gold), transparent);
  content: "";
}

.home-cinematic-mice__content h2 {
  max-width: 780px;
  margin-bottom: 28px;
}

.home-cinematic-mice__content > p {
  max-width: 700px;
  margin-bottom: 34px;
  color: rgba(255, 255, 255, 0.72);
}

.home-cinematic-mice__details {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 30px;
  margin-bottom: 38px;
}

.home-cinematic-mice__details span {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.78rem;
  font-weight: 700;
}

.home-cinematic-mice__details svg {
  width: 18px;
  color: var(--home-gold-soft);
  stroke-width: 1.5;
}

/* Experiences */
.home-cinematic-experiences {
  position: relative;
  z-index: 3;
  margin-top: -72px;
  padding: clamp(128px, 12vw, 178px) 0 clamp(120px, 11vw, 170px);
  border-radius: 34px 34px 0 0;
  background:
    radial-gradient(circle at 12% 8%, rgba(214, 171, 35, 0.085), transparent 24%),
    var(--home-paper);
}

.home-cinematic-experiences__mosaic {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: minmax(280px, 0.95fr) minmax(280px, 0.95fr) minmax(250px, 0.8fr);
  gap: 16px;
}

.home-cinematic-experience {
  position: relative;
  min-height: 250px;
  overflow: hidden;
  border-radius: 18px;
  background: var(--home-navy);
  color: var(--home-white);
  text-decoration: none;
}

.home-cinematic-experience--culture {
  grid-column: 1 / 8;
  grid-row: 1 / 3;
}

.home-cinematic-experience--food {
  grid-column: 8 / 13;
  grid-row: 1 / 2;
}

.home-cinematic-experience--water {
  grid-column: 8 / 13;
  grid-row: 2 / 3;
}

.home-cinematic-experience--nature {
  grid-column: 1 / 7;
  grid-row: 3 / 4;
}

.home-cinematic-experience--local {
  grid-column: 7 / 13;
  grid-row: 3 / 4;
}

.home-cinematic-experience img {
  transition: transform 700ms cubic-bezier(0.2, 0.75, 0.25, 1), filter 500ms ease;
}

.home-cinematic-experience__shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(7, 26, 49, 0.02) 24%, rgba(7, 26, 49, 0.84) 100%);
  transition: background 420ms ease;
}

.home-cinematic-experience__index {
  position: absolute;
  top: 20px;
  left: 22px;
  color: rgba(255, 255, 255, 0.74);
  font-family: var(--home-sans);
  font-size: 0.64rem;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.home-cinematic-experience__copy {
  position: absolute;
  right: 68px;
  bottom: 24px;
  left: 24px;
  display: grid;
  gap: 7px;
}

.home-cinematic-experience__copy small {
  color: var(--home-gold-soft);
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.home-cinematic-experience__copy strong {
  max-width: 540px;
  font-family: var(--home-display);
  font-size: clamp(1.65rem, 2.45vw, 3rem);
  font-weight: 500;
  line-height: 1.02;
}

.home-cinematic-experience__arrow {
  position: absolute;
  right: 22px;
  bottom: 24px;
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.38);
  border-radius: 50%;
  transition: background-color 260ms ease, color 260ms ease, transform 260ms ease;
}

.home-cinematic-experience__arrow svg {
  width: 16px;
}

.home-cinematic-experience:hover img,
.home-cinematic-experience:focus-visible img {
  filter: saturate(1.06);
  transform: scale(1.045);
}

.home-cinematic-experience:hover .home-cinematic-experience__arrow,
.home-cinematic-experience:focus-visible .home-cinematic-experience__arrow {
  background: var(--home-gold);
  color: var(--home-navy);
  transform: translateX(3px);
}

/* Contact */
.home-cinematic-contact {
  position: relative;
  padding: clamp(120px, 12vw, 185px) 0;
  overflow: hidden;
  background:
    radial-gradient(circle at 86% 12%, rgba(33, 78, 120, 0.72), transparent 32%),
    linear-gradient(140deg, #0b2a4e 0%, var(--home-navy) 55%, #041222 100%);
  color: var(--home-white);
}

.home-cinematic-contact::before {
  position: absolute;
  top: -30%;
  left: 42%;
  width: 1px;
  height: 165%;
  background: linear-gradient(180deg, transparent, rgba(214, 171, 35, 0.38), transparent);
  content: "";
  transform: rotate(18deg);
}

.home-cinematic-contact__grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, 0.86fr) minmax(420px, 0.82fr);
  align-items: center;
  gap: clamp(74px, 11vw, 160px);
}

.home-cinematic-contact__copy h2 {
  max-width: 700px;
  margin-bottom: 28px;
}

.home-cinematic-contact__copy > p {
  max-width: 650px;
  margin-bottom: 36px;
  color: rgba(255, 255, 255, 0.69);
}

.home-cinematic-contact__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 22px;
}

.home-cinematic-contact__routes {
  display: grid;
  border-top: 1px solid var(--home-line-light);
}

.home-cinematic-contact__routes a {
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr) 24px;
  gap: 4px 18px;
  align-items: center;
  min-height: 126px;
  padding: 24px 6px;
  border-bottom: 1px solid var(--home-line-light);
  color: var(--home-white);
  text-decoration: none;
  transition: padding-left 260ms ease, background-color 260ms ease;
}

.home-cinematic-contact__routes a:hover,
.home-cinematic-contact__routes a:focus-visible {
  padding-left: 18px;
  background: rgba(255, 255, 255, 0.035);
}

.home-cinematic-contact__routes span {
  grid-row: 1 / span 2;
  color: var(--home-gold-soft);
  font-family: var(--home-display);
  font-size: 1.35rem;
}

.home-cinematic-contact__routes strong {
  font-family: var(--home-display);
  font-size: clamp(1.35rem, 2vw, 2rem);
  font-weight: 500;
}

.home-cinematic-contact__routes small {
  color: rgba(255, 255, 255, 0.54);
  font-size: 0.73rem;
  line-height: 1.45;
}

.home-cinematic-contact__routes svg {
  grid-column: 3;
  grid-row: 1 / span 2;
  width: 18px;
  color: rgba(255, 255, 255, 0.62);
  transition: transform 260ms ease, color 260ms ease;
}

.home-cinematic-contact__routes a:hover svg,
.home-cinematic-contact__routes a:focus-visible svg {
  color: var(--home-gold-soft);
  transform: translateX(5px);
}

/* Scroll reveals */
.home-cinematic [data-home-reveal] [data-reveal-item] {
  opacity: 0;
  transform: translateY(34px);
  transition: opacity 780ms cubic-bezier(0.2, 0.75, 0.25, 1), transform 780ms cubic-bezier(0.2, 0.75, 0.25, 1);
}

.home-cinematic [data-home-reveal].is-visible [data-reveal-item] {
  opacity: 1;
  transform: translateY(0);
}

.home-cinematic [data-home-reveal].is-visible [data-reveal-item]:nth-child(2) {
  transition-delay: 110ms;
}

.home-cinematic [data-home-reveal].is-visible [data-reveal-item]:nth-child(3) {
  transition-delay: 190ms;
}

@keyframes home-scroll-hint {
  0%, 100% { transform: translateY(0); opacity: 0.55; }
  50% { transform: translateY(7px); opacity: 1; }
}

@keyframes home-panel-in {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes home-media-in {
  from { opacity: 0.72; transform: scale(1.075); }
  to { opacity: 1; transform: scale(1.025); }
}

/* Large tablet */
@media (max-width: 1120px) {
  .home-cinematic-intro__grid {
    grid-template-columns: minmax(0, 1fr) minmax(330px, 0.82fr);
    gap: 64px;
  }

  .home-cinematic-intro__visual {
    min-height: 570px;
  }

  .home-cinematic-services__stage {
    grid-template-columns: minmax(310px, 0.74fr) minmax(0, 1.26fr);
  }

  .home-cinematic-services__nav button {
    grid-template-columns: 28px 36px minmax(0, 1fr) 18px;
    min-height: 88px;
    padding-inline: 16px;
  }

  .home-cinematic-services__label small {
    display: none;
  }

  .home-cinematic-island-stage {
    grid-template-columns: minmax(0, 1.1fr) minmax(310px, 0.8fr);
  }

  .home-cinematic-contact__grid {
    grid-template-columns: minmax(0, 0.9fr) minmax(360px, 0.78fr);
    gap: 70px;
  }
}

/* Tablet */
@media (max-width: 900px) {
  .home-cinematic-shell {
    width: min(calc(100% - 36px), 760px);
  }

  .home-cinematic-heading {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .home-cinematic-heading > p,
  .home-cinematic-heading__action {
    max-width: 640px;
  }

  .home-cinematic-hero {
    min-height: 900px;
    padding-top: 150px;
  }

  .home-cinematic-hero__video {
    object-position: 58% center;
  }

  .home-cinematic-hero__scroll {
    display: none;
  }

  .home-cinematic-intro__grid {
    grid-template-columns: 1fr;
  }

  .home-cinematic-intro__visual {
    width: min(100%, 660px);
    min-height: 650px;
    margin-inline: auto;
  }

  .home-cinematic-proof {
    grid-template-columns: repeat(2, 1fr);
  }

  .home-cinematic-proof > div:nth-child(2) {
    border-right: 0;
  }

  .home-cinematic-proof > div:nth-child(-n + 4) {
    border-bottom: 1px solid var(--home-line);
  }

  .home-cinematic-proof > div:last-child {
    grid-column: 1 / -1;
  }

  .home-cinematic-services__stage {
    grid-template-columns: 1fr;
  }

  .home-cinematic-services__nav {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-right: 0;
    border-bottom: 1px solid var(--home-line-light);
  }

  .home-cinematic-services__nav button {
    grid-template-columns: 28px 36px minmax(0, 1fr) 18px;
    border-right: 1px solid var(--home-line-light);
  }

  .home-cinematic-services__nav button:nth-child(even) {
    border-right: 0;
  }

  .home-cinematic-services__panel {
    min-height: 680px;
  }

  .home-cinematic-island-stage {
    grid-template-columns: 1fr;
  }

  .home-cinematic-island-stage__visual {
    min-height: 520px;
  }

  .home-cinematic-island-stage__visual::after {
    background: linear-gradient(180deg, transparent 58%, rgba(7, 26, 49, 0.58) 100%);
  }

  .home-cinematic-mice {
    min-height: 720px;
    background-position: 62% center;
  }

  .home-cinematic-mice__overlay {
    background: linear-gradient(90deg, rgba(7, 26, 49, 0.94) 0%, rgba(7, 26, 49, 0.78) 58%, rgba(7, 26, 49, 0.3) 100%);
  }

  .home-cinematic-experiences__mosaic {
    grid-template-rows: repeat(3, minmax(250px, 1fr));
  }

  .home-cinematic-experience--culture {
    grid-column: 1 / 8;
  }

  .home-cinematic-experience--food,
  .home-cinematic-experience--water {
    grid-column: 8 / 13;
  }

  .home-cinematic-contact__grid {
    grid-template-columns: 1fr;
    gap: 70px;
  }
}

/* Mobile */
@media (max-width: 640px) {
  .home-cinematic-shell {
    width: min(calc(100% - 28px), 540px);
  }

  .home-cinematic h1 {
    font-size: clamp(2.8rem, 13vw, 4.35rem);
  }

  .home-cinematic h2 {
    font-size: clamp(2.45rem, 12vw, 4rem);
  }

  .home-cinematic h3 {
    font-size: clamp(2rem, 9vw, 3rem);
  }

  .home-cinematic-eyebrow {
    font-size: 0.64rem !important;
    letter-spacing: 0.17em;
  }

  .home-cinematic-eyebrow::before {
    width: 28px;
  }

  .home-cinematic-button {
    width: 100%;
    min-height: 50px;
  }

  .home-cinematic-actions {
    display: grid;
    width: 100%;
  }

  .home-cinematic-hero {
    min-height: 820px;
    align-items: end;
    padding: 128px 0 170px;
  }

  .home-cinematic-hero__video {
    object-position: 64% center;
  }

  .home-cinematic-hero__shade {
    background:
      linear-gradient(90deg, rgba(4, 20, 39, 0.84) 0%, rgba(4, 20, 39, 0.52) 100%),
      linear-gradient(180deg, rgba(4, 20, 39, 0.36) 0%, rgba(4, 20, 39, 0.1) 28%, rgba(4, 20, 39, 0.85) 100%);
  }

  .home-cinematic-hero__title {
    margin-bottom: 22px;
  }

  .home-cinematic-hero__title span {
    font-size: clamp(3.1rem, 15vw, 5.25rem);
  }

  .home-cinematic-hero__title em {
    font-size: clamp(2.7rem, 13vw, 4.7rem);
  }

  .home-cinematic-hero__lead {
    font-size: 1rem !important;
  }

  .home-cinematic-hero__proof {
    display: grid;
    gap: 8px;
    margin-top: 36px;
  }

  .home-cinematic-hero__proof span:not(:last-child)::after {
    display: none;
  }

  .home-cinematic-intro {
    margin-top: -42px;
    padding-top: 100px;
    border-radius: 24px 24px 0 0;
  }

  .home-cinematic-intro__grid {
    gap: 62px;
  }

  .home-cinematic-intro__visual {
    min-height: 480px;
  }

  .home-cinematic-intro__image--main {
    width: 88%;
    height: 80%;
  }

  .home-cinematic-intro__image--detail {
    width: 52%;
    height: 46%;
    border-width: 7px;
  }

  .home-cinematic-intro__stamp {
    top: 4%;
    left: 0;
    min-width: 132px;
    padding: 14px 15px;
  }

  .home-cinematic-proof {
    grid-template-columns: 1fr 1fr;
    margin-top: 76px;
  }

  .home-cinematic-proof > div {
    min-height: 112px;
    padding: 20px 14px;
  }

  .home-cinematic-proof strong {
    font-size: 2.05rem;
  }

  .home-cinematic-proof > div:last-child {
    grid-column: 1 / -1;
  }

  .home-cinematic-services {
    padding-block: 96px 120px;
  }

  .home-cinematic-services__stage {
    min-height: 0;
    border-radius: 20px;
  }

  .home-cinematic-services__nav {
    grid-template-columns: 1fr;
  }

  .home-cinematic-services__nav button,
  .home-cinematic-services__nav button:nth-child(even) {
    grid-template-columns: 26px 36px minmax(0, 1fr) 18px;
    min-height: 78px;
    border-right: 0;
  }

  .home-cinematic-services__panel {
    min-height: 0;
    grid-template-rows: 340px auto;
  }

  .home-cinematic-services__media {
    min-height: 340px;
  }

  .home-cinematic-services__panel-copy {
    grid-template-columns: 44px minmax(0, 1fr);
    padding: 28px 22px 34px;
  }

  .home-cinematic-services__panel-icon {
    width: 42px;
    height: 42px;
  }

  .home-cinematic-islands {
    padding: 136px 0 110px;
    background:
      linear-gradient(180deg, #dfe7ee 0%, #153a61 7%, #0a2646 20%, var(--home-navy) 100%);
  }

  .home-cinematic-islands__tabs {
    gap: 28px;
  }

  .home-cinematic-islands__tabs button {
    font-size: 1.75rem;
  }

  .home-cinematic-island-stage {
    border-radius: 18px;
  }

  .home-cinematic-island-stage__visual {
    min-height: 330px;
  }

  .home-cinematic-island-stage__copy {
    padding: 34px 24px 40px;
  }

  .home-cinematic-mice {
    min-height: 760px;
    padding-block: 100px;
    background-position: 68% center;
  }

  .home-cinematic-mice__overlay {
    background:
      linear-gradient(180deg, rgba(7, 26, 49, 0.58) 0%, rgba(7, 26, 49, 0.9) 68%, rgba(7, 26, 49, 0.96) 100%);
  }

  .home-cinematic-mice__content {
    align-self: end;
  }

  .home-cinematic-mice__details {
    display: grid;
  }

  .home-cinematic-experiences {
    margin-top: -38px;
    padding-top: 100px;
    border-radius: 24px 24px 0 0;
  }

  .home-cinematic-experiences__mosaic {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: none;
  }

  .home-cinematic-experience,
  .home-cinematic-experience--culture,
  .home-cinematic-experience--food,
  .home-cinematic-experience--water,
  .home-cinematic-experience--nature,
  .home-cinematic-experience--local {
    grid-column: auto;
    grid-row: auto;
    min-height: 340px;
  }

  .home-cinematic-experience--culture {
    min-height: 450px;
  }

  .home-cinematic-contact {
    padding-block: 106px;
  }

  .home-cinematic-contact::before {
    left: 70%;
  }

  .home-cinematic-contact__routes a {
    grid-template-columns: 34px minmax(0, 1fr) 20px;
    min-height: 112px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-cinematic *,
  .home-cinematic *::before,
  .home-cinematic *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .home-cinematic [data-home-reveal] [data-reveal-item],
  .home-cinematic-hero .home-cinematic-eyebrow,
  .home-cinematic-hero__title span,
  .home-cinematic-hero__title em,
  .home-cinematic-hero__lead,
  .home-cinematic-hero .home-cinematic-actions,
  .home-cinematic-hero__proof {
    opacity: 1;
    transform: none;
  }
}
`;

type IslandKey = 'rhodes' | 'kos';

type IslandScene = {
  number: string;
  name: string;
  eyebrow: string;
  title: string;
  copy: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  href: string;
};

type ServiceScene = {
  icon: LucideIcon;
  number: string;
  title: string;
  short: string;
  copy: string;
  image: string;
  imageAlt: string;
  href: string;
};

const islandScenes: Record<IslandKey, IslandScene> = {
  rhodes: {
    number: '01',
    name: 'Rhodes',
    eyebrow: 'History, coastlines and extraordinary variety',
    title: 'A destination with a story at every turn.',
    copy: 'Medieval heritage, landmark villages, dramatic coastlines and a sophisticated hospitality network make Rhodes a remarkably versatile destination for leisure travel, groups and events.',
    highlights: [
      'Rhodes Medieval City & Lindos',
      'Coastal stays & island touring',
      'Groups, incentives & special events',
    ],
    image: 'old-town.jpg',
    imageAlt: 'The atmospheric Medieval City of Rhodes',
    href: '/rhodes',
  },
  kos: {
    number: '02',
    name: 'Kos',
    eyebrow: 'Relaxed island life, intelligently connected',
    title: 'An easy-going island shaped around every programme.',
    copy: 'Long beaches, welcoming resorts, authentic villages and rich local character make Kos an effortless setting for thoughtful, tailor-made travel programmes.',
    highlights: [
      'Kos Town & ancient heritage',
      'Beach stays & coastal routes',
      'Local gastronomy & tailor-made groups',
    ],
    image: 'sailing.jpg',
    imageAlt: 'A sailing experience in the Aegean Sea near Kos',
    href: '/kos',
  },
};

const serviceScenes: ServiceScene[] = [
  {
    icon: BedDouble,
    number: '01',
    title: 'Hotel Contracting',
    short: 'A strong, carefully managed accommodation portfolio.',
    copy: 'Direct hotel relationships, competitive contracting and destination knowledge help us match every partner and programme with the right accommodation solution.',
    image: 'home-welcome-v2.jpg',
    imageAlt: 'A refined island accommodation setting overlooking the Aegean',
    href: '/services',
  },
  {
    icon: CalendarCheck,
    number: '02',
    title: 'Booking Management',
    short: 'Clear coordination from confirmation to arrival.',
    copy: 'Our local reservations team manages availability, confirmations, rooming details and operational changes with speed, accuracy and one clear point of contact.',
    image: 'old-town.jpg',
    imageAlt: 'Rhodes destination detail representing coordinated travel planning',
    href: '/services',
  },
  {
    icon: Bus,
    number: '03',
    title: 'Transfers & Transportation',
    short: 'Reliable movement across Rhodes and Kos.',
    copy: 'Airport transfers, hotel transportation, coaches and tailor-made movement plans are coordinated around each arrival, group and programme.',
    image: 'prasonisi.jpg',
    imageAlt: 'A scenic island route representing transport across Rhodes and Kos',
    href: '/services',
  },
  {
    icon: Headphones,
    number: '04',
    title: 'Resort Assistance',
    short: 'Responsive support where guests need it most.',
    copy: 'Experienced local representatives provide dependable assistance, communication and problem-solving throughout the stay.',
    image: 'local-life.jpg',
    imageAlt: 'Local island life representing on-the-ground resort assistance',
    href: '/services',
  },
  {
    icon: MapPinned,
    number: '05',
    title: 'Tours & Excursions',
    short: 'Authentic experiences selected by people who live here.',
    copy: 'From island tours and cultural visits to boat trips and private experiences, every programme is shaped with genuine local knowledge.',
    image: 'sailing.jpg',
    imageAlt: 'A sailing excursion in the Aegean Sea',
    href: '/excursions',
  },
  {
    icon: Users,
    number: '06',
    title: 'MICE & Group Travel',
    short: 'Complex programmes delivered with calm precision.',
    copy: 'Venues, accommodation, transportation, activities and on-site coordination come together through one accountable local team.',
    image: 'home-mice-v2.jpg',
    imageAlt: 'A premium group and event setting in Rhodes',
    href: '/mice-groups',
  },
  {
    icon: Sparkles,
    number: '07',
    title: 'Weddings & Special Events',
    short: 'Distinctive island moments, thoughtfully produced.',
    copy: 'We connect the right venues, suppliers, logistics and local details to create celebrations with a true sense of place.',
    image: 'food.jpg',
    imageAlt: 'An elegant island dining setting for a special event',
    href: '/services',
  },
  {
    icon: Compass,
    number: '08',
    title: 'XML API Connectivity & Agent Portal',
    short: 'Technology that keeps partners connected.',
    copy: 'Flexible connectivity and practical digital tools support faster access, smoother workflows and more efficient day-to-day cooperation.',
    image: 'home-welcome-v2.jpg',
    imageAlt: 'A panoramic island view representing connected travel technology',
    href: '/services',
  },
];

const experienceStories = [
  {
    title: 'Rhodes Through the Centuries',
    kicker: 'Culture & heritage',
    image: 'old-town.jpg',
    className: 'home-cinematic-experience--culture',
  },
  {
    title: 'Flavours with a Sense of Place',
    kicker: 'Island gastronomy',
    image: 'food.jpg',
    className: 'home-cinematic-experience--food',
  },
  {
    title: 'Aegean Days on the Water',
    kicker: 'Boat trips & sailing',
    image: 'sailing.jpg',
    className: 'home-cinematic-experience--water',
  },
  {
    title: 'Landscapes Beyond the Familiar',
    kicker: 'Nature & discovery',
    image: 'prasonisi.jpg',
    className: 'home-cinematic-experience--nature',
  },
  {
    title: 'The Rhythm of Local Island Life',
    kicker: 'Authentic encounters',
    image: 'local-life.jpg',
    className: 'home-cinematic-experience--local',
  },
] as const;

const facts = [
  { value: '1989', label: 'Since' },
  { value: '100,000+', label: 'Guests annually' },
  { value: '200+', label: 'Hotel partners' },
  { value: '40+', label: 'Team members' },
  { value: '24/7', label: 'Support' },
] as const;

function EditorialEyebrow({ children }: { children: string }) {
  return <p className="home-cinematic-eyebrow">{children}</p>;
}

function getNextIndex(event: KeyboardEvent<HTMLButtonElement>, current: number, total: number) {
  if (event.key !== 'ArrowRight' && event.key !== 'ArrowDown' && event.key !== 'ArrowLeft' && event.key !== 'ArrowUp') {
    return current;
  }

  event.preventDefault();
  const direction = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : -1;
  return (current + direction + total) % total;
}

export default function TravelHomePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [activeIsland, setActiveIsland] = useState<IslandKey>('rhodes');
  const [activeService, setActiveService] = useState(0);

  const island = islandScenes[activeIsland];
  const service = serviceScenes[activeService];
  const ActiveServiceIcon = service.icon;

  useEffect(() => {
    document.body.classList.add('is-top-euro-home');
    const frame = window.requestAnimationFrame(() => setIsReady(true));

    return () => {
      window.cancelAnimationFrame(frame);
      document.body.classList.remove('is-top-euro-home');
    };
  }, []);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const sections = Array.from(root.querySelectorAll<HTMLElement>('[data-home-reveal]'));

    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -10%' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef} className={`home-cinematic${isReady ? ' is-ready' : ''}`}>
      <style>{HOME_STYLES}</style>
      <PageSeo
        title="Destination Management Company in Greece | Rhodes & Kos DMC | Top Euro Travel"
        description="Top Euro Travel is a trusted destination management company in Greece, providing DMC services, hotel contracting, transfers, MICE, groups, excursions and ground handling in Rhodes and Kos since 1989."
      />

      <section className="home-cinematic-hero" aria-labelledby="home-hero-display">
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
        <div className="home-cinematic-hero__grain" aria-hidden="true" />

        <div className="home-cinematic-shell home-cinematic-hero__content">
          <EditorialEyebrow>Destination management • Ground handling • Excursions</EditorialEyebrow>

          <p id="home-hero-display" className="home-cinematic-hero__title">
            <span>Your Trusted DMC Partner</span>
            <em>in Rhodes &amp; Kos</em>
          </p>

          <p className="home-cinematic-hero__lead">
            Delivering destination management, ground handling and travel solutions since 1989.
          </p>

          <div className="home-cinematic-actions">
            <Link className="home-cinematic-button home-cinematic-button--gold" to="/services">
              Explore our services <ArrowRight aria-hidden="true" />
            </Link>
            <Link className="home-cinematic-button home-cinematic-button--outline-light" to="/excursions">
              Browse excursions <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="home-cinematic-hero__proof" aria-label="Top Euro Travel highlights">
            <span>Local teams in Rhodes &amp; Kos</span>
            <span>International partner support</span>
            <span>24/7 destination assistance</span>
          </div>
        </div>

        <a className="home-cinematic-hero__scroll" href="#our-story" aria-label="Continue to the introduction">
          <span>Discover more</span>
          <ArrowDown aria-hidden="true" />
        </a>

        <div className="home-cinematic-hero__handoff" aria-hidden="true" />
      </section>

      <section id="our-story" className="home-cinematic-intro" data-home-reveal>
        <div className="home-cinematic-shell home-cinematic-intro__grid">
          <div className="home-cinematic-intro__copy" data-reveal-item>
            <EditorialEyebrow>Local expertise. International delivery.</EditorialEyebrow>
            <h1>Destination Management Company in Greece</h1>
            <p className="home-cinematic-lead">
              Trusted destination management, ground handling and excursion services in Rhodes and Kos.
            </p>
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
            <Link className="home-cinematic-text-link" to="/about">
              Discover Top Euro Travel <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div
            className="home-cinematic-intro__visual"
            data-reveal-item
            aria-label="Top Euro Travel local destination expertise"
          >
            <div className="home-cinematic-intro__image home-cinematic-intro__image--main">
              <Photo src={travelMedia('home-welcome-v2.jpg')} alt="White chapel overlooking the Aegean Sea" />
            </div>
            <div className="home-cinematic-intro__image home-cinematic-intro__image--detail">
              <Photo src={travelMedia('old-town.jpg')} alt="An atmospheric lane in Rhodes Medieval City" />
            </div>
            <div className="home-cinematic-intro__stamp" aria-hidden="true">
              <span>Local knowledge</span>
              <strong>Since 1989</strong>
            </div>
          </div>
        </div>

        <div className="home-cinematic-shell">
          <div className="home-cinematic-proof" aria-label="Top Euro Travel facts" data-reveal-item>
            {facts.map((fact) => (
              <div key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cinematic-services" data-home-reveal>
        <div className="home-cinematic-shell">
          <div className="home-cinematic-heading" data-reveal-item>
            <div>
              <EditorialEyebrow>Our Services</EditorialEyebrow>
              <h2>One local partner. Eight connected capabilities.</h2>
            </div>
            <p>
              From commercial contracting and reservations to transport, experiences, groups and technology, every
              service is connected through one accountable team.
            </p>
          </div>

          <div className="home-cinematic-services__stage" data-reveal-item>
            <div className="home-cinematic-services__nav" role="tablist" aria-label="Top Euro Travel services">
              {serviceScenes.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeService === index;

                return (
                  <button
                    key={item.title}
                    type="button"
                    role="tab"
                    id={`service-tab-${index}`}
                    aria-selected={isActive}
                    aria-controls={`service-panel-${index}`}
                    tabIndex={isActive ? 0 : -1}
                    className={isActive ? 'is-active' : ''}
                    onMouseEnter={() => setActiveService(index)}
                    onFocus={() => setActiveService(index)}
                    onClick={() => setActiveService(index)}
                    onKeyDown={(event: KeyboardEvent<HTMLButtonElement>) => setActiveService(getNextIndex(event, index, serviceScenes.length))}
                  >
                    <span className="home-cinematic-services__number">{item.number}</span>
                    <span className="home-cinematic-services__icon"><Icon aria-hidden="true" /></span>
                    <span className="home-cinematic-services__label">
                      <strong>{item.title}</strong>
                      <small>{item.short}</small>
                    </span>
                    <ArrowRight className="home-cinematic-services__arrow" aria-hidden="true" />
                  </button>
                );
              })}
            </div>

            <article
              key={activeService}
              id={`service-panel-${activeService}`}
              role="tabpanel"
              aria-labelledby={`service-tab-${activeService}`}
              className="home-cinematic-services__panel"
              aria-live="polite"
            >
              <div className="home-cinematic-services__media">
                <Photo src={travelMedia(service.image)} alt={service.imageAlt} />
                <div className="home-cinematic-services__media-shade" aria-hidden="true" />
                <span className="home-cinematic-services__media-index" aria-hidden="true">{service.number}</span>
              </div>

              <div className="home-cinematic-services__panel-copy">
                <span className="home-cinematic-services__panel-icon"><ActiveServiceIcon aria-hidden="true" /></span>
                <p>Integrated destination service</p>
                <h3>{service.title}</h3>
                <strong>{service.short}</strong>
                <span>{service.copy}</span>
                <Link className="home-cinematic-text-link home-cinematic-text-link--light" to={service.href}>
                  Explore this service <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="home-cinematic-islands" data-home-reveal>
        <div className="home-cinematic-shell">
          <div className="home-cinematic-heading home-cinematic-heading--light" data-reveal-item>
            <div>
              <EditorialEyebrow>Two destinations. One standard of delivery.</EditorialEyebrow>
              <h2>Rhodes and Kos, understood from the inside.</h2>
            </div>
            <p>
              Every programme benefits from the same dependable service while keeping the distinctive character of
              each island.
            </p>
          </div>

          <div className="home-cinematic-islands__tabs" role="tablist" aria-label="Choose a destination" data-reveal-item>
            {(Object.keys(islandScenes) as IslandKey[]).map((key, index) => {
              const isActive = activeIsland === key;

              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  id={`island-tab-${key}`}
                  aria-selected={isActive}
                  aria-controls={`island-panel-${key}`}
                  tabIndex={isActive ? 0 : -1}
                  className={isActive ? 'is-active' : ''}
                  onClick={() => setActiveIsland(key)}
                  onKeyDown={(event: KeyboardEvent<HTMLButtonElement>) => {
                    const keys = Object.keys(islandScenes) as IslandKey[];
                    setActiveIsland(keys[getNextIndex(event, index, keys.length)]);
                  }}
                >
                  <span>{islandScenes[key].number}</span>
                  {islandScenes[key].name}
                </button>
              );
            })}
          </div>

          <article
            key={activeIsland}
            id={`island-panel-${activeIsland}`}
            role="tabpanel"
            aria-labelledby={`island-tab-${activeIsland}`}
            className="home-cinematic-island-stage"
            data-reveal-item
            aria-live="polite"
          >
            <div className="home-cinematic-island-stage__visual">
              <Photo src={travelMedia(island.image)} alt={island.imageAlt} />
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
                Explore {island.name} <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section
        className="home-cinematic-mice"
        style={{ backgroundImage: `url("${travelMedia('home-mice-v2.jpg')}")` }}
        data-home-reveal
      >
        <div className="home-cinematic-mice__overlay" aria-hidden="true" />
        <div className="home-cinematic-shell home-cinematic-mice__content" data-reveal-item>
          <EditorialEyebrow>MICE &amp; Group Travel Solutions</EditorialEyebrow>
          <h2>Ambitious programmes. Seamless local execution.</h2>
          <p>
            Whether planning a corporate event, incentive programme or group itinerary, our team delivers tailored
            solutions and seamless execution across Rhodes and Kos, supported by extensive destination knowledge and
            trusted local partnerships.
          </p>
          <div className="home-cinematic-mice__details" aria-label="MICE and group travel capabilities">
            <span><Landmark aria-hidden="true" /> Venues &amp; accommodation</span>
            <span><Users aria-hidden="true" /> Groups of every scale</span>
            <span><Sparkles aria-hidden="true" /> Tailor-made programmes</span>
          </div>
          <Link className="home-cinematic-button home-cinematic-button--gold" to="/mice-groups">
            Explore MICE &amp; Groups <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="home-cinematic-experiences" data-home-reveal>
        <div className="home-cinematic-shell">
          <div className="home-cinematic-heading" data-reveal-item>
            <div>
              <EditorialEyebrow>Authentic Local Experiences</EditorialEyebrow>
              <h2>Experiences with a real sense of place.</h2>
            </div>
            <div className="home-cinematic-heading__action">
              <p>
                Island tours, culture, gastronomy, coastlines and local encounters selected by teams who know Rhodes
                and Kos first-hand.
              </p>
              <Link className="home-cinematic-text-link" to="/excursions">
                View all excursions <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="home-cinematic-experiences__mosaic" data-reveal-item>
            {experienceStories.map((experience, index) => (
              <Link
                className={`home-cinematic-experience ${experience.className}`}
                to="/excursions"
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
        </div>
      </section>

      <section className="home-cinematic-contact" data-home-reveal>
        <div className="home-cinematic-shell home-cinematic-contact__grid">
          <div className="home-cinematic-contact__copy" data-reveal-item>
            <EditorialEyebrow>Get in Touch</EditorialEyebrow>
            <h2>Let&apos;s build the right programme together.</h2>
            <p>
              Whether you are looking for a reliable DMC partner, planning a group programme, organising an event or
              exploring new opportunities in Greece, our team is ready to assist.
            </p>
            <div className="home-cinematic-contact__actions">
              <Link className="home-cinematic-button home-cinematic-button--gold" to="/contact">
                Send an enquiry <ArrowRight aria-hidden="true" />
              </Link>
              <Link className="home-cinematic-text-link home-cinematic-text-link--light" to="/excursions">
                Browse excursions <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="home-cinematic-contact__routes" data-reveal-item aria-label="Ways Top Euro Travel can assist">
            <Link to="/contact">
              <span>01</span>
              <strong>DMC Partnership</strong>
              <small>Contracting, operations and long-term cooperation</small>
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link to="/mice-groups">
              <span>02</span>
              <strong>Groups &amp; Events</strong>
              <small>Tailor-made programmes and on-site execution</small>
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link to="/excursions">
              <span>03</span>
              <strong>Tours &amp; Excursions</strong>
              <small>Authentic local experiences in Rhodes and Kos</small>
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
