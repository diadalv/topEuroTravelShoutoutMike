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
  { title: 'Culture & History', icon: Castle, image: 'acropolis.jpg' },
  { title: 'Food & Wine', icon: Utensils, image: 'food.jpg' },
  { title: 'Sailing Adventures', icon: Sailboat, image: 'sailing.jpg' },
  { title: 'Wellness & Spa', icon: Palmtree, image: 'nightlife.jpg' },
  { title: 'Nature & Hiking', icon: Footprints, image: 'prasonisi.jpg' },
  { title: 'Local Life', icon: Users, image: 'local-life.jpg' },
  { title: 'Private Luxury', icon: Crown, image: 'haraki.jpg' },
  { title: 'Beaches & Relaxation', icon: Waves, image: 'beach.jpg' },
  { title: 'Water Sports', icon: Anchor, image: 'water-sports.jpg' },
  { title: 'Photography Tours', icon: Camera, image: 'lindos-aerial.jpg' },
  { title: 'Sunset Experiences', icon: Sun, image: 'sunset.jpg' },
  { title: 'Family Fun', icon: Heart, image: 'kallithea.jpg' },
];

const recommendations = [
  {
    title: 'Romantic Escape',
    copy: 'Private moments in enchanting settings. Sunsets, fine dining & unforgettable views.',
    image: 'sunset.jpg',
    icon: Heart,
  },
  {
    title: 'Adventure Day',
    copy: 'Hike, explore, and feel the thrill of Rhodes & Kos landscapes.',
    image: 'prasonisi.jpg',
    icon: Mountain,
  },
  {
    title: 'Authentic Island Life',
    copy: 'Live like a local. Traditions, flavors and warm hospitality.',
    image: 'local-life.jpg',
    icon: Users,
  },
];

const trustItems = [
  [MapPin, 'Locally Curated', 'By experts who know every corner'],
  [Users, 'Authentic Encounters', 'Real people, real stories'],
  [Users, 'Small Groups', 'Personal, comfortable and flexible'],
  [Award, 'Premium Quality', 'Carefully selected for you'],
  [Heart, 'Responsible Travel', 'Supporting local communities'],
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
        <PageHero
          className="experiences-hero"
          title={<><Gold>Unique</Gold> Experiences</>}
          breadcrumb="Experiences"
          image={`${ASSET}/experiences-hero.jpg`}
          description={(
            <>
              Handpicked moments to make your journey unforgettable.<br />
              From timeless traditions to hidden gems, every experience is<br />
              crafted with care and local expertise.
            </>
          )}
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
              <h2>Crafted with Passion. Shared with You.</h2>
              <p>
                Our experiences are more than activities—they are connections. We open doors to
                authentic encounters, breathtaking landscapes, and unforgettable stories across
                Rhodes &amp; Kos. Let our local experts guide you to the highlights and hidden treasures.
              </p>
              <div className="experience-intro__actions">
                <Link className="button button--navy" to="/destinations">DISCOVER ALL EXPERIENCES</Link>
                <Link className="experience-circle-arrow" to="/destinations" aria-label="Discover all experiences">→</Link>
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
              <span>EXPLORE RHODES &amp; KOS</span>
              <h2 id="experience-collection-title">Choose Your Experience</h2>
              <p>Browse locally curated moments, then let our team tailor every detail around your journey.</p>
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
            <h2>Recommended For You</h2>
            <div className="experience-recommendation-grid">
              {recommendations.map(({ title, copy, image, icon: Icon }) => (
                <article className="recommendation-card card" key={title}>
                  <Photo src={`${ASSET}/${image}`} alt={title} />
                  <span className="recommendation-card__icon"><Icon /></span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                    <Link to="/destinations">EXPLORE EXPERIENCE <span>→</span></Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="experience-proof-strip experience-reveal" data-experience-reveal>
            <div className="experience-quote">
              <span className="experience-quote__mark">“</span>
              <p>Top Euro Travel made our trip truly extraordinary. Every experience was seamless, authentic and beyond our expectations.</p>
            </div>
            <div className="experience-review">
              <div aria-label="5 stars">★★★★★</div>
              <strong>Sarah L.</strong>
              <span>Event Manager, UK</span>
            </div>
            <Stat value="15+" label="Years of Experience" />
            <Stat value="10K+" label="Happy Clients" />
            <Stat value="500+" label="Events & Groups" />
            <Stat value="24/7" label="On-line Support" />
            <div className="experience-iata">
              <Award />
              <strong>IATA</strong>
              <span>ACCREDITED AGENT</span>
            </div>
          </section>
        </div>

        <div className="experience-request-wrap experience-reveal" data-experience-reveal>
          <RequestBanner />
        </div>
    </div>
  );
}
