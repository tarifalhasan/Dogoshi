import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "header-bg": "var(--header-bg)",
        "gradient-2":
          "linear-gradient(90deg, #DEAC00 0%, #ECBFBF 38.02%, #F40010 75.83%, #FDD755 100%)",
        g3: "linear-gradient(90deg, #DEAC00 0%, #ECBFBF 38.02%, #F40010 75.83%, #FDD755 100%) ",
        "f1-bulb":
          "linear-gradient(180deg, #DA323D 0%, rgba(228, 25, 39, 0.00) 100%)",
        "f2-bulp":
          "linear-gradient(180deg, #B7BA31 0%, rgba(185, 113, 61, 0.00) 100%)",
        gradient1: "linear-gradient(99deg, #FA7E07 40.51%, #F40010 109.42%)",
        g1: "linear-gradient(99deg, #FFD700 40.51%, #FA7E07 58.67%, #F40010 109.42%)",
        airdrop: "url('/images/airdrop.png')",
        airdropm: "url('/images/bg-airdrop-mobile.png')",

        "hero-bulp":
          "linear-gradient(180deg, #e37379 0%, rgba(228, 25, 39, 0.00) 100%)",
        tblub:
          "linear-gradient(180deg, #FF717B 0%, rgba(228, 25, 39, 0.00) 100%)",
      },
      colors: {
        "dark-50": "#E9F1EE",
        "gray-50": "#415162",
        secondary: {
          DEFAULT: "hsla(46, 100%, 44%, 1)",
          foreground: "hsla(0, 0%, 0%, 1)",
        },
        "dark-1000": "#060404",
        "yellow-50": "#DEAC00",
        border: "rgba(255, 255, 255, 0.20)",
        navbar: "rgba(255, 255, 255, 0.06)",
        blac: "rgba(0, 0, 0,2)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        red: "#F40010",
      },
      fontSize: {
        "t-28": "1.75em",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
