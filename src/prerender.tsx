import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import App from './App';
import TermsPage from './TermsPage';
export { seo, socialSeo, site, structuredData, heroImage } from './site-settings';
export { rooms } from './content';
export { default as variants } from './image-variants.json';
export function render() { return renderToString(<App />); }
export function renderTerms() { return '<!doctype html>' + renderToStaticMarkup(<TermsPage />); }

import GuidePage from './GuidePage';

export { guidePublished, guidePath, guideSections, guideUpdated, guideCopy } from './guide-content';
export function renderGuide() { return renderToString(<GuidePage />); }

export { copy, reviews } from './content';
export { faqs } from './visit-content';
export { stayInfo, stayBenefits } from './guest-info';
export { allHomeDestinations } from './visit-content';
