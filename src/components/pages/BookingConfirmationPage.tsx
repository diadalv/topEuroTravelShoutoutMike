import { Link, useSearchParams } from 'react-router-dom';
import {
  CalendarCheck2,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { ASSET, PageHero } from '@/components/travel/Shared';
import '@/styles/booking-flow.css';

export default function BookingConfirmationPage() {
  const [searchParams] = useSearchParams();
  const reference = searchParams.get('bookingId') || searchParams.get('reference');

  return (
    <div className="booking-flow-page booking-confirmation-page">
      <PageHero
        className="booking-flow-hero booking-confirmation-hero"
        title="Reservation Confirmed"
        breadcrumb="Reservation confirmation"
        image={`${ASSET}/excursions-hero.jpg`}
        description="Your island experience is now one step closer."
      />

      <div className="booking-flow-shell">
        <section className="booking-confirmation-card">
          <div className="booking-confirmation-card__icon"><CheckCircle2 aria-hidden="true" /></div>
          <span>THANK YOU FOR BOOKING WITH TOP EURO TRAVEL</span>
          <h1>Your reservation is confirmed.</h1>
          <p>A confirmation email with your excursion details and payment receipt is on its way. Please keep it available on the day of your tour.</p>
          {reference && <div className="booking-reference"><span>Booking reference</span><strong>{reference}</strong></div>}

          <div className="booking-next-steps" aria-label="What happens next">
            <article><Mail aria-hidden="true" /><div><strong>Check your inbox</strong><p>Your confirmation and booking details will arrive by email.</p></div></article>
            <article><CalendarCheck2 aria-hidden="true" /><div><strong>Review your schedule</strong><p>Check the meeting point and departure time before your excursion.</p></div></article>
            <article><ShieldCheck aria-hidden="true" /><div><strong>Travel with confidence</strong><p>Our local team is ready to help before and during your experience.</p></div></article>
          </div>

          <div className="booking-confirmation-actions">
            <Link className="button button--gold" to="/excursions">EXPLORE MORE EXCURSIONS</Link>
            <Link className="button button--outline" to="/">RETURN HOME</Link>
          </div>
        </section>

        <aside className="booking-confirmation-help">
          <div><Phone aria-hidden="true" /><p><strong>Need assistance?</strong><a href="tel:+302241045506">+30 22410 45506</a></p></div>
          <div><Mail aria-hidden="true" /><p><strong>Email our team</strong><a href="mailto:info@topeurotravel.gr">info@topeurotravel.gr</a></p></div>
          <div><MapPin aria-hidden="true" /><p><strong>Top Euro Travel</strong><span>5th Km Rhodes-Lindos Avenue, Rhodes 851 00</span></p></div>
        </aside>
      </div>
    </div>
  );
}
