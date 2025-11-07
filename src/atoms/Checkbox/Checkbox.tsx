import React from 'react';
import './Checkbox.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Checkbox label */
  label?: string;
  /** Error state */
  error?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({
  label,
  error = false,
  size = 'md',
  className = '',
  disabled = false,
  ...props
}, ref) => {
  const wrapperClassNames = [
    'ds-checkbox-wrapper',
    `ds-checkbox-wrapper--${size}`,
    error && 'ds-checkbox-wrapper--error',
    disabled && 'ds-checkbox-wrapper--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={wrapperClassNames}>
      <input
        ref={ref}
        type="checkbox"
        className="ds-checkbox"
        disabled={disabled}
        {...props}
      />
      {label && <span className="ds-checkbox__label">{label}</span>}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
