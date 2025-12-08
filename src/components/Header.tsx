import React, { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'camere', label: t.nav.rooms },
    { id: 'booking', label: t.nav.booking },
    { id: 'servizi', label: t.nav.services },
    { id: 'galleria', label: t.nav.gallery },
    { id: 'attrazioni', label: t.nav.attractions },
    { id: 'recensioni', label: t.nav.reviews },
    { id: 'contatti', label: t.nav.contact },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-5">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="/logo.jpeg"
              alt="La Dimora dei Ricci Logo"
              className="w-12 h-12 rounded-full object-cover shadow-md"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-amber-600 hover:scale-105 ${
                  isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="flex items-center gap-1 ml-4 border-l pl-4">
              <button
                onClick={() => setLanguage('it')}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'it'
                    ? 'bg-amber-600 text-white'
                    : isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              >
                IT
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'en'
                    ? 'bg-amber-600 text-white'
                    : isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'fr'
                    ? 'bg-amber-600 text-white'
                    : isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'es'
                    ? 'bg-amber-600 text-white'
                    : isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('de')}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'de'
                    ? 'bg-amber-600 text-white'
                    : isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              >
                DE
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded transition-colors"
              >
                {item.label}
              </button>
            ))}

            <div className="flex items-center gap-2 mt-4 pt-4 border-t">
              <Languages className="w-4 h-4 text-gray-500" />
              <button
                onClick={() => setLanguage('it')}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'it' ? 'bg-amber-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                IT
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'en' ? 'bg-amber-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'fr' ? 'bg-amber-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'es' ? 'bg-amber-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('de')}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'de' ? 'bg-amber-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                DE
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;