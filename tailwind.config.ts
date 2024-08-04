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
        primary: "#1B1B1B",
        secondary: "#EDEDED",
        background: "#FFFFFF",
        text: "#000000",
        border: "#B3B2B2",
      },
    },
    // spacing: {
    //   "400": "16px",
    //   "200": "6px",
    // },
    borderRadius: {
      "400": "4px",
    },
  },
  plugins: [],
};
export default config;
