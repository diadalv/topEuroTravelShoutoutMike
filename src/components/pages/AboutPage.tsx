import {
  PageHero,
  Photo,
  TrustBar,
  travelMedia,
} from '@/components/travel/Shared';
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

const values: readonly ValueItem[] = [
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
] as const;

const strengths: readonly FeatureItem[] = [
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
] as const;

const stats = [
  ['1989', 'Established'],
  ['100,000+', 'Guests Annually'],
  ['200+', 'Hotel Partners'],
  ['40+', 'Team Members'],
  ['24/7', 'Support'],
  ['2', 'Offices in Rhodes & Kos'],
] as const;

const contactPoints: readonly FeatureItem[] = [
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
] as const;

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);

  return (
    <main className="tet-about">
      <PageHero
        title={<>About Top Euro Travel</>}
        breadcrumb="About"
        image={images.hero}
      />

      <section className="tet-story">
        <div className="shell tet-story__inner">
          <div className="tet-story__copy">
            <div className="tet-kicker" aria-label="Section 1, Who We Are">
              <span className="tet-kicker__number">01</span>
              <span className="tet-kicker__line" aria-hidden="true" />
              <span>Who We Are</span>
            </div>

            <h2>
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

            <Link className="button button--gold tet-story__button" to="/services">
              Explore Our Services
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="tet-story__media">
            <Photo
              src={images.story}
              alt="Mandraki Harbour and the Palace of the Grand Master in Rhodes"
            />
          </div>
        </div>
      </section>

      <section className="tet-values shell" aria-labelledby="about-values-title">
        <div className="tet-values__panel">
          <p className="tet-label">Our Values</p>
          <h2 id="about-values-title">The principles behind every partnership.</h2>

          <div className="tet-values__tabs" role="tablist" aria-label="Top Euro Travel values">
            {values.map((value, index) => {
              const isActive = activeValue === index;

              return (
                <button
                  className={`tet-values__tab${isActive ? ' is-active' : ''}`}
                  id={`value-tab-${index}`}
                  key={value.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`value-panel-${index}`}
                  onClick={() => setActiveValue(index)}
                >
                  <span className="tet-values__number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="tet-values__content">
                    <strong>{value.title}</strong>
                    {isActive && (
                      <span
                        id={`value-panel-${index}`}
                        role="tabpanel"
                        aria-labelledby={`value-tab-${index}`}
                      >
                        {value.copy}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="tet-values__media">
          <Photo
            src={images.values}
            alt="Aegean island architecture overlooking the sea at sunset"
          />
        </div>
      </section>

      <section className="tet-strengths">
        <div className="shell tet-strengths__inner">
          <div className="tet-strengths__intro">
            <p className="tet-label">Our Strengths</p>
            <h2>
              Local expertise.
              <span>Operational excellence.</span>
            </h2>
            <p>
              Our strength lies in combining local expertise with operational excellence. Over the
              years, we have developed strong relationships with hotels, suppliers and local
              stakeholders, allowing us to provide reliable solutions and competitive opportunities
              for our partners.
            </p>
          </div>

          <div className="tet-strengths__grid">
            {strengths.map(({ icon: Icon, title, copy }, index) => (
              <article className="tet-strength" key={title}>
                <span className="tet-strength__icon" aria-hidden="true">
                  <Icon size={34} strokeWidth={1.7} />
                </span>
                <span className="tet-strength__number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tet-stats" aria-labelledby="about-stats-title">
        <div className="shell">
          <div className="tet-stats__heading">
            <p className="tet-label">Top Euro Travel</p>
            <h2 id="about-stats-title">By the Numbers</h2>
          </div>

          <div className="tet-stats__grid">
            {stats.map(([value, label]) => (
              <article className="tet-stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TrustBar stats={false} className="about-trust" />

      <section className="tet-contact shell" aria-labelledby="about-contact-title">
        <div className="tet-contact__top">
          <div>
            <p className="tet-label">Get in Touch</p>
            <h2 id="about-contact-title">Let&apos;s start a conversation.</h2>
            <p>
              Whether you are looking for a trusted DMC partner, planning a group programme,
              organising an event or exploring new business opportunities in Greece, our team is
              ready to assist.
            </p>
          </div>

          <Link className="button button--gold tet-contact__button" to="/contact">
            Contact Us
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>

        <div className="tet-contact__points">
          {contactPoints.map(({ icon: Icon, title, copy }) => (
            <article className="tet-contact-point" key={title}>
              <span className="tet-contact-point__icon" aria-hidden="true">
                <Icon size={30} strokeWidth={1.7} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style>{ABOUT_PAGE_STYLES}</style>
    </main>
  );
}

const ABOUT_PAGE_STYLES = `
  .tet-about {
    --tet-blue: #1f3a5f;
    --tet-gold: #c8922d;
    --tet-ivory: #f8f6f2;
    --tet-charcoal: #202833;
    --tet-line: rgba(31, 58, 95, 0.16);
    --tet-soft-gold: rgba(200, 146, 45, 0.11);
    background: var(--tet-ivory);
    color: var(--tet-charcoal);
  }

  .tet-about *,
  .tet-about *::before,
  .tet-about *::after {
    box-sizing: border-box;
  }

  .tet-about h2,
  .tet-about h3,
  .tet-about p {
    margin-top: 0;
  }

  .tet-label {
    margin-bottom: 22px;
    color: var(--tet-gold);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .tet-story {
    border-top: 28px solid var(--tet-blue);
    background: var(--tet-ivory);
  }

  .tet-story__inner {
    display: grid;
    grid-template-columns: minmax(0, 0.95fr) minmax(420px, 1.05fr);
    gap: clamp(56px, 7vw, 112px);
    align-items: center;
    padding-top: clamp(72px, 8vw, 118px);
    padding-bottom: clamp(72px, 8vw, 118px);
  }

  .tet-kicker {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 48px;
    color: var(--tet-blue);
    font-size: 0.86rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .tet-kicker__number {
    color: var(--tet-gold);
    font-size: 1.35rem;
  }

  .tet-kicker__line {
    width: 82px;
    height: 2px;
    background: var(--tet-gold);
  }

  .tet-story h2 {
    margin-bottom: 38px;
    color: var(--tet-blue);
    font-size: clamp(2.55rem, 4.8vw, 5rem);
    line-height: 1.02;
    letter-spacing: -0.045em;
  }

  .tet-story h2 span {
    display: block;
    margin-top: 10px;
    color: var(--tet-gold);
  }

  .tet-story__copy > p {
    max-width: 650px;
    margin-bottom: 24px;
    color: var(--tet-charcoal);
    font-size: clamp(1rem, 1.2vw, 1.18rem);
    line-height: 1.72;
  }

  .tet-story__copy strong {
    color: var(--tet-gold);
    font-weight: 700;
  }

  .tet-story__button,
  .tet-contact__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    min-height: 56px;
    padding-inline: 28px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .tet-story__button {
    margin-top: 14px;
  }

  .tet-story__media,
  .tet-values__media {
    overflow: hidden;
  }

  .tet-story__media {
    min-height: 620px;
    border-radius: 18px;
  }

  .tet-story__media img,
  .tet-story__media picture,
  .tet-values__media img,
  .tet-values__media picture {
    width: 100%;
    height: 100%;
  }

  .tet-story__media img,
  .tet-values__media img {
    display: block;
    object-fit: cover;
  }

  .tet-values {
    display: grid;
    grid-template-columns: minmax(360px, 38%) minmax(0, 62%);
    min-height: 720px;
    padding: 0;
    border: 1px solid var(--tet-line);
    background: var(--tet-ivory);
  }

  .tet-values__panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(52px, 6vw, 92px);
  }

  .tet-values__panel h2 {
    max-width: 520px;
    margin-bottom: 38px;
    color: var(--tet-blue);
    font-size: clamp(2.35rem, 4vw, 4.4rem);
    line-height: 1.05;
    letter-spacing: -0.04em;
  }

  .tet-values__tabs {
    display: grid;
    gap: 2px;
    min-height: 335px;
  }

  .tet-values__tab {
    display: grid;
    grid-template-columns: 58px 1fr;
    gap: 18px;
    width: 100%;
    padding: 14px 0;
    border: 0;
    background: transparent;
    color: var(--tet-blue);
    font: inherit;
    text-align: left;
    cursor: pointer;
  }

  .tet-values__tab:focus-visible {
    outline: 2px solid var(--tet-gold);
    outline-offset: 6px;
  }

  .tet-values__number {
    color: var(--tet-blue);
    font-size: 1.15rem;
    line-height: 1.4;
    transition: color 180ms ease;
  }

  .tet-values__content {
    position: relative;
    display: grid;
    gap: 8px;
    padding-left: 22px;
    border-left: 1px solid var(--tet-line);
  }

  .tet-values__content::before {
    content: '';
    position: absolute;
    left: -4px;
    top: 8px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: transparent;
    transition: background 180ms ease;
  }

  .tet-values__content strong {
    color: var(--tet-blue);
    font-size: clamp(1.05rem, 1.5vw, 1.45rem);
    font-weight: 700;
  }

  .tet-values__content > span {
    max-width: 430px;
    color: var(--tet-charcoal);
    font-size: 0.98rem;
    line-height: 1.55;
  }

  .tet-values__tab.is-active .tet-values__number {
    color: var(--tet-gold);
  }

  .tet-values__tab.is-active .tet-values__content {
    border-left-color: var(--tet-gold);
  }

  .tet-values__tab.is-active .tet-values__content::before {
    background: var(--tet-gold);
  }

  .tet-values__media {
    min-height: 720px;
  }

  .tet-values__media img {
    object-position: center;
  }

  .tet-strengths {
    border-bottom: 1px solid var(--tet-line);
    background: var(--tet-ivory);
  }

  .tet-strengths__inner {
    display: grid;
    grid-template-columns: minmax(300px, 0.8fr) minmax(0, 2.2fr);
    gap: clamp(44px, 5vw, 80px);
    padding-top: clamp(70px, 7vw, 108px);
    padding-bottom: clamp(70px, 7vw, 108px);
  }

  .tet-strengths__intro {
    padding-right: clamp(24px, 3vw, 52px);
    border-right: 1px solid var(--tet-line);
  }

  .tet-strengths__intro h2 {
    margin-bottom: 34px;
    color: var(--tet-blue);
    font-size: clamp(2.2rem, 3.7vw, 4.1rem);
    line-height: 1.06;
    letter-spacing: -0.04em;
  }

  .tet-strengths__intro h2 span {
    display: block;
  }

  .tet-strengths__intro > p:last-child {
    color: var(--tet-charcoal);
    font-size: 1rem;
    line-height: 1.72;
  }

  .tet-strengths__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .tet-strength {
    padding: 12px clamp(28px, 3vw, 50px);
    border-right: 1px solid var(--tet-line);
  }

  .tet-strength:last-child {
    border-right: 0;
  }

  .tet-strength__icon,
  .tet-contact-point__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 82px;
    height: 82px;
    border-radius: 50%;
    background: var(--tet-soft-gold);
    color: var(--tet-blue);
  }

  .tet-strength__number {
    display: block;
    margin: 20px 0 12px;
    color: var(--tet-gold);
    font-size: clamp(2.2rem, 4vw, 4rem);
    line-height: 1;
  }

  .tet-strength h3,
  .tet-contact-point h3 {
    margin-bottom: 12px;
    color: var(--tet-blue);
    font-size: 1.08rem;
    line-height: 1.25;
  }

  .tet-strength p,
  .tet-contact-point p {
    margin-bottom: 0;
    color: var(--tet-charcoal);
    font-size: 0.96rem;
    line-height: 1.58;
  }

  .tet-stats {
    padding: clamp(64px, 7vw, 100px) 0;
    background: var(--tet-blue);
    color: white;
  }

  .tet-stats__heading {
    margin-bottom: 48px;
    text-align: center;
  }

  .tet-stats__heading .tet-label {
    margin-bottom: 10px;
  }

  .tet-stats__heading h2 {
    margin-bottom: 0;
    color: white;
    font-size: clamp(2.2rem, 4vw, 4.4rem);
    line-height: 1;
  }

  .tet-stats__grid {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    border-top: 1px solid rgba(200, 146, 45, 0.55);
    border-bottom: 1px solid rgba(200, 146, 45, 0.55);
  }

  .tet-stat {
    display: grid;
    place-items: center;
    min-height: 172px;
    padding: 24px 18px;
    border-right: 1px solid rgba(200, 146, 45, 0.55);
    text-align: center;
  }

  .tet-stat:last-child {
    border-right: 0;
  }

  .tet-stat strong {
    color: var(--tet-gold);
    font-size: clamp(2.05rem, 3.4vw, 4rem);
    font-weight: 700;
    line-height: 1;
  }

  .tet-stat span {
    max-width: 130px;
    margin-top: 12px;
    color: white;
    font-size: 0.88rem;
    line-height: 1.35;
  }

  .tet-about .about-trust {
    margin-top: clamp(54px, 6vw, 84px);
    margin-bottom: 0;
  }

  .tet-contact {
    padding-top: clamp(72px, 8vw, 118px);
    padding-bottom: clamp(72px, 8vw, 118px);
  }

  .tet-contact__top {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 64px;
    align-items: center;
  }

  .tet-contact__top > div {
    max-width: 760px;
  }

  .tet-contact h2 {
    margin-bottom: 28px;
    color: var(--tet-blue);
    font-size: clamp(2.75rem, 5.6vw, 6.4rem);
    line-height: 0.98;
    letter-spacing: -0.05em;
  }

  .tet-contact__top p:last-child {
    margin-bottom: 0;
    color: var(--tet-charcoal);
    font-size: clamp(1rem, 1.4vw, 1.18rem);
    line-height: 1.7;
  }

  .tet-contact__button {
    min-width: 270px;
    min-height: 76px;
  }

  .tet-contact__points {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: clamp(54px, 7vw, 96px);
  }

  .tet-contact-point {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 22px;
    align-items: center;
    padding: 4px clamp(28px, 4vw, 64px);
    border-right: 1px solid rgba(200, 146, 45, 0.42);
  }

  .tet-contact-point:first-child {
    padding-left: 0;
  }

  .tet-contact-point:last-child {
    padding-right: 0;
    border-right: 0;
  }

  .tet-contact-point__icon {
    width: 72px;
    height: 72px;
  }

  @media (max-width: 1180px) {
    .tet-story__inner {
      grid-template-columns: minmax(0, 1fr) minmax(380px, 0.9fr);
      gap: 52px;
    }

    .tet-story__media {
      min-height: 540px;
    }

    .tet-values {
      grid-template-columns: minmax(340px, 44%) minmax(0, 56%);
    }

    .tet-stats__grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .tet-stat:nth-child(3) {
      border-right: 0;
    }

    .tet-stat:nth-child(-n + 3) {
      border-bottom: 1px solid rgba(200, 146, 45, 0.55);
    }
  }

  @media (max-width: 920px) {
    .tet-story__inner,
    .tet-values,
    .tet-strengths__inner,
    .tet-contact__top {
      grid-template-columns: 1fr;
    }

    .tet-story__media {
      min-height: auto;
      aspect-ratio: 4 / 3;
    }

    .tet-values {
      min-height: auto;
    }

    .tet-values__media {
      min-height: auto;
      aspect-ratio: 16 / 10;
    }

    .tet-values__panel {
      padding: 64px clamp(28px, 7vw, 64px);
    }

    .tet-strengths__intro {
      padding-right: 0;
      padding-bottom: 42px;
      border-right: 0;
      border-bottom: 1px solid var(--tet-line);
    }

    .tet-strengths__grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .tet-strength {
      padding-inline: 24px;
    }

    .tet-contact__top {
      gap: 38px;
    }

    .tet-contact__button {
      justify-self: start;
    }

    .tet-contact-point {
      grid-template-columns: 1fr;
      justify-items: start;
    }
  }

  @media (max-width: 680px) {
    .tet-story {
      border-top-width: 14px;
    }

    .tet-story__inner {
      padding-inline: 20px;
    }

    .tet-kicker {
      margin-bottom: 34px;
    }

    .tet-kicker__line {
      width: 44px;
    }

    .tet-story h2,
    .tet-values__panel h2,
    .tet-strengths__intro h2,
    .tet-contact h2 {
      letter-spacing: -0.035em;
    }

    .tet-story__button,
    .tet-contact__button {
      width: 100%;
    }

    .tet-values {
      margin-inline: 20px;
    }

    .tet-values__panel {
      padding: 52px 24px;
    }

    .tet-values__media {
      aspect-ratio: 4 / 3;
    }

    .tet-strengths__inner {
      padding-inline: 20px;
    }

    .tet-strengths__grid,
    .tet-contact__points {
      grid-template-columns: 1fr;
    }

    .tet-strength {
      padding: 32px 0;
      border-right: 0;
      border-bottom: 1px solid var(--tet-line);
    }

    .tet-strength:last-child {
      border-bottom: 0;
    }

    .tet-stats__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .tet-stat,
    .tet-stat:nth-child(3) {
      border-right: 1px solid rgba(200, 146, 45, 0.55);
      border-bottom: 1px solid rgba(200, 146, 45, 0.55);
    }

    .tet-stat:nth-child(even) {
      border-right: 0;
    }

    .tet-stat:nth-last-child(-n + 2) {
      border-bottom: 0;
    }

    .tet-contact {
      padding-inline: 20px;
    }

    .tet-contact-point,
    .tet-contact-point:first-child,
    .tet-contact-point:last-child {
      grid-template-columns: auto 1fr;
      padding: 28px 0;
      border-right: 0;
      border-bottom: 1px solid rgba(200, 146, 45, 0.42);
    }

    .tet-contact-point:last-child {
      border-bottom: 0;
    }
  }
`;
