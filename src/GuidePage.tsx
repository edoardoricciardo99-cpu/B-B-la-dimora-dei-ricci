import { useEffect, useState } from 'react';
import { languages, type Language } from './content';
import { guideFaqs } from './visit-content';
import { site, bookingCta } from './site-settings';
import { guidePublished, guidePath, guidePdfPath, guideSections, guideCopy } from './guide-content';
import SiteImage from './SiteImage';
import { nearbyImages } from './image-settings';
import './guide.css';


export default function GuidePage() {
  const [language, setLanguage] = useState<Language>('it');
  const t = guideCopy[language];
  useEffect(() => {
    document.documentElement.lang = language;
    const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]') ?? document.head.appendChild(document.createElement('meta'));
    robots.name = 'robots';
    robots.content = guidePublished ? 'index,follow' : 'noindex,follow';
    document.title = `${t.title} | La Dimora dei Ricci`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.description);
    for (const platform of ['og', 'twitter']) {
      document.querySelector(`meta[property="${platform}:title"], meta[name="${platform}:title"]`)?.setAttribute('content', t.title);
      document.querySelector(`meta[property="${platform}:description"], meta[name="${platform}:description"]`)?.setAttribute('content', t.description);
    }
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${site.url}${guidePath}`);
  }, [language, t]);
  return <div className="guide-page">
    <a className="skip-link" href="#guide-main">{t.skip}</a>
    <header className="guide-header container"><a href="/" className="brand"><img src={site.logo} width="600" height="211" alt={site.name} /></a><a href="/">← {t.back}</a><div className="language-switcher" role="group" aria-label="Lingua / Language / Sprache">{languages.map(lang => <button key={lang.code} type="button" lang={lang.code} aria-label={lang.name} aria-pressed={language === lang.code} className={language === lang.code ? 'is-active' : ''} onClick={() => setLanguage(lang.code)}>{lang.label}</button>)}</div></header>
    <main id="guide-main" className="container" tabIndex={-1}>
      <section className="guide-heading"><p className="eyebrow dark">{t.eyebrow}</p><h1>{t.title}</h1><p className="guide-lead">{t.intro}</p><a className="button primary" href={guidePdfPath} download>{t.download}</a><p className="download-note">{t.pdf}</p></section>
      <figure className="guide-cover"><SiteImage src={nearbyImages[0].src} alt={nearbyImages[0].alt[language]} language={language} sizes="(max-width: 760px) 100vw, 1280px" fetchPriority="high" /><figcaption><a href={nearbyImages[0].url} target="_blank" rel="noopener noreferrer">{nearbyImages[0].credit} / Wikimedia Commons</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></figcaption></figure>
      <div className="guide-layout"><aside className="guide-index" aria-label={t.contents}><h2>{t.contents}</h2><ol>{guideSections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.title[language]}</a></li>)}</ol></aside><div className="guide-articles">
        <p className="guide-updated">{t.updated}</p>
        {guideSections.map((section, index) => <section key={section.id} id={section.id} className="guide-article"><p className="eyebrow dark">{String(index + 1).padStart(2, '0')}</p><h2>{section.title[language]}</h2>{section.paragraphs[language].map(paragraph => <p key={paragraph}>{paragraph}</p>)}<a className="destination-source" href={section.url} target="_blank" rel="noopener noreferrer">{t.source}: {section.sourceLabel} ↗</a></section>)}
        <div className="guide-practical-links"><a href="/#informazioni-utili">{t.practical} →</a><a href="https://comune.santostefanodicamastra.me.it/" target="_blank" rel="noopener noreferrer">{t.town} ↗</a></div>
      </div></div>
      <section className="guide-faq"><h2>{language === 'it' ? 'Domande per organizzare il viaggio' : language === 'en' ? 'Planning your trip' : 'Ihre Reise planen'}</h2><div className="faq-list">{guideFaqs.map(faq => <details key={faq.id}><summary>{faq.question[language]}</summary><div><p>{faq.answer[language]}</p>{faq.link && <a href={faq.link.url} target="_blank" rel="noopener noreferrer">{faq.link.label[language]} ↗</a>}</div></details>)}</div></section>
      <aside className="guide-stay"><h2>{t.stay}</h2><p>{t.stayText}</p><div className="hero-actions"><a className="button secondary" href="/#camere">{t.rooms}</a><a className="button primary" href={`https://wa.me/${site.whatsappPhone}`} target="_blank" rel="noopener noreferrer">{bookingCta[language]}</a></div></aside>
    </main>
    <footer className="guide-footer container"><p>La Dimora dei Ricci · Via Brofferio 12 · Santo Stefano di Camastra (ME)</p><a href={`tel:+${site.phone}`}>{site.phoneLabel}</a><a href={`https://wa.me/${site.whatsappPhone}`} target="_blank" rel="noopener noreferrer">WhatsApp: {site.whatsappLabel}</a><a href={`mailto:${site.email}`}>{site.email}</a><a href={`/privacy.html#${language}`}>Privacy</a><a href={`/termini.html#${language}`}>{language === 'it' ? 'Termini e Condizioni' : language === 'en' ? 'Terms and Conditions' : 'Nutzungsbedingungen'}</a><p>CIR 19083091C110715 · CIN IT083091C18EYCBOMV</p><p className="design-credit">© 2026 La Dimora dei Ricci · Design by Sergio Todaro</p></footer>
    <div className="booking-dock"><a className="sticky-whatsapp" href={`https://wa.me/${site.whatsappPhone}`} target="_blank" rel="noopener noreferrer">{bookingCta[language]}</a></div>
  </div>;
}
