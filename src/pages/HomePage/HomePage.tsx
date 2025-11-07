import React from 'react';
import { MainLayout } from '../../templates/MainLayout';
import { Hero } from '../../organisms/Hero';
import { Card, CardHeader, CardBody } from '../../molecules/Card';
import { Button } from '../../atoms/Button';
import { Heading } from '../../atoms/Heading';
import { Text } from '../../atoms/Text';
import './HomePage.css';

export const HomePage: React.FC = () => {
  const headerProps = {
    brand: 'DesignSystem',
    navItems: [
      { label: 'Home', href: '/' },
      { label: 'Components', href: '/components' },
      { label: 'Documentation', href: '/docs' },
      { label: 'About', href: '/about' },
    ],
    actions: (
      <>
        <Button variant="ghost" size="sm">Sign In</Button>
        <Button variant="primary" size="sm">Get Started</Button>
      </>
    ),
  };

  const footerProps = {
    sections: [
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '/features' },
          { label: 'Pricing', href: '/pricing' },
          { label: 'Documentation', href: '/docs' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Blog', href: '/blog' },
          { label: 'Careers', href: '/careers' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Community', href: '/community' },
          { label: 'Support', href: '/support' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    copyright: '© 2024 DesignSystem. All rights reserved.',
    socialLinks: [
      { label: 'Twitter', href: 'https://twitter.com' },
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'LinkedIn', href: 'https://linkedin.com' },
    ],
  };

  return (
    <MainLayout headerProps={headerProps} footerProps={footerProps} containerWidth="full">
      <Hero
        title="Build Faster with Our Design System"
        subtitle="A comprehensive, atomic design system that helps designers and developers create consistent, beautiful interfaces efficiently."
        actions={
          <>
            <Button size="lg" variant="primary">Get Started</Button>
            <Button size="lg" variant="outline">View Components</Button>
          </>
        }
      />

      <div className="home-page__features">
        <div className="home-page__container">
          <Heading level={2} align="center" className="home-page__section-title">
            Key Features
          </Heading>

          <div className="home-page__grid">
            <Card variant="elevated" padding="lg" clickable>
              <CardHeader>
                <div className="home-page__feature-icon">⚛️</div>
                <Heading level={3}>Atomic Design</Heading>
              </CardHeader>
              <CardBody>
                <Text color="muted">
                  Built on Brad Frost's Atomic Design principles with atoms, molecules, organisms, templates, and pages.
                </Text>
              </CardBody>
            </Card>

            <Card variant="elevated" padding="lg" clickable>
              <CardHeader>
                <div className="home-page__feature-icon">🎨</div>
                <Heading level={3}>Design Tokens</Heading>
              </CardHeader>
              <CardBody>
                <Text color="muted">
                  Consistent design tokens for colors, typography, spacing, and more ensure visual harmony across your project.
                </Text>
              </CardBody>
            </Card>

            <Card variant="elevated" padding="lg" clickable>
              <CardHeader>
                <div className="home-page__feature-icon">⚡</div>
                <Heading level={3}>TypeScript First</Heading>
              </CardHeader>
              <CardBody>
                <Text color="muted">
                  Fully typed with TypeScript for better developer experience, autocomplete, and fewer runtime errors.
                </Text>
              </CardBody>
            </Card>

            <Card variant="elevated" padding="lg" clickable>
              <CardHeader>
                <div className="home-page__feature-icon">📱</div>
                <Heading level={3}>Responsive</Heading>
              </CardHeader>
              <CardBody>
                <Text color="muted">
                  All components are fully responsive and work seamlessly across desktop, tablet, and mobile devices.
                </Text>
              </CardBody>
            </Card>

            <Card variant="elevated" padding="lg" clickable>
              <CardHeader>
                <div className="home-page__feature-icon">♿</div>
                <Heading level={3}>Accessible</Heading>
              </CardHeader>
              <CardBody>
                <Text color="muted">
                  Built with accessibility in mind, following WCAG guidelines to ensure everyone can use your interfaces.
                </Text>
              </CardBody>
            </Card>

            <Card variant="elevated" padding="lg" clickable>
              <CardHeader>
                <div className="home-page__feature-icon">🔧</div>
                <Heading level={3}>Customizable</Heading>
              </CardHeader>
              <CardBody>
                <Text color="muted">
                  Easily customize components with props and override styles to match your brand identity.
                </Text>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
