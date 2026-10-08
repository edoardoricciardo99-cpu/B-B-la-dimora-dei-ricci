const paths: Record<string, string> = {
  bath: 'M3 12h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-3Zm2 0V5a2 2 0 0 1 4 0M6 20v2m12-2v2',
  air: 'M12 2v20M3 7l18 10M3 17 21 7M9 4l3 3 3-3M9 20l3-3 3 3M4 10l4-1-1-4M20 14l-4 1 1 4M4 14l4 1-1 4M20 10l-4-1 1-4',
  wifi: 'M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0M8 16a6 6 0 0 1 8 0M12 20h.01',
  tv: 'M3 5h18v13H3V5Zm5 17h8m-4-4v4',
  home: 'M3 11 12 4l9 7M5 10v10h14V10M9 20v-6h6v6',
  bed: 'M3 19V7m18 12V9M3 16h18M3 9h18v7M7 9V6h4v3m2 0V6h4v3',
  coffee: 'M4 8h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Zm12 1h2a3 3 0 0 1 0 6h-2M3 22h16M7 2v3m5-3v3',
  dining: 'M5 3v7m3-7v7m3-7v7M5 8h6m-3 2v11M19 3c-4 3-4 7 0 9v9m0-18v9',
  kitchen: 'M5 9h14v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9ZM3 9h18M3 12H1m20 0h2M9 6V3m6 3V3',
  train: 'M5 3h14v14H5V3Zm0 7h14M8 17l-3 4m11-4 3 4M8 14h.01M16 14h.01',
  services: 'M4 5h16v16H4V5Zm5 0V2h6v3M12 9v8m-4-4h8',
  family: 'M8 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm9 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 21v-4a6 6 0 0 1 12 0v4m0 0v-2a3 3 0 0 1 6 0v2',
  tag: 'M3 3h8l10 10-8 8L3 11V3Zm4 4h.01M9 16l7-7',
  bike: 'M5 13a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm14 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM5 17l5-9 5 9H5Zm10 0 3-12h-4M7 8h6',
  pet: 'M8 14c1-4 7-4 8 0l3 3c2 5-5 4-7 3-2 1-9 2-7-3l3-3Z M7 5a2 3 0 1 0 4 0 2 3 0 1 0-4 0Z M13 5a2 3 0 1 0 4 0 2 3 0 1 0-4 0Z M1 10a2 2.5 0 1 0 4 0 2 2.5 0 1 0-4 0Z M19 10a2 2.5 0 1 0 4 0 2 2.5 0 1 0-4 0Z',
  comfort: 'M4 4h16v12H4V4Zm4 16h8m-4-4v4M7 8h10m-10 4h5',
  clock: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v6l4 2',
  parking: 'M5 3h14v18H5V3Zm5 14V7h3a3 3 0 0 1 0 6h-3',
  bag: 'M4 8h16v12H4V8Zm4 0V4h8v4M8 12v5m8-5v5',
  plane: 'm3 12 7-2 3-7h2l-1 7 6 2v2l-6-1-1 6 3 2H8l3-2-1-6-7 1v-2Z',
  phone: 'M6 3H3c-1 10 8 19 18 18v-4l-5-2-2 2a17 17 0 0 1-7-7l2-2-3-5Z',
};
export default function FeatureIcon({ name }: { name: string }) {
  return <svg className="feature-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={paths[name] ?? paths.home} /></svg>;
}
