import React from 'react';
import { Link } from '../../atoms/Link';
import './Breadcrumbs.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  /** Breadcrumb items */
  items: BreadcrumbItem[];
  /** Separator character */
  separator?: React.ReactNode;
  /** Max items to show before collapsing */
  maxItems?: number;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = '/',
  maxItems,
}) => {
  const displayItems = React.useMemo(() => {
    if (!maxItems || items.length <= maxItems) {
      return items;
    }

    // Show first, ellipsis, and last items
    return [
      items[0],
      { label: '...', href: undefined },
      ...items.slice(-(maxItems - 2)),
    ];
  }, [items, maxItems]);

  return (
    <nav className="ds-breadcrumbs" aria-label="Breadcrumb">
      <ol className="ds-breadcrumbs__list">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const isEllipsis = item.label === '...';

          return (
            <li key={index} className="ds-breadcrumbs__item">
              {!isLast && item.href && !isEllipsis ? (
                <Link
                  href={item.href}
                  variant="subtle"
                  underline="hover"
                  className="ds-breadcrumbs__link"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`ds-breadcrumbs__text ${isLast ? 'ds-breadcrumbs__text--current' : ''}`}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span className="ds-breadcrumbs__separator" aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
