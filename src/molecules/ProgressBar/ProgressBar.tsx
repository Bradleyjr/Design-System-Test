import React from 'react';
import './ProgressBar.css';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Progress value (0-100) */
  value: number;
  /** Maximum value */
  max?: number;
  /** Progress bar size */
  size?: 'sm' | 'md' | 'lg';
  /** Progress bar variant */
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning';
  /** Show label */
  showLabel?: boolean;
  /** Custom label */
  label?: string;
  /** Striped style */
  striped?: boolean;
  /** Animated stripes */
  animated?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  size = 'md',
  variant = 'primary',
  showLabel = false,
  label,
  striped = false,
  animated = false,
  className = '',
  ...props
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const displayLabel = label || `${Math.round(percentage)}%`;

  const containerClassNames = [
    'ds-progress-bar',
    `ds-progress-bar--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const fillClassNames = [
    'ds-progress-bar__fill',
    `ds-progress-bar__fill--${variant}`,
    striped && 'ds-progress-bar__fill--striped',
    animated && 'ds-progress-bar__fill--animated',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={containerClassNames}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      {...props}
    >
      <div className={fillClassNames} style={{ width: `${percentage}%` }}>
        {showLabel && (
          <span className="ds-progress-bar__label">{displayLabel}</span>
        )}
      </div>
    </div>
  );
};
