import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ExcursionCatalogService, type ExcursionCatalogRecord } from '@/integrations';
import {
  Accessibility,
  BusFront,
  CalendarDays,
  Camera,
  ChevronLeft,
  ChevronRight,
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
import { PageHero, Photo, PlanePath, RequestBanner } from '@/components/travel/Shared';

type ExcursionRecord = ExcursionCatalogRecord & Record<string, unknown>;
type Spec = { icon: LucideIcon; label: string; value: string };

function richTextToText(value?: unknown) {
  if (!value) return '';
  const html = typeof value === 'string' ? value : JSON.stringify(value);
  if (typeof window === 'undefined') return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const document = new DOMParser().parseFromString(html, 'text/html');
  return (document.body.textContent || '').replace(/\s+/g, ' ').trim();
}

function richTextList(value?: unknown) {
  if (!value) return [];
  const html = typeof value === 'string' ? value : JSON.stringify(value);
  if (typeof window === 'undefined') return [richTextToText(html)].filter(Boolean);
  const document = new DOMParser().parseFromString(html, 'text/html');
  const listItems = Array.from(document.querySelectorAll('li'))
    .map((item) => (item.textContent || '').replace(/\s+/g, ' ').trim())
    .filter(Boolean);
  return listItems.length ? listItems : [richTextToText(html)].filter(Boolean);
}

function iconForHighlight(text: string): LucideIcon {
  const value = text.toLowerCase();
  if (/acropolis|castle|historic|monument|temple/.test(value)) return Landmark;
  if (/village|town|city|street/.test(value)) return House;
  if (/boat|sea|beach|swim|bay|coast/.test(value)) return Waves;
  if (/food|lunch|wine|restaurant|shopping/.test(value)) return Utensils;
  if (/view|photo|panoram/.test(value)) return Camera;
  return MapPin;
}

function timeToMinutes(time?: string) {
  const match = time?.match(/^(\d{1,2}):(\d{2})/);
  return match ? Number(match[1]) * 60 + Number(match[2]) : null;
}

function minutesToTime(total: number) {
  const normalized = ((Math.round(total / 5) * 5) + 1440) % 1440;
  return `${String(Math.floor(normalized / 60)).padStart(2, '0')}:${String(normalized % 60).padStart(2, '0')}`;
}

function itineraryTimes(start: string | undefined, end: string | undefined, count: number) {
  const startMinutes = timeToMinutes(start) ?? 8 * 60 + 30;
  let endMinutes = timeToMinutes(end) ?? startMinutes + Math.max(count - 1, 1) * 90;
  if (endMinutes <= startMinutes) endMinutes += 1440;
  if (count <= 1) return [minutesToTime(startMinutes)];
  return Array.from({ length: count }, (_, index) =>
    minutesToTime(startMinutes + ((endMinutes - startMinutes) * index) / (count - 1)),
  );
}

function uniqueImages(record: ExcursionRecord) {
  return [
    record.mainImage,
    record.galleryImage1,
    record.galleryImage2,
    record.galleryImage3,
    record.coverImage,
  ].filter((image, index, array): image is string =>
    typeof image === 'string' && Boolean(image) && array.indexOf(image) === index,
  );
}

function InfoList({ title, entries, negative = false }: { title: string; entries: string[]; negative?: boolean }) {
  return (
    <section className={`detail-info-list${negative ? ' detail-info-list--negative' : ''}`}>
      <h2>{title}</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry}>
            {negative ? <CircleX aria-hidden="true" /> : <CircleCheck aria-hidden="true" />}
            <span>{entry}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ExcursionDetailPage() {
  const { slug = '' } = useParams();
  const [record, setRecord] = useState<ExcursionRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [galleryStart, setGalleryStart] = useState(0);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');

    ExcursionCatalogService.getBySlug(slug)
      .then((excursion) => {
        if (!active) return;
        setRecord((excursion as ExcursionRecord | null) || null);
        if (!excursion) setError('We could not find this excursion.');
      })
      .catch((reason) => {
        if (!active) return;
        console.error('Unable to load excursion:', reason);
        setError('This excursion is temporarily unavailable. Please try again shortly.');
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [slug]);

  useEffect(() => {
    if (!record) return;
    const previousTitle = document.title;
    document.title = record.seoTitle || `${record.title} | Top Euro Travel`;
    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }
    description.content = record.seoDescription || record.shortDescription || '';
    return () => {
      document.title = previousTitle;
      if (description && previousDescription !== undefined) description.content = previousDescription;
    };
  }, [record]);

  const highlights = useMemo(() => richTextList(record?.highlights), [record]);
  const itinerary = useMemo(() => richTextList(record?.itinerary), [record]);
  const included = useMemo(() => richTextList(record?.included), [record]);
  const notIncluded = useMemo(() => richTextList(record?.notIncluded), [record]);
  const importantInfo = useMemo(() => richTextList(record?.importantInfo), [record]);
  const images = useMemo(() => (record ? uniqueImages(record) : []), [record]);
  const times = useMemo(() => itineraryTimes(record?.startTime, record?.endTime, itinerary.length), [record, itinerary.length]);

  if (loading) {
    return (
      <div className="excursion-detail-page excursion-detail-state" aria-live="polite">
        <div className="excursion-loading shell"><span /><span /><span /><p>Loading excursion details…</p></div>
      </div>
    );
  }

  if (!record || error) {
    return (
      <div className="excursion-detail-page excursion-detail-state">
        <section className="excursion-not-found shell">
          <MapPin aria-hidden="true" />
          <h1>Excursion not found</h1>
          <p>{error || 'This excursion is not currently available.'}</p>
          <Link className="button button--navy" to="/experiences">EXPLORE EXPERIENCES</Link>
        </section>
      </div>
    );
  }

  const specs: Spec[] = [
    { icon: Clock3, label: 'Duration', value: record.duration || 'Full-day experience' },
    { icon: Camera, label: 'Excursion Type', value: record.tourGroup || 'Cultural & Scenic' },
    { icon: Clock3, label: 'Departure Time', value: record.startTime || 'Confirmed after booking' },
    { icon: Languages, label: 'Language', value: record.language || 'English' },
    { icon: CalendarDays, label: 'Availability', value: record.operatingDays || 'Selected days' },
    { icon: UsersRound, label: 'Group Size', value: record.capacity ? `Up to ${record.capacity} guests` : 'Subject to availability' },
    { icon: BusFront, label: 'Pick-Up', value: record.meetingPoint || richTextToText(record.pickupInfo) || 'Selected hotels' },
    { icon: Accessibility, label: 'Accessibility', value: 'Contact us for accessibility advice' },
  ];

  const gallerySlots = images.length
    ? Array.from({ length: Math.min(5, Math.max(3, images.length)) }, (_, offset) => images[(galleryStart + offset) % images.length])
    : [];
  const itineraryImages = images.length ? images : [record.mainImage || record.coverImage].filter(Boolean) as string[];
  const price = record.adultPrice ? `€${Number(record.adultPrice).toFixed(0)}` : record.priceLabel || 'On request';
  const bookingUrl = record.bookingUrl || '/contact';
  const bookingLabel = record.bookingAvailable ? 'BOOK NOW' : 'ENQUIRE NOW';

  return (
    <div className="excursion-detail-page">
      <PageHero
        className="excursion-detail-hero"
        title={record.title || 'Excursion'}
        breadcrumb={`Excursions  •  ${record.title || 'Excursion'}`}
        image={record.coverImage || record.mainImage || ''}
      />

      <section className="excursion-summary excursions-shell">
        <article className="excursion-summary__intro">
          <p>{richTextToText(record.overview) || record.shortDescription}</p>
          <PlanePath />
        </article>

        <section className="excursion-specs" aria-label="Excursion information">
          {specs.map(({ icon: Icon, label, value }) => (
            <div className="excursion-spec" key={label}>
              <Icon aria-hidden="true" />
              <div><strong>{label}</strong><span>{value}</span></div>
            </div>
          ))}
        </section>

        <aside className="excursion-price-card">
          <span>from</span>
          <strong>{price}</strong>
          <p>per person</p>
          <Link className="button button--gold" to={bookingUrl}>{bookingLabel}</Link>
          <div><ShieldCheck aria-hidden="true" /><p><strong>Free Cancellation</strong><span>Up to 24h before departure</span></p></div>
        </aside>
      </section>

      <section className="excursion-highlights excursions-shell" aria-labelledby="excursion-highlights-title">
        <h2 id="excursion-highlights-title">Highlights</h2>
        <div className="excursion-highlights__grid">
          {highlights.map((text) => {
            const Icon = iconForHighlight(text);
            return <article key={text}><Icon aria-hidden="true" /><p>{text}</p></article>;
          })}
        </div>
        <PlanePath />
      </section>

      <section className="excursion-itinerary-layout excursions-shell">
        <div className="excursion-itinerary">
          <h2>Itinerary</h2>
          <ol>
            {itinerary.map((title, index) => (
              <li key={`${title}-${index}`}>
                <time>{times[index]}</time>
                <i aria-hidden="true" />
                <div className="excursion-itinerary__photo">
                  {itineraryImages.length > 0 && <Photo src={itineraryImages[index % itineraryImages.length]} alt="" />}
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{index === 0 ? richTextToText(record.pickupInfo) : index === itinerary.length - 1 ? 'Return with wonderful island memories.' : record.shortDescription}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="excursion-inclusions">
          <InfoList title="What’s Included" entries={included} />
          <InfoList title="Not Included" entries={notIncluded} negative />
          {importantInfo.length > 0 && <InfoList title="Important Information" entries={importantInfo} />}
        </aside>
      </section>

      {gallerySlots.length > 0 && (
        <section className="excursion-gallery excursions-shell" aria-labelledby="excursion-gallery-title">
          <div className="excursion-gallery__heading">
            <h2 id="excursion-gallery-title">Gallery</h2>
            <span aria-hidden="true" />
            <div>
              <button type="button" aria-label="Previous gallery image" onClick={() => setGalleryStart((value) => (value - 1 + images.length) % images.length)}><ChevronLeft /></button>
              <button type="button" aria-label="Next gallery image" onClick={() => setGalleryStart((value) => (value + 1) % images.length)}><ChevronRight /></button>
            </div>
          </div>
          <div className="excursion-gallery__grid" aria-live="polite">
            {gallerySlots.map((image, index) => (
              <div key={`${image}-${index}`}><Photo src={image} alt={`${record.title} gallery view ${index + 1}`} /></div>
            ))}
          </div>
        </section>
      )}

      <RequestBanner />
    </div>
  );
}
