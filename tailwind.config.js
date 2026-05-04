/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#f5c842',
        'gold-dark': '#d4a82e',
        'gold-light': '#fad55c',
        surface: '#0f0f0f',
        border: '#1c1c1c',
        muted: '#555555',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
        bebas: ['Bebas Neue', 'cursive'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,200,66,0.07) 0%, transparent 70%)',
        'cta-glow': 'radial-gradient(circle, rgba(245,200,66,0.08) 0%, transparent 70%)',
      },
      animation: {
        ticker: 'ticker 25s linear infinite',
        pulse_slow: 'pulse 3s infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
