import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Calendar, MessageSquare, Lock, LogOut, Home } from 'lucide-react';

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const menuItems = [
    {
      title: 'Gestione Prenotazioni',
      description: 'Visualizza, conferma e gestisci tutte le prenotazioni',
      icon: Calendar,
      link: '/admin/bookings',
      color: 'bg-blue-500'
    },
    {
      title: 'Messaggi Contatti',
      description: 'Leggi e rispondi ai messaggi ricevuti',
      icon: MessageSquare,
      link: '/admin/messages',
      color: 'bg-green-500'
    },
    {
      title: 'Date Bloccate',
      description: 'Gestisci le date di non disponibilità',
      icon: Lock,
      link: '/admin/blocked-dates',
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">La Dimora dei Ricci</h1>
                <p className="text-xs text-gray-500">Pannello Amministrativo</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">{user?.email}</span>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Esci
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Benvenuto nel Pannello Admin</h2>
          <p className="text-gray-600">Gestisci le prenotazioni, i messaggi e le disponibilità del tuo B&B</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.link}
                to={item.link}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200 group"
              >
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="font-bold text-amber-900 mb-2">Link Utili</h3>
          <div className="space-y-2">
            <a href="/" target="_blank" rel="noopener noreferrer" className="block text-amber-700 hover:text-amber-800 text-sm">
              → Visualizza il sito pubblico
            </a>
            <a href="mailto:info@ladimoradeiriccicastiglione.com" className="block text-amber-700 hover:text-amber-800 text-sm">
              → Email: info@ladimoradeiriccicastiglione.com
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
