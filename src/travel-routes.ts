import type { Language } from './content';
// Google Maps routes checked 30 September 2026; evidence: audit/revisione-4/percorsi-maps.json.
export const travelRoutes = [
  {
    "home": "Santo Stefano e la ceramica",
    "guide": "ceramiche",
    "place": "Palazzo Trabia",
    "distance": "190 m",
    "minutes": 3,
    "mode": "walking"
  },
  {
    "home": "Gole di Tiberio",
    "guide": "gole-di-tiberio",
    "place": "Gole di Tiberio",
    "distance": "29 km",
    "minutes": 40,
    "mode": "driving"
  },
  {
    "home": "Fiumara d’Arte",
    "guide": "fiumara-d-arte",
    "place": "Piramide del 38° Parallelo",
    "distance": "11 km",
    "minutes": 18,
    "mode": "driving"
  },
  {
    "home": "Fiumara d’Arte",
    "guide": "labirinto-di-arianna",
    "place": "Labirinto di Arianna",
    "distance": "31 km",
    "minutes": 45,
    "mode": "driving"
  },
  {
    "home": "Parco dei Nebrodi",
    "guide": "nebrodi",
    "place": "Caronia (borgo)",
    "distance": "14 km",
    "minutes": 21,
    "mode": "driving"
  },
  {
    "home": "Mistretta e la Valle delle Cascate",
    "guide": "mistretta-cascate",
    "place": "Mistretta (borgo)",
    "distance": "18 km",
    "minutes": 21,
    "mode": "driving"
  },
  {
    "home": "Tusa e Halaesa Arconidea",
    "guide": "tusa-halaesa",
    "place": "Halaesa Arconidea",
    "distance": "14 km",
    "minutes": 20,
    "mode": "driving"
  },
  {
    "home": "Le spiagge della costa",
    "guide": "mare",
    "place": "Spiaggia di Villa Margi",
    "distance": "4 km",
    "minutes": 8,
    "mode": "driving"
  },
  {
    "home": "Santuario del Letto Santo",
    "guide": "letto-santo",
    "place": "Santuario del Letto Santo",
    "distance": "12 km",
    "minutes": 22,
    "mode": "driving"
  }
];
export const routeNote = { it: 'Dalla Dimora: distanze arrotondate e tempi indicativi, verificati su Google Maps. Le mete nei Nebrodi e a Mistretta indicano i borghi; sentieri, visite e accessi finali richiedono tempo aggiuntivo.', en: 'From La Dimora: rounded distances and estimated times checked on Google Maps. Nebrodi and Mistretta routes refer to the villages; allow extra time for trails, visits and final access.', de: 'Ab der Dimora: gerundete Entfernungen und ungefähre Fahrzeiten laut Google Maps. Bei Nebrodi und Mistretta ist der jeweilige Ort gemeint; Wege, Besuche und letzte Zugänge benötigen zusätzliche Zeit.' };
export function routeText(route: typeof travelRoutes[number], language: Language) {
  const mode = route.mode === 'walking' ? {it:'a piedi',en:'on foot',de:'zu Fuß'} : {it:'in auto',en:'by car',de:'mit dem Auto'};
  return `${route.place.replace('(borgo)', language === 'en' ? '(village)' : language === 'de' ? '(Ort)' : '(borgo)')}: ${route.distance} · ${language === 'en' ? 'about' : language === 'de' ? 'ca.' : 'circa'} ${route.minutes} min ${mode[language]}`;
}
export function routeUrl(route: typeof travelRoutes[number]) { return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent('Via Brofferio 12, Santo Stefano di Camastra')}&destination=${encodeURIComponent(route.place.replace(' (borgo)', '') + (route.mode === 'walking' || route.guide === 'letto-santo' ? ', Santo Stefano di Camastra' : ', Sicilia'))}&travelmode=${route.mode}`; }
