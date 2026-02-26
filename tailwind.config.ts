import type { Config } from "tailwindcss";
import { baseTheme } from "./theme/theme";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: baseTheme?.extend ?? {},
  },
  plugins: [],
};

export default config;
