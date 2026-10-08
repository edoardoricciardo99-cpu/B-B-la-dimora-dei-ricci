import { useRef, useState } from 'react';
import { reviews, type Language } from './content';

export default function ReviewsCarousel({ language }: { language: Language }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const go = (index: number) => {
    const track = ref.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (track && card) track.scrollTo({ left: card.offsetLeft - (track.children[0] as HTMLElement).offsetLeft, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  const label = language === 'it' ? 'Recensioni degli ospiti' : language === 'en' ? 'Guest reviews' : 'Gästebewertungen';
  return <div className="reviews-carousel">
    <div ref={ref} className="reviews-track" id="reviews-track" role="region" aria-label={label} tabIndex={0} onScroll={event => { const track = event.currentTarget; const card = track.children[0] as HTMLElement; setActive(Math.round(track.scrollLeft / (card.offsetWidth + 16))); }} onKeyDown={event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); go(Math.max(0, Math.min(reviews.length - 1, active + (event.key === 'ArrowRight' ? 1 : -1)))); }
    }}>{reviews.map((review, index) => <blockquote key={review.name} data-index={index}><p>{review.quote[language]}</p><footer>{review.name}</footer></blockquote>)}</div>
    <div className="review-controls" aria-label={label}>{reviews.map((review, index) => <button key={review.name} type="button" aria-controls="reviews-track" aria-label={`${language === 'it' ? 'Leggi la recensione di' : language === 'en' ? 'Read the review by' : 'Bewertung lesen von'} ${review.name}`} aria-current={active === index ? 'true' : undefined} onClick={() => go(index)}><span /></button>)}</div>
  </div>;
}
