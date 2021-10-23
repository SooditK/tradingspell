const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "custom-green": "#d0efbf",
        "custom-darkGreen": "#6ea74f",
        "custom-chatak": "#42b403",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
