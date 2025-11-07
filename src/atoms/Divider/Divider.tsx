import React from 'react';
import './Divider.css';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Text label */
  label?: string;
  /** Label position */
  labelPosition?: 'left' | 'center' | 'right';
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  label,
  labelPosition = 'center',
  className = '',
  ...props
}) => {
  if (label && orientation === 'horizontal') {
    return (
      <div className={`ds-divider-wrapper ds-divider-wrapper--${labelPosition} ${className}`}>
        <hr className="ds-divider ds-divider--horizontal" {...props} />
        <span className="ds-divider__label">{label}</span>
        <hr className="ds-divider ds-divider--horizontal" {...props} />
      </div>
    );
  }

  const classNames = [
    'ds-divider',
    `ds-divider--${orientation}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <hr className={classNames} {...props} />;
};
