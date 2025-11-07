import React from 'react';
import { MainLayout } from '../../src/templates/MainLayout/MainLayout';
import { Hero } from '../../src/organisms/Hero/Hero';
import { Card, CardHeader, CardBody } from '../../src/molecules/Card/Card';
import { Button } from '../../src/atoms/Button/Button';
import { Heading } from '../../src/atoms/Heading/Heading';
import { Text } from '../../src/atoms/Text/Text';
import { Avatar } from '../../src/atoms/Avatar/Avatar';
import { Badge } from '../../src/molecules/Badge/Badge';
import { colors } from '../../src/tokens/colors';
import { spacing } from '../../src/tokens/spacing';

export const AboutPage: React.FC = () => {
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

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality solutions and exceeding client expectations in every engagement.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'We build long-term relationships with our clients, working as trusted advisors and partners in their success.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We stay at the forefront of technology, continuously learning and applying the latest analytics innovations.'
    },
    {
      icon: '🔒',
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and the highest ethical standards in all our business relationships.'
    },
    {
      icon: '📈',
      title: 'Results',
      description: 'We focus on measurable outcomes and ROI, ensuring our solutions deliver tangible business value.'
    },
    {
      icon: '👥',
      title: 'Collaboration',
      description: 'We foster teamwork, knowledge sharing, and open communication both internally and with clients.'
    }
  ];

  const timeline = [
    {
      year: '2005',
      title: 'Company Founded',
      description: 'Key2 Consulting was established with a vision to help businesses unlock the power of their data.'
    },
    {
      year: '2008',
      title: 'Microsoft Partnership',
      description: 'Achieved Microsoft Gold Partner status, recognizing our expertise in data analytics solutions.'
    },
    {
      year: '2012',
      title: 'Major Expansion',
      description: 'Expanded to 25+ consultants and began serving Fortune 500 clients across multiple industries.'
    },
    {
      year: '2016',
      title: 'Cloud Focus',
      description: 'Pivoted to cloud-first strategy, specializing in Azure data platform and Power BI solutions.'
    },
    {
      year: '2020',
      title: 'Continued Growth',
      description: 'Reached 40+ expert consultants and delivered 500+ successful projects.'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as a premier Microsoft analytics partner, driving innovation in data solutions.'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      initials: 'SJ',
      bio: 'Industry veteran with 25+ years of experience in data analytics and business intelligence.',
      expertise: ['Strategic Leadership', 'Data Strategy', 'Client Relations']
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      initials: 'MC',
      bio: 'Azure architect and Microsoft MVP with deep expertise in cloud data platforms.',
      expertise: ['Azure Architecture', 'Cloud Migration', 'Technical Innovation']
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Business Intelligence',
      initials: 'ER',
      bio: 'Power BI expert who has led implementations for global enterprises.',
      expertise: ['Power BI', 'Data Visualization', 'Analytics Strategy']
    },
    {
      name: 'David Thompson',
      role: 'VP of Data Engineering',
      initials: 'DT',
      bio: 'Data platform specialist with expertise in building scalable data architectures.',
      expertise: ['Data Warehousing', 'ETL/ELT', 'Data Modeling']
    },
    {
      name: 'Lisa Anderson',
      role: 'VP of Client Success',
      initials: 'LA',
      bio: 'Customer success leader ensuring exceptional outcomes for all client engagements.',
      expertise: ['Project Management', 'Client Relations', 'Quality Assurance']
    },
    {
      name: 'James Wilson',
      role: 'Principal Consultant',
      initials: 'JW',
      bio: 'Technical lead with extensive experience in complex data integration projects.',
      expertise: ['Data Integration', 'Azure Data Factory', 'Solution Architecture']
    }
  ];

  const certifications = [
    'Microsoft Gold Partner',
    'Azure Solutions Architect Expert',
    'Azure Data Engineer Associate',
    'Power BI Certified',
    'Azure Administrator',
    'Data Analytics Specialty'
  ];

  return (
    <MainLayout headerProps={headerProps} footerProps={footerProps}>
      {/* Hero Section */}
      <Hero
        title="About Key2 Consulting"
        subtitle="Two decades of excellence in data analytics and business intelligence"
        size="lg"
        align="center"
      />

      {/* Mission Section */}
      <section style={{ padding: `${spacing[20]}px ${spacing[6]}px` }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <Heading level={2} style={{ marginBottom: spacing[6] }}>
            Our Mission
          </Heading>
          <Text size="xl" style={{ marginBottom: spacing[6], lineHeight: 1.8 }}>
            To empower organizations to make better, data-driven decisions by delivering
            world-class analytics solutions that transform raw data into strategic business insights.
          </Text>
          <Text size="lg" color="muted" style={{ lineHeight: 1.8 }}>
            We believe that every organization deserves access to powerful data analytics,
            and we're committed to making that a reality through expert consulting,
            cutting-edge technology, and unwavering dedication to our clients' success.
          </Text>
        </div>
      </section>

      {/* Story Section */}
      <section style={{
        padding: `${spacing[20]}px ${spacing[6]}px`,
        backgroundColor: colors.neutral[50]
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Heading level={2} style={{ marginBottom: spacing[12], textAlign: 'center' }}>
            Our Story
          </Heading>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: spacing[8]
          }}>
            {timeline.map((milestone, index) => (
              <Card key={index} variant="outlined">
                <CardBody>
                  <Badge variant="primary" size="lg" style={{ marginBottom: spacing[4] }}>
                    {milestone.year}
                  </Badge>
                  <Heading level={4} style={{ marginBottom: spacing[3] }}>
                    {milestone.title}
                  </Heading>
                  <Text color="muted">
                    {milestone.description}
                  </Text>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: `${spacing[20]}px ${spacing[6]}px` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: spacing[12] }}>
            <Heading level={2} style={{ marginBottom: spacing[4] }}>
              Our Values
            </Heading>
            <Text size="xl" color="muted">
              The principles that guide everything we do
            </Text>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: spacing[6]
          }}>
            {values.map((value, index) => (
              <Card key={index} variant="elevated" style={{ height: '100%' }}>
                <CardBody>
                  <div style={{ fontSize: '48px', marginBottom: spacing[4] }}>
                    {value.icon}
                  </div>
                  <Heading level={4} style={{ marginBottom: spacing[3] }}>
                    {value.title}
                  </Heading>
                  <Text color="muted">
                    {value.description}
                  </Text>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section style={{
        padding: `${spacing[20]}px ${spacing[6]}px`,
        backgroundColor: colors.neutral[50]
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: spacing[12] }}>
            <Heading level={2} style={{ marginBottom: spacing[4] }}>
              Leadership Team
            </Heading>
            <Text size="xl" color="muted">
              Meet the experts guiding our vision and delivery
            </Text>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: spacing[8]
          }}>
            {teamMembers.map((member, index) => (
              <Card key={index} variant="outlined">
                <CardBody>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}>
                    <Avatar
                      initials={member.initials}
                      size="xl"
                      style={{ marginBottom: spacing[4] }}
                    />
                    <Heading level={4} style={{ marginBottom: spacing[1] }}>
                      {member.name}
                    </Heading>
                    <Badge variant="primary" size="md" style={{ marginBottom: spacing[4] }}>
                      {member.role}
                    </Badge>
                    <Text color="muted" style={{ marginBottom: spacing[4], textAlign: 'center' }}>
                      {member.bio}
                    </Text>
                    <div style={{
                      display: 'flex',
                      gap: spacing[2],
                      flexWrap: 'wrap',
                      justifyContent: 'center'
                    }}>
                      {member.expertise.map((skill, i) => (
                        <Badge key={i} variant="default" size="sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ padding: `${spacing[20]}px ${spacing[6]}px` }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <Heading level={2} style={{ marginBottom: spacing[6] }}>
            Certifications & Partnerships
          </Heading>
          <Text size="lg" color="muted" style={{ marginBottom: spacing[8] }}>
            Our team holds industry-leading certifications, ensuring you receive
            expert-level service and best-in-class solutions.
          </Text>
          <div style={{
            display: 'flex',
            gap: spacing[4],
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {certifications.map((cert, index) => (
              <Badge key={index} variant="success" size="lg">
                ✓ {cert}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: `${spacing[20]}px ${spacing[6]}px`,
        background: `linear-gradient(135deg, ${colors.primary[600]} 0%, ${colors.secondary[700]} 100%)`
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Heading level={2} style={{ color: 'white', textAlign: 'center', marginBottom: spacing[12] }}>
            Key2 Consulting by the Numbers
          </Heading>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: spacing[8]
          }}>
            {[
              { value: '20+', label: 'Years in Business' },
              { value: '40+', label: 'Expert Consultants' },
              { value: '500+', label: 'Projects Delivered' },
              { value: '100+', label: 'Enterprise Clients' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '6', label: 'Industry Verticals' }
            ].map((stat, index) => (
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
                <Text size="lg" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  {stat.label}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: `${spacing[20]}px ${spacing[6]}px`,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Heading level={2} style={{ marginBottom: spacing[6] }}>
            Join Our Team
          </Heading>
          <Text size="xl" color="muted" style={{ marginBottom: spacing[8] }}>
            We're always looking for talented data professionals who are passionate
            about analytics and committed to delivering excellence.
          </Text>
          <div style={{ display: 'flex', gap: spacing[4], justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg">
              View Open Positions
            </Button>
            <Button variant="outline" size="lg">
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
