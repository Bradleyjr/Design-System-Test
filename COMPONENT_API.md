# Component API Reference

Complete reference for all components in the design system.

## Atoms

### Button

Interactive button component with multiple variants and states.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `fullWidth` | `boolean` | `false` | Full width button |
| `loading` | `boolean` | `false` | Loading state with spinner |
| `disabled` | `boolean` | `false` | Disabled state |
| `leftIcon` | `React.ReactNode` | - | Icon on the left |
| `rightIcon` | `React.ReactNode` | - | Icon on the right |

**Example:**
```tsx
<Button variant="primary" size="lg" loading={isLoading}>
  Save Changes
</Button>
```

---

### Input

Text input field with validation states and icons.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size |
| `error` | `boolean` | `false` | Error state styling |
| `fullWidth` | `boolean` | `false` | Full width input |
| `leftIcon` | `React.ReactNode` | - | Icon on the left |
| `rightIcon` | `React.ReactNode` | - | Icon on the right |

Extends all native input HTML attributes.

**Example:**
```tsx
<Input
  type="email"
  placeholder="your@email.com"
  error={hasError}
  leftIcon={<EmailIcon />}
/>
```

---

### Label

Form label with optional required indicator.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `required` | `boolean` | `false` | Show required asterisk |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Label size |

**Example:**
```tsx
<Label htmlFor="email" required>
  Email Address
</Label>
```

---

### Heading

Semantic heading component (h1-h6).

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | **required** | Heading level |
| `as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | - | Override semantic tag |
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | Text alignment |

**Example:**
```tsx
<Heading level={1} align="center">
  Welcome to Our Site
</Heading>
```

---

### Text

Versatile text component for paragraphs and inline text.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `'p' \| 'span' \| 'div' \| 'strong' \| 'em' \| 'small'` | `'p'` | HTML element |
| `size` | `'xs' \| 'sm' \| 'base' \| 'lg' \| 'xl'` | `'base'` | Text size |
| `weight` | `'normal' \| 'medium' \| 'semibold' \| 'bold'` | `'normal'` | Font weight |
| `color` | `'default' \| 'muted' \| 'primary' \| 'success' \| 'error' \| 'warning'` | `'default'` | Text color |
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | Text alignment |

**Example:**
```tsx
<Text size="lg" weight="semibold" color="primary">
  Important message
</Text>
```

---

### Link

Hyperlink component with variants.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'subtle' \| 'primary'` | `'default'` | Link style variant |
| `external` | `boolean` | `false` | External link (opens new tab) |
| `underline` | `'always' \| 'hover' \| 'none'` | `'hover'` | Underline behavior |

**Example:**
```tsx
<Link href="/docs" variant="primary" underline="always">
  Documentation
</Link>
```

---

## Molecules

### FormField

Complete form field with label, input, and error/helper text.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | **required** | Field label |
| `required` | `boolean` | `false` | Required field indicator |
| `helperText` | `string` | - | Helper text below input |
| `error` | `string` | - | Error message |
| `inputProps` | `InputProps` | - | Props for the input |
| `labelProps` | `LabelProps` | - | Props for the label |

**Example:**
```tsx
<FormField
  label="Email"
  required
  helperText="We'll never share your email"
  error={errors.email}
  inputProps={{
    type: 'email',
    value: email,
    onChange: (e) => setEmail(e.target.value)
  }}
/>
```

---

### Card

Container component with header, body, and footer sections.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'outlined' \| 'elevated'` | `'default'` | Card style variant |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Internal padding |
| `clickable` | `boolean` | `false` | Adds hover effect |

**Sub-components:** `CardHeader`, `CardBody`, `CardFooter`

**Example:**
```tsx
<Card variant="elevated" padding="lg">
  <CardHeader>
    <Heading level={3}>Title</Heading>
  </CardHeader>
  <CardBody>
    <Text>Content goes here</Text>
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

---

### Badge

Small status or label indicator.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'success' \| 'error' \| 'warning' \| 'info'` | `'default'` | Badge color variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Badge size |
| `dot` | `boolean` | `false` | Dot badge (no content) |

**Example:**
```tsx
<Badge variant="success" size="sm">Active</Badge>
```

---

### Alert

Notification or message component.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Alert type |
| `title` | `string` | - | Alert title |
| `dismissible` | `boolean` | `false` | Show close button |
| `onDismiss` | `() => void` | - | Callback on dismiss |

**Example:**
```tsx
<Alert variant="success" title="Success!" dismissible>
  Your changes have been saved.
</Alert>
```

---

### SearchBar

Search input with optional search button.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onSearch` | `(value: string) => void` | - | Search callback |
| `showButton` | `boolean` | `true` | Show search button |
| `buttonText` | `string` | `'Search'` | Button text |
| `placeholder` | `string` | `'Search...'` | Input placeholder |

**Example:**
```tsx
<SearchBar
  onSearch={(value) => console.log(value)}
  placeholder="Search products..."
/>
```

---

## Organisms

### Header

Site header with navigation and actions.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `brand` | `React.ReactNode` | `'Brand'` | Brand name or logo |
| `navItems` | `Array<{label: string, href: string}>` | `[]` | Navigation items |
| `actions` | `React.ReactNode` | - | Right-side actions |
| `fixed` | `boolean` | `false` | Fixed position header |

**Example:**
```tsx
<Header
  brand="MyApp"
  navItems={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' }
  ]}
  actions={<Button>Sign In</Button>}
/>
```

---

### Footer

Site footer with sections and social links.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sections` | `FooterSection[]` | `[]` | Footer link sections |
| `copyright` | `string` | - | Copyright text |
| `socialLinks` | `Array<{label, href, icon?}>` | `[]` | Social media links |

**Example:**
```tsx
<Footer
  sections={[
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' }
      ]
    }
  ]}
  copyright="© 2024 MyApp"
/>
```

---

### Hero

Hero section with title, subtitle, and call-to-action.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **required** | Hero title |
| `subtitle` | `string` | - | Hero subtitle |
| `actions` | `React.ReactNode` | - | CTA buttons |
| `backgroundImage` | `string` | - | Background image URL |
| `align` | `'left' \| 'center'` | `'center'` | Content alignment |
| `size` | `'md' \| 'lg'` | `'lg'` | Hero size |

**Example:**
```tsx
<Hero
  title="Build Amazing Things"
  subtitle="Get started today"
  actions={
    <>
      <Button variant="primary">Get Started</Button>
      <Button variant="outline">Learn More</Button>
    </>
  }
/>
```

---

### ContactForm

Complete contact form with validation.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onSubmit` | `(data: ContactFormData) => void \| Promise<void>` | - | Submit callback |
| `loading` | `boolean` | `false` | Loading state |
| `successMessage` | `string` | - | Success message |
| `errorMessage` | `string` | - | Error message |

**Example:**
```tsx
<ContactForm
  onSubmit={async (data) => {
    await sendEmail(data);
  }}
  successMessage="Message sent!"
/>
```

---

## Templates

### MainLayout

Standard page layout with header and footer.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `headerProps` | `HeaderProps` | - | Header configuration |
| `footerProps` | `FooterProps` | - | Footer configuration |
| `containerWidth` | `'full' \| 'contained'` | `'contained'` | Content width |
| `children` | `React.ReactNode` | **required** | Page content |

---

### DashboardLayout

Dashboard layout with sidebar navigation.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `headerProps` | `HeaderProps` | - | Header configuration |
| `navItems` | `DashboardNavItem[]` | `[]` | Sidebar navigation |
| `sidebarCollapsed` | `boolean` | `false` | Collapsed sidebar |
| `children` | `React.ReactNode` | **required** | Page content |

---

### AuthLayout

Centered authentication layout.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **required** | Page title |
| `subtitle` | `string` | - | Page subtitle |
| `logo` | `React.ReactNode` | - | Logo or brand |
| `footerLink` | `{text, linkText, href}` | - | Footer link |
| `children` | `React.ReactNode` | **required** | Form content |

---

## Design Tokens

### Colors

```typescript
colors.primary[50-900]
colors.secondary[50-900]
colors.neutral[0-1000]
colors.success[50-900]
colors.error[50-900]
colors.warning[50-900]
colors.info[50-900]
```

### Typography

```typescript
typography.fontFamily.sans | serif | mono
typography.fontSize.xs | sm | base | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | 7xl | 8xl | 9xl
typography.fontWeight.thin | extralight | light | normal | medium | semibold | bold | extrabold | black
typography.lineHeight.none | tight | snug | normal | relaxed | loose
```

### Spacing

```typescript
spacing[0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64]
```

### Shadows

```typescript
shadows.none | sm | base | md | lg | xl | 2xl | inner
```

### Border Radius

```typescript
borderRadius.none | sm | base | md | lg | xl | 2xl | 3xl | full
```
