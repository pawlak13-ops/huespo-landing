// Wszystkie adresy zewnętrzne w jednym miejscu.
export const APP_URL = 'https://app.huespo.app';

export const LINKS = {
  login: `${APP_URL}/login`,
  register: `${APP_URL}/register`,
  terms: `${APP_URL}/terms`,
  privacy: `${APP_URL}/privacy`,
  email: 'contact@huespo.app',
};

/** Link do rejestracji z wybranym planem, cyklem i językiem. */
export function registerUrl(plan: string, cycle: string, lang: string) {
  return `${APP_URL}/register?plan=${plan}&cycle=${cycle}&lang=${lang}`;
}
