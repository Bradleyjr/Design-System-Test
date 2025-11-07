import React from 'react';
import './Link.css';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Link variant */
  variant?: 'default' | 'subtle' | 'primary';
  /** External link (adds icon and opens in new tab) */
  external?: boolean;
  /** Underline style */
  underline?: 'always' | 'hover' | 'none';
}

export const Link: React.FC<LinkProps> = ({
  children,
  variant = 'default',
  external = false,
  underline = 'hover',
  className = '',
  ...props
}) => {
  const classNames = [
    'ds-link',
    `ds-link--${variant}`,
    `ds-link--underline-${underline}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a className={classNames} {...externalProps} {...props}>
      {children}
      {external && <span className="ds-link__external-icon">↗</span>}
    </a>
  );
};
