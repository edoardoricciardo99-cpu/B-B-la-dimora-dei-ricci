import type { Language } from './content';
import { kitchenAccess, childrenNote } from './guest-info';
type Localized = Record<Language, string>;
interface Faq { id: string; question: Localized; answer: Localized; link?: { url: string; label: Localized } }

export const visitCopy = {
  it: { h1Location: 'B&B a Santo Stefano di Camastra', proof: 'Pulizia, posizione e accoglienza: nelle parole dei nostri ospiti.', proofLink: 'Leggi le recensioni', reviewsCount: 'recensioni', faqTitle: 'Prima di prenotare', faqIntro: 'Le risposte ai dubbi più frequenti, per organizzare il soggiorno con calma.', faqNav: 'FAQ', seasonsTitle: 'Ogni stagione ha qualcosa da scoprire', families: 'Viaggi con bambini? Glicine ospita fino a 4 persone; Tulipano offre 2 posti più un letto aggiungibile. Scrivici il numero degli ospiti e l’età dei bambini: ti aiutiamo a scegliere.', coast: 'Il B&B è nel centro storico, rialzato rispetto alla costa: non è fronte mare. Per una giornata in spiaggia puoi valutare Villa Margi, Caronia Marina o Castel di Tusa. Ti aiutiamo a scegliere il percorso in base a come ti muovi.', practical: 'Per musei, siti archeologici ed escursioni, controlla aperture, accessi e meteo prima di partire.', galleryCaption: 'Fotografie della camera', sourceLink: 'Informazioni per la visita' },
  en: { h1Location: 'B&B in Santo Stefano di Camastra', proof: 'Cleanliness, location and hospitality, in our guests’ own words.', proofLink: 'Read guest reviews', reviewsCount: 'reviews', faqTitle: 'Before you book', faqIntro: 'Practical answers to help you plan your stay.', faqNav: 'FAQ', seasonsTitle: 'Different seasons, different days out', families: 'Travelling with children? Glicine sleeps up to 4; Tulipano has 2 beds plus an optional extra bed. Tell us your group size and the children’s ages so we can help you choose.', coast: 'The B&B is in the historic centre, above the coast: it is not a beachfront property. For a beach day, consider Villa Margi, Caronia Marina or Castel di Tusa. We can help you choose a route to suit your transport.', practical: 'Before visiting museums, archaeological sites or walking trails, check opening times, access and weather.', galleryCaption: 'Room photographs', sourceLink: 'Visitor information' },
  de: { h1Location: 'B&B in Santo Stefano di Camastra', proof: 'Sauberkeit, Lage und Gastfreundschaft: unsere Gäste erzählen.', proofLink: 'Gästebewertungen lesen', reviewsCount: 'Bewertungen', faqTitle: 'Vor der Buchung', faqIntro: 'Praktische Antworten für einen gut geplanten Aufenthalt.', faqNav: 'FAQ', seasonsTitle: 'Andere Jahreszeit, andere Ausflüge', families: 'Mit Kindern unterwegs? Glicine bietet Platz für bis zu 4 Personen; Tulipano hat 2 Betten und ein mögliches Zustellbett. Nennen Sie uns die Personenzahl und das Alter der Kinder, damit wir Sie beraten können.', coast: 'Das B&B liegt in der Altstadt oberhalb der Küste, nicht direkt am Strand. Für einen Strandtag bieten sich Villa Margi, Caronia Marina oder Castel di Tusa an. Wir helfen Ihnen bei der passenden Anfahrt.', practical: 'Prüfen Sie vor Museumsbesuchen, Ausgrabungsstätten und Wanderungen die Öffnungszeiten, Zugänge und Wetterlage.', galleryCaption: 'Zimmerfotos', sourceLink: 'Besucherinformationen' },
};

export const seasons: { title: Localized; text: Localized; links?: { url: string; label: Localized }[] }[] = [
  {
    "title": {
      "it": "Primavera",
      "en": "Spring",
      "de": "Frühling"
    },
    "text": {
      "it": "Passeggia tra botteghe e piazze di Santo Stefano, poi scegli una giornata tra le opere della Fiumara d’Arte o i borghi dell’entroterra. Per le uscite in bici, adatta lunghezza e dislivello alla tua preparazione e al meteo.\n\nBuongiorno Ceramica invita a conoscere il lavoro degli artigiani. Per le Gole di Tiberio, concorda l’escursione con l’operatore: disponibilità e condizioni del fiume vanno controllate prima di partire.",
      "en": "Walk through Santo Stefano’s workshops and squares, then plan a day among the Fiumara d’Arte artworks or inland villages. Choose cycling distances and gradients to suit your fitness and the weather.\n\nBuongiorno Ceramica celebrates local craftspeople. Arrange a Tiberio Gorges excursion with the operator and confirm availability and river conditions before setting out.",
      "de": "Spazieren Sie durch Santo Stefanos Werkstätten und Plätze und planen Sie einen Tag bei den Kunstwerken der Fiumara d’Arte oder in den Dörfern im Landesinneren. Radtouren bitte an Kondition und Wetter anpassen.\n\nBuongiorno Ceramica stellt das Handwerk vor. Ausflüge zur Tiberio-Schlucht direkt mit dem Anbieter abstimmen und Verfügbarkeit sowie Flusszustand vorher prüfen."
    },
    "links": [
      {
        "url": "https://www.buongiornoceramica.it/home/buongiorno-ceramica/citta/",
        "label": {
          "it": "Buongiorno Ceramica: città e programmi",
          "en": "Buongiorno Ceramica: towns and programmes",
          "de": "Buongiorno Ceramica: Städte und Programme"
        }
      }
    ]
  },
  {
    "title": {
      "it": "Estate",
      "en": "Summer",
      "de": "Sommer"
    },
    "text": {
      "it": "Per una giornata al mare scegli Villa Margi, Caronia Marina o Castel di Tusa. Il B&B si trova nel centro storico, sopra la costa: organizza lo spostamento in base a come viaggi e dedica le ore meno calde alle passeggiate.\n\nLa sera torna tra piazze e locali del centro. Concerti e iniziative seguono il calendario del Comune; per la Granfondo della Ceramica consulta le date degli organizzatori, senza dare per scontato il periodo dell’evento.",
      "en": "Choose Villa Margi, Caronia Marina or Castel di Tusa for a beach day. The B&B is in the historic centre above the coast: plan transport and save walks for the cooler hours.\n\nSpend the evening in the town’s squares and cafés. Check the municipal calendar for events and the Granfondo organisers for race dates; these may vary.",
      "de": "Villa Margi, Caronia Marina oder Castel di Tusa bieten sich für einen Strandtag an. Das B&B liegt in der Altstadt oberhalb der Küste: Planen Sie die Anfahrt und Spaziergänge in den kühleren Stunden.\n\nAbends laden die Plätze und Lokale der Altstadt ein. Veranstaltungen stehen im Gemeindekalender; Termine der Granfondo bitte bei den Veranstaltern prüfen."
    },
    "links": [
      {
        "url": "https://granfondodellaceramica.com/",
        "label": {
          "it": "Granfondo: programma degli organizzatori",
          "en": "Granfondo: organisers’ programme",
          "de": "Granfondo: Programm der Veranstalter"
        }
      }
    ]
  },
  {
    "title": {
      "it": "Autunno",
      "en": "Autumn",
      "de": "Herbst"
    },
    "text": {
      "it": "Nei Nebrodi puoi alternare una passeggiata nei boschi alla visita di Mistretta. La Valle delle Cascate è un’altra tappa da valutare con attenzione al meteo e alla percorribilità: la presenza d’acqua cambia con le piogge.\n\nPer una giornata più tranquilla, scegli le botteghe di ceramica o il panorama del Letto Santo. L’Oktoberfest Stefanese ha un proprio programma: verifica date e iniziative prima di organizzare il soggiorno.",
      "en": "In the Nebrodi area, combine a woodland walk with a visit to Mistretta. Consider the Valley of Waterfalls after checking weather and trail conditions; water levels depend on rainfall.\n\nFor a quieter day, explore ceramic workshops or the view from Letto Santo. Check the Oktoberfest Stefanese organisers for dates and activities.",
      "de": "In den Nebrodi lassen sich Waldspaziergänge mit einem Besuch in Mistretta verbinden. Für das Tal der Wasserfälle sind Wetter und Wegzustand zu prüfen; die Wassermenge hängt vom Regen ab.\n\nFür einen ruhigen Tag bieten sich Keramikwerkstätten oder der Blick vom Letto Santo an. Termine und Programm des Oktoberfests Stefanese bitte beim Veranstalter prüfen."
    },
    "links": [
      {
        "url": "https://www.parcodeinebrodi.it/",
        "label": {
          "it": "Nebrodi: itinerari e avvisi",
          "en": "Nebrodi: routes and notices",
          "de": "Nebrodi: Routen und Hinweise"
        }
      },
      {
        "url": "https://www.facebook.com/oktoberfeststefanese",
        "label": {
          "it": "Oktoberfest: programma degli organizzatori",
          "en": "Oktoberfest: organisers’ programme",
          "de": "Oktoberfest: Programm der Veranstalter"
        }
      }
    ]
  },
  {
    "title": {
      "it": "Inverno",
      "en": "Winter",
      "de": "Winter"
    },
    "text": {
      "it": "Dedica più tempo alle botteghe e al Museo della Ceramica a Palazzo Trabia. Tra una visita e una sosta al bar, il centro storico si esplora a piedi; controlla le aperture del museo prima di programmare la giornata.\n\nPer i borghi dell’entroterra e i Nebrodi, verifica meteo e condizioni delle strade. Mostre e appuntamenti del periodo si trovano nel calendario del Comune: scegli le tappe in base alle tue date, senza affidarti a programmi di edizioni passate.",
      "en": "Spend more time in the workshops and the Ceramics Museum at Palazzo Trabia. Explore the historic centre on foot between visits and café stops; check museum opening times before planning your day.\n\nCheck weather and road conditions before visiting inland villages or the Nebrodi. Choose exhibitions and events from the current municipal calendar for your travel dates.",
      "de": "Nehmen Sie sich Zeit für Werkstätten und das Keramikmuseum im Palazzo Trabia. Die Altstadt lässt sich zwischen Besuchen und Kaffeepausen zu Fuß erkunden; Museumsöffnungszeiten bitte vorher prüfen.\n\nVor Ausflügen ins Landesinnere oder in die Nebrodi Wetter und Straßen prüfen. Ausstellungen und Veranstaltungen für Ihre Reisedaten stehen im aktuellen Gemeindekalender."
    },
    "links": [
      {
        "url": "https://www.museodellaceramica.com/",
        "label": {
          "it": "Museo della Ceramica: informazioni per la visita",
          "en": "Ceramics Museum: visitor information",
          "de": "Keramikmuseum: Besucherinformationen"
        }
      }
    ]
  }
];

export const destinations = [
  { title: { it: 'Santo Stefano e la ceramica', en: 'Santo Stefano and ceramics', de: 'Santo Stefano und Keramik' }, text: { it: 'Parti a piedi dal centro storico: botteghe, piazze e Museo della Ceramica a Palazzo Trabia raccontano la città.', en: 'Start on foot in the historic centre: workshops, squares and the Ceramics Museum in Palazzo Trabia tell the town’s story.', de: 'Starten Sie zu Fuß in der Altstadt: Werkstätten, Plätze und das Keramikmuseum im Palazzo Trabia erzählen von der Stadt.' }, url: 'https://www.museodellaceramica.com/' },
  { title: { it: 'Fiumara d’Arte', en: 'Fiumara d’Arte', de: 'Fiumara d’Arte' }, text: { it: 'Il parco d’arte voluto da Antonio Presti unisce paesaggio e sculture: la Piramide del 38° Parallelo di Mauro Staccioli, la Finestra sul mare di Tano Festa a Villa Margi e il Labirinto di Arianna sono alcune delle tappe.', en: 'Antonio Presti’s art park brings together landscape and sculpture: Mauro Staccioli’s 38th Parallel Pyramid, Tano Festa’s Finestra sul mare at Villa Margi and Ariadne’s Labyrinth are among its stops.', de: 'Antonio Prestis Kunstpark verbindet Landschaft und Skulpturen: Mauro Stacciolis Pyramide des 38. Breitengrads, Tano Festas Finestra sul mare in Villa Margi und das Labyrinth der Ariadne gehören zu den Stationen.' }, url: 'https://www.fondazioneantoniopresti.org/progetto/fiumara-darte/' },
  { title: { it: 'Tusa e Halaesa Arconidea', en: 'Tusa and Halaesa Arconidea', de: 'Tusa und Halaesa Arconidea' }, text: { it: 'L’area archeologica di Halaesa domina la costa e la valle del Tusa. Puoi abbinarla al borgo di Tusa e a una sosta a Castel di Tusa.', en: 'The Halaesa archaeological site overlooks the coast and the Tusa valley. Combine it with Tusa village and a stop in Castel di Tusa.', de: 'Die Ausgrabungsstätte Halaesa blickt über Küste und Tusa-Tal. Verbinden Sie den Besuch mit Tusa und einem Halt in Castel di Tusa.' }, url: 'https://parchiarcheologici.regione.sicilia.it/tindari/siti-archeologici/area-archeologica-halaesa-arconidea-e-antiquarium-tusa/' },
  { title: { it: 'Mistretta e la Valle delle Cascate', en: 'Mistretta and the Valley of Waterfalls', de: 'Mistretta und das Tal der Wasserfälle' }, text: { it: 'Nell’entroterra dei Nebrodi, abbina il borgo di Mistretta alla Valle delle Cascate. Dall’autunno alla primavera, soprattutto dopo le piogge, i torrenti alimentano salti d’acqua come Pietrebianche e Ciddìa. Verifica percorribilità e meteo prima dell’escursione.', en: 'In the Nebrodi hinterland, combine Mistretta with the Valley of Waterfalls. From autumn to spring, especially after rain, streams feed falls such as Pietrebianche and Ciddìa. Check trail conditions and weather before setting out.', de: 'Verbinden Sie im Hinterland der Nebrodi Mistretta mit dem Tal der Wasserfälle. Vom Herbst bis zum Frühjahr, besonders nach Regen, speisen Bäche die Wasserfälle Pietrebianche und Ciddìa. Prüfen Sie vor der Wanderung Wegzustand und Wetter.' }, url: 'https://www.comune.mistretta.me.it/Luoghi?ID=424' },
  { title: { it: 'Le spiagge della costa', en: 'Beaches along the coast', de: 'Strände entlang der Küste' }, text: { it: 'Dal centro di Santo Stefano si scende verso il mare. Villa Margi, Caronia Marina e Castel di Tusa sono alternative per una giornata sulla costa.', en: 'From Santo Stefano’s centre, head down towards the sea. Villa Margi, Caronia Marina and Castel di Tusa are options for a day by the coast.', de: 'Von Santo Stefanos Zentrum geht es hinunter zum Meer. Villa Margi, Caronia Marina und Castel di Tusa bieten Möglichkeiten für einen Küstentag.' } },
  { title: { it: 'Un’escursione a Cefalù', en: 'A day trip to Cefalù', de: 'Ein Tagesausflug nach Cefalù' }, text: { it: 'Cefalù può essere una tappa del viaggio lungo la costa. La tua base resta Santo Stefano di Camastra, con le sue botteghe e il suo centro storico.', en: 'Cefalù can be a stop on your coastal trip. Your base remains Santo Stefano di Camastra, with its workshops and historic streets.', de: 'Cefalù lässt sich als Ausflug entlang der Küste einplanen. Ihr Standort bleibt Santo Stefano di Camastra mit Werkstätten und Altstadt.' } },
  { title: { it: 'Gole di Tiberio', en: 'Tiberio Gorges', de: 'Tiberio-Schlucht' }, text: { it: 'Pareti rocciose e acqua sul fiume Pollina, nel Parco delle Madonie. Per l’escursione in gommone verifica disponibilità, punto d’incontro e condizioni con l’operatore.', en: 'Rock walls and water on the Pollina River in the Madonie Park. Check availability, meeting point and conditions with the operator for a boat excursion.', de: 'Felswände und Wasser am Fluss Pollina im Madonie-Park. Verfügbarkeit, Treffpunkt und Bedingungen für die Schlauchboottour bitte beim Anbieter prüfen.' }, url: 'https://goleditiberio.com/escursione-in-gommone-alle-gole-di-tiberio-informazione-prezzi-e-prenotazione/' },
];

export const faqs: Faq[] = [
  { id: 'bambini', question: { it: 'I bambini soggiornano gratuitamente?', en: 'Do children stay free?', de: 'Übernachten Kinder kostenlos?' }, answer: childrenNote },
  { id: 'animali', question: { it: 'Sono ammessi animali?', en: 'Are pets welcome?', de: 'Sind Haustiere erlaubt?' }, answer: { it: 'Gli animali sono ammessi gratis su richiesta.', en: 'Pets are welcome free of charge on request.', de: 'Haustiere sind auf Anfrage kostenlos erlaubt.' } },
  { id: 'piano-terra', question: { it: 'Ci sono camere al piano terra per chi ha mobilità ridotta?', en: 'Are there ground-floor rooms for guests with reduced mobility?', de: 'Gibt es Erdgeschosszimmer für Gäste mit eingeschränkter Mobilität?' }, answer: {
    it: 'Disponiamo di due camere al piano terra, Glicine e Papavero, adatte anche a persone con disabilità o mobilità ridotta. L’accesso è diretto e presenta un solo piccolo gradino.\n\nPrima della prenotazione, possiamo fornire misure, dimensioni e ulteriori dettagli sull’accessibilità, per consentire a ogni ospite di valutare la soluzione più adatta alle proprie esigenze.',
    en: 'We have two ground-floor rooms, Glicine and Papavero, which can also accommodate guests with disabilities or reduced mobility. Access is direct, with just one small step.\n\nBefore booking, we can provide measurements, dimensions and further accessibility details so that each guest can assess whether the room meets their individual needs.',
    de: 'Wir verfügen über zwei Zimmer im Erdgeschoss, Glicine und Papavero, die auch für Menschen mit Behinderungen oder eingeschränkter Mobilität geeignet sind. Der Zugang ist direkt und hat nur eine kleine Stufe.\n\nVor der Buchung können wir Maße, Abmessungen und weitere Informationen zur Zugänglichkeit bereitstellen, damit jeder Gast beurteilen kann, ob das Zimmer den eigenen Bedürfnissen entspricht.'
  } },
  { id: 'posizione', question: { it: 'Dove si trova il B&B? È nel centro storico?', en: 'Where is the B&B? Is it in the historic centre?', de: 'Wo liegt das B&B? In der Altstadt?' }, answer: { it: 'Siamo in Via Brofferio 12, a Santo Stefano di Camastra (ME), nel centro storico. Botteghe di ceramica, piazze e locali si raggiungono a piedi.', en: 'We are at Via Brofferio 12, Santo Stefano di Camastra (ME), in the historic centre. Ceramic workshops, squares and restaurants are within walking distance.', de: 'Wir liegen in der Via Brofferio 12, Santo Stefano di Camastra (ME), in der Altstadt. Keramikwerkstätten, Plätze und Lokale erreichen Sie zu Fuß.' } },
  { id: 'parcheggio', question: { it: 'Dove posso parcheggiare?', en: 'Where can I park?', de: 'Wo kann ich parken?' }, answer: { it: 'Puoi cercare posto in Piazza Rosario, dove sono disponibili parcheggi pubblici, oppure vicino al Municipio, in Via Luigi Famularo 35. I posti sono pubblici, non riservati. Verifica la segnaletica e scrivici prima dell’arrivo con un mezzo alto. I link Maps sono nelle informazioni utili.', en: 'You can look for public parking in Piazza Rosario or a space near the town hall, Via Luigi Famularo 35. Spaces are public, not reserved. Check signs and contact us before arriving with a tall vehicle. Maps links are in the useful information section.', de: 'Öffentliche Parkplätze gibt es in der Piazza Rosario; eine weitere Möglichkeit ist die Umgebung des Rathauses, Via Luigi Famularo 35. Die Plätze sind öffentlich und nicht reserviert. Beachten Sie die Beschilderung und kontaktieren Sie uns bei hohen Fahrzeugen vor der Anreise. Maps-Links finden Sie unter „Gut zu wissen“.' } },
  { id: 'mare', question: { it: 'Quanto dista il mare e quali spiagge posso raggiungere?', en: 'How far is the sea and which beaches can I visit?', de: 'Wie weit ist das Meer und welche Strände sind erreichbar?' }, answer: { it: 'La Dimora è nel centro storico rialzato rispetto alla costa, non fronte mare. La distanza e il percorso cambiano secondo la spiaggia e il mezzo scelto: possiamo indicarti come raggiungere Villa Margi, Caronia Marina o Castel di Tusa. Con bambini o bagagli, considera il dislivello prima di decidere di muoverti a piedi.', en: 'La Dimora is in the historic centre above the coast, not on the seafront. Distance and route depend on your beach and transport: we can advise on Villa Margi, Caronia Marina or Castel di Tusa. With children or luggage, consider the slope before deciding to walk.', de: 'La Dimora liegt in der Altstadt oberhalb der Küste, nicht direkt am Meer. Entfernung und Weg hängen vom Strand und Verkehrsmittel ab. Wir beraten Sie zu Villa Margi, Caronia Marina und Castel di Tusa. Beachten Sie mit Kindern oder Gepäck den Höhenunterschied.' } },
  { id: 'stazione', question: { it: 'Come organizzo l’arrivo dalla stazione?', en: 'How do I plan my arrival from the station?', de: 'Wie plane ich die Anreise vom Bahnhof?' }, answer: {"it": "Scrivici su WhatsApp indicando la stazione e l’orario di arrivo. Ti daremo le indicazioni più semplici per raggiungere la Dimora e organizzare l’ultimo tratto del viaggio.", "en": "Message us on WhatsApp with your arrival station and time. We will help you find the simplest way to reach La Dimora and plan the last part of your journey.", "de": "Schreiben Sie uns per WhatsApp mit Bahnhof und Ankunftszeit. Wir geben Ihnen einfache Hinweise für die Anreise zur Dimora und den letzten Abschnitt Ihrer Reise."} },
  { id: 'fiumara', question: { it: 'Posso usare la Dimora come base per visitare Fiumara d’Arte?', en: 'Can I stay here to explore Fiumara d’Arte?', de: 'Eignet sich die Dimora für Besuche der Fiumara d’Arte?' }, answer: { it: 'Sì. Fiumara d’Arte è un percorso di opere all’aperto distribuite in più località, non un unico museo. L’auto permette di organizzare le tappe, tra cui la Piramide del 38° Parallelo e il Labirinto di Arianna. Consulta la mappa e le informazioni della Fondazione per accessi e visite.', en: 'Yes. Fiumara d’Arte is a route of outdoor artworks across several locations, rather than a single museum. A car allows you to plan stops including the 38th Parallel Pyramid and Ariadne’s Labyrinth. Check the Foundation’s map and visitor information.', de: 'Ja. Die Fiumara d’Arte besteht aus Kunstwerken an verschiedenen Orten. Mit dem Auto können Sie unter anderem die Pyramide des 38. Breitengrads und das Labyrinth der Ariadne besuchen. Prüfen Sie Karte und Besuchshinweise der Stiftung.' }, link: { url: 'https://www.fondazioneantoniopresti.org/progetto/fiumara-darte/', label: { it: 'Consulta il percorso della Fiumara', en: 'Explore the Fiumara route', de: 'Route der Fiumara ansehen' } } },
  { id: 'famiglie', question: { it: 'Quale camera scegliere per una famiglia?', en: 'Which room works for a family?', de: 'Welches Zimmer eignet sich für eine Familie?' }, answer: { it: 'Glicine ospita fino a 4 persone e ha un letto a castello. Tulipano è una doppia con un letto aggiungibile; Ortensia ospita fino a 3 persone e ha un terrazzo privato. Indica il numero degli ospiti e l’età dei bambini. Per culle, seggioloni o altre esigenze specifiche chiedici conferma prima di prenotare.', en: 'Glicine sleeps up to 4 and has a bunk bed. Tulipano is a double with an optional extra bed; Ortensia sleeps up to 3 and has a private terrace. Tell us your group size and the children’s ages. Please check with us about cots, high chairs or other specific needs before booking.', de: 'Glicine bietet bis zu 4 Personen Platz und hat ein Etagenbett. Tulipano ist ein Doppelzimmer mit möglichem Zustellbett; Ortensia bietet bis zu 3 Plätze und eine private Terrasse. Nennen Sie Personenzahl und Kindesalter. Fragen Sie vor der Buchung nach Babybetten, Hochstühlen oder anderen besonderen Bedürfnissen.' } },
  { id: 'cucina', question: { it: 'Posso utilizzare la cucina durante il soggiorno?', en: 'Can I use the kitchen during my stay?', de: 'Kann ich während meines Aufenthalts die Küche nutzen?' }, answer: {
    it: `Certamente. La Dimora dispone di una cucina condivisa a disposizione degli ospiti, ideale per preparare qualcosa in autonomia o semplicemente concedersi un momento di relax in casa.

${kitchenAccess.it}`,
    en: `Of course. La Dimora has a shared kitchen available to guests, ideal for preparing something yourself or simply relaxing at home.

${kitchenAccess.en}`,
    de: `Natürlich. Die Gemeinschaftsküche steht allen Gästen zur Verfügung, um selbst etwas zuzubereiten oder sich in Ruhe zu entspannen.

${kitchenAccess.de}`,
  } },
  { id: 'bici', question: { it: 'Avete un deposito sicuro per biciclette?', en: 'Do you have secure bicycle storage?', de: 'Gibt es eine sichere Fahrradaufbewahrung?' }, answer: { it: 'Sì, accogliamo cicloturisti e mettiamo a disposizione un deposito sicuro per biciclette. Avvisaci quando prenoti. Costa ed entroterra offrono percorsi diversi: scegli dislivello e lunghezza in base alla tua preparazione e alle condizioni del giorno.', en: 'Yes, we welcome touring cyclists and provide secure bicycle storage. Let us know when booking. Coastal and inland routes vary: choose distance and elevation to suit your fitness and the day’s conditions.', de: 'Ja, wir begrüßen Radreisende und bieten eine sichere Fahrradaufbewahrung. Geben Sie bei der Buchung Bescheid. Wählen Sie Küsten- oder Inlandrouten mit Länge und Höhenmetern passend zu Kondition und Tagesbedingungen.' } },
  { id: 'orari', question: { it: 'Quali sono gli orari di check-in e check-out?', en: 'What are the check-in and check-out times?', de: 'Wann sind Check-in und Check-out?' }, answer: { it: 'In inverno il check-in è dalle 15:00 alle 22:00; in estate dalle 15:00 alle 23:00. Il check-out è entro le 10:00 in entrambi i periodi. Concorda l’orario di arrivo con noi; per esigenze particolari scrivici prima del soggiorno.', en: 'Winter check-in is from 15:00 to 22:00; summer check-in is from 15:00 to 23:00. Check-out is by 10:00 in both periods. Arrange your arrival time with us and contact us in advance for particular needs.', de: 'Im Winter ist Check-in von 15:00 bis 22:00 Uhr, im Sommer von 15:00 bis 23:00 Uhr. Check-out ist in beiden Zeiträumen bis 10:00 Uhr. Stimmen Sie Ihre Ankunftszeit mit uns ab und melden Sie besondere Wünsche vorab.' } },
  { id: 'diretta', question: { it: 'Come funziona la prenotazione diretta? Si risparmia?', en: 'How does direct booking work? Is it cheaper?', de: 'Wie funktioniert die Direktbuchung? Ist sie günstiger?' }, answer: { it: 'Scrivici su WhatsApp con date e numero di ospiti: ti rispondiamo con disponibilità, tariffa diretta e condizioni. Con la prenotazione diretta hai uno sconto dell’8%. L’invio del messaggio non conferma la prenotazione: la concordiamo insieme.', en: 'Send us your dates and group size on WhatsApp. We reply with availability, a direct rate and conditions. Book direct and receive an 8% discount. Sending a message does not confirm a reservation: we agree it with you.', de: 'Senden Sie uns Reisedaten und Personenzahl per WhatsApp. Wir antworten mit Verfügbarkeit, Direktpreis und Bedingungen. Bei Direktbuchung erhalten Sie 8% Rabatt. Eine Nachricht bestätigt noch keine Buchung: Diese vereinbaren wir gemeinsam.' } },
];

// Compact selection for the homepage; the guide carries the longer itinerary.
export const homeDestinations = [
  ...[destinations[0], destinations[6], destinations[1]].map(item => ({ ...item, extraLink: undefined })),
  { title: { it: 'Parco dei Nebrodi', en: 'Nebrodi Park', de: 'Nebrodi-Park' }, text: { it: 'Boschi e sentieri per una giornata nell’entroterra. Nel settore occidentale dei Nebrodi, Mistretta e la Valle delle Cascate aggiungono una passeggiata nel borgo e paesaggi d’acqua. Controlla gli itinerari, il meteo e gli accessi: alcune cascate si trovano fuori dal perimetro del Parco.', en: 'Woods and trails for a day inland. In the western Nebrodi area, Mistretta and the Valley of Waterfalls combine a village walk with river landscapes. Check routes, weather and access: some waterfalls lie outside the Park boundary.', de: 'Wälder und Wege für einen Tag im Landesinneren. Im Westen der Nebrodi verbinden Mistretta und das Tal der Wasserfälle einen Dorfspaziergang mit Wasserlandschaften. Prüfen Sie Wege, Wetter und Zugänge: Einige Wasserfälle liegen außerhalb des Parks.' }, url: 'https://www.parcodeinebrodi.it/', extraLink: { url: 'https://www.comune.mistretta.me.it/Luoghi?ID=424', label: { it: 'Mistretta e la Valle delle Cascate', en: 'Mistretta and the Valley of Waterfalls', de: 'Mistretta und das Tal der Wasserfälle' } } },
];

export const homeFaqs = faqs.filter(faq => ['bambini', 'animali', 'piano-terra', 'parcheggio', 'stazione', 'cucina', 'orari', 'diretta'].includes(faq.id));
export const guideFaqs = faqs.filter(faq => !homeFaqs.includes(faq));

export const lettoSanto = {
  "title": {
    "it": "Santuario del Letto Santo",
    "en": "Letto Santo Sanctuary",
    "de": "Heiligtum Letto Santo"
  },
  "text": {
    "it": "Sul Monte Santa Croce, un luogo di culto da cui lo sguardo abbraccia la costa e i boschi dei Nebrodi. Controlla accessi e condizioni della strada prima di partire.",
    "en": "On Monte Santa Croce, a religious site overlooking the coast and Nebrodi woods. Check access and road conditions before setting out.",
    "de": "Auf dem Monte Santa Croce liegt das Heiligtum mit Blick auf Küste und Nebrodi-Wälder. Prüfen Sie Zugang und Straßenverhältnisse vor der Fahrt."
  },
  "url": "https://santostefanodicamastra.comune.digital/visit-santo-stefano/c/0/i/8780876/santuario-letto-santo"
};

// One numbered list: all destinations share the same rendering and hierarchy.
export const allHomeDestinations = [...homeDestinations, ...[destinations[2], destinations[4], lettoSanto].map(item => ({ ...item, extraLink: undefined }))];
