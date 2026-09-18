import { Image } from '@/components/ui/image';
import { travelMedia } from '@/config/wix-media';
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Globe2,
  Mail,
  Menu,
  Phone,
  Plane,
  ShieldCheck,
  Star,
  X,
  type LucideIcon,
} from 'lucide-react';
import { FormEvent, ReactNode, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
type NavigationItem = {
  label: string;
  to: string;
  children?: Array<{ label: string; to: string }>;
};

export { travelMedia };

const navigation: NavigationItem[] = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT', to: '/about' },
  {
    label: 'DESTINATIONS', to: '/destinations', children: [
      { label: 'All Destinations', to: '/destinations' },
      { label: 'Rhodes', to: '/rhodes' },
      { label: 'Kos', to: '/kos' },
    ]
  },
  { label: 'SERVICES', to: '/services' },
  { label: 'MICE & GROUPS', to: '/mice-groups' },
  { label: 'EXPERIENCES', to: '/experiences' },
  { label: 'EXCURSIONS', to: '/excursions' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const closeNavigation = () => {
    setOpen(false);
    setDestinationsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        setDestinationsOpen(false);
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return (
    <header id="site-header" className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="site-header__inner">
        <Link to="/" className="brand-link" aria-label="Top Euro Travel home" onClick={closeNavigation}>
          <Image src={travelMedia('logo.png')} alt="Top Euro Travel" className="brand-logo" />
        </Link>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => {
            if (open) setDestinationsOpen(false);
            setOpen((value) => !value);
          }}
        >
          {open ? <X /> : <Menu />}
        </button>

        <div key={open ? 'open' : 'closed'} id="primary-navigation" className={`site-header__nav-wrap ${open ? 'is-open' : ''}`}>
          <nav className="main-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <div className={`main-nav__item ${item.children && destinationsOpen ? 'is-submenu-open' : ''}`} key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={(event) => {
                    if (item.children && window.matchMedia('(max-width: 1180px)').matches) {
                      event.preventDefault();
                      setDestinationsOpen((value) => !value);
                      return;
                    }
                    closeNavigation();
                  }}
                  aria-haspopup={item.children ? 'menu' : undefined}
                  aria-expanded={item.children ? destinationsOpen : undefined}
                  className={({ isActive }) => {
                    const childIsActive = item.children?.some(
                      (child) => pathname === child.to || pathname.startsWith(`${child.to}/`),
                    );

                    return `main-nav__link ${isActive || childIsActive ? 'is-active' : ''}`;
                  }}
                >
                  <span>{item.label}</span>
                  {item.children && <ChevronDown className="main-nav__chevron" aria-hidden="true" />}
                </NavLink>
                {item.children && (
                  <div className="main-nav__dropdown main-nav__dropdown--glass" aria-label={`${item.label} submenu`}>
                    {item.children.map((child) => (
                      <Link key={child.label} to={child.to} onClick={closeNavigation} className="main-nav__dropdown-item">
                        <span className="main-nav__dropdown-dot" />
                        <span>{child.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="header-actions">
            <Link className="button button--gold button--small header-agents-btn" to="https://login.topeurotravel.gr/" onClick={closeNavigation}>AGENTS PORTAL</Link>
            <Link className="button button--gold button--small header-contact-btn" to="/contact" onClick={closeNavigation}>CONTACT</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export function QuickContactRail() {
  return (
    <aside className="quick-contact-rail" aria-label="Quick contact">
      <a href="mailto:info@topeurotravel.gr" aria-label="Email Top Euro Travel">
        <Mail aria-hidden="true" />
        <span>EMAIL US</span>
      </a>
      <a href="tel:+302241045506" aria-label="Call Top Euro Travel at +30 22410 45506">
        <Phone aria-hidden="true" />
        <span>CALL US</span>
      </a>
    </aside>
  );
}

type HeroProps = {
  title: ReactNode;
  breadcrumb: string;
  image: string;
  description?: ReactNode;
  className?: string;
};

export function PageHero({ title, breadcrumb, image, description, className = '' }: HeroProps) {
  return (
    <section className={`page-hero ${className}`} style={{ backgroundImage: `url("${image}")` }}>
      <div className="page-hero__overlay" />
      <div className="page-hero__content shell">
        <h1>{title}</h1>
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li aria-hidden="true"><span>•</span></li>
            <li aria-current="page"><strong>{breadcrumb}</strong></li>
          </ol>
        </nav>
        {description && <div className="page-hero__description">{description}</div>}
      </div>
    </section>
  );
}

type SeoPageType = 'website' | 'article';

type PageSeoProps = {
  title?: string;
  description?: string;
  image?: string;
  type?: SeoPageType;
  noIndex?: boolean;
};

type RouteSeoMetadata = {
  label: string;
  title: string;
  description: string;
  keywords: string[];
  noIndex?: boolean;
  type?: SeoPageType;
  deriveTitleFromH1?: boolean;
};

const DEFAULT_SEO_IMAGE =
  'https://static.wixstatic.com/media/5a118b_3904ba3b49764d06b35840292a63bc65~mv2.jpg';
const DEFAULT_SEO_IMAGE_ALT = 'Top Euro Travel destination management in Greece';

const ROUTE_SEO: Record<string, RouteSeoMetadata> = {
  '/': {
    label: 'Home',
    title: 'DMC Greece | Rhodes & Kos | Top Euro Travel',
    description:
      'Top Euro Travel is a trusted destination management company in Greece, delivering DMC services, MICE, groups, transfers and excursions in Rhodes and Kos.',
    keywords: [
      'DMC Greece',
      'destination management company Greece',
      'Rhodes DMC',
      'Kos DMC',
      'MICE Greece',
      'group travel Greece',
    ],
  },
  '/about': {
    label: 'About',
    title: 'About Top Euro Travel | DMC Greece Since 1989',
    description:
      'Meet Top Euro Travel, a Greece destination management company based in Rhodes since 1989, serving tour operators, groups and travellers across Europe.',
    keywords: [
      'Top Euro Travel',
      'DMC Greece since 1989',
      'destination management company Rhodes',
      'Greece travel partner',
    ],
  },
  '/destinations': {
    label: 'Destinations',
    title: 'Rhodes & Kos Destinations | DMC Greece',
    description:
      'Discover Rhodes and Kos with a local Greece DMC offering accommodation, transfers, excursions, MICE services and tailor-made island experiences.',
    keywords: [
      'Rhodes destination',
      'Kos destination',
      'Greek islands DMC',
      'Rhodes and Kos travel',
    ],
  },
  '/rhodes': {
    label: 'Rhodes',
    title: 'Rhodes DMC & Destination Management | Top Euro Travel',
    description:
      'Local Rhodes DMC for hotels, transfers, excursions, groups, MICE and tailor-made destination management services across the island.',
    keywords: [
      'Rhodes DMC',
      'destination management Rhodes',
      'Rhodes transfers',
      'Rhodes excursions',
      'MICE Rhodes',
    ],
  },
  '/kos': {
    label: 'Kos',
    title: 'Kos DMC & Destination Management | Top Euro Travel',
    description:
      'Local Kos DMC for hotels, transfers, excursions, groups, MICE and tailor-made destination management services across the island.',
    keywords: [
      'Kos DMC',
      'destination management Kos',
      'Kos transfers',
      'Kos excursions',
      'MICE Kos',
    ],
  },
  '/services': {
    label: 'Services',
    title: 'Destination Management Services Greece | Top Euro Travel',
    description:
      'Destination management services in Greece for tour operators, agencies, groups and travellers: hotels, transfers, MICE, excursions and API connectivity.',
    keywords: [
      'destination management services Greece',
      'ground handling Greece',
      'hotel contracting Greece',
      'travel API Greece',
      'group travel services',
    ],
  },
  '/mice-groups': {
    label: 'MICE & Groups',
    title: 'MICE & Group Travel Greece | Top Euro Travel',
    description:
      'Professional MICE and group travel in Greece for meetings, incentives, conferences, events and tailor-made programmes in Rhodes and Kos.',
    keywords: [
      'MICE Greece',
      'group travel Greece',
      'incentive travel Rhodes',
      'conference services Greece',
      'events Greece',
    ],
  },
  '/experiences': {
    label: 'Experiences',
    title: 'Tailor-Made Greece Experiences | Top Euro Travel',
    description:
      'Curated local experiences in Rhodes and Kos, from culture and gastronomy to nature, wellness and tailor-made activities for groups and independent travellers.',
    keywords: [
      'Greece experiences',
      'Rhodes experiences',
      'Kos experiences',
      'tailor-made Greece travel',
      'local island activities',
    ],
  },
  '/excursions': {
    label: 'Excursions',
    title: 'Rhodes Tours & Excursions | Top Euro Travel',
    description:
      'Book carefully selected Rhodes tours and excursions with local expertise, reliable operations and experiences for individuals, groups and travel partners.',
    keywords: [
      'Rhodes excursions',
      'Rhodes tours',
      'Rhodes day trips',
      'things to do in Rhodes',
      'group excursions Rhodes',
    ],
  },
  '/blog': {
    label: 'Blog',
    title: 'Greece Travel Insights | Top Euro Travel Blog',
    description:
      'Greece travel insights, Rhodes and Kos destination guides, MICE trends and local expertise from the Top Euro Travel team.',
    keywords: [
      'Greece travel blog',
      'Rhodes travel guide',
      'Kos travel guide',
      'MICE trends Greece',
      'Greek island insights',
    ],
  },
  '/faq': {
    label: 'FAQ',
    title: 'Greece DMC & Travel Services FAQ | Top Euro Travel',
    description:
      'Answers about Top Euro Travel DMC services, Rhodes and Kos destinations, transfers, excursions, groups, MICE and travel planning in Greece.',
    keywords: [
      'Greece DMC FAQ',
      'Rhodes travel questions',
      'Kos travel questions',
      'MICE Greece FAQ',
      'Top Euro Travel services',
    ],
  },
  '/contact': {
    label: 'Contact',
    title: 'Contact Top Euro Travel | DMC Rhodes & Kos',
    description:
      'Contact Top Euro Travel for destination management, hotels, transfers, excursions, groups and MICE services in Rhodes, Kos and Greece.',
    keywords: [
      'contact DMC Greece',
      'Top Euro Travel contact',
      'Rhodes travel agency',
      'Kos DMC contact',
    ],
  },
  '/privacy': {
    label: 'Privacy Policy',
    title: 'Privacy Policy | Top Euro Travel',
    description: 'Read the Top Euro Travel privacy policy.',
    keywords: ['Top Euro Travel privacy policy'],
    noIndex: true,
  },
  '/terms': {
    label: 'Terms & Conditions',
    title: 'Terms & Conditions | Top Euro Travel',
    description: 'Read the Top Euro Travel website terms and conditions.',
    keywords: ['Top Euro Travel terms and conditions'],
    noIndex: true,
  },
  '/booking-confirmation': {
    label: 'Booking Confirmation',
    title: 'Booking Confirmation | Top Euro Travel',
    description: 'Top Euro Travel booking confirmation.',
    keywords: ['Top Euro Travel booking'],
    noIndex: true,
  },
};

function routeSeoFor(pathname: string): RouteSeoMetadata | undefined {
  const exact = ROUTE_SEO[pathname];
  if (exact) return exact;

  if (/^\/excursions\/[^/]+$/.test(pathname)) {
    return {
      label: 'Excursion',
      title: 'Rhodes Excursion & Tour | Top Euro Travel',
      description:
        'Explore a Rhodes excursion with Top Euro Travel, operated with local knowledge, reliable service and carefully planned island experiences.',
      keywords: ['Rhodes excursion', 'Rhodes tour', 'Rhodes day trip', 'Top Euro Travel'],
      deriveTitleFromH1: true,
    };
  }

  if (/^\/excursion-preview\/[^/]+$/.test(pathname)) {
    return {
      label: 'Excursion Preview',
      title: 'Excursion Preview | Top Euro Travel',
      description: 'Preview a Top Euro Travel excursion.',
      keywords: ['Top Euro Travel excursion preview'],
      noIndex: true,
      deriveTitleFromH1: true,
    };
  }

  if (/^\/booking-calendar\/[^/]+$/.test(pathname)) {
    return {
      label: 'Booking Calendar',
      title: 'Select a Booking Date | Top Euro Travel',
      description: 'Choose an available date for your Top Euro Travel experience.',
      keywords: ['Top Euro Travel booking calendar'],
      noIndex: true,
    };
  }

  if (/^\/booking-form\/[^/]+$/.test(pathname)) {
    return {
      label: 'Booking Form',
      title: 'Complete Your Booking | Top Euro Travel',
      description: 'Complete your Top Euro Travel experience booking.',
      keywords: ['Top Euro Travel booking form'],
      noIndex: true,
    };
  }

  return undefined;
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  const selector = 'meta[' + attribute + '="' + key + '"]';
  const matches = Array.from(document.head.querySelectorAll<HTMLMetaElement>(selector));
  const meta = matches[0] ?? document.createElement('meta');

  meta.setAttribute(attribute, key);
  meta.content = content;
  if (!meta.parentNode) document.head.appendChild(meta);
  matches.slice(1).forEach((duplicate) => duplicate.remove());
}

function upsertLink(rel: string, href: string, hrefLang?: string) {
  const selector = hrefLang
    ? 'link[rel="' + rel + '"][hreflang="' + hrefLang + '"]'
    : 'link[rel="' + rel + '"]:not([hreflang])';
  const matches = Array.from(document.head.querySelectorAll<HTMLLinkElement>(selector));
  const link = matches[0] ?? document.createElement('link');

  link.rel = rel;
  link.href = href;
  if (hrefLang) link.setAttribute('hreflang', hrefLang);
  if (!link.parentNode) document.head.appendChild(link);
  matches.slice(1).forEach((duplicate) => duplicate.remove());
}

function upsertStructuredData(id: string, data: Record<string, unknown>) {
  let script = document.head.querySelector<HTMLScriptElement>('script#' + id);
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.text = JSON.stringify(data);
}

function buildStructuredData({
  canonicalUrl,
  title,
  description,
  image,
  keywords,
  pageLabel,
  normalizedPath,
}: {
  canonicalUrl: string;
  title: string;
  description: string;
  image: string;
  keywords: string[];
  pageLabel: string;
  normalizedPath: string;
}): Record<string, unknown> {
  const origin = new URL(canonicalUrl).origin;
  const organizationId = origin + '/#organization';
  const websiteId = origin + '/#website';
  const webpageId = canonicalUrl + '#webpage';
  const breadcrumbId = canonicalUrl + '#breadcrumb';

  const graph: Array<Record<string, unknown>> = [
    {
      '@type': 'TravelAgency',
      '@id': organizationId,
      name: 'Top Euro Travel',
      url: origin + '/',
      image,
      foundingDate: '1989',
      telephone: '+302241045506',
      email: 'info@topeurotravel.gr',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5th Km Rhodes-Lindos Avenue',
        addressLocality: 'Rhodes',
        postalCode: '851 00',
        addressCountry: 'GR',
      },
      areaServed: [
        { '@type': 'Continent', name: 'Europe' },
        { '@type': 'Country', name: 'Greece' },
      ],
      availableLanguage: {
        '@type': 'Language',
        name: 'English',
        alternateName: 'en',
      },
      sameAs: [
        'https://www.linkedin.com/company/topeurotravel',
        'https://www.facebook.com/TopEuroTravel',
        'https://www.instagram.com/topeurotravel_/',
      ],
    },
  ];

  if (normalizedPath === '/') {
    graph.push({
      '@type': 'WebSite',
      '@id': websiteId,
      url: origin + '/',
      name: 'Top Euro Travel',
      inLanguage: 'en',
      publisher: { '@id': organizationId },
    });
  }

  const webPage: Record<string, unknown> = {
    '@type': 'WebPage',
    '@id': webpageId,
    url: canonicalUrl,
    name: title,
    description,
    inLanguage: 'en',
    isPartOf: { '@id': websiteId },
    about: { '@id': organizationId },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: image,
    },
    keywords: keywords.join(', '),
  };

  if (normalizedPath !== '/') {
    webPage.breadcrumb = { '@id': breadcrumbId };
  }
  graph.push(webPage);

  if (normalizedPath !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': breadcrumbId,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: origin + '/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: pageLabel,
          item: canonicalUrl,
        },
      ],
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export function PageSeo({
  title,
  description,
  image,
  type,
  noIndex,
}: PageSeoProps = {}) {
  const { pathname } = useLocation();
  const normalizedPath =
    pathname !== '/' ? pathname.replace(/\/+$/, '') || '/' : '/';

  useEffect(() => {
    const routeMetadata = routeSeoFor(normalizedPath);
    if (!routeMetadata && !title && !description) return;

    const heading = routeMetadata?.deriveTitleFromH1
      ? document.querySelector('h1')?.textContent?.replace(/\s+/g, ' ').trim()
      : undefined;
    const existingDescription =
      document.head.querySelector<HTMLMetaElement>('meta[name="description"]')?.content;
    const effectiveTitle =
      (heading ? heading + ' | Top Euro Travel' : routeMetadata?.title) ??
      title ??
      document.title;
    const effectiveDescription =
      routeMetadata?.description ?? description ?? existingDescription;

    if (!effectiveTitle || !effectiveDescription) return;

    const origin = window.location.origin;
    const canonicalUrl = origin + (normalizedPath === '/' ? '/' : normalizedPath);
    const effectiveImage = image ?? DEFAULT_SEO_IMAGE;
    const effectiveType =
      routeMetadata?.type ??
      type ??
      (normalizedPath.startsWith('/blog/') ? 'article' : 'website');
    const effectiveNoIndex = routeMetadata?.noIndex ?? noIndex ?? false;
    const robots = effectiveNoIndex
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    const keywords =
      routeMetadata?.keywords ??
      [effectiveTitle.split(' | ')[0], 'Top Euro Travel', 'Greece travel'];
    const pageLabel =
      routeMetadata?.label ?? heading ?? effectiveTitle.split(' | ')[0];

    document.documentElement.lang = 'en';
    document.title = effectiveTitle;

    upsertMeta('name', 'description', effectiveDescription);
    upsertMeta('name', 'robots', robots);
    upsertMeta('name', 'googlebot', robots);

    upsertMeta('property', 'og:title', effectiveTitle);
    upsertMeta('property', 'og:description', effectiveDescription);
    upsertMeta('property', 'og:type', effectiveType);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:site_name', 'Top Euro Travel');
    upsertMeta('property', 'og:locale', 'en_GB');
    upsertMeta('property', 'og:image', effectiveImage);
    upsertMeta('property', 'og:image:alt', DEFAULT_SEO_IMAGE_ALT);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', effectiveTitle);
    upsertMeta('name', 'twitter:description', effectiveDescription);
    upsertMeta('name', 'twitter:image', effectiveImage);

    upsertLink('canonical', canonicalUrl);
    upsertLink('alternate', canonicalUrl, 'en');
    upsertLink('alternate', canonicalUrl, 'x-default');

    upsertStructuredData(
      'top-euro-travel-structured-data',
      buildStructuredData({
        canonicalUrl,
        title: effectiveTitle,
        description: effectiveDescription,
        image: effectiveImage,
        keywords,
        pageLabel,
        normalizedPath,
      }),
    );
  }, [description, image, noIndex, normalizedPath, title, type]);

  return null;
}

export function Gold({ children }: { children: ReactNode }) {
  return <span className="text-gold">{children}</span>;
}

export function SectionTitle({
  children,
  eyebrow,
  className = '',
}: {
  children: ReactNode;
  eyebrow?: string;
  className?: string;
}) {
  return (
    <div className={`section-title ${className}`}>
      {eyebrow && <span>{eyebrow}</span>}
      <h2>{children}</h2>
    </div>
  );
}

export function PlanePath({ className = '' }: { className?: string }) {
  return (
    <div className={`plane-path plane-path--animated ${className}`} aria-hidden="true">
      <span />
      <Plane />
    </div>
  );
}

export function Photo({
  src,
  alt,
  className = '',
  loading = 'lazy',
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}) {
  return <Image src={src} alt={alt} loading={loading} decoding="async" className={`travel-photo ${className}`} />;
}

export function IconFeature({
  icon: Icon,
  title,
  children,
  className = '',
}: {
  icon: LucideIcon;
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`icon-feature ${className}`}>
      <div className="icon-feature__icon"><Icon /></div>
      <div>
        <h3>{title}</h3>
        {children && <p>{children}</p>}
      </div>
    </div>
  );
}

export function PartnerMark({ kind, compact = false }: { kind: 'hatta' | 'iata' | 'dmc'; compact?: boolean }) {
  const content = {
    hatta: { icon: ShieldCheck, main: 'HATTA', sub: 'HELLENIC ASSOCIATION OF TRAVEL & TOURIST AGENCIES' },
    iata: { icon: Globe2, main: 'IATA', sub: 'ACCREDITED AGENT' },
    dmc: { icon: Building2, main: 'GREECE DMCs', sub: 'NETWORK' },
  }[kind];
  const Icon = content.icon;
  return (
    <div className={`partner-mark ${compact ? 'partner-mark--compact' : ''}`}>
      <Icon />
      <div><strong>{content.main}</strong><span>{content.sub}</span></div>
    </div>
  );
}

export function TrustBar({ stats = true, className = '' }: { stats?: boolean; className?: string }) {
  return (
    <section className={`trust-bar ${className}`}>
      <div className="trust-bar__partners">
        <PartnerMark kind="hatta" />
        <PartnerMark kind="dmc" />
        <PartnerMark kind="iata" />
      </div>
      {stats && (
        <div className="trust-bar__stats">
          <Stat value="1989" label="Established" />
          <Stat value="100K+" label="Guests Annually" />
          <Stat value="200+" label="Hotel Partners" />
          <Stat value="24/7" label="Support" />
        </div>
      )}
    </section>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

export function RequestBanner({
  title = 'Have a special request?',
  subtitle = 'We are here to make it happen!',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="request-banner shell">
      <PlanePath />
      <div className="request-banner__copy"><h2>{title}</h2><p>{subtitle}</p></div>
      <div className="request-banner__benefits">
        <IconFeature icon={ShieldCheck} title="Tailor-made Itineraries" />
        <IconFeature icon={Building2} title="Private Groups & VIP Services" />
        <IconFeature icon={Star} title="Local Expertise You Can Trust" />
      </div>
      <Link className="button button--gold" to="/contact">ENQUIRE NOW</Link>
    </section>
  );
}

export function MockForm({
  children,
  successMessage,
  className = '',
  id,
}: {
  children: ReactNode;
  successMessage: string;
  className?: string;
  id?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitted(false);
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 650);
  };
  return (
    <form id={id} className={className} onSubmit={submit} aria-busy={submitting}>
      {children}
      {submitting && <p className="form-status form-status--loading" role="status">Sending your message…</p>}
      {submitted && <p className="form-success form-status" role="status">{successMessage}</p>}
    </form>
  );
}

export function ArrowLink({ to, children }: { to: string; children: ReactNode }) {
  return <Link className="arrow-link" to={to}>{children}<ArrowRight /></Link>;
}
