/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui"

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
    daisyui,
    require('@tailwindcss/typography'),
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
      },
      "dark",
      "cupcake",
    ],
  },
}
