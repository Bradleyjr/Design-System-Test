import React from 'react';
import { MainLayout } from '../../src/templates/MainLayout/MainLayout';
import { Hero } from '../../src/organisms/Hero/Hero';
import { Card, CardHeader, CardBody } from '../../src/molecules/Card/Card';
import { Button } from '../../src/atoms/Button/Button';
import { Heading } from '../../src/atoms/Heading/Heading';
import { Text } from '../../src/atoms/Text/Text';
import { Badge } from '../../src/molecules/Badge/Badge';
import { colors } from '../../src/tokens/colors';
import { spacing } from '../../src/tokens/spacing';

export const HomePage: React.FC = () => {
  const headerProps = {
    brand: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{
          fontSize: '24px',
          fontWeight: 700,
          background: `linear-gradient(135deg, ${colors.primary[600]} 0%, ${colors.secondary[600]} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Key2 Consulting
        </span>
      </div>
    ),
    navItems: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' }
    ],
    actions: (
      <Button variant="primary" size="md">
        Get Started
      </Button>
    )
  };

  const footerProps = {
    sections: [
      {
        title: 'Services',
        links: [
          { label: 'Data Warehousing', href: '#services' },
          { label: 'Business Intelligence', href: '#services' },
          { label: 'Data Integration', href: '#services' },
          { label: 'Custom Applications', href: '#services' }
        ]
      },
      {
        title: 'Company',
        links: [
          { label: 'About Us', href: '#about' },
          { label: 'Careers', href: '#careers' },
          { label: 'Contact', href: '#contact' }
        ]
      },
      {
        title: 'Resources',
        links: [
          { label: 'Case Studies', href: '#case-studies' },
          { label: 'Blog', href: '#blog' },
          { label: 'Insights', href: '#insights' }
        ]
      }
    ],
    copyright: '© 2024 Key2 Consulting. All rights reserved.',
    socialLinks: [
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/key2-consulting' }
    ]
  };

  const services = [
    {
      title: 'Data Warehousing',
      description: 'Custom-designed data warehouse systems that consolidate and organize data from multiple sources for comprehensive reporting and analysis.',
      icon: '📊',
      color: colors.primary[600]
    },
    {
      title: 'Business Intelligence',
      description: 'Transform your data into actionable insights with powerful dashboards and reports that drive informed business decision-making.',
      icon: '💡',
      color: colors.secondary[600]
    },
    {
      title: 'Data Integration',
      description: 'Seamlessly harness data from disparate sources to create a unified platform for reliable corporate intelligence and analytics.',
      icon: '🔗',
      color: colors.info[600]
    },
    {
      title: 'Custom Applications',
      description: 'Tailored software solutions that address your unique business challenges and maximize your data return on investment.',
      icon: '⚙️',
      color: colors.success[600]
    }
  ];

  const stats = [
    { value: '20+', label: 'Years of Excellence' },
    { value: '40+', label: 'Expert Consultants' },
    { value: '100+', label: 'Successful Projects' },
    { value: 'Top 1%', label: 'Microsoft Partners' }
  ];

  const industries = [
    'Healthcare',
    'Finance',
    'Retail',
    'Manufacturing',
    'Technology',
    'Energy'
  ];

  return (
    <MainLayout headerProps={headerProps} footerProps={footerProps}>
      {/* Hero Section */}
      <section id="home">
        <Hero
          title="Maximize Your Data Analytics"
          subtitle="Transform raw data into strategic business insights with Microsoft's premier analytics partner"
          size="lg"
          align="center"
          actions={
            <div style={{ display: 'flex', gap: spacing[4], justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          }
        />
      </section>

      {/* Microsoft Partnership Badge */}
      <section style={{
        padding: `${spacing[12]}px ${spacing[6]}px`,
        backgroundColor: colors.neutral[50],
        textAlign: 'center'
      }}>
        <Badge variant="primary" size="lg">
          🏆 Microsoft Gold-Certified Partner
        </Badge>
        <Text
          size="lg"
          color="muted"
          align="center"
          style={{ marginTop: spacing[4], maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          Specializing in Azure, Power BI, and SQL Server to deliver world-class data solutions
        </Text>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: `${spacing[16]}px ${spacing[6]}px`,
        backgroundColor: `linear-gradient(135deg, ${colors.primary[600]} 0%, ${colors.secondary[700]} 100%)`,
        background: `linear-gradient(135deg, ${colors.primary[600]} 0%, ${colors.secondary[700]} 100%)`
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: spacing[8]
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <Heading
                level={2}
                style={{
                  color: 'white',
                  fontSize: '48px',
                  marginBottom: spacing[2]
                }}
              >
                {stat.value}
              </Heading>
              <Text
                size="lg"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
              >
                {stat.label}
              </Text>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: `${spacing[20]}px ${spacing[6]}px` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: spacing[12] }}>
            <Heading level={2} style={{ marginBottom: spacing[4] }}>
              Our Core Services
            </Heading>
            <Text size="xl" color="muted" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Comprehensive data analytics solutions tailored to your business needs
            </Text>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: spacing[6]
          }}>
            {services.map((service, index) => (
              <Card
                key={index}
                variant="elevated"
                clickable
                style={{ height: '100%', transition: 'transform 0.3s ease' }}
              >
                <CardHeader>
                  <div style={{
                    fontSize: '48px',
                    marginBottom: spacing[4],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span>{service.icon}</span>
                    <div style={{
                      width: '6px',
                      height: '60px',
                      backgroundColor: service.color,
                      borderRadius: '3px'
                    }} />
                  </div>
                  <Heading level={3} style={{ marginBottom: spacing[3] }}>
                    {service.title}
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text color="muted">{service.description}</Text>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{
        padding: `${spacing[20]}px ${spacing[6]}px`,
        backgroundColor: colors.neutral[50]
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: spacing[12] }}>
            <Heading level={2} style={{ marginBottom: spacing[4] }}>
              Why Choose Key2 Consulting?
            </Heading>
            <Text size="xl" color="muted" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Two decades of excellence in data analytics and business intelligence
            </Text>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: spacing[8]
          }}>
            <Card variant="outlined">
              <CardBody>
                <Heading level={4} style={{ marginBottom: spacing[4] }}>
                  🎯 Proven Expertise
                </Heading>
                <Text color="muted">
                  Nearly 20 years of experience delivering successful data solutions to Fortune 500 companies and industry leaders across multiple sectors.
                </Text>
              </CardBody>
            </Card>

            <Card variant="outlined">
              <CardBody>
                <Heading level={4} style={{ marginBottom: spacing[4] }}>
                  🚀 Microsoft Excellence
                </Heading>
                <Text color="muted">
                  Gold-Certified Microsoft Partner with deep expertise in Azure, Power BI, and SQL Server - the industry's leading analytics stack.
                </Text>
              </CardBody>
            </Card>

            <Card variant="outlined">
              <CardBody>
                <Heading level={4} style={{ marginBottom: spacing[4] }}>
                  👥 Expert Team
                </Heading>
                <Text color="muted">
                  Over 40 full-time consultants with specialized skills in data architecture, analytics, and business intelligence implementation.
                </Text>
              </CardBody>
            </Card>

            <Card variant="outlined">
              <CardBody>
                <Heading level={4} style={{ marginBottom: spacing[4] }}>
                  💼 Industry Knowledge
                </Heading>
                <Text color="muted">
                  Deep understanding of diverse industries including healthcare, finance, retail, and manufacturing with proven best practices.
                </Text>
              </CardBody>
            </Card>

            <Card variant="outlined">
              <CardBody>
                <Heading level={4} style={{ marginBottom: spacing[4] }}>
                  ⚡ Rapid Delivery
                </Heading>
                <Text color="muted">
                  Agile methodologies and proven frameworks ensure quick time-to-value without compromising quality or scalability.
                </Text>
              </CardBody>
            </Card>

            <Card variant="outlined">
              <CardBody>
                <Heading level={4} style={{ marginBottom: spacing[4] }}>
                  📈 Measurable Results
                </Heading>
                <Text color="muted">
                  Focus on ROI and business outcomes, delivering solutions that provide tangible value and competitive advantages.
                </Text>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section style={{ padding: `${spacing[20]}px ${spacing[6]}px` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <Heading level={2} style={{ marginBottom: spacing[6] }}>
            Industries We Serve
          </Heading>
          <div style={{
            display: 'flex',
            gap: spacing[4],
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: spacing[8]
          }}>
            {industries.map((industry, index) => (
              <Badge key={index} variant="default" size="lg">
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: `${spacing[20]}px ${spacing[6]}px`,
        background: `linear-gradient(135deg, ${colors.primary[600]} 0%, ${colors.secondary[700]} 100%)`,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Heading level={2} style={{ color: 'white', marginBottom: spacing[6] }}>
            Ready to Transform Your Data?
          </Heading>
          <Text size="xl" style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: spacing[8] }}>
            Let's discuss how we can help you maximize your data analytics ROI and drive better business decisions.
          </Text>
          <div style={{ display: 'flex', gap: spacing[4], justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="secondary"
              size="lg"
              style={{
                backgroundColor: 'white',
                color: colors.primary[600],
                border: 'none'
              }}
            >
              Schedule a Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              style={{
                borderColor: 'white',
                color: 'white'
              }}
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
