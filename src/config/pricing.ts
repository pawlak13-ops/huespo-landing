// =====================================================================
// CENNIK HUESPO — jedyne miejsce, w którym zmieniasz ceny.
// Kwoty muszą być zgodne z cenami w Stripe i w aplikacji (src/lib/plans.ts w huespo-hq).
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
}

export const PLANS: Plan[] = [
  {
    id: 'single',
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
