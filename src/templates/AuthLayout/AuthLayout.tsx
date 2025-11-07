import React from 'react';
import { Heading } from '../../atoms/Heading';
import { Text } from '../../atoms/Text';
import { Link } from '../../atoms/Link';
import './AuthLayout.css';

export interface AuthLayoutProps {
  /** Page title */
  title: string;
  /** Page subtitle/description */
  subtitle?: string;
  /** Form or content */
  children: React.ReactNode;
  /** Footer link */
  footerLink?: {
    text: string;
    linkText: string;
    href: string;
  };
  /** Logo or brand */
  logo?: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  title,
  subtitle,
  children,
  footerLink,
  logo,
}) => {
  return (
    <div className="ds-auth-layout">
      <div className="ds-auth-layout__container">
        {logo && <div className="ds-auth-layout__logo">{logo}</div>}

        <div className="ds-auth-layout__card">
          <div className="ds-auth-layout__header">
            <Heading level={2} align="center">
              {title}
            </Heading>
            {subtitle && (
              <Text size="base" color="muted" align="center">
                {subtitle}
              </Text>
            )}
          </div>

          <div className="ds-auth-layout__content">
            {children}
          </div>

          {footerLink && (
            <div className="ds-auth-layout__footer">
              <Text size="sm" color="muted" as="span">
                {footerLink.text}{' '}
              </Text>
              <Link href={footerLink.href} variant="primary">
                {footerLink.linkText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
