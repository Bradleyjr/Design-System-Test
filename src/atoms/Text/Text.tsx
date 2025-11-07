import React from 'react';
import './Text.css';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /** HTML element to render */
  as?: 'p' | 'span' | 'div' | 'strong' | 'em' | 'small';
  /** Text size */
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  /** Font weight */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Text color variant */
  color?: 'default' | 'muted' | 'primary' | 'success' | 'error' | 'warning';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
}

export const Text: React.FC<TextProps> = ({
  as: Tag = 'p',
  size = 'base',
  weight = 'normal',
  color = 'default',
  align = 'left',
  children,
  className = '',
  ...props
}) => {
  const classNames = [
    'ds-text',
    `ds-text--${size}`,
    `ds-text--weight-${weight}`,
    `ds-text--color-${color}`,
    `ds-text--align-${align}`,
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
