import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Calendar, Plus, Trash2, ArrowLeft, AlertCircle } from 'lucide-react';

interface BlockedDate {
  id: string;
  room_id: string;
  blocked_date: string;
  reason: string | null;
  rooms: {
    name: string;
  };
}

interface Room {
  id: string;
  name: string;
}

export default function BlockedDates() {
  const [blockedDates, setBlockedDates] = useState<BlockedDate[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    room_id: '',
    blocked_date: '',
    reason: ''
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [blockedDatesResult, roomsResult] = await Promise.all([
        supabase
          .from('blocked_dates')
          .select(`
            *,
            rooms (name)
          `)
          .order('blocked_date', { ascending: true }),
        supabase
          .from('rooms')
          .select('id, name')
          .eq('is_active', true)
      ]);

      if (blockedDatesResult.error) throw blockedDatesResult.error;
      if (roomsResult.error) throw roomsResult.error;

      setBlockedDates(blockedDatesResult.data || []);
      setRooms(roomsResult.data || []);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.room_id || !formData.blocked_date) {
      alert('Seleziona una camera e una data');
      return;
    }

    try {
      const { error } = await supabase
        .from('blocked_dates')
        .insert([{
          room_id: formData.room_id,
          blocked_date: formData.blocked_date,
          reason: formData.reason || null
        }]);

      if (error) throw error;

      setFormData({ room_id: '', blocked_date: '', reason: '' });
      setShowAddForm(false);
      await loadData();
    } catch (error) {
      console.error('Error adding blocked date:', error);
      alert('Errore durante l\'aggiunta della data bloccata');
    }
  };

  const deleteBlockedDate = async (id: string) => {
    if (!confirm('Sei sicuro di voler eliminare questa data bloccata?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('blocked_dates')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await loadData();
    } catch (error) {
      console.error('Error deleting blocked date:', error);
      alert('Errore durante l\'eliminazione della data bloccata');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString + 'T00:00:00').toLocaleDateString('it-IT', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const groupedByRoom = blockedDates.reduce((acc, date) => {
    const roomName = date.rooms.name;
    if (!acc[roomName]) {
      acc[roomName] = [];
    }
    acc[roomName].push(date);
    return acc;
  }, {} as Record<string, BlockedDate[]>);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Caricamento date bloccate...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link to="/admin/dashboard" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
              <span>Torna alla Dashboard</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestione Date Bloccate</h1>
            <p className="text-gray-600">Gestisci le date in cui le camere non sono disponibili</p>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Aggiungi Data
          </button>
        </div>

        {showAddForm && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Aggiungi Nuova Data Bloccata</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Camera *
                  </label>
                  <select
                    value={formData.room_id}
                    onChange={(e) => setFormData({ ...formData, room_id: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  >
                    <option value="">Seleziona una camera</option>
                    {rooms.map((room) => (
                      <option key={room.id} value={room.id}>{room.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Data *
                  </label>
                  <input
                    type="date"
                    value={formData.blocked_date}
                    onChange={(e) => setFormData({ ...formData, blocked_date: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Motivo (opzionale)
                </label>
                <input
                  type="text"
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  placeholder="Es: Manutenzione, Eventi privati, ecc."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                >
                  Aggiungi
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false);
                    setFormData({ room_id: '', blocked_date: '', reason: '' });
                  }}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Annulla
                </button>
              </div>
            </form>
          </div>
        )}

        {blockedDates.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Nessuna data bloccata</h3>
            <p className="text-gray-600">Aggiungi date in cui le camere non sono disponibili per prenotazioni.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(groupedByRoom).map(([roomName, dates]) => (
              <div key={roomName} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-amber-50 px-6 py-4 border-b border-amber-100">
                  <h3 className="text-lg font-bold text-gray-900">{roomName}</h3>
                  <p className="text-sm text-gray-600">{dates.length} {dates.length === 1 ? 'data bloccata' : 'date bloccate'}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {dates.map((date) => (
                      <div
                        key={date.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-red-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{formatDate(date.blocked_date)}</p>
                            {date.reason && (
                              <p className="text-sm text-gray-600">{date.reason}</p>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => deleteBlockedDate(date.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Elimina"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">Nota importante:</p>
            <p>Le date bloccate impediscono agli utenti di prenotare la camera per quella specifica data. Assicurati di inserire correttamente le date di manutenzione o eventi privati.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
