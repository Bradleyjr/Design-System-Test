import React from 'react';
import './Heading.css';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Heading level */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  /** Visual style (can differ from semantic level) */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  as,
  align = 'left',
  children,
  className = '',
  ...props
}) => {
  const Tag = as || `h${level}` as keyof JSX.IntrinsicElements;
  const classNames = [
    'ds-heading',
    `ds-heading--${level}`,
    `ds-heading--align-${align}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return React.createElement(
    Tag,
    { className: classNames, ...props },
    children
  );
};
