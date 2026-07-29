import { FormEvent, ReactNode, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Facebook,
  Globe2,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Plane,
  ShieldCheck,
  Star,
  X,
  Youtube,
  type LucideIcon,
} from 'lucide-react';
import { Image } from '@/components/ui/image';

export const ASSET = '/assets/travel';
export const REFERENCE = '/assets/references';

const navigation = [
  { label: 'ABOUT', to: '/about' },
  { label: 'DESTINATIONS', to: '/destinations' },
  { label: 'SERVICES', to: '/services' },
  { label: 'MICE & GROUPS', to: '/mice-groups' },
  { label: 'EXPERIENCES', to: '/experiences' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="site-header__inner">
        <Link to="/" className="brand-link" aria-label="Top Euro Travel home" onClick={() => setOpen(false)}>
          <Image src={`${ASSET}/logo.png`} alt="Top Euro Travel" className="brand-logo" />
        </Link>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>

        <div id="primary-navigation" className={`site-header__nav-wrap ${open ? 'is-open' : ''}`}>
          <nav className="main-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `main-nav__link ${isActive ? 'is-active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="header-actions">
            <Link className="button button--navy button--small" to="/agents-portal" onClick={() => setOpen(false)}>
              AGENTS PORTAL
            </Link>
            <Link className="button button--gold button--small" to="/contact" onClick={() => setOpen(false)}>
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="footer-brand">
          <Image src={`${ASSET}/logo.png`} alt="Top Euro Travel" className="footer-logo" />
          <p>Your trusted DMC in Rhodes &amp; Kos.</p>
          <p>Local expertise, unforgettable experiences.</p>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>
          <p><MapPin /> Ionos Dragoumi 45,<br />Rhodes 851 00, Greece</p>
          <a href="tel:+302241078200"><Phone /> +30 22410 78200</a>
          <a href="mailto:info@topeurotravel.gr"><Mail /> info@topeurotravel.gr</a>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <div className="footer-links footer-links--two">
            <Link to="/about">About</Link>
            <Link to="/experiences">Experiences</Link>
            <Link to="/destinations">Destinations</Link>
            <Link to="/excursions">Excursions</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">Blog</Link>
            <Link to="/mice-groups">MICE &amp; Groups</Link>
            <Link to="/contact">FAQ</Link>
          </div>
        </div>

        <div className="footer-column footer-portal">
          <h3>Agents Portal</h3>
          <p>Access our portal<br />for partners.</p>
          <Link className="button button--gold button--tiny" to="/agents-portal">AGENTS PORTAL</Link>
        </div>

        <div className="footer-column">
          <h3>Members of</h3>
          <div className="footer-members">
            <PartnerMark kind="hatta" compact />
            <PartnerMark kind="dmc" compact />
          </div>
        </div>

        <div className="footer-column footer-social">
          <h3>Follow Us</h3>
          <div>
            <a href="https://www.linkedin.com" aria-label="LinkedIn"><Linkedin /></a>
            <a href="https://www.facebook.com" aria-label="Facebook"><Facebook /></a>
            <a href="https://www.instagram.com" aria-label="Instagram"><Instagram /></a>
            <a href="https://www.youtube.com" aria-label="YouTube"><Youtube /></a>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© 2024 Top Euro Travel. All Rights Reserved.</span>
        <div><Link to="/privacy">Privacy Policy</Link><i /> <Link to="/terms">Terms &amp; Conditions</Link></div>
      </div>
    </footer>
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
        <div className="breadcrumbs"><Link to="/">Home</Link><span>•</span><strong>{breadcrumb}</strong></div>
        {description && <div className="page-hero__description">{description}</div>}
      </div>
    </section>
  );
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
    <div className={`plane-path ${className}`} aria-hidden="true">
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
  return <Image src={src} alt={alt} loading={loading} className={`travel-photo ${className}`} />;
}

type ReferenceCropProps = {
  src: string;
  alt: string;
  sourceWidth?: number;
  sourceHeight?: number;
  x: number;
  y: number;
  width: number;
  height: number;
  className?: string;
};

export function ReferenceCrop({
  src,
  alt,
  sourceWidth = 1103,
  sourceHeight = 1426,
  x,
  y,
  width,
  height,
  className = '',
}: ReferenceCropProps) {
  const horizontalScale = 100 / width;
  const verticalScale = 100 / height;
  return (
    <div className={`reference-crop ${className}`} style={{ aspectRatio: `${width} / ${height}` }}>
      <Image
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="reference-crop__image"
        style={{
          width: `${sourceWidth * horizontalScale}%`,
          height: `${sourceHeight * verticalScale}%`,
          left: `${-x * horizontalScale}%`,
          top: `${-y * verticalScale}%`,
          maxWidth: 'none',
        }}
      />
    </div>
  );
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
          <Stat value="15+" label="Years of Experience" />
          <Stat value="10K+" label="Happy Clients" />
          <Stat value="500+" label="Events & Groups" />
          <Stat value="24/7" label="Online Support" />
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

export function TestimonialStrip() {
  const testimonials = [
    ['Top Euro Travel made our trip truly extraordinary. Every experience was seamless, authentic and beyond our expectations.', 'Sarah L.', 'Event Manager, UK'],
    ['Perfectly organized excursions and amazing local experiences. Our group loved every moment.', 'Mark T.', 'Travel Agent, USA'],
    ['Outstanding service from start to finish. Highly recommended for Rhodes & Kos.', 'Anna P.', 'Travel Planner, Germany'],
  ];
  return (
    <section className="testimonial-strip">
      {testimonials.map(([quote, name, role]) => (
        <article key={name}>
          <p>“{quote}”</p>
          <div className="rating" aria-label="5 stars">★★★★★</div>
          <strong>{name}</strong>
          <span>{role}</span>
        </article>
      ))}
    </section>
  );
}

export function MockForm({
  children,
  successMessage,
  className = '',
}: {
  children: ReactNode;
  successMessage: string;
  className?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <form className={className} onSubmit={submit}>
      {children}
      {submitted && <p className="form-success" role="status">{successMessage}</p>}
    </form>
  );
}

export function ArrowLink({ to, children }: { to: string; children: ReactNode }) {
  return <Link className="arrow-link" to={to}>{children}<ArrowRight /></Link>;
}

