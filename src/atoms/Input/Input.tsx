import React from 'react';
import './Input.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input size */
  size?: 'sm' | 'md' | 'lg';
  /** Error state */
  error?: boolean;
  /** Full width input */
  fullWidth?: boolean;
  /** Icon on the left */
  leftIcon?: React.ReactNode;
  /** Icon on the right */
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  size = 'md',
  error = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled = false,
  ...props
}, ref) => {
  const wrapperClassNames = [
    'ds-input-wrapper',
    `ds-input-wrapper--${size}`,
    error && 'ds-input-wrapper--error',
    disabled && 'ds-input-wrapper--disabled',
    fullWidth && 'ds-input-wrapper--full-width',
    leftIcon && 'ds-input-wrapper--has-left-icon',
    rightIcon && 'ds-input-wrapper--has-right-icon',
  ]
    .filter(Boolean)
    .join(' ');

  const inputClassNames = [
    'ds-input',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClassNames}>
      {leftIcon && <span className="ds-input__icon-left">{leftIcon}</span>}
      <input
        ref={ref}
        className={inputClassNames}
        disabled={disabled}
        {...props}
      />
      {rightIcon && <span className="ds-input__icon-right">{rightIcon}</span>}
    </div>
  );
});

Input.displayName = 'Input';
