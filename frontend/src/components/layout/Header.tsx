import { PersonalInfo } from "@/data/PersonalInfo";
import { Button } from "../ui/button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/themeContext";

const Header = () => {
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

  return (
    <header className="w-full py-4 border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4">
        <a
          href="#hero"
          className="text-xl font-semibold hover:text-primary transition-colors cursor-pointer"
          aria-label="Go to top"
        >
          {PersonalInfo.name}
        </a>
        <div className="flex gap-4 items-center">
          <a href="#about" className="text-sm hover:text-primary transition-colors font-medium">
            About
          </a>
          <a href="#projects" className="text-sm hover:text-primary transition-colors font-medium">
            Projects
          </a>
          <a href="#contact" className="text-sm hover:text-primary transition-colors font-medium">
            Contact
          </a>

          {/* Theme toggle */}
          <Button
            variant="outline"
            size="sm"
            aria-label={themeToggleLabel}
            onClick={() => {
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
            }}
          >
            <ThemeIcon theme={theme} />
          </Button>
        </div>
      </nav>
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
