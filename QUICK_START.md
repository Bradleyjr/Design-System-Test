# Quick Start Guide

Get up and running with the design system in minutes!

## Installation

```bash
npm install @design-system/core react react-dom
```

## Setup

### 1. Import Styles

The design system uses CSS modules. Make sure to import component styles:

```tsx
// In your main App file
import '@design-system/core/dist/styles.css';
```

### 2. Create Your First Component

```tsx
import React from 'react';
import { Button, Heading, Text } from '@design-system/core';

function App() {
  return (
    <div>
      <Heading level={1}>Hello World</Heading>
      <Text>Welcome to the design system!</Text>
      <Button variant="primary">Click Me</Button>
    </div>
  );
}

export default App;
```

## Common Patterns

### Building a Form

```tsx
import { FormField, Button } from '@design-system/core';

function ContactForm() {
  const [email, setEmail] = React.useState('');

  return (
    <form>
      <FormField
        label="Email"
        required
        inputProps={{
          type: 'email',
          value: email,
          onChange: (e) => setEmail(e.target.value),
          placeholder: 'your@email.com'
        }}
      />
      <Button type="submit" variant="primary" fullWidth>
        Submit
      </Button>
    </form>
  );
}
```

### Creating a Card Layout

```tsx
import { Card, CardHeader, CardBody, Heading, Text } from '@design-system/core';

function ProductCard() {
  return (
    <Card variant="elevated" padding="lg">
      <CardHeader>
        <Heading level={3}>Product Name</Heading>
      </CardHeader>
      <CardBody>
        <Text>Product description goes here</Text>
      </CardBody>
    </Card>
  );
}
```

### Building a Page

```tsx
import {
  MainLayout,
  Hero,
  Button,
  Card,
  Heading,
  Text
} from '@design-system/core';

function HomePage() {
  return (
    <MainLayout
      headerProps={{
        brand: 'MyApp',
        navItems: [
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' }
        ]
      }}
      footerProps={{
        copyright: '© 2024 MyApp'
      }}
    >
      <Hero
        title="Welcome to MyApp"
        subtitle="Build amazing things"
        actions={
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        }
      />

      <div style={{ padding: '4rem 0' }}>
        <Card variant="elevated" padding="lg">
          <Heading level={2}>Features</Heading>
          <Text>Our amazing features...</Text>
        </Card>
      </div>
    </MainLayout>
  );
}
```

## Using Design Tokens

```tsx
import { colors, spacing, typography } from '@design-system/core';

function CustomComponent() {
  return (
    <div style={{
      backgroundColor: colors.primary[50],
      padding: spacing[8],
      fontSize: typography.fontSize.lg
    }}>
      Content with design tokens
    </div>
  );
}
```

## TypeScript Support

All components are fully typed:

```tsx
import { ButtonProps, HeadingProps } from '@design-system/core';

// Use types for your custom components
const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Next Steps

1. **Explore Components** - Check out `COMPONENT_API.md` for detailed component documentation
2. **Read the Guide** - See `DESIGN_SYSTEM_GUIDE.md` for best practices
3. **View Examples** - Look at the `src/pages/` directory for complete page examples
4. **Customize** - Override styles and extend components for your needs

## Need Help?

- Check the documentation in `DESIGN_SYSTEM_GUIDE.md`
- View component examples in `src/pages/`
- Review the API reference in `COMPONENT_API.md`

Happy building! 🚀
