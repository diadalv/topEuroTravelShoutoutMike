import { useEffect, useState } from 'react';
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  Facebook,
  Headphones,
  Instagram,
  Linkedin,
  Mail,
  Map,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Luggage,
  Users,
} from 'lucide-react';
import {
  travelMedia,
  Gold,
  MockForm,
  PageHero,
  Photo,
  PlanePath,
} from '@/components/travel/Shared';

const contactDetails = [
  [Mail, 'Email Us', 'info@topeurotravel.gr'],
  [Phone, 'Call Us', '+30 22410 45506'],
  [MapPin, 'Visit Us', <>5th Km Rhodes-Lindos Avenue,<br />P.O. Box 348, Rhodes 851 00, Greece</>],
  [Clock3, 'Office Hours', <>Monday – Friday: 09:00 – 17:00 (EET)<br />Saturday – Sunday: By Appointment</>],
] as const;

const quickInquiries = [
  [BriefcaseBusiness, 'Partnership Opportunities'],
  [Luggage, 'Tailor-Made Trips'],
  [Users, 'Group & MICE Requests'],
  [Headphones, 'Agent & B2B Inquiries'],
] as const;

const inquirySubjects: Record<string, string> = {
  'Partnership Opportunities': 'Agent & B2B',
  'Tailor-Made Trips': 'Booking & Reservation',
  'Group & MICE Requests': 'Groups & Events',
  'Agent & B2B Inquiries': 'Agent & B2B',
};

const helpItems = [
  [MessageCircle, 'General Inquiries', 'Questions about our services, destinations, or experiences.'],
  [Luggage, 'Bookings & Reservations', 'Need help with an existing booking or reservation?'],
  [Users, 'Groups & Events', 'Planning a group trip, event, or corporate gathering?'],
  [Headphones, 'Concierge Support', 'Special requests, recommendations, and local assistance.'],
] as const;

export default function ContactPage() {
  const [selectedInquiry, setSelectedInquiry] = useState('');
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
    }, { threshold: 0.12, rootMargin: '0px 0px -50px' });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const chooseInquiry = (label: string) => {
    setSelectedInquiry(label);
    setSubject(inquirySubjects[label] ?? 'General Inquiry');
    window.setTimeout(() => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      document.getElementById('contact-message')?.focus({ preventScroll: true });
    }, 0);
  };

  return (
    <div className="contact-page">
        <PageHero
          className="contact-hero"
          title="Contact Us"
          breadcrumb="Contact"
          image={travelMedia('contact-hero.jpg')}
        />

        <div className="shell contact-content">
          <section className="contact-main-card card contact-reveal" data-contact-reveal>
            <div className="contact-main-card__left">
              <h2>We’d Love to Hear From You</h2>
              <p className="contact-lead">
                Have questions, need travel advice, or ready to start planning your next unforgettable
                journey in Rhodes &amp; Kos? Our team is here to assist you with professional service and local expertise.
              </p>

              <div className="contact-left-grid">
                <div className="contact-detail-column">
                  {contactDetails.map(([Icon, title, copy]) => (
                    <div className="contact-detail" key={title}>
                      <span><Icon /></span>
                      <div>
                        <h3>{title}</h3>
                        {title === 'Email Us' ? <a href="mailto:info@topeurotravel.gr">{copy}</a>
                          : title === 'Call Us' ? <a href="tel:+302241045506">{copy}</a>
                            : title === 'Visit Us' ? <a href="https://www.google.com/maps/search/?api=1&query=5th+Km+Rhodes-Lindos+Avenue%2C+Rhodes+851+00%2C+Greece" target="_blank" rel="noreferrer">{copy}</a>
                              : <p>{copy}</p>}
                      </div>
                    </div>
                  ))}
                  <div className="contact-socials">
                    <h3>Follow Us</h3>
                    <div>
                      <a href="https://www.linkedin.com/company/topeurotravel/" target="_blank" rel="noreferrer" aria-label="Top Euro Travel on LinkedIn"><Linkedin /></a>
                      <a href="https://www.facebook.com/TopEuroTravel" target="_blank" rel="noreferrer" aria-label="Top Euro Travel on Facebook"><Facebook /></a>
                      <a href="https://www.instagram.com/topeurotravel_" target="_blank" rel="noreferrer" aria-label="Top Euro Travel on Instagram"><Instagram /></a>
                      <a href="https://share.google/ToaSglTwqTdfUG8Gf" target="_blank" rel="noreferrer" aria-label="Top Euro Travel on Google"><Map /></a>
                    </div>
                  </div>
                </div>

                <div className="quick-inquiry">
                  <PlanePath />
                  <h2>Quick Inquiry</h2>
                  <p>What can we help you with?</p>
                  <div className="quick-inquiry__list">
                    {quickInquiries.map(([Icon, label]) => (
                      <button
                        type="button"
                        key={label}
                        className={selectedInquiry === label ? 'is-selected' : ''}
                        aria-pressed={selectedInquiry === label}
                        onClick={() => chooseInquiry(label)}
                      >
                        <Icon /><strong>{label}</strong><ArrowRight />
                      </button>
                    ))}
                  </div>
                  <a className="button button--gold" href="#contact-form">TELL US MORE</a>
                </div>
              </div>
            </div>

            <div className="contact-main-card__right">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we’ll get back to you as soon as possible.</p>
              <MockForm
                id="contact-form"
                className="contact-form"
                successMessage="Thank you. Your message has been received. Our team will reply within 24 business hours."
              >
                <div className="form-field"><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" required minLength={2} placeholder="Your Name" /></div>
                <div className="form-field"><label htmlFor="contact-email">Email Address</label><input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="Your Email Address" /></div>
                <div className="form-field"><label htmlFor="contact-phone">Phone Number</label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="Your Phone Number" /><p className="form-field__hint">Include your country code if you would like us to call you.</p></div>
                <div className="form-field">
                  <label htmlFor="contact-subject">Subject</label>
                  <select id="contact-subject" name="subject" value={subject} onChange={(event) => setSubject(event.target.value)} required>
                    <option value="" disabled>How can we help you?</option>
                    <option>General Inquiry</option>
                    <option>Booking & Reservation</option>
                    <option>Groups & Events</option>
                    <option>Agent & B2B</option>
                  </select>
                </div>
                <div className="form-field"><label htmlFor="contact-message">Your Message</label><textarea id="contact-message" name="message" required minLength={20} placeholder="Tell us about your dates, group size and travel requirements..." /><p className="form-field__hint">Please include any preferred dates and the number of travellers.</p></div>
                <button className="button button--gold" type="submit"><Send /> SEND MESSAGE</button>
              </MockForm>
            </div>
          </section>

          <section className="contact-location-row contact-reveal" data-contact-reveal>
            <article className="contact-location-card card">
              <Photo src={travelMedia('contact-map-v2.jpg')} alt="Aerial view of Rhodes" />
              <div>
                <h2>Our Location</h2>
                <p>5th Km Rhodes-Lindos Avenue,<br />P.O. Box 348, Rhodes 851 00, Greece</p>
                <a className="button button--outline" href="https://www.google.com/maps/search/?api=1&query=5th+Km+Rhodes-Lindos+Avenue%2C+Rhodes+851+00%2C+Greece" target="_blank" rel="noreferrer">
                  VIEW ON MAP <Map />
                </a>
              </div>
            </article>

            <article className="contact-assistance-card card">
              <div>
                <Headphones />
                <div>
                  <h2>Need Immediate Assistance?</h2>
                  <p>Our team is always happy to help with urgent requests or last-minute arrangements.</p>
                  <a className="button button--outline" href="tel:+302241045506">CALL US NOW</a>
                </div>
              </div>
              <div className="contact-assistance-card__photo">
                <Photo src={travelMedia('marina.jpg')} alt="Rhodes marina and Aegean coastline" />
              </div>
            </article>
          </section>

          <section className="contact-credentials card contact-reveal" data-contact-reveal aria-labelledby="company-details-title">
            <div className="contact-credentials__identity">
              <BriefcaseBusiness aria-hidden="true" />
              <div>
                <span>REGISTERED BUSINESS DETAILS</span>
                <h2 id="company-details-title">Top Euro Travel</h2>
                <p>DMC Incoming Travel Agency / Incoming Tour Operator</p>
              </div>
            </div>
            <dl className="contact-credentials__details">
              <div><dt>Fax</dt><dd><a href="tel:+302241045551">+30 22410 45551</a></dd></div>
              <div><dt>GNTO Licence</dt><dd>1476E60000156801</dd></div>
              <div><dt>Tax Number</dt><dd>EL800892257</dd></div>
            </dl>
            <div className="contact-credentials__badges" aria-label="Memberships and supported programmes">
              <span>SETE</span>
              <span>HATTA</span>
              <span>Live-Pay</span>
              <span>EU / ESPA Programme</span>
            </div>
          </section>
          <section className="contact-help card contact-reveal" data-contact-reveal>
            <h2>How Can We Help?</h2>
            <div className="contact-help__grid">
              {helpItems.map(([Icon, title, copy]) => (
                <article key={title}>
                  <Icon />
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </article>
              ))}
            </div>
            <p className="contact-response">We aim to respond to all inquiries <Gold>within 24 hours</Gold> during business days.</p>
            <PlanePath />
          </section>
        </div>
    </div>
  );
}
