import { bookingCta } from './site-settings';
export type Language = 'it' | 'en' | 'de';

export const languages: { code: Language; label: string; name: string }[] = [
  { code: 'it', label: 'IT', name: 'Italiano' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
];

export const copy = {
  it: {
    skip: 'Vai al contenuto', menuOpen: 'Apri il menu', menuClose: 'Chiudi il menu', language: 'Lingua',
    nav: { rooms: 'Camere', home: 'La Dimora', services: 'Servizi', nearby: 'Dintorni', reviews: 'Recensioni', location: 'Dove siamo' },
    whatsappShort: bookingCta.it, headerMap: 'Via Brofferio 12 · Maps ↗', headerMapLabel: 'Apri Via Brofferio 12 in Google Maps',
    heroEyebrow: 'B&B nel centro storico di Santo Stefano di Camastra',
    heroTitle: 'La Dimora dei Ricci',
    heroText: "Quattro camere con bagno privato e colazione inclusa, tra le botteghe e le piazze della città della ceramica. Il centro a piedi, la Sicilia da scoprire.",
    availability: bookingCta.it, discoverRooms: 'Scopri le camere', directNote: 'Prenotazione diretta · risposta entro 24 ore', benefitsLabel: 'I vantaggi della Dimora',
    trust: ['Nel centro storico', 'Prenotazione diretta conveniente', 'Una base per esplorare il territorio'],
    roomsEyebrow: 'Le nostre camere', roomsTitle: 'Quattro camere, ognuna con il suo carattere',
    roomsIntro: "Quattro camere diverse, accomunate dalla stessa attenzione per il comfort. Tutte dispongono di bagno privato, climatizzazione, Wi-Fi e TV.",
    stay: { eyebrow: 'Orari del soggiorno', winter: 'Periodo invernale', summer: 'Periodo estivo', checkIn: 'Check-in', checkOut: 'Check-out', winterIn: '15:00–22:00', summerIn: '15:00–23:00', out: '10:00' },
    viewRoom: 'Guarda la camera', askAvailability: bookingCta.it, guests: 'ospiti', upTo: 'Fino a',
    homeEyebrow: 'La Dimora', homeTitle: "Il tuo punto d’appoggio nel cuore della Sicilia più autentica",
    homeText1: "La Dimora dei Ricci è un B&B nel centro di Santo Stefano di Camastra, città della ceramica. La nostra struttura dispone di quattro camere accoglienti, tutte con bagno privato e colazione inclusa, oltre a una cucina comune. Da qui puoi vivere il centro storico a piedi oppure partire alla scoperta della Fiumara d’Arte, delle Gole di Tiberio, del Parco dei Nebrodi e dei tanti tesori nascosti della costa nord della Sicilia.",
    homeText2: 'Siamo nel cuore di Santo Stefano di Camastra: botteghe di ceramica, piazze e locali si raggiungono a piedi. All’arrivo ti aiutiamo a orientarti e a scegliere cosa visitare nei dintorni.',
    servicesEyebrow: 'Perché soggiornare qui', servicesTitle: 'Tutto ciò che serve per un soggiorno comodo',
    arrivalNote: 'Se hai esigenze particolari per l’arrivo, contattaci prima del soggiorno.',
    nearbyEyebrow: 'Dintorni', nearbyTitle: 'Cosa vedere a Santo Stefano di Camastra e dintorni',
    nearbyText: "Una passeggiata tra le ceramiche, una giornata alle Gole di Tiberio o tra le opere della Fiumara d’Arte. Tra costa ed entroterra, scegli le tappe che ti incuriosiscono.",
    reviewsEyebrow: 'Dicono di noi', reviewsTitle: "Pulizia, posizione e accoglienza siciliana", reviewsText: "Sono alcuni dei dettagli che gli ospiti ricordano più spesso del loro soggiorno.",
    googleReviews: 'Leggi le recensioni su Google',
    locationEyebrow: 'Dove siamo', locationTitle: 'Nel cuore di Santo Stefano di Camastra',
    locationText: 'Via Brofferio 12, 98077 Santo Stefano di Camastra (ME). Il centro si visita comodamente a piedi e nelle vicinanze sono disponibili parcheggi pubblici.',
    map: 'Apri in Google Maps', arrival: 'Per indicazioni sul parcheggio o per un arrivo particolare, scrivici prima del soggiorno.',
    finalTitle: 'Stai organizzando il tuo soggiorno?', finalText: 'Scrivici su WhatsApp per verificare disponibilità e tariffa per le tue date.', finalButton: bookingCta.it,
    footerAddress: 'Via Brofferio 12 · Santo Stefano di Camastra (ME)', privacy: 'Privacy Policy', external: 'Link esterno',
    alts: { hero: 'Facciata di giorno della Dimora dei Ricci nel centro storico di Santo Stefano di Camastra', kitchen: 'Cucina comune con brocca e bicchieri in ceramica siciliana', facade: 'La Dimora dei Ricci nel centro storico di Santo Stefano di Camastra', panorama: 'Panorama di Santo Stefano di Camastra affacciato sulla costa tirrenica', nebrodi: 'Stagno circondato dal bosco nel Parco dei Nebrodi' },
    modalClose: 'Chiudi', modalPrevious: 'Fotografia precedente', modalNext: 'Fotografia successiva', modalImage: 'Fotografia', modalOf: 'di', modalThumbnails: 'Seleziona una fotografia',
  },
  en: {
    skip: 'Skip to content', menuOpen: 'Open menu', menuClose: 'Close menu', language: 'Language',
    nav: { rooms: 'Rooms', home: 'The house', services: 'Services', nearby: 'Nearby', reviews: 'Reviews', location: 'Location' },
    whatsappShort: bookingCta.en, headerMap: 'Via Brofferio 12 · Maps ↗', headerMapLabel: 'Open Via Brofferio 12 in Google Maps',
    heroEyebrow: 'B&B in the historic centre of Santo Stefano di Camastra',
    heroTitle: 'La Dimora dei Ricci',
    heroText: "Four rooms with private bathrooms and breakfast included, among the workshops and squares of Sicily’s ceramics town. Explore the centre on foot and discover the area.",
    availability: bookingCta.en, discoverRooms: 'Discover the rooms', directNote: 'Book direct · reply within 24 hours', benefitsLabel: 'Why stay at La Dimora',
    trust: ['In the historic centre', 'Better value when you book direct', 'A base for exploring the area'],
    roomsEyebrow: 'Our rooms', roomsTitle: 'Four rooms, each with its own character',
    roomsIntro: "Four different rooms, with the same care for your comfort. Every room has a private bathroom, air conditioning, Wi-Fi and TV.",
    stay: { eyebrow: 'Stay times', winter: 'Winter period', summer: 'Summer period', checkIn: 'Check-in', checkOut: 'Check-out', winterIn: '15:00–22:00', summerIn: '15:00–23:00', out: '10:00' },
    viewRoom: 'View the room', askAvailability: bookingCta.en, guests: 'guests', upTo: 'Up to',
    homeEyebrow: 'The house', homeTitle: "Your home for exploring an authentic corner of Sicily",
    homeText1: "La Dimora dei Ricci is a B&B in the centre of Santo Stefano di Camastra, Sicily’s ceramics town. Our four welcoming rooms all have a private bathroom and breakfast included, with a shared kitchen available to guests. Explore the old town on foot or head out to Fiumara d’Arte, the Tiberio Gorges, the Nebrodi Park and the quieter corners of Sicily’s northern coast.",
    homeText2: 'We are in the heart of Santo Stefano di Camastra: ceramic workshops, squares and local restaurants are all within walking distance. On arrival, we are happy to help you plan what to see nearby.',
    servicesEyebrow: 'Why stay here', servicesTitle: 'Everything you need for a comfortable stay',
    arrivalNote: 'If you have particular arrival needs, please contact us before your stay.',
    nearbyEyebrow: 'Nearby', nearbyTitle: 'What to see in Santo Stefano di Camastra and nearby',
    nearbyText: "A walk among ceramics, a day at the Tiberio Gorges or the artworks of Fiumara d’Arte. Choose the places that interest you, from the coast to the inland towns.",
    reviewsEyebrow: 'Guest comments', reviewsTitle: "Cleanliness, location and Sicilian hospitality", reviewsText: "Some of the details our guests remember most about their stay.",
    googleReviews: 'Read reviews on Google',
    locationEyebrow: 'Location', locationTitle: 'In the heart of Santo Stefano di Camastra',
    locationText: 'Via Brofferio 12, 98077 Santo Stefano di Camastra (ME), Italy. The centre is easy to explore on foot and public parking is available nearby.',
    map: 'Open in Google Maps', arrival: 'For parking directions or particular arrival needs, message us before your stay.',
    finalTitle: 'Planning your stay?', finalText: 'Message us on WhatsApp to check availability and the rate for your dates.', finalButton: bookingCta.en,
    footerAddress: 'Via Brofferio 12 · Santo Stefano di Camastra (ME), Italy', privacy: 'Privacy Policy', external: 'External link',
    alts: { hero: 'Daytime façade of La Dimora dei Ricci in Santo Stefano di Camastra historic centre', kitchen: 'Shared kitchen with a Sicilian ceramic pitcher and cups', facade: 'La Dimora dei Ricci in Santo Stefano di Camastra historic centre', panorama: 'Panorama of Santo Stefano di Camastra overlooking the Tyrrhenian coast', nebrodi: 'Woodland pond in the Nebrodi Park' },
    modalClose: 'Close', modalPrevious: 'Previous photo', modalNext: 'Next photo', modalImage: 'Photo', modalOf: 'of', modalThumbnails: 'Choose a photo',
  },
  de: {
    skip: 'Zum Inhalt springen', menuOpen: 'Menü öffnen', menuClose: 'Menü schließen', language: 'Sprache',
    nav: { rooms: 'Zimmer', home: 'Das Haus', services: 'Ausstattung', nearby: 'Umgebung', reviews: 'Bewertungen', location: 'Anreise' },
    whatsappShort: bookingCta.de, headerMap: 'Via Brofferio 12 · Maps ↗', headerMapLabel: 'Via Brofferio 12 in Google Maps öffnen',
    heroEyebrow: 'B&B im historischen Zentrum von Santo Stefano di Camastra',
    heroTitle: 'La Dimora dei Ricci',
    heroText: "Vier Zimmer mit eigenem Bad und Frühstück, zwischen Werkstätten und Plätzen der Keramikstadt. Entdecken Sie die Altstadt zu Fuß und Siziliens Umgebung.",
    availability: bookingCta.de, discoverRooms: 'Zimmer entdecken', directNote: 'Direkt buchen · Antwort innerhalb von 24 Stunden', benefitsLabel: 'Vorteile der Unterkunft',
    trust: ['Im historischen Zentrum', 'Günstiger direkt buchen', 'Guter Ausgangspunkt für Ausflüge'],
    roomsEyebrow: 'Unsere Zimmer', roomsTitle: 'Vier Zimmer mit eigenem Charakter',
    roomsIntro: "Vier unterschiedliche Zimmer mit gleicher Sorgfalt für Ihren Komfort. Alle verfügen über ein eigenes Bad, Klimaanlage, WLAN und TV.",
    stay: { eyebrow: 'Aufenthaltszeiten', winter: 'Winterzeit', summer: 'Sommerzeit', checkIn: 'Check-in', checkOut: 'Check-out', winterIn: '15:00–22:00 Uhr', summerIn: '15:00–23:00 Uhr', out: '10:00 Uhr' },
    viewRoom: 'Zimmer ansehen', askAvailability: bookingCta.de, guests: 'Gäste', upTo: 'Bis zu',
    homeEyebrow: 'Das Haus', homeTitle: "Ihr Zuhause für Entdeckungen im ursprünglichen Sizilien",
    homeText1: "La Dimora dei Ricci ist ein B&B im Zentrum der Keramikstadt Santo Stefano di Camastra. Unsere vier gemütlichen Zimmer verfügen alle über ein eigenes Bad und Frühstück; außerdem steht den Gästen eine Gemeinschaftsküche zur Verfügung. Erkunden Sie die Altstadt zu Fuß oder entdecken Sie die Fiumara d’Arte, die Tiberio-Schlucht, den Nebrodi-Park und die verborgenen Schätze der Nordküste Siziliens.",
    homeText2: 'Wir liegen im Herzen von Santo Stefano di Camastra. Keramikwerkstätten, Plätze und Lokale sind zu Fuß erreichbar. Bei der Ankunft helfen wir Ihnen gern bei der Planung Ihrer Ausflüge.',
    servicesEyebrow: 'Darum lohnt sich der Aufenthalt', servicesTitle: 'Alles für einen angenehmen Aufenthalt',
    arrivalNote: 'Bei besonderen Anreisewünschen kontaktieren Sie uns bitte vor Ihrem Aufenthalt.',
    nearbyEyebrow: 'Umgebung', nearbyTitle: 'Sehenswertes in Santo Stefano di Camastra und Umgebung',
    nearbyText: "Ein Spaziergang zwischen Keramikwerkstätten, ein Tag an der Tiberio-Schlucht oder bei den Kunstwerken der Fiumara d’Arte. Wählen Sie Ihre Ausflüge zwischen Küste und Hinterland.",
    reviewsEyebrow: 'Gästestimmen', reviewsTitle: "Sauberkeit, Lage und sizilianische Gastfreundschaft", reviewsText: "Diese Details bleiben unseren Gästen besonders in Erinnerung.",
    googleReviews: 'Bewertungen bei Google lesen',
    locationEyebrow: 'Anreise', locationTitle: 'Im Herzen von Santo Stefano di Camastra',
    locationText: 'Via Brofferio 12, 98077 Santo Stefano di Camastra (ME), Italien. Das Zentrum lässt sich bequem zu Fuß erkunden; öffentliche Parkplätze befinden sich in der Nähe.',
    map: 'In Google Maps öffnen', arrival: 'Für Parkhinweise oder besondere Anreisewünsche schreiben Sie uns bitte vor Ihrem Aufenthalt.',
    finalTitle: 'Planen Sie Ihren Aufenthalt?', finalText: 'Schreiben Sie uns per WhatsApp, um Verfügbarkeit und Preis für Ihre Reisedaten zu prüfen.', finalButton: bookingCta.de,
    footerAddress: 'Via Brofferio 12 · Santo Stefano di Camastra (ME), Italien', privacy: 'Datenschutzerklärung', external: 'Externer Link',
    alts: { hero: 'Fassade der La Dimora dei Ricci bei Tag im historischen Zentrum von Santo Stefano di Camastra', kitchen: 'Gemeinschaftsküche mit sizilianischem Keramikkrug und Bechern', facade: 'La Dimora dei Ricci im historischen Zentrum von Santo Stefano di Camastra', panorama: 'Panorama von Santo Stefano di Camastra über der tyrrhenischen Küste', nebrodi: 'Waldteich im Nebrodi-Park' },
    modalClose: 'Schließen', modalPrevious: 'Vorheriges Foto', modalNext: 'Nächstes Foto', modalImage: 'Foto', modalOf: 'von', modalThumbnails: 'Foto auswählen',
  },
} as const;

type Localized = Record<Language, string>;
type LocalizedList = Record<Language, string[]>;

export interface Room {
  id: string;
  name: Localized;
  summary: Localized;
  description: Localized;
  capacity: number;
  capacityNote?: Localized;
  features: LocalizedList;
  cover: string;
  gallery: string[];
}

export const rooms: Room[] = [
  {
    id: 'glicine', capacity: 4,
    name: { it: 'Camera Glicine', en: 'Glicine Room', de: 'Zimmer Glicine' },
    summary: { it: 'La soluzione più spaziosa, pensata per famiglie e piccoli gruppi.', en: 'Our most spacious option, designed for families and small groups.', de: 'Unsere geräumigste Option für Familien und kleine Gruppen.' },
    description: {"it": "Fino a 4 ospiti, al piano terra con un piccolo gradino all’ingresso. La cucina comune è disponibile con una chiave dedicata fornita dalla struttura.", "en": "Up to 4 guests, on the ground floor with a small step at the entrance. A dedicated key supplied by the property gives access to the shared kitchen.", "de": "Bis zu 4 Gäste, im Erdgeschoss mit einer kleinen Stufe am Eingang. Für die Gemeinschaftsküche erhalten Sie einen eigenen Schlüssel."},
    features: {"it": ["Bagno privato", "Piano terra · piccolo gradino all’ingresso", "Climatizzazione", "Wi-Fi", "TV", "Accesso alla cucina comune tramite chiave dedicata"], "en": ["Private bathroom", "Ground floor · small entrance step", "Air conditioning", "Wi-Fi", "TV", "Shared kitchen · dedicated key"], "de": ["Eigenes Bad", "Erdgeschoss · kleine Stufe am Eingang", "Klimaanlage", "WLAN", "TV", "Gemeinschaftsküche · eigener Schlüssel"]},
    cover: '/images/bnb/camere/glicine/camera-glicine-santo-stefano-di-camastra-01.webp',
    gallery: [
      '/images/bnb/camere/glicine/camera-glicine-santo-stefano-di-camastra-01.webp',
      '/images/bnb/camere/glicine/camera-glicine-santo-stefano-di-camastra-02.webp',
      '/images/bnb/camere/glicine/camera-glicine-santo-stefano-di-camastra-04.webp',
      '/images/bnb/camere/glicine/bagno-glicine-vista-completa.webp',
      '/images/bnb/camere/glicine/bagno-glicine-doccia.webp',
    ],
  },
  {
    id: 'papavero', capacity: 2,
    name: { it: 'Camera Papavero', en: 'Papavero Room', de: 'Zimmer Papavero' },
    summary: { it: 'Una camera doppia raccolta e confortevole, adatta a coppie o amici.', en: 'A comfortable double room, suitable for couples or friends.', de: 'Ein gemütliches Doppelzimmer für Paare oder Freunde.' },
    description: {"it": "Fino a 2 ospiti, al piano terra con un piccolo gradino all’ingresso. La cucina comune è disponibile con una chiave dedicata fornita dalla struttura.", "en": "Up to 2 guests, on the ground floor with a small step at the entrance. A dedicated key supplied by the property gives access to the shared kitchen.", "de": "Bis zu 2 Gäste, im Erdgeschoss mit einer kleinen Stufe am Eingang. Für die Gemeinschaftsküche erhalten Sie einen eigenen Schlüssel."},
    features: {"it": ["Bagno privato", "Piano terra · piccolo gradino all’ingresso", "Climatizzazione", "Wi-Fi", "TV", "Accesso alla cucina comune tramite chiave dedicata"], "en": ["Private bathroom", "Ground floor · small entrance step", "Air conditioning", "Wi-Fi", "TV", "Shared kitchen · dedicated key"], "de": ["Eigenes Bad", "Erdgeschoss · kleine Stufe am Eingang", "Klimaanlage", "WLAN", "TV", "Gemeinschaftsküche · eigener Schlüssel"]},
    cover: '/images/bnb/camere/papavero/camera-papavero-santo-stefano-di-camastra-01.webp',
    gallery: [
      '/images/bnb/camere/papavero/camera-papavero-santo-stefano-di-camastra-01.webp',
      '/images/bnb/camere/papavero/camera-papavero-santo-stefano-di-camastra-02.webp',
      '/images/bnb/camere/papavero/bagno-papavero-doccia-e-lavabo.webp',
      '/images/bnb/camere/papavero/bagno-papavero-vista-completa.webp',
    ],
  },
  {
    id: 'tulipano', capacity: 3,
    capacityNote: { it: '2 ospiti + 1 posto aggiungibile', en: '2 + 1 extra bed', de: '2 + 1 Zustellbett' },
    name: { it: 'Camera Tulipano', en: 'Tulipano Room', de: 'Zimmer Tulipano' },
    summary: { it: 'Una camera doppia flessibile, con possibilità di aggiungere un terzo letto.', en: 'A flexible double room with the option of adding a third bed.', de: 'Ein flexibles Doppelzimmer mit der Möglichkeit für ein drittes Bett.' },
    description: {"it": "Una camera per 2 ospiti, con un posto aggiungibile, bagno privato e collegamento diretto alla cucina condivisa.", "en": "A room for 2 guests with an optional extra bed, a private bathroom and direct access to the shared kitchen.", "de": "Ein Zimmer für 2 Gäste mit einem möglichen Zustellbett, eigenem Bad und direktem Zugang zur Gemeinschaftsküche."},
    features: {"it": ["Bagno privato", "2 ospiti + 1 posto aggiungibile", "Climatizzazione", "Wi-Fi", "TV", "Accesso diretto alla cucina comune"], "en": ["Private bathroom", "2 guests + 1 optional extra bed", "Air conditioning", "Wi-Fi", "TV", "Direct access to shared kitchen"], "de": ["Eigenes Bad", "2 Gäste + 1 mögliches Zustellbett", "Klimaanlage", "WLAN", "TV", "Direkter Zugang zur Gemeinschaftsküche"]},
    cover: '/images/bnb/camere/tulipano/camera-tulipano-santo-stefano-di-camastra-01.webp',
    gallery: [
      '/images/bnb/camere/tulipano/camera-tulipano-santo-stefano-di-camastra-01.webp',
      '/images/bnb/camere/tulipano/camera-tulipano-santo-stefano-di-camastra-04.webp',
      '/images/bnb/camere/tulipano/bagno-camera-tulipano-04.webp',
      '/images/bnb/camere/tulipano/bagno-camera-tulipano-01.webp',
    ],
  },
  {
    id: 'ortensia', capacity: 3,
    name: { it: 'Camera Ortensia', en: 'Ortensia Room', de: 'Zimmer Ortensia' },
    summary: { it: 'Tre posti letto e un ampio terrazzo privato per godersi uno spazio all’aperto.', en: 'Three sleeping places and a large private terrace for time outdoors.', de: 'Drei Schlafplätze und eine große private Terrasse für Zeit im Freien.' },
    description: {"it": "Fino a 3 ospiti, un ampio terrazzo privato e collegamento diretto alla cucina condivisa. Animali ammessi gratis su richiesta.", "en": "Up to 3 guests, a spacious private terrace and direct access to the shared kitchen. Pets welcome free of charge on request.", "de": "Bis zu 3 Gäste, eine große private Terrasse und direkter Zugang zur Gemeinschaftsküche. Haustiere auf Anfrage kostenlos."},
    features: {"it": ["Bagno privato", "Ampio terrazzo privato", "Climatizzazione", "Wi-Fi", "TV", "Accesso diretto alla cucina comune"], "en": ["Private bathroom", "Spacious private terrace", "Air conditioning", "Wi-Fi", "TV", "Direct access to shared kitchen"], "de": ["Eigenes Bad", "Große private Terrasse", "Klimaanlage", "WLAN", "TV", "Direkter Zugang zur Gemeinschaftsküche"]},
    cover: '/images/bnb/camere/ortensia/camera-ortensia-santo-stefano-di-camastra-02.webp',
    gallery: [
      '/images/bnb/camere/ortensia/camera-ortensia-santo-stefano-di-camastra-02.webp',
      '/images/bnb/camere/ortensia/camera-ortensia-santo-stefano-di-camastra-03.webp',
      '/images/bnb/camere/ortensia/bagno-camera-ortensia-01.webp',
      '/images/bnb/esterni/terrazza-serale-la-dimora-dei-ricci-01.webp',
    ],
  },
];

export const services = [
  { image: '/images/bnb/esterni/facciata-giorno-la-dimora-dei-ricci.webp', alt: { it: 'Facciata della Dimora dei Ricci nel centro storico', en: 'Façade of La Dimora dei Ricci in the historic centre', de: 'Fassade der La Dimora dei Ricci in der Altstadt' }, it: ['Posizione centrale', 'Centro storico, botteghe e locali sono raggiungibili a piedi.'], en: ['Central location', 'The historic centre, workshops and restaurants are within walking distance.'], de: ['Zentrale Lage', 'Altstadt, Werkstätten und Lokale sind zu Fuß erreichbar.'] },
  { image: '/images/bnb/esterni/ingresso-notte-la-dimora-dei-ricci.webp', alt: { it: 'Ingresso della Dimora dei Ricci e strada circostante di sera', en: 'Entrance to La Dimora dei Ricci and the surrounding street in the evening', de: 'Eingang der La Dimora dei Ricci und umliegende Straße am Abend' }, it: ['Parcheggio nelle vicinanze', 'Sono disponibili parcheggi pubblici nei pressi della struttura; chiedici l’indicazione più comoda.'], en: ['Parking nearby', 'Public parking is available near the property; ask us for the most convenient option.'], de: ['Parken in der Nähe', 'Öffentliche Parkplätze befinden sich in der Nähe; fragen Sie uns nach der besten Möglichkeit.'] },
  { image: '/images/bnb/spazi-comuni/cucina-comune-la-dimora-dei-ricci-03.webp', alt: { it: 'Cucina comune della Dimora dei Ricci', en: 'Shared kitchen at La Dimora dei Ricci', de: 'Gemeinschaftsküche der La Dimora dei Ricci' }, it: ['Cucina comune', 'Uno spazio condiviso attrezzato per caffè, colazione e piccole esigenze quotidiane.'], en: ['Shared kitchen', 'An equipped shared space for coffee, breakfast and simple daily needs.'], de: ['Gemeinschaftsküche', 'Ein ausgestatteter Gemeinschaftsraum für Kaffee, Frühstück und kleine Alltagsbedürfnisse.'] },
  { image: '/images/bnb/camere/glicine/camera-glicine-santo-stefano-di-camastra-04.webp', alt: { it: 'Dettaglio della Camera Glicine, climatizzata e con bagno privato', en: 'Detail of the air-conditioned Glicine Room with private bathroom', de: 'Detail des klimatisierten Zimmers Glicine mit eigenem Bad' }, it: ['Comfort essenziali', 'Bagno privato, climatizzazione, Wi-Fi e TV in tutte le camere.'], en: ['Essential comforts', 'Private bathroom, air conditioning, Wi-Fi and TV in every room.'], de: ['Wichtiger Komfort', 'Eigenes Bad, Klimaanlage, WLAN und TV in jedem Zimmer.'] },
  { image: '/images/bnb/dettagli/frase-accoglienza-la-dimora-dei-ricci.webp', alt: { it: 'Dettaglio di accoglienza con ceramiche siciliane nella Dimora dei Ricci', en: 'Welcome detail with Sicilian ceramics at La Dimora dei Ricci', de: 'Willkommensdetail mit sizilianischer Keramik in der La Dimora dei Ricci' }, it: ['In famiglia', 'I bambini fino a 3 anni soggiornano gratuitamente. Ti aiutiamo a scegliere la camera per la tua famiglia.'], en: ['With your family', 'Children up to 3 years old stay free. We can help you choose a room for your family.'], de: ['Mit der Familie', 'Kinder bis einschließlich 3 Jahre übernachten kostenlos. Wir helfen Ihnen bei der Zimmerwahl.'] },
  { image: '/images/bnb/esperienze/cicloturismo-costa-siciliana.webp', alt: { it: 'Illustrazione fotografica di un ciclista sulla costa siciliana', en: 'Photographic illustration of a cyclist on the Sicilian coast', de: 'Fotografische Illustration eines Radfahrers an der sizilianischen Küste' }, it: ['In viaggio con la bici', 'Deposito sicuro per biciclette disponibile. Avvisaci quando prenoti, poi scegli le tue tappe tra costa ed entroterra.'], en: ['Travelling by bicycle', 'Secure bicycle storage available. Let us know when booking, then plan your days along the coast or inland.'], de: ['Mit dem Fahrrad unterwegs', 'Sichere Fahrradaufbewahrung vorhanden. Geben Sie bei der Buchung Bescheid und planen Sie Ihre Touren an der Küste oder im Landesinneren.'] },
];

export const nearby = [
  { title: { it: 'Santo Stefano di Camastra', en: 'Santo Stefano di Camastra', de: 'Santo Stefano di Camastra' }, text: { it: 'Centro storico, botteghe e tradizione della ceramica siciliana.', en: 'Historic streets, workshops and the local tradition of Sicilian ceramics.', de: 'Altstadt, Werkstätten und die örtliche Tradition sizilianischer Keramik.' } },
  { title: { it: 'Fiumara d’Arte', en: 'Fiumara d’Arte', de: 'Fiumara d’Arte' }, text: { it: 'Un itinerario di arte contemporanea diffuso nel territorio.', en: 'A contemporary-art route spread across the surrounding landscape.', de: 'Eine Route zeitgenössischer Kunst in der umliegenden Landschaft.' } },
  { title: { it: 'Costa tirrenica', en: 'Tyrrhenian coast', de: 'Tyrrhenische Küste' }, text: { it: 'Spiagge, piccoli centri costieri e paesaggi da esplorare con calma.', en: 'Beaches, small coastal towns and landscapes to explore at your own pace.', de: 'Strände, kleine Küstenorte und Landschaften für entspannte Ausflüge.' } },
  { title: { it: 'Cefalù', en: 'Cefalù', de: 'Cefalù' }, text: { it: 'Una delle mete più conosciute della costa settentrionale, da inserire in un itinerario più ampio.', en: 'One of northern Sicily’s best-known destinations, suited to a wider itinerary.', de: 'Eines der bekanntesten Ziele an Siziliens Nordküste – ideal für einen größeren Ausflug.' } },
  { title: { it: 'Parco dei Nebrodi', en: 'Nebrodi Park', de: 'Nebrodi-Park' }, text: { it: 'Natura, sentieri e paesi dell’entroterra per cambiare ritmo rispetto alla costa.', en: 'Nature, trails and inland villages for a change of pace from the coast.', de: 'Natur, Wanderwege und Dörfer im Landesinneren als Kontrast zur Küste.' } },
  { title: { it: 'Borghi e itinerari in bici', en: 'Villages and cycling routes', de: 'Dörfer und Radrouten' }, text: { it: 'Percorsi da costruire in base al tempo disponibile e al proprio livello di allenamento.', en: 'Routes to plan according to the time available and your fitness level.', de: 'Routen, die sich an Zeit und persönliche Kondition anpassen lassen.' } },
];

export const reviews = [
  { name: 'Giacomina', quote: { it: '“Stanza grande, comoda e con un terrazzo a disposizione. La pulizia impeccabile. Accoglienza e disponibilità dei proprietari, con suggerimenti su cosa visitare nei dintorni.”', en: '“A large, comfortable room with a terrace. Impeccably clean. The owners were welcoming and helpful, and suggested places to visit nearby.”', de: '„Ein großes, bequemes Zimmer mit Terrasse. Tadellose Sauberkeit. Die Gastgeber waren herzlich und hilfsbereit und gaben Tipps für Ausflüge.“' } },
  { name: 'Nerea', quote: { it: '“Zona piacevole e sicura, parcheggio facile nelle vicinanze. Pulito, nuovo, comodo, con aria condizionata. Host molto piacevole.”', en: '“A pleasant and safe area, with easy parking nearby. Clean, new and comfortable, with air conditioning. A very kind host.”', de: '„Eine angenehme und sichere Gegend, einfaches Parken in der Nähe. Sauber, neu und komfortabel, mit Klimaanlage. Sehr freundliche Gastgeber.“' } },
  { name: 'Bruce', quote: { it: '“Buon rapporto qualità-prezzo, pulito, confortevole e centrale. Il proprietario era cordiale e disponibile.”', en: '“Good value, clean, comfortable and central. The owner was friendly and helpful.”', de: '„Gutes Preis-Leistungs-Verhältnis, sauber, komfortabel und zentral. Der Gastgeber war freundlich und hilfsbereit.“' } },
  { name: 'Carla Reale', quote: { it: '“Ottima posizione, disponibilità, gentilezza e pulizia. Situato al centro di Santo Stefano di Camastra.”', en: '“Excellent location, availability, kindness and cleanliness. Right in the centre of Santo Stefano di Camastra.”', de: '„Ausgezeichnete Lage, Hilfsbereitschaft, Freundlichkeit und Sauberkeit. Direkt im Zentrum von Santo Stefano di Camastra.“' } },
];
