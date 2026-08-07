import { PageSeo, Photo, travelMedia } from '@/components/travel/Shared';
import '@/styles/homepage-editorial-v9.css';
import {
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

const islandScenes: Record<IslandKey, {
  number: string;
  name: string;
  eyebrow: string;
  title: string;
  copy: string;
  highlights: string[];
  href: string;
}> = {
  rhodes: {
    number: '01',
    name: 'Rhodes',
    eyebrow: 'History, energy and extraordinary variety',
    title: 'An island with a story at every turn.',
    copy: 'Medieval streets, dramatic coastlines and sophisticated hospitality create endless possibilities for leisure travel, groups and events.',
    highlights: ['Medieval City & Lindos', 'Coastal stays & island touring', 'Groups, events & incentives'],
    href: '/rhodes',
  },
  kos: {
    number: '02',
    name: 'Kos',
    eyebrow: 'Relaxed island life, beautifully connected',
    title: 'A slower rhythm, shaped around you.',
    copy: 'Welcoming resorts, long beaches and authentic island character make Kos an effortless setting for thoughtful, tailor-made programmes.',
    highlights: ['Beach stays & slow travel', 'Culture & local gastronomy', 'Tailor-made group programmes'],
    href: '/kos',
  },
};

const serviceJourney: Array<{
  icon: LucideIcon;
  number: string;
  title: string;
  copy: string;
}> = [
  {
    icon: BedDouble,
    number: '01',
    title: 'Stay',
    copy: 'The right hotels, the right rates and a portfolio shaped around your guests.',
  },
  {
    icon: CalendarCheck,
    number: '02',
    title: 'Coordinate',
    copy: 'Reservations, arrivals and every moving part managed by one local team.',
  },
  {
    icon: Bus,
    number: '03',
    title: 'Move',
    copy: 'Reliable airport, hotel and island-wide transport with hands-on support.',
  },
  {
    icon: MapPinned,
    number: '04',
    title: 'Discover',
    copy: 'Excursions and authentic moments selected with local knowledge.',
  },
  {
    icon: Headphones,
    number: '05',
    title: 'Support',
    copy: 'Responsive assistance on the ground, from first arrival to final farewell.',
  },
];

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


const headerHeroPassStyles = `
/*
  Top Euro Travel — scoped Header / Hero / Hero-to-Intro improvement.
  No section below the intro is redesigned by this patch.
*/

/* HEADER — preserve the existing transparent header and refine only its details. */
.tet-home-header-refined nav {
  align-items: center !important;
}

.tet-home-header-refined .tet-home-nav-link {
  position: relative !important;
  display: inline-flex !important;
  align-items: center !important;
  transition: opacity 220ms ease, transform 220ms ease !important;
}

body.is-top-euro-home .tet-home-header-refined a.tet-home-contact-link {
  position: relative !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 9px !important;
  width: auto !important;
  min-width: 0 !important;
  min-height: 44px !important;
  padding: 10px 1px 8px 0 !important;
  overflow: visible !important;
  border: 0 !important;
  border-radius: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
  color: inherit !important;
  backdrop-filter: none !important;
}

body.is-top-euro-home .tet-home-header-refined a.tet-home-contact-link::before {
  position: absolute;
  right: 0;
  bottom: 5px;
  left: 0;
  height: 1px;
  background: #dfbd58;
  content: "";
  transform: scaleX(1);
  transform-origin: left center;
  transition: transform 260ms cubic-bezier(0.2, 0.75, 0.25, 1);
}

body.is-top-euro-home .tet-home-header-refined a.tet-home-contact-link::after {
  content: "↗";
  color: #dfbd58;
  font-size: 0.84rem;
  font-weight: 500;
  line-height: 1;
  transition: transform 240ms ease;
}

body.is-top-euro-home .tet-home-header-refined a.tet-home-contact-link:hover,
body.is-top-euro-home .tet-home-header-refined a.tet-home-contact-link:focus-visible {
  background: transparent !important;
  color: inherit !important;
  transform: none !important;
}

body.is-top-euro-home .tet-home-header-refined a.tet-home-contact-link:hover::before,
body.is-top-euro-home .tet-home-header-refined a.tet-home-contact-link:focus-visible::before {
  transform: scaleX(0.56);
  transform-origin: right center;
}

body.is-top-euro-home .tet-home-header-refined a.tet-home-contact-link:hover::after,
body.is-top-euro-home .tet-home-header-refined a.tet-home-contact-link:focus-visible::after {
  transform: translate(3px, -2px);
}

@media (min-width: 901px) {
  .tet-home-header-refined nav {
    gap: clamp(20px, 2vw, 34px) !important;
  }

  .tet-home-header-refined .tet-home-nav-link {
    min-height: 38px !important;
    padding: 0 !important;
    font-size: 0.74rem !important;
    font-weight: 650 !important;
    letter-spacing: 0.105em !important;
    line-height: 1 !important;
    text-transform: uppercase !important;
  }

  .tet-home-header-refined .tet-home-nav-link:not(.tet-home-contact-link)::after {
    position: absolute;
    right: 0;
    bottom: 4px;
    left: 0;
    height: 1px;
    background: currentColor;
    content: "";
    opacity: 0.58;
    transform: scaleX(0);
    transform-origin: right center;
    transition: transform 260ms cubic-bezier(0.2, 0.75, 0.25, 1);
  }

  .tet-home-header-refined .tet-home-nav-link:not(.tet-home-contact-link):hover,
  .tet-home-header-refined .tet-home-nav-link:not(.tet-home-contact-link):focus-visible {
    opacity: 0.78;
    transform: translateY(-1px);
  }

  .tet-home-header-refined .tet-home-nav-link:not(.tet-home-contact-link):hover::after,
  .tet-home-header-refined .tet-home-nav-link:not(.tet-home-contact-link):focus-visible::after {
    transform: scaleX(1);
    transform-origin: left center;
  }

  body.is-top-euro-home .tet-home-header-refined a.tet-home-contact-link {
    min-height: 38px !important;
    padding: 0 1px 0 0 !important;
  }

  body.is-top-euro-home .tet-home-header-refined a.tet-home-contact-link::before {
    bottom: 3px;
  }
}

/* HERO — keep the exact Wix video and improve only hierarchy, readability and motion. */
.home-cinematic .tet-home-hero {
  position: relative;
  min-height: 94svh !important;
  align-items: center !important;
  overflow: hidden !important;
  padding: clamp(138px, 17vh, 188px) 0 clamp(148px, 17vh, 205px) !important;
  isolation: isolate;
}

.home-cinematic .tet-home-hero__video {
  transform: scale(var(--tet-hero-scale, 1.015)) !important;
  transform-origin: center center;
  transition: transform 120ms linear;
  will-change: transform;
}

.home-cinematic .tet-home-hero__shade {
  z-index: 1;
  background:
    linear-gradient(90deg, rgba(5, 21, 40, 0.84) 0%, rgba(5, 21, 40, 0.66) 34%, rgba(5, 21, 40, 0.25) 67%, rgba(5, 21, 40, 0.09) 100%),
    linear-gradient(180deg, rgba(5, 21, 40, 0.34) 0%, rgba(5, 21, 40, 0.02) 45%, rgba(5, 21, 40, 0.32) 100%) !important;
}

.home-cinematic .tet-home-hero__vignette {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: radial-gradient(circle at 72% 44%, transparent 0%, transparent 35%, rgba(3, 15, 30, 0.14) 100%);
  pointer-events: none;
}

.home-cinematic .tet-home-hero__content {
  position: relative;
  z-index: 3;
}

.home-cinematic .tet-home-hero__copy {
  width: min(100%, 920px);
  opacity: var(--tet-hero-opacity, 1);
  transform: translate3d(0, var(--tet-hero-shift, 0px), 0);
  transition: opacity 120ms linear, transform 120ms linear;
  will-change: opacity, transform;
}

.home-cinematic .tet-home-hero__title {
  max-width: 920px !important;
  margin: 0 !important;
  color: #ffffff;
  font-family: var(--home-display, var(--font-heading, "Cormorant Garamond", "Times New Roman", serif));
  font-size: clamp(4rem, 6.25vw, 7.15rem) !important;
  font-weight: 500 !important;
  letter-spacing: -0.048em !important;
  line-height: 0.94 !important;
  text-wrap: balance;
}

.home-cinematic .tet-home-hero__line {
  display: block;
  opacity: 0;
  clip-path: inset(0 0 105% 0);
  transform: translateY(22px);
  transition:
    opacity 720ms ease,
    clip-path 900ms cubic-bezier(0.2, 0.75, 0.25, 1),
    transform 900ms cubic-bezier(0.2, 0.75, 0.25, 1);
}

.home-cinematic .tet-home-hero__line--accent {
  margin-top: 0.06em;
  color: #e6cb74;
  transition-delay: 120ms;
}

.home-cinematic .tet-home-hero__lead {
  max-width: 610px;
  margin: 30px 0 0 !important;
  color: rgba(255, 255, 255, 0.82) !important;
  font-size: clamp(1.05rem, 1.28vw, 1.22rem) !important;
  font-weight: 400;
  letter-spacing: 0.005em;
  line-height: 1.72 !important;
  opacity: 0;
  transform: translateY(15px);
  transition: opacity 720ms ease 260ms, transform 720ms ease 260ms;
}

.home-cinematic.tet-hero-ready .tet-home-hero__line {
  opacity: 1;
  clip-path: inset(0 0 0 0);
  transform: translateY(0);
}

.home-cinematic.tet-hero-ready .tet-home-hero__lead {
  opacity: 1;
  transform: translateY(0);
}

/* HERO → INTRO — short, controlled fade into the existing ivory section. */
.home-cinematic .tet-home-hero__handoff {
  position: absolute;
  right: 0;
  bottom: -1px;
  left: 0;
  z-index: 2;
  height: clamp(72px, 7.5vw, 104px);
  background: linear-gradient(
    180deg,
    rgba(245, 241, 232, 0) 0%,
    rgba(245, 241, 232, 0.05) 52%,
    rgba(245, 241, 232, 0.42) 78%,
    #f5f1e8 100%
  );
  pointer-events: none;
}

.home-cinematic .tet-home-intro-bridge {
  position: relative;
  z-index: 3;
  margin-top: -1px !important;
  padding-top: clamp(96px, 8vw, 126px) !important;
  border-radius: 0 !important;
  background-color: #f5f1e8 !important;
}

@media (max-width: 900px) {
  .home-cinematic .tet-home-hero {
    min-height: 860px !important;
    padding: 142px 0 160px !important;
  }

  .home-cinematic .tet-home-hero__video {
    object-position: 60% center !important;
  }

  .home-cinematic .tet-home-hero__title {
    max-width: 780px !important;
    font-size: clamp(3.75rem, 9vw, 6rem) !important;
  }
}

@media (max-width: 640px) {
  .home-cinematic .tet-home-hero {
    min-height: 790px !important;
    align-items: end !important;
    padding: 126px 0 145px !important;
  }

  .home-cinematic .tet-home-hero__video {
    object-position: 64% center !important;
  }

  .home-cinematic .tet-home-hero__shade {
    background:
      linear-gradient(90deg, rgba(5, 21, 40, 0.78) 0%, rgba(5, 21, 40, 0.42) 100%),
      linear-gradient(180deg, rgba(5, 21, 40, 0.24) 0%, rgba(5, 21, 40, 0.05) 30%, rgba(5, 21, 40, 0.78) 100%) !important;
  }

  .home-cinematic .tet-home-hero__title {
    max-width: 12ch !important;
    font-size: clamp(3.05rem, 14.4vw, 4.7rem) !important;
    line-height: 0.96 !important;
  }

  .home-cinematic .tet-home-hero__line--accent {
    margin-top: 0.12em;
  }

  .home-cinematic .tet-home-hero__lead {
    max-width: 34ch;
    margin-top: 24px !important;
    font-size: 1rem !important;
    line-height: 1.62 !important;
  }

  .home-cinematic .tet-home-hero__handoff {
    height: 78px;
  }

  .home-cinematic .tet-home-intro-bridge {
    margin-top: -1px !important;
    padding-top: 84px !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-cinematic .tet-home-hero__video,
  .home-cinematic .tet-home-hero__copy,
  .home-cinematic .tet-home-hero__line,
  .home-cinematic .tet-home-hero__lead {
    transition: none !important;
    transform: none !important;
  }

  .home-cinematic .tet-home-hero__line,
  .home-cinematic .tet-home-hero__lead {
    opacity: 1 !important;
    clip-path: none !important;
  }
}
`;

export default function TravelHomePage() {
  const [activeIsland, setActiveIsland] = useState<IslandKey>('rhodes');
  const [heroReady, setHeroReady] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const island = islandScenes[activeIsland];

  useEffect(() => {
    document.body.classList.add('is-top-euro-home');

    const refineHeader = () => {
      const header =
        document.querySelector<HTMLElement>('header') ??
        document.querySelector<HTMLElement>('[data-site-header]');

      if (!header) return;

      header.classList.add('tet-home-header-refined');

      header.querySelectorAll<HTMLAnchorElement>('nav a').forEach((link) => {
        if (link.textContent?.trim()) link.classList.add('tet-home-nav-link');
      });

      const contactLink = Array.from(header.querySelectorAll<HTMLAnchorElement>('a')).find((link) => {
        const href = link.getAttribute('href')?.replace(/\/+$/, '');
        return href === '/contact' || href?.endsWith('/contact');
      });

      contactLink?.classList.add('tet-home-contact-link', 'tet-home-nav-link');
    };

    refineHeader();

    const headerObserver = new MutationObserver(refineHeader);
    headerObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      headerObserver.disconnect();
      document.body.classList.remove('is-top-euro-home');
      document.querySelectorAll('.tet-home-header-refined').forEach((element) => {
        element.classList.remove('tet-home-header-refined');
      });
      document.querySelectorAll('.tet-home-nav-link').forEach((element) => {
        element.classList.remove('tet-home-nav-link');
      });
      document.querySelectorAll('.tet-home-contact-link').forEach((element) => {
        element.classList.remove('tet-home-contact-link');
      });
    };
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setHeroReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;

    const updateHeroDepth = () => {
      frame = 0;
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)));

      hero.style.setProperty('--tet-hero-shift', `${progress * -18}px`);
      hero.style.setProperty('--tet-hero-opacity', `${1 - progress * 0.28}`);
      hero.style.setProperty('--tet-hero-scale', `${1.015 + progress * 0.012}`);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateHeroDepth);
    };

    updateHeroDepth();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-home-reveal]'));

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
    <div className={`home-cinematic${heroReady ? ' tet-hero-ready' : ''}`}>
      <style>{headerHeroPassStyles}</style>
      <PageSeo
        title="Destination Management Company in Greece | Rhodes & Kos DMC | Top Euro Travel"
        description="Top Euro Travel is a trusted destination management company providing local expertise, ground handling, MICE, groups and authentic experiences in Rhodes and Kos since 1989."
      />

      <section ref={heroRef} className="home-cinematic-hero tet-home-hero" aria-labelledby="top-euro-home-hero-title">
        <video
          className="home-cinematic-hero__video tet-home-hero__video"
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
        <div className="home-cinematic-hero__shade tet-home-hero__shade" aria-hidden="true" />
        <div className="tet-home-hero__vignette" aria-hidden="true" />

        <div className="home-cinematic-hero__content tet-home-hero__content shell">
          <div className="tet-home-hero__copy">
            <h1 id="top-euro-home-hero-title" className="tet-home-hero__title">
              <span className="tet-home-hero__line">Your Trusted DMC Partner</span>
              <span className="tet-home-hero__line tet-home-hero__line--accent">in Rhodes &amp; Kos</span>
            </h1>
            <p className="home-cinematic-hero__lead tet-home-hero__lead">
              Delivering destination management, ground handling and travel solutions since 1989.
            </p>
          </div>
        </div>

        <div className="tet-home-hero__handoff" aria-hidden="true" />
      </section>

      <section id="our-story" className="home-cinematic-intro tet-home-intro-bridge shell" data-home-reveal>
        <div className="home-cinematic-intro__copy">
          <EditorialEyebrow>One team. Two islands. Decades of trust.</EditorialEyebrow>
          <h2>The local partner that makes everything feel effortless.</h2>
          <p className="home-cinematic-lead">
            Great journeys feel spontaneous. Behind the scenes, they are carefully made.
          </p>
          <p>
            Since 1989, Top Euro Travel has worked quietly behind every arrival, stay, transfer and
            experience—bringing local knowledge, trusted relationships and calm coordination to every programme.
          </p>
          <Link className="home-cinematic-text-link" to="/about">
            Meet the people behind the journey <ArrowRight />
          </Link>
        </div>

        <div className="home-cinematic-intro__visual" aria-label="Rhodes through our local lens">
          <div className="home-cinematic-intro__image home-cinematic-intro__image--main">
            <Photo src={travelMedia('home-welcome-v2.jpg')} alt="White chapel overlooking the Aegean Sea" />
          </div>
          <div className="home-cinematic-intro__image home-cinematic-intro__image--detail">
            <Photo src={travelMedia('old-town.jpg')} alt="An atmospheric lane in Rhodes Medieval City" />
          </div>
        </div>

        <div className="home-cinematic-proof" aria-label="Top Euro Travel facts">
          <div><strong>1989</strong><span>Established</span></div>
          <div><strong>100K+</strong><span>Guests annually</span></div>
          <div><strong>200+</strong><span>Hotel partners</span></div>
          <div><strong>24/7</strong><span>On-island support</span></div>
        </div>
      </section>

      <section className="home-cinematic-islands" data-home-reveal>
        <div className="shell">
          <div className="home-cinematic-heading home-cinematic-heading--light">
            <div>
              <EditorialEyebrow>Two islands, two distinct worlds</EditorialEyebrow>
              <h2>Choose your setting.</h2>
            </div>
            <p>
              One local partner connects both destinations, while every programme keeps the character of its island.
            </p>
          </div>

          <div className="home-cinematic-islands__tabs" role="tablist" aria-label="Choose an island">
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
            className="home-cinematic-island-stage"
          >
            <div className="home-cinematic-island-stage__visual">
              <Photo src={travelMedia('sailing.jpg')} alt="Sailing across the Aegean Sea" />
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
                Discover {island.name} <ArrowRight />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="home-cinematic-journey shell" data-home-reveal>
        <div className="home-cinematic-heading">
          <div>
            <EditorialEyebrow>One connected journey</EditorialEyebrow>
            <h2>Everything your programme needs. Nothing feels fragmented.</h2>
          </div>
          <p>
            Instead of juggling suppliers, you work with one accountable team from planning through operation.
          </p>
        </div>

        <div className="home-cinematic-journey__steps">
          {serviceJourney.map(({ icon: Icon, number, title, copy }) => (
            <Link to="/services" className="home-cinematic-journey__step" key={title}>
              <span className="home-cinematic-journey__number">{number}</span>
              <span className="home-cinematic-journey__icon"><Icon /></span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="home-cinematic-journey__arrow" aria-hidden="true"><ArrowRight /></span>
            </Link>
          ))}
        </div>
        <Link className="home-cinematic-button home-cinematic-button--navy" to="/services">
          Explore all services <ArrowRight />
        </Link>
      </section>

      <section
        className="home-cinematic-mice"
        style={{ backgroundImage: `url("${travelMedia('home-mice-v2.jpg')}")` }}
        data-home-reveal
      >
        <div className="home-cinematic-mice__overlay" aria-hidden="true" />
        <div className="home-cinematic-mice__content shell">
          <EditorialEyebrow>Meetings, incentives & groups</EditorialEyebrow>
          <h2>When the brief is ambitious, execution should feel effortless.</h2>
          <p>
            From venue sourcing and accommodation to transfers, experiences and on-site coordination, our local team
            brings every part of the programme together.
          </p>
          <div className="home-cinematic-mice__details">
            <span><Landmark /> Venues &amp; stays</span>
            <span><Users /> Groups of every scale</span>
            <span><Sparkles /> Tailor-made moments</span>
          </div>
          <Link className="home-cinematic-button home-cinematic-button--gold" to="/mice-groups">
            Plan a group programme <ArrowRight />
          </Link>
        </div>
      </section>

      <section className="home-cinematic-experiences shell" data-home-reveal>
        <div className="home-cinematic-heading">
          <div>
            <EditorialEyebrow>Curated by people who live here</EditorialEyebrow>
            <h2>Let the islands surprise you.</h2>
          </div>
          <div className="home-cinematic-heading__action">
            <p>Not a checklist of attractions. A collection of moments with a real sense of place.</p>
            <Link className="home-cinematic-text-link" to="/experiences">
              See all experiences <ArrowRight />
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
          <EditorialEyebrow>Your next programme starts here</EditorialEyebrow>
          <h2>Ready to create something people remember?</h2>
          <p>Tell us where you want to begin. Our local team will shape the rest around you.</p>
        </div>
        <div className="home-cinematic-closing__actions">
          <Link className="home-cinematic-button home-cinematic-button--gold" to="/contact">
            Start a conversation <ArrowRight />
          </Link>
          <Link className="home-cinematic-text-link home-cinematic-text-link--light" to="/excursions">
            Browse excursions <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
