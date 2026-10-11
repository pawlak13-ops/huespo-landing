// Drobna interaktywność strony. Bez tego skryptu strona nadal działa
// (ceny, FAQ i formularz są w zwykłym HTML) — skrypt tylko ją uprzyjemnia.

type Parts = { before: string; number: string; after: string };
type PlanPrices = Record<string, { monthly: Parts; yearly: Parts; saving: string }>;

const store = {
  get(key: string) {
    try { return localStorage.getItem(key); } catch { return null; }
  },
  set(key: string, value: string) {
    try { localStorage.setItem(key, value); } catch { /* prywatne okno — ignorujemy */ }
  },
};

/* ---------- Nagłówek: linia po przewinięciu ---------- */
const header = document.getElementById('site-header');
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* ---------- Menu mobilne ---------- */
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');
if (toggle && nav) {
  const setOpen = (open: boolean) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', (open ? toggle.dataset.close : toggle.dataset.open) ?? '');
  };
  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
}

/* ---------- Jedno łagodne pojawienie się sekcji ---------- */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

/* ---------- Pasek „ta strona jest dostępna w Twoim języku” ---------- */
const offerBar = document.getElementById('lang-offer');
const pageLang = document.body.dataset.lang ?? 'pl';
if (offerBar && !store.get('huespo-lang-offer-dismissed')) {
  const offers = JSON.parse(offerBar.dataset.offers ?? '{}') as Record<string, { text: string; link: string; dismiss: string; path: string }>;
  const browser = (navigator.languages?.[0] ?? navigator.language ?? '').slice(0, 2).toLowerCase();
  const offer = browser !== pageLang ? offers[browser] : undefined;
  if (offer) {
    offerBar.innerHTML = '';
    const text = document.createElement('span'); text.textContent = offer.text;
    const link = document.createElement('a'); link.href = offer.path; link.textContent = offer.link; link.lang = browser;
    const close = document.createElement('button'); close.type = 'button'; close.textContent = offer.dismiss;
    close.addEventListener('click', () => { offerBar.hidden = true; store.set('huespo-lang-offer-dismissed', '1'); });
    offerBar.append(text, link, close);
    offerBar.lang = browser;
    offerBar.hidden = false;
  }
}

/* ---------- Cennik: okres rozliczenia i waluta ---------- */
const pricing = document.getElementById('cennik');
if (pricing) {
  const lang = pricing.dataset.lang ?? 'pl';
  let cycle: 'monthly' | 'yearly' = 'monthly';
  let currency = pricing.dataset.defaultCurrency ?? 'EUR';

  // Wybór zapisany wcześniej > region odwiedzającego > domyślna waluta wersji językowej.
  const saved = store.get('huespo-currency');
  if (saved && ['PLN', 'EUR', 'GBP'].includes(saved)) {
    currency = saved;
  } else {
    const loc = navigator.language || '';
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (/-GB$/i.test(loc) || tz === 'Europe/London') currency = 'GBP';
    else if (/^pl/i.test(loc) || tz === 'Europe/Warsaw') currency = 'PLN';
  }

  const render = () => {
    pricing.querySelectorAll<HTMLButtonElement>('[data-cycle]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.cycle === cycle)));
    pricing.querySelectorAll<HTMLButtonElement>('[data-currency]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.currency === currency)));

    pricing.querySelectorAll<HTMLElement>('.plan').forEach((card) => {
      const priceEl = card.querySelector<HTMLElement>('.price');
      if (!priceEl) return;
      const data = JSON.parse(priceEl.dataset.prices ?? '{}') as PlanPrices;
      const entry = data[currency];
      if (!entry) return;
      const parts = entry[cycle];
      (['before', 'number', 'after'] as const).forEach((k) => {
        const el = priceEl.querySelector<HTMLElement>(`[data-part="${k}"]`);
        if (el) el.textContent = parts[k];
      });
      const per = card.querySelector<HTMLElement>('.per');
      if (per) per.textContent = (cycle === 'monthly' ? per.dataset.perMonth : per.dataset.perYear) ?? '';
      const saving = card.querySelector<HTMLElement>('.saving');
      if (saving) {
        saving.hidden = cycle !== 'yearly';
        saving.textContent = (saving.dataset.template ?? '').replace('{amount}', entry.saving);
      }
      const cta = card.querySelector<HTMLAnchorElement>('.plan-cta');
      if (cta) {
        const url = new URL(cta.href);
        url.searchParams.set('cycle', cycle);
        url.searchParams.set('lang', lang);
        cta.href = url.toString();
      }
    });
  };

  pricing.querySelectorAll<HTMLButtonElement>('[data-cycle]').forEach((b) =>
    b.addEventListener('click', () => { cycle = b.dataset.cycle === 'yearly' ? 'yearly' : 'monthly'; render(); }),
  );
  pricing.querySelectorAll<HTMLButtonElement>('[data-currency]').forEach((b) =>
    b.addEventListener('click', () => { currency = b.dataset.currency ?? currency; store.set('huespo-currency', currency); render(); }),
  );
  render();
}

/* ---------- Przyciski „Kopiuj” w podglądzie ---------- */
document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
  const label = btn.textContent;
  btn.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(btn.dataset.copy ?? ''); } catch { /* brak dostępu do schowka */ }
    btn.classList.add('copied'); btn.textContent = '✓';
    setTimeout(() => { btn.classList.remove('copied'); btn.textContent = label; }, 1400);
  });
});

/* ---------- Formularz kontaktowy (Netlify Forms) ---------- */
const form = document.querySelector<HTMLFormElement>('form[name="kontakt"]');
if (form) {
  const msg = form.dataset;
  const status = form.querySelector<HTMLElement>('.form-status');
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');

  const setError = (field: HTMLInputElement | HTMLSelectElement, text: string) => {
    const box = field.closest('.field')?.querySelector<HTMLElement>('.field-error');
    if (box) box.textContent = text;
    if (text) field.setAttribute('aria-invalid', 'true'); else field.removeAttribute('aria-invalid');
  };

  const validate = () => {
    let ok = true;
    let first: HTMLElement | null = null;
    const check = (field: HTMLInputElement | HTMLSelectElement, error: string) => {
      setError(field, error);
      if (error) { ok = false; first ??= field; }
    };
    const name = form.elements.namedItem('name') as HTMLInputElement;
    const email = form.elements.namedItem('email') as HTMLInputElement;
    const props = form.elements.namedItem('properties') as HTMLSelectElement;
    const privacy = form.elements.namedItem('privacy') as HTMLInputElement;
    check(name, name.value.trim() ? '' : msg.msgRequired ?? '');
    check(email, !email.value.trim() ? msg.msgRequired ?? '' : /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim()) ? '' : msg.msgEmail ?? '');
    check(props, props.value ? '' : msg.msgRequired ?? '');
    check(privacy, privacy.checked ? '' : msg.msgPrivacy ?? '');
    (first as HTMLElement | null)?.focus();
    return ok;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validate() || !submit || !status) return;
    submit.disabled = true;
    const label = submit.textContent;
    submit.textContent = msg.msgSending ?? '…';
    status.className = 'form-status'; status.textContent = '';
    try {
      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
      const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      status.classList.add('ok'); status.textContent = msg.msgSuccess ?? '';
    } catch {
      status.classList.add('err'); status.textContent = msg.msgError ?? '';
    } finally {
      submit.disabled = false; submit.textContent = label;
    }
  });
}
