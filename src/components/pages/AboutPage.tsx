import {
  PageHero,
  Photo,
  TrustBar,
  travelMedia,
} from '@/components/travel/Shared';
import '@/styles/about-page-v1.css';
import {
  ArrowRight,
  Globe2,
  Handshake,
  Headphones,
  MapPin,
  Users,
} from 'lucide-react';
import { useState, type LucideIcon } from 'react';
import { Link } from 'react-router-dom';

const images = {
  hero: travelMedia('about-hero-v2.jpg'),
  story: travelMedia('about-intro-v2.jpg'),
  values: travelMedia('about-values-santorini.jpg'),
};

type ValueItem = {
  title: string;
  copy: string;
};

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

const values = [
  {
    title: 'Partnership',
    copy: 'We believe successful partnerships are built on trust, transparency and mutual respect. Our focus is always on creating long-term value for our partners.',
  },
  {
    title: 'Reliability',
    copy: 'From daily operations to complex projects, we are committed to delivering consistent service and dependable support at every stage.',
  },
  {
    title: 'Local Expertise',
    copy: 'With decades of experience in Rhodes and Kos, we provide valuable destination knowledge, strong local connections and practical solutions.',
  },
  {
    title: 'Flexibility',
    copy: 'Every partner is different. We adapt our approach to meet individual requirements and respond quickly to changing needs.',
  },
] satisfies readonly ValueItem[];

const strengths = [
  {
    icon: Globe2,
    title: 'Multilingual Teams',
    copy: 'Responsive communication and hands-on destination support across Rhodes and Kos.',
  },
  {
    icon: Handshake,
    title: 'Strong Local Network',
    copy: 'Trusted relationships with hotels, suppliers and local stakeholders.',
  },
  {
    icon: Headphones,
    title: 'Hands-on Support',
    copy: 'Proactive assistance from daily operations to large-scale and complex projects.',
  },
] satisfies readonly FeatureItem[];

const stats = [
  ['1989', 'Established'],
  ['100,000+', 'Guests Annually'],
  ['200+', 'Hotel Partners'],
  ['40+', 'Team Members'],
  ['24/7', 'Support'],
  ['2', 'Offices in Rhodes & Kos'],
] as const;

const contactPoints = [
  {
    icon: MapPin,
    title: 'Rhodes & Kos',
    copy: 'Our home, your local advantage.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    copy: "We're here whenever you need us.",
  },
  {
    icon: Users,
    title: 'For tour operators, agencies & groups',
    copy: 'Tailored solutions for every partner.',
  },
] satisfies readonly FeatureItem[];

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);

  return (
    <main className="tet-about">
      <PageHero
        title={<>About Top Euro Travel</>}
        breadcrumb="About"
        image={images.hero}
      />

      <section className="tet-about__story" aria-labelledby="about-story-title">
        <div className="tet-about__container tet-about__story-inner">
          <div className="tet-about__story-copy">
            <div className="tet-about__kicker" aria-label="Section 1, Who We Are">
              <span className="tet-about__kicker-number">01</span>
              <span className="tet-about__kicker-line" aria-hidden="true" />
              <span>Who We Are</span>
            </div>

            <h2 id="about-story-title">
              Established in 1989.
              <span>Trusted for Generations.</span>
            </h2>

            <p>
              Top Euro Travel is a destination management company specialising in Rhodes and Kos,
              delivering reliable travel solutions for tour operators, travel agencies, groups and
              event planners since 1989.
            </p>

            <p>
              What began as a family-run business has grown into a trusted DMC with local teams across
              both destinations, supporting more than <strong>100,000 guests annually</strong>. Today,
              as the company transitions into its second generation, we continue to build on the same
              values that have guided us from the beginning: professionalism, flexibility, integrity
              and long-term partnerships.
            </p>

            <p>
              Combining local expertise with international standards, we provide tailored destination
              management services designed to help our partners grow and succeed.
            </p>

            <Link className="tet-about__button" to="/services">
              Explore Our Services
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="tet-about__story-media">
            <Photo
              src={images.story}
              alt="Mandraki Harbour and the Palace of the Grand Master in Rhodes"
            />
          </div>
        </div>
      </section>

      <section className="tet-about__values" aria-labelledby="about-values-title">
        <div className="tet-about__values-panel">
          <p className="tet-about__eyebrow">Our Values</p>
          <h2 id="about-values-title">The principles behind every partnership.</h2>

          <div className="tet-about__values-list" aria-label="Top Euro Travel values">
            {values.map((value, index) => {
              const isActive = activeValue === index;
              const number = String(index + 1).padStart(2, '0');

              return (
                <button
                  className={`tet-about__value${isActive ? ' is-active' : ''}`}
                  key={value.title}
                  type="button"
                  aria-expanded={isActive}
                  aria-controls={`about-value-copy-${index}`}
                  onClick={() => setActiveValue(index)}
                >
                  <span className="tet-about__value-number">{number}</span>
                  <span className="tet-about__value-content">
                    <strong>{value.title}</strong>
                    <span
                      className="tet-about__value-copy"
                      id={`about-value-copy-${index}`}
                      hidden={!isActive}
                    >
                      {value.copy}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="tet-about__values-media">
          <Photo
            src={images.values}
            alt="Whitewashed Greek island architecture overlooking the Aegean Sea at sunset"
          />
        </div>
      </section>

      <section className="tet-about__strengths" aria-labelledby="about-strengths-title">
        <div className="tet-about__container tet-about__strengths-inner">
          <div className="tet-about__strengths-intro">
            <p className="tet-about__eyebrow">Our Strengths</p>
            <h2 id="about-strengths-title">
              Local expertise.
              <span>Operational excellence.</span>
            </h2>
            <p>
              Our strength lies in combining local expertise with operational excellence. Strong
              relationships with hotels, suppliers and local stakeholders allow us to provide reliable
              solutions and competitive opportunities for our partners.
            </p>
          </div>

          <div className="tet-about__strengths-grid">
            {strengths.map(({ icon: Icon, title, copy }, index) => (
              <article className="tet-about__strength" key={title}>
                <span className="tet-about__strength-icon" aria-hidden="true">
                  <Icon size={32} strokeWidth={1.7} />
                </span>
                <span className="tet-about__strength-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tet-about__stats" aria-labelledby="about-stats-title">
        <div className="tet-about__container">
          <div className="tet-about__stats-heading">
            <p className="tet-about__eyebrow">Top Euro Travel</p>
            <h2 id="about-stats-title">By the Numbers</h2>
          </div>

          <div className="tet-about__stats-grid">
            {stats.map(([value, label]) => (
              <article className="tet-about__stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TrustBar stats={false} className="tet-about__trust" />

      <section className="tet-about__contact" aria-labelledby="about-contact-title">
        <div className="tet-about__container">
          <div className="tet-about__contact-top">
            <div className="tet-about__contact-copy">
              <p className="tet-about__eyebrow">Get in Touch</p>
              <h2 id="about-contact-title">Let&apos;s start a conversation.</h2>
              <p>
                Whether you are looking for a trusted DMC partner, planning a group programme,
                organising an event or exploring new business opportunities in Greece, our team is
                ready to assist.
              </p>
            </div>

            <Link className="tet-about__button tet-about__contact-button" to="/contact">
              Contact Us
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>

          <div className="tet-about__contact-points">
            {contactPoints.map(({ icon: Icon, title, copy }) => (
              <article className="tet-about__contact-point" key={title}>
                <span className="tet-about__contact-icon" aria-hidden="true">
                  <Icon size={28} strokeWidth={1.7} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
