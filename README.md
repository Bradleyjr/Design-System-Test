# Atomic Design System

A comprehensive design system built on Brad Frost's Atomic Design principles, providing a shared language and reusable components for designers and developers.

## Overview

This design system follows the Atomic Design methodology, organizing components into five hierarchical levels:

- **Design Tokens** - Foundation (colors, typography, spacing, shadows)
- **Atoms** - Basic building blocks (Button, Input, Label, Heading, Text, Link)
- **Molecules** - Simple combinations (FormField, Card, Badge, Alert, SearchBar)
- **Organisms** - Complex components (Header, Footer, Hero, ContactForm)
- **Templates** - Page layouts (MainLayout, DashboardLayout, AuthLayout)
- **Pages** - Specific instances (HomePage, DashboardPage, LoginPage)

## Features

- ⚛️ **Atomic Design** - Organized, scalable component architecture
- 🎨 **Design Tokens** - Consistent design language with tokens
- ⚡ **TypeScript** - Fully typed for better DX
- 📱 **Responsive** - Mobile-first, works on all devices
- ♿ **Accessible** - Built with WCAG guidelines in mind
- 🔧 **Customizable** - Easy to extend and customize

## Quick Start

### Installation

```bash
npm install
```

### Build

```bash
npm run build
```

### Usage

```tsx
import { Button, Heading, MainLayout } from '@design-system/core';

function App() {
  return (
    <MainLayout
      headerProps={{
        brand: 'My App',
        navItems: [{ label: 'Home', href: '/' }]
      }}
    >
      <Heading level={1}>Welcome!</Heading>
      <Button variant="primary">Get Started</Button>
    </MainLayout>
  );
}
```

## Documentation

- **[Quick Start Guide](QUICK_START.md)** - Get started in minutes
- **[Design System Guide](DESIGN_SYSTEM_GUIDE.md)** - Comprehensive guide and best practices
- **[Component API Reference](COMPONENT_API.md)** - Detailed API documentation

## Project Structure

```
src/
├── tokens/              # Design tokens (colors, typography, spacing)
├── atoms/               # Basic building blocks
├── molecules/           # Simple component combinations
├── organisms/           # Complex components
├── templates/           # Page layouts
├── pages/              # Example page implementations
└── index.ts            # Main export
```

## Components

**34+ Total Components** across all atomic design levels

### Design Tokens (8 categories)
- Colors, Typography, Spacing, Shadows, Border Radius, Breakpoints, Animations, Z-Index

### Atoms (12 components)
- Button, Input, Label, Heading, Text, Link
- Checkbox, Radio, Textarea, Spinner, Avatar, Divider

### Molecules (10 components)
- FormField, Card, Badge, Alert, SearchBar
- Select, Tooltip, Pagination, Breadcrumbs, ProgressBar

### Organisms (6 components)
- Header, Footer, Hero, ContactForm
- Modal, Table

### Templates (3 layouts)
- MainLayout, DashboardLayout, AuthLayout

### Pages (3 examples)
- HomePage, DashboardPage, LoginPage

---

**✨ New in v1.1:** Added 13 new components including Checkbox, Radio, Textarea, Spinner, Avatar, Divider, Select, Tooltip, Pagination, Breadcrumbs, ProgressBar, Modal, and Table. See [CHANGELOG.md](CHANGELOG.md) for details.

## Technology Stack

- **React** - Component framework
- **TypeScript** - Type safety
- **CSS** - Styling (scoped with CSS modules pattern)

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Contributing

1. Follow Atomic Design principles
2. Include TypeScript types
3. Write scoped CSS
4. Add documentation
5. Ensure accessibility

## License

MIT
