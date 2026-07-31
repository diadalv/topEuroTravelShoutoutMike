import { Link } from 'react-router-dom';
import {
  Building2,
  CheckCircle2,
  Globe2,
  Handshake,
  Headphones,
  Heart,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import {
  ASSET,
  Gold,
  IconFeature,
  PageHero,
  PageSeo,
  Photo,
  PlanePath,
  SectionTitle,
  Stat,
  TrustBar,
} from '@/components/travel/Shared';

const values = [
  [Handshake, 'Partnership', 'Successful partnerships are built on trust, transparency and mutual respect.'],
  [ShieldCheck, 'Reliability', 'Consistent service and dependable support at every stage.'],
  [MapPin, 'Local Expertise', 'Decades of experience, strong local connections and practical solutions in Rhodes and Kos.'],
  [Sparkles, 'Flexibility', 'An adaptable approach designed around every partner\'s individual requirements.'],
] as const;

const why = [
  [Handshake, 'Strong Relationships', 'Long-standing relationships with hotels, suppliers and local stakeholders.'],
  [Globe2, 'Multilingual Teams', 'Responsive communication and hands-on destination support in Rhodes and Kos.'],
  [ShieldCheck, 'Operational Excellence', 'Quality, efficiency and a proactive approach to problem-solving.'],
  [Target, 'Long-Term Value', 'Reliable solutions designed to help our partners grow and succeed.'],
] as const;


export default function AboutPage() {
  return (
    <>
      <PageSeo title="About Top Euro Travel | Leading DMC in Greece Since 1989" description="Learn more about Top Euro Travel, a trusted destination management company in Greece supporting tour operators, travel agencies, groups and event planners across Rhodes and Kos since 1989." />
      <PageHero
        title={<><Gold>About</Gold> Top Euro Travel</>}
        breadcrumb="About"
        image={`${ASSET}/about-hero-v2.jpg`}
      />

      <section className="section shell about-intro">
        <div className="about-intro__copy">
          <h2>Who We Are</h2>
          <h3>Established in 1989. Trusted for Generations.</h3>
          <p>
            Top Euro Travel is a destination management company specialising in Rhodes and Kos, delivering
            reliable travel solutions for tour operators, travel agencies, groups and event planners since 1989.
          </p>
          <p>
            What began as a family-run business has grown into a trusted DMC with local teams across both destinations,
            supporting more than 100,000 guests annually. Today, as the company transitions into its second generation,
            we continue to build on professionalism, flexibility, integrity and long-term partnerships. Combining local expertise with international standards, we provide tailored destination management services designed to help our partners grow and succeed.
          </p>
        </div>
        <div className="about-intro__image rounded-photo">
          <Photo src={`${ASSET}/about-intro-v2.jpg`} alt="Aegean harbour and island village" />
        </div>
        <PlanePath className="about-intro__plane" />
      </section>

      <section className="section--tight shell about-values">
        <h2>Our Values</h2>
        <div className="about-values__grid">
          {values.map(([Icon, title, copy]) => <IconFeature icon={Icon} title={title} key={title}>{copy}</IconFeature>)}
        </div>
      </section>

      <section className="section--tight shell about-strengths">
        <div className="about-strengths__list">
          <h2>Our Strengths</h2>
          <p>Our strength lies in combining local expertise with operational excellence. Strong relationships with hotels, suppliers and local stakeholders allow us to provide reliable solutions and competitive opportunities for our partners.</p>
        </div>
        <div>
          <SectionTitle className="section-title--left">Why Travel With Us</SectionTitle>
          <div className="grid-4 about-why">
            {why.map(([Icon, title, copy]) => <IconFeature icon={Icon} title={title} key={title}>{copy}</IconFeature>)}
          </div>
        </div>
      </section>

      <section className="about-stats shell">
        <Stat value="1989" label="Established" />
        <Stat value="100K+" label="Guests Annually" />
        <Stat value="200+" label="Hotel Partners" />
        <Stat value="40+" label="Team Members" />
      </section>
      <TrustBar stats={false} className="about-trust" />

      <section className="about-cta shell">
        <PlanePath />
        <div>
          <h2><Gold>Get</Gold> in Touch</h2>
          <p>Whether you are looking for a trusted DMC partner, planning a group programme, organising an event or exploring new business opportunities in Greece, our team is ready to assist.</p>
        </div>
        <Link className="button button--gold" to="/contact">CONTACT US</Link>
      </section>
    </>
  );
}

