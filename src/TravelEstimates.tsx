import type { Language } from './content';
import { travelRoutes, routeText, routeUrl } from './travel-routes';
export default function TravelEstimates({ destination, language }: { destination: string; language: Language }) {
  return <ul className="travel-estimates">{travelRoutes.filter(route => route.home === destination).map(route => <li key={route.guide}><a href={routeUrl(route)} target="_blank" rel="noopener noreferrer">{routeText(route, language)}{'\u00a0↗'}</a></li>)}</ul>;
}
