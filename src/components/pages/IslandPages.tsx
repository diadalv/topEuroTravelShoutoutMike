import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Landmark, MapPin, Sparkles, Utensils, Waves, type LucideIcon } from 'lucide-react';
import { ASSET, Gold, IconFeature, PageHero, PageSeo, Photo, SectionTitle } from '@/components/travel/Shared';

type IslandData = {
  name: string;
  heading: string;
  hero: string;
  image: string;
  eyebrow: string;
  introduction: string;
  highlights: Array<[LucideIcon, string, string]>;
  gallery: Array<[string, string]>;
};

const rhodes: IslandData = {
  name: 'Rhodes',
  heading: "Rhodes: One of Greece's Leading Island Destinations",
  hero: 'destinations-hero.jpg',
  image: 'lindos-aerial.jpg',
  eyebrow: 'About Rhodes',
  introduction: "Located in the southeastern Aegean Sea, Rhodes is one of Greece's most renowned island destinations, welcoming millions of visitors each year. Rich in history, culture and natural beauty, the island seamlessly combines centuries-old heritage with modern tourism infrastructure, creating a destination that appeals to a wide variety of travellers. From the UNESCO World Heritage-listed Medieval City and the iconic Acropolis of Lindos to picturesque villages, golden beaches and vibrant coastal resorts, Rhodes offers an exceptional blend of authenticity, relaxation and discovery. Its strategic location, excellent accessibility and long tourism season have established the island as a key destination in the Mediterranean.",
  highlights: [
    [Landmark, 'Tourism in Rhodes', 'Rhodes offers a diverse tourism product capable of meeting the needs of every market segment. Its accommodation portfolio ranges from internationally recognised luxury resorts and family hotels to boutique properties and exclusive villas, complemented by cultural attractions, outdoor activities, gastronomy, cruises, excursions and authentic local experiences.'],
    [Sparkles, 'Rhodes as a MICE Destination', 'With excellent air connectivity, high-quality hospitality infrastructure and extensive experience hosting international events, Rhodes offers modern conference facilities, exceptional venues, luxury accommodation and incentive experiences for meetings, conferences and corporate events.'],
  ],
  gallery: [
    ['Lindos & the Acropolis', 'acropolis.jpg'],
    ['Rhodes Medieval City', 'old-town.jpg'],
    ['Beaches & Island Life', 'beach.jpg'],
  ],
};

const kos: IslandData = {
  name: 'Kos',
  heading: 'Kos: A Destination of Authentic Island Experiences',
  hero: 'kallithea.jpg',
  image: 'flower.jpg',
  eyebrow: 'About Kos',
  introduction: "Located in the southeastern Aegean Sea, Kos is one of Greece's most attractive island destinations, renowned for its beautiful coastline, rich cultural heritage and relaxed atmosphere. As the birthplace of Hippocrates, the father of medicine, the island combines centuries of history with a modern tourism offering, creating a destination that appeals to travellers of all ages and interests. From charming harbour towns and traditional villages to golden beaches and picturesque landscapes, Kos offers an authentic Greek island experience. Its excellent accessibility, extensive cycling network and welcoming atmosphere have established the island as a popular destination for leisure travel, groups and incentive programmes.",
  highlights: [
    [Landmark, 'Tourism in Kos', 'Kos offers a diverse tourism product supported by quality accommodation, modern hospitality infrastructure and cultural landmarks, gastronomy, outdoor activities, cycling, sailing, excursions and authentic local traditions. Its natural beauty, accessibility and high service standards suit leisure travel, tailor-made itineraries and group programmes.'],
    [Sparkles, 'Kos as a MICE Destination', 'Kos offers an ideal balance between business and leisure, with modern hotels and conference facilities, high-quality hospitality, excellent accessibility and a wide range of team-building and incentive experiences for successful events.'],
  ],
  gallery: [
    ['Heritage & Culture', 'kallithea.jpg'],
    ['Wellness & Nature', 'flower.jpg'],
    ['Sailing Experiences', 'sailing.jpg'],
  ],
};

function IslandPage({ island }: { island: IslandData }) {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-island-reveal]'));

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
    }, { threshold: 0.16 });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [island.name]);
  return (
    <div className="island-page">
      <PageSeo
        title={island.name === 'Rhodes' ? 'Rhodes DMC Services | Destination Management Company in Rhodes' : 'Kos DMC Services | Destination Management Company in Kos'}
        description={island.name === 'Rhodes' ? 'Discover Rhodes, one of Greece's leading island destinations for leisure travel, groups, MICE and events with Top Euro Travel.' : 'Discover Kos, an authentic island destination for leisure travel, groups, incentives and events with Top Euro Travel.'}
      />
      <PageHero
        title={<><Gold>{island.heading.split(':')[0]}</Gold>{island.heading.includes(':') ? `:${island.heading.split(':').slice(1).join(':')}` : ''}</>}
        breadcrumb={island.name}
        image={`${ASSET}/${island.hero}`}
      />

      <section className="section shell island-intro island-reveal" data-island-reveal>
        <div className="island-intro__copy">
          <span>{island.eyebrow}</span>
          <h2>{island.heading}</h2>
          <p>{island.introduction}</p>
          <Link className="button button--gold" to="/contact">PLAN YOUR {island.name.toUpperCase()} JOURNEY</Link>
        </div>
        <div className="island-intro__image"><Photo src={`${ASSET}/${island.image}`} alt={`${island.name} landscape`} /></div>
      </section>

      <section className="section--tight shell island-section island-reveal" data-island-reveal>
        <SectionTitle>Discover {island.name}</SectionTitle>
        <div className="island-highlights">
          {island.highlights.map(([Icon, title, copy]) => <IconFeature icon={Icon} title={title} key={title}>{copy}</IconFeature>)}
        </div>
      </section>

      <section className="section shell island-section island-reveal" data-island-reveal>
        <SectionTitle>Experience {island.name}</SectionTitle>
        <div className="island-gallery">
          {island.gallery.map(([title, image]) => (
            <article key={title}>
              <div><Photo src={`${ASSET}/${image}`} alt={title} /></div>
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export function RhodesPage() {
  return <IslandPage island={rhodes} />;
}

export function KosPage() {
  return <IslandPage island={kos} />;
}