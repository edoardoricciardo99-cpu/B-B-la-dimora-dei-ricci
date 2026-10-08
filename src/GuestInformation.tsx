import type { Language } from './content';
import { guestCopy, stayInfo, breakfastMaps, restaurantMaps, type GuestLink } from './guest-info';
import { localServices, transportCopy, practicalLabels, walkingRoute, nearbyDining, diningLabels } from './local-info';
import FeatureIcon from './FeatureIcon';

function UsefulLinks({ links, language }: { links?: GuestLink[]; language: Language }) {
  return links ? <ul className="useful-links">{links.map(link => <li key={link.url}><a href={link.url} target={link.url.startsWith('https:') ? '_blank' : undefined} rel={link.url.startsWith('https:') ? 'noopener noreferrer' : undefined}>{link.label[language]} ↗</a></li>)}</ul> : null;
}
export default function GuestInformation({ language }: { language: Language }) {
  const t = guestCopy[language];
  const p = practicalLabels[language];
  const info = (id: string) => stayInfo.find(card => card.id === id)!;
  const groups = [
    { id: 'arrivo-partenza', icon: 'clock', title: p.arrival, body: <><dl className="practical-times"><div><dt>{p.summer}</dt><dd>15:00–23:00</dd></div><div><dt>{p.winter}</dt><dd>15:00–22:00</dd></div><div><dt>Check-out</dt><dd>{p.checkout}</dd></div></dl><p>{info('bagagli').text[language]}</p></> },
    { id: 'parcheggi', icon: 'parking', title: p.parking, body: <><p>{info('parcheggi').text[language]}</p><p>{p.bikes}</p><UsefulLinks links={info('parcheggi').links} language={language} /></> },
    { id: 'colazione', icon: 'coffee', title: language === 'it' ? 'La colazione' : language === 'en' ? 'Breakfast' : 'Das Frühstück', body: <><p>{p.breakfast} <a href={breakfastMaps} target="_blank" rel="noopener noreferrer">Bar Da Franco</a>.</p></> },
    { id: 'trasporti', icon: 'train', title: p.transport, body: <>{transportCopy[language].map(text => <p key={text}>{text}</p>)}<UsefulLinks language={language} links={[
      { url: 'https://www.trenitalia.com/', label: { it: 'Treni: cerca orari e collegamenti', en: 'Trains: times and connections', de: 'Züge: Fahrpläne und Verbindungen' } },
      { url: 'https://www.interbus.it/citta/', label: { it: 'Autobus: consulta Interbus', en: 'Buses: check Interbus', de: 'Busse: Interbus prüfen' } },
      { url: 'https://www.aeroportodipalermo.it/in-aeroporto/raggiungi-aeroporto/treno/', label: { it: 'Collegamenti ferroviari dell’aeroporto', en: 'Airport rail connections', de: 'Bahnanschluss am Flughafen' } },
      { url: walkingRoute('Stazione Santo Stefano di Camastra-Mistretta'), label: { it: 'Percorso tra Dimora e stazione', en: 'Route between La Dimora and the station', de: 'Weg zwischen Dimora und Bahnhof' } },
    ]} /></> },
    { id: 'servizi-vicini', icon: 'services', title: p.services, body: <><p>{p.estimates}</p><ul className="local-places">{localServices.map(place => <li key={place.name}><h4>{place.name}</h4><p>{place.description[language]}</p><p className="local-place-meta">{place.distance} · {p.about} {place.minutes} min {p.walk}</p><a href={walkingRoute(place.destination)} target="_blank" rel="noopener noreferrer">{p.route} ↗</a></li>)}</ul></> },
    { id: 'dove-mangiare', icon: 'dining', title: p.dining, body: <><h3 className="practical-place-title">Chi Ciauru</h3><p>{p.restaurant}</p><p className="local-place-meta">{p.restaurantDistance}</p><UsefulLinks language={language} links={[{ url: restaurantMaps, label: { it: 'Chi Ciauru su Google Maps', en: 'Chi Ciauru on Google Maps', de: 'Chi Ciauru auf Google Maps' } }, { url: breakfastMaps, label: { it: 'Bar Da Franco: bar e pasticceria', en: 'Bar Da Franco: café and pastry shop', de: 'Bar Da Franco: Café und Konditorei' } }]} /><p>{diningLabels[language].note}</p><ul className="local-places dining-places">{nearbyDining.map(place => <li key={place.name}><h4>{place.name}</h4><p>{place.address}</p><p>{place.description[language]}</p><div className="dining-links"><a href={walkingRoute(`${place.name}, ${place.address}`)} target="_blank" rel="noopener noreferrer">{p.route} ↗</a><a href={place.source} target="_blank" rel="noopener noreferrer">{diningLabels[language].source}<span className="sr-only">: {place.name}</span> ↗</a></div></li>)}</ul></> },
  ];
  return <section id="informazioni-utili" className="section practical-section" aria-labelledby="practical-title"><div className="container"><span id="servizi" className="anchor-alias" aria-hidden="true" /><div className="section-heading" data-reveal><p className="eyebrow dark">{t.eyebrow}</p><h2 id="practical-title">{t.title}</h2><p>{p.intro}</p></div><div className="practical-layout" data-reveal><div className="practical-details">{groups.map(group => <details key={group.id} id={group.id}><summary><FeatureIcon name={group.icon} /><span>{group.title}</span><span className="details-plus" aria-hidden="true">+</span></summary><div>{group.body}</div></details>)}</div></div></div></section>;
}
