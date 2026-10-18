import { pl, type Content } from './pl';

export type Lang = 'pl' | 'es' | 'en';

/** Wersje językowe dostępne na stronie (kolejność = kolejność w przełączniku). */
export const CONTENT: Partial<Record<Lang, Content>> = {
  pl,
  // es, en — wracają po przetłumaczeniu nowej wersji (folder later-translations/)
};

export const LANGS = Object.keys(CONTENT) as Lang[];

export const LANG_LABELS: Record<Lang, string> = {
  pl: 'PL',
  es: 'ES',
  en: 'EN',
};

export function getContent(lang: Lang): Content {
  const c = CONTENT[lang];
  if (!c) throw new Error(`Brak treści dla języka: ${lang}`);
  return c;
}
