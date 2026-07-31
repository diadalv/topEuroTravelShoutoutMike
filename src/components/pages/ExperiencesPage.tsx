import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Anchor,
  Award,
  Camera,
  Castle,
  Crown,
  Footprints,
  Heart,
  MapPin,
  Mountain,
  Palmtree,
  Sailboat,
  Sparkles,
  Star,
  Sun,
  Users,
  Utensils,
  Waves,
  type LucideIcon,
} from 'lucide-react';
import {
  ASSET,
  Gold,
  PageHero,
  PageSeo,
  Photo,
  PlanePath,
  RequestBanner,
  Stat,
} from '@/components/travel/Shared';

type ExperienceCategory = {
  title: string;
  icon: LucideIcon;
  image: string;
};

const categories: ExperienceCategory[] = [
  { title: 'All Experiences', icon: Sparkles, image: '' },
  { title: 'Culture & Heritage', icon: Castle, image: 'old-town.jpg' },
  { title: 'Gastronomy', icon: Utensils, image: 'food.jpg' },
  { title: 'Island Tours', icon: MapPin, image: 'lindos-aerial.jpg' },
  { title: 'Boat Trips & Sailing', icon: Sailboat, image: 'sailing.jpg' },
  { title: 'Adventure & Nature', icon: Mountain, image: 'butterflies-entry.jpg' },
  { title: 'Active Experiences', icon: Footprints, image: 'prasonisi.jpg' },
];

const recommendations = [
  { title: 'Medieval City of Rhodes', copy: "Explore one of Europe's best-preserved medieval settlements with an experienced guide, from cobbled alleys and historic monuments to vibrant squares.", image: 'old-town.jpg', icon: Castle },
  { title: 'Cooking Lessons & Wine Tasting', copy: 'Discover authentic Greek flavours through traditional recipes, regional ingredients and a carefully selected local wine tasting.', image: 'food.jpg', icon: Utensils },
  { title: 'Island Tour', copy: 'Discover iconic landmarks, picturesque villages and breathtaking landscapes in a carefully designed full-day experience combining culture, history and local traditions.', image: 'monolithos.jpg', icon: MapPin },
  { title: 'Symi Island & St George Bay', copy: 'Cruise across the Aegean to colourful Symi and complete the day with a refreshing swim in spectacular St George Bay.', image: 'marina.jpg', icon: Sailboat },
  { title: 'Chalki Island', copy: 'Experience authentic Greek island life at a slower pace, from Chalki\'s colourful harbour and picturesque alleys to its relaxed Dodecanese atmosphere.', image: 'haraki.jpg', icon: Anchor },
  { title: 'Famous Beaches of Rhodes', copy: 'Spend a relaxing day at sea discovering beautiful beaches and secluded bays, with swimming stops in crystal-clear waters.', image: 'beach.jpg', icon: Waves },
  { title: 'Visit to Asia', copy: 'Experience the nearby Turkish coast on a day trip to Marmaris, Fethiye or Bodrum, with local markets, authentic flavours and a different side of the Aegean.', image: 'marina.jpg', icon: Landmark },
  { title: 'Lindos Village Exploration', copy: 'Explore whitewashed houses, narrow alleys, local shops and the impressive hilltop Acropolis overlooking the Aegean Sea.', image: 'acropolis.jpg', icon: Castle },
  { title: 'Sailing Cruises & Private Yacht Rentals', copy: 'Explore the Aegean with private yacht charters and sailing experiences tailored for romantic escapes, celebrations or group outings.', image: 'sailing.jpg', icon: Sailboat },
  { title: 'Jeep Safari', copy: 'Venture off the beaten track to hidden landscapes, traditional villages and viewpoints inaccessible by conventional routes.', image: 'prasonisi.jpg', icon: Mountain },
  { title: 'E-bike Tours', copy: 'Cycle through scenic landscapes, coastal routes and villages on guided or self-guided experiences designed for enjoyable, sustainable exploration.', image: 'local-life.jpg', icon: Footprints },
  { title: 'Hiking Activities', copy: 'Follow carefully selected trails with experienced guides and discover natural landmarks, Greek countryside and hidden corners.', image: 'butterflies-entry.jpg', icon: Footprints },
];

const trustItems = [
  [Users, 'Leisure Travellers', 'Memorable experiences for every travel style'],
  [Users, 'Groups', 'Activities shaped around group requirements'],
  [Award, 'Incentive Programmes', 'Experiences aligned with programme objectives'],
  [Sparkles, 'Tailor-Made', 'Designed for every interest and occasion'],
] as const;

export default function ExperiencesPage() {
  const [activeCategory, setActiveCategory] = useState('All Experiences');
  const visibleCategories = activeCategory === 'All Experiences'
    ? categories.slice(1)
    : categories.filter(({ title }) => title === activeCategory);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-experience-reveal]'));
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
    <div className="experiences-page">
      <PageSeo title="Curated Experiences in Greece | Top Euro Travel" description="Discover curated experiences in Greece, from cultural tours and gastronomy to sailing cruises, outdoor activities and tailor-made programmes." />
        <PageHero
          className="experiences-hero"
          title={<><Gold>Curated</Gold> Experiences</>}
          breadcrumb="Experiences"
          image={`${ASSET}/experiences-hero.jpg`}
          description="Cultural discoveries, authentic gastronomy, sailing adventures and outdoor activities tailored to every interest."
        />

        <div className="shell experiences-content">
          <nav className="experience-category-bar experience-reveal" aria-label="Experience categories" data-experience-reveal>
            {categories.map(({ title, icon: Icon }) => (
              <button
                type="button"
                key={title}
                className={activeCategory === title ? 'is-active' : ''}
                aria-pressed={activeCategory === title}
                onClick={() => setActiveCategory(title)}
              >
                <Icon />
                <span>{title}</span>
              </button>
            ))}
          </nav>

          <section className="experience-intro experience-reveal" data-experience-reveal>
            <div className="experience-intro__copy">
              <h2>Experiences Designed Around You</h2>
              <p>From cultural discoveries and authentic gastronomy to sailing adventures and outdoor activities, our curated experiences showcase the unique character of each destination. Whether for leisure travellers, groups or incentive programmes, we create memorable experiences tailored to every interest, travel style and occasion.</p>
              <div className="experience-intro__actions">
                <Link className="button button--navy" to="/excursions">DISCOVER ALL EXPERIENCES</Link>
                <Link className="experience-circle-arrow" to="/excursions" aria-label="Discover all experiences">→</Link>
              </div>
              <PlanePath />
            </div>

            <div className="experience-trust-panel">
              {trustItems.map(([Icon, title, copy]) => (
                <div className="experience-trust-item" key={title}>
                  <Icon />
                  <strong>{title}</strong>
                  <span>{copy}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="experience-collection experience-reveal" aria-labelledby="experience-collection-title" data-experience-reveal>
            <div className="experience-collection__heading">
              <span>CURATED IN RHODES &amp; KOS</span>
              <h2 id="experience-collection-title">Choose Your Experience</h2>
              <p>Choose from culture, gastronomy, island tours, sailing and outdoor activities, or ask our team to create something unique.</p>
            </div>
            <div className={`experience-card-grid${visibleCategories.length === 1 ? ' experience-card-grid--single' : ''}`} aria-live="polite">
            {visibleCategories.map(({ title, icon: Icon, image }) => (
              <article className="experience-tile card" key={title}>
                <Photo src={`${ASSET}/${image}`} alt={title} />
                <span className="experience-tile__icon"><Icon /></span>
                <h3>{title}</h3>
              </article>
            ))}
            </div>
          </section>

          <section className="experience-recommendations experience-reveal" data-experience-reveal>
            <h2>Explore Our Experiences</h2>
            <div className="experience-recommendation-grid">
              {recommendations.map(({ title, copy, image, icon: Icon }) => (
                <article className="recommendation-card card" key={title}>
                  <Photo src={`${ASSET}/${image}`} alt={title} />
                  <span className="recommendation-card__icon"><Icon /></span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                    <Link to="/excursions">EXPLORE EXPERIENCE <span>→</span></Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="experience-proof-strip experience-reveal" data-experience-reveal>
            <Stat value="1989" label="Established" />
            <Stat value="100K+" label="Guests Annually" />
            <Stat value="200+" label="Hotel Partners" />
            <Stat value="24/7" label="Support" />
            <div className="experience-iata">
              <Award />
              <strong>IATA</strong>
              <span>ACCREDITED AGENT</span>
            </div>
          </section>
        </div>

        <div className="experience-request-wrap experience-reveal" data-experience-reveal>
          <RequestBanner title="Looking for Something Different?" subtitle="Our team can design tailor-made programmes, exclusive activities and special-interest experiences around your requirements." />
        </div>
    </div>
  );
}
