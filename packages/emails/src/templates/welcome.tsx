import * as React from 'react';
import { Body, Container, Head, Html, Preview, Section, Text } from '@react-email/components';

type WelcomeEmailProps = {
  userName: string;
  organizationName: string;
};

export const WelcomeEmail = ({ userName, organizationName }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to {organizationName}</Preview>
    <Body style={{ backgroundColor: '#f3f4f6', fontFamily: 'Inter, sans-serif' }}>
      <Container style={{ margin: '0 auto', padding: '24px', backgroundColor: '#ffffff', borderRadius: '16px' }}>
        <Section>
          <Text style={{ fontSize: '16px', lineHeight: '24px', color: '#111827' }}>Hi {userName},</Text>
          <Text style={{ fontSize: '16px', lineHeight: '24px', color: '#111827' }}>
            Welcome to {organizationName}! Your account has been created and you now have access to the shared design system
            workspace.
          </Text>
          <Text style={{ fontSize: '16px', lineHeight: '24px', color: '#111827' }}>
            Invite your teammates, create your first project, and explore the component library.
          </Text>
          <Text style={{ marginTop: '24px', fontSize: '14px', color: '#6b7280' }}>— The Design System Cloud Team</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);
