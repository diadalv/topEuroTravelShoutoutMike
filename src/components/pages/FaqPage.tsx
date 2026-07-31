import { Link } from 'react-router-dom';
import { CircleHelp } from 'lucide-react';
import { ASSET, Gold, PageHero, PageSeo } from '@/components/travel/Shared';

const faqs = [
  ['What services does Top Euro Travel provide in Greece?', 'Top Euro Travel offers comprehensive destination management services, including hotel contracting, transfers, ground handling, excursions, MICE, groups, weddings, VIP services and tailor-made travel programmes.'],
  ['Do you handle FIT, groups and MICE travel?', 'Yes. We provide solutions for FIT travellers, leisure groups, incentive programmes, conferences, meetings, corporate events and special interest groups.'],
  ['Which destinations do you operate in?', 'Our core destinations are Rhodes and Kos, while we also support selected travel programmes, events and special projects across Greece through our trusted partner network.'],
  ['Do you provide multilingual support?', 'Yes. Our multilingual team provides professional support in several languages, ensuring smooth communication and seamless guest experiences.'],
  ['Why choose Rhodes for incentive travel?', 'Rhodes combines excellent tourism infrastructure, direct international connectivity, unique event venues and authentic experiences, making it one of Greece\'s leading incentive destinations.'],
  ['Is Kos suitable for family and group holidays?', 'Absolutely. Kos offers beautiful beaches, quality accommodation, excellent accessibility and a wide range of activities, making it ideal for families and groups.'],
  ['What are the best seasons for events in Rhodes and Kos?', 'Spring and autumn are particularly popular for meetings, incentives and events, thanks to the pleasant climate, excellent flight connectivity and comfortable temperatures.'],
  ['Do you provide airport transfers and transportation?', 'Yes. We offer reliable transportation services, including airport and port transfers, coaches, minibuses, VIP transportation and tailor-made transport solutions.'],
  ['Can you arrange hotel contracting and accommodation management?', 'Yes. Thanks to our extensive local network and long-standing partnerships, we provide hotel contracting, accommodation sourcing and booking management services.'],
  ['Do you offer tailor-made itineraries?', 'Yes. Every programme can be customised according to your clients\' preferences, objectives, budget and travel style.'],
  ['How quickly can you provide a proposal or quotation?', 'Response times depend on the complexity of the request, but our team always aims to provide proposals as quickly and efficiently as possible.'],
  ['Do you work with travel agencies and tour operators worldwide?', 'Yes. We proudly collaborate with tour operators, travel agencies and travel professionals from international markets across Europe and beyond.'],
  ['Can you support large-scale groups and events?', 'Yes. With decades of operational experience and a strong local network, we are fully equipped to manage large groups, conferences and complex events.'],
  ['Do you provide on-site assistance during events and stays?', 'Yes. Our experienced team provides on-site coordination, resort assistance and operational support throughout the entire guest journey.'],
  ['Can you arrange VIP and luxury experiences in Greece?', 'Yes. We offer a wide range of premium and VIP services, including private transfers, yacht charters, exclusive experiences and bespoke travel programmes.'],
  ['Do you organize private events and destination weddings?', 'Yes. We design and coordinate destination weddings, private celebrations and special events tailored to each client\'s vision and requirements.'],
] as const;

export default function FaqPage() {
  return (
    <>
      <PageSeo title="Frequently Asked Questions | Top Euro Travel" description="Answers about Top Euro Travel services, Rhodes and Kos, FIT, groups, MICE, transfers, accommodation, tailor-made itineraries and on-site support." />
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