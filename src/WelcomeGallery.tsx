import { type Language } from './content';
import PhotoSlider from './PhotoSlider';
import { revisionPhotos } from './image-settings';

const photos = [
  revisionPhotos.rooftops,
  revisionPhotos.kitchen,
  revisionPhotos.ceramics,
  { src: '/images/bnb/dettagli/asciugamani-arrotolati.webp', alt: { it: 'Primo piano di asciugamani arrotolati sul letto della Dimora dei Ricci', en: 'Close-up of rolled towels on a bed at La Dimora dei Ricci', de: 'Nahaufnahme gerollter Handtücher auf einem Bett der Dimora dei Ricci' } },
];
const labels = {
  it: 'Uno sguardo alla Dimora',
  en: 'A look inside La Dimora',
  de: 'Ein Blick in die Dimora',
};
export default function WelcomeGallery({ language }: { language: Language }) {
  return <PhotoSlider language={language} photos={photos} label={labels[language]} id="welcome-slides" sizes="(min-width: 1024px) 46vw, 92vw" />;
}
