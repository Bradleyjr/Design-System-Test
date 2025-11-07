# Design System Guide

## Overview

This is a comprehensive design system built on **Brad Frost's Atomic Design** principles. It provides a shared language and reusable components for designers and developers to build consistent, scalable web applications.

## Atomic Design Principles

The design system follows the atomic design methodology, organizing components into five distinct levels:

### 1. **Design Tokens** (Foundation)
Design tokens are the smallest design decisions in your system - colors, typography, spacing, shadows, etc.

```typescript
import { colors, typography, spacing } from '@design-system/core';

// Use design tokens in your styles
const styles = {
  color: colors.primary[500],
  fontSize: typography.fontSize.lg,
  padding: spacing[4]
};
```

### 2. **Atoms** (Basic Building Blocks)
Atoms are the smallest functional components that can't be broken down further without losing their purpose.

Available atoms:
- `Button` - Interactive button component
- `Input` - Text input field
- `Label` - Form label
- `Heading` - Heading elements (h1-h6)
- `Text` - Text/paragraph elements
- `Link` - Hyperlink component

### 3. **Molecules** (Simple Component Groups)
Molecules are simple combinations of atoms that function together as a unit.

Available molecules:
- `FormField` - Label + Input + Error/Helper text
- `Card` - Container with header, body, and footer
- `Badge` - Status or label indicator
- `Alert` - Notification message component
- `SearchBar` - Search input with button

### 4. **Organisms** (Complex Components)
Organisms are complex UI components composed of groups of molecules and atoms.

Available organisms:
- `Header` - Site header with navigation
- `Footer` - Site footer with links
- `Hero` - Hero section with title and CTA
- `ContactForm` - Complete contact form

### 5. **Templates** (Page Layouts)
Templates are page-level layouts that define the structure without specific content.

Available templates:
- `MainLayout` - Standard page layout with header and footer
- `DashboardLayout` - Dashboard with sidebar navigation
- `AuthLayout` - Centered authentication layout

### 6. **Pages** (Specific Instances)
Pages are specific instances of templates with real content.

Example pages:
- `HomePage` - Marketing/landing page
- `DashboardPage` - Dashboard with data
- `LoginPage` - Login form page

## Getting Started

### Installation

```bash
npm install @design-system/core
# or
yarn add @design-system/core
```

### Basic Usage

```tsx
import React from 'react';
import { Button, Heading, MainLayout } from '@design-system/core';

function App() {
  return (
    <MainLayout
      headerProps={{
        brand: 'My App',
        navItems: [
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' }
        ]
      }}
    >
      <Heading level={1}>Welcome to My App</Heading>
      <Button variant="primary" onClick={() => alert('Hello!')}>
        Click Me
      </Button>
    </MainLayout>
  );
}
```

## Component Examples

### Button Component

```tsx
import { Button } from '@design-system/core';

// Primary button
<Button variant="primary">Primary Button</Button>

// With icons
<Button
  variant="primary"
  leftIcon={<Icon name="arrow" />}
>
  With Icon
</Button>

// Loading state
<Button loading>Loading...</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### Card Component

```tsx
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@design-system/core';

<Card variant="elevated" padding="lg">
  <CardHeader>
    <Heading level={3}>Card Title</Heading>
  </CardHeader>
  <CardBody>
    <Text>This is the card content.</Text>
  </CardBody>
  <CardFooter>
    <Button variant="primary">Action</Button>
  </CardFooter>
</Card>
```

### Form Field

```tsx
import { FormField } from '@design-system/core';

<FormField
  label="Email"
  required
  helperText="We'll never share your email"
  inputProps={{
    type: 'email',
    placeholder: 'your.email@example.com'
  }}
/>
```

### Hero Section

```tsx
import { Hero, Button } from '@design-system/core';

<Hero
  title="Build Something Amazing"
  subtitle="Start building with our design system today"
  actions={
    <>
      <Button variant="primary" size="lg">Get Started</Button>
      <Button variant="outline" size="lg">Learn More</Button>
    </>
  }
/>
```

## Design Tokens

### Colors

The color system provides semantic color names and shades:

```typescript
colors.primary[500]    // Primary brand color
colors.secondary[500]  // Secondary color
colors.neutral[500]    // Neutral/gray
colors.success[500]    // Success state
colors.error[500]      // Error state
colors.warning[500]    // Warning state
colors.info[500]       // Info state
```

### Typography

```typescript
typography.fontFamily.sans   // Sans-serif font stack
typography.fontSize.base     // Base font size (16px)
typography.fontWeight.bold   // Bold weight
typography.lineHeight.normal // Normal line height
```

### Spacing

```typescript
spacing[4]   // 1rem (16px)
spacing[8]   // 2rem (32px)
spacing[12]  // 3rem (48px)
```

## Best Practices

### 1. Composition Over Inheritance
Build complex components by composing simpler ones:

```tsx
// Good
<Card>
  <FormField label="Name" />
  <Button>Submit</Button>
</Card>

// Avoid creating overly specific components
```

### 2. Use Design Tokens
Always use design tokens instead of hard-coded values:

```tsx
// Good
<div style={{ padding: spacing[4], color: colors.primary[500] }} />

// Avoid
<div style={{ padding: '16px', color: '#2196f3' }} />
```

### 3. Maintain Consistency
Use the same components throughout your application for consistency:

```tsx
// Good - consistent button usage
<Button variant="primary">Save</Button>
<Button variant="outline">Cancel</Button>

// Avoid mixing different button styles
```

### 4. Accessibility First
All components are built with accessibility in mind. Make sure to:
- Use semantic HTML
- Include ARIA labels where needed
- Ensure keyboard navigation works
- Maintain color contrast ratios

## Customization

### Extending Components

You can extend components with additional styles:

```tsx
import { Button } from '@design-system/core';
import './custom-button.css';

<Button className="my-custom-button" variant="primary">
  Custom Styled Button
</Button>
```

### Overriding Tokens

Create your own token file based on the design tokens:

```typescript
import { colors as baseColors } from '@design-system/core';

export const colors = {
  ...baseColors,
  primary: {
    ...baseColors.primary,
    500: '#YOUR_BRAND_COLOR'
  }
};
```

## Project Structure

```
src/
├── tokens/              # Design tokens (colors, typography, spacing)
├── atoms/               # Basic building blocks
│   ├── Button/
│   ├── Input/
│   ├── Label/
│   └── ...
├── molecules/           # Simple component combinations
│   ├── FormField/
│   ├── Card/
│   └── ...
├── organisms/           # Complex components
│   ├── Header/
│   ├── Footer/
│   └── ...
├── templates/           # Page layouts
│   ├── MainLayout/
│   ├── DashboardLayout/
│   └── ...
├── pages/              # Specific page implementations
│   ├── HomePage/
│   ├── DashboardPage/
│   └── ...
└── index.ts            # Main export file
```

## TypeScript Support

All components are fully typed with TypeScript:

```tsx
import { ButtonProps } from '@design-system/core';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Contributing

When adding new components:

1. **Follow Atomic Design** - Place components in the correct category
2. **Include TypeScript types** - All components should be fully typed
3. **Write CSS modules** - Keep styles scoped to components
4. **Add documentation** - Include usage examples
5. **Test accessibility** - Ensure WCAG compliance

## License

MIT
