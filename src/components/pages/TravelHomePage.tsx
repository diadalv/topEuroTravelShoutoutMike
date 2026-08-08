import { PageSeo, Photo, travelMedia } from '@/components/travel/Shared';
import {
  ArrowDown,
  ArrowRight,
  BedDouble,
  Bus,
  CalendarCheck,
  Compass,
  Globe2,
  Headphones,
  Landmark,
  MapPinned,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { type KeyboardEvent, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const TOP_EURO_TRAVEL_HOME_STYLES = String.raw`
/* Embedded homepage base styles */
/*
 * Homepage editorial redesign (v9)
 * Intentionally scoped to .home-cinematic so the legacy homepage rules cannot
 * flatten the new narrative layout into the site's older card grid.
 */

.home-cinematic {
  --home-navy: #003b68;
  --home-navy-deep: #002c50;
  --home-navy-ink: #082f53;
  --home-gold: #e59a17;
  --home-gold-deep: #c97d09;
  --home-paper: #fffdf8;
  --home-cream: #f6efe4;
  --home-line: rgba(8, 47, 83, 0.16);
  --home-serif: Georgia, "Times New Roman", serif;
  --home-sans: "Trebuchet MS", "Avenir Next", "Segoe UI", sans-serif;
  position: relative;
  overflow: clip;
  background: var(--home-paper);
  color: var(--home-navy-ink);
  font-family: var(--home-sans);
  font-size: 17px;
  line-height: 1.7;
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
  color: inherit;
  font-family: var(--home-serif);
  font-weight: 500;
  letter-spacing: -0.035em;
}

.home-cinematic h2 {
  max-width: 920px;
  margin-bottom: 24px;
  font-size: clamp(46px, 4.25vw, 72px);
  line-height: 1.02;
}

.home-cinematic h3 {
  font-size: clamp(28px, 2.4vw, 42px);
  line-height: 1.08;
}

.home-cinematic p {
  margin-bottom: 22px;
}

.home-cinematic .shell {
  width: min(calc(100% - clamp(40px, 7vw, 140px)), 1540px);
  margin-inline: auto;
}

.home-cinematic-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 19px !important;
  color: var(--home-gold-deep);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.18em;
  line-height: 1.4;
  text-transform: uppercase;
}

.home-cinematic-eyebrow::before {
  width: 30px;
  height: 1px;
  flex: 0 0 auto;
  background: currentColor;
  content: "";
}

.home-cinematic-lead {
  color: var(--home-navy-ink);
  font-family: var(--home-serif);
  font-size: clamp(22px, 1.8vw, 30px);
  line-height: 1.38;
}

.home-cinematic-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 26px;
}

.home-cinematic-button {
  min-height: 54px;
  border: 1px solid transparent;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 15px 25px;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.07em;
  line-height: 1;
  text-transform: uppercase;
  transition: color 220ms ease, background-color 220ms ease, border-color 220ms ease, box-shadow 220ms ease, transform 220ms ease;
}

.home-cinematic-button svg,
.home-cinematic-text-link svg {
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  transition: transform 220ms ease;
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
  background: var(--home-gold, #e39a20);
  color: #fff;
  box-shadow: 0 8px 24px rgba(227, 154, 32, 0.35);
}

.home-cinematic-button--gold:hover,
.home-cinematic-button--gold:focus-visible {
  background: var(--home-gold-deep, #ce8411);
  box-shadow: 0 12px 30px rgba(227, 154, 32, 0.45);
}

.home-cinematic-button--glass {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: #fff;
}

.home-cinematic-button--glass:hover,
.home-cinematic-button--glass:focus-visible {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.6);
}

.home-cinematic-button--navy {
  background: var(--home-navy);
  color: #fff;
}

.home-cinematic-button--navy:hover,
.home-cinematic-button--navy:focus-visible {
  background: var(--home-navy-deep);
}

.home-cinematic-text-link {
  width: fit-content;
  border-bottom: 1px solid rgba(8, 47, 83, 0.35);
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 4px 0 7px;
  color: var(--home-navy-ink);
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.045em;
  line-height: 1.2;
  text-transform: uppercase;
  transition: border-color 220ms ease, color 220ms ease;
}

.home-cinematic-text-link:hover,
.home-cinematic-text-link:focus-visible {
  border-color: var(--home-gold);
  color: var(--home-gold-deep);
}

.home-cinematic-text-link--light {
  border-color: rgba(255, 255, 255, 0.5);
  color: #fff;
}

.home-cinematic-heading {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(300px, 0.65fr);
  align-items: end;
  gap: clamp(42px, 7vw, 120px);
  margin-bottom: clamp(48px, 6vw, 86px);
}

.home-cinematic-heading h2 {
  max-width: 900px;
  margin-bottom: 0;
}

.home-cinematic-heading > p,
.home-cinematic-heading__action > p {
  max-width: 500px;
  margin: 0;
  color: #5c7185;
  font-size: 17px;
  line-height: 1.75;
}

.home-cinematic-heading__action {
  display: grid;
  align-content: end;
  gap: 22px;
}

.home-cinematic-heading--light h2,
.home-cinematic-heading--light > p {
  color: #fff;
}

/* Hero */
.home-cinematic-hero {
  min-height: clamp(680px, 90svh, 920px);
  position: relative;
  display: flex;
  align-items: center;
  isolation: isolate;
  background-position: 63% center;
  background-size: cover;
  color: #fff;
  overflow: hidden;
}

.home-cinematic-hero__shade {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(90deg, rgba(0, 35, 65, 0.92) 0%, rgba(0, 39, 72, 0.75) 35%, rgba(0, 45, 80, 0.2) 69%, rgba(0, 35, 63, 0.02) 100%),
    linear-gradient(180deg, rgba(0, 32, 58, 0.3) 0%, transparent 60%);
}

.home-cinematic-hero__content {
  padding-top: 130px;
  padding-bottom: 110px;
  width: 100%;
}

.home-cinematic-hero .home-cinematic-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 18px;
  border-radius: 99px;
  background: rgba(227, 154, 32, 0.18);
  border: 1px solid rgba(255, 194, 87, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: #ffc257;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  width: fit-content;
}

.home-cinematic-hero .home-cinematic-eyebrow::before {
  display: none;
}

.home-cinematic-hero h1 {
  max-width: 950px;
  margin-bottom: 30px;
  color: #fff;
  font-size: clamp(68px, 7.3vw, 116px);
  line-height: 0.88;
  text-wrap: balance;
}

.home-cinematic-hero h1 span {
  display: block;
  margin-bottom: 15px;
  color: #ffc052;
  font-size: 0.57em;
  font-style: italic;
  letter-spacing: -0.025em;
  line-height: 1;
}

.home-cinematic-hero__lead {
  max-width: 720px;
  margin-bottom: 38px !important;
  color: rgba(255, 255, 255, 0.94);
  font-size: clamp(18px, 1.35vw, 22px);
  line-height: 1.65;
}

/* Editorial introduction */
.home-cinematic-intro {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(420px, 1.08fr);
  align-items: center;
  gap: clamp(60px, 9vw, 150px);
  padding-top: clamp(80px, 7vw, 120px);
  padding-bottom: clamp(90px, 9vw, 150px);
}

.home-cinematic-scroll {
  position: absolute;
  right: clamp(28px, 4.5vw, 82px);
  bottom: 42px;
  display: flex;
  align-items: center;
  gap: 13px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.home-cinematic-scroll svg {
  width: 18px;
  animation: home-cinematic-bob 1.8s ease-in-out infinite;
}

@keyframes home-cinematic-bob {
  0%, 100% { transform: translateY(-2px); }
  50% { transform: translateY(6px); }
}

/* Editorial introduction */
.home-cinematic-intro {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(420px, 1.08fr);
  align-items: center;
  gap: clamp(60px, 9vw, 150px);
  padding-top: clamp(100px, 10vw, 170px);
  padding-bottom: clamp(90px, 9vw, 150px);
}

.home-cinematic-intro__copy {
  max-width: 690px;
}

.home-cinematic-intro__copy > p:not(.home-cinematic-eyebrow):not(.home-cinematic-lead) {
  max-width: 650px;
  color: #5a6e82;
}

.home-cinematic-intro__copy .home-cinematic-text-link {
  margin-top: 17px;
}

.home-cinematic-intro__visual {
  min-height: 630px;
  position: relative;
}

.home-cinematic-intro__image {
  position: absolute;
  overflow: hidden;
  background: #e8edf0;
}

.home-cinematic-intro__image .travel-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-cinematic-intro__image--main {
  inset: 0 0 72px 10%;
}

.home-cinematic-intro__image--detail {
  width: 43%;
  height: 45%;
  right: -4%;
  bottom: 0;
  border: 12px solid var(--home-paper);
  box-shadow: 0 24px 60px rgba(0, 39, 72, 0.2);
}

.home-cinematic-intro__image--main .travel-photo {
  transition: transform 1.1s cubic-bezier(.2,.7,.2,1);
}

.home-cinematic-intro.is-visible .home-cinematic-intro__image--main .travel-photo {
  transform: scale(1.035);
}

.home-cinematic-plane.plane-path {
  z-index: 4;
  color: var(--home-gold);
}

.home-cinematic-plane.plane-path span {
  border-color: currentColor;
  opacity: 0.72;
}

.home-cinematic-plane.plane-path svg {
  color: currentColor;
}

.home-cinematic-plane--intro {
  width: 142px;
  height: 72px;
  position: absolute;
  bottom: 3%;
  left: -5%;
}

.home-cinematic-proof {
  grid-column: 1 / -1;
  border-top: 1px solid var(--home-line);
  border-bottom: 1px solid var(--home-line);
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 4px;
}

.home-cinematic-proof > div {
  min-height: 145px;
  border-left: 1px solid var(--home-line);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 26px clamp(24px, 3.5vw, 52px);
}

.home-cinematic-proof > div:first-child {
  border-left: 0;
  padding-left: 0;
}

.home-cinematic-proof strong {
  color: var(--home-gold-deep);
  font-family: var(--home-serif);
  font-size: clamp(38px, 3.2vw, 54px);
  font-weight: 500;
  letter-spacing: -0.045em;
  line-height: 1;
}

.home-cinematic-proof span {
  margin-top: 10px;
  color: #5b7083;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}

/* Island chapter */
.home-cinematic-islands {
  position: relative;
  padding: clamp(100px, 10vw, 160px) 0;
  overflow: hidden;
  background:
    radial-gradient(circle at 86% 10%, rgba(54, 145, 192, 0.2), transparent 28%),
    linear-gradient(135deg, var(--home-navy-deep), #004f82 74%, #00588a);
  color: #fff;
}

.home-cinematic-islands::after {
  width: 540px;
  height: 540px;
  position: absolute;
  right: -280px;
  bottom: -310px;
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 50%;
  box-shadow: 0 0 0 70px rgba(255, 255, 255, 0.025), 0 0 0 150px rgba(255, 255, 255, 0.02);
  content: "";
}

.home-cinematic-islands .home-cinematic-eyebrow {
  color: #ffc45c;
}

.home-cinematic-islands__tabs {
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  gap: 42px;
  margin-bottom: 46px;
}

.home-cinematic-islands__tabs button {
  border: 0;
  border-bottom: 3px solid transparent;
  display: inline-flex;
  align-items: center;
  gap: 13px;
  margin-bottom: -1px;
  padding: 0 4px 18px;
  background: transparent;
  color: rgba(255, 255, 255, 0.58);
  cursor: pointer;
  font-family: var(--home-serif);
  font-size: 27px;
  transition: color 200ms ease, border-color 200ms ease;
}

.home-cinematic-islands__tabs button span {
  font-family: var(--home-sans);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.14em;
}

.home-cinematic-islands__tabs button:hover,
.home-cinematic-islands__tabs button:focus-visible,
.home-cinematic-islands__tabs button.is-active {
  border-bottom-color: var(--home-gold);
  color: #fff;
}

.home-cinematic-island-stage {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(400px, 0.65fr);
  align-items: stretch;
  animation: home-cinematic-stage-in 520ms cubic-bezier(.2,.7,.2,1) both;
}

@keyframes home-cinematic-stage-in {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: none; }
}

.home-cinematic-island-stage__visual {
  min-height: 570px;
  position: relative;
  overflow: hidden;
}

.home-cinematic-island-stage__visual::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 60%, rgba(0, 44, 80, 0.22));
  content: "";
}

.home-cinematic-island-stage__visual .travel-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 700ms ease;
}

.home-cinematic-island-stage:hover .home-cinematic-island-stage__visual .travel-photo {
  transform: scale(1.03);
}

.home-cinematic-island-stage__number {
  position: absolute;
  right: 30px;
  bottom: -34px;
  z-index: 2;
  color: rgba(255, 255, 255, 0.58);
  font-family: var(--home-serif);
  font-size: clamp(112px, 10vw, 170px);
  line-height: 1;
}

.home-cinematic-island-stage__copy {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(46px, 5.5vw, 88px);
  background: rgba(0, 42, 76, 0.82);
  box-shadow: -35px 0 60px rgba(0, 27, 50, 0.24);
}

.home-cinematic-island-stage__eyebrow {
  margin-bottom: 20px !important;
  color: #ffc45c;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.home-cinematic-island-stage__copy h3 {
  margin-bottom: 22px;
  color: #fff;
  font-size: clamp(38px, 3.2vw, 54px);
}

.home-cinematic-island-stage__copy > p:not(.home-cinematic-island-stage__eyebrow) {
  color: rgba(255, 255, 255, 0.76);
  font-size: 16px;
}

.home-cinematic-island-stage__copy ul {
  margin: 10px 0 32px;
  padding: 0;
  list-style: none;
}

.home-cinematic-island-stage__copy li {
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  position: relative;
  padding: 12px 0 12px 22px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
}

.home-cinematic-island-stage__copy li::before {
  width: 6px;
  height: 6px;
  position: absolute;
  top: 21px;
  left: 0;
  border-radius: 50%;
  background: var(--home-gold);
  content: "";
}

/* Service journey */
.home-cinematic-journey {
  padding-top: clamp(105px, 10vw, 170px);
  padding-bottom: clamp(105px, 10vw, 170px);
}

.home-cinematic-journey__steps {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin-bottom: 58px;
}

.home-cinematic-journey__steps::before {
  height: 1px;
  position: absolute;
  top: 72px;
  right: 8%;
  left: 8%;
  background: var(--home-line);
  content: "";
}

.home-cinematic-journey__step {
  min-height: 390px;
  position: relative;
  z-index: 1;
  border-left: 1px solid var(--home-line);
  display: flex;
  flex-direction: column;
  padding: 0 clamp(20px, 2.6vw, 42px) 24px;
  transition: color 220ms ease, transform 220ms ease;
}

.home-cinematic-journey__step:first-child {
  border-left: 0;
  padding-left: 0;
}

.home-cinematic-journey__step:last-child {
  padding-right: 0;
}

.home-cinematic-journey__step:hover,
.home-cinematic-journey__step:focus-visible {
  color: var(--home-gold-deep);
  transform: translateY(-7px);
}

.home-cinematic-journey__number {
  color: #8594a2;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.14em;
}

.home-cinematic-journey__icon {
  width: 58px;
  height: 58px;
  position: relative;
  display: grid;
  place-items: center;
  margin: 31px 0 42px;
  border: 1px solid var(--home-line);
  border-radius: 50%;
  background: var(--home-paper);
  color: var(--home-navy);
  transition: color 220ms ease, background-color 220ms ease, border-color 220ms ease;
}

.home-cinematic-journey__icon svg {
  width: 25px;
  height: 25px;
}

.home-cinematic-journey__step:hover .home-cinematic-journey__icon,
.home-cinematic-journey__step:focus-visible .home-cinematic-journey__icon {
  border-color: var(--home-gold);
  background: var(--home-gold);
  color: #fff;
}

.home-cinematic-journey__step h3 {
  margin-bottom: 16px;
  font-size: clamp(29px, 2vw, 36px);
}

.home-cinematic-journey__step p {
  color: #617487;
  font-size: 14px;
  line-height: 1.75;
}

.home-cinematic-journey__arrow {
  margin-top: auto;
  color: var(--home-navy);
}

.home-cinematic-journey__arrow svg {
  width: 22px;
  transition: transform 220ms ease;
}

.home-cinematic-journey__step:hover .home-cinematic-journey__arrow svg,
.home-cinematic-journey__step:focus-visible .home-cinematic-journey__arrow svg {
  transform: translateX(8px);
}

/* MICE cinematic interlude */
.home-cinematic-mice {
  min-height: 720px;
  position: relative;
  display: flex;
  align-items: center;
  isolation: isolate;
  background-position: center;
  background-size: cover;
  color: #fff;
}

.home-cinematic-mice__overlay {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(90deg, rgba(0, 35, 64, 0.94) 0%, rgba(0, 41, 75, 0.84) 42%, rgba(0, 46, 81, 0.18) 78%, transparent 100%),
    linear-gradient(0deg, rgba(0, 32, 58, 0.35), transparent 55%);
}

.home-cinematic-mice__content {
  padding-top: 100px;
  padding-bottom: 100px;
}

.home-cinematic-mice__content > * {
  max-width: 760px;
}

.home-cinematic-mice .home-cinematic-eyebrow {
  color: #ffc45c;
}

.home-cinematic-mice h2 {
  margin-bottom: 30px;
  color: #fff;
}

.home-cinematic-mice__content > p:not(.home-cinematic-eyebrow) {
  color: rgba(255, 255, 255, 0.82);
  font-size: 18px;
  line-height: 1.75;
}

.home-cinematic-mice__details {
  border-top: 1px solid rgba(255, 255, 255, 0.28);
  border-bottom: 1px solid rgba(255, 255, 255, 0.28);
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  margin: 38px 0 38px;
}

.home-cinematic-mice__details span {
  min-height: 66px;
  border-left: 1px solid rgba(255, 255, 255, 0.22);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 25px;
  color: rgba(255, 255, 255, 0.94);
  font-size: 13px;
  font-weight: 700;
}

.home-cinematic-mice__details span:first-child {
  border-left: 0;
  padding-left: 0;
}

.home-cinematic-mice__details svg {
  width: 21px;
  color: #ffc45c;
}

/* Experience mosaic */
.home-cinematic-experiences {
  padding-top: clamp(105px, 10vw, 170px);
  padding-bottom: clamp(105px, 10vw, 170px);
}

.home-cinematic-experiences__mosaic {
  min-height: 980px;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: repeat(2, 290px) 330px;
  gap: 18px;
}

.home-cinematic-experience {
  min-height: 0;
  position: relative;
  overflow: hidden;
  background: #dfe7eb;
  color: #fff;
}

.home-cinematic-experience--culture { grid-column: 1 / 8; grid-row: 1 / 3; }
.home-cinematic-experience--food { grid-column: 8 / 13; grid-row: 1; }
.home-cinematic-experience--water { grid-column: 8 / 13; grid-row: 2; }
.home-cinematic-experience--nature { grid-column: 1 / 6; grid-row: 3; }
.home-cinematic-experience--local { grid-column: 6 / 13; grid-row: 3; }

.home-cinematic-experience .travel-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 800ms cubic-bezier(.2,.7,.2,1), filter 500ms ease;
}

.home-cinematic-experience__shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(0, 32, 58, 0.84) 0%, rgba(0, 35, 63, 0.05) 65%);
  transition: background 350ms ease;
}

.home-cinematic-experience__index {
  position: absolute;
  top: 25px;
  left: 28px;
  color: rgba(255, 255, 255, 0.83);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.18em;
}

.home-cinematic-experience__copy {
  position: absolute;
  right: 84px;
  bottom: 28px;
  left: 28px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.home-cinematic-experience__copy small {
  color: #ffc45c;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.home-cinematic-experience__copy strong {
  font-family: var(--home-serif);
  font-size: clamp(25px, 2vw, 37px);
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.08;
}

.home-cinematic-experience__arrow {
  width: 44px;
  height: 44px;
  position: absolute;
  right: 26px;
  bottom: 27px;
  border: 1px solid rgba(255, 255, 255, 0.58);
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: color 220ms ease, background 220ms ease, transform 220ms ease;
}

.home-cinematic-experience__arrow svg {
  width: 19px;
}

.home-cinematic-experience:hover .travel-photo,
.home-cinematic-experience:focus-visible .travel-photo {
  transform: scale(1.055);
  filter: saturate(1.08);
}

.home-cinematic-experience:hover .home-cinematic-experience__shade,
.home-cinematic-experience:focus-visible .home-cinematic-experience__shade {
  background: linear-gradient(0deg, rgba(0, 32, 58, 0.9) 0%, rgba(0, 35, 63, 0.14) 72%);
}

.home-cinematic-experience:hover .home-cinematic-experience__arrow,
.home-cinematic-experience:focus-visible .home-cinematic-experience__arrow {
  border-color: var(--home-gold);
  background: var(--home-gold);
  transform: translateX(4px);
}

/* Closing invitation */
.home-cinematic-closing {
  min-height: 360px;
  position: relative;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: clamp(30px, 4vw, 70px);
  margin-bottom: clamp(70px, 8vw, 130px) !important;
  padding: clamp(58px, 6vw, 90px);
  overflow: hidden;
  background:
    radial-gradient(circle at 88% 18%, rgba(52, 142, 191, 0.25), transparent 24%),
    var(--home-navy-deep);
  color: #fff;
}

.home-cinematic-closing__icon {
  width: 74px;
  height: 74px;
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #ffc45c;
}

.home-cinematic-closing__icon svg {
  width: 32px;
  height: 32px;
}

.home-cinematic-closing .home-cinematic-eyebrow {
  color: #ffc45c;
}

.home-cinematic-closing h2 {
  max-width: 780px;
  margin-bottom: 15px;
  color: #fff;
  font-size: clamp(40px, 3.6vw, 60px);
}

.home-cinematic-closing__copy > p:not(.home-cinematic-eyebrow) {
  max-width: 680px;
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.74);
}

.home-cinematic-closing__actions {
  position: relative;
  z-index: 2;
  display: grid;
  justify-items: start;
  gap: 20px;
}

.home-cinematic-plane--closing {
  width: 175px;
  height: 90px;
  position: absolute;
  right: 3%;
  bottom: -12px;
  opacity: 0.55;
  color: #ffc45c !important;
}

/* Section reveal motion */
.home-cinematic [data-home-reveal] {
  opacity: 0;
  transform: translateY(34px);
  transition: opacity 760ms ease, transform 820ms cubic-bezier(.2,.7,.2,1);
}

.home-cinematic [data-home-reveal].is-visible {
  opacity: 1;
  transform: none;
}

.home-cinematic [data-home-reveal] .home-cinematic-heading,
.home-cinematic [data-home-reveal] .home-cinematic-proof,
.home-cinematic [data-home-reveal] .home-cinematic-experiences__mosaic {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 650ms ease 160ms, transform 700ms cubic-bezier(.2,.7,.2,1) 160ms;
}

.home-cinematic [data-home-reveal].is-visible .home-cinematic-heading,
.home-cinematic [data-home-reveal].is-visible .home-cinematic-proof,
.home-cinematic [data-home-reveal].is-visible .home-cinematic-experiences__mosaic {
  opacity: 1;
  transform: none;
}

@media (max-width: 1200px) {
  .home-cinematic .shell {
    width: min(calc(100% - 72px), 1540px);
  }

  .home-cinematic-intro {
    grid-template-columns: minmax(0, 0.92fr) minmax(390px, 1.08fr);
    gap: 70px;
  }

  .home-cinematic-island-stage {
    grid-template-columns: minmax(0, 1.2fr) minmax(380px, 0.8fr);
  }

  .home-cinematic-journey__step {
    min-height: 410px;
    padding-inline: 24px;
  }

  .home-cinematic-closing {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .home-cinematic-closing__icon {
    display: none;
  }
}

@media (max-width: 1020px) {
  .home-cinematic-heading {
    grid-template-columns: minmax(0, 1fr) minmax(280px, 0.55fr);
    gap: 50px;
  }

  .home-cinematic-intro {
    grid-template-columns: 1fr;
  }

  .home-cinematic-intro__copy {
    max-width: 800px;
  }

  .home-cinematic-intro__visual {
    width: min(100%, 760px);
    min-height: 590px;
    margin-left: auto;
  }

  .home-cinematic-island-stage {
    grid-template-columns: 1fr;
  }

  .home-cinematic-island-stage__visual {
    min-height: 470px;
  }

  .home-cinematic-island-stage__copy {
    margin-top: -70px;
    margin-left: 10%;
  }

  .home-cinematic-journey__steps {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 44px;
  }

  .home-cinematic-journey__steps::before {
    display: none;
  }

  .home-cinematic-journey__step {
    min-height: 340px;
  }

  .home-cinematic-journey__step:nth-child(4) {
    border-left: 0;
    padding-left: 0;
  }

  .home-cinematic-journey__icon {
    margin-bottom: 28px;
  }

  .home-cinematic-experiences__mosaic {
    min-height: 890px;
    grid-template-rows: repeat(2, 260px) 310px;
  }
}

@media (max-width: 800px) {
  .home-cinematic {
    font-size: 16px;
  }

  .home-cinematic .shell {
    width: min(calc(100% - 42px), 1540px);
  }

  .home-cinematic h2 {
    font-size: clamp(40px, 10vw, 56px);
  }

  .home-cinematic-heading {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .home-cinematic-heading > p,
  .home-cinematic-heading__action > p {
    font-size: 16px;
  }

  .home-cinematic-hero {
    min-height: max(760px, 100svh);
    align-items: flex-end;
    background-position: 67% center;
  }

  .home-cinematic-hero__shade {
    background:
      linear-gradient(0deg, rgba(0, 35, 64, 0.95) 0%, rgba(0, 40, 72, 0.72) 58%, rgba(0, 36, 65, 0.25) 100%),
      linear-gradient(90deg, rgba(0, 35, 64, 0.45), transparent);
  }

  .home-cinematic-hero__content {
    padding-top: 160px;
    padding-bottom: 68px;
  }

  .home-cinematic-hero h1 {
    max-width: 680px;
    font-size: clamp(58px, 15vw, 82px);
  }

  .home-cinematic-hero h1 span {
    font-size: 0.52em;
  }

  .home-cinematic-hero__lead {
    max-width: 600px;
  }

  .home-cinematic-hero__signature {
    margin-top: 48px;
  }

  .home-cinematic-hero__signature span {
    padding-inline: 18px;
  }

  .home-cinematic-scroll {
    display: none;
  }

  .home-cinematic-intro {
    padding-top: 92px;
    padding-bottom: 88px;
  }

  .home-cinematic-intro__visual {
    min-height: 500px;
  }

  .home-cinematic-proof {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .home-cinematic-proof > div:nth-child(3) {
    border-top: 1px solid var(--home-line);
    border-left: 0;
    padding-left: 0;
  }

  .home-cinematic-proof > div:nth-child(4) {
    border-top: 1px solid var(--home-line);
  }

  .home-cinematic-islands {
    padding-block: 94px;
  }

  .home-cinematic-island-stage__visual {
    min-height: 390px;
  }

  .home-cinematic-island-stage__copy {
    margin-top: -44px;
    margin-left: 7%;
  }

  .home-cinematic-journey {
    padding-block: 96px;
  }

  .home-cinematic-journey__steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .home-cinematic-journey__step:nth-child(3),
  .home-cinematic-journey__step:nth-child(5) {
    border-left: 0;
    padding-left: 0;
  }

  .home-cinematic-journey__step:nth-child(4) {
    border-left: 1px solid var(--home-line);
    padding-left: 24px;
  }

  .home-cinematic-mice {
    min-height: 680px;
    background-position: 58% center;
  }

  .home-cinematic-mice__overlay {
    background: linear-gradient(90deg, rgba(0, 35, 64, 0.94), rgba(0, 41, 75, 0.72) 68%, rgba(0, 46, 81, 0.35));
  }

  .home-cinematic-mice__content > * {
    max-width: 650px;
  }

  .home-cinematic-experiences {
    padding-block: 96px;
  }

  .home-cinematic-experiences__mosaic {
    min-height: 0;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: 460px repeat(2, 280px);
  }

  .home-cinematic-experience--culture { grid-column: 1 / 3; grid-row: 1; }
  .home-cinematic-experience--food { grid-column: 1; grid-row: 2; }
  .home-cinematic-experience--water { grid-column: 2; grid-row: 2; }
  .home-cinematic-experience--nature { grid-column: 1; grid-row: 3; }
  .home-cinematic-experience--local { grid-column: 2; grid-row: 3; }

  .home-cinematic-closing {
    grid-template-columns: 1fr;
    gap: 35px;
    padding: 54px 38px;
  }

  .home-cinematic-plane--closing {
    opacity: 0.3;
  }
}

@media (max-width: 600px) {
  .home-cinematic .shell {
    width: calc(100% - 32px);
  }

  .home-cinematic-eyebrow {
    font-size: 10px;
    letter-spacing: 0.14em;
  }

  .home-cinematic-button {
    width: 100%;
    min-height: 53px;
  }

  .home-cinematic-actions {
    align-items: stretch;
    flex-direction: column;
    gap: 20px;
  }

  .home-cinematic-actions .home-cinematic-text-link {
    align-self: flex-start;
  }

  .home-cinematic-hero {
    min-height: max(730px, 100svh);
    background-position: 70% center;
  }

  .home-cinematic-hero__content {
    padding-top: 130px;
    padding-bottom: 42px;
  }

  .home-cinematic-hero h1 {
    margin-bottom: 24px;
    font-size: clamp(50px, 15.5vw, 68px);
    line-height: 0.93;
  }

  .home-cinematic-hero h1 span {
    margin-bottom: 10px;
    font-size: 0.5em;
    line-height: 1.12;
  }

  .home-cinematic-hero__lead {
    margin-bottom: 30px !important;
    font-size: 17px;
    line-height: 1.55;
  }

  .home-cinematic-hero__signature {
    grid-template-columns: 1fr;
    margin-top: 36px;
    padding-top: 8px;
  }

  .home-cinematic-hero__signature span,
  .home-cinematic-hero__signature span:first-child {
    min-height: auto;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-left: 0;
    padding: 10px 0;
  }

  .home-cinematic-hero__signature span:first-child {
    border-top: 0;
  }

  .home-cinematic-hero__signature strong {
    font-size: 18px;
  }

  .home-cinematic-intro {
    gap: 50px;
    padding-top: 78px;
    padding-bottom: 76px;
  }

  .home-cinematic-intro__visual {
    min-height: 410px;
  }

  .home-cinematic-intro__image--main {
    inset: 0 0 48px 0;
  }

  .home-cinematic-intro__image--detail {
    width: 52%;
    height: 42%;
    right: -3%;
    border-width: 7px;
  }

  .home-cinematic-plane--intro {
    display: none;
  }

  .home-cinematic-proof {
    margin-top: 0;
  }

  .home-cinematic-proof > div {
    min-height: 110px;
    padding: 22px 16px;
  }

  .home-cinematic-proof > div:first-child,
  .home-cinematic-proof > div:nth-child(3) {
    padding-left: 0;
  }

  .home-cinematic-proof strong {
    font-size: 34px;
  }

  .home-cinematic-proof span {
    font-size: 9px;
    letter-spacing: 0.08em;
  }

  .home-cinematic-islands {
    padding-block: 78px;
  }

  .home-cinematic-islands__tabs {
    gap: 28px;
    margin-bottom: 30px;
  }

  .home-cinematic-islands__tabs button {
    font-size: 23px;
  }

  .home-cinematic-island-stage__visual {
    min-height: 285px;
  }

  .home-cinematic-island-stage__number {
    right: 18px;
    bottom: -24px;
    font-size: 100px;
  }

  .home-cinematic-island-stage__copy {
    margin-top: 0;
    margin-left: 0;
    padding: 38px 24px 42px;
  }

  .home-cinematic-island-stage__copy h3 {
    font-size: 36px;
  }

  .home-cinematic-journey {
    padding-block: 78px;
  }

  .home-cinematic-journey__steps {
    grid-template-columns: 1fr;
    row-gap: 0;
    margin-bottom: 38px;
  }

  .home-cinematic-journey__step,
  .home-cinematic-journey__step:first-child,
  .home-cinematic-journey__step:nth-child(3),
  .home-cinematic-journey__step:nth-child(4),
  .home-cinematic-journey__step:nth-child(5) {
    min-height: 0;
    border-top: 1px solid var(--home-line);
    border-left: 0;
    display: grid;
    grid-template-columns: 54px minmax(0, 1fr) auto;
    grid-template-rows: auto auto;
    column-gap: 18px;
    padding: 24px 0;
  }

  .home-cinematic-journey__number {
    display: none;
  }

  .home-cinematic-journey__icon {
    width: 50px;
    height: 50px;
    grid-column: 1;
    grid-row: 1 / 3;
    margin: 0;
  }

  .home-cinematic-journey__step h3 {
    grid-column: 2;
    margin: 0 0 6px;
    font-size: 27px;
  }

  .home-cinematic-journey__step p {
    grid-column: 2;
    margin: 0;
    font-size: 13px;
    line-height: 1.6;
  }

  .home-cinematic-journey__arrow {
    grid-column: 3;
    grid-row: 1 / 3;
    align-self: center;
    margin: 0;
  }

  .home-cinematic-mice {
    min-height: 720px;
    background-position: 62% center;
  }

  .home-cinematic-mice__content {
    padding-block: 70px;
  }

  .home-cinematic-mice__content > p:not(.home-cinematic-eyebrow) {
    font-size: 16px;
  }

  .home-cinematic-mice__details {
    display: grid;
  }

  .home-cinematic-mice__details span,
  .home-cinematic-mice__details span:first-child {
    min-height: 50px;
    border-top: 1px solid rgba(255, 255, 255, 0.18);
    border-left: 0;
    padding: 11px 0;
  }

  .home-cinematic-mice__details span:first-child {
    border-top: 0;
  }

  .home-cinematic-experiences {
    padding-block: 78px;
  }

  .home-cinematic-experiences__mosaic {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: none;
    gap: 12px;
  }

  .home-cinematic-experience--culture,
  .home-cinematic-experience--food,
  .home-cinematic-experience--water,
  .home-cinematic-experience--nature,
  .home-cinematic-experience--local {
    min-height: 310px;
    grid-column: 1;
    grid-row: auto;
  }

  .home-cinematic-experience--culture {
    min-height: 410px;
  }

  .home-cinematic-experience__copy {
    right: 72px;
    bottom: 23px;
    left: 22px;
  }

  .home-cinematic-experience__index {
    top: 20px;
    left: 22px;
  }

  .home-cinematic-experience__arrow {
    right: 20px;
    bottom: 20px;
  }

  .home-cinematic-closing {
    width: calc(100% - 24px) !important;
    min-height: 480px;
    margin-bottom: 60px !important;
    padding: 46px 24px;
  }

  .home-cinematic-closing h2 {
    font-size: 39px;
  }

  .home-cinematic-closing__actions {
    width: 100%;
  }

  .home-cinematic-closing__actions .home-cinematic-text-link {
    justify-self: start;
  }
}

@media (max-width: 390px) {
  .home-cinematic-hero h1 {
    font-size: 47px;
  }

  .home-cinematic h2 {
    font-size: 36px;
  }

  .home-cinematic-intro__visual {
    min-height: 355px;
  }

  .home-cinematic-island-stage__visual {
    min-height: 250px;
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

  .home-cinematic [data-home-reveal],
  .home-cinematic [data-home-reveal] .home-cinematic-heading,
  .home-cinematic [data-home-reveal] .home-cinematic-proof,
  .home-cinematic [data-home-reveal] .home-cinematic-experiences__mosaic {
    opacity: 1;
    transform: none;
  }
}

/* Embedded homepage v10 refinement styles */
/*
 * Top Euro Travel homepage refinement — v10
 * The v9 composition remains recognizable. This layer sharpens hierarchy,
 * business clarity, motion and section continuity without replacing the
 * established concept.
 */

.home-cinematic {
  --home-navy: #053f6d;
  --home-navy-deep: #062b4d;
  --home-navy-ink: #0a3153;
  --home-gold: #e3a11f;
  --home-gold-bright: #f1bd4f;
  --home-gold-deep: #bd7710;
  --home-paper: #fcfaf5;
  --home-paper-soft: #f6f1e8;
  --home-cream: #efe7da;
  --home-line: rgba(10, 49, 83, 0.15);
  --home-line-light: rgba(255, 255, 255, 0.2);
  --home-display: "Avenir Next", "Segoe UI", Helvetica, Arial, sans-serif;
  --home-serif: "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif;
  --home-sans: "Avenir Next", "Segoe UI", Helvetica, Arial, sans-serif;
  --home-radius: 18px;
  background: var(--home-paper);
  color: var(--home-navy-ink);
  font-family: var(--home-sans);
  font-size: 17px;
  line-height: 1.7;
}

.home-cinematic h1,
.home-cinematic h2,
.home-cinematic h3 {
  text-wrap: balance;
}

.home-cinematic h2,
.home-cinematic h3 {
  font-family: var(--home-serif);
  font-weight: 500;
}

.home-cinematic h2 {
  max-width: 950px;
  font-size: clamp(44px, 4.15vw, 70px);
  line-height: 1.04;
}

.home-cinematic .shell {
  width: min(calc(100% - clamp(42px, 7vw, 140px)), 1540px);
}

.home-cinematic-eyebrow {
  gap: 13px;
  margin-bottom: 20px !important;
  color: var(--home-gold-deep);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.2em;
  line-height: 1.45;
}

.home-cinematic-eyebrow::before {
  width: 32px;
  background: currentColor;
}

.home-cinematic-lead {
  max-width: 760px;
  color: var(--home-navy-ink);
  font-family: var(--home-sans);
  font-size: clamp(20px, 1.55vw, 25px);
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.5;
}

.home-cinematic-button {
  min-height: 52px;
  border-radius: 6px;
  gap: 14px;
  padding: 15px 23px;
  font-size: 12px;
  letter-spacing: 0.1em;
  box-shadow: none;
  transition:
    color 220ms ease,
    background-color 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease,
    transform 220ms ease;
}

.home-cinematic-button--gold {
  background: var(--home-gold);
  color: #082b4d;
  box-shadow: 0 12px 34px rgba(4, 27, 48, 0.22);
}

.home-cinematic-button--gold:hover,
.home-cinematic-button--gold:focus-visible {
  background: var(--home-gold-bright);
  box-shadow: 0 16px 38px rgba(4, 27, 48, 0.29);
}

.home-cinematic-button--outline {
  border-color: rgba(255, 255, 255, 0.45);
  background: rgba(4, 29, 52, 0.14);
  color: #fff;
}

.home-cinematic-button--outline:hover,
.home-cinematic-button--outline:focus-visible {
  border-color: var(--home-gold-bright);
  background: rgba(4, 29, 52, 0.42);
  color: var(--home-gold-bright);
}

.home-cinematic-button--navy {
  background: var(--home-navy-deep);
}

.home-cinematic-text-link {
  gap: 11px;
  padding-bottom: 6px;
  font-size: 12px;
  letter-spacing: 0.085em;
}

.home-cinematic-heading {
  grid-template-columns: minmax(0, 1.42fr) minmax(320px, 0.58fr);
  align-items: end;
  gap: clamp(48px, 7vw, 120px);
  margin-bottom: clamp(48px, 5.5vw, 82px);
}

.home-cinematic-heading > p,
.home-cinematic-heading__action > p {
  color: #536b80;
  font-size: 16px;
  line-height: 1.78;
}

/* Hero */
.home-cinematic-hero {
  min-height: clamp(720px, 94svh, 940px);
  position: relative;
  overflow: hidden;
  isolation: isolate;
  align-items: center;
  background-color: #071f39;
  background-image: none;
}

.home-cinematic-hero__video {
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  z-index: 0;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
  transform: scale(1.015);
  animation: home-cinematic-video-breathe 18s ease-in-out infinite alternate;
}

@keyframes home-cinematic-video-breathe {
  from { transform: scale(1.015); }
  to { transform: scale(1.055); }
}

.home-cinematic-hero__shade {
  z-index: 1;
  background:
    linear-gradient(90deg, rgba(3, 24, 44, 0.93) 0%, rgba(4, 31, 56, 0.79) 36%, rgba(5, 39, 69, 0.26) 70%, rgba(5, 39, 69, 0.04) 100%),
    linear-gradient(180deg, rgba(1, 16, 31, 0.44) 0%, transparent 40%, rgba(2, 22, 41, 0.18) 72%, rgba(2, 22, 41, 0.56) 100%);
}

.home-cinematic-hero__content {
  width: 100%;
  position: relative;
  z-index: 4;
  padding-top: 150px;
  padding-bottom: 145px;
}

.home-cinematic-hero .home-cinematic-eyebrow {
  width: fit-content;
  display: flex;
  gap: 13px;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  color: var(--home-gold-bright);
  font-size: 11px;
  letter-spacing: 0.21em;
}

.home-cinematic-hero .home-cinematic-eyebrow::before {
  display: block;
}

.home-cinematic-hero h1 {
  max-width: 980px;
  margin-bottom: 27px;
  color: #fff;
  font-family: var(--home-display);
  font-size: clamp(58px, 6.15vw, 102px);
  font-weight: 650;
  letter-spacing: -0.058em;
  line-height: 0.98;
}

.home-cinematic-hero h1 .home-cinematic-hero__title-main,
.home-cinematic-hero h1 .home-cinematic-hero__title-accent {
  display: block;
  margin: 0;
  font-style: normal;
  line-height: inherit;
}

.home-cinematic-hero h1 .home-cinematic-hero__title-main {
  color: #fff;
  font-family: var(--home-display);
  font-size: 1em;
  font-weight: 650;
  letter-spacing: inherit;
}

.home-cinematic-hero h1 .home-cinematic-hero__title-accent {
  margin-top: 8px;
  color: var(--home-gold-bright);
  font-family: var(--home-serif);
  font-size: 0.76em;
  font-weight: 500;
  letter-spacing: -0.045em;
}

.home-cinematic-hero__lead {
  max-width: 740px;
  margin-bottom: 35px !important;
  color: rgba(255, 255, 255, 0.88);
  font-size: clamp(18px, 1.25vw, 21px);
  line-height: 1.65;
}

.home-cinematic-hero .home-cinematic-actions {
  gap: 14px;
}

.home-cinematic-scroll {
  position: absolute;
  right: clamp(28px, 4.5vw, 82px);
  bottom: 52px;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.home-cinematic-scroll svg {
  width: 17px;
  animation: home-cinematic-bob 1.8s ease-in-out infinite;
}

.home-cinematic-hero__content > * {
  animation: home-cinematic-hero-arrive 820ms cubic-bezier(.2,.72,.2,1) both;
}

.home-cinematic-hero__content > :nth-child(2) { animation-delay: 90ms; }
.home-cinematic-hero__content > :nth-child(3) { animation-delay: 170ms; }
.home-cinematic-hero__content > :nth-child(4) { animation-delay: 250ms; }

@keyframes home-cinematic-hero-arrive {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: none; }
}

/* Clean architectural bridge between hero and editorial introduction */
.home-cinematic-threshold {
  min-height: 68px;
  position: relative;
  z-index: 8;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: -34px !important;
  margin-bottom: 0 !important;
  border-top: 1px solid rgba(244, 189, 79, 0.7);
  background: #072b4d;
  color: #fff;
  box-shadow: 0 22px 60px rgba(2, 24, 45, 0.23);
}

.home-cinematic-threshold > div {
  min-width: 0;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 13px clamp(18px, 2.3vw, 34px);
}

.home-cinematic-threshold > div:first-child {
  border-left: 0;
}

.home-cinematic-threshold strong {
  overflow: hidden;
  color: var(--home-gold-bright);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  line-height: 1.3;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
}

.home-cinematic-threshold span {
  overflow: hidden;
  color: rgba(255, 255, 255, 0.68);
  font-size: 11px;
  line-height: 1.35;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Introduction */
.home-cinematic-intro {
  grid-template-columns: minmax(0, 1.02fr) minmax(430px, 0.98fr);
  align-items: center;
  gap: clamp(64px, 8.5vw, 138px);
  padding-top: clamp(118px, 10vw, 170px);
  padding-bottom: clamp(94px, 9vw, 148px);
}

.home-cinematic-intro__copy {
  max-width: 760px;
}

.home-cinematic-intro__copy h2 {
  max-width: 760px;
  margin-bottom: 25px;
}

.home-cinematic-intro__copy > p:not(.home-cinematic-eyebrow):not(.home-cinematic-lead) {
  max-width: 720px;
  color: #536a7e;
  font-size: 16px;
  line-height: 1.78;
}

.home-cinematic-intro__copy .home-cinematic-text-link {
  margin-top: 19px;
}

.home-cinematic-intro__visual {
  min-height: 640px;
}

.home-cinematic-intro__image,
.home-cinematic-island-stage,
.home-cinematic-experience,
.home-cinematic-closing,
.home-cinematic-services__stage {
  border-radius: var(--home-radius);
}

.home-cinematic-intro__image,
.home-cinematic-island-stage,
.home-cinematic-experience,
.home-cinematic-closing,
.home-cinematic-services__stage {
  overflow: hidden;
}

.home-cinematic-intro__image--main {
  inset: 0 4% 74px 0;
}

.home-cinematic-intro__image--detail {
  width: 43%;
  height: 43%;
  right: -2%;
  bottom: 0;
  border: 9px solid var(--home-paper);
  box-shadow: 0 26px 64px rgba(2, 38, 68, 0.23);
}

.home-cinematic-intro__stamp {
  min-width: 170px;
  position: absolute;
  bottom: 30px;
  left: -26px;
  z-index: 4;
  display: grid;
  gap: 3px;
  padding: 17px 20px;
  border-left: 3px solid var(--home-gold);
  background: rgba(7, 43, 77, 0.94);
  color: #fff;
  box-shadow: 0 18px 42px rgba(2, 35, 62, 0.24);
}

.home-cinematic-intro__stamp span {
  color: rgba(255, 255, 255, 0.58);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.17em;
  text-transform: uppercase;
}

.home-cinematic-intro__stamp strong {
  color: var(--home-gold-bright);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.home-cinematic-proof {
  grid-column: 1 / -1;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin-top: 16px;
  border: 0;
  border-top: 1px solid var(--home-line);
  border-bottom: 1px solid var(--home-line);
  border-radius: 0;
  overflow: visible;
  background: transparent;
}

.home-cinematic-proof > div {
  min-height: 132px;
  padding: 24px clamp(20px, 2.7vw, 42px);
}

.home-cinematic-proof > div:first-child {
  padding-left: 0;
}

.home-cinematic-proof strong {
  color: var(--home-gold-deep);
  font-family: var(--home-display);
  font-size: clamp(34px, 2.8vw, 48px);
  font-weight: 650;
  letter-spacing: -0.045em;
}

.home-cinematic-proof span {
  margin-top: 8px;
  color: #5a7185;
  font-size: 10px;
  letter-spacing: 0.13em;
}

/* Destination chapter */
.home-cinematic-islands {
  padding: clamp(104px, 10vw, 160px) 0;
  background:
    radial-gradient(circle at 88% 9%, rgba(69, 154, 198, 0.18), transparent 29%),
    linear-gradient(135deg, #052b4e, #074d7a 74%, #075687);
}

.home-cinematic-islands::before {
  width: 44%;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(90deg, var(--home-gold), transparent);
  content: "";
}

.home-cinematic-islands__tabs {
  gap: 44px;
  margin-bottom: 40px;
}

.home-cinematic-islands__tabs button {
  font-size: 25px;
}

.home-cinematic-island-stage {
  grid-template-columns: minmax(0, 1.32fr) minmax(400px, 0.68fr);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 36px 80px rgba(0, 20, 38, 0.26);
}

.home-cinematic-island-stage__visual {
  min-height: 590px;
}

.home-cinematic-island-stage__visual::after {
  background: linear-gradient(90deg, transparent 57%, rgba(4, 37, 66, 0.28));
}

.home-cinematic-island-stage__copy {
  padding: clamp(48px, 5.2vw, 82px);
  background: rgba(5, 42, 75, 0.94);
  box-shadow: -34px 0 58px rgba(0, 23, 43, 0.26);
}

.home-cinematic-island-stage__copy h3 {
  font-size: clamp(38px, 3vw, 52px);
}

/* Services — custom interactive selector */
.home-cinematic-journey {
  padding-top: clamp(108px, 10vw, 168px);
  padding-bottom: clamp(112px, 10vw, 176px);
}

.home-cinematic-services {
  display: grid;
  grid-template-columns: minmax(320px, 0.7fr) minmax(0, 1.3fr);
  align-items: stretch;
  gap: clamp(28px, 3.6vw, 58px);
}

.home-cinematic-services__index {
  border-top: 1px solid var(--home-line);
  display: grid;
  align-content: start;
}

.home-cinematic-services__index button {
  width: 100%;
  min-height: 72px;
  position: relative;
  border: 0;
  border-bottom: 1px solid var(--home-line);
  display: grid;
  grid-template-columns: 34px 38px minmax(0, 1fr) 20px;
  align-items: center;
  gap: 13px;
  padding: 12px 6px;
  background: transparent;
  color: #62778a;
  cursor: pointer;
  text-align: left;
  transition: color 200ms ease, padding 240ms ease, background-color 240ms ease;
}

.home-cinematic-services__index button::before {
  width: 3px;
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 0;
  background: var(--home-gold);
  content: "";
  opacity: 0;
  transform: scaleY(0.35);
  transition: opacity 220ms ease, transform 260ms cubic-bezier(.2,.7,.2,1);
}

.home-cinematic-services__index button:hover,
.home-cinematic-services__index button:focus-visible,
.home-cinematic-services__index button.is-active {
  padding-left: 15px;
  background: linear-gradient(90deg, rgba(227, 161, 31, 0.1), transparent 78%);
  color: var(--home-navy-ink);
}

.home-cinematic-services__index button.is-active::before {
  opacity: 1;
  transform: scaleY(1);
}

.home-cinematic-services__number {
  color: #8999a6;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.15em;
}

.home-cinematic-services__icon {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  color: var(--home-navy);
}

.home-cinematic-services__icon svg {
  width: 21px;
  height: 21px;
  stroke-width: 1.75;
}

.home-cinematic-services__name {
  color: inherit;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.25;
}

.home-cinematic-services__arrow {
  width: 17px;
  color: var(--home-gold-deep);
  opacity: 0;
  transform: translateX(-7px);
  transition: opacity 200ms ease, transform 220ms ease;
}

.home-cinematic-services__index button:hover .home-cinematic-services__arrow,
.home-cinematic-services__index button:focus-visible .home-cinematic-services__arrow,
.home-cinematic-services__index button.is-active .home-cinematic-services__arrow {
  opacity: 1;
  transform: none;
}

.home-cinematic-services__stage {
  min-height: 650px;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(370px, 0.92fr);
  background: var(--home-navy-deep);
  color: #fff;
  box-shadow: 0 32px 72px rgba(3, 39, 69, 0.2);
  animation: home-cinematic-service-stage 430ms cubic-bezier(.2,.7,.2,1) both;
}

@keyframes home-cinematic-service-stage {
  from { opacity: 0; transform: translateY(13px); }
  to { opacity: 1; transform: none; }
}

.home-cinematic-services__media {
  min-height: 100%;
  position: relative;
  overflow: hidden;
  background: #dce4e7;
}

.home-cinematic-services__media .travel-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.94) contrast(1.02);
  animation: home-cinematic-service-media 900ms cubic-bezier(.2,.7,.2,1) both;
}

@keyframes home-cinematic-service-media {
  from { transform: scale(1.055); }
  to { transform: scale(1); }
}

.home-cinematic-services__media-shade {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, transparent 62%, rgba(6, 43, 77, 0.42)),
    linear-gradient(0deg, rgba(4, 31, 56, 0.38), transparent 48%);
}

.home-cinematic-services__media-label {
  position: absolute;
  bottom: 27px;
  left: 29px;
  color: rgba(255, 255, 255, 0.88);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.home-cinematic-services__content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(44px, 4.8vw, 76px);
  background:
    radial-gradient(circle at 100% 0%, rgba(66, 149, 194, 0.22), transparent 31%),
    var(--home-navy-deep);
}

.home-cinematic-services__content-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 34px;
}

.home-cinematic-services__active-icon {
  width: 58px;
  height: 58px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  display: grid;
  place-items: center;
  color: var(--home-gold-bright);
}

.home-cinematic-services__active-icon svg {
  width: 27px;
  height: 27px;
  stroke-width: 1.6;
}

.home-cinematic-services__active-number {
  color: rgba(255, 255, 255, 0.2);
  font-family: var(--home-serif);
  font-size: 64px;
  line-height: 1;
}

.home-cinematic-services__eyebrow {
  margin-bottom: 15px !important;
  color: var(--home-gold-bright);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.home-cinematic-services__content h3 {
  margin-bottom: 22px;
  color: #fff;
  font-size: clamp(37px, 3vw, 52px);
}

.home-cinematic-services__content > p:not(.home-cinematic-services__eyebrow) {
  color: rgba(255, 255, 255, 0.74);
  font-size: 16px;
  line-height: 1.72;
}

.home-cinematic-services__content ul {
  margin: 10px 0 32px;
  padding: 0;
  list-style: none;
}

.home-cinematic-services__content li {
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.17);
  padding: 12px 0 12px 20px;
  color: rgba(255, 255, 255, 0.88);
  font-size: 13px;
}

.home-cinematic-services__content li::before {
  width: 6px;
  height: 6px;
  position: absolute;
  top: 21px;
  left: 0;
  background: var(--home-gold);
  content: "";
  transform: rotate(45deg);
}

/* MICE */
.home-cinematic-mice {
  min-height: 760px;
  position: relative;
  overflow: hidden;
  background-position: center;
  background-size: cover;
}

.home-cinematic-mice::before,
.home-cinematic-mice::after {
  height: 1px;
  position: absolute;
  right: 0;
  left: 0;
  z-index: 3;
  background: linear-gradient(90deg, transparent, rgba(240, 184, 72, 0.58), transparent);
  content: "";
}

.home-cinematic-mice::before { top: 0; }
.home-cinematic-mice::after { bottom: 0; }

.home-cinematic-mice__overlay {
  background:
    linear-gradient(90deg, rgba(3, 27, 49, 0.95) 0%, rgba(4, 36, 64, 0.86) 42%, rgba(5, 44, 77, 0.3) 76%, rgba(5, 44, 77, 0.1) 100%),
    linear-gradient(0deg, rgba(2, 25, 47, 0.44), transparent 56%);
}

.home-cinematic-mice__content {
  padding-top: 118px;
  padding-bottom: 118px;
}

.home-cinematic-mice__content > * {
  max-width: 790px;
}

.home-cinematic-mice h2 {
  margin-bottom: 29px;
  font-size: clamp(46px, 4.25vw, 70px);
}

.home-cinematic-mice__content > p:not(.home-cinematic-eyebrow) {
  max-width: 750px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 17px;
  line-height: 1.76;
}

.home-cinematic-mice__details {
  max-width: 760px;
  margin: 39px 0 39px;
}

.home-cinematic-mice__details span {
  min-height: 62px;
  padding: 13px 24px;
  font-size: 12px;
  letter-spacing: 0.02em;
}

/* Experiences */
.home-cinematic-experiences {
  padding-top: clamp(110px, 10vw, 170px);
  padding-bottom: clamp(110px, 10vw, 170px);
}

.home-cinematic-experiences__mosaic {
  gap: 14px;
}

.home-cinematic-experience {
  border-radius: 14px;
}

.home-cinematic-experience .travel-photo {
  transition: transform 900ms cubic-bezier(.2,.7,.2,1), filter 500ms ease;
}

.home-cinematic-experience__shade {
  background: linear-gradient(0deg, rgba(2, 30, 53, 0.9) 0%, rgba(3, 33, 58, 0.07) 68%);
}

.home-cinematic-experience__copy strong {
  font-size: clamp(24px, 1.9vw, 35px);
}

.home-cinematic-experience__arrow {
  border-radius: 50%;
}

/* Closing */
.home-cinematic-closing {
  min-height: 390px;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: clamp(32px, 4vw, 68px);
  margin-bottom: clamp(74px, 8vw, 126px) !important;
  padding: clamp(56px, 5.8vw, 86px);
  border-top: 2px solid rgba(227, 161, 31, 0.82);
  border-radius: 14px;
  background:
    radial-gradient(circle at 91% 12%, rgba(62, 145, 190, 0.25), transparent 28%),
    linear-gradient(130deg, #052a4b, #082f55 67%, #093961);
}

.home-cinematic-closing__icon {
  width: 68px;
  height: 68px;
}

.home-cinematic-closing h2 {
  max-width: 650px;
  margin-bottom: 17px;
  font-size: clamp(45px, 4vw, 66px);
}

.home-cinematic-closing__copy > p:not(.home-cinematic-eyebrow) {
  max-width: 760px;
  color: rgba(255, 255, 255, 0.75);
  font-size: 16px;
  line-height: 1.72;
}

.home-cinematic-closing__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  margin-top: 27px;
  border-top: 1px solid rgba(255, 255, 255, 0.17);
  border-bottom: 1px solid rgba(255, 255, 255, 0.17);
}

.home-cinematic-closing__meta span {
  min-height: 47px;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
  display: inline-flex;
  align-items: center;
  padding: 10px 19px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.home-cinematic-closing__meta span:first-child {
  border-left: 0;
  padding-left: 0;
}

.home-cinematic-closing__actions {
  min-width: 220px;
}

/* Purposeful, section-specific reveal choreography */
.home-cinematic [data-home-reveal],
.home-cinematic [data-home-reveal] .home-cinematic-heading,
.home-cinematic [data-home-reveal] .home-cinematic-proof,
.home-cinematic [data-home-reveal] .home-cinematic-experiences__mosaic {
  opacity: 1;
  transform: none;
  transition: none;
}

@media (prefers-reduced-motion: no-preference) {
  .home-cinematic.is-motion-ready .home-cinematic-intro__copy,
  .home-cinematic.is-motion-ready .home-cinematic-intro__visual,
  .home-cinematic.is-motion-ready .home-cinematic-proof,
  .home-cinematic.is-motion-ready .home-cinematic-islands .home-cinematic-heading,
  .home-cinematic.is-motion-ready .home-cinematic-islands__tabs,
  .home-cinematic.is-motion-ready .home-cinematic-journey .home-cinematic-heading,
  .home-cinematic.is-motion-ready .home-cinematic-services,
  .home-cinematic.is-motion-ready .home-cinematic-mice__content,
  .home-cinematic.is-motion-ready .home-cinematic-experiences .home-cinematic-heading,
  .home-cinematic.is-motion-ready .home-cinematic-experience,
  .home-cinematic.is-motion-ready .home-cinematic-closing > * {
    opacity: 0;
  }

  .home-cinematic.is-motion-ready .home-cinematic-intro__copy {
    transform: translateX(-28px);
    transition: opacity 720ms ease, transform 820ms cubic-bezier(.2,.7,.2,1);
  }

  .home-cinematic.is-motion-ready .home-cinematic-intro__visual {
    clip-path: inset(0 0 0 18%);
    transform: translateX(26px);
    transition: opacity 760ms ease 90ms, transform 900ms cubic-bezier(.2,.7,.2,1) 90ms, clip-path 1000ms cubic-bezier(.2,.7,.2,1) 90ms;
  }

  .home-cinematic.is-motion-ready .home-cinematic-proof {
    transform: translateY(18px);
    transition: opacity 680ms ease 180ms, transform 760ms cubic-bezier(.2,.7,.2,1) 180ms;
  }

  .home-cinematic.is-motion-ready .home-cinematic-intro.is-visible .home-cinematic-intro__copy,
  .home-cinematic.is-motion-ready .home-cinematic-intro.is-visible .home-cinematic-intro__visual,
  .home-cinematic.is-motion-ready .home-cinematic-intro.is-visible .home-cinematic-proof {
    opacity: 1;
    transform: none;
    clip-path: inset(0);
  }

  .home-cinematic.is-motion-ready .home-cinematic-islands .home-cinematic-heading {
    transform: translateY(24px);
    transition: opacity 680ms ease, transform 760ms cubic-bezier(.2,.7,.2,1);
  }

  .home-cinematic.is-motion-ready .home-cinematic-islands__tabs {
    transform: translateY(15px);
    transition: opacity 620ms ease 110ms, transform 700ms cubic-bezier(.2,.7,.2,1) 110ms;
  }

  .home-cinematic.is-motion-ready .home-cinematic-islands.is-visible .home-cinematic-heading,
  .home-cinematic.is-motion-ready .home-cinematic-islands.is-visible .home-cinematic-islands__tabs {
    opacity: 1;
    transform: none;
  }

  .home-cinematic.is-motion-ready .home-cinematic-journey .home-cinematic-heading {
    transform: translateY(22px);
    transition: opacity 680ms ease, transform 760ms cubic-bezier(.2,.7,.2,1);
  }

  .home-cinematic.is-motion-ready .home-cinematic-services {
    transform: translateY(28px);
    transition: opacity 740ms ease 120ms, transform 860ms cubic-bezier(.2,.7,.2,1) 120ms;
  }

  .home-cinematic.is-motion-ready .home-cinematic-journey.is-visible .home-cinematic-heading,
  .home-cinematic.is-motion-ready .home-cinematic-journey.is-visible .home-cinematic-services {
    opacity: 1;
    transform: none;
  }

  .home-cinematic.is-motion-ready .home-cinematic-mice__content {
    transform: translateX(-30px);
    transition: opacity 760ms ease, transform 900ms cubic-bezier(.2,.7,.2,1);
  }

  .home-cinematic.is-motion-ready .home-cinematic-mice.is-visible .home-cinematic-mice__content {
    opacity: 1;
    transform: none;
  }

  .home-cinematic.is-motion-ready .home-cinematic-experiences .home-cinematic-heading {
    transform: translateY(22px);
    transition: opacity 680ms ease, transform 760ms cubic-bezier(.2,.7,.2,1);
  }

  .home-cinematic.is-motion-ready .home-cinematic-experience {
    transform: translateY(24px);
    transition: opacity 650ms ease, transform 760ms cubic-bezier(.2,.7,.2,1);
  }

  .home-cinematic.is-motion-ready .home-cinematic-experience:nth-child(2) { transition-delay: 70ms; }
  .home-cinematic.is-motion-ready .home-cinematic-experience:nth-child(3) { transition-delay: 130ms; }
  .home-cinematic.is-motion-ready .home-cinematic-experience:nth-child(4) { transition-delay: 190ms; }
  .home-cinematic.is-motion-ready .home-cinematic-experience:nth-child(5) { transition-delay: 250ms; }

  .home-cinematic.is-motion-ready .home-cinematic-experiences.is-visible .home-cinematic-heading,
  .home-cinematic.is-motion-ready .home-cinematic-experiences.is-visible .home-cinematic-experience {
    opacity: 1;
    transform: none;
  }

  .home-cinematic.is-motion-ready .home-cinematic-closing > * {
    transform: translateY(18px);
    transition: opacity 680ms ease, transform 760ms cubic-bezier(.2,.7,.2,1);
  }

  .home-cinematic.is-motion-ready .home-cinematic-closing > :nth-child(2) { transition-delay: 70ms; }
  .home-cinematic.is-motion-ready .home-cinematic-closing > :nth-child(3) { transition-delay: 140ms; }

  .home-cinematic.is-motion-ready .home-cinematic-closing.is-visible > * {
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 1200px) {
  .home-cinematic-intro {
    grid-template-columns: minmax(0, 0.96fr) minmax(400px, 1.04fr);
    gap: 72px;
  }

  .home-cinematic-services {
    grid-template-columns: minmax(290px, 0.66fr) minmax(0, 1.34fr);
  }

  .home-cinematic-services__stage {
    grid-template-columns: minmax(0, 1fr) minmax(340px, 0.95fr);
  }

  .home-cinematic-closing {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .home-cinematic-closing__icon {
    display: none;
  }
}

@media (max-width: 1020px) {
  .home-cinematic-heading {
    grid-template-columns: minmax(0, 1fr) minmax(280px, 0.58fr);
    gap: 46px;
  }

  .home-cinematic-threshold {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .home-cinematic-threshold > div:nth-child(3) {
    border-top: 1px solid rgba(255, 255, 255, 0.14);
    border-left: 0;
  }

  .home-cinematic-threshold > div:nth-child(4) {
    border-top: 1px solid rgba(255, 255, 255, 0.14);
  }

  .home-cinematic-intro {
    grid-template-columns: 1fr;
  }

  .home-cinematic-intro__copy {
    max-width: 850px;
  }

  .home-cinematic-intro__visual {
    width: min(100%, 780px);
    min-height: 600px;
    margin-left: auto;
  }

  .home-cinematic-proof {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .home-cinematic-proof > div:nth-child(4) {
    border-top: 1px solid var(--home-line);
    border-left: 0;
    padding-left: 0;
  }

  .home-cinematic-proof > div:nth-child(5) {
    border-top: 1px solid var(--home-line);
  }

  .home-cinematic-island-stage {
    grid-template-columns: 1fr;
  }

  .home-cinematic-island-stage__copy {
    margin-top: -68px;
    margin-left: 9%;
  }

  .home-cinematic-services {
    grid-template-columns: 1fr;
  }

  .home-cinematic-services__index {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-left: 1px solid var(--home-line);
  }

  .home-cinematic-services__index button:nth-child(odd) {
    border-right: 1px solid var(--home-line);
  }

  .home-cinematic-services__stage {
    grid-template-columns: minmax(0, 1.1fr) minmax(340px, 0.9fr);
    min-height: 600px;
  }
}

@media (max-width: 800px) {
  .home-cinematic {
    --home-radius: 16px;
    font-size: 16px;
  }

  .home-cinematic .shell {
    width: min(calc(100% - 42px), 1540px);
  }

  .home-cinematic h2 {
    font-size: clamp(39px, 9.5vw, 55px);
  }

  .home-cinematic-heading {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .home-cinematic-hero {
    min-height: max(780px, 100svh);
    align-items: flex-end;
  }

  .home-cinematic-hero__video {
    object-position: center;
  }

  .home-cinematic-hero__shade {
    background:
      linear-gradient(0deg, rgba(3, 26, 48, 0.97) 0%, rgba(3, 31, 56, 0.76) 58%, rgba(3, 30, 54, 0.25) 100%),
      linear-gradient(90deg, rgba(2, 24, 44, 0.45), transparent);
  }

  .home-cinematic-hero__content {
    padding-top: 155px;
    padding-bottom: 104px;
  }

  .home-cinematic-hero h1 {
    max-width: 720px;
    font-size: clamp(51px, 13vw, 76px);
  }

  .home-cinematic-hero h1 .home-cinematic-hero__title-accent {
    font-size: 0.72em;
  }

  .home-cinematic-scroll {
    display: none;
  }

  .home-cinematic-threshold {
    margin-top: -28px !important;
  }

  .home-cinematic-intro {
    padding-top: 104px;
    padding-bottom: 92px;
  }

  .home-cinematic-intro__visual {
    min-height: 510px;
  }

  .home-cinematic-proof {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .home-cinematic-proof > div:nth-child(3) {
    border-top: 1px solid var(--home-line);
    border-left: 0;
    padding-left: 0;
  }

  .home-cinematic-proof > div:nth-child(4) {
    border-top: 1px solid var(--home-line);
    border-left: 1px solid var(--home-line);
    padding-left: clamp(20px, 2.7vw, 42px);
  }

  .home-cinematic-proof > div:nth-child(5) {
    grid-column: 1 / -1;
    border-top: 1px solid var(--home-line);
    border-left: 0;
    padding-left: 0;
  }

  .home-cinematic-islands {
    padding-block: 96px;
  }

  .home-cinematic-island-stage__visual {
    min-height: 420px;
  }

  .home-cinematic-island-stage__copy {
    margin-top: -42px;
    margin-left: 6%;
  }

  .home-cinematic-journey,
  .home-cinematic-experiences {
    padding-block: 100px;
  }

  .home-cinematic-services__stage {
    grid-template-columns: 1fr;
  }

  .home-cinematic-services__media {
    min-height: 390px;
  }

  .home-cinematic-mice {
    min-height: 720px;
    background-position: 58% center;
  }

  .home-cinematic-mice__overlay {
    background: linear-gradient(90deg, rgba(3, 27, 49, 0.95), rgba(4, 36, 64, 0.76) 68%, rgba(5, 44, 77, 0.4));
  }

  .home-cinematic-closing {
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 54px 38px;
  }
}

@media (max-width: 600px) {
  .home-cinematic {
    --home-radius: 14px;
  }

  .home-cinematic .shell {
    width: calc(100% - 32px);
  }

  .home-cinematic-eyebrow {
    font-size: 9px;
    letter-spacing: 0.16em;
  }

  .home-cinematic-button {
    width: 100%;
    min-height: 53px;
  }

  .home-cinematic-actions {
    align-items: stretch;
    flex-direction: column;
    gap: 12px !important;
  }

  .home-cinematic-hero {
    min-height: max(760px, 100svh);
  }

  .home-cinematic-hero__content {
    padding-top: 125px;
    padding-bottom: 94px;
  }

  .home-cinematic-hero .home-cinematic-eyebrow {
    max-width: 310px;
    font-size: 9px;
    line-height: 1.6;
  }

  .home-cinematic-hero h1 {
    margin-bottom: 22px;
    font-size: clamp(45px, 14vw, 61px);
    line-height: 1;
  }

  .home-cinematic-hero h1 .home-cinematic-hero__title-accent {
    margin-top: 7px;
    font-size: 0.7em;
  }

  .home-cinematic-hero__lead {
    margin-bottom: 28px !important;
    font-size: 17px;
    line-height: 1.55;
  }

  .home-cinematic-threshold {
    grid-template-columns: 1fr 1fr;
    margin-top: -24px !important;
  }

  .home-cinematic-threshold > div {
    min-height: 61px;
    padding: 11px 13px;
  }

  .home-cinematic-threshold > div:nth-child(2),
  .home-cinematic-threshold > div:nth-child(3) {
    display: none;
  }

  .home-cinematic-threshold > div:nth-child(4) {
    border-top: 0;
  }

  .home-cinematic-threshold strong {
    font-size: 9px;
  }

  .home-cinematic-threshold span {
    font-size: 9px;
  }

  .home-cinematic-intro {
    gap: 52px;
    padding-top: 82px;
    padding-bottom: 80px;
  }

  .home-cinematic-intro__copy > p:not(.home-cinematic-eyebrow):not(.home-cinematic-lead) {
    font-size: 15px;
  }

  .home-cinematic-intro__visual {
    min-height: 420px;
  }

  .home-cinematic-intro__image--main {
    inset: 0 0 50px 0;
  }

  .home-cinematic-intro__image--detail {
    width: 53%;
    height: 41%;
    right: -2%;
    border-width: 7px;
  }

  .home-cinematic-intro__stamp {
    min-width: 145px;
    bottom: 23px;
    left: -8px;
    padding: 13px 15px;
  }

  .home-cinematic-proof > div {
    min-height: 105px;
    padding: 20px 14px;
  }

  .home-cinematic-proof strong {
    font-size: 31px;
  }

  .home-cinematic-proof span {
    font-size: 8px;
    letter-spacing: 0.08em;
  }

  .home-cinematic-islands {
    padding-block: 80px;
  }

  .home-cinematic-islands__tabs {
    gap: 27px;
    margin-bottom: 29px;
  }

  .home-cinematic-islands__tabs button {
    font-size: 22px;
  }

  .home-cinematic-island-stage__visual {
    min-height: 295px;
  }

  .home-cinematic-island-stage__copy {
    margin: 0;
    padding: 37px 23px 42px;
  }

  .home-cinematic-island-stage__copy h3 {
    font-size: 34px;
  }

  .home-cinematic-journey,
  .home-cinematic-experiences {
    padding-block: 80px;
  }

  .home-cinematic-services__index {
    grid-template-columns: 1fr;
    border-left: 0;
  }

  .home-cinematic-services__index button,
  .home-cinematic-services__index button:nth-child(odd) {
    min-height: 64px;
    border-right: 0;
    grid-template-columns: 30px 34px minmax(0, 1fr) 18px;
    padding: 10px 2px;
  }

  .home-cinematic-services__index button:hover,
  .home-cinematic-services__index button:focus-visible,
  .home-cinematic-services__index button.is-active {
    padding-left: 11px;
  }

  .home-cinematic-services__name {
    font-size: 13px;
  }

  .home-cinematic-services__stage {
    min-height: 0;
  }

  .home-cinematic-services__media {
    min-height: 285px;
  }

  .home-cinematic-services__content {
    padding: 38px 23px 43px;
  }

  .home-cinematic-services__content-top {
    margin-bottom: 28px;
  }

  .home-cinematic-services__active-icon {
    width: 52px;
    height: 52px;
  }

  .home-cinematic-services__active-number {
    font-size: 50px;
  }

  .home-cinematic-services__content h3 {
    font-size: 35px;
  }

  .home-cinematic-mice {
    min-height: 730px;
    background-position: 62% center;
  }

  .home-cinematic-mice__content {
    padding-block: 74px;
  }

  .home-cinematic-mice h2 {
    font-size: 42px;
  }

  .home-cinematic-mice__content > p:not(.home-cinematic-eyebrow) {
    font-size: 15px;
  }

  .home-cinematic-mice__details {
    display: grid;
  }

  .home-cinematic-mice__details span,
  .home-cinematic-mice__details span:first-child {
    min-height: 50px;
    border-top: 1px solid rgba(255, 255, 255, 0.18);
    border-left: 0;
    padding: 11px 0;
  }

  .home-cinematic-mice__details span:first-child {
    border-top: 0;
  }

  .home-cinematic-experiences__mosaic {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: none;
    gap: 11px;
  }

  .home-cinematic-experience--culture,
  .home-cinematic-experience--food,
  .home-cinematic-experience--water,
  .home-cinematic-experience--nature,
  .home-cinematic-experience--local {
    min-height: 310px;
    grid-column: 1;
    grid-row: auto;
  }

  .home-cinematic-experience--culture {
    min-height: 400px;
  }

  .home-cinematic-closing {
    width: calc(100% - 24px) !important;
    min-height: 500px;
    margin-bottom: 60px !important;
    padding: 45px 23px;
  }

  .home-cinematic-closing h2 {
    font-size: 43px;
  }

  .home-cinematic-closing__meta {
    display: grid;
  }

  .home-cinematic-closing__meta span,
  .home-cinematic-closing__meta span:first-child {
    min-height: 42px;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
    border-left: 0;
    padding: 9px 0;
  }

  .home-cinematic-closing__meta span:first-child {
    border-top: 0;
  }

  .home-cinematic-closing__actions {
    width: 100%;
    min-width: 0;
  }
}

@media (max-width: 390px) {
  .home-cinematic-hero h1 {
    font-size: 43px;
  }

  .home-cinematic h2 {
    font-size: 35px;
  }

  .home-cinematic-intro__visual {
    min-height: 360px;
  }

  .home-cinematic-island-stage__visual {
    min-height: 250px;
  }
}

@media (max-width: 767px) {
  .home-cinematic-hero {
    background-image: url('https://static.wixstatic.com/media/5a118b_ea5a16aef9d047ddb9126c2f00737d43f000.jpg');
    background-position: center;
    background-size: cover;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-cinematic-hero__video {
    display: none;
  }

  .home-cinematic-hero__content > *,
  .home-cinematic-scroll svg,
  .home-cinematic-services__stage,
  .home-cinematic-services__media .travel-photo {
    animation: none !important;
  }
}

/* Embedded header refinement used while this homepage is mounted */
/* ================================================================
   Top Euro Travel header refinement — homepage v10
   Keeps the transparent header concept while replacing the heavy
   CONTACT block with a lighter, custom navigation treatment.
   ================================================================ */

.site-header {
  transition:
    background-color 300ms ease,
    backdrop-filter 300ms ease,
    height 300ms ease,
    box-shadow 300ms ease,
    border-color 300ms ease;
}

.site-header.is-scrolled {
  background: rgba(4, 28, 51, 0.93);
  backdrop-filter: blur(18px) saturate(1.08);
  -webkit-backdrop-filter: blur(18px) saturate(1.08);
  border-bottom-color: rgba(255, 255, 255, 0.12);
  box-shadow: 0 12px 34px rgba(0, 18, 35, 0.22);
}

.site-header__nav-wrap {
  gap: clamp(24px, 3.4vw, 58px);
}

.main-nav {
  gap: clamp(22px, 2.55vw, 42px);
}

.main-nav__link {
  font-size: 12px;
  font-weight: 750;
  letter-spacing: 0.075em;
}

.header-contact-btn,
.header-contact-btn.button,
.header-contact-btn.button--gold,
.header-contact-btn.button--small {
  min-height: 40px !important;
  border: 0 !important;
  border-left: 1px solid rgba(255, 255, 255, 0.25) !important;
  border-radius: 0 !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 12px !important;
  padding: 0 0 0 18px !important;
  background: transparent !important;
  color: #fff !important;
  box-shadow: none !important;
  font-size: 11px !important;
  font-weight: 800 !important;
  letter-spacing: 0.12em !important;
  line-height: 1 !important;
  text-transform: uppercase !important;
  transform: none !important;
}

.header-contact-btn::after {
  width: 34px;
  height: 34px;
  border: 1px solid rgba(241, 189, 79, 0.78);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(5, 38, 67, 0.2);
  color: #f1bd4f;
  content: "↗";
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  transition:
    color 220ms ease,
    background-color 220ms ease,
    border-color 220ms ease,
    transform 240ms cubic-bezier(.2,.7,.2,1);
}

.header-contact-btn:hover,
.header-contact-btn:focus-visible,
.header-contact-btn.button--gold:hover,
.header-contact-btn.button--gold:focus-visible {
  background: transparent !important;
  color: #f1bd4f !important;
  box-shadow: none !important;
  transform: none !important;
}

.header-contact-btn:hover::after,
.header-contact-btn:focus-visible::after {
  border-color: #f1bd4f;
  background: #e3a11f;
  color: #082b4d;
  transform: translate(2px, -2px);
}

@media (max-width: 940px) {
  .site-header__nav-wrap {
    background: rgba(252, 250, 245, 0.98);
    box-shadow: 0 22px 54px rgba(0, 31, 57, 0.18);
  }

  .header-actions {
    width: 100%;
    margin-top: 12px;
  }

  .header-contact-btn,
  .header-contact-btn.button,
  .header-contact-btn.button--gold,
  .header-contact-btn.button--small {
    width: 100% !important;
    min-height: 54px !important;
    border-top: 1px solid rgba(8, 47, 83, 0.16) !important;
    border-bottom: 1px solid rgba(8, 47, 83, 0.16) !important;
    border-left: 0 !important;
    justify-content: space-between !important;
    padding: 0 !important;
    color: #082f53 !important;
  }

  .header-contact-btn::after {
    border-color: rgba(189, 119, 16, 0.65);
    background: transparent;
    color: #bd7710;
  }

  .header-contact-btn:hover,
  .header-contact-btn:focus-visible,
  .header-contact-btn.button--gold:hover,
  .header-contact-btn.button--gold:focus-visible {
    color: #bd7710 !important;
  }
}
`;

type IslandKey = 'rhodes' | 'kos';
type ServiceKey =
  | 'hotel-contracting'
  | 'booking-management'
  | 'transfers'
  | 'resort-assistance'
  | 'tours-excursions'
  | 'mice-groups'
  | 'weddings-events'
  | 'xml-connectivity';

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

type ServiceItem = {
  key: ServiceKey;
  icon: LucideIcon;
  number: string;
  title: string;
  eyebrow: string;
  copy: string;
  capabilities: string[];
  image: string;
  alt: string;
};

const islandScenes: Record<IslandKey, IslandScene> = {
  rhodes: {
    number: '01',
    name: 'Rhodes',
    eyebrow: 'Heritage, coastline and exceptional variety',
    title: 'A destination with the depth to support every kind of programme.',
    copy: 'From the Medieval City and Lindos to resort zones, private venues and dramatic coastlines, Rhodes combines strong infrastructure with a remarkable sense of place.',
    highlights: ['Hotel portfolio across key resort areas', 'Culture, touring and coastal experiences', 'Groups, events and incentive programmes'],
    href: '/rhodes',
    image: 'old-town.jpg',
    alt: 'The historic character of Rhodes',
  },
  kos: {
    number: '02',
    name: 'Kos',
    eyebrow: 'Relaxed island life, precisely coordinated',
    title: 'An effortless setting for thoughtful, tailor-made travel.',
    copy: 'Long beaches, welcoming resorts, local gastronomy and a calm island rhythm make Kos ideal for leisure programmes, groups and curated experiences.',
    highlights: ['Resort stays and beach-led programmes', 'Culture, gastronomy and island touring', 'Flexible group and tailor-made itineraries'],
    href: '/kos',
    image: 'sailing.jpg',
    alt: 'A sailing experience in the Aegean Sea near Kos',
  },
};

const services: ServiceItem[] = [
  {
    key: 'hotel-contracting',
    icon: BedDouble,
    number: '01',
    title: 'Hotel Contracting',
    eyebrow: 'Commercial partnerships',
    copy: 'A carefully managed hotel portfolio, supported by local relationships, destination knowledge and commercial understanding.',
    capabilities: ['Contracting and allocations', 'Portfolio and product planning', 'Rate and availability support'],
    image: 'home-welcome-v2.jpg',
    alt: 'A premium island hotel setting',
  },
  {
    key: 'booking-management',
    icon: CalendarCheck,
    number: '02',
    title: 'Booking Management',
    eyebrow: 'Control from request to arrival',
    copy: 'Reservations, amendments, rooming lists and operational follow-up coordinated by one responsive local team.',
    capabilities: ['Reservations and amendments', 'Rooming-list coordination', 'Partner communication and reporting'],
    image: 'old-town.jpg',
    alt: 'Rhodes destination detail representing local booking coordination',
  },
  {
    key: 'transfers',
    icon: Bus,
    number: '03',
    title: 'Transfers & Transportation',
    eyebrow: 'Reliable movement on the ground',
    copy: 'Airport arrivals, hotel transfers, private transportation and group logistics planned around real operating conditions.',
    capabilities: ['Airport and port transfers', 'Private and group transportation', 'On-site logistics coordination'],
    image: 'sailing.jpg',
    alt: 'Aerial island coastline representing seamless movement across the destination',
  },
  {
    key: 'resort-assistance',
    icon: Headphones,
    number: '04',
    title: 'Resort Assistance',
    eyebrow: 'Local support when it matters',
    copy: 'Hands-on destination assistance for guests and partners, backed by teams who know both islands in detail.',
    capabilities: ['Guest and partner assistance', 'Operational issue resolution', '24/7 local support'],
    image: 'local-life.jpg',
    alt: 'Local island life in Rhodes and Kos',
  },
  {
    key: 'tours-excursions',
    icon: MapPinned,
    number: '05',
    title: 'Tours & Excursions',
    eyebrow: 'Experiences with a real sense of place',
    copy: 'Excursions and private touring designed around the heritage, landscapes, gastronomy and character of Rhodes and Kos.',
    capabilities: ['Shared and private excursions', 'Cultural and scenic touring', 'Tailor-made local experiences'],
    image: 'prasonisi.jpg',
    alt: 'A dramatic island landscape in Rhodes',
  },
  {
    key: 'mice-groups',
    icon: Users,
    number: '06',
    title: 'MICE & Group Travel',
    eyebrow: 'Complex programmes, calmly delivered',
    copy: 'Corporate events, incentives and group itineraries brought together through local knowledge, trusted partners and precise execution.',
    capabilities: ['Venue and accommodation sourcing', 'Group movement and on-site staffing', 'Incentive and event production'],
    image: 'home-mice-v2.jpg',
    alt: 'A destination setting for MICE and group travel',
  },
  {
    key: 'weddings-events',
    icon: Sparkles,
    number: '07',
    title: 'Weddings & Special Events',
    eyebrow: 'Personal occasions, professionally managed',
    copy: 'Local venues, trusted suppliers and careful coordination for weddings, celebrations and distinctive private events.',
    capabilities: ['Venue and supplier coordination', 'Guest logistics and accommodation', 'Tailor-made event programmes'],
    image: 'food.jpg',
    alt: 'A refined local hospitality experience',
  },
  {
    key: 'xml-connectivity',
    icon: Globe2,
    number: '08',
    title: 'XML API Connectivity & Agent Portal',
    eyebrow: 'Technology that keeps partners connected',
    copy: 'Digital connectivity and agent tools that make inventory, bookings and operational communication easier to manage at scale.',
    capabilities: ['XML API connectivity', 'Agent access and booking tools', 'Scalable partner workflows'],
    image: 'sailing.jpg',
    alt: 'Connected destination services across Rhodes and Kos',
  },
];

const proofPoints = [
  { value: '1989', label: 'Since' },
  { value: '100,000+', label: 'Guests annually' },
  { value: '200+', label: 'Hotel partners' },
  { value: '40+', label: 'Team members' },
  { value: '24/7', label: 'Support' },
] as const;

const experienceStories = [
  {
    title: 'Culture & Heritage',
    kicker: 'Walk through centuries',
    image: 'old-town.jpg',
    className: 'home-cinematic-experience--culture',
  },
  {
    title: 'Island Gastronomy',
    kicker: 'Taste the local story',
    image: 'food.jpg',
    className: 'home-cinematic-experience--food',
  },
  {
    title: 'Days on the Water',
    kicker: 'Find your own horizon',
    image: 'sailing.jpg',
    className: 'home-cinematic-experience--water',
  },
  {
    title: 'Wild Landscapes',
    kicker: 'Go beyond the familiar',
    image: 'prasonisi.jpg',
    className: 'home-cinematic-experience--nature',
  },
  {
    title: 'Local Island Life',
    kicker: 'Meet the place, not just the destination',
    image: 'local-life.jpg',
    className: 'home-cinematic-experience--local',
  },
] as const;

function EditorialEyebrow({ children }: { children: string }) {
  return <p className="home-cinematic-eyebrow">{children}</p>;
}

export default function TravelHomePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeIsland, setActiveIsland] = useState<IslandKey>('rhodes');
  const [activeService, setActiveService] = useState<ServiceKey>('hotel-contracting');

  const island = islandScenes[activeIsland];
  const selectedService = services.find((service) => service.key === activeService) ?? services[0];
  const SelectedServiceIcon = selectedService.icon;

  const focusTab = (id: string) => {
    window.requestAnimationFrame(() => document.getElementById(id)?.focus());
  };

  const handleIslandKeyDown = (event: KeyboardEvent<HTMLButtonElement>, currentKey: IslandKey) => {
    const keys = Object.keys(islandScenes) as IslandKey[];
    const currentIndex = keys.indexOf(currentKey);
    let nextIndex = currentIndex;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (currentIndex + 1) % keys.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (currentIndex - 1 + keys.length) % keys.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = keys.length - 1;
    if (nextIndex === currentIndex) return;

    event.preventDefault();
    const nextKey = keys[nextIndex];
    setActiveIsland(nextKey);
    focusTab(`island-tab-${nextKey}`);
  };

  const handleServiceKeyDown = (event: KeyboardEvent<HTMLButtonElement>, currentKey: ServiceKey) => {
    const keys = services.map((service) => service.key);
    const currentIndex = keys.indexOf(currentKey);
    let nextIndex = currentIndex;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (currentIndex + 1) % keys.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (currentIndex - 1 + keys.length) % keys.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = keys.length - 1;
    if (nextIndex === currentIndex) return;

    event.preventDefault();
    const nextKey = keys[nextIndex];
    setActiveService(nextKey);
    focusTab(`service-tab-${nextKey}`);
  };

  useEffect(() => {
    const assetNames = new Set([
      ...Object.values(islandScenes).map((scene) => scene.image),
      ...services.map((service) => service.image),
      ...experienceStories.map((experience) => experience.image),
    ]);

    assetNames.forEach((assetName) => {
      const image = new window.Image();
      image.src = travelMedia(assetName);
    });
  }, []);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    page.classList.add('is-motion-ready');
    const sections = Array.from(page.querySelectorAll<HTMLElement>('[data-home-reveal]'));

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
      { threshold: 0.12, rootMargin: '0px 0px -8%' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef} className="home-cinematic">
      <style>{TOP_EURO_TRAVEL_HOME_STYLES}</style>
      <PageSeo
        title="Destination Management Company in Greece | Rhodes & Kos DMC | Top Euro Travel"
        description="Top Euro Travel is a trusted destination management company in Greece, providing DMC services, hotel contracting, transfers, MICE, groups, excursions and ground handling in Rhodes and Kos since 1989."
      />

      <section className="home-cinematic-hero" aria-labelledby="home-hero-title">
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

        <div className="home-cinematic-hero__content shell">
          <EditorialEyebrow>Top Euro Travel · Destination Management Since 1989</EditorialEyebrow>
          <h1 id="home-hero-title">
            <span className="home-cinematic-hero__title-main">Your Trusted DMC Partner</span>
            <span className="home-cinematic-hero__title-accent">in Rhodes &amp; Kos</span>
          </h1>
          <p className="home-cinematic-hero__lead">
            Delivering destination management, ground handling and travel solutions since 1989.
          </p>
          <div className="home-cinematic-actions">
            <Link className="home-cinematic-button home-cinematic-button--gold" to="/services">
              Explore Our Services <ArrowRight aria-hidden="true" />
            </Link>
            <Link className="home-cinematic-button home-cinematic-button--outline" to="/contact">
              Partner With Us <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <a className="home-cinematic-scroll" href="#our-story">
          Discover <ArrowDown aria-hidden="true" />
        </a>
      </section>

      <div className="home-cinematic-threshold shell" aria-label="Top Euro Travel at a glance">
        <div>
          <strong>Rhodes &amp; Kos</strong>
          <span>Local destination teams</span>
        </div>
        <div>
          <strong>Full-service DMC</strong>
          <span>From contracting to operation</span>
        </div>
        <div>
          <strong>Since 1989</strong>
          <span>Established destination expertise</span>
        </div>
        <div>
          <strong>24/7</strong>
          <span>Operational support</span>
        </div>
      </div>

      <section id="our-story" className="home-cinematic-intro shell" data-home-reveal>
        <div className="home-cinematic-intro__copy">
          <EditorialEyebrow>Local expertise. International standards.</EditorialEyebrow>
          <h2>Destination Management Company in Greece</h2>
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

        <div className="home-cinematic-intro__visual" aria-label="Rhodes and Kos through our local lens">
          <div className="home-cinematic-intro__image home-cinematic-intro__image--main">
            <Photo src={travelMedia('home-welcome-v2.jpg')} alt="Aegean coastline and island hospitality" />
          </div>
          <div className="home-cinematic-intro__image home-cinematic-intro__image--detail">
            <Photo src={travelMedia('old-town.jpg')} alt="An atmospheric lane in Rhodes Medieval City" />
          </div>
          <div className="home-cinematic-intro__stamp" aria-hidden="true">
            <span>Local teams</span>
            <strong>Rhodes · Kos</strong>
          </div>
        </div>

        <div className="home-cinematic-proof" aria-label="Top Euro Travel facts">
          {proofPoints.map((point) => (
            <div key={point.value}>
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-cinematic-islands" data-home-reveal>
        <div className="shell">
          <div className="home-cinematic-heading home-cinematic-heading--light">
            <div>
              <EditorialEyebrow>Two islands. One dependable partner.</EditorialEyebrow>
              <h2>Rhodes &amp; Kos, locally managed.</h2>
            </div>
            <p>
              Each destination keeps its own character. One experienced DMC team keeps every detail connected.
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
                onKeyDown={(event: KeyboardEvent<HTMLButtonElement>) => handleIslandKeyDown(event, key)}
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
            className="home-cinematic-island-stage"
          >
            <div className="home-cinematic-island-stage__visual">
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
                Discover {island.name} <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="home-cinematic-journey shell" data-home-reveal>
        <div className="home-cinematic-heading">
          <div>
            <EditorialEyebrow>End-to-end destination support</EditorialEyebrow>
            <h2>Our Services</h2>
          </div>
          <p>
            One accountable local team connects commercial planning, guest operations, experiences and technology.
          </p>
        </div>

        <div className="home-cinematic-services">
          <div className="home-cinematic-services__index" role="tablist" aria-label="Top Euro Travel services">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeService === service.key;

              return (
                <button
                  key={service.key}
                  type="button"
                  role="tab"
                  id={`service-tab-${service.key}`}
                  aria-selected={isActive}
                  aria-controls={`service-panel-${service.key}`}
                  className={isActive ? 'is-active' : ''}
                  onClick={() => setActiveService(service.key)}
                  onMouseEnter={() => setActiveService(service.key)}
                  onFocus={() => setActiveService(service.key)}
                  onKeyDown={(event: KeyboardEvent<HTMLButtonElement>) => handleServiceKeyDown(event, service.key)}
                >
                  <span className="home-cinematic-services__number">{service.number}</span>
                  <span className="home-cinematic-services__icon" aria-hidden="true"><Icon /></span>
                  <span className="home-cinematic-services__name">{service.title}</span>
                  <ArrowRight className="home-cinematic-services__arrow" aria-hidden="true" />
                </button>
              );
            })}
          </div>

          <article
            key={selectedService.key}
            id={`service-panel-${selectedService.key}`}
            role="tabpanel"
            aria-labelledby={`service-tab-${selectedService.key}`}
            className="home-cinematic-services__stage"
          >
            <div className="home-cinematic-services__media">
              <Photo src={travelMedia(selectedService.image)} alt={selectedService.alt} />
              <span className="home-cinematic-services__media-shade" aria-hidden="true" />
              <span className="home-cinematic-services__media-label">Rhodes · Kos</span>
            </div>

            <div className="home-cinematic-services__content">
              <div className="home-cinematic-services__content-top">
                <span className="home-cinematic-services__active-icon" aria-hidden="true">
                  <SelectedServiceIcon />
                </span>
                <span className="home-cinematic-services__active-number">{selectedService.number}</span>
              </div>
              <p className="home-cinematic-services__eyebrow">{selectedService.eyebrow}</p>
              <h3>{selectedService.title}</h3>
              <p>{selectedService.copy}</p>
              <ul>
                {selectedService.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
              </ul>
              <Link className="home-cinematic-text-link home-cinematic-text-link--light" to="/services">
                Explore all services <ArrowRight aria-hidden="true" />
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
        <div className="home-cinematic-mice__content shell">
          <EditorialEyebrow>Meetings, incentives &amp; groups</EditorialEyebrow>
          <h2>MICE &amp; Group Travel Solutions</h2>
          <p>
            Whether planning a corporate event, incentive programme or group itinerary, our team delivers tailored
            solutions and seamless execution across Rhodes and Kos, supported by extensive destination knowledge and
            trusted local partnerships.
          </p>
          <div className="home-cinematic-mice__details">
            <span><Landmark aria-hidden="true" /> Corporate events</span>
            <span><Users aria-hidden="true" /> Incentive programmes</span>
            <span><Sparkles aria-hidden="true" /> Tailor-made itineraries</span>
          </div>
          <Link className="home-cinematic-button home-cinematic-button--gold" to="/mice-groups">
            Explore MICE &amp; Groups <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="home-cinematic-experiences shell" data-home-reveal>
        <div className="home-cinematic-heading">
          <div>
            <EditorialEyebrow>Curated with local knowledge</EditorialEyebrow>
            <h2>Authentic Local Experiences</h2>
          </div>
          <div className="home-cinematic-heading__action">
            <p>
              Heritage, gastronomy, sea and island life—selected to give every programme a genuine sense of place.
            </p>
            <Link className="home-cinematic-text-link" to="/experiences">
              Explore experiences <ArrowRight aria-hidden="true" />
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

      <section className="home-cinematic-closing shell" data-home-reveal>
        <div className="home-cinematic-closing__icon" aria-hidden="true"><Compass /></div>
        <div className="home-cinematic-closing__copy">
          <EditorialEyebrow>Your local DMC partner in Greece</EditorialEyebrow>
          <h2>Get in Touch</h2>
          <p>
            Whether you are looking for a reliable DMC partner, planning a group programme, organising an event or
            exploring new opportunities in Greece, our team is ready to assist.
          </p>
          <div className="home-cinematic-closing__meta" aria-label="Areas of enquiry">
            <span>DMC partnerships</span>
            <span>Groups &amp; events</span>
            <span>Rhodes &amp; Kos programmes</span>
          </div>
        </div>
        <div className="home-cinematic-closing__actions">
          <Link className="home-cinematic-button home-cinematic-button--gold" to="/contact">
            Partner With Us <ArrowRight aria-hidden="true" />
          </Link>
          <Link className="home-cinematic-text-link home-cinematic-text-link--light" to="/mice-groups">
            Explore MICE &amp; Groups <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
