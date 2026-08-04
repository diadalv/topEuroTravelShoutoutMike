import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import {
  AlertCircle,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Minus,
  Plus,
  RefreshCw,
  ShieldCheck,
  UsersRound,
} from 'lucide-react';
import { PageHero, travelMedia } from '@/components/travel/Shared';
import { Calendar } from '@/components/ui/calendar';
import '@/styles/booking-flow.css';
import '@/styles/booking-calendar-v2.css';

type BookingService = {
  id: string;
  slug: string;
  name: string;
  description?: string;
  image?: string;
};

type BookingSlot = {
  eventId: string;
  localStartDate: string;
  localEndDate: string;
  bookableCapacity: number;
};

type BookingVariant = {
  label: string;
  price: number;
  currency: string;
  optionId: string;
};

type BookingField = {
  target: string;
  label: string;
  type: string;
};

type ExcursionBookingData = {
  service: BookingService;
  timeZone?: string;
  slots: BookingSlot[];
  variants: BookingVariant[];
  formFields: BookingField[];
};

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

const timeFormatter = new Intl.DateTimeFormat('en-GB', {
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

function slotDateKey(value: string) {
  return value.slice(0, 10);
}

function dateFromKey(key: string) {
  const [year, month, day] = key.split('-').map(Number);
  return new Date(year, month - 1, day, 12);
}

function dateKeyFromDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function parseLocalDate(value: string) {
  const [datePart = '', timePart = '00:00:00'] = value.split('T');
  const [year, month, day] = datePart.split('-').map(Number);
  const [hour, minute, second] = timePart.split(':').map(Number);
  const date = new Date(year, month - 1, day, hour || 0, minute || 0, second || 0);
  return Number.isNaN(date.getTime()) ? null : date;
}

function parseParticipantSearch(searchParams: URLSearchParams) {
  const result: Record<string, number> = {};
  searchParams.getAll('participant').forEach((entry) => {
    const separator = entry.lastIndexOf(':');
    if (separator <= 0) return;
    const label = entry.slice(0, separator).trim();
    const count = Number.parseInt(entry.slice(separator + 1), 10);
    if (label && Number.isFinite(count) && count > 0) result[label] = count;
  });
  return result;
}

function formatTimeZoneLabel(timeZone?: string) {
  return (timeZone || 'destination local time').replaceAll('_', ' ');
}

async function errorMessage(response: Response) {
  try {
    const body = await response.json() as { error?: string; message?: string };
    return body.error || body.message || 'We could not load the booking calendar.';
  } catch {
    return 'We could not load the booking calendar.';
  }
}

function BookingSteps({ current }: { current: 1 | 2 | 3 }) {
  return (
    <ol className="booking-steps" aria-label="Reservation progress">
      {['Date & guests', 'Your details', 'Secure checkout'].map((label, index) => {
        const step = index + 1;
        return (
          <li key={label} className={step === current ? 'is-current' : step < current ? 'is-complete' : ''}>
            <span>{step < current ? <Check aria-hidden="true" /> : step}</span>
            <strong>{label}</strong>
          </li>
        );
      })}
    </ol>
  );
}

export default function BookingCalendarPage() {
  const { serviceSlug = '' } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialSelection = useRef({
    eventId: searchParams.get('eventId') || '',
    participants: parseParticipantSearch(searchParams),
  });
  const [data, setData] = useState<ExcursionBookingData | null>(null);
  const [selectedEventId, setSelectedEventId] = useState('');
  const [participants, setParticipants] = useState<Record<string, number>>({});
  const [displayMonth, setDisplayMonth] = useState<Date>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadBookingData = useCallback(async (signal?: AbortSignal) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`/api/excursions/${encodeURIComponent(serviceSlug)}`, {
        headers: { Accept: 'application/json' },
        signal,
      });
      if (!response.ok) throw new Error(await errorMessage(response));
      const nextData = await response.json() as ExcursionBookingData;
      if (!nextData.service || !Array.isArray(nextData.slots) || !Array.isArray(nextData.variants)) {
        throw new Error('The reservation information is incomplete. Please try again shortly.');
      }

      const bookableSlots = nextData.slots
        .filter((slot) => slot.eventId && Number(slot.bookableCapacity) > 0)
        .sort((a, b) => a.localStartDate.localeCompare(b.localStartDate));
      const normalizedData = { ...nextData, slots: bookableSlots };
      const restoredSlot = bookableSlots.find((slot) => slot.eventId === initialSelection.current.eventId);
      const initialSlot = restoredSlot || bookableSlots[0];
      setData(normalizedData);
      setSelectedEventId(initialSlot?.eventId || '');
      if (initialSlot) setDisplayMonth(dateFromKey(slotDateKey(initialSlot.localStartDate)));
      setParticipants((current) => {
        const next: Record<string, number> = {};
        nextData.variants.forEach((variant, index) => {
          next[variant.label] = Math.max(
            0,
            current[variant.label]
              ?? initialSelection.current.participants[variant.label]
              ?? (index === 0 ? 1 : 0),
          );
        });
        return next;
      });
    } catch (reason) {
      if (reason instanceof DOMException && reason.name === 'AbortError') return;
      setError(reason instanceof Error ? reason.message : 'We could not load the booking calendar.');
      setData(null);
    } finally {
      if (!signal?.aborted) setLoading(false);
    }
  }, [serviceSlug]);

  useEffect(() => {
    const controller = new AbortController();
    void loadBookingData(controller.signal);
    return () => controller.abort();
  }, [loadBookingData]);

  const selectedSlot = useMemo(
    () => data?.slots.find((slot) => slot.eventId === selectedEventId) || null,
    [data, selectedEventId],
  );
  const availableDateKeys = useMemo(
    () => new Set((data?.slots || []).map((slot) => slotDateKey(slot.localStartDate))),
    [data],
  );
  const availableDates = useMemo(
    () => [...availableDateKeys].sort().map(dateFromKey),
    [availableDateKeys],
  );
  const selectedDateKey = selectedSlot ? slotDateKey(selectedSlot.localStartDate) : '';
  const selectedDate = selectedDateKey ? dateFromKey(selectedDateKey) : undefined;
  const selectedDaySlots = useMemo(
    () => (data?.slots || []).filter((slot) => slotDateKey(slot.localStartDate) === selectedDateKey),
    [data, selectedDateKey],
  );
  const totalParticipants = Object.values(participants).reduce((sum, count) => sum + count, 0);
  const selectedCapacity = selectedSlot?.bookableCapacity ?? 0;
  const estimatedTotal = data?.variants.reduce(
    (total, variant) => total + (participants[variant.label] || 0) * Number(variant.price || 0),
    0,
  ) ?? 0;

  useEffect(() => {
    if (!data || !selectedSlot || totalParticipants <= selectedCapacity) return;
    setParticipants((current) => {
      const next = { ...current };
      let excess = totalParticipants - selectedCapacity;
      [...data.variants].reverse().forEach((variant) => {
        if (excess <= 0) return;
        const removable = Math.min(next[variant.label] || 0, excess);
        next[variant.label] = (next[variant.label] || 0) - removable;
        excess -= removable;
      });
      if (Object.values(next).reduce((sum, count) => sum + count, 0) === 0 && data.variants[0]) {
        next[data.variants[0].label] = 1;
      }
      return next;
    });
  }, [data, selectedCapacity, selectedSlot, totalParticipants]);

  const selectDate = (date?: Date) => {
    if (!date || !data) return;
    const key = dateKeyFromDate(date);
    const firstSlot = data.slots.find((slot) => slotDateKey(slot.localStartDate) === key);
    if (firstSlot) setSelectedEventId(firstSlot.eventId);
  };

  const adjustParticipant = (label: string, delta: number) => {
    setParticipants((current) => {
      const currentCount = current[label] || 0;
      const currentTotal = Object.values(current).reduce((sum, count) => sum + count, 0);
      if (delta > 0 && currentTotal >= selectedCapacity) return current;
      if (delta < 0 && (currentCount <= 0 || currentTotal <= 1)) return current;
      return { ...current, [label]: Math.max(0, currentCount + delta) };
    });
  };

  const continueToDetails = () => {
    if (!selectedEventId || totalParticipants < 1 || totalParticipants > selectedCapacity) return;
    const search = new URLSearchParams({ eventId: selectedEventId });
    Object.entries(participants).forEach(([label, count]) => {
      if (count > 0) search.append('participant', `${label}:${count}`);
    });
    navigate(`/booking-form/${encodeURIComponent(serviceSlug)}?${search.toString()}`);
  };

  const heroImage = data?.service.image || travelMedia('excursions-hero.jpg');

  return (
    <div className="booking-flow-page booking-calendar-page">
      <PageHero
        className="booking-flow-hero"
        title="Choose Your Date"
        breadcrumb={data?.service.name ? `Reservations  •  ${data.service.name}` : 'Reservations'}
        image={heroImage}
        description={data?.service.name || 'Reserve your excursion in Rhodes or Kos.'}
      />

      <div className="booking-flow-shell">
        <BookingSteps current={1} />

        {loading && (
          <section className="booking-state-card" aria-live="polite" aria-busy="true">
            <span className="booking-spinner" aria-hidden="true" />
            <h2>Finding available departures</h2>
            <p>We are checking the latest excursion schedule.</p>
          </section>
        )}

        {!loading && error && (
          <section className="booking-state-card booking-state-card--error" role="alert">
            <AlertCircle aria-hidden="true" />
            <h2>Calendar temporarily unavailable</h2>
            <p>{error}</p>
            <button className="button button--navy" type="button" onClick={() => void loadBookingData()}>
              <RefreshCw aria-hidden="true" /> TRY AGAIN
            </button>
          </section>
        )}

        {!loading && data && !error && (
          <>
            <header className="booking-flow-heading">
              <span>ONLINE RESERVATION</span>
              <h1>{data.service.name}</h1>
              {data.service.description && <p>{data.service.description}</p>}
            </header>

            {data.slots.length === 0 || data.variants.length === 0 ? (
              <section className="booking-state-card booking-state-card--empty">
                <CalendarDays aria-hidden="true" />
                <h2>New dates are coming soon</h2>
                <p>This excursion does not currently have a bookable departure. Please contact our team for assistance.</p>
                <a className="button button--gold" href="/contact">CONTACT OUR TEAM</a>
              </section>
            ) : (
              <div className="booking-calendar-layout">
                <section className="booking-panel booking-date-panel" aria-labelledby="departure-heading">
                  <div className="booking-panel__heading">
                    <div>
                      <span>STEP 1</span>
                      <h2 id="departure-heading">Select a departure</h2>
                    </div>
                    <strong>{availableDateKeys.size} available {availableDateKeys.size === 1 ? 'date' : 'dates'}</strong>
                  </div>

                  <div className="booking-calendar-widget">
                    <div className="booking-month-picker">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        month={displayMonth}
                        onMonthChange={setDisplayMonth}
                        onSelect={selectDate}
                        fromDate={availableDates[0]}
                        toDate={availableDates[availableDates.length - 1]}
                        disabled={(date) => !availableDateKeys.has(dateKeyFromDate(date))}
                        modifiers={{ available: availableDates }}
                        modifiersClassNames={{ available: 'booking-day--available' }}
                        showOutsideDays={false}
                        className="booking-date-calendar"
                        aria-label="Available excursion dates"
                      />
                      <div className="booking-calendar-legend" aria-hidden="true">
                        <span><i className="is-available" /> Available</span>
                        <span><i className="is-selected" /> Selected</span>
                        <span><i className="is-unavailable" /> Unavailable</span>
                      </div>
                    </div>

                    <div className="booking-day-departures">
                      <div className="booking-day-departures__heading">
                        <span>DEPARTURE TIMES</span>
                        <h3>{selectedDate ? dateFormatter.format(selectedDate) : 'Choose an available date'}</h3>
                        <p>
                          {selectedDaySlots.length} {selectedDaySlots.length === 1 ? 'departure' : 'departures'}
                          {' · '}Times shown in {formatTimeZoneLabel(data.timeZone)}
                        </p>
                      </div>
                      <div className="booking-session-list" role="radiogroup" aria-label="Available excursion departure times">
                        {selectedDaySlots.map((slot) => {
                          const start = parseLocalDate(slot.localStartDate);
                          const end = parseLocalDate(slot.localEndDate);
                          const selected = selectedEventId === slot.eventId;
                          const timeLabel = `${start ? timeFormatter.format(start) : ''}${end ? ` – ${timeFormatter.format(end)}` : ''}`;
                          return (
                            <label
                              className={`booking-session booking-session--time${selected ? ' is-selected' : ''}`}
                              key={slot.eventId}
                              aria-label={`${dateFormatter.format(selectedDate || dateFromKey(slotDateKey(slot.localStartDate)))}, ${timeLabel}, ${slot.bookableCapacity} places left`}
                            >
                              <input
                                type="radio"
                                name="departure"
                                value={slot.eventId}
                                checked={selected}
                                onChange={() => setSelectedEventId(slot.eventId)}
                              />
                              <span className="booking-session__check" aria-hidden="true">{selected && <Check />}</span>
                              <span className="booking-session__time"><Clock3 aria-hidden="true" /><strong>{timeLabel}</strong></span>
                              <span className="booking-session__capacity"><UsersRound aria-hidden="true" /> {slot.bookableCapacity} places left</span>
                            </label>
                          );
                        })}
                      </div>
                      <p className="booking-calendar-status" role="status" aria-live="polite">
                        {selectedDate
                          ? `${dateFormatter.format(selectedDate)} selected. ${selectedDaySlots.length} departure ${selectedDaySlots.length === 1 ? 'time' : 'times'} available.`
                          : 'Select an available date.'}
                      </p>
                    </div>
                  </div>
                </section>

                <aside className="booking-panel booking-guest-panel" aria-labelledby="guest-heading">
                  <div className="booking-panel__heading">
                    <div><span>STEP 2</span><h2 id="guest-heading">Guests</h2></div>
                  </div>

                  <div className="booking-variant-list">
                    {data.variants.map((variant) => {
                      const count = participants[variant.label] || 0;
                      return (
                        <div className="booking-variant" key={variant.optionId || variant.label}>
                          <div>
                            <strong>{variant.label}</strong>
                            <span>{formatPrice(Number(variant.price || 0), variant.currency)} per person</span>
                          </div>
                          <div className="booking-counter" aria-label={`${variant.label} quantity`}>
                            <button
                              type="button"
                              aria-label={`Remove one ${variant.label}`}
                              disabled={count === 0 || totalParticipants <= 1}
                              onClick={() => adjustParticipant(variant.label, -1)}
                            ><Minus aria-hidden="true" /></button>
                            <output aria-live="polite" aria-label={`${count} ${variant.label}`}>{count}</output>
                            <button
                              type="button"
                              aria-label={`Add one ${variant.label}`}
                              disabled={totalParticipants >= selectedCapacity}
                              onClick={() => adjustParticipant(variant.label, 1)}
                            ><Plus aria-hidden="true" /></button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="booking-total">
                    <span>Estimated total</span>
                    <strong>{formatPrice(estimatedTotal, data.variants[0]?.currency || 'EUR')}</strong>
                  </div>
                  <p className="booking-capacity-note">
                    <UsersRound aria-hidden="true" /> {totalParticipants} of {selectedCapacity} available places selected
                  </p>
                  <button
                    className="button button--gold booking-continue-button"
                    type="button"
                    disabled={!selectedEventId || totalParticipants < 1 || totalParticipants > selectedCapacity}
                    onClick={continueToDetails}
                  >CONTINUE <ArrowRight aria-hidden="true" /></button>
                  <div className="booking-secure-note"><ShieldCheck aria-hidden="true" /><span>Secure reservation powered by Wix Bookings</span></div>
                </aside>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
