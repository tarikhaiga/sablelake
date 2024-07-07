/** @type {import('tailwindcss').Config} */
import preline from "preline/plugin.js";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./public/**/*.astro",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'hunter-green': {
          '50': '#f5f6ef',
          '100': '#e8ebdc',
          '200': '#d2d9bd',
          '300': '#b5c096',
          '400': '#99a873',
          '500': '#7d8c56',
          '600': '#616e42',
          '700': '#4b5635',
          '800': '#3d462e',
          '900': '#1d2215',
        },
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
        clashdisplay: ['ClashDisplay-Variable', 'sans-serif'],
      },
    },
  },
  plugins: [preline],
};
