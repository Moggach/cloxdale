/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gogh: ['Gogh', 'sans'], 
        roboto: ['Roboto', 'sans-serif'], 
      },
      spacing: {
        '20': '20px',
        '40': '40px',
        '60': '60px',
        '80': '80px',
        '120': '120px',
      },
      gap: (theme) => theme('spacing'), 
      fontSize: {
        'base': '16px',    
        'lg': '24px',   
        'xl': '32px',   
        '2xl': '48px',   
        '3xl': '64px',
      },
      colors: {
        neonGreen: '#39ff14', 
      },
      width: {
        'content': 'max-content', // Add a custom width utility
      },

    },
  },
  plugins: [],
}

