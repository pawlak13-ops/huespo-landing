// Mapa strony dla Google — generowana automatycznie z listy języków.
import { LANGS } from '../i18n';
import { SITE_URL, LANG_PATHS } from '../config/seo';

export function GET() {
  const url = (l: keyof typeof LANG_PATHS) => new URL(LANG_PATHS[l], SITE_URL).href;
  const alternates = LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${url(l)}"/>`)
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${url('pl')}"/>`)
    .join('\n');
  const lastmod = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LANGS.map((l) => `  <url>
    <loc>${url(l)}</loc>
    <lastmod>${lastmod}</lastmod>
${alternates}
  </url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
