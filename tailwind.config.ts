import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        border: "var(--border)",
      },
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        ".custom_container": {
          padding: theme("spacing.8"),           // p-8 = 32px
          width: theme("width.full"),            // w-full = 100%
          maxWidth: theme("screens.xl"),         // max-w-xl = 1280px
          margin: theme("margin.auto"),          // mx-auto (centraliza)
        },
        ".custom_title": {
          fontSize: theme("fontSize.xl"),        // text-xl
          fontWeight: theme("fontWeight.bold"),  // font-bold
        },
        ".custom_description": {
          fontSize: theme("fontSize.base"),      // text-base
          fontWeight: theme("fontWeight.normal"),// font-normal
          color: theme("colors.muted.foreground"), // cor muted
        },
      });
    }),
  ],
}

export default config