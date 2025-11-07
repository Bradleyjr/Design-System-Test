import React from 'react';
import { Heading } from '../../atoms/Heading';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import './Hero.css';

export interface HeroProps {
  /** Hero title */
  title: string;
  /** Hero subtitle/description */
  subtitle?: string;
  /** Call-to-action buttons */
  actions?: React.ReactNode;
  /** Background image URL */
  backgroundImage?: string;
  /** Text alignment */
  align?: 'left' | 'center';
  /** Size variant */
  size?: 'md' | 'lg';
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  actions,
  backgroundImage,
  align = 'center',
  size = 'lg',
}) => {
  const style = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
      }
    : undefined;

  return (
    <section
      className={`ds-hero ds-hero--${align} ds-hero--${size} ${
        backgroundImage ? 'ds-hero--with-image' : ''
      }`}
      style={style}
    >
      <div className="ds-hero__container">
        <div className="ds-hero__content">
          <Heading level={1} align={align} className="ds-hero__title">
            {title}
          </Heading>
          {subtitle && (
            <Text
              size="xl"
              align={align}
              className="ds-hero__subtitle"
              color={backgroundImage ? undefined : 'muted'}
            >
              {subtitle}
            </Text>
          )}
          {actions && <div className="ds-hero__actions">{actions}</div>}
        </div>
      </div>
    </section>
  );
};
