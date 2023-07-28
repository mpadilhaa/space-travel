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
        "destination-bg-mobile":
          "url('/destination/background-destination-mobile.jpg')",
        "destination-bg-tablet":
          "url('/destination/background-destination-tablet.jpg')",
        "destination-bg-desktop":
          "url('/destination/background-destination-desktop.jpg')",
        "crew-bg-mobile": "url('/crew/background-crew-mobile.jpg')",
        "crew-bg-tablet": "url('/crew/background-crew-tablet.jpg')",
        "crew-bg-desktop": "url('/crew/background-crew-desktop.jpg')",
        "technology-bg-mobile":
          "url('/technology/background-technology-mobile.jpg')",
        "technology-bg-tablet":
          "url('/technology/background-technology-tablet.jpg')",
        "technology-bg-desktop":
          "url('/technology/background-technology-desktop.jpg')",
      },
    },
    colors: {
      "rgba-menu": "rgba(255, 255, 255, 0.04)",
    },
  },
  plugins: [],
};
