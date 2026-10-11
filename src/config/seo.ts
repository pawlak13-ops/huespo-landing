// Ustawienia SEO wspólne dla wszystkich wersji językowych.
export const SITE_URL = 'https://huespo.app';

/** Ścieżka każdej wersji językowej. */
export const LANG_PATHS = {
  pl: '/',
  es: '/es/',
  en: '/en/',
} as const;

export const OG_LOCALE = {
  pl: 'pl_PL',
  es: 'es_ES',
  en: 'en_GB',
} as const;

/**
 * Kod weryfikacyjny Google Search Console.
 * Wklej tu wartość z Search Console (metoda „tag HTML”), np. 'abc123...'.
 * Pusty = tag nie jest dodawany.
 */
export const GOOGLE_SITE_VERIFICATION = '';

/** Strona „dziękujemy” po wysłaniu formularza (nie trafia do Google). */
export const THANKS_PATHS = {
  pl: '/dziekujemy/',
  es: '/es/gracias/',
  en: '/en/thank-you/',
} as const;
