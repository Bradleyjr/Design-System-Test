import React from 'react';
import { AuthLayout } from '../../templates/AuthLayout';
import { FormField } from '../../molecules/FormField';
import { Button } from '../../atoms/Button';
import { Text } from '../../atoms/Text';
import { Link } from '../../atoms/Link';
import './LoginPage.css';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    console.log('Login:', { email, password });
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your account to continue"
      logo="🎨 DesignSystem"
      footerLink={{
        text: "Don't have an account?",
        linkText: 'Sign up',
        href: '/signup',
      }}
    >
      <form onSubmit={handleSubmit} className="login-page__form">
        <FormField
          label="Email"
          required
          inputProps={{
            type: 'email',
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: 'your.email@example.com',
            fullWidth: true,
          }}
        />

        <FormField
          label="Password"
          required
          inputProps={{
            type: 'password',
            value: password,
            onChange: (e) => setPassword(e.target.value),
            placeholder: '••••••••',
            fullWidth: true,
          }}
        />

        <div className="login-page__forgot">
          <Link href="/forgot-password" variant="primary" underline="hover">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" variant="primary" size="lg" fullWidth loading={loading}>
          Sign In
        </Button>

        <div className="login-page__divider">
          <span>or continue with</span>
        </div>

        <div className="login-page__social">
          <Button variant="outline" fullWidth>
            Google
          </Button>
          <Button variant="outline" fullWidth>
            GitHub
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};
