import { defineConfig, presetUno, presetAttributify, presetWebFonts } from "unocss";

export default defineConfig({
  theme: {
    fontFamily: {
      sans: 'Satoshi'
    },
    colors: {
      gray: {
        50: "#FAFAFA",
        100: "#F5F5F5",
        200: "#E5E5E5",
        300: "#D4D4D4",
        400: "#A3A3A3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
      darkslate: {
        50: "#3D3D3D",
        100: "#2C2C2C",
        200: "#262626",
        300: "#202020",
        400: "#1A1A1A",
        500: "#171717" /* Exactly your example for the background */,
        600: "#141414",
        700: "#111111",
        800: "#0E0E0E",
        900: "#0B0B0B" /* Deeper and darker */,
      },
      primary: {
        100: "#EDF2FB",
        200: "#E2EAFC",
        300: "#D7E3FC",
        400: "#CCDBFD",
        500: "#C1D3FE",
        600: "#B6CCFE",
        700: "#ABC4FF",
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      provider: 'fontshare',
      fonts: {
        sans: 'Satoshi',
      }
    })
  ],
});
