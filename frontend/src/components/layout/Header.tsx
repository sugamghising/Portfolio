import { useState } from "react";
import { PersonalInfo } from "@/data/PersonalInfo";
import { Button } from "../ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/lib/themeContext";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Theme hook (optional) - provide a safe fallback if provider missing
  let theme: "light" | "dark" | undefined = undefined;
  let toggleFn: (() => void) | undefined = undefined;
  try {
    const ctx = useTheme();
    theme = ctx.theme;
    toggleFn = ctx.toggle;
  } catch {
    // provider not present; fallback handled below
  }
  const isDarkMode =
    theme === "dark" ||
    (theme == null &&
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark"));
  const themeToggleLabel = isDarkMode
    ? "Switch to light mode"
    : "Switch to dark mode";

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const closeMobile = () => setMobileOpen(false);

  const handleToggleTheme = () => {
    if (toggleFn) {
      toggleFn();
      return;
    }
    const root = document.documentElement;
    root.classList.toggle("dark");
    try {
      const isDark = root.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // Ignore localStorage failures in restricted environments.
    }
  };

  return (
    <header className="w-full py-4 border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4">
        <a
          href="/#hero"
          className="text-xl font-semibold hover:text-primary transition-colors cursor-pointer"
          aria-label="Go to top"
        >
          {PersonalInfo.name}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-4 items-center">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={`/${href}`} className="text-sm hover:text-primary transition-colors font-medium">
              {label}
            </a>
          ))}
          <Button
            variant="outline"
            size="sm"
            aria-label={themeToggleLabel}
            onClick={handleToggleTheme}
          >
            <ThemeIcon theme={theme} />
          </Button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            aria-label={themeToggleLabel}
            onClick={handleToggleTheme}
          >
            <ThemeIcon theme={theme} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4 py-6 px-4">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={`/${href}`}
                onClick={closeMobile}
                className="text-sm hover:text-primary transition-colors font-medium"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

function ThemeIcon({ theme }: { theme?: "light" | "dark" }) {
  if (theme)
    return theme === "dark" ? (
      <Moon className="w-4 h-4" />
    ) : (
      <Sun className="w-4 h-4" />
    );
  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");
  return isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />;
}

export default Header;
