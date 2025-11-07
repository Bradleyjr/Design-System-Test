import React from 'react';
import './Textarea.css';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Error state */
  error?: boolean;
  /** Full width textarea */
  fullWidth?: boolean;
  /** Resize behavior */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({
  error = false,
  fullWidth = false,
  resize = 'vertical',
  className = '',
  disabled = false,
  ...props
}, ref) => {
  const wrapperClassNames = [
    'ds-textarea-wrapper',
    error && 'ds-textarea-wrapper--error',
    disabled && 'ds-textarea-wrapper--disabled',
    fullWidth && 'ds-textarea-wrapper--full-width',
  ]
    .filter(Boolean)
    .join(' ');

  const textareaClassNames = [
    'ds-textarea',
    `ds-textarea--resize-${resize}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClassNames}>
      <textarea
        ref={ref}
        className={textareaClassNames}
        disabled={disabled}
        {...props}
      />
    </div>
  );
});

Textarea.displayName = 'Textarea';
