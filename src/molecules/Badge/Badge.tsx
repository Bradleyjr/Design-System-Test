import React from 'react';
import './Badge.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Badge variant */
  variant?: 'default' | 'primary' | 'success' | 'error' | 'warning' | 'info';
  /** Badge size */
  size?: 'sm' | 'md' | 'lg';
  /** Dot badge (no content) */
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  dot = false,
  children,
  className = '',
  ...props
}) => {
  const classNames = [
    'ds-badge',
    `ds-badge--${variant}`,
    `ds-badge--${size}`,
    dot && 'ds-badge--dot',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classNames} {...props}>
      {!dot && children}
    </span>
  );
};
