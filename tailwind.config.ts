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
          primary: "#C60C30", 
          dark: "#121212",    // Daha yumuşak bir siyah
          cream: "#F9F9F7",   // Sıcak bir kırık beyaz
          paper: "#FFFFFF",
              },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        serif: ["var(--font-cinzel)"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;