/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: ExcursionPageContent
 * Interface for ExcursionPageContent
 */
export interface ExcursionPageContent {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  slug?: string;
  /** @wixFieldType boolean */
  active?: boolean;
  /** @wixFieldType text */
  heroDescription?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  heroImage?: string;
  /** @wixFieldType text */
  heroImageAlt?: string;
  /** @wixFieldType text */
  quickFactsTitle?: string;
  /** @wixFieldType text */
  durationLabel?: string;
  /** @wixFieldType text */
  durationValue?: string;
  /** @wixFieldType text */
  departureLabel?: string;
  /** @wixFieldType text */
  departureValue?: string;
  /** @wixFieldType text */
  languageLabel?: string;
  /** @wixFieldType text */
  languageValue?: string;
  /** @wixFieldType text */
  priceLabel?: string;
  /** @wixFieldType number */
  price?: number;
  /** @wixFieldType text */
  currencySymbol?: string;
  /** @wixFieldType text */
  overviewTitle?: string;
  /** @wixFieldType text */
  overviewText?: string;
  /** @wixFieldType text */
  highlightsTitle?: string;
  /** @wixFieldType text */
  highlight1?: string;
  /** @wixFieldType text */
  highlight2?: string;
  /** @wixFieldType text */
  highlight3?: string;
  /** @wixFieldType text */
  highlight4?: string;
  /** @wixFieldType text */
  detailsTitle?: string;
  /** @wixFieldType text */
  fullDescriptionTitle?: string;
  /** @wixFieldType text */
  fullDescription?: string;
  /** @wixFieldType text */
  includedTitle?: string;
  /** @wixFieldType text */
  included?: string;
  /** @wixFieldType text */
  notIncludedTitle?: string;
  /** @wixFieldType text */
  notIncluded?: string;
  /** @wixFieldType text */
  importantInfoTitle?: string;
  /** @wixFieldType text */
  importantInfo?: string;
  /** @wixFieldType text */
  bookingSummaryTitle?: string;
  /** @wixFieldType text */
  pricePrefix?: string;
  /** @wixFieldType text */
  priceUnit?: string;
  /** @wixFieldType text */
  bookingButtonLabel?: string;
  /** @wixFieldType text */
  bookingLink?: string;
  /** @wixFieldType text */
  galleryTitle?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  galleryImage1?: string;
  /** @wixFieldType text */
  galleryImage1Alt?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  galleryImage2?: string;
  /** @wixFieldType text */
  galleryImage2Alt?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  galleryImage3?: string;
  /** @wixFieldType text */
  galleryImage3Alt?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  galleryImage4?: string;
  /** @wixFieldType text */
  galleryImage4Alt?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  galleryImage5?: string;
  /** @wixFieldType text */
  galleryImage5Alt?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  galleryImage6?: string;
  /** @wixFieldType text */
  galleryImage6Alt?: string;
}


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
