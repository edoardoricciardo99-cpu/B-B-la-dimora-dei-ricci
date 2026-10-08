// HTML pre-rendered at build time: the landing and FAQ are available before JS.
import { build } from 'vite';
import { readFile, writeFile, access, mkdir } from 'node:fs/promises';
await build();
await build({ build: { ssr: 'src/prerender.tsx', outDir: '.prerender', emptyOutDir: true, copyPublicDir: false } });
const { render, renderGuide, guideCopy, guidePublished, guidePath, renderTerms, site, seo, socialSeo, structuredData, heroImage, variants, rooms } = await import('../.prerender/prerender.js');
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
for (const room of rooms) {
  if (!room.gallery.length) throw new Error(`La galleria ${room.id} è vuota: conserva almeno una foto.`);
  for (const url of [room.cover, ...room.gallery]) await access(`public${url}`);
}
const template = await readFile('dist/index.html', 'utf8');
let html = template;
html = html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`);
html = html.replace(/<title>[^<]*<\/title>/, `<title>${escape(seo.it.title)}</title>`);
html = html.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escape(seo.it.description)}" />`);
html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${site.url}/" />`);
html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(structuredData).replaceAll('<', '\\u003c')}</script>`);
for (const platform of ['og', 'twitter']) {
  for (const [field, value] of Object.entries({ title: socialSeo.it.title, description: socialSeo.it.description, image: `${site.url}${heroImage.src}`, url: `${site.url}/` })) {
    html = html.replace(new RegExp(`<meta (?:name|property)="${platform}:${field}"[^>]*>`), `<meta ${platform === 'og' ? 'property' : 'name'}="${platform}:${field}" content="${escape(value)}" />`);
  }
}
const set = variants[heroImage.src]?.srcSet;
html = html.replace(/<link rel="preload" as="image"[^>]*>/, `<link rel="preload" as="image" href="${heroImage.src}"${set ? ` imagesrcset="${set}" imagesizes="(max-width: 767px) 1100px, 100vw"` : ''} fetchpriority="high" />`);
await writeFile('dist/index.html', html);
let guideHtml = template.replace('<div id="root"></div>', `<div id="root">${renderGuide()}</div>`)
  .replace(/<title>[^<]*<\/title>/, `<title>${escape(guideCopy.it.title)} | La Dimora dei Ricci</title>`)
  .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escape(guideCopy.it.description)}" />`)
  .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${site.url}${guidePath}" />`)
  .replace(/<link rel="preload" as="image"[^>]*>/, '')
  .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebPage', name: guideCopy.it.title, url: site.url + guidePath, description: guideCopy.it.description, inLanguage: 'it', isPartOf: { '@type': 'WebSite', url: site.url + '/', name: site.name } }).replaceAll('<', '\\u003c')}</script>`);
for (const platform of ['og', 'twitter']) {
  for (const [field, value] of Object.entries({ title: guideCopy.it.title, description: guideCopy.it.description, url: site.url + guidePath, image: site.url + '/images/bnb/territorio/panorama-santo-stefano-di-camastra.webp' })) {
    guideHtml = guideHtml.replace(new RegExp(`<meta (?:name|property)="${platform}:${field}"[^>]*>`), `<meta ${platform === 'og' ? 'property' : 'name'}="${platform}:${field}" content="${escape(value)}" />`);
  }
}
guideHtml = guideHtml.replace(/<meta property="og:image:alt"[^>]*>/, '<meta property="og:image:alt" content="Panorama di Santo Stefano di Camastra" />');
// Include the route CSS in the static document: no layout shift while its JS chunk loads.
const manifest = JSON.parse(await readFile('dist/.vite/manifest.json', 'utf8'));
for (const file of manifest['src/GuidePage.tsx']?.css ?? []) guideHtml = guideHtml.replace('</head>', `<link rel="stylesheet" href="/${file}" /></head>`);
if (!guidePublished) guideHtml = guideHtml.replace('</head>', '<meta name="robots" content="noindex,follow" /></head>');
await mkdir(`dist${guidePath}`, { recursive: true });
await writeFile(`dist${guidePath}index.html`, guideHtml);
await writeFile('dist/termini.html', renderTerms());
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${site.url}/</loc></url>${guidePublished ? `<url><loc>${site.url}${guidePath}</loc></url>` : ''}<url><loc>${site.url}/privacy.html</loc></url><url><loc>${site.url}/termini.html</loc></url></urlset>\n`);
let privacy = await readFile('dist/privacy.html', 'utf8');
privacy = privacy.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${site.url}/privacy.html">`);
await writeFile('dist/privacy.html', privacy);
console.log('Landing pre-renderizzata, SEO e sitemap sincronizzati a', site.url);
