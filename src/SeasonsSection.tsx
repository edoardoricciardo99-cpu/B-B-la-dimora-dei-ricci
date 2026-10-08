import { useEffect, useState } from 'react';
import type { Language } from './content';
import { seasons, visitCopy } from './visit-content';
const intro = {
  it: 'Primavera e autunno invitano a esplorare borghi e natura. L’estate porta verso la costa; l’inverno lascia più spazio alle botteghe, alla ceramica e alle visite culturali.',
  en: 'Spring and autumn invite you to explore villages and nature. Summer is for the coast; winter leaves more time for workshops, ceramics and cultural visits.',
  de: 'Frühling und Herbst laden zu Dörfern und Natur ein. Im Sommer lockt die Küste; im Winter bleibt mehr Zeit für Werkstätten, Keramik und Kultur.',
};
export default function SeasonsSection({ language }: { language: Language }) {
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 900px)');
    const update = () => setDesktop(media.matches);
    update(); media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  return <section className="seasons-section" aria-labelledby="seasons-title"><h3 id="seasons-title">{visitCopy[language].seasonsTitle}</h3><p className="seasons-intro">{intro[language]}</p><div className="seasons-grid" key={String(desktop)}>{seasons.map(season => <details key={season.title.it} open={desktop || undefined}><summary><h4>{season.title[language]}</h4><span className="details-plus" aria-hidden="true">+</span></summary><div>{season.text[language].split('\n\n').map(paragraph => <p key={paragraph}>{paragraph}</p>)}{season.links?.map(link => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">{link.label[language]} ↗</a>)}</div></details>)}</div><a className="external-link" href="https://santostefanodicamastra.comune.digital/news" target="_blank" rel="noopener noreferrer">{language === 'it' ? 'Eventi e avvisi del Comune' : language === 'en' ? 'Municipal events and notices' : 'Veranstaltungen und Mitteilungen der Gemeinde'} ↗</a></section>;
}
