// tailwind.config.js
module.exports  = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          "from": {
            tranform: "translateY(-0.75rem)",
            opacity: '0'
          },
          "to": {
            transform:"translateY(0rem)",
            opacity:'1'
          },
        },
      },
      animation : {
        'fade-in-down': "fade-in-down 0.2s ease-in-out both",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}