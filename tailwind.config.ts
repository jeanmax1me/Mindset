import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'mint': {
          100: '#f5fffa',
          200: '#d9f7e3',
          300: '#bcedc5',
          400: '#94e2a7',
          500: '#6cce89',
          600: '#51bb78',
          700: '#36a767',
          800: '#1b9356',
          900: '#007f45',
        },
      },
    },
  },
  plugins: [],
};
export default config;
