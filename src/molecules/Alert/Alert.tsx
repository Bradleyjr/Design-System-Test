import React from 'react';
import './Alert.css';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Alert variant */
  variant?: 'info' | 'success' | 'warning' | 'error';
  /** Alert title */
  title?: string;
  /** Dismissible alert */
  dismissible?: boolean;
  /** Callback when dismissed */
  onDismiss?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  dismissible = false,
  onDismiss,
  children,
  className = '',
  ...props
}) => {
  const [visible, setVisible] = React.useState(true);

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  if (!visible) return null;

  const classNames = [
    'ds-alert',
    `ds-alert--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const icons = {
    info: 'ℹ',
    success: '✓',
    warning: '⚠',
    error: '✕',
  };

  return (
    <div className={classNames} role="alert" {...props}>
      <span className="ds-alert__icon">{icons[variant]}</span>
      <div className="ds-alert__content">
        {title && <div className="ds-alert__title">{title}</div>}
        <div className="ds-alert__message">{children}</div>
      </div>
      {dismissible && (
        <button
          className="ds-alert__close"
          onClick={handleDismiss}
          aria-label="Close alert"
        >
          ✕
        </button>
      )}
    </div>
  );
};
