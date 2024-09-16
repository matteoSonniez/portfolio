/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        redbutt: "#F93434",
        blackbg: "#131212",
        blackmenu: "#2A2929",
        textmenu: "#4A4949",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Direct: ['Direct', 'sans-serif'],
        Font2: ['font2', 'sans-serif'],
        Title: ['Title', 'sans-serif'],
      },
      textShadow: {
        'custom': '5px 5px 7px rgba(0, 0, 0, 0.3)', // Ombre personnalisée pour tes lettres
      },

    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
