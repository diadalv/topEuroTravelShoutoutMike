import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  BedDouble,
  Bus,
  Crown,
  Headphones,
  Heart,
  Hotel,
  MapPinned,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react';
import {
  travelMedia,
  Gold,
  IconFeature,
  PageHero,
  PageSeo,
  PartnerMark,
  Photo,
  PlanePath,
} from '@/components/travel/Shared';

type PortfolioService = {
  icon: LucideIcon;
  title: string;
  copy: string;
  to: string;
  image?: string;
};

const hotelContracting: PortfolioService = {
  icon: Hotel,
  title: 'Hotel Contracting',
  copy: 'Strategic negotiations, strong hotel relationships and market insight secure the right product mix for every programme.',
  to: '/contact',
  image: 'services-hero.jpg',
};

const operationsServices: PortfolioService[] = [
  {
    icon: BedDouble,
    title: 'Management of Bookings',
    copy: 'Coordinated management of accommodation, transfers, excursions and additional travel services.',
    to: '/contact',
  },
  {
    icon: Bus,
    title: 'Transfers',
    copy: 'Comfortable, reliable transport for individual guests, groups, VIPs and accessible travel needs.',
    to: '/contact',
  },
  {
    icon: Headphones,
    title: 'Resort Assistance',
    copy: 'Multilingual meet-and-greet and on-site support throughout every guest journey.',
    to: '/contact',
  },
];

const experienceServices: PortfolioService[] = [
  {
    icon: MapPinned,
    title: 'Tours & Excursions',
    copy: 'Curated tours, cruises and authentic local experiences across culture, gastronomy, nature and leisure.',
    to: '/excursions',
    image: 'lindos-aerial.jpg',
  },
  {
    icon: Users,
    title: 'MICE & Groups',
    copy: 'Meetings, incentives, conferences and group programmes planned around each client\'s objectives.',
    to: '/mice-groups',
    image: 'home-mice-v2.jpg',
  },
];

const weddings: PortfolioService = {
  icon: Heart,
  title: 'Weddings',
  copy: 'Bespoke ceremonies and celebrations coordinated in exceptional Greek locations.',
  to: '/contact',
};

const technology: PortfolioService = {
  icon: Crown,
  title: 'XML API Connectivity & Agent Portal',
  copy: 'Streamlined access to products, services and booking solutions for travel professionals.',
  to: '/contact',
};

function FeatureServiceCard({ icon: Icon, title, copy, to, image }: PortfolioService) {
  return (
    <Link className="services-portfolio-card services-portfolio-card--feature" to={to}>
      <div className="services-portfolio-card__image">
        <Photo src={travelMedia(image ?? 'services-hero.jpg')} alt="" />
      </div>
      <div className="services-portfolio-card__feature-body">
        <div className="services-portfolio-card__feature-heading">
          <Icon aria-hidden="true" />
          <h3>{title}</h3>
        </div>
        <p>{copy}</p>
        <span className="services-portfolio-card__link">DISCOVER THE SERVICE <ArrowRight aria-hidden="true" /></span>
      </div>
    </Link>
  );
}

function CompactServiceCard({ icon: Icon, title, copy, to }: PortfolioService) {
  return (
    <Link className="services-portfolio-card services-portfolio-card--compact" to={to}>
      <span className="services-portfolio-card__icon"><Icon aria-hidden="true" /></span>
      <div>
        <h3>{title}</h3>
        <p>{copy}</p>
      </div>
      <ArrowRight className="services-portfolio-card__arrow" aria-hidden="true" />
    </Link>
  );
}

export default function ServicesPage() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-services-reveal]'));
    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -45px' });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="services-page services-page--portfolio">
      <PageSeo title="Destination Management Services in Greece | Top Euro Travel" description="Explore destination management services in Greece, including hotel contracting, transfers, MICE, groups, excursions, weddings and XML API connectivity by Top Euro Travel." />
      <PageHero
        className="services-page__hero"
        image={travelMedia('services-hero.jpg')}
        breadcrumb="Services"
        title={<><Gold>Destination Management</Gold> Services</>}
      />

      <section className="services-portfolio shell services-portfolio-reveal" aria-labelledby="services-portfolio-title" data-services-reveal>
        <div className="services-portfolio__intro">
          <div>
            <span className="services-portfolio__eyebrow">OUR SERVICES</span>
            <h2 id="services-portfolio-title">Comprehensive destination management, thoughtfully delivered.</h2>
          </div>
          <div className="services-portfolio__intro-copy">
            <p>At Top Euro Travel, we support tour operators, travel agencies, groups, event planners and travel professionals with reliable, flexible and tailor-made solutions across Greece, with particular expertise in Rhodes and Kos.</p>
            <p>From hotel contracting and ground handling to memorable experiences and technology-driven solutions, every service is managed with local knowledge, trusted partnerships and careful attention to detail.</p>
          </div>
        </div>

        <section className="services-portfolio__category" aria-labelledby="services-operations-title">
          <div className="services-portfolio__category-heading">
            <span>01</span>
            <h2 id="services-operations-title">Operations</h2>
          </div>
          <div className="services-portfolio__operations-grid">
            <FeatureServiceCard {...hotelContracting} />
            <div className="services-portfolio__compact-stack">
              {operationsServices.map((service) => <CompactServiceCard key={service.title} {...service} />)}
            </div>
          </div>
        </section>

        <section className="services-portfolio__category" aria-labelledby="services-experiences-title">
          <div className="services-portfolio__category-heading">
            <span>02</span>
            <h2 id="services-experiences-title">Experiences &amp; Events</h2>
          </div>
          <div className="services-portfolio__experiences-grid">
            {experienceServices.map((service) => <FeatureServiceCard key={service.title} {...service} />)}
            <CompactServiceCard {...weddings} />
          </div>
        </section>

        <section className="services-portfolio__category services-portfolio__category--technology" aria-labelledby="services-technology-title">
          <div className="services-portfolio__category-heading">
            <span>03</span>
            <h2 id="services-technology-title">Technology</h2>
          </div>
          <CompactServiceCard {...technology} />
        </section>
      </section>

      <section className="services-page__promise services-portfolio-reveal" aria-labelledby="services-promise-title" data-services-reveal>
        <div className="shell services-page__promise-inner">
          <h2 id="services-promise-title">One local partner. Every operational detail.</h2>
          <ul>
            <li><Users aria-hidden="true" /><div><h3>Dedicated local team</h3><p>In-depth destination knowledge and responsive support.</p></div></li>
            <li><BadgeCheck aria-hidden="true" /><div><h3>Trusted execution</h3><p>Reliable delivery through established local partnerships.</p></div></li>
            <li><Sparkles aria-hidden="true" /><div><h3>Tailor-made solutions</h3><p>Flexible services shaped around every programme.</p></div></li>
          </ul>
        </div>
      </section>

      <section className="services-page__partners shell services-portfolio-reveal" aria-label="Proud members and partners" data-services-reveal>
        <div className="services-page__partners-copy">
          <h2>Proud Members &amp; Partners</h2>
          <p>Trusted by global organizations<br />and travel professionals.</p>
        </div>
        <PartnerMark kind="iata" />
        <PartnerMark kind="hatta" />
        <PartnerMark kind="dmc" />
        <div className="services-page__accredited">
          <BadgeCheck aria-hidden="true" />
          <strong>ACCREDITED<br />AGENT</strong>
        </div>
      </section>

      <section className="services-page__request shell services-portfolio-reveal" data-services-reveal>
        <PlanePath />
        <div className="services-page__request-copy">
          <h2>Get in Touch</h2>
          <p>Tell us about your requirements and discover how Top Euro Travel can support your business, event or travel programme with reliable destination management solutions.</p>
        </div>
        <Link className="button button--gold" to="/contact">ENQUIRE NOW</Link>
        <div className="services-page__request-features">
          <IconFeature icon={Crown} title="Tailor-made Solutions" />
          <IconFeature icon={Sparkles} title="Local Expertise You Can Trust" />
          <IconFeature icon={BadgeCheck} title="Seamless & Reliable" />
        </div>
      </section>
    </div>
  );
}
