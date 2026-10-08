import { travelRoutes, routeText, routeNote } from './travel-routes';
import type { Language } from './content';
// The guide is preserved for a later release, without homepage links or indexing.
export const guidePublished = false;
export const guidePath = '/guida-santo-stefano-di-camastra/';
export const guidePdfPath = '/guida-santo-stefano-di-camastra.pdf';
export const guideUpdated = '2026-10-05';
type Localized = Record<Language, string>;
export interface GuideSection { id: string; title: Localized; paragraphs: Record<Language, string[]>; url: string; sourceLabel: string }
export const guideSections: GuideSection[] = [
  {
    "id": "ceramiche",
    "title": {
      "it": "Santo Stefano di Camastra, tra botteghe e ceramiche",
      "en": "Santo Stefano di Camastra: workshops and ceramics",
      "de": "Santo Stefano di Camastra: Werkstätten und Keramik"
    },
    "paragraphs": {
      "it": [
        "Santo Stefano di Camastra si scopre volentieri senza fretta. Parti dal centro storico e lascia spazio alle botteghe: le ceramiche fanno parte della vita del paese, dai pezzi d’uso quotidiano agli oggetti decorati. È una passeggiata da alternare a una sosta in piazza e a un caffè.",
        "Per conoscere meglio questa tradizione, prosegui verso Palazzo Trabia. Se desideri visitare una bottega o assistere alla lavorazione, chiedi direttamente agli artigiani: le attività e la disponibilità cambiano da un laboratorio all’altro."
      ],
      "en": [
        "Take your time in Santo Stefano di Camastra. Start in the historic centre and explore its ceramic workshops, from everyday pottery to decorative pieces, with a stop in a square or a café along the way.",
        "Continue to Palazzo Trabia to learn more about this tradition. Ask individual workshops about visits or demonstrations; availability varies."
      ],
      "de": [
        "Entdecken Sie Santo Stefano di Camastra in Ruhe. Beginnen Sie in der Altstadt mit ihren Keramikwerkstätten und gönnen Sie sich zwischendurch einen Kaffee auf einem der Plätze.",
        "Im Palazzo Trabia erfahren Sie mehr über diese Tradition. Besuche oder Vorführungen bitte direkt mit den einzelnen Werkstätten abstimmen."
      ]
    },
    "url": "https://www.museodellaceramica.com/",
    "sourceLabel": "Museo della Ceramica"
  },
  {
    "id": "gole-di-tiberio",
    "title": {
      "it": "Gole di Tiberio: una giornata sul fiume Pollina",
      "en": "Tiberio Gorges: a day on the Pollina River",
      "de": "Tiberio-Schlucht: ein Tag am Fluss Pollina"
    },
    "paragraphs": {
      "it": [
        "Le Gole di Tiberio sono una delle escursioni da considerare durante un soggiorno a Santo Stefano di Camastra. Si trovano sul fiume Pollina, nel Parco delle Madonie: un paesaggio diverso dai boschi dei Nebrodi, con pareti rocciose e acqua da attraversare nelle modalità previste dagli operatori.",
        "L’operatore locale propone escursioni che comprendono il passaggio in gommone. Prima di prenotare verifica disponibilità, punto d’incontro, requisiti per i partecipanti e attrezzatura necessaria. Meteo e condizioni del fiume possono modificare il programma: organizza la giornata dopo aver ricevuto conferma e lascia margine per gli spostamenti."
      ],
      "en": [
        "The Tiberio Gorges are a rewarding day out from Santo Stefano di Camastra. They lie on the Pollina River in the Madonie Park, with rock walls and water to explore under the conditions set by local operators.",
        "The local operator offers excursions including a gorge crossing by inflatable boat. Confirm availability, meeting point, participant requirements and equipment before booking. Weather and river conditions may change the programme."
      ],
      "de": [
        "Die Tiberio-Schlucht am Fluss Pollina im Madonie-Park bietet einen Ausflug in eine Landschaft aus Felswänden und Wasser. Sie liegt außerhalb des Nebrodi-Parks.",
        "Der örtliche Anbieter organisiert Touren mit Schlauchbootdurchquerung. Verfügbarkeit, Treffpunkt, Teilnahmebedingungen und Ausrüstung bitte vor der Buchung klären. Wetter und Flusszustand können den Ablauf verändern."
      ]
    },
    "url": "https://goleditiberio.com/escursione-in-gommone-alle-gole-di-tiberio-informazione-prezzi-e-prenotazione/",
    "sourceLabel": "Operatore Gole di Tiberio"
  },
  {
    "id": "palazzo-trabia",
    "title": {
      "it": "Museo della Ceramica a Palazzo Trabia",
      "en": "Ceramics Museum at Palazzo Trabia",
      "de": "Keramikmuseum im Palazzo Trabia"
    },
    "paragraphs": {
      "it": [
        "Il Museo della Ceramica di Santo Stefano di Camastra, ospitato a Palazzo Trabia, conserva oggetti della tradizione locale e opere contemporanee. Giare, recipienti per acqua e vino e mattonelle maiolicate aiutano a riconoscere forme e decorazioni incontrate nelle botteghe.",
        "È una tappa da affiancare alla passeggiata in centro, anche quando vuoi dedicare più tempo alla storia della ceramica. Per giorni di apertura e visite consulta il museo: qui trovi il collegamento diretto, così puoi controllare le informazioni per le tue date."
      ],
      "en": [
        "The Ceramics Museum in Palazzo Trabia brings together traditional local pottery and contemporary works. Jars, water and wine vessels and decorative tiles give context to the shapes and patterns seen in the workshops.",
        "Combine it with a walk through the centre. Check the museum’s own website for opening days and visitor arrangements for your dates."
      ],
      "de": [
        "Das Keramikmuseum im Palazzo Trabia zeigt traditionelle örtliche Keramik und zeitgenössische Werke. Gefäße und Majolikafliesen helfen, Formen und Muster aus den Werkstätten wiederzuerkennen.",
        "Verbinden Sie den Besuch mit einem Altstadtspaziergang und prüfen Sie Öffnungstage und Besuchshinweise auf der Website des Museums."
      ]
    },
    "url": "https://www.museodellaceramica.com/",
    "sourceLabel": "Museo della Ceramica"
  },
  {
    "id": "cimitero-vecchio",
    "title": {
      "it": "Cimitero Vecchio: la memoria nelle maioliche",
      "en": "Old Cemetery: memories in majolica",
      "de": "Alter Friedhof: Erinnerungen in Majolika"
    },
    "paragraphs": {
      "it": [
        "Il Cimitero Vecchio, in Via del Bosco, racconta un altro volto della ceramica stefanese. I rivestimenti maiolicati delle sepolture custodiscono motivi e colori della produzione ottocentesca: una visita raccolta, da vivere con rispetto per il luogo.",
        "Si trova sulle colline sopra il centro. Prima di raggiungerlo verifica le condizioni di accesso con il Comune; considera il dislivello se pensi di arrivare a piedi."
      ],
      "en": [
        "The Old Cemetery in Via del Bosco reveals another side of local ceramics. The majolica-covered tombs preserve nineteenth-century patterns and colours in a quiet place to visit respectfully.",
        "It lies on the hills above the centre. Check access with the municipality and consider the slope if walking."
      ],
      "de": [
        "Der Alte Friedhof in der Via del Bosco zeigt mit seinen majolikaverzierten Gräbern Muster und Farben der Keramik des 19. Jahrhunderts. Besuchen Sie diesen stillen Ort mit Respekt.",
        "Er liegt in den Hügeln oberhalb des Zentrums. Klären Sie den Zugang mit der Gemeinde und berücksichtigen Sie den Höhenunterschied bei einem Fußweg."
      ]
    },
    "url": "https://santostefanodicamastra.comune.digital/visit-santo-stefano/c/0/i/8782360/cimitero-vecchio",
    "sourceLabel": "Guida del Comune"
  },
  {
    "id": "fiumara-d-arte",
    "title": {
      "it": "Fiumara d’Arte: le opere e il paesaggio",
      "en": "Fiumara d’Arte: art in the landscape",
      "de": "Fiumara d’Arte: Kunst in der Landschaft"
    },
    "paragraphs": {
      "it": [
        "La Fiumara d’Arte riunisce sculture all’aperto distribuite nel territorio. Il viaggio tra un’opera e l’altra è parte dell’esperienza: scegli poche tappe e fermati a osservare il rapporto tra arte, colline e mare.",
        "Se stai scegliendo dove dormire per visitare la Fiumara d’Arte, soggiornare a Santo Stefano di Camastra ti lascia anche il piacere di rientrare la sera tra botteghe e locali del centro. Per gli spostamenti tra le opere consulta la mappa della Fondazione Antonio Presti: accessi e iniziative non sono uguali per tutte le tappe."
      ],
      "en": [
        "Fiumara d’Arte brings together outdoor sculptures across the surrounding area. Choose a few stops and allow time for both the artworks and the landscape between them.",
        "Staying in Santo Stefano di Camastra lets you return to the old town in the evening. Use the Antonio Presti Foundation’s map and check access information for each work."
      ],
      "de": [
        "Die Fiumara d’Arte verbindet Skulpturen unter freiem Himmel an verschiedenen Orten. Wählen Sie wenige Stationen und nehmen Sie sich Zeit für Kunst und Landschaft.",
        "Von Santo Stefano di Camastra aus können Sie abends in die Altstadt zurückkehren. Nutzen Sie die Karte der Stiftung Antonio Presti und prüfen Sie die Zugangshinweise für jedes Werk."
      ]
    },
    "url": "https://www.fondazioneantoniopresti.org/progetto/fiumara-darte/",
    "sourceLabel": "Fondazione Antonio Presti"
  },
  {
    "id": "piramide-38-parallelo",
    "title": {
      "it": "Piramide del 38° Parallelo",
      "en": "Pyramid of the 38th Parallel",
      "de": "Pyramide des 38. Breitengrads"
    },
    "paragraphs": {
      "it": [
        "La Piramide del 38° Parallelo di Mauro Staccioli sorge su un’altura nel territorio di Motta d’Affermo. La geometria in acciaio corten dialoga con il paesaggio e con il mare: è una delle opere più riconoscibili della Fiumara d’Arte.",
        "Prima di partire consulta le informazioni della Fondazione. Non dare per scontato l’accesso all’interno: eventuali aperture ed eventi seguono indicazioni specifiche."
      ],
      "en": [
        "Mauro Staccioli’s Pyramid of the 38th Parallel stands on a hill in the territory of Motta d’Affermo. Its weathering-steel geometry is one of Fiumara d’Arte’s most recognisable works.",
        "Check the Foundation’s visitor information before setting out. Interior access should not be assumed; openings and events have specific arrangements."
      ],
      "de": [
        "Mauro Stacciolis Pyramide des 38. Breitengrads steht auf einer Anhöhe im Gebiet von Motta d’Affermo. Ihre Cortenstahlform zählt zu den bekanntesten Werken der Fiumara d’Arte.",
        "Prüfen Sie vor der Fahrt die Hinweise der Stiftung. Der Innenraum ist nicht automatisch zugänglich; Öffnungen und Veranstaltungen folgen eigenen Regeln."
      ]
    },
    "url": "https://www.fondazioneantoniopresti.org/opera/piramide-38-parallelo/",
    "sourceLabel": "Fondazione Antonio Presti"
  },
  {
    "id": "labirinto-di-arianna",
    "title": {
      "it": "Labirinto di Arianna",
      "en": "Ariadne’s Labyrinth",
      "de": "Labyrinth der Ariadne"
    },
    "paragraphs": {
      "it": [
        "Il Labirinto di Arianna di Italo Lanfredini invita a entrare nell’opera e seguirne il percorso. Tra le tappe della Fiumara d’Arte è quella che più suggerisce una visita lenta, attenta allo spazio e al movimento.",
        "Per raggiungere il Labirinto di Arianna in Sicilia usa la mappa della Fondazione e controlla le indicazioni aggiornate. Dedica all’opera una sosta vera, senza riempire la giornata di troppe destinazioni."
      ],
      "en": [
        "Italo Lanfredini’s Ariadne’s Labyrinth invites visitors to follow a path through the artwork. It rewards an unhurried visit, attentive to space and movement.",
        "Use the Foundation’s map to plan your visit and check current directions. Leave time for the work itself instead of fitting too many stops into one day."
      ],
      "de": [
        "Italo Lanfredinis Labyrinth der Ariadne lädt dazu ein, dem Weg durch das Kunstwerk zu folgen. Ein ruhiger Besuch lässt Raum für die Wahrnehmung von Bewegung und Umgebung.",
        "Nutzen Sie die Karte der Stiftung und prüfen Sie aktuelle Hinweise. Planen Sie genügend Zeit für das Werk selbst ein."
      ]
    },
    "url": "https://www.fondazioneantoniopresti.org/opera/labirinto-di-arianna/",
    "sourceLabel": "Fondazione Antonio Presti"
  },
  {
    "id": "nebrodi",
    "title": {
      "it": "Parco dei Nebrodi: boschi e sentieri",
      "en": "Nebrodi Park: woods and trails",
      "de": "Nebrodi-Park: Wälder und Wanderwege"
    },
    "paragraphs": {
      "it": [
        "Per una giornata nella natura, il Parco dei Nebrodi offre itinerari nell’entroterra della costa nord. Scegli il percorso in base al tempo che hai, alla preparazione e al meteo: una passeggiata e un’escursione impegnativa richiedono organizzazioni diverse.",
        "Il sito ufficiale del Parco raccoglie itinerari, punti d’interesse, guide e avvisi. Consultalo prima di partire, soprattutto per conoscere eventuali limitazioni e condizioni di accesso."
      ],
      "en": [
        "Nebrodi Park offers inland routes for a day in nature. Match your choice to the time available, fitness and weather; an easy walk and a demanding hike need different preparation.",
        "The Park’s official website provides routes, places of interest, guides and notices. Check access conditions and restrictions before setting out."
      ],
      "de": [
        "Der Nebrodi-Park bietet Wege im Hinterland der Nordküste. Wählen Sie nach Zeit, Kondition und Wetter: Spaziergänge und anspruchsvolle Wanderungen erfordern unterschiedliche Vorbereitung.",
        "Die offizielle Website enthält Routen, Sehenswürdigkeiten, Wanderführer und Mitteilungen. Prüfen Sie dort Zugang und mögliche Einschränkungen."
      ]
    },
    "url": "https://www.parcodeinebrodi.it/",
    "sourceLabel": "Ente Parco dei Nebrodi"
  },
  {
    "id": "mistretta-cascate",
    "title": {
      "it": "Mistretta e la Valle delle Cascate",
      "en": "Mistretta and the Valley of Waterfalls",
      "de": "Mistretta und das Tal der Wasserfälle"
    },
    "paragraphs": {
      "it": [
        "Mistretta è una tappa dell’entroterra da abbinare, nelle giornate adatte, alla Valle delle Cascate. Il Comune descrive un territorio attraversato da torrenti e salti d’acqua, tra cui Pietrebianche e Ciddìa.",
        "La portata delle cascate di Mistretta dipende dalle piogge e dalla stagione. Prima dell’escursione informati su percorribilità e meteo; non confondere la visita al borgo con l’accesso ai sentieri, che va preparato separatamente."
      ],
      "en": [
        "Combine a visit to Mistretta with the Valley of Waterfalls when conditions allow. The municipality describes streams and waterfalls including Pietrebianche and Ciddìa.",
        "Water flow varies with rainfall and season. Check trail conditions and weather; a visit to the town and a walk to the waterfalls require separate planning."
      ],
      "de": [
        "Bei geeigneten Bedingungen lässt sich Mistretta mit dem Tal der Wasserfälle verbinden. Die Gemeinde beschreibt dort unter anderem die Wasserfälle Pietrebianche und Ciddìa.",
        "Die Wassermenge hängt von Regen und Jahreszeit ab. Prüfen Sie Wegzustand und Wetter; Stadtbesuch und Wanderung zu den Wasserfällen müssen getrennt geplant werden."
      ]
    },
    "url": "https://www.comune.mistretta.me.it/Luoghi?ID=424",
    "sourceLabel": "Comune di Mistretta"
  },
  {
    "id": "tusa-halaesa",
    "title": {
      "it": "Tusa e Halaesa Arconidea",
      "en": "Tusa and Halaesa Arconidea",
      "de": "Tusa und Halaesa Arconidea"
    },
    "paragraphs": {
      "it": [
        "L’area archeologica di Halaesa Arconidea, nel territorio di Tusa, conserva le tracce di un’antica città in posizione affacciata sulla costa. È una tappa per chi vuole alternare arte contemporanea e storia durante il soggiorno.",
        "Puoi dedicarle una giornata insieme al borgo di Tusa e a una sosta a Castel di Tusa. Consulta la pagina del Parco archeologico di Tindari per apertura e modalità di visita: non programmare l’ingresso sulla base di orari trovati in vecchie guide."
      ],
      "en": [
        "The archaeological site of Halaesa Arconidea in Tusa preserves the remains of an ancient town overlooking the coast. It offers a historical counterpoint to the area’s contemporary art.",
        "Combine it with Tusa village and a stop in Castel di Tusa. Check current opening and visiting arrangements on the Tindari Archaeological Park website."
      ],
      "de": [
        "Die archäologische Stätte Halaesa Arconidea im Gebiet von Tusa bewahrt die Spuren einer antiken Stadt oberhalb der Küste. Sie ergänzt die zeitgenössische Kunst der Umgebung um Geschichte.",
        "Verbinden Sie den Besuch mit Tusa und Castel di Tusa. Aktuelle Öffnungen und Besuchsbedingungen finden Sie beim Archäologischen Park Tindari."
      ]
    },
    "url": "https://parchiarcheologici.regione.sicilia.it/tindari/siti-archeologici/area-archeologica-halaesa-arconidea-e-antiquarium-tusa/",
    "sourceLabel": "Parco archeologico di Tindari"
  },
  {
    "id": "mare",
    "title": {
      "it": "Santo Stefano di Camastra: mare e spiagge",
      "en": "Santo Stefano di Camastra: sea and beaches",
      "de": "Santo Stefano di Camastra: Meer und Strände"
    },
    "paragraphs": {
      "it": [
        "Il centro storico è rialzato rispetto alla costa. Dalla Dimora puoi organizzare una giornata al mare scegliendo tra Villa Margi, Caronia Marina e Castel di Tusa: il percorso cambia secondo la destinazione e il mezzo con cui ti muovi.",
        "Se viaggi con bambini o porti attrezzatura da spiaggia, considera il dislivello e chiedici indicazioni prima di decidere di scendere a piedi. Per servizi stagionali e condizioni del mare verifica sul posto; la struttura si trova in centro, non sul lungomare."
      ],
      "en": [
        "The historic centre stands above the coast. Consider Villa Margi, Caronia Marina or Castel di Tusa for a beach day; routes depend on your destination and transport.",
        "With children or beach equipment, consider the slope before walking down. Check seasonal services and sea conditions locally. La Dimora is in the town centre."
      ],
      "de": [
        "Die Altstadt liegt oberhalb der Küste. Für einen Strandtag kommen Villa Margi, Caronia Marina und Castel di Tusa infrage; die Anfahrt hängt von Ziel und Verkehrsmittel ab.",
        "Berücksichtigen Sie mit Kindern oder Strandausrüstung den Höhenunterschied. Prüfen Sie saisonale Angebote und Meeresbedingungen vor Ort. Die Dimora liegt im Ortszentrum."
      ]
    },
    "url": "https://comune.santostefanodicamastra.me.it/",
    "sourceLabel": "Comune di Santo Stefano di Camastra"
  },
  {
    "id": "letto-santo",
    "title": {
      "it": "Santuario del Letto Santo",
      "en": "Letto Santo Sanctuary",
      "de": "Heiligtum Letto Santo"
    },
    "paragraphs": {
      "it": [
        "Il Santuario del Letto Santo è un luogo di culto sul monte Santa Croce. Dal piazzale lo sguardo si apre sulla costa tirrenica e sui boschi dei Nebrodi: una meta per chi cerca una pausa nell’entroterra.",
        "Per accessi e iniziative religiose fai riferimento alle indicazioni locali. La visita va organizzata tenendo conto del percorso in collina e delle condizioni del giorno."
      ],
      "en": [
        "The Letto Santo Sanctuary is a place of worship on Mount Santa Croce, with views from its forecourt over the Tyrrhenian coast and the Nebrodi woods.",
        "Check local visitor and religious-event information. Plan for the hillside journey and the day’s conditions."
      ],
      "de": [
        "Das Heiligtum Letto Santo auf dem Monte Santa Croce ist ein religiöser Ort mit Blick über die tyrrhenische Küste und die Nebrodi-Wälder.",
        "Beachten Sie örtliche Hinweise zu Zugang und religiösen Veranstaltungen sowie die Bedingungen für die Fahrt in die Hügel."
      ]
    },
    "url": "https://santostefanodicamastra.comune.digital/visit-santo-stefano/c/0/i/8780876/santuario-letto-santo",
    "sourceLabel": "Guida del Comune"
  },
  {
    "id": "eventi",
    "title": {
      "it": "Gran Fondo della Ceramica e Carnevale",
      "en": "Gran Fondo della Ceramica and Carnival",
      "de": "Gran Fondo della Ceramica und Karneval"
    },
    "paragraphs": {
      "it": [
        "La Gran Fondo della Ceramica porta il ciclismo a Santo Stefano di Camastra. Se partecipi o accompagni qualcuno, verifica il programma dell’edizione che ti interessa sul sito degli organizzatori e avvisaci se porti la bici: alla Dimora è disponibile un deposito sicuro.",
        "Anche il Carnevale è un’occasione per vivere il paese. Date e programmi cambiano ogni anno: consulta gli avvisi del Comune prima di prenotare il viaggio intorno a un evento."
      ],
      "en": [
        "The Gran Fondo della Ceramica brings cycling to Santo Stefano di Camastra. Check the organisers’ programme for the edition you plan to attend. Let us know if bringing a bike; secure storage is available at La Dimora.",
        "Carnival is another opportunity to experience the town. Dates and programmes vary each year: check municipal announcements before planning your trip around an event."
      ],
      "de": [
        "Die Gran Fondo della Ceramica bringt den Radsport nach Santo Stefano di Camastra. Prüfen Sie das Programm der gewünschten Ausgabe beim Veranstalter. Für mitgebrachte Räder bietet die Dimora eine sichere Aufbewahrung.",
        "Auch der Karneval bietet Gelegenheit, den Ort zu erleben. Termine und Programme ändern sich jährlich; beachten Sie die Mitteilungen der Gemeinde."
      ]
    },
    "url": "https://granfondodellaceramica.com/regolamento-e-programma/",
    "sourceLabel": "Organizzatori Gran Fondo della Ceramica"
  },
  {
    "id": "mangiare",
    "title": {
      "it": "Chi Ciauru e una serata in centro",
      "en": "Chi Ciauru and an evening in town",
      "de": "Chi Ciauru und ein Abend im Zentrum"
    },
    "paragraphs": {
      "it": [
        "Per mangiare vicino alla Dimora, Chi Ciauru si trova in Via Leonida 8, nelle immediate vicinanze. È una scelta pratica se vuoi lasciare l’auto e trascorrere la serata a piedi nel centro storico.",
        "Chiedi direttamente al locale aperture e disponibilità per la tua serata. Il centro offre anche altri ristoranti e bar: scegli in base a ciò che ti va, senza dover trasformare ogni cena in uno spostamento."
      ],
      "en": [
        "Chi Ciauru, at Via Leonida 8, is very close to La Dimora. It is a practical option for eating nearby and spending the evening on foot in the historic centre.",
        "Contact the restaurant directly for opening times and availability. The centre also offers other restaurants and cafés."
      ],
      "de": [
        "Chi Ciauru in der Via Leonida 8 liegt ganz in der Nähe der Dimora. So können Sie in der Nähe essen und den Abend zu Fuß in der Altstadt verbringen.",
        "Fragen Sie Öffnungszeiten und Verfügbarkeit direkt beim Restaurant an. Im Zentrum gibt es außerdem weitere Lokale und Cafés."
      ]
    },
    "url": "https://www.google.com/maps/place/Pizzeria+Chi+Ciauru/@38.0158507,14.3472323,17z/data=!3m1!4b1!4m6!3m5!1s0x1316d9474e855cdb:0xab79655f9fb9ba05!8m2!3d38.0158507!4d14.3498072!16s%2Fg%2F11jv25b4r6",
    "sourceLabel": "Chi Ciauru · Google Maps"
  },
  {
    "id": "servizi-atm",
    "title": {
      "it": "Servizi pratici, arrivo e dove prelevare",
      "en": "Practical services, arrival and cash withdrawals",
      "de": "Praktische Dienste, Anreise und Geldautomaten"
    },
    "paragraphs": {
      "it": [
        "La stazione Santo Stefano di Camastra–Mistretta è sulla direttrice Palermo–Messina. Dalla Dimora sono circa 400 m, 7 minuti a piedi in discesa; al ritorno considera la salita e i bagagli. Per gli orari consulta Trenitalia e Interbus. Aeroporto di Palermo: circa 130 km, con stazione ferroviaria sotto il terminal. Scrivici prima di partire per organizzare l’ultimo tratto.",
        "Vicino alla Dimora: Farmacia Mangano, Via Vittorio Emanuele 60 (circa 90 m, 1 minuto); ATM UniCredit, Via della Vittoria 36–38 (280 m, 4 minuti); Supermercati Decò, Via Letto Santo 1 (750 m, 15 minuti). Sono stime a piedi da Google Maps; controlla aperture e disponibilità con i gestori.",
        "La Chiesa Madre di San Nicolò di Bari, in Piazza Matrice, è a circa 80 m, 1 minuto a piedi. Per parcheggi e servizi del soggiorno consulta le informazioni utili della Dimora."
      ],
      "en": [
        "Santo Stefano di Camastra–Mistretta station is on the Palermo–Messina railway. It is about 400 m, a 7-minute downhill walk from La Dimora; allow for the uphill return and luggage. Check Trenitalia and Interbus for current timetables. Palermo Airport is approximately 130 km away, with a railway station below the terminal. Contact us to plan the final part of your journey.",
        "Nearby: Farmacia Mangano, Via Vittorio Emanuele 60 (about 90 m, 1 minute); UniCredit ATM, Via della Vittoria 36–38 (280 m, 4 minutes); Supermercati Decò, Via Letto Santo 1 (750 m, 15 minutes). These are walking estimates from Google Maps; check opening times and availability with providers.",
        "San Nicolò di Bari Mother Church in Piazza Matrice is about 80 m, a 1-minute walk away. See La Dimora’s practical information for parking and guest services."
      ],
      "de": [
        "Der Bahnhof Santo Stefano di Camastra–Mistretta liegt an der Strecke Palermo–Messina. Ab der Dimora sind es etwa 400 m bzw. 7 Minuten zu Fuß bergab; bedenken Sie den Rückweg bergauf und Ihr Gepäck. Aktuelle Fahrpläne finden Sie bei Trenitalia und Interbus. Der Flughafen Palermo liegt etwa 130 km entfernt und hat einen Bahnhof unter dem Terminal. Schreiben Sie uns zur Planung des letzten Reiseabschnitts.",
        "In der Nähe: Farmacia Mangano, Via Vittorio Emanuele 60 (etwa 90 m, 1 Minute); UniCredit-Geldautomat, Via della Vittoria 36–38 (280 m, 4 Minuten); Supermercati Decò, Via Letto Santo 1 (750 m, 15 Minuten). Geschätzte Fußwege laut Google Maps; Öffnungszeiten und Verfügbarkeit bitte beim Anbieter prüfen.",
        "Die Pfarrkirche San Nicolò di Bari auf der Piazza Matrice liegt etwa 80 m bzw. 1 Gehminute entfernt. Parkmöglichkeiten und Angebote für Gäste stehen in den praktischen Informationen der Dimora."
      ]
    },
    "url": "https://www.unicredit.it/it/contatti-e-agenzie/lista-agenzie/me/santo-stefano-di-camastra.html",
    "sourceLabel": "UniCredit · filiali e ATM"
  }
];

// Share the same checked travel estimates with the downloadable guide.
for (const section of guideSections) {
  const routes = travelRoutes.filter(route => route.guide === section.id || (section.id === 'piramide-38-parallelo' && route.guide === 'fiumara-d-arte') || (section.id === 'palazzo-trabia' && route.guide === 'ceramiche'));
  for (const language of ['it', 'en', 'de'] as const) {
    if (routes.length) section.paragraphs[language].push(routes.map(route => routeText(route, language)).join('. ') + '.');
    if (section.id === 'ceramiche') section.paragraphs[language].push(routeNote[language]);
  }
}

export const guideCopy = {
  it: { title: 'Cosa vedere a Santo Stefano di Camastra e dintorni', description: 'Una guida tra ceramiche, Gole di Tiberio, Fiumara d’Arte, Nebrodi e costa: luoghi da scoprire e informazioni utili per organizzare il soggiorno.', eyebrow: 'La nostra guida al territorio', intro: 'Dalle botteghe del centro ai sentieri dell’entroterra, scegli il ritmo del tuo viaggio. Qui trovi le nostre idee per scoprire Santo Stefano di Camastra e i suoi dintorni, con i riferimenti da consultare prima di partire.', back: 'Torna al B&B', contents: 'Scegli da dove partire', download: 'Scarica gratuitamente la guida', pdf: 'PDF in italiano · da portare con te', source: 'Informazioni e fonte', updated: 'Aggiornata il 5 ottobre 2026. Aperture, accessi ed eventi possono cambiare: verifica con i gestori per le tue date.', stay: 'La tua stanza nel centro storico', stayText: 'La Dimora dei Ricci: quattro camere, tutte con bagno privato e colazione inclusa. Al rientro dalle escursioni, il paese è a pochi passi.', rooms: 'Scopri le camere', contact: 'Verifica disponibilità su WhatsApp', practical: 'Informazioni utili per il soggiorno', town: 'Avvisi e contatti del Comune', skip: 'Vai alla guida' },
  en: { title: 'What to see in Santo Stefano di Camastra and nearby', description: 'Explore ceramics, the Tiberio Gorges, Fiumara d’Arte, the Nebrodi and the coast, with useful visitor information for your stay.', eyebrow: 'Our local guide', intro: 'From old-town workshops to inland trails, find your own pace. Explore Santo Stefano di Camastra and the surrounding area with ideas and sources to check before setting out.', back: 'Back to the B&B', contents: 'Choose where to start', download: 'Download the free guide', pdf: 'PDF in Italian · take it with you', source: 'Visitor information and source', updated: 'Updated 5 October 2026. Opening times, access and events may change: check with operators for your dates.', stay: 'Your room in the historic centre', stayText: 'La Dimora dei Ricci: four rooms, all with a private bathroom and breakfast included. Return from your day out to the heart of town.', rooms: 'Discover the rooms', contact: 'Check availability on WhatsApp', practical: 'Useful information for your stay', town: 'Municipal notices and contacts', skip: 'Skip to the guide' },
  de: { title: 'Sehenswertes in Santo Stefano di Camastra und Umgebung', description: 'Keramik, Tiberio-Schlucht, Fiumara d’Arte, Nebrodi und Küste: Ausflugsziele und praktische Informationen für Ihren Aufenthalt.', eyebrow: 'Unser Reiseführer', intro: 'Von den Werkstätten der Altstadt bis zu den Wegen im Landesinneren: Finden Sie Ihren Rhythmus. Entdecken Sie Santo Stefano di Camastra und die Umgebung mit Ideen und Quellen für Ihre Planung.', back: 'Zurück zum B&B', contents: 'Wählen Sie Ihren Ausgangspunkt', download: 'Reiseführer kostenlos herunterladen', pdf: 'PDF auf Italienisch · für unterwegs', source: 'Besucherinformationen und Quelle', updated: 'Aktualisiert am 5. Oktober 2026. Öffnungen, Zugang und Veranstaltungen können sich ändern: Erkundigen Sie sich für Ihre Reisedaten beim Anbieter.', stay: 'Ihr Zimmer in der Altstadt', stayText: 'La Dimora dei Ricci: vier Zimmer, alle mit eigenem Bad und Frühstück. Nach Ihren Ausflügen kehren Sie ins Herz des Ortes zurück.', rooms: 'Zimmer entdecken', contact: 'Verfügbarkeit per WhatsApp prüfen', practical: 'Praktische Informationen zum Aufenthalt', town: 'Mitteilungen und Kontakte der Gemeinde', skip: 'Zum Reiseführer' },
};
