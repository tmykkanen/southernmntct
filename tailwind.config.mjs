/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
import daisyui from "daisyui"

export default {
	content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    'node_modules/preline/dist/*.js',
  ],
	theme: {
		extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', ...fontFamily.sans]
      }
    },
	},
	plugins: [
    daisyui,
    require('@tailwindcss/typography'),
    require('preline/plugin')
  ],
  daisyui: {
    themes: [
      {
        custom: {
          "primary": "#222831",
          "secondary": "#393E46",
          "accent": "#00ADB5",
          "neutral": "#fff",
          "base-100": "#EEEEEE",
        },
        customdark: {
          "primary": "#222831",
          "secondary": "#393E46",
          "accent": "#00ADB5",
          "neutral": "#eeeeee",
          "base-100": "#222831",
        },
      },
      "dark",
      "cupcake",
    ],
  },
};
