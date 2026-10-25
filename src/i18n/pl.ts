// =====================================================================
// TEKSTY STRONY — WERSJA POLSKA (źródłowa).
// Wersje es.ts i en.ts mają dokładnie te same klucze.
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
      'Cyfrowy przewodnik (welcome book) dla gości najmu krótkoterminowego: kod do drzwi, WiFi, zasady domu i lokalne rekomendacje w jednym linku.',
  },

  nav: {
    skip: 'Przejdź do treści',
    how: 'Jak to działa',
    features: 'Funkcje',
    pricing: 'Cennik',
    faq: 'FAQ',
    login: 'Zaloguj się',
    cta: 'Wypróbuj za darmo',
    languages: 'Język strony',
    menuOpen: 'Otwórz menu',
    menuClose: 'Zamknij menu',
  },

  // Pasek pokazywany gościom, których przeglądarka mówi w innym języku
  // (tekst w języku TEJ wersji — pokazywany osobom, które jej potrzebują).
  langOffer: {
    text: 'Ta strona jest dostępna po polsku.',
    link: 'Przejdź do wersji polskiej',
    dismiss: 'Zamknij',
  },

  hero: {
    eyebrow: 'Dla hostów Airbnb, Booking.com i Vrbo',
    titleBefore: 'Cyfrowy przewodnik dla gości, który ',
    titleHighlight: 'odpowiada za Ciebie',
    titleAfter: '',
    sub: 'Kod do drzwi, WiFi, zasady domu i Twoje polecenia w okolicy — w jednym linku. Wysyłasz go raz, a gość przestaje pisać o 23:00.',
    ctaPrimary: 'Wypróbuj 14 dni za darmo',
    ctaSecondary: 'Zobacz, jak to działa',
    micro: 'Bez umowy. Anulujesz w panelu jednym kliknięciem.',
    imageAlt: 'Podróżny z plecakiem sprawdza na telefonie przewodnik po apartamencie',
    card: {
      label: 'Twój pobyt',
      name: 'Malibu Park',
      address: 'Calle Italia 10, Costa Adeje',
      door: 'Kod do drzwi',
      wifi: 'WiFi',
      checkout: 'Wymeldowanie',
      checkoutValue: 'do 12:00',
      copy: 'Kopiuj',
    },
  },

  platforms: {
    label: 'Działa niezależnie od tego, skąd rezerwuje gość:',
    items: ['Airbnb', 'Booking.com', 'Vrbo', 'rezerwacja bezpośrednia'],
  },

  problem: {
    title: 'Te same pytania. Każdy gość. Każdy pobyt.',
    items: [
      {
        q: 'Jaki jest kod do domofonu?',
        time: '23:14',
        cost: 'Odpisujesz w trakcie kolacji, bo gość stoi pod drzwiami z walizką.',
      },
      {
        q: 'Jakie jest hasło do WiFi?',
        time: '23:31',
        cost: 'Kopiujesz je z notatek dziesiąty raz w tym miesiącu.',
      },
      {
        q: 'Gdzie polecacie coś zjeść?',
        time: '08:02',
        cost: 'Znasz świetne miejsca, ale nigdy nie masz czasu, żeby je porządnie opisać.',
      },
    ],
    closing: 'A gdyby jedna wiadomość wystarczyła na cały pobyt?',
  },

  how: {
    title: 'Jak działa cyfrowy przewodnik dla gości',
    steps: [
      {
        title: 'Uzupełniasz dane obiektu raz',
        text: 'Wejście, kod, WiFi, zasady domu i Twoje miejsca w okolicy. Robisz to tylko raz, a potem tylko aktualizujesz.',
      },
      {
        title: 'Wysyłasz jeden link',
        text: 'Wklejasz go do wiadomości powitalnej: WhatsApp, SMS, e-mail albo czat Airbnb czy Booking.',
      },
      {
        title: 'Gość ma wszystko w telefonie',
        text: 'Bez aplikacji i logowania. Otwiera link i od razu widzi to, o co zwykle pytał.',
      },
    ],
  },

  features: {
    title: 'Wszystko, czego gość potrzebuje, w jednym linku',
    intro: 'Każda funkcja odpowiada na pytanie, które dziś dostajesz w wiadomościach.',
    lead: {
      title: 'Bez aplikacji i bez logowania',
      text: 'Link otwiera się jak zwykła strona, na każdym telefonie. Gość nie zakłada konta, nie pobiera niczego i nie zapomina hasła.',
    },
    items: [
      { icon: 'copy', title: 'Kod i WiFi z przyciskiem „Kopiuj”', text: 'Gość kopiuje hasło jednym dotknięciem, bez przepisywania znak po znaku.' },
      { icon: 'key', title: 'Samodzielne lub osobiste zameldowanie', text: 'Skrzynka na klucze, kod albo spotkanie z Tobą. Obsłużysz też obiekt bez WiFi.' },
      { icon: 'map', title: 'Twój lokalny przewodnik', text: 'Restauracje, plaże i sklepy, które naprawdę polecasz, z linkami do map.' },
      { icon: 'globe', title: '6 języków automatycznie', text: 'Przewodnik dopasowuje się do języka telefonu gościa: PL, EN, ES, DE, FR, IT.' },
      { icon: 'offline', title: 'Działa offline', text: 'Po dodaniu do ekranu głównego gość ma przewodnik nawet bez internetu.' },
      { icon: 'phone', title: 'Kontakt jednym dotknięciem', text: 'Telefon, WhatsApp albo e-mail, gdy gość naprawdę potrzebuje Ciebie.' },
      { icon: 'refresh', title: 'Zmiany widoczne od razu', text: 'Zmieniasz kod lub godzinę wymeldowania, a gość widzi nową wersję bez nowego linku.' },
    ],
  },

  preview: {
    title: 'To widzi Twój gość',
    text: 'Prawdziwy przewodnik z Huespo, otwarty na telefonie gościa. Sekcje układasz sam, pod swój obiekt, na przykład:',
    tabs: ['Powitanie', 'Przewodnik przyjazdu', 'Parking', 'Odpady', 'Dostęp i WiFi', 'Okolica'],
    imageAlt: 'Przewodnik Huespo dla apartamentu Parque Royal 219 na ekranie telefonu: zakładki, nazwa, adres i zdjęcie obiektu',
    note: 'Prawdziwy przewodnik z aplikacji Huespo.',
  },

  audience: {
    title: 'Dla kogo jest Huespo',
    items: [
      { title: 'Host z jednym apartamentem', text: 'Masz jedno mieszkanie i dość odpisywania na te same pytania po pracy.', plan: 'Plan Single' },
      { title: 'Zarządca kilku obiektów', text: 'Każdy obiekt ma inny kod i inne zasady. Trzymasz je w jednym panelu.', plan: 'Plany Compact i Premium' },
      { title: 'Firma zarządzająca najmem', text: 'Dziesiątki obiektów, własne logo i kolory marki oraz wsparcie priorytetowe.', plan: 'Plan PRO' },
    ],
    link: 'Zobacz cennik',
  },

  pricing: {
    title: 'Cennik — wybierz plan',
    sub: '14 dni za darmo, bez karty płatniczej. Plan wybierasz dopiero, gdy chcesz zostać.',
    cycleLabel: 'Okres rozliczenia',
    monthly: 'Miesięcznie',
    yearly: 'Rocznie',
    yearlyHint: 'taniej',
    currencyLabel: 'Waluta',
    perMonth: '/ mies.',
    perYear: '/ rok',
    saving: 'Oszczędzasz {amount} rocznie',
    badges: {
      single: 'Zacznij tutaj',
      compact: 'Najczęściej wybierany',
      premium: 'Wyróżnij się',
      pro: 'Dla firm',
    },
    features: {
      single: [
        { text: '1 obiekt', check: false },
        { text: 'EN + 1 wybrany język', check: false },
        { text: '1 lokalna rekomendacja', check: false },
        { text: 'Działa offline', check: true },
      ],
      compact: [
        { text: '10 obiektów', check: false },
        { text: '6 języków', check: false },
        { text: '4 lokalne rekomendacje', check: false },
        { text: 'Działa offline', check: true },
        { text: 'Generator kodu QR', check: true },
        { text: 'Palety kolorów', check: true },
        { text: 'Wsparcie (odpowiedź w 24 h)', check: true },
      ],
      premium: [
        { text: '30 obiektów', check: false },
        { text: '6 języków', check: false },
        { text: '12 lokalnych rekomendacji', check: false },
        { text: 'Działa offline', check: true },
        { text: 'Generator kodu QR', check: true },
        { text: 'Palety kolorów', check: true },
        { text: 'Wsparcie (odpowiedź w 24 h)', check: true },
        { text: 'Własne logo', check: true },
        { text: 'Bez oznaczenia Huespo', check: true },
        { text: 'Sortowanie obiektów', check: true },
      ],
      pro: [
        { text: '100 obiektów', check: false },
        { text: '6 języków', check: false },
        { text: '40 lokalnych rekomendacji', check: false },
        { text: 'Działa offline', check: true },
        { text: 'Generator kodu QR', check: true },
        { text: 'Palety kolorów', check: true },
        { text: 'Własne logo', check: true },
        { text: 'Bez oznaczenia Huespo', check: true },
        { text: 'Sortowanie obiektów', check: true },
        { text: 'Kolor Twojej marki', check: true },
        { text: 'Wsparcie priorytetowe', check: true },
      ],
    },
    liveUpdate: 'Live update',
    cta: 'Wybierz plan',
    note: 'Ceny netto (bez podatku). Płatności obsługuje Stripe. Plan zmieniasz lub anulujesz w dowolnym momencie z panelu hosta.',
  },

  faq: {
    title: 'Najczęściej zadawane pytania',
    items: [
      {
        q: 'Czym jest cyfrowy przewodnik dla gości (welcome book)?',
        a: 'To strona internetowa z wszystkim, czego gość potrzebuje w czasie pobytu: wejściem, kodem do drzwi, WiFi, zasadami domu i poleceniami w okolicy. Zastępuje papierowy segregator i dziesiątki wiadomości. W Huespo wysyłasz ją gościowi jako jeden link.',
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
        q: 'Co jeśli mój obiekt nie ma WiFi albo przekazuję klucze osobiście?',
        a: 'Huespo obsługuje oba modele. Możesz opisać samodzielne zameldowanie z kodem albo spotkanie z gościem. Pola, które Cię nie dotyczą, po prostu się nie wyświetlają.',
      },
      {
        q: 'Kto widzi dane mojego obiektu?',
        a: 'Tylko osoby, które mają link do przewodnika. Ty decydujesz, komu go wysyłasz, tak samo jak dziś decydujesz, komu podajesz kod do drzwi.',
      },
      {
        q: 'W jakim języku gość widzi przewodnik?',
        a: 'Przyciski i nagłówki dopasowują się automatycznie do języka telefonu gościa (PL, EN, ES, DE, FR, IT). Treści, które wpisujesz sam, wyświetlają się w języku, w którym je napiszesz.',
      },
      {
        q: 'Jak działa 14-dniowy okres próbny?',
        a: 'Zakładasz konto i od razu masz pełny dostęp przez 14 dni, bez podawania karty. Jeśli chcesz zostać, wybierasz plan i podajesz kartę; pierwsza opłata i tak jest pobierana dopiero po zakończeniu 14 dni. Jeśli nie wybierzesz planu, nic nie płacisz, a Twoje obiekty zostają zapisane.',
      },
      {
        q: 'Czy mogę zmienić plan lub zrezygnować?',
        a: 'Tak, w każdej chwili z panelu hosta. Rezygnacja działa od końca opłaconego okresu, do tego czasu korzystasz z planu bez zmian.',
      },
    ],
  },

  form: {
    title: 'Masz pytanie albo chcesz dołączyć do testów?',
    text: 'Napisz kilka słów o swoich obiektach. Odpowiemy na podany adres e-mail.',
    name: 'Imię',
    email: 'E-mail',
    properties: 'Liczba obiektów',
    propertiesPlaceholder: 'Wybierz',
    propertiesOptions: ['1', '2–5', '6–15', '16+'],
    message: 'Wiadomość',
    optional: 'opcjonalnie',
    privacyBefore: 'Akceptuję ',
    privacyLink: 'Politykę Prywatności',
    privacyAfter: '.',
    newsletter: 'Chcę otrzymywać newsletter i informacje o Huespo.',
    submit: 'Wyślij wiadomość',
    sending: 'Wysyłanie…',
    success: 'Dziękujemy. Wiadomość dotarła, odezwiemy się na podany e-mail.',
    error: 'Nie udało się wysłać wiadomości. Sprawdź połączenie i spróbuj ponownie albo napisz na contact@huespo.app.',
    errorEmail: 'Wpisz poprawny adres e-mail, np. jan@example.com.',
    errorRequired: 'To pole jest wymagane.',
    errorPrivacy: 'Zaznacz zgodę, żebyśmy mogli odpowiedzieć na wiadomość.',
  },

  finalCta: {
    title: 'Twoja następna wiadomość powitalna może być ostatnią, którą piszesz ręcznie.',
    button: 'Wypróbuj 14 dni za darmo',
  },

  footer: {
    description: 'Cyfrowy przewodnik dla gości najmu krótkoterminowego.',
    product: 'Produkt',
    legal: 'Informacje',
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
