// TOP EURO TRAVEL — APPROVED DESIGN 1 — ONE FILE FULL REPLACE
// Replace the full content of src/pages/TravelHomePage.tsx with this file.
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
  MapPinned,
  Play,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MEDIA = {
  heroPoster: 'https://static.wixstatic.com/media/5a118b_f3aada5a1ac547358ac6c8b35d60a2a7f002.jpg',
  heroDesktop: 'https://video.wixstatic.com/video/5a118b_f3aada5a1ac547358ac6c8b35d60a2a7/1080p/mp4/file.mp4',
  heroMobile: 'https://video.wixstatic.com/video/5a118b_ea5a16aef9d047ddb9126c2f00737d43/1080p/mp4/file.mp4',
  intro: 'https://static.wixstatic.com/media/5a118b_ecb7cf129ee940edbcc8d28e06e94ea3~mv2.jpg',
  rhodes: 'https://static.wixstatic.com/media/5a118b_1e1e28691dab433b8075e66efd56ef2a~mv2.jpg',
  kos: 'https://static.wixstatic.com/media/5a118b_ea5a16aef9d047ddb9126c2f00737d43f002.jpg',
  miceLeft: 'https://static.wixstatic.com/media/5a118b_0eef7a8136df41b2b08bc707b4c1ec80~mv2.jpg',
  miceRight: 'https://static.wixstatic.com/media/5a118b_be21f059a7eb474b950d7fc3ef4ad332~mv2.jpg',
  culture: 'https://static.wixstatic.com/media/5a118b_226ba35bf5df412b9e12dd4da17eb637~mv2.jpg',
  gastronomy: 'https://static.wixstatic.com/media/5a118b_be21f059a7eb474b950d7fc3ef4ad332~mv2.jpg',
  yachting: 'https://static.wixstatic.com/media/5a118b_63f33c17cdd84c7999389621f8b8edbd~mv2.jpg',
  nature: 'https://static.wixstatic.com/media/5a118b_ab2ae908eff3464cad53f27ae679ae6a~mv2.jpg',
  wellness: 'https://static.wixstatic.com/media/5a118b_1a02c2f9444641568e84784a2de3bb06~mv2.jpg',
  shopping: 'https://static.wixstatic.com/media/5a118b_10edb838f69a4be9b6c35f098d867310~mv2.jpg',
  partner: 'https://static.wixstatic.com/media/5a118b_278f147701794e22ac15e40aa8627d7e~mv2.jpg',
} as const;

type Service = { icon: LucideIcon; title: string; copy: string };

const services: Service[] = [
  { icon: BedDouble, title: 'Hotel Contracting', copy: 'Selected stays & agreements' },
  { icon: CalendarCheck, title: 'Booking Management', copy: 'Reservations managed end to end' },
  { icon: Bus, title: 'Transfers & Transportation', copy: 'Reliable island-wide movement' },
  { icon: Headphones, title: 'Resort Assistance', copy: 'Responsive local support' },
  { icon: MapPinned, title: 'Tours & Excursions', copy: 'Curated authentic experiences' },
  { icon: Landmark, title: 'MICE & Group Travel', copy: 'Meetings, incentives & groups' },
  { icon: Sparkles, title: 'Weddings & Special Events', copy: 'Distinctive occasions' },
  { icon: Globe2, title: 'XML API & Agent Portal', copy: 'Connected partner technology' },
];

const experiences = [
  { title: 'Culture & Heritage', image: MEDIA.culture },
  { title: 'Gastronomy & Wine', image: MEDIA.gastronomy },
  { title: 'Yachting & Sailing', image: MEDIA.yachting },
  { title: 'Nature & Adventure', image: MEDIA.nature },
  { title: 'Wellness & Local Life', image: MEDIA.wellness },
  { title: 'Shopping & Nightlife', image: MEDIA.shopping },
] as const;

const CSS = String.raw`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=DM+Sans:wght@400;500;600;700&display=swap');

:root {
  --d1-navy:#092d4d;
  --d1-navy-deep:#06233d;
  --d1-ink:#102943;
  --d1-gold:#d99d45;
  --d1-gold-deep:#b97923;
  --d1-paper:#fffdf9;
  --d1-line:rgba(16,41,67,.13);
  --d1-shadow:0 20px 52px rgba(5,33,58,.13);
}

body.d1-active{background:var(--d1-paper)}
body.d1-active .site-header{height:84px;background:transparent;border:0;box-shadow:none}
body.d1-active .site-header.is-scrolled{height:70px;background:rgba(7,36,62,.9);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border-bottom:1px solid rgba(255,255,255,.13);box-shadow:0 12px 34px rgba(0,23,42,.18)}
body.d1-active .site-header__inner{width:min(calc(100% - clamp(42px,9vw,124px)),1280px);margin-inline:auto;padding-inline:0}
body.d1-active .brand-logo{width:116px;height:64px;object-fit:contain}
body.d1-active .site-header__nav-wrap,body.d1-active .main-nav{gap:clamp(20px,2.15vw,36px)}
body.d1-active .main-nav__link{padding-block:31px 27px;color:rgba(255,255,255,.94);font-family:'DM Sans','Segoe UI',sans-serif;font-size:12px;font-weight:600;letter-spacing:.025em;text-shadow:0 2px 12px rgba(0,26,48,.45)}
body.d1-active .site-header.is-scrolled .main-nav__link{padding-block:24px 20px}
body.d1-active .main-nav__link:hover,body.d1-active .main-nav__link:focus-visible,body.d1-active .main-nav__link.is-active{color:#fff}
body.d1-active .main-nav__link.is-active::after{bottom:19px;height:1px;background:#efc272;box-shadow:none}
body.d1-active .site-header.is-scrolled .main-nav__link.is-active::after{bottom:13px}
body.d1-active .header-contact-btn{min-height:42px!important;padding:12px 22px!important;border:1px solid rgba(255,225,171,.7)!important;border-radius:999px!important;background:linear-gradient(135deg,#f2c675,#d9963d)!important;color:#102842!important;font-size:11px!important;font-weight:700!important;letter-spacing:.03em!important;box-shadow:0 10px 24px rgba(3,26,48,.2)!important}
body.d1-active .header-contact-btn:hover,body.d1-active .header-contact-btn:focus-visible{transform:translateY(-2px)!important;background:linear-gradient(135deg,#ffda91,#e5a64d)!important;box-shadow:0 15px 30px rgba(3,26,48,.3)!important}
body.d1-active .site-footer{width:100%;max-width:none;margin:0!important;border-radius:0!important;background:linear-gradient(180deg,rgba(7,42,73,.95),rgba(5,34,61,.99)),radial-gradient(circle at 82% 12%,rgba(217,157,69,.14),transparent 32%)}

.d1,.d1 *{box-sizing:border-box}
.d1{position:relative;overflow:clip;background:radial-gradient(circle at 5% 42%,rgba(215,225,233,.27),transparent 26%),radial-gradient(circle at 92% 61%,rgba(229,218,200,.22),transparent 25%),var(--d1-paper);color:var(--d1-ink);font-family:'DM Sans','Segoe UI',sans-serif;font-size:15px;line-height:1.62}
.d1 h1,.d1 h2,.d1 h3,.d1 p{margin-top:0}
.d1 h1,.d1 h2,.d1 h3{font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;letter-spacing:-.035em}
.d1 a{color:inherit;text-decoration:none}
.d1-shell{width:min(calc(100% - clamp(48px,10vw,128px)),1280px);margin-inline:auto}
.d1-eyebrow{display:inline-flex;align-items:center;gap:9px;margin:0 0 8px;color:var(--d1-gold-deep);font-size:10px;font-weight:700;letter-spacing:.15em;line-height:1.2;text-transform:uppercase}
.d1-eyebrow::before{width:6px;height:6px;background:currentColor;clip-path:polygon(0 0,100% 50%,0 100%);content:''}
.d1-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:15px}
.d1-heading h2{margin:0;color:#10243b;font-size:clamp(29px,2.65vw,41px);line-height:1}
.d1-link{display:inline-flex;align-items:center;gap:9px;padding-bottom:3px;border-bottom:1px solid rgba(16,40,66,.34);color:#15334f;font-size:10px;font-weight:700;letter-spacing:.035em;text-transform:uppercase}
.d1-link svg{width:14px;transition:transform 180ms ease}
.d1-link:hover svg,.d1-link:focus-visible svg{transform:translateX(4px)}

.d1-hero{min-height:clamp(510px,45vw,650px);position:relative;display:flex;align-items:center;isolation:isolate;overflow:hidden;background:#082b4b;color:#fff}
.d1-hero__video{width:100%;height:calc(100% + 30px);position:absolute;inset:-15px 0 auto;z-index:-3;object-fit:cover;object-position:center;transform:translate3d(0,var(--d1-hero-y,0),0) scale(1.025);will-change:transform}
.d1-hero__overlay{position:absolute;inset:0;z-index:-2;background:linear-gradient(90deg,rgba(4,35,62,.88),rgba(5,40,70,.68) 35%,rgba(7,44,75,.14) 70%,rgba(8,45,76,.02)),linear-gradient(0deg,rgba(3,29,52,.38),transparent 48%),linear-gradient(180deg,rgba(3,25,45,.25),transparent 30%)}
.d1-hero__content{width:min(calc(100% - clamp(48px,10vw,128px)),1280px);margin-inline:auto;padding-top:132px;padding-bottom:64px}
.d1-hero__copy{max-width:700px;animation:d1-hero-in 900ms cubic-bezier(.2,.7,.2,1) both}
.d1-hero .d1-eyebrow{margin-bottom:15px;color:#fff;font-size:11px;letter-spacing:.12em}.d1-hero .d1-eyebrow::before{display:none}
.d1-hero h1{max-width:700px;margin-bottom:18px;color:#fff;font-size:clamp(50px,5vw,72px);line-height:.9;text-wrap:balance}
.d1-hero h1 span{display:block}
.d1-hero__lead{max-width:600px;margin-bottom:27px;color:rgba(255,255,255,.92);font-size:clamp(15px,1.1vw,18px);line-height:1.55}
.d1-actions{display:flex;flex-wrap:wrap;gap:16px}
.d1-button{min-height:48px;border:1px solid transparent;border-radius:10px;display:inline-flex;align-items:center;justify-content:center;gap:12px;padding:13px 21px;font-size:11px;font-weight:700;letter-spacing:.035em;text-transform:uppercase;transition:transform 180ms ease,box-shadow 180ms ease,background 180ms ease,border-color 180ms ease}
.d1-button svg{width:16px}.d1-button:hover,.d1-button:focus-visible{transform:translateY(-2px)}
.d1-button--gold{background:linear-gradient(135deg,#f2c574,#dda24a);box-shadow:0 12px 28px rgba(0,21,40,.24);color:#102842}
.d1-button--outline{border-color:rgba(255,255,255,.62);background:rgba(6,35,61,.18);color:#fff;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.d1-scroll{position:absolute;left:clamp(22px,4.2vw,66px);bottom:66px;z-index:3;display:grid;justify-items:center;gap:9px;color:rgba(255,255,255,.88);font-size:9px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;writing-mode:vertical-rl;transform:rotate(180deg)}
.d1-scroll::before{width:1px;height:82px;background:linear-gradient(#fff,rgba(255,255,255,.22));content:''}.d1-scroll svg{width:14px;transform:rotate(180deg)}
.d1-discover{position:absolute;right:clamp(26px,5vw,78px);bottom:66px;z-index:3;display:inline-flex;align-items:center;gap:13px;color:#fff;font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}
.d1-discover__icon{width:44px;height:44px;border:1px solid rgba(255,255,255,.72);border-radius:50%;display:grid;place-items:center;background:rgba(6,36,62,.22);backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px)}.d1-discover__icon svg{width:17px;fill:currentColor}

.d1-bridge-wrap{position:relative;z-index:10;height:0}
.d1-bridge{min-height:88px;position:absolute;top:-44px;right:0;left:0;border:1px solid rgba(255,255,255,.75);border-radius:15px;display:grid;grid-template-columns:.72fr 1fr 1fr .82fr;align-items:stretch;overflow:hidden;background:rgba(255,255,255,.96);box-shadow:var(--d1-shadow);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px)}
.d1-bridge__item{min-width:0;position:relative;display:flex;align-items:center;gap:13px;padding:16px clamp(15px,2vw,27px)}
.d1-bridge__item+.d1-bridge__item::before{width:1px;position:absolute;top:19px;bottom:19px;left:0;background:var(--d1-line);content:''}
.d1-bridge__since{display:grid;gap:0}.d1-bridge small{color:var(--d1-gold-deep);font-size:9px;font-weight:700;letter-spacing:.1em;text-transform:uppercase}.d1-bridge__since strong{color:var(--d1-gold-deep);font-family:'Cormorant Garamond',Georgia,serif;font-size:38px;font-weight:500;line-height:.9}
.d1-bridge__thumb{width:43px;height:43px;flex:0 0 auto;border-radius:50%;overflow:hidden;box-shadow:0 6px 16px rgba(11,45,75,.18)}.d1-bridge__thumb img{width:100%;height:100%;object-fit:cover}
.d1-bridge__copy{min-width:0;display:grid;gap:1px}.d1-bridge__copy strong{color:#15334e;font-size:12px;line-height:1.2}.d1-bridge__copy span{color:#5a6e80;font-size:10px;white-space:nowrap}.d1-bridge__arrow{width:16px;margin-left:auto;color:var(--d1-gold-deep)}
.d1-bridge__stat svg{width:30px;height:30px;flex:0 0 auto;color:var(--d1-gold-deep)}.d1-bridge__stat strong{display:block;color:#142c43;font-family:'Cormorant Garamond',Georgia,serif;font-size:28px;font-weight:600;line-height:.9}.d1-bridge__stat span span{display:block;margin-top:4px;color:#607284;font-size:9px;line-height:1.3}

.d1-intro{display:grid;grid-template-columns:minmax(0,1fr) minmax(118px,.46fr) minmax(0,1.45fr);align-items:center;gap:24px;padding-top:86px;padding-bottom:22px}
.d1-intro__copy h2{max-width:360px;margin-bottom:10px;color:#10243b;font-size:clamp(31px,3.05vw,43px);line-height:.96}
.d1-intro__subtitle{max-width:410px;margin-bottom:9px;color:#253f56;font-size:13px;font-weight:600;line-height:1.55}.d1-intro__copy p:not(.d1-eyebrow):not(.d1-intro__subtitle){max-width:430px;margin-bottom:12px;color:#5b6f81;font-size:12px;line-height:1.65}.d1-signature{margin:2px 0 10px;color:var(--d1-gold-deep)!important;font-family:'Cormorant Garamond',Georgia,serif!important;font-size:22px!important;font-style:italic}
.d1-facts{border-left:1px solid var(--d1-line);display:grid;align-content:center;padding-left:20px}.d1-fact{display:grid;grid-template-columns:25px minmax(0,1fr);align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--d1-line)}.d1-fact:last-child{border-bottom:0}.d1-fact svg{width:22px;color:var(--d1-gold-deep);stroke-width:1.65}.d1-fact strong{display:block;color:#152d45;font-family:'Cormorant Garamond',Georgia,serif;font-size:25px;font-weight:600;line-height:.92}.d1-fact span span{display:block;margin-top:3px;color:#607183;font-size:8px;line-height:1.25;text-transform:uppercase}
.d1-intro__visual{min-height:245px;position:relative;border-radius:13px;overflow:hidden;background:#dce4e9;box-shadow:0 16px 38px rgba(8,37,64,.1)}.d1-intro__visual img{width:100%;height:100%;position:absolute;inset:0;object-fit:cover;transition:transform 850ms cubic-bezier(.2,.7,.2,1)}.d1-intro__visual::after{position:absolute;inset:0;background:linear-gradient(90deg,rgba(4,34,60,.12),transparent 62%);content:''}.d1-intro__visual:hover img{transform:scale(1.035)}
.d1-play{position:absolute;top:50%;left:50%;z-index:3;display:inline-flex;align-items:center;gap:11px;color:#fff;font-size:10px;font-weight:700;line-height:1.25;text-transform:uppercase;transform:translate(-50%,-50%)}.d1-play__circle{width:52px;height:52px;border:1px solid rgba(255,255,255,.88);border-radius:50%;display:grid;place-items:center;background:rgba(6,35,60,.18);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px)}.d1-play__circle svg{width:19px;fill:currentColor}

.d1-destinations{padding:8px 0 24px}.d1-destinations__grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}
.d1-destination{min-height:150px;position:relative;border-radius:9px;overflow:hidden;isolation:isolate;background:#183d5d;color:#fff;box-shadow:0 10px 28px rgba(7,34,58,.1)}.d1-destination img{width:100%;height:100%;position:absolute;inset:0;z-index:-2;object-fit:cover;transition:transform 700ms cubic-bezier(.2,.7,.2,1)}.d1-destination::after{position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(5,38,66,.87),rgba(5,38,66,.16) 78%);content:''}.d1-destination__content{min-height:150px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:24px 28px}.d1-destination h3{margin-bottom:3px;color:#fff;font-family:'DM Sans','Segoe UI',sans-serif;font-size:16px;font-weight:600}.d1-destination p{max-width:190px;margin-bottom:14px;color:rgba(255,255,255,.88);font-size:11px;line-height:1.42}.d1-destination__link{display:inline-flex;align-items:center;gap:8px;padding-bottom:3px;border-bottom:1px solid rgba(255,255,255,.75);color:#fff;font-size:9px;font-weight:700;text-transform:uppercase}.d1-destination__link svg{width:13px;color:#f1bf69}.d1-destination:hover img{transform:scale(1.045)}

.d1-services{padding:0 0 22px}.d1-services__grid{position:relative;display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:0}.d1-services__grid::before{height:1px;position:absolute;top:22px;right:4%;left:4%;background:linear-gradient(90deg,transparent,rgba(185,120,32,.36) 8%,rgba(185,120,32,.36) 92%,transparent);content:'';transform:scaleX(0);transform-origin:left;transition:transform 900ms cubic-bezier(.2,.7,.2,1)}.d1-services.is-visible .d1-services__grid::before{transform:scaleX(1)}
.d1-service{min-width:0;position:relative;z-index:1;display:grid;justify-items:center;align-content:start;gap:7px;padding:0 8px;text-align:center}.d1-service+.d1-service::before{width:1px;position:absolute;top:52px;bottom:3px;left:0;background:rgba(16,40,66,.1);content:''}.d1-service__icon{width:44px;height:44px;border:1px solid rgba(185,120,32,.42);border-radius:50%;display:grid;place-items:center;background:var(--d1-paper);color:var(--d1-gold-deep);box-shadow:0 5px 14px rgba(8,36,62,.06);transition:color 180ms ease,background 180ms ease,transform 180ms ease}.d1-service__icon svg{width:20px;height:20px;stroke-width:1.55}.d1-service strong{min-height:27px;display:grid;align-items:end;color:#17324d;font-size:9px;font-weight:700;line-height:1.22}.d1-service>span:last-child{color:#6a7987;font-size:7px;line-height:1.35}.d1-service:hover .d1-service__icon{background:var(--d1-gold);color:#fff;transform:translateY(-4px)}

.d1-mice{min-height:150px;display:grid;grid-template-columns:1.05fr 1.1fr .9fr;border-radius:9px;overflow:hidden;background:#0a2c4a;box-shadow:0 14px 34px rgba(5,31,55,.14)}.d1-mice__media{min-height:150px;position:relative;overflow:hidden}.d1-mice__media img{width:100%;height:100%;position:absolute;inset:0;object-fit:cover;transition:transform 800ms cubic-bezier(.2,.7,.2,1)}.d1-mice__media::after{position:absolute;inset:0;content:''}.d1-mice__media--left::after{background:linear-gradient(90deg,transparent 56%,#0a2c4a)}.d1-mice__media--right::after{background:linear-gradient(270deg,transparent 54%,#0a2c4a)}.d1-mice__copy{position:relative;z-index:2;display:grid;align-content:center;padding:20px;color:#fff}.d1-mice__copy .d1-eyebrow{color:#efbd68}.d1-mice__copy h2{margin-bottom:6px;color:#fff;font-size:clamp(29px,2.5vw,39px);line-height:.95}.d1-mice__copy p{margin-bottom:11px;color:rgba(255,255,255,.78);font-size:9px;line-height:1.5}.d1-mice__copy .d1-button{width:fit-content;min-height:36px;padding:9px 14px;font-size:8px}.d1-mice:hover .d1-mice__media img{transform:scale(1.04)}

.d1-experiences{padding:12px 0 12px}.d1-experiences__rail{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:7px}.d1-experience{min-height:118px;position:relative;border-radius:7px;overflow:hidden;isolation:isolate;background:#1c405f;color:#fff}.d1-experience img{width:100%;height:100%;position:absolute;inset:0;z-index:-2;object-fit:cover;transition:transform 650ms cubic-bezier(.2,.7,.2,1)}.d1-experience::after{position:absolute;inset:0;z-index:-1;background:linear-gradient(0deg,rgba(4,30,52,.88),rgba(4,30,52,.02) 70%);content:''}.d1-experience__copy{min-height:118px;display:flex;align-items:flex-end;padding:13px}.d1-experience strong{color:#fff;font-family:'Cormorant Garamond',Georgia,serif;font-size:18px;font-weight:600;line-height:.98}.d1-experience:hover img{transform:scale(1.055)}

.d1-trust{display:grid;grid-template-columns:1.25fr .75fr .56fr;align-items:stretch;margin-top:3px;border:1px solid rgba(16,40,66,.1);border-radius:9px 9px 0 0;overflow:hidden;background:rgba(249,247,242,.96);box-shadow:0 8px 24px rgba(7,34,58,.07)}.d1-trust__marks,.d1-trust__quote,.d1-trust__image{min-height:76px}.d1-trust__marks{display:grid;align-content:center;gap:9px;padding:13px 20px}.d1-trust__marks small{color:#8a8f94;font-size:7px;font-weight:600;letter-spacing:.08em;text-transform:uppercase}.d1-logos{display:flex;align-items:center;flex-wrap:wrap;gap:15px;color:#2e4a62;font-family:Georgia,serif;font-size:13px;font-weight:700}.d1-logos span:first-child{font-family:'DM Sans',sans-serif;font-size:10px}.d1-trust__quote{border-left:1px solid var(--d1-line);display:grid;align-content:center;gap:4px;padding:12px 17px}.d1-stars{color:var(--d1-gold-deep);font-size:12px;letter-spacing:.08em}.d1-trust__quote p{margin:0;color:#2c4357;font-family:'Cormorant Garamond',Georgia,serif;font-size:14px;line-height:1.12}.d1-trust__quote span{color:#7a858e;font-size:7px;text-transform:uppercase}.d1-trust__image{position:relative;overflow:hidden}.d1-trust__image img{width:100%;height:100%;position:absolute;inset:0;object-fit:cover}

.d1-reveal{opacity:0;transform:translateY(22px);transition:opacity 700ms ease,transform 760ms cubic-bezier(.2,.7,.2,1)}.d1-reveal.is-visible{opacity:1;transform:none}
@keyframes d1-hero-in{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}

@media(max-width:940px){
  body.d1-active .site-header__nav-wrap{top:83px}body.d1-active .main-nav__link{color:#102842;text-shadow:none}
  .d1-discover{display:none}.d1-intro{grid-template-columns:1fr 180px}.d1-intro__visual{min-height:330px;grid-column:1/-1}.d1-mice{grid-template-columns:.8fr 1.2fr}.d1-mice__media--right{display:none}.d1-trust{grid-template-columns:1fr .72fr}.d1-trust__image{display:none}
}

@media(max-width:760px){
  body.d1-active .site-header{height:72px}body.d1-active .site-header__inner{width:calc(100% - 28px)}body.d1-active .brand-logo{width:94px;height:54px}
  .d1-shell{width:calc(100% - 30px)}.d1-heading{align-items:flex-start;flex-direction:column;gap:9px}.d1-heading h2{font-size:33px}
  .d1-hero{min-height:max(720px,100svh);align-items:flex-end}.d1-hero__overlay{background:linear-gradient(0deg,rgba(4,32,57,.96),rgba(4,35,61,.7) 58%,rgba(4,35,61,.22)),linear-gradient(90deg,rgba(4,34,60,.32),transparent)}.d1-hero__content{width:calc(100% - 30px);padding-top:120px;padding-bottom:120px}.d1-hero h1{font-size:clamp(47px,14vw,62px);line-height:.93}.d1-hero__lead{font-size:16px}.d1-actions{flex-direction:column}.d1-button{width:100%}.d1-scroll{display:none}
  .d1-bridge{top:-61px;grid-template-columns:repeat(2,minmax(0,1fr));border-radius:13px}.d1-bridge__item{min-height:61px;padding:11px 13px}.d1-bridge__item:nth-child(3),.d1-bridge__item:nth-child(4){display:none}.d1-bridge__since strong{font-size:29px}.d1-bridge__thumb{width:35px;height:35px}
  .d1-intro{grid-template-columns:1fr;gap:22px;padding-top:90px;padding-bottom:28px}.d1-intro__copy h2{font-size:41px}.d1-facts{grid-template-columns:repeat(2,minmax(0,1fr));border-left:0;padding-left:0}.d1-fact{min-height:78px;border:1px solid var(--d1-line);border-right:0;padding:10px}.d1-fact:nth-child(2n){border-right:1px solid var(--d1-line)}.d1-fact:nth-child(n+3){border-top:0}.d1-intro__visual{min-height:260px;grid-column:auto}
  .d1-destinations__grid{overflow-x:auto;grid-template-columns:repeat(2,minmax(270px,1fr));scrollbar-width:none}.d1-destinations__grid::-webkit-scrollbar{display:none}
  .d1-services__grid{overflow-x:auto;grid-template-columns:repeat(8,minmax(120px,1fr));padding-bottom:7px;scrollbar-width:none}.d1-services__grid::-webkit-scrollbar{display:none}
  .d1-mice{grid-template-columns:1fr}.d1-mice__media--left{min-height:185px}.d1-mice__media--left::after{background:linear-gradient(0deg,#0a2c4a,transparent 60%)}.d1-mice__copy{padding:25px 21px 28px}
  .d1-experiences__rail{overflow-x:auto;grid-template-columns:repeat(6,minmax(176px,1fr));scrollbar-width:none}.d1-experiences__rail::-webkit-scrollbar{display:none}.d1-experience,.d1-experience__copy{min-height:178px}
  .d1-trust{grid-template-columns:1fr}.d1-trust__quote{border-top:1px solid var(--d1-line);border-left:0}
}

@media(prefers-reduced-motion:reduce){.d1 *,.d1 *::before,.d1 *::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}.d1-reveal{opacity:1;transform:none}}
`;

export default function TravelHomePage() {
  useEffect(() => {
    document.body.classList.add('d1-active');
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.d1-reveal'));
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return () => document.body.classList.remove('d1-active');
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }),
      { threshold: 0.12, rootMargin: '0px 0px -7%' },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => {
      observer.disconnect();
      document.body.classList.remove('d1-active');
    };
  }, []);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>('.d1-hero');
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      hero.style.setProperty('--d1-hero-y', `${Math.min(window.scrollY * 0.05, 22)}px`);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div id="main-content" className="d1">
      <style>{CSS}</style>
      <PageSeo
        title="Destination Management Company in Greece | Rhodes & Kos DMC | Top Euro Travel"
        description="Top Euro Travel is a trusted destination management company in Greece, providing DMC services, hotel contracting, transfers, MICE, groups, excursions and ground handling in Rhodes and Kos since 1989."
      />

      <section className="d1-hero">
        <video className="d1-hero__video" autoPlay muted loop playsInline preload="metadata" poster={MEDIA.heroPoster} tabIndex={-1} aria-hidden="true">
          <source src={MEDIA.heroMobile} media="(max-width:760px)" type="video/mp4" />
          <source src={MEDIA.heroDesktop} type="video/mp4" />
        </video>
        <div className="d1-hero__overlay" aria-hidden="true" />
        <div className="d1-hero__content">
          <div className="d1-hero__copy">
            <p className="d1-eyebrow">Destination management since 1989</p>
            <h1><span>Your Trusted DMC</span><span>Partner in Rhodes &amp; Kos</span></h1>
            <p className="d1-hero__lead">Delivering destination management, ground handling and travel solutions since 1989.</p>
            <div className="d1-actions">
              <Link className="d1-button d1-button--gold" to="/services">Explore our services <ArrowRight /></Link>
              <Link className="d1-button d1-button--outline" to="/contact">Partner with us <ArrowRight /></Link>
            </div>
          </div>
        </div>
        <span className="d1-scroll" aria-hidden="true">Scroll <ArrowDown /></span>
        <Link className="d1-discover" to="/destinations"><span className="d1-discover__icon"><Play /></span>Discover Rhodes &amp; Kos</Link>
      </section>

      <div className="d1-bridge-wrap d1-shell" aria-label="Top Euro Travel highlights">
        <div className="d1-bridge">
          <div className="d1-bridge__item d1-bridge__since"><small>Since</small><strong>1989</strong></div>
          <Link className="d1-bridge__item" to="/rhodes">
            <span className="d1-bridge__thumb"><img src={MEDIA.rhodes} alt="Rhodes" /></span>
            <span className="d1-bridge__copy"><strong>Rhodes</strong><span>History, energy &amp; variety</span></span>
            <ArrowRight className="d1-bridge__arrow" />
          </Link>
          <Link className="d1-bridge__item" to="/kos">
            <span className="d1-bridge__thumb"><img src={MEDIA.kos} alt="Kos" /></span>
            <span className="d1-bridge__copy"><strong>Kos</strong><span>Authentic island rhythm</span></span>
            <ArrowRight className="d1-bridge__arrow" />
          </Link>
          <div className="d1-bridge__item d1-bridge__stat"><Clock3 /><span><strong>35+</strong><span>Years of experience</span></span></div>
        </div>
      </div>

      <section className="d1-intro d1-shell">
        <div className="d1-intro__copy d1-reveal">
          <p className="d1-eyebrow">Destination Management Company in Greece</p>
          <h2>Your Trusted DMC<br />in Rhodes &amp; Kos</h2>
          <p className="d1-intro__subtitle">Trusted destination management, ground handling and excursion services in Rhodes and Kos.</p>
          <p>Since 1989, Top Euro Travel has supported tour operators, travel agencies, groups and event planners with reliable local expertise and hands-on service.</p>
          <p className="d1-signature">Top Euro Travel Team</p>
          <Link className="d1-link" to="/about">Learn more about us <ArrowRight /></Link>
        </div>
        <div className="d1-facts d1-reveal" aria-label="Top Euro Travel facts">
          <div className="d1-fact"><MapPinned /><span><strong>2</strong><span>Island destinations</span></span></div>
          <div className="d1-fact"><Building2 /><span><strong>200+</strong><span>Hotel partners</span></span></div>
          <div className="d1-fact"><Users /><span><strong>40+</strong><span>Team members</span></span></div>
          <div className="d1-fact"><Headphones /><span><strong>24/7</strong><span>On-island support</span></span></div>
        </div>
        <Link className="d1-intro__visual d1-reveal" to="/destinations" aria-label="Discover Rhodes and Kos">
          <img src={MEDIA.intro} alt="Aerial view of Lindos and the Aegean Sea" loading="lazy" />
          <span className="d1-play"><span className="d1-play__circle"><Play /></span><span>Discover<br />our world</span></span>
        </Link>
      </section>

      <section className="d1-destinations d1-shell d1-reveal">
        <div className="d1-heading">
          <div><p className="d1-eyebrow">Our destinations</p><h2>Two islands. Endless possibilities.</h2></div>
          <Link className="d1-link" to="/destinations">Explore destinations <ArrowRight /></Link>
        </div>
        <div className="d1-destinations__grid">
          <article className="d1-destination">
            <img src={MEDIA.rhodes} alt="Rhodes coastline and historic landmarks" loading="lazy" />
            <div className="d1-destination__content"><h3>RHODES</h3><p>Where history, hospitality and island energy meet.</p><Link className="d1-destination__link" to="/rhodes">Explore Rhodes <ArrowRight /></Link></div>
          </article>
          <article className="d1-destination">
            <img src={MEDIA.kos} alt="Kos island coastline" loading="lazy" />
            <div className="d1-destination__content"><h3>KOS</h3><p>Where authenticity, ease and a slower rhythm connect.</p><Link className="d1-destination__link" to="/kos">Explore Kos <ArrowRight /></Link></div>
          </article>
        </div>
      </section>

      <section className="d1-services d1-shell d1-reveal">
        <div className="d1-heading">
          <div><p className="d1-eyebrow">Our services</p><h2>Everything your programme needs.</h2></div>
          <Link className="d1-link" to="/services">View all services <ArrowRight /></Link>
        </div>
        <div className="d1-services__grid">
          {services.map(({ icon: Icon, title, copy }) => (
            <Link className="d1-service" to="/services" key={title}><span className="d1-service__icon"><Icon /></span><strong>{title}</strong><span>{copy}</span></Link>
          ))}
        </div>
      </section>

      <section className="d1-mice d1-shell d1-reveal">
        <div className="d1-mice__media d1-mice__media--left"><img src={MEDIA.miceLeft} alt="Event venue in Rhodes" loading="lazy" /></div>
        <div className="d1-mice__copy"><p className="d1-eyebrow">MICE &amp; group travel</p><h2>Inspire. Connect. Reward.</h2><p>Tailored corporate events, incentive programmes and group itineraries delivered seamlessly across Rhodes and Kos.</p><Link className="d1-button d1-button--gold" to="/mice-groups">Explore MICE <ArrowRight /></Link></div>
        <div className="d1-mice__media d1-mice__media--right"><img src={MEDIA.miceRight} alt="Hospitality and special events" loading="lazy" /></div>
      </section>

      <section className="d1-experiences d1-shell d1-reveal">
        <div className="d1-heading">
          <div><p className="d1-eyebrow">Authentic local experiences</p><h2>Live the destination.</h2></div>
          <Link className="d1-link" to="/experiences">View all experiences <ArrowRight /></Link>
        </div>
        <div className="d1-experiences__rail">
          {experiences.map(({ title, image }) => (
            <Link className="d1-experience" to="/experiences" key={title}><img src={image} alt={title} loading="lazy" /><span className="d1-experience__copy"><strong>{title}</strong></span></Link>
          ))}
        </div>
      </section>

      <section className="d1-trust d1-shell d1-reveal" aria-label="Partner trust">
        <div className="d1-trust__marks"><small>Trusted by partners. Chosen for local delivery.</small><div className="d1-logos"><span>WIX PARTNER</span><span>IATA</span><span>HATTA</span><span>DMC GREECE</span></div></div>
        <div className="d1-trust__quote"><div className="d1-stars">★★★★★</div><p>“Professional, responsive and consistently reliable.”</p><span>International travel partner</span></div>
        <div className="d1-trust__image"><img src={MEDIA.partner} alt="Top Euro Travel partner experience" loading="lazy" /></div>
      </section>
    </div>
  );
}
