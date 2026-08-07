import { PageSeo, Photo, travelMedia } from '@/components/travel/Shared';
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Mail,
  MapPin,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

type IslandKey = 'rhodes' | 'kos';
type ServiceKind =
  | 'hotel'
  | 'booking'
  | 'transfer'
  | 'support'
  | 'tours'
  | 'mice'
  | 'events'
  | 'technology';

type ServiceItem = {
  number: string;
  title: string;
  description: string;
  kind: ServiceKind;
  image?: string;
};

const islands: Record<
  IslandKey,
  {
    number: string;
    name: string;
    descriptor: string;
    title: string;
    copy: string;
    image: string;
    href: string;
  }
> = {
  rhodes: {
    number: '01',
    name: 'Rhodes',
    descriptor: 'History · Coastlines · Island life',
    title: 'A destination with a new story at every turn.',
    copy: 'Medieval streets, iconic villages, hidden bays and full-day island routes create endless ways to explore.',
    image: 'prasonisi.jpg',
    href: '/rhodes',
  },
  kos: {
    number: '02',
    name: 'Kos',
    descriptor: 'Beaches · Villages · Easy-going discovery',
    title: 'Relaxed, authentic and full of character.',
    copy: 'Coastal days, traditional villages, history and local experiences, all enjoyed at your own pace.',
    image: 'sailing.jpg',
    href: '/kos',
  },
};

const services: ServiceItem[] = [
  {
    number: '01',
    title: 'Hotel Contracting',
    description: 'Contracting, allocations and hotel portfolios shaped around each market and programme.',
    kind: 'hotel',
    image: 'home-welcome-v2.jpg',
  },
  {
    number: '02',
    title: 'Booking Management',
    description: 'Clear reservations, amendments and confirmations managed by one responsive local team.',
    kind: 'booking',
    image: 'old-town.jpg',
  },
  {
    number: '03',
    title: 'Transfers & Transportation',
    description: 'Airport, hotel and island-wide movement coordinated with reliable local operators.',
    kind: 'transfer',
    image: 'prasonisi.jpg',
  },
  {
    number: '04',
    title: 'Resort Assistance',
    description: 'On-island support for arrivals, departures, guests and unexpected programme changes.',
    kind: 'support',
    image: 'local-life.jpg',
  },
  {
    number: '05',
    title: 'Tours & Excursions',
    description: 'Handpicked shared and private experiences across Rhodes and Kos, organised with local knowledge.',
    kind: 'tours',
    image: 'sailing.jpg',
  },
  {
    number: '06',
    title: 'MICE & Group Travel',
    description: 'Programmes, venues, logistics and on-site execution for groups of every scale.',
    kind: 'mice',
    image: 'home-mice-v2.jpg',
  },
  {
    number: '07',
    title: 'Weddings & Special Events',
    description: 'Destination celebrations coordinated with trusted local partners and careful attention to detail.',
    kind: 'events',
    image: 'food.jpg',
  },
  {
    number: '08',
    title: 'XML API Connectivity & Agent Portal',
    description: 'Flexible digital connectivity that helps partners access and manage products efficiently.',
    kind: 'technology',
  },
];

const experiences = [
  {
    index: '01',
    title: 'Rhodes after the crowds',
    label: 'Rhodes · Culture',
    image: 'old-town.jpg',
    className: 'tet-experience--hero',
  },
  {
    index: '02',
    title: 'Aegean days on the water',
    label: 'Rhodes & Kos · Sea',
    image: 'sailing.jpg',
    className: 'tet-experience--tall',
  },
  {
    index: '03',
    title: 'Flavours with a sense of place',
    label: 'Local gastronomy',
    image: 'food.jpg',
    className: 'tet-experience--wide',
  },
  {
    index: '04',
    title: 'Landscapes beyond the familiar',
    label: 'Rhodes · Nature',
    image: 'prasonisi.jpg',
    className: 'tet-experience--small',
  },
  {
    index: '05',
    title: 'The rhythm of local island life',
    label: 'Kos · Authentic moments',
    image: 'local-life.jpg',
    className: 'tet-experience--small-alt',
  },
] as const;

function ServiceSigil({ kind }: { kind: ServiceKind }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.55,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      {kind === 'hotel' && (
        <>
          <path {...common} d="M12 49V24l20-10 20 10v25" />
          <path {...common} d="M19 49V30h26v19M25 30v19M39 30v19M12 49h40" />
        </>
      )}
      {kind === 'booking' && (
        <>
          <rect {...common} x="13" y="16" width="38" height="35" rx="3" />
          <path {...common} d="M13 26h38M22 12v9M42 12v9M22 35l6 6 14-15" />
        </>
      )}
      {kind === 'transfer' && (
        <>
          <path {...common} d="M12 42h40l-4-15a7 7 0 0 0-7-5H23a7 7 0 0 0-7 5l-4 15Z" />
          <path {...common} d="M17 42v6M47 42v6M19 32h26M21 38h4M39 38h4" />
        </>
      )}
      {kind === 'support' && (
        <>
          <path {...common} d="M15 35v-6a17 17 0 0 1 34 0v6" />
          <path {...common} d="M15 34h7v12h-3a4 4 0 0 1-4-4v-8ZM49 34h-7v12h3a4 4 0 0 0 4-4v-8Z" />
          <path {...common} d="M42 49c-3 3-7 4-11 4" />
        </>
      )}
      {kind === 'tours' && (
        <>
          <path {...common} d="M32 10c-8 0-15 6-15 15 0 12 15 29 15 29s15-17 15-29c0-9-7-15-15-15Z" />
          <circle {...common} cx="32" cy="25" r="5" />
          <path {...common} d="M13 49c6-3 12-3 18 0s12 3 20 0" />
        </>
      )}
      {kind === 'mice' && (
        <>
          <path {...common} d="M14 45V24h36v21M10 49h44" />
          <path {...common} d="M22 24v-7h20v7M21 34h22M27 34v11M37 34v11" />
          <circle {...common} cx="18" cy="18" r="4" />
          <circle {...common} cx="46" cy="18" r="4" />
        </>
      )}
      {kind === 'events' && (
        <>
          <path {...common} d="M32 51S13 41 13 25a10 10 0 0 1 18-6 10 10 0 0 1 20 6c0 16-19 26-19 26Z" />
          <path {...common} d="M32 19v20M22 29h20" />
        </>
      )}
      {kind === 'technology' && (
        <>
          <circle {...common} cx="18" cy="18" r="5" />
          <circle {...common} cx="46" cy="18" r="5" />
          <circle {...common} cx="18" cy="46" r="5" />
          <circle {...common} cx="46" cy="46" r="5" />
          <circle {...common} cx="32" cy="32" r="6" />
          <path {...common} d="M22 21l6 7M42 21l-6 7M22 43l6-7M42 43l-6-7" />
        </>
      )}
    </svg>
  );
}

function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return <p className={`tet-eyebrow${light ? ' tet-eyebrow--light' : ''}`}>{children}</p>;
}

export default function TravelHomePage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [activeIsland, setActiveIsland] = useState<IslandKey>('rhodes');
  const [activeService, setActiveService] = useState(0);
  const [openMobileService, setOpenMobileService] = useState(0);

  const service = services[activeService];

  useEffect(() => {
    document.body.classList.add('tet-home-active');
    const readyFrame = window.requestAnimationFrame(() => setIsReady(true));
    const root = rootRef.current;
    if (!root) return undefined;

    const revealNodes = Array.from(root.querySelectorAll<HTMLElement>('[data-tet-reveal]'));
    const staggerNodes = Array.from(root.querySelectorAll<HTMLElement>('[data-tet-stagger]'));

    if (!('IntersectionObserver' in window)) {
      revealNodes.forEach((node) => node.classList.add('is-visible'));
      staggerNodes.forEach((node) => node.classList.add('is-visible'));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.14, rootMargin: '0px 0px -7%' },
      );

      revealNodes.forEach((node) => revealObserver.observe(node));
      staggerNodes.forEach((node) => revealObserver.observe(node));

      const onScroll = () => {
        window.requestAnimationFrame(() => {
          const hero = root.querySelector<HTMLElement>('.tet-hero');
          const mice = root.querySelector<HTMLElement>('.tet-mice');

          if (hero) {
            const rect = hero.getBoundingClientRect();
            const progress = Math.max(0, Math.min(1, -rect.top / Math.max(rect.height, 1)));
            hero.style.setProperty('--tet-hero-shift', `${progress * 42}px`);
          }

          if (mice) {
            const rect = mice.getBoundingClientRect();
            const viewport = window.innerHeight || 1;
            const progress = Math.max(-1, Math.min(1, (viewport - rect.top) / (viewport + rect.height) - 0.5));
            mice.style.setProperty('--tet-mice-shift', `${progress * 46}px`);
          }
        });
      };

      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });

      return () => {
        revealObserver.disconnect();
        window.removeEventListener('scroll', onScroll);
        window.cancelAnimationFrame(readyFrame);
        document.body.classList.remove('tet-home-active');
      };
    }

    return () => {
      window.cancelAnimationFrame(readyFrame);
      document.body.classList.remove('tet-home-active');
    };
  }, []);

  return (
    <div ref={rootRef} className={`tet-home${isReady ? ' is-ready' : ''}`}>
      <style>{HOME_STYLES}</style>

      <PageSeo
        title="Destination Management Company in Greece | Rhodes & Kos DMC | Top Euro Travel"
        description="Top Euro Travel is a trusted destination management company in Greece, providing DMC services, hotel contracting, transfers, MICE, groups, excursions and ground handling in Rhodes and Kos since 1989."
      />

      <section className="tet-hero" aria-label="Top Euro Travel introduction">
        <video
          className="tet-hero__video"
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
        <div className="tet-hero__overlay" aria-hidden="true" />
        <div className="tet-hero__grain" aria-hidden="true" />

        <div className="tet-shell tet-hero__content">
          <Eyebrow light>Destination management · Rhodes & Kos</Eyebrow>
          <div className="tet-hero__title" role="heading" aria-level={2}>
            <span>Your Trusted DMC Partner</span>
            <em>in Rhodes &amp; Kos</em>
          </div>
          <p className="tet-hero__lead">
            Delivering destination management, ground handling and travel solutions since 1989.
          </p>
          <Link className="tet-button tet-button--gold" to="/services">
            Discover our services <ArrowRight />
          </Link>
        </div>

        <div className="tet-hero__signature tet-shell" aria-hidden="true">
          <span>Since 1989</span>
          <span>Rhodes</span>
          <span>Kos</span>
        </div>

        <a className="tet-hero__scroll" href="#home-intro" aria-label="Scroll to the introduction">
          <span>Scroll</span>
          <ArrowDown />
        </a>
        <div className="tet-hero__transition" aria-hidden="true" />
      </section>

      <main>
        <section id="home-intro" className="tet-intro">
          <div className="tet-shell">
            <div className="tet-intro__grid">
              <div className="tet-intro__copy" data-tet-reveal>
                <Eyebrow>Established expertise. Local delivery.</Eyebrow>
                <h1>Destination Management Company in Greece</h1>
                <p className="tet-intro__subtitle">
                  Trusted destination management, ground handling and excursion services in Rhodes and Kos.
                </p>
              </div>

              <div className="tet-intro__visual" data-tet-reveal>
                <figure className="tet-intro__image tet-intro__image--main">
                  <Photo
                    src={travelMedia('home-welcome-v2.jpg')}
                    alt="Aegean island landscape in Rhodes"
                  />
                </figure>
                <figure className="tet-intro__image tet-intro__image--detail">
                  <Photo
                    src={travelMedia('old-town.jpg')}
                    alt="Atmospheric detail from Rhodes Medieval City"
                  />
                </figure>
                <div className="tet-intro__mark" aria-hidden="true">
                  <span>Top Euro Travel</span>
                  <strong>1989</strong>
                  <small>Rhodes · Kos</small>
                </div>
              </div>
            </div>

            <div className="tet-intro__body" data-tet-reveal>
              <p>
                Since 1989, Top Euro Travel has been providing destination management and ground handling services in
                Rhodes and Kos, supporting tour operators, travel agencies, groups and event planners from across the
                world.
              </p>
              <p>
                With local teams in both destinations and a flexible, hands-on approach, we deliver reliable solutions
                tailored to each partner&apos;s needs, from hotel contracting and transfers to MICE services, tailor-made
                programmes and excursions. Our focus is simple: building long-term partnerships through expertise,
                responsiveness and consistent service delivery.
              </p>
              <Link className="tet-text-link" to="/about">
                Discover Top Euro Travel <ArrowRight />
              </Link>
            </div>

            <div className="tet-facts" data-tet-stagger aria-label="Top Euro Travel facts">
              <div className="tet-fact">
                <strong>1989</strong>
                <span>Since our beginning</span>
              </div>
              <div className="tet-fact">
                <strong>100,000+</strong>
                <span>Guests annually</span>
              </div>
              <div className="tet-fact">
                <strong>200+</strong>
                <span>Hotel partners</span>
              </div>
              <div className="tet-fact">
                <strong>40+</strong>
                <span>Team members</span>
              </div>
              <div className="tet-fact">
                <strong>24/7</strong>
                <span>Support</span>
              </div>
            </div>
          </div>
        </section>

        <section className="tet-islands">
          <div className="tet-shell tet-islands__heading" data-tet-reveal>
            <div>
              <Eyebrow light>Two destinations. One local partner.</Eyebrow>
              <h2>Rhodes &amp; Kos, each experienced differently.</h2>
            </div>
            <p>
              One team connects both islands while every itinerary preserves the character, pace and possibilities of
              its destination.
            </p>
          </div>

          <div className="tet-shell tet-islands__stage" role="tablist" aria-label="Choose a destination" data-tet-reveal>
            {(Object.keys(islands) as IslandKey[]).map((key) => {
              const item = islands[key];
              const isActive = key === activeIsland;
              return (
                <article
                  key={key}
                  className={`tet-island${isActive ? ' is-active' : ''}`}
                  onMouseEnter={() => setActiveIsland(key)}
                >
                  <button
                    type="button"
                    className="tet-island__button"
                    onClick={() => setActiveIsland(key)}
                    aria-selected={isActive}
                    role="tab"
                  >
                    <Photo src={travelMedia(item.image)} alt={`${item.name} destination landscape`} />
                    <span className="tet-island__shade" aria-hidden="true" />
                    <span className="tet-island__number">{item.number}</span>
                    <span className="tet-island__name">{item.name}</span>
                    <span className="tet-island__summary">
                      <small>{item.descriptor}</small>
                      <strong>{item.title}</strong>
                      <span>{item.copy}</span>
                    </span>
                  </button>
                  <Link className="tet-island__link" to={item.href} aria-label={`Explore ${item.name}`}>
                    Explore {item.name} <ArrowRight />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <section className="tet-services" id="services">
          <div className="tet-shell">
            <div className="tet-section-heading" data-tet-reveal>
              <div>
                <Eyebrow>One accountable local team</Eyebrow>
                <h2>Our Services</h2>
              </div>
              <p>
                From contracting and operations to guest experience and technology, every service is connected through
                one experienced destination team.
              </p>
            </div>

            <div className="tet-services__desktop" data-tet-reveal>
              <div className="tet-services__media" key={activeService}>
                {service.image ? (
                  <Photo src={travelMedia(service.image)} alt={service.title} />
                ) : (
                  <div className="tet-services__technology" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                )}
                <span className="tet-services__media-shade" aria-hidden="true" />
                <div className="tet-services__sigil"><ServiceSigil kind={service.kind} /></div>
                <div className="tet-services__media-copy">
                  <small>{service.number} / 08</small>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>

              <div className="tet-services__index" aria-label="Select a service">
                {services.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    className={index === activeService ? 'is-active' : ''}
                    onMouseEnter={() => setActiveService(index)}
                    onFocus={() => setActiveService(index)}
                    onClick={() => setActiveService(index)}
                    aria-pressed={index === activeService}
                  >
                    <span>{item.number}</span>
                    <strong>{item.title}</strong>
                    <ArrowRight />
                  </button>
                ))}
                <Link className="tet-text-link tet-services__all" to="/services">
                  Explore all services <ArrowRight />
                </Link>
              </div>
            </div>

            <div className="tet-services__mobile" data-tet-reveal>
              {services.map((item, index) => {
                const isOpen = index === openMobileService;
                return (
                  <article className={`tet-service-mobile${isOpen ? ' is-open' : ''}`} key={item.title}>
                    <button
                      type="button"
                      onClick={() => setOpenMobileService(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.number}</span>
                      <strong>{item.title}</strong>
                      <ChevronDown />
                    </button>
                    <div className="tet-service-mobile__panel">
                      <div className="tet-service-mobile__visual">
                        {item.image ? (
                          <Photo src={travelMedia(item.image)} alt={item.title} />
                        ) : (
                          <div className="tet-services__technology" aria-hidden="true"><span /><span /><span /><span /></div>
                        )}
                        <span className="tet-services__media-shade" aria-hidden="true" />
                        <div className="tet-services__sigil"><ServiceSigil kind={item.kind} /></div>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  </article>
                );
              })}
              <Link className="tet-button tet-button--navy" to="/services">
                Explore all services <ArrowRight />
              </Link>
            </div>
          </div>
        </section>

        <section className="tet-mice">
          <div className="tet-mice__media" aria-hidden="true">
            <Photo src={travelMedia('home-mice-v2.jpg')} alt="" />
          </div>
          <div className="tet-mice__overlay" aria-hidden="true" />
          <div className="tet-shell tet-mice__content" data-tet-reveal>
            <Eyebrow light>MICE · Incentives · Groups</Eyebrow>
            <h2>MICE &amp; Group Travel Solutions</h2>
            <p>
              Whether planning a corporate event, incentive programme or group itinerary, our team delivers tailored
              solutions and seamless execution across Rhodes and Kos, supported by extensive destination knowledge and
              trusted local partnerships.
            </p>
            <div className="tet-mice__proof" aria-label="MICE capabilities">
              <span><Check /> Destination knowledge</span>
              <span><Check /> Trusted local partnerships</span>
              <span><Check /> Seamless on-site execution</span>
            </div>
            <Link className="tet-button tet-button--gold" to="/mice-groups">
              Explore MICE &amp; Groups <ArrowRight />
            </Link>
          </div>
          <span className="tet-mice__chapter" aria-hidden="true">MICE / 06</span>
        </section>

        <section className="tet-experiences">
          <div className="tet-shell">
            <div className="tet-section-heading tet-section-heading--experiences" data-tet-reveal>
              <div>
                <Eyebrow>Curated with local knowledge</Eyebrow>
                <h2>Authentic Local Experiences</h2>
              </div>
              <div>
                <p>
                  From the medieval streets of Rhodes to the coastal rhythm of Kos, each experience is selected for its
                  real sense of place.
                </p>
                <Link className="tet-text-link" to="/experiences">
                  Explore all experiences <ArrowRight />
                </Link>
              </div>
            </div>

            <div className="tet-experiences__grid" data-tet-stagger>
              {experiences.map((item, index) => (
                <Link
                  key={item.title}
                  className={`tet-experience ${item.className}`}
                  to={index === 0 || index === 3 ? '/rhodes' : index === 4 ? '/kos' : '/experiences'}
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <Photo src={travelMedia(item.image)} alt={item.title} />
                  <span className="tet-experience__shade" aria-hidden="true" />
                  <span className="tet-experience__index">{item.index}</span>
                  <span className="tet-experience__copy">
                    <small>{item.label}</small>
                    <strong>{item.title}</strong>
                  </span>
                  <span className="tet-experience__arrow"><ArrowRight /></span>
                </Link>
              ))}
            </div>

            <div className="tet-experiences__actions" data-tet-reveal>
              <Link className="tet-button tet-button--navy" to="/excursions">
                Browse excursions <ArrowRight />
              </Link>
              <span>Shared tours · Private days · Groups · Tailor-made programmes</span>
            </div>
          </div>
        </section>

        <section className="tet-contact">
          <div className="tet-contact__lines" aria-hidden="true" />
          <div className="tet-shell tet-contact__grid" data-tet-reveal>
            <div className="tet-contact__copy">
              <Eyebrow light>Start a conversation</Eyebrow>
              <h2>Get in Touch</h2>
              <p>
                Whether you are looking for a reliable DMC partner, planning a group programme, organising an event or
                exploring new opportunities in Greece, our team is ready to assist.
              </p>
              <div className="tet-contact__meta">
                <span><MapPin /> Rhodes &amp; Kos, Greece</span>
                <span><Mail /> B2B &amp; B2C enquiries</span>
              </div>
            </div>

            <form className="tet-contact__form" action="/contact" method="get">
              <label>
                <span>Your name</span>
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                <span>Email address</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                <span>Company / organisation</span>
                <input name="company" type="text" autoComplete="organization" />
              </label>
              <label>
                <span>What are you planning?</span>
                <select name="interest" defaultValue="">
                  <option value="" disabled>Select an area</option>
                  <option value="dmc">DMC partnership</option>
                  <option value="groups">MICE & group travel</option>
                  <option value="excursions">Tours & excursions</option>
                  <option value="events">Wedding or special event</option>
                  <option value="technology">XML API & agent portal</option>
                </select>
              </label>
              <label className="tet-contact__message">
                <span>Tell us a little more</span>
                <textarea name="message" rows={3} />
              </label>
              <button className="tet-button tet-button--gold" type="submit">
                Continue to enquiry <ArrowRight />
              </button>
            </form>
          </div>
          <div className="tet-shell tet-contact__footerline" aria-hidden="true">
            <span>Top Euro Travel</span>
            <span>Destination management since 1989</span>
            <span>Rhodes · Kos</span>
          </div>
        </section>
      </main>
    </div>
  );
}

const HOME_STYLES = String.raw`
.tet-home {
  --tet-navy: #071b34;
  --tet-navy-2: #0d3158;
  --tet-blue: #174879;
  --tet-ivory: #f5f0e6;
  --tet-paper: #fbf8f1;
  --tet-white: #ffffff;
  --tet-gold: #d9ac25;
  --tet-gold-soft: #f0d77d;
  --tet-ink: #10223d;
  --tet-muted: rgba(16, 34, 61, .67);
  --tet-line: rgba(16, 34, 61, .14);
  --tet-display: var(--font-heading, "Cormorant Garamond", Georgia, "Times New Roman", serif);
  --tet-sans: var(--font-body, Inter, Arial, sans-serif);
  position: relative;
  overflow: clip;
  background: var(--tet-ivory);
  color: var(--tet-ink);
  font-family: var(--tet-sans);
  isolation: isolate;
}

.tet-home,
.tet-home *,
.tet-home *::before,
.tet-home *::after { box-sizing: border-box; }

.tet-home img,
.tet-home video { display: block; width: 100%; }

.tet-home button,
.tet-home input,
.tet-home select,
.tet-home textarea { font: inherit; }

.tet-home a,
.tet-home button { -webkit-tap-highlight-color: transparent; }

.tet-shell {
  width: min(calc(100% - 56px), 1320px);
  margin-inline: auto;
}

.tet-home h1,
.tet-home h2,
.tet-home h3,
.tet-home p,
.tet-home figure { margin: 0; }

.tet-home h1,
.tet-home h2,
.tet-home h3 {
  font-family: var(--tet-display);
  font-weight: 500;
  letter-spacing: -.038em;
  text-wrap: balance;
}

.tet-home h1 {
  max-width: 760px;
  font-size: clamp(3.25rem, 5.4vw, 5.9rem);
  line-height: .98;
}

.tet-home h2 {
  font-size: clamp(2.75rem, 4.65vw, 5.2rem);
  line-height: .98;
}

.tet-home h3 {
  font-size: clamp(2rem, 3vw, 3.55rem);
  line-height: 1.02;
}

.tet-home p { font-size: clamp(1rem, 1.05vw, 1.12rem); line-height: 1.76; }

.tet-eyebrow {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-bottom: 24px !important;
  color: #9b730a;
  font-size: .72rem !important;
  font-weight: 800;
  letter-spacing: .2em;
  line-height: 1.3 !important;
  text-transform: uppercase;
}

.tet-eyebrow::before {
  width: 40px;
  height: 1px;
  background: currentColor;
  content: "";
  opacity: .76;
}

.tet-eyebrow--light { color: var(--tet-gold-soft); }

.tet-button {
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 0 23px;
  border: 1px solid transparent;
  border-radius: 7px;
  font-size: .72rem;
  font-weight: 800;
  letter-spacing: .105em;
  line-height: 1;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 240ms ease, background-color 240ms ease, color 240ms ease, box-shadow 240ms ease;
}

.tet-button svg,
.tet-text-link svg,
.tet-island__link svg,
.tet-experience__arrow svg { width: 17px; height: 17px; transition: transform 240ms ease; }

.tet-button:hover,
.tet-button:focus-visible { transform: translateY(-2px); }

.tet-button:hover svg,
.tet-button:focus-visible svg,
.tet-text-link:hover svg,
.tet-text-link:focus-visible svg,
.tet-island__link:hover svg,
.tet-island__link:focus-visible svg { transform: translateX(5px); }

.tet-button--gold {
  background: var(--tet-gold);
  box-shadow: 0 14px 34px rgba(217, 172, 37, .22);
  color: var(--tet-navy);
}

.tet-button--gold:hover,
.tet-button--gold:focus-visible { background: #e4b92d; box-shadow: 0 18px 42px rgba(217, 172, 37, .3); }

.tet-button--navy { background: var(--tet-navy); color: var(--tet-white); }
.tet-button--navy:hover,
.tet-button--navy:focus-visible { background: var(--tet-blue); }

.tet-text-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--tet-blue);
  font-size: .73rem;
  font-weight: 800;
  letter-spacing: .1em;
  text-decoration: none;
  text-transform: uppercase;
}

.tet-home :focus-visible { outline: 2px solid var(--tet-gold-soft); outline-offset: 4px; }

@media (min-width: 960px) {
  body.tet-home-active header nav,
  body.tet-home-active [data-site-header] nav { gap: clamp(20px, 2.1vw, 34px) !important; }

  body.tet-home-active header nav a,
  body.tet-home-active [data-site-header] nav a {
    font-size: .72rem !important;
    font-weight: 750 !important;
    letter-spacing: .065em !important;
  }

  body.tet-home-active header a[href="/contact"],
  body.tet-home-active [data-site-header] a[href="/contact"] {
    min-height: auto !important;
    padding: 8px 2px 7px !important;
    border: 0 !important;
    border-bottom: 1px solid rgba(240, 215, 125, .9) !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
    color: inherit !important;
  }

  body.tet-home-active header a[href="/contact"]:hover,
  body.tet-home-active [data-site-header] a[href="/contact"]:hover { color: #f0d77d !important; }
}

body.tet-home-active footer {
  margin-top: 0 !important;
  border-top: 1px solid rgba(255, 255, 255, .1) !important;
  background: #071b34 !important;
}

/* HERO */
.tet-hero {
  --tet-hero-shift: 0px;
  position: relative;
  display: grid;
  min-height: 94svh;
  align-items: center;
  overflow: hidden;
  padding: clamp(150px, 19vh, 210px) 0 clamp(180px, 21vh, 235px);
  background: var(--tet-navy);
  color: var(--tet-white);
}

.tet-hero__video {
  position: absolute;
  inset: -4% 0 0;
  height: 108%;
  object-fit: cover;
  object-position: center center;
  transform: translate3d(0, var(--tet-hero-shift), 0) scale(1.055);
  will-change: transform;
}

.tet-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(4, 19, 38, .89) 0%, rgba(4, 19, 38, .71) 35%, rgba(4, 19, 38, .26) 66%, rgba(4, 19, 38, .12) 100%),
    linear-gradient(180deg, rgba(4, 19, 38, .42) 0%, rgba(4, 19, 38, .03) 48%, rgba(4, 19, 38, .52) 100%);
  pointer-events: none;
}

.tet-hero__grain {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, .14) .45px, transparent .45px);
  background-size: 5px 5px;
  opacity: .055;
  pointer-events: none;
}

.tet-hero__content { position: relative; z-index: 3; }

.tet-hero .tet-eyebrow,
.tet-hero__title span,
.tet-hero__title em,
.tet-hero__lead,
.tet-hero .tet-button,
.tet-hero__signature,
.tet-hero__scroll { opacity: 0; transform: translateY(24px); }

.tet-hero .tet-eyebrow { transition: opacity 700ms ease 120ms, transform 700ms ease 120ms; }

.tet-hero__title {
  display: grid;
  max-width: 820px;
  margin-bottom: 30px;
  font-family: var(--tet-display);
  letter-spacing: -.048em;
  line-height: .94;
}

.tet-hero__title span {
  color: var(--tet-white);
  font-size: clamp(3.2rem, 5.75vw, 6.7rem);
  font-weight: 500;
  transition: opacity 900ms cubic-bezier(.2,.75,.25,1) 220ms, transform 900ms cubic-bezier(.2,.75,.25,1) 220ms;
}

.tet-hero__title em {
  margin-top: .05em;
  color: var(--tet-gold-soft);
  font-size: clamp(2.65rem, 4.85vw, 5.65rem);
  font-weight: 500;
  font-style: italic;
  transition: opacity 900ms cubic-bezier(.2,.75,.25,1) 340ms, transform 900ms cubic-bezier(.2,.75,.25,1) 340ms;
}

.tet-hero__lead {
  max-width: 610px;
  margin-bottom: 34px !important;
  color: rgba(255,255,255,.8);
  font-size: clamp(1.05rem, 1.28vw, 1.24rem) !important;
  line-height: 1.7 !important;
  transition: opacity 760ms ease 490ms, transform 760ms ease 490ms;
}

.tet-hero .tet-button { transition: opacity 760ms ease 620ms, transform 240ms ease, background-color 240ms ease, box-shadow 240ms ease; }

.tet-home.is-ready .tet-hero .tet-eyebrow,
.tet-home.is-ready .tet-hero__title span,
.tet-home.is-ready .tet-hero__title em,
.tet-home.is-ready .tet-hero__lead,
.tet-home.is-ready .tet-hero .tet-button,
.tet-home.is-ready .tet-hero__signature,
.tet-home.is-ready .tet-hero__scroll { opacity: 1; transform: translateY(0); }

.tet-hero__signature {
  position: absolute;
  bottom: 92px;
  left: 50%;
  z-index: 3;
  display: flex;
  gap: 0;
  color: rgba(255,255,255,.62);
  font-size: .66rem;
  font-weight: 800;
  letter-spacing: .16em;
  text-transform: uppercase;
  transform: translateX(-50%) translateY(20px);
  transition: opacity 700ms ease 760ms, transform 700ms ease 760ms;
}

.tet-home.is-ready .tet-hero__signature { transform: translateX(-50%) translateY(0); }

.tet-hero__signature span { display: flex; align-items: center; }
.tet-hero__signature span:not(:last-child)::after {
  width: 1px;
  height: 15px;
  margin: 0 18px;
  background: rgba(255,255,255,.28);
  content: "";
}

.tet-hero__scroll {
  position: absolute;
  right: clamp(24px, 4vw, 72px);
  bottom: 94px;
  z-index: 3;
  display: grid;
  justify-items: center;
  gap: 10px;
  color: rgba(255,255,255,.7);
  font-size: .62rem;
  font-weight: 800;
  letter-spacing: .17em;
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity 700ms ease 820ms, transform 700ms ease 820ms;
}

.tet-hero__scroll svg { width: 19px; animation: tet-scroll 1.9s ease-in-out infinite; }

.tet-hero__transition {
  position: absolute;
  right: -8%;
  bottom: clamp(-108px, -7vw, -88px);
  left: -8%;
  z-index: 2;
  height: clamp(118px, 9vw, 144px);
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  background: var(--tet-ivory);
  pointer-events: none;
}

/* INTRO */
.tet-intro {
  position: relative;
  z-index: 3;
  padding: clamp(88px, 8vw, 124px) 0 clamp(104px, 10vw, 150px);
  background:
    radial-gradient(circle at 88% 12%, rgba(217,172,37,.09), transparent 25%),
    var(--tet-ivory);
}

.tet-intro__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(420px, .83fr);
  align-items: center;
  gap: clamp(70px, 9vw, 135px);
}

.tet-intro__subtitle {
  max-width: 690px;
  margin-top: 30px !important;
  color: rgba(16,34,61,.78);
  font-family: var(--tet-display);
  font-size: clamp(1.4rem, 2vw, 2.05rem) !important;
  line-height: 1.38 !important;
}

.tet-intro__visual { position: relative; min-height: 570px; margin-top: -92px; }

.tet-intro__image { position: absolute; overflow: hidden; background: #dbe2e8; }
.tet-intro__image img { width: 100%; height: 100%; object-fit: cover; }

.tet-intro__image--main {
  top: 0;
  right: 0;
  width: 82%;
  height: 82%;
  border-radius: 9px;
  box-shadow: 0 34px 72px rgba(7,27,52,.16);
}

.tet-intro__image--detail {
  bottom: 0;
  left: 0;
  width: 47%;
  height: 46%;
  border: 9px solid var(--tet-ivory);
  border-radius: 7px;
  box-shadow: 0 22px 56px rgba(7,27,52,.18);
}

.tet-intro__mark {
  position: absolute;
  top: 9%;
  left: 2%;
  z-index: 2;
  display: grid;
  gap: 4px;
  padding: 17px 19px;
  border-left: 2px solid var(--tet-gold);
  background: rgba(245,240,230,.88);
  backdrop-filter: blur(10px);
}

.tet-intro__mark span,
.tet-intro__mark small {
  color: rgba(16,34,61,.55);
  font-size: .6rem;
  font-weight: 800;
  letter-spacing: .13em;
  text-transform: uppercase;
}

.tet-intro__mark strong { color: var(--tet-blue); font-family: var(--tet-display); font-size: 1.8rem; font-weight: 500; }

.tet-intro__body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(32px, 5vw, 72px);
  margin-top: clamp(70px, 7vw, 104px);
  padding-top: 38px;
  border-top: 1px solid var(--tet-line);
}

.tet-intro__body p { color: var(--tet-muted); }
.tet-intro__body .tet-text-link { grid-column: 2; justify-self: start; margin-top: 8px; }

.tet-facts {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: clamp(82px, 8vw, 120px);
  border-top: 1px solid var(--tet-line);
  border-bottom: 1px solid var(--tet-line);
}

.tet-fact {
  position: relative;
  display: grid;
  min-height: 144px;
  align-content: center;
  gap: 8px;
  padding: 22px clamp(14px, 2vw, 26px);
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 700ms ease, transform 700ms ease;
}

.tet-facts.is-visible .tet-fact { opacity: 1; transform: none; }
.tet-facts.is-visible .tet-fact:nth-child(2) { transition-delay: 80ms; }
.tet-facts.is-visible .tet-fact:nth-child(3) { transition-delay: 160ms; }
.tet-facts.is-visible .tet-fact:nth-child(4) { transition-delay: 240ms; }
.tet-facts.is-visible .tet-fact:nth-child(5) { transition-delay: 320ms; }

.tet-fact:not(:last-child)::after {
  position: absolute;
  top: 22%;
  right: 0;
  bottom: 22%;
  width: 1px;
  background: var(--tet-line);
  content: "";
}

.tet-fact strong { color: var(--tet-blue); font-family: var(--tet-display); font-size: clamp(2.05rem, 3vw, 3.35rem); font-weight: 500; line-height: 1; }
.tet-fact span { color: rgba(16,34,61,.55); font-size: .66rem; font-weight: 800; letter-spacing: .11em; text-transform: uppercase; }

/* ISLANDS */
.tet-islands {
  position: relative;
  margin-top: -1px;
  padding: clamp(160px, 13vw, 208px) 0 clamp(120px, 10vw, 164px);
  background:
    radial-gradient(circle at 76% 24%, rgba(43,101,151,.32), transparent 29%),
    linear-gradient(145deg, #071b34 0%, #0c2f55 62%, #164b78 100%);
  color: var(--tet-white);
  clip-path: polygon(0 5vw, 100% 0, 100% 100%, 0 100%);
}

.tet-islands__heading {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, .48fr);
  align-items: end;
  gap: clamp(48px, 8vw, 112px);
  margin-bottom: clamp(54px, 6vw, 82px);
}

.tet-islands__heading h2 { max-width: 820px; }
.tet-islands__heading > p { color: rgba(255,255,255,.68); }

.tet-islands__stage { display: flex; min-height: 590px; gap: 14px; }

.tet-island {
  position: relative;
  flex: .76 1 0;
  min-width: 0;
  overflow: hidden;
  border-radius: 12px;
  transition: flex 650ms cubic-bezier(.2,.72,.2,1), transform 300ms ease;
}

.tet-island.is-active { flex: 1.55 1 0; }

.tet-island__button {
  position: absolute;
  inset: 0;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  text-align: left;
}

.tet-island__button img { width: 100%; height: 100%; object-fit: cover; transition: transform 900ms cubic-bezier(.2,.72,.2,1); }
.tet-island:hover img,
.tet-island.is-active img { transform: scale(1.035); }

.tet-island__shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(4,17,32,.05) 25%, rgba(4,17,32,.88) 100%);
}

.tet-island__number,
.tet-island__name,
.tet-island__summary,
.tet-island__link { position: absolute; z-index: 2; }

.tet-island__number { top: 28px; left: 30px; color: var(--tet-gold-soft); font-size: .68rem; font-weight: 800; letter-spacing: .16em; }
.tet-island__name { right: 28px; bottom: 30px; font-family: var(--tet-display); font-size: clamp(2.4rem, 4vw, 4.8rem); line-height: 1; writing-mode: vertical-rl; transform: rotate(180deg); transition: opacity 300ms ease; }

.tet-island__summary {
  right: 92px;
  bottom: 42px;
  left: 34px;
  display: grid;
  max-width: 520px;
  gap: 12px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 360ms ease 120ms, transform 360ms ease 120ms;
}

.tet-island.is-active .tet-island__summary { opacity: 1; transform: none; }
.tet-island.is-active .tet-island__name { opacity: 0; }
.tet-island__summary small { color: var(--tet-gold-soft); font-size: .67rem; font-weight: 800; letter-spacing: .13em; text-transform: uppercase; }
.tet-island__summary strong { font-family: var(--tet-display); font-size: clamp(2rem, 3.15vw, 3.8rem); font-weight: 500; line-height: 1.02; }
.tet-island__summary span { max-width: 470px; color: rgba(255,255,255,.75); font-size: .96rem; line-height: 1.65; }

.tet-island__link {
  right: 34px;
  bottom: 36px;
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--tet-white);
  font-size: .69rem;
  font-weight: 800;
  letter-spacing: .09em;
  text-decoration: none;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 300ms ease 180ms;
}

.tet-island.is-active .tet-island__link { opacity: 1; }

/* SHARED SECTION HEADING */
.tet-section-heading {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, .52fr);
  align-items: end;
  gap: clamp(48px, 8vw, 110px);
  margin-bottom: clamp(60px, 6vw, 86px);
}

.tet-section-heading > p,
.tet-section-heading > div:last-child > p { color: var(--tet-muted); }

/* SERVICES */
.tet-services {
  position: relative;
  padding: clamp(124px, 11vw, 174px) 0 clamp(138px, 12vw, 190px);
  background:
    linear-gradient(180deg, #f3efe6 0%, var(--tet-paper) 72%, #edf0ef 100%);
}

.tet-services__desktop {
  display: grid;
  grid-template-columns: minmax(0, 1.04fr) minmax(430px, .76fr);
  align-items: stretch;
  gap: clamp(58px, 7vw, 104px);
}

.tet-services__media {
  position: relative;
  min-height: 700px;
  overflow: hidden;
  border-radius: 10px;
  background: var(--tet-navy);
  color: var(--tet-white);
  animation: tet-media-in 580ms cubic-bezier(.2,.72,.2,1);
}

.tet-services__media > img { width: 100%; height: 100%; object-fit: cover; }

.tet-services__media-shade {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(5,22,42,.1) 16%, rgba(5,22,42,.9) 100%),
    linear-gradient(90deg, rgba(5,22,42,.45), transparent 65%);
}

.tet-services__sigil {
  position: absolute;
  top: 34px;
  right: 34px;
  z-index: 2;
  width: 88px;
  height: 88px;
  padding: 16px;
  border: 1px solid rgba(240,215,125,.35);
  color: var(--tet-gold-soft);
  backdrop-filter: blur(10px);
}

.tet-services__sigil svg { width: 100%; height: 100%; }

.tet-services__media-copy {
  position: absolute;
  right: clamp(30px, 5vw, 64px);
  bottom: clamp(34px, 6vw, 72px);
  left: clamp(30px, 5vw, 64px);
  z-index: 2;
  max-width: 660px;
}

.tet-services__media-copy small { color: var(--tet-gold-soft); font-size: .68rem; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
.tet-services__media-copy h3 { margin: 13px 0 18px; font-size: clamp(2.75rem, 4.5vw, 5rem); }
.tet-services__media-copy p { max-width: 590px; color: rgba(255,255,255,.74); }

.tet-services__index { display: grid; align-content: start; border-top: 1px solid var(--tet-line); }

.tet-services__index button {
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr) 22px;
  align-items: center;
  gap: 16px;
  min-height: 72px;
  padding: 13px 5px;
  border: 0;
  border-bottom: 1px solid var(--tet-line);
  background: transparent;
  color: rgba(16,34,61,.52);
  cursor: pointer;
  text-align: left;
  transition: color 220ms ease, padding-left 220ms ease;
}

.tet-services__index button > span { font-size: .66rem; font-weight: 800; letter-spacing: .13em; }
.tet-services__index button strong { font-family: var(--tet-display); font-size: clamp(1.45rem, 2vw, 2.2rem); font-weight: 500; line-height: 1.1; }
.tet-services__index button svg { width: 18px; opacity: .4; transition: transform 220ms ease, opacity 220ms ease; }

.tet-services__index button:hover,
.tet-services__index button:focus-visible,
.tet-services__index button.is-active { padding-left: 12px; color: var(--tet-blue); }

.tet-services__index button.is-active > span { color: #9b730a; }
.tet-services__index button.is-active svg { opacity: 1; transform: translateX(4px); }
.tet-services__all { margin-top: 28px; }

.tet-services__technology {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background:
    radial-gradient(circle at 70% 28%, rgba(67,136,190,.42), transparent 24%),
    linear-gradient(145deg, #061b34, #113d68 62%, #0b2747);
}

.tet-services__technology span {
  position: absolute;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(240,215,125,.65);
  border-radius: 50%;
  box-shadow: 0 0 0 8px rgba(240,215,125,.04);
}

.tet-services__technology span:nth-child(1) { top: 20%; left: 18%; }
.tet-services__technology span:nth-child(2) { top: 32%; right: 20%; }
.tet-services__technology span:nth-child(3) { right: 34%; bottom: 20%; }
.tet-services__technology span:nth-child(4) { bottom: 26%; left: 25%; }
.tet-services__technology span:nth-child(5) { top: 48%; left: 48%; width: 24px; height: 24px; }

.tet-services__technology::before,
.tet-services__technology::after {
  position: absolute;
  inset: 12%;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 50%;
  content: "";
  transform: rotate(18deg);
}

.tet-services__technology::after { inset: 24%; transform: rotate(-18deg); }

.tet-services__mobile { display: none; }

/* MICE */
.tet-mice {
  --tet-mice-shift: 0px;
  position: relative;
  display: grid;
  min-height: 780px;
  align-items: center;
  overflow: hidden;
  padding: clamp(150px, 14vw, 220px) 0;
  background: var(--tet-navy);
  color: var(--tet-white);
  clip-path: polygon(0 5vw, 100% 0, 100% calc(100% - 4vw), 0 100%);
}

.tet-mice__media { position: absolute; inset: -8% 0; }
.tet-mice__media img { width: 100%; height: 116%; object-fit: cover; transform: translate3d(0, var(--tet-mice-shift), 0) scale(1.04); will-change: transform; }
.tet-mice__overlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(4,19,38,.94) 0%, rgba(4,19,38,.75) 46%, rgba(4,19,38,.25) 78%, rgba(4,19,38,.12) 100%); }

.tet-mice__content { position: relative; z-index: 2; }
.tet-mice__content h2 { max-width: 760px; }
.tet-mice__content > p { max-width: 680px; margin: 28px 0 34px; color: rgba(255,255,255,.74); }

.tet-mice__proof { display: flex; flex-wrap: wrap; gap: 12px 28px; margin-bottom: 38px; }
.tet-mice__proof span { display: inline-flex; align-items: center; gap: 8px; color: rgba(255,255,255,.8); font-size: .78rem; font-weight: 700; letter-spacing: .035em; }
.tet-mice__proof svg { width: 16px; color: var(--tet-gold-soft); }

.tet-mice__chapter {
  position: absolute;
  right: 4vw;
  bottom: 5vw;
  z-index: 2;
  color: rgba(255,255,255,.1);
  font-family: var(--tet-display);
  font-size: clamp(4rem, 10vw, 10rem);
  line-height: 1;
  pointer-events: none;
}

/* EXPERIENCES */
.tet-experiences {
  position: relative;
  margin-top: -2vw;
  padding: clamp(152px, 13vw, 210px) 0 clamp(124px, 11vw, 178px);
  background:
    radial-gradient(circle at 10% 4%, rgba(217,172,37,.08), transparent 25%),
    var(--tet-ivory);
}

.tet-section-heading--experiences > div:last-child { display: grid; gap: 24px; justify-items: start; }

.tet-experiences__grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 62px);
  gap: 14px;
}

.tet-experience {
  position: relative;
  overflow: hidden;
  border-radius: 9px;
  color: var(--tet-white);
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 700ms ease, transform 700ms cubic-bezier(.2,.72,.2,1);
}

.tet-experiences__grid.is-visible .tet-experience { opacity: 1; transform: none; }
.tet-experience--hero { grid-column: 1 / span 7; grid-row: 1 / span 7; }
.tet-experience--tall { grid-column: 8 / span 5; grid-row: 1 / span 6; }
.tet-experience--wide { grid-column: 1 / span 5; grid-row: 8 / span 3; }
.tet-experience--small { grid-column: 6 / span 3; grid-row: 8 / span 3; }
.tet-experience--small-alt { grid-column: 9 / span 4; grid-row: 7 / span 4; display: block; }

.tet-experience img { width: 100%; height: 100%; object-fit: cover; transition: transform 750ms cubic-bezier(.2,.72,.2,1); }
.tet-experience:hover img { transform: scale(1.045); }
.tet-experience__shade { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(4,18,35,.04) 28%, rgba(4,18,35,.86) 100%); }
.tet-experience__index { position: absolute; top: 20px; left: 22px; z-index: 2; color: var(--tet-gold-soft); font-size: .65rem; font-weight: 800; letter-spacing: .14em; }
.tet-experience__copy { position: absolute; right: 64px; bottom: 24px; left: 24px; z-index: 2; display: grid; gap: 7px; }
.tet-experience__copy small { color: rgba(255,255,255,.68); font-size: .66rem; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }
.tet-experience__copy strong { font-family: var(--tet-display); font-size: clamp(1.55rem, 2.2vw, 2.85rem); font-weight: 500; line-height: 1.03; }
.tet-experience__arrow { position: absolute; right: 22px; bottom: 23px; z-index: 2; display: grid; width: 34px; height: 34px; place-items: center; border: 1px solid rgba(255,255,255,.34); border-radius: 50%; transition: background-color 220ms ease; }
.tet-experience:hover .tet-experience__arrow { background: rgba(255,255,255,.14); }

.tet-experiences__actions { display: flex; align-items: center; justify-content: space-between; gap: 28px; margin-top: 36px; }
.tet-experiences__actions > span { color: rgba(16,34,61,.55); font-size: .68rem; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }

/* CONTACT */
.tet-contact {
  position: relative;
  overflow: hidden;
  padding: clamp(128px, 12vw, 182px) 0 54px;
  background:
    radial-gradient(circle at 82% 20%, rgba(37,96,143,.3), transparent 27%),
    linear-gradient(145deg, #06172d, #0b294b 64%, #103b64);
  color: var(--tet-white);
}

.tet-contact__lines {
  position: absolute;
  inset: 0;
  background:
    repeating-radial-gradient(ellipse at 90% 10%, transparent 0 42px, rgba(255,255,255,.045) 43px 44px),
    linear-gradient(120deg, transparent 0 56%, rgba(217,172,37,.07) 56.1% 56.3%, transparent 56.4%);
  pointer-events: none;
}

.tet-contact__grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, .82fr) minmax(480px, 1fr);
  gap: clamp(70px, 10vw, 150px);
}

.tet-contact__copy h2 { margin-bottom: 28px; }
.tet-contact__copy > p { max-width: 620px; color: rgba(255,255,255,.72); }
.tet-contact__meta { display: flex; flex-wrap: wrap; gap: 16px 28px; margin-top: 38px; }
.tet-contact__meta span { display: inline-flex; align-items: center; gap: 9px; color: rgba(255,255,255,.68); font-size: .72rem; font-weight: 750; letter-spacing: .07em; text-transform: uppercase; }
.tet-contact__meta svg { width: 17px; color: var(--tet-gold-soft); }

.tet-contact__form { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 30px 28px; align-content: start; }
.tet-contact__form label { display: grid; gap: 10px; }
.tet-contact__form label > span { color: rgba(255,255,255,.62); font-size: .65rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }

.tet-contact__form input,
.tet-contact__form select,
.tet-contact__form textarea {
  width: 100%;
  padding: 10px 0 13px;
  border: 0;
  border-bottom: 1px solid rgba(255,255,255,.26);
  border-radius: 0;
  outline: 0;
  background: transparent;
  color: var(--tet-white);
  font-size: .98rem;
  transition: border-color 220ms ease;
}

.tet-contact__form select option { color: var(--tet-ink); }
.tet-contact__form input:focus,
.tet-contact__form select:focus,
.tet-contact__form textarea:focus { border-color: var(--tet-gold-soft); }
.tet-contact__message { grid-column: 1 / -1; }
.tet-contact__form .tet-button { grid-column: 1 / -1; justify-self: start; margin-top: 8px; }

.tet-contact__footerline {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-top: clamp(94px, 9vw, 132px);
  padding-top: 28px;
  border-top: 1px solid rgba(255,255,255,.13);
  color: rgba(255,255,255,.48);
  font-size: .64rem;
  font-weight: 800;
  letter-spacing: .13em;
  text-transform: uppercase;
}

/* REVEALS */
[data-tet-reveal] { opacity: 0; transform: translateY(34px); transition: opacity 780ms ease, transform 780ms cubic-bezier(.2,.72,.2,1); }
[data-tet-reveal].is-visible { opacity: 1; transform: none; }
.tet-intro__visual[data-tet-reveal] { transform: translateY(38px) scale(.97); clip-path: inset(8% 0 0 0); transition-duration: 920ms; }
.tet-intro__visual[data-tet-reveal].is-visible { transform: none; clip-path: inset(0); }

@keyframes tet-scroll { 0%,100% { transform: translateY(0); } 50% { transform: translateY(7px); } }
@keyframes tet-media-in { from { opacity: .45; transform: scale(1.02); } to { opacity: 1; transform: scale(1); } }

/* TABLET */
@media (max-width: 1120px) {
  .tet-shell { width: min(calc(100% - 44px), 1160px); }
  .tet-intro__grid { grid-template-columns: minmax(0, 1fr) minmax(360px, .78fr); gap: 58px; }
  .tet-intro__visual { min-height: 520px; margin-top: -54px; }
  .tet-services__desktop { grid-template-columns: minmax(0, 1fr) minmax(360px, .74fr); gap: 48px; }
  .tet-services__media { min-height: 650px; }
  .tet-contact__grid { grid-template-columns: minmax(0, .8fr) minmax(420px, 1fr); gap: 62px; }
}

@media (max-width: 900px) {
  .tet-home h1 { font-size: clamp(3rem, 8vw, 5.2rem); }
  .tet-home h2 { font-size: clamp(2.65rem, 7.5vw, 4.8rem); }
  .tet-intro__grid,
  .tet-islands__heading,
  .tet-section-heading,
  .tet-contact__grid { grid-template-columns: 1fr; }
  .tet-intro__visual { width: min(100%, 620px); margin-top: 0; margin-left: auto; }
  .tet-intro__body { gap: 30px; }
  .tet-facts { grid-template-columns: repeat(5, minmax(145px, 1fr)); overflow-x: auto; scrollbar-width: none; }
  .tet-facts::-webkit-scrollbar { display: none; }
  .tet-fact { min-height: 128px; }
  .tet-islands__heading { align-items: start; }
  .tet-islands__stage { min-height: 520px; }
  .tet-services__desktop { display: none; }
  .tet-services__mobile { display: grid; }
  .tet-service-mobile { border-top: 1px solid var(--tet-line); }
  .tet-service-mobile:last-of-type { border-bottom: 1px solid var(--tet-line); }
  .tet-service-mobile > button {
    display: grid;
    grid-template-columns: 38px minmax(0, 1fr) 22px;
    align-items: center;
    gap: 14px;
    width: 100%;
    min-height: 74px;
    padding: 13px 0;
    border: 0;
    background: transparent;
    color: var(--tet-ink);
    text-align: left;
  }
  .tet-service-mobile > button > span { color: #9b730a; font-size: .65rem; font-weight: 800; letter-spacing: .13em; }
  .tet-service-mobile > button strong { font-family: var(--tet-display); font-size: clamp(1.35rem, 4vw, 1.8rem); font-weight: 500; }
  .tet-service-mobile > button svg { width: 18px; transition: transform 260ms ease; }
  .tet-service-mobile.is-open > button svg { transform: rotate(180deg); }
  .tet-service-mobile__panel { max-height: 0; overflow: hidden; opacity: 0; transition: max-height 520ms cubic-bezier(.2,.72,.2,1), opacity 320ms ease, padding-bottom 320ms ease; }
  .tet-service-mobile.is-open .tet-service-mobile__panel { max-height: 620px; opacity: 1; padding-bottom: 28px; }
  .tet-service-mobile__visual { position: relative; min-height: 300px !important; overflow: hidden !important; border-radius: 14px; background: var(--tet-navy); }
  .tet-service-mobile__visual > img { width: 100%; height: 100%; object-fit: cover; }
  .tet-service-mobile__panel > p { padding-top: 18px; color: var(--tet-muted); }
  .tet-services__mobile > .tet-button { justify-self: start; margin-top: 34px; }
  .tet-contact__form { max-width: 760px; }
}

/* MOBILE */
@media (max-width: 680px) {
  .tet-shell { width: min(calc(100% - 34px), 620px); }
  .tet-home h1 { font-size: clamp(2.85rem, 12.8vw, 4.25rem); line-height: .97; }
  .tet-home h2 { font-size: clamp(2.55rem, 11.6vw, 4rem); }
  .tet-eyebrow { margin-bottom: 18px !important; font-size: .64rem !important; letter-spacing: .16em; }
  .tet-eyebrow::before { width: 28px; }

  .tet-hero { min-height: 91svh; padding: 130px 0 178px; align-items: end; }
  .tet-hero__video { inset: -2% 0 0; height: 104%; object-position: 57% center; transform: scale(1.045); }
  .tet-hero__overlay { background: linear-gradient(180deg, rgba(4,19,38,.32) 0%, rgba(4,19,38,.45) 42%, rgba(4,19,38,.9) 100%); }
  .tet-hero__title { margin-bottom: 22px; }
  .tet-hero__title span { font-size: clamp(2.9rem, 13vw, 4.7rem); line-height: .94; }
  .tet-hero__title em { font-size: clamp(2.45rem, 11.2vw, 4.05rem); line-height: .98; }
  .tet-hero__lead { max-width: 470px; margin-bottom: 26px !important; font-size: .98rem !important; }
  .tet-hero .tet-button { width: 100%; max-width: 310px; }
  .tet-hero__signature { bottom: 72px; left: 17px; width: calc(100% - 34px); justify-content: flex-start; transform: translateY(18px); }
  .tet-home.is-ready .tet-hero__signature { transform: none; }
  .tet-hero__signature span:not(:last-child)::after { margin: 0 11px; height: 13px; }
  .tet-hero__scroll { display: none; }
  .tet-hero__transition { bottom: -62px; height: 82px; }

  .tet-intro { padding: 74px 0 84px; }
  .tet-intro__grid { gap: 44px; }
  .tet-intro__subtitle { margin-top: 22px !important; font-size: 1.28rem !important; }
  .tet-intro__visual { min-height: 420px; }
  .tet-intro__image--main { width: 88%; height: 80%; }
  .tet-intro__image--detail { width: 52%; height: 43%; border-width: 7px; }
  .tet-intro__mark { top: 5%; left: 0; padding: 14px 16px; }
  .tet-intro__body { grid-template-columns: 1fr; margin-top: 54px; padding-top: 30px; }
  .tet-intro__body .tet-text-link { grid-column: auto; }
  .tet-facts { width: calc(100% + 17px); margin-top: 66px; padding-right: 17px; scroll-snap-type: x mandatory; }
  .tet-fact { min-width: 178px; min-height: 118px; scroll-snap-align: start; }

  .tet-islands { padding: 120px 0 92px; clip-path: polygon(0 34px,100% 0,100% 100%,0 100%); }
  .tet-islands__heading { gap: 26px; margin-bottom: 42px; }
  .tet-islands__stage { display: grid; min-height: 0; gap: 16px; }
  .tet-island,
  .tet-island.is-active { min-height: 430px; flex: none; }
  .tet-island__summary { right: 28px; bottom: 78px; left: 24px; opacity: 1; transform: none; }
  .tet-island__summary strong { font-size: 2.25rem; }
  .tet-island__summary span { display: none; }
  .tet-island__name { display: none; }
  .tet-island__link { right: auto; bottom: 28px; left: 24px; opacity: 1; }

  .tet-services { padding: 92px 0 108px; }
  .tet-section-heading { gap: 26px; margin-bottom: 46px; }
  .tet-service-mobile__visual { min-height: 250px !important; }

  .tet-mice { min-height: 720px; padding: 132px 0; clip-path: polygon(0 32px,100% 0,100% calc(100% - 28px),0 100%); }
  .tet-mice__overlay { background: linear-gradient(180deg, rgba(4,19,38,.52) 0%, rgba(4,19,38,.88) 70%, rgba(4,19,38,.94) 100%); }
  .tet-mice__content > p { margin: 24px 0 30px; }
  .tet-mice__proof { display: grid; gap: 12px; }
  .tet-mice__chapter { right: 16px; bottom: 52px; font-size: 4.8rem; }

  .tet-experiences { margin-top: -12px; padding: 104px 0 102px; }
  .tet-section-heading--experiences > div:last-child { gap: 18px; }
  .tet-experiences__grid {
    display: flex;
    width: calc(100% + 17px);
    grid-template-columns: none;
    grid-template-rows: none;
    gap: 14px;
    overflow-x: auto;
    padding-right: 17px;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
  }
  .tet-experiences__grid::-webkit-scrollbar { display: none; }
  .tet-experience,
  .tet-experience--hero,
  .tet-experience--tall,
  .tet-experience--wide,
  .tet-experience--small,
  .tet-experience--small-alt {
    display: block;
    width: 82vw;
    min-width: 82vw;
    height: 470px;
    grid-column: auto;
    grid-row: auto;
    scroll-snap-align: start;
  }
  .tet-experience--small-alt { display: block; }
  .tet-experience__copy strong { font-size: 2rem; }
  .tet-experiences__actions { align-items: flex-start; flex-direction: column; margin-top: 28px; }
  .tet-experiences__actions .tet-button { width: 100%; }
  .tet-experiences__actions > span { line-height: 1.7; }

  .tet-contact { padding: 100px 0 42px; }
  .tet-contact__grid { gap: 54px; }
  .tet-contact__form { grid-template-columns: 1fr; gap: 26px; }
  .tet-contact__message,
  .tet-contact__form .tet-button { grid-column: auto; }
  .tet-contact__form .tet-button { width: 100%; }
  .tet-contact__footerline { display: grid; gap: 10px; margin-top: 78px; }
}

@media (prefers-reduced-motion: reduce) {
  .tet-home *,
  .tet-home *::before,
  .tet-home *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
  .tet-hero__video,
  .tet-mice__media img { transform: none !important; }
  [data-tet-reveal],
  [data-tet-stagger],
  .tet-experience,
  .tet-fact { opacity: 1 !important; transform: none !important; clip-path: none !important; }
}
`;
