import { useEffect, useRef, useState } from 'react';
import type { Language } from './content';
import SiteImage from './SiteImage';

type Photo = { src: string; alt: Record<Language, string> };
type Props = { language: Language; photos: readonly Photo[]; label: string; id: string; sizes: string };
const photoLabel = { it: 'Mostra fotografia', en: 'Show photo', de: 'Foto anzeigen' };

export default function PhotoSlider({ language, photos, label, id, sizes }: Props) {
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [touching, setTouching] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const region = useRef<HTMLDivElement>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const rotating = !reduced && visible && pageVisible && !hovered && !focused && !touching && photos.length > 1;

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const motion = () => setReduced(media.matches);
    const visibility = () => setPageVisible(!document.hidden);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting && entry.intersectionRatio >= .2), { threshold: .2 });
    if (region.current) observer.observe(region.current);
    motion(); visibility();
    media.addEventListener('change', motion);
    document.addEventListener('visibilitychange', visibility);
    return () => {
      observer.disconnect();
      media.removeEventListener('change', motion);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, []);

  useEffect(() => {
    if (!rotating) return;
    const timer = window.setTimeout(() => setIndex(value => (value + 1) % photos.length), 7500);
    return () => window.clearTimeout(timer);
  }, [rotating, index, photos.length]);

  const select = (value: number) => setIndex((value + photos.length) % photos.length);
  const endTouch = () => { touch.current = null; setTouching(false); };

  return <div ref={region} className="photo-slider" role="region" aria-label={label}
    aria-roledescription={language === 'it' ? 'carosello' : language === 'en' ? 'carousel' : 'Karussell'}
    onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(true); }}
    onPointerLeave={() => setHovered(false)}
    onFocusCapture={() => setFocused(true)}
    onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
    onKeyDown={event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault(); select(index + (event.key === 'ArrowRight' ? 1 : -1));
      }
    }}>
    <div className="welcome-slides" id={id}
      onTouchStart={event => { const point = event.touches[0]; touch.current = { x: point.clientX, y: point.clientY }; setTouching(true); }}
      onTouchEnd={event => {
        if (touch.current) {
          const dx = event.changedTouches[0].clientX - touch.current.x;
          const dy = event.changedTouches[0].clientY - touch.current.y;
          if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) select(index + (dx < 0 ? 1 : -1));
        }
        endTouch();
      }} onTouchCancel={endTouch}>
      {photos.map((photo, number) => <div key={photo.src} className={`welcome-slide${number === index ? ' is-active' : ''}`} aria-hidden={number !== index}>
        <SiteImage src={photo.src} alt={photo.alt[language]} language={language} sizes={sizes} loading="lazy" decoding="async" />
      </div>)}
      <div className="gallery-dots">{photos.map((photo, number) => <button key={photo.src} type="button"
        aria-label={`${photoLabel[language]} ${number + 1}`} aria-current={number === index ? 'true' : undefined}
        aria-controls={id} onClick={() => select(number)}><span /></button>)}</div>
    </div>
  </div>;
}
