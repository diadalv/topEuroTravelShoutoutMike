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
  Photo,
  RequestBanner,
  SectionTitle,
  TestimonialStrip,
  TrustBar,
} from '@/components/travel/Shared';

const floatingServices = [
  [Landmark, 'Hotel Contracts'],
  [Bus, 'Transfers'],
  [MapPinned, 'Tours & Excursions'],
  [Users, 'MICE & Groups'],
  [Heart, 'Weddings'],
  [Crown, 'VIP Services'],
  [Bell, 'Concierge Services'],
  [Headphones, '24/7 Support'],
] as const;

const destinations = [
  {
    name: 'Rhodes',
    image: `${ASSET}/lindos.jpg`,
    copy: 'Island of knights, history and endless sunshine. Explore the Old Town, stunning beaches and vibrant local culture.',
    cta: 'DISCOVER RHODES',
  },
  {
    name: 'Kos',
    image: `${ASSET}/kallithea.jpg`,
    copy: 'Greek vibes, natural beauty and relaxation. Perfect for adventure, wellness and authentic island experiences.',
    cta: 'DISCOVER KOS',
  },
  {
    name: 'Symi & Island Hopping',
    image: `${ASSET}/marina.jpg`,
    copy: 'Discover hidden gems and crystal-clear waters across the Dodecanese. Let us plan your perfect island escape.',
    cta: 'EXPLORE MORE',
  },
];

const serviceMinis = [
  [Map, 'Destination Management'],
  [Landmark, 'Accommodation'],
  [Bus, 'Transfers'],
  [MapPinned, 'Excursions'],
  [Users, 'MICE & Corporate Travel'],
  [Heart, 'Weddings'],
  [Crown, 'VIP & Concierge'],
] as const;

const experiences = [
  ['Culture & History', 'acropolis.jpg'],
  ['Sailing Adventures', 'sailing.jpg'],
  ['Wellness & Spa', 'flower.jpg'],
  ['Food & Wine', 'food.jpg'],
  ['Nature & Hiking', 'monolithos.jpg'],
  ['Private Luxury', 'haraki.jpg'],
  ['Family Fun', 'beach.jpg'],
  ['Sunset Experiences', 'sunset.jpg'],
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

  return (
    <>
      <section className="home-hero" style={{ backgroundImage: `url("${ASSET}/home-hero-v2.jpg")` }}>
        <div className="home-hero__content shell">
          <h1><span className="text-gold">Your DMC in</span>Rhodes &amp; Kos</h1>
          <p className="home-hero__lead">Local Expertise. Memorable Experiences.<br />Seamless Service.</p>
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
          <h2>Welcome to Top Euro Travel</h2>
          <p>
            We are a destination management company based in Rhodes &amp; Kos, offering expertly crafted
            travel solutions across the Dodecanese. From transfers and accommodation to unique experiences
            and events, we create seamless, authentic, and unforgettable journeys.
          </p>
          <Link className="button button--navy button--tiny" to="/about">LEARN MORE ABOUT US</Link>
        </div>
        <div className="home-welcome__visual">
          <Photo
            src={`${ASSET}/home-welcome-v2.jpg`}
            alt="Aegean sea and white chapel"
          />
        </div>
      </section>

      <section className="section--tight shell">
        <SectionTitle>Featured Destinations</SectionTitle>
        <div className="grid-3">
          {destinations.map((destination) => (
            <article className="card photo-card destination-card" key={destination.name}>
              <div className="photo-card__image"><Photo src={destination.image} alt={destination.name} /></div>
              <div className="photo-card__body">
                <h3>{destination.name}</h3>
                <p>{destination.copy}</p>
                <Link className="button button--navy button--tiny" to="/destinations">{destination.cta}</Link>
              </div>
            </article>
          ))}
        </div>
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
            <h2>MICE &amp; Groups</h2>
            <p>We handle every detail for successful meetings, incentives, conferences and corporate events in Rhodes &amp; Kos.</p>
            <ul className="check-list">
              <li>Venue sourcing &amp; event management</li>
              <li>Team building &amp; unique experiences</li>
              <li>Logistics, accommodation &amp; transfers</li>
              <li>DMC services with local expertise</li>
            </ul>
            <Link className="button button--navy button--tiny" to="/mice-groups">VIEW MICE SERVICES</Link>
          </div>
        </div>
      </section>

      <section className="section--tight shell">
        <SectionTitle>Experiences</SectionTitle>
        <div className="experience-thumbs">
          {experiences.map(([title, image]) => (
            <Link className="experience-thumb" key={title} to="/experiences">
              <div className="experience-thumb__image"><Photo src={`${ASSET}/${image}`} alt={title} /></div>
              <strong>{title}</strong>
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
          <IconFeature icon={Bus} title="Local Expertise">In-depth knowledge of Rhodes &amp; Kos.</IconFeature>
          <IconFeature icon={CalendarCheck} title="Tailor-Made Planning">Custom itineraries just for you.</IconFeature>
          <IconFeature icon={ShieldCheck} title="Reliable Partners">Trusted network and quality assured.</IconFeature>
          <IconFeature icon={MessageCircleMore} title="Fast Response">Quick, efficient and proactive support.</IconFeature>
          <IconFeature icon={Sparkles} title="Seamless Service">From planning to flawless execution.</IconFeature>
        </div>
      </section>

      <TestimonialStrip />
      <RequestBanner />
    </>
  );
}

