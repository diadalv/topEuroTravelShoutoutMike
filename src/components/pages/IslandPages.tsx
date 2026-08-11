import {
  Gold,
  IconFeature,
  PageHero,
  PageSeo,
  Photo,
  SectionTitle,
  travelMedia,
} from '@/components/travel/Shared';
import {
  Bike,
  BriefcaseBusiness,
  CalendarDays,
  HeartPulse,
  Hotel,
  Landmark,
  Plane,
  Route,
  Ship,
  Waves,
  type LucideIcon,
} from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

type IslandFeature = [LucideIcon, string, string];

type IslandData = {
  name: string;
  heroLine: string;
  introHeading: string;
  hero: string;
  image: string;
  eyebrow: string;
  introduction: string;
  highlights: IslandFeature[];
  reasons: IslandFeature[];
  gallery: Array<[string, string]>;
};

const rhodes: IslandData = {
  name: 'Rhodes',
  heroLine: 'Where Heritage Meets the Aegean',
  introHeading: 'A Complete Destination for Leisure, Groups and Events',
  hero: 'destinations-rhodes-v2.jpg',
  image: 'lindos-aerial.jpg',
  eyebrow: 'About Rhodes',
  introduction:
    'Set in the southeastern Aegean, Rhodes combines UNESCO-listed heritage, renowned coastal resorts and well-developed tourism infrastructure. The Medieval City, Lindos, traditional villages and a varied coastline create exceptional possibilities for leisure programmes, groups and incentives. Excellent air connectivity, a long operating season and dependable local services make Rhodes one of the Mediterranean’s most versatile destinations.',
  highlights: [
    [
      Landmark,
      'Leisure & Group Programmes',
      'Accommodation, transfers, guided visits, excursions and tailored island experiences coordinated through one experienced local team.',
    ],
    [
      BriefcaseBusiness,
      'Meetings, Incentives & Events',
      'Conference hotels, distinctive venues and incentive activities supported by dependable planning and on-island operations.',
    ],
  ],
  reasons: [
    [
      Landmark,
      'UNESCO Heritage',
      'The Medieval City and Lindos add cultural depth to every programme.',
    ],
    [
      Plane,
      'Strong Air Connectivity',
      'Direct seasonal links connect Rhodes with major European markets.',
    ],
    [
      CalendarDays,
      'Long Tourism Season',
      'Reliable destination conditions from spring through late autumn.',
    ],
    [
      BriefcaseBusiness,
      'Groups & MICE Infrastructure',
      'Experienced hotels, venues and destination suppliers support complex programmes.',
    ],
    [
      Waves,
      'Diverse Coastline',
      'Beaches, cruises and contrasting east- and west-coast experiences.',
    ],
  ],
  gallery: [
    ['Lindos & the Acropolis', 'acropolis.jpg'],
    ['Medieval City & Heritage', 'old-town.jpg'],
    ['Beaches & Coastal Experiences', 'beach.jpg'],
  ],
};

const kos: IslandData = {
  name: 'Kos',
  heroLine: 'Where Heritage Meets Island Life',
  introHeading: 'A Versatile Destination for Leisure, Groups and Incentives',
  hero: 'destinations-kos-v2.jpg',
  image: 'flower.jpg',
  eyebrow: 'About Kos',
  introduction:
    'Kos brings together Hippocratic heritage, an inviting coastline and a relaxed island character. Its compact scale, excellent accessibility and developed hospitality infrastructure make programme logistics especially efficient. From Kos Town and the Asklepieion to traditional villages, cycling routes and nearby-island cruises, Kos is well suited to leisure travel, groups and incentive programmes.',
  highlights: [
    [
      Landmark,
      'Leisure & Group Programmes',
      'Resort stays, transfers, cultural visits, cycling, sailing and tailor-made excursions arranged around each group’s pace and needs.',
    ],
    [
      BriefcaseBusiness,
      'Meetings, Incentives & Events',
      'Modern hospitality, compact logistics and engaging team experiences create an effective balance of business and leisure.',
    ],
  ],
  reasons: [
    [
      Route,
      'Compact Island Logistics',
      'Short distances support smooth, well-paced itineraries and transfers.',
    ],
    [
      HeartPulse,
      'Hippocratic Heritage',
      'A distinctive cultural story centred on medicine, history and wellbeing.',
    ],
    [
      Bike,
      'Cycling & Outdoor Experiences',
      'Accessible routes, beaches and active experiences suit varied groups.',
    ],
    [
      Hotel,
      'Quality Resort Infrastructure',
      'A strong range of hotels and dependable hospitality services.',
    ],
    [
      Ship,
      'Nearby Island Programmes',
      'Easy access to sailing and day trips across the Dodecanese.',
    ],
  ],
  gallery: [
    ['Kos Town & Heritage', 'destinations-culture-v2.jpg'],
    ['Villages, Nature & Gastronomy', 'flower.jpg'],
    ['Sailing & Nearby Islands', 'sailing.jpg'],
  ],
};

function IslandPage({ island }: { island: IslandData }) {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-island-reveal]'),
    );
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
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
      {
        threshold: 0.15,
        rootMargin: '0px 0px -7% 0px',
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [island.name]);

  return (
    <div className="island-page">
      <PageSeo
        title={
          island.name === 'Rhodes'
            ? 'Rhodes DMC Services | Destination Management Company in Rhodes'
            : 'Kos DMC Services | Destination Management Company in Kos'
        }
        description={
          island.name === 'Rhodes'
            ? "Discover Rhodes, one of Greece's leading island destinations for leisure travel, groups, MICE and events with Top Euro Travel."
            : 'Discover Kos, an authentic island destination for leisure travel, groups, incentives and events with Top Euro Travel.'
        }
      />

      <PageHero
        title={
          <>
            <Gold>{island.name}</Gold>
            <br />
            {island.heroLine}
          </>
        }
        breadcrumb={island.name}
        image={travelMedia(island.hero)}
      />

      <section
        className="section shell island-intro island-reveal"
        data-island-reveal
      >
        <div className="island-intro__copy">
          <span>{island.eyebrow}</span>
          <h2>{island.introHeading}</h2>
          <p>{island.introduction}</p>

          <Link className="button button--gold" to="/contact">
            DISCUSS YOUR {island.name.toUpperCase()} PROGRAMME
          </Link>
        </div>

        <div className="island-intro__image">
          <Photo
            src={travelMedia(island.image)}
            alt={`${island.name} landscape`}
          />
        </div>
      </section>

      <section
        className="section--tight shell island-section island-reveal"
        data-island-reveal
      >
        <SectionTitle>Discover {island.name}</SectionTitle>

        <div className="island-highlights">
          {island.highlights.map(([Icon, title, copy]) => (
            <IconFeature icon={Icon} title={title} key={title}>
              {copy}
            </IconFeature>
          ))}
        </div>
      </section>

      <section
        className="section--tight shell island-section island-reasons-section island-reveal"
        data-island-reveal
      >
        <SectionTitle>Why {island.name} Works</SectionTitle>

        <div className="island-reasons island-page__reasons">
          {island.reasons.map(([Icon, title, copy]) => (
            <IconFeature icon={Icon} title={title} key={title}>
              {copy}
            </IconFeature>
          ))}
        </div>
      </section>

      <section
        className="section shell island-section island-reveal"
        data-island-reveal
      >
        <SectionTitle>Experience {island.name}</SectionTitle>

        <div className="island-gallery">
          {island.gallery.map(([title, image]) => (
            <article key={title}>
              <div>
                <Photo src={travelMedia(image)} alt={title} />
              </div>
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
