import { copy, type Language } from './content';
import { site } from './site-settings';

type Localized = Record<Language, string>;
export type GuestLink = { url: string; label: Localized };
export const breakfastMaps = 'https://www.google.com/maps/place/Bar+da+Franco+-+pasticceria...gelateria...rosticceria/@38.0143965,14.351627,17z/data=!3m1!4b1!4m6!3m5!1s0x1316d934203eebcb:0x6f2f0073b600c62c!8m2!3d38.0143965!4d14.351627!16s%2Fg%2F11f4y52ykv';

type GuestCard = { id: string; icon?: string; title: Localized; text: Localized; links?: GuestLink[] };
export const mapsSearch = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${query}, Santo Stefano di Camastra, ME`)}`;
const walkingRoute = (destination: string) => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent('Via Brofferio 12, Santo Stefano di Camastra, ME')}&destination=${encodeURIComponent(`${destination}, Santo Stefano di Camastra, ME`)}&travelmode=walking`;

export const breakfastNote: Localized = {
  it: 'Colazione inclusa in tutte le camere: voucher per un cornetto e un cappuccino al Bar Da Franco.',
  en: 'Breakfast included with every room: a voucher for one croissant and one cappuccino at Bar Da Franco.',
  de: 'Frühstück bei allen Zimmern inklusive: ein Gutschein für ein Croissant und einen Cappuccino im Bar Da Franco.',
};

export const guestCopy = {
  it: { eyebrow: 'Informazioni utili', title: 'Il soggiorno, senza dubbi', intro: 'Orari di arrivo e partenza, indicazioni per l’auto e piccoli dettagli da organizzare prima del viaggio.', mobility: 'Muoversi in paese e lungo la costa', external: 'Servizi esterni, non gestiti dal B&B. Verifica disponibilità, condizioni e tariffe con il fornitore.', places: 'Dove mangiare e servizi nei dintorni', placesIntro: 'Una breve selezione nel centro di Santo Stefano. Apri il percorso a piedi dalla Dimora e controlla gli orari prima di partire.', walk: 'Percorso a piedi', terms: 'Termini e Condizioni', call: 'Chiamaci', details: 'Come funziona la colazione' },
  en: { eyebrow: 'Useful information', title: 'Your stay, made clear', intro: 'Arrival and departure times, parking directions and the details to arrange before your trip.', mobility: 'Getting around town and along the coast', external: 'External services, not operated by the B&B. Check availability, terms and fares with the provider.', places: 'Places to eat and local services', placesIntro: 'A short selection in central Santo Stefano. Open walking directions from La Dimora and check opening hours before setting out.', walk: 'Walking directions', terms: 'Terms and Conditions', call: 'Call us', details: 'About breakfast' },
  de: { eyebrow: 'Gut zu wissen', title: 'Alles für Ihren Aufenthalt', intro: 'An- und Abreisezeiten, Hinweise zum Parken und Details für Ihre Reiseplanung.', mobility: 'Unterwegs im Ort und an der Küste', external: 'Externe Angebote, nicht vom B&B betrieben. Verfügbarkeit, Bedingungen und Preise bitte beim Anbieter prüfen.', places: 'Essen gehen und Angebote in der Nähe', placesIntro: 'Eine kleine Auswahl im Zentrum von Santo Stefano. Öffnen Sie den Fußweg ab der Dimora und prüfen Sie die Öffnungszeiten vor dem Besuch.', walk: 'Fußweg anzeigen', terms: 'Nutzungsbedingungen', call: 'Rufen Sie uns an', details: 'Informationen zum Frühstück' },
};

// Sources and remaining verification limits: REPORT-AGGIORNAMENTO-2026-09-19.md.
// Breakfast/luggage/parking arrangements supplied by the property; no reserved parking implied.
export const kitchenAccess = {"it": "La cucina è direttamente collegata alle camere Ortensia e Tulipano; gli ospiti di Glicine e Papavero possono accedervi comodamente tramite una chiave dedicata fornita dalla struttura.", "en": "The shared kitchen is directly connected to Ortensia and Tulipano. Guests staying in Glicine and Papavero can access it with a dedicated key supplied by the property.", "de": "Die Gemeinschaftsküche ist direkt mit Ortensia und Tulipano verbunden. Gäste von Glicine und Papavero erhalten von uns einen eigenen Schlüssel für den Zugang."};
export const childrenNote = {"it": "I bambini fino a 3 anni soggiornano gratuitamente.", "en": "Children up to 3 years old stay free.", "de": "Kinder bis einschließlich 3 Jahre übernachten kostenlos."};
export const stayInfo: GuestCard[] = [
  { id: 'check-in', icon: 'clock', title: { it: 'Check-in', en: 'Check-in', de: 'Check-in' }, text: { it: `Estate ${copy.it.stay.summerIn}. Inverno ${copy.it.stay.winterIn}.`, en: `Summer ${copy.en.stay.summerIn}. Winter ${copy.en.stay.winterIn}.`, de: `Sommer ${copy.de.stay.summerIn}. Winter ${copy.de.stay.winterIn}.` } },
  { id: 'check-out', icon: 'clock', title: { it: 'Check-out', en: 'Check-out', de: 'Check-out' }, text: { it: 'Entro le 10:00, tutto l’anno.', en: 'By 10:00, all year round.', de: 'Ganzjährig bis 10:00 Uhr.' } },
  { id: 'colazione', icon: 'coffee', title: { it: 'Colazione inclusa', en: 'Breakfast included', de: 'Frühstück inklusive' }, text: {
    it: 'Tutte le camere includono un voucher per un cornetto e un cappuccino presso il Bar Da Franco, in Via Umberto I 63/65. Il bar è un’attività indipendente dalla struttura.',
    en: 'Every room includes a voucher for one croissant and one cappuccino at Bar Da Franco, Via Umberto I 63/65. The café is independently operated, separate from the B&B.',
    de: 'Bei allen Zimmern ist ein Gutschein für ein Croissant und einen Cappuccino im Bar Da Franco, Via Umberto I 63/65, inklusive. Das Café ist unabhängig vom B&B.'
  }, links: [{ url: breakfastMaps, label: { it: 'Bar Da Franco su Maps', en: 'Bar Da Franco on Maps', de: 'Bar Da Franco auf Maps' } }] },
  { id: 'parcheggi', icon: 'parking', title: { it: 'Parcheggio', en: 'Parking', de: 'Parken' }, text: {
    it: 'Parcheggi pubblici in Piazza Rosario e vicino al Municipio, in Via Luigi Famularo 35. Posti non riservati: controlla la segnaletica. Per mezzi alti, scrivici prima dell’arrivo.',
    en: 'Public parking is available in Piazza Rosario, near La Dimora. Another option is the area by the town hall at Via Luigi Famularo 35. Spaces are public and not reserved: always check signs and restrictions. Contact us before arriving with a tall vehicle to check access.',
    de: 'In der Piazza Rosario nahe der Dimora gibt es öffentliche Parkplätze. Eine weitere Möglichkeit ist die Umgebung des Rathauses, Via Luigi Famularo 35. Die Plätze sind öffentlich und nicht reserviert: Beachten Sie Beschilderung und Einschränkungen. Bei hohen Fahrzeugen klären Sie die Zufahrt bitte vor der Anreise mit uns.'
  }, links: [
    { url: mapsSearch('Parcheggio Piazza Rosario'), label: { it: 'Piazza Rosario su Maps', en: 'Piazza Rosario on Maps', de: 'Piazza Rosario auf Maps' } },
    { url: mapsSearch('Municipio, Via Luigi Famularo 35'), label: { it: 'Zona Municipio su Maps', en: 'Town hall area on Maps', de: 'Rathaus auf Maps' } },
  ] },
  { id: 'bagagli', icon: 'bag', title: { it: 'Deposito bagagli', en: 'Luggage storage', de: 'Gepäckaufbewahrung' }, text: {
    it: 'Vuoi lasciare le valigie e fare ancora un giro? Il deposito bagagli è disponibile previo avviso. Contattaci in anticipo per concordare consegna e ritiro.',
    en: 'Would you like to leave your bags and explore a little longer? Luggage storage is available with advance notice. Contact us beforehand to arrange drop-off and collection.',
    de: 'Möchten Sie Ihr Gepäck abstellen und noch etwas unternehmen? Gepäckaufbewahrung ist nach vorheriger Ankündigung möglich. Vereinbaren Sie Abgabe und Abholung bitte im Voraus.'
  } },
  { id: 'cucina-comune', icon: 'kitchen', title: { it: 'Cucina comune', en: 'Shared kitchen', de: 'Gemeinschaftsküche' }, text: kitchenAccess },
  { id: 'deposito-bici', icon: 'bike', title: { it: 'Deposito biciclette', en: 'Bicycle storage', de: 'Fahrradaufbewahrung' }, text: { it: 'Deposito sicuro per biciclette. Avvisaci quando prenoti.', en: 'Secure bicycle storage. Let us know when booking.', de: 'Sichere Fahrradaufbewahrung. Bitte bei der Buchung Bescheid geben.' } },
  { id: 'bambini', icon: 'family', title: { it: 'Bambini fino a 3 anni gratis', en: 'Children up to 3 stay free', de: 'Kinder bis 3 Jahre kostenlos' }, text: childrenNote },
  { id: 'animali', icon: 'pet', title: { it: 'Animali su richiesta', en: 'Pets on request', de: 'Haustiere auf Anfrage' }, text: { it: 'Animali ammessi gratis su richiesta.', en: 'Pets welcome free of charge on request.', de: 'Haustiere auf Anfrage kostenlos erlaubt.' } },
  { id: 'piano-terra', icon: 'home', title: { it: 'Camere al piano terra', en: 'Ground-floor rooms', de: 'Zimmer im Erdgeschoss' }, text: { it: 'Glicine e Papavero: piano terra con un piccolo gradino all’ingresso.', en: 'Glicine and Papavero: ground floor, with a small step at the entrances.', de: 'Glicine und Papavero: im Erdgeschoss, mit einer kleinen Stufe am Eingang.' } },
  { id: 'aeroporto', icon: 'plane', title: { it: 'Aeroporto di Palermo', en: 'Palermo Airport', de: 'Flughafen Palermo' }, text: { it: 'Aeroporto di Palermo: circa 130 km.', en: 'Palermo Airport: approximately 130 km.', de: 'Flughafen Palermo: etwa 130 km.' } },
  { id: 'contatti', icon: 'phone', title: { it: 'Contatti', en: 'Contact us', de: 'Kontakt' }, text: { it: 'Per il soggiorno e le indicazioni di arrivo.', en: 'For your stay and arrival directions.', de: 'Für Ihren Aufenthalt und die Anreise.' }, links: [
    { url: `tel:+${site.phone}`, label: { it: `Chiamate: ${site.phoneLabel}`, en: `Calls: ${site.phoneLabel}`, de: `Anrufe: ${site.phoneLabel}` } },
    { url: `https://wa.me/${site.whatsappPhone}`, label: { it: 'WhatsApp: +39 327 008 4357', en: 'WhatsApp: +39 327 008 4357', de: 'WhatsApp: +39 327 008 4357' } },
    { url: `mailto:${site.email}`, label: { it: site.email, en: site.email, de: site.email } },
  ] },

];

export const localPlaces = [
  { name: 'Chi Ciauru', type: { it: 'Ristorante vicino alla Dimora', en: 'Restaurant near La Dimora', de: 'Restaurant nahe der Dimora' }, address: 'Via Leonida 8' },
  { name: 'Trattoria Da Giannino', type: { it: 'Trattoria', en: 'Restaurant', de: 'Restaurant' }, address: 'Via Garibaldi 14' },
  { name: 'Rossodivino', type: { it: 'Ristorante e pizzeria', en: 'Restaurant and pizzeria', de: 'Restaurant und Pizzeria' }, address: 'Via Garibaldi 6' },
  { name: 'Bar Da Franco', type: { it: 'Bar · colazione con voucher', en: 'Café · breakfast voucher', de: 'Café · Frühstücksgutschein' }, address: 'Via Umberto I 63/65' },
  { name: 'Farmacia Mangano', type: { it: 'Farmacia', en: 'Pharmacy', de: 'Apotheke' }, address: 'Via Vittorio Emanuele 60' },
  { name: 'Chiesa di San Nicolò di Bari', type: { it: 'Chiesa Madre', en: 'Mother Church', de: 'Pfarrkirche' }, address: 'Piazza Matrice' },
].map(place => ({ ...place, url: walkingRoute(`${place.name}, ${place.address}`) }));

type Benefit = { icon: string; title: Localized; text: Localized; link?: GuestLink };
export const stayBenefits: Benefit[] = [
  { icon: 'home', title: { it: 'Nel cuore della città delle ceramiche', en: 'In the heart of the ceramics town', de: 'Im Herzen der Keramikstadt' }, text: {
    it: 'La Dimora si trova nel centro storico di Santo Stefano di Camastra, tra botteghe, piazze e locali raggiungibili a piedi. Una posizione comoda per vivere la città senza rinunciare alla tranquillità, con parcheggi pubblici nelle vicinanze e uno spazio sicuro per le biciclette.',
    en: 'La Dimora is in the historic centre of Santo Stefano di Camastra, with workshops, squares and places to eat within walking distance. Enjoy town life and a peaceful stay, with public parking nearby and secure bicycle storage.',
    de: 'Die Dimora liegt in der Altstadt von Santo Stefano di Camastra. Werkstätten, Plätze und Lokale sind zu Fuß erreichbar. Genießen Sie den Ort und einen ruhigen Aufenthalt, mit öffentlichen Parkplätzen in der Nähe und sicherem Platz für Fahrräder.'
  } },
  { icon: 'comfort', title: { it: 'Comfort come a casa', en: 'Feel at home', de: 'Wie zu Hause' }, text: {
    it: 'Camere con bagno privato, climatizzazione, Wi-Fi, TV e cucina comune. La colazione è inclusa: ogni mattina potrai gustare cappuccino e cornetto presso il Bar Da Franco grazie a un voucher fornito dalla struttura.',
    en: 'Rooms with private bathrooms, air conditioning, Wi-Fi, TV and a shared kitchen. Breakfast is included: enjoy a cappuccino and croissant every morning at Bar Da Franco with a voucher supplied by the property.',
    de: 'Zimmer mit eigenem Bad, Klimaanlage, WLAN, TV und Gemeinschaftsküche. Das Frühstück ist inklusive: Jeden Morgen genießen Sie Cappuccino und Croissant im Bar Da Franco mit einem Gutschein der Unterkunft.'
  }, link: { url: breakfastMaps, label: { it: 'Bar Da Franco', en: 'Bar Da Franco', de: 'Bar Da Franco' } } },
  { icon: 'family', title: { it: 'Un soggiorno semplice, per tutti', en: 'A stay that suits you', de: 'Ein unkomplizierter Aufenthalt für alle' }, text: {
    it: 'I bambini fino a 3 anni soggiornano gratuitamente e gli animali sono ammessi gratis su richiesta. Sono disponibili camere al piano terra, oltre a una camera con terrazzo privato e al servizio di deposito bagagli su richiesta.',
    en: 'Children up to 3 stay free and pets are welcome free of charge on request. Ground-floor rooms are available, along with a room with a private terrace and luggage storage on request.',
    de: 'Kinder bis 3 Jahre übernachten kostenlos, Haustiere sind auf Anfrage ebenfalls kostenlos willkommen. Es gibt Zimmer im Erdgeschoss, ein Zimmer mit privater Terrasse und Gepäckaufbewahrung auf Anfrage.'
  } },
];

export const practicalDetails = stayInfo.filter(card => ['parcheggi', 'bagagli', 'cucina-comune', 'aeroporto'].includes(card.id));

export const restaurantMaps = "https://www.google.com/maps/place/Pizzeria+Chi+Ciauru/@38.0158507,14.3472323,17z/data=!3m1!4b1!4m6!3m5!1s0x1316d9474e855cdb:0xab79655f9fb9ba05!8m2!3d38.0158507!4d14.3498072!16s%2Fg%2F11jv25b4r6";
