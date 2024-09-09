/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        NavBarBgColor: "#0C1019",
        BgContainerColor: "#142940",
        PopularMoviesTextColor: "#F5C618",
        PosterColor: "#1B4166",
        PaginationButton: "#07182A",
      },
    },
  },
  plugins: [],
};
