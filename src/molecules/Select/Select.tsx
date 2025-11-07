import React from 'react';
import './Select.css';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Select options */
  options: SelectOption[];
  /** Error state */
  error?: boolean;
  /** Full width select */
  fullWidth?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Placeholder text */
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({
  options,
  error = false,
  fullWidth = false,
  size = 'md',
  placeholder,
  className = '',
  disabled = false,
  ...props
}, ref) => {
  const wrapperClassNames = [
    'ds-select-wrapper',
    `ds-select-wrapper--${size}`,
    error && 'ds-select-wrapper--error',
    disabled && 'ds-select-wrapper--disabled',
    fullWidth && 'ds-select-wrapper--full-width',
  ]
    .filter(Boolean)
    .join(' ');

  const selectClassNames = [
    'ds-select',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClassNames}>
      <select
        ref={ref}
        className={selectClassNames}
        disabled={disabled}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
      <span className="ds-select__icon">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </span>
    </div>
  );
});

Select.displayName = 'Select';
