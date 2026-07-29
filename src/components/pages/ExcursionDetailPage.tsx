import { Link } from 'react-router-dom';
import {
  Accessibility,
  BusFront,
  CalendarDays,
  Camera,
  CircleCheck,
  CircleX,
  Clock3,
  House,
  Landmark,
  Languages,
  MapPin,
  MessageCircle,
  ShieldCheck,
  UsersRound,
  Utensils,
  Waves,
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

type Spec = {
  icon: LucideIcon;
  label: string;
  value: string;
};

const specs: Spec[] = [
  { icon: Clock3, label: 'Duration', value: '8 Hours (Approx.)' },
  { icon: Camera, label: 'Excursion Type', value: 'Cultural & Scenic' },
  { icon: Clock3, label: 'Departure Time', value: '08:30 AM' },
  { icon: MessageCircle, label: 'Language', value: 'English' },
  { icon: CalendarDays, label: 'Availability', value: 'Daily (Apr - Oct)' },
  { icon: UsersRound, label: 'Group Size', value: 'Min. 2 Guests - Max. 50 Guests' },
  { icon: BusFront, label: 'Pick-Up', value: 'From Selected Hotels' },
  { icon: Accessibility, label: 'Accessibility', value: 'Not wheelchair accessible' },
];

const highlights: Array<{ icon: LucideIcon; text: string }> = [
  { icon: Landmark, text: 'Visit the Acropolis of Lindos' },
  { icon: House, text: 'Explore the charming village of Lindos' },
  { icon: Waves, text: 'Relax at a beautiful sandy beach' },
  { icon: Camera, text: 'Stunning views & photo opportunities' },
  { icon: Utensils, text: 'Free time for lunch or local shopping' },
];

const itinerary = [
  {
    time: '08:30',
    image: 'excursions-hero.jpg',
    title: 'Hotel Pick-up',
    text: 'Pick-up from your hotel and scenic drive along the east coast of Rhodes with beautiful sea views.',
  },
  {
    time: '10:00',
    image: 'lindos.jpg',
    title: 'Lindos Village & Acropolis',
    text: 'Explore the traditional whitewashed village of Lindos at your own pace and visit the ancient Acropolis of Lindos overlooking the bay.',
  },
  {
    time: '12:30',
    image: 'old-town-street.jpg',
    title: 'Free Time in Lindos',
    text: 'Enjoy free time for lunch, shopping or relaxing in one of the village cafés.',
  },
  {
    time: '14:30',
    image: 'beach.jpg',
    title: 'Beach Stop',
    text: 'Relax and swim at a beautiful beach on the southern coast.',
  },
  {
    time: '16:00',
    image: 'prasonisi.jpg',
    title: 'Scenic Drive Back',
    text: 'Enjoy panoramic views on the way back to your hotel.',
  },
  {
    time: '17:00',
    image: 'about-hero.jpg',
    title: 'Drop-off at Hotel',
    text: 'Arrival back at your hotel with wonderful memories.',
  },
];

const included = [
  'Hotel pick-up & drop-off',
  'Comfortable, air-conditioned transport',
  'Professional English-speaking guide',
  'Acropolis of Lindos entrance fee',
  'Free time in Lindos',
  'Beach stop',
];

const notIncluded = [
  'Meals & drinks',
  'Personal expenses',
  'Sunbeds & umbrellas',
  'Tips (optional)',
];

const gallery = [
  ['lindos-aerial.jpg', 'Aerial view of Lindos'],
  ['old-town-street.jpg', 'Whitewashed street in Lindos'],
  ['acropolis.jpg', 'Ancient columns at the Acropolis'],
  ['beach.jpg', 'Turquoise bay in South Rhodes'],
  ['lindos.jpg', 'Lindos Acropolis at sunset'],
] as const;

function InfoList({ title, items, negative = false }: { title: string; items: string[]; negative?: boolean }) {
  return (
    <section className={`detail-info-list ${negative ? 'detail-info-list--negative' : ''}`}>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>
            {negative ? <CircleX /> : <CircleCheck />}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ExcursionDetailPage() {
  return (
    <div className="site-page excursion-detail-page">
        <PageHero
          className="excursion-detail-hero"
          title={<>Lindos &amp;<br />South Rhodes Tour</>}
          breadcrumb="Excursions  •  Lindos & South Rhodes Tour"
          image={`${ASSET}/lindos-aerial.jpg`}
        />

        <section className="excursion-summary excursions-shell">
          <article className="excursion-summary__intro">
            <p>
              Discover the timeless beauty of southern Rhodes on this unforgettable full-day excursion.
              Explore the iconic village of Lindos with its ancient Acropolis, enjoy free time to wander its
              charming streets, and relax at a stunning beach. Experience picture-perfect landscapes, local
              culture and authentic Greek hospitality.
            </p>
            <PlanePath />
          </article>

          <section className="excursion-specs" aria-label="Excursion information">
            {specs.map(({ icon: Icon, label, value }) => (
              <div className="excursion-spec" key={label}>
                <Icon />
                <div><strong>{label}</strong><span>{value}</span></div>
              </div>
            ))}
          </section>

          <aside className="excursion-price-card">
            <span>from</span>
            <strong>€79</strong>
            <p>per person</p>
            <Link className="button button--gold" to="/contact">BOOK / ENQUIRE NOW</Link>
            <div><ShieldCheck /><p><strong>Free Cancellation</strong><span>Up to 24h before departure</span></p></div>
          </aside>
        </section>

        <section className="excursion-highlights excursions-shell" aria-labelledby="highlights-title">
          <h2 id="highlights-title">Highlights</h2>
          <div className="excursion-highlights__grid">
            {highlights.map(({ icon: Icon, text }) => (
              <article key={text}><Icon /><p>{text}</p></article>
            ))}
          </div>
        </section>

        <section className="excursion-itinerary-layout excursions-shell">
          <div className="excursion-itinerary">
            <h2>Itinerary</h2>
            <ol>
              {itinerary.map((stop) => (
                <li key={stop.time}>
                  <time>{stop.time}</time>
                  <i aria-hidden="true" />
                  <div className="excursion-itinerary__photo">
                    <Photo src={`${ASSET}/${stop.image}`} alt="" />
                  </div>
                  <div>
                    <h3>{stop.title}</h3>
                    <p>{stop.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="excursion-inclusions">
            <InfoList title="What’s Included" items={included} />
            <InfoList title="Not Included" items={notIncluded} negative />
          </aside>
        </section>

        <section className="excursion-gallery excursions-shell" aria-labelledby="gallery-title">
          <div className="excursion-gallery__heading">
            <h2 id="gallery-title">Gallery</h2>
            <span aria-hidden="true" />
            <div><button type="button" aria-label="Previous gallery image">‹</button><button type="button" aria-label="Next gallery image">›</button></div>
          </div>
          <div className="excursion-gallery__grid">
            {gallery.map(([image, alt]) => (
              <div key={image}><Photo src={`${ASSET}/${image}`} alt={alt} /></div>
            ))}
          </div>
        </section>

        <RequestBanner />
    </div>
  );
}
