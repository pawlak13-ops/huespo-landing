# huespo.app — strona sprzedażowa Huespo

Statyczna strona w [Astro](https://astro.build), hostowana na Netlify pod `huespo.app`.
Aplikacja dla hostów (`app.huespo.app`) to osobny projekt i nie jest tu ruszana.

## Gdzie co zmieniasz

| Co chcesz zmienić | Plik |
| --- | --- |
| Teksty po polsku | `src/i18n/pl.ts` |
| Teksty po hiszpańsku / angielsku | `src/i18n/es.ts`, `src/i18n/en.ts` |
| Ceny (PLN / EUR / GBP) | `src/config/pricing.ts` |
| Linki do aplikacji, Regulaminu, e-mail | `src/config/links.ts` |
| Adres strony, kod Google Search Console | `src/config/seo.ts` |
| Kolory, zaokrąglenia, cienie | `src/styles/global.css` (sekcja „tokeny marki”) |
| Zdjęcia | `src/assets/` (tła) i `public/` (logo, favicon) |

Każdą z tych zmian możesz zrobić bezpośrednio na GitHubie: otwórz plik, kliknij ikonę ołówka,
zmień tekst w cudzysłowie i kliknij **Commit changes**. Netlify sam opublikuje nową wersję
w ciągu 1–2 minut.

Zmieniaj tylko teksty w cudzysłowie i liczby. Nazw po lewej stronie dwukropka (kluczy) nie ruszaj.

## Struktura

- `src/pages/` — adresy stron: `/` (PL), `/es/`, `/en/`, strony „dziękujemy” i 404.
- `src/components/Landing.astro` — układ strony głównej, wspólny dla wszystkich języków.
- `src/components/sections/` — po jednym pliku na sekcję (Hero, Cennik, FAQ…).
- `src/scripts/site.ts` — drobna interaktywność (przełącznik cen, menu, formularz).

## Formularz kontaktowy

Formularz działa przez Netlify Forms. Zgłoszenia widać w Netlify: projekt → **Forms**.
Powiadomienia e-mail ustawiasz tam w **Forms → Form notifications**.

## Uruchomienie lokalne (dla programisty)

```sh
npm install
npm run dev      # podgląd na http://localhost:4321
npm run build    # gotowa strona w folderze dist/
```
