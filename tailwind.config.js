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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        colorLop: "colorLop 32s linear infinite",
      },
      keyframes: {
        colorLop: {
          "0%": { backgroundColor: "#ffda79" },
          "25%": { backgroundColor: "#ffabe7" },
          "50%": { backgroundColor: "#d2bcfe" },
          "75%": { backgroundColor: "#edf3d8" },
          "100%": { backgroundColor: "#ffda79" },
        },
      },
    },
    fontFamily: {
      monaSans: ['"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'],
      sourceSerife: ['"Source Serif 4", Georgia, serif'],
    },
  },
  plugins: [],
};
