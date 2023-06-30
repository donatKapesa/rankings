/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#030303',
        'primary-light': '#333333',
        alt: '#737373',
      },
      fontFamily: {
        openSans: ['var(--font-open-sans)']
      },
      backgroundImage: {
        'metallic-gold': "url('/metallic-gold-bg.jpg')"
      },
      container: {
        center: true,
        screens: {
          sm: '100%',
          md: '100%',
          lg: '600px',
          xl: '600px',
          '2xl': '600px',
        },
      },
      boxShadow: {
        'custom': '0px 2px 10px rgba(3, 3, 3, 0.1)',
        'button': '0px 0px 10px rgba(3, 3, 3, 0.1)'
      }
    },
  },
  plugins: [],
}
