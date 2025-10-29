import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@design-system/ui';

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  args: {
    children: 'Click me'
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
export const Secondary: Story = {
  args: {
    variant: 'secondary'
  }
};
export const Ghost: Story = {
  args: {
    variant: 'ghost'
  }
};
