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
  PlanePath,
} from '@/components/travel/Shared';
type Service = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

const services: Service[] = [
  {
    icon: Hotel,
    title: 'Hotel Contracting',
    copy: 'Powerful negotiations, extensive market knowledge and long-standing relationships with hoteliers enable us to secure competitive contracts and attractive opportunities for our partners. We continuously monitor market developments, hotel availability and emerging trends to provide the right product mix for every programme.',
  },
  {
    icon: BedDouble,
    title: 'Management of Bookings',
    copy: 'Our experienced operations team ensures the efficient management of accommodations, transfers, excursions and additional travel services. Through continuous monitoring and dedicated on-site support, we guarantee smooth operations and a seamless experience for both partners and guests.',
  },
  {
    icon: Bus,
    title: 'Transfers',
    copy: 'Reliable transportation is at the heart of successful destination management. We provide high-quality transfer services, including coaches, minibuses, minivans, VIP transportation and accessible transport solutions, ensuring comfort, safety and efficiency at every stage of the journey.',
  },
  {
    icon: Headphones,
    title: 'Resort Assistance',
    copy: 'Our multilingual representatives provide professional meet-and-greet services, in-resort assistance and continuous support throughout the guest journey. Backed by extensive local knowledge and destination expertise, our team ensures that travellers receive prompt assistance and personalised service whenever needed.',
  },
  {
    icon: MapPinned,
    title: 'Tours & Excursions',
    copy: 'We offer a carefully curated portfolio of tours, excursions, cruises and authentic local experiences designed to showcase the very best of each destination. Led by experienced guides and supported by our operational expertise, our programmes cater to a wide variety of interests, from culture and gastronomy to nature, adventure and leisure.',
  },
  {
    icon: Users,
    title: 'MICE & Groups',
    copy: 'We specialise in the planning and delivery of meetings, conferences, incentive programmes, special interest groups, product launches and corporate events. Combining destination expertise, trusted local partnerships and meticulous planning, we create successful programmes tailored to each client\'s objectives.',
  },
  {
    icon: Heart,
    title: 'Weddings',
    copy: 'From intimate ceremonies to large-scale celebrations, our dedicated team designs and manages bespoke wedding experiences in some of Greece\'s most stunning locations. Every detail is carefully coordinated to ensure a seamless and memorable occasion.',
  },
  {
    icon: Crown,
    title: 'XML API Connectivity & Agent Portal',
    copy: 'Technology plays a key role in modern destination management. Through our XML API connectivity and dedicated Agent Portal, travel professionals can access products, services and booking solutions efficiently, benefiting from streamlined processes and enhanced operational flexibility.',
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
      <PageSeo title="Destination Management Services in Greece | Top Euro Travel" description="Explore destination management services in Greece, including hotel contracting, transfers, MICE, groups, excursions, weddings and XML API connectivity by Top Euro Travel." />
        <PageHero
          className="services-page__hero"
          image={travelMedia('services-hero.jpg')}
          breadcrumb="Services"
          title={<><Gold>Destination Management</Gold> Services</>}
        />

        <section className="services-page__catalog shell" aria-labelledby="services-intro">
          <div className="services-page__intro" id="services-intro"><h2>Comprehensive destination management services in Greece.</h2><p>At Top Euro Travel, we support tour operators, travel agencies, groups, event planners and travel professionals with reliable, flexible and tailor-made solutions. Combining local expertise, strong supplier relationships and decades of operational experience, we work across Greece with particular expertise in Rhodes and Kos.</p><p>From hotel contracting and ground handling to MICE, excursions and technology-driven solutions, our services are designed to ensure seamless operations and exceptional experiences for both our partners and their clients.</p></div>

          <div className="services-page__service-grid">
            {services.map((service) => <ServiceCard key={service.title} {...service} />)}
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

        <section className="services-page__request shell">
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
