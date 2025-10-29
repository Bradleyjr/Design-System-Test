'use client';

import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { Button, toast } from '@design-system/ui';
import { createProjectAction } from '../server/actions';

export function ProjectForm({ organizationId }: { organizationId: string }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<{ name: string; description?: string }>();
  const [pending, startTransition] = useTransition();

  return (
    <form
      className="space-y-3"
      onSubmit={handleSubmit((values) => {
        startTransition(async () => {
          await createProjectAction({ organizationId, ...values });
          toast('Project created');
          reset();
        });
      })}
    >
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700" htmlFor="name">
          Project name
        </label>
        <input
          id="name"
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-brand focus:outline-none"
          placeholder="Brand Design System"
          {...register('name', { required: true })}
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-brand focus:outline-none"
          placeholder="Describe the initiative"
          rows={3}
          {...register('description')}
        />
      </div>
      <Button type="submit" disabled={isSubmitting || pending}>
        {pending ? 'Creating…' : 'Create project'}
      </Button>
    </form>
  );
}
