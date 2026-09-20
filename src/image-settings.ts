import type { Language } from './content';
export interface ImageSettings {
  alt?: Partial<Record<Language, string>>;
  caption?: Partial<Record<Language, string>>;
  desktop?: string;
  tablet?: string;
  mobile?: string;
}
// Chiave = percorso della foto. Aggiungi qui un oggetto per qualsiasi immagine
// di camere, servizi o dintorni. Nessuna modifica al CSS è necessaria.
export const imageSettings: Record<string, ImageSettings> = {
  '/images/bnb/spazi-comuni/cucina-comune-con-ceramiche-siciliane.webp': { desktop: '65% center', tablet: '65% center', mobile: '65% center' },
  '/images/bnb/territorio/panorama-santo-stefano-di-camastra.webp': { desktop: 'center 48%', tablet: 'center 48%', mobile: 'center 48%' },
  '/images/bnb/esperienze/cicloturismo-costa-siciliana.webp': { desktop: 'center', mobile: '65% center', alt: { it: 'Illustrazione fotografica di un ciclista sulla costa siciliana', en: 'Photographic illustration of a cyclist on the Sicilian coast', de: 'Fotografische Illustration eines Radfahrers an der sizilianischen Küste' } },
};

export const nearbyImages = [
  { src: '/images/bnb/territorio/panorama-santo-stefano-di-camastra.webp', alt: { it: 'Panorama di Santo Stefano di Camastra affacciato sulla costa tirrenica', en: 'Santo Stefano di Camastra overlooking the Tyrrhenian coast', de: 'Santo Stefano di Camastra über der tyrrhenischen Küste' }, credit: 'Giovanni.prinzi', url: 'https://commons.wikimedia.org/wiki/File:Santo_S_panorama.JPG', license: 'CC BY-SA 4.0' },
  { src: '/images/bnb/territorio/stagno-parco-dei-nebrodi.webp', alt: { it: 'Stagno e bosco nel Parco dei Nebrodi', en: 'Woodland pond in the Nebrodi Park', de: 'Waldteich im Nebrodi-Park' }, credit: 'Davide Mauro', url: 'https://commons.wikimedia.org/wiki/File:Stagno_Nebrodi.jpg', license: 'CC BY-SA 4.0' },
];

export function roomPhotoAlt(src: string, name: string, language: Language) {
  const custom = imageSettings[src]?.alt?.[language];
  if (custom) return custom;
  const detail = src.includes('/bagno-') ? { it: 'Bagno privato', en: 'Private bathroom', de: 'Eigenes Bad' }
    : src.includes('/terrazza-') ? { it: 'Terrazza di sera', en: 'Terrace in the evening', de: 'Terrasse am Abend' }
    : src.includes('letto-castello') ? { it: 'Letto a castello', en: 'Bunk bed', de: 'Etagenbett' }
    : src.includes('/chiavi-') ? { it: 'Chiavi della camera', en: 'Room keys', de: 'Zimmerschlüssel' }
    : src.includes('/targa-') ? { it: 'Targa della camera', en: 'Room sign', de: 'Zimmerschild' }
    : { it: 'Vista degli interni', en: 'Interior view', de: 'Innenansicht' };
  return `${detail[language]} — ${name}`;
}
