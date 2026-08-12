import {
  Gold,
  IconFeature,
  PageHero,
  PageSeo,
  PartnerMark,
  PlanePath,
  travelMedia,
} from '@/components/travel/Shared';
import { Image } from '@/components/ui/image';
import '@/styles/services-register.css';
import {
  BadgeCheck,
  Crown,
  Sparkles,
  Users,
} from 'lucide-react';
import { useEffect, useState, type KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';


type RegisterService = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};


const registerServices: RegisterService[] = [
  {
    number: '01',
    title: 'Hotel Contracting',
    description: 'Strategic negotiations, strong hotel relationships and market insight secure the right product mix for every programme.',
    image: 'https://static.wixstatic.com/media/5a118b_3904ba3b49764d06b35840292a63bc65~mv2.jpg',
    imageAlt: 'Rhodes coastline and resort landscape',
  },
  {
    number: '02',
    title: 'Management of Bookings',
    description: 'Coordinated management of accommodation, transfers, excursions and additional travel services.',
    image: 'https://static.wixstatic.com/media/5a118b_de187b0b55984726b005d3b9069de3a2~mv2.jpg',
    imageAlt: 'Rhodes destination seen from above',
  },
  {
    number: '03',
    title: 'Transfers',
    description: 'Comfortable, reliable transport for individual guests, groups, VIPs and accessible travel needs.',
    image: 'https://static.wixstatic.com/media/5a118b_c6ed3df1d39e464d9c3e39fa3eaa315a~mv2.jpg',
    imageAlt: 'Kos coastline and destination transport setting',
  },
  {
    number: '04',
    title: 'Resort Assistance',
    description: 'Multilingual meet-and-greet and on-site support throughout every guest journey.',
    image: 'https://static.wixstatic.com/media/5a118b_a327428b08f14c5eb3c227b9bd8b225f~mv2.jpg',
    imageAlt: 'Coastal resort in Kos',
  },
  {
    number: '05',
    title: 'Tours & Excursions',
    description: 'We offer a carefully curated portfolio of tours, excursions, cruises and authentic local experiences designed to showcase the very best of each destination. Led by experienced guides and supported by our operational expertise, our programmes cater to a wide variety of interests, from culture and gastronomy to nature, adventure and leisure.',
    image: travelMedia('lindos-aerial.jpg'),
    imageAlt: 'Tours and excursions around Lindos in Rhodes',
  },
  {
    number: '06',
    title: 'MICE & Groups',
    description: "We specialise in the planning and delivery of meetings, conferences, incentive programmes, special interest groups, product launches and corporate events. Combining destination expertise, trusted local partnerships and meticulous planning, we create successful programmes tailored to each client's objectives.",
    image: travelMedia('home-mice-v2.jpg'),
    imageAlt: 'MICE and group travel programme in Greece',
  },
  {
    number: '07',
    title: 'Weddings',
    description: 'From intimate ceremonies to large-scale celebrations, our dedicated team designs and manages bespoke wedding experiences in some of Greece\'s most stunning locations. Every detail is carefully coordinated to ensure a seamless and memorable occasion.',
    image: 'https://static.wixstatic.com/media/5a118b_3904ba3b49764d06b35840292a63bc65~mv2.jpg',
    imageAlt: 'A destination wedding setting in Greece',
  },
  {
    number: '08',
    title: 'XML API Connectivity & Agent Portal',
    description: 'Technology plays a key role in modern destination management. Through our XML API connectivity and dedicated Agent Portal, travel professionals can access products, services and booking solutions efficiently, benefiting from streamlined processes and enhanced operational flexibility.',
    image: travelMedia('services-hero.jpg'),
    imageAlt: 'Top Euro Travel connectivity and agent solutions',
  },
];


function getNextServiceIndex(event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) {
  if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
    event.preventDefault();
    return (currentIndex + 1) % registerServices.length;
  }

  if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
    event.preventDefault();
    return (currentIndex - 1 + registerServices.length) % registerServices.length;
  }

  if (event.key === 'Home') {
    event.preventDefault();
    return 0;
  }

  if (event.key === 'End') {
    event.preventDefault();
    return registerServices.length - 1;
  }

  return currentIndex;
}


export default function ServicesPage() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const activeService = registerServices[activeServiceIndex];

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-services-reveal]'));
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
    }, { threshold: 0.1, rootMargin: '0px 0px -45px' });


    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);


  return (
    <div className="services-page services-page--portfolio">
      <PageSeo title="Destination Management Services in Greece | Top Euro Travel" description="Explore destination management services in Greece, including hotel contracting, transfers, MICE, groups, excursions, weddings and XML API connectivity by Top Euro Travel." />
      <PageHero
        className="services-page__hero"
        image={travelMedia('services-hero.jpg')}
        breadcrumb="Services"
        title={<><Gold>Destination Management</Gold> Services</>}
      />


      <section className="services-portfolio shell services-portfolio-reveal" aria-labelledby="services-portfolio-title" data-services-reveal>
        <div className="services-portfolio__intro">
          <div>
            <span className="services-portfolio__eyebrow">OUR SERVICES</span>
            <h2 id="services-portfolio-title">Comprehensive destination management, thoughtfully delivered.</h2>
          </div>
          <div className="services-portfolio__intro-copy">
            <p>At Top Euro Travel, we support tour operators, travel agencies, groups, event planners and travel professionals with reliable, flexible and tailor-made solutions across Greece, with particular expertise in Rhodes and Kos.</p>
            <p>From hotel contracting and ground handling to memorable experiences and technology-driven solutions, every service is managed with local knowledge, trusted partnerships and careful attention to detail.</p>
          </div>
        </div>


        <div className="tet-services-register">
          <div className="tet-services-divider" aria-hidden="true" />

          <div className="tet-services-stage">
            <div className="tet-services-stage__navigation">
              <div className="tet-services-stage__heading">
                <p className="tet-services-eyebrow">01 · Destination Services</p>
                <h2 id="services-operations-title">One connected operation, from planning to delivery.</h2>
              </div>

              <div className="tet-services-list" role="tablist" aria-label="Top Euro Travel services">
                {registerServices.map((service, index) => {
                  const isActive = activeServiceIndex === index;

                  return (
                    <button
                      className={`tet-service-row${isActive ? ' is-active' : ''}`}
                      id={`tet-service-tab-${index}`}
                      key={service.title}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="tet-active-service-panel"
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => setActiveServiceIndex(index)}
                      onFocus={() => setActiveServiceIndex(index)}
                      onMouseEnter={() => setActiveServiceIndex(index)}
                      onKeyDown={(event) => {
                        const nextIndex = getNextServiceIndex(event, index);
                        setActiveServiceIndex(nextIndex);

                        if (nextIndex !== index) {
                          document.getElementById(`tet-service-tab-${nextIndex}`)?.focus();
                        }
                      }}
                    >
                      <span className="tet-service-row__accent" aria-hidden="true" />
                      <span className="tet-service-row__number">{service.number}</span>
                      <span className="tet-service-row__content">
                        <strong>{service.title}</strong>
                        <span className="tet-service-row__description">{service.description}</span>
                      </span>
                      <span className="tet-service-row__chevron" aria-hidden="true" />
                    </button>
                  );
                })}
              </div>
            </div>

            <article
              className="tet-service-visual"
              id="tet-active-service-panel"
              role="tabpanel"
              aria-labelledby={`tet-service-tab-${activeServiceIndex}`}
              aria-live="polite"
            >
              <div className="tet-service-visual__frame">
                <Image key={activeService.image} src={activeService.image} alt={activeService.imageAlt} />
                <span className="tet-service-visual__wash" aria-hidden="true" />
                <span className="tet-service-visual__index" aria-hidden="true">{activeService.number}</span>
              </div>

              <div className="tet-service-visual__label">
                <div key={activeService.title}>
                  <span>Selected capability</span>
                  <h3>{activeService.title}</h3>
                </div>
                <span className="tet-service-visual__arrow" aria-hidden="true"><i /></span>
              </div>
            </article>
          </div>
        </div>
      </section>


      <section className="services-page__promise services-portfolio-reveal" aria-labelledby="services-promise-title" data-services-reveal>
        <div className="shell services-page__promise-inner">
          <h2 id="services-promise-title">One local partner. Every operational detail.</h2>
          <ul>
            <li><Users aria-hidden="true" /><div><h3>Dedicated local team</h3><p>In-depth destination knowledge and responsive support.</p></div></li>
            <li><BadgeCheck aria-hidden="true" /><div><h3>Trusted execution</h3><p>Reliable delivery through established local partnerships.</p></div></li>
            <li><Sparkles aria-hidden="true" /><div><h3>Tailor-made solutions</h3><p>Flexible services shaped around every programme.</p></div></li>
          </ul>
        </div>
      </section>


      <section className="services-page__partners shell services-portfolio-reveal" aria-label="Proud members and partners" data-services-reveal>
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


      <section className="services-page__request shell services-portfolio-reveal" data-services-reveal>
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
