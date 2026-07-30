import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Landmark,
  Map,
  MapPin,
  Mountain,
  Ship,
  Sparkles,
  Utensils,
  Waves,
} from 'lucide-react';
import {
  ASSET,
  Gold,
  IconFeature,
  PageHero,
  Photo,
  PlanePath,
  SectionTitle,
} from '@/components/travel/Shared';

const destinations = [
  {
    title: 'Rhodes',
    image: 'marina.jpg',
    copy: 'A captivating island of contrasts, Rhodes blends medieval charm with scenic beauty. Wander the UNESCO-listed Old Town, relax on stunning beaches, and savor exceptional local cuisine.',
    tags: ['Old Town', 'Lindos', 'Beaches', 'Gastronomy'],
    cta: 'EXPLORE RHODES',
    to: '/rhodes',
  },
  {
    title: 'Kos',
    image: 'kallithea.jpg',
    copy: 'Known as the island of Hippocrates, Kos is a perfect blend of culture, wellness, and nature. Charming villages, ancient ruins, and sandy beaches create a serene atmosphere.',
    tags: ['Culture', 'Wellness', 'Villages', 'Nature'],
    cta: 'EXPLORE KOS',
    to: '/kos',
  },
  {
    title: 'Symi & Island Hopping',
    image: 'haraki.jpg',
    copy: 'Discover the magic of nearby islands and hidden gems. From pastel-colored harbors to secret bays and idyllic islets, every stop offers a picture-perfect escape.',
    tags: ['Island Life', 'Hidden Gems', 'Boat Tours', 'Scenic Views'],
    cta: 'EXPLORE ISLAND HOPPING',
    to: '/experiences',
  },
];

const islandReasons = [
  [Mountain, 'Unique Landscapes', 'Diverse sceneries from mountains to golden beaches and crystal-clear seas.'],
  [Landmark, 'Rich Culture', 'Step back in time with ancient history, UNESCO sites, and local traditions.'],
  [Waves, 'Crystal-Clear Waters', 'Swim in turquoise waters and explore secluded coves and pristine beaches.'],
  [Utensils, 'Authentic Flavors', 'Savor local gastronomy with fresh ingredients and time-honored recipes.'],
  [Heart, 'Warm Hospitality', 'Experience genuine Greek hospitality and personalized service at every turn.'],
] as const;

const moments = [
  ['Rhodes: Medieval Old Town', 'old-town.jpg'],
  ['Rhodes: Lindos Acropolis', 'acropolis.jpg'],
  ['Kos: Asclepion & Heritage', 'kallithea.jpg'],
  ['Kos: Wellness & Spa', 'flower.jpg'],
  ['Island Hopping: Symi Harbor', 'marina.jpg'],
  ['Island Hopping: Private Boat Tours', 'sailing.jpg'],
];

export default function DestinationsPage() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-destinations-reveal]'));
    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -55px' });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHero
        className="destinations-page__hero"
        title={<><Gold>Our</Gold> Destinations</>}
        breadcrumb="Destinations"
        image={`${ASSET}/destinations-hero.jpg`}
      />

      <section className="section shell destinations-overview destinations-reveal" data-destinations-reveal>
        <p className="intro-copy destinations-intro">
          Discover the unparalleled beauty, rich culture, and authentic hospitality<br />
          of <strong>Rhodes, Kos, and the surrounding islands of the Dodecanese.</strong><br />
          <strong>Timeless places. Unforgettable experiences.</strong>
        </p>
        <div className="destinations-grid">
          {destinations.map((item) => (
            <article className="card destination-large" key={item.title}>
              <div className="destination-large__image"><Photo src={`${ASSET}/${item.image}`} alt={item.title} /></div>
              <div className="destination-large__body">
                <h2><Landmark />{item.title}</h2>
                <p>{item.copy}</p>
                <div className="destination-large__tags">
                  {item.tags.map((tag) => <span className="tag" key={tag}><Sparkles />{tag}</span>)}
                </div>
                <Link className="button button--navy button--tiny" to={item.to}>{item.cta}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section--tight shell destinations-reasons-section destinations-reveal" data-destinations-reveal>
        <SectionTitle>Why These Islands</SectionTitle>
        <div className="island-reasons">
          {islandReasons.map(([Icon, title, copy]) => <IconFeature icon={Icon} title={title} key={title}>{copy}</IconFeature>)}
        </div>
      </section>

      <section className="section--tight shell destinations-experiences-section destinations-reveal" data-destinations-reveal>
        <SectionTitle>Experiences by Destination</SectionTitle>
        <div className="destination-moments">
          {moments.map(([title, image]) => (
            <Link to="/experiences" key={title}>
              <div className="destination-moments__image"><Photo src={`${ASSET}/${image}`} alt={title} /></div>
              <strong>{title}</strong>
            </Link>
          ))}
        </div>
        <div className="center destinations-view-all">
          <Link className="button button--navy button--tiny" to="/experiences">VIEW ALL EXPERIENCES</Link>
        </div>
      </section>

      <section className="island-journey shell destinations-reveal" data-destinations-reveal>
        <div className="island-journey__copy">
          <h2>Plan Your Island Journey</h2>
          <p>Explore the Dodecanese at your pace. Combine islands, create the perfect route, and enjoy seamless travel with our local expertise.</p>
          <Link className="button button--gold button--tiny" to="/contact">GET INSPIRED</Link>
        </div>
        <div className="island-map">
          <Map />
          <span className="island island--rhodes"><MapPin />Rhodes</span>
          <span className="island island--symi">Symi</span>
          <span className="island island--nisiros">Nisyros</span>
          <span className="island island--kos"><MapPin />Kos</span>
          <span className="route-line" />
          <Ship />
        </div>
      </section>

      <section className="destination-cta shell destinations-reveal" data-destinations-reveal>
        <div className="destination-cta__circle"><Photo src={`${ASSET}/kallithea.jpg`} alt="Aegean chapel" /></div>
        <div><h2>Not sure where to start?</h2><p>Let us design the perfect itinerary.</p></div>
        <Link className="button button--gold" to="/contact">ENQUIRE NOW</Link>
        <PlanePath />
      </section>
    </>
  );
}

