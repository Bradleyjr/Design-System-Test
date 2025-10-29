import type React from 'react';
import { cn } from '../utils';
import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'secondary' | 'ghost';
  asChild?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = 'default', asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          'inline-flex items-center justify-center rounded-md border border-transparent px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          variant === 'default' && 'bg-brand text-brand-foreground hover:bg-brand/90',
          variant === 'secondary' && 'bg-gray-100 text-gray-900 hover:bg-gray-200',
          variant === 'ghost' && 'hover:bg-gray-100',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';
