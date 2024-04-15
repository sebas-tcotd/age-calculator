/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      primary: {
        purple: "hsl(259, 100%, 65%)",
        "light-red": "hsl(0, 100%, 67%)",
      },
      neutral: {
        white: "hsl(0, 0%, 100%)",
        "off-white": "hsl(0, 0%, 94%)",
        "light-grey": "hsl(0, 0%, 86%)",
        "smoke-grey": "hsl(0, 1%, 44%)",
        "off-black": "hsl(0, 0%, 8%)",
      },
    },
    fontWeight: {
      regular: 400,
      bold: 700,
      "extra-bold": 800,
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1.25rem",
      "base-lg": "2rem",
      lg: "3.438rem",
      xl: "6.5rem",
    },
    fontFamily: {
      sans: [
        "Poppins",
        "system-ui",
        "ui-sans-serif",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
    letterSpacing: {
      1: "0.01rem",
      2: "0.02rem",
      25: "0.25rem",
    },
    borderRadius: {
      DEFAULT: "0.5rem",
      lg: "1.25rem",
      xl: "6.25rem",
      "2xl": "12.5rem",
      full: "100%",
    },
  },
  extend: {},

  plugins: [],
};
