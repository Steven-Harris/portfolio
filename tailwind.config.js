module.exports = {
  purge: {
    content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    options: {
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
      ],
    },
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      gridTemplateColumns: {
        contributions: "50px auto 50px auto",
      },
      inset: {
        17: "68px",
        26: "104px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
