import React from 'react';
import { Text } from '../../atoms/Text';
import { Link } from '../../atoms/Link';
import './Footer.css';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  /** Footer sections with links */
  sections?: FooterSection[];
  /** Copyright text */
  copyright?: string;
  /** Social media links */
  socialLinks?: Array<{ label: string; href: string; icon?: React.ReactNode }>;
}

export const Footer: React.FC<FooterProps> = ({
  sections = [],
  copyright,
  socialLinks = [],
}) => {
  return (
    <footer className="ds-footer">
      <div className="ds-footer__container">
        {sections.length > 0 && (
          <div className="ds-footer__sections">
            {sections.map((section) => (
              <div key={section.title} className="ds-footer__section">
                <Text as="div" weight="semibold" className="ds-footer__section-title">
                  {section.title}
                </Text>
                <ul className="ds-footer__links">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} variant="subtle" underline="hover">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <div className="ds-footer__bottom">
          {copyright && (
            <Text size="sm" color="muted">
              {copyright}
            </Text>
          )}
          {socialLinks.length > 0 && (
            <div className="ds-footer__social">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  variant="subtle"
                  external
                  underline="none"
                  className="ds-footer__social-link"
                  aria-label={link.label}
                >
                  {link.icon || link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
