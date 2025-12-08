import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          message: formData.message
        }]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Si è verificato un errore. Riprova o contattaci via WhatsApp.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contatti" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            Contattaci
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siamo qui per rispondere a tutte le vostre domande e aiutarvi a pianificare
            il soggiorno perfetto nella nostra dimora.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-2">Telefono</h3>
                <a href="tel:+393270084357" className="text-gray-600 hover:text-amber-600 transition-colors block">
                  327 008 4357
                </a>
                <a href="tel:+393286421509" className="text-gray-600 hover:text-amber-600 transition-colors block">
                  328 642 1509
                </a>
                <p className="text-sm text-gray-500 mt-1">Disponibili tutti i giorni dalle 8:00 alle 22:00</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/393270084357?text=Ciao%2C%20vorrei%20avere%20informazioni%20sulla%20Dimora%20dei%20Ricci"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contattaci su WhatsApp
                </a>
                <p className="text-sm text-gray-500 mt-2">Risposta rapida e assistenza immediata</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-2">Email</h3>
                <p className="text-gray-600">ladimoradeiricci@gmail.com</p>
                <p className="text-sm text-gray-500 mt-1">Risposta garantita entro 24 ore</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-4">Come Raggiungerci</h3>
                <p className="text-gray-600 font-medium mb-3">Via Brofferio n.12<br />Santo Stefano di Camastra, Messina</p>
                <p className="text-gray-600 mb-2">📍 Ci trovi a Santo Stefano di Camastra, il paese delle ceramiche!</p>

                <div className="space-y-3 mt-4">
                  <div>
                    <p className="font-semibold text-amber-700">🚗 In auto</p>
                    <p className="text-sm text-gray-600">Prendi l'autostrada A20 Messina–Palermo e esci a Santo Stefano di Camastra. Da lì segui le indicazioni per il centro storico — siamo a pochi minuti.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-amber-700">🚆 In treno</p>
                    <p className="text-sm text-gray-600">Scendi alla stazione S. Stefano di Camastra–Mistretta: la Dimora è vicina, puoi raggiungerci in taxi o con una breve passeggiata.</p>
                    <p className="text-sm text-green-700 font-medium mt-2">🚌 Nel periodo estivo è disponibile una navetta comunale gratuita con orari specifici.</p>
                    <p className="text-sm text-amber-700 mt-2">💡 Su richiesta anticipata e a seconda delle nostre disponibilità, possiamo venirvi a prendere alla stazione con un piccolo supplemento.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-amber-700">🚌 In bus</p>
                    <p className="text-sm text-gray-600">Le linee regionali SAIS fermano in via Nazionale, a pochi passi da noi.</p>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-3 mt-3">
                    <p className="text-sm text-amber-900 font-medium">📍 Ti basta cercare su Google Maps: <strong>La Dimora dei Ricci – Santo Stefano di Camastra</strong></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-2">Check-in / Check-out</h3>
                <p className="text-gray-600 font-semibold mb-2">Periodo Invernale:</p>
                <p className="text-gray-600">Check-in: 15:00 - 21:00</p>
                <p className="text-gray-600 mb-3">Check-out: 22:00</p>
                <p className="text-gray-600 font-semibold mb-2">Periodo Estivo:</p>
                <p className="text-gray-600">Check-in: 15:00</p>
                <p className="text-gray-600">Check-out: 23:00</p>
                <p className="text-sm text-gray-500 mt-2">Orari flessibili su richiesta</p>
              </div>
            </div>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <MessageCircle className="w-8 h-8 text-amber-600" />
              <h3 className="text-2xl font-bold text-amber-800">Richiedi Informazioni</h3>
            </div>
            
            {status === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-green-800">Messaggio inviato con successo!</p>
                  <p className="text-sm text-green-700 mt-1">Ti risponderemo entro 24 ore.</p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3 mb-6">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-red-800">Errore</p>
                  <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
                </div>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome e Cognome *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  placeholder="Il vostro nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  placeholder="la.vostra@email.it"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  placeholder="Il vostro numero di telefono"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Messaggio *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Raccontateci le vostre esigenze per il soggiorno..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 rounded-lg font-medium transition-colors duration-300 transform hover:scale-105 disabled:transform-none"
              >
                {status === 'loading' ? 'Invio in corso...' : 'Invia Richiesta'}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 h-64 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.8299819537847!2d14.347746476537154!3d38.01670297192804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1315e9a8e8e8e8e8%3A0x1234567890abcdef!2sVia%20Brofferio%2C%2012%2C%2098077%20Santo%20Stefano%20di%20Camastra%20ME!5e0!3m2!1sit!2sit!4v1699999999999!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa La Dimora dei Ricci - Via Brofferio 12, Santo Stefano di Camastra"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;