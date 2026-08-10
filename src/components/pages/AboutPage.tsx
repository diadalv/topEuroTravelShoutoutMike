import {
  useEffect,
  useRef,
  useState,
  type LucideIcon,
} from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Globe2,
  Handshake,
  Headphones,
} from 'lucide-react';
import {
  PageHero,
  PageSeo,
  Photo,
  TrustBar,
  travelMedia,
} from '@/components/travel/Shared';
import '@/styles/about-page-v3.css';

const images = {
  hero: travelMedia('about-hero-v2.jpg'),
  story: travelMedia('about-intro-v2.jpg'),
};

type ValueItem = {
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  location: string;
};

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

type StatItem = {
  label: string;
  value: string;
  animateTo?: number;
  suffix?: string;
};

const values = [
  {
    title: 'Partnership',
    copy: 'We believe successful partnerships are built on trust, transparency and mutual respect. Our focus is always on creating long-term value for our partners.',
    image:
      'https://static.wixstatic.com/media/5a118b_14bffdb769a04766b5d5dd5033d9bf1e~mv2.jpg',
    imageAlt: 'St. Nicholas Fort and Mandraki Harbour in Rhodes',
    location: 'Rhodes · Mandraki',
  },
  {
    title: 'Reliability',
    copy: 'From daily operations to complex projects, we are committed to delivering consistent service and dependable support at every stage.',
    image:
      'https://static.wixstatic.com/media/5a118b_ab6b77b093504e47b692ca6b17818686~mv2.jpg',
    imageAlt: 'View over Psaropoula Beach in Rhodes',
    location: 'Rhodes · Psaropoula',
  },
  {
    title: 'Local Expertise',
    copy: 'With decades of experience in Rhodes and Kos, we provide valuable destination knowledge, strong local connections and practical solutions.',
    image:
      'https://static.wixstatic.com/media/5a118b_63857e11015843abbef567fe402f611a~mv2.jpg',
    imageAlt: 'Elli Beach in Rhodes',
    location: 'Rhodes · Elli Beach',
  },
  {
    title: 'Flexibility',
    copy: 'Every partner is different. We adapt our approach to meet individual requirements and respond quickly to changing needs.',
    image:
      'https://static.wixstatic.com/media/5a118b_3c5424838f9a4a9daec89f400d71f719~mv2.jpg',
    imageAlt: 'Ladiko and Anthony Quinn Bay in Rhodes',
    location: 'Rhodes · Ladiko & Anthony Quinn Bay',
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
  { value: '1989', label: 'Established' },
  { value: '100,000+', label: 'Guests Annually', animateTo: 100000, suffix: '+' },
  { value: '200+', label: 'Hotel Partners', animateTo: 200, suffix: '+' },
  { value: '40+', label: 'Team Members', animateTo: 40, suffix: '+' },
  { value: '24/7', label: 'Support' },
  { value: '2', label: 'Offices in Rhodes & Kos', animateTo: 2 },
] satisfies readonly StatItem[];

const contactSignals = [
  'Rhodes & Kos',
  '24/7 Support',
  'Tailored DMC Solutions',
] as const;

function AnimatedStat({ stat }: { stat: StatItem }) {
  const numberRef = useRef<HTMLElement | null>(null);
  const [displayValue, setDisplayValue] = useState(
    stat.animateTo === undefined ? stat.value : `0${stat.suffix ?? ''}`,
  );

  useEffect(() => {
    if (stat.animateTo === undefined || !numberRef.current) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      setDisplayValue(
        `${new Intl.NumberFormat('en-US').format(stat.animateTo)}${stat.suffix ?? ''}`,
      );
      return undefined;
    }

    const element = numberRef.current;
    let animationFrame = 0;
    let hasAnimated = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated) {
          return;
        }

        hasAnimated = true;
        observer.disconnect();

        const startedAt = performance.now();
        const duration = 1150;

        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const nextValue = Math.round(stat.animateTo! * eased);

          setDisplayValue(
            `${new Intl.NumberFormat('en-US').format(nextValue)}${stat.suffix ?? ''}`,
          );

          if (progress < 1) {
            animationFrame = window.requestAnimationFrame(tick);
          }
        };

        animationFrame = window.requestAnimationFrame(tick);
      },
      { threshold: 0.55 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [stat.animateTo, stat.suffix]);

  return (
    <strong ref={numberRef} aria-label={stat.value}>
      {displayValue}
    </strong>
  );
}

export default function AboutPage() {
  const pageRef = useRef<HTMLElement | null>(null);
  const manualPauseTimer = useRef<number | null>(null);
  const [activeValue, setActiveValue] = useState(0);
  const [isValuesHovered, setIsValuesHovered] = useState(false);
  const [isValuesFocused, setIsValuesFocused] = useState(false);
  const [isValuesManuallyPaused, setIsValuesManuallyPaused] = useState(false);

  const valuesPaused =
    isValuesHovered || isValuesFocused || isValuesManuallyPaused;

  useEffect(() => {
    document.body.classList.add('tet-about-page-active');

    return () => {
      document.body.classList.remove('tet-about-page-active');
    };
  }, []);

  useEffect(() => {
    if (valuesPaused) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveValue((current) => (current + 1) % values.length);
    }, 5600);

    return () => window.clearInterval(interval);
  }, [valuesPaused]);

  useEffect(() => {
    const root = pageRef.current;

    if (!root) {
      return undefined;
    }

    const elements = Array.from(
      root.querySelectorAll<HTMLElement>('[data-about-reveal]'),
    );
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -7% 0px',
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(
    () => () => {
      if (manualPauseTimer.current !== null) {
        window.clearTimeout(manualPauseTimer.current);
      }
    },
    [],
  );

  const pauseValuesTemporarily = () => {
    setIsValuesManuallyPaused(true);

    if (manualPauseTimer.current !== null) {
      window.clearTimeout(manualPauseTimer.current);
    }

    manualPauseTimer.current = window.setTimeout(() => {
      setIsValuesManuallyPaused(false);
      manualPauseTimer.current = null;
    }, 9000);
  };

  const selectValue = (index: number, manual = false) => {
    setActiveValue(index);

    if (manual) {
      pauseValuesTemporarily();
    }
  };

  return (
    <main className="tet-about" id="main-content" ref={pageRef}>
      <PageSeo
        title="About Top Euro Travel | Leading DMC in Greece Since 1989"
        description="Learn more about Top Euro Travel, a trusted destination management company in Greece. Since 1989, we have supported tour operators, travel agencies, groups and event planners across Rhodes and Kos."
      />

      <section className="tet-about__hero">
        <PageHero
          title={<>About Top Euro Travel</>}
          breadcrumb="About"
          image={images.hero}
        />

        <div
          className="tet-about__hero-positioning"
          aria-label="Top Euro Travel positioning"
        >
          <span>Rhodes · Kos · Est. 1989</span>
          <strong>Local expertise. International standards.</strong>
        </div>
      </section>

      <section className="tet-about__story" aria-labelledby="about-story-title">
        <div
          className="tet-about__container tet-about__story-inner"
          data-about-reveal
        >
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
              alt="Evening atmosphere in the Medieval City of Rhodes"
            />
          </div>
        </div>
      </section>

      <section
        className={`tet-about__values${valuesPaused ? ' is-paused' : ''}`}
        aria-labelledby="about-values-title"
        onMouseEnter={() => setIsValuesHovered(true)}
        onMouseLeave={() => setIsValuesHovered(false)}
        onFocusCapture={() => setIsValuesFocused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setIsValuesFocused(false);
          }
        }}
      >
        <div className="tet-about__values-heading" data-about-reveal>
          <p className="tet-about__eyebrow">Our Values</p>
          <h2 id="about-values-title">The principles behind every partnership.</h2>
        </div>

        <div className="tet-about__values-body" data-about-reveal>
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
                  onClick={() => selectValue(index, true)}
                  onFocus={() => selectValue(index)}
                  onMouseEnter={() => selectValue(index)}
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

          <div className="tet-about__values-media" aria-live="polite">
            <div className="tet-about__values-frame">
              {values.map((value, index) => {
                const isActive = activeValue === index;

                return (
                  <div
                    className={`tet-about__values-slide${isActive ? ' is-active' : ''}`}
                    aria-hidden={!isActive}
                    key={value.title}
                  >
                    <Photo
                      src={value.image}
                      alt={isActive ? value.imageAlt : ''}
                    />
                  </div>
                );
              })}
            </div>

            <div className="tet-about__values-meta">
              <span>{values[activeValue].location}</span>
              <span>
                {String(activeValue + 1).padStart(2, '0')} /{' '}
                {String(values.length).padStart(2, '0')}
              </span>
            </div>

            <div className="tet-about__values-progress" aria-hidden="true">
              {values.map((value, index) => (
                <span
                  className={activeValue === index ? 'is-active' : ''}
                  key={value.title}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tet-about__strengths" aria-labelledby="about-strengths-title">
        <div className="tet-about__container tet-about__strengths-inner">
          <div className="tet-about__strengths-intro" data-about-reveal>
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
              <article
                className="tet-about__strength"
                data-about-reveal
                key={title}
              >
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
          <div className="tet-about__stats-heading" data-about-reveal>
            <p className="tet-about__eyebrow">Top Euro Travel</p>
            <h2 id="about-stats-title">By the Numbers</h2>
          </div>

          <div className="tet-about__stats-grid">
            {stats.map((stat) => (
              <article className="tet-about__stat" data-about-reveal key={stat.label}>
                <AnimatedStat stat={stat} />
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TrustBar stats={false} className="tet-about__trust" />

      <section className="tet-about__contact" aria-labelledby="about-contact-title">
        <div className="tet-about__container">
          <div className="tet-about__contact-top" data-about-reveal>
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
              Start a Partnership
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>

          <div className="tet-about__contact-signals" data-about-reveal>
            {contactSignals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
