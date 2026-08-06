import { PageSeo, Photo, PlanePath, travelMedia } from '@/components/travel/Shared';
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
      <PageSeo
        title="Destination Management Company in Greece | Rhodes & Kos DMC | Top Euro Travel"
        description="Top Euro Travel is a trusted destination management company providing local expertise, ground handling, MICE, groups and authentic experiences in Rhodes and Kos since 1989."
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
          <EditorialEyebrow>Your DMC in the Dodecanese</EditorialEyebrow>
          <h1>
            <span>Rhodes &amp; Kos,</span>
            beautifully orchestrated.
          </h1>
          <p className="home-cinematic-hero__lead">
            From first arrival to final farewell, one local team shapes every detail for tour operators,
            groups and travellers.
          </p>
          <div className="home-cinematic-actions">
            <Link className="home-cinematic-button home-cinematic-button--gold" to="/contact">
              Start planning <ArrowRight />
            </Link>
            <Link className="home-cinematic-button home-cinematic-button--glass" to="/destinations">
              Explore the destinations <ArrowRight />
            </Link>
          </div>
          <div className="home-cinematic-hero__signature" aria-label="Top Euro Travel at a glance">
            <div className="home-cinematic-stat-card">
              <strong>Since 1989</strong>
              <span>Established expertise</span>
            </div>
            <div className="home-cinematic-stat-card">
              <strong>Rhodes &amp; Kos</strong>
              <span>Local teams on both islands</span>
            </div>
            <div className="home-cinematic-stat-card">
              <strong>24/7</strong>
              <span>Support around the clock</span>
            </div>
          </div>
        </div>
      </section>

      <section id="our-story" className="home-cinematic-intro shell" data-home-reveal>
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
          <PlanePath className="home-cinematic-plane home-cinematic-plane--intro" />
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
        <PlanePath className="home-cinematic-plane home-cinematic-plane--closing" />
      </section>
    </div>
  );
}
