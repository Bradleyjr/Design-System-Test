import Link from 'next/link';
import { Suspense } from 'react';
import { Card, CardDescription, CardHeader, CardTitle, Button } from '@design-system/ui';
import { getDashboardData } from '../src/server/dashboard';
import { ProjectForm } from '../src/components/project-form';

async function Dashboard() {
  const data = await getDashboardData();

  if (!data.memberships.length) {
    return (
      <Card className="mx-auto mt-24 max-w-xl text-center">
        <CardHeader>
          <CardTitle>Create your first organization</CardTitle>
          <CardDescription>
            You are not a member of any organization yet. Invite your teammates to collaborate on projects.
          </CardDescription>
        </CardHeader>
        <Button asChild>
          <Link href="#">Start onboarding</Link>
        </Button>
      </Card>
    );
  }

  const organization = data.memberships.find((membership) => membership.organization.id === data.activeOrgId);

  return (
    <div className="space-y-8 p-10">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Welcome back 👋</h1>
        <p className="text-sm text-gray-600">
          You are viewing <strong>{organization?.organization.name}</strong>. Manage projects, billing, feature flags, and more in
          one place.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
            <CardDescription>{data.projects.length} active initiatives</CardDescription>
          </CardHeader>
          <div className="space-y-3">
            {data.projects.map((project) => (
              <div key={project.id} className="rounded-lg border border-gray-200 p-4">
                <h3 className="font-medium text-gray-900">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.description ?? 'No description provided.'}</p>
              </div>
            ))}
            {data.activeOrgId ? <ProjectForm organizationId={data.activeOrgId} /> : null}
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Onboarding</CardTitle>
            <CardDescription>
              {data.onboarding.completed ? 'Your team is ready to go!' : 'Complete the checklist to unlock all features.'}
            </CardDescription>
          </CardHeader>
          <ul className="space-y-2">
            {data.onboarding.checklist.map((item) => (
              <li key={item.id} className="flex items-center justify-between rounded-md border border-gray-100 px-3 py-2">
                <span>{item.title}</span>
                <span className="text-sm text-gray-500">{item.completed ? 'Done' : 'Pending'}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Billing</CardTitle>
            <CardDescription>Plan: {data.billing?.plan ?? 'starter'}</CardDescription>
          </CardHeader>
          <div className="space-y-3 text-sm text-gray-600">
            <p>Seats: {data.billing?.seats ?? 1}</p>
            <p>Stripe Customer: {data.billing?.stripeCustomer ?? 'pending sync'}</p>
            <Button variant="secondary">Open customer portal</Button>
          </div>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Audit log</CardTitle>
            <CardDescription>Latest 20 events across your organization.</CardDescription>
          </CardHeader>
          <div className="space-y-2 text-sm">
            {data.audit.map((event) => (
              <div key={event.id} className="flex items-center justify-between rounded-md border border-gray-100 px-3 py-2">
                <span>{event.action}</span>
                <time className="text-gray-500">{new Date(event.createdAt).toLocaleString()}</time>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Keep up with important changes.</CardDescription>
          </CardHeader>
          <div className="space-y-2 text-sm">
            {data.notifications.map((notification) => (
              <div key={notification.id} className="rounded-md border border-gray-100 px-3 py-2">
                <p className="font-medium">{notification.type}</p>
                <p className="text-gray-600">{JSON.stringify(notification.payload)}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feature flags</CardTitle>
            <CardDescription>Control beta features per organization.</CardDescription>
          </CardHeader>
          <div className="space-y-2 text-sm">
            {data.featureFlags.map((flag) => (
              <div key={flag.id} className="flex items-center justify-between rounded-md border border-gray-100 px-3 py-2">
                <div>
                  <p className="font-medium">{flag.key}</p>
                  <p className="text-gray-600">{flag.description ?? 'No description'}</p>
                </div>
                <span className="text-xs uppercase tracking-wide text-gray-500">{flag.enabled ? 'Enabled' : 'Disabled'}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>Usage insights over time.</CardDescription>
          </CardHeader>
          <div className="space-y-2 text-sm">
            {data.analytics.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-md border border-gray-100 px-3 py-2">
                <span>{item.label}</span>
                <span className="text-gray-600">{item.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p className="p-10">Loading dashboard…</p>}>
      <Dashboard />
    </Suspense>
  );
}
