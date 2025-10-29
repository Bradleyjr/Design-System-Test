import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'founder@example.com' },
    update: {},
    create: {
      email: 'founder@example.com',
      name: 'Founding Member'
    }
  });

  const organization = await prisma.organization.upsert({
    where: { slug: 'acme' },
    update: {},
    create: {
      name: 'Acme Inc.',
      slug: 'acme',
      memberships: {
        create: {
          userId: user.id,
          role: 'OWNER'
        }
      },
      projects: {
        create: [
          {
            name: 'Design System',
            description: 'Core component library rollout.'
          },
          {
            name: 'Mobile App',
            description: 'React Native experiment.'
          }
        ]
      },
      featureFlags: {
        create: [
          { key: 'beta-dashboard', enabled: true },
          { key: 'billing-portal', enabled: true }
        ]
      },
      billing: {
        create: {
          stripeCustomer: 'cus_test_123',
          subscriptionId: 'sub_test_123',
          plan: 'growth',
          seats: 10
        }
      }
    }
  });

  await prisma.onboardingState.upsert({
    where: { organizationId: organization.id },
    update: {
      completed: false,
      checklist: [
        { id: 'profile', title: 'Complete your profile', completed: true },
        { id: 'invite', title: 'Invite teammates', completed: false },
        { id: 'project', title: 'Create your first project', completed: true }
      ]
    },
    create: {
      organizationId: organization.id,
      checklist: [
        { id: 'profile', title: 'Complete your profile', completed: true },
        { id: 'invite', title: 'Invite teammates', completed: false },
        { id: 'project', title: 'Create your first project', completed: true }
      ]
    }
  });

  await prisma.auditLog.create({
    data: {
      actorId: user.id,
      action: 'seed.completed',
      metadata: { organizationId: organization.id }
    }
  });

  await prisma.notification.upsert({
    where: { id: '00000000-0000-0000-0000-000000000001' },
    update: {},
    create: {
      id: '00000000-0000-0000-0000-000000000001',
      userId: user.id,
      organizationId: organization.id,
      type: 'project.created',
      payload: { name: 'Design System' }
    }
  });

  await prisma.analyticsEvent.createMany({
    data: [
      { organizationId: organization.id, userId: user.id, name: 'project_created', properties: { project: 'Design System' } },
      { organizationId: organization.id, userId: user.id, name: 'member_invited', properties: { email: 'designer@example.com' } }
    ],
    skipDuplicates: true
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
