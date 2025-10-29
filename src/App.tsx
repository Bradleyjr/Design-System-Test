import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/theme-toggle";
import { CheckCircle2, Copy, Menu, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  {
    id: "foundations",
    label: "Foundations",
    description:
      "Tokens and primitives that keep the interface consistent across the system.",
  },
  {
    id: "forms",
    label: "Forms",
    description:
      "Inputs, labels, and contextual actions for collecting information.",
  },
  {
    id: "navigation",
    label: "Navigation",
    description:
      "Menus and layout primitives that organize the gallery and demonstrate interactions.",
  },
  {
    id: "overlays",
    label: "Overlays",
    description: "Dialogs and layered surfaces that sit above the page content.",
  },
];

const buttonVariants = ["default", "secondary", "outline", "ghost", "link"] as const;

export default function App() {
  const [copied, setCopied] = useState(false);
  const [notifications, setNotifications] = useState({
    announcements: true,
    product: false,
  });

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText("npm install shadcn-ui");
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy command", error);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-card/40 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <Badge className="px-3 py-1 text-xs uppercase tracking-wide">shadcn/ui</Badge>
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold md:text-4xl">Component gallery</h1>
              <p className="max-w-xl text-base text-muted-foreground">
                Explore how reusable Shadcn components come together to form a cohesive
                design language. Toggle between themes and inspect states for each UI
                surface.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button onClick={handleCopy}>
                {copied ? <CheckCircle2 className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}Copy install command
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">View implementation guidelines</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Implementation checklist</DialogTitle>
                    <DialogDescription>
                      Keep the experience consistent when integrating components into new screens.
                    </DialogDescription>
                  </DialogHeader>
                  <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                    <li>Compose primitives with Tailwind tokens instead of custom CSS.</li>
                    <li>Respect focus states and motion preferences to maintain accessibility.</li>
                    <li>Document component ownership, contact channels, and usage do&apos;s and don&apos;ts.</li>
                  </ul>
                  <DialogFooter>
                    <Button variant="secondary">Download checklist</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="flex items-center gap-3 self-start md:self-center">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  <Menu className="h-4 w-4" />
                  Quick links
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>Jump to section</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {sections.map((section) => (
                  <DropdownMenuItem key={section.id} asChild>
                    <a href={`#${section.id}`}>{section.label}</a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={notifications.announcements}
                  onCheckedChange={(checked) =>
                    setNotifications((prev) => ({ ...prev, announcements: Boolean(checked) }))
                  }
                >
                  Product announcements
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={notifications.product}
                  onCheckedChange={(checked) =>
                    setNotifications((prev) => ({ ...prev, product: Boolean(checked) }))
                  }
                >
                  Release summaries
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Support
                  <DropdownMenuShortcut>⇧⌘H</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="container grid gap-12 py-12 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          <nav className="sticky top-24">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Sections
            </h2>
            <ScrollArea className="mt-4 h-[calc(100vh-12rem)] pr-4">
              <ul className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      asChild
                    >
                      <a href={`#${section.id}`}>{section.label}</a>
                    </Button>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </nav>
        </aside>

        <div className="space-y-16">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24 space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">{section.label}</h2>
                <p className="max-w-2xl text-sm text-muted-foreground">
                  {section.description}
                </p>
              </div>
              {section.id === "foundations" && <FoundationsDemo />}
              {section.id === "forms" && <FormsDemo />}
              {section.id === "navigation" && <NavigationDemo />}
              {section.id === "overlays" && <OverlaysDemo />}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

function FoundationsDemo() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="border-dashed">
        <CardHeader>
          <CardTitle>Button variants</CardTitle>
          <CardDescription>Each variant uses shared tokens for radius, spacing, and typography.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          {buttonVariants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Elevations</CardTitle>
          <CardDescription>Cards inherit the neutral background and adapt automatically in dark mode.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          {["Subtle", "Raised", "Outline", "Ghost"].map((tone, index) => (
            <div
              key={tone}
              className={cn(
                "rounded-lg border bg-background p-4 shadow-sm transition-shadow",
                index === 1 && "shadow-md",
                index === 2 && "border-dashed",
                index === 3 && "border-transparent bg-muted"
              )}
            >
              <p className="text-sm font-semibold">{tone}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {index === 1
                  ? "A stronger surface that works well on dashboards."
                  : index === 2
                  ? "Use sparingly to communicate an interactive region."
                  : index === 3
                  ? "Muted background with no explicit border."
                  : "Baseline card appearance."}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

function FormsDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback request</CardTitle>
        <CardDescription>Combine inputs, labels, and buttons to create consistent forms.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Ada Lovelace" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="ada@computation.io" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">What should we improve?</Label>
          <Textarea id="message" placeholder="Share your experience with the latest release" />
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <p className="text-xs text-muted-foreground">
          Responses sync to the product research board every Friday.
        </p>
        <Button>
          <Send className="mr-2 h-4 w-4" />Submit
        </Button>
      </CardFooter>
    </Card>
  );
}

function NavigationDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Content tabs</CardTitle>
        <CardDescription>
          Tabs wrap focusable triggers around panels, ensuring keyboard users can explore content efficiently.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="files">Files</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Present high-level context and metrics without overwhelming detail.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {["Active experiments", "Design partners", "Release velocity"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-dashed bg-muted/40 p-4 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="schedule" className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Surface the next events with lightweight metadata and quick actions.
            </p>
            <div className="space-y-3">
              {["Roadmap review — Tue", "Design QA — Wed", "Launch retro — Fri"].map(
                (event) => (
                  <div
                    key={event}
                    className="flex items-center justify-between rounded-lg border bg-background p-3 text-sm"
                  >
                    <span>{event}</span>
                    <Button size="sm" variant="ghost">
                      View
                    </Button>
                  </div>
                )
              )}
            </div>
          </TabsContent>
          <TabsContent value="files" className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Keep shared documentation discoverable with tags and ownership.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between rounded-md border border-dashed px-4 py-3">
                <span>Product brief</span>
                <Badge variant="secondary">Figma</Badge>
              </div>
              <div className="flex items-center justify-between rounded-md border border-dashed px-4 py-3">
                <span>Engineering handoff</span>
                <Badge variant="secondary">Docs</Badge>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

function OverlaysDemo() {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dialog patterns</CardTitle>
        <CardDescription>
          Showcase layered surfaces with consistent spacing, typography, and motion.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Launch modal</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Invite collaborators</DialogTitle>
              <DialogDescription>
                Add teammates to grant them access to this gallery workspace.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="collaborator-email">Email address</Label>
                <Input id="collaborator-email" placeholder="mira@design.studio" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Optional message" />
              </div>
            </div>
            <DialogFooter className="sm:justify-between">
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button>
                <Send className="mr-2 h-4 w-4" />Send invite
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
