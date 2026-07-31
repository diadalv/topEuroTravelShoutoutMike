import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bell,
  Building2,
  Bus,
  CalendarCheck,
  Camera,
  Crown,
  Headphones,
  Heart,
  Landmark,
  Map,
  MapPinned,
  MessageCircleMore,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Utensils,
  Waves,
  X,
} from 'lucide-react';
import {
  ASSET,
  IconFeature,
  PageSeo,
  Photo,
  PlanePath,
  RequestBanner,
  SectionTitle,
  TrustBar,
} from '@/components/travel/Shared';

const floatingServices = [
  [Landmark, "Hotel Contracting"],
  [Building2, "Booking Management"],
  [Bus, "Transfers & Transportation"],
  [Headphones, "Resort Assistance"],
  [MapPinned, "Tours & Excursions"],
  [Users, "MICE & Group Travel"],
  [Heart, "Weddings & Special Events"],
  [CalendarCheck, "XML API & Agent Portal"],
] as const;

const destinations = [
  {
    name: "Rhodes",
    image: `${ASSET}/lindos.jpg`,
    copy: "Rhodes is one of Greece's leading tourism destinations, renowned for its rich history, diverse landscapes and exceptional hospitality infrastructure.",
  },
  {
    name: "Kos",
    image: `${ASSET}/kallithea.jpg`,
    copy: "Kos combines authentic island charm with excellent tourism infrastructure, beautiful beaches, cultural landmarks and a relaxed atmosphere.",
  },
];

const serviceMinis = [
  [Landmark, "Hotel Contracting"],
  [Building2, "Booking Management"],
  [Bus, "Transfers & Transportation"],
  [Headphones, "Resort Assistance"],
  [MapPinned, "Tours & Excursions"],
  [Users, "MICE & Group Travel"],
  [Heart, "Weddings & Special Events"],
  [CalendarCheck, "XML API & Agent Portal"],
] as const;

const experiences = [
  ['Medieval City of Rhodes', 'old-town.jpg'],
  ['Cooking & Wine Tasting', 'food.jpg'],
  ['Rhodes Island Tour', 'monolithos.jpg'],
  ['Symi Island & St George Bay', 'marina.jpg'],
  ['Lindos Village', 'acropolis.jpg'],
  ['Sailing & Private Yachts', 'sailing.jpg'],
  ['Jeep Safari', 'prasonisi.jpg'],
  ['Hiking Activities', 'butterflies-entry.jpg'],
];

export default function TravelHomePage() {
  const [highlightsOpen, setHighlightsOpen] = useState(false);

  useEffect(() => {
    if (!highlightsOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setHighlightsOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [highlightsOpen]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('.home-page > section')).slice(1);
    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return;
    }

    sections.forEach((section) => section.classList.add('home-reveal'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      <PageSeo title="Destination Management Company in Greece | Rhodes &amp; Kos DMC | Top Euro Travel" description="Top Euro Travel is a trusted destination management company in Greece, providing DMC services, hotel contracting, transfers, MICE, groups, excursions and ground handling in Rhodes and Kos since 1989." />
      <section className="home-hero" style={{ backgroundImage: `url("${ASSET}/home-hero-v2.jpg")` }}>
        <div className="home-hero__content shell">
          <h1><span className="text-gold">Your Trusted DMC Partner in</span>Rhodes &amp; Kos</h1>
          <p className="home-hero__lead">Delivering destination management, ground handling<br />and travel solutions since 1989.</p>
          <div className="home-hero__actions">
            <Link className="button button--gold" to="/about">DISCOVER MORE</Link>
            <button
              className="video-link"
              type="button"
              aria-label="View destination highlights"
              aria-haspopup="dialog"
              aria-expanded={highlightsOpen}
              onClick={() => setHighlightsOpen(true)}
            >
              <span><Play /></span> VIEW HIGHLIGHTS
            </button>
          </div>
        </div>
      </section>

      {highlightsOpen && (
        <div
          className="video-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setHighlightsOpen(false);
          }}
        >
          <section className="video-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="highlights-title">
            <button className="video-modal__close" type="button" aria-label="Close highlights" autoFocus onClick={() => setHighlightsOpen(false)}><X /></button>
            <div className="video-modal__visual"><span className="video-modal__play" aria-hidden="true"><Play /></span></div>
            <div className="video-modal__copy">
              <div><h2 id="highlights-title">Discover Rhodes &amp; Kos</h2><p>Culture, island life, sailing and tailor-made experiences selected by our local team.</p></div>
              <Link className="button button--gold" to="/experiences" onClick={() => setHighlightsOpen(false)}>EXPLORE EXPERIENCES</Link>
            </div>
          </section>
        </div>
      )}

      <section className="floating-services shell" aria-label="Key services">
        {floatingServices.map(([Icon, title]) => (
          <Link className="floating-service" key={title} to="/services">
            <Icon />
            <strong>{title}</strong>
          </Link>
        ))}
      </section>

      <TrustBar />

      <section className="section shell home-welcome">
        <div>
          <h2>Destination Management Company in Greece</h2>
          <p>
            Since 1989, Top Euro Travel has been providing destination management and ground handling services
            in Rhodes and Kos, supporting tour operators, travel agencies, groups and event planners from across the world.
          </p>
          <p>
            With local teams in both destinations and a flexible, hands-on approach, we deliver reliable solutions
            tailored to each partner&apos;s needs, from hotel contracting and transfers to MICE services, tailor-made
            programmes and excursions. Our focus is simple: building long-term partnerships through expertise, responsiveness and consistent service delivery.
          </p>
          <Link className="button button--navy button--tiny" to="/about">LEARN MORE ABOUT US</Link>
        </div>
        <div className="home-welcome__visual">
          <Photo
            src={`${ASSET}/home-welcome-v2.jpg`}
            alt="Aegean sea and white chapel"
          />
          <PlanePath className="home-plane home-plane--welcome" />
        </div>
      </section>

      <section className="section--tight shell home-destinations">
        <SectionTitle>Featured Destinations</SectionTitle>
        <div className="grid-2">
          {destinations.map((destination) => (
            <article className="card photo-card destination-card" key={destination.name}>
              <div className="photo-card__image"><Photo src={destination.image} alt={destination.name} /></div>
              <div className="photo-card__body">
                <h3>{destination.name}</h3>
                <p>{destination.copy}</p>
              </div>
            </article>
          ))}
        </div>
        <PlanePath className="home-plane home-plane--destinations" />
      </section>

      <section className="section--tight shell">
        <SectionTitle>Our Services</SectionTitle>
        <div className="service-mini-grid">
          {serviceMinis.map(([Icon, title]) => (
            <Link className="service-mini" key={title} to="/services">
              <Icon />
              <strong>{title}</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="section--tight shell">
        <div className="mice-feature">
          <Photo
            src={`${ASSET}/home-mice-v2.jpg`}
            alt="Corporate meeting venue"
          />
          <div className="mice-feature__copy">
            <h2>MICE &amp; Group Travel Solutions</h2>
            <p>Whether planning a corporate event, incentive programme or group itinerary, our team delivers tailored solutions and seamless execution across Rhodes and Kos.</p>
            <ul className="check-list">
              <li>Venue sourcing &amp; event management</li>
              <li>Team building &amp; unique experiences</li>
              <li>Logistics, accommodation &amp; transfers</li>
              <li>DMC services with local expertise</li>
            </ul>
            <Link className="button button--navy button--tiny" to="/mice-groups">VIEW MICE SERVICES</Link>
          </div>
          <PlanePath className="home-plane home-plane--mice" />
        </div>
      </section>

      <section className="section--tight shell">
        <SectionTitle>Authentic Local Experiences</SectionTitle>
        <div className="experience-thumbs">
          {experiences.map(([title, image]) => (
            <Link className="experience-thumb" key={title} to="/experiences">
              <div className="experience-thumb__image">
                <Photo src={`${ASSET}/${image}`} alt={title} />
                <div className="experience-thumb__content">
                  <strong className="experience-thumb__label">{title}</strong>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="center" style={{ marginTop: 8 }}>
          <Link className="button button--navy button--tiny" to="/experiences">VIEW ALL EXPERIENCES</Link>
        </div>
      </section>

      <section className="section--tight shell">
        <SectionTitle>Why Choose Top Euro Travel?</SectionTitle>
        <div className="why-strip">
          <IconFeature icon={Bus} title="Local Teams">Hands-on destination expertise in Rhodes &amp; Kos.</IconFeature>
          <IconFeature icon={CalendarCheck} title="Flexible Approach">Solutions tailored to each partner&apos;s needs.</IconFeature>
          <IconFeature icon={ShieldCheck} title="Strong Supplier Network">Long-standing relationships across both destinations.</IconFeature>
          <IconFeature icon={MessageCircleMore} title="Responsive Support">Clear communication and proactive assistance.</IconFeature>
          <IconFeature icon={Sparkles} title="Consistent Delivery">Reliable service from planning through operations.</IconFeature>
        </div>
      </section>
      <RequestBanner />
    </div>
  );
}

