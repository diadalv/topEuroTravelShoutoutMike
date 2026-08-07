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
import { useEffect, useState } from 'react';
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

const stepOneStyles = String.raw`
  /* STEP 1: controlled Home upgrade — hero, continuity, header CTA, no template airplane */
  .home-cinematic-hero {
    position: relative;
    isolation: isolate;
    min-height: 100svh;
  }

  .home-cinematic-hero__shade {
    z-index: 1;
    background:
      linear-gradient(90deg, rgba(5, 22, 43, .86) 0%, rgba(5, 22, 43, .66) 37%, rgba(5, 22, 43, .30) 67%, rgba(5, 22, 43, .10) 100%),
      linear-gradient(180deg, rgba(4, 17, 34, .12) 0%, rgba(4, 17, 34, .06) 54%, rgba(4, 17, 34, .42) 100%) !important;
  }

  .home-cinematic-hero__content {
    position: relative;
    z-index: 4;
    padding-top: clamp(148px, 18vh, 220px);
    padding-bottom: clamp(150px, 19vh, 230px);
  }

  .home-step1-hero__title {
    max-width: 980px;
    margin: 18px 0 24px;
    color: #fff;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: clamp(3.1rem, 6.6vw, 7.1rem);
    font-weight: 400;
    line-height: .91;
    letter-spacing: -.047em;
    text-wrap: balance;
    text-shadow: 0 5px 32px rgba(0, 0, 0, .22);
  }

  .home-step1-hero__title span {
    display: block;
  }

  .home-step1-hero__title span:last-child {
    color: #e0b62f;
    font-style: italic;
    font-size: .82em;
    margin-top: .08em;
  }

  .home-cinematic-hero__lead {
    max-width: 690px;
    font-size: clamp(1.02rem, 1.4vw, 1.28rem);
    line-height: 1.65;
  }

  .home-step1-hero__trust {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px 18px;
    margin-top: 34px;
    color: rgba(255, 255, 255, .76);
    font-size: .72rem;
    font-weight: 700;
    letter-spacing: .16em;
    text-transform: uppercase;
  }

  .home-step1-hero__trust span + span::before {
    content: '';
    display: inline-block;
    width: 3px;
    height: 3px;
    margin-right: 18px;
    border-radius: 50%;
    vertical-align: middle;
    background: #e0b62f;
  }

  .home-step1-hero__blend {
    position: absolute;
    z-index: 3;
    right: 0;
    bottom: -1px;
    left: 0;
    height: clamp(112px, 14vw, 210px);
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(247, 243, 235, 0) 0%,
      rgba(247, 243, 235, .10) 34%,
      rgba(247, 243, 235, .72) 78%,
      #f7f3eb 100%
    );
  }

  .home-cinematic-intro {
    position: relative;
    z-index: 2;
    isolation: isolate;
    padding-top: clamp(92px, 9vw, 145px) !important;
  }

  .home-cinematic-intro::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 100vw;
    transform: translateX(-50%);
    background: #f7f3eb;
  }

  .home-cinematic-intro__copy > h1 {
    margin: 0;
    color: #10213a;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: clamp(2.65rem, 5vw, 5.5rem);
    font-weight: 400;
    line-height: .98;
    letter-spacing: -.042em;
    text-wrap: balance;
  }

  /* Keep the shared Header transparent. Only refine the Contact CTA on this page. */
  header a[href='/contact'],
  header a[href$='/contact'] {
    min-height: 39px !important;
    padding: 9px 17px !important;
    border: 1px solid rgba(224, 182, 47, .88) !important;
    border-radius: 7px !important;
    background: transparent !important;
    color: inherit !important;
    box-shadow: none !important;
    font-size: .73rem !important;
    font-weight: 700 !important;
    letter-spacing: .12em !important;
    line-height: 1 !important;
    text-transform: uppercase !important;
    transition: background-color .25s ease, color .25s ease, border-color .25s ease, transform .25s ease !important;
  }

  header a[href='/contact']:hover,
  header a[href$='/contact']:hover {
    border-color: #e0b62f !important;
    background: #e0b62f !important;
    color: #10213a !important;
    transform: translateY(-1px);
  }

  @media (prefers-reduced-motion: no-preference) {
    .home-cinematic-hero__content .home-cinematic-eyebrow,
    .home-step1-hero__title,
    .home-cinematic-hero__lead,
    .home-cinematic-hero__content .home-cinematic-actions,
    .home-step1-hero__trust {
      opacity: 0;
      animation: homeStep1Rise .85s cubic-bezier(.22, 1, .36, 1) forwards;
    }

    .home-step1-hero__title { animation-delay: .10s; }
    .home-cinematic-hero__lead { animation-delay: .22s; }
    .home-cinematic-hero__content .home-cinematic-actions { animation-delay: .34s; }
    .home-step1-hero__trust { animation-delay: .46s; }
  }

  @keyframes homeStep1Rise {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 767px) {
    .home-cinematic-hero {
      min-height: 92svh;
    }

    .home-cinematic-hero__content {
      padding-top: 132px;
      padding-bottom: 156px;
    }

    .home-step1-hero__title {
      margin-top: 14px;
      margin-bottom: 20px;
      font-size: clamp(2.7rem, 13.2vw, 4.3rem);
      line-height: .94;
    }

    .home-step1-hero__title span:last-child {
      font-size: .86em;
      margin-top: .12em;
    }

    .home-step1-hero__trust {
      gap: 8px 12px;
      margin-top: 26px;
      font-size: .62rem;
      letter-spacing: .12em;
    }

    .home-step1-hero__trust span + span::before {
      margin-right: 12px;
    }

    .home-step1-hero__blend {
      height: 130px;
    }

    .home-cinematic-intro {
      padding-top: 76px !important;
    }

    .home-cinematic-intro__copy > h1 {
      font-size: clamp(2.35rem, 11vw, 3.55rem);
    }
  }
`;

export default function TravelHomePage() {
  const [activeIsland, setActiveIsland] = useState<IslandKey>('rhodes');
  const island = islandScenes[activeIsland];

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
    <div className="home-cinematic">
      <style>{stepOneStyles}</style>
      <PageSeo
        title="Destination Management Company in Greece | Rhodes & Kos DMC | Top Euro Travel"
        description="Top Euro Travel is a trusted destination management company in Greece, providing DMC services, hotel contracting, transfers, MICE, groups, excursions and ground handling in Rhodes and Kos since 1989."
      />

      <section className="home-cinematic-hero">
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
          <EditorialEyebrow>Destination management in Rhodes &amp; Kos</EditorialEyebrow>
          <p className="home-step1-hero__title">
            <span>Your Trusted DMC Partner</span>
            <span>in Rhodes &amp; Kos</span>
          </p>
          <p className="home-cinematic-hero__lead">
            Delivering destination management, ground handling and travel solutions since 1989.
          </p>
          <div className="home-cinematic-actions">
            <Link className="home-cinematic-button home-cinematic-button--gold" to="/services">
              Explore our services <ArrowRight />
            </Link>
            <Link className="home-cinematic-button home-cinematic-button--glass" to="/destinations">
              Discover Rhodes &amp; Kos <ArrowRight />
            </Link>
          </div>
          <div className="home-step1-hero__trust" aria-label="Top Euro Travel key facts">
            <span>Since 1989</span>
            <span>Local teams in both islands</span>
            <span>24/7 support</span>
          </div>
        </div>
        <div className="home-step1-hero__blend" aria-hidden="true" />
      </section>

      <section id="our-story" className="home-cinematic-intro shell" data-home-reveal>
        <div className="home-cinematic-intro__copy">
          <EditorialEyebrow>Trusted destination management in Rhodes &amp; Kos</EditorialEyebrow>
          <h1>Destination Management Company in Greece</h1>
          <p className="home-cinematic-lead">
            Trusted destination management, ground handling and excursion services in Rhodes and Kos.
          </p>
          <p>
            Since 1989, Top Euro Travel has supported tour operators, travel agencies, groups and event planners
            with reliable local expertise, responsive service and hands-on coordination across both destinations.
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
