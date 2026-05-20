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
        green: {
          brand: '#3BAA2A',
          dark:  '#2D8A20',
          deeper:'#1A5C12',
        },
        bg: {
          dark:   '#0E1A0C',
          mid:    '#142110',
          card:   '#1A2B16',
          surface:'#1F3319',
        },
        cream: '#FAFAF8',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
        impact:  ['var(--font-impact)', 'Arial Black', 'sans-serif'],
      },
      animation: {
        'ticker':      'ticker 34s linear infinite',
        'fade-up':     'fadeUp 0.9s ease forwards',
        'fade-in':     'fadeIn 1s ease forwards',
        'scroll-pulse':'scrollPulse 2s ease infinite',
        'bar-grow':    'barGrow 0.9s ease forwards',
      },
      keyframes: {
        ticker: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scaleY(0.8)' },
          '50%':      { opacity: '1',   transform: 'scaleY(1)' },
        },
        barGrow: {
          from: { height: '0' },
          to:   { height: 'var(--bar-height)' },
        },
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(ellipse 90% 70% at 55% 40%, rgba(59,170,42,0.16) 0%, transparent 65%), linear-gradient(165deg, #0E1A0C 0%, #111F0E 40%, #0A1408 70%, #0E1A0C 100%)',
        'grid-green':
          'linear-gradient(rgba(59,170,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,170,42,0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
