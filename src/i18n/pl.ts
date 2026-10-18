// =====================================================================
// TEKSTY STRONY — WERSJA POLSKA (źródłowa).
// Wersje es.ts i en.ts będą miały dokładnie te same klucze.
// Zmieniasz tekst = zmieniasz wartość w cudzysłowie. Klucze zostawiasz.
// =====================================================================

export const pl = {
  lang: 'pl',
  htmlLang: 'pl',

  meta: {
    title: 'Cyfrowy przewodnik dla gości Airbnb i Booking | Huespo',
    description:
      'Kod do drzwi, WiFi, zasady domu i lokalne polecenia w jednym linku dla gości. Bez aplikacji i logowania. Wypróbuj Huespo 14 dni za darmo.',
    ogImageAlt: 'Huespo — cyfrowy przewodnik dla gości najmu krótkoterminowego',
    appDescription:
      'Cyfrowy przewodnik (welcome book) i concierge dla gości najmu krótkoterminowego: kod do drzwi, WiFi, zasady domu i lokalne rekomendacje w jednym linku.',
  },

  nav: {
    skip: 'Przejdź do treści',
    how: 'Jak to działa',
    features: 'Funkcje',
    pricing: 'Cennik',
    faq: 'FAQ',
    login: 'Zaloguj się',
    register: 'Załóż konto',
    cta: 'Wypróbuj za darmo',
    languages: 'Język strony',
    menuOpen: 'Otwórz menu',
    menuClose: 'Zamknij menu',
    mainLabel: 'Menu główne',
  },

  // Pasek pokazywany osobom, których przeglądarka mówi w innym języku.
  langOffer: {
    text: 'Ta strona jest dostępna po polsku.',
    link: 'Przejdź do wersji polskiej',
    dismiss: 'Zamknij',
  },

  hero: {
    eyebrow: 'Huespo – to Twój cyfrowy concierge',
    title: 'Jeden link, który wita gości zamiast Ciebie.',
    sub: 'To koniec z pisaniem tych samych wiadomości każdemu gościowi z osobna. Wysyłasz link raz, a on ma wszystko, o co zwykle pytał po nocach.',
    ctaPrimary: 'Wypróbuj za darmo',
    ctaPrimarySmall: 'przez 14 dni',
    ctaSecondary: 'Zaloguj się',
    ctaSecondarySmall: 'mam już konto',
    platformsLabel: 'Działa niezależnie od tego, skąd rezerwuje gość:',
    platforms: ['Airbnb', 'Booking.com', 'Vrbo', 'Holidu', 'CHECK24'],
    imageAlt: 'Uśmiechnięty podróżny z plecakiem sprawdza na telefonie przewodnik po apartamencie',
  },

  problem: {
    title: 'Te same pytania. Każdy gość. Za każdym razem od nowa.',
    sub: 'Codzienne odpowiedzi na te same pytania, wysyłane ręcznie, z różnych komunikatorów — bo nic nie jest w jednym miejscu.',
    appLabel: 'Wiadomości',
    now: 'teraz',
    // color: kolor ikonki komunikatora (green / violet / red)
    messages: [
      { from: 'Marek – apartament Malibu', color: 'green', lines: ['Witam.', 'Gdzie mogę znaleźć hasło do WiFi?'] },
      { from: 'Wiktoria P. – apartament Laguna', color: 'violet', lines: ['Hej, przypomnij mi kod do furtki.', 'Czy mógłbyś polecić mi jakąś lokalną restaurację i kilka ciekawych atrakcji w okolicy?', 'Dzięki'] },
      { from: 'Marcin – apartament Malibu', color: 'green', lines: ['Cześć, mam kilka pytań.', 'Gdzie mam wyrzucić śmieci?', 'Co mam zrobić z brudnymi ręcznikami i pościelą?', 'Pozdrawiam, Marcin'] },
      { from: 'Marta – apartament Green Forest', color: 'red', lines: ['Dobry wieczór.', 'Późno, ale dopiero dotarliśmy na miejsce.', 'Gdzie możemy zaparkować?', 'Które to są drzwi i jak mam odebrać klucze?', 'Marta'] },
    ],
    closing: 'A co gdyby jedna wiadomość wystarczyła na cały pobyt gościa?',
    imageAlt: 'Dłoń trzyma telefon z otwartym przewodnikiem Huespo dla apartamentu Malibu Park 3001',
  },

  how: {
    eyebrow: 'Jak to działa?',
    bigNumber: '3',
    titleAfterNumber: 'kroki i zero wiedzy technicznej.',
    titleLine2: 'To łatwiejsze niż myślisz.',
    sub: 'Ustawiasz raz dla każdej nieruchomości, link działa dla każdego gościa.',
    steps: [
      {
        title: 'Dodajesz obiekt raz',
        text: 'Wpisujesz dane wejścia, WiFi, zasady domu i lokalne rekomendacje. Zajmuje to tyle, co jedna dłuższa wiadomość do gościa, ale robisz to tylko raz.',
      },
      {
        title: 'Wysyłasz jeden link',
        text: 'Przy każdej rezerwacji wklejasz ten sam link w wiadomości powitalnej – przez WhatsApp, SMS, e-mail, czat Airbnb czy Booking, tak jak zwykle się kontaktujesz.',
      },
      {
        title: 'Gość obsługuje się sam',
        text: 'Kod, hasło, zasady, okoliczne restauracje – wszystko w jednym miejscu, na telefonie, bez pobierania i bez aplikacji. Otwiera link i od razu widzi to, o co zwykle pytał.',
      },
    ],
  },

  features: {
    eyebrow: 'Dlaczego Huespo',
    title: 'to wszystko, czego potrzebuje Twój gość – w jednym miejscu.',
    lead: {
      icon: 'share',
      title: 'Bez aplikacji i bez logowania',
      text: 'Link otwiera się jak zwykła strona, na każdym telefonie. Gość nie zakłada konta, nie pobiera niczego i nie zapomina hasła.',
    },
    items: [
      { icon: 'wifi', title: 'Kod i WiFi z przyciskiem „Kopiuj”', text: 'Gość kopiuje hasło jednym dotknięciem, bez przepisywania znak po znaku.' },
      { icon: 'key', title: 'Samodzielne lub osobiste zameldowanie', text: 'Skrzynka na klucze, kod albo spotkanie z Tobą. Obsłużysz też obiekt bez WiFi.' },
      { icon: 'map', title: 'Twój lokalny przewodnik', text: 'Restauracje, plaże i sklepy, które naprawdę polecasz, z linkami do map.' },
      { icon: 'globe', title: '6 języków automatycznie', text: 'Menu i przyciski przewodnika w języku telefonu gościa: PL, EN, ES, DE, FR, IT.' },
      { icon: 'battery', title: 'Działa offline', text: 'Po dodaniu do ekranu głównego gość ma przewodnik nawet bez internetu.' },
      { icon: 'phone', title: 'Kontakt jednym dotknięciem', text: 'Telefon, WhatsApp albo e-mail, gdy gość naprawdę potrzebuje Ciebie.' },
      { icon: 'refresh', title: 'Zmiany widoczne od razu', text: 'Zmieniasz kod lub godzinę wymeldowania, a gość widzi nową wersję bez nowego linku.' },
    ],
  },

  cta: {
    title: 'Niech Twój gość poczuje się mile widziany, zanim jeszcze otworzy drzwi.',
    sub: 'Skonfiguruj pierwszą nieruchomość w kilka minut.',
    button: 'Rozpocznij 14 dni za darmo',
    imageAlt: 'Dłoń trzyma telefon z przewodnikiem Huespo otwartym na ekranie',
  },

  // Cennik — 1:1 jak strona „Wybierz plan” w aplikacji (te same teksty i układ).
  pricing: {
    title: 'Wybierz plan',
    sub: 'Zacznij od 14-dniowego bezpłatnego okresu próbnego. Anuluj w dowolnym momencie.',
    cycleLabel: 'Okres rozliczenia',
    monthly: 'Miesięcznie',
    yearly: 'Rocznie',
    currencyLabel: 'Waluta',
    badges: {
      single: 'Zacznij tutaj',
      compact: 'Najczęściej wybierany',
      premium: 'Wyróżnij się',
      pro: 'Dla firm',
    },
    // Odmiana: 1 Obiekt / 4 Obiekty / 10 Obiektów
    labels: {
      objects: { one: 'Obiekt', few: 'Obiekty', many: 'Obiektów' },
      languages: { one: 'Język', few: 'Języki', many: 'Języków' },
      localRecs: { one: 'Lokalna rekomendacja', few: 'Lokalne rekomendacje', many: 'Lokalnych rekomendacji' },
      qr: 'Generator kodu QR',
      ownLogo: 'Własne logo',
      sorting: 'Sortowanie obiektów',
      support24: 'Wsparcie 24h',
      liveUpdate: 'Live update',
    },
    cta: 'Wybierz plan',
    note: 'Ceny brutto. Płatności obsługuje Stripe — ostateczna kwota jest potwierdzana w kasie. Plan zmieniasz lub anulujesz w dowolnym momencie z panelu hosta.',
  },

  faq: {
    title: 'Najczęściej zadawane pytania',
    items: [
      {
        q: 'Czym jest cyfrowy przewodnik dla gości?',
        a: 'To strona internetowa z wszystkim, czego gość potrzebuje w czasie pobytu: wejściem, kodem do drzwi, WiFi, zasadami domu i poleceniami w okolicy. Zastępuje papierowy segregator (welcome book) i dziesiątki wiadomości. W Huespo wysyłasz ją gościowi jako jeden link.',
      },
      {
        q: 'Czy gość musi instalować aplikację lub się logować?',
        a: 'Nie. Gość otwiera link w przeglądarce telefonu, tak jak każdą stronę. Nie zakłada konta i niczego nie pobiera.',
      },
      {
        q: 'Czy Huespo działa z Airbnb, Booking.com i Vrbo?',
        a: 'Tak. Huespo nie zależy od platformy rezerwacyjnej. Link wysyłasz tam, gdzie i tak piszesz do gościa: w czacie platformy, przez WhatsApp, SMS albo e-mail.',
      },
      {
        q: 'Kto widzi dane mojego obiektu?',
        a: 'Tylko osoby, które mają link do przewodnika. Ty decydujesz, komu go wysyłasz, tak samo jak dziś decydujesz, komu podajesz kod do drzwi.',
      },
      {
        q: 'W jakim języku gość widzi przewodnik?',
        a: 'Menu, przyciski i nagłówki dopasowują się automatycznie do języka telefonu gościa (PL, EN, ES, DE, FR, IT). Treści, które wpisujesz sam, wyświetlają się w języku, w którym je napiszesz.',
      },
      {
        q: 'Jak działa 14-dniowy okres próbny?',
        a: 'Przy wyborze planu podajesz kartę lub inną metodę płatności, ale pierwsza opłata jest pobierana dopiero po 14 dniach. Jeśli anulujesz wcześniej, nic nie zapłacisz.',
      },
      {
        q: 'Czy mogę zmienić plan lub zrezygnować?',
        a: 'Tak, w każdej chwili z panelu hosta. Rezygnacja działa od końca opłaconego okresu, do tego czasu korzystasz z planu bez zmian.',
      },
      {
        q: 'Co jeśli mój obiekt nie ma WiFi albo przekazuję klucze osobiście?',
        a: 'Huespo obsługuje oba modele. Możesz opisać samodzielne zameldowanie z kodem albo spotkanie z gościem. Pola, które Cię nie dotyczą, po prostu się nie wyświetlają.',
      },
    ],
  },

  form: {
    title: 'Masz pytanie albo chcesz dołączyć do testów?',
    text: 'Napisz kilka słów o swoich obiektach. Odpowiemy na podany adres e-mail.',
    name: 'Nazwa / Imię',
    email: 'E-mail',
    phone: 'Numer telefonu',
    message: 'Treść',
    optional: 'opcjonalnie',
    privacyBefore: 'Akceptuję ',
    privacyLink: 'Politykę Prywatności',
    privacyAfter: '.',
    submit: 'Wyślij wiadomość',
    sending: 'Wysyłanie…',
    success: 'Dziękujemy. Wiadomość dotarła, odezwiemy się na podany e-mail.',
    error: 'Nie udało się wysłać wiadomości. Sprawdź połączenie i spróbuj ponownie albo napisz na contact@huespo.app.',
    errorEmail: 'Wpisz poprawny adres e-mail, np. jan@example.com.',
    errorRequired: 'To pole jest wymagane.',
    errorPrivacy: 'Zaznacz zgodę, żebyśmy mogli odpowiedzieć na wiadomość.',
  },

  footer: {
    description: 'Cyfrowy przewodnik dla gości najmu krótkoterminowego.',
    terms: 'Regulamin',
    privacy: 'Polityka Prywatności',
    contact: 'Kontakt',
    company: 'Marcin Konrad Pawlak',
    location: 'Costa Adeje, Teneryfa, Hiszpania',
    copyright: '© 2026 Huespo',
  },

  thanks: {
    title: 'Dziękujemy za wiadomość',
    metaTitle: 'Dziękujemy | Huespo',
    text: 'Wiadomość dotarła. Odezwiemy się na podany adres e-mail.',
    back: 'Wróć na stronę główną',
  },

  notFound: {
    title: 'Nie ma takiej strony',
    metaTitle: 'Nie znaleziono strony | Huespo',
    text: 'Adres mógł się zmienić albo zawiera literówkę.',
    back: 'Przejdź na stronę główną',
  },
};

export type Content = typeof pl;
