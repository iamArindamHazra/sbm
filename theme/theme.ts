/**
 * Violet + neon theme for 2026 glassmorphism redesign.
 * Primary violet, neon accents, dark background for glass and neon contrast.
 */
import type { Config } from "tailwindcss";

export const baseTheme: Partial<Config["theme"]> = {
  extend: {
    colors: {
      primary: "#7c3aed",
      "primary-dark": "#5b21b6",
      "primary-light": "#8b5cf6",
      accent: "#a78bfa",
      neon: "#c4b5fd",
      "neon-glow": "#e9d5ff",
      background: "#0f0a1e",
      "background-alt": "#1a1029",
      "background-muted": "#251a35",
      surface: "rgba(139, 92, 246, 0.08)",
      "surface-hover": "rgba(139, 92, 246, 0.15)",
    },
    fontFamily: {
      sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      display: ["var(--font-outfit)", "Outfit", "sans-serif"],
    },
    borderRadius: {
      DEFAULT: "0.5rem",
      lg: "0.75rem",
      xl: "1rem",
      "2xl": "1.25rem",
    },
    boxShadow: {
      card: "0 4px 24px -4px rgba(0, 0, 0, 0.3), 0 8px 32px -8px rgba(0, 0, 0, 0.2)",
      glass: "0 8px 32px rgba(0, 0, 0, 0.2)",
      "neon-sm": "0 0 20px rgba(167, 139, 250, 0.3)",
      "neon-md": "0 0 30px rgba(167, 139, 250, 0.4)",
      "neon-lg": "0 0 40px rgba(167, 139, 250, 0.35)",
      navbar: "0 4px 24px rgba(0, 0, 0, 0.2)",
    },
    backdropBlur: {
      xs: "2px",
    },
  },
};
