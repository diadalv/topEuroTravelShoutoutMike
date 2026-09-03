import {
  Gold,
  PageHero,
  PageSeo,
  PartnerMark,
  travelMedia,
} from '@/components/travel/Shared';
import { Image } from '@/components/ui/image';
import '@/styles/services-register.css';
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
    image: travelMedia('wix:image://v1/5a118b_e7c833209f704a4f8d1b6d7693862dbe~mv2.jpg/21%20Rhodes%20from%20Above%20Aerial%20Photo.jpg#originWidth=1152&originHeight=768'),
    imageAlt: 'Rhodes coastline and resort landscape',
  },
  {
    number: '02',
    title: 'Management of Bookings',
    description: 'Coordinated management of accommodation, transfers, excursions and additional travel services.',
    image: travelMedia('wix:image://v1/5a118b_b8241d9c0b0c415a9034d17a7206d87c~mv2.jpg/213%20Butterflies%20Valley%20entrance.jpg#originWidth=1200&originHeight=800'),
    imageAlt: 'Rhodes destination seen from above',
  },
  {
    number: '03',
    title: 'Transfers',
    description: 'Comfortable, reliable transport for individual guests, groups, VIPs and accessible travel needs.',
    image: 'https://static.wixstatic.com/media/11062b_fbe7eaa8c4594aa8a8f0bd5dbe505019~mv2.jpg',
    imageAlt: 'Kos coastline and destination transport setting',
  },
  {
    number: '04',
    title: 'Resort Assistance',
    description: 'Multilingual meet-and-greet and on-site support throughout every guest journey.',
    image: 'https://static.wixstatic.com/media/7f70fae2af3e444d9ab8c3b7698a6c1a.jpg',
    imageAlt: 'Coastal resort in Kos',
  },
  {
    number: '05',
    title: 'Tours & Excursions',
    description: 'We offer a carefully curated portfolio of tours, excursions, cruises and authentic local experiences designed to showcase the very best of each destination. Led by experienced guides and supported by our operational expertise, our programmes cater to a wide variety of interests, from culture and gastronomy to nature, adventure and leisure.',
    image: travelMedia('wix:image://v1/5a118b_e3d4d2982a7c4b93a38ddbbcc5b4087a~mv2.jpg/Water%20Sports%20Rhodes%20Faliraki%20Rings-01.jpg#originWidth=4090&originHeight=2722'),
    imageAlt: 'Tours and excursions around Lindos in Rhodes',
  },
  {
    number: '06',
    title: 'MICE & Groups',
    description: "We specialise in the planning and delivery of meetings, conferences, incentive programmes, special interest groups, product launches and corporate events. Combining destination expertise, trusted local partnerships and meticulous planning, we create successful programmes tailored to each client's objectives.",
    image: 'https://static.wixstatic.com/media/11062b_5da29bcc7ff84641b76e3c93f59e1150~mv2.jpg',
    imageAlt: 'MICE and group travel programme in Greece',
  },
  {
    number: '07',
    title: 'Weddings',
    description: 'From intimate ceremonies to large-scale celebrations, our dedicated team designs and manages bespoke wedding experiences in some of Greece\'s most stunning locations. Every detail is carefully coordinated to ensure a seamless and memorable occasion.',
    image: 'https://static.wixstatic.com/media/11062b_1167cc57cadf42589674e99c6f9016b8~mv2.jpeg',
    imageAlt: 'A destination wedding setting in Greece',
  },
  {
    number: '08',
    title: 'XML API Connectivity & Agent Portal',
    description: 'Technology plays a key role in modern destination management. Through our XML API connectivity and dedicated Agent Portal, travel professionals can access products, services and booking solutions efficiently, benefiting from streamlined processes and enhanced operational flexibility.',
    image: 'https://static.wixstatic.com/media/11062b_8bfaa3d6762740aebf1cfae47d905c3a~mv2.jpg',
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
        image={travelMedia('wix:image://v1/5a118b_dfc38c26b47b49b0b819d70a4cc66840~mv2.jpg/24%20Medieval%20Town%20Tower.jpg#originWidth=4236&originHeight=2819')}
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
                <p className="tet-services-eyebrow">Destination Services</p>
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
                        <span
                          className="tet-service-row__description"
                          style={{ maxWidth: '470px', maxHeight: isActive ? '340px' : undefined }}
                        >
                          {service.description}
                        </span>
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
                  <h3 style={{ overflow: 'visible', textOverflow: 'clip', whiteSpace: 'normal' }}>
                    {activeService.title}
                  </h3>
                </div>
                <span className="tet-service-visual__arrow" aria-hidden="true"><i /></span>
              </div>
            </article>
          </div>
        </div>
      </section>


      <section className="services-page__promise services-portfolio-reveal" aria-labelledby="services-promise-title" data-services-reveal>
        <div className="shell services-page__promise-inner">
          <header className="services-page__promise-heading">
            <p className="services-page__promise-eyebrow">Why Top Euro Travel</p>
            <h2 id="services-promise-title">
              One local partner.<br />
              Every operational detail.
            </h2>
          </header>

          <ol className="services-page__promise-list">
            <li>
              <span className="services-page__promise-number" aria-hidden="true">01</span>
              <div>
                <h3>Dedicated local team</h3>
                <p>In-depth destination knowledge and responsive support.</p>
              </div>
            </li>
            <li>
              <span className="services-page__promise-number" aria-hidden="true">02</span>
              <div>
                <h3>Trusted execution</h3>
                <p>Reliable delivery through established local partnerships.</p>
              </div>
            </li>
            <li>
              <span className="services-page__promise-number" aria-hidden="true">03</span>
              <div>
                <h3>Tailor-made solutions</h3>
                <p>Flexible services shaped around every programme.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>


      <section className="tet-partner-contact services-portfolio-reveal" aria-label="Partners and contact" data-services-reveal>
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
