/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",     // Next.js 13+ app folder
    "./pages/**/*.{js,ts,jsx,tsx}",   // older pages folder
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],  // activate DaisyUI
  daisyui: {
    themes: [
      "light",
      "dark",
      {
        Theme: {
          "primary": "#7c3aed",
          "secondary": "#22d3ee",
          "accent": "#fcd34d",
          "neutral": "#191D24",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272"
        }
      }
    ]
  }
}

export default config;
