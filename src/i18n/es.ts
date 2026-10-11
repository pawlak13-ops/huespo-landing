// TEXTOS DE LA PÁGINA — VERSIÓN ESPAÑOLA (España). Mismas claves que pl.ts.
import type { Content } from './pl';

export const es: Content = {
  lang: 'es',
  htmlLang: 'es',

  meta: {
    title: 'Guía digital para huéspedes de Airbnb y Booking | Huespo',
    description:
      'Código de acceso, WiFi, normas de la casa y recomendaciones locales en un solo enlace. Sin app ni registro para el huésped. Prueba Huespo 14 días gratis.',
    ogImageAlt: 'Huespo: guía digital para huéspedes de alquiler vacacional',
    appDescription:
      'Guía digital (libro de bienvenida) para huéspedes de alquiler vacacional: código de acceso, WiFi, normas de la casa y recomendaciones locales en un solo enlace.',
  },

  nav: {
    skip: 'Ir al contenido',
    how: 'Cómo funciona',
    features: 'Funciones',
    pricing: 'Precios',
    faq: 'Preguntas',
    login: 'Iniciar sesión',
    cta: 'Pruébalo gratis',
    languages: 'Idioma de la página',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
  },

  langOffer: {
    text: 'Esta página está disponible en español.',
    link: 'Ver en español',
    dismiss: 'Cerrar',
  },

  hero: {
    eyebrow: 'Para anfitriones de Airbnb, Booking.com y Vrbo',
    titleBefore: 'La guía digital para huéspedes que ',
    titleHighlight: 'responde por ti',
    titleAfter: '',
    sub: 'Código de la puerta, WiFi, normas de la casa y tus sitios favoritos de la zona, en un solo enlace. Lo envías una vez y el huésped deja de escribirte a las 23:00.',
    ctaPrimary: 'Prueba 14 días gratis',
    ctaSecondary: 'Ver cómo funciona',
    micro: 'Sin permanencia. Cancelas desde el panel con un clic.',
    imageAlt: 'Viajero con mochila consultando en el móvil la guía del apartamento',
    card: {
      label: 'Tu estancia',
      name: 'Malibu Park',
      address: 'Calle Italia 10, Costa Adeje',
      door: 'Código de la puerta',
      wifi: 'WiFi',
      checkout: 'Salida',
      checkoutValue: 'hasta las 12:00',
      copy: 'Copiar',
    },
  },

  platforms: {
    label: 'Funciona reserve donde reserve el huésped:',
    items: ['Airbnb', 'Booking.com', 'Vrbo', 'reserva directa'],
  },

  problem: {
    title: 'Las mismas preguntas. Cada huésped. Cada estancia.',
    items: [
      {
        q: '¿Cuál es el código del portal?',
        time: '23:14',
        cost: 'Contestas en mitad de la cena porque el huésped está en la puerta con la maleta.',
      },
      {
        q: '¿Cuál es la contraseña del WiFi?',
        time: '23:31',
        cost: 'La copias de tus notas por décima vez este mes.',
      },
      {
        q: '¿Dónde nos recomiendas comer?',
        time: '08:02',
        cost: 'Conoces sitios estupendos, pero nunca tienes tiempo de explicarlos bien.',
      },
    ],
    closing: '¿Y si un solo mensaje bastara para toda la estancia?',
  },

  how: {
    title: 'Cómo funciona la guía digital para huéspedes',
    steps: [
      {
        title: 'Rellenas los datos del alojamiento una vez',
        text: 'Acceso, código, WiFi, normas de la casa y tus sitios de la zona. Lo haces una vez y después solo actualizas.',
      },
      {
        title: 'Envías un solo enlace',
        text: 'Lo pegas en tu mensaje de bienvenida: WhatsApp, SMS, email o el chat de Airbnb o Booking.',
      },
      {
        title: 'El huésped lo tiene todo en el móvil',
        text: 'Sin app y sin registro. Abre el enlace y ve al momento lo que antes te preguntaba.',
      },
    ],
  },

  features: {
    title: 'Todo lo que necesita el huésped, en un solo enlace',
    intro: 'Cada función responde a una pregunta que hoy te llega por mensaje.',
    lead: {
      title: 'Sin app y sin registro',
      text: 'El enlace se abre como cualquier página web, en cualquier móvil. El huésped no crea cuentas, no descarga nada y no olvida contraseñas.',
    },
    items: [
      { icon: 'copy', title: 'Código y WiFi con botón «Copiar»', text: 'El huésped copia la contraseña con un toque, sin teclearla letra a letra.' },
      { icon: 'key', title: 'Autocheck-in o entrega en persona', text: 'Caja de llaves, código o encuentro contigo. También sirve para alojamientos sin WiFi.' },
      { icon: 'map', title: 'Tu guía local', text: 'Restaurantes, playas y tiendas que de verdad recomiendas, con enlace al mapa.' },
      { icon: 'globe', title: '6 idiomas automáticos', text: 'La guía se adapta al idioma del móvil del huésped: ES, EN, DE, FR, IT y PL.' },
      { icon: 'offline', title: 'Funciona sin conexión', text: 'Si la añade a la pantalla de inicio, el huésped tiene la guía incluso sin internet.' },
      { icon: 'phone', title: 'Contacto con un toque', text: 'Teléfono, WhatsApp o email, para cuando el huésped de verdad te necesite.' },
      { icon: 'refresh', title: 'Cambios al instante', text: 'Cambias el código o la hora de salida y el huésped ve la versión nueva sin un enlace nuevo.' },
    ],
  },

  preview: {
    title: 'Esto es lo que ve tu huésped',
    text: 'Una guía real de Huespo, abierta en el móvil del huésped. Las secciones las organizas tú según tu alojamiento, por ejemplo:',
    tabs: ['Bienvenida', 'Cómo llegar', 'Aparcamiento', 'Basura y reciclaje', 'Acceso y WiFi', 'La zona'],
    imageAlt: 'Guía de Huespo del apartamento Parque Royal 219 en la pantalla de un móvil: pestañas, nombre, dirección y foto del alojamiento',
    note: 'Una guía real de la app Huespo.',
  },

  audience: {
    title: 'Para quién es Huespo',
    items: [
      { title: 'Anfitrión con un apartamento', text: 'Tienes un piso turístico y estás harto de contestar lo mismo al salir del trabajo.', plan: 'Plan Single' },
      { title: 'Gestor de varios alojamientos', text: 'Cada piso tiene su código y sus normas. Lo controlas todo desde un panel.', plan: 'Planes Compact y Premium' },
      { title: 'Empresa de gestión vacacional', text: 'Decenas de alojamientos, tu propio logo y soporte 24 h para tu equipo.', plan: 'Plan PRO' },
    ],
    link: 'Ver precios',
  },

  pricing: {
    title: 'Precios: elige tu plan',
    sub: 'Empieza con 14 días de prueba gratis. Cancela cuando quieras.',
    cycleLabel: 'Periodo de facturación',
    monthly: 'Mensual',
    yearly: 'Anual',
    yearlyHint: 'más barato',
    currencyLabel: 'Moneda',
    perMonth: '/ mes',
    perYear: '/ año',
    saving: 'Ahorras {amount} al año',
    badges: {
      single: 'Empieza aquí',
      compact: 'El más elegido',
      premium: 'Destaca',
      pro: 'Para empresas',
    },
    features: {
      single: [
        { text: '1 alojamiento', check: false },
        { text: 'Idioma del dispositivo + EN', check: false },
        { text: '1 recomendación local', check: false },
      ],
      compact: [
        { text: '10 alojamientos', check: false },
        { text: '6 idiomas', check: false },
        { text: '4 recomendaciones locales', check: false },
        { text: 'Generador de código QR', check: true },
      ],
      premium: [
        { text: '30 alojamientos', check: false },
        { text: '6 idiomas', check: false },
        { text: '12 recomendaciones locales', check: false },
        { text: 'Generador de código QR', check: true },
        { text: 'Tu propio logo', check: true },
        { text: 'Ordenar alojamientos', check: true },
      ],
      pro: [
        { text: '100 alojamientos', check: false },
        { text: '6 idiomas', check: false },
        { text: '40 recomendaciones locales', check: false },
        { text: 'Generador de código QR', check: true },
        { text: 'Tu propio logo', check: true },
        { text: 'Ordenar alojamientos', check: true },
        { text: 'Soporte 24 h', check: true },
      ],
    },
    liveUpdate: 'Actualización al instante',
    cta: 'Elegir plan',
    note: 'Precios con impuestos incluidos. Los pagos los gestiona Paddle: el importe y la moneda finales se confirman en el pago. Cambias o cancelas tu plan cuando quieras desde el panel.',
  },

  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        q: '¿Qué es una guía digital para huéspedes (libro de bienvenida)?',
        a: 'Es una página web con todo lo que el huésped necesita durante su estancia: acceso, código de la puerta, WiFi, normas de la casa y recomendaciones de la zona. Sustituye a la carpeta de papel y a decenas de mensajes. Con Huespo se la envías como un solo enlace.',
      },
      {
        q: '¿El huésped tiene que instalar una app o registrarse?',
        a: 'No. El huésped abre el enlace en el navegador del móvil, como cualquier página. No crea cuentas ni descarga nada.',
      },
      {
        q: '¿Huespo funciona con Airbnb, Booking.com y Vrbo?',
        a: 'Sí. Huespo no depende de la plataforma de reserva. Envías el enlace por donde ya hablas con el huésped: el chat de la plataforma, WhatsApp, SMS o email.',
      },
      {
        q: '¿Y si mi alojamiento no tiene WiFi o entrego las llaves en persona?',
        a: 'Huespo sirve para los dos casos. Puedes explicar un autocheck-in con código o un encuentro con el huésped. Los campos que no te afectan simplemente no se muestran.',
      },
      {
        q: '¿Quién ve los datos de mi alojamiento?',
        a: 'Solo quien tenga el enlace a la guía. Tú decides a quién se lo envías, igual que hoy decides a quién das el código de la puerta.',
      },
      {
        q: '¿En qué idioma ve la guía el huésped?',
        a: 'Los botones y los títulos se adaptan automáticamente al idioma de su móvil (ES, EN, DE, FR, IT, PL). Los textos que escribes tú se muestran en el idioma en que los escribas.',
      },
      {
        q: '¿Cómo funciona la prueba de 14 días?',
        a: 'Al elegir el plan indicas una tarjeta u otro método de pago, pero el primer cargo se hace a los 14 días. Si cancelas antes, no pagas nada.',
      },
      {
        q: '¿Puedo cambiar de plan o cancelar?',
        a: 'Sí, cuando quieras desde el panel. La cancelación se aplica al final del periodo ya pagado; hasta entonces sigues usando tu plan con normalidad.',
      },
    ],
  },

  form: {
    title: '¿Tienes una pregunta o quieres participar en las pruebas?',
    text: 'Cuéntanos algo sobre tus alojamientos. Te responderemos al email que indiques.',
    name: 'Nombre',
    email: 'Email',
    properties: 'Número de alojamientos',
    propertiesPlaceholder: 'Elige',
    propertiesOptions: ['1', '2–5', '6–15', '16+'],
    message: 'Mensaje',
    optional: 'opcional',
    privacyBefore: 'Acepto la ',
    privacyLink: 'Política de Privacidad',
    privacyAfter: '.',
    newsletter: 'Quiero recibir la newsletter y novedades de Huespo.',
    submit: 'Enviar mensaje',
    sending: 'Enviando…',
    success: 'Gracias. Hemos recibido tu mensaje y te escribiremos al email indicado.',
    error: 'No se ha podido enviar el mensaje. Revisa tu conexión e inténtalo de nuevo, o escríbenos a contact@huespo.app.',
    errorEmail: 'Escribe un email válido, por ejemplo ana@example.com.',
    errorRequired: 'Este campo es obligatorio.',
    errorPrivacy: 'Marca la casilla para que podamos responder a tu mensaje.',
  },

  finalCta: {
    title: 'Tu próximo mensaje de bienvenida puede ser el último que escribas a mano.',
    button: 'Prueba 14 días gratis',
  },

  footer: {
    description: 'Guía digital para huéspedes de alquiler vacacional.',
    product: 'Producto',
    legal: 'Información',
    terms: 'Condiciones',
    privacy: 'Política de Privacidad',
    contact: 'Contacto',
    company: 'Marcin Konrad Pawlak',
    location: 'Costa Adeje, Tenerife, España',
    copyright: '© 2026 Huespo',
  },

  thanks: {
    title: 'Gracias por tu mensaje',
    metaTitle: 'Gracias | Huespo',
    text: 'Hemos recibido tu mensaje. Te escribiremos al email que has indicado.',
    back: 'Volver a la página principal',
  },

  notFound: {
    title: 'Esta página no existe',
    metaTitle: 'Página no encontrada | Huespo',
    text: 'Puede que la dirección haya cambiado o tenga un error.',
    back: 'Ir a la página principal',
  },
};
