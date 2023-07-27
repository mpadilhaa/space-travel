/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg-mobile": "url('/home/background-home-mobile.jpg')",
        "home-bg-tablet": "url('/home/background-home-tablet.jpg')",
        "home-bg-desktop": "url('/home/background-home-desktop.jpg')",
      },
    },
    colors: {
      "rgba-menu": "rgba(255, 255, 255, 0.04)",
    },
  },
  plugins: [],
};
