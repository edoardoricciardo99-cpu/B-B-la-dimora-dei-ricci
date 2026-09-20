// HTML pre-rendered at build time: the landing and FAQ are available before JS.
import { build } from 'vite';
import { readFile, writeFile, access } from 'node:fs/promises';
await build();
await build({ build: { ssr: 'src/prerender.tsx', outDir: '.prerender', emptyOutDir: true, copyPublicDir: false } });
const { render, renderTerms, site, seo, structuredData, heroImage, variants, rooms } = await import('../.prerender/prerender.js');
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
for (const room of rooms) {
  if (!room.gallery.length) throw new Error(`La galleria ${room.id} è vuota: conserva almeno una foto.`);
  for (const url of [room.cover, ...room.gallery]) await access(`public${url}`);
}
let html = await readFile('dist/index.html', 'utf8');
html = html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`);
html = html.replace(/<title>[^<]*<\/title>/, `<title>${escape(seo.it.title)}</title>`);
html = html.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escape(seo.it.description)}" />`);
html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${site.url}/" />`);
html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(structuredData).replaceAll('<', '\\u003c')}</script>`);
for (const platform of ['og', 'twitter']) {
  for (const [field, value] of Object.entries({ title: seo.it.title, description: seo.it.description, image: `${site.url}${heroImage.src}`, url: `${site.url}/` })) {
    html = html.replace(new RegExp(`<meta (?:name|property)="${platform}:${field}"[^>]*>`), `<meta ${platform === 'og' ? 'property' : 'name'}="${platform}:${field}" content="${escape(value)}" />`);
  }
}
const set = variants[heroImage.src]?.srcSet;
html = html.replace(/<link rel="preload" as="image"[^>]*>/, `<link rel="preload" as="image" href="${heroImage.src}"${set ? ` imagesrcset="${set}" imagesizes="100vw"` : ''} fetchpriority="high" />`);
await writeFile('dist/index.html', html);
await writeFile('dist/termini.html', renderTerms());
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${site.url}/</loc></url><url><loc>${site.url}/privacy.html</loc></url><url><loc>${site.url}/termini.html</loc></url></urlset>\n`);
let privacy = await readFile('dist/privacy.html', 'utf8');
privacy = privacy.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${site.url}/privacy.html">`);
await writeFile('dist/privacy.html', privacy);
console.log('Landing pre-renderizzata, SEO e sitemap sincronizzati a', site.url);
