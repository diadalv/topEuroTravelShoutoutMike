/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: ExcursionsCMS
 * Interface for Excursions
 */
export interface Excursions {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  slug?: string;
  /** @wixFieldType text */
  language?: string;
  /** @wixFieldType text */
  tourGroup?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType rich_text */
  overview?: any;
  /** @wixFieldType rich_text */
  highlights?: any;
  /** @wixFieldType rich_text */
  itinerary?: any;
  /** @wixFieldType rich_text */
  included?: any;
  /** @wixFieldType rich_text */
  notIncluded?: any;
  /** @wixFieldType text */
  duration?: string;
  /** @wixFieldType text */
  operatingDays?: string;
  /** @wixFieldType text */
  startTime?: string;
  /** @wixFieldType text */
  endTime?: string;
  /** @wixFieldType number */
  adultPrice?: number;
  /** @wixFieldType number */
  childPrice?: number;
  /** @wixFieldType text */
  priceLabel?: string;
  /** @wixFieldType rich_text */
  pickupInfo?: any;
  /** @wixFieldType text */
  meetingPoint?: string;
  /** @wixFieldType rich_text */
  importantInfo?: any;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  mainImage?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  coverImage?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  galleryImage1?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  galleryImage2?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  galleryImage3?: string;
  /** @wixFieldType text */
  bookingServiceId?: string;
  /** @wixFieldType url */
  bookingUrl?: string;
  /** @wixFieldType number */
  capacity?: number;
  /** @wixFieldType number */
  sortOrder?: number;
  /** @wixFieldType boolean */
  active?: boolean;
  /** @wixFieldType text */
  sourceDocument?: string;
  /** @wixFieldType text */
  seoTitle?: string;
  /** @wixFieldType text */
  seoDescription?: string;
}
