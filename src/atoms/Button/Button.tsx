import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Full width button */
  fullWidth?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Icon on the left */
  leftIcon?: React.ReactNode;
  /** Icon on the right */
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className = '',
  ...props
}) => {
  const classNames = [
    'ds-button',
    `ds-button--${variant}`,
    `ds-button--${size}`,
    fullWidth && 'ds-button--full-width',
    loading && 'ds-button--loading',
    disabled && 'ds-button--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classNames}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="ds-button__spinner" />}
      {!loading && leftIcon && <span className="ds-button__icon-left">{leftIcon}</span>}
      <span className="ds-button__content">{children}</span>
      {!loading && rightIcon && <span className="ds-button__icon-right">{rightIcon}</span>}
    </button>
  );
};
