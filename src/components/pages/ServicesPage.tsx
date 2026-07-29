import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  BedDouble,
  BriefcaseBusiness,
  Bus,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Crown,
  Handshake,
  Headphones,
  Heart,
  Hotel,
  MapPinned,
  Ship,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react';
import {
  ASSET,
  Gold,
  IconFeature,
  PageHero,
  PartnerMark,
  Photo,
  PlanePath,
  SectionTitle,
  TestimonialStrip,
} from '@/components/travel/Shared';

type Service = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

const services: Service[] = [
  {
    icon: Hotel,
    title: 'Hotel Contracts',
    copy: 'Strong partnerships with carefully selected hotels to offer the best value and availability.',
  },
  {
    icon: BedDouble,
    title: 'Accommodation Management',
    copy: 'End-to-end management of hotel bookings, room blocks, allotments and contracting.',
  },
  {
    icon: Bus,
    title: 'Transfers',
    copy: 'Reliable private, shared and group transfers with modern vehicles and professional drivers.',
  },
  {
    icon: MapPinned,
    title: 'Tours & Excursions',
    copy: 'Curated experiences showcasing the culture, history and natural beauty of Rhodes & Kos.',
  },
  {
    icon: Users,
    title: 'MICE & Corporate Travel',
    copy: 'Incentives, meetings, conferences and events planned with precision and local expertise.',
  },
  {
    icon: Heart,
    title: 'Weddings',
    copy: 'Dream weddings in magical settings with personalized planning and flawless execution.',
  },
  {
    icon: Crown,
    title: 'VIP & Concierge Services',
    copy: 'Tailor-made itineraries and exclusive services for VIPs and discerning travelers.',
  },
  {
    icon: Ship,
    title: 'Cruise & Shore Services',
    copy: 'Shore excursions, port assistance and logistics for cruise lines and individual guests.',
  },
  {
    icon: Clock3,
    title: '24/7 Support',
    copy: 'Round-the-clock assistance before, during and after your travel experience.',
  },
];

const clientGroups = [
  {
    icon: Handshake,
    title: 'B2B Travel Partners',
    copy: 'We act as your reliable DMC in Rhodes & Kos, delivering competitive rates, real-time support and dependable on-the-ground service.',
    image: 'local-life.jpg',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Corporate Clients',
    copy: 'Professional planning and seamless execution for meetings, conferences, incentives and team building events.',
    image: 'mice-hero.jpg',
  },
  {
    icon: Users,
    title: 'Leisure Groups',
    copy: 'From cultural tours to island-hopping adventures, we create memorable experiences for groups of all sizes.',
    image: 'local-life.jpg',
  },
];

const process = [
  {
    icon: ClipboardList,
    title: 'Plan',
    copy: 'We listen, understand your needs and design the right program for your clients.',
  },
  {
    icon: Users,
    title: 'Coordinate',
    copy: 'We handle all logistics, bookings and details with precision and local know-how.',
  },
  {
    icon: CheckCircle2,
    title: 'Deliver',
    copy: 'We deliver exceptional experiences that exceed expectations on the ground.',
  },
  {
    icon: Headphones,
    title: 'Support',
    copy: 'We are with you 24/7 before, during and after your trip.',
  },
];

function ServiceCard({ icon: Icon, title, copy }: Service) {
  return (
    <Link className="services-page__service-card" to="/contact">
      <div className="services-page__service-card-head">
        <Icon aria-hidden="true" />
        <h3>{title}</h3>
      </div>
      <div className="services-page__service-card-bottom">
        <p>{copy}</p>
        <ArrowRight aria-hidden="true" />
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <div className="services-page">
        <PageHero
          className="services-page__hero"
          image={`${ASSET}/services-hero.jpg`}
          breadcrumb="Services"
          title={<><Gold>Our</Gold> Services</>}
        />

        <section className="services-page__catalog shell" aria-labelledby="services-intro">
          <div className="services-page__intro" id="services-intro">
            <h2>Comprehensive destination management services in Rhodes &amp; Kos.</h2>
            <p>We combine local expertise, trusted partnerships, and seamless operations to create exceptional travel experiences.</p>
          </div>

          <div className="services-page__service-grid">
            {services.map((service) => <ServiceCard key={service.title} {...service} />)}
          </div>
        </section>

        <section className="services-page__clients shell" aria-labelledby="client-support-title">
          <SectionTitle><span id="client-support-title">How We Support Our Clients</span></SectionTitle>
          <div className="services-page__client-grid">
            {clientGroups.map(({ icon: Icon, title, copy, image }) => (
              <article className="services-page__client-card" key={title}>
                <div className="services-page__client-copy">
                  <div className="services-page__round-icon"><Icon aria-hidden="true" /></div>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                  <PlanePath />
                </div>
                <div className="services-page__client-photo">
                  <Photo src={`${ASSET}/${image}`} alt={title} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-page__process shell" aria-labelledby="process-title">
          <SectionTitle><span id="process-title">Our Proven Process</span></SectionTitle>
          <div className="services-page__process-row">
            {process.map(({ icon: Icon, title, copy }, index) => (
              <article className="services-page__process-step" key={title}>
                <div className="services-page__process-icon"><Icon aria-hidden="true" /></div>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
                {index < process.length - 1 && <span className="services-page__process-line" aria-hidden="true" />}
              </article>
            ))}
          </div>
        </section>

        <section className="services-page__partners shell" aria-label="Proud members and partners">
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

        <section className="services-page__reviews" aria-labelledby="reviews-title">
          <SectionTitle><span id="reviews-title">What Our Partners Say</span></SectionTitle>
          <TestimonialStrip />
        </section>

        <section className="services-page__request shell">
          <PlanePath />
          <div className="services-page__request-copy">
            <h2>Tell us what you need — we’ll tailor the right solution.</h2>
            <p>Share your requirements and our team will get back to you within 24 hours.</p>
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
