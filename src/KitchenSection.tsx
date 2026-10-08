import type { Language } from './content';
import { kitchenAccess } from './guest-info';
import { revisionPhotos } from './image-settings';
import PhotoSlider from './PhotoSlider';

const kitchenPhotos = [
  revisionPhotos.kitchen,
  { src: '/images/bnb/spazi-comuni/cucina-comune-tavoli.webp', alt: { it: 'Tavoli e sedie nello spazio della cucina comune', en: 'Tables and chairs in the shared kitchen', de: 'Tische und Stühle in der Gemeinschaftsküche' } },
  { src: '/images/bnb/spazi-comuni/cucina-comune-angolo-caffe.webp', alt: { it: 'Macchina del caffè e ceramiche nella cucina comune', en: 'Coffee machine and ceramics in the shared kitchen', de: 'Kaffeemaschine und Keramik in der Gemeinschaftsküche' } },
  revisionPhotos.ceramics,
];

const copy = {
  it: { eyebrow: 'La cucina comune', title: 'Uno spazio in più, anche lontano da casa', text: 'La Dimora dispone di una cucina comune a disposizione degli ospiti, uno spazio pratico per preparare qualcosa in autonomia, fare colazione con calma o concedersi un momento di pausa durante il soggiorno.' },
  en: { eyebrow: 'The shared kitchen', title: 'A little more space to feel at home', text: 'La Dimora has a shared kitchen available to guests: a practical space to prepare something yourself, enjoy a leisurely breakfast or take a break during your stay.' },
  de: { eyebrow: 'Die Gemeinschaftsküche', title: 'Mehr Raum zum Wohlfühlen', text: 'Die Dimora bietet ihren Gästen eine Gemeinschaftsküche: ein praktischer Ort, um selbst etwas zuzubereiten, in Ruhe zu frühstücken oder während des Aufenthalts eine Pause einzulegen.' },
};
export default function KitchenSection({ language }: { language: Language }) {
  const t = copy[language];
  return <section id="cucina" className="section kitchen-section" aria-labelledby="kitchen-title"><div className="container kitchen-layout">
    <div className="kitchen-copy" data-reveal><p className="eyebrow dark">{t.eyebrow}</p><h2 id="kitchen-title">{t.title}</h2><p>{t.text}</p><p>{kitchenAccess[language]}</p></div>
    <div className="kitchen-gallery" data-reveal><PhotoSlider language={language} photos={kitchenPhotos} label={t.eyebrow} id="kitchen-slides" sizes="(min-width: 900px) 46vw, 92vw" /></div>
  </div></section>;
}
