import type { Language } from './content';
import { guestCopy, stayInfo, mobilityInfo, localPlaces, type GuestLink } from './guest-info';

function UsefulLinks({ links, language }: { links?: GuestLink[]; language: Language }) {
  if (!links) return null;
  return <ul className="useful-links">{links.map(link => <li key={link.url}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.label[language]} <span aria-hidden="true">↗</span></a></li>)}</ul>;
}

export default function GuestInformation({ language }: { language: Language }) {
  const t = guestCopy[language];
  return <section id="informazioni-utili" className="section practical-section" aria-labelledby="practical-title">
    <div className="container">
      <div className="section-heading"><div><p className="eyebrow dark">{t.eyebrow}</p><h2 id="practical-title">{t.title}</h2></div><p>{t.intro}</p></div>
      <div className="practical-grid">{stayInfo.map(card => <article key={card.id} id={card.id}><h3>{card.title[language]}</h3><p>{card.text[language]}</p><UsefulLinks links={card.links} language={language} /></article>)}</div>
      <div className="practical-subheading"><h3>{t.mobility}</h3><p>{t.external}</p></div>
      <div className="mobility-grid">{mobilityInfo.map(card => <article key={card.id} id={card.id}><h4>{card.title[language]}</h4><p>{card.text[language]}</p><UsefulLinks links={card.links} language={language} /></article>)}</div>
      <div className="practical-subheading"><h3>{t.places}</h3><p>{t.placesIntro}</p></div>
      <ul className="local-places">{localPlaces.map(place => <li key={place.name}><div><h4>{place.name}</h4><p>{place.type[language]}<br />{place.address}</p></div><a href={place.url} target="_blank" rel="noopener noreferrer">{t.walk}<span className="sr-only">: {place.name}</span> <span aria-hidden="true">↗</span></a></li>)}</ul>
    </div>
  </section>;
}
