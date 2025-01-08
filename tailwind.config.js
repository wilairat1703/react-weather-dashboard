/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, rgba(156, 189, 255, 0.68) 9%, rgba(98, 152, 254, 1) 69%)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

