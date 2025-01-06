export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./src/**/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'hero-top': '#1B4D3E',
        'hero-bottom': '#2A4D3E',
        'features-bg': '#1B2B1B',
        'card-bg': 'rgba(0, 0, 0, 0.2)',
        'text-primary': '#4CAF50',
        'text-muted': '#A0AEC0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        khand: ['Khand', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 