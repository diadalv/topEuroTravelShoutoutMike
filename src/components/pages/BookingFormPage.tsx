import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import {
  AlertCircle,
  ArrowLeft,
  CalendarDays,
  Check,
  Clock3,
  CreditCard,
  LockKeyhole,
  Mail,
  MapPin,
  RefreshCw,
  ShieldCheck,
  UserRound,
  UsersRound,
} from 'lucide-react';
import { PageHero, Photo, travelMedia } from '@/components/travel/Shared';
import '@/styles/booking-flow.css';

type BookingService = { id: string; slug: string; name: string; description?: string; image?: string };
type BookingSlot = { eventId: string; localStartDate: string; localEndDate: string; bookableCapacity: number };
type BookingVariant = { label: string; price: number; currency: string; optionId: string };
type BookingField = { target: string; label: string; type: string };
type ExcursionBookingData = {
  service: BookingService;
  slots: BookingSlot[];
  variants: BookingVariant[];
  formFields: BookingField[];
};

type ContactState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addressLine: string;
  city: string;
  postalCode: string;
  countryCode: string;
  message: string;
};

const initialContact: ContactState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  addressLine: '',
  city: '',
  postalCode: '',
  countryCode: '',
  message: '',
};

const dateTimeFormatter = new Intl.DateTimeFormat('en-GB', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

function formatPrice(value: number, currency = 'EUR') {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency,
    maximumFractionDigits: Number.isInteger(value) ? 0 : 2,
  }).format(value);
}

function parseParticipants(searchParams: URLSearchParams) {
  const participants: Record<string, number> = {};
  searchParams.getAll('participant').forEach((entry) => {
    const separator = entry.lastIndexOf(':');
    if (separator <= 0) return;
    const label = entry.slice(0, separator).trim();
    const count = Number.parseInt(entry.slice(separator + 1), 10);
    if (label && Number.isFinite(count) && count > 0) participants[label] = count;
  });
  return participants;
}

function BookingSteps() {
  return (
    <ol className="booking-steps" aria-label="Reservation progress">
      <li className="is-complete"><span><Check aria-hidden="true" /></span><strong>Date & guests</strong></li>
      <li className="is-current"><span>2</span><strong>Your details</strong></li>
      <li><span>3</span><strong>Secure checkout</strong></li>
    </ol>
  );
}

function responseError(response: Response, fallback: string) {
  return response.json()
    .then((body: { error?: string; message?: string }) => body.error || body.message || fallback)
    .catch(() => fallback);
}

export default function BookingFormPage() {
  const { serviceSlug = '' } = useParams();
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get('eventId') || '';
  const requestedParticipants = useMemo(() => parseParticipants(searchParams), [searchParams]);
  const [data, setData] = useState<ExcursionBookingData | null>(null);
  const [contact, setContact] = useState<ContactState>(initialContact);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const loadBookingData = useCallback(async (signal?: AbortSignal) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`/api/excursions/${encodeURIComponent(serviceSlug)}`, {
        headers: { Accept: 'application/json' },
        signal,
      });
      if (!response.ok) throw new Error(await responseError(response, 'We could not load your reservation.'));
      const nextData = await response.json() as ExcursionBookingData;
      const slot = nextData.slots?.find((item) => item.eventId === eventId);
      const requestedTotal = Object.values(requestedParticipants).reduce((sum, count) => sum + count, 0);
      const knownLabels = new Set((nextData.variants || []).map((variant) => variant.label));
      const hasUnknownParticipant = Object.keys(requestedParticipants).some((label) => !knownLabels.has(label));
      if (!eventId || !slot || requestedTotal < 1 || requestedTotal > Number(slot.bookableCapacity) || hasUnknownParticipant) {
        throw new Error('Your selected date or guest details are no longer valid. Please return to the calendar and choose again.');
      }
      setData(nextData);
    } catch (reason) {
      if (reason instanceof DOMException && reason.name === 'AbortError') return;
      setError(reason instanceof Error ? reason.message : 'We could not load your reservation.');
      setData(null);
    } finally {
      if (!signal?.aborted) setLoading(false);
    }
  }, [eventId, requestedParticipants, serviceSlug]);

  useEffect(() => {
    const controller = new AbortController();
    void loadBookingData(controller.signal);
    return () => controller.abort();
  }, [loadBookingData]);

  const selectedSlot = data?.slots.find((slot) => slot.eventId === eventId) || null;
  const totalParticipants = Object.values(requestedParticipants).reduce((sum, count) => sum + count, 0);
  const totalPrice = data?.variants.reduce(
    (total, variant) => total + (requestedParticipants[variant.label] || 0) * Number(variant.price || 0),
    0,
  ) ?? 0;

  const labelFor = (target: string, fallback: string) => {
    const normalized = target.replace(/[^a-z]/gi, '').toLowerCase();
    return data?.formFields?.find((field) => (
      field.target.replace(/[^a-z]/gi, '').toLowerCase().includes(normalized)
    ))?.label || fallback;
  };

  const updateContact = (field: keyof ContactState, value: string) => {
    setContact((current) => ({
      ...current,
      [field]: field === 'countryCode' ? value.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 2) : value,
    }));
  };

  const submitReservation = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!data || !selectedSlot || totalParticipants < 1 || !termsAccepted || submitting) return;
    setSubmitting(true);
    setError('');
    try {
      const response = await fetch(`/api/excursions/${encodeURIComponent(serviceSlug)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          eventId,
          participants: requestedParticipants,
          contact: { ...contact, termsAccepted: true },
        }),
      });
      if (!response.ok) throw new Error(await responseError(response, 'We could not create the reservation.'));
      const result = await response.json() as { checkoutUrl?: string };
      if (!result.checkoutUrl) throw new Error('The secure checkout link was not returned. Please try again.');
      window.location.assign(result.checkoutUrl);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'We could not create the reservation.');
      setSubmitting(false);
    }
  };

  const heroImage = data?.service.image || travelMedia('excursions-hero.jpg');
  const selectedDate = selectedSlot ? new Date(selectedSlot.localStartDate) : null;

  return (
    <div className="booking-flow-page booking-form-page">
      <PageHero
        className="booking-flow-hero"
        title="Complete Your Details"
        breadcrumb={data?.service.name ? `Reservations  •  ${data.service.name}` : 'Reservations'}
        image={heroImage}
        description="Your secure checkout is only one step away."
      />

      <div className="booking-flow-shell">
        <BookingSteps />

        {loading && (
          <section className="booking-state-card" aria-live="polite" aria-busy="true">
            <span className="booking-spinner" aria-hidden="true" />
            <h2>Preparing your reservation</h2>
            <p>We are confirming the selected departure and guest details.</p>
          </section>
        )}

        {!loading && error && !data && (
          <section className="booking-state-card booking-state-card--error" role="alert">
            <AlertCircle aria-hidden="true" />
            <h2>Please review your selection</h2>
            <p>{error}</p>
            <div className="booking-state-actions">
              <Link className="button button--gold" to={`/booking-calendar/${encodeURIComponent(serviceSlug)}`}>
                <ArrowLeft aria-hidden="true" /> BACK TO CALENDAR
              </Link>
              <button className="button button--outline" type="button" onClick={() => void loadBookingData()}>
                <RefreshCw aria-hidden="true" /> RETRY
              </button>
            </div>
          </section>
        )}

        {!loading && data && selectedSlot && (
          <div className="booking-form-layout">
            <form className="booking-panel booking-details-form" onSubmit={submitReservation}>
              <header className="booking-panel__heading">
                <div><span>TRAVELLER INFORMATION</span><h1>Who is making the booking?</h1></div>
              </header>
              <p className="booking-form-intro">Please enter the lead traveller's details exactly as you would like them to appear on the reservation.</p>

              {error && (
                <div className="booking-inline-error" role="alert"><AlertCircle aria-hidden="true" /><span>{error}</span></div>
              )}

              <div className="booking-form-grid">
                <label className="booking-field">
                  <span>{labelFor('firstName', 'First name')}</span>
                  <div><UserRound aria-hidden="true" /><input value={contact.firstName} onChange={(e) => updateContact('firstName', e.target.value)} name="firstName" autoComplete="given-name" required /></div>
                </label>
                <label className="booking-field">
                  <span>{labelFor('lastName', 'Last name')}</span>
                  <div><UserRound aria-hidden="true" /><input value={contact.lastName} onChange={(e) => updateContact('lastName', e.target.value)} name="lastName" autoComplete="family-name" required /></div>
                </label>
                <label className="booking-field">
                  <span>{labelFor('email', 'Email address')}</span>
                  <div><Mail aria-hidden="true" /><input value={contact.email} onChange={(e) => updateContact('email', e.target.value)} name="email" type="email" autoComplete="email" required /></div>
                </label>
                <label className="booking-field">
                  <span>{labelFor('phone', 'Phone number')}</span>
                  <div><UserRound aria-hidden="true" /><input value={contact.phone} onChange={(e) => updateContact('phone', e.target.value)} name="phone" type="tel" autoComplete="tel" placeholder="Include country code" required /></div>
                </label>
                <label className="booking-field booking-field--full">
                  <span>{labelFor('address', 'Address')}</span>
                  <div><MapPin aria-hidden="true" /><input value={contact.addressLine} onChange={(e) => updateContact('addressLine', e.target.value)} name="addressLine" autoComplete="street-address" required /></div>
                </label>
                <label className="booking-field">
                  <span>{labelFor('city', 'City')}</span>
                  <div><MapPin aria-hidden="true" /><input value={contact.city} onChange={(e) => updateContact('city', e.target.value)} name="city" autoComplete="address-level2" required /></div>
                </label>
                <label className="booking-field">
                  <span>{labelFor('postalCode', 'Postal code')}</span>
                  <div><MapPin aria-hidden="true" /><input value={contact.postalCode} onChange={(e) => updateContact('postalCode', e.target.value)} name="postalCode" autoComplete="postal-code" required /></div>
                </label>
                <label className="booking-field">
                  <span>{labelFor('countryCode', 'Country code')}</span>
                  <div><MapPin aria-hidden="true" /><input value={contact.countryCode} onChange={(e) => updateContact('countryCode', e.target.value)} name="countryCode" autoComplete="country" inputMode="text" minLength={2} maxLength={2} pattern="[A-Za-z]{2}" placeholder="e.g. GR" title="Enter a two-letter country code" required /></div>
                </label>
                <label className="booking-field booking-field--full">
                  <span>{labelFor('message', 'Special requests')} <small>(optional)</small></span>
                  <textarea value={contact.message} onChange={(e) => updateContact('message', e.target.value)} name="message" rows={4} placeholder="Pickup details, accessibility requirements or anything else we should know." />
                </label>
              </div>

              <label className="booking-consent">
                <input type="checkbox" checked={termsAccepted} onChange={(event) => setTermsAccepted(event.target.checked)} required />
                <span>I agree to the <Link to="/terms" target="_blank">Terms &amp; Conditions</Link> and acknowledge the <Link to="/privacy" target="_blank">Privacy Policy</Link>.</span>
              </label>

              <button className="button button--gold booking-submit-button" type="submit" disabled={submitting || !termsAccepted}>
                {submitting ? <><span className="booking-button-spinner" aria-hidden="true" /> CREATING RESERVATION…</> : <>CONTINUE TO SECURE CHECKOUT <CreditCard aria-hidden="true" /></>}
              </button>
              <div className="booking-secure-note"><LockKeyhole aria-hidden="true" /><span>Your details are encrypted and securely processed by Wix.</span></div>
            </form>

            <aside className="booking-panel booking-summary-card" aria-labelledby="booking-summary-title">
              {data.service.image && <Photo src={data.service.image} alt={data.service.name} />}
              <div className="booking-summary-card__body">
                <span>YOUR EXCURSION</span>
                <h2 id="booking-summary-title">{data.service.name}</h2>
                <dl>
                  <div><dt><CalendarDays aria-hidden="true" /> Date</dt><dd>{selectedDate && !Number.isNaN(selectedDate.getTime()) ? dateTimeFormatter.format(selectedDate) : selectedSlot.localStartDate}</dd></div>
                  <div><dt><UsersRound aria-hidden="true" /> Guests</dt><dd>{Object.entries(requestedParticipants).map(([label, count]) => `${count} ${label}`).join(', ')}</dd></div>
                </dl>
                <div className="booking-price-breakdown">
                  {data.variants.filter((variant) => requestedParticipants[variant.label]).map((variant) => (
                    <div key={variant.optionId || variant.label}>
                      <span>{requestedParticipants[variant.label]} × {variant.label}</span>
                      <strong>{formatPrice((requestedParticipants[variant.label] || 0) * Number(variant.price || 0), variant.currency)}</strong>
                    </div>
                  ))}
                </div>
                <div className="booking-total"><span>Total</span><strong>{formatPrice(totalPrice, data.variants[0]?.currency || 'EUR')}</strong></div>
                <Link className="booking-edit-link" to={`/booking-calendar/${encodeURIComponent(serviceSlug)}`}><ArrowLeft aria-hidden="true" /> Change date or guests</Link>
                <div className="booking-summary-assurance"><ShieldCheck aria-hidden="true" /><p><strong>Secure online booking</strong><span>Availability is confirmed before checkout.</span></p></div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
