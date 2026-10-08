import TravelEstimates from './TravelEstimates';
import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import RoomAmenities from './RoomAmenities';
import RoomModal from './RoomModal';
import GuestInformation from './GuestInformation';
import KitchenSection from './KitchenSection';
import WelcomeGallery from './WelcomeGallery';
import DestinationMedia from './DestinationMedia';
import LocationFinale from './LocationFinale';
import ReviewsCarousel from './ReviewsCarousel';
import SeasonsSection from './SeasonsSection';
import StayBenefits from './StayBenefits';
import useScrollReveal from './useScrollReveal';
import { guestCopy } from './guest-info';
import { copy, languages, rooms, type Language, type Room } from './content';
import SiteImage from './SiteImage';
import { heroImage, seo, socialSeo, site, bookingCta } from './site-settings';
import { allHomeDestinations, homeFaqs, visitCopy } from './visit-content';
import { roomPhotoAlt } from './image-settings';

const genericMessages: Record<Language, string> = {
  it: 'Ciao, vorrei verificare disponibilità e tariffa presso La Dimora dei Ricci.',
  en: 'Hello, I would like to check availability and rates at La Dimora dei Ricci.',
  de: 'Hallo, ich möchte Verfügbarkeit und Preise in der La Dimora dei Ricci prüfen.',
};

function whatsappUrl(language: Language) {
  return `https://wa.me/${site.whatsappPhone}?text=${encodeURIComponent(genericMessages[language])}`;
}

function BenefitIcon({ index }: { index: number }) {
  if (index === 0) {
    return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 20V9l8-5 8 5v11M8 20v-6h8v6M3 20h18" /></svg>;
  }
  if (index === 1) {
    return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z" /><path d="M9 11.5h6M12 8.5v6" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="8" /><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z" /></svg>;
}

export default function App() {
  useScrollReveal();
  const [language, setLanguage] = useState<Language>('it');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [showSticky, setShowSticky] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const t = copy[language];
  const v = visitCopy[language];
  const proof = site.socialProof;
  const hasRating = proof.rating !== null && proof.rating > 0 && proof.rating <= 5 && !!proof.verifiedOn;
  const whatsapp = whatsappUrl(language);
  const closeModal = useCallback(() => setSelectedRoom(null), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = seo[language].title;
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', seo[language].description);
    for (const name of ['og:title', 'twitter:title']) document.querySelector(`meta[property="${name}"],meta[name="${name}"]`)?.setAttribute('content', socialSeo[language].title);
    for (const name of ['og:description', 'twitter:description']) document.querySelector(`meta[property="${name}"],meta[name="${name}"]`)?.setAttribute('content', socialSeo[language].description);
  }, [language]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) { setMenuOpen(false); menuRef.current?.focus(); }
    };
    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, [menuOpen]);

  useEffect(() => {
    if (!heroImage.parallax.enabled) return;
    const media = window.matchMedia('(prefers-reduced-motion: no-preference)');
    const small = window.matchMedia('(max-width: 767px)');
    const hero = heroRef.current;
    if (!hero) return;
    let frame = 0;
    let height = hero.offsetHeight;
    let start = hero.getBoundingClientRect().top + window.scrollY;
    const update = () => {
      frame = 0;
      const distance = Math.max(0, window.scrollY - start);
      if (distance > height && media.matches) return;
      const config = heroImage.parallax;
      const shift = media.matches ? Math.min(small.matches ? config.mobileMaxPixels : config.maxPixels, distance * (small.matches ? config.mobileIntensity : config.intensity)) : 0;
      hero.style.setProperty('--hero-offset', `${shift}px`);
    };
    const onScroll = () => { if (media.matches && !frame) frame = requestAnimationFrame(update); };
    const measure = () => { height = hero.offsetHeight; start = hero.getBoundingClientRect().top + window.scrollY; update(); };
    const resize = new ResizeObserver(measure);
    resize.observe(hero);
    window.addEventListener('scroll', onScroll, { passive: true });
    media.addEventListener('change', update); small.addEventListener('change', measure); update();
    return () => { cancelAnimationFrame(frame); resize.disconnect(); window.removeEventListener('scroll', onScroll); media.removeEventListener('change', update); small.removeEventListener('change', measure); };
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;
    const hero = heroRef.current;
    const finale = document.getElementById('dove-siamo');
    let heroVisible = true;
    let finaleVisible = false;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) { if (entry.target === hero) heroVisible = entry.isIntersecting; else finaleVisible = entry.isIntersecting; }
      setShowSticky(!heroVisible && !finaleVisible);
    }, { threshold: 0.08 });
    observer.observe(hero);
    if (finale) observer.observe(finale);
    return () => observer.disconnect();
  }, []);

  const chooseLanguage = (value: Language) => {
    setLanguage(value);
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">{t.skip}</a>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="header-inner">
          <div className="brand-cluster">
            <a className="brand" href="#home" onClick={closeMenu} aria-label="La Dimora dei Ricci">
              <img src={site.logo} width="600" height="211" alt="La Dimora dei Ricci — Bed & Breakfast" />
            </a>
            <a className="brand-location" href={site.maps} target="_blank" rel="noopener noreferrer">{t.headerMap}</a>
          </div>
          <button ref={menuRef} className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-nav" aria-label={menuOpen ? t.menuClose : t.menuOpen} onClick={() => setMenuOpen(value => !value)}>
            <span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>
          </button>
          <nav id="main-nav" className={menuOpen ? 'is-open' : ''} aria-label={language === 'it' ? 'Navigazione principale' : language === 'en' ? 'Main navigation' : 'Hauptnavigation'} onBlur={event => { if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget) && event.relatedTarget !== menuRef.current) setMenuOpen(false); }}>
            <div className="nav-links">
              <a href="#dimora" onClick={closeMenu}>{t.nav.home}</a>
              <a href="#camere" onClick={closeMenu}>{t.nav.rooms}</a>
              <a href="#informazioni-utili" onClick={closeMenu}>{t.nav.services}</a>
              <a href="#dintorni" onClick={closeMenu}>{t.nav.nearby}</a>
              <a href="#recensioni" onClick={closeMenu}>{t.nav.reviews}</a>
              <a href="#faq" onClick={closeMenu}>{v.faqNav}</a>
              <a href="#dove-siamo" onClick={closeMenu}>{t.nav.location}</a>
            </div>
            <div className="language-switcher" role="group" aria-label={t.language}>
              {languages.map(item => <button key={item.code} type="button" className={language === item.code ? 'is-active' : ''} onClick={() => chooseLanguage(item.code)} lang={item.code} aria-pressed={language === item.code} aria-label={item.name}>{item.label}</button>)}
            </div>
            <a className="header-cta" href={whatsapp} target="_blank" rel="noopener noreferrer">{t.whatsappShort}</a>
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section ref={heroRef} id="home" className="hero" style={{ '--hero-position-desktop': heroImage.desktop.position, '--hero-zoom-desktop': heroImage.desktop.zoom, '--hero-position-tablet': heroImage.tablet.position, '--hero-zoom-tablet': heroImage.tablet.zoom, '--hero-position-mobile': heroImage.mobile.position, '--hero-zoom-mobile': heroImage.mobile.zoom } as CSSProperties}>
          <div className="hero-media"><SiteImage language={language} className="hero-photo" src={heroImage.src} alt={t.alts.hero} sizes="(max-width: 767px) 1100px, 100vw" decoding="async" fetchPriority="high" />
          <div className="hero-shade" aria-hidden="true"></div></div>
          <div className="hero-content">
            <div className="hero-copy">
              <p className="eyebrow">{t.heroEyebrow}</p>
              <h1>{t.heroTitle}</h1>
              <p className="hero-subtitle">{t.heroText}</p>
              <div className="hero-actions">
                <a className="button primary" href={whatsapp} target="_blank" rel="noopener noreferrer">{bookingCta[language]}</a>
                <a className="button secondary" href="#camere">{t.discoverRooms}</a>
              </div>

              <a className="hero-proof" href={hasRating ? proof.url : '#recensioni'} target={hasRating ? '_blank' : undefined} rel={hasRating ? 'noopener noreferrer' : undefined}>
                {hasRating ? <><span className="proof-stars" aria-hidden="true">★</span><span>{proof.rating?.toLocaleString(language)} {language === 'it' ? 'su' : language === 'en' ? 'on' : 'auf'} {proof.platform}</span></> : <><span>{v.proof}</span><strong>{v.proofLink} <span aria-hidden="true">↗</span></strong></>}
              </a>
            </div>
            <ul className="hero-benefits" aria-label={t.benefitsLabel}>
              {t.trust.map((item, index) => <li key={item}><BenefitIcon index={index} /><span>{item}</span></li>)}
            </ul>
          </div>
        </section>

        <section id="dimora" className="section welcome-section" aria-labelledby="welcome-title">
          <div className="container">
            <div className="welcome-layout"><div className="welcome-intro" data-reveal><p className="eyebrow dark">{t.homeEyebrow}</p><h2 id="welcome-title">{t.homeTitle}</h2><p>{t.homeText1}</p></div><WelcomeGallery language={language} /></div>
            <StayBenefits language={language} />
          </div>
        </section>

        <section id="camere" className="section rooms-section">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div><p className="eyebrow dark">{t.roomsEyebrow}</p><h2>{t.roomsTitle}</h2></div>
              <p>{t.roomsIntro}</p>
            </div>
            <div className="rooms-grid">
              {rooms.map((room, index) => (
                <article data-reveal className="room-card" key={room.id}>
                  <button className="room-photo" type="button" onClick={() => setSelectedRoom(room)} aria-label={`${t.viewRoom}: ${room.name[language]}`}>
                    <SiteImage language={language} src={room.cover} alt={roomPhotoAlt(room.cover, room.name[language], language)} loading="lazy" decoding="async" />
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </button>
                  <div className="room-copy">
                    <div><h3>{room.name[language]}</h3><p className="room-capacity">{room.capacityNote?.[language] ?? `${t.upTo} ${room.capacity} ${t.guests}`}</p></div>
                    <p>{room.summary[language]}</p>
                    {room.id !== 'tulipano' && <p className="room-distinction">{room.features[language][1]}</p>}
                    <RoomAmenities room={room} language={language} />
                    <div className="room-actions">
                      <button className="button card-secondary" type="button" onClick={() => setSelectedRoom(room)}>{t.viewRoom} <span aria-hidden="true">→</span></button>
                      <a className="button card-primary" href={`https://wa.me/${site.whatsappPhone}?text=${encodeURIComponent(language === 'it' ? `Ciao, vorrei verificare la disponibilità della ${room.name.it} presso La Dimora dei Ricci.` : language === 'en' ? `Hello, I would like to check availability for the ${room.name.en} at La Dimora dei Ricci.` : `Hallo, ich möchte die Verfügbarkeit für das ${room.name.de} in der La Dimora dei Ricci prüfen.`)}`} target="_blank" rel="noopener noreferrer">{t.askAvailability}</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <KitchenSection language={language} />
        <GuestInformation language={language} />

        <section id="dintorni" className="section nearby-section">
          <div className="container">
            <div className="section-heading" data-reveal><div><p className="eyebrow dark">{t.nearbyEyebrow}</p><h2>{t.nearbyTitle}</h2></div><p>{t.nearbyText}</p></div>
            <ol className="destination-list destination-editorial">{allHomeDestinations.map((item, index) => <li key={item.title.it} data-reveal>
              <DestinationMedia destination={item.title.it} title={item.title[language]} language={language} index={index} />
              <div className="destination-copy"><span className="destination-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><h3>{item.title[language]}</h3><p>{item.text[language]}</p><TravelEstimates destination={item.title.it} language={language} /><div className="destination-links">{item.url && <a className="destination-source" href={item.url} target="_blank" rel="noopener noreferrer">{v.sourceLink}<span className="sr-only">: {item.title[language]}</span> ↗</a>}{item.extraLink && <a className="destination-source" href={item.extraLink.url} target="_blank" rel="noopener noreferrer">{item.extraLink.label[language]} ↗</a>}</div></div>
            </li>)}</ol>
            <SeasonsSection language={language} />
          </div>
        </section>

        <section id="recensioni" className="section reviews-section">
          <div className="container">
            <div className="section-heading" data-reveal><div><p className="eyebrow dark">{t.reviewsEyebrow}</p><h2>{t.reviewsTitle}</h2></div><p>{t.reviewsText}</p></div>
            <ReviewsCarousel language={language} />
            <a className="external-link" href={proof.url} target="_blank" rel="noopener noreferrer">{t.googleReviews} <span aria-hidden="true">↗</span><span className="sr-only"> — {t.external}</span></a>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="container faq-layout">
            <div><p className="eyebrow dark">{v.faqNav}</p><h2>{v.faqTitle}</h2><p>{v.faqIntro}</p></div>
            <div className="faq-list">{homeFaqs.map(faq => <details key={`${language}-${faq.id}`} id={`faq-${faq.id}`}><summary>{faq.question[language]}</summary><div>{faq.answer[language].split('\n\n').map(paragraph => <p key={paragraph}>{paragraph}</p>)}{faq.link && <a href={faq.link.url} target="_blank" rel="noopener noreferrer">{faq.link.label[language]} ↗</a>}</div></details>)}</div>
          </div>
        </section>

        <LocationFinale language={language} whatsapp={whatsapp} />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div><p>{t.footerAddress}</p><a href={`mailto:${site.email}`}>{site.email}</a><a href={`tel:+${site.phone}`}>{guestCopy[language].call}: {site.phoneLabel}</a><a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp: {site.whatsappLabel}</a></div>
          <div className="footer-times"><p className="footer-heading">{guestCopy[language].eyebrow}</p><a href="#informazioni-utili">{guestCopy[language].title}</a><a href="#camere">{t.discoverRooms}</a></div>
          <div><p>CIR 19083091C110715<br />CIN IT083091C18EYCBOMV</p><a href={`/privacy.html#${language}`}>{t.privacy}</a><a href={`/termini.html#${language}`}>{guestCopy[language].terms}</a></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 La Dimora dei Ricci · Design by Sergio Todaro</span></div>
      </footer>

      <div className={`booking-dock${showSticky ? ' is-visible' : ''}`}><a className="sticky-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer">{bookingCta[language]}</a></div>
      {selectedRoom && <RoomModal room={selectedRoom} language={language} labels={{ close: t.modalClose, previous: t.modalPrevious, next: t.modalNext, image: t.modalImage, of: t.modalOf, thumbnails: t.modalThumbnails, availability: t.availability, stay: t.stay }} onClose={closeModal} />}
    </>
  );
}
