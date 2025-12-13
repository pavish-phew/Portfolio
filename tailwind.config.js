/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0B0C15", // Very deep navy/black
                "primary-light": "#151621",
                secondary: "#CBD5E1", // Brighter gray (slate-300) for better contrast
                accent: "#38BDF8", // Electric Blue
                "accent-dark": "#0EA5E9",
                "card-bg": "rgba(255, 255, 255, 0.03)",
                "card-border": "rgba(255, 255, 255, 0.08)",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
            }
        },
    },
    plugins: [],
}
