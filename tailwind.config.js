/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: "#09090b", // zinc-950
                "primary-light": "#18181b", // zinc-900
                secondary: "#a1a1aa", // zinc-400
                accent: "#f97316", // orange-500
                "accent-dark": "#ea580c", // orange-600
                "card-bg": "#18181b",
                "card-border": "#27272a", // zinc-800
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
        },
    },
    plugins: [],
}
