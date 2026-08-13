import {
  Gold,
  PageHero,
  PageSeo,
  PartnerMark,
  Photo,
  SectionTitle,
  travelMedia,
} from '@/components/travel/Shared';
import '@/styles/mice-layout-v3.css';
import '@/styles/services-register.css';
import {
  BedDouble,
  Binoculars,
  BriefcaseBusiness,
  Building2,
  Bus,
  ChevronRight,
  GraduationCap,
  Landmark,
  Luggage,
  MapPin,
  Medal,
  Rocket,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type ProgramCard = {
  icon: LucideIcon;
  title: string;
  copy: string;
  image: string;
  position?: string;
  eyebrow?: string;
};

const micePrograms: ProgramCard[] = [
  {
    icon: BriefcaseBusiness,
    title: 'Corporate Meetings',
    copy: 'Professional settings and seamless support for productive meetings of any size.',
    image: 'services-hero.jpg',
  },
  {
    icon: Building2,
    title: 'Conferences',
    copy: 'End-to-end conference management with world-class venues and services.',
    image: 'mice-hero.jpg',
  },
  {
    icon: Medal,
    title: 'Incentives',
    copy: 'Reward, motivate and inspire your teams with unique island experiences.',
    image: 'sunset.jpg',
  },
  {
    icon: Rocket,
    title: 'Product Launches',
    copy: 'Make a lasting impression with creative launches and flawless execution.',
    image: 'nightlife.jpg',
  },
  {
    icon: Users,
    title: 'Team Building',
    copy: 'Engaging activities that strengthen connections and build stronger teams.',
    image: 'local-life.jpg',
  },
];

const groupPrograms: ProgramCard[] = [
  {
    icon: Luggage,
    title: 'Tour Operator Groups',
    copy: 'Tailor-made group programmes combining accommodation, transportation, excursions, activities and dedicated support.',
    image: 'sailing.jpg',
  },
  {
    icon: GraduationCap,
    title: 'Associations & Sports Teams',
    copy: 'Reliable, efficient programmes developed around each group\'s schedule, objectives and practical requirements.',
    image: 'acropolis.jpg',
  },
  {
    icon: Binoculars,
    title: 'Special Interest Groups',
    copy: 'Carefully designed programmes for groups connected by shared interests, activities or professional goals.',
    image: 'butterflies-entry.jpg',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Corporate Groups',
    copy: 'Flexible group travel solutions backed by trusted local suppliers and dedicated operational support.',
    image: 'old-town.jpg',
  },
];

const organizerFeatures = [
  { icon: Landmark, title: 'Venue Sourcing', copy: 'Access to the best venues across Rhodes & Kos.' },
  { icon: BedDouble, title: 'Accommodation', copy: 'Carefully selected hotels & resorts for maximum comfort.' },
  { icon: Bus, title: 'Logistics & Planning', copy: 'End-to-end planning with attention to every detail.' },
  { icon: Bus, title: 'Transfers', copy: 'Reliable, comfortable and on-time ground transport.' },
  { icon: Users, title: 'On-site Coordination', copy: 'Dedicated support team throughout your event.' },
  { icon: MapPin, title: 'Local Expertise', copy: 'Deep destination knowledge and trusted local partnerships.' },
];

function ProgramCardComponent({ icon: Icon, title, copy, image, position, eyebrow }: ProgramCard) {
  return (
    <article className="mice-page__program-card">
      <div className="mice-page__program-photo">
        <Photo
          src={travelMedia(image)}
          alt={title}
          className={position ? `mice-page__photo--${position}` : ''}
        />
      </div>
      <div className="mice-page__program-icon"><Icon aria-hidden="true" /></div>
      <div className="mice-page__program-copy">
        {eyebrow ? <span className="mice-page__program-eyebrow">{eyebrow}</span> : null}
        <h3>{title}</h3>
        <p>{copy}</p>
      </div>
    </article>
  );
}

function OrganizerServiceIndex() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let newIndex = index;
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      newIndex = index === 0 ? organizerFeatures.length - 1 : index - 1;
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      newIndex = index === organizerFeatures.length - 1 ? 0 : index + 1;
    } else if (e.key === 'Home') {
      e.preventDefault();
      newIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      newIndex = organizerFeatures.length - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="mice-page__organizer-index">
      <div className="mice-page__organizer-list" role="tablist">
        {organizerFeatures.map(({ icon: Icon, title }, index) => (
          <button
            key={index}
            role="tab"
            className="mice-page__organizer-item"
            aria-selected={activeIndex === index}
            aria-controls={`organizer-detail-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            <span className="mice-page__organizer-number">{String(index + 1).padStart(2, '0')}</span>
            <Icon className="mice-page__organizer-icon" aria-hidden="true" />
            <span className="mice-page__organizer-title">{title}</span>
            <ChevronRight className="mice-page__organizer-chevron" aria-hidden="true" />
            <div
              className="mice-page__organizer-mobile-copy"
              id={`organizer-mobile-${index}`}
              aria-hidden={activeIndex !== index}
            >
              {organizerFeatures[index].copy}
            </div>
          </button>
        ))}
      </div>

      <div
        className="mice-page__organizer-detail"
        role="tabpanel"
        id={`organizer-detail-${activeIndex}`}
        key={activeIndex}
      >
        <span className="mice-page__organizer-detail-number">
          {String(activeIndex + 1).padStart(2, '0')}
        </span>
        {organizerFeatures[activeIndex] && (() => {
          const Icon = organizerFeatures[activeIndex].icon;
          return (
            <>
              <Icon className="mice-page__organizer-detail-icon" aria-hidden="true" />
              <h3>{organizerFeatures[activeIndex].title}</h3>
              <p>{organizerFeatures[activeIndex].copy}</p>
            </>
          );
        })()}
      </div>
    </div>
  );
}

export default function MiceGroupsPage() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-mice-reveal]'));
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
    }, { threshold: 0.12, rootMargin: '0px 0px -55px' });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mice-page">
      <PageSeo title="MICE &amp; Group Travel Services in Greece | Top Euro Travel" description="Professional MICE and group travel services in Greece for meetings, incentives, conferences, events and tailor-made group programmes." />
        <PageHero
          className="mice-page__hero"
          image={travelMedia('mice-hero.jpg')}
          breadcrumb="MICE & Groups"
          title={<><Gold>MICE &amp; Group</Gold> Travel Solutions</>}
          description="Meetings, incentives, conferences, events and tailor-made group programmes across Greece."
        />

        <div className="mice-page__program-shell shell">
          <section className="mice-page__program-section mice-page__program-section--mice mice-reveal" aria-labelledby="mice-program-title" data-mice-reveal>
            <div className="mice-page__program-heading">
              <div className="mice-page__heading-icon"><Users aria-hidden="true" /></div>
              <div>
                <h2 id="mice-program-title">MICE</h2>
                <p>From meetings and conferences to incentive programmes and corporate events, Top Euro Travel delivers comprehensive MICE solutions tailored to each client&apos;s objectives. Combining extensive destination expertise, trusted local partnerships and meticulous operational planning, we support every stage of the process, from venue sourcing and accommodation to transportation, event logistics and on-site coordination.</p><p>Whether organising an executive retreat, a large-scale conference, a product launch or an incentive programme, our team ensures seamless execution and memorable experiences across Greece, with particular expertise in Rhodes and Kos.</p>
              </div>
            </div>
            <div className="mice-page__program-grid mice-page__program-grid--five">
              {micePrograms.map((program) => <ProgramCardComponent key={program.title} {...program} eyebrow="MICE SERVICE" />)}
            </div>
          </section>

          <section className="mice-page__program-section mice-page__program-section--groups mice-reveal" aria-labelledby="groups-program-title" data-mice-reveal>
            <div className="mice-page__program-heading">
              <div className="mice-page__heading-icon"><Users aria-hidden="true" /></div>
              <div>
                <h2 id="groups-program-title">GROUPS</h2>
                <p>We specialise in the design and management of tailor-made group programmes for tour operators, travel agencies, associations, sports teams, special interest groups and corporate clients. Every programme is carefully developed around our partners&apos; requirements, combining accommodation, transportation, excursions, activities and dedicated support services.</p><p>Backed by decades of operational experience and a strong network of local suppliers, we provide flexible, reliable and efficient group travel solutions for both organisers and participants.</p>
              </div>
            </div>
            <div className="mice-page__program-grid mice-page__program-grid--four">
              {groupPrograms.map((program) => <ProgramCardComponent key={program.title} {...program} eyebrow="GROUP PROGRAM" />)}
            </div>
          </section>

          <section className="mice-page__organizers mice-reveal" aria-labelledby="organizers-title" data-mice-reveal>
            <SectionTitle><span id="organizers-title">Why Organizers Choose Us</span></SectionTitle>
            <OrganizerServiceIndex />
          </section>
        </div>

        <section className="tet-partner-contact mice-reveal" aria-label="Partners and contact" data-mice-reveal>
          <div className="tet-partner-contact__inner shell">
            <div className="tet-partner-contact__trust" aria-label="Proud members and partners">
              <div className="tet-partner-contact__mark"><PartnerMark kind="hatta" /></div>
              <div className="tet-partner-contact__mark"><PartnerMark kind="dmc" /></div>
              <div className="tet-partner-contact__mark"><PartnerMark kind="iata" /></div>
            </div>

            <div className="tet-partner-contact__cta">
              <div className="tet-partner-contact__copy">
                <p className="tet-partner-contact__eyebrow">Get in touch</p>
                <h2>Let&apos;s start<br />a conversation.</h2>
                <p className="tet-partner-contact__description">
                  Whether you are looking for a trusted DMC partner, planning a group programme, organising an event or exploring new business opportunities in Greece, our team is ready to assist.
                </p>
              </div>
              <Link className="tet-partner-contact__button" to="/contact">
                <span>Start a partnership</span>
                <span aria-hidden="true">→</span>
              </Link>
              <div className="tet-partner-contact__features" aria-label="Partnership benefits">
                <span>Rhodes &amp; Kos</span>
                <span>24/7 Support</span>
                <span>Tailored DMC Solutions</span>
              </div>
            </div>
          </div>
        </section>

    </div>
  );
}
