import React from 'react';
import { Button } from '../../atoms/Button';
import { Link } from '../../atoms/Link';
import './Header.css';

export interface HeaderProps {
  /** Brand name or logo */
  brand?: React.ReactNode;
  /** Navigation items */
  navItems?: Array<{ label: string; href: string }>;
  /** Right side actions */
  actions?: React.ReactNode;
  /** Fixed header */
  fixed?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  brand = 'Brand',
  navItems = [],
  actions,
  fixed = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className={`ds-header ${fixed ? 'ds-header--fixed' : ''}`}>
      <div className="ds-header__container">
        <div className="ds-header__brand">
          {typeof brand === 'string' ? (
            <Link href="/" variant="primary" underline="none" className="ds-header__brand-link">
              {brand}
            </Link>
          ) : (
            brand
          )}
        </div>

        <button
          className="ds-header__mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="ds-header__hamburger" />
        </button>

        <nav className={`ds-header__nav ${mobileMenuOpen ? 'ds-header__nav--open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              variant="subtle"
              underline="none"
              className="ds-header__nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {actions && <div className="ds-header__actions">{actions}</div>}
      </div>
    </header>
  );
};
