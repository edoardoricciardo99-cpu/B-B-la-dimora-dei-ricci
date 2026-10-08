import type { Language, Room } from './content';
import FeatureIcon from './FeatureIcon';

export default function RoomAmenities({ room, language }: { room: Room; language: Language }) {
  const icons = ['bath', 'air', 'wifi', 'tv', 'kitchen'];
  return <ul className="room-amenities">{[0, 2, 3, 4, 5].map((feature, index) => <li key={icons[index]}><FeatureIcon name={icons[index]} /><span>{room.features[language][feature]}</span></li>)}</ul>;
}
