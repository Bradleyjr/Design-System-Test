import React from 'react';
import { FormField } from '../../molecules/FormField';
import { Button } from '../../atoms/Button';
import { Alert } from '../../molecules/Alert';
import './ContactForm.css';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormProps {
  /** Callback when form is submitted */
  onSubmit?: (data: ContactFormData) => void | Promise<void>;
  /** Loading state */
  loading?: boolean;
  /** Success message */
  successMessage?: string;
  /** Error message */
  errorMessage?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  loading = false,
  successMessage,
  errorMessage,
}) => {
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = React.useState<Partial<Record<keyof ContactFormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      await onSubmit?.(formData);
    }
  };

  const handleChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <form className="ds-contact-form" onSubmit={handleSubmit}>
      {successMessage && (
        <Alert variant="success" dismissible>
          {successMessage}
        </Alert>
      )}
      {errorMessage && (
        <Alert variant="error" dismissible>
          {errorMessage}
        </Alert>
      )}

      <FormField
        label="Name"
        required
        error={errors.name}
        inputProps={{
          value: formData.name,
          onChange: handleChange('name'),
          placeholder: 'Your name',
        }}
      />

      <FormField
        label="Email"
        required
        error={errors.email}
        inputProps={{
          type: 'email',
          value: formData.email,
          onChange: handleChange('email'),
          placeholder: 'your.email@example.com',
        }}
      />

      <FormField
        label="Subject"
        required
        error={errors.subject}
        inputProps={{
          value: formData.subject,
          onChange: handleChange('subject'),
          placeholder: 'What is this about?',
        }}
      />

      <div className="ds-form-field">
        <label className="ds-label ds-label--md" htmlFor="message">
          Message<span className="ds-label__required">*</span>
        </label>
        <textarea
          id="message"
          className={`ds-contact-form__textarea ${errors.message ? 'ds-contact-form__textarea--error' : ''}`}
          value={formData.message}
          onChange={handleChange('message')}
          placeholder="Your message..."
          rows={6}
        />
        {errors.message && (
          <span className="ds-text ds-text--sm ds-text--color-error">{errors.message}</span>
        )}
      </div>

      <Button type="submit" loading={loading} fullWidth size="lg">
        Send Message
      </Button>
    </form>
  );
};
