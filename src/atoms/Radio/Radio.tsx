import React from 'react';
import './Radio.css';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Radio label */
  label?: string;
  /** Error state */
  error?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(({
  label,
  error = false,
  size = 'md',
  className = '',
  disabled = false,
  ...props
}, ref) => {
  const wrapperClassNames = [
    'ds-radio-wrapper',
    `ds-radio-wrapper--${size}`,
    error && 'ds-radio-wrapper--error',
    disabled && 'ds-radio-wrapper--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={wrapperClassNames}>
      <input
        ref={ref}
        type="radio"
        className="ds-radio"
        disabled={disabled}
        {...props}
      />
      {label && <span className="ds-radio__label">{label}</span>}
    </label>
  );
});

Radio.displayName = 'Radio';
