module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightRed: "#FFEADF",
        brightRed: "#E71E1E",
        softWhite: "#FFFDFD",
        grey: "#EFEFEF",
        brightGreen: "#48bf53",
        darkerGrey: "#D6D6D6",
      },
      fontFamily: {
        display: ["BalooThambi2Bold"],
        text: ["ArialRoundedMTBold"],
      },
      spacing: {
        534: "534px",
        565: "565px",
        1000: "1000px",
        5: "5%",
        50: "50%",
      },
      screens: {
        "xsm": "400px",
        "3xl": "1808px",
      }
    },
  },
  plugins: [],
};