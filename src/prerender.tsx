import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import App from './App';
import TermsPage from './TermsPage';
export { seo, site, structuredData, heroImage } from './site-settings';
export { rooms } from './content';
export { default as variants } from './image-variants.json';
export function render() { return renderToString(<App />); }
export function renderTerms() { return '<!doctype html>' + renderToStaticMarkup(<TermsPage />); }
