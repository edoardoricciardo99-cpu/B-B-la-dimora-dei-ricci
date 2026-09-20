import type { CSSProperties, ImgHTMLAttributes } from 'react';
import type { Language } from './content';
import { imageSettings } from './image-settings';
import variants from './image-variants.json';

interface Props extends ImgHTMLAttributes<HTMLImageElement> { src: string; alt: string; language: Language }
export default function SiteImage({ src, alt, language, style, sizes = '(max-width: 760px) 100vw, 50vw', ...props }: Props) {
  const image = (variants as Record<string, {width: number; height: number; srcSet: string}>)[src];
  const settings = imageSettings[src];
  return <img src={src} srcSet={image?.srcSet} sizes={image ? sizes : undefined}
    width={image?.width} height={image?.height} alt={alt === '' ? '' : settings?.alt?.[language] ?? alt}
    style={{ '--image-desktop': settings?.desktop ?? '50% 50%', '--image-tablet': settings?.tablet ?? settings?.desktop ?? '50% 50%', '--image-mobile': settings?.mobile ?? settings?.tablet ?? settings?.desktop ?? '50% 50%', ...style } as CSSProperties}
    {...props} />;
}
