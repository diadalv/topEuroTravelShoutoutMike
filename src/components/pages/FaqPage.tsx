import { Link } from 'react-router-dom';
import { CircleHelp } from 'lucide-react';
import { ASSET, Gold, PageHero } from '@/components/travel/Shared';

const faqs = [
  ['What does a Destination Management Company do?', 'A DMC coordinates local services such as accommodation, transfers, excursions, venues, group programmes and on-site support on behalf of travellers and travel professionals.'],
  ['Which destinations do you currently cover?', 'Our core destinations are Rhodes and Kos, with island-hopping services across Symi and the wider Dodecanese.'],
  ['Can you create a completely tailor-made itinerary?', 'Yes. We can design private or group itineraries around your dates, interests, preferred pace and accommodation requirements.'],
  ['Do you work with travel agents and international partners?', 'Yes. Our B2B team supports travel agents, tour operators, corporate planners and event professionals.'],
  ['Can you manage corporate events and incentive groups?', 'Yes. We provide venue sourcing, accommodation, transfers, activities, production support and on-site coordination for MICE and group travel.'],
  ['How quickly will your team respond?', 'We aim to respond to enquiries within 24 business hours. Urgent and in-destination requests can also reach us by phone.'],
  ['What is your cancellation policy?', 'Cancellation terms depend on the selected service and supplier. The applicable terms are always confirmed clearly before booking.'],
] as const;

export default function FaqPage() {
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
          <div><h2>How can we help?</h2><p>Browse the most common questions or email our local team for a tailored answer.</p></div>
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