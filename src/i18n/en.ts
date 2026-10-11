// PAGE COPY — ENGLISH VERSION (British English). Same keys as pl.ts.
import type { Content } from './pl';

export const en: Content = {
  lang: 'en',
  htmlLang: 'en-GB',

  meta: {
    title: 'Digital Guidebook for Airbnb & Booking Guests | Huespo',
    description:
      'Door code, WiFi, house rules and local tips in one link for your guests. No app, no login. Try Huespo free for 14 days.',
    ogImageAlt: 'Huespo: a digital guidebook for short-term rental guests',
    appDescription:
      'A digital guidebook (welcome book) for short-term rental guests: door code, WiFi, house rules and local recommendations in one link.',
  },

  nav: {
    skip: 'Skip to content',
    how: 'How it works',
    features: 'Features',
    pricing: 'Pricing',
    faq: 'FAQ',
    login: 'Log in',
    cta: 'Try it free',
    languages: 'Page language',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },

  langOffer: {
    text: 'This page is available in English.',
    link: 'View in English',
    dismiss: 'Close',
  },

  hero: {
    eyebrow: 'For Airbnb, Booking.com and Vrbo hosts',
    titleBefore: 'A digital guidebook that ',
    titleHighlight: 'answers guests for you',
    titleAfter: '',
    sub: 'Door code, WiFi, house rules and your favourite local spots, all in one link. Send it once, and guests stop messaging you at 11 pm.',
    ctaPrimary: 'Try 14 days free',
    ctaSecondary: 'See how it works',
    micro: 'No contract. Cancel from your dashboard in one click.',
    imageAlt: 'Traveller with a backpack checking the apartment guide on his phone',
    card: {
      label: 'Your stay',
      name: 'Malibu Park',
      address: 'Calle Italia 10, Costa Adeje',
      door: 'Door code',
      wifi: 'WiFi',
      checkout: 'Check-out',
      checkoutValue: 'by 12:00',
      copy: 'Copy',
    },
  },

  platforms: {
    label: 'Works wherever your guest books:',
    items: ['Airbnb', 'Booking.com', 'Vrbo', 'direct bookings'],
  },

  problem: {
    title: 'Same questions. Every guest. Every stay.',
    items: [
      {
        q: "What's the code for the front door?",
        time: '23:14',
        cost: "You reply mid-dinner because your guest is standing outside with their suitcase.",
      },
      {
        q: "What's the WiFi password?",
        time: '23:31',
        cost: 'You copy it from your notes for the tenth time this month.',
      },
      {
        q: 'Where would you recommend for dinner?',
        time: '08:02',
        cost: 'You know great places but never have time to describe them properly.',
      },
    ],
    closing: 'What if one message covered the whole stay?',
  },

  how: {
    title: 'How a digital guidebook for guests works',
    steps: [
      {
        title: 'Add your property details once',
        text: 'Arrival, door code, WiFi, house rules and your local spots. You do it once, then just keep it up to date.',
      },
      {
        title: 'Send one link',
        text: 'Paste it into your welcome message: WhatsApp, SMS, email, or the Airbnb or Booking chat.',
      },
      {
        title: 'Guests have everything on their phone',
        text: 'No app, no login. They open the link and instantly see what they used to ask you.',
      },
    ],
  },

  features: {
    title: 'Everything your guests need, in one link',
    intro: 'Each feature answers a question you get by message today.',
    lead: {
      title: 'No app, no login',
      text: "The link opens like any web page, on any phone. Guests don't create accounts, download anything or forget passwords.",
    },
    items: [
      { icon: 'copy', title: 'Door code and WiFi with a Copy button', text: 'Guests copy the password with one tap instead of typing it character by character.' },
      { icon: 'key', title: 'Self check-in or meet and greet', text: 'Key box, door code or meeting in person. Works for properties without WiFi too.' },
      { icon: 'map', title: 'Your local guide', text: 'The restaurants, beaches and shops you actually recommend, with map links.' },
      { icon: 'globe', title: '6 languages, automatically', text: "The guide adapts to the language of your guest's phone: EN, ES, DE, FR, IT and PL." },
      { icon: 'offline', title: 'Works offline', text: 'Once added to the home screen, guests can open the guide without an internet connection.' },
      { icon: 'phone', title: 'One-tap contact', text: 'Phone, WhatsApp or email, for when your guest really does need you.' },
      { icon: 'refresh', title: 'Changes show instantly', text: 'Update the door code or check-out time and guests see it straight away, with no new link.' },
    ],
  },

  preview: {
    title: 'This is what your guest sees',
    text: 'A real Huespo guide, open on a guest’s phone. You arrange the sections to suit your property, for example:',
    tabs: ['Welcome', 'Arrival guide', 'Parking', 'Bins & recycling', 'Access & WiFi', 'Local area'],
    imageAlt: 'Huespo guide for the Parque Royal 219 apartment on a phone screen: tabs, name, address and property photo',
    note: 'A real guide from the Huespo app.',
  },

  audience: {
    title: 'Who Huespo is for',
    items: [
      { title: 'Hosts with one apartment', text: "You have one place and you're tired of answering the same questions after work.", plan: 'Single plan' },
      { title: 'Managers of several properties', text: 'Every property has its own code and rules. Keep them all in one dashboard.', plan: 'Compact and Premium plans' },
      { title: 'Holiday rental companies', text: 'Dozens of properties, your own logo and 24-hour support for your team.', plan: 'PRO plan' },
    ],
    link: 'See pricing',
  },

  pricing: {
    title: 'Pricing: choose your plan',
    sub: 'Start with a 14-day free trial. Cancel any time.',
    cycleLabel: 'Billing period',
    monthly: 'Monthly',
    yearly: 'Yearly',
    yearlyHint: 'save',
    currencyLabel: 'Currency',
    perMonth: '/ month',
    perYear: '/ year',
    saving: 'You save {amount} a year',
    badges: {
      single: 'Start here',
      compact: 'Most popular',
      premium: 'Stand out',
      pro: 'For businesses',
    },
    features: {
      single: [
        { text: '1 property', check: false },
        { text: 'Device language + EN', check: false },
        { text: '1 local recommendation', check: false },
      ],
      compact: [
        { text: '10 properties', check: false },
        { text: '6 languages', check: false },
        { text: '4 local recommendations', check: false },
        { text: 'QR code generator', check: true },
      ],
      premium: [
        { text: '30 properties', check: false },
        { text: '6 languages', check: false },
        { text: '12 local recommendations', check: false },
        { text: 'QR code generator', check: true },
        { text: 'Your own logo', check: true },
        { text: 'Property sorting', check: true },
      ],
      pro: [
        { text: '100 properties', check: false },
        { text: '6 languages', check: false },
        { text: '40 local recommendations', check: false },
        { text: 'QR code generator', check: true },
        { text: 'Your own logo', check: true },
        { text: 'Property sorting', check: true },
        { text: '24-hour support', check: true },
      ],
    },
    liveUpdate: 'Live update',
    cta: 'Choose plan',
    note: 'Prices include tax. Payments are handled by Paddle, and the final amount and currency are confirmed at checkout. Change or cancel your plan any time from your dashboard.',
  },

  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        q: 'What is a digital guidebook for guests (welcome book)?',
        a: 'It is a web page with everything guests need during their stay: arrival, door code, WiFi, house rules and local recommendations. It replaces the paper folder and dozens of messages. With Huespo you send it to guests as one link.',
      },
      {
        q: 'Do guests need to install an app or log in?',
        a: "No. Guests open the link in their phone's browser, like any web page. They don't create an account or download anything.",
      },
      {
        q: 'Does Huespo work with Airbnb, Booking.com and Vrbo?',
        a: "Yes. Huespo doesn't depend on the booking platform. You send the link wherever you already talk to your guest: the platform chat, WhatsApp, SMS or email.",
      },
      {
        q: "What if my property has no WiFi or I hand over keys in person?",
        a: "Huespo handles both. You can describe self check-in with a code or meeting your guest in person. Fields that don't apply to you simply aren't shown.",
      },
      {
        q: 'Who can see my property details?',
        a: 'Only people who have the link to the guide. You decide who gets it, just as you decide today who gets your door code.',
      },
      {
        q: 'What language does the guest see the guide in?',
        a: "Buttons and headings adapt automatically to the language of your guest's phone (EN, ES, DE, FR, IT, PL). Text you write yourself appears in the language you wrote it in.",
      },
      {
        q: 'How does the 14-day free trial work?',
        a: "When you choose a plan you add a card or another payment method, but the first charge is only taken after 14 days. If you cancel before then, you pay nothing.",
      },
      {
        q: 'Can I change my plan or cancel?',
        a: 'Yes, any time from your dashboard. Cancellation takes effect at the end of the period you have already paid for; until then your plan keeps working as normal.',
      },
    ],
  },

  form: {
    title: 'Have a question or want to join the beta?',
    text: 'Tell us a little about your properties. We will reply to the email address you give us.',
    name: 'Name',
    email: 'Email',
    properties: 'Number of properties',
    propertiesPlaceholder: 'Choose',
    propertiesOptions: ['1', '2–5', '6–15', '16+'],
    message: 'Message',
    optional: 'optional',
    privacyBefore: 'I accept the ',
    privacyLink: 'Privacy Policy',
    privacyAfter: '.',
    newsletter: 'I would like to receive the newsletter and Huespo updates.',
    submit: 'Send message',
    sending: 'Sending…',
    success: 'Thank you. Your message has arrived and we will reply to the email you gave us.',
    error: "Your message couldn't be sent. Check your connection and try again, or email contact@huespo.app.",
    errorEmail: 'Enter a valid email address, for example anna@example.com.',
    errorRequired: 'This field is required.',
    errorPrivacy: 'Tick the box so we can reply to your message.',
  },

  finalCta: {
    title: 'Your next welcome message could be the last one you write by hand.',
    button: 'Try 14 days free',
  },

  footer: {
    description: 'A digital guidebook for short-term rental guests.',
    product: 'Product',
    legal: 'Information',
    terms: 'Terms of Service',
    privacy: 'Privacy Policy',
    contact: 'Contact',
    company: 'Marcin Konrad Pawlak',
    location: 'Costa Adeje, Tenerife, Spain',
    copyright: '© 2026 Huespo',
  },

  thanks: {
    title: 'Thank you for your message',
    metaTitle: 'Thank you | Huespo',
    text: 'Your message has arrived. We will reply to the email address you gave us.',
    back: 'Back to the home page',
  },

  notFound: {
    title: "This page doesn't exist",
    metaTitle: 'Page not found | Huespo',
    text: 'The address may have changed or contain a typo.',
    back: 'Go to the home page',
  },
};
