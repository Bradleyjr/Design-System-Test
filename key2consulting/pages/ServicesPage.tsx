import React from 'react';
import { MainLayout } from '../../src/templates/MainLayout/MainLayout';
import { Hero } from '../../src/organisms/Hero/Hero';
import { Card, CardHeader, CardBody, CardFooter } from '../../src/molecules/Card/Card';
import { Button } from '../../src/atoms/Button/Button';
import { Heading } from '../../src/atoms/Heading/Heading';
import { Text } from '../../src/atoms/Text/Text';
import { Badge } from '../../src/molecules/Badge/Badge';
import { colors } from '../../src/tokens/colors';
import { spacing } from '../../src/tokens/spacing';

export const ServicesPage: React.FC = () => {
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
          { label: 'Data Warehousing', href: '#data-warehousing' },
          { label: 'Business Intelligence', href: '#business-intelligence' },
          { label: 'Data Integration', href: '#data-integration' },
          { label: 'Custom Applications', href: '#custom-applications' }
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

  const services = [
    {
      id: 'data-warehousing',
      title: 'Data Warehousing',
      icon: '📊',
      color: colors.primary[600],
      description: 'Build a solid foundation for your analytics with enterprise-grade data warehouse solutions.',
      longDescription: 'Our data warehousing solutions provide custom-designed systems that consolidate and organize data from multiple sources into a single, reliable repository. We leverage Microsoft Azure Synapse Analytics, Azure SQL Data Warehouse, and on-premises SQL Server to create scalable architectures that support your reporting and analytics needs.',
      benefits: [
        'Centralized data repository for all business information',
        'Improved data quality and consistency',
        'Faster query performance and reporting',
        'Scalable architecture that grows with your business',
        'Historical data tracking and trend analysis',
        'Reduced data redundancy and storage costs'
      ],
      technologies: [
        'Azure Synapse Analytics',
        'SQL Server',
        'Azure Data Lake',
        'PolyBase',
        'SSIS',
        'Databricks'
      ],
      useCases: [
        'Enterprise data consolidation',
        'Historical trend analysis',
        'Regulatory compliance reporting',
        'Cross-departmental analytics'
      ]
    },
    {
      id: 'business-intelligence',
      title: 'Business Intelligence',
      icon: '💡',
      color: colors.secondary[600],
      description: 'Transform data into actionable insights with powerful visualization and reporting tools.',
      longDescription: 'Our BI solutions empower decision-makers with real-time dashboards, interactive reports, and advanced analytics. We specialize in Power BI implementations that turn your data into compelling visual stories, enabling faster and more informed business decisions across all levels of your organization.',
      benefits: [
        'Real-time data visualization and monitoring',
        'Self-service analytics for business users',
        'Mobile-ready dashboards and reports',
        'Predictive analytics and forecasting',
        'Automated report distribution',
        'KPI tracking and performance management'
      ],
      technologies: [
        'Power BI',
        'Power BI Report Server',
        'SQL Server Reporting Services',
        'Azure Analysis Services',
        'DAX',
        'Power Query'
      ],
      useCases: [
        'Executive dashboards',
        'Sales and marketing analytics',
        'Financial reporting',
        'Operational performance monitoring'
      ]
    },
    {
      id: 'data-integration',
      title: 'Data Integration',
      icon: '🔗',
      color: colors.info[600],
      description: 'Seamlessly connect and harmonize data from disparate sources across your enterprise.',
      longDescription: 'We design and implement robust data integration solutions that bring together information from various systems, applications, and data sources. Our ETL/ELT processes ensure clean, consistent, and timely data delivery to support your analytics and business operations.',
      benefits: [
        'Unified view of data across systems',
        'Automated data pipelines and workflows',
        'Real-time and batch data processing',
        'Data quality validation and cleansing',
        'Error handling and monitoring',
        'Reduced manual data processing'
      ],
      technologies: [
        'Azure Data Factory',
        'SSIS',
        'Azure Databricks',
        'Logic Apps',
        'Event Grid',
        'Stream Analytics'
      ],
      useCases: [
        'Cloud migration projects',
        'System consolidation',
        'Real-time data streaming',
        'API integration'
      ]
    },
    {
      id: 'custom-applications',
      title: 'Custom Applications',
      icon: '⚙️',
      color: colors.success[600],
      description: 'Tailored software solutions designed to solve your unique business challenges.',
      longDescription: 'When off-the-shelf solutions don\'t meet your needs, we build custom applications that integrate seamlessly with your data infrastructure. Our development team creates scalable, secure, and user-friendly applications that maximize your data ROI and streamline business processes.',
      benefits: [
        'Solutions tailored to your specific needs',
        'Integration with existing systems',
        'Scalable and maintainable codebase',
        'Modern, intuitive user interfaces',
        'Cloud-native architecture',
        'Ongoing support and enhancements'
      ],
      technologies: [
        'Azure App Services',
        '.NET Core',
        'React',
        'Azure Functions',
        'Azure API Management',
        'Azure DevOps'
      ],
      useCases: [
        'Data entry portals',
        'Customer-facing analytics',
        'Process automation tools',
        'Internal management systems'
      ]
    }
  ];

  return (
    <MainLayout headerProps={headerProps} footerProps={footerProps}>
      {/* Hero Section */}
      <Hero
        title="Comprehensive Data Solutions"
        subtitle="Expert services to unlock the full potential of your data assets"
        size="lg"
        align="center"
        actions={
          <Button variant="primary" size="lg">
            Schedule Consultation
          </Button>
        }
      />

      {/* Services Overview */}
      <section style={{ padding: `${spacing[12]}px ${spacing[6]}px`, backgroundColor: colors.neutral[50] }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <Text size="xl" color="muted" style={{ maxWidth: '800px', margin: '0 auto' }}>
            From data warehousing to custom application development, our comprehensive suite of services
            covers every aspect of your data analytics journey. We combine Microsoft's cutting-edge
            technologies with industry best practices to deliver solutions that drive real business value.
          </Text>
        </div>
      </section>

      {/* Detailed Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          style={{
            padding: `${spacing[20]}px ${spacing[6]}px`,
            backgroundColor: index % 2 === 0 ? 'white' : colors.neutral[50]
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: spacing[12],
              alignItems: 'start'
            }}>
              {/* Service Header */}
              <div>
                <div style={{
                  fontSize: '64px',
                  marginBottom: spacing[4],
                  display: 'flex',
                  alignItems: 'center',
                  gap: spacing[4]
                }}>
                  <span>{service.icon}</span>
                  <div style={{
                    width: '8px',
                    height: '80px',
                    backgroundColor: service.color,
                    borderRadius: '4px'
                  }} />
                </div>
                <Heading level={2} style={{ marginBottom: spacing[4] }}>
                  {service.title}
                </Heading>
                <Text size="lg" color="muted" style={{ marginBottom: spacing[6] }}>
                  {service.description}
                </Text>
                <Text color="muted" style={{ marginBottom: spacing[8] }}>
                  {service.longDescription}
                </Text>
                <Button variant="primary">
                  Learn More
                </Button>
              </div>

              {/* Service Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
                {/* Benefits */}
                <Card variant="outlined">
                  <CardHeader>
                    <Heading level={4}>Key Benefits</Heading>
                  </CardHeader>
                  <CardBody>
                    <ul style={{
                      margin: 0,
                      paddingLeft: spacing[5],
                      display: 'flex',
                      flexDirection: 'column',
                      gap: spacing[3]
                    }}>
                      {service.benefits.map((benefit, i) => (
                        <li key={i}>
                          <Text>{benefit}</Text>
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>

                {/* Technologies */}
                <Card variant="outlined">
                  <CardHeader>
                    <Heading level={4}>Technologies We Use</Heading>
                  </CardHeader>
                  <CardBody>
                    <div style={{
                      display: 'flex',
                      gap: spacing[2],
                      flexWrap: 'wrap'
                    }}>
                      {service.technologies.map((tech, i) => (
                        <Badge key={i} variant="primary" size="md">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardBody>
                </Card>

                {/* Use Cases */}
                <Card variant="outlined">
                  <CardHeader>
                    <Heading level={4}>Common Use Cases</Heading>
                  </CardHeader>
                  <CardBody>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: spacing[2]
                    }}>
                      {service.useCases.map((useCase, i) => (
                        <div
                          key={i}
                          style={{
                            padding: spacing[3],
                            backgroundColor: colors.neutral[50],
                            borderRadius: '4px'
                          }}
                        >
                          <Text>✓ {useCase}</Text>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section style={{
        padding: `${spacing[20]}px ${spacing[6]}px`,
        background: `linear-gradient(135deg, ${colors.primary[600]} 0%, ${colors.secondary[700]} 100%)`
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Heading level={2} style={{ color: 'white', textAlign: 'center', marginBottom: spacing[12] }}>
            Our Proven Process
          </Heading>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: spacing[6]
          }}>
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your business needs, data landscape, and objectives' },
              { step: '02', title: 'Design', description: 'We create a tailored solution architecture and implementation roadmap' },
              { step: '03', title: 'Develop', description: 'Our experts build and test your solution using best practices' },
              { step: '04', title: 'Deploy', description: 'We implement the solution with minimal disruption to operations' },
              { step: '05', title: 'Support', description: 'We provide ongoing support, training, and optimization' }
            ].map((phase, index) => (
              <Card
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <CardBody>
                  <Text
                    size="xl"
                    weight="bold"
                    style={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      marginBottom: spacing[2]
                    }}
                  >
                    {phase.step}
                  </Text>
                  <Heading
                    level={4}
                    style={{ color: 'white', marginBottom: spacing[3] }}
                  >
                    {phase.title}
                  </Heading>
                  <Text style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    {phase.description}
                  </Text>
                </CardBody>
              </Card>
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
            Ready to Get Started?
          </Heading>
          <Text size="xl" color="muted" style={{ marginBottom: spacing[8] }}>
            Let's discuss how our services can help you achieve your data analytics goals.
          </Text>
          <div style={{ display: 'flex', gap: spacing[4], justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg">
              Request a Quote
            </Button>
            <Button variant="outline" size="lg">
              Download Service Overview
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicesPage;
