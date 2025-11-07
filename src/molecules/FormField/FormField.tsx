import React from 'react';
import { Label, LabelProps } from '../../atoms/Label';
import { Input, InputProps } from '../../atoms/Input';
import { Text } from '../../atoms/Text';
import './FormField.css';

export interface FormFieldProps {
  /** Label text */
  label: string;
  /** Label props */
  labelProps?: Omit<LabelProps, 'children'>;
  /** Input props */
  inputProps?: InputProps;
  /** Helper text */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Required field */
  required?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  labelProps,
  inputProps,
  helperText,
  error,
  required = false,
}) => {
  const inputId = inputProps?.id || `form-field-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="ds-form-field">
      <Label htmlFor={inputId} required={required} {...labelProps}>
        {label}
      </Label>
      <Input
        id={inputId}
        error={!!error}
        {...inputProps}
      />
      {error && (
        <Text as="span" size="sm" color="error" className="ds-form-field__error">
          {error}
        </Text>
      )}
      {!error && helperText && (
        <Text as="span" size="sm" color="muted" className="ds-form-field__helper">
          {helperText}
        </Text>
      )}
    </div>
  );
};
