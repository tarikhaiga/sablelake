/** @type {import('tailwindcss').Config} */
import preline from "preline/plugin.js";
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./public/**/*.astro",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [preline],
};
