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
      },
      colors: {
        "dark-50": "#E9F1EE",
        secondary: {
          DEFAULT: "hsla(46, 100%, 44%, 1)",
          foreground: "hsla(0, 0%, 0%, 1)",
        },
      },
      fontSize: {
        "t-28": "1.75em",
      },
    },
  },
  plugins: [],
};
export default config;
