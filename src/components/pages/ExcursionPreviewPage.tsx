import { travelMedia } from '@/components/travel/Shared';
import { Image } from '@/components/ui/image';
import { normalizeWixMediaImage } from '@/config/wix-media';
import { services } from '@wix/bookings';
import {
  ArrowRight,
  Calendar,
  Clock,
  Globe,
  MapPin,
  DollarSign,
  ChevronDown,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

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

type ParsedDescription = {
  intro: string[];
  tourDescription: string[];
  highlights: string[];
  included: string[];
  notIncluded: string[];
  importantInfo: string[];
};

const SECTION_HEADINGS = [
  'QUICK FACTS',
  'TOUR DESCRIPTION',
  'HIGHLIGHTS',
  "WHAT'S INCLUDED",
  "WHAT'S NOT INCLUDED",
  'GOOD TO KNOW',
] as const;

const PREVIEW_STYLES = String.raw`
.preview-page {
  background: #fbf9f5;
  color: #08345f;
  font-family: "work-sans-v2", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.preview-page * { box-sizing: border-box; }

.preview-hero {
  position: relative;
  min-height: 320px;
  display: grid;
  align-items: center;
  overflow: hidden;
  border-radius: 0 0 16px 16px;
  background: #032f55;
}

.preview-hero-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: -3;
}

.preview-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -2;
  background: linear-gradient(90deg, rgba(2, 39, 73, .95) 0%, rgba(2, 44, 79, .85) 50%, rgba(2, 44, 79, .3) 100%);
}

.preview-hero::after {
  content: '';
  position: absolute;
  inset: auto 0 0;
  height: 60px;
  z-index: -1;
  background: linear-gradient(180deg, transparent, rgba(2, 35, 64, .15));
}

.preview-hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
  width: 100%;
}

.preview-hero h1 {
  margin: 0 0 12px;
  color: #fff;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 500;
  letter-spacing: -.035em;
  line-height: 1.1;
  text-wrap: balance;
}

.preview-hero-description {
  max-width: 600px;
  margin: 0 0 20px;
  color: rgba(255, 255, 255, .9);
  font-size: clamp(14px, 1vw, 16px);
  line-height: 1.6;
}

.preview-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 44px;
  padding: 0 20px;
  border: 0;
  border-radius: 6px;
  color: #fff;
  background: #dd9718;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: .025em;
  text-decoration: none;
  transition: all .25s ease;
  cursor: pointer;
}

.preview-button:hover {
  background: #c9860e;
  transform: translateY(-2px);
}

.preview-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.preview-section {
  padding: 48px 0;
  border-bottom: 1px solid #e5ded4;
}

.preview-section:last-child {
  border-bottom: none;
}

.preview-section-title {
  margin: 0 0 24px;
  color: #032f55;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 600;
  letter-spacing: -.025em;
}

.preview-eyebrow {
  margin: 0 0 12px;
  color: #dd9718;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: .13em;
  text-transform: uppercase;
}

.quick-facts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.quick-fact {
  display: flex;
  gap: 12px;
  padding: 16px;
  border: 1px solid rgba(221, 151, 24, .2);
  border-radius: 12px;
  background: rgba(255, 255, 255, .5);
}

.quick-fact-icon {
  flex: 0 0 24px;
  width: 24px;
  height: 24px;
  color: #dd9718;
}

.quick-fact-content {
  flex: 1;
  min-width: 0;
}

.quick-fact-label {
  display: block;
  margin: 0 0 4px;
  color: #5d6e80;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .05em;
}

.quick-fact-value {
  display: block;
  margin: 0;
  color: #08345f;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
}

.intro-text {
  max-width: 800px;
  margin: 0 0 24px;
  color: #5d6e80;
  font-size: 15px;
  line-height: 1.7;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.highlight-item {
  padding: 16px;
  border: 1px solid rgba(221, 151, 24, .2);
  border-radius: 12px;
  background: rgba(255, 255, 255, .5);
  color: #5d6e80;
  font-size: 14px;
  line-height: 1.6;
}

.collapsible-section {
  margin-bottom: 16px;
  border: 1px solid rgba(221, 151, 24, .2);
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, .5);
}

.collapsible-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding: 16px;
  border: none;
  background: transparent;
  color: #08345f;
  font-size: 15px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: background .2s ease;
}

.collapsible-header:hover {
  background: rgba(221, 151, 24, .05);
}

.collapsible-header svg {
  flex: 0 0 20px;
  width: 20px;
  height: 20px;
  color: #dd9718;
  transition: transform .3s ease;
}

.collapsible-header[aria-expanded="true"] svg {
  transform: rotate(180deg);
}

.collapsible-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height .3s ease;
}

.collapsible-content[data-open="true"] {
  max-height: 2000px;
}

.collapsible-body {
  padding: 0 16px 16px;
  color: #5d6e80;
  font-size: 14px;
  line-height: 1.7;
}

.collapsible-list {
  margin: 0;
  padding: 0 0 0 20px;
  list-style: disc;
}

.collapsible-list li {
  margin-bottom: 8px;
}

.booking-summary {
  position: sticky;
  top: 100px;
  padding: 24px;
  border: 1px solid rgba(221, 151, 24, .3);
  border-radius: 12px;
  background: linear-gradient(145deg, rgba(255, 255, 255, .7), rgba(255, 250, 241, .6));
  box-shadow: 0 8px 24px rgba(3, 47, 85, .08);
}

.booking-summary-title {
  margin: 0 0 16px;
  color: #032f55;
  font-size: 16px;
  font-weight: 700;
  font-family: "Cormorant Garamond", Georgia, serif;
}

.booking-summary-price {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  align-items: baseline;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(221, 151, 24, .2);
}

.booking-summary-price-label {
  color: #5d6e80;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .05em;
}

.booking-summary-price-value {
  color: #032f55;
  font-size: 24px;
  font-weight: 700;
  font-family: "Cormorant Garamond", Georgia, serif;
}

.booking-summary-price-unit {
  color: #5d6e80;
  font-size: 12px;
  font-weight: 500;
}

.booking-summary-button {
  width: 100%;
  margin-top: 16px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-top: 24px;
}

.gallery-item {
  overflow: hidden;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  background: #e8e4dd;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .4s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.preview-grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 32px;
  align-items: start;
}

.loader {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(221, 151, 24, .2);
  border-top-color: #dd9718;
  border-radius: 50%;
  animation: spin .8s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.preview-state {
  min-height: 60vh;
  display: grid;
  place-items: center;
  padding: 100px 24px;
  text-align: center;
  background: #fbf9f5;
}

.preview-state h1 {
  margin: 16px 0 8px;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 48px;
  color: #032f55;
}

.preview-state p {
  margin: 0;
  color: #5d6e80;
}

@media (max-width: 900px) {
  .preview-grid {
    grid-template-columns: 1fr;
  }

  .booking-summary {
    position: static;
  }
}

@media (max-width: 640px) {
  .preview-hero {
    min-height: 280px;
  }

  .preview-hero-content {
    padding: 40px 20px;
  }

  .preview-hero h1 {
    font-size: clamp(28px, 7vw, 40px);
  }

  .preview-container {
    padding: 0 20px;
  }

  .preview-section {
    padding: 32px 0;
  }

  .quick-facts {
    grid-template-columns: 1fr;
  }

  .highlights-grid {
    grid-template-columns: 1fr;
  }

  .gallery {
    grid-template-columns: 1fr;
  }

  .collapsible-header {
    padding: 14px;
  }

  .collapsible-body {
    padding: 0 14px 14px;
  }

  .booking-summary {
    margin-top: 24px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .preview-button,
  .gallery-item img,
  .collapsible-header svg,
  .collapsible-content {
    transition: none;
  }

  .loader {
    animation-duration: 1.5s;
  }
}
`;

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

function parseDescription(description?: string | null): ParsedDescription {
  const normalized = (description || '').replace(/\r/g, '').trim();
  const positions = new Map<string, number>();

  SECTION_HEADINGS.forEach((heading) => {
    const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const match = new RegExp(`(?:^|\\n)${escaped}\\s*(?:\\n|$)`, 'i').exec(normalized);
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
  quickAndIntro.shift();

  return {
    intro: quickAndIntro,
    tourDescription: paragraphList(block('TOUR DESCRIPTION', 'HIGHLIGHTS')),
    highlights: bulletList(block('HIGHLIGHTS', "WHAT'S INCLUDED")),
    included: bulletList(block("WHAT'S INCLUDED", "WHAT'S NOT INCLUDED")),
    notIncluded: bulletList(block("WHAT'S NOT INCLUDED", 'GOOD TO KNOW')),
    importantInfo: bulletList(block('GOOD TO KNOW', '')),
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
  const custom = payment?.custom?.description?.trim() || '';
  return /confirm|schedule|request/i.test(custom) ? 'TBA' : custom || 'TBA';
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

function serviceSlug(service: BookingServiceRecord) {
  return service.mainSlug?.name?.trim()
    || service.supportedSlugs?.find((item) => item.name)?.name?.trim()
    || '';
}

async function loadExcursion(slug: string) {
  const result = await services.queryServices().limit(100).find();
  return ((result.items || []) as unknown as BookingServiceRecord[]).find((service) =>
    service.hidden !== true
    && service.category?.name?.trim().toLowerCase() === 'excursions'
    && serviceSlug(service) === slug,
  ) || null;
}

function CollapsibleSection({ title, content }: { title: string; content: string[] }) {
  const [open, setOpen] = useState(false);

  if (!content.length) return null;

  return (
    <div className="collapsible-section">
      <button
        className="collapsible-header"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {title}
        <ChevronDown aria-hidden="true" />
      </button>
      <div className="collapsible-content" data-open={open ? 'true' : 'false'}>
        <div className="collapsible-body">
          {content.length === 1 ? (
            <p style={{ margin: 0 }}>{content[0]}</p>
          ) : (
            <ul className="collapsible-list">
              {content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ExcursionPreviewPage() {
  const [service, setService] = useState<BookingServiceRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');

    loadExcursion('day-trip-to-turkey-marmaris-by-boat')
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

    return () => { active = false; };
  }, []);

  // Set noindex, nofollow metadata
  useEffect(() => {
    let robotsMeta = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const previousRobots = robotsMeta?.content;

    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.content = 'noindex, nofollow';

    return () => {
      if (robotsMeta && previousRobots !== undefined) {
        robotsMeta.content = previousRobots;
      }
    };
  }, []);

  const parsed = useMemo(() => parseDescription(service?.description), [service?.description]);
  const images = useMemo(() => service ? serviceImages(service) : [], [service]);

  if (loading) {
    return (
      <div className="preview-state">
        <div>
          <div className="loader" />
          <p>Loading excursion details…</p>
        </div>
      </div>
    );
  }

  if (!service || error) {
    return (
      <div className="preview-state">
        <div>
          <MapPin size={40} style={{ color: '#dd9718', margin: '0 auto 16px' }} />
          <h1>Excursion not found</h1>
          <p>{error || 'This excursion is not currently available.'}</p>
          <Link className="preview-button" to="/excursions">EXPLORE EXCURSIONS</Link>
        </div>
      </div>
    );
  }

  const title = service.name?.trim() || 'Excursion';
  const heroDescription = service.tagLine?.trim() || parsed.intro[0] || '';
  const image = images[0] || travelMedia('excursions-hero.jpg');
  const bookingAvailable = service.onlineBooking?.enabled === true;
  const actionUrl = bookingAvailable ? `/booking-calendar/${encodeURIComponent(serviceSlug(service))}` : '/contact';
  const price = displayPrice(service);
  const galleryImages = images.length ? images.slice(0, 4) : [image];

  // Extract quick facts from parsed data
  const quickFacts = [
    { label: 'Duration', value: parsed.intro[0]?.split('•')[0]?.trim() || 'Full day', icon: Clock },
    { label: 'Departure', value: 'Morning', icon: Calendar },
    { label: 'Language', value: 'English', icon: Globe },
    { label: 'Price', value: price, icon: DollarSign },
  ];

  return (
    <div className="preview-page">
      <style>{PREVIEW_STYLES}</style>

      {/* Hero Section */}
      <section className="preview-hero" aria-labelledby="preview-title">
        <Image className="preview-hero-image" src={image} alt="" />
        <div className="preview-hero-content">
          <h1 id="preview-title">{title}</h1>
          {heroDescription && <p className="preview-hero-description">{heroDescription}</p>}
          <Link className="preview-button" to={actionUrl}>
            {bookingAvailable ? 'BOOK NOW' : 'ENQUIRE NOW'}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <div className="preview-container">
        {/* Quick Facts */}
        <section className="preview-section">
          <p className="preview-eyebrow">Quick Facts</p>
          <div className="quick-facts">
            {quickFacts.map((fact) => {
              const IconComponent = fact.icon;
              return (
                <div className="quick-fact" key={fact.label}>
                  <IconComponent className="quick-fact-icon" aria-hidden="true" />
                  <div className="quick-fact-content">
                    <span className="quick-fact-label">{fact.label}</span>
                    <span className="quick-fact-value">{fact.value}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="preview-grid">
          <div>
            {/* Overview */}
            {parsed.intro.length > 0 && (
              <section className="preview-section">
                <h2 className="preview-section-title">Overview</h2>
                {parsed.intro.map((paragraph) => (
                  <p key={paragraph} className="intro-text">{paragraph}</p>
                ))}
              </section>
            )}

            {/* Highlights */}
            {parsed.highlights.length > 0 && (
              <section className="preview-section">
                <h2 className="preview-section-title">Highlights</h2>
                <div className="highlights-grid">
                  {parsed.highlights.slice(0, 4).map((highlight) => (
                    <div className="highlight-item" key={highlight}>{highlight}</div>
                  ))}
                </div>
              </section>
            )}

            {/* Collapsible Sections */}
            <section className="preview-section">
              <h2 className="preview-section-title">Details</h2>
              <CollapsibleSection title="Full Description" content={parsed.tourDescription} />
              <CollapsibleSection title="What's Included" content={parsed.included} />
              <CollapsibleSection title="What's Not Included" content={parsed.notIncluded} />
              <CollapsibleSection title="Important Information" content={parsed.importantInfo} />
            </section>

            {/* Gallery */}
            {galleryImages.length > 0 && (
              <section className="preview-section">
                <h2 className="preview-section-title">Gallery</h2>
                <div className="gallery">
                  {galleryImages.map((galleryImage, index) => (
                    <div className="gallery-item" key={`${galleryImage}-${index}`}>
                      <Image src={galleryImage} alt={`${title} gallery view ${index + 1}`} loading="lazy" />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Booking Summary Card */}
          <aside className="booking-summary">
            <h3 className="booking-summary-title">Booking Summary</h3>
            <div className="booking-summary-price">
              <span className="booking-summary-price-label">{price === 'TBA' ? 'Price' : 'From'}</span>
              <span className="booking-summary-price-value">{price}</span>
              {price !== 'TBA' && <span className="booking-summary-price-unit">per person</span>}
            </div>
            <Link className="preview-button booking-summary-button" to={actionUrl}>
              {bookingAvailable ? 'BOOK NOW' : 'ENQUIRE NOW'}
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
