import type { Language } from './content';
// Positions: municipal directory / operators. Routes: Google Maps, 29 September 2026.
// Times are estimates from the property, not guarantees; see the revision report.
export const walkingRoute = (destination: string) => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent('Via Brofferio 12, Santo Stefano di Camastra, ME')}&destination=${encodeURIComponent(`${destination}, Santo Stefano di Camastra, ME`)}&travelmode=walking`;
export const practicalLabels = {
  "it": {
    "arrival": "Arrivo e partenza",
    "summer": "Check-in estate",
    "winter": "Check-in inverno",
    "checkout": "Entro le 10:00",
    "parking": "Parcheggio e biciclette",
    "bikes": "Per le biciclette è disponibile uno spazio interno dedicato. Avvisaci quando prenoti.",
    "kitchen": "Colazione e cucina",
    "breakfast": "Colazione inclusa: voucher per cappuccino e cornetto presso",
    "shared": "La cucina comune è a disposizione di tutti gli ospiti.",
    "transport": "Come arrivare e muoversi",
    "services": "Servizi vicino alla Dimora",
    "estimates": "Distanze e tempi indicativi a piedi dalla Dimora, verificati su Maps. Controlla aperture e disponibilità prima di partire.",
    "about": "circa",
    "walk": "a piedi",
    "route": "Percorso a piedi",
    "dining": "Dove mangiare",
    "restaurant": "Ristorante e pizzeria in Via Leonida 8, nelle immediate vicinanze: puoi cenare e proseguire la serata a piedi nel centro. Per aperture e disponibilità, contatta il locale.",
    "restaurantDistance": "20 m · circa 1 min a piedi",
    "intro": "Orari, parcheggio, colazione e servizi vicini. Apri ciò che ti serve per organizzare l’arrivo e orientarti nei dintorni della Dimora."
  },
  "en": {
    "arrival": "Arrival and departure",
    "summer": "Summer check-in",
    "winter": "Winter check-in",
    "checkout": "By 10:00",
    "parking": "Parking and bicycles",
    "bikes": "Dedicated indoor bicycle storage is available. Let us know when booking.",
    "kitchen": "Breakfast and kitchen",
    "breakfast": "Breakfast included: a cappuccino and croissant voucher at",
    "shared": "The shared kitchen is available to all guests.",
    "transport": "Getting here and getting around",
    "services": "Services near La Dimora",
    "estimates": "Approximate walking distances and times from La Dimora, checked on Maps. Check opening times and availability before setting out.",
    "about": "about",
    "walk": "on foot",
    "route": "Walking directions",
    "dining": "Where to eat",
    "restaurant": "Restaurant and pizzeria at Via Leonida 8, close to La Dimora: have dinner and continue your evening on foot in the old town. Contact the restaurant for opening times and availability.",
    "restaurantDistance": "20 m · about 1 min on foot",
    "intro": "Arrival times, parking, breakfast and nearby services. Open the details you need to plan your arrival and find your way around."
  },
  "de": {
    "arrival": "Ankunft und Abreise",
    "summer": "Check-in im Sommer",
    "winter": "Check-in im Winter",
    "checkout": "Bis 10:00 Uhr",
    "parking": "Parken und Fahrräder",
    "bikes": "Für Fahrräder steht ein eigener Platz im Haus zur Verfügung. Bitte bei der Buchung Bescheid geben.",
    "kitchen": "Frühstück und Küche",
    "breakfast": "Frühstück inklusive: Gutschein für Cappuccino und Croissant im",
    "shared": "Die Gemeinschaftsküche steht allen Gästen zur Verfügung.",
    "transport": "Anreise und unterwegs",
    "services": "Angebote nahe der Dimora",
    "estimates": "Ungefähre Gehzeiten und Entfernungen ab der Dimora, auf Maps geprüft. Bitte Öffnungszeiten und Verfügbarkeit vorab prüfen.",
    "about": "ca.",
    "walk": "zu Fuß",
    "route": "Fußweg anzeigen",
    "dining": "Essen gehen",
    "restaurant": "Restaurant und Pizzeria in der Via Leonida 8, ganz in der Nähe: Nach dem Essen lässt sich der Abend zu Fuß in der Altstadt fortsetzen. Öffnungszeiten und Verfügbarkeit direkt beim Lokal erfragen.",
    "restaurantDistance": "20 m · ca. 1 Min. zu Fuß",
    "intro": "Anreisezeiten, Parken, Frühstück und Angebote in der Nähe. Öffnen Sie die Informationen, die Sie für Ihre Anreise und Orientierung vor Ort brauchen."
  }
};
export const transportCopy: Record<Language, string[]> = {
  "it": [
    "La stazione Santo Stefano di Camastra–Mistretta è sulla direttrice Palermo–Messina. Dalla Dimora sono circa 400 m, 7 min a piedi in discesa: al ritorno considera la salita, soprattutto con bagagli. Scrivici con stazione e orario di arrivo per organizzare l’ultimo tratto.",
    "Aeroporto di Palermo: circa 130 km. La stazione ferroviaria dell’aeroporto è sotto il terminal; consulta Trenitalia per coincidenze e tempi del tuo viaggio.",
    "Interbus include Santo Stefano di Camastra tra le località servite. Verifica sul sito dell’operatore la tratta, la fermata e gli orari per le tue date."
  ],
  "en": [
    "Santo Stefano di Camastra–Mistretta station is on the Palermo–Messina line. From La Dimora it is about 400 m, a 7-minute downhill walk: allow for the uphill return, especially with luggage. Send us your arrival station and time to plan the last part of your journey.",
    "Palermo Airport: approximately 130 km. Its railway station is below the terminal; check Trenitalia for connections and journey times.",
    "Interbus lists Santo Stefano di Camastra among its destinations. Check your route, stop and current timetable with the operator."
  ],
  "de": [
    "Der Bahnhof Santo Stefano di Camastra–Mistretta liegt an der Strecke Palermo–Messina. Ab der Dimora sind es etwa 400 m, 7 Minuten zu Fuß bergab. Beachten Sie den Anstieg auf dem Rückweg, besonders mit Gepäck. Schreiben Sie uns Bahnhof und Ankunftszeit für die Planung des letzten Abschnitts.",
    "Flughafen Palermo: etwa 130 km. Der Bahnhof liegt unter dem Terminal; Verbindungen und Fahrzeiten finden Sie bei Trenitalia.",
    "Interbus führt Santo Stefano di Camastra unter den bedienten Orten auf. Prüfen Sie Strecke, Haltestelle und aktuelle Fahrzeiten beim Anbieter."
  ]
};
export const localServices = [
  { name: 'Chiesa San Nicolò di Bari', description: { it: 'Chiesa Madre · Piazza Matrice', en: 'Mother Church · Piazza Matrice', de: 'Pfarrkirche · Piazza Matrice' }, destination: 'Chiesa Madre, Piazza Matrice', distance: '80 m', minutes: 1 },
  { name: 'Santo Stefano di Camastra–Mistretta', description: { it: 'Stazione · percorso in discesa, ritorno in salita', en: 'Station · downhill route, uphill return', de: 'Bahnhof · bergab, Rückweg bergauf' }, destination: 'Stazione Santo Stefano di Camastra-Mistretta', distance: '400 m', minutes: 7 },
  {
    "name": "Farmacia Mangano",
    "description": {
      "it": "Farmacia · Via Vittorio Emanuele 60",
      "en": "Pharmacy · Via Vittorio Emanuele 60",
      "de": "Apotheke · Via Vittorio Emanuele 60"
    },
    "destination": "Farmacia Mangano, Via Vittorio Emanuele 60",
    "distance": "90 m",
    "minutes": 1
  },
  {
    "name": "UniCredit · ATM",
    "description": {
      "it": "Prelievi · Via della Vittoria 36–38",
      "en": "Cash withdrawals · Via della Vittoria 36–38",
      "de": "Geld abheben · Via della Vittoria 36–38"
    },
    "destination": "UniCredit, Via della Vittoria 36",
    "distance": "280 m",
    "minutes": 4
  },
  {
    "name": "Supermercati Decò",
    "description": {
      "it": "Supermercato · Via Letto Santo 1",
      "en": "Supermarket · Via Letto Santo 1",
      "de": "Supermarkt · Via Letto Santo 1"
    },
    "destination": "Supermercati Decò, Via Letto Santo 1",
    "distance": "750 m",
    "minutes": 15
  }
];

// Names and addresses checked on 3 October 2026. No unverified walking times.
// Operator menu: leggimenu.it/menu/7hpkfeqq7hp2; public listings linked below.
export const nearbyDining = [
  { name: 'Tri Quarti e Na Gazzusa', address: 'Via Umberto I, 27',
    description: { it: 'Un ristorante nel centro storico per una sosta durante la passeggiata.', en: 'A restaurant in the historic centre for a stop during your walk.', de: 'Ein Restaurant in der Altstadt für eine Pause beim Spaziergang.' },
    source: 'https://www.tripadvisor.com/Restaurant_Review-g968422-d8664684-Reviews-Tri_Quarti_e_Na_Gazzusa-Santo_Stefano_di_Camastra_Province_of_Messina_Sicily.html' },
  { name: 'Creperia & More', address: 'Via Vittoria, 59',
    description: { it: 'Crêpes dolci e salate e pizza: un’alternativa per una pausa in centro.', en: 'Sweet and savoury crêpes and pizza for a break in town.', de: 'Süße und herzhafte Crêpes sowie Pizza für eine Pause im Ort.' },
    source: 'https://www.leggimenu.it/menu/7hpkfeqq7hp2' },
  { name: 'Caffè Belvedere', address: 'Via Umberto I, 15',
    description: { it: 'Bar e pasticceria per un caffè lungo il percorso nel centro storico.', en: 'A café and pastry shop for a coffee on your walk through the historic centre.', de: 'Café und Konditorei für einen Kaffee beim Altstadtspaziergang.' },
    source: 'https://aziende.virgilio.it/ristoranti/santo-stefano-di-camastra-me/caffe-belvedere' },
];
export const diningLabels = {
  it: { note: 'Altre soste nel centro storico. Verifica aperture e disponibilità direttamente con i locali.', source: 'Informazioni sul locale' },
  en: { note: 'More stops in the historic centre. Check opening times and availability directly with each venue.', source: 'Venue information' },
  de: { note: 'Weitere Adressen in der Altstadt. Öffnungszeiten und Verfügbarkeit bitte direkt beim Lokal prüfen.', source: 'Informationen zum Lokal' },
};
