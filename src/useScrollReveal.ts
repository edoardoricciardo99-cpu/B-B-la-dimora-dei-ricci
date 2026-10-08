import { useEffect } from 'react';

// Progressive enhancement: server-rendered content is always visible without JS.
export default function useScrollReveal() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const clear = () => {
      observer?.disconnect();
      elements.forEach(element => element.classList.remove('reveal-pending'));
    };
    const setup = () => {
      clear();
      if (media.matches || !('IntersectionObserver' in window)) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-pending');
            observer?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
      elements.forEach(element => {
        // Don't delay initially visible content or the LCP image.
        if (element.getBoundingClientRect().top > window.innerHeight) {
          element.classList.add('reveal-pending');
          observer?.observe(element);
        }
      });
    };
    const revealFocus = (event: FocusEvent) => {
      const element = (event.target as HTMLElement).closest('.reveal-pending');
      if (element) { element.classList.remove('reveal-pending'); observer?.unobserve(element); }
    };
    setup();
    media.addEventListener('change', setup);
    document.addEventListener('focusin', revealFocus);
    window.addEventListener('beforeprint', clear);
    return () => { clear(); media.removeEventListener('change', setup); document.removeEventListener('focusin', revealFocus); window.removeEventListener('beforeprint', clear); };
  }, []);
}
