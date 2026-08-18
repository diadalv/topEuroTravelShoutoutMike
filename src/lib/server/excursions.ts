/**
 * Safe, read-only excursion tools for AI assistant
 * Reuses logic from src/pages/api/excursions/[serviceSlug].ts
 * PILOT SECURITY: AI can only READ excursion data, never create/modify/cancel bookings
 */

import { services, eventTimeSlots } from '@wix/bookings';
import { normalizeWixMediaImage } from '@/config/wix-media';

const BUSINESS_TIME_ZONE = 'Europe/Athens';

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
  media?: {
    mainMedia?: { image?: BookingImage };
    coverMedia?: { image?: BookingImage };
  };
};

type ExcursionMatch = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  bookingUrl: string;
};

type AvailabilityInfo = {
  hasAvailability: boolean;
  nextAvailableDate: string | null;
  bookableCapacity: number;
};

function serviceSlug(service: BookingService): string {
  return service.mainSlug?.name?.trim()
    || service.supportedSlugs?.find((item) => item.name)?.name?.trim()
    || '';
}

function bookingImageUrl(image?: BookingImage): string {
  return normalizeWixMediaImage(image) || '';
}

function localDateTime(date: Date): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: BUSINESS_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

/**
 * Search for excursions by keywords or interests
 * Returns up to 3 matches for AI recommendations
 */
export async function searchExcursions(query: string): Promise<ExcursionMatch[]> {
  try {
    const result = await services.queryServices().limit(100).find();
    const allServices = (result.items as BookingService[]).filter((item) => {
      const isExcursion = item.category?.name?.trim().toLowerCase() === 'excursions';
      const isPublic = item.hidden !== true && item.onlineBooking?.enabled === true;
      return isExcursion && isPublic;
    });

    const queryLower = query.toLowerCase();
    const matches = allServices
      .filter((service) => {
        const name = (service.name || '').toLowerCase();
        const desc = (service.description || '').toLowerCase();
        const tagline = (service.tagLine || '').toLowerCase();
        return name.includes(queryLower) || desc.includes(queryLower) || tagline.includes(queryLower);
      })
      .slice(0, 3)
      .map((service) => ({
        id: service._id || '',
        slug: serviceSlug(service),
        name: service.name || 'Excursion',
        description: service.tagLine || service.description || '',
        image: bookingImageUrl(service.media?.coverMedia?.image)
          || bookingImageUrl(service.media?.mainMedia?.image),
        bookingUrl: `/booking-calendar/${serviceSlug(service)}`,
      }));

    return matches;
  } catch (error) {
    console.error('Error searching excursions:', error);
    return [];
  }
}

/**
 * Check availability for an excursion
 * Returns next available date and capacity info
 */
export async function checkExcursionAvailability(serviceId: string): Promise<AvailabilityInfo> {
  try {
    const from = new Date();
    const to = new Date(from);
    to.setUTCDate(to.getUTCDate() + 180);

    const availability = await eventTimeSlots.listEventTimeSlots({
      fromLocalDate: `${localDateTime(from)}T00:00:00`,
      toLocalDate: `${localDateTime(to)}T23:59:59`,
      timeZone: BUSINESS_TIME_ZONE,
      serviceIds: [serviceId],
      includeNonBookable: false,
      minBookableCapacity: 1,
      cursorPaging: { limit: 1 },
    });

    const firstSlot = (availability.timeSlots || [])
      .filter((slot) => slot.bookable !== false && slot.eventInfo?.eventId)
      .sort((a, b) => (a.localStartDate || '').localeCompare(b.localStartDate || ''))[0];

    if (!firstSlot) {
      return {
        hasAvailability: false,
        nextAvailableDate: null,
        bookableCapacity: 0,
      };
    }

    return {
      hasAvailability: true,
      nextAvailableDate: firstSlot.localStartDate || null,
      bookableCapacity: firstSlot.bookableCapacity ?? firstSlot.remainingCapacity ?? 0,
    };
  } catch (error) {
    console.error('Error checking excursion availability:', error);
    return {
      hasAvailability: false,
      nextAvailableDate: null,
      bookableCapacity: 0,
    };
  }
}

/**
 * Get pricing info for an excursion
 * Returns adult and child pricing if available
 */
export async function getExcursionPricing(serviceId: string): Promise<{ adultPrice: number; childPrice: number } | null> {
  try {
    const result = await services.queryServices().limit(100).find();
    const service = (result.items as BookingService[]).find((s) => s._id === serviceId);

    if (!service) return null;

    // Note: Pricing is typically stored in variants or service options
    // For now, return null as pricing requires additional API calls
    // This can be expanded based on actual Wix Bookings structure
    return {
      adultPrice: 0,
      childPrice: 0,
    };
  } catch (error) {
    console.error('Error getting excursion pricing:', error);
    return null;
  }
}
