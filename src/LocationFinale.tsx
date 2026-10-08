import { useEffect, useRef } from 'react';
import { copy, type Language } from './content';
import { guestCopy } from './guest-info';
import { revisionPhotos } from './image-settings';
import { bookingCta, site } from './site-settings';
import SiteImage from './SiteImage';

export default function LocationFinale({ language, whatsapp }: { language: Language; whatsapp: string }) {
  const scene = useRef<HTMLElement>(null);
  const t = copy[language];
  useEffect(() => {
    const element = scene.current;
    if (!element) return;
    const motion = window.matchMedia('(prefers-reduced-motion: no-preference)');
    let frame = 0;
    let top = 0;
    let height = 0;
    const update = () => {
      frame = 0;
      const relative = window.scrollY + window.innerHeight - top;
      if (motion.matches && (relative < 0 || window.scrollY > top + height)) return;
      const offset = motion.matches ? Math.max(-52, Math.min(52, (relative - (height + window.innerHeight) / 2) * .12)) : 0;
      element.style.setProperty('--location-offset', `${offset}px`);
    };
    const measure = () => { top = element.getBoundingClientRect().top + window.scrollY; height = element.offsetHeight; update(); };
    const scroll = () => { if (motion.matches && !frame) frame = requestAnimationFrame(update); };
    const resize = new ResizeObserver(measure);
    resize.observe(element);
    // Opening an accordion above the scene also changes its document position.
    const main = document.getElementById('main');
    if (main) resize.observe(main);
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('resize', measure);
    motion.addEventListener('change', update);
    measure();
    return () => { cancelAnimationFrame(frame); resize.disconnect(); window.removeEventListener('scroll', scroll); window.removeEventListener('resize', measure); motion.removeEventListener('change', update); };
  }, []);
  return <section ref={scene} id="dove-siamo" className="location-finale" aria-labelledby="location-title">
    <div className="location-backdrop"><SiteImage src={revisionPhotos.location.src} alt={revisionPhotos.location.alt[language]} language={language} loading="lazy" sizes="100vw" /><div className="location-shader" aria-hidden="true" /></div>
    <div className="container location-final-content"><div className="location-final-copy" data-reveal>
      <p className="eyebrow">{t.locationEyebrow}</p><h2 id="location-title">{t.locationTitle}</h2>
      <address>Via Brofferio 12<br />98077 Santo Stefano di Camastra (ME)</address>
      <div className="location-contacts"><a href={`tel:+${site.phone}`}>{guestCopy[language].call}: {site.phoneLabel}</a><a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp: {site.whatsappLabel}</a></div>
      <div className="location-final-actions"><a className="button primary" href={whatsapp} target="_blank" rel="noopener noreferrer">{bookingCta[language]}</a><a className="button secondary" href={site.maps} target="_blank" rel="noopener noreferrer">{t.map} <span aria-hidden="true">↗</span></a></div>
    </div></div>
  </section>;
}
