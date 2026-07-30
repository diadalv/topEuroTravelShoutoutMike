import { Link } from 'react-router-dom';
import { Heart, Landmark, MapPin, Sparkles, Utensils, Waves, type LucideIcon } from 'lucide-react';
import { ASSET, Gold, IconFeature, PageHero, Photo, SectionTitle } from '@/components/travel/Shared';

type IslandData = {
  name: string;
  hero: string;
  image: string;
  eyebrow: string;
  introduction: string;
  highlights: Array<[LucideIcon, string, string]>;
  gallery: Array<[string, string]>;
};

const rhodes: IslandData = {
  name: 'Rhodes',
  hero: 'destinations-hero.jpg',
  image: 'lindos-aerial.jpg',
  eyebrow: 'The island of knights',
  introduction: 'Rhodes brings together a UNESCO-listed medieval city, the whitewashed beauty of Lindos, long beaches and a vibrant local culture. Our local team creates seamless island journeys shaped around your interests and pace.',
  highlights: [
    [Landmark, 'Medieval Heritage', 'Explore the Old Town, ancient landmarks and centuries of island history.'],
    [Waves, 'Beautiful Coastline', 'Discover sheltered bays, golden beaches and crystal-clear Aegean water.'],
    [Utensils, 'Local Gastronomy', 'Enjoy traditional villages, family-run tavernas and distinctive island flavors.'],
    [Heart, 'Authentic Hospitality', 'Meet local people and experience Rhodes with trusted destination experts.'],
  ],
  gallery: [
    ['Lindos & the Acropolis', 'acropolis.jpg'],
    ['Rhodes Medieval Old Town', 'old-town.jpg'],
    ['Beaches & Island Life', 'beach.jpg'],
  ],
};

const kos: IslandData = {
  name: 'Kos',
  hero: 'kallithea.jpg',
  image: 'flower.jpg',
  eyebrow: 'The island of Hippocrates',
  introduction: 'Kos blends ancient heritage, wellness traditions, sandy beaches and relaxed island living. From historic sites and cycling routes to authentic villages, it is an inviting base for a tailor-made Dodecanese escape.',
  highlights: [
    [Landmark, 'Ancient Culture', 'Visit the Asklepion and discover the island’s connection to Hippocrates.'],
    [Sparkles, 'Wellness & Nature', 'Slow down with thermal waters, peaceful landscapes and restorative experiences.'],
    [Waves, 'Sandy Beaches', 'Enjoy long coastlines, clear water and easy-going seaside communities.'],
    [MapPin, 'Island Discovery', 'Explore traditional villages, local farms and scenic routes across Kos.'],
  ],
  gallery: [
    ['Heritage & Culture', 'kallithea.jpg'],
    ['Wellness Experiences', 'flower.jpg'],
    ['Sailing from Kos', 'sailing.jpg'],
  ],
};

function IslandPage({ island }: { island: IslandData }) {
  return (
    <div className="island-page">
      <PageHero
        title={<><Gold>Discover</Gold> {island.name}</>}
        breadcrumb={island.name}
        image={`${ASSET}/${island.hero}`}
      />

      <section className="section shell island-intro">
        <div className="island-intro__copy">
          <span>{island.eyebrow}</span>
          <h2>Your journey through {island.name}</h2>
          <p>{island.introduction}</p>
          <Link className="button button--gold" to="/contact">PLAN YOUR {island.name.toUpperCase()} JOURNEY</Link>
        </div>
        <div className="island-intro__image"><Photo src={`${ASSET}/${island.image}`} alt={`${island.name} landscape`} /></div>
      </section>

      <section className="section--tight shell">
        <SectionTitle>Why Visit {island.name}?</SectionTitle>
        <div className="island-highlights">
          {island.highlights.map(([Icon, title, copy]) => <IconFeature icon={Icon} title={title} key={title}>{copy}</IconFeature>)}
        </div>
      </section>

      <section className="section shell">
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