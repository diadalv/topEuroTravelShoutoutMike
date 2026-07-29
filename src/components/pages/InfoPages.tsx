import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, CircleHelp, Clock3, ShieldCheck } from 'lucide-react';
import {
  ASSET,
  Gold,
  PageHero,
  Photo,
  RequestBanner,
  SectionTitle,
} from '@/components/travel/Shared';

const blogPosts = [
  {
    id: 'rhodes-first-visit',
    title: 'A Local Guide to Your First Rhodes Visit',
    category: 'Destination Guide',
    readTime: '6 min read',
    image: 'old-town.jpg',
    intro: 'How to combine the Medieval City, Lindos and the island’s quieter coastal corners in one seamless journey.',
    body: [
      'Rhodes rewards thoughtful planning. Begin with the UNESCO-listed Medieval City before the streets become busy, then allow time for the island’s eastern coastline and traditional villages.',
      'For a balanced itinerary, combine guided cultural visits with unstructured time by the sea. Our local team can coordinate transport, dining and private experiences around your preferred pace.',
    ],
  },
  {
    id: 'island-hopping',
    title: 'Planning the Perfect Dodecanese Island-Hopping Route',
    category: 'Travel Planning',
    readTime: '5 min read',
    image: 'marina.jpg',
    intro: 'A practical route connecting Rhodes, Symi, Kos and smaller islands without turning your holiday into a transfer schedule.',
    body: [
      'The best island-hopping itineraries leave space for discovery. Ferry schedules, seasonal winds and hotel locations should shape the route before activities are added.',
      'Rhodes and Kos work well as main bases, while Symi and smaller islands can be included as private day cruises or relaxed multi-night stays.',
    ],
  },
  {
    id: 'mice-in-greece',
    title: 'Why Rhodes Works for Meetings and Incentive Travel',
    category: 'MICE & Groups',
    readTime: '4 min read',
    image: 'home-mice-v2.jpg',
    intro: 'Reliable infrastructure, distinctive venues and memorable group experiences within a compact island destination.',
    body: [
      'Rhodes combines professional conference facilities with historic venues, coastal dining and easy access to team experiences. This makes it suitable for both focused meetings and incentive programmes.',
      'A local DMC keeps the programme connected: accommodation, transport, venues, dining and on-site support are coordinated through one experienced team.',
    ],
  },
] as const;

const faqs = [
  ['What does a Destination Management Company do?', 'A DMC coordinates local services such as accommodation, transfers, excursions, venues, group programmes and on-site support on behalf of travellers and travel professionals.'],
  ['Which destinations do you currently cover?', 'Our core destinations are Rhodes and Kos, with island-hopping services across Symi and the wider Dodecanese.'],
  ['Can you create a completely tailor-made itinerary?', 'Yes. We can design private or group itineraries around your dates, interests, preferred pace and accommodation requirements.'],
  ['Do you work with travel agents and international partners?', 'Yes. Our Agents Portal and B2B team support travel agents, tour operators, corporate planners and event professionals.'],
  ['Can you manage corporate events and incentive groups?', 'Yes. We provide venue sourcing, accommodation, transfers, activities, production support and on-site coordination for MICE and group travel.'],
  ['How quickly will your team respond?', 'We aim to respond to enquiries within 24 business hours. Urgent and in-destination requests can also reach us by phone.'],
  ['What is your cancellation policy?', 'Cancellation terms depend on the selected service and supplier. The applicable terms are always confirmed clearly before booking.'],
] as const;

export function BlogPage() {
  return (
    <>
      <PageHero
        title={<><Gold>Travel</Gold> Journal</>}
        breadcrumb="Blog"
        image={`${ASSET}/old-town.jpg`}
        description="Local insights, destination guides and practical planning advice from Rhodes and the Dodecanese."
      />

      <section className="section shell blog-index">
        <SectionTitle eyebrow="Local knowledge">Latest Stories</SectionTitle>
        <div className="blog-card-grid">
          {blogPosts.map((post) => (
            <article className="blog-card card" key={post.id}>
              <div className="blog-card__image"><Photo src={`${ASSET}/${post.image}`} alt="" /></div>
              <div className="blog-card__body">
                <div className="blog-card__meta"><span>{post.category}</span><span><Clock3 /> {post.readTime}</span></div>
                <h2>{post.title}</h2>
                <p>{post.intro}</p>
                <a className="arrow-link" href={`#${post.id}`}>READ ARTICLE <ArrowRight /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--cream">
        <div className="shell blog-articles">
          {blogPosts.map((post) => (
            <article id={post.id} key={post.id}>
              <span>{post.category}</span>
              <h2>{post.title}</h2>
              {post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <Link className="button button--outline" to="/contact">PLAN THIS JOURNEY</Link>
            </article>
          ))}
        </div>
      </section>

      <RequestBanner />
    </>
  );
}

export function FaqPage() {
  return (
    <>
      <PageHero
        title={<><Gold>Frequently Asked</Gold> Questions</>}
        breadcrumb="FAQ"
        image={`${ASSET}/contact-hero.jpg`}
        description="Clear answers about our destinations, services, bookings and partner support."
      />

      <section className="section shell faq-page">
        <div className="faq-page__intro">
          <CircleHelp />
          <div>
            <h2>How can we help?</h2>
            <p>Browse the most common questions or contact our local team for a tailored answer.</p>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>{question}<span aria-hidden="true">+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
        <div className="faq-page__cta">
          <div><h2>Still have a question?</h2><p>Our team aims to reply within 24 business hours.</p></div>
          <Link className="button button--gold" to="/contact">CONTACT OUR TEAM</Link>
        </div>
      </section>
    </>
  );
}

function LegalPage({
  title,
  breadcrumb,
  updated,
  children,
}: {
  title: string;
  breadcrumb: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero title={title} breadcrumb={breadcrumb} image={`${ASSET}/agents-hero.jpg`} />
      <section className="section shell legal-page">
        <div className="legal-page__meta"><CalendarDays /><span>Last updated: {updated}</span></div>
        <div className="legal-page__content">{children}</div>
        <aside><ShieldCheck /><p>Questions about these terms can be sent to <a href="mailto:info@topeurotravel.gr">info@topeurotravel.gr</a>.</p></aside>
      </section>
    </>
  );
}

export function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" breadcrumb="Privacy Policy" updated="29 July 2026">
      <h2>Information we collect</h2>
      <p>We collect the information you choose to provide through enquiry, booking and partner-access forms, including contact details and travel requirements.</p>
      <h2>How we use information</h2>
      <p>Information is used to answer enquiries, prepare travel proposals, coordinate requested services and maintain necessary business records.</p>
      <h2>Sharing and retention</h2>
      <p>Relevant details may be shared with trusted travel suppliers only when required to deliver a requested service. Information is retained only for legitimate operational, contractual and legal purposes.</p>
      <h2>Your choices</h2>
      <p>You may request access, correction or deletion of your personal information by contacting our team.</p>
    </LegalPage>
  );
}

export function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" breadcrumb="Terms & Conditions" updated="29 July 2026">
      <h2>Travel proposals and bookings</h2>
      <p>Availability, pricing, payment schedules and supplier conditions are confirmed in writing before a booking becomes final.</p>
      <h2>Changes and cancellations</h2>
      <p>Change and cancellation terms vary by service and supplier. The applicable conditions will be included with each proposal or booking confirmation.</p>
      <h2>Traveller responsibilities</h2>
      <p>Travellers are responsible for valid travel documents, appropriate insurance and communicating relevant accessibility or medical requirements before travel.</p>
      <h2>Service delivery</h2>
      <p>We coordinate services with carefully selected local partners and will provide reasonable assistance if circumstances require an itinerary adjustment.</p>
    </LegalPage>
  );
}
