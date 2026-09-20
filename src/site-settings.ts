import type { Language } from './content';

// Dati della struttura. Il dominio definitivo va collegato a Netlify prima del rilascio.
export const site = {
  url: 'https://ladimoradeiricci.com',
  name: 'La Dimora dei Ricci',
  phone: '393286421509',
  phoneLabel: '+39 328 642 1509',
  // Numero WhatsApp preesistente: distinto dalle chiamate, in attesa di conferma.
  whatsappPhone: '393270084357',
  email: 'ladimoradeiricci@gmail.com',
  maps: 'https://www.google.com/maps/search/?api=1&query=Via%20Brofferio%2012%2C%2098077%20Santo%20Stefano%20di%20Camastra',
  logo: '/images/brand/logo-la-dimora-dei-ricci.png',
  // Da completare soltanto dopo verifica sulla scheda Google della struttura.
  socialProof: { rating: null as number | null, count: null as number | null, verifiedOn: '', platform: 'Google', url: 'https://www.google.com/search?q=La+Dimora+dei+Ricci+Santo+Stefano+di+Camastra+recensioni' },
  directBooking: {
    it: 'Sconto del 15% con prenotazione diretta · risposta entro 24 ore',
    en: '15% off when you book direct · reply within 24 hours',
    de: '15 % Rabatt bei Direktbuchung · Antwort innerhalb von 24 Stunden',
  },
};

// Tutto il crop della hero è qui: percentuali maggiori spostano il punto osservato
// verso destra/in basso. zoom=1 significa nessun ingrandimento aggiuntivo.
export const heroImage = {
  src: '/images/bnb/esterni/facciata-giorno-la-dimora-dei-ricci.webp',
  desktop: { position: '0% 48%', zoom: 1.25 },
  tablet: { position: '20% 48%', zoom: 1.15 },
  mobile: { position: '38% 50%', zoom: 1.08 },
  parallax: { enabled: true, intensity: 0.035, maxPixels: 24 },
};

export const seo: Record<Language, { title: string; description: string }> = {
  it: { title: 'B&B a Santo Stefano di Camastra | La Dimora dei Ricci', description: 'Quattro camere nel centro storico della città della ceramica. Cucina comune, deposito bici e una base per Fiumara d’Arte e Nebrodi. Prenota su WhatsApp.' },
  en: { title: 'B&B in Santo Stefano di Camastra | La Dimora dei Ricci', description: 'Four rooms in Sicily’s town of ceramics. Shared kitchen, secure bicycle storage and a base for Fiumara d’Arte and the Nebrodi. Book direct on WhatsApp.' },
  de: { title: 'B&B in Santo Stefano di Camastra | La Dimora dei Ricci', description: 'Vier Zimmer in Siziliens Keramikstadt. Gemeinschaftsküche, sichere Fahrradaufbewahrung und Ausflüge zur Fiumara d’Arte und in die Nebrodi. Direkt buchen.' },
};

export const structuredData = {
  '@context': 'https://schema.org', '@type': 'BedAndBreakfast',
  '@id': `${site.url}/#bedandbreakfast`, name: site.name, url: `${site.url}/`,
  image: `${site.url}${heroImage.src}`, logo: `${site.url}${site.logo}`,
  description: seo.it.description, telephone: `+${site.phone}`, email: site.email,
  address: { '@type': 'PostalAddress', streetAddress: 'Via Brofferio 12', postalCode: '98077', addressLocality: 'Santo Stefano di Camastra', addressRegion: 'ME', addressCountry: 'IT' },
  // Nessun checkinTime unico: la fascia cambia tra estate e inverno.
  numberOfRooms: 4, checkoutTime: '10:00', hasMap: site.maps,
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Deposito sicuro per biciclette', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Voucher colazione incluso presso Bar Da Franco: un cornetto e un cappuccino', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Deposito bagagli previo avviso', value: true },
  ],
  identifier: [{ '@type': 'PropertyValue', name: 'CIR', value: '19083091C110715' }, { '@type': 'PropertyValue', name: 'CIN', value: 'IT083091C18EYCBOMV' }],
};
