import { Card, CardDescription, CardHeader, CardTitle, Button } from '@design-system/ui';

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-8 py-16">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-brand">Design System</p>
        <h1 className="text-4xl font-semibold">Foundation</h1>
        <p className="text-lg text-slate-600">
          A unified component library for building multi-tenant SaaS experiences. The documentation provides best practices,
          accessibility guidelines, and usage examples.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>Primary actions that align with your brand identity.</CardDescription>
          </CardHeader>
          <div className="flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cards</CardTitle>
            <CardDescription>Structure content and dashboards with ease.</CardDescription>
          </CardHeader>
          <Card className="border-dashed border-gray-300 bg-gray-50">
            <CardHeader>
              <CardTitle className="text-base">Example card</CardTitle>
              <CardDescription className="text-xs">Compose modular dashboard surfaces</CardDescription>
            </CardHeader>
          </Card>
        </Card>
      </section>
    </main>
  );
}
