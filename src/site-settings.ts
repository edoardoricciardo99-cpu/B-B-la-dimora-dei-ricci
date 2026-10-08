import type { Language } from './content';

// Dati della struttura. Il dominio definitivo va collegato a Netlify prima del rilascio.
export const site = {
  url: 'https://ladimoradeiricci.com',
  name: 'La Dimora dei Ricci',
  phone: '393286421509',
  phoneLabel: '+39 328 642 1509',
  // Numero WhatsApp confermato dal proprietario; distinto dalle chiamate.
  whatsappPhone: '393270084357',
  whatsappLabel: '+39 327 008 4357',
  email: 'ladimoradeiricci@gmail.com',
  maps: 'https://www.google.com/maps/place/La+Dimora+dei+Ricci/@38.0158658,14.3495412,17z/data=!4m9!3m8!1s0x1316d91e41224d4b:0x14fc56377ad322ea!5m2!4m1!1i2!8m2!3d38.0158658!4d14.3495412!16s%2Fg%2F11rsqls5vp',
  logo: '/images/brand/logo-la-dimora-dei-ricci.webp',
  // Rating indicato dal proprietario e verificato sulla scheda Google Maps esatta il 30 settembre 2026; nessun conteggio né markup recensioni.
  socialProof: { rating: 4.9 as number | null, count: null as number | null, verifiedOn: '2026-09-30', platform: 'Google', url: 'https://www.google.com/maps/place/La+Dimora+dei+Ricci/@38.0158658,14.3495412,17z/data=!4m9!3m8!1s0x1316d91e41224d4b:0x14fc56377ad322ea!5m2!4m1!1i2!8m2!3d38.0158658!4d14.3495412!16s%2Fg%2F11rsqls5vp' },
  directBooking: {
    it: 'Prenotazione diretta: -8%',
    en: 'Book direct: -8%',
    de: 'Direktbuchung: -8%',
  },
};

export const bookingCta: Record<Language, string> = {
  "it": "Prenota ora - 8% di sconto",
  "en": "Book now - 8% off",
  "de": "Jetzt buchen - 8% Rabatt"
};

// Tutto il crop della hero è qui: percentuali maggiori spostano il punto osservato
// verso destra/in basso. zoom=1 significa nessun ingrandimento aggiuntivo.
export const heroImage = {
  src: '/images/bnb/esterni/facciata-giorno-la-dimora-dei-ricci.webp',
  desktop: { position: '35% 60%', zoom: 1.22 },
  tablet: { position: '30% 62%', zoom: 1.08 },
  mobile: { position: '52% 60%', zoom: 1.08 },
  parallax: { enabled: true, intensity: 0.16, maxPixels: 64, mobileIntensity: 0.17, mobileMaxPixels: 52 },
};

export const seo: Record<Language, { title: string; description: string }> = {
  it: { title: 'B&B Santo Stefano di Camastra | La Dimora dei Ricci', description: 'B&B nel centro storico di Santo Stefano di Camastra con 4 camere, bagno privato e colazione inclusa. Prenotazione diretta -8%. Scopri Fiumara d’Arte e Nebrodi.' },
  en: { title: 'B&B in Santo Stefano di Camastra | La Dimora dei Ricci', description: 'Four rooms in Sicily’s town of ceramics. Shared kitchen, secure bicycle storage and a base for Fiumara d’Arte and the Nebrodi. Book direct on WhatsApp.' },
  de: { title: 'B&B in Santo Stefano di Camastra | La Dimora dei Ricci', description: 'Vier Zimmer in Siziliens Keramikstadt. Gemeinschaftsküche, sichere Fahrradaufbewahrung und Ausflüge zur Fiumara d’Arte und in die Nebrodi. Direkt buchen.' },
};

export const structuredData = {
  '@context': 'https://schema.org', '@type': 'BedAndBreakfast',
  '@id': `${site.url}/#bedandbreakfast`, name: site.name, url: `${site.url}/`,
  image: `${site.url}${heroImage.src}`, logo: `${site.url}${site.logo}`,
  contactPoint: [{ '@type': 'ContactPoint', contactType: 'Chiamate / prenotazioni', telephone: `+${site.phone}` }, { '@type': 'ContactPoint', contactType: 'WhatsApp', telephone: `+${site.whatsappPhone}`, url: `https://wa.me/${site.whatsappPhone}` }],
  description: seo.it.description, telephone: `+${site.phone}`, email: site.email,
  address: { '@type': 'PostalAddress', streetAddress: 'Via Brofferio 12', postalCode: '98077', addressLocality: 'Santo Stefano di Camastra', addressRegion: 'ME', addressCountry: 'IT' },
  // Nessun checkinTime unico: la fascia cambia tra estate e inverno.
  numberOfRooms: 4, checkoutTime: '10:00', hasMap: site.maps,
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Bagno privato in tutte le camere', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Cucina condivisa disponibile per tutti gli ospiti', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Deposito sicuro per biciclette', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Voucher colazione incluso presso Bar Da Franco: un cornetto e un cappuccino', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Deposito bagagli previo avviso', value: true },
  ],
  identifier: [{ '@type': 'PropertyValue', name: 'CIR', value: '19083091C110715' }, { '@type': 'PropertyValue', name: 'CIN', value: 'IT083091C18EYCBOMV' }],
};

export const socialSeo: Record<Language, { title: string; description: string }> = {
  it: { title: 'La Dimora dei Ricci | B&B a Santo Stefano di Camastra', description: 'Quattro camere nel centro storico della città della ceramica. Colazione inclusa, prenotazione diretta -8% e una posizione ideale per scoprire Fiumara d’Arte, Gole di Tiberio e Nebrodi.' },
  en: { title: 'La Dimora dei Ricci | B&B in Santo Stefano di Camastra', description: 'Four rooms in the historic centre of Sicily’s ceramics town. Breakfast included, 8% off direct bookings and days out at Fiumara d’Arte, the Tiberio Gorges and the Nebrodi.' },
  de: { title: 'La Dimora dei Ricci | B&B in Santo Stefano di Camastra', description: 'Vier Zimmer in der Altstadt der Keramikstadt. Frühstück inklusive, 8% Rabatt bei Direktbuchung und Ausflüge zur Fiumara d’Arte, Tiberio-Schlucht und in die Nebrodi.' },
};
