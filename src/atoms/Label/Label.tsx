import React from 'react';
import './Label.css';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** Required field indicator */
  required?: boolean;
  /** Label size */
  size?: 'sm' | 'md' | 'lg';
}

export const Label: React.FC<LabelProps> = ({
  children,
  required = false,
  size = 'md',
  className = '',
  ...props
}) => {
  const classNames = [
    'ds-label',
    `ds-label--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={classNames} {...props}>
      {children}
      {required && <span className="ds-label__required">*</span>}
    </label>
  );
};
