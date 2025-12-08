import React from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Rooms from './components/Rooms';
import Booking from './components/Booking';
import FamilyStory from './components/FamilyStory';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Explore from './components/Explore';
import Events from './components/Events';
import FAQ from './components/FAQ';
import Location from './components/Location';
import ReviewForm from './components/ReviewForm';
import Contact from './components/Contact';
import CookieConsent from './components/CookieConsent';
import Footer from './components/Footer';
import StickyBookingBar from './components/StickyBookingBar';
import BookingBenefitsModal from './components/BookingBenefitsModal';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <WhyChooseUs />
          <Rooms />
          <Booking />
          <FamilyStory />
          <Services />
          <Reviews />
          <Gallery />
          <Explore />
          <Events />
          <FAQ />
          <Location />
          <ReviewForm />
          <Contact />
        </main>
        <Footer />
        <StickyBookingBar />
        <BookingBenefitsModal />
        <CookieConsent />
      </div>
    </LanguageProvider>
  );
}

export default App;