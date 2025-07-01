"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Laptop } from "lucide-react";

const themes = [
  { label: "Light", value: "light", icon: <Sun className="w-4 h-4" /> },
  { label: "Dark", value: "dark", icon: <Moon className="w-4 h-4" /> },
  { label: "System", value: "system", icon: <Laptop className="w-4 h-4" /> },
];

export default function ThemeSwitcher() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 rounded-full p-2 bg-muted hover:bg-accent transition-colors border border-border shadow"
        aria-label="Toggle theme"
      >
        {current === "dark" ? <Moon className="w-5 h-5" /> : current === "light" ? <Sun className="w-5 h-5" /> : <Laptop className="w-5 h-5" />}
      </button>
      <div className="absolute right-0 mt-2 w-32 bg-popover border border-border rounded-xl shadow-lg opacity-0 group-hover:opacity-100 pointer-events-auto transition-opacity z-50">
        {themes.map((t) => (
          <button
            key={t.value}
            className={`flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-accent transition-colors ${theme === t.value ? "font-bold" : ""}`}
            onClick={() => setTheme(t.value)}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>
    </div>
  );
} 