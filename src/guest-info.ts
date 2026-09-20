import type { Language } from './content';

type Localized = Record<Language, string>;
export type GuestLink = { url: string; label: Localized };
type GuestCard = { id: string; title: Localized; text: Localized; links?: GuestLink[] };
export const mapsSearch = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${query}, Santo Stefano di Camastra, ME`)}`;
const walkingRoute = (destination: string) => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent('Via Brofferio 12, Santo Stefano di Camastra, ME')}&destination=${encodeURIComponent(`${destination}, Santo Stefano di Camastra, ME`)}&travelmode=walking`;

export const breakfastNote: Localized = {
  it: 'Colazione inclusa in tutte le camere: voucher per un cornetto e un cappuccino al Bar Da Franco.',
  en: 'Breakfast included with every room: a voucher for one croissant and one cappuccino at Bar Da Franco.',
  de: 'Frühstück bei allen Zimmern inklusive: ein Gutschein für ein Croissant und einen Cappuccino im Bar Da Franco.',
};

export const guestCopy = {
  it: { eyebrow: 'Informazioni utili', title: 'Il soggiorno, senza dubbi', intro: 'Dalla colazione al parcheggio: i dettagli da conoscere prima di arrivare.', mobility: 'Muoversi in paese e lungo la costa', external: 'Servizi esterni, non gestiti dal B&B. Verifica disponibilità, condizioni e tariffe con il fornitore.', places: 'Dove mangiare e servizi nei dintorni', placesIntro: 'Una breve selezione nel centro di Santo Stefano. Apri il percorso a piedi dalla Dimora e controlla gli orari prima di partire.', walk: 'Percorso a piedi', terms: 'Termini e Condizioni', call: 'Chiamaci', details: 'Come funziona la colazione' },
  en: { eyebrow: 'Useful information', title: 'Your stay, made clear', intro: 'Breakfast, parking and the practical details to know before you arrive.', mobility: 'Getting around town and along the coast', external: 'External services, not operated by the B&B. Check availability, terms and fares with the provider.', places: 'Places to eat and local services', placesIntro: 'A short selection in central Santo Stefano. Open walking directions from La Dimora and check opening hours before setting out.', walk: 'Walking directions', terms: 'Terms and Conditions', call: 'Call us', details: 'About breakfast' },
  de: { eyebrow: 'Gut zu wissen', title: 'Alles für Ihren Aufenthalt', intro: 'Frühstück, Parken und die wichtigsten Informationen vor der Anreise.', mobility: 'Unterwegs im Ort und an der Küste', external: 'Externe Angebote, nicht vom B&B betrieben. Verfügbarkeit, Bedingungen und Preise bitte beim Anbieter prüfen.', places: 'Essen gehen und Angebote in der Nähe', placesIntro: 'Eine kleine Auswahl im Zentrum von Santo Stefano. Öffnen Sie den Fußweg ab der Dimora und prüfen Sie die Öffnungszeiten vor dem Besuch.', walk: 'Fußweg anzeigen', terms: 'Nutzungsbedingungen', call: 'Rufen Sie uns an', details: 'Informationen zum Frühstück' },
};

// Sources and remaining verification limits: REPORT-AGGIORNAMENTO-2026-09-19.md.
// Breakfast/luggage/parking arrangements supplied by the property; no reserved parking implied.
export const stayInfo: GuestCard[] = [
  { id: 'colazione', title: { it: 'Colazione inclusa', en: 'Breakfast included', de: 'Frühstück inklusive' }, text: {
    it: 'Tutte le camere includono un voucher per un cornetto e un cappuccino presso il Bar Da Franco, in Via Umberto I 63/65. Il bar è un’attività indipendente dalla struttura.',
    en: 'Every room includes a voucher for one croissant and one cappuccino at Bar Da Franco, Via Umberto I 63/65. The café is independently operated, separate from the B&B.',
    de: 'Bei allen Zimmern ist ein Gutschein für ein Croissant und einen Cappuccino im Bar Da Franco, Via Umberto I 63/65, inklusive. Das Café ist unabhängig vom B&B.'
  }, links: [{ url: mapsSearch('Bar Da Franco, Via Umberto I 63/65'), label: { it: 'Bar Da Franco su Maps', en: 'Bar Da Franco on Maps', de: 'Bar Da Franco auf Maps' } }] },
  { id: 'parcheggi', title: { it: 'Parcheggio', en: 'Parking', de: 'Parken' }, text: {
    it: 'In Piazza Rosario, vicino alla Dimora, trovi parcheggi liberi. Un’altra possibilità è la zona del Municipio, in Via Luigi Famularo 35. I posti sono pubblici e non riservati: verifica sempre segnaletica e limitazioni. Con un mezzo alto, contattaci prima dell’arrivo per valutare l’accesso.',
    en: 'Free parking is available in Piazza Rosario, near La Dimora. Another option is the area by the town hall at Via Luigi Famularo 35. Spaces are public and not reserved: always check signs and restrictions. Contact us before arriving with a tall vehicle to check access.',
    de: 'In der Piazza Rosario nahe der Dimora gibt es kostenlose Parkplätze. Eine weitere Möglichkeit ist die Umgebung des Rathauses, Via Luigi Famularo 35. Die Plätze sind öffentlich und nicht reserviert: Beachten Sie Beschilderung und Einschränkungen. Bei hohen Fahrzeugen klären Sie die Zufahrt bitte vor der Anreise mit uns.'
  }, links: [
    { url: mapsSearch('Parcheggio Piazza Rosario'), label: { it: 'Piazza Rosario su Maps', en: 'Piazza Rosario on Maps', de: 'Piazza Rosario auf Maps' } },
    { url: mapsSearch('Municipio, Via Luigi Famularo 35'), label: { it: 'Zona Municipio su Maps', en: 'Town hall area on Maps', de: 'Rathaus auf Maps' } },
  ] },
  { id: 'bagagli', title: { it: 'Deposito bagagli', en: 'Luggage storage', de: 'Gepäckaufbewahrung' }, text: {
    it: 'Vuoi lasciare le valigie e fare ancora un giro? Il deposito bagagli è disponibile previo avviso. Contattaci in anticipo per concordare consegna e ritiro.',
    en: 'Would you like to leave your bags and explore a little longer? Luggage storage is available with advance notice. Contact us beforehand to arrange drop-off and collection.',
    de: 'Möchten Sie Ihr Gepäck abstellen und noch etwas unternehmen? Gepäckaufbewahrung ist nach vorheriger Ankündigung möglich. Vereinbaren Sie Abgabe und Abholung bitte im Voraus.'
  } },
];

export const mobilityInfo: GuestCard[] = [
  { id: 'bike-sharing', title: { it: 'Belvederebike · youMove', en: 'Belvederebike · youMove', de: 'Belvederebike · youMove' }, text: {
    it: 'Il progetto di bike sharing realizzato con il Comune prevede 8 biciclette a pedalata assistita e 2 stazioni, a Porta Palermo e Porta Messina. Con l’app youMove per iOS e Android puoi registrarti, controllare la disponibilità e sbloccare una bici. Consulta nell’app le condizioni aggiornate prima dell’uso.',
    en: 'The bike-sharing project developed with the municipality provides for 8 e-bikes and 2 stations, at Porta Palermo and Porta Messina. Use the youMove app for iOS or Android to register, check availability and unlock a bike. Check the current terms in the app before riding.',
    de: 'Das mit der Gemeinde entwickelte Bike-Sharing-Projekt sieht 8 E-Bikes und 2 Stationen an der Porta Palermo und Porta Messina vor. Mit der youMove-App für iOS und Android können Sie sich registrieren, die Verfügbarkeit prüfen und ein Rad entsperren. Prüfen Sie vor der Nutzung die aktuellen Bedingungen in der App.'
  }, links: [{ url: 'https://www.youmove.cloud/news/bike-sharing-santo-stefano-di-camastra/', label: { it: 'Scopri il bike sharing', en: 'Explore bike sharing', de: 'Mehr zum Bike-Sharing' } }] },
  { id: 'bus-cefalu', title: { it: 'In autobus verso Cefalù', en: 'Travelling to Cefalù by bus', de: 'Mit dem Bus nach Cefalù' }, text: {
    it: 'Vuoi organizzare una giornata a Cefalù in autobus? Prima di partire, verifica con il Comune l’attivazione del collegamento, le fermate, i giorni di servizio e le tariffe. Orari e disponibilità possono cambiare: non basare il viaggio su un vecchio avviso.',
    en: 'Planning a bus trip to Cefalù? Before setting out, check with the municipality that the connection is operating, along with stops, service days and fares. Times and availability may change: do not rely on an old announcement.',
    de: 'Planen Sie eine Busfahrt nach Cefalù? Erkundigen Sie sich vor der Abfahrt bei der Gemeinde, ob die Verbindung verkehrt, sowie nach Haltestellen, Verkehrstagen und Fahrpreisen. Fahrplan und Verfügbarkeit können sich ändern; verlassen Sie sich nicht auf eine alte Mitteilung.'
  }, links: [{ url: 'https://comune.santostefanodicamastra.me.it/trasparenza/telefono-e-posta-elettronica/', label: { it: 'Contatti ufficiali del Comune', en: 'Official municipal contacts', de: 'Offizielle Kontakte der Gemeinde' } }] },
];

export const localPlaces = [
  { name: 'Trattoria Da Giannino', type: { it: 'Trattoria', en: 'Restaurant', de: 'Restaurant' }, address: 'Via Garibaldi 14' },
  { name: 'Rossodivino', type: { it: 'Ristorante e pizzeria', en: 'Restaurant and pizzeria', de: 'Restaurant und Pizzeria' }, address: 'Via Garibaldi 6' },
  { name: 'Bar Da Franco', type: { it: 'Bar · colazione con voucher', en: 'Café · breakfast voucher', de: 'Café · Frühstücksgutschein' }, address: 'Via Umberto I 63/65' },
  { name: 'Farmacia Mangano', type: { it: 'Farmacia', en: 'Pharmacy', de: 'Apotheke' }, address: 'Via Vittorio Emanuele 60' },
  { name: 'Chiesa di San Nicolò di Bari', type: { it: 'Chiesa Madre', en: 'Mother Church', de: 'Pfarrkirche' }, address: 'Piazza Matrice' },
].map(place => ({ ...place, url: walkingRoute(`${place.name}, ${place.address}`) }));
