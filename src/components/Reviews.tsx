import React, { useState } from 'react';
import { Star, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const reviews = [
  {
    id: 1,
    name: "Antonio Di Natale",
    rating: 5,
    text: "Perfetto, assolutamente tutto perfetto, posizione in pieno centro, camere accoglienti e ultra moderne con tanto confort.. qualità prezzo molto onesta.. se dovessi tornare a Santo Stefano.. è una vera garanzia. Da 10 e lode",
    date: "1 mese fa",
    scores: {
      camere: 5.0,
      servizio: 5.0,
      posizione: 5.0
    }
  },
  {
    id: 17,
    name: "Martine",
    rating: 5,
    text: "Un ottimo alloggio, situato in posizione ideale con tutti i servizi! Andateci a occhi chiusi, lo consiglio vivamente! Grazie Edoardo per la vostra accoglienza!",
    date: "1 settimana fa",
    type: "Ospite internazionale",
    country: "Francia",
    score: 10
  },
  {
    id: 13,
    name: "Ion",
    rating: 5,
    text: "Abbiamo ricevuto inaspettatamente un appartamento di 2 stanze, con cucina separata e zona pranzo. La proprietaria ha risposto prontamente e si è anche offerta di aiutarci a portare i bagagli dalla stazione quando ha notato che non eravamo con l'auto.",
    date: "maggio 2025",
    type: "Coppia",
    country: "Romania",
    room: "Camera Matrimoniale con Bagno Privato",
    stay: "1 notte",
    score: 10,
    originalText: "We received an unexpected 2-room apartment, with separate kitchen and dining area. The host responded promptly and she even offered to help us carry the luggages from the train station when she noticed we are not with a car."
  },
  {
    id: 16,
    name: "Giacomina",
    rating: 5,
    text: "Stanza grande comoda e con un terrazzo a disposizione. La pulizia impeccabile. Da aggiungere, inoltre, l'accoglienza e la disponibilità dei proprietari che hanno anche dato suggerimenti su cosa visitare nei dintorni. Consigliatissimo",
    date: "agosto 2024",
    type: "Coppia",
    country: "Italia",
    room: "Camera Tripla con Bagno Privato",
    stay: "1 notte",
    score: 10
  },
  {
    id: 15,
    name: "Bruce",
    rating: 5,
    text: "Era un buon prezzo, pulito, confortevole e centrale. Il proprietario era cordiale e disponibile; è solo a pochi minuti a piedi dal centro città.",
    date: "settembre 2022",
    type: "Viaggiatore singolo",
    country: "Germania",
    room: "Camera Doppia con Letti Singoli",
    stay: "4 notti",
    score: 10,
    originalText: "Es war ein guter Preis, sauber, komfortabel und zentral. Der Gastgeber war freundlich und hilfsbereit; es ist nur ein paar minuten zu fuß in die stadt"
  },
  {
    id: 14,
    name: "Noelia",
    rating: 5,
    text: "Era molto ampio e con tutto quello che serve. Incredibile rapporto qualità-prezzo. Il proprietario molto attento e ospitale, ti dà raccomandazioni della zona.",
    date: "agosto 2023",
    type: "Coppia",
    country: "Spagna",
    room: "Camera Matrimoniale con Bagno Privato",
    stay: "1 notte",
    score: 10,
    originalText: "Era muy amplio y con todo lo que se necesita. Increíble relación calidad-precio. El dueño muy atento y hospitalario, te da recomendaciones de la zona."
  },
  {
    id: 10,
    name: "Ospite Internazionale",
    rating: 5,
    text: "Camere perfette nel centro di Santo Stefano! Il proprietario è stato eccezionalmente cordiale e disponibile! Abbiamo prenotato le camere per 5 persone con poco preavviso e tutto è stato perfetto!",
    date: "aprile 2025",
    type: "Gruppo",
    score: 10,
    originalText: "Perfect rooms in the center of Santo Stefano! The host was exceptionally friendly and accommodating! We booked the rooms for 5 on short notice and everything was perfect!"
  },
  {
    id: 11,
    name: "Linda",
    rating: 5,
    text: "L'appartamento era pulito con tutto quello di cui avevamo bisogno, la posizione è fantastica! Il proprietario sembrava davvero una brava persona! Lo raccomando!",
    date: "agosto 2024",
    type: "Coppia",
    country: "Lettonia",
    room: "Camera Tripla con Bagno Privato",
    stay: "1 notte",
    score: 10,
    originalText: "Apartment was clean with all we needed, location is great! Owner looked like really nice people! Recommend!"
  },
  {
    id: 12,
    name: "Nerea",
    rating: 5,
    text: "Ci è piaciuta molto la zona, molto piacevole e sicura. La posizione, parcheggio facile e gratuito nelle vicinanze. Per cenare ci sono buoni ristoranti dietro l'angolo. Era pulito, nuovo, comodo e con persiane. L'aria condizionata e il ventilatore a soffitto. Un successo! Anfitrione molto piacevole. Niente, tutto perfetto.",
    date: "luglio 2025",
    type: "Coppia",
    country: "Spagna",
    room: "Camera Tripla con Bagno Privato",
    stay: "1 notte",
    score: 9.0,
    originalText: "Nos gusto la zona muy agradable y segura. La ubicación, aparcamiento facil y gratis cerca. Para cenar hay buenos restaurantes a la vuelta de la esquina. Estaba limpio, nuevo, comodo y con persianas. El aire acondicionado y ventilador de techo. Un acierto! Anfitrión muy agradable. Nada todo perfecto"
  },
  {
    id: 9,
    name: "Mihai",
    rating: 5,
    text: "Vicino ai ristoranti. Parcheggio nelle vicinanze della struttura. Può diventare un po' rumoroso la sera dal ristorante accanto, ma l'appartamento ha un ottimo isolamento acustico, quindi non ci ha disturbato.",
    date: "agosto 2025",
    type: "Gruppo",
    country: "Romania",
    room: "Camera Quadrupla con Bagno Privato",
    stay: "2 notti",
    score: 10,
    originalText: "Close to restaurants. Parking near the location. It can get a bit nosy in the evening from the restaurant next door, but the apartment has very good sound insulation, so it didn't bother us."
  },
  {
    id: 2,
    name: "Annalena Clara",
    rating: 5,
    text: "Gentilissima proprietaria, l'alloggio è molto pulito e spazioso. C'è tutto quello di cui si ha bisogno. La padrona di casa ci ha addirittura aspettato per il check-in e ci ha permesso di fare il check-in a mezzanotte – davvero molto premurosa.",
    date: "2 mesi fa",
    type: "Coppia",
    scores: {
      camere: 5.0,
      servizio: 5.0,
      posizione: 4.0
    },
    highlights: ["Tranquillo", "Adatto ai bambini", "Buon prezzo"]
  },
  {
    id: 8,
    name: "Miroslav Bauer",
    rating: 5,
    text: "Proprietario gentilissimo, appartamento nuovo e pulito proprio nel centro città. Esperienza eccellente! Grazie - Posto incantevole, città incantevole.",
    date: "3 anni fa",
    originalText: "Very nice owner, new, clean apartment directly in city center. Excellent experience! Thank you - Lovely place, lovely city."
  },
  {
    id: 7,
    name: "Peter Rondeel",
    rating: 5,
    text: "Una camera molto bella e pulita, nel centro della città. Mi ha sorpreso positivamente! Tutto è nuovo e sembra non essere stato utilizzato prima. La padrona di casa è molto gentile e professionale. Vicino al centro con bar e ristoranti. Non troppi turisti, quindi molto popolare tra gli italiani.",
    date: "4 mesi fa",
    type: "Vacanza • Da solo",
    scores: {
      camere: 5.0,
      servizio: 4.0,
      posizione: 4.0
    },
    highlights: ["Di lusso", "Tranquillo", "Buon prezzo"],
    originalText: "Een erg mooie en schone kamer, in het centrum van het stadje. Het verraste mij positief! Alles is nieuw en lijkt niet eerder gebruikt. De gastvrouw is erg aardig en professioneel. Dichtbij het centrum met bars en restaurants. Niet teveel touristen, dus erg onder de Italiaanse mensen."
  },
  {
    id: 6,
    name: "Roberta Barone",
    rating: 5,
    text: "Esperienza eccellente in una struttura moderna e ben posizionata. Camera spaziosa, pulita e climatizzata. Ottima la posizione centrale con tutto a portata di mano.",
    date: "2 mesi fa",
    type: "Vacanza • Coppia",
    scores: {
      camere: 5.0,
      servizio: 5.0,
      posizione: 5.0
    },
    highlights: ["Tranquillo", "Buon prezzo"],
    details: {
      camere: "Camera spaziosa pulita moderna climatizzata",
      attivita: "Ristoranti, bar, alimentari negozio... un po' di tutto",
      percorribilita: "Ottima posizione in centro",
      mangiare: "Da Giannino a due passi dalla struttura",
      parcheggio: "Parcheggio facile e gratuito"
    }
  },
  {
    id: 3,
    name: "Carla Reale",
    rating: 5,
    text: "Un vero cinque stelle. Ottima location, disponibilità, gentilezza e pulizia. Situato al centro di Santo Stefano di Camastra. Consigliato!",
    date: "3 mesi fa",
    type: "Vacanza • Coppia",
    scores: {
      camere: 5.0,
      servizio: 5.0,
      posizione: 5.0
    },
    highlights: ["Tranquillo"],
    details: {
      camere: "Accogliente e pulite",
      attivita: "Servizi molto vicini",
      percorribilita: "Ottima"
    }
  },
  {
    id: 5,
    name: "Antonina Consales",
    rating: 5,
    text: "Ottimo posto! Struttura nuova e moderna, con posizione strategica per poter visitare le meraviglie siciliane! Proprietari molto cortesi e disponibili! Esperienza da ripetere!",
    date: "3 anni fa",
    type: "Vacanza",
    scores: {
      camere: 5.0,
      servizio: 5.0,
      posizione: 5.0
    }
  },
  {
    id: 4,
    name: "Giuseppe Glorioso",
    rating: 5,
    text: "Ottimo posto! Esperienza da ripetere sicuramente! Stanza molto molto confortevole e moderna, tutto nuovo ed efficiente, ottima la pulizia, si è vicini a tutti i vari locali e a pochi chilometri ci sono varie spiagge. Il proprietario è una persona disponibile e garbata, raccomando vivamente il posto poiché ci siamo trovati veramente bene!",
    date: "3 anni fa",
    type: "Vacanza • Coppia",
    scores: {
      camere: 5.0,
      servizio: 5.0,
      posizione: 5.0
    }
  }
];

const Reviews = () => {
  const { language } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());

  const displayedReviews = showAll ? reviews : reviews.slice(0, 6);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const toggleReview = (id: number) => {
    const newExpanded = new Set(expandedReviews);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedReviews(newExpanded);
  };

  const scrollToReviewForm = () => {
    window.open('https://g.page/r/YOUR_GOOGLE_PLACE_ID/review', '_blank');
  };

  return (
    <section id="recensioni" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            {language === 'it' ? 'Recensioni dei Nostri Ospiti' : 'Guest Reviews'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'it'
              ? 'Leggete cosa dicono i nostri ospiti della loro esperienza alla Dimora dei Ricci'
              : 'Read what our guests say about their experience at La Dimora dei Ricci'}
          </p>

          <div className="flex items-center justify-center space-x-2 mt-6">
            <div className="flex space-x-1">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-bold text-amber-800">5.0</span>
            <span className="text-gray-600">
              {language === 'it' ? 'su Google Reviews' : 'on Google Reviews'}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {language === 'it'
              ? `Basato su ${reviews.length} recensioni verificate`
              : `Based on ${reviews.length} verified reviews`}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedReviews.map((review) => (
            <div 
              key={review.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              <div className="absolute top-4 right-4 text-amber-200">
                <Quote className="w-8 h-8" />
              </div>
              
              {review.country && (
                <div className="mb-2">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                    🌍 {review.country}
                  </span>
                </div>
              )}
              
              {review.score && (
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-3xl font-bold text-green-600">{review.score}</span>
                  <span className="text-green-600 font-medium">Eccezionale</span>
                </div>
              )}
              
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(review.rating)}
              </div>
              
              {review.type && (
                <div className="mb-3">
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                    {review.type}
                  </span>
                  {review.room && (
                    <span className="ml-2 bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {review.room}
                    </span>
                  )}
                  {review.stay && (
                    <span className="ml-2 bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {review.stay}
                    </span>
                  )}
                </div>
              )}
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{review.text}"
              </p>
              
              {review.scores && (
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Camere</span>
                    <span className="font-medium text-amber-700">{review.scores.camere}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Servizio</span>
                    <span className="font-medium text-amber-700">{review.scores.servizio}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Posizione</span>
                    <span className="font-medium text-amber-700">{review.scores.posizione}</span>
                  </div>
                </div>
              )}
              
              {review.highlights && (
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Punti forti dell'hotel:</h5>
                  <div className="flex flex-wrap gap-2">
                    {review.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {review.details && (
                <div className="mb-4 space-y-2">
                  {review.details.camere && (
                    <div className="text-sm">
                      <span className="font-medium text-gray-600">Camere: </span>
                      <span className="text-gray-700">{review.details.camere}</span>
                    </div>
                  )}
                  {review.details.attivita && (
                    <div className="text-sm">
                      <span className="font-medium text-gray-600">Attività nelle vicinanze: </span>
                      <span className="text-gray-700">{review.details.attivita}</span>
                    </div>
                  )}
                  {review.details.percorribilita && (
                    <div className="text-sm">
                      <span className="font-medium text-gray-600">Percorribilità a piedi: </span>
                      <span className="text-gray-700">{review.details.percorribilita}</span>
                    </div>
                  )}
                  {review.details.mangiare && (
                    <div className="text-sm">
                      <span className="font-medium text-gray-600">Mangiare e bere: </span>
                      <span className="text-gray-700">{review.details.mangiare}</span>
                    </div>
                  )}
                  {review.details.parcheggio && (
                    <div className="text-sm">
                      <span className="font-medium text-gray-600">Dettagli importanti: </span>
                      <span className="text-gray-700">{review.details.parcheggio}</span>
                    </div>
                  )}
                </div>
              )}
              
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-amber-800">{review.name}</h4>
                    <p className="text-sm text-gray-500">Google Reviews</p>
                  </div>
                  <span className="text-sm text-gray-400">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && reviews.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              {language === 'it' ? 'Mostra tutte le recensioni' : 'Show all reviews'}
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        )}

        {showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              {language === 'it' ? 'Mostra meno' : 'Show less'}
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>
        )}

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">
              {language === 'it' ? 'Condividi la Tua Esperienza' : 'Share Your Experience'}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'it'
                ? 'Hai soggiornato da noi? Lascia una recensione su Google!'
                : 'Did you stay with us? Leave a review on Google!'}
            </p>
            <button
              onClick={scrollToReviewForm}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {language === 'it' ? 'Lascia una Recensione' : 'Leave a Review'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;