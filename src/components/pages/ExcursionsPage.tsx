import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  CalendarCheck2,
  Clock3,
  Headphones,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import {
  ASSET,
  PageHero,
  Photo,
  PlanePath,
  RequestBanner,
} from '@/components/travel/Shared';
import '@/styles/travel.css';
import '@/styles/pages-excursions.css';

type Excursion = {
  title: string;
  badge: string;
  filter: string;
  image: string;
  duration: string;
  format: string;
  description: string;
  price: number;
  popularity: number;
};

const categories = [
  'All',
  'Culture & History',
  'Nature & Adventure',
  'Sea & Sailing',
  'Family Fun',
  'Food & Wine',
];

const excursions: Excursion[] = [
  {
    title: 'Lindos & South Rhodes Tour',
    badge: 'CULTURE & HISTORY',
    filter: 'Culture & History',
    image: 'lindos-aerial.jpg',
    duration: '8 Hours',
    format: 'Full Day Tour',
    description: 'Discover Lindos village, the Acropolis, and stunning coastal views.',
    price: 79,
    popularity: 12,
  },
  {
    title: 'Symi Island Cruise',
    badge: 'SEA & SAILING',
    filter: 'Sea & Sailing',
    image: 'marina.jpg',
    duration: '8 Hours',
    format: 'Full Day Tour',
    description: 'Sail to the picturesque island of Symi and enjoy free time to explore.',
    price: 79,
    popularity: 11,
  },
  {
    title: 'Valley of the Butterflies',
    badge: 'NATURE & ADVENTURE',
    filter: 'Nature & Adventure',
    image: 'butterflies.jpg',
    duration: '5 Hours',
    format: 'Half Day Tour',
    description: 'Walk through lush nature trails and witness thousands of butterflies in summer.',
    price: 49,
    popularity: 10,
  },
  {
    title: 'Old Town Walking Tour',
    badge: 'CULTURE & HISTORY',
    filter: 'Culture & History',
    image: 'acropolis.jpg',
    duration: '3 Hours',
    format: 'Half Day Tour',
    description: 'Step back in time and explore the medieval Old Town of Rhodes.',
    price: 39,
    popularity: 9,
  },
  {
    title: 'Nisyros Volcano Experience',
    badge: 'NATURE & ADVENTURE',
    filter: 'Nature & Adventure',
    image: 'monolithos.jpg',
    duration: '8 Hours',
    format: 'Full Day Tour',
    description: 'Visit the active volcano island and relax in natural hot springs.',
    price: 79,
    popularity: 8,
  },
  {
    title: '3 Island Boat Trip',
    badge: 'SEA & SAILING',
    filter: 'Sea & Sailing',
    image: 'sailing.jpg',
    duration: '8 Hours',
    format: 'Full Day Tour',
    description: 'Discover three stunning islands with crystal-clear waters and local charm.',
    price: 75,
    popularity: 7,
  },
  {
    title: 'Water Activity Experience',
    badge: 'ADVENTURE & FUN',
    filter: 'Family Fun',
    image: 'water-sports.jpg',
    duration: '2-4 Hours',
    format: 'Half Day Tour',
    description: 'Choose from jet ski, banana boat, SUP or more exciting water activities.',
    price: 45,
    popularity: 6,
  },
  {
    title: 'Jeep Safari',
    badge: 'ADVENTURE & NATURE',
    filter: 'Nature & Adventure',
    image: 'local-life.jpg',
    duration: '6 Hours',
    format: 'Half / Full Day',
    description: 'Off-road adventure through mountains, villages and scenic viewpoints.',
    price: 69,
    popularity: 5,
  },
  {
    title: 'Sunset Cruise',
    badge: 'SEA & SAILING',
    filter: 'Sea & Sailing',
    image: 'sunset.jpg',
    duration: '3 Hours',
    format: 'Evening Tour',
    description: 'Relax on a sunset cruise with drinks, music and magical views.',
    price: 49,
    popularity: 4,
  },
  {
    title: 'Traditional Villages Tour',
    badge: 'CULTURE & HISTORY',
    filter: 'Culture & History',
    image: 'old-town.jpg',
    duration: '6 Hours',
    format: 'Half Day Tour',
    description: 'Visit charming traditional villages and experience authentic local life.',
    price: 55,
    popularity: 3,
  },
  {
    title: 'Thermal Springs',
    badge: 'NATURE & WELLNESS',
    filter: 'Nature & Adventure',
    image: 'kallithea.jpg',
    duration: '5 Hours',
    format: 'Half Day Tour',
    description: 'Soak in healing thermal waters and enjoy relaxation in nature.',
    price: 49,
    popularity: 2,
  },
  {
    title: 'Wine Tasting Journey',
    badge: 'FOOD & WINE',
    filter: 'Food & Wine',
    image: 'food.jpg',
    duration: '4 Hours',
    format: 'Half Day Tour',
    description: 'Visit local wineries, taste premium wines and learn local secrets.',
    price: 65,
    popularity: 1,
  },
];

const bookingBenefits: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: Award, title: 'Local Experts', text: 'Handpicked experiences by our destination specialists.' },
  { icon: ShieldCheck, title: 'Best Quality', text: 'Carefully selected partners ensuring safety & quality.' },
  { icon: Headphones, title: '24/7 Support', text: "We're here for you before, during and after your tour." },
  { icon: CalendarCheck2, title: 'Flexible Booking', text: 'Easy changes & free cancellation on most experiences.' },
];

function ExcursionCard({ excursion }: { excursion: Excursion }) {
  return (
    <article className="excursion-card">
      <div className="excursion-card__image">
        <Photo src={`${ASSET}/${excursion.image}`} alt={excursion.title} />
        <span>{excursion.badge}</span>
      </div>
      <div className="excursion-card__body">
        <h2>{excursion.title}</h2>
        <div className="excursion-card__meta">
          <span><Clock3 />{excursion.duration}</span>
          <span><CalendarCheck2 />{excursion.format}</span>
        </div>
        <p>{excursion.description}</p>
        <div className="excursion-card__footer">
          <div><small>from</small><strong>€{excursion.price}</strong></div>
          <Link className="button button--navy" to="/excursions/lindos-south-rhodes-tour">
            VIEW DETAILS
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ExcursionsPage() {
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('popular');

  const visibleExcursions = useMemo(() => {
    const filtered = category === 'All'
      ? [...excursions]
      : excursions.filter((excursion) => excursion.filter === category);

    if (sort === 'price-asc') return filtered.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') return filtered.sort((a, b) => b.price - a.price);
    if (sort === 'name') return filtered.sort((a, b) => a.title.localeCompare(b.title));
    return filtered.sort((a, b) => b.popularity - a.popularity);
  }, [category, sort]);

  return (
    <div className="site-page excursions-page">
        <PageHero
          className="excursions-hero"
          title="Excursions"
          breadcrumb="Excursions"
          image={`${ASSET}/excursions-hero.jpg`}
        />

        <section className="excursions-catalog excursions-shell" aria-labelledby="excursions-intro">
          <div className="excursions-catalog__intro">
            <p id="excursions-intro">
              Explore the best of Rhodes and beyond with our handpicked excursions.<br />
              Authentic experiences, local insights, and unforgettable memories await.
            </p>
          </div>

          <div className="excursions-toolbar">
            <div className="excursions-filters" role="group" aria-label="Filter excursions by category">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={category === item ? 'is-active' : ''}
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <label className="excursions-sort">
              <span>Sort by:</span>
              <select value={sort} onChange={(event) => setSort(event.target.value)}>
                <option value="popular">Most Popular</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </label>
          </div>

          <div className="excursions-grid" aria-live="polite">
            {visibleExcursions.map((excursion) => (
              <ExcursionCard key={excursion.title} excursion={excursion} />
            ))}
          </div>
        </section>

        <section className="booking-benefits excursions-shell" aria-labelledby="booking-benefits-title">
          <div className="booking-benefits__title">
            <h2 id="booking-benefits-title">Why book with us</h2>
            <PlanePath />
          </div>
          <div className="booking-benefits__grid">
            {bookingBenefits.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon />
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <RequestBanner
          title="Have a special request?"
          subtitle="We can design a custom excursion just for you."
        />
    </div>
  );
}
