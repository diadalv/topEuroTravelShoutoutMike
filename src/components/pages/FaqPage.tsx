import { Gold, PageHero, PageSeo, travelMedia } from '@/components/travel/Shared';
import '@/styles/services-register.css';
import { Link } from 'react-router-dom';

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

const faqStyles = `
  .tet-faq {
    --faq-navy: #073b67;
    --faq-gold: #df9714;
    --faq-cream: #fbf8f2;
    --faq-line: rgba(7, 59, 103, 0.18);
    background: var(--faq-cream);
    padding: clamp(70px, 8vw, 124px) 0 clamp(62px, 6vw, 94px);
  }

  .tet-faq__inner {
    width: min(1460px, calc(100% - clamp(40px, 8.4vw, 144px)));
    margin-inline: auto;
  }

  .tet-faq__heading {
    display: block;
    padding-bottom: clamp(28px, 3.2vw, 48px);
    border-bottom: 1px solid rgba(223, 151, 20, 0.72);
  }


  .tet-faq__heading h2 {
    max-width: 760px;
    margin: 0;
    color: var(--faq-navy);
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(2.1rem, 3.4vw, 3.8rem);
    font-weight: 600;
    letter-spacing: -0.035em;
    line-height: 0.98;
  }

  .tet-faq__list {
    margin-left: 0;
  }

  .tet-faq__item {
    border-bottom: 1px solid var(--faq-line);
  }

  .tet-faq__item summary {
    display: grid;
    grid-template-columns: 52px minmax(0, 1fr) 44px;
    gap: clamp(14px, 2vw, 30px);
    align-items: center;
    min-height: clamp(76px, 6vw, 94px);
    padding: 12px 0;
    cursor: pointer;
    list-style: none;
  }

  .tet-faq__item summary::-webkit-details-marker {
    display: none;
  }

  .tet-faq__number {
    color: var(--faq-gold);
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.14em;
  }

  .tet-faq__question {
    color: var(--faq-navy);
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(1.08rem, 1.35vw, 1.45rem);
    font-weight: 600;
    line-height: 1.17;
    transition: color 180ms ease;
  }

  .tet-faq__toggle {
    position: relative;
    width: 36px;
    height: 36px;
    border: 1px solid rgba(223, 151, 20, 0.62);
    border-radius: 50%;
    transition: background-color 220ms ease, transform 220ms ease;
  }

  .tet-faq__toggle::before,
  .tet-faq__toggle::after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 14px;
    height: 1.5px;
    background: var(--faq-gold);
    content: '';
    transform: translate(-50%, -50%);
    transition: transform 220ms ease, background-color 220ms ease;
  }

  .tet-faq__toggle::after {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  .tet-faq__item[open] .tet-faq__toggle {
    background: var(--faq-gold);
    transform: rotate(180deg);
  }

  .tet-faq__item[open] .tet-faq__toggle::before,
  .tet-faq__item[open] .tet-faq__toggle::after {
    background: #fff;
  }

  .tet-faq__item[open] .tet-faq__toggle::after {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  .tet-faq__answer {
    max-width: 790px;
    margin: -2px 44px 0 82px;
    padding: 0 0 clamp(28px, 3vw, 42px);
    animation: tet-faq-reveal 240ms ease both;
  }

  .tet-faq__answer p {
    margin: 0;
    color: rgba(7, 59, 103, 0.78);
    font-size: clamp(1rem, 1.08vw, 1.15rem);
    line-height: 1.8;
  }

  .tet-faq__item summary:hover .tet-faq__question,
  .tet-faq__item summary:focus-visible .tet-faq__question {
    color: var(--faq-gold);
  }

  .tet-faq__item summary:focus-visible {
    outline: 2px solid var(--faq-gold);
    outline-offset: 6px;
  }

  @keyframes tet-faq-reveal {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 900px) {
    .tet-faq__heading {
      grid-template-columns: 1fr;
      gap: 18px;
    }

    .tet-faq__list {
      margin-left: 0;
    }
  }

  @media (max-width: 620px) {
    .tet-faq {
      padding-top: 56px;
    }

    .tet-faq__inner {
      width: calc(100% - 40px);
    }

    .tet-faq__item summary {
      grid-template-columns: 34px minmax(0, 1fr) 34px;
      gap: 10px;
      min-height: 84px;
    }

    .tet-faq__toggle {
      width: 32px;
      height: 32px;
    }

    .tet-faq__answer {
      margin: -2px 10px 0 44px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .tet-faq__answer { animation: none; }
    .tet-faq__toggle,
    .tet-faq__question { transition: none; }
  }

  .tet-faq-contact .tet-partner-contact__inner {
    display: block;
  }
`;

export default function FaqPage() {
  return (
    <>
      <PageSeo
        title="Frequently Asked Questions | Top Euro Travel"
        description="Answers about Top Euro Travel services, Rhodes and Kos, FIT, groups, MICE, transfers, accommodation, tailor-made itineraries and on-site support."
      />
      <style>{faqStyles}</style>
      <PageHero
        title={<><Gold>Frequently Asked</Gold> Questions</>}
        breadcrumb="FAQ"
        image={travelMedia('contact-hero.jpg')}
      />

      <main id="main-content" className="tet-faq">
        <div className="tet-faq__inner">
          <header className="tet-faq__heading">
            <h2>Frequently asked questions</h2>
          </header>

          <div className="tet-faq__list">
            {faqs.map(([question, answer], index) => (
              <details className="tet-faq__item" key={question} open={index === 0}>
                <summary>
                  <span className="tet-faq__number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="tet-faq__question">{question}</span>
                  <span className="tet-faq__toggle" aria-hidden="true" />
                </summary>
                <div className="tet-faq__answer">
                  <p>{answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </main>
      <section className="tet-partner-contact tet-faq-contact" aria-label="Contact">
        <div className="tet-partner-contact__inner shell">
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
    </>
  );
}

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

const faqStyles = `
  .tet-faq {
    --faq-navy: #073b67;
    --faq-gold: #df9714;
    --faq-cream: #fbf8f2;
    --faq-line: rgba(7, 59, 103, 0.18);
    background: var(--faq-cream);
    padding: clamp(52px, 5.5vw, 82px) 0 clamp(48px, 4.5vw, 70px);
  }

  .tet-faq__inner {
    width: min(1460px, calc(100% - clamp(40px, 8.4vw, 144px)));
    margin-inline: auto;
  }

  .tet-faq__heading {
    display: block;
    padding-bottom: clamp(20px, 2.4vw, 32px);
    border-bottom: 1px solid rgba(223, 151, 20, 0.72);
  }

  .tet-faq__heading h2 {
    max-width: 760px;
    margin: 0;
    color: var(--faq-navy);
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(1.8rem, 2.7vw, 3rem);
    font-weight: 600;
    letter-spacing: -0.035em;
    line-height: 0.98;
  }

  .tet-faq__list {
    margin-left: 0;
  }

  .tet-faq__item {
    border-bottom: 1px solid var(--faq-line);
  }

  .tet-faq__item summary {
    display: grid;
    grid-template-columns: 46px minmax(0, 1fr) 38px;
    gap: clamp(12px, 1.5vw, 22px);
    align-items: center;
    min-height: clamp(66px, 5vw, 80px);
    padding: 9px 0;
    cursor: pointer;
    list-style: none;
  }

  .tet-faq__item summary::-webkit-details-marker {
    display: none;
  }

  .tet-faq__number {
    color: var(--faq-gold);
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.14em;
  }

  .tet-faq__question {
    color: var(--faq-navy);
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(1rem, 1.12vw, 1.22rem);
    font-weight: 600;
    line-height: 1.17;
    transition: color 180ms ease;
  }

  .tet-faq__toggle {
    position: relative;
    width: 30px;
    height: 30px;
    border: 1px solid rgba(223, 151, 20, 0.62);
    border-radius: 50%;
    transition: background-color 220ms ease, transform 220ms ease;
  }

  .tet-faq__toggle::before,
  .tet-faq__toggle::after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 1.5px;
    background: var(--faq-gold);
    content: '';
    transform: translate(-50%, -50%);
    transition: transform 220ms ease, background-color 220ms ease;
  }

  .tet-faq__toggle::after {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  .tet-faq__item[open] .tet-faq__toggle {
    background: var(--faq-gold);
    transform: rotate(180deg);
  }

  .tet-faq__item[open] .tet-faq__toggle::before,
  .tet-faq__item[open] .tet-faq__toggle::after {
    background: #fff;
  }

  .tet-faq__item[open] .tet-faq__toggle::after {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  .tet-faq__answer {
    max-width: 790px;
    margin: -1px 38px 0 68px;
    padding: 0 0 clamp(22px, 2.2vw, 32px);
    animation: tet-faq-reveal 240ms ease both;
  }

  .tet-faq__answer p {
    margin: 0;
    color: rgba(7, 59, 103, 0.78);
    font-size: clamp(0.94rem, 0.96vw, 1rem);
    line-height: 1.7;
  }

  .tet-faq__item summary:hover .tet-faq__question,
  .tet-faq__item summary:focus-visible .tet-faq__question {
    color: var(--faq-gold);
  }

  .tet-faq__item summary:focus-visible {
    outline: 2px solid var(--faq-gold);
    outline-offset: 6px;
  }

  @keyframes tet-faq-reveal {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 900px) {
    .tet-faq__heading {
      grid-template-columns: 1fr;
      gap: 18px;
    }

    .tet-faq__list {
      margin-left: 0;
    }
  }

  @media (max-width: 620px) {
    .tet-faq {
      padding-top: 56px;
    }

    .tet-faq__inner {
      width: calc(100% - 40px);
    }

    .tet-faq__item summary {
      grid-template-columns: 34px minmax(0, 1fr) 34px;
      gap: 10px;
      min-height: 84px;
    }

    .tet-faq__toggle {
      width: 32px;
      height: 32px;
    }

    .tet-faq__answer {
      margin: -2px 10px 0 44px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .tet-faq__answer { animation: none; }
    .tet-faq__toggle,
    .tet-faq__question { transition: none; }
  }

  .tet-faq-contact .tet-partner-contact__inner {
    display: block;
  }

  .tet-faq-contact .tet-partner-contact__cta {
    padding-block: clamp(54px, 5vw, 76px);
  }

  .tet-faq-contact .tet-partner-contact__copy h2 {
    font-size: clamp(2.45rem, 4vw, 4rem);
  }

  .tet-faq-contact .tet-partner-contact__description {
    font-size: clamp(0.98rem, 1.05vw, 1.08rem);
  }
`;

export default function FaqPage() {
  return (
    <>
      <PageSeo
        title="Frequently Asked Questions | Top Euro Travel"
        description="Answers about Top Euro Travel services, Rhodes and Kos, FIT, groups, MICE, transfers, accommodation, tailor-made itineraries and on-site support."
      />
      <style>{faqStyles}</style>
      <PageHero
        title={<><Gold>Frequently Asked</Gold> Questions</>}
        breadcrumb="FAQ"
        image={travelMedia('contact-hero.jpg')}
      />

      <main id="main-content" className="tet-faq">
        <div className="tet-faq__inner">
          <header className="tet-faq__heading">
            <h2>Frequently asked questions</h2>
          </header>

          <div className="tet-faq__list">
            {faqs.map(([question, answer], index) => (
              <details className="tet-faq__item" key={question} open={index === 0}>
                <summary>
                  <span className="tet-faq__number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="tet-faq__question">{question}</span>
                  <span className="tet-faq__toggle" aria-hidden="true" />
                </summary>
                <div className="tet-faq__answer">
                  <p>{answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </main>

      <section className="tet-partner-contact tet-faq-contact" aria-label="Contact">
        <div className="tet-partner-contact__inner shell">
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
    </>
  );
}
