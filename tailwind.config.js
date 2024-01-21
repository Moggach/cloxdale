/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gogh: ['Gogh', 'sans'], 
      },
      spacing: {
        '20': '20px',
        '40': '40px',
        '60': '60px',
        '80': '80px',
        '120': '120px',
      },
      gap: (theme) => theme('spacing'), // Use custom spacing values for flex gap
    },
  },
  plugins: [],
}
