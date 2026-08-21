import {
  Gold,
  IconFeature,
  PageHero,
  PageSeo,
  Photo,
  SectionTitle,
  travelMedia,
} from '@/components/travel/Shared';
import '@/styles/pages-islands.css';
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
import { useEffect, useState } from 'react';
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
  gallery: Array<[string, string, string]>;
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
    [
      'Lindos & the Acropolis',
      'acropolis.jpg',
      'Whitewashed lanes lead to the ancient Acropolis, with panoramic Aegean views and layers of Rhodian history.',
    ],
    [
      'Medieval City & Heritage',
      'old-town.jpg',
      'Walk through fortified gates into a living medieval city, where Gothic architecture, Ottoman traces and local life share the same streets.',
    ],
    [
      'Beaches & Coastal Experiences',
      'beach.jpg',
      'Discover sheltered bays and open-water beaches, with time for swimming, waterside dining and relaxed journeys along Rhodes’ varied coastline.',
    ],
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
    [
      'Kos Town & Heritage',
      'destinations-culture-v2.jpg',
      'Explore ancient ruins, Italian-era architecture and lively harbour streets, all woven into the easy rhythm of modern Kos Town.',
    ],
    [
      'Villages, Nature & Gastronomy',
      'flower.jpg',
      'Travel inland for mountain villages, fertile landscapes and traditional flavours shaped by Kos’s farming heritage and unhurried island life.',
    ],
    [
      'Sailing & Nearby Islands',
      'sailing.jpg',
      'Set out across clear Aegean waters for quiet coves, swimming stops and easy visits to neighbouring islands.',
    ],
  ],
};

function IslandPage({ island }: { island: IslandData }) {
  const [activeExperience, setActiveExperience] = useState(0);
  const [experienceTouchStart, setExperienceTouchStart] = useState<number | null>(
    null,
  );
  const [isMobileGallery, setIsMobileGallery] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(max-width: 640px)').matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    const updateGalleryMode = () => setIsMobileGallery(mediaQuery.matches);

    updateGalleryMode();
    mediaQuery.addEventListener('change', updateGalleryMode);

    return () => mediaQuery.removeEventListener('change', updateGalleryMode);
  }, []);

  useEffect(() => {
    setActiveExperience(0);
  }, [island.name]);

  useEffect(() => {
    if (
      !isMobileGallery ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveExperience(
        (current) => (current + 1) % island.gallery.length,
      );
    }, 3500);

    return () => window.clearInterval(timer);
  }, [isMobileGallery, island.gallery.length, island.name]);

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

        <div className="island-highlights island-highlights--open">
          {island.highlights.map(([Icon, title, copy]) => (
            <article className="island-highlight" key={title}>
              <span className="island-highlight__icon" aria-hidden="true">
                <Icon />
              </span>

              <div className="island-highlight__content">
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}

          <span className="island-highlights__divider" aria-hidden="true" />
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

        <div
          className="island-gallery"
          role={isMobileGallery ? 'region' : undefined}
          aria-roledescription={isMobileGallery ? 'carousel' : undefined}
          aria-label={isMobileGallery ? `Experience ${island.name}` : undefined}
          onTouchStart={(event) => {
            setExperienceTouchStart(event.touches[0]?.clientX ?? null);
          }}
          onTouchEnd={(event) => {
            const touchEnd = event.changedTouches[0]?.clientX;

            if (experienceTouchStart === null || touchEnd === undefined) {
              setExperienceTouchStart(null);
              return;
            }

            const distance = experienceTouchStart - touchEnd;

            if (Math.abs(distance) >= 45) {
              setActiveExperience((current) =>
                distance > 0
                  ? (current + 1) % island.gallery.length
                  : (current - 1 + island.gallery.length) %
                    island.gallery.length,
              );
            }

            setExperienceTouchStart(null);
          }}
        >
          {island.gallery.map(([title, image, copy], index) => {
            const experienceId = `island-experience-${island.name.toLowerCase()}-${index}`;
            const titleId = `${experienceId}-title`;
            const descriptionId = `${experienceId}-description`;
            const isActive = index === activeExperience;

            return (
              <article
                className={`island-experience-card${isActive ? ' is-active' : ''}`}
                key={title}
                tabIndex={!isMobileGallery || isActive ? 0 : -1}
                aria-hidden={isMobileGallery && !isActive}
                aria-labelledby={titleId}
                aria-describedby={descriptionId}
              >
                <div className="island-gallery__media">
                  <Photo src={travelMedia(image)} alt={title} />

                  <div className="island-gallery__overlay">
                    <p id={descriptionId}>{copy}</p>
                  </div>
                </div>
                <h3 id={titleId}>{title}</h3>
              </article>
            );
          })}
        </div>

        <div
          className="island-gallery__dots"
          role="group"
          aria-label={`Choose an Experience ${island.name} slide`}
        >
          {island.gallery.map(([title], index) => (
            <button
              className={index === activeExperience ? 'is-active' : ''}
              key={title}
              type="button"
              aria-label={`Show ${title}`}
              aria-pressed={index === activeExperience}
              onClick={() => setActiveExperience(index)}
            />
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
