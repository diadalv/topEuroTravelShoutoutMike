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
  Photo,
  PlanePath,
  SectionTitle,
  Stat,
  TrustBar,
} from '@/components/travel/Shared';

const values = [
  [MapPin, 'Local Expertise', 'Deep knowledge of Rhodes, Kos & the Dodecanese.'],
  [Users, 'Customer Focus', 'Personalized service built around your unique needs.'],
  [ShieldCheck, 'Integrity', 'Honest, transparent and reliable in every partnership.'],
  [Heart, 'Passion', 'We love what we do and it shows in every detail.'],
  [Leaf, 'Sustainability', 'Responsible travel and support for our local community.'],
] as const;

const why = [
  [Sparkles, 'Local Specialists', 'We live and work here. Our insider knowledge ensures authentic experiences.'],
  [Handshake, 'Personalized Service', 'Tailor-made itineraries and dedicated support from planning to execution.'],
  [ShieldCheck, 'Trusted & Reliable', 'Professional standards and trusted partnerships for your peace of mind.'],
  [Headphones, '24/7 Support', 'We are here for you anytime, anywhere during your journey.'],
] as const;

const milestones = [
  [Building2, 'Founded in Rhodes', 'Built on local expertise and a passion for hospitality.'],
  [MapPin, 'Expanded in Kos', 'Growing our presence across the Dodecanese.'],
  [Globe2, 'Growing Partner Network', 'Strong collaborations with hotels, suppliers & experts.'],
  [Headphones, 'Dedicated 24/7 Support', 'Always by your side before, during and after.'],
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={<><Gold>Who</Gold> We Are</>}
        breadcrumb="About"
        image={`${ASSET}/about-hero-v2.jpg`}
      />

      <section className="section shell about-intro">
        <div className="about-intro__copy">
          <h2>Your Trusted DMC Partner in<br /><Gold>Rhodes &amp; Kos</Gold></h2>
          <p>
            Top Euro Travel is a destination management company based in Rhodes &amp; Kos, offering expertly
            crafted travel solutions across the Dodecanese. From transfers and accommodation to unique
            experiences and events, we create seamless, authentic, and unforgettable journeys.
          </p>
          <p>
            We combine deep local knowledge, professional service, and a passion for hospitality to deliver
            extraordinary travel experiences for FITs, groups, MICE, and corporate clients from around the world.
          </p>
          <Link className="button button--navy button--tiny" to="#team">MEET OUR TEAM</Link>
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
          <ul className="check-list">
            <li>24/7 Local Support</li>
            <li>Experienced &amp; Dedicated Team</li>
            <li>Strong Supplier Relationships</li>
            <li>Tailor-Made Solutions</li>
            <li>Quality &amp; Reliability</li>
          </ul>
        </div>
        <div>
          <SectionTitle className="section-title--left">Why Travel With Us</SectionTitle>
          <div className="grid-4 about-why">
            {why.map(([Icon, title, copy]) => <IconFeature icon={Icon} title={title} key={title}>{copy}</IconFeature>)}
          </div>
        </div>
      </section>

      <section className="section--tight shell milestone-row">
        {milestones.map(([Icon, title, copy], index) => (
          <div className="milestone" key={title}>
            <div className="milestone__icon"><Icon /></div>
            <div><strong>{title}</strong><p>{copy}</p></div>
            {index < milestones.length - 1 && <span className="milestone__line" />}
          </div>
        ))}
      </section>

      <section className="about-stats shell">
        <Stat value="15+" label="Years of Experience" />
        <Stat value="10K+" label="Happy Clients" />
        <Stat value="500+" label="Events & Groups" />
        <Stat value="24/7" label="Online Support" />
      </section>
      <TrustBar stats={false} className="about-trust" />

      <section id="team" className="section--tight shell about-team">
        <div className="rounded-photo">
          <Photo src={`${ASSET}/about-team-v2.jpg`} alt="Top Euro Travel team" />
        </div>
        <div>
          <h3>Our Team</h3>
          <p>
            Our multilingual team of travel professionals is dedicated to creating exceptional experiences
            with care, creativity, and attention to detail.
          </p>
          <Link className="button button--navy button--tiny" to="/contact">MEET THE TEAM</Link>
        </div>
        <div>
          <h3>Our Service Philosophy</h3>
          <p>We believe every journey should be meaningful and memorable. That is why we pay attention to every detail.</p>
          <ul className="check-list">
            <li>Attention to detail</li>
            <li>Creative solutions</li>
            <li>End-to-end service</li>
          </ul>
        </div>
        <div className="rounded-photo">
          <Photo src={`${ASSET}/about-philosophy-v2.jpg`} alt="White island architecture at sunset" />
        </div>
      </section>

      <section className="about-cta shell">
        <PlanePath />
        <div>
          <h2>Let’s Plan Your <Gold>Next Journey</Gold></h2>
          <p>Partner with Top Euro Travel for seamless, authentic and unforgettable experiences.</p>
        </div>
        <Link className="button button--gold" to="/contact">CONTACT US</Link>
      </section>
    </>
  );
}

