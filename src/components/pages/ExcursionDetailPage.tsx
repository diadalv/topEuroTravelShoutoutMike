import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { services } from '@wix/bookings';
import { normalizeWixMediaImage } from '@/config/wix-media';
import {
  BusFront,
  CalendarDays,
  Camera,
  CircleCheck,
  CircleX,
  Clock3,
  Info,
  Languages,
  MapPin,
  ShieldCheck,
  Sparkles,
  Utensils,
  Waves,
  type LucideIcon,
} from 'lucide-react';
import { PageHero, Photo, PlanePath, RequestBanner, travelMedia } from '@/components/travel/Shared';

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
  hidden?: boolean | null;
  category?: { name?: string | null };
  defaultCapacity?: number | null;
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
    items?: Array<{ image?: BookingImage }>;
  };
  mainSlug?: { name?: string | null };
  supportedSlugs?: Array<{ name?: string | null }>;
};

type QuickFact = { label: string; value: string; icon: LucideIcon };

type ParsedDescription = {
  quickFacts: QuickFact[];
  intro: string[];
  tourDescription: string[];
  highlights: string[];
  included: string[];
  notIncluded: string[];
  goodToKnow: string[];
};

const SECTION_HEADINGS = [
  'QUICK FACTS',
  'TOUR DESCRIPTION',
  'HIGHLIGHTS',
  "WHAT'S INCLUDED",
  "WHAT'S NOT INCLUDED",
  'GOOD TO KNOW',
] as const;

const DETAIL_STYLES = String.raw`
.excursion-master-subtitle {
  max-width: 850px;
  margin: -8px auto 0;
  color: #4d6072;
  font-size: clamp(17px, 1.25vw, 21px);
  line-height: 1.6;
  text-align: center;
}

.excursion-master-lead {
  padding-left: clamp(22px, 2.2vw, 36px);
  border-left: 3px solid #c8922d;
  color: #1f3a5f;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(25px, 2vw, 36px);
  line-height: 1.24;
}

.excursion-master-lead p { margin: 0 0 16px; }
.excursion-master-lead p:last-child { margin-bottom: 0; }

.excursion-master-story {
  display: grid;
  grid-template-columns: minmax(190px, .34fr) minmax(0, .66fr);
  gap: clamp(38px, 6vw, 100px);
  padding-top: clamp(68px, 7vw, 112px);
  padding-bottom: clamp(58px, 6vw, 96px);
}

.excursion-master-story h2,
.excursion-master-good h2 {
  margin: 0;
  color: #1f3a5f;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(42px, 4vw, 68px);
  font-weight: 500;
  letter-spacing: -.035em;
  line-height: .98;
}

.excursion-master-story__copy p {
  margin: 0 0 20px;
  color: #4d6072;
  font-size: clamp(16px, 1.05vw, 18px);
  line-height: 1.82;
}

.excursion-master-story__copy p:last-child { margin-bottom: 0; }

.excursion-master-lists {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(24px, 3vw, 46px);
  padding-bottom: clamp(64px, 7vw, 108px);
}

.excursion-master-lists .detail-info-list {
  height: 100%;
  margin: 0;
}

.excursion-master-good {
  display: grid;
  grid-template-columns: minmax(190px, .34fr) minmax(0, .66fr);
  gap: clamp(38px, 6vw, 100px);
  margin-bottom: clamp(72px, 8vw, 126px);
  padding: clamp(34px, 4vw, 64px);
  border: 1px solid rgba(31, 58, 95, .12);
  border-radius: 18px;
  background: #faf7f1;
}

.excursion-master-good ul {
  display: grid;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.excursion-master-good li {
  display: grid;
  grid-template-columns: 22px minmax(0, 1fr);
  gap: 12px;
  color: #4d6072;
  line-height: 1.65;
}

.excursion-master-good svg { width: 20px; color: #c8922d; }

.excursion-coming-soon {
  display: flex;
  align-items: flex-start;
  gap: 11px;
  margin-top: 18px;
  padding: 16px;
  border: 1px solid rgba(200, 146, 45, .28);
  border-radius: 10px;
  color: #1f3a5f;
  background: rgba(200, 146, 45, .08);
}

.excursion-coming-soon svg { width: 20px; flex: 0 0 auto; color: #c8922d; }
.excursion-coming-soon strong { display: block; }
.excursion-coming-soon span { display: block; margin-top: 2px; color: #627282; font-size: 13px; }

@media (max-width: 820px) {
  .excursion-master-story,
  .excursion-master-good { grid-template-columns: 1fr; gap: 26px; }
  .excursion-master-lists { grid-template-columns: 1fr; }
  .excursion-master-subtitle { text-align: left; }
}
`;

function serviceSlug(service: BookingServiceRecord) {
  return service.mainSlug?.name?.trim()
    || service.supportedSlugs?.find((item) => item.name)?.name?.trim()
    || '';
}

function paragraphList(value: string) {
  return value
    .split(/\n\s*\n/)
    .map((item) => item.replace(/\s*\n\s*/g, ' ').trim())
    .filter(Boolean);
}

function bulletList(value: string) {
  return value
    .split(/\n+/)
    .map((item) => item.replace(/^[•\-]\s*/, '').trim())
    .filter(Boolean);
}

function iconForFact(label: string): LucideIcon {
  const value = label.toLowerCase();
  if (/duration|time|return/.test(value)) return Clock3;
  if (/departure|pickup|meeting|destination/.test(value)) return MapPin;
  if (/transport|transfer/.test(value)) return BusFront;
  if (/stop|swim|bay/.test(value)) return Waves;
  if (/lunch|meal|wine/.test(value)) return Utensils;
  if (/guide|escort|language|assistance/.test(value)) return Languages;
  if (/passport/.test(value)) return ShieldCheck;
  if (/free time|availability/.test(value)) return CalendarDays;
  return Sparkles;
}

function parseDescription(description?: string | null): ParsedDescription {
  const normalized = (description || '').replace(/\r/g, '').trim();
  const positions = new Map<string, number>();

  SECTION_HEADINGS.forEach((heading) => {
    const match = new RegExp(`(?:^|\\n)${heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*(?:\\n|$)`, 'i').exec(normalized);
    if (match) positions.set(heading, match.index + (match[0].startsWith('\n') ? 1 : 0));
  });

  function block(heading: typeof SECTION_HEADINGS[number], next?: typeof SECTION_HEADINGS[number]) {
    const start = positions.get(heading);
    if (start === undefined) return '';
    const contentStart = normalized.indexOf('\n', start);
    if (contentStart < 0) return '';
    const end = next && positions.get(next) !== undefined ? positions.get(next)! : normalized.length;
    return normalized.slice(contentStart + 1, end).trim();
  }

  const quickAndIntro = paragraphList(block('QUICK FACTS', 'TOUR DESCRIPTION'));
  const quickText = quickAndIntro.shift() || '';
  const quickFacts = quickText
    .split(/\s*·\s*/)
    .map((item) => {
      const separator = item.indexOf(':');
      const label = separator >= 0 ? item.slice(0, separator).trim() : 'Detail';
      const value = separator >= 0 ? item.slice(separator + 1).trim() : item.trim();
      return value ? { label, value, icon: iconForFact(label) } : null;
    })
    .filter((item): item is QuickFact => Boolean(item));

  return {
    quickFacts,
    intro: quickAndIntro,
    tourDescription: paragraphList(block('TOUR DESCRIPTION', 'HIGHLIGHTS')),
    highlights: bulletList(block('HIGHLIGHTS', "WHAT'S INCLUDED")),
    included: bulletList(block("WHAT'S INCLUDED", "WHAT'S NOT INCLUDED")),
    notIncluded: bulletList(block("WHAT'S NOT INCLUDED", 'GOOD TO KNOW')),
    goodToKnow: bulletList(block('GOOD TO KNOW')),
  };
}

function displayPrice(service: BookingServiceRecord) {
  const payment = service.payment;
  if (payment?.rateType === 'NO_FEE') return 'Free';
  const price = payment?.rateType === 'FIXED'
    ? payment.fixed?.price
    : payment?.varied?.minPrice || payment?.varied?.defaultPrice;
  if (price?.formattedValue) return payment?.rateType === 'VARIED' ? `from ${price.formattedValue}` : price.formattedValue;
  const numeric = Number(String(price?.value || '').replace(',', '.'));
  if (Number.isFinite(numeric) && numeric > 0) return `${payment?.rateType === 'VARIED' ? 'from ' : ''}€${numeric.toFixed(0)}`;
  return payment?.custom?.description?.trim() || 'Price on request';
}

function serviceImages(service: BookingServiceRecord) {
  return [
    service.media?.coverMedia?.image,
    service.media?.mainMedia?.image,
    ...(service.media?.items || []).map((item) => item.image),
  ]
    .map((image) => normalizeWixMediaImage(image))
    .filter((image, index, values): image is string => Boolean(image) && values.indexOf(image) === index);
}

async function loadExcursion(slug: string) {
  const result = await services.queryServices().limit(100).find();
  return ((result.items || []) as unknown as BookingServiceRecord[]).find((service) =>
    service.hidden !== true
    && service.category?.name?.trim().toLowerCase() === 'excursions'
    && serviceSlug(service) === slug,
  ) || null;
}

function InfoList({ title, entries, negative = false }: { title: string; entries: string[]; negative?: boolean }) {
  if (!entries.length) return null;
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
  const [service, setService] = useState<BookingServiceRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');

    loadExcursion(slug)
      .then((result) => {
        if (!active) return;
        setService(result);
        if (!result) setError('We could not find this excursion.');
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

  const parsed = useMemo(() => parseDescription(service?.description), [service?.description]);
  const images = useMemo(() => service ? serviceImages(service) : [], [service]);

  useEffect(() => {
    if (!service) return;
    const previousTitle = document.title;
    const title = service.name?.trim() || 'Excursion';
    document.title = `${title} | Top Euro Travel`;
    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }
    description.content = service.tagLine?.trim() || parsed.intro[0] || '';
    return () => {
      document.title = previousTitle;
      if (description && previousDescription !== undefined) description.content = previousDescription;
    };
  }, [service, parsed.intro]);

  if (loading) {
    return (
      <div className="excursion-detail-page excursion-detail-state" aria-live="polite">
        <div className="excursion-loading shell"><span /><span /><span /><p>Loading excursion details…</p></div>
      </div>
    );
  }

  if (!service || error) {
    return (
      <div className="excursion-detail-page excursion-detail-state">
        <section className="excursion-not-found shell">
          <MapPin aria-hidden="true" />
          <h1>Excursion not found</h1>
          <p>{error || 'This excursion is not currently available.'}</p>
          <Link className="button button--navy" to="/excursions">EXPLORE EXCURSIONS</Link>
        </section>
      </div>
    );
  }

  const title = service.name?.trim() || 'Excursion';
  const subtitle = service.tagLine?.trim() || parsed.intro[0] || '';
  const image = images[0] || travelMedia('excursions-hero.jpg');
  const currentSlug = serviceSlug(service);
  const bookingAvailable = service.onlineBooking?.enabled === true;
  const bookingUrl = `/booking-calendar/${encodeURIComponent(currentSlug)}`;
  const price = displayPrice(service);

  return (
    <div className="excursion-detail-page">
      <style>{DETAIL_STYLES}</style>
      <PageHero
        className="excursion-detail-hero"
        title={title}
        breadcrumb={`Excursions  •  ${title}`}
        image={image}
      />

      {subtitle && <p className="excursion-master-subtitle excursions-shell">{subtitle}</p>}

      <section className="excursion-summary excursions-shell">
        {parsed.intro.length > 0 && (
          <article className="excursion-summary__intro excursion-master-lead">
            {parsed.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <PlanePath />
          </article>
        )}

        {parsed.quickFacts.length > 0 && (
          <section className="excursion-specs" aria-label="Excursion information">
            {parsed.quickFacts.map(({ icon: Icon, label, value }) => (
              <div className="excursion-spec" key={`${label}-${value}`}>
                <Icon aria-hidden="true" />
                <div><strong>{label}</strong><span>{value}</span></div>
              </div>
            ))}
          </section>
        )}

        <aside className="excursion-price-card">
          <span>{bookingAvailable ? 'from' : 'information'}</span>
          <strong>{price}</strong>
          {bookingAvailable ? (
            <>
              <p>per person</p>
              <Link className="button button--gold" to={bookingUrl}>BOOK NOW</Link>
            </>
          ) : (
            <div className="excursion-coming-soon">
              <Info aria-hidden="true" />
              <p><strong>Booking details coming soon</strong><span>The full experience information is available below.</span></p>
            </div>
          )}
        </aside>
      </section>

      {parsed.tourDescription.length > 0 && (
        <section className="excursion-master-story excursions-shell">
          <h2>Tour Description</h2>
          <div className="excursion-master-story__copy">
            {parsed.tourDescription.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>
      )}

      {parsed.highlights.length > 0 && (
        <section className="excursion-highlights excursions-shell" aria-labelledby="excursion-highlights-title">
          <h2 id="excursion-highlights-title">Highlights</h2>
          <div className="excursion-highlights__grid">
            {parsed.highlights.map((text) => <article key={text}><Camera aria-hidden="true" /><p>{text}</p></article>)}
          </div>
          <PlanePath />
        </section>
      )}

      {(parsed.included.length > 0 || parsed.notIncluded.length > 0) && (
        <section className="excursion-master-lists excursions-shell">
          <InfoList title="What’s Included" entries={parsed.included} />
          <InfoList title="What’s Not Included" entries={parsed.notIncluded} negative />
        </section>
      )}

      {parsed.goodToKnow.length > 0 && (
        <section className="excursion-master-good excursions-shell">
          <h2>Good to Know</h2>
          <ul>
            {parsed.goodToKnow.map((entry) => <li key={entry}><ShieldCheck aria-hidden="true" /><span>{entry}</span></li>)}
          </ul>
        </section>
      )}

      {images.length > 1 && (
        <section className="excursion-gallery excursions-shell" aria-labelledby="excursion-gallery-title">
          <div className="excursion-gallery__heading"><h2 id="excursion-gallery-title">Gallery</h2><span aria-hidden="true" /></div>
          <div className="excursion-gallery__grid">
            {images.slice(0, 5).map((galleryImage, index) => (
              <div key={galleryImage}><Photo src={galleryImage} alt={`${title} gallery view ${index + 1}`} /></div>
            ))}
          </div>
        </section>
      )}

      <RequestBanner />
    </div>
  );
}
