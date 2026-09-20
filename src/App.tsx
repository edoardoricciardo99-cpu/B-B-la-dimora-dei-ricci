import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import RoomModal from './RoomModal';
import GuestInformation from './GuestInformation';
import { breakfastNote, guestCopy } from './guest-info';
import { copy, languages, reviews, rooms, services, type Language, type Room } from './content';
import SiteImage from './SiteImage';
import { heroImage, seo, site } from './site-settings';
import { destinations, faqs, seasons, visitCopy } from './visit-content';
import { imageSettings, nearbyImages, roomPhotoAlt } from './image-settings';

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
  const hasRating = proof.rating !== null && proof.rating > 0 && proof.rating <= 5 && proof.count !== null && proof.count > 0 && !!proof.verifiedOn;
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
    for (const name of ['og:title', 'twitter:title']) document.querySelector(`meta[property="${name}"],meta[name="${name}"]`)?.setAttribute('content', seo[language].title);
    for (const name of ['og:description', 'twitter:description']) document.querySelector(`meta[property="${name}"],meta[name="${name}"]`)?.setAttribute('content', seo[language].description);
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
    const media = window.matchMedia('(min-width: 981px) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    const update = () => {
      frame = 0;
      const hero = heroRef.current;
      if (!hero) return;
      const top = hero.getBoundingClientRect().top;
      if (top < -hero.offsetHeight) return;
      const shift = media.matches ? Math.min(heroImage.parallax.maxPixels, Math.max(0, -top) * heroImage.parallax.intensity) : 0;
      hero.style.setProperty('--hero-offset', `${shift}px`);
    };
    const onScroll = () => { if (media.matches && !frame) frame = requestAnimationFrame(update); };
    const onChange = () => { cancelAnimationFrame(frame); frame = 0; update(); };
    window.addEventListener('scroll', onScroll, { passive: true });
    media.addEventListener('change', onChange); update();
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', onScroll); media.removeEventListener('change', onChange); };
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;
    const observer = new IntersectionObserver(([entry]) => setShowSticky(!entry.isIntersecting), { threshold: 0.08 });
    observer.observe(heroRef.current);
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
            <a className="brand-location" href="https://www.google.com/maps/search/?api=1&query=Via%20Brofferio%2012%2C%2098077%20Santo%20Stefano%20di%20Camastra" target="_blank" rel="noopener noreferrer" aria-label={t.headerMapLabel}>{t.headerMap}</a>
          </div>
          <button ref={menuRef} className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-nav" aria-label={menuOpen ? t.menuClose : t.menuOpen} onClick={() => setMenuOpen(value => !value)}>
            <span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>
          </button>
          <nav id="main-nav" className={menuOpen ? 'is-open' : ''} aria-label={language === 'it' ? 'Navigazione principale' : language === 'en' ? 'Main navigation' : 'Hauptnavigation'} onBlur={event => { if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget) && event.relatedTarget !== menuRef.current) setMenuOpen(false); }}>
            <div className="nav-links">
              <a href="#dimora" onClick={closeMenu}>{t.nav.home}</a>
              <a href="#camere" onClick={closeMenu}>{t.nav.rooms}</a>
              <a href="#servizi" onClick={closeMenu}>{t.nav.services}</a>
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
          <SiteImage language={language} className="hero-photo" src={heroImage.src} alt={t.alts.hero} sizes="100vw" decoding="async" fetchPriority="high" />
          <div className="hero-shade" aria-hidden="true"></div>
          <div className="hero-content">
            <div className="hero-copy">
              <p className="eyebrow">{t.heroEyebrow}</p>
              <h1>{t.heroTitle}{' '}<span className="hero-location">{v.h1Location}</span></h1>
              <p className="hero-subtitle">{t.heroText}</p>
              <div className="hero-actions">
                <a className="button primary" href={whatsapp} target="_blank" rel="noopener noreferrer">{t.availability}</a>
                <a className="button secondary" href="#camere">{t.discoverRooms}</a>
              </div>
              <p className="hero-note">{site.directBooking[language]}</p>
              <a className="hero-proof" href={hasRating ? proof.url : '#recensioni'} target={hasRating ? '_blank' : undefined} rel={hasRating ? 'noopener noreferrer' : undefined}>
                {hasRating ? <><span className="proof-stars" aria-hidden="true">★★★★★</span><strong>{proof.rating?.toLocaleString(language)}/5</strong> {proof.platform} · {proof.count} {v.reviewsCount}<small>{t.reviewsTitle}</small></> : <><span>{v.proof}</span><strong>{v.proofLink} <span aria-hidden="true">↗</span></strong></>}
              </a>
            </div>
            <ul className="hero-benefits" aria-label={t.benefitsLabel}>
              {t.trust.map((item, index) => <li key={item}><BenefitIcon index={index} /><span>{item}</span></li>)}
            </ul>
          </div>
        </section>

        <section id="dimora" className="section editorial-section">
          <div className="container editorial-grid">
            <div className="editorial-photo"><SiteImage language={language} src="/images/bnb/spazi-comuni/cucina-comune-con-ceramiche-siciliane.webp" alt={t.alts.kitchen} loading="lazy" decoding="async" /></div>
            <div className="editorial-copy"><p className="eyebrow dark">{t.homeEyebrow}</p><h2>{t.homeTitle}</h2><p>{t.homeText1}</p><p>{t.homeText2}</p><div className="signature-line" aria-hidden="true"></div></div>
          </div>
        </section>

        <section id="camere" className="section rooms-section">
          <div className="container">
            <div className="section-heading">
              <div><p className="eyebrow dark">{t.roomsEyebrow}</p><h2>{t.roomsTitle}</h2></div>
              <p>{t.roomsIntro}</p>
            </div>
            <aside className="stay-times" aria-labelledby="stay-times-title">
              <p id="stay-times-title" className="stay-kicker">{t.stay.eyebrow}</p>
              <div><strong>{t.stay.winter}</strong><span>{t.stay.checkIn}: {t.stay.winterIn}</span><span>{t.stay.checkOut}: {t.stay.out}</span></div>
              <div><strong>{t.stay.summer}</strong><span>{t.stay.checkIn}: {t.stay.summerIn}</span><span>{t.stay.checkOut}: {t.stay.out}</span></div>
            </aside>
            <p className="family-note">{v.families}</p>
            <p className="breakfast-note">{breakfastNote[language]} <a href="#colazione">{guestCopy[language].details} <span aria-hidden="true">→</span></a></p>
            <div className="rooms-grid">
              {rooms.map((room, index) => (
                <article className="room-card" key={room.id}>
                  <button className="room-photo" type="button" onClick={() => setSelectedRoom(room)} aria-label={`${t.viewRoom}: ${room.name[language]}`}>
                    <SiteImage language={language} src={room.cover} alt={roomPhotoAlt(room.cover, room.name[language], language)} loading="lazy" decoding="async" />
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </button>
                  <div className="room-copy">
                    <div><h3>{room.name[language]}</h3><p className="room-capacity">{room.capacityNote?.[language] ?? `${t.upTo} ${room.capacity} ${t.guests}`}</p></div>
                    <p>{room.summary[language]}</p>
                    <ul className="feature-list">{room.features[language].slice(0, 4).map(feature => <li key={feature}>{feature}</li>)}</ul>
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

        <section id="servizi" className="section services-section">
          <div className="container">
            <div className="section-heading light"><div><p className="eyebrow">{t.servicesEyebrow}</p><h2>{t.servicesTitle}</h2></div><p>{t.arrivalNote}</p></div>
            <div className="services-list">
              {services.map((service, index) => <article key={service.it[0]}>
                <SiteImage language={language} className="service-image" src={service.image} alt={service.alt[language]} sizes="(max-width: 760px) 100vw, (max-width: 980px) 50vw, 33vw" loading="lazy" decoding="async" />
                <div className="service-overlay" aria-hidden="true"></div>
                <div className="service-content"><div className="service-heading-row"><p className="service-number">0{index + 1}</p><h3>{service[language][0]}</h3></div><p>{service[language][1]}</p></div>
              </article>)}
            </div>
          </div>
        </section>

        <GuestInformation language={language} />

        <section id="dintorni" className="section nearby-section">
          <div className="container">
            <div className="section-heading"><div><p className="eyebrow dark">{t.nearbyEyebrow}</p><h2>{t.nearbyTitle}</h2></div><p>{t.nearbyText}</p></div>
            <div className="nearby-visual">
              <div className="nearby-gallery">
                {nearbyImages.map(photo => <figure key={photo.src}>
                  <SiteImage language={language} src={photo.src} alt={photo.alt[language]} loading="lazy" decoding="async" />
                  <figcaption>{imageSettings[photo.src]?.caption?.[language]} <a href={photo.url} target="_blank" rel="noopener noreferrer">{photo.credit} / Wikimedia Commons</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">{photo.license}</a></figcaption>
                </figure>)}
              </div>
              <ol>{destinations.map((item, index) => <li key={item.title.it}><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><div><h3>{item.title[language]}</h3><p>{item.text[language]}</p>{item.url && <a className="destination-source" href={item.url} target="_blank" rel="noopener noreferrer">{v.sourceLink}<span className="sr-only">: {item.title[language]}</span> ↗</a>}</div></li>)}</ol>
            </div>
            <p className="coast-note">{v.coast}</p>
            <div className="seasonal-intro"><h3>{v.seasonsTitle}</h3><p>{v.practical}</p></div>
            <div className="seasonal-list">{seasons.map(season => <div key={season.title.it}><h4>{season.title[language]}</h4><p>{season.text[language]}</p>{season.links && <ul className="useful-links">{season.links.map(link => <li key={link.url}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.label[language]} <span aria-hidden="true">↗</span></a></li>)}</ul>}</div>)}</div>
          </div>
        </section>

        <section id="recensioni" className="section reviews-section">
          <div className="container">
            <div className="section-heading"><div><p className="eyebrow dark">{t.reviewsEyebrow}</p><h2>{t.reviewsTitle}</h2></div><p>{t.reviewsText}</p></div>
            <div className="reviews-grid">{reviews.map(review => <blockquote key={review.name}><p>{review.quote[language]}</p><footer>{review.name}</footer></blockquote>)}</div>
            <a className="external-link" href="https://www.google.com/search?q=La+Dimora+dei+Ricci+Santo+Stefano+di+Camastra+recensioni" target="_blank" rel="noopener noreferrer">{t.googleReviews} <span aria-hidden="true">↗</span><span className="sr-only"> — {t.external}</span></a>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="container faq-layout">
            <div><p className="eyebrow dark">{v.faqNav}</p><h2>{v.faqTitle}</h2><p>{v.faqIntro}</p></div>
            <div className="faq-list">{faqs.map(faq => <details key={`${language}-${faq.id}`} id={`faq-${faq.id}`}><summary>{faq.question[language]}</summary><div><p>{faq.answer[language]}</p>{faq.link && <a href={faq.link.url} target="_blank" rel="noopener noreferrer">{faq.link.label[language]} ↗</a>}</div></details>)}</div>
          </div>
        </section>

        <section id="dove-siamo" className="section location-section">
          <div className="container location-grid">
            <div><p className="eyebrow dark">{t.locationEyebrow}</p><h2>{t.locationTitle}</h2></div>
            <div className="location-details"><address>Via Brofferio 12<br />98077 Santo Stefano di Camastra (ME)</address><p>{t.locationText}</p><p className="arrival-note">{t.arrival}</p><p className="contact-phone"><a href={`tel:+${site.phone}`}>{guestCopy[language].call}: {site.phoneLabel}</a></p><a className="button outline" href={site.maps} target="_blank" rel="noopener noreferrer">{t.map} <span aria-hidden="true">↗</span></a></div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container"><div><h2>{t.finalTitle}</h2><p>{t.finalText}</p></div><a className="button primary inverse" href={whatsapp} target="_blank" rel="noopener noreferrer">{t.finalButton}</a></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div><p>{t.footerAddress}</p><a href={`mailto:${site.email}`}>{site.email}</a><a href={`tel:+${site.phone}`}>{site.phoneLabel}</a></div>
          <div className="footer-times"><p className="footer-heading">{t.stay.eyebrow}</p><span><strong>{t.stay.winter}:</strong> {t.stay.checkIn} {t.stay.winterIn} · {t.stay.checkOut} {t.stay.out}</span><span><strong>{t.stay.summer}:</strong> {t.stay.checkIn} {t.stay.summerIn} · {t.stay.checkOut} {t.stay.out}</span></div>
          <div><p>CIR 19083091C110715<br />CIN IT083091C18EYCBOMV</p><a href={`/privacy.html#${language}`}>{t.privacy}</a><a href={`/termini.html#${language}`}>{guestCopy[language].terms}</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} La Dimora dei Ricci</span></div>
      </footer>

      {showSticky && <a className="sticky-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer">{t.availability}</a>}
      {selectedRoom && <RoomModal room={selectedRoom} language={language} labels={{ close: t.modalClose, previous: t.modalPrevious, next: t.modalNext, image: t.modalImage, of: t.modalOf, thumbnails: t.modalThumbnails, availability: t.availability, stay: t.stay }} onClose={closeModal} />}
    </>
  );
}
