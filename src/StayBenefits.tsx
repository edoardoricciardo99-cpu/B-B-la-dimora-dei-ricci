import type { Language } from './content';
import { stayBenefits } from './guest-info';
import FeatureIcon from './FeatureIcon';

function CardText({ text }: { text: string }) {
  return <>{text.split(/(\S+-\S+)/).map((part, index) => part.includes('-') ? <span className="card-word" key={index}>{part}</span> : part)}</>;
}

export default function StayBenefits({ language }: { language: Language }) {
  return <div className="benefits-grid">
    {stayBenefits.map(benefit => <article className="benefit-card tone-paper" data-reveal key={benefit.icon}>
      <FeatureIcon name={benefit.icon} />
      <h3>{benefit.title[language]}</h3>
      <p>{benefit.link ? <><CardText text={benefit.text[language].split(benefit.link.label[language])[0]} /><a href={benefit.link.url} target="_blank" rel="noopener noreferrer">{benefit.link.label[language]}</a><CardText text={benefit.text[language].split(benefit.link.label[language])[1]} /></> : <CardText text={benefit.text[language]} />}</p>
    </article>)}
  </div>;
}
