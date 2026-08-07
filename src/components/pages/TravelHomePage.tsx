import { PageSeo, Photo, travelMedia } from '@/components/travel/Shared';
import '@/styles/homepage-editorial-v9.css';
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
import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';

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
