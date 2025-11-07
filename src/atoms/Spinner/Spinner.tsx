import React from 'react';
import './Spinner.css';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Spinner size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Spinner color */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'white';
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'primary',
  className = '',
  ...props
}) => {
  const classNames = [
    'ds-spinner',
    `ds-spinner--${size}`,
    `ds-spinner--${color}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} role="status" aria-label="Loading" {...props}>
      <span className="ds-spinner__sr-only">Loading...</span>
    </div>
  );
};
