import React from 'react';
import { Header, HeaderProps } from '../../organisms/Header';
import { Text } from '../../atoms/Text';
import { Link } from '../../atoms/Link';
import './DashboardLayout.css';

export interface DashboardNavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface DashboardLayoutProps {
  /** Header configuration */
  headerProps?: HeaderProps;
  /** Sidebar navigation items */
  navItems?: DashboardNavItem[];
  /** Page content */
  children: React.ReactNode;
  /** Sidebar collapsed state */
  sidebarCollapsed?: boolean;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  headerProps,
  navItems = [],
  children,
  sidebarCollapsed = false,
}) => {
  const [collapsed, setCollapsed] = React.useState(sidebarCollapsed);

  return (
    <div className="ds-dashboard-layout">
      {headerProps && <Header {...headerProps} />}
      <div className="ds-dashboard-layout__body">
        <aside className={`ds-dashboard-layout__sidebar ${collapsed ? 'ds-dashboard-layout__sidebar--collapsed' : ''}`}>
          <button
            className="ds-dashboard-layout__toggle"
            onClick={() => setCollapsed(!collapsed)}
            aria-label="Toggle sidebar"
          >
            {collapsed ? '→' : '←'}
          </button>
          <nav className="ds-dashboard-layout__nav">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                variant="subtle"
                underline="none"
                className="ds-dashboard-layout__nav-link"
              >
                {item.icon && <span className="ds-dashboard-layout__nav-icon">{item.icon}</span>}
                {!collapsed && <span>{item.label}</span>}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="ds-dashboard-layout__content">
          {children}
        </main>
      </div>
    </div>
  );
};
