import { useCallback, useEffect, useRef, useState } from 'react';
import type { Language, Room } from './content';
import SiteImage from './SiteImage';
import { imageSettings, roomPhotoAlt } from './image-settings';
import { site } from './site-settings';
import { breakfastNote } from './guest-info';

interface RoomModalProps {
  room: Room;
  language: Language;
  labels: {
    close: string;
    previous: string;
    next: string;
    image: string;
    of: string;
    thumbnails: string;
    availability: string;
    stay: {
      eyebrow: string;
      winter: string;
      summer: string;
      checkIn: string;
      checkOut: string;
      winterIn: string;
      summerIn: string;
      out: string;
    };
  };
  onClose: () => void;
}

const messages: Record<Language, (room: string) => string> = {
  it: room => `Ciao, vorrei verificare la disponibilità della ${room} presso La Dimora dei Ricci.`,
  en: room => `Hello, I would like to check availability for the ${room} at La Dimora dei Ricci.`,
  de: room => `Hallo, ich möchte die Verfügbarkeit für das ${room} in der La Dimora dei Ricci prüfen.`,
};

export default function RoomModal({ room, language, labels, onClose }: RoomModalProps) {
  const [index, setIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const nativeDialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const touchStartRef = useRef<number | null>(null);

  const goPrevious = useCallback(() => setIndex(value => (value - 1 + room.gallery.length) % room.gallery.length), [room.gallery.length]);
  const goNext = useCallback(() => setIndex(value => (value + 1) % room.gallery.length), [room.gallery.length]);

  useEffect(() => {
    returnFocusRef.current = document.activeElement as HTMLElement | null;
    const dialog = nativeDialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') { event.preventDefault(); goPrevious(); }
      if (event.key === 'ArrowRight') { event.preventDefault(); goNext(); }
      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      dialog?.close();
      returnFocusRef.current?.focus();
    };
  }, [goNext, goPrevious, onClose]);

  const whatsapp = `https://wa.me/${site.whatsappPhone}?text=${encodeURIComponent(messages[language](room.name[language]))}`;

  return (
    <dialog ref={nativeDialogRef} className="modal-backdrop" aria-labelledby={`modal-${room.id}-title`} onCancel={event => { event.preventDefault(); onClose(); }} onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}>
      <div ref={dialogRef} className="room-modal">
        <button ref={closeRef} className="modal-close" type="button" onClick={onClose} aria-label={labels.close}>×</button>
        <div className="modal-gallery" onTouchStart={event => { touchStartRef.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={event => {
          if (touchStartRef.current === null) return;
          const delta = event.changedTouches[0].clientX - touchStartRef.current;
          if (Math.abs(delta) > 45) {
            if (delta > 0) goPrevious();
            else goNext();
          }
          touchStartRef.current = null;
        }}>
          <SiteImage language={language} key={room.gallery[index]} src={room.gallery[index]} alt={roomPhotoAlt(room.gallery[index], room.name[language], language)} sizes="(max-width: 980px) 100vw, 65vw" decoding="async" />
          <button className="gallery-arrow previous" type="button" onClick={goPrevious} aria-label={labels.previous}>←</button>
          <button className="gallery-arrow next" type="button" onClick={goNext} aria-label={labels.next}>→</button>
          <p className="gallery-count" aria-live="polite" aria-atomic="true">{index + 1} {labels.of} {room.gallery.length}{imageSettings[room.gallery[index]]?.caption?.[language] && <> · {imageSettings[room.gallery[index]].caption?.[language]}</>}</p>
        </div>
        <div className="modal-copy">
          <p className="modal-kicker">La Dimora dei Ricci</p>
          <h2 id={`modal-${room.id}-title`}>{room.name[language]}</h2>
          <p>{room.description[language]}</p>
          <p className="modal-breakfast">{breakfastNote[language]}</p>
          <ul className="feature-list modal-features">
            {room.features[language].map(feature => <li key={feature}>{feature}</li>)}
          </ul>
          <section className="modal-stay-times" aria-label={labels.stay.eyebrow}>
            <p className="stay-kicker">{labels.stay.eyebrow}</p>
            <div><strong>{labels.stay.winter}</strong><span>{labels.stay.checkIn}: {labels.stay.winterIn}</span><span>{labels.stay.checkOut}: {labels.stay.out}</span></div>
            <div><strong>{labels.stay.summer}</strong><span>{labels.stay.checkIn}: {labels.stay.summerIn}</span><span>{labels.stay.checkOut}: {labels.stay.out}</span></div>
          </section>
          <div className="thumbnail-list" aria-label={labels.thumbnails}>
            {room.gallery.map((image, imageIndex) => (
              <button key={image} type="button" className={imageIndex === index ? 'is-active' : ''} onClick={() => setIndex(imageIndex)} aria-label={`${labels.image} ${imageIndex + 1}`} aria-current={imageIndex === index ? 'true' : undefined}>
                <SiteImage language={language} src={image} alt="" sizes="100px" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
          <a className="button primary modal-cta" href={whatsapp} target="_blank" rel="noopener noreferrer">{labels.availability}</a>
        </div>
      </div>
    </dialog>
  );
}
