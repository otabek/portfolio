import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      gray: { DEFAULT: "#676767", 100: "#A1A1AA", 200: "#BCBCBC" },
    },
  },
  plugins: [],
};
export default config;
