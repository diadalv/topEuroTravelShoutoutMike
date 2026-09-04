import '@/styles/excursion-preview.css';
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

function extractDuration(description?: string | null): string {
  if (!description) return 'Full day';
  const match = description.match(/\b(Half day|Full day|\d+\s*(?:hour|hr)s?)\b/i);
  return match ? match[1] : 'Full day';
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
    <div className="tet-excursion-preview__collapsible-section">
      <button
        className="tet-excursion-preview__collapsible-header"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {title}
        <ChevronDown aria-hidden="true" />
      </button>
      <div className="tet-excursion-preview__collapsible-content" data-open={open ? 'true' : 'false'}>
        <div className="tet-excursion-preview__collapsible-body">
          {content.length === 1 ? (
            <p style={{ margin: 0 }}>{content[0]}</p>
          ) : (
            <ul className="tet-excursion-preview__collapsible-list">
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
    const createdRobotsMeta = !robotsMeta;
    const previousRobots = robotsMeta?.getAttribute('content') ?? null;

    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.content = 'noindex, nofollow';

    return () => {
      if (!robotsMeta) return;
      if (createdRobotsMeta) {
        robotsMeta.remove();
      } else if (previousRobots === null) {
        robotsMeta.removeAttribute('content');
      } else {
        robotsMeta.content = previousRobots;
      }
    };
  }, []);

  const parsed = useMemo(() => parseDescription(service?.description), [service?.description]);
  const images = useMemo(() => service ? serviceImages(service) : [], [service]);

  if (loading) {
    return (
      <div className="tet-excursion-preview__state">
        <div>
          <div className="tet-excursion-preview__loader" />
          <p>Loading excursion details…</p>
        </div>
      </div>
    );
  }

  if (!service || error) {
    return (
      <div className="tet-excursion-preview__state">
        <div>
          <MapPin size={40} style={{ color: '#dd9718', margin: '0 auto 16px' }} />
          <h1>Excursion not found</h1>
          <p>{error || 'This excursion is not currently available.'}</p>
          <Link className="tet-excursion-preview__button" to="/excursions">EXPLORE EXCURSIONS</Link>
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
    { label: 'Duration', value: extractDuration(service.description), icon: Clock },
    { label: 'Departure', value: 'Rhodes', icon: Calendar },
    { label: 'Language', value: 'English', icon: Globe },
    { label: 'Price', value: price, icon: DollarSign },
  ];

  return (
    <div className="tet-excursion-preview">
      {/* Hero Section */}
      <section className="tet-excursion-preview__hero" aria-labelledby="preview-title">
        <Image className="tet-excursion-preview__hero-image" src={image} alt="" />
        <div className="tet-excursion-preview__hero-content">
          <h1 id="preview-title">{title}</h1>
          {heroDescription && <p className="tet-excursion-preview__hero-description">{heroDescription}</p>}
          <Link className="tet-excursion-preview__button" to={actionUrl}>
            {bookingAvailable ? 'BOOK NOW' : 'ENQUIRE NOW'}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <div className="tet-excursion-preview__container">
        {/* Quick Facts */}
        <section className="tet-excursion-preview__section">
          <p className="tet-excursion-preview__eyebrow">Quick Facts</p>
          <div className="tet-excursion-preview__quick-facts">
            {quickFacts.map((fact) => {
              const IconComponent = fact.icon;
              return (
                <div className="tet-excursion-preview__quick-fact" key={fact.label}>
                  <IconComponent className="tet-excursion-preview__quick-fact-icon" aria-hidden="true" />
                  <div className="tet-excursion-preview__quick-fact-content">
                    <span className="tet-excursion-preview__quick-fact-label">{fact.label}</span>
                    <span className="tet-excursion-preview__quick-fact-value">{fact.value}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="tet-excursion-preview__grid">
          <div className="tet-excursion-preview__main-content">
            {/* Overview */}
            {parsed.intro.length > 0 && (
              <section className="tet-excursion-preview__section">
                <h2 className="tet-excursion-preview__section-title">Overview</h2>
                {parsed.intro.map((paragraph) => (
                  <p key={paragraph} className="tet-excursion-preview__intro-text">{paragraph}</p>
                ))}
              </section>
            )}

            {/* Highlights */}
            {parsed.highlights.length > 0 && (
              <section className="tet-excursion-preview__section">
                <h2 className="tet-excursion-preview__section-title">Highlights</h2>
                <div className="tet-excursion-preview__highlights-grid">
                  {parsed.highlights.slice(0, 4).map((highlight) => (
                    <div className="tet-excursion-preview__highlight-item" key={highlight}>{highlight}</div>
                  ))}
                </div>
              </section>
            )}

            {/* Collapsible Sections */}
            <section className="tet-excursion-preview__section">
              <h2 className="tet-excursion-preview__section-title">Details</h2>
              <CollapsibleSection title="Full Description" content={parsed.tourDescription} />
              <CollapsibleSection title="What's Included" content={parsed.included} />
              <CollapsibleSection title="What's Not Included" content={parsed.notIncluded} />
              <CollapsibleSection title="Important Information" content={parsed.importantInfo} />
            </section>

            {/* Gallery */}
            {galleryImages.length > 0 && (
              <section className="tet-excursion-preview__section">
                <h2 className="tet-excursion-preview__section-title">Gallery</h2>
                <div className={`tet-excursion-preview__gallery${galleryImages.length === 1 ? ' is-single' : ''}`}>
                  {galleryImages.map((galleryImage, index) => (
                    <div className="tet-excursion-preview__gallery-item" key={`${galleryImage}-${index}`}>
                      <div className="tet-excursion-preview__gallery-item-wrapper">
                        <Image
                          className="tet-excursion-preview__gallery-image"
                          src={galleryImage}
                          alt={`${title} gallery view ${index + 1}`}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Booking Summary Card */}
          <aside className="tet-excursion-preview__booking-summary">
            <h3 className="tet-excursion-preview__booking-summary-title">Booking Summary</h3>
            <div className="tet-excursion-preview__booking-summary-price">
              <span className="tet-excursion-preview__booking-summary-price-label">{price === 'TBA' ? 'Price' : 'From'}</span>
              <span className="tet-excursion-preview__booking-summary-price-value">{price}</span>
              {price !== 'TBA' && <span className="tet-excursion-preview__booking-summary-price-unit">per person</span>}
            </div>
            <Link className="tet-excursion-preview__button tet-excursion-preview__booking-summary-button" to={actionUrl}>
              {bookingAvailable ? 'BOOK NOW' : 'ENQUIRE NOW'}
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
import '@/styles/excursion-preview.css';
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

function extractDuration(description?: string | null): string {
  if (!description) return 'Full day';
  const match = description.match(/\b(Half day|Full day|\d+\s*(?:hour|hr)s?)\b/i);
  return match ? match[1] : 'Full day';
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
    <div className="tet-excursion-preview__collapsible-section">
      <button
        className="tet-excursion-preview__collapsible-header"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {title}
        <ChevronDown aria-hidden="true" />
      </button>
      <div className="tet-excursion-preview__collapsible-content" data-open={open ? 'true' : 'false'}>
        <div className="tet-excursion-preview__collapsible-body">
          {content.length === 1 ? (
            <p style={{ margin: 0 }}>{content[0]}</p>
          ) : (
            <ul className="tet-excursion-preview__collapsible-list">
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
    const createdMeta = !robotsMeta;

    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.content = 'noindex, nofollow';

    return () => {
      if (createdMeta && robotsMeta) {
        robotsMeta.remove();
      } else if (robotsMeta && previousRobots !== undefined) {
        robotsMeta.content = previousRobots;
      }
    };
  }, []);

  const parsed = useMemo(() => parseDescription(service?.description), [service?.description]);
  const images = useMemo(() => service ? serviceImages(service) : [], [service]);

  if (loading) {
    return (
      <div className="tet-excursion-preview__state">
        <div>
          <div className="tet-excursion-preview__loader" />
          <p>Loading excursion details…</p>
        </div>
      </div>
    );
  }

  if (!service || error) {
    return (
      <div className="tet-excursion-preview__state">
        <div>
          <MapPin size={40} style={{ color: '#dd9718', margin: '0 auto 16px' }} />
          <h1>Excursion not found</h1>
          <p>{error || 'This excursion is not currently available.'}</p>
          <Link className="tet-excursion-preview__button" to="/excursions">EXPLORE EXCURSIONS</Link>
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
    { label: 'Duration', value: extractDuration(service.description), icon: Clock },
    { label: 'Departure', value: 'Rhodes', icon: Calendar },
    { label: 'Language', value: 'English', icon: Globe },
    { label: 'Price', value: price, icon: DollarSign },
  ];

  return (
    <div className="tet-excursion-preview">
      {/* Hero Section */}
      <section className="tet-excursion-preview__hero" aria-labelledby="preview-title">
        <Image className="tet-excursion-preview__hero-image" src={image} alt="" />
        <div className="tet-excursion-preview__hero-content">
          <h1 id="preview-title">{title}</h1>
          {heroDescription && <p className="tet-excursion-preview__hero-description">{heroDescription}</p>}
          <Link className="tet-excursion-preview__button" to={actionUrl}>
            {bookingAvailable ? 'BOOK NOW' : 'ENQUIRE NOW'}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <div className="tet-excursion-preview__container">
        {/* Quick Facts */}
        <section className="tet-excursion-preview__section">
          <p className="tet-excursion-preview__eyebrow">Quick Facts</p>
          <div className="tet-excursion-preview__quick-facts">
            {quickFacts.map((fact) => {
              const IconComponent = fact.icon;
              return (
                <div className="tet-excursion-preview__quick-fact" key={fact.label}>
                  <IconComponent className="tet-excursion-preview__quick-fact-icon" aria-hidden="true" />
                  <div className="tet-excursion-preview__quick-fact-content">
                    <span className="tet-excursion-preview__quick-fact-label">{fact.label}</span>
                    <span className="tet-excursion-preview__quick-fact-value">{fact.value}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="tet-excursion-preview__grid">
          <div className="tet-excursion-preview__grid-mobile-reorder">
            {/* Overview */}
            {parsed.intro.length > 0 && (
              <section className="tet-excursion-preview__section">
                <h2 className="tet-excursion-preview__section-title">Overview</h2>
                {parsed.intro.map((paragraph) => (
                  <p key={paragraph} className="tet-excursion-preview__intro-text">{paragraph}</p>
                ))}
              </section>
            )}

            {/* Highlights */}
            {parsed.highlights.length > 0 && (
              <section className="tet-excursion-preview__section">
                <h2 className="tet-excursion-preview__section-title">Highlights</h2>
                <div className="tet-excursion-preview__highlights-grid">
                  {parsed.highlights.slice(0, 4).map((highlight) => (
                    <div className="tet-excursion-preview__highlight-item" key={highlight}>{highlight}</div>
                  ))}
                </div>
              </section>
            )}

            {/* Collapsible Sections */}
            <section className="tet-excursion-preview__section">
              <h2 className="tet-excursion-preview__section-title">Details</h2>
              <CollapsibleSection title="Full Description" content={parsed.tourDescription} />
              <CollapsibleSection title="What's Included" content={parsed.included} />
              <CollapsibleSection title="What's Not Included" content={parsed.notIncluded} />
              <CollapsibleSection title="Important Information" content={parsed.importantInfo} />
            </section>

            {/* Gallery */}
            {galleryImages.length > 0 && (
              <section className="tet-excursion-preview__section">
                <h2 className="tet-excursion-preview__section-title">Gallery</h2>
                <div className="tet-excursion-preview__gallery">
                  {galleryImages.map((galleryImage, index) => (
                    <div className="tet-excursion-preview__gallery-item" key={`${galleryImage}-${index}`}>
                      <div className="tet-excursion-preview__gallery-item-wrapper">
                        <Image className="tet-excursion-preview__gallery-image" src={galleryImage} alt={`${title} gallery view ${index + 1}`} loading="lazy" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Booking Summary Card */}
          <aside className="tet-excursion-preview__booking-summary">
            <h3 className="tet-excursion-preview__booking-summary-title">Booking Summary</h3>
            <div className="tet-excursion-preview__booking-summary-price">
              <span className="tet-excursion-preview__booking-summary-price-label">{price === 'TBA' ? 'Price' : 'From'}</span>
              <span className="tet-excursion-preview__booking-summary-price-value">{price}</span>
              {price !== 'TBA' && <span className="tet-excursion-preview__booking-summary-price-unit">per person</span>}
            </div>
            <Link className="tet-excursion-preview__button tet-excursion-preview__booking-summary-button" to={actionUrl}>
              {bookingAvailable ? 'BOOK NOW' : 'ENQUIRE NOW'}
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
