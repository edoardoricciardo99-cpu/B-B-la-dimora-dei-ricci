import { useState, useEffect } from 'react';
import { Calendar, Users, Mail, Phone, User, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../i18n/LanguageContext';

interface Room {
  id: string;
  name: string;
  name_en: string;
  description: string;
  description_en: string;
  capacity: number;
  base_price: number;
  features: string[];
  image_url: string;
}

export default function Booking() {
  const { t, language } = useLanguage();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [numGuests, setNumGuests] = useState(2);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [isAvailable, setIsAvailable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    loadRooms();
  }, []);

  useEffect(() => {
    if (selectedRoom && checkIn && checkOut) {
      checkAvailability();
      calculatePrice();
    }
  }, [selectedRoom, checkIn, checkOut]);

  async function loadRooms() {
    const { data } = await supabase
      .from('rooms')
      .select('*')
      .eq('is_active', true);

    if (data) setRooms(data);
  }

  async function checkAvailability() {
    const { data: bookings } = await supabase
      .from('bookings')
      .select('*')
      .eq('room_id', selectedRoom)
      .neq('status', 'cancelled')
      .or(`check_in.lte.${checkOut},check_out.gte.${checkIn}`);

    const { data: blocked } = await supabase
      .from('blocked_dates')
      .select('*')
      .eq('room_id', selectedRoom)
      .gte('blocked_date', checkIn)
      .lte('blocked_date', checkOut);

    setIsAvailable(!bookings?.length && !blocked?.length);
  }

  async function calculatePrice() {
    const room = rooms.find(r => r.id === selectedRoom);
    if (!room || !checkIn || !checkOut) return;

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

    if (nights <= 0) {
      setTotalPrice(null);
      return;
    }

    const { data: pricing } = await supabase
      .from('seasonal_pricing')
      .select('*')
      .eq('room_id', selectedRoom)
      .lte('start_date', checkOut)
      .gte('end_date', checkIn);

    let total = 0;
    for (let i = 0; i < nights; i++) {
      const currentDate = new Date(start);
      currentDate.setDate(start.getDate() + i);
      const dateStr = currentDate.toISOString().split('T')[0];

      const dayPricing = pricing?.find(
        p => dateStr >= p.start_date && dateStr <= p.end_date
      );

      total += dayPricing ? dayPricing.price_per_night : room.base_price;
    }

    setTotalPrice(total);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isAvailable || !totalPrice) return;

    setLoading(true);
    setError('');
    setSuccess(false);

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

    const { error: submitError } = await supabase
      .from('bookings')
      .insert({
        room_id: selectedRoom,
        guest_name: guestName,
        guest_email: guestEmail,
        guest_phone: guestPhone,
        check_in: checkIn,
        check_out: checkOut,
        num_guests: numGuests,
        total_price: totalPrice,
        notes: notes,
        status: 'pending'
      });

    setLoading(false);

    if (submitError) {
      setError(t.booking.error);
    } else {
      setSuccess(true);
      setSelectedRoom('');
      setCheckIn('');
      setCheckOut('');
      setGuestName('');
      setGuestEmail('');
      setGuestPhone('');
      setNotes('');
      setTotalPrice(null);
    }
  }

  const selectedRoomData = rooms.find(r => r.id === selectedRoom);
  const nights = checkIn && checkOut ? Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)) : 0;

  const minCheckIn = new Date().toISOString().split('T')[0];
  const minCheckOut = checkIn || minCheckIn;

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.booking.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            {language === 'it'
              ? 'Compila il modulo per richiedere una prenotazione. Ti contatteremo entro 24 ore per confermare la disponibilità.'
              : 'Fill out the form to request a booking. We will contact you within 24 hours to confirm availability.'}
          </p>

          <div className="flex flex-col items-center gap-4 mt-8">
            <p className="text-gray-700 font-medium">
              {language === 'it'
                ? 'Oppure contattaci direttamente per una risposta immediata:'
                : 'Or contact us directly for immediate response:'}
            </p>
            <a
              href="https://wa.me/393270084357?text=Ciao%2C%20vorrei%20prenotare%20alla%20Dimora%20dei%20Ricci"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {language === 'it' ? 'Prenota via WhatsApp' : 'Book via WhatsApp'}
            </a>
          </div>
        </div>

        {success && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-800">
            <CheckCircle className="flex-shrink-0" />
            <p>{t.booking.success}</p>
          </div>
        )}

        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-800">
            <AlertCircle className="flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.booking.selectRoom} *
            </label>
            <select
              required
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="">{t.booking.selectRoom}</option>
              {rooms.map(room => (
                <option key={room.id} value={room.id}>
                  {language === 'it' ? room.name : room.name_en} - €{room.base_price}/{t.rooms.perNight}
                </option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="inline w-4 h-4 mr-1" />
                {t.booking.checkIn} *
              </label>
              <input
                type="date"
                required
                min={minCheckIn}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="inline w-4 h-4 mr-1" />
                {t.booking.checkOut} *
              </label>
              <input
                type="date"
                required
                min={minCheckOut}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Users className="inline w-4 h-4 mr-1" />
              {t.booking.guests} *
            </label>
            <input
              type="number"
              required
              min="1"
              max={selectedRoomData?.capacity || 10}
              value={numGuests}
              onChange={(e) => setNumGuests(parseInt(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          {selectedRoom && checkIn && checkOut && (
            <div className="p-4 bg-amber-50 rounded-lg">
              {!isAvailable ? (
                <p className="text-red-600 font-medium flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  {t.booking.roomUnavailable}
                </p>
              ) : totalPrice ? (
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">
                    {nights} {t.booking.nights}
                  </span>
                  <span className="text-2xl font-bold text-amber-600">
                    €{totalPrice.toFixed(2)}
                  </span>
                </div>
              ) : (
                <p className="text-gray-600">{t.booking.selectDates}</p>
              )}
            </div>
          )}

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {t.contact.title}
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline w-4 h-4 mr-1" />
                  {t.booking.guestName} *
                </label>
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline w-4 h-4 mr-1" />
                  {t.booking.guestEmail} *
                </label>
                <input
                  type="email"
                  required
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline w-4 h-4 mr-1" />
                  {t.booking.guestPhone}
                </label>
                <input
                  type="tel"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.booking.notes}
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !isAvailable || !totalPrice}
            className="w-full bg-amber-600 text-white py-4 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin">⏳</span>
                {language === 'it' ? 'Invio in corso...' : 'Sending...'}
              </span>
            ) : (
              t.booking.submit
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
