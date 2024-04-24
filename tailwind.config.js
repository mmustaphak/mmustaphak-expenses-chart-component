/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'soft-red': 'hsl(var(--soft-red))',
        'cyan': 'hsl(var(--cyan))',
        'dark-brown': 'hsl(var(--dark-brown))',
        'medium-brown': 'hsl(var(--medium-brown))',
        'cream': 'hsl(var(--cream))',
        'pale-orange': 'hsl(var(--pale-orange))',
      }
    },
  },
  plugins: [],
}