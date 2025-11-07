import React from 'react';
import { DashboardLayout } from '../../templates/DashboardLayout';
import { Card, CardHeader, CardBody } from '../../molecules/Card';
import { Badge } from '../../molecules/Badge';
import { Heading } from '../../atoms/Heading';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import './DashboardPage.css';

export const DashboardPage: React.FC = () => {
  const headerProps = {
    brand: 'DesignSystem',
    actions: (
      <>
        <Text size="sm" weight="medium">John Doe</Text>
        <Button variant="ghost" size="sm">Logout</Button>
      </>
    ),
  };

  const navItems = [
    { label: 'Dashboard', href: '/dashboard', icon: '📊' },
    { label: 'Projects', href: '/projects', icon: '📁' },
    { label: 'Analytics', href: '/analytics', icon: '📈' },
    { label: 'Team', href: '/team', icon: '👥' },
    { label: 'Settings', href: '/settings', icon: '⚙️' },
  ];

  return (
    <DashboardLayout headerProps={headerProps} navItems={navItems}>
      <div className="dashboard-page">
        <div className="dashboard-page__header">
          <Heading level={1}>Dashboard</Heading>
          <Text color="muted">Welcome back! Here's what's happening today.</Text>
        </div>

        <div className="dashboard-page__stats">
          <Card variant="elevated" padding="lg">
            <Text size="sm" color="muted" weight="medium">Total Users</Text>
            <Heading level={2}>24,583</Heading>
            <div className="dashboard-page__stat-change">
              <Badge variant="success" size="sm">+12%</Badge>
              <Text size="sm" color="muted">vs last month</Text>
            </div>
          </Card>

          <Card variant="elevated" padding="lg">
            <Text size="sm" color="muted" weight="medium">Revenue</Text>
            <Heading level={2}>$48,291</Heading>
            <div className="dashboard-page__stat-change">
              <Badge variant="success" size="sm">+8%</Badge>
              <Text size="sm" color="muted">vs last month</Text>
            </div>
          </Card>

          <Card variant="elevated" padding="lg">
            <Text size="sm" color="muted" weight="medium">Projects</Text>
            <Heading level={2}>156</Heading>
            <div className="dashboard-page__stat-change">
              <Badge variant="warning" size="sm">-3%</Badge>
              <Text size="sm" color="muted">vs last month</Text>
            </div>
          </Card>

          <Card variant="elevated" padding="lg">
            <Text size="sm" color="muted" weight="medium">Active Users</Text>
            <Heading level={2}>8,234</Heading>
            <div className="dashboard-page__stat-change">
              <Badge variant="success" size="sm">+18%</Badge>
              <Text size="sm" color="muted">vs last month</Text>
            </div>
          </Card>
        </div>

        <div className="dashboard-page__content">
          <Card variant="elevated" padding="lg">
            <CardHeader>
              <Heading level={3}>Recent Activity</Heading>
            </CardHeader>
            <CardBody>
              <div className="dashboard-page__activity">
                <div className="dashboard-page__activity-item">
                  <div>
                    <Text weight="medium">New user registered</Text>
                    <Text size="sm" color="muted">2 minutes ago</Text>
                  </div>
                  <Badge variant="info">User</Badge>
                </div>
                <div className="dashboard-page__activity-item">
                  <div>
                    <Text weight="medium">Project "Website Redesign" completed</Text>
                    <Text size="sm" color="muted">1 hour ago</Text>
                  </div>
                  <Badge variant="success">Project</Badge>
                </div>
                <div className="dashboard-page__activity-item">
                  <div>
                    <Text weight="medium">Payment received</Text>
                    <Text size="sm" color="muted">3 hours ago</Text>
                  </div>
                  <Badge variant="primary">Payment</Badge>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card variant="elevated" padding="lg">
            <CardHeader>
              <Heading level={3}>Quick Actions</Heading>
            </CardHeader>
            <CardBody>
              <div className="dashboard-page__actions">
                <Button variant="primary" fullWidth>Create New Project</Button>
                <Button variant="outline" fullWidth>Invite Team Member</Button>
                <Button variant="outline" fullWidth>View Reports</Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};
