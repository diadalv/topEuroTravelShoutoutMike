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
  Youtube,
} from 'lucide-react';
import {
  ASSET,
  Gold,
  MockForm,
  PageHero,
  PlanePath,
  REFERENCE,
  ReferenceCrop,
} from '@/components/travel/Shared';

const contactDetails = [
  [Mail, 'Email Us', 'info@topeurotravel.gr'],
  [Phone, 'Call Us', '+30 22410 78200'],
  [MapPin, 'Visit Us', <>Ionos Dragoumi 45,<br />Rhodes 851 00, Greece</>],
  [Clock3, 'Office Hours', <>Monday – Friday: 09:00 – 17:00 (EET)<br />Saturday – Sunday: By Appointment</>],
] as const;

const quickInquiries = [
  [BriefcaseBusiness, 'Partnership Opportunities'],
  [Luggage, 'Tailor-Made Trips'],
  [Users, 'Group & MICE Requests'],
  [Headphones, 'Agent & B2B Inquiries'],
] as const;

const helpItems = [
  [MessageCircle, 'General Inquiries', 'Questions about our services, destinations, or experiences.'],
  [Luggage, 'Bookings & Reservations', 'Need help with an existing booking or reservation?'],
  [Users, 'Groups & Events', 'Planning a group trip, event, or corporate gathering?'],
  [Headphones, 'Concierge Support', 'Special requests, recommendations, and local assistance.'],
] as const;

export default function ContactPage() {
  return (
    <div className="contact-page">
        <PageHero
          className="contact-hero"
          title="Contact Us"
          breadcrumb="Contact"
          image={`${ASSET}/contact-hero.jpg`}
        />

        <div className="shell contact-content">
          <section className="contact-main-card card">
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
                      <div><h3>{title}</h3><p>{copy}</p></div>
                    </div>
                  ))}
                  <div className="contact-socials">
                    <h3>Follow Us</h3>
                    <div>
                      <a href="https://www.linkedin.com" aria-label="LinkedIn"><Linkedin /></a>
                      <a href="https://www.facebook.com" aria-label="Facebook"><Facebook /></a>
                      <a href="https://www.instagram.com" aria-label="Instagram"><Instagram /></a>
                      <a href="https://www.youtube.com" aria-label="YouTube"><Youtube /></a>
                    </div>
                  </div>
                </div>

                <div className="quick-inquiry">
                  <PlanePath />
                  <h2>Quick Inquiry</h2>
                  <p>What can we help you with?</p>
                  <div className="quick-inquiry__list">
                    {quickInquiries.map(([Icon, label]) => (
                      <button type="button" key={label}>
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
                className="contact-form"
                successMessage="Thank you. Your message has been received."
              >
                <div className="form-field"><label htmlFor="contact-name">Name</label><input id="contact-name" required placeholder="Your Name" /></div>
                <div className="form-field"><label htmlFor="contact-email">Email Address</label><input id="contact-email" type="email" required placeholder="Your Email Address" /></div>
                <div className="form-field"><label htmlFor="contact-phone">Phone Number</label><input id="contact-phone" type="tel" placeholder="Your Phone Number" /></div>
                <div className="form-field">
                  <label htmlFor="contact-subject">Subject</label>
                  <select id="contact-subject" defaultValue="">
                    <option value="" disabled>How can we help you?</option>
                    <option>General Inquiry</option>
                    <option>Booking & Reservation</option>
                    <option>Groups & Events</option>
                    <option>Agent & B2B</option>
                  </select>
                </div>
                <div className="form-field"><label htmlFor="contact-message">Your Message</label><textarea id="contact-message" required placeholder="Write your message here..." /></div>
                <button className="button button--gold" type="submit"><Send /> SEND MESSAGE</button>
              </MockForm>
            </div>
          </section>

          <section className="contact-location-row">
            <article className="contact-location-card card">
              <ReferenceCrop
                src={`${REFERENCE}/contact.jpeg`}
                alt="Map showing the Top Euro Travel office in Rhodes"
                x={41}
                y={875}
                width={250}
                height={157}
              />
              <div>
                <h2>Our Location</h2>
                <p>Ionos Dragoumi 45,<br />Rhodes 851 00, Greece</p>
                <a className="button button--outline" href="https://maps.google.com" target="_blank" rel="noreferrer">
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
                  <a className="button button--outline" href="tel:+302241078200">CALL US NOW</a>
                </div>
              </div>
              <div className="contact-assistance-card__photo">
                <ReferenceCrop
                  src={`${REFERENCE}/contact.jpeg`}
                  alt="Top Euro Travel customer support agent"
                  x={846}
                  y={875}
                  width={213}
                  height={157}
                />
              </div>
            </article>
          </section>

          <section className="contact-help card">
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
