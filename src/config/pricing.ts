// =====================================================================
// CENNIK HUESPO — jedyne miejsce, w którym zmieniasz ceny.
// Kwoty muszą być zgodne z cenami w Paddle (aplikacja app.huespo.app).
// Zmiana ceny = zmiana jednej liczby poniżej.
// =====================================================================

export type Currency = 'PLN' | 'EUR' | 'GBP';
export type Cycle = 'monthly' | 'yearly';
export type PlanId = 'single' | 'compact' | 'premium' | 'pro';
export type CardVariant = 'light' | 'photo' | 'orange';

export const CURRENCIES: Currency[] = ['PLN', 'EUR', 'GBP'];

export interface Plan {
  id: PlanId;
  name: string;
  variant: CardVariant;
  prices: Record<Currency, { monthly: number; yearly: number }>;
  /** Limity i funkcje — takie same jak w aplikacji (src/routes/_authenticated/pricing.tsx). */
  objects: number;
  languages: number;
  localRecs: number;
  qr: boolean;
  ownLogo: boolean;
  sorting: boolean;
  support24: boolean;
}

export const PLANS: Plan[] = [
  {
    id: 'single',
    objects: 1, languages: 1, localRecs: 1, qr: false, ownLogo: false, sorting: false, support24: false,
    name: 'Single',
    variant: 'light',
    prices: {
      PLN: { monthly: 17.9, yearly: 178.9 },
      EUR: { monthly: 3.9, yearly: 39.9 },
      GBP: { monthly: 3.49, yearly: 35.9 },
    },
  },
  {
    id: 'compact',
    objects: 10, languages: 6, localRecs: 4, qr: true, ownLogo: false, sorting: false, support24: false,
    name: 'Compact',
    variant: 'photo',
    prices: {
      PLN: { monthly: 44.9, yearly: 449.9 },
      EUR: { monthly: 9.9, yearly: 99.9 },
      GBP: { monthly: 8.9, yearly: 89.9 },
    },
  },
  {
    id: 'premium',
    objects: 30, languages: 6, localRecs: 12, qr: true, ownLogo: true, sorting: true, support24: false,
    name: 'Premium',
    variant: 'light',
    prices: {
      PLN: { monthly: 89.9, yearly: 899.9 },
      EUR: { monthly: 19.9, yearly: 199.9 },
      GBP: { monthly: 17.9, yearly: 179.9 },
    },
  },
  {
    id: 'pro',
    objects: 100, languages: 6, localRecs: 40, qr: true, ownLogo: true, sorting: true, support24: true,
    name: 'PRO',
    variant: 'orange',
    prices: {
      PLN: { monthly: 179.9, yearly: 1799.9 },
      EUR: { monthly: 39.9, yearly: 399.9 },
      GBP: { monthly: 35.9, yearly: 359.9 },
    },
  },
];

/** Domyślna waluta dla każdej wersji językowej (zanim odwiedzający coś wybierze). */
export const DEFAULT_CURRENCY: Record<'pl' | 'es' | 'en', Currency> = {
  pl: 'PLN',
  es: 'EUR',
  en: 'EUR',
};

/** Rozbija cenę na kwotę i symbol, żeby symbol mógł mieć 75% wielkości. */
export function priceParts(amount: number, currency: Currency) {
  if (currency === 'GBP') {
    return { before: '£', number: amount.toFixed(2), after: '' };
  }
  const number = amount.toFixed(2).replace('.', ',');
  return { before: '', number, after: currency === 'PLN' ? ' zł' : ' €' };
}

export function formatPrice(amount: number, currency: Currency) {
  const p = priceParts(amount, currency);
  return `${p.before}${p.number}${p.after}`;
}

/** Ile oszczędza host, płacąc rocznie zamiast 12 × miesięcznie. */
export function yearlySaving(plan: Plan, currency: Currency) {
  const { monthly, yearly } = plan.prices[currency];
  return Math.round((monthly * 12 - yearly) * 100) / 100;
}
