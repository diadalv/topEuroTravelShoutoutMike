import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  travelMedia,
  Gold,
  PageHero,
  PageSeo,
  Photo,
  PlanePath,
  SectionTitle,
} from '@/components/travel/Shared';
import { islandReasons } from '@/data/islandReasons';

const destinations = [
  {
    index: '01',
    title: 'Rhodes',
    image: 'lindos-aerial.jpg',
    alt: 'Lindos coastline and historic Acropolis in Rhodes',
    copy: "Rhodes is one of Greece's leading tourism destinations, renowned for its rich history, diverse landscapes and exceptional hospitality infrastructure. From the UNESCO-listed Medieval City and picturesque villages to luxury resorts and stunning coastline, the island offers outstanding opportunities for leisure travel, group programmes, events and tailor-made experiences.",
    tags: ['Medieval City', 'Villages', 'Coastline', 'Events'],
    cta: 'DISCOVER RHODES',
    to: '/rhodes',
  },
  {
    index: '02',
    title: 'Kos',
    image: 'flower.jpg',
    alt: '',
    copy: 'Kos combines authentic island charm with excellent tourism infrastructure, making it a popular destination for travellers from around the world. Beautiful beaches, cultural landmarks, quality accommodation and a relaxed atmosphere create the ideal setting for holidays, group travel, incentive programmes and memorable local experiences.',
    tags: ['Beaches', 'Culture', 'Groups', 'Incentives'],
    cta: 'DISCOVER KOS',
    to: '/kos',
  },
] as const;

const moments = [
  {
    island: 'Rhodes',
    title: 'Medieval City',
    copy: 'Walk through centuries of history inside the UNESCO-listed Old Town.',
    image: 'old-town.jpg',
  },
  {
    island: 'Rhodes',
    title: 'Lindos & the Acropolis',
    copy: 'Discover whitewashed streets, ancient landmarks and sweeping Aegean views.',
    image: 'acropolis.jpg',
  },
  {
    island: 'Kos',
    title: 'Culture & Heritage',
    copy: 'Connect with the island through its landmarks, traditions and local stories.',
    image: 'kallithea.jpg',
  },
  {
    island: 'Kos',
    title: 'Island Experiences',
    copy: 'Enjoy relaxed days shaped around nature, local life and the Aegean Sea.',
    image: 'flower.jpg',
  },
] as const;

const destinationGroups = ['Rhodes', 'Kos'] as const;

export default function DestinationsPage() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-destinations-reveal]'));
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
    <div className="destinations-page destinations-page--editorial">
      <PageSeo title="Rhodes & Kos Destinations in Greece | Top Euro Travel" description="Explore Rhodes and Kos, Top Euro Travel's core destinations in Greece, and discover our support for travel programmes and events across the country." />
      <PageHero
        className="destinations-page__hero"
        title={<><Gold>Explore Our</Gold> Destinations in Greece</>}
        breadcrumb="Destinations"
        image={travelMedia('destinations-hero.jpg')}
      />

      <section className="section shell destinations-editorial destinations-reveal" aria-labelledby="destinations-editorial-title" data-destinations-reveal>
        <div className="destinations-editorial__intro">
          <div>
            <span>OUR CORE DESTINATIONS</span>
            <h2 id="destinations-editorial-title">Two Islands. One Trusted Local Partner.</h2>
          </div>
          <div className="destinations-editorial__intro-copy">
            <p>Greece offers an extraordinary diversity of destinations, experiences and travel opportunities. As a destination management company with extensive expertise in Rhodes and Kos, Top Euro Travel supports tour operators, travel agencies, groups and event planners with reliable, tailor-made solutions across Greece.</p>
            <p>While Rhodes and Kos remain our core destinations, our experience, trusted network and flexible approach allow us to support a wide range of travel programmes, events and special projects throughout the country.</p>
          </div>
        </div>

        <div className="destinations-editorial__rows">
          {destinations.map((item, itemIndex) => (
            <article className={`destination-editorial-row ${itemIndex % 2 ? 'is-reversed' : ''}`} aria-labelledby={`destination-${item.title.toLowerCase()}-title`} key={item.title}>
              <div className="destination-editorial-row__image">
                <Photo src={travelMedia(item.image)} alt={item.alt} />
              </div>
              <div className="destination-editorial-row__body">
                <p className="destination-editorial-row__eyebrow"><span>{item.index}</span> Core destination</p>
                <h2 id={`destination-${item.title.toLowerCase()}-title`}>{item.title}</h2>
                <p className="destination-editorial-row__copy">{item.copy}</p>
                <ul className="destination-editorial-row__tags" aria-label={`${item.title} highlights`}>
                  {item.tags.map((tag: string) => <li key={tag}>{tag}</li>)}
                </ul>
                <Link className="destination-editorial-link destination-editorial-link--navy" to={item.to}>{item.cta}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="destinations-why destinations-reveal" aria-labelledby="destinations-why-title" data-destinations-reveal>
        <div className="shell destinations-why__inner">
          <div className="section-title destinations-why__title"><h2 id="destinations-why-title">Why These Islands</h2></div>
          <ul className="destinations-why__grid">
            {islandReasons.map(([Icon, title, copy]) => (
              <li className="destinations-why__item" key={title}>
                <div className="destinations-why__icon" aria-hidden="true"><Icon /></div>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section shell destinations-experiences-editorial destinations-reveal" data-destinations-reveal>
        <SectionTitle eyebrow="CURATED IN RHODES & KOS">Experiences by Destination</SectionTitle>
        <div className="destinations-experience-groups">
          {destinationGroups.map((island, groupIndex) => (
            <section className="destinations-experience-group" aria-labelledby={`${island.toLowerCase()}-experiences-heading`} key={island}>
              <h3 id={`${island.toLowerCase()}-experiences-heading`}><span>0{groupIndex + 1}</span>{island}</h3>
              <div className="destinations-experience-group__cards">
                {moments.filter((moment) => moment.island === island).map((moment) => (
                  <Link className="destination-experience-card" to="/experiences" aria-label={`Explore ${moment.title} in ${moment.island}`} key={moment.title}>
                    <div className="destination-experience-card__image"><Photo src={travelMedia(moment.image)} alt="" /></div>
                    <div className="destination-experience-card__body">
                      <span>{moment.island}</span>
                      <h4>{moment.title}</h4>
                      <p>{moment.copy}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="center destinations-experiences-editorial__action">
          <Link className="destination-editorial-link destination-editorial-link--navy" to="/experiences">VIEW ALL EXPERIENCES</Link>
        </div>
      </section>

      <section className="destination-editorial-cta shell destinations-reveal" data-destinations-reveal>
        <div className="destination-editorial-cta__copy">
          <h2>Not sure where to start?</h2>
          <p>Let us design the perfect itinerary.</p>
        </div>
        <PlanePath className="destination-editorial-cta__plane" />
        <Link className="destination-editorial-link destination-editorial-link--gold" to="/contact">ENQUIRE NOW</Link>
      </section>
    </div>
  );
}
