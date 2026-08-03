import type { APIRoute } from 'astro';
import {
  bookings,
  eventTimeSlots,
  serviceOptionsAndVariants,
  services,
} from '@wix/bookings';
import { checkout } from '@wix/ecom';
import { forms } from '@wix/forms';

export const prerender = false;

const BUSINESS_TIME_ZONE = 'Europe/Athens';
const BOOKINGS_CATALOG_APP_ID = '13d21c63-b5ec-5912-8397-c3a5ddb27a97';
const MAX_PARTICIPANTS = 50;

type BookingImage = string | {
  id?: string;
  url?: string;
  filename?: string;
  width?: number;
  height?: number;
};

type BookingService = {
  _id?: string | null;
  name?: string | null;
  description?: string | null;
  tagLine?: string | null;
  hidden?: boolean | null;
  category?: { name?: string | null };
  onlineBooking?: { enabled?: boolean | null };
  mainSlug?: { name?: string | null };
  supportedSlugs?: Array<{ name?: string | null }>;
  form?: { _id?: string | null; id?: string | null };
  media?: {
    mainMedia?: { image?: BookingImage };
    coverMedia?: { image?: BookingImage };
  };
};

type ParticipantCounts = Record<string, number>;

type ReservationPayload = {
  eventId?: string;
  participants?: ParticipantCounts;
  contact?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    addressLine?: string;
    city?: string;
    postalCode?: string;
    countryCode?: string;
    message?: string;
  };
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

function serviceSlug(service: BookingService) {
  return service.mainSlug?.name?.trim()
    || service.supportedSlugs?.find((item) => item.name)?.name?.trim()
    || '';
}

function bookingImageUrl(image?: BookingImage) {
  if (!image) return '';
  if (typeof image === 'string') return image;
  if (image.url?.startsWith('http') || image.url?.startsWith('wix:image://')) return image.url;

  const id = image.id || image.url;
  if (!id) return '';
  const filename = encodeURIComponent(image.filename || 'excursion');
  const dimensions = image.width && image.height
    ? `#originWidth=${image.width}&originHeight=${image.height}`
    : '';
  return `wix:image://v1/${id}/${filename}${dimensions}`;
}

async function findPublicExcursionService(slug: string) {
  const result = await services.queryServices().limit(100).find();
  const service = (result.items as BookingService[]).find((item) => {
    const isExcursion = item.category?.name?.trim().toLowerCase() === 'excursions';
    return isExcursion && serviceSlug(item) === slug;
  });

  if (!service?._id || service.hidden === true || service.onlineBooking?.enabled !== true) {
    return null;
  }

  return service;
}

function localDateTime(date: Date) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: BUSINESS_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

async function getVariants(serviceId: string) {
  const result = await serviceOptionsAndVariants.getServiceOptionsAndVariantsByServiceId(serviceId);
  const serviceVariants = result.serviceVariants;
  const option = serviceVariants?.options?.values?.[0];
  const variants = (serviceVariants?.variants?.values || [])
    .map((variant) => {
      const choice = variant.choices?.[0];
      if (!choice?.optionId || !choice.custom) return null;
      return {
        optionId: choice.optionId,
        label: choice.custom,
        price: Number(variant.price?.value || 0),
        currency: variant.price?.currency || 'EUR',
      };
    })
    .filter((variant): variant is NonNullable<typeof variant> => Boolean(variant));

  return {
    optionId: option?._id || variants[0]?.optionId || '',
    variants,
  };
}

async function getFormFields(service: BookingService) {
  const formId = service.form?._id || service.form?.id;
  if (!formId) return [];

  try {
    const result = await forms.getFormSummary(formId);
    return (result.formSummary?.fields || [])
      .filter((field) => !field.deleted && field.target)
      .map((field) => ({
        target: field.target as string,
        label: field.label || field.target || '',
        type: field.type || 'STRING',
      }));
  } catch (error) {
    console.error('Unable to retrieve the Wix Bookings form summary:', error);
    return [];
  }
}

function clean(value: unknown, maxLength = 500) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function validateContact(contact: ReservationPayload['contact']) {
  const normalized = {
    firstName: clean(contact?.firstName, 100),
    lastName: clean(contact?.lastName, 100),
    email: clean(contact?.email, 254).toLowerCase(),
    phone: clean(contact?.phone, 50),
    addressLine: clean(contact?.addressLine, 250),
    city: clean(contact?.city, 100),
    postalCode: clean(contact?.postalCode, 30),
    countryCode: clean(contact?.countryCode, 2).toUpperCase() || 'GR',
    message: clean(contact?.message, 1000),
  };

  if (!normalized.firstName || !normalized.lastName) {
    throw new Error('Please enter your first and last name.');
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized.email)) {
    throw new Error('Please enter a valid email address.');
  }
  if (normalized.phone.replace(/\D/g, '').length < 6) {
    throw new Error('Please enter a valid phone number.');
  }
  if (!/^[A-Z]{2}$/.test(normalized.countryCode)) {
    throw new Error('Please enter a two-letter country code.');
  }

  return normalized;
}

function participantTotal(participants: ParticipantCounts) {
  return Object.values(participants).reduce((total, count) => total + count, 0);
}

export const GET: APIRoute = async ({ params }) => {
  try {
    const slug = decodeURIComponent(params.serviceSlug || '').trim();
    const service = await findPublicExcursionService(slug);
    if (!service?._id) {
      return json({ message: 'This excursion is not available for online booking.' }, 404);
    }

    const from = new Date();
    const to = new Date(from);
    to.setUTCDate(to.getUTCDate() + 180);

    const [availability, variantData, formFields] = await Promise.all([
      eventTimeSlots.listEventTimeSlots({
        fromLocalDate: `${localDateTime(from)}T00:00:00`,
        toLocalDate: `${localDateTime(to)}T23:59:59`,
        timeZone: BUSINESS_TIME_ZONE,
        serviceIds: [service._id],
        includeNonBookable: false,
        minBookableCapacity: 1,
        cursorPaging: { limit: 100 },
      }),
      getVariants(service._id),
      getFormFields(service),
    ]);

    const slots = (availability.timeSlots || [])
      .filter((slot) => slot.bookable !== false && slot.eventInfo?.eventId)
      .map((slot) => ({
        eventId: slot.eventInfo?.eventId as string,
        localStartDate: slot.localStartDate || '',
        localEndDate: slot.localEndDate || '',
        bookableCapacity: slot.bookableCapacity ?? slot.remainingCapacity ?? 0,
      }))
      .sort((a, b) => a.localStartDate.localeCompare(b.localStartDate));

    return json({
      service: {
        id: service._id,
        slug,
        name: service.name || 'Excursion',
        description: service.tagLine || service.description || '',
        image: bookingImageUrl(service.media?.coverMedia?.image)
          || bookingImageUrl(service.media?.mainMedia?.image),
      },
      timeZone: availability.timeZone || BUSINESS_TIME_ZONE,
      slots,
      variants: variantData.variants,
      formFields,
    });
  } catch (error) {
    console.error('Unable to load excursion availability:', error);
    return json({ message: 'Live dates are temporarily unavailable. Please try again shortly.' }, 503);
  }
};

export const POST: APIRoute = async ({ params, request }) => {
  try {
    const slug = decodeURIComponent(params.serviceSlug || '').trim();
    const service = await findPublicExcursionService(slug);
    if (!service?._id) {
      return json({ message: 'This excursion is not available for online booking.' }, 404);
    }

    const payload = await request.json() as ReservationPayload;
    const eventId = clean(payload.eventId, 250);
    if (!eventId) return json({ message: 'Please select an excursion date.' }, 400);

    const contact = validateContact(payload.contact);
    const rawParticipants = payload.participants && typeof payload.participants === 'object'
      ? payload.participants
      : {};

    const { variants, optionId } = await getVariants(service._id);
    const supportedLabels = new Set(variants.map((variant) => variant.label));
    const participants = Object.fromEntries(
      Object.entries(rawParticipants)
        .filter(([label]) => supportedLabels.has(label))
        .map(([label, value]) => [label, Number(value)]),
    );

    if (Object.values(participants).some((count) => !Number.isInteger(count) || count < 0)) {
      return json({ message: 'Participant quantities are invalid.' }, 400);
    }

    const totalParticipants = participantTotal(participants);
    if (totalParticipants < 1 || totalParticipants > MAX_PARTICIPANTS) {
      return json({ message: `Choose between 1 and ${MAX_PARTICIPANTS} participants.` }, 400);
    }

    const selectedSlot = await eventTimeSlots.getEventTimeSlot(eventId, { timeZone: BUSINESS_TIME_ZONE });
    const slot = selectedSlot.timeSlot;
    const availableCapacity = slot?.bookableCapacity ?? slot?.remainingCapacity ?? 0;
    if (
      !slot
      || slot.serviceId !== service._id
      || slot.bookable === false
      || availableCapacity < totalParticipants
    ) {
      return json({ message: 'That date no longer has enough availability. Please choose another date.' }, 409);
    }

    const serviceChoices = variants
      .map((variant) => ({
        numberOfParticipants: participants[variant.label] || 0,
        choices: [{ optionId: variant.optionId || optionId, custom: variant.label }],
      }))
      .filter((choice) => choice.numberOfParticipants > 0);

    if (variants.length > 0 && serviceChoices.length === 0) {
      return json({ message: 'Please select at least one participant.' }, 400);
    }

    const address = contact.addressLine || contact.city || contact.postalCode
      ? {
          country: contact.countryCode,
          city: contact.city,
          postalCode: contact.postalCode,
          addressLine: contact.addressLine,
        }
      : undefined;

    const bookingInput: Record<string, unknown> = {
      bookedEntity: { slot: { serviceId: service._id, eventId } },
      selectedPaymentOption: 'ONLINE',
    };
    if (serviceChoices.length > 0) {
      bookingInput.participantsChoices = { serviceChoices };
    } else {
      bookingInput.totalParticipants = totalParticipants;
    }

    const bookingResult = await bookings.createBooking(bookingInput as never, {
      formSubmission: {
        first_name: contact.firstName,
        last_name: contact.lastName,
        email: contact.email,
        phone: contact.phone,
        ...(address ? { address } : {}),
        add_your_message: contact.message,
      },
      sendSmsReminder: false,
      participantNotification: { notifyParticipants: true },
      flowControlSettings: {
        skipAvailabilityValidation: false,
        skipBusinessConfirmation: false,
        skipSelectedPaymentOptionValidation: false,
      },
    });

    const bookingId = bookingResult.booking?._id;
    if (!bookingId) throw new Error('Wix Bookings did not return a booking ID.');

    const createdCheckout = await checkout.createCheckout({
      lineItems: [{
        catalogReference: {
          catalogItemId: bookingId,
          appId: BOOKINGS_CATALOG_APP_ID,
        },
        quantity: 1,
      }],
      channelType: checkout.ChannelType.WEB,
    });

    if (!createdCheckout._id) throw new Error('Wix eCommerce did not return a checkout ID.');
    const checkoutResult = await checkout.getCheckoutUrl(createdCheckout._id);
    if (!checkoutResult.checkoutUrl) throw new Error('Wix eCommerce did not return a checkout URL.');

    return json({
      bookingId,
      checkoutId: createdCheckout._id,
      checkoutUrl: checkoutResult.checkoutUrl,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : '';
    console.error('Unable to create excursion booking and checkout:', error);

    if (/Please enter|participant|select an excursion date/i.test(message)) {
      return json({ message }, 400);
    }

    return json({
      message: 'We could not start the secure checkout. Please try again or contact us for assistance.',
    }, 503);
  }
};
