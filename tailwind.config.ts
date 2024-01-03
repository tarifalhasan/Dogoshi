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
      },
      fontSize: {
        "t-28": "1.75em",
      },
    },
  },
  plugins: [],
};
export default config;
