import React, { useState } from 'react';
import { Star, Send, CheckCircle, User, Mail, MessageSquare } from 'lucide-react';

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    title: '',
    review: '',
    room: '',
    stayDuration: '',
    travelType: ''
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const rooms = [
    'Camera Tulipano',
    'Camera Ortensia', 
    'Camera Papavero',
    'Camera Glicine'
  ];

  const travelTypes = [
    'Coppia',
    'Famiglia',
    'Viaggiatore singolo',
    'Gruppo di amici',
    'Viaggio di lavoro'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula invio recensione
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const renderStars = (rating: number, interactive: boolean = false) => {
    return Array.from({ length: 5 }, (_, index) => {
      const starValue = index + 1;
      const isActive = interactive 
        ? starValue <= (hoveredRating || formData.rating)
        : starValue <= rating;
      
      return (
        <Star
          key={index}
          className={`w-8 h-8 cursor-pointer transition-all duration-200 ${
            isActive ? 'text-yellow-400 fill-current' : 'text-gray-300 hover:text-yellow-300'
          }`}
          onClick={() => interactive && handleRatingClick(starValue)}
          onMouseEnter={() => interactive && setHoveredRating(starValue)}
          onMouseLeave={() => interactive && setHoveredRating(0)}
        />
      );
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <div className="mb-6">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-green-800 mb-4">
                  Grazie per la Vostra Recensione!
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  La vostra opinione è molto importante per noi e aiuterà altri viaggiatori 
                  a scoprire la bellezza della Dimora dei Ricci.
                </p>
                <div className="bg-green-50 rounded-lg p-4 mb-6">
                  <p className="text-green-800 font-medium">
                    📧 Riceverete una conferma via email a breve
                  </p>
                  <p className="text-green-700 text-sm mt-2">
                    La recensione sarà pubblicata dopo la verifica (entro 24 ore)
                  </p>
                </div>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      rating: 0,
                      title: '',
                      review: '',
                      room: '',
                      stayDuration: '',
                      travelType: ''
                    });
                  }}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
                >
                  Lascia un'altra Recensione
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lascia-recensione" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            Condividi la Tua Esperienza
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hai soggiornato alla Dimora dei Ricci? La tua recensione aiuterà altri viaggiatori 
            a scoprire la bellezza del nostro B&B e del territorio stefanese.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Informazioni Personali */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-3">
                    <User className="w-5 h-5 text-amber-600" />
                    <span>Nome e Cognome *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="Il vostro nome completo"
                  />
                </div>
                
                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-3">
                    <Mail className="w-5 h-5 text-amber-600" />
                    <span>Email *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="la.vostra@email.it"
                  />
                </div>
              </div>

              {/* Valutazione */}
              <div className="text-center">
                <label className="block text-lg font-medium text-gray-700 mb-4">
                  Come valutate il vostro soggiorno? *
                </label>
                <div className="flex justify-center space-x-2 mb-4">
                  {renderStars(formData.rating, true)}
                </div>
                <p className="text-sm text-gray-500">
                  {formData.rating === 0 && "Cliccate sulle stelle per valutare"}
                  {formData.rating === 1 && "😞 Molto insoddisfatto"}
                  {formData.rating === 2 && "😐 Insoddisfatto"}
                  {formData.rating === 3 && "🙂 Soddisfatto"}
                  {formData.rating === 4 && "😊 Molto soddisfatto"}
                  {formData.rating === 5 && "🤩 Eccezionale!"}
                </p>
              </div>

              {/* Dettagli Soggiorno */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Camera Soggiornata
                  </label>
                  <select
                    name="room"
                    value={formData.room}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Seleziona camera</option>
                    {rooms.map(room => (
                      <option key={room} value={room}>{room}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Durata Soggiorno
                  </label>
                  <input
                    type="text"
                    name="stayDuration"
                    value={formData.stayDuration}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="es. 2 notti"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Tipo di Viaggio
                  </label>
                  <select
                    name="travelType"
                    value={formData.travelType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Seleziona tipo</option>
                    {travelTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Titolo Recensione */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Titolo della Recensione
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  placeholder="es. Soggiorno perfetto nel cuore della Sicilia"
                />
              </div>

              {/* Recensione */}
              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-3">
                  <MessageSquare className="w-5 h-5 text-amber-600" />
                  <span>La Vostra Recensione *</span>
                </label>
                <textarea
                  name="review"
                  value={formData.review}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Raccontateci la vostra esperienza alla Dimora dei Ricci: cosa vi è piaciuto di più? Come sono state le camere? Cosa consigliereste ad altri viaggiatori?"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Minimo 50 caratteri - Attualmente: {formData.review.length}
                </p>
              </div>

              {/* Consenso Privacy */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="mt-1 w-5 h-5 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-700">
                    <span className="font-medium">Consenso al trattamento dei dati *</span>
                    <br />
                    Acconsento al trattamento dei miei dati personali per la pubblicazione della recensione 
                    sul sito web della Dimora dei Ricci e su piattaforme di recensioni partner. 
                    I dati saranno utilizzati esclusivamente per questo scopo.
                  </label>
                </div>
              </div>

              {/* Pulsante Invio */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting || formData.rating === 0 || formData.review.length < 50}
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white px-12 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-3 mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      <span>Invio in corso...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      <span>Pubblica Recensione</span>
                    </>
                  )}
                </button>
                
                {formData.rating === 0 && (
                  <p className="text-red-500 text-sm mt-3">
                    ⚠️ Selezionate una valutazione con le stelle
                  </p>
                )}
                
                {formData.review.length > 0 && formData.review.length < 50 && (
                  <p className="text-red-500 text-sm mt-3">
                    ⚠️ La recensione deve essere di almeno 50 caratteri
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Informazioni Aggiuntive */}
          <div className="mt-12 bg-blue-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Perché le Vostre Recensioni Sono Importanti
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-yellow-500" />
                  </div>
                  <h4 className="text-lg font-bold text-blue-800 mb-2">Aiutate Altri Viaggiatori</h4>
                  <p className="text-blue-700">Le vostre esperienze guidano le scelte di altri ospiti</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-lg font-bold text-blue-800 mb-2">Miglioriamo i Servizi</h4>
                  <p className="text-blue-700">I vostri feedback ci aiutano a crescere e migliorare</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-amber-600" />
                  </div>
                  <h4 className="text-lg font-bold text-blue-800 mb-2">Condividete Ricordi</h4>
                  <p className="text-blue-700">Raccontate la magia della Sicilia autentica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewForm;