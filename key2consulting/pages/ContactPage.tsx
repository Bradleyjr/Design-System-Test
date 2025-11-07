import React from 'react';
import { MainLayout } from '../../src/templates/MainLayout/MainLayout';
import { Hero } from '../../src/organisms/Hero/Hero';
import { ContactForm } from '../../src/organisms/ContactForm/ContactForm';
import { Card, CardBody } from '../../src/molecules/Card/Card';
import { Button } from '../../src/atoms/Button/Button';
import { Heading } from '../../src/atoms/Heading/Heading';
import { Text } from '../../src/atoms/Text/Text';
import { colors } from '../../src/tokens/colors';
import { spacing } from '../../src/tokens/spacing';

export const ContactPage: React.FC = () => {
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
      }
    ],
    copyright: '© 2024 Key2 Consulting. All rights reserved.'
  };

  const handleSubmit = async (data: any) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', data);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      details: 'info@key2consulting.com',
      description: 'Send us an email anytime',
      color: colors.primary[600]
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '1-800-KEY2-DATA',
      description: 'Mon-Fri from 8am to 6pm EST',
      color: colors.secondary[600]
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      details: 'Connect with us',
      description: 'Follow us for insights and updates',
      color: colors.info[600]
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: 'Multiple US Locations',
      description: 'Schedule an in-person meeting',
      color: colors.success[600]
    }
  ];

  const offices = [
    {
      city: 'Chicago',
      address: '123 Michigan Avenue',
      state: 'IL 60601',
      isHeadquarters: true
    },
    {
      city: 'New York',
      address: '456 Park Avenue',
      state: 'NY 10022',
      isHeadquarters: false
    },
    {
      city: 'San Francisco',
      address: '789 Market Street',
      state: 'CA 94103',
      isHeadquarters: false
    }
  ];

  return (
    <MainLayout headerProps={headerProps} footerProps={footerProps}>
      {/* Hero Section */}
      <Hero
        title="Get in Touch"
        subtitle="Let's discuss how we can help you maximize your data analytics"
        size="lg"
        align="center"
      />

      {/* Main Content */}
      <section style={{ padding: `${spacing[20]}px ${spacing[6]}px` }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: spacing[12],
          alignItems: 'start'
        }}>
          {/* Contact Form */}
          <div>
            <Heading level={2} style={{ marginBottom: spacing[4] }}>
              Send Us a Message
            </Heading>
            <Text color="muted" style={{ marginBottom: spacing[8] }}>
              Fill out the form below and one of our data analytics experts will
              get back to you within 24 hours.
            </Text>
            <ContactForm
              onSubmit={handleSubmit}
              successMessage="Thank you! We'll be in touch soon."
            />
          </div>

          {/* Contact Information */}
          <div>
            <Heading level={2} style={{ marginBottom: spacing[8] }}>
              Other Ways to Reach Us
            </Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
              {contactMethods.map((method, index) => (
                <Card key={index} variant="outlined" clickable>
                  <CardBody>
                    <div style={{ display: 'flex', alignItems: 'start', gap: spacing[4] }}>
                      <div style={{
                        fontSize: '36px',
                        minWidth: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {method.icon}
                      </div>
                      <div style={{ flex: 1 }}>
                        <Heading level={4} style={{ marginBottom: spacing[2] }}>
                          {method.title}
                        </Heading>
                        <Text
                          weight="semibold"
                          style={{
                            color: method.color,
                            marginBottom: spacing[1]
                          }}
                        >
                          {method.details}
                        </Text>
                        <Text size="sm" color="muted">
                          {method.description}
                        </Text>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section style={{
        padding: `${spacing[20]}px ${spacing[6]}px`,
        backgroundColor: colors.neutral[50]
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: spacing[12] }}>
            <Heading level={2} style={{ marginBottom: spacing[4] }}>
              Our Locations
            </Heading>
            <Text size="lg" color="muted">
              With offices across the United States, we're here to serve you
            </Text>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: spacing[6]
          }}>
            {offices.map((office, index) => (
              <Card key={index} variant="elevated">
                <CardBody>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    marginBottom: spacing[4]
                  }}>
                    <Heading level={3}>{office.city}</Heading>
                    {office.isHeadquarters && (
                      <span style={{
                        padding: `${spacing[1]}px ${spacing[3]}px`,
                        backgroundColor: colors.primary[100],
                        color: colors.primary[700],
                        fontSize: '12px',
                        fontWeight: 600,
                        borderRadius: '12px'
                      }}>
                        HQ
                      </span>
                    )}
                  </div>
                  <Text color="muted" style={{ marginBottom: spacing[1] }}>
                    {office.address}
                  </Text>
                  <Text color="muted">
                    {office.state}
                  </Text>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: `${spacing[20]}px ${spacing[6]}px` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Heading level={2} style={{ textAlign: 'center', marginBottom: spacing[12] }}>
            Frequently Asked Questions
          </Heading>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            <Card variant="outlined">
              <CardBody>
                <Heading level={4} style={{ marginBottom: spacing[3] }}>
                  What is your typical engagement process?
                </Heading>
                <Text color="muted">
                  We start with a discovery phase to understand your needs, then design a
                  tailored solution. After approval, we develop and deploy the solution with
                  comprehensive testing. We provide ongoing support and optimization to ensure
                  long-term success.
                </Text>
              </CardBody>
            </Card>

            <Card variant="outlined">
              <CardBody>
                <Heading level={4} style={{ marginBottom: spacing[3] }}>
                  How long does a typical project take?
                </Heading>
                <Text color="muted">
                  Project timelines vary based on scope and complexity. A typical Business Intelligence
                  implementation takes 8-12 weeks, while a comprehensive data warehouse project may
                  take 3-6 months. We'll provide a detailed timeline during our initial consultation.
                </Text>
              </CardBody>
            </Card>

            <Card variant="outlined">
              <CardBody>
                <Heading level={4} style={{ marginBottom: spacing[3] }}>
                  Do you provide training for our team?
                </Heading>
                <Text color="muted">
                  Yes! We believe in empowering your team to get the most from their analytics
                  investment. We provide comprehensive training sessions, documentation, and
                  ongoing support to ensure your team is confident using the solutions we deliver.
                </Text>
              </CardBody>
            </Card>

            <Card variant="outlined">
              <CardBody>
                <Heading level={4} style={{ marginBottom: spacing[3] }}>
                  What industries do you work with?
                </Heading>
                <Text color="muted">
                  We have extensive experience across healthcare, finance, retail, manufacturing,
                  technology, and energy sectors. Our consultants bring industry-specific knowledge
                  and best practices to every engagement.
                </Text>
              </CardBody>
            </Card>

            <Card variant="outlined">
              <CardBody>
                <Heading level={4} style={{ marginBottom: spacing[3] }}>
                  Do you offer ongoing support after project completion?
                </Heading>
                <Text color="muted">
                  Absolutely. We offer flexible support packages including maintenance, enhancements,
                  and strategic advisory services. Many of our clients engage us for long-term
                  partnerships to continuously optimize their analytics capabilities.
                </Text>
              </CardBody>
            </Card>
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
            Ready to Start Your Project?
          </Heading>
          <Text size="xl" style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: spacing[8] }}>
            Schedule a free consultation with one of our data analytics experts today.
          </Text>
          <Button
            variant="secondary"
            size="lg"
            style={{
              backgroundColor: 'white',
              color: colors.primary[600],
              border: 'none'
            }}
          >
            Schedule Consultation
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactPage;
