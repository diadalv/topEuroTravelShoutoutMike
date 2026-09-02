const WIX_MEDIA_BASE_URL = 'https://static.wixstatic.com/media/';

function wixMedia(id: string, width: number, height: number) {
  const params = new URLSearchParams({
    originWidth: String(width),
    originHeight: String(height),
  });

  return `${WIX_MEDIA_BASE_URL}${id}?${params.toString()}`;
}

/**
 * Audited against the New TopEuroTravel Media Manager on 2026-08-03.
 *
 * Keys intentionally mirror the former local filenames so page data stays
 * readable while every rendered raster is served by Wix Media Manager.
 */
export const TRAVEL_MEDIA = {
  'logo.png': wixMedia('c3c625_668b8529b08249c48f9a8667135d56b1~mv2.png', 1772, 945),
  'home-hero-v2.jpg': wixMedia('5a118b_b823c9ca2f1e4712bef370d82c1b8efc~mv2.jpg', 8192, 4096),
  'home-welcome-v2.jpg': wixMedia('5a118b_278f147701794e22ac15e40aa8627d7e~mv2.jpg', 4197, 2793),
  'home-mice-v2.jpg': wixMedia('5a118b_24093d9686c145c2b28fe583d23ee478~mv2.jpg', 4256, 2832),
  'about-hero.jpg': wixMedia('5a118b_609c7f28f008447db31676b9a8433fd5~mv2.jpg', 5464, 3640),
  'about-hero-v2.jpg': wixMedia('5a118b_609c7f28f008447db31676b9a8433fd5~mv2.jpg', 5464, 3640),
  'about-intro-v2.jpg': wixMedia('5a118b_23870eaffea647caab96217f14c23fb6~mv2.jpg', 1151, 768),
  'destinations-hero.jpg': wixMedia('5a118b_9aa0b1dd453d46d8a50c76e5b6ea233f~mv2.jpg', 5472, 3648),
  'lindos.jpg': wixMedia('5a118b_94f2f66fb65a4cf5b54a9ac4575b7169~mv2.jpg', 5472, 3648),
  'lindos-aerial.jpg': wixMedia('5a118b_3904ba3b49764d06b35840292a63bc65~mv2.jpg', 5472, 3648),
  'kallithea.jpg': wixMedia('5a118b_9aa0b1dd453d46d8a50c76e5b6ea233f~mv2.jpg', 5472, 3648),
  'old-town.jpg': wixMedia('5a118b_383c6191096c41fe99a7567d02885686~mv2.jpg', 5761, 3841),
  'acropolis.jpg': wixMedia('5a118b_c9d395ffbf7e4af3acec2ab1d52d2116~mv2.jpg', 1028, 768),
  'beach.jpg': wixMedia('5a118b_3c5424838f9a4a9daec89f400d71f719~mv2.jpg', 5472, 3648),
  'flower.jpg': wixMedia('5a118b_8675a19a0b3a428fb3f0ec8547f38ceb~mv2.jpg', 2854, 1899),
  'food.jpg': wixMedia('5a118b_32e4b1a00c744f8e91837977aebc1b1e~mv2.jpg', 1152, 768),
  'monolithos.jpg': wixMedia('5a118b_c7138c5e78824b75a9c29f2fda4d1293~mv2.jpg', 1152, 768),
  'marina.jpg': wixMedia('5a118b_3b84725d4a89409db2a412f1f7af9cb5~mv2.jpg', 4256, 2832),
  'sailing.jpg': wixMedia('5a118b_1a17f66656564f45b411ad5f9623c6ae~mv2.jpg', 4099, 2728),
  'prasonisi.jpg': wixMedia('5a118b_0dc45143f69a46c889756885c764e488~mv2.jpg', 1152, 768),
  'butterflies-entry.jpg': wixMedia('5a118b_b8241d9c0b0c415a9034d17a7206d87c~mv2.jpg', 1200, 800),
  'haraki.jpg': wixMedia('5a118b_0130ce49276e4b38bbb0d109eb829f3a~mv2.jpg', 1000, 667),
  'services-hero.jpg': wixMedia('5a118b_1e1e28691dab433b8075e66efd56ef2a~mv2.jpg', 5472, 3648),
  'mice-hero.jpg': wixMedia('5a118b_a2bfd34a850f4d7ea10d8b67231fde59~mv2.jpg', 5472, 3648),
  'sunset.jpg': wixMedia('5a118b_5a78cc17999245259266239801ce7e59~mv2.jpg', 3642, 2438),
  'nightlife.jpg': wixMedia('5a118b_80919dff73954ed2af466817395f8406~mv2.jpg', 1151, 768),
  'local-life.jpg': wixMedia('5a118b_ce3862ed0f60432abcae031f2693cc7b~mv2.jpg', 1122, 741),
  'experiences-hero.jpg': wixMedia('5a118b_3c5424838f9a4a9daec89f400d71f719~mv2.jpg', 5472, 3648),
  'contact-hero.jpg': wixMedia('5a118b_36ba2e7cb31f4964a5432450d2f88391~mv2.jpg', 5472, 3648),
  'contact-map-v2.jpg': wixMedia('5a118b_e7c833209f704a4f8d1b6d7693862dbe~mv2.jpg', 1152, 768),
  'excursions-hero.jpg': wixMedia('5a118b_ab2ae908eff3464cad53f27ae679ae6a~mv2.jpg', 5472, 3648),
  'agents-hero.jpg': wixMedia('5a118b_07a87a1b935b4e898ff352e6eb4bc4fc~mv2.jpg', 5761, 3841),
} as const;

export type TravelMediaKey = keyof typeof TRAVEL_MEDIA;

export function travelMedia(key: string) {
  if (key.startsWith('wix:image://v1/')) {
    const [mediaPath, metadata = ''] = key
      .slice('wix:image://v1/'.length)
      .split('#');
    const [id] = mediaPath.split('/');
    return WIX_MEDIA_BASE_URL + id + (metadata ? '?' + metadata : '');
  }

  return TRAVEL_MEDIA[key as TravelMediaKey] ?? TRAVEL_MEDIA['home-hero-v2.jpg'];
}

export const DEFAULT_WIX_IMAGE = TRAVEL_MEDIA['home-hero-v2.jpg'];

export function isWixMediaImage(value: unknown): value is string {
  if (typeof value !== 'string') return false;
  return value.startsWith('wix:image://v1/')
    || value.startsWith(WIX_MEDIA_BASE_URL);
}

export function normalizeWixMediaImage(value: unknown): string | undefined {
  if (isWixMediaImage(value)) return value;
  if (!value || typeof value !== 'object') return undefined;

  const image = value as {
    id?: unknown;
    url?: unknown;
    filename?: unknown;
    width?: unknown;
    height?: unknown;
  };

  if (isWixMediaImage(image.url)) return image.url;
  if (typeof image.id !== 'string' || !image.id.trim()) return undefined;

  const filename = typeof image.filename === 'string' && image.filename
    ? encodeURIComponent(image.filename)
    : 'wix-media-image';
  const width = typeof image.width === 'number' ? image.width : undefined;
  const height = typeof image.height === 'number' ? image.height : undefined;
  const dimensions = width && height
    ? `#originWidth=${width}&originHeight=${height}`
    : '';

  return `wix:image://v1/${image.id}/${filename}${dimensions}`;
}
