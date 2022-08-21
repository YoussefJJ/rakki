/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      maxWidth: {
        '4/5': '80%',
      },
      colors: {
        darkGreen: 'rgb(63,109,78)',
        brightGreen: 'rgb(139,212,80)',
        veryDarkPurple: 'rgb(29,26,47)',
        brightPurple: 'rgb(150,95,212)',
        darkPurple: 'rgb(115,79,154)'
      },
      boxShadow: {
        
        'greenRecShadow-sm': '-4px -4px 2px 1px rgb(139,212,80), -4px -4px 0px 3px black',
        'greenRecShadow-md': '-7px -7px 2px 1px rgb(139,212,80), -7px -7px 0px 3px black',
        'greenRecShadow-lg': '12px 12px 2px 1px rgb(139,212,80), 12px 12px 0px 3px black',
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/line-clamp")
  ],
  variants: {
    scrollbar: ['rounded']
  }
}
