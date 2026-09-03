import { Gold, PageHero, PageSeo, Photo, travelMedia } from '@/components/travel/Shared';
import { normalizeWixMediaImage } from '@/config/wix-media';
import { services } from '@wix/bookings';
import { Clock3, Languages, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import "@/styles/excursions-list.css";

type Money = {
  value?: string;
  formattedValue?: string | null;
};

type BookingImage = string | {
  id?: string;
  url?: string;
  filename?: string;
  width?: number;
  height?: number;
};

type BookingServiceRecord = {
  _id?: string | null;
  name?: string | null;
  description?: string | null;
  tagLine?: string | null;
  sortOrder?: number | null;
  defaultCapacity?: number | null;
  hidden?: boolean | null;
  category?: { name?: string | null };
  onlineBooking?: { enabled?: boolean | null };
  payment?: {
    rateType?: string;
    fixed?: { price?: Money };
    varied?: { defaultPrice?: Money; minPrice?: Money };
    custom?: { description?: string | null };
  };
  media?: {
    mainMedia?: { image?: BookingImage };
    coverMedia?: { image?: BookingImage };
  };
  mainSlug?: { name?: string | null };
  supportedSlugs?: Array<{ name?: string | null }>;
};

type ExcursionCardRecord = {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  duration: string;
  image: string;
  price: string;
  bookingAvailable: boolean;
  destination: 'Rhodes' | 'Kos';
  byBoat: boolean;
};

function serviceSlug(service: BookingServiceRecord) {
  return service.mainSlug?.name?.trim()
    || service.supportedSlugs?.find((item) => item.name)?.name?.trim()
    || '';
}

function displayPrice(service: BookingServiceRecord) {
  const payment = service.payment;
  if (payment?.rateType === 'NO_FEE') return 'Free';

  const price = payment?.rateType === 'FIXED'
    ? payment.fixed?.price
    : payment?.varied?.minPrice || payment?.varied?.defaultPrice;

  if (price?.formattedValue) {
    return payment?.rateType === 'VARIED' ? `from ${price.formattedValue}` : price.formattedValue;
  }

  const numeric = Number(String(price?.value || '').replace(',', '.'));
  if (Number.isFinite(numeric) && numeric > 0) {
    return `${payment?.rateType === 'VARIED' ? 'from ' : ''}€${numeric.toFixed(0)}`;
  }

  return payment?.custom?.description?.trim() || 'Price on request';
}

function durationFromDescription(description?: string | null) {
  const quickFacts = description?.match(/QUICK FACTS\s*\n([\s\S]*?)(?:\n\s*\n|\nTOUR DESCRIPTION)/i)?.[1] || '';
  return quickFacts.match(/(?:^|·)\s*Duration:\s*([^·\n]+)/i)?.[1]?.trim() || 'Tour duration on request';
}

function excursionSearchText(service: BookingServiceRecord) {
  return [
    service.name,
    service.tagLine,
    service.description,
    service.mainSlug?.name,
  ].filter(Boolean).join(' ');
}

function excursionDestination(service: BookingServiceRecord): 'Rhodes' | 'Kos' {
  return /\bkos\b/i.test(excursionSearchText(service)) ? 'Kos' : 'Rhodes';
}

function excursionIsByBoat(service: BookingServiceRecord) {
  return /\b(boat|cruise|sailing|yacht|catamaran|ferry|symi|marmaris)\b/i.test([service.name, service.tagLine, service.mainSlug?.name].filter(Boolean).join(' '));
}

function toCard(service: BookingServiceRecord): ExcursionCardRecord | null {
  const id = service._id?.trim();
  const slug = serviceSlug(service);
  if (!id || !slug || service.hidden === true) return null;
  if (service.category?.name?.trim().toLowerCase() !== 'excursions') return null;

  const image = normalizeWixMediaImage(service.media?.mainMedia?.image)
    || normalizeWixMediaImage(service.media?.coverMedia?.image)
    || travelMedia('excursions-hero.jpg');

  return {
    id,
    title: service.name?.trim() || 'Excursion',
    slug,
    subtitle: service.tagLine?.trim() || 'Discover Rhodes with local experts.',
    duration: durationFromDescription(service.description),
    image,
    price: displayPrice(service),
    bookingAvailable: service.onlineBooking?.enabled === true,
    destination: excursionDestination(service),
    byBoat: excursionIsByBoat(service),
  };
}

async function loadVisibleExcursions() {
  const result = await services.queryServices().limit(100).find();
  return ((result.items || []) as unknown as BookingServiceRecord[])
    .map(toCard)
    .filter((item): item is ExcursionCardRecord => Boolean(item))
    .sort((a, b) => a.title.localeCompare(b.title));
}

function recordMatchesFilter(record: ExcursionCardRecord, filter: 'all' | 'rhodes' | 'kos' | 'boat') {
  if (filter === 'boat') return record.byBoat;
  if (filter === 'rhodes') return record.destination === 'Rhodes';
  if (filter === 'kos') return record.destination === 'Kos';
  return true;
}

export default function ExcursionsPage() {
  const [records, setRecords] = useState<ExcursionCardRecord[]>([]);
  const [activeFilter, setActiveFilter] = useState<'all' | 'rhodes' | 'kos' | 'boat'>('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    loadVisibleExcursions()
      .then((result) => {
        if (active) setRecords(result);
      })
      .catch((reason) => {
        console.error('Unable to load excursions:', reason);
        if (active) setError('Excursions are temporarily unavailable. Please try again shortly.');
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="excursions-list-page">
      <PageSeo
        title="Best Tours & Excursions in Rhodes | Top Euro Travel"
        description="Explore cruises, island tours, cultural discoveries and evening experiences in Rhodes with Top Euro Travel."
      />
      <PageHero
        className="excursions-list-hero"
        title={<><Gold>Tours &amp; Excursions</Gold> in Rhodes</>}
        breadcrumb="Excursions"
        image={travelMedia('excursions-hero.jpg')}
        description="Carefully selected tours, cruises and authentic local experiences in Rhodes."
      />

      <section className="shell excursions-list-intro">
        <span>DISCOVER RHODES</span>
        <h2>Experience the Island from a Unique Perspective</h2>
        <p>Discover Rhodes through carefully selected cruises, cultural tours, nature experiences and memorable evenings, each presented with clear practical information from our local team.</p>
      </section>

      <section className="shell excursions-list-content" aria-live="polite">
        {!loading && !error && records.length > 0 && (
          <div className="excursions-filter" role="group" aria-label="Filter excursions">
            <span className="excursions-filter__label">FILTER EXCURSIONS</span>
            <div className="excursions-filter__options">
              {([
                ['all', 'All'],
                ['rhodes', 'Rhodes'],
                ['kos', 'Kos'],
                ['boat', 'By Boat'],
              ] as const).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  className={'excursions-filter__button' + (activeFilter === value ? ' is-active' : '')}
                  aria-pressed={activeFilter === value}
                  onClick={() => setActiveFilter(value)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
        {loading && (
          <div className="excursions-list-state">
            <span /><span /><span />
            <p>Loading excursions…</p>
          </div>
        )}

        {!loading && error && <div className="excursions-list-state"><p>{error}</p></div>}

        {!loading && !error && records.length === 0 && (
          <div className="excursions-list-state">
            <MapPin aria-hidden="true" />
            <p>No excursions are currently available.</p>
          </div>
        )}

        {!loading && !error && records.length > 0 && (
          <div className="excursions-card-grid">
            {records.filter((record) => recordMatchesFilter(record, activeFilter)).map((record) => {
              const detailUrl = `/excursions/${record.slug}`;
              return (
                <article className="excursion-list-card" key={record.id}>
                  <Link className="excursion-list-card__image" to={detailUrl} aria-label={`View ${record.title}`}>
                    <Photo src={record.image} alt={record.title} />
                  </Link>
                  <div className="excursion-list-card__body">
                    <div className="excursion-list-card__eyebrow">
                      <span><Languages aria-hidden="true" />English</span>
                      <span><MapPin aria-hidden="true" />{record.destination}</span>
                      <span><Clock3 aria-hidden="true" />{record.duration}</span>
                    </div>
                    <h3><Link to={detailUrl}>{record.title}</Link></h3>
                    <p>{record.subtitle}</p>
                    <div className="excursion-list-card__footer">
                      <strong>{record.price}</strong>
                      <Link className="button button--gold button--tiny" to={detailUrl}>VIEW DETAILS</Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

    </div>
  );
}
