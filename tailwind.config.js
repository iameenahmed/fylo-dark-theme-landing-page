/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "hsl(217, 28%, 15%)",
        main: "hsl(218, 28%, 13%)",
        footer: "hsl(216, 53%, 9%)",
        testimonials: "hsl(219, 30%, 18%)",
        cyan: "hsl(176, 68%, 64%)",
        blue: "hsl(198, 60%, 50%)",
        "light-red": "hsl(0, 100%, 63%)",
      },
      backgroundImage: {
        arrow: "url('/src/assets/icon-arrow.svg')",
        quote: "url('/src/assets/bg-quotes.png')",
        desktop: "url('/src/assets/bg-curvy-desktop.svg')",
        mobile: "url('/src/assets/bg-curvy-mobile.svg')",
      },
    },
  },
  plugins: [],
};
