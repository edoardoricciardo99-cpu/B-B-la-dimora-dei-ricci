import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root')!;
function mount(Component: typeof App) {
  const app = <StrictMode><Component /></StrictMode>;
  if (root.hasChildNodes()) hydrateRoot(root, app);
  else createRoot(root).render(app);
}
if (window.location.pathname.replace(/\/$/, '') === '/guida-santo-stefano-di-camastra') {
  void import('./GuidePage').then(({ default: GuidePage }) => mount(GuidePage));
} else mount(App);
