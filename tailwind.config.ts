import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        /* Tech stack colors */
        android: {
          primary: "var(--android-primary)",
        },
        nextjs: {
          primary: "var(--nextjs-primary)",
        },
        laravel: {
          primary: "var(--laravel-primary)",
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
export default config;
