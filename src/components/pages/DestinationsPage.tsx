import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Landmark,
  Mountain,
  Ship,
  Sparkles,
  Utensils,
  Waves,
} from 'lucide-react';
import {
  travelMedia,
  Gold,
  IconFeature,
  PageHero,
  PageSeo,
  Photo,
  PlanePath,
  SectionTitle,
} from '@/components/travel/Shared';

const destinations = [
  {
    title: 'Rhodes',
    image: 'marina.jpg',
    copy: "Rhodes is one of Greece's leading tourism destinations, renowned for its rich history, diverse landscapes and exceptional hospitality infrastructure. From the UNESCO-listed Medieval City and picturesque villages to luxury resorts and stunning coastline, the island offers outstanding opportunities for leisure travel, group programmes, events and tailor-made experiences.",
    tags: ['Medieval City', 'Villages', 'Coastline', 'Events'],
    cta: 'DISCOVER RHODES',
    to: '/rhodes',
  },
  {
    title: 'Kos',
    image: 'kallithea.jpg',
    copy: 'Kos combines authentic island charm with excellent tourism infrastructure, making it a popular destination for travellers from around the world. Beautiful beaches, cultural landmarks, quality accommodation and a relaxed atmosphere create the ideal setting for holidays, group travel, incentive programmes and memorable local experiences.',
    tags: ['Beaches', 'Culture', 'Groups', 'Incentives'],
    cta: 'DISCOVER KOS',
    to: '/kos',
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
  ['Rhodes: Medieval City', 'old-town.jpg'],
  ['Rhodes: Lindos Acropolis', 'acropolis.jpg'],
  ['Kos: Cultural Heritage', 'kallithea.jpg'],
  ['Kos: Island Experiences', 'flower.jpg'],
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
      <PageSeo title="Rhodes &amp; Kos Destinations in Greece | Top Euro Travel" description="Explore Rhodes and Kos, Top Euro Travel&apos;s core destinations in Greece, and discover our support for travel programmes and events across the country." />
      <PageHero
        className="destinations-page__hero"
        title={<><Gold>Explore Our</Gold> Destinations in Greece</>}
        breadcrumb="Destinations"
        image={travelMedia('destinations-hero.jpg')}
      />

      <section className="section shell destinations-overview destinations-reveal" data-destinations-reveal>
        <p className="intro-copy destinations-intro">Greece offers an extraordinary diversity of destinations, experiences and travel opportunities. As a destination management company with extensive expertise in Rhodes and Kos, Top Euro Travel supports tour operators, travel agencies, groups and event planners with reliable, tailor-made solutions across Greece.<br /><br />While Rhodes and Kos remain our core destinations, our experience, trusted network and flexible approach allow us to support a wide range of travel programmes, events and special projects throughout the country.</p>
        <div className="destinations-grid">
          {destinations.map((item) => (
            <article className="card destination-large" key={item.title}>
              <div className="destination-large__image"><Photo src={travelMedia(item.image)} alt={item.title} /></div>
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
              <div className="destination-moments__image"><Photo src={travelMedia(image)} alt={title} /></div>
              <strong>{title}</strong>
            </Link>
          ))}
        </div>
        <div className="center destinations-view-all">
          <Link className="button button--navy button--tiny" to="/experiences">VIEW ALL EXPERIENCES</Link>
        </div>
      </section>

      <section className="destination-cta shell destinations-reveal" data-destinations-reveal>
        <div className="destination-cta__circle"><Photo src={travelMedia('kallithea.jpg')} alt="Aegean coastline" /></div>
        <div><h2>Not sure where to start?</h2><p>Let us design the perfect itinerary.</p></div>
        <Link className="button button--gold" to="/contact">ENQUIRE NOW</Link>
        <PlanePath />
      </section>
    </>
  );
}

