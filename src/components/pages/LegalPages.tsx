import { type ReactNode } from 'react';
import { CalendarDays, ShieldCheck } from 'lucide-react';
import { PageHero, travelMedia } from '@/components/travel/Shared';

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
      <PageHero title={title} breadcrumb={breadcrumb} image={travelMedia('agents-hero.jpg')} />
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