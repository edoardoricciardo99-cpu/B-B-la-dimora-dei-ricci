import type { Language } from './content';
import { destinationPhotos } from './destination-photos';
import PhotoSlider from './PhotoSlider';
import SiteImage from './SiteImage';

export default function DestinationMedia({ destination, title, language, index }: { destination: string; title: string; language: Language; index: number }) {
  const photos = destinationPhotos[destination] ?? [];
  if (!photos.length) return null;
  return <figure className="destination-media">
    {photos.length > 1 ? <PhotoSlider photos={photos} label={title} language={language} id={`destination-slides-${index}`} sizes="(min-width: 1024px) 40vw, 92vw" />
      : <SiteImage src={photos[0].src} alt={photos[0].alt[language]} language={language} loading="lazy" sizes="(min-width: 1024px) 40vw, 92vw" />}
    {photos.some(photo => photo.credit) && <figcaption>{photos.filter(photo => photo.credit).map(photo => <span key={photo.src}><a href={photo.source} target="_blank" rel="noopener noreferrer">{photo.credit}</a> · <a href={photo.licenseUrl} target="_blank" rel="noopener noreferrer">{photo.license === 'Public domain' ? language === 'it' ? 'Pubblico dominio' : language === 'en' ? 'Public domain' : 'Gemeinfrei' : photo.license}</a>{photo.license !== 'Public domain' && <> · {language === 'it' ? 'adattata' : language === 'en' ? 'adapted' : 'angepasst'}</>}</span>)}</figcaption>}
  </figure>;
}
