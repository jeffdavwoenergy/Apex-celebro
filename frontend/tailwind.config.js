/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
        extend: {
                fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
                        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
                },
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)'
                },
                colors: {
                        ink: {
                                DEFAULT: '#050A1E',
                                900: '#050A1E',
                                800: '#0A1330',
                                700: '#132049',
                                600: '#28345E',
                        },
                        brand: {
                                DEFAULT: '#1E48FF',
                                50: '#EEF2FF',
                                100: '#DCE4FF',
                                200: '#B7C6FF',
                                300: '#8AA0FF',
                                400: '#5A78FF',
                                500: '#3A5CFF',
                                600: '#1E48FF',
                                700: '#1536D6',
                                800: '#0F27A8',
                        },
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
                        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
                        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
                        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
                        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
                        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
                        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                },
                keyframes: {
                        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
                        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
                        'fade-up': { '0%': { opacity: '0', transform: 'translateY(16px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
                        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
                        'float': { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
                },
                animation: {
                        'accordion-down': 'accordion-down 0.2s ease-out',
                        'accordion-up': 'accordion-up 0.2s ease-out',
                        'fade-up': 'fade-up 0.6s ease-out both',
                        'fade-in': 'fade-in 0.8s ease-out both',
                        'float': 'float 7s ease-in-out infinite',
                }
        }
  },
  plugins: [require("tailwindcss-animate")],
};
