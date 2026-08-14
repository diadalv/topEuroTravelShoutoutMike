import {
  MockForm,
  PageHero,
  Photo,
  travelMedia,
} from '@/components/travel/Shared';
import {
  Facebook,
  Instagram,
  Linkedin,
  Map,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ContactPage() {
  const [subject, setSubject] = useState('');

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-contact-reveal]'));
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
    }, { threshold: 0.12, rootMargin: '0px 0px -45px' });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-page contact-editorial">
      <PageHero
        className="contact-hero"
        title="Contact Us"
        breadcrumb="Contact"
        image={travelMedia('contact-hero.jpg')}
      />

      <main className="shell contact-editorial__content">
        <section className="contact-editorial__intro contact-editorial__reveal" data-contact-reveal>
          <div className="contact-editorial__details">
            <p className="contact-editorial__eyebrow">GET IN TOUCH</p>
            <h2>Let’s start a conversation.</h2>
            <p className="contact-editorial__lead">
              Whether you are planning a journey, coordinating a group or exploring a partnership,
              our local team in Rhodes and Kos is ready to help.
            </p>

            <dl className="contact-editorial__detail-list">
              <div>
                <dt>Email</dt>
                <dd><a href="mailto:info@topeurotravel.gr">info@topeurotravel.gr</a></dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd><a href="tel:+302241045506">+30 22410 45506</a></dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd>
                  <a href="https://www.google.com/maps/search/?api=1&query=5th+Km+Rhodes-Lindos+Avenue%2C+Rhodes+851+00%2C+Greece" target="_blank" rel="noreferrer">
                    5th Km Rhodes-Lindos Avenue,<br />P.O. Box 348, Rhodes 851 00, Greece
                  </a>
                </dd>
              </div>
              <div>
                <dt>Office Hours</dt>
                <dd>Monday – Friday: 09:00 – 17:00 (EET)<br />Saturday – Sunday: By Appointment</dd>
              </div>
            </dl>

            <div className="contact-editorial__socials" aria-label="Top Euro Travel social media">
              <span>Follow us</span>
              <a href="https://www.linkedin.com/company/topeurotravel/" target="_blank" rel="noreferrer" aria-label="Top Euro Travel on LinkedIn"><Linkedin /></a>
              <a href="https://www.facebook.com/TopEuroTravel" target="_blank" rel="noreferrer" aria-label="Top Euro Travel on Facebook"><Facebook /></a>
              <a href="https://www.instagram.com/topeurotravel_" target="_blank" rel="noreferrer" aria-label="Top Euro Travel on Instagram"><Instagram /></a>
            </div>
          </div>

          <div className="contact-editorial__form-wrap" id="contact-form">
            <h2>Send us a message.</h2>
            <p>Complete the form and our team will get back to you as soon as possible.</p>
            <MockForm
              className="contact-editorial__form"
              successMessage="Thank you. Your message has been received. Our team will reply within 24 business hours."
            >
              <div className="form-field">
                <label htmlFor="contact-name">Name</label>
                <input id="contact-name" name="name" autoComplete="name" required minLength={2} placeholder="Your Name" />
              </div>
              <div className="form-field">
                <label htmlFor="contact-email">Email Address</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="Your Email Address" />
              </div>
              <div className="form-field">
                <label htmlFor="contact-phone">Phone Number</label>
                <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="Your Phone Number" />
              </div>
              <div className="form-field">
                <label htmlFor="contact-subject">Subject</label>
                <select id="contact-subject" name="subject" value={subject} onChange={(event) => setSubject(event.target.value)} required>
                  <option value="" disabled>How can we help you?</option>
                  <option>General Inquiry</option>
                  <option>Booking &amp; Reservation</option>
                  <option>Groups &amp; Events</option>
                  <option>Agent &amp; B2B</option>
                </select>
              </div>
              <div className="form-field form-field--message">
                <label htmlFor="contact-message">Your Message</label>
                <textarea id="contact-message" name="message" required minLength={20} placeholder="Tell us about your dates, group size and travel requirements..." />
              </div>
              <button className="button button--gold" type="submit">SEND MESSAGE</button>
            </MockForm>
          </div>
        </section>

        <section className="contact-editorial__location contact-editorial__reveal" data-contact-reveal>
          <div className="contact-editorial__location-photo">
            <Photo src={travelMedia('contact-map-v2.jpg')} alt="Aerial view of the Rhodes coastline" />
          </div>
          <article className="contact-editorial__location-panel">
            <p className="contact-editorial__eyebrow">RHODES OFFICE</p>
            <h2>Our Location</h2>
            <p>5th Km Rhodes-Lindos Avenue,<br />P.O. Box 348, Rhodes 851 00, Greece</p>
            <div className="contact-editorial__location-hours">
              <strong>Office Hours</strong>
              <span>Monday – Friday: 09:00 – 17:00 (EET)</span>
              <span>Saturday – Sunday: By Appointment</span>
            </div>
            <a className="button contact-editorial__map-button" href="https://www.google.com/maps/search/?api=1&query=5th+Km+Rhodes-Lindos+Avenue%2C+Rhodes+851+00%2C+Greece" target="_blank" rel="noreferrer">
              VIEW ON MAP <Map />
            </a>
          </article>
        </section>

        <section className="contact-editorial__credentials contact-editorial__reveal" data-contact-reveal aria-labelledby="company-details-title">
          <div className="contact-editorial__identity">
            <span>REGISTERED BUSINESS DETAILS</span>
            <h2 id="company-details-title">Top Euro Travel</h2>
            <p>DMC Incoming Travel Agency / Incoming Tour Operator</p>
          </div>
          <dl>
            <div><dt>Fax</dt><dd><a href="tel:+302241045551">+30 22410 45551</a></dd></div>
            <div><dt>GNTO Licence</dt><dd>1476E60000156801</dd></div>
            <div><dt>Tax Number</dt><dd>EL800892257</dd></div>
          </dl>
          <div className="contact-editorial__badges" aria-label="Memberships and supported programmes">
            <span>SETE</span><span>HATTA</span><span>Live-Pay</span><span>EU / ESPA Programme</span>
          </div>
        </section>
      </main>

      <style>{`
        .contact-editorial {
          --contact-navy: #063f69;
          --contact-navy-deep: #003a63;
          --contact-gold: #de9613;
          --contact-ink: #1d4261;
          --contact-line: rgba(12, 61, 96, .18);
          --contact-ivory: #fbf9f5;
          background: var(--contact-ivory);
          color: var(--contact-ink);
          overflow-x: clip;
        }

        .contact-editorial *,
        .contact-editorial *::before,
        .contact-editorial *::after {
          box-sizing: border-box;
        }

        .contact-editorial .contact-editorial__content.shell {
          width: min(1244px, calc(100% - 48px)) !important;
          max-width: 1244px;
          margin-inline: auto !important;
          padding-top: clamp(62px, 7vw, 104px);
          padding-bottom: clamp(56px, 7vw, 96px);
        }

        .contact-editorial__intro {
          display: grid;
          grid-template-columns: minmax(0, .78fr) minmax(0, 1.22fr);
          gap: clamp(64px, 8vw, 132px);
          align-items: start;
        }

        .contact-editorial__details,
        .contact-editorial__form-wrap {
          min-width: 0;
        }

        .contact-editorial__eyebrow {
          margin: 0 0 14px;
          color: var(--contact-gold);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .2em;
          line-height: 1.4;
        }

        .contact-editorial h2 {
          margin: 0;
          color: var(--contact-navy-deep);
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(31px, 2.45vw, 43px);
          font-weight: 500;
          line-height: 1.08;
          letter-spacing: -.02em;
        }

        .contact-editorial__lead {
          max-width: 480px;
          margin: 20px 0 34px;
          font-size: 16px;
          line-height: 1.75;
        }

        .contact-editorial__detail-list {
          margin: 0;
          border-top: 1px solid var(--contact-line);
        }

        .contact-editorial__detail-list > div {
          display: grid;
          grid-template-columns: 118px minmax(0, 1fr);
          gap: 18px;
          padding: 18px 0;
          border-bottom: 1px solid var(--contact-line);
        }

        .contact-editorial__detail-list dt {
          color: var(--contact-navy-deep);
          font-size: 13px;
          font-weight: 700;
        }

        .contact-editorial__detail-list dd {
          margin: 0;
          font-size: 14px;
          line-height: 1.65;
        }

        .contact-editorial__detail-list a,
        .contact-editorial__credentials a {
          color: inherit;
          text-decoration: none;
        }

        .contact-editorial__socials {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 26px;
        }

        .contact-editorial__socials > span {
          margin-right: 6px;
          color: var(--contact-navy-deep);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .contact-editorial__socials a {
          display: grid;
          width: 32px;
          height: 32px;
          place-items: center;
          color: var(--contact-navy-deep);
          border: 1px solid var(--contact-line);
          border-radius: 50%;
          transition: color .25s ease, border-color .25s ease, transform .25s ease;
        }

        .contact-editorial__socials a:hover {
          color: var(--contact-gold);
          border-color: var(--contact-gold);
          transform: translateY(-2px);
        }

        .contact-editorial__socials svg { width: 14px; height: 14px; }

        .contact-editorial__form-wrap > p {
          max-width: 520px;
          margin: 18px 0 32px;
          font-size: 15px;
          line-height: 1.7;
        }

        .contact-editorial__form {
          display: grid;
          gap: 0;
        }

        .contact-editorial__form .form-field {
          display: block;
          margin: 0;
          padding: 15px 0 9px;
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--contact-line);
          border-radius: 0;
        }

        .contact-editorial__form .form-field label {
          display: block;
          margin-bottom: 7px;
          color: var(--contact-navy-deep);
          font-size: 12px;
          font-weight: 700;
          line-height: 1.4;
        }

        .contact-editorial__form input,
        .contact-editorial__form select,
        .contact-editorial__form textarea {
          width: 100%;
          min-height: 32px;
          padding: 0;
          color: var(--contact-ink);
          font: inherit;
          font-size: 14px;
          background: transparent;
          border: 0 !important;
          border-radius: 0 !important;
          outline: 0;
          box-shadow: none !important;
        }

        .contact-editorial__form textarea {
          min-height: 82px;
          padding-top: 2px;
          resize: vertical;
        }

        .contact-editorial__form .form-field:focus-within {
          border-color: var(--contact-gold);
        }

        .contact-editorial__form .button--gold {
          justify-self: start;
          min-width: 148px;
          margin-top: 22px;
        }

        .contact-editorial__location {
          display: grid;
          grid-template-columns: minmax(0, 1.7fr) minmax(310px, .8fr);
          min-height: 330px;
          margin-top: clamp(64px, 8vw, 118px);
          overflow: hidden;
          background: var(--contact-navy-deep);
        }

        .contact-editorial__location-photo,
        .contact-editorial__location-photo > * {
          min-height: 330px;
          height: 100%;
        }

        .contact-editorial__location-photo img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .contact-editorial__location-panel {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(34px, 4vw, 58px);
          color: #fff;
          background: linear-gradient(135deg, #073e68, #005184);
        }

        .contact-editorial__location-panel h2 { color: #fff; }
        .contact-editorial__location-panel > p:not(.contact-editorial__eyebrow) {
          margin: 18px 0 20px;
          font-size: 14px;
          line-height: 1.65;
        }

        .contact-editorial__location-hours {
          display: grid;
          gap: 4px;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,.22);
          font-size: 13px;
          line-height: 1.55;
        }

        .contact-editorial__location-hours strong { margin-bottom: 3px; }

        .contact-editorial__map-button {
          display: inline-flex;
          align-items: center;
          align-self: flex-start;
          gap: 9px;
          margin-top: 25px;
          color: #fff;
          background: transparent;
          border: 1px solid rgba(255,255,255,.72);
        }

        .contact-editorial__map-button:hover {
          color: var(--contact-navy-deep);
          background: #fff;
        }

        .contact-editorial__map-button svg { width: 16px; height: 16px; }

        .contact-editorial__credentials {
          display: grid;
          grid-template-columns: 1.05fr .95fr .72fr;
          gap: 0;
          align-items: center;
          padding: 27px 12px 0;
        }

        .contact-editorial__identity,
        .contact-editorial__credentials > dl,
        .contact-editorial__badges {
          min-height: 86px;
          padding: 0 34px;
        }

        .contact-editorial__credentials > dl,
        .contact-editorial__badges { border-left: 1px solid rgba(222,150,19,.45); }

        .contact-editorial__identity > span {
          color: var(--contact-gold);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .12em;
        }

        .contact-editorial__identity h2 {
          margin-top: 5px;
          font-size: 25px;
        }

        .contact-editorial__identity p {
          margin: 5px 0 0;
          font-size: 12px;
        }

        .contact-editorial__credentials > dl {
          display: grid;
          align-content: center;
          gap: 7px;
          margin: 0;
        }

        .contact-editorial__credentials > dl > div {
          display: grid;
          grid-template-columns: 95px 1fr;
          gap: 10px;
          font-size: 12px;
        }

        .contact-editorial__credentials dt { color: #6d7f8c; }
        .contact-editorial__credentials dd { margin: 0; color: var(--contact-navy-deep); font-weight: 600; }

        .contact-editorial__badges {
          display: flex;
          align-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .contact-editorial__badges span {
          padding: 7px 12px;
          color: var(--contact-navy-deep);
          font-size: 10px;
          font-weight: 600;
          border: 1px solid var(--contact-line);
        }

        .contact-editorial__reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity .7s ease, transform .7s ease;
        }

        .contact-editorial__reveal.is-visible {
          opacity: 1;
          transform: none;
        }

        @media (max-width: 900px) {
          .contact-editorial__intro { grid-template-columns: 1fr; gap: 60px; }
          .contact-editorial__location { grid-template-columns: 1fr; }
          .contact-editorial__credentials { grid-template-columns: 1fr; padding-inline: 0; }
          .contact-editorial__identity,
          .contact-editorial__credentials > dl,
          .contact-editorial__badges { min-height: 0; padding: 22px 0; }
          .contact-editorial__credentials > dl,
          .contact-editorial__badges { border-left: 0; border-top: 1px solid rgba(222,150,19,.38); }
        }

        @media (max-width: 560px) {
          .contact-editorial .contact-editorial__content.shell {
            width: calc(100% - 30px) !important;
            padding-top: 48px;
          }
          .contact-editorial__detail-list > div { grid-template-columns: 92px 1fr; }
          .contact-editorial__location,
          .contact-editorial__location-photo,
          .contact-editorial__location-photo > * { min-height: 270px; }
          .contact-editorial__location-panel { padding: 32px 25px; }
          .contact-editorial__credentials > dl > div { grid-template-columns: 90px 1fr; }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-editorial__reveal { opacity: 1; transform: none; transition: none; }
        }
      `}</style>
    </div>
  );
}
