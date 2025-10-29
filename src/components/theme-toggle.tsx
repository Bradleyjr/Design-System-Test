import * as React from "react";
import { MoonStar, SunMedium } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const root = window.document.documentElement;
    const stored = window.localStorage.getItem("preferred-theme");
    if (stored === "dark") {
      root.classList.add("dark");
      setIsDark(true);
    } else if (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      root.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const handleChange = (checked: boolean) => {
    const root = window.document.documentElement;
    setIsDark(checked);
    root.classList.toggle("dark", checked);
    window.localStorage.setItem("preferred-theme", checked ? "dark" : "light");
  };

  return (
    <label
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium",
        className
      )}
    >
      <SunMedium className={cn("h-4 w-4", isDark && "opacity-50")} />
      <span className="sr-only">Toggle theme</span>
      <Switch checked={isDark} onCheckedChange={handleChange} />
      <MoonStar className={cn("h-4 w-4", !isDark && "opacity-50")} />
    </label>
  );
}
