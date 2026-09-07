import { travelMedia } from '@/components/travel/Shared';
import { Image } from '@/components/ui/image';
import { normalizeWixMediaImage } from '@/config/wix-media';
import '@/styles/excursion-preview.css';
import { items } from '@wix/data';
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  Clock,
  Euro,
  Globe,
  MapPin,
} from 'lucide-react';
import { type ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

type CmsImage = string | {
  id?: string;
  url?: string;
  filename?: string;
  width?: number;
  height?: number;
};

type ExcursionPageContent = {
  _id?: string;
  title?: string;
  slug?: string;
  active?: boolean;
  heroDescription?: string;
  heroImage?: CmsImage;
  heroImageAlt?: string;
  quickFactsTitle?: string;
  durationLabel?: string;
  durationValue?: string;
  departureLabel?: string;
  departureValue?: string;
  languageLabel?: string;
  languageValue?: string;
  priceLabel?: string;
  price?: number | string;
  currencySymbol?: string;
  overviewTitle?: string;
  overviewText?: string;
  highlightsTitle?: string;
  highlight1?: string;
  highlight2?: string;
  highlight3?: string;
  highlight4?: string;
  detailsTitle?: string;
  fullDescriptionTitle?: string;
  fullDescription?: string;
  includedTitle?: string;
  included?: string;
  notIncludedTitle?: string;
  notIncluded?: string;
  importantInfoTitle?: string;
  importantInfo?: string;
  bookingSummaryTitle?: string;
  pricePrefix?: string;
  priceUnit?: string;
  bookingButtonLabel?: string;
  bookingLink?: string;
  galleryTitle?: string;
  galleryImage1?: CmsImage;
  galleryImage1Alt?: string;
  galleryImage2?: CmsImage;
  galleryImage2Alt?: string;
  galleryImage3?: CmsImage;
  galleryImage3Alt?: string;
  galleryImage4?: CmsImage;
  galleryImage4Alt?: string;
  galleryImage5?: CmsImage;
  galleryImage5Alt?: string;
  galleryImage6?: CmsImage;
  galleryImage6Alt?: string;
};

type GalleryImage = {
  src: string;
  alt: string;
};

const COLLECTION_ID = 'ExcursionPageContent';

function cleanText(value: unknown, fallback = '') {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback;
}

function paragraphList(value?: string) {
  return (value || '')
    .replace(/\r/g, '')
    .split(/\n\s*\n/)
    .map((item) => item.replace(/\s*\n\s*/g, ' ').trim())
    .filter(Boolean);
}

function bulletList(value?: string) {
  return (value || '')
    .replace(/\r/g, '')
    .split(/\n+/)
    .map((item) => item.replace(/^[\u2022\-]\s*/, '').trim())
    .filter(Boolean);
}

function formatPrice(value: number | string | undefined, currencySymbol?: string) {
  const currency = cleanText(currencySymbol, '\u20AC');
  const numeric = typeof value === 'number'
    ? value
    : Number(String(value ?? '').replace(',', '.'));

  if (!Number.isFinite(numeric)) return '';
  const formatted = Number.isInteger(numeric)
    ? numeric.toFixed(0)
    : numeric.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
  return `${formatted}${currency}`;
}

async function loadExcursion(slug: string) {
  const result = await items
    .query(COLLECTION_ID)
    .eq('slug', slug)
    .eq('active', true)
    .limit(1)
    .find();

  return (result.items?.[0] as unknown as ExcursionPageContent | undefined) || null;
}

function moveGallery(gallery: HTMLDivElement, direction: -1 | 1) {
  const firstItem = gallery.querySelector<HTMLElement>('.tet-excursion-preview__gallery-item');
  if (!firstItem) return;

  const gap = Number.parseFloat(window.getComputedStyle(gallery).columnGap) || 0;
  const step = firstItem.offsetWidth + gap;
  const maxScroll = Math.max(0, gallery.scrollWidth - gallery.clientWidth);
  const nextScroll = direction === 1
    ? (gallery.scrollLeft + step >= maxScroll - 2 ? 0 : gallery.scrollLeft + step)
    : (gallery.scrollLeft <= 2 ? maxScroll : gallery.scrollLeft - step);

  gallery.scrollTo({ left: nextScroll, behavior: 'smooth' });
}

function BookingAction({
  href,
  className,
  ariaLabel,
  children,
}: {
  href: string;
  className: string;
  ariaLabel?: string;
  children: ReactNode;
}) {
  if (/^(?:https?:\/\/|mailto:|tel:)/i.test(href)) {
    return (
      <a className={className} href={href} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} to={href} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

function CollapsibleSection({
  title,
  content,
  open,
  onToggle,
}: {
  title: string;
  content: string[];
  open: boolean;
  onToggle: () => void;
}) {
  if (!content.length) return null;

  return (
    <div className="tet-excursion-preview__collapsible-section">
      <button
        type="button"
        className="tet-excursion-preview__collapsible-header"
        aria-expanded={open}
        onClick={onToggle}
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
              {content.map((item, index) => (
                <li key={`${item}-${index}`}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ExcursionPreviewPage() {
  const { slug = 'marmaris' } = useParams<{ slug: string }>();
  const { pathname } = useLocation();
  const [excursion, setExcursion] = useState<ExcursionPageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [openDetail, setOpenDetail] = useState<string | null>(null);
  const [animatedQuickFact, setAnimatedQuickFact] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const quickFactsRef = useRef<HTMLElement>(null);
  const storyPanelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    setExcursion(null);
    setOpenDetail(null);

    loadExcursion(slug)
      .then((result) => {
        if (!active) return;
        setExcursion(result);
        if (!result) setError('We could not find this excursion.');
      })
      .catch((reason) => {
        if (!active) return;
        console.error('Unable to load excursion content from CMS:', reason);
        setError('This excursion is temporarily unavailable. Please try again shortly.');
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => { active = false; };
  }, [slug]);

  useEffect(() => {
    if (!pathname.startsWith('/excursion-preview/')) return;

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
  }, [pathname]);

  useEffect(() => {
    if (!excursion?.title) return;
    const previousTitle = document.title;
    document.title = excursion.title;
    return () => { document.title = previousTitle; };
  }, [excursion?.title]);

  const overview = useMemo(() => paragraphList(excursion?.overviewText), [excursion?.overviewText]);
  const fullDescription = useMemo(() => paragraphList(excursion?.fullDescription), [excursion?.fullDescription]);
  const included = useMemo(() => bulletList(excursion?.included), [excursion?.included]);
  const notIncluded = useMemo(() => bulletList(excursion?.notIncluded), [excursion?.notIncluded]);
  const importantInfo = useMemo(() => bulletList(excursion?.importantInfo), [excursion?.importantInfo]);

  const highlights = useMemo(() => [
    excursion?.highlight1,
    excursion?.highlight2,
    excursion?.highlight3,
    excursion?.highlight4,
  ].map((value) => cleanText(value)).filter(Boolean), [excursion]);

  const galleryImages = useMemo<GalleryImage[]>(() => {
    if (!excursion) return [];

    return [1, 2, 3, 4, 5, 6]
      .map((index) => {
        const imageValue = excursion[`galleryImage${index}` as keyof ExcursionPageContent] as CmsImage | undefined;
        const src = normalizeWixMediaImage(imageValue);
        const alt = cleanText(
          excursion[`galleryImage${index}Alt` as keyof ExcursionPageContent],
          `${cleanText(excursion.title, 'Excursion')} gallery view ${index}`,
        );
        return src ? { src, alt } : null;
      })
      .filter((image): image is GalleryImage => Boolean(image))
      .filter((image, index, values) => values.findIndex((candidate) => candidate.src === image.src) === index);
  }, [excursion]);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!excursion || loading || error || !gallery || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rotation = window.setInterval(() => moveGallery(gallery, 1), 5000);
    return () => window.clearInterval(rotation);
  }, [excursion, loading, error, galleryImages.length]);

  useEffect(() => {
    const sections = [quickFactsRef.current, storyPanelRef.current]
      .filter((section): section is HTMLElement => Boolean(section));
    if (!excursion || loading || error || !sections.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
      { threshold: 0.18, rootMargin: '0px 0px -6% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [excursion, loading, error]);

  if (loading) {
    return (
      <div className="tet-excursion-preview__state">
        <div>
          <div className="tet-excursion-preview__loader" />
          <p>Loading excursion details&hellip;</p>
        </div>
      </div>
    );
  }

  if (!excursion || error) {
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

  const title = cleanText(excursion.title, 'Excursion');
  const heroDescription = cleanText(excursion.heroDescription);
  const heroImage = normalizeWixMediaImage(excursion.heroImage) || travelMedia('excursions-hero.jpg');
  const heroImageAlt = cleanText(excursion.heroImageAlt, title);
  const price = formatPrice(excursion.price, excursion.currencySymbol);
  const actionUrl = cleanText(excursion.bookingLink, '/contact');
  const bookingButtonLabel = cleanText(excursion.bookingButtonLabel, 'Book Now');
  const quickFacts = [
    { label: cleanText(excursion.durationLabel, 'Duration'), value: cleanText(excursion.durationValue), icon: Clock },
    { label: cleanText(excursion.departureLabel, 'Departure'), value: cleanText(excursion.departureValue), icon: Calendar },
    { label: cleanText(excursion.languageLabel, 'Language'), value: cleanText(excursion.languageValue), icon: Globe },
    { label: cleanText(excursion.priceLabel, 'Price'), value: price, icon: Euro },
  ].filter((fact) => Boolean(fact.value));

  const scrollGallery = (direction: -1 | 1) => {
    const gallery = galleryRef.current;
    if (gallery) moveGallery(gallery, direction);
  };

  return (
    <div className="tet-excursion-preview">
      <section className="tet-excursion-preview__hero" aria-labelledby="preview-title">
        <Image className="tet-excursion-preview__hero-image" src={heroImage} alt={heroImageAlt} />
        <div className="tet-excursion-preview__hero-content">
          <h1 id="preview-title">{title}</h1>
          {heroDescription && <p className="tet-excursion-preview__hero-description">{heroDescription}</p>}
          <BookingAction className="tet-excursion-preview__button" href={actionUrl}>
            {bookingButtonLabel}
            <ArrowRight size={16} aria-hidden="true" />
          </BookingAction>
        </div>
      </section>

      <div className="tet-excursion-preview__container">
        {quickFacts.length > 0 && (
          <section
            ref={quickFactsRef}
            className="tet-excursion-preview__section tet-excursion-preview__section--quick-facts"
          >
            <p className="tet-excursion-preview__eyebrow">
              {cleanText(excursion.quickFactsTitle, 'Quick Facts')}
            </p>
            <div className="tet-excursion-preview__quick-facts">
              {quickFacts.map((fact) => {
                const IconComponent = fact.icon;
                return (
                  <button
                    type="button"
                    className={`tet-excursion-preview__quick-fact${animatedQuickFact === fact.label ? ' is-activated' : ''}`}
                    key={fact.label}
                    aria-label={`${fact.label}: ${fact.value}`}
                    onClick={() => setAnimatedQuickFact(fact.label)}
                    onAnimationEnd={(event) => {
                      if (event.target === event.currentTarget) {
                        setAnimatedQuickFact((current) => current === fact.label ? null : current);
                      }
                    }}
                  >
                    <IconComponent className="tet-excursion-preview__quick-fact-icon" aria-hidden="true" />
                    <div className="tet-excursion-preview__quick-fact-content">
                      <span className="tet-excursion-preview__quick-fact-label">{fact.label}</span>
                      <span className="tet-excursion-preview__quick-fact-value">{fact.value}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {(overview.length > 0 || highlights.length > 0) && (
          <section
            ref={storyPanelRef}
            className="tet-excursion-preview__story-panel"
            aria-label="Excursion overview and highlights"
          >
            {overview.length > 0 && (
              <div className="tet-excursion-preview__story-overview">
                <h2 className="tet-excursion-preview__section-title">
                  {cleanText(excursion.overviewTitle, 'Overview')}
                </h2>
                {overview.map((paragraph, index) => (
                  <p key={`${paragraph}-${index}`} className="tet-excursion-preview__intro-text">{paragraph}</p>
                ))}
              </div>
            )}

            {highlights.length > 0 && (
              <div className="tet-excursion-preview__story-highlights">
                <h2 className="tet-excursion-preview__section-title">
                  {cleanText(excursion.highlightsTitle, 'Highlights')}
                </h2>
                <div className="tet-excursion-preview__highlights-grid">
                  {highlights.map((highlight, index) => (
                    <article className="tet-excursion-preview__highlight-item" key={`${highlight}-${index}`}>
                      <span className="tet-excursion-preview__highlight-number" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p>{highlight}</p>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        <div className="tet-excursion-preview__grid">
          <div className="tet-excursion-preview__main-content">
            {(fullDescription.length > 0 || included.length > 0 || notIncluded.length > 0 || importantInfo.length > 0) && (
              <section className="tet-excursion-preview__section">
                <h2 className="tet-excursion-preview__section-title">
                  {cleanText(excursion.detailsTitle, 'Details')}
                </h2>
                <CollapsibleSection
                  title={cleanText(excursion.fullDescriptionTitle, 'Full Description')}
                  content={fullDescription}
                  open={openDetail === 'full-description'}
                  onToggle={() => setOpenDetail((current) => current === 'full-description' ? null : 'full-description')}
                />
                <CollapsibleSection
                  title={cleanText(excursion.includedTitle, "What's Included")}
                  content={included}
                  open={openDetail === 'included'}
                  onToggle={() => setOpenDetail((current) => current === 'included' ? null : 'included')}
                />
                <CollapsibleSection
                  title={cleanText(excursion.notIncludedTitle, "What's Not Included")}
                  content={notIncluded}
                  open={openDetail === 'not-included'}
                  onToggle={() => setOpenDetail((current) => current === 'not-included' ? null : 'not-included')}
                />
                <CollapsibleSection
                  title={cleanText(excursion.importantInfoTitle, 'Important Information')}
                  content={importantInfo}
                  open={openDetail === 'important-information'}
                  onToggle={() => setOpenDetail((current) => current === 'important-information' ? null : 'important-information')}
                />
              </section>
            )}
          </div>

          <aside className="tet-excursion-preview__booking-summary">
            <h3 className="tet-excursion-preview__booking-summary-title">
              {cleanText(excursion.bookingSummaryTitle, 'Booking Summary')}
            </h3>
            {price && (
              <div className="tet-excursion-preview__booking-summary-price">
                <span className="tet-excursion-preview__booking-summary-price-label">
                  {cleanText(excursion.pricePrefix, 'From')}
                </span>
                <span className="tet-excursion-preview__booking-summary-price-value">{price}</span>
                <span className="tet-excursion-preview__booking-summary-price-unit">
                  {cleanText(excursion.priceUnit, 'per person')}
                </span>
              </div>
            )}
            <BookingAction
              className="tet-excursion-preview__button tet-excursion-preview__booking-summary-button"
              href={actionUrl}
            >
              {bookingButtonLabel}
            </BookingAction>
          </aside>
        </div>

        {galleryImages.length > 0 && (
          <section className="tet-excursion-preview__section tet-excursion-preview__gallery-section">
            <div className="tet-excursion-preview__gallery-heading">
              <h2 className="tet-excursion-preview__section-title">
                {cleanText(excursion.galleryTitle, 'Gallery')}
              </h2>
              {galleryImages.length > 1 && (
                <div className="tet-excursion-preview__gallery-controls" aria-label="Gallery navigation">
                  <button type="button" aria-label="Previous gallery image" onClick={() => scrollGallery(-1)}>
                    <span className="tet-excursion-preview__gallery-control-arrow is-previous" aria-hidden="true" />
                  </button>
                  <button type="button" aria-label="Next gallery image" onClick={() => scrollGallery(1)}>
                    <span className="tet-excursion-preview__gallery-control-arrow is-next" aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>
            <div
              ref={galleryRef}
              className={`tet-excursion-preview__gallery${galleryImages.length === 1 ? ' is-single' : ''}`}
            >
              {galleryImages.map((galleryImage, index) => (
                <div className="tet-excursion-preview__gallery-item" key={`${galleryImage.src}-${index}`}>
                  <div className="tet-excursion-preview__gallery-item-wrapper">
                    <Image
                      className="tet-excursion-preview__gallery-image"
                      src={galleryImage.src}
                      alt={galleryImage.alt}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <BookingAction
        className="tet-excursion-preview__mobile-book-now"
        href={actionUrl}
        ariaLabel={`Book ${title}`}
      >
        {bookingButtonLabel}
        <ArrowRight size={17} aria-hidden="true" />
      </BookingAction>
    </div>
  );
}
