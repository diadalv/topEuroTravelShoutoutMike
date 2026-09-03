import { PageHero, PageSeo, Photo } from '@/components/travel/Shared';
import '@/styles/experiences-layout-v3.css';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';

type Experience = {
  number: string;
  title: string;
  meta: string;
  description: string;
  image: string;
  imageAlt: string;
};

const experiences: Experience[] = [
  {
    number: '01',
    title: 'Medieval City of Rhodes',
    meta: 'Rhodes · Culture · Guided',
    description:
      "Step back in time and explore the UNESCO-listed Medieval City of Rhodes, one of Europe's best-preserved medieval settlements. Accompanied by an experienced guide, discover centuries of history while wandering through cobbled alleys, historic monuments and vibrant squares, before continuing your exploration through the modern side of the island.",
    image: 'https://static.wixstatic.com/media/5a118b_dfc38c26b47b49b0b819d70a4cc66840~mv2.jpg',
    imageAlt: 'The medieval city and harbour of Rhodes',
  },
  {
    number: '02',
    title: 'Cooking Lessons & Wine Tasting',
    meta: 'Rhodes / Kos · Gastronomy · Group Friendly',
    description:
      'Discover the authentic flavours of Greece through a hands-on culinary experience. Learn traditional recipes with the guidance of local experts, explore regional ingredients and gain insight into local gastronomy. Complete your experience with a visit to a local winery, where you will discover local wine-making traditions and enjoy a carefully selected wine tasting.',
    image: 'https://static.wixstatic.com/media/5a118b_adbe505c8b5b40779c652d1e764ad44a~mv2.jpg',
    imageAlt: 'Greek wine tasting experience',
  },
  {
    number: '03',
    title: 'Island Tour',
    meta: 'Rhodes / Kos · Culture · Full Day',
    description:
      "Discover the island's most iconic landmarks, picturesque villages and breathtaking landscapes in a carefully designed full-day experience. Combining culture, history and local traditions, this tour offers the perfect introduction to the destination and its unique character.",
    image: 'https://static.wixstatic.com/media/5a118b_36ba2e7cb31f4964a5432450d2f88391~mv2.jpg',
    imageAlt: 'Aerial view of the Rhodes coastline',
  },
  {
    number: '04',
    title: 'Symi Island & St George Bay',
    meta: 'Rhodes · Boat Trip · Full Day',
    description:
      "Cruise across the crystal-clear waters of the Aegean and discover the picturesque island of Symi, renowned for its colourful harbour and neoclassical architecture. Complete your day with a refreshing swim in the spectacular waters of St George Bay, one of the region's most impressive natural landmarks.",
    image: 'https://static.wixstatic.com/media/5a118b_0b3b24bfe5e34633858526da1fdd5fa9~mv2.jpg',
    imageAlt: 'Colourful Dodecanese harbour beside the Aegean Sea',
  },
  {
    number: '05',
    title: 'Chalki Island',
    meta: 'Rhodes · Boat Trip · Full Day',
    description:
      'Escape to the charming island of Chalki and experience authentic Greek island life at a slower pace. Stroll through its colourful harbour, explore picturesque alleys and soak up the relaxed atmosphere that makes this small island a hidden gem of the Dodecanese.',
    image: 'https://static.wixstatic.com/media/5a118b_a5593ec705f940aa9b20e44643845cc1~mv2.jpg',
    imageAlt: 'Chalki and Alimia seen from the sea',
  },
  {
    number: '06',
    title: 'Boat Trip to the Famous Beaches of Rhodes',
    meta: 'Rhodes · Boat Trip · Swimming',
    description:
      "Spend a relaxing day at sea discovering some of Rhodes' most beautiful beaches and secluded bays. Swim in crystal-clear waters, soak up the Mediterranean sun and enjoy breathtaking coastal scenery during multiple swimming stops around the island.",
    image: 'https://static.wixstatic.com/media/5a118b_8d0c977a06194079af13481c05486f34~mv2.jpg',
    imageAlt: 'Anthony Quinn Bay in Rhodes',
  },
  {
    number: '07',
    title: 'Visit to Asia',
    meta: 'Rhodes / Kos · Culture · Day Trip',
    description:
      'Experience a fascinating cultural contrast with a day trip to the nearby Turkish coast. Discover the vibrant atmosphere of Marmaris, Fethiye or Bodrum, explore local markets, enjoy authentic flavours and experience a different side of the Aegean region.',
    image: 'https://static.wixstatic.com/media/5a118b_278f147701794e22ac15e40aa8627d7e~mv2.jpg',
    imageAlt: 'Aegean boat approaching an island harbour',
  },
  {
    number: '08',
    title: 'Lindos Village Exploration',
    meta: 'Rhodes · Culture · Landmark',
    description:
      "Explore one of Greece's most iconic villages, famous for its whitewashed houses, narrow alleys and impressive hilltop Acropolis. Wander through the charming streets of Lindos, discover local shops and enjoy spectacular views over the Aegean Sea.",
    image: 'https://static.wixstatic.com/media/5a118b_c9d395ffbf7e4af3acec2ab1d52d2116~mv2.jpg',
    imageAlt: 'Aerial view of Lindos and its Acropolis',
  },
  {
    number: '09',
    title: 'Sailing Cruises & Private Yacht Rentals',
    meta: 'Rhodes / Kos · Private · VIP',
    description:
      'Explore the Aegean in style with private yacht charters and sailing experiences tailored to your preferences. Whether for a romantic escape, a special celebration or a group outing, enjoy exclusive moments at sea surrounded by stunning coastal scenery.',
    image: 'https://static.wixstatic.com/media/5a118b_7226d32bd3f0496cb045624dcf7441f6~mv2.jpg',
    imageAlt: 'Private sailing yacht in the Aegean Sea',
  },
  {
    number: '10',
    title: 'Jeep Safari',
    meta: 'Rhodes / Kos · Adventure · Nature',
    description:
      'Venture off the beaten track and discover hidden landscapes, traditional villages and spectacular viewpoints inaccessible by conventional routes. A Jeep Safari offers the perfect combination of adventure, nature and authentic local experiences.',
    image: 'https://static.wixstatic.com/media/5a118b_9f1b2d37a8474745b48bf316d505b784~mv2.jpg',
    imageAlt: 'Mountain landscape near Asklipio in Rhodes',
  },
  {
    number: '11',
    title: 'E-bike Tours',
    meta: 'Rhodes / Kos · Active · Sustainable',
    description:
      'Explore each destination in an enjoyable and sustainable way through guided or self-guided e-bike experiences. Cycle through scenic landscapes, coastal routes and charming villages while discovering local culture at your own pace.',
    image: 'https://static.wixstatic.com/media/5a118b_ecebb68f6d6246f6b587e80c34f006dc~mv2.jpg',
    imageAlt: 'Cyclists enjoying an e-bike tour',
  },
  {
    number: '12',
    title: 'Hiking Activities',
    meta: 'Rhodes / Kos · Nature · Active',
    description:
      'Discover breathtaking landscapes and authentic local life through carefully selected hiking experiences. Accompanied by experienced guides, explore scenic trails, natural landmarks and hidden corners while enjoying the beauty of the Greek countryside.',
    image: 'https://static.wixstatic.com/media/5a118b_0c23a23c054844dcb58a226f33906dae~mv2.jpg',
    imageAlt: 'Tree-lined hiking route at Filerimos in Rhodes',
  },
] satisfies readonly Experience[];

const heroImage = 'https://static.wixstatic.com/media/5a118b_36ba2e7cb31f4964a5432450d2f88391~mv2.jpg';
const contactImage = 'https://static.wixstatic.com/media/5a118b_173c499638f844e894590a5fc12af62f~mv2.jpg';

export default function ExperiencesPage() {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    document.body.classList.add('tet-experiences-page-active');
    const page = pageRef.current;
    if (!page) return undefined;

    const revealNodes = Array.from(page.querySelectorAll<HTMLElement>('[data-experience-reveal]'));
    if (!('IntersectionObserver' in window)) {
      revealNodes.forEach((node) => node.classList.add('is-visible'));
      return () => document.body.classList.remove('tet-experiences-page-active');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -55px' },
    );

    revealNodes.forEach((node) => observer.observe(node));
    return () => {
      observer.disconnect();
      document.body.classList.remove('tet-experiences-page-active');
    };
  }, []);

  useEffect(() => {
    if (!selectedExperience) return undefined;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const closeDialog = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedExperience(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeDialog);
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeDialog);
      previouslyFocused?.focus();
    };
  }, [selectedExperience]);

  return (
    <div ref={pageRef} className="tet-exp-page">
      <PageSeo
        title="Curated Experiences in Greece | Tailor-Made Travel Experiences | Top Euro Travel"
        description="Discover curated experiences in Greece, from cultural tours and gastronomy to sailing cruises, outdoor activities and tailor-made programmes designed by Top Euro Travel."
        canonicalPath="/experiences"
      />

      <PageHero
        title={<>Curated Experiences</>}
        breadcrumb="Experiences"
        image={heroImage}
      />

      <section className="tet-exp-intro">
        <div className="shell tet-exp-intro__grid" data-experience-reveal>
          <div>
            <p className="tet-exp-eyebrow">Our experiences</p>
            <h2>Every island has a story.<br />Choose how you live it.</h2>
          </div>
          <div className="tet-exp-intro__copy">
            <p>
              From cultural discoveries and authentic gastronomy to sailing adventures and outdoor activities, our
              curated experiences are designed to showcase the unique character of each destination.
            </p>
            <p>
              Whether for leisure travellers, groups or incentive programmes, we create memorable experiences
              tailored to every interest, travel style and occasion.
            </p>
          </div>
        </div>
      </section>

      <section id="experience-collection" className="tet-exp-collection" aria-labelledby="experience-collection-title">
        <div className="shell">
          <div className="tet-exp-collection__heading" data-experience-reveal>
            <div>
              <p className="tet-exp-eyebrow">Rhodes &amp; Kos</p>
              <h2 id="experience-collection-title">Twelve ways to experience the Aegean.</h2>
            </div>
            <p>Local knowledge, trusted partners and programmes tailored to your pace.</p>
          </div>

          <div className="tet-exp-grid">
            {experiences.map((experience, index) => {
              return (
                <article
                  key={experience.number}
                  className="tet-exp-card is-visible"
                  data-experience-reveal
                  style={{ '--tet-exp-delay': `${(index % 4) * 70}ms` } as CSSProperties}
                >
                  <div className="tet-exp-card__image">
                    <Photo src={experience.image} alt={experience.imageAlt} />
                    <span className="tet-exp-card__number">{experience.number}</span>
                  </div>
                  <div className="tet-exp-card__body">
                    <p className="tet-exp-card__meta">{experience.meta}</p>
                    <h3>{experience.title}</h3>
                    <p className="tet-exp-card__description">{experience.description}</p>
                    <button
                      type="button"
                      className="tet-exp-card__more"
                      aria-haspopup="dialog"
                      onClick={() => setSelectedExperience(experience)}
                    >
                      <span>Read more</span>
                      <span className="tet-exp-card__more-mark" aria-hidden="true">+</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {selectedExperience && (
        <div
          className="tet-exp-dialog-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setSelectedExperience(null);
          }}
        >
          <section
            className="tet-exp-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={'experience-dialog-title-' + selectedExperience.number}
            aria-describedby={'experience-dialog-description-' + selectedExperience.number}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="tet-exp-dialog__close"
              aria-label="Close experience details"
              onClick={() => setSelectedExperience(null)}
            >
              <span aria-hidden="true">×</span>
            </button>
            <span className="tet-exp-dialog__number">{selectedExperience.number}</span>
            <p className="tet-exp-dialog__meta">{selectedExperience.meta}</p>
            <h2 id={'experience-dialog-title-' + selectedExperience.number}>
              {selectedExperience.title}
            </h2>
            <span className="tet-exp-dialog__rule" aria-hidden="true" />
            <p id={'experience-dialog-description-' + selectedExperience.number} className="tet-exp-dialog__description">{selectedExperience.description}</p>
          </section>
        </div>
      )}

      <section className="tet-exp-contact shell" data-experience-reveal>
        <div className="tet-exp-contact__image" style={{ backgroundImage: `url("${contactImage}")` }} aria-hidden="true" />
        <div className="tet-exp-contact__shade" aria-hidden="true" />
        <div className="tet-exp-contact__content">
          <p className="tet-exp-eyebrow tet-exp-eyebrow--light">Tailor-made experiences</p>
          <h2>Looking for Something Different?</h2>
          <p>
            Every traveller, group and event is unique. If you are looking for something beyond the experiences
            featured above, our team can design tailor-made programmes, exclusive activities and special interest
            experiences based on your specific requirements and objectives.
          </p>
          <Link className="tet-exp-contact__button" to="/contact">
            Create Your Experience <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
