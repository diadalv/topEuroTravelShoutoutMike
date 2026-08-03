import { services } from '@wix/bookings';
import type { Excursions } from '@/entities';
import { BaseCrudService } from '../cms';

const COLLECTION_ID = 'ExcursionsCMS';

type Money = {
  value?: string;
  currency?: string;
  formattedValue?: string | null;
};

type BookingImage = string | {
  id?: string;
  url?: string;
  filename?: string;
  width?: number;
  height?: number;
};

type ServicePrice = {
  adultPrice?: number;
  childPrice?: number;
  priceLabel?: string;
  currency?: string;
};

type BookingServiceRecord = {
  _id?: string | null;
  name?: string | null;
  description?: string | null;
  tagLine?: string | null;
  sortOrder?: number | null;
  defaultCapacity?: number | null;
  hidden?: boolean | null;
  category?: { name?: string | null };
  onlineBooking?: {
    enabled?: boolean | null;
    requireManualApproval?: boolean | null;
  };
  payment?: {
    rateType?: string;
    fixed?: { price?: Money };
    varied?: { defaultPrice?: Money; minPrice?: Money; maxPrice?: Money };
    custom?: { description?: string | null };
  };
  media?: {
    mainMedia?: { image?: BookingImage };
    coverMedia?: { image?: BookingImage };
    items?: Array<{ image?: BookingImage }>;
  };
  mainSlug?: { name?: string | null };
  supportedSlugs?: Array<{ name?: string | null }>;
  urls?: {
    bookingPage?: string | { relativePath?: string | null; url?: string | null };
    calendarPage?: string | { relativePath?: string | null; url?: string | null };
    servicePage?: string | { relativePath?: string | null; url?: string | null };
  };
};

export type ExcursionCatalogRecord = Excursions & {
  bookingConnected: boolean;
  bookingAvailable: boolean;
  bookingRateType?: string;
  bookingCurrency?: string;
  bookingServiceSlug?: string;
  bookingRequiresApproval?: boolean;
  bookingNativeVisible?: boolean;
};

function numericPrice(value?: string | null) {
  if (!value) return undefined;
  const match = value.replace(',', '.').match(/\d+(?:\.\d+)?/);
  if (!match) return undefined;
  const price = Number(match[0]);
  return Number.isFinite(price) ? price : undefined;
}

function labeledPrice(value: string | undefined, label: string) {
  if (!value) return undefined;
  const match = value.match(new RegExp(`${label}[^\\d]*(\\d+(?:[.,]\\d+)?)`, 'i'));
  return numericPrice(match?.[1]);
}

function bookingImageUrl(image?: BookingImage) {
  if (!image) return undefined;
  if (typeof image === 'string') return image;

  if (image.url?.startsWith('http') || image.url?.startsWith('wix:image://')) return image.url;
  const id = image.id || image.url;
  if (!id) return undefined;
  const filename = encodeURIComponent(image.filename || 'booking-image');
  const dimensions = image.width && image.height
    ? `#originWidth=${image.width}&originHeight=${image.height}`
    : '';
  return `wix:image://v1/${id}/${filename}${dimensions}`;
}

function getBookingServiceSlug(service: BookingServiceRecord) {
  return service.mainSlug?.name?.trim()
    || service.supportedSlugs?.find((slug) => slug.name)?.name?.trim()
    || undefined;
}

function bookingCalendarUrl(service: BookingServiceRecord) {
  const serviceSlug = getBookingServiceSlug(service);
  if (serviceSlug) {
    return `/booking-calendar/${encodeURIComponent(serviceSlug)}`;
  }

  const urlValue = service.urls?.calendarPage || service.urls?.bookingPage;
  const nativeUrl = typeof urlValue === 'string'
    ? urlValue
    : urlValue?.relativePath || urlValue?.url || undefined;
  if (!nativeUrl) return undefined;

  try {
    const url = new URL(nativeUrl, 'https://wix-site.invalid');
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return nativeUrl.startsWith('/') ? nativeUrl : undefined;
  }
}

function isExcursionService(service: BookingServiceRecord) {
  return service.category?.name?.trim().toLowerCase() === 'excursions';
}

function priceFromService(service: BookingServiceRecord): ServicePrice {
  const payment = service.payment;
  const rateType = payment?.rateType;

  if (rateType === 'NO_FEE') {
    return { adultPrice: 0, childPrice: 0, priceLabel: 'Free', currency: undefined };
  }

  if (rateType === 'FIXED') {
    const price = payment?.fixed?.price;
    return {
      adultPrice: numericPrice(price?.value),
      priceLabel: price?.formattedValue || undefined,
      currency: price?.currency,
    };
  }

  if (rateType === 'VARIED') {
    const price = payment?.varied?.minPrice || payment?.varied?.defaultPrice;
    return {
      adultPrice: numericPrice(price?.value),
      priceLabel: price?.formattedValue ? `from ${price.formattedValue}` : undefined,
      currency: price?.currency,
    };
  }

  const description = payment?.custom?.description || undefined;
  return {
    adultPrice: labeledPrice(description, 'Adult') ?? numericPrice(description),
    childPrice: labeledPrice(description, 'Child'),
    priceLabel: description,
    currency: description?.includes('€') ? 'EUR' : undefined,
  };
}

function mergeWithBookingService(
  cmsRecord: Excursions,
  service: BookingServiceRecord,
): ExcursionCatalogRecord {
  const price = priceFromService(service);
  const serviceSlug = getBookingServiceSlug(service);
  const nativeBookingUrl = bookingCalendarUrl(service);
  const bookingNativeVisible = service.hidden !== true;
  const bookingAvailable = bookingNativeVisible
    && service.onlineBooking?.enabled === true
    && Boolean(nativeBookingUrl);

  return {
    ...cmsRecord,
    title: service.name || cmsRecord.title,
    shortDescription: service.tagLine || service.description || cmsRecord.shortDescription,
    mainImage: bookingImageUrl(service.media?.mainMedia?.image) || cmsRecord.mainImage,
    coverImage: bookingImageUrl(service.media?.coverMedia?.image) || cmsRecord.coverImage,
    capacity: service.defaultCapacity ?? cmsRecord.capacity,
    adultPrice: price.adultPrice ?? cmsRecord.adultPrice,
    childPrice: price.childPrice ?? cmsRecord.childPrice,
    priceLabel: price.priceLabel || cmsRecord.priceLabel,
    sortOrder: cmsRecord.sortOrder ?? service.sortOrder ?? undefined,
    bookingUrl: bookingAvailable ? nativeBookingUrl : '/contact',
    bookingConnected: true,
    bookingAvailable,
    bookingRateType: service.payment?.rateType,
    bookingCurrency: price.currency,
    bookingServiceSlug: serviceSlug,
    bookingRequiresApproval: service.onlineBooking?.requireManualApproval === true,
    bookingNativeVisible,
  };
}

function disconnectedRecord(cmsRecord: Excursions): ExcursionCatalogRecord {
  return {
    ...cmsRecord,
    bookingUrl: '/contact',
    bookingConnected: false,
    bookingAvailable: false,
  };
}

function bookingOnlyRecord(service: BookingServiceRecord): ExcursionCatalogRecord | null {
  if (!service._id || service.hidden === true || service.onlineBooking?.enabled !== true) return null;

  const slug = getBookingServiceSlug(service);
  if (!slug) return null;

  const price = priceFromService(service);
  const bookingUrl = bookingCalendarUrl(service);
  const image = bookingImageUrl(service.media?.mainMedia?.image)
    || bookingImageUrl(service.media?.coverMedia?.image);

  return {
    _id: service._id,
    title: service.name || 'Excursion',
    slug,
    shortDescription: service.tagLine || service.description || 'Discover Rhodes and Kos with local experts.',
    overview: service.description || service.tagLine || '',
    tourGroup: 'Excursion',
    mainImage: image,
    coverImage: bookingImageUrl(service.media?.coverMedia?.image) || image,
    capacity: service.defaultCapacity ?? undefined,
    adultPrice: price.adultPrice,
    childPrice: price.childPrice,
    priceLabel: price.priceLabel,
    sortOrder: service.sortOrder ?? undefined,
    active: true,
    sourceDocument: 'Wix Bookings',
    bookingServiceId: service._id,
    bookingUrl: bookingUrl || '/contact',
    bookingConnected: true,
    bookingAvailable: Boolean(bookingUrl),
    bookingRateType: service.payment?.rateType,
    bookingCurrency: price.currency,
    bookingServiceSlug: slug,
    bookingRequiresApproval: service.onlineBooking?.requireManualApproval === true,
    bookingNativeVisible: true,
  };
}

export class ExcursionCatalogService {
  static async getAll(): Promise<ExcursionCatalogRecord[]> {
    const cmsResult = await BaseCrudService.getAll<Excursions>(COLLECTION_ID, {}, { limit: 100 });
    const activeCmsRecords = (cmsResult.items || []).filter((item) => item.active);

    let bookingServices: BookingServiceRecord[];
    try {
      const result = await services
        .queryServices()
        .limit(100)
        .find();
      bookingServices = (result.items as BookingServiceRecord[]).filter(isExcursionService);
    } catch (error) {
      console.error('Unable to load Wix Bookings excursion services:', error);
      return activeCmsRecords
        .map(disconnectedRecord)
        .sort((a, b) => (a.sortOrder ?? Number.MAX_SAFE_INTEGER) - (b.sortOrder ?? Number.MAX_SAFE_INTEGER));
    }

    const servicesById = new Map(
      bookingServices
        .filter((service) => service._id)
        .map((service) => [service._id as string, service]),
    );

    const mappedBookingIds = new Set(
      activeCmsRecords.map((record) => record.bookingServiceId).filter(Boolean),
    );

    const cmsRecords = activeCmsRecords.map((cmsRecord) => {
      const service = cmsRecord.bookingServiceId
        ? servicesById.get(cmsRecord.bookingServiceId)
        : undefined;
      return service ? mergeWithBookingService(cmsRecord, service) : disconnectedRecord(cmsRecord);
    });

    const bookingsOnlyRecords = bookingServices
      .filter((service) => !mappedBookingIds.has(service._id || undefined))
      .map(bookingOnlyRecord)
      .filter((record): record is ExcursionCatalogRecord => Boolean(record));

    return [...cmsRecords, ...bookingsOnlyRecords]
      .sort((a, b) => (a.sortOrder ?? Number.MAX_SAFE_INTEGER) - (b.sortOrder ?? Number.MAX_SAFE_INTEGER));
  }

  static async getBySlug(slug: string): Promise<ExcursionCatalogRecord | null> {
    const records = await this.getAll();
    return records.find((record) => record.slug === slug) || null;
  }
}